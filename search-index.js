var searchIndex = JSON.parse('{\
"exacl":{"doc":"exaclManipulate file system access control lists (ACL) on …","i":[[3,"Acl","exacl","Access Control List native object wrapper.",null,null],[3,"AclOption","","Controls how ACL\'s are accessed.",null,null],[3,"AclEntry","","ACL entry with allow/deny semantics.",null,null],[12,"kind","","Kind of entry (User, Group, Other, Mask, or Unknown).",0,null],[12,"name","","Name of the principal being given access. You can use a …",0,null],[12,"perms","","Permission bits for the entry.",0,null],[12,"flags","","Flags indicating whether an entry is inherited, etc.",0,null],[12,"allow","","True if entry is allowed; false means deny. Linux only …",0,null],[4,"AclEntryKind","","Kind of ACL entry (User, Group, Mask, Other, or Unknown).",null,null],[13,"User","","Entry represents a user.",1,null],[13,"Group","","Entry represents a group.",1,null],[13,"Mask","","Entry represents a Posix.1e \\\"mask\\\" entry.",1,null],[13,"Other","","Entry represents a Posix.1e \\\"other\\\" entry.",1,null],[13,"Unknown","","Entry represents a possibly corrupt ACL entry, caused by …",1,null],[3,"Flag","","Represents ACL entry inheritance flags.",null,null],[3,"Perm","","Represents file access permissions.",null,null],[5,"getfacl","","Get access control list (ACL) for a file or directory.",null,[[],[["result",6],["vec",3]]]],[5,"setfacl","","Set access control list (ACL) for specified files and …",null,[[],["result",6]]],[5,"to_writer","","Write ACL entries to text.",null,[[["write",8]],["result",6]]],[5,"from_reader","","Read ACL entries from text.",null,[[["read",8]],[["result",6],["vec",3]]]],[5,"to_string","","Write ACL entries to text.",null,[[],[["result",6],["string",3]]]],[5,"from_str","","Read ACL entries from text.",null,[[],[["result",6],["vec",3]]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"drop","","",3,[[]]],[11,"extend","","",2,[[["intoiterator",8]]]],[11,"extend","","",4,[[["intoiterator",8]]]],[11,"extend","","",5,[[["intoiterator",8]]]],[11,"clone","","",2,[[],["acloption",3]]],[11,"clone","","",1,[[],["aclentrykind",4]]],[11,"clone","","",0,[[],["aclentry",3]]],[11,"clone","","",4,[[],["flag",3]]],[11,"clone","","",5,[[],["perm",3]]],[11,"default","","",2,[[],["acloption",3]]],[11,"default","","",4,[[],["flag",3]]],[11,"default","","",5,[[],["perm",3]]],[11,"cmp","","",2,[[["acloption",3]],["ordering",4]]],[11,"cmp","","",1,[[["aclentrykind",4]],["ordering",4]]],[11,"cmp","","",0,[[],["ordering",4]]],[11,"cmp","","",4,[[["flag",3]],["ordering",4]]],[11,"cmp","","",5,[[["perm",3]],["ordering",4]]],[11,"eq","","",2,[[["acloption",3]]]],[11,"ne","","",2,[[["acloption",3]]]],[11,"eq","","",1,[[["aclentrykind",4]]]],[11,"eq","","",0,[[["aclentry",3]]]],[11,"ne","","",0,[[["aclentry",3]]]],[11,"eq","","",4,[[["flag",3]]]],[11,"ne","","",4,[[["flag",3]]]],[11,"eq","","",5,[[["perm",3]]]],[11,"ne","","",5,[[["perm",3]]]],[11,"partial_cmp","","",2,[[["acloption",3]],[["option",4],["ordering",4]]]],[11,"lt","","",2,[[["acloption",3]]]],[11,"le","","",2,[[["acloption",3]]]],[11,"gt","","",2,[[["acloption",3]]]],[11,"ge","","",2,[[["acloption",3]]]],[11,"partial_cmp","","",1,[[["aclentrykind",4]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",0,[[],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",4,[[["flag",3]],[["option",4],["ordering",4]]]],[11,"lt","","",4,[[["flag",3]]]],[11,"le","","",4,[[["flag",3]]]],[11,"gt","","",4,[[["flag",3]]]],[11,"ge","","",4,[[["flag",3]]]],[11,"partial_cmp","","",5,[[["perm",3]],[["option",4],["ordering",4]]]],[11,"lt","","",5,[[["perm",3]]]],[11,"le","","",5,[[["perm",3]]]],[11,"gt","","",5,[[["perm",3]]]],[11,"ge","","",5,[[["perm",3]]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","Format an <code>AclEntry</code> 5-tuple: ::::",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"sub","","Returns the set difference of the two sets of flags.",2,[[["acloption",3]],["acloption",3]]],[11,"sub","","Returns the set difference of the two sets of flags.",4,[[["flag",3]],["flag",3]]],[11,"sub","","Returns the set difference of the two sets of flags.",5,[[["perm",3]],["perm",3]]],[11,"sub_assign","","Disables all flags enabled in the set.",2,[[["acloption",3]]]],[11,"sub_assign","","Disables all flags enabled in the set.",4,[[["flag",3]]]],[11,"sub_assign","","Disables all flags enabled in the set.",5,[[["perm",3]]]],[11,"not","","Returns the complement of this set of flags.",2,[[],["acloption",3]]],[11,"not","","Returns the complement of this set of flags.",4,[[],["flag",3]]],[11,"not","","Returns the complement of this set of flags.",5,[[],["perm",3]]],[11,"bitand","","Returns the intersection between the two sets of flags.",2,[[["acloption",3]],["acloption",3]]],[11,"bitand","","Returns the intersection between the two sets of flags.",4,[[["flag",3]],["flag",3]]],[11,"bitand","","Returns the intersection between the two sets of flags.",5,[[["perm",3]],["perm",3]]],[11,"bitor","","Returns the union of the two sets of flags.",2,[[["acloption",3]],["acloption",3]]],[11,"bitor","","Returns the union of the two sets of flags.",4,[[["flag",3]],["flag",3]]],[11,"bitor","","Returns the union of the two sets of flags.",5,[[["perm",3]],["perm",3]]],[11,"bitxor","","Returns the left flags, but with all the right flags …",2,[[["acloption",3]],["acloption",3]]],[11,"bitxor","","Returns the left flags, but with all the right flags …",4,[[["flag",3]],["flag",3]]],[11,"bitxor","","Returns the left flags, but with all the right flags …",5,[[["perm",3]],["perm",3]]],[11,"bitand_assign","","Disables all flags disabled in the set.",2,[[["acloption",3]]]],[11,"bitand_assign","","Disables all flags disabled in the set.",4,[[["flag",3]]]],[11,"bitand_assign","","Disables all flags disabled in the set.",5,[[["perm",3]]]],[11,"bitor_assign","","Adds the set of flags.",2,[[["acloption",3]]]],[11,"bitor_assign","","Adds the set of flags.",4,[[["flag",3]]]],[11,"bitor_assign","","Adds the set of flags.",5,[[["perm",3]]]],[11,"bitxor_assign","","Toggles the set of flags.",2,[[["acloption",3]]]],[11,"bitxor_assign","","Toggles the set of flags.",4,[[["flag",3]]]],[11,"bitxor_assign","","Toggles the set of flags.",5,[[["perm",3]]]],[11,"hash","","",2,[[]]],[11,"hash","","",4,[[]]],[11,"hash","","",5,[[]]],[11,"from_str","","",1,[[],["result",4]]],[11,"from_str","","",0,[[],["result",4]]],[11,"from_str","","",4,[[],["result",4]]],[11,"from_str","","",5,[[],["result",4]]],[11,"from_iter","","",2,[[["intoiterator",8]],["acloption",3]]],[11,"from_iter","","",4,[[["intoiterator",8]],["flag",3]]],[11,"from_iter","","",5,[[["intoiterator",8]],["perm",3]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"serialize","","",1,[[],["result",4]]],[11,"serialize","","",0,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","","",5,[[],["result",4]]],[11,"deserialize","","",1,[[],["result",4]]],[11,"deserialize","","",0,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",5,[[],["result",4]]],[18,"SYMLINK_ACL","","Get/set the ACL of the symlink itself (macOS only).",2,null],[18,"DEFAULT_ACL","","Get/set the default ACL only (Linux only).",2,null],[11,"empty","","Returns an empty set of flags",2,[[],["acloption",3]]],[11,"all","","Returns the set containing all flags.",2,[[],["acloption",3]]],[11,"bits","","Returns the raw value of the flags currently stored.",2,[[]]],[11,"from_bits","","Convert from underlying bit representation, unless that …",2,[[],[["option",4],["acloption",3]]]],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any …",2,[[],["acloption",3]]],[11,"from_bits_unchecked","","Convert from underlying bit representation, preserving all…",2,[[],["acloption",3]]],[11,"is_empty","","Returns <code>true</code> if no flags are currently stored.",2,[[]]],[11,"is_all","","Returns <code>true</code> if all flags are currently set.",2,[[]]],[11,"intersects","","Returns <code>true</code> if there are flags common to both <code>self</code> and …",2,[[["acloption",3]]]],[11,"contains","","Returns <code>true</code> all of the flags in <code>other</code> are contained …",2,[[["acloption",3]]]],[11,"insert","","Inserts the specified flags in-place.",2,[[["acloption",3]]]],[11,"remove","","Removes the specified flags in-place.",2,[[["acloption",3]]]],[11,"toggle","","Toggles the specified flags in-place.",2,[[["acloption",3]]]],[11,"set","","Inserts or removes the specified flags depending on the …",2,[[["acloption",3]]]],[11,"read","","Read ACL for the specified file.",3,[[["path",3],["acloption",3]],[["acl",3],["result",6]]]],[11,"write","","Write ACL for the specified file.",3,[[["path",3],["acloption",3]],["result",6]]],[11,"from_entries","","Return an ACL from a slice of [<code>AclEntry</code>].",3,[[],[["acl",3],["result",6]]]],[11,"from_unified_entries","","Return pair of ACL\'s from slice of [<code>AclEntry</code>]. This …",3,[[],["result",6]]],[11,"entries","","Return ACL as a vector of [<code>AclEntry</code>].",3,[[],[["result",6],["vec",3]]]],[11,"from_platform_text","","Construct ACL from platform-dependent textual description.",3,[[],[["acl",3],["result",6]]]],[11,"to_platform_text","","Return platform-dependent textual description.",3,[[],[["result",6],["string",3]]]],[11,"is_empty","","Return true if ACL is empty.",3,[[]]],[11,"flags","","Return flags for the ACL itself.",3,[[],[["result",6],["flag",3]]]],[11,"set_flags","","Set flags for the ACL itself.",3,[[["flag",3]],["result",6]]],[11,"allow_user","","Construct an ALLOW access control entry for a user.",0,[[["perm",3]],["aclentry",3]]],[11,"allow_group","","Construct an ALLOW access control entry for a group.",0,[[["perm",3]],["aclentry",3]]],[11,"allow_mask","","Construct an ALLOW access control entry for mask.",0,[[["perm",3]],["aclentry",3]]],[11,"allow_other","","Construct an ALLOW access control entry for other.",0,[[["perm",3]],["aclentry",3]]],[11,"deny_user","","Construct a DENY access control entry for a user.",0,[[["perm",3]],["aclentry",3]]],[11,"deny_group","","Construct a DENY access control entry for a group.",0,[[["perm",3]],["aclentry",3]]],[18,"DEFER_INHERIT","","ACL Flag.",4,null],[18,"NO_INHERIT","","ACL Flag.",4,null],[18,"INHERITED","","ACL entry was inherited.",4,null],[18,"FILE_INHERIT","","Inherit to files.",4,null],[18,"DIRECTORY_INHERIT","","Inherit to directories.",4,null],[18,"LIMIT_INHERIT","","Clear the DIRECTORY_INHERIT flag in the ACL entry that is …",4,null],[18,"ONLY_INHERIT","","Don\'t consider this entry when processing the ACL. Just …",4,null],[18,"DEFAULT","","Specifies a default ACL entry on Linux.",4,null],[11,"empty","","Returns an empty set of flags",4,[[],["flag",3]]],[11,"all","","Returns the set containing all flags.",4,[[],["flag",3]]],[11,"bits","","Returns the raw value of the flags currently stored.",4,[[]]],[11,"from_bits","","Convert from underlying bit representation, unless that …",4,[[],[["flag",3],["option",4]]]],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any …",4,[[],["flag",3]]],[11,"from_bits_unchecked","","Convert from underlying bit representation, preserving all…",4,[[],["flag",3]]],[11,"is_empty","","Returns <code>true</code> if no flags are currently stored.",4,[[]]],[11,"is_all","","Returns <code>true</code> if all flags are currently set.",4,[[]]],[11,"intersects","","Returns <code>true</code> if there are flags common to both <code>self</code> and …",4,[[["flag",3]]]],[11,"contains","","Returns <code>true</code> all of the flags in <code>other</code> are contained …",4,[[["flag",3]]]],[11,"insert","","Inserts the specified flags in-place.",4,[[["flag",3]]]],[11,"remove","","Removes the specified flags in-place.",4,[[["flag",3]]]],[11,"toggle","","Toggles the specified flags in-place.",4,[[["flag",3]]]],[11,"set","","Inserts or removes the specified flags depending on the …",4,[[["flag",3]]]],[18,"READ","","READ_DATA permission for a file. Same as LIST_DIRECTORY …",5,null],[18,"WRITE","","WRITE_DATA permission for a file. Same as ADD_FILE …",5,null],[18,"EXECUTE","","EXECUTE permission for a file. Same as SEARCH permission …",5,null],[18,"DELETE","","DELETE permission for a file.",5,null],[18,"APPEND","","APPEND_DATA permission for a file. Same as …",5,null],[18,"DELETE_CHILD","","DELETE_CHILD permission for a directory.",5,null],[18,"READATTR","","READ_ATTRIBUTES permission for file or directory.",5,null],[18,"WRITEATTR","","WRITE_ATTRIBUTES permission for a file or directory.",5,null],[18,"READEXTATTR","","READ_EXTATTRIBUTES permission for a file or directory.",5,null],[18,"WRITEEXTATTR","","WRITE_EXTATTRIBUTES permission for a file or directory.",5,null],[18,"READSECURITY","","READ_SECURITY permission for a file or directory.",5,null],[18,"WRITESECURITY","","WRITE_SECURITY permission for a file or directory.",5,null],[18,"CHOWN","","CHANGE_OWNER permission for a file or directory.",5,null],[18,"SYNC","","SYNCHRONIZE permission (unsupported).",5,null],[11,"empty","","Returns an empty set of flags",5,[[],["perm",3]]],[11,"all","","Returns the set containing all flags.",5,[[],["perm",3]]],[11,"bits","","Returns the raw value of the flags currently stored.",5,[[],["c_uint",6]]],[11,"from_bits","","Convert from underlying bit representation, unless that …",5,[[["c_uint",6]],[["option",4],["perm",3]]]],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any …",5,[[["c_uint",6]],["perm",3]]],[11,"from_bits_unchecked","","Convert from underlying bit representation, preserving all…",5,[[["c_uint",6]],["perm",3]]],[11,"is_empty","","Returns <code>true</code> if no flags are currently stored.",5,[[]]],[11,"is_all","","Returns <code>true</code> if all flags are currently set.",5,[[]]],[11,"intersects","","Returns <code>true</code> if there are flags common to both <code>self</code> and …",5,[[["perm",3]]]],[11,"contains","","Returns <code>true</code> all of the flags in <code>other</code> are contained …",5,[[["perm",3]]]],[11,"insert","","Inserts the specified flags in-place.",5,[[["perm",3]]]],[11,"remove","","Removes the specified flags in-place.",5,[[["perm",3]]]],[11,"toggle","","Toggles the specified flags in-place.",5,[[["perm",3]]]],[11,"set","","Inserts or removes the specified flags depending on the …",5,[[["perm",3]]]]],"p":[[3,"AclEntry"],[4,"AclEntryKind"],[3,"AclOption"],[3,"Acl"],[3,"Flag"],[3,"Perm"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);