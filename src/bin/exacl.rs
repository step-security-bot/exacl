//! Program to get/set extended ACL's on MacOS.
//!
//! To read an ACL from myfile and write it to stdout as JSON:
//!     exacl myfile
//!
//! To set the ACL for myfile from JSON passed via stdin (complete replacement):
//!     exacl --set myfile
//!

use env_logger;
use exacl::{read_acl, validate_acl, write_acl, Acl};
use serde_json;
use std::io;
use std::path::{Path, PathBuf};
use std::process;
use structopt::StructOpt;

#[derive(Debug, StructOpt)]
#[structopt(name = "exacl", about = "Read or write a file's ACL.")]
struct Opt {
    /// Set file's ACL.
    #[structopt(long)]
    set: bool,

    /// Input files
    #[structopt(parse(from_os_str))]
    files: Vec<PathBuf>,
}

const EXIT_SUCCESS: i32 = 0;
const EXIT_FAILURE: i32 = 1;

fn main() {
    env_logger::init();

    let opt = Opt::from_args();
    let exit_code = if opt.set {
        set_acl(&opt.files)
    } else {
        get_acl(&opt.files)
    };

    process::exit(exit_code);
}

fn get_acl(files: &Vec<PathBuf>) -> i32 {
    for file in files {
        let result = dump_acl(file);
        if let Err(err) = result {
            eprintln!("File {:?}: {}", file, err);
            return EXIT_FAILURE;
        }
    }

    EXIT_SUCCESS
}

fn set_acl(files: &Vec<PathBuf>) -> i32 {
    let reader = io::BufReader::new(io::stdin());
    let acl: Acl = match serde_json::from_reader(reader) {
        Ok(acl) => acl,
        Err(err) => {
            eprintln!("JSON parser error: {}", err);
            return EXIT_FAILURE;
        }
    };

    if let Some(msg) = validate_acl(&acl) {
        eprintln!("Invalid ACL: {}", msg);
        return EXIT_FAILURE;
    }

    for file in files {
        let result = write_acl(file, &acl);
        if let Err(err) = result {
            eprintln!("File {:?}: {}", file, err);
            return EXIT_FAILURE;
        }
    }

    EXIT_SUCCESS
}

fn dump_acl(file: &Path) -> io::Result<()> {
    let acl = read_acl(file)?;
    serde_json::to_writer(io::stdout(), &acl)?;
    println!(); // add newline
    Ok(())
}
