// file: /Users/brekk/madness/abend/src/Main.mad
import {} from "./../__internals__.mjs"
export let _10f79_DictRBBlack = ({ __constructor: "DictRBBlack", __args: [  ] });
export let _10f79_DictRBRed = ({ __constructor: "DictRBRed", __args: [  ] });
export let _10f79_DictRBEmpty = ({ __constructor: "DictRBEmpty", __args: [  ] });
export let _10f79_DictRBNode = (a => b => c => d => e => ({ __constructor: "DictRBNode", __args: [ a, b, c, d, e ] }));
export let _10f79_LT = ({ __constructor: "LT", __args: [  ] });
export let _10f79_EQ = ({ __constructor: "EQ", __args: [  ] });
export let _10f79_GT = ({ __constructor: "GT", __args: [  ] });
export let _3d769_Loop = (a => ({ __constructor: "Loop", __args: [ a ] }));
export let _3d769_Done = (a => ({ __constructor: "Done", __args: [ a ] }));
export let _2e42b_Just = (a => ({ __constructor: "Just", __args: [ a ] }));
export let _2e42b_Nothing = ({ __constructor: "Nothing", __args: [  ] });
let _1e6e4___TimerId__ = ({ __constructor: "__TimerId__", __args: [  ] });
export let _1e6e4_Wish = (a => ({ __constructor: "Wish", __args: [ a ] }));
export let _77488_AddressAlreadyInUse = ({ __constructor: "AddressAlreadyInUse", __args: [  ] });
export let _77488_ArgumentListToLong = ({ __constructor: "ArgumentListToLong", __args: [  ] });
export let _77488_PermissionDenied = ({ __constructor: "PermissionDenied", __args: [  ] });
export let _77488_UnknownError = ({ __constructor: "UnknownError", __args: [  ] });
export let _42e19_Left = (a => ({ __constructor: "Left", __args: [ a ] }));
export let _42e19_Right = (a => ({ __constructor: "Right", __args: [ a ] }));
export let _a32d2_Loc = (a => b => c => ({ __constructor: "Loc", __args: [ a, b, c ] }));
export let _a32d2_Parser = (a => ({ __constructor: "Parser", __args: [ a ] }));
export let _a32d2_Error = (a => ({ __constructor: "Error", __args: [ a ] }));
export let _a32d2_Config = (a => ({ __constructor: "Config", __args: [ a ] }));
export let _1fda7_EmptyDoc = ({ __constructor: "EmptyDoc", __args: [  ] });
export let _1fda7_CharDoc = (a => ({ __constructor: "CharDoc", __args: [ a ] }));
export let _1fda7_TextDoc = (a => b => ({ __constructor: "TextDoc", __args: [ a, b ] }));
export let _1fda7_LineDoc = (a => ({ __constructor: "LineDoc", __args: [ a ] }));
export let _1fda7_CatDoc = (a => b => ({ __constructor: "CatDoc", __args: [ a, b ] }));
export let _1fda7_NestDoc = (a => b => ({ __constructor: "NestDoc", __args: [ a, b ] }));
export let _1fda7_UnionDoc = (a => b => ({ __constructor: "UnionDoc", __args: [ a, b ] }));
export let _1fda7_ColumnDoc = (a => ({ __constructor: "ColumnDoc", __args: [ a ] }));
export let _1fda7_NestingDoc = (a => ({ __constructor: "NestingDoc", __args: [ a ] }));
export let _1fda7_SEmpty = ({ __constructor: "SEmpty", __args: [  ] });
export let _1fda7_SChar = (a => b => ({ __constructor: "SChar", __args: [ a, b ] }));
export let _1fda7_SText = (a => b => c => ({ __constructor: "SText", __args: [ a, b, c ] }));
export let _1fda7_SLine = (a => b => ({ __constructor: "SLine", __args: [ a, b ] }));
let _936d2_HandlerId = ({ __constructor: "HandlerId", __args: [  ] });
let _936d2_NormalMode = ({ __constructor: "NormalMode", __args: [  ] });
let _936d2_RawMode = ({ __constructor: "RawMode", __args: [  ] });
let _91e6c_Constructor = (a => b => ({ __constructor: "Constructor", __args: [ a, b ] }));
let _91e6c_Unit = ({ __constructor: "Unit", __args: [  ] });
let _91e6c_Record = (a => ({ __constructor: "Record", __args: [ a ] }));
let _91e6c_Integer = (a => ({ __constructor: "Integer", __args: [ a ] }));
let _91e6c_Float = (a => ({ __constructor: "Float", __args: [ a ] }));
let _91e6c_Boolean = (a => ({ __constructor: "Boolean", __args: [ a ] }));
let _91e6c_Char = (a => ({ __constructor: "Char", __args: [ a ] }));
let _91e6c_Str = (a => ({ __constructor: "Str", __args: [ a ] }));
let _91e6c_DictionaryConstructor = (a => ({ __constructor: "DictionaryConstructor", __args: [ a ] }));
let _91e6c_ListConstructor = (a => ({ __constructor: "ListConstructor", __args: [ a ] }));
let _91e6c_TupleConstructor = (a => ({ __constructor: "TupleConstructor", __args: [ a ] }));
let _91e6c_Byte = (a => ({ __constructor: "Byte", __args: [ a ] }));
let _91e6c_ByteArray = (a => ({ __constructor: "ByteArray", __args: [ a ] }));
export let _db1f9_Gold = ({ __constructor: "Gold", __args: [  ] });
export let _db1f9_Silver = ({ __constructor: "Silver", __args: [  ] });
export let _db1f9_Bronze = ({ __constructor: "Bronze", __args: [  ] });
export let _db1f9_Tin = ({ __constructor: "Tin", __args: [  ] });
export let _db1f9_Numeric = (a => b => ({ __constructor: "Numeric", __args: [ a, b ] }));
export let _db1f9_Word = (a => b => ({ __constructor: "Word", __args: [ a, b ] }));
export let _db1f9_show__12 = (__$a__ => ((__x__) => {
  if (__x__.__constructor === "Gold") {
    return `Gold`;
  }
  else if (__x__.__constructor === "Silver") {
    return `Silver`;
  }
  else if (__x__.__constructor === "Bronze") {
    return `Bronze`;
  }
  else if (__x__.__constructor === "Tin") {
    return `Tin`;
  }
  else if (true) {
    return `Unknown`;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__$a__));
export let _d4261_isDigit__108 = (s => __eq__(s, String.fromCodePoint(48)) || __eq__(s, String.fromCodePoint(49)) || __eq__(s, String.fromCodePoint(50)) || __eq__(s, String.fromCodePoint(51)) || __eq__(s, String.fromCodePoint(52)) || __eq__(s, String.fromCodePoint(53)) || __eq__(s, String.fromCodePoint(54)) || __eq__(s, String.fromCodePoint(55)) || __eq__(s, String.fromCodePoint(56)) || __eq__(s, String.fromCodePoint(57)));
export let _a32d2_pure__74 = (a => _a32d2_Parser((s => l => ([({ v: ([a, s]), n: null }), l]))));
export let _a32d2_pure__45 = (a => _a32d2_Parser((s => l => ([({ v: ([a, s]), n: null }), l]))));
export let _a32d2_pure__43 = (a => _a32d2_Parser((s => l => ([({ v: ([a, s]), n: null }), l]))));
export let _a32d2_pure__34 = (a => _a32d2_Parser((s => l => ([({ v: ([a, s]), n: null }), l]))));
export let _a32d2_pure__190 = (a => _a32d2_Parser((s => l => ([({ v: ([a, s]), n: null }), l]))));
export let _a32d2_pure__179 = (a => _a32d2_Parser((s => l => ([({ v: ([a, s]), n: null }), l]))));
export let _a32d2_pure__151 = (a => _a32d2_Parser((s => l => ([({ v: ([a, s]), n: null }), l]))));
export let _a32d2_pure__139 = (a => _a32d2_Parser((s => l => ([({ v: ([a, s]), n: null }), l]))));
export let _a32d2_pure__120 = (a => _a32d2_Parser((s => l => ([({ v: ([a, s]), n: null }), l]))));
let _a32d2_parse__97 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
let _a32d2_parse__88 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
let _a32d2_parse__76 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
export let _a32d2_runParser__207 = (m => s => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && __x__[0].v[1] === "" && __x__[0].n === null && true) {
    let [{ v: [res, ] },] = __x__;
    return _42e19_Right(res);
  }
  else if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [, rest] },l] = __x__;
    return _42e19_Left(_a32d2_Error(l));
  }
  else if (__x__.length === 2 && true && true) {
    let [,l] = __x__;
    return _42e19_Left(_a32d2_Error(l));
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__76(m)(s)(_a32d2_Loc(0)(0)(0))));
let _a32d2_parse__59 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
let _a32d2_parse__53 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
let _a32d2_parse__42 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
let _a32d2_parse__41 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
let _a32d2_parse__37 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
let _a32d2_parse__192 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
let _a32d2_parse__181 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
let _a32d2_parse__153 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
let _a32d2_parse__141 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
let _a32d2_parse__101 = (parser => input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let fn = __x__.__args[0];
    return fn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(parser));
export let _a32d2_of__73 = (_ => _a32d2_pure__74);
export let _a32d2_of__70 = (_ => _a32d2_pure__43);
export let _a32d2_of__33 = (_ => _a32d2_pure__34);
export let _a32d2_of__189 = (_ => _a32d2_pure__190);
export let _a32d2_of__178 = (_ => _a32d2_pure__179);
export let _a32d2_of__150 = (_ => _a32d2_pure__151);
export let _a32d2_of__138 = (_ => _a32d2_pure__139);
export let _a32d2_of__119 = (_ => _a32d2_pure__120);
export let _a32d2_map__95 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, b] },loc] = __x__;
    return ([({ v: ([f(a), b]), n: null }), loc]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,loc] = __x__;
    return ([(null), loc]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__76(m)(s)(l)))));
export let _a32d2_map__87 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, b] },loc] = __x__;
    return ([({ v: ([f(a), b]), n: null }), loc]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,loc] = __x__;
    return ([(null), loc]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__88(m)(s)(l)))));
export let _a32d2_map__72 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, b] },loc] = __x__;
    return ([({ v: ([f(a), b]), n: null }), loc]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,loc] = __x__;
    return ([(null), loc]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__42(m)(s)(l)))));
export let _a32d2_map__67 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, b] },loc] = __x__;
    return ([({ v: ([f(a), b]), n: null }), loc]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,loc] = __x__;
    return ([(null), loc]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__37(m)(s)(l)))));
export let _a32d2_map__60 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, b] },loc] = __x__;
    return ([({ v: ([f(a), b]), n: null }), loc]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,loc] = __x__;
    return ([(null), loc]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__42(m)(s)(l)))));
export let _a32d2_map__57 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, b] },loc] = __x__;
    return ([({ v: ([f(a), b]), n: null }), loc]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,loc] = __x__;
    return ([(null), loc]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__42(m)(s)(l)))));
export let _a32d2_map__52 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, b] },loc] = __x__;
    return ([({ v: ([f(a), b]), n: null }), loc]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,loc] = __x__;
    return ([(null), loc]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__53(m)(s)(l)))));
export let _a32d2_map__39 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, b] },loc] = __x__;
    return ([({ v: ([f(a), b]), n: null }), loc]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,loc] = __x__;
    return ([(null), loc]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__37(m)(s)(l)))));
export let _a32d2_map__129 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, b] },loc] = __x__;
    return ([({ v: ([f(a), b]), n: null }), loc]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,loc] = __x__;
    return ([(null), loc]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__37(m)(s)(l)))));
export let _a32d2_lazy__137 = (wrapped => _a32d2_Parser((input => loc => ((__x__) => {
  if (__x__.__constructor === "Parser" && true) {
    let parserFn = __x__.__args[0];
    return parserFn(input)(loc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(wrapped()))));
let _a32d2_incLoc__29 = (c => __W__1 => ((__x__) => {
  if (__x__.__constructor === "Loc" && true && true && true) {
    let abs = __x__.__args[0];
    let line = __x__.__args[1];
    let col = __x__.__args[2];
    return (__eq__(c, String.fromCodePoint(10)) ? _a32d2_Loc((abs + 1))((line + 1))(0) : _a32d2_Loc((abs + 1))(line)((col + 1)));
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__W__1));
export let _a32d2_chain__77 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__76(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__42(m)(s)(l)))));
export let _a32d2_chain__75 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__76(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__37(m)(s)(l)))));
export let _a32d2_chain__71 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__42(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__37(m)(s)(l)))));
export let _a32d2_chain__54 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__53(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__37(m)(s)(l)))));
export let _a32d2_chain__36 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__37(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__37(m)(s)(l)))));
export let _a32d2_chain__201 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__76(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__192(m)(s)(l)))));
export let _a32d2_chain__193 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__192(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__181(m)(s)(l)))));
export let _a32d2_chain__191 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__192(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__192(m)(s)(l)))));
export let _a32d2_chain__182 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__181(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__42(m)(s)(l)))));
export let _a32d2_chain__180 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__181(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__76(m)(s)(l)))));
export let _a32d2_chain__175 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__76(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__153(m)(s)(l)))));
export let _a32d2_chain__154 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__153(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__141(m)(s)(l)))));
export let _a32d2_chain__152 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__153(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__153(m)(s)(l)))));
export let _a32d2_chain__142 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__141(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__42(m)(s)(l)))));
export let _a32d2_chain__140 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__141(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__76(m)(s)(l)))));
export let _a32d2_chain__130 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__76(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__53(m)(s)(l)))));
export let _a32d2_chain__122 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__101(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__76(m)(s)(l)))));
export let _a32d2_chain__121 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__101(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__101(m)(s)(l)))));
export let _a32d2_chain__113 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__42(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__53(m)(s)(l)))));
export let _a32d2_chain__100 = (f => m => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s1] },l1] = __x__;
    return _a32d2_parse__76(f(a))(s1)(l1);
  }
  else if (__x__.length === 2 && true && true) {
    let [,ll] = __x__;
    return ([(null), ll]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__101(m)(s)(l)))));
