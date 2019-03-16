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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__30388){
var vec__30389 = p__30388;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30389,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30389,(1),null);
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
var vec__30392 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30392,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30392,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30392,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__30396 = arguments.length;
switch (G__30396) {
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

var G__30398_30422 = clojure.data.equality_partition;
var G__30399_30423 = "null";
var G__30400_30424 = ((function (G__30398_30422,G__30399_30423){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__30398_30422,G__30399_30423))
;
goog.object.set(G__30398_30422,G__30399_30423,G__30400_30424);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__30401_30425 = clojure.data.equality_partition;
var G__30402_30426 = "string";
var G__30403_30427 = ((function (G__30401_30425,G__30402_30426){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__30401_30425,G__30402_30426))
;
goog.object.set(G__30401_30425,G__30402_30426,G__30403_30427);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__30404_30428 = clojure.data.equality_partition;
var G__30405_30429 = "number";
var G__30406_30430 = ((function (G__30404_30428,G__30405_30429){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__30404_30428,G__30405_30429))
;
goog.object.set(G__30404_30428,G__30405_30429,G__30406_30430);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__30407_30431 = clojure.data.equality_partition;
var G__30408_30432 = "array";
var G__30409_30433 = ((function (G__30407_30431,G__30408_30432){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__30407_30431,G__30408_30432))
;
goog.object.set(G__30407_30431,G__30408_30432,G__30409_30433);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__30410_30434 = clojure.data.equality_partition;
var G__30411_30435 = "function";
var G__30412_30436 = ((function (G__30410_30434,G__30411_30435){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__30410_30434,G__30411_30435))
;
goog.object.set(G__30410_30434,G__30411_30435,G__30412_30436);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__30413_30437 = clojure.data.equality_partition;
var G__30414_30438 = "boolean";
var G__30415_30439 = ((function (G__30413_30437,G__30414_30438){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__30413_30437,G__30414_30438))
;
goog.object.set(G__30413_30437,G__30414_30438,G__30415_30439);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__30416_30440 = clojure.data.equality_partition;
var G__30417_30441 = "_";
var G__30418_30442 = ((function (G__30416_30440,G__30417_30441){
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
});})(G__30416_30440,G__30417_30441))
;
goog.object.set(G__30416_30440,G__30417_30441,G__30418_30442);
goog.object.set(clojure.data.Diff,"null",true);

var G__30443_30467 = clojure.data.diff_similar;
var G__30444_30468 = "null";
var G__30445_30469 = ((function (G__30443_30467,G__30444_30468){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30443_30467,G__30444_30468))
;
goog.object.set(G__30443_30467,G__30444_30468,G__30445_30469);

goog.object.set(clojure.data.Diff,"string",true);

var G__30446_30470 = clojure.data.diff_similar;
var G__30447_30471 = "string";
var G__30448_30472 = ((function (G__30446_30470,G__30447_30471){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30446_30470,G__30447_30471))
;
goog.object.set(G__30446_30470,G__30447_30471,G__30448_30472);

goog.object.set(clojure.data.Diff,"number",true);

var G__30449_30473 = clojure.data.diff_similar;
var G__30450_30474 = "number";
var G__30451_30475 = ((function (G__30449_30473,G__30450_30474){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30449_30473,G__30450_30474))
;
goog.object.set(G__30449_30473,G__30450_30474,G__30451_30475);

goog.object.set(clojure.data.Diff,"array",true);

var G__30452_30476 = clojure.data.diff_similar;
var G__30453_30477 = "array";
var G__30454_30478 = ((function (G__30452_30476,G__30453_30477){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__30452_30476,G__30453_30477))
;
goog.object.set(G__30452_30476,G__30453_30477,G__30454_30478);

goog.object.set(clojure.data.Diff,"function",true);

var G__30455_30479 = clojure.data.diff_similar;
var G__30456_30480 = "function";
var G__30457_30481 = ((function (G__30455_30479,G__30456_30480){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30455_30479,G__30456_30480))
;
goog.object.set(G__30455_30479,G__30456_30480,G__30457_30481);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__30458_30482 = clojure.data.diff_similar;
var G__30459_30483 = "boolean";
var G__30460_30484 = ((function (G__30458_30482,G__30459_30483){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30458_30482,G__30459_30483))
;
goog.object.set(G__30458_30482,G__30459_30483,G__30460_30484);

goog.object.set(clojure.data.Diff,"_",true);

var G__30461_30485 = clojure.data.diff_similar;
var G__30462_30486 = "_";
var G__30463_30487 = ((function (G__30461_30485,G__30462_30486){
return (function (a,b){
var fexpr__30465 = (function (){var G__30466 = clojure.data.equality_partition(a);
var G__30466__$1 = (((G__30466 instanceof cljs.core.Keyword))?G__30466.fqn:null);
switch (G__30466__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30466__$1)].join('')));

}
})();
return (fexpr__30465.cljs$core$IFn$_invoke$arity$2 ? fexpr__30465.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__30465.call(null,a,b));
});})(G__30461_30485,G__30462_30486))
;
goog.object.set(G__30461_30485,G__30462_30486,G__30463_30487);
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
