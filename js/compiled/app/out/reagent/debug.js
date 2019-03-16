// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12286__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12287__i = 0, G__12287__a = new Array(arguments.length -  0);
while (G__12287__i < G__12287__a.length) {G__12287__a[G__12287__i] = arguments[G__12287__i + 0]; ++G__12287__i;}
  args = new cljs.core.IndexedSeq(G__12287__a,0,null);
} 
return G__12286__delegate.call(this,args);};
G__12286.cljs$lang$maxFixedArity = 0;
G__12286.cljs$lang$applyTo = (function (arglist__12288){
var args = cljs.core.seq(arglist__12288);
return G__12286__delegate(args);
});
G__12286.cljs$core$IFn$_invoke$arity$variadic = G__12286__delegate;
return G__12286;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12289__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12290__i = 0, G__12290__a = new Array(arguments.length -  0);
while (G__12290__i < G__12290__a.length) {G__12290__a[G__12290__i] = arguments[G__12290__i + 0]; ++G__12290__i;}
  args = new cljs.core.IndexedSeq(G__12290__a,0,null);
} 
return G__12289__delegate.call(this,args);};
G__12289.cljs$lang$maxFixedArity = 0;
G__12289.cljs$lang$applyTo = (function (arglist__12291){
var args = cljs.core.seq(arglist__12291);
return G__12289__delegate(args);
});
G__12289.cljs$core$IFn$_invoke$arity$variadic = G__12289__delegate;
return G__12289;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