export let _a32d2_ap__96 = (parserA => parserB => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [f, s1] },l1] = __x__;
    return ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s2] },l2] = __x__;
    return ([({ v: ([f(a), s2]), n: null }), l2]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,l2] = __x__;
    return ([(null), l2]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__53(parserB)(s1)(l1));
  }
  else if (__x__.length === 2 && true && true) {
    let [,l1] = __x__;
    return ([(null), l1]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__97(parserA)(s)(l)))));
export let _adecf_apL__94 = (a => b => _a32d2_ap__96(_a32d2_map__95((x => _ => x))(a))(b));
export let _a32d2_ap__58 = (parserA => parserB => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [f, s1] },l1] = __x__;
    return ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s2] },l2] = __x__;
    return ([({ v: ([f(a), s2]), n: null }), l2]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,l2] = __x__;
    return ([(null), l2]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__53(parserB)(s1)(l1));
  }
  else if (__x__.length === 2 && true && true) {
    let [,l1] = __x__;
    return ([(null), l1]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__59(parserA)(s)(l)))));
export let _adecf_apL__56 = (a => b => _a32d2_ap__58(_a32d2_map__57((x => _ => x))(a))(b));
export let _a32d2_ap__40 = (parserA => parserB => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [f, s1] },l1] = __x__;
    return ((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [a, s2] },l2] = __x__;
    return ([({ v: ([f(a), s2]), n: null }), l2]);
  }
  else if (__x__.length === 2 && true && true) {
    let [,l2] = __x__;
    return ([(null), l2]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__42(parserB)(s1)(l1));
  }
  else if (__x__.length === 2 && true && true) {
    let [,l1] = __x__;
    return ([(null), l1]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__41(parserA)(s)(l)))));
export let _a32d2_alt__62 = (ma => mb => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] === null && true) {
    let [,] = __x__;
    return _a32d2_parse__42(mb)(s)(l);
  }
  else if (true) {
    let res = __x__;
    return res;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__42(ma)(s)(l)))));
export let _a32d2_alt__55 = (ma => mb => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] === null && true) {
    let [,] = __x__;
    return _a32d2_parse__53(mb)(s)(l);
  }
  else if (true) {
    let res = __x__;
    return res;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__53(ma)(s)(l)))));
export let _a32d2_alt__194 = (ma => mb => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] === null && true) {
    let [,] = __x__;
    return _a32d2_parse__192(mb)(s)(l);
  }
  else if (true) {
    let res = __x__;
    return res;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__192(ma)(s)(l)))));
export let _a32d2_alt__155 = (ma => mb => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] === null && true) {
    let [,] = __x__;
    return _a32d2_parse__153(mb)(s)(l);
  }
  else if (true) {
    let res = __x__;
    return res;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__153(ma)(s)(l)))));
export let _a32d2_alt__124 = (ma => mb => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] === null && true) {
    let [,] = __x__;
    return _a32d2_parse__76(mb)(s)(l);
  }
  else if (true) {
    let res = __x__;
    return res;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__76(ma)(s)(l)))));
export let _a32d2_alt__123 = (ma => mb => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] === null && true) {
    let [,] = __x__;
    return _a32d2_parse__101(mb)(s)(l);
  }
  else if (true) {
    let res = __x__;
    return res;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__101(ma)(s)(l)))));
export let _a32d2_alt__110 = (ma => mb => _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.length === 2 && __x__[0] === null && true) {
    let [,] = __x__;
    return _a32d2_parse__37(mb)(s)(l);
  }
  else if (true) {
    let res = __x__;
    return res;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__37(ma)(s)(l)))));
export let _a32d2_aempty__31 = (_ => _a32d2_Parser((_ => l => ([(null), l]))));
export let _a32d2_fail__30 = _a32d2_aempty__31();
export let _a32d2_aempty__204 = (_ => _a32d2_Parser((_ => l => ([(null), l]))));
export let _a32d2_fail__203 = _a32d2_aempty__204();
export let _a32d2_aempty__185 = (_ => _a32d2_Parser((_ => l => ([(null), l]))));
export let _a32d2_fail__184 = _a32d2_aempty__185();
export let _a32d2_aempty__146 = (_ => _a32d2_Parser((_ => l => ([(null), l]))));
export let _a32d2_fail__145 = _a32d2_aempty__146();
export let _a32d2_aempty__117 = (_ => _a32d2_Parser((_ => l => ([(null), l]))));
export let _a32d2_fail__116 = _a32d2_aempty__117();
;
;
;
;

