// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
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
(o.warn = (function() { 
var G__12147__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12147 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12148__i = 0, G__12148__a = new Array(arguments.length -  0);
while (G__12148__i < G__12148__a.length) {G__12148__a[G__12148__i] = arguments[G__12148__i + 0]; ++G__12148__i;}
  args = new cljs.core.IndexedSeq(G__12148__a,0,null);
} 
return G__12147__delegate.call(this,args);};
G__12147.cljs$lang$maxFixedArity = 0;
G__12147.cljs$lang$applyTo = (function (arglist__12149){
var args = cljs.core.seq(arglist__12149);
return G__12147__delegate(args);
});
G__12147.cljs$core$IFn$_invoke$arity$variadic = G__12147__delegate;
return G__12147;
})()
);

(o.error = (function() { 
var G__12150__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12151__i = 0, G__12151__a = new Array(arguments.length -  0);
while (G__12151__i < G__12151__a.length) {G__12151__a[G__12151__i] = arguments[G__12151__i + 0]; ++G__12151__i;}
  args = new cljs.core.IndexedSeq(G__12151__a,0,null);
} 
return G__12150__delegate.call(this,args);};
G__12150.cljs$lang$maxFixedArity = 0;
G__12150.cljs$lang$applyTo = (function (arglist__12152){
var args = cljs.core.seq(arglist__12152);
return G__12150__delegate(args);
});
G__12150.cljs$core$IFn$_invoke$arity$variadic = G__12150__delegate;
return G__12150;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
