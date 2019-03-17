// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__17002){
var vec__17003 = p__17002;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17003,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17003,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__17006 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17006,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17006,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17006,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__17010 = arguments.length;
switch (G__17010) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__17012_17036 = clojure.data.equality_partition;
var G__17013_17037 = "null";
var G__17014_17038 = ((function (G__17012_17036,G__17013_17037){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17012_17036,G__17013_17037))
;
goog.object.set(G__17012_17036,G__17013_17037,G__17014_17038);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__17015_17039 = clojure.data.equality_partition;
var G__17016_17040 = "string";
var G__17017_17041 = ((function (G__17015_17039,G__17016_17040){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17015_17039,G__17016_17040))
;
goog.object.set(G__17015_17039,G__17016_17040,G__17017_17041);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__17018_17042 = clojure.data.equality_partition;
var G__17019_17043 = "number";
var G__17020_17044 = ((function (G__17018_17042,G__17019_17043){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17018_17042,G__17019_17043))
;
goog.object.set(G__17018_17042,G__17019_17043,G__17020_17044);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__17021_17045 = clojure.data.equality_partition;
var G__17022_17046 = "array";
var G__17023_17047 = ((function (G__17021_17045,G__17022_17046){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__17021_17045,G__17022_17046))
;
goog.object.set(G__17021_17045,G__17022_17046,G__17023_17047);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__17024_17048 = clojure.data.equality_partition;
var G__17025_17049 = "function";
var G__17026_17050 = ((function (G__17024_17048,G__17025_17049){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17024_17048,G__17025_17049))
;
goog.object.set(G__17024_17048,G__17025_17049,G__17026_17050);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__17027_17051 = clojure.data.equality_partition;
var G__17028_17052 = "boolean";
var G__17029_17053 = ((function (G__17027_17051,G__17028_17052){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__17027_17051,G__17028_17052))
;
goog.object.set(G__17027_17051,G__17028_17052,G__17029_17053);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__17030_17054 = clojure.data.equality_partition;
var G__17031_17055 = "_";
var G__17032_17056 = ((function (G__17030_17054,G__17031_17055){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__17030_17054,G__17031_17055))
;
goog.object.set(G__17030_17054,G__17031_17055,G__17032_17056);
goog.object.set(clojure.data.Diff,"null",true);

var G__17057_17081 = clojure.data.diff_similar;
var G__17058_17082 = "null";
var G__17059_17083 = ((function (G__17057_17081,G__17058_17082){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__17057_17081,G__17058_17082))
;
goog.object.set(G__17057_17081,G__17058_17082,G__17059_17083);

goog.object.set(clojure.data.Diff,"string",true);

var G__17060_17084 = clojure.data.diff_similar;
var G__17061_17085 = "string";
var G__17062_17086 = ((function (G__17060_17084,G__17061_17085){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__17060_17084,G__17061_17085))
;
goog.object.set(G__17060_17084,G__17061_17085,G__17062_17086);

goog.object.set(clojure.data.Diff,"number",true);

var G__17063_17087 = clojure.data.diff_similar;
var G__17064_17088 = "number";
var G__17065_17089 = ((function (G__17063_17087,G__17064_17088){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__17063_17087,G__17064_17088))
;
goog.object.set(G__17063_17087,G__17064_17088,G__17065_17089);

goog.object.set(clojure.data.Diff,"array",true);

var G__17066_17090 = clojure.data.diff_similar;
var G__17067_17091 = "array";
var G__17068_17092 = ((function (G__17066_17090,G__17067_17091){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__17066_17090,G__17067_17091))
;
goog.object.set(G__17066_17090,G__17067_17091,G__17068_17092);

goog.object.set(clojure.data.Diff,"function",true);

var G__17069_17093 = clojure.data.diff_similar;
var G__17070_17094 = "function";
var G__17071_17095 = ((function (G__17069_17093,G__17070_17094){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__17069_17093,G__17070_17094))
;
goog.object.set(G__17069_17093,G__17070_17094,G__17071_17095);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__17072_17096 = clojure.data.diff_similar;
var G__17073_17097 = "boolean";
var G__17074_17098 = ((function (G__17072_17096,G__17073_17097){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__17072_17096,G__17073_17097))
;
goog.object.set(G__17072_17096,G__17073_17097,G__17074_17098);

goog.object.set(clojure.data.Diff,"_",true);

var G__17075_17099 = clojure.data.diff_similar;
var G__17076_17100 = "_";
var G__17077_17101 = ((function (G__17075_17099,G__17076_17100){
return (function (a,b){
var fexpr__17079 = (function (){var G__17080 = clojure.data.equality_partition(a);
var G__17080__$1 = (((G__17080 instanceof cljs.core.Keyword))?G__17080.fqn:null);
switch (G__17080__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17080__$1)].join('')));

}
})();
return (fexpr__17079.cljs$core$IFn$_invoke$arity$2 ? fexpr__17079.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__17079.call(null,a,b));
});})(G__17075_17099,G__17076_17100))
;
goog.object.set(G__17075_17099,G__17076_17100,G__17077_17101);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