import prelude_readline from "readline"
;
export let _9bab1_putLine__267 = (a =>  { console.log(a) } );
export let _936d2_ansi__215 = ({ FGBlack: `30`, FGRed: `31`, FGGreen: `32`, FGYellow: `33`, FGBlue: `34`, FGMagenta: `35`, FGCyan: `36`, FGWhite: `37`, FGBrightBlack: `90`, FGBrightRed: `91`, FGBrightGreen: `92`, FGBrightYellow: `93`, FGBrightBlue: `94`, FGBrightMagenta: `95`, FGBrightCyan: `96`, FGBrightWhite: `97`, BGBlack: `40`, BGRed: `41`, BGGreen: `42`, BGYellow: `43`, BGBlue: `44`, BGMagenta: `45`, BGCyan: `46`, BGWhite: `47`, BGBrightBlack: `100`, BGBrightRed: `101`, BGBrightGreen: `102`, BGBrightYellow: `103`, BGBrightBlue: `104`, BGBrightMagenta: `105`, BGBrightCyan: `106`, BGBrightWhite: `107`, FormatUnderline: `4`, FormatNoUnderline: `24`, FormatBold: `1`, FormatNoBold: `21`, FormatInvert: `7` });
let _936d2_END_COLOR__220 = `[0m`;
let _91e6c_BYTE_CHARS__92 = ({ v: String.fromCodePoint(48), n: { v: String.fromCodePoint(49), n: { v: String.fromCodePoint(50), n: { v: String.fromCodePoint(51), n: { v: String.fromCodePoint(52), n: { v: String.fromCodePoint(53), n: { v: String.fromCodePoint(54), n: { v: String.fromCodePoint(55), n: { v: String.fromCodePoint(56), n: { v: String.fromCodePoint(57), n: { v: String.fromCodePoint(65), n: { v: String.fromCodePoint(66), n: { v: String.fromCodePoint(67), n: { v: String.fromCodePoint(68), n: { v: String.fromCodePoint(69), n: { v: String.fromCodePoint(70), n: null } } } } } } } } } } } } } } } });
export let _801bd_min__261 = (a => b => (a > b ? b : a));
export let _6b70e_snd__257 = (tuple => ((__x__) => {
  if (__x__.length === 2 && true && true) {
    let [,b] = __x__;
    return b;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(tuple));
export let _6b70e_snd__252 = (tuple => ((__x__) => {
  if (__x__.length === 2 && true && true) {
    let [,b] = __x__;
    return b;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(tuple));
export let _6b70e_fst__256 = (tuple => ((__x__) => {
  if (__x__.length === 2 && true && true) {
    let [a,] = __x__;
    return a;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(tuple));
export let _6b70e_fst__249 = (tuple => ((__x__) => {
  if (__x__.length === 2 && true && true) {
    let [a,] = __x__;
    return a;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(tuple));
export let _4be73_andDo__186 = (b => a => _a32d2_chain__182((_ => b))(a));
export let _4be73_andDo__147 = (b => a => _a32d2_chain__142((_ => b))(a));
export let _4be73_andDo__118 = (b => a => _a32d2_chain__77((_ => b))(a));
export let _3d769_ifElse__35 = (predicate => truthy => falsy => value => (predicate(value) ? truthy(value) : falsy(value)));
export let _3d769_equals__24 = (val => a => __eq__(val, a));
export let _3d769_complement__65 = (fn => x => !(fn(x)));
export let _3d769_always__32 = (a => _ => a);
export let _1fda7_textWithLength__221 = (i => s => ((__x__) => {
  if (__x__ === "") {
    return _1fda7_EmptyDoc;
  }
  else if (true) {
    let or = __x__;
    return _1fda7_TextDoc(i)(or);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(s));
export let _1fda7_nest__236 = (i => x => _1fda7_NestDoc(i)((_ => x)));
export let _1fda7_linebreak__223 = _1fda7_LineDoc(true);
export let _1fda7_line__227 = _1fda7_LineDoc(false);
export let _1fda7_flatten__238 = (doc => {
    let $_result_;
    let $_continue_ = true;
    let $$doc = doc;

    while($_continue_) {
      let $doc = $$doc;

        $_continue_ = false;
        ((__x__) => {
  if (__x__.__constructor === "CatDoc" && true && true) {
    let x = __x__.__args[0];
    let y = __x__.__args[1];
    ($_result_ = _1fda7_CatDoc((_ => _1fda7_flatten__238(x())))((_ => _1fda7_flatten__238(y()))));
  }
  else if (__x__.__constructor === "NestDoc" && true && true) {
    let i = __x__.__args[0];
    let x = __x__.__args[1];
    ($_result_ = _1fda7_NestDoc(i)((_ => _1fda7_flatten__238(x()))));
  }
  else if (__x__.__constructor === "LineDoc" && true) {
    let _$_break_$_ = __x__.__args[0];
    (_$_break_$_ ? ($_result_ = _1fda7_EmptyDoc) : ($_result_ = _1fda7_TextDoc(1)(` `)));
  }
  else if (__x__.__constructor === "UnionDoc" && true && true) {
    let x = __x__.__args[0];
    let y = __x__.__args[1];
    ($$doc = x, $_continue_ = true);
  }
  else if (__x__.__constructor === "ColumnDoc" && true) {
    let f = __x__.__args[0];
    ($_result_ = _1fda7_ColumnDoc((__P__1 => _1fda7_flatten__238(f(__P__1)))));
  }
  else if (__x__.__constructor === "NestingDoc" && true) {
    let f = __x__.__args[0];
    ($_result_ = _1fda7_NestingDoc((__P__2 => _1fda7_flatten__238(f(__P__2)))));
  }
  else if (true) {
    let or = __x__;
    ($_result_ = or);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($doc)
    }
    return $_result_;
});
export let _1fda7_group__237 = (x => _1fda7_UnionDoc(_1fda7_flatten__238(x))(x));
export let _1fda7_softline__244 = _1fda7_group__237(_1fda7_line__227);
let _1fda7_fits__262 = (w => simpleDoc => {
    let $_result_;
    let $_continue_ = true;
    let $$w = w;
    let $$simpleDoc = simpleDoc;

    while($_continue_) {
      let $w = $$w;
      let $simpleDoc = $$simpleDoc;

        $_continue_ = false;
        ($w < 0 ? ($_result_ = false) : ((__x__) => {
  if (__x__.__constructor === "SEmpty") {
    ($_result_ = true);
  }
  else if (__x__.__constructor === "SChar" && true && true) {
    let x = __x__.__args[1];
    ($$w = ($w - 1), $$simpleDoc = x, $_continue_ = true);
  }
  else if (__x__.__constructor === "SText" && true && true && true) {
    let l = __x__.__args[0];
    let x = __x__.__args[2];
    ($$w = ($w - l), $$simpleDoc = x(), $_continue_ = true);
  }
  else if (__x__.__constructor === "SLine" && true && true) {
    ($_result_ = true);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($simpleDoc))
    }
    return $_result_;
});
export let _1fda7_renderPretty__260 = (_ => w => doc => {
    let r
r = w;
    let nicest__0
nicest__0 = (n => k => x => y => {
    let width
width = _801bd_min__261((w - k))(((r - k) + n));
    return (_1fda7_fits__262(width)(x) ? x : y());
});
    let best__0
best__0 = (n => k => docs => {
    let $_result_;
    let $_continue_ = true;
    let $_start_ = { __args: [] };
    let $args = $_start_.__args;
    let $index = 0;
    let $newValue;
    let $$n = n;
    let $$k = k;
    let $$docs = docs;

    while($_continue_) {
      let $n = $$n;
      let $k = $$k;
      let $docs = $$docs;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ === null) {
    ($args[$index] = _1fda7_SEmpty, $_result_ = $_start_.__args[0]);
  }
  else if (__x__ !== null && __x__.v.length === 2 && true && true && true) {
    let { v: [i, d], n: ds } = __x__;
    ((__x__) => {
  if (__x__.__constructor === "EmptyDoc") {
    ($$n = $n, $$k = $k, $$docs = ds, $_continue_ = true);
  }
  else if (__x__.__constructor === "CharDoc" && true) {
    let c = __x__.__args[0];
    ($newValue = { __constructor: "SChar", __args: [] }, $newValue.__args.push(c), $newValue.__args.push(null), $args[$index] = $newValue, $args = $newValue.__args, $index = 1, $$n = $n, $$k = ($k + 1), $$docs = ds, $_continue_ = true);
  }
  else if (__x__.__constructor === "TextDoc" && true && true) {
    let l = __x__.__args[0];
    let s = __x__.__args[1];
    ($args[$index] = _1fda7_SText(l)(s)((_ => best__0($n)(($k + l))(ds))), $_result_ = $_start_.__args[0]);
  }
  else if (__x__.__constructor === "LineDoc" && true) {
    ($newValue = { __constructor: "SLine", __args: [] }, $newValue.__args.push(i), $newValue.__args.push(null), $args[$index] = $newValue, $args = $newValue.__args, $index = 1, $$n = i, $$k = i, $$docs = ds, $_continue_ = true);
  }
  else if (__x__.__constructor === "CatDoc" && true && true) {
    let x = __x__.__args[0];
    let y = __x__.__args[1];
    ($$n = $n, $$k = $k, $$docs = ({ v: ([i, x()]), n: { v: ([i, y()]), n: ds } }), $_continue_ = true);
  }
  else if (__x__.__constructor === "NestDoc" && true && true) {
    let j = __x__.__args[0];
    let x = __x__.__args[1];
    ($$n = $n, $$k = $k, $$docs = ({ v: ([(i + j), x()]), n: ds }), $_continue_ = true);
  }
  else if (__x__.__constructor === "UnionDoc" && true && true) {
    let x = __x__.__args[0];
    let y = __x__.__args[1];
    ($args[$index] = nicest__0($n)($k)(best__0($n)($k)(({ v: ([i, x]), n: ds })))((_ => best__0($n)($k)(({ v: ([i, y]), n: ds })))), $_result_ = $_start_.__args[0]);
  }
  else if (__x__.__constructor === "ColumnDoc" && true) {
    let f = __x__.__args[0];
    ($$n = $n, $$k = $k, $$docs = ({ v: ([i, f($k)]), n: ds }), $_continue_ = true);
  }
  else if (__x__.__constructor === "NestingDoc" && true) {
    let f = __x__.__args[0];
    ($$n = $n, $$k = $k, $$docs = ({ v: ([i, f(i)]), n: ds }), $_continue_ = true);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(d);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($docs)
    }
    return $_result_;
});
    return best__0(0)(0)(({ v: ([0, doc]), n: null }));
});
export let _1fda7_empty__229 = _1fda7_EmptyDoc;
export let _1fda7_char__226 = (c => ((__x__) => {
  if (__x__ === String.fromCodePoint(10)) {
    return _1fda7_line__227;
  }
  else if (true) {
    let or = __x__;
    return _1fda7_CharDoc(or);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(c));
export let _1fda7_colon__250 = _1fda7_char__226(String.fromCodePoint(58));
export let _1fda7_comma__225 = _1fda7_char__226(String.fromCodePoint(44));
export let _1fda7_lbrace__247 = _1fda7_char__226(String.fromCodePoint(123));
export let _1fda7_lbracket__245 = _1fda7_char__226(String.fromCodePoint(91));
export let _1fda7_rbrace__254 = _1fda7_char__226(String.fromCodePoint(125));
export let _1fda7_rbracket__246 = _1fda7_char__226(String.fromCodePoint(93));
export let _1fda7_space__251 = _1fda7_char__226(String.fromCodePoint(32));
export let _1fda7_beside__230 = (x => y => _1fda7_CatDoc((_ => x))((_ => y)));
export let _1dd2b_reverse__99 = (list => {
    let helper__0
helper__0 = (acc => l => {
    let $_result_;
    let $_continue_ = true;
    let $$acc = acc;
    let $$l = l;

    while($_continue_) {
      let $acc = $$acc;
      let $l = $$l;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: h, n: xs } = __x__;
    ($$acc = ({ v: h, n: $acc }), $$l = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($l)
    }
    return $_result_;
});
    return helper__0((null))(list);
});
export let _a32d2_many__98 = (p => _a32d2_Parser((s => l => {
    let rest
rest = s;
    let loc
loc = l;
    let acc
acc = (null);
    while(((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [parsed, r] },loc_] = __x__;
    return (() => {
      rest = r;
    loc = loc_;
    acc = ({ v: parsed, n: acc });
    return true;

})();
  }
  else if (true) {
    return false;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__76(p)(rest)(loc))) {
({ __constructor: "Unit", __args: [] })
};
    return ([({ v: ([_1dd2b_reverse__99(acc), rest]), n: null }), loc]);
})));
export let _a32d2_sepBy__115 = (parser => separator => _a32d2_alt__123((() => {
      return _a32d2_chain__122((first => _a32d2_chain__121((rest => _a32d2_of__119()(({ v: first, n: rest }))))(_a32d2_many__98(_4be73_andDo__118(parser)(separator)))))(parser);

})())(_a32d2_fail__116));
export let _a32d2_maybeSepBy__114 = (parser => sep => (__P__2 => (__$PH3__ => _a32d2_alt__123(__$PH3__)(_a32d2_pure__120((null))))(_a32d2_sepBy__115(parser)(__P__2)))(sep));
export let _1dd2b_reverse__81 = (list => {
    let helper__0
helper__0 = (acc => l => {
    let $_result_;
    let $_continue_ = true;
    let $$acc = acc;
    let $$l = l;

    while($_continue_) {
      let $acc = $$acc;
      let $l = $$l;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: h, n: xs } = __x__;
    ($$acc = ({ v: h, n: $acc }), $$l = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($l)
    }
    return $_result_;
});
    return helper__0((null))(list);
});
export let _a32d2_many__80 = (p => _a32d2_Parser((s => l => {
    let rest
rest = s;
    let loc
loc = l;
    let acc
acc = (null);
    while(((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [parsed, r] },loc_] = __x__;
    return (() => {
      rest = r;
    loc = loc_;
    acc = ({ v: parsed, n: acc });
    return true;

})();
  }
  else if (true) {
    return false;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__42(p)(rest)(loc))) {
({ __constructor: "Unit", __args: [] })
};
    return ([({ v: ([_1dd2b_reverse__81(acc), rest]), n: null }), loc]);
})));
export let _1dd2b_reverse__51 = (list => {
    let helper__0
helper__0 = (acc => l => {
    let $_result_;
    let $_continue_ = true;
    let $$acc = acc;
    let $$l = l;

    while($_continue_) {
      let $acc = $$acc;
      let $l = $$l;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: h, n: xs } = __x__;
    ($$acc = ({ v: h, n: $acc }), $$l = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($l)
    }
    return $_result_;
});
    return helper__0((null))(list);
});
export let _a32d2_many__50 = (p => _a32d2_Parser((s => l => {
    let rest
rest = s;
    let loc
loc = l;
    let acc
acc = (null);
    while(((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [parsed, r] },loc_] = __x__;
    return (() => {
      rest = r;
    loc = loc_;
    acc = ({ v: parsed, n: acc });
    return true;

})();
  }
  else if (true) {
    return false;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__37(p)(rest)(loc))) {
({ __constructor: "Unit", __args: [] })
};
    return ([({ v: ([_1dd2b_reverse__51(acc), rest]), n: null }), loc]);
})));
export let _a32d2_some__49 = (p => _a32d2_chain__54((first => _a32d2_map__52((rest => ({ v: first, n: rest })))(_a32d2_many__50(p))))(p));
export let _1dd2b_reverse__232 = (list => {
    let helper__0
helper__0 = (acc => l => {
    let $_result_;
    let $_continue_ = true;
    let $$acc = acc;
    let $$l = l;

    while($_continue_) {
      let $acc = $$acc;
      let $l = $$l;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: h, n: xs } = __x__;
    ($$acc = ({ v: h, n: $acc }), $$l = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($l)
    }
    return $_result_;
});
    return helper__0((null))(list);
});
export let _1dd2b_reverse__188 = (list => {
    let helper__0
helper__0 = (acc => l => {
    let $_result_;
    let $_continue_ = true;
    let $$acc = acc;
    let $$l = l;

    while($_continue_) {
      let $acc = $$acc;
      let $l = $$l;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: h, n: xs } = __x__;
    ($$acc = ({ v: h, n: $acc }), $$l = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($l)
    }
    return $_result_;
});
    return helper__0((null))(list);
});
export let _a32d2_many__187 = (p => _a32d2_Parser((s => l => {
    let rest
rest = s;
    let loc
loc = l;
    let acc
acc = (null);
    while(((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [parsed, r] },loc_] = __x__;
    return (() => {
      rest = r;
    loc = loc_;
    acc = ({ v: parsed, n: acc });
    return true;

})();
  }
  else if (true) {
    return false;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__181(p)(rest)(loc))) {
({ __constructor: "Unit", __args: [] })
};
    return ([({ v: ([_1dd2b_reverse__188(acc), rest]), n: null }), loc]);
})));
export let _a32d2_sepBy__183 = (parser => separator => _a32d2_alt__194((() => {
      return _a32d2_chain__193((first => _a32d2_chain__191((rest => _a32d2_of__189()(({ v: first, n: rest }))))(_a32d2_many__187(_4be73_andDo__186(parser)(separator)))))(parser);

})())(_a32d2_fail__184));
export let _1dd2b_reverse__149 = (list => {
    let helper__0
helper__0 = (acc => l => {
    let $_result_;
    let $_continue_ = true;
    let $$acc = acc;
    let $$l = l;

    while($_continue_) {
      let $acc = $$acc;
      let $l = $$l;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: h, n: xs } = __x__;
    ($$acc = ({ v: h, n: $acc }), $$l = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($l)
    }
    return $_result_;
});
    return helper__0((null))(list);
});
export let _a32d2_many__148 = (p => _a32d2_Parser((s => l => {
    let rest
rest = s;
    let loc
loc = l;
    let acc
acc = (null);
    while(((__x__) => {
  if (__x__.length === 2 && __x__[0] !== null && __x__[0].v.length === 2 && true && true && __x__[0].n === null && true) {
    let [{ v: [parsed, r] },loc_] = __x__;
    return (() => {
      rest = r;
    loc = loc_;
    acc = ({ v: parsed, n: acc });
    return true;

})();
  }
  else if (true) {
    return false;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_a32d2_parse__141(p)(rest)(loc))) {
({ __constructor: "Unit", __args: [] })
};
    return ([({ v: ([_1dd2b_reverse__149(acc), rest]), n: null }), loc]);
})));
export let _a32d2_sepBy__144 = (parser => separator => _a32d2_alt__155((() => {
      return _a32d2_chain__154((first => _a32d2_chain__152((rest => _a32d2_of__150()(({ v: first, n: rest }))))(_a32d2_many__148(_4be73_andDo__147(parser)(separator)))))(parser);

})())(_a32d2_fail__145));
export let _a32d2_maybeSepBy__143 = (parser => sep => (__P__2 => (__$PH3__ => _a32d2_alt__155(__$PH3__)(_a32d2_pure__151((null))))(_a32d2_sepBy__144(parser)(__P__2)))(sep));
export let _1dd2b_repeat__266 = (a => count => {
    let $_result_;
    let $_continue_ = true;
    let $_start_ = {};
    let $_end_ = $_start_;
    let $$a = a;
    let $$count = count;

    while($_continue_) {
      let $a = $$a;
      let $count = $$count;

        $_continue_ = false;
        ($count <= 0 ? ($_end_.n = (null), $_result_ = $_start_.n) : ($_end_ = $_end_.n = { v: $a }, $$a = $a, $$count = ($count - 1), $_continue_ = true))
    }
    return $_result_;
});
export let _1dd2b_repeatWith__4 = (f => count => {
    let helper__0
helper__0 = (index => {
    let $_result_;
    let $_continue_ = true;
    let $_start_ = {};
    let $_end_ = $_start_;
    let $$index = index;

    while($_continue_) {
      let $index = $$index;

        $_continue_ = false;
        ($index >= count ? ($_end_.n = (null), $_result_ = $_start_.n) : ($_end_ = $_end_.n = { v: f($index) }, $$index = ($index + 1), $_continue_ = true))
    }
    return $_result_;
});
    return helper__0(0);
});
export let _1dd2b_range__3 = (start => end => _1dd2b_repeatWith__4((i => (i + start)))((end - start)));
;
;
;
;
;
;
;
export let _1dd2b_pure__128 = (x => ({ v: x, n: null }));
export let _1dd2b_of__127 = (_ => _1dd2b_pure__128);
export let _1dd2b_map__7 = (f => list => {
    let $_result_;
    let $_continue_ = true;
    let $_start_ = {};
    let $_end_ = $_start_;
    let $$f = f;
    let $$list = list;

    while($_continue_) {
      let $f = $$f;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($_end_ = $_end_.n = { v: $f(a) }, $$f = $f, $$list = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_end_.n = (null), $_result_ = $_start_.n);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
export let _db1f9_words__6 = (m => _1dd2b_map__7(_db1f9_Word(m))(({ v: `hey`, n: { v: `there`, n: { v: `spreadable`, n: { v: `butter`, n: null } } } })));
export let _1dd2b_map__5 = (f => list => {
    let $_result_;
    let $_continue_ = true;
    let $_start_ = {};
    let $_end_ = $_start_;
    let $$f = f;
    let $$list = list;

    while($_continue_) {
      let $f = $$f;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($_end_ = $_end_.n = { v: $f(a) }, $$f = $f, $$list = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_end_.n = (null), $_result_ = $_start_.n);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
export let _db1f9_nums__2 = (m => (__P__1 => _1dd2b_map__5(_db1f9_Numeric(m))(_1dd2b_range__3(0)(__P__1)))(3));
export let _db1f9_NUMBERS_AND_WORDS__1 = (__listCtorSpread__(_db1f9_nums__2(_db1f9_Gold), __listCtorSpread__(_db1f9_nums__2(_db1f9_Silver), __listCtorSpread__(_db1f9_nums__2(_db1f9_Bronze), __listCtorSpread__(_db1f9_words__6(_db1f9_Gold), __listCtorSpread__(_db1f9_words__6(_db1f9_Silver), _db1f9_words__6(_db1f9_Bronze)))))));
export let _1dd2b_map__258 = (f => list => {
    let $_result_;
    let $_continue_ = true;
    let $_start_ = {};
    let $_end_ = $_start_;
    let $$f = f;
    let $$list = list;

    while($_continue_) {
      let $f = $$f;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($_end_ = $_end_.n = { v: $f(a) }, $$f = $f, $$list = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_end_.n = (null), $_result_ = $_start_.n);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
export let _1dd2b_map__253 = (f => list => {
    let $_result_;
    let $_continue_ = true;
    let $_start_ = {};
    let $_end_ = $_start_;
    let $$f = f;
    let $$list = list;

    while($_continue_) {
      let $f = $$f;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($_end_ = $_end_.n = { v: $f(a) }, $$f = $f, $$list = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_end_.n = (null), $_result_ = $_start_.n);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
export let _1dd2b_map__224 = (f => list => {
    let $_result_;
    let $_continue_ = true;
    let $_start_ = {};
    let $_end_ = $_start_;
    let $$f = f;
    let $$list = list;

    while($_continue_) {
      let $f = $$f;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($_end_ = $_end_.n = { v: $f(a) }, $$f = $f, $$list = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_end_.n = (null), $_result_ = $_start_.n);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
export let _1dd2b_length__241 = (list => {
    let helper__0
helper__0 = (list_ => count => {
    let $_result_;
    let $_continue_ = true;
    let $$list_ = list_;
    let $$count = count;

    while($_continue_) {
      let $list_ = $$list_;
      let $count = $$count;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ === null) {
    ($_result_ = $count);
  }
  else if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($$list_ = xs, $$count = ($count + 1), $_continue_ = true);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list_)
    }
    return $_result_;
});
    return helper__0(list)(0);
});
export let _1dd2b_slice__240 = (start => end => list => {
    let len
len = _1dd2b_length__241(list);
    let helper__0
helper__0 = (start_ => end_ => list_ => {
    let $_result_;
    let $_continue_ = true;
    let $_start_ = {};
    let $_end_ = $_start_;
    let $$start_ = start_;
    let $$end_ = end_;
    let $$list_ = list_;

    while($_continue_) {
      let $start_ = $$start_;
      let $end_ = $$end_;
      let $list_ = $$list_;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ === null) {
    ($_end_.n = (null), $_result_ = $_start_.n);
  }
  else if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    (__eq__($start_, 0) && $end_ >= 0 ? ($_end_ = $_end_.n = { v: a }, $$start_ = 0, $$end_ = ($end_ - 1), $$list_ = xs, $_continue_ = true) : ($start_ > 0 ? ($$start_ = ($start_ - 1), $$end_ = ($end_ - 1), $$list_ = xs, $_continue_ = true) : ($_end_.n = (null), $_result_ = $_start_.n)));
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list_)
    }
    return $_result_;
});
    let realStart
realStart = (start < 0 ? (start + len) : start);
    let realEnd
realEnd = (__eq__(end, 0) ? (len - 1) : (end < 0 ? ((end + len) - 1) : end));
    return helper__0(realStart)(realEnd)(list);
});
export let _1dd2b_take__239 = (n => list => _1dd2b_slice__240(0)((n - 1))(list));
export let _1dd2b_isEmpty__242 = (xs => ((__x__) => {
  if (__x__ === null) {
    return true;
  }
  else if (true) {
    return false;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(xs));
export let _1dd2b_isEmpty__222 = (xs => ((__x__) => {
  if (__x__ === null) {
    return true;
  }
  else if (true) {
    return false;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(xs));
export let _1dd2b_intersperse__235 = (a => xs => {
    let $_result_;
    let $_continue_ = true;
    let $_start_ = {};
    let $_end_ = $_start_;
    let $$a = a;
    let $$xs = xs;

    while($_continue_) {
      let $a = $$a;
      let $xs = $$xs;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ === null) {
    ($_end_.n = (null), $_result_ = $_start_.n);
  }
  else if (__x__ !== null && true && __x__.n === null) {
    let { v: one } = __x__;
    ($_end_.n = ({ v: one, n: null }), $_result_ = $_start_.n);
  }
  else if (__x__ !== null && true && __x__.n !== null && true && __x__.n.n === null) {
    let { v: one, n: { v: two } } = __x__;
    ($_end_.n = ({ v: one, n: { v: $a, n: { v: two, n: null } } }), $_result_ = $_start_.n);
  }
  else if (__x__ !== null && true && true) {
    let { v: one, n: rest } = __x__;
    ($_end_.n = { v: one, n: { v: $a }}, $_end_ = $_end_.n.n, $$a = $a, $$xs = rest, $_continue_ = true);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($xs)
    }
    return $_result_;
});
export let _1dd2b_intersperse__218 = (a => xs => {
    let $_result_;
    let $_continue_ = true;
    let $_start_ = {};
    let $_end_ = $_start_;
    let $$a = a;
    let $$xs = xs;

    while($_continue_) {
      let $a = $$a;
      let $xs = $$xs;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ === null) {
    ($_end_.n = (null), $_result_ = $_start_.n);
  }
  else if (__x__ !== null && true && __x__.n === null) {
    let { v: one } = __x__;
    ($_end_.n = ({ v: one, n: null }), $_result_ = $_start_.n);
  }
  else if (__x__ !== null && true && __x__.n !== null && true && __x__.n.n === null) {
    let { v: one, n: { v: two } } = __x__;
    ($_end_.n = ({ v: one, n: { v: $a, n: { v: two, n: null } } }), $_result_ = $_start_.n);
  }
  else if (__x__ !== null && true && true) {
    let { v: one, n: rest } = __x__;
    ($_end_.n = { v: one, n: { v: $a }}, $_end_ = $_end_.n.n, $$a = $a, $$xs = rest, $_continue_ = true);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($xs)
    }
    return $_result_;
});
export let _1dd2b_includes__48 = (x => list => {
    let $_result_;
    let $_continue_ = true;
    let $$x = x;
    let $$list = list;

    while($_continue_) {
      let $x = $$x;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ === null) {
    ($_result_ = false);
  }
  else if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    (__eq__(a, $x) ? ($_result_ = true) : ($$x = $x, $$list = xs, $_continue_ = true));
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
export let _1dd2b_drop__243 = (n => list => _1dd2b_slice__240(n)(0)(list));
export let _10f79_show__66 = (c =>  {
    if (c === '\\') {
      return `'\\\\'`;
    } else if (c === '\'') {
      return `'\\''`;
    } else if (c === '\n') {
      return `'\\n'`;
    } else if (c === '\t') {
      return `'\\t'`;
    } else if (c === '\r') {
      return `'\\r'`;
    } else {
      return `'${c}'`;
    }
  } );
export let _10f79_show__210 = (n =>  "" + n );
export let _a32d2_show__209 = (__$a__ => ((__x__) => {
  if (__x__.__constructor === "Loc" && true && true && true) {
    let a0 = __x__.__args[0];
    let a1 = __x__.__args[1];
    let a2 = __x__.__args[2];
    return `Loc(` + _10f79_show__210(a0) + `, ` + _10f79_show__210(a1) + `, ` + _10f79_show__210(a2) + `)`;
  }
  else if (true) {
    return `Unknown`;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__$a__));
export let _a32d2_show__208 = (__$a__ => ((__x__) => {
  if (__x__.__constructor === "Error" && true) {
    let a0 = __x__.__args[0];
    return `Error(` + _a32d2_show__209(a0) + `)`;
  }
  else if (true) {
    return `Unknown`;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__$a__));
export let _10f79_show__14 = (s =>  `"${s.split('').map(escapeChar).join('')}"` );
export let _10f79_show__13 = (n =>  "" + n );
export let _db1f9_show__11 = (__$a__ => ((__x__) => {
  if (__x__.__constructor === "Numeric" && true && true) {
    let a0 = __x__.__args[0];
    let a1 = __x__.__args[1];
    return `Numeric(` + _db1f9_show__12(a0) + `, ` + _10f79_show__13(a1) + `)`;
  }
  else if (__x__.__constructor === "Word" && true && true) {
    let a0 = __x__.__args[0];
    let a1 = __x__.__args[1];
    return `Word(` + _db1f9_show__12(a0) + `, ` + _10f79_show__14(a1) + `)`;
  }
  else if (true) {
    return `Unknown`;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__$a__));
export let _10f79_show__10 = (list => {
    let showItems__0
showItems__0 = (_list => acc => {
    let $_result_;
    let $_continue_ = true;
    let $$_list = _list;
    let $$acc = acc;

    while($_continue_) {
      let $_list = $$_list;
      let $acc = $$acc;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ === null) {
    ($_result_ = $acc);
  }
  else if (__x__ !== null && true && __x__.n === null) {
    let { v: last } = __x__;
    (__eq__($acc, ``) ? ($_result_ = _db1f9_show__11(last)) : ($_result_ = $acc + `, ` + _db1f9_show__11(last)));
  }
  else if (__x__ !== null && true && true) {
    let { v: item, n: next } = __x__;
    (__eq__($acc, ``) ? ($$_list = next, $$acc = _db1f9_show__11(item), $_continue_ = true) : ($$_list = next, $$acc = $acc + `, ` + _db1f9_show__11(item), $_continue_ = true));
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($_list)
    }
    return $_result_;
});
    return `[` + showItems__0(list)(``) + `]`;
});
export let _10f79_reduceLeft__86 = (f => acc => list => {
    let $_result_;
    let $_continue_ = true;
    let $$f = f;
    let $$acc = acc;
    let $$list = list;

    while($_continue_) {
      let $f = $$f;
      let $acc = $$acc;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($$f = $f, $$acc = $f($acc)(a), $$list = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
;
export let _1dd2b_reduce__85 = _10f79_reduceLeft__86;
export let _10f79_reduceLeft__233 = (f => acc => list => {
    let $_result_;
    let $_continue_ = true;
    let $$f = f;
    let $$acc = acc;
    let $$list = list;

    while($_continue_) {
      let $f = $$f;
      let $acc = $$acc;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($$f = $f, $$acc = $f($acc)(a), $$list = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
export let _1dd2b_reduceRight__231 = (f => acc => list => (__P__2 => _10f79_reduceLeft__233((a => b => f(b)(a)))(acc)(_1dd2b_reverse__232(__P__2)))(list));
export let _1fda7_hcat__228 = _1dd2b_reduceRight__231(_1fda7_beside__230)(_1fda7_empty__229);
export let _1fda7_sepBy__234 = (separator => docs => (__P__4 => _1fda7_hcat__228(_1dd2b_intersperse__235(separator)(__P__4)))(docs));
export let _10f79_reduceLeft__206 = (f => acc => list => {
    let $_result_;
    let $_continue_ = true;
    let $$f = f;
    let $$acc = acc;
    let $$list = list;

    while($_continue_) {
      let $f = $$f;
      let $acc = $$acc;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($$f = $f, $$acc = $f($acc)(a), $$list = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
export let _1dd2b_reduce__205 = _10f79_reduceLeft__206;
export let _a32d2_choice__202 = (ps => _1dd2b_reduce__205(_a32d2_alt__124)(_a32d2_fail__203)(ps));
export let _10f79_reduceLeft__200 = (f => acc => list => {
    let $_result_;
    let $_continue_ = true;
    let $$f = f;
    let $$acc = acc;
    let $$list = list;

    while($_continue_) {
      let $f = $$f;
      let $acc = $$acc;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($$f = $f, $$acc = $f($acc)(a), $$list = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
export let _10f79_reduceLeft__174 = (f => acc => list => {
    let $_result_;
    let $_continue_ = true;
    let $$f = f;
    let $$acc = acc;
    let $$list = list;

    while($_continue_) {
      let $f = $$f;
      let $acc = $$acc;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($$f = $f, $$acc = $f($acc)(a), $$list = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
export let _10f79_reduceLeft__112 = (f => acc => list => {
    let $_result_;
    let $_continue_ = true;
    let $$f = f;
    let $$acc = acc;
    let $$list = list;

    while($_continue_) {
      let $f = $$f;
      let $acc = $$acc;
      let $list = $$list;

        $_continue_ = false;
        ((__x__) => {
  if (__x__ !== null && true && true) {
    let { v: a, n: xs } = __x__;
    ($$f = $f, $$acc = $f($acc)(a), $$list = xs, $_continue_ = true);
  }
  else if (__x__ === null) {
    ($_result_ = $acc);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($list)
    }
    return $_result_;
});
export let _1dd2b_reduce__111 = _10f79_reduceLeft__112;
export let _a32d2_choice__109 = (ps => _1dd2b_reduce__111(_a32d2_alt__110)(_a32d2_fail__30)(ps));
export let _10f79_dictReduceRight__170 = (f => acc => dict => {
    let $_result_;
    let $_continue_ = true;
    let $$f = f;
    let $$acc = acc;
    let $$dict = dict;

    while($_continue_) {
      let $f = $$f;
      let $acc = $$acc;
      let $dict = $$dict;

        $_continue_ = false;
        ((__x__) => {
  if (__x__.__constructor === "DictRBEmpty") {
    ($_result_ = $acc);
  }
  else if (__x__.__constructor === "DictRBNode" && true && true && true && true && true) {
    let k = __x__.__args[1];
    let v = __x__.__args[2];
    let left = __x__.__args[3];
    let right = __x__.__args[4];
    ($$f = $f, $$acc = $f(k)(v)(_10f79_dictReduceRight__170($f)($acc)(right)), $$dict = left, $_continue_ = true);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($dict)
    }
    return $_result_;
});
export let _10f79_dictToList__169 = (dict => _10f79_dictReduceRight__170((k => v => list => ({ v: ([k, v]), n: list })))((null))(dict));
export let _31104_toList__248 = _10f79_dictToList__169;
export let _10f79_dictReduceRight__165 = (f => acc => dict => {
    let $_result_;
    let $_continue_ = true;
    let $$f = f;
    let $$acc = acc;
    let $$dict = dict;

    while($_continue_) {
      let $f = $$f;
      let $acc = $$acc;
      let $dict = $$dict;

        $_continue_ = false;
        ((__x__) => {
  if (__x__.__constructor === "DictRBEmpty") {
    ($_result_ = $acc);
  }
  else if (__x__.__constructor === "DictRBNode" && true && true && true && true && true) {
    let k = __x__.__args[1];
    let v = __x__.__args[2];
    let left = __x__.__args[3];
    let right = __x__.__args[4];
    ($$f = $f, $$acc = $f(k)(v)(_10f79_dictReduceRight__165($f)($acc)(right)), $$dict = left, $_continue_ = true);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($dict)
    }
    return $_result_;
});
export let _10f79_dictToList__164 = (dict => _10f79_dictReduceRight__165((k => v => list => ({ v: ([k, v]), n: list })))((null))(dict));
export let _31104_toList__255 = _10f79_dictToList__164;

const escapeChar = (c) => {
  if (c === '\\') {
    return `\\\\`
  } else if (c === '"') {
    return `\\"`
  } else if (c === '\n') {
    return `\\n`
  } else if (c === '\t') {
    return `\\t`
  } else if (c === '\r') {
    return `\\r`
  } else {
    return c
  }
}
;
let _10f79_concatString__84 = (a => b =>  a + b );
export let _10f79_compare__161 = (a => b => ( a > b  ? _10f79_GT : ( a === b  ? _10f79_EQ : _10f79_LT)));

import prelude_terminal_readline from "readline"
;
 let readLineInterface = null ;
export let _91e6c_compare__160 = (__$a__ => __$b__ => ((__x__) => {
  if (__x__.length === 2 && __x__[0].__constructor === "Boolean" && true && __x__[1].__constructor === "Boolean" && true) {
    let [{ __args: [a0]},{ __args: [b0]}] = __x__;
    return _10f79_compare__161(a0)(b0);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Boolean" && true && true) {
    let [{ __args: []},] = __x__;
    return _10f79_LT;
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Byte" && true && __x__[1].__constructor === "Byte" && true) {
    let [{ __args: [a0]},{ __args: [b0]}] = __x__;
    return _10f79_compare__161(a0)(b0);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Byte" && true && true) {
    let [{ __args: []},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "ByteArray" && true && __x__[1].__constructor === "ByteArray" && true) {
    let [{ __args: [a0]},{ __args: [b0]}] = __x__;
    return _10f79_compare__162(a0)(b0);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "ByteArray" && true && true) {
    let [{ __args: []},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Byte" && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Char" && true && __x__[1].__constructor === "Char" && true) {
    let [{ __args: [a0]},{ __args: [b0]}] = __x__;
    return _10f79_compare__161(a0)(b0);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Char" && true && true) {
    let [{ __args: []},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Byte" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ByteArray" && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Constructor" && true && true && __x__[1].__constructor === "Constructor" && true && true) {
    let [{ __args: [a0, a1]},{ __args: [b0, b1]}] = __x__;
    return (() => {
      let __r__0
__r__0 = _10f79_compare__161(a0)(b0);
    return (__eq__(__r__0, _10f79_EQ) ? _10f79_compare__162(a1)(b1) : __r__0);

})();
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Constructor" && true && true && true) {
    let [{ __args: [, ]},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Byte" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ByteArray" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Char" && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "DictionaryConstructor" && true && __x__[1].__constructor === "DictionaryConstructor" && true) {
    let [{ __args: [a0]},{ __args: [b0]}] = __x__;
    return _10f79_compare__163(a0)(b0);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "DictionaryConstructor" && true && true) {
    let [{ __args: []},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Byte" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ByteArray" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Char" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Constructor" && true && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Float" && true && __x__[1].__constructor === "Float" && true) {
    let [{ __args: [a0]},{ __args: [b0]}] = __x__;
    return _10f79_compare__161(a0)(b0);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Float" && true && true) {
    let [{ __args: []},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Byte" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ByteArray" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Char" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Constructor" && true && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "DictionaryConstructor" && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Integer" && true && __x__[1].__constructor === "Integer" && true) {
    let [{ __args: [a0]},{ __args: [b0]}] = __x__;
    return _10f79_compare__161(a0)(b0);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Integer" && true && true) {
    let [{ __args: []},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Byte" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ByteArray" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Char" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Constructor" && true && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "DictionaryConstructor" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Float" && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "ListConstructor" && true && __x__[1].__constructor === "ListConstructor" && true) {
    let [{ __args: [a0]},{ __args: [b0]}] = __x__;
    return _10f79_compare__162(a0)(b0);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "ListConstructor" && true && true) {
    let [{ __args: []},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Byte" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ByteArray" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Char" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Constructor" && true && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "DictionaryConstructor" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Float" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Integer" && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Record" && true && __x__[1].__constructor === "Record" && true) {
    let [{ __args: [a0]},{ __args: [b0]}] = __x__;
    return _10f79_compare__168(a0)(b0);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Record" && true && true) {
    let [{ __args: []},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Byte" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ByteArray" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Char" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Constructor" && true && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "DictionaryConstructor" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Float" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Integer" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ListConstructor" && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Str" && true && __x__[1].__constructor === "Str" && true) {
    let [{ __args: [a0]},{ __args: [b0]}] = __x__;
    return _10f79_compare__161(a0)(b0);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Str" && true && true) {
    let [{ __args: []},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Byte" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ByteArray" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Char" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Constructor" && true && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "DictionaryConstructor" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Float" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Integer" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ListConstructor" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Record" && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "TupleConstructor" && true && __x__[1].__constructor === "TupleConstructor" && true) {
    let [{ __args: [a0]},{ __args: [b0]}] = __x__;
    return _10f79_compare__162(a0)(b0);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "TupleConstructor" && true && true) {
    let [{ __args: []},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Byte" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ByteArray" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Char" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Constructor" && true && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "DictionaryConstructor" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Float" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Integer" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ListConstructor" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Record" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Str" && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Unit" && __x__[1].__constructor === "Unit") {
    let [{ __args: []},{ __args: []}] = __x__;
    return _10f79_EQ;
  }
  else if (__x__.length === 2 && __x__[0].__constructor === "Unit" && true) {
    let [{ __args: []},__other__] = __x__;
    return ((__x__) => {
  if (__x__.__constructor === "Boolean" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Byte" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ByteArray" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Char" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Constructor" && true && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "DictionaryConstructor" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Float" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Integer" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "ListConstructor" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Record" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "Str" && true) {
    return _10f79_GT;
  }
  else if (__x__.__constructor === "TupleConstructor" && true) {
    return _10f79_GT;
  }
  else if (true) {
    return _10f79_LT;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__other__);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(([__$a__, __$b__])));
export let _10f79_compare__162 = (a => b => {
    let $_result_;
    let $_continue_ = true;
    let $$a = a;
    let $$b = b;

    while($_continue_) {
      let $a = $$a;
      let $b = $$b;

        $_continue_ = false;
        ((__x__) => {
  if (__x__.length === 2 && __x__[0] === null && __x__[1] === null) {
    let [,] = __x__;
    ($_result_ = _10f79_EQ);
  }
  else if (__x__.length === 2 && __x__[0] === null && true) {
    let [,] = __x__;
    ($_result_ = _10f79_LT);
  }
  else if (__x__.length === 2 && true && __x__[1] === null) {
    let [,] = __x__;
    ($_result_ = _10f79_GT);
  }
  else if (__x__.length === 2 && __x__[0] !== null && true && true && __x__[1] !== null && true && true) {
    let [{ v: itemA, n: xsa },{ v: itemB, n: xsb }] = __x__;
    (() => {
      let r
r = _91e6c_compare__160(itemA)(itemB);
    return (__eq__(r, _10f79_EQ) ? ($$a = xsa, $$b = xsb, $_continue_ = true) : ($_result_ = r));

})();
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(([$a, $b]))
    }
    return $_result_;
});
export let _10f79_compare__166 = (a => b => {
    let $_result_;
    let $_continue_ = true;
    let $$a = a;
    let $$b = b;

    while($_continue_) {
      let $a = $$a;
      let $b = $$b;

        $_continue_ = false;
        ((__x__) => {
  if (__x__.length === 2 && __x__[0] === null && __x__[1] === null) {
    let [,] = __x__;
    ($_result_ = _10f79_EQ);
  }
  else if (__x__.length === 2 && __x__[0] === null && true) {
    let [,] = __x__;
    ($_result_ = _10f79_LT);
  }
  else if (__x__.length === 2 && true && __x__[1] === null) {
    let [,] = __x__;
    ($_result_ = _10f79_GT);
  }
  else if (__x__.length === 2 && __x__[0] !== null && true && true && __x__[1] !== null && true && true) {
    let [{ v: itemA, n: xsa },{ v: itemB, n: xsb }] = __x__;
    (() => {
      let r
r = _10f79_compare__167(itemA)(itemB);
    return (__eq__(r, _10f79_EQ) ? ($$a = xsa, $$b = xsb, $_continue_ = true) : ($_result_ = r));

})();
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(([$a, $b]))
    }
    return $_result_;
});
export let _10f79_compare__171 = (a => b => {
    let $_result_;
    let $_continue_ = true;
    let $$a = a;
    let $$b = b;

    while($_continue_) {
      let $a = $$a;
      let $b = $$b;

        $_continue_ = false;
        ((__x__) => {
  if (__x__.length === 2 && __x__[0] === null && __x__[1] === null) {
    let [,] = __x__;
    ($_result_ = _10f79_EQ);
  }
  else if (__x__.length === 2 && __x__[0] === null && true) {
    let [,] = __x__;
    ($_result_ = _10f79_LT);
  }
  else if (__x__.length === 2 && true && __x__[1] === null) {
    let [,] = __x__;
    ($_result_ = _10f79_GT);
  }
  else if (__x__.length === 2 && __x__[0] !== null && true && true && __x__[1] !== null && true && true) {
    let [{ v: itemA, n: xsa },{ v: itemB, n: xsb }] = __x__;
    (() => {
      let r
r = _10f79_compare__172(itemA)(itemB);
    return (__eq__(r, _10f79_EQ) ? ($$a = xsa, $$b = xsb, $_continue_ = true) : ($_result_ = r));

})();
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(([$a, $b]))
    }
    return $_result_;
});
export let _10f79_compare__163 = (a => b => _10f79_compare__166(_10f79_dictToList__164(a))(_10f79_dictToList__164(b)));
export let _10f79_compare__168 = (a => b => _10f79_compare__171(_10f79_dictToList__169(a))(_10f79_dictToList__169(b)));
export let _10f79_compare__167 = (a => b => ((__x__) => {
  if (__x__.length === 2 && __x__[0].length === 2 && true && true && __x__[1].length === 2 && true && true) {
    let [[a1, a2],[b1, b2]] = __x__;
    return (() => {
      let r0
r0 = _91e6c_compare__160(a1)(b1);
    return (__eq__(r0, _10f79_EQ) ? _91e6c_compare__160(a2)(b2) : r0);

})();
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(([a, b])));
export let _10f79_compare__172 = (a => b => ((__x__) => {
  if (__x__.length === 2 && __x__[0].length === 2 && true && true && __x__[1].length === 2 && true && true) {
    let [[a1, a2],[b1, b2]] = __x__;
    return (() => {
      let r0
r0 = _10f79_compare__161(a1)(b1);
    return (__eq__(r0, _10f79_EQ) ? _91e6c_compare__160(a2)(b2) : r0);

})();
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(([a, b])));
export let _10f79_balanceDict__199 = (color => k => v => left => right => ((__x__) => {
  if (__x__.__constructor === "DictRBNode" && __x__.__args[0].__constructor === "DictRBRed" && true && true && true && true) {
    let rK = __x__.__args[1];
    let rV = __x__.__args[2];
    let rLeft = __x__.__args[3];
    let rRight = __x__.__args[4];
    return ((__x__) => {
  if (__x__.__constructor === "DictRBNode" && __x__.__args[0].__constructor === "DictRBRed" && true && true && true && true) {
    let lK = __x__.__args[1];
    let lV = __x__.__args[2];
    let lLeft = __x__.__args[3];
    let lRight = __x__.__args[4];
    return _10f79_DictRBNode(_10f79_DictRBRed)(k)(v)(_10f79_DictRBNode(_10f79_DictRBBlack)(lK)(lV)(lLeft)(lRight))(_10f79_DictRBNode(_10f79_DictRBBlack)(rK)(rV)(rLeft)(rRight));
  }
  else if (true) {
    return _10f79_DictRBNode(color)(rK)(rV)(_10f79_DictRBNode(_10f79_DictRBRed)(k)(v)(left)(rLeft))(rRight);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(left);
  }
  else if (true) {
    return ((__x__) => {
  if (__x__.__constructor === "DictRBNode" && __x__.__args[0].__constructor === "DictRBRed" && true && true && __x__.__args[3].__constructor === "DictRBNode" && __x__.__args[3].__args[0].__constructor === "DictRBRed" && true && true && true && true && true) {
    let lK = __x__.__args[1];
    let lV = __x__.__args[2];
    let llK = __x__.__args[3].__args[1];
    let llV = __x__.__args[3].__args[2];
    let llLeft = __x__.__args[3].__args[3];
    let llRight = __x__.__args[3].__args[4];
    let lRight = __x__.__args[4];
    return _10f79_DictRBNode(_10f79_DictRBRed)(lK)(lV)(_10f79_DictRBNode(_10f79_DictRBBlack)(llK)(llV)(llLeft)(llRight))(_10f79_DictRBNode(_10f79_DictRBBlack)(k)(v)(lRight)(right));
  }
  else if (true) {
    return _10f79_DictRBNode(color)(k)(v)(left)(right);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(left);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(right));
let _10f79_insertHelp__198 = (key => value => dict => ((__x__) => {
  if (__x__.__constructor === "DictRBEmpty") {
    return _10f79_DictRBNode(_10f79_DictRBRed)(key)(value)(_10f79_DictRBEmpty)(_10f79_DictRBEmpty);
  }
  else if (__x__.__constructor === "DictRBNode" && true && true && true && true && true) {
    let nColor = __x__.__args[0];
    let nKey = __x__.__args[1];
    let nValue = __x__.__args[2];
    let nLeft = __x__.__args[3];
    let nRight = __x__.__args[4];
    return ((__x__) => {
  if (__x__.__constructor === "LT") {
    return _10f79_balanceDict__199(nColor)(nKey)(nValue)(_10f79_insertHelp__198(key)(value)(nLeft))(nRight);
  }
  else if (__x__.__constructor === "EQ") {
    return _10f79_DictRBNode(nColor)(nKey)(value)(nLeft)(nRight);
  }
  else if (__x__.__constructor === "GT") {
    return _10f79_balanceDict__199(nColor)(nKey)(nValue)(nLeft)(_10f79_insertHelp__198(key)(value)(nRight));
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_10f79_compare__161(key)(nKey));
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(dict));
export let _10f79_dictInsert__197 = (key => value => dict => ((__x__) => {
  if (__x__.__constructor === "DictRBNode" && __x__.__args[0].__constructor === "DictRBRed" && true && true && true && true) {
    let k = __x__.__args[1];
    let v = __x__.__args[2];
    let left = __x__.__args[3];
    let right = __x__.__args[4];
    return _10f79_DictRBNode(_10f79_DictRBBlack)(k)(v)(left)(right);
  }
  else if (true) {
    let or = __x__;
    return or;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_10f79_insertHelp__198(key)(value)(dict)));
export let _10f79_dictFromList__196 = (items => _10f79_reduceLeft__200((dict => item => ((__x__) => {
  if (__x__.length === 2 && true && true) {
    let [k,v] = __x__;
    return _10f79_dictInsert__197(k)(v)(dict);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(item)))(_10f79_DictRBEmpty)(items));
export let _31104_fromList__195 = _10f79_dictFromList__196;
export let _10f79_balanceDict__173 = (color => k => v => left => right => ((__x__) => {
  if (__x__.__constructor === "DictRBNode" && __x__.__args[0].__constructor === "DictRBRed" && true && true && true && true) {
    let rK = __x__.__args[1];
    let rV = __x__.__args[2];
    let rLeft = __x__.__args[3];
    let rRight = __x__.__args[4];
    return ((__x__) => {
  if (__x__.__constructor === "DictRBNode" && __x__.__args[0].__constructor === "DictRBRed" && true && true && true && true) {
    let lK = __x__.__args[1];
    let lV = __x__.__args[2];
    let lLeft = __x__.__args[3];
    let lRight = __x__.__args[4];
    return _10f79_DictRBNode(_10f79_DictRBRed)(k)(v)(_10f79_DictRBNode(_10f79_DictRBBlack)(lK)(lV)(lLeft)(lRight))(_10f79_DictRBNode(_10f79_DictRBBlack)(rK)(rV)(rLeft)(rRight));
  }
  else if (true) {
    return _10f79_DictRBNode(color)(rK)(rV)(_10f79_DictRBNode(_10f79_DictRBRed)(k)(v)(left)(rLeft))(rRight);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(left);
  }
  else if (true) {
    return ((__x__) => {
  if (__x__.__constructor === "DictRBNode" && __x__.__args[0].__constructor === "DictRBRed" && true && true && __x__.__args[3].__constructor === "DictRBNode" && __x__.__args[3].__args[0].__constructor === "DictRBRed" && true && true && true && true && true) {
    let lK = __x__.__args[1];
    let lV = __x__.__args[2];
    let llK = __x__.__args[3].__args[1];
    let llV = __x__.__args[3].__args[2];
    let llLeft = __x__.__args[3].__args[3];
    let llRight = __x__.__args[3].__args[4];
    let lRight = __x__.__args[4];
    return _10f79_DictRBNode(_10f79_DictRBRed)(lK)(lV)(_10f79_DictRBNode(_10f79_DictRBBlack)(llK)(llV)(llLeft)(llRight))(_10f79_DictRBNode(_10f79_DictRBBlack)(k)(v)(lRight)(right));
  }
  else if (true) {
    return _10f79_DictRBNode(color)(k)(v)(left)(right);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(left);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(right));
let _10f79_insertHelp__159 = (key => value => dict => ((__x__) => {
  if (__x__.__constructor === "DictRBEmpty") {
    return _10f79_DictRBNode(_10f79_DictRBRed)(key)(value)(_10f79_DictRBEmpty)(_10f79_DictRBEmpty);
  }
  else if (__x__.__constructor === "DictRBNode" && true && true && true && true && true) {
    let nColor = __x__.__args[0];
    let nKey = __x__.__args[1];
    let nValue = __x__.__args[2];
    let nLeft = __x__.__args[3];
    let nRight = __x__.__args[4];
    return ((__x__) => {
  if (__x__.__constructor === "LT") {
    return _10f79_balanceDict__173(nColor)(nKey)(nValue)(_10f79_insertHelp__159(key)(value)(nLeft))(nRight);
  }
  else if (__x__.__constructor === "EQ") {
    return _10f79_DictRBNode(nColor)(nKey)(value)(nLeft)(nRight);
  }
  else if (__x__.__constructor === "GT") {
    return _10f79_balanceDict__173(nColor)(nKey)(nValue)(nLeft)(_10f79_insertHelp__159(key)(value)(nRight));
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_91e6c_compare__160(key)(nKey));
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(dict));
export let _10f79_dictInsert__158 = (key => value => dict => ((__x__) => {
  if (__x__.__constructor === "DictRBNode" && __x__.__args[0].__constructor === "DictRBRed" && true && true && true && true) {
    let k = __x__.__args[1];
    let v = __x__.__args[2];
    let left = __x__.__args[3];
    let right = __x__.__args[4];
    return _10f79_DictRBNode(_10f79_DictRBBlack)(k)(v)(left)(right);
  }
  else if (true) {
    let or = __x__;
    return or;
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_10f79_insertHelp__159(key)(value)(dict)));
export let _10f79_dictFromList__157 = (items => _10f79_reduceLeft__174((dict => item => ((__x__) => {
  if (__x__.length === 2 && true && true) {
    let [k,v] = __x__;
    return _10f79_dictInsert__158(k)(v)(dict);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(item)))(_10f79_DictRBEmpty)(items));
export let _31104_fromList__156 = _10f79_dictFromList__157;
export let _10f79_assoc__83 = (_ => _10f79_concatString__84);
export let _10f79_mappend__82 = (_ => _10f79_assoc__83());
let _936d2_colorize__219 = (color => v => _10f79_assoc__83()(color)(_10f79_assoc__83()(v)(_936d2_END_COLOR__220)));
export let _051c8_slice__28 = (start => end => s =>  { return s.slice(start, end === 0 ? s.length : end) } );
export let _051c8_prependChar__38 = (c => s =>  { return c + s } );
export let _051c8_match__106 = (regex => input =>  input.match(regex) !== null );
export let _d4261_isLetter__105 = (c => (__P__1 => _051c8_match__106(`[a-zA-Z]+`)((__$PH1__ => _051c8_prependChar__38(__$PH1__)(``))(__P__1)))(c));
export let _051c8_length__213 = (s =>  { return s.length } );
export let _1fda7_text__212 = (s => ((__x__) => {
  if (__x__ === "") {
    return _1fda7_EmptyDoc;
  }
  else if (true) {
    let or = __x__;
    return _1fda7_TextDoc(_051c8_length__213(or))(or);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(s));
export let _051c8_join__217 = (a => xs => (__P__1 => _1dd2b_reduce__85(_10f79_mappend__82())(``)(_1dd2b_intersperse__218(a)(__P__1)))(xs));
export let _936d2_ansiColor__216 = (parts => str => _936d2_colorize__219(`[` + _051c8_join__217(`;`)(parts) + `m`)(str));
export let _936d2_text__214 = ({ black: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGBlack, n: null })), red: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGRed, n: null })), green: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGGreen, n: null })), yellow: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGYellow, n: null })), blue: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGBlue, n: null })), magenta: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGMagenta, n: null })), cyan: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGCyan, n: null })), white: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGWhite, n: null })), brightBlack: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGBrightBlack, n: null })), brightRed: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGBrightRed, n: null })), brightGreen: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGBrightGreen, n: null })), brightYellow: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGBrightYellow, n: null })), brightBlue: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGBrightBlue, n: null })), brightMagenta: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGBrightMagenta, n: null })), brightCyan: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGBrightCyan, n: null })), brightWhite: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FGBrightWhite, n: null })), underline: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FormatUnderline, n: null })), bold: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FormatBold, n: null })), boldUnderline: _936d2_ansiColor__216(({ v: _936d2_ansi__215.FormatBold, n: { v: _936d2_ansi__215.FormatUnderline, n: null } })) });
let _91e6c_valueToDoc__211 = (colored => v => ((__x__) => {
  if (__x__.__constructor === "Unit") {
    return _1fda7_text__212(`{}`);
  }
  else if (__x__.__constructor === "Integer" && true) {
    let i = __x__.__args[0];
    return (colored ? _1fda7_textWithLength__221(_051c8_length__213(i))(_936d2_text__214.brightYellow(i)) : _1fda7_text__212(i));
  }
  else if (__x__.__constructor === "Float" && true) {
    let f = __x__.__args[0];
    return (colored ? _1fda7_textWithLength__221(_051c8_length__213(f))(_936d2_text__214.brightYellow(f)) : _1fda7_text__212(f));
  }
  else if (__x__.__constructor === "Byte" && true) {
    let b = __x__.__args[0];
    return (colored ? _1fda7_textWithLength__221(2)(_936d2_text__214.brightYellow(b)) : _1fda7_text__212(b));
  }
  else if (__x__.__constructor === "Boolean" && true) {
    let b = __x__.__args[0];
    return (colored ? _1fda7_textWithLength__221(_051c8_length__213(b))(_936d2_text__214.brightYellow(b)) : _1fda7_text__212(b));
  }
  else if (__x__.__constructor === "Char" && true) {
    let c = __x__.__args[0];
    return (colored ? _1fda7_textWithLength__221(_051c8_length__213(c))(_936d2_text__214.brightCyan(c)) : _1fda7_text__212(c));
  }
  else if (__x__.__constructor === "Str" && true) {
    let s = __x__.__args[0];
    return (colored ? _1fda7_textWithLength__221(_051c8_length__213(s))(_936d2_text__214.brightCyan(s)) : _1fda7_text__212(s));
  }
  else if (__x__.__constructor === "Constructor" && true && true) {
    let n = __x__.__args[0];
    let args = __x__.__args[1];
    return (_1dd2b_isEmpty__222(args) ? _1fda7_text__212(n) : _1fda7_group__237(_1fda7_hcat__228(({ v: _1fda7_text__212(n), n: { v: _1fda7_text__212(`(`), n: { v: _1fda7_nest__236(2)(_1fda7_hcat__228(({ v: _1fda7_linebreak__223, n: { v: _1fda7_sepBy__234(_1fda7_hcat__228(({ v: _1fda7_comma__225, n: { v: _1fda7_line__227, n: null } })))(_1dd2b_map__224(_91e6c_valueToDoc__211(colored))(args)), n: null } }))), n: { v: _1fda7_linebreak__223, n: { v: _1fda7_text__212(`)`), n: null } } } } }))));
  }
  else if (__x__.__constructor === "ByteArray" && true) {
    let bytes = __x__.__args[0];
    return (() => {
      let groupBytes__0
groupBytes__0 = (bs => result => (_1dd2b_isEmpty__222(bs) ? result : (() => {
      let currentGroup
currentGroup = (__P__15 => _1fda7_hcat__228(_1dd2b_map__224(_91e6c_valueToDoc__211(colored))(_1dd2b_take__239(8)(__P__15))))(bs);
    return (_1dd2b_isEmpty__242(result) ? groupBytes__0(_1dd2b_drop__243(8)(bs))(({ v: currentGroup, n: null })) : groupBytes__0(_1dd2b_drop__243(8)(bs))((__listCtorSpread__(result, { v: currentGroup, n: null }))));

})()));
    return _1fda7_group__237(_1fda7_hcat__228(({ v: _1fda7_text__212(`ByteArray`), n: { v: _1fda7_text__212(`(`), n: { v: _1fda7_nest__236(2)(_1fda7_hcat__228(({ v: _1fda7_linebreak__223, n: { v: _1fda7_sepBy__234(_1fda7_softline__244)(groupBytes__0(bytes)((null))), n: null } }))), n: { v: _1fda7_linebreak__223, n: { v: _1fda7_text__212(`)`), n: null } } } } })));

})();
  }
  else if (__x__.__constructor === "ListConstructor" && true) {
    let items = __x__.__args[0];
    return _1fda7_group__237(_1fda7_hcat__228(({ v: _1fda7_lbracket__245, n: { v: _1fda7_nest__236(2)(_1fda7_hcat__228(({ v: _1fda7_linebreak__223, n: { v: _1fda7_sepBy__234(_1fda7_hcat__228(({ v: _1fda7_comma__225, n: { v: _1fda7_line__227, n: null } })))(_1dd2b_map__224(_91e6c_valueToDoc__211(colored))(items)), n: null } }))), n: { v: _1fda7_linebreak__223, n: { v: _1fda7_rbracket__246, n: null } } } })));
  }
  else if (__x__.__constructor === "TupleConstructor" && true) {
    let items = __x__.__args[0];
    return _1fda7_group__237(_1fda7_hcat__228(({ v: _1fda7_text__212(`#`), n: { v: _1fda7_lbracket__245, n: { v: _1fda7_nest__236(2)(_1fda7_hcat__228(({ v: _1fda7_linebreak__223, n: { v: _1fda7_sepBy__234(_1fda7_hcat__228(({ v: _1fda7_comma__225, n: { v: _1fda7_line__227, n: null } })))(_1dd2b_map__224(_91e6c_valueToDoc__211(colored))(items)), n: null } }))), n: { v: _1fda7_linebreak__223, n: { v: _1fda7_rbracket__246, n: null } } } } })));
  }
  else if (__x__.__constructor === "Record" && true) {
    let fields = __x__.__args[0];
    return _1fda7_group__237(_1fda7_hcat__228(({ v: _1fda7_lbrace__247, n: { v: _1fda7_nest__236(2)(_1fda7_hcat__228(({ v: _1fda7_line__227, n: { v: _1fda7_sepBy__234(_1fda7_hcat__228(({ v: _1fda7_comma__225, n: { v: _1fda7_line__227, n: null } })))(_1dd2b_map__253((f => _1fda7_hcat__228(({ v: _1fda7_text__212(_6b70e_fst__249(f)), n: { v: _1fda7_colon__250, n: { v: _1fda7_space__251, n: { v: _91e6c_valueToDoc__211(colored)(_6b70e_snd__252(f)), n: null } } } }))))(_31104_toList__248(fields))), n: null } }))), n: { v: _1fda7_line__227, n: { v: _1fda7_rbrace__254, n: null } } } })));
  }
  else if (__x__.__constructor === "DictionaryConstructor" && true) {
    let fields = __x__.__args[0];
    return _1fda7_group__237(_1fda7_hcat__228(({ v: _1fda7_text__212(`{{`), n: { v: _1fda7_nest__236(2)(_1fda7_hcat__228(({ v: _1fda7_line__227, n: { v: _1fda7_sepBy__234(_1fda7_hcat__228(({ v: _1fda7_comma__225, n: { v: _1fda7_line__227, n: null } })))(_1dd2b_map__258((f => _1fda7_hcat__228(({ v: _91e6c_valueToDoc__211(colored)(_6b70e_fst__256(f)), n: { v: _1fda7_colon__250, n: { v: _1fda7_space__251, n: { v: _91e6c_valueToDoc__211(colored)(_6b70e_snd__257(f)), n: null } } } }))))(_31104_toList__255(fields))), n: null } }))), n: { v: _1fda7_line__227, n: { v: _1fda7_text__212(`}}`), n: null } } } })));
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(v));
export let _051c8_fromList__69 = (list =>  {
  let chars = []
  while (list !== null) {
    chars.push(list.v)
    list = list.n
  }
  return chars.join('')
} );
export let _051c8_repeat__265 = (c => n => (__P__6 => _051c8_fromList__69(_1dd2b_repeat__266(c)(__P__6)))(n));
let _1fda7_indentation__264 = (n => _051c8_repeat__265(String.fromCodePoint(32))(n));
export let _051c8_singleton__79 = (c => _051c8_fromList__69(({ v: c, n: null })));
export let _051c8_drop__27 = (n => s => _051c8_slice__28(n)(0)(s));
export let _051c8_appendChar__263 = (c => s =>  { return s + c } );
export let _1fda7_prettyPrint__259 = (width => doc => {
    let helper__0
helper__0 = (pretty => d => {
    let $_result_;
    let $_continue_ = true;
    let $$pretty = pretty;
    let $$d = d;

    while($_continue_) {
      let $pretty = $$pretty;
      let $d = $$d;

        $_continue_ = false;
        ((__x__) => {
  if (__x__.__constructor === "SEmpty") {
    ($_result_ = $pretty);
  }
  else if (__x__.__constructor === "SChar" && true && true) {
    let c = __x__.__args[0];
    let next = __x__.__args[1];
    ($$pretty = _051c8_appendChar__263(c)($pretty), $$d = next, $_continue_ = true);
  }
  else if (__x__.__constructor === "SText" && true && true && true) {
    let s = __x__.__args[1];
    let next = __x__.__args[2];
    ($$pretty = _10f79_assoc__83()($pretty)(s), $$d = next(), $_continue_ = true);
  }
  else if (__x__.__constructor === "SLine" && true && true) {
    let i = __x__.__args[0];
    let next = __x__.__args[1];
    ($$pretty = _10f79_assoc__83()($pretty)(_10f79_assoc__83()(`\n`)(_1fda7_indentation__264(i))), $$d = next, $_continue_ = true);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})($d)
    }
    return $_result_;
});
    return helper__0(``)(_1fda7_renderPretty__260(0)(width)(doc));
});
let _051c8__charAt__22 = (nothing => just => n => s =>  {
  const c = s[n]
  return !!c ? just(c) : nothing
} );
export let _051c8_charAt__21 = (n => s => _051c8__charAt__22(_2e42b_Nothing)(_2e42b_Just)(n)(s));
export let _051c8_firstChar__20 = _051c8_charAt__21(0);
export let _a32d2_anyChar__26 = _a32d2_Parser((s => l => ((__x__) => {
  if (__x__.__constructor === "Just" && true) {
    let c = __x__.__args[0];
    return ([({ v: ([c, _051c8_drop__27(1)(s)]), n: null }), _a32d2_incLoc__29(c)(l)]);
  }
  else if (__x__.__constructor === "Nothing") {
    return ([(null), l]);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_051c8_charAt__21(0)(s))));
export let _a32d2_satisfy__25 = (pred => _a32d2_chain__36(_3d769_ifElse__35(pred)(_a32d2_of__33())(_3d769_always__32(_a32d2_fail__30)))(_a32d2_anyChar__26));
export let _a32d2_char__23 = (__P__3 => _a32d2_satisfy__25(_3d769_equals__24(__P__3)));
let _91e6c_escapedChar__68 = (() => {
      return _a32d2_chain__71((backslash => _a32d2_chain__71((escaped => (__P__5 => _a32d2_of__70()(_051c8_fromList__69(__P__5)))(({ v: backslash, n: { v: escaped, n: null } }))))(_a32d2_anyChar__26)))(_a32d2_char__23(String.fromCodePoint(92)));

})();
let _91e6c_maybeMinus__126 = _a32d2_alt__55(_a32d2_map__129(_1dd2b_of__127())(_a32d2_char__23(String.fromCodePoint(45))))(_a32d2_pure__45((null)));
export let _a32d2_string__19 = (s => ((__x__) => {
  if (__x__.__constructor === "Just" && true) {
    let c = __x__.__args[0];
    return (__P__5 => (__$PH4__ => _a32d2_ap__40(__$PH4__)(_a32d2_string__19(_051c8_drop__27(1)(s))))(_a32d2_map__39((a => b => _051c8_prependChar__38(a)(b)))(__P__5)))(_a32d2_char__23(c));
  }
  else if (__x__.__constructor === "Nothing") {
    return _a32d2_pure__43(``);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(_051c8_firstChar__20(s)));
let _91e6c_boolean__61 = (__P__4 => _a32d2_map__60(_91e6c_Boolean)(_a32d2_alt__62(_a32d2_string__19(`false`))(__P__4)))(_a32d2_string__19(`true`));
export let _a32d2_digit__107 = _a32d2_satisfy__25(_d4261_isDigit__108);
let _91e6c_float__125 = (() => {
      return _a32d2_chain__130((minus => _a32d2_chain__130((before => _a32d2_chain__75((dot => _a32d2_chain__130((after => (__P__3 => _a32d2_of__73()(_91e6c_Float(_051c8_fromList__69(__P__3))))((__listCtorSpread__(minus, __listCtorSpread__(before, { v: dot, n: after }))))))(_a32d2_some__49(_a32d2_digit__107))))(_a32d2_char__23(String.fromCodePoint(46)))))(_a32d2_some__49(_a32d2_digit__107))))(_91e6c_maybeMinus__126);

})();
let _91e6c_integer__132 = (() => {
      return _a32d2_chain__130((minus => _a32d2_chain__130((digits => (__P__1 => _a32d2_of__73()(_91e6c_Integer(_051c8_fromList__69(__P__1))))((__listCtorSpread__(minus, digits)))))(_a32d2_some__49(_a32d2_digit__107))))(_91e6c_maybeMinus__126);

})();
export let _a32d2_letter__104 = _a32d2_satisfy__25(_d4261_isLetter__105);
let _91e6c_alphaNumericalName__103 = (() => {
      return _a32d2_chain__71((firstChar => _a32d2_chain__113((rest => (__P__10 => _a32d2_of__70()(_051c8_fromList__69(__P__10)))(({ v: firstChar, n: rest }))))(_a32d2_many__50(_a32d2_choice__109(({ v: _a32d2_letter__104, n: { v: _a32d2_digit__107, n: null } }))))))(_a32d2_letter__104);

})();
export let _a32d2_notOneOf__64 = (cs => _a32d2_satisfy__25(_3d769_complement__65((__$PH2__ => _1dd2b_includes__48(__$PH2__)(cs)))));
let _91e6c_char__63 = (() => {
      return _a32d2_chain__75((_ => _a32d2_chain__77((c => _a32d2_chain__75((_ => (__P__7 => _a32d2_of__73()(_91e6c_Char(__P__7)))(c)))(_a32d2_char__23(String.fromCodePoint(39)))))((__P__6 => (__$PH1__ => _a32d2_alt__62(__$PH1__)(_a32d2_map__72((c => `'` + c + `'`))(_91e6c_escapedChar__68)))(_a32d2_map__67((c => _10f79_show__66(c)))(__P__6)))(_a32d2_notOneOf__64(({ v: String.fromCodePoint(39), n: { v: String.fromCodePoint(92), n: null } }))))))(_a32d2_char__23(String.fromCodePoint(39)));

})();
let _91e6c_string__78 = (() => {
      return _a32d2_chain__75((_ => _a32d2_chain__77((content => _a32d2_chain__75((_ => (__P__9 => _a32d2_of__73()(_91e6c_Str(__P__9)))(content)))(_a32d2_char__23(String.fromCodePoint(34)))))((__P__8 => _a32d2_map__72((s => `"` + s + `"`))(_a32d2_map__87(_1dd2b_reduce__85(_10f79_mappend__82())(``))(_a32d2_many__80((__$PH2__ => _a32d2_alt__62(__$PH2__)(_91e6c_escapedChar__68))(_a32d2_map__67(_051c8_singleton__79)(__P__8))))))(_a32d2_notOneOf__64(({ v: String.fromCodePoint(34), n: { v: String.fromCodePoint(92), n: null } }))))))(_a32d2_char__23(String.fromCodePoint(34)));

})();
export let _a32d2_oneOf__47 = (cs => _a32d2_satisfy__25((__$PH1__ => _1dd2b_includes__48(__$PH1__)(cs))));
let _91e6c__byte__91 = (() => {
      return _a32d2_chain__75((char1 => _a32d2_chain__75((char2 => _a32d2_of__73()(_91e6c_Byte(_051c8_fromList__69(({ v: char1, n: { v: char2, n: null } }))))))(_a32d2_oneOf__47(_91e6c_BYTE_CHARS__92))))(_a32d2_oneOf__47(_91e6c_BYTE_CHARS__92));

})();
let _91e6c_integerOrByte__131 = (() => {
      return _a32d2_chain__130((minus => _a32d2_chain__130((digits => (__P__2 => _a32d2_of__73()(_91e6c_Integer(_051c8_fromList__69(__P__2))))((__listCtorSpread__(minus, digits)))))(_a32d2_some__49(_a32d2_oneOf__47(_91e6c_BYTE_CHARS__92)))))(_91e6c_maybeMinus__126);

})();
export let _a32d2_spaces__46 = (__P__6 => _a32d2_some__49(_a32d2_oneOf__47(__P__6)))(({ v: String.fromCodePoint(32), n: { v: String.fromCodePoint(10), n: { v: String.fromCodePoint(13), n: { v: String.fromCodePoint(9), n: null } } } }));
export let _a32d2_token__44 = (__$PH5__ => _adecf_apL__56(__$PH5__)(_a32d2_alt__55(_a32d2_spaces__46)(_a32d2_pure__45((null)))));
export let _a32d2_symbol__18 = (__P__7 => _a32d2_token__44(_a32d2_string__19(__P__7)));
let _91e6c_unit__17 = _a32d2_map__60((_ => _91e6c_Unit))(_a32d2_symbol__18(`{}`));
export let _a32d2_token__93 = (__$PH5__ => _adecf_apL__94(__$PH5__)(_a32d2_alt__55(_a32d2_spaces__46)(_a32d2_pure__45((null)))));
let _91e6c_byte__90 = _a32d2_token__93(_91e6c__byte__91);
let _91e6c_byteArray__89 = (() => {
      return _a32d2_chain__77((name => _a32d2_chain__77((_ => _a32d2_chain__100((args => _a32d2_chain__77((_ => _a32d2_of__73()(_91e6c_ByteArray(args))))(_a32d2_symbol__18(`)`))))(_a32d2_many__98(_a32d2_token__93(_91e6c_byte__90)))))(_a32d2_symbol__18(`(`))))(_a32d2_string__19(`ByteArray`));

})();
let _91e6c_constructor__102 = (() => {
      let nary
nary = (() => {
      return _a32d2_chain__77((name => _a32d2_chain__77((_ => _a32d2_chain__100((args => _a32d2_chain__77((_ => _a32d2_of__73()(_91e6c_Constructor(name)(args))))(_a32d2_symbol__18(`)`))))(_a32d2_maybeSepBy__114(_91e6c_value__16)(_a32d2_symbol__18(`,`)))))(_a32d2_symbol__18(`(`))))(_91e6c_alphaNumericalName__103);

})();
    let nullary
nullary = (() => {
      return _a32d2_chain__77((name => _a32d2_of__73()(_91e6c_Constructor(name)((null)))))(_91e6c_alphaNumericalName__103);

})();
    return _a32d2_alt__124(nary)(nullary);

})();
let _91e6c_recordField__177 = (() => {
      return _a32d2_chain__182((fieldName => _a32d2_chain__182((_ => _a32d2_chain__180((fieldValue => _a32d2_of__178()(([fieldName, fieldValue]))))(_a32d2_token__93(_91e6c_value__16))))(_a32d2_symbol__18(`:`))))(_a32d2_token__44(_91e6c_alphaNumericalName__103));

})();
let _91e6c_record__176 = (() => {
      return _a32d2_chain__77((_ => _a32d2_chain__201((fields => _a32d2_chain__77((_ => _a32d2_chain__77((_ => (__P__11 => _a32d2_of__73()(_91e6c_Record(_31104_fromList__195(__P__11))))(fields)))(_a32d2_symbol__18(`}`))))(_a32d2_alt__62(_a32d2_symbol__18(`,`))(_a32d2_pure__43(``)))))(_a32d2_sepBy__183(_91e6c_recordField__177)(_a32d2_symbol__18(`,`)))))(_a32d2_symbol__18(`{`));

})();
let _91e6c_dictionaryField__136 = (() => {
      return _a32d2_chain__140((fieldKey => _a32d2_chain__142((_ => _a32d2_chain__140((fieldValue => _a32d2_of__138()(([fieldKey, fieldValue]))))(_a32d2_token__93(_91e6c_value__16))))(_a32d2_symbol__18(`:`))))(_a32d2_token__93(_a32d2_lazy__137((_ => _91e6c_value__16))));

})();
let _91e6c_dictionary__135 = (() => {
      return _a32d2_chain__77((_ => _a32d2_chain__175((fields => _a32d2_chain__77((_ => _a32d2_chain__77((_ => (__P__12 => _a32d2_of__73()(_91e6c_DictionaryConstructor(_31104_fromList__156(__P__12))))(fields)))(_a32d2_symbol__18(`}}`))))(_a32d2_alt__62(_a32d2_symbol__18(`,`))(_a32d2_pure__43(``)))))(_a32d2_maybeSepBy__143(_91e6c_dictionaryField__136)(_a32d2_symbol__18(`,`)))))(_a32d2_symbol__18(`{{`));

})();
let _91e6c_list__134 = (() => {
      return _a32d2_chain__77((_ => _a32d2_chain__100((items => _a32d2_chain__77((_ => (__P__13 => _a32d2_of__73()(_91e6c_ListConstructor(__P__13)))(items)))(_a32d2_symbol__18(`]`))))(_a32d2_maybeSepBy__114(_91e6c_value__16)(_a32d2_symbol__18(`,`)))))(_a32d2_symbol__18(`[`));

})();
let _91e6c_tuple__133 = (() => {
      return _a32d2_chain__77((_ => _a32d2_chain__100((items => _a32d2_chain__77((_ => (__P__14 => _a32d2_of__73()(_91e6c_TupleConstructor(__P__14)))(items)))(_a32d2_symbol__18(`]`))))(_a32d2_maybeSepBy__114(_91e6c_value__16)(_a32d2_symbol__18(`,`)))))(_a32d2_symbol__18(`#[`));

})();
let _91e6c_value__16 = _a32d2_choice__202(({ v: _91e6c_unit__17, n: { v: _91e6c_boolean__61, n: { v: _91e6c_char__63, n: { v: _91e6c_string__78, n: { v: _91e6c_byteArray__89, n: { v: _91e6c_constructor__102, n: { v: _91e6c_float__125, n: { v: _91e6c_integerOrByte__131, n: { v: _91e6c_integer__132, n: { v: _91e6c_byte__90, n: { v: _91e6c_tuple__133, n: { v: _91e6c_list__134, n: { v: _91e6c_dictionary__135, n: { v: _91e6c_record__176, n: null } } } } } } } } } } } } } }));
let _91e6c_printMadlibValue__15 = (width => colored => madlibValue => (__P__16 => (__W__17 => ((__x__) => {
  if (__x__.__constructor === "Left" && true) {
    let r = __x__.__args[0];
    return _10f79_assoc__83()(`Unknown`)(_a32d2_show__208(r));
  }
  else if (__x__.__constructor === "Right" && true) {
    let parsed = __x__.__args[0];
    return (__P__18 => _1fda7_prettyPrint__259(width)(_91e6c_valueToDoc__211(colored)(__P__18)))(parsed);
  }
  else {
    console.log('non exhaustive patterns for value: ', __x__.toString()); 
    console.trace(); 
    throw 'non exhaustive patterns!';
  }
})(__W__17))(_a32d2_runParser__207(_91e6c_value__16)(__P__16)))(madlibValue));
export let _91e6c_pShow__9 = (a => (__P__19 => _91e6c_printMadlibValue__15(80)(false)(_10f79_show__10(__P__19)))(a));
export let _9bab1_pTrace__8 = (v => a => {
    _9bab1_putLine__267(v + ` ` + _91e6c_pShow__9(a));
    return a;
});
let _16e8b_main = (_ => {
    _9bab1_pTrace__8(`NUMBS Should have no Tin`)(_db1f9_NUMBERS_AND_WORDS__1);
    return ({ __constructor: "Unit", __args: [] });
});
export default { _db1f9_show__12, _d4261_isDigit__108, _a32d2_pure__74, _a32d2_pure__45, _a32d2_pure__43, _a32d2_pure__34, _a32d2_pure__190, _a32d2_pure__179, _a32d2_pure__151, _a32d2_pure__139, _a32d2_pure__120, _a32d2_runParser__207, _a32d2_of__73, _a32d2_of__70, _a32d2_of__33, _a32d2_of__189, _a32d2_of__178, _a32d2_of__150, _a32d2_of__138, _a32d2_of__119, _a32d2_map__95, _a32d2_map__87, _a32d2_map__72, _a32d2_map__67, _a32d2_map__60, _a32d2_map__57, _a32d2_map__52, _a32d2_map__39, _a32d2_map__129, _a32d2_lazy__137, _a32d2_chain__77, _a32d2_chain__75, _a32d2_chain__71, _a32d2_chain__54, _a32d2_chain__36, _a32d2_chain__201, _a32d2_chain__193, _a32d2_chain__191, _a32d2_chain__182, _a32d2_chain__180, _a32d2_chain__175, _a32d2_chain__154, _a32d2_chain__152, _a32d2_chain__142, _a32d2_chain__140, _a32d2_chain__130, _a32d2_chain__122, _a32d2_chain__121, _a32d2_chain__113, _a32d2_chain__100, _a32d2_ap__96, _adecf_apL__94, _a32d2_ap__58, _adecf_apL__56, _a32d2_ap__40, _a32d2_alt__62, _a32d2_alt__55, _a32d2_alt__194, _a32d2_alt__155, _a32d2_alt__124, _a32d2_alt__123, _a32d2_alt__110, _a32d2_aempty__31, _a32d2_fail__30, _a32d2_aempty__204, _a32d2_fail__203, _a32d2_aempty__185, _a32d2_fail__184, _a32d2_aempty__146, _a32d2_fail__145, _a32d2_aempty__117, _a32d2_fail__116, _9bab1_putLine__267, _936d2_ansi__215, _801bd_min__261, _6b70e_snd__257, _6b70e_snd__252, _6b70e_fst__256, _6b70e_fst__249, _4be73_andDo__186, _4be73_andDo__147, _4be73_andDo__118, _3d769_ifElse__35, _3d769_equals__24, _3d769_complement__65, _3d769_always__32, _1fda7_textWithLength__221, _1fda7_nest__236, _1fda7_linebreak__223, _1fda7_line__227, _1fda7_flatten__238, _1fda7_group__237, _1fda7_softline__244, _1fda7_renderPretty__260, _1fda7_empty__229, _1fda7_char__226, _1fda7_colon__250, _1fda7_comma__225, _1fda7_lbrace__247, _1fda7_lbracket__245, _1fda7_rbrace__254, _1fda7_rbracket__246, _1fda7_space__251, _1fda7_beside__230, _1dd2b_reverse__99, _a32d2_many__98, _a32d2_sepBy__115, _a32d2_maybeSepBy__114, _1dd2b_reverse__81, _a32d2_many__80, _1dd2b_reverse__51, _a32d2_many__50, _a32d2_some__49, _1dd2b_reverse__232, _1dd2b_reverse__188, _a32d2_many__187, _a32d2_sepBy__183, _1dd2b_reverse__149, _a32d2_many__148, _a32d2_sepBy__144, _a32d2_maybeSepBy__143, _1dd2b_repeat__266, _1dd2b_repeatWith__4, _1dd2b_range__3, _1dd2b_pure__128, _1dd2b_of__127, _1dd2b_map__7, _db1f9_words__6, _1dd2b_map__5, _db1f9_nums__2, _db1f9_NUMBERS_AND_WORDS__1, _1dd2b_map__258, _1dd2b_map__253, _1dd2b_map__224, _1dd2b_length__241, _1dd2b_slice__240, _1dd2b_take__239, _1dd2b_isEmpty__242, _1dd2b_isEmpty__222, _1dd2b_intersperse__235, _1dd2b_intersperse__218, _1dd2b_includes__48, _1dd2b_drop__243, _10f79_show__66, _10f79_show__210, _a32d2_show__209, _a32d2_show__208, _10f79_show__14, _10f79_show__13, _db1f9_show__11, _10f79_show__10, _10f79_reduceLeft__86, _1dd2b_reduce__85, _10f79_reduceLeft__233, _1dd2b_reduceRight__231, _1fda7_hcat__228, _1fda7_sepBy__234, _10f79_reduceLeft__206, _1dd2b_reduce__205, _a32d2_choice__202, _10f79_reduceLeft__200, _10f79_reduceLeft__174, _10f79_reduceLeft__112, _1dd2b_reduce__111, _a32d2_choice__109, _10f79_dictReduceRight__170, _10f79_dictToList__169, _31104_toList__248, _10f79_dictReduceRight__165, _10f79_dictToList__164, _31104_toList__255, _10f79_compare__161, _91e6c_compare__160, _10f79_compare__162, _10f79_compare__166, _10f79_compare__171, _10f79_compare__163, _10f79_compare__168, _10f79_compare__167, _10f79_compare__172, _10f79_balanceDict__199, _10f79_dictInsert__197, _10f79_dictFromList__196, _31104_fromList__195, _10f79_balanceDict__173, _10f79_dictInsert__158, _10f79_dictFromList__157, _31104_fromList__156, _10f79_assoc__83, _10f79_mappend__82, _051c8_slice__28, _051c8_prependChar__38, _051c8_match__106, _d4261_isLetter__105, _051c8_length__213, _1fda7_text__212, _051c8_join__217, _936d2_ansiColor__216, _936d2_text__214, _051c8_fromList__69, _051c8_repeat__265, _051c8_singleton__79, _051c8_drop__27, _051c8_appendChar__263, _1fda7_prettyPrint__259, _051c8_charAt__21, _051c8_firstChar__20, _a32d2_anyChar__26, _a32d2_satisfy__25, _a32d2_char__23, _a32d2_string__19, _a32d2_digit__107, _a32d2_letter__104, _a32d2_notOneOf__64, _a32d2_oneOf__47, _a32d2_spaces__46, _a32d2_token__44, _a32d2_symbol__18, _a32d2_token__93, _91e6c_pShow__9, _9bab1_pTrace__8, _10f79_DictRBBlack, _10f79_DictRBRed, _10f79_DictRBEmpty, _10f79_DictRBNode, _10f79_LT, _10f79_EQ, _10f79_GT, _3d769_Loop, _3d769_Done, _2e42b_Just, _2e42b_Nothing, _1e6e4_Wish, _77488_AddressAlreadyInUse, _77488_ArgumentListToLong, _77488_PermissionDenied, _77488_UnknownError, _42e19_Left, _42e19_Right, _a32d2_Loc, _a32d2_Parser, _a32d2_Error, _a32d2_Config, _1fda7_EmptyDoc, _1fda7_CharDoc, _1fda7_TextDoc, _1fda7_LineDoc, _1fda7_CatDoc, _1fda7_NestDoc, _1fda7_UnionDoc, _1fda7_ColumnDoc, _1fda7_NestingDoc, _1fda7_SEmpty, _1fda7_SChar, _1fda7_SText, _1fda7_SLine, _db1f9_Gold, _db1f9_Silver, _db1f9_Bronze, _db1f9_Tin, _db1f9_Numeric, _db1f9_Word };
const __makeArgs = () => {
  let list = {}
  let start = list
  Object.keys(process.argv.slice(0)).forEach((key) => {
    list = list.n = { v: process.argv[key], n: null }
  }, {})
  return {
    n: start.n.n.n,
    v: start.n.n.v
  }
}
_16e8b_main(__makeArgs())
