// Compiled by ClojureScript 1.10.748 {:static-fns true, :optimize-constants true}
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
var G__12108__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12109__i = 0, G__12109__a = new Array(arguments.length -  0);
while (G__12109__i < G__12109__a.length) {G__12109__a[G__12109__i] = arguments[G__12109__i + 0]; ++G__12109__i;}
  args = new cljs.core.IndexedSeq(G__12109__a,0,null);
} 
return G__12108__delegate.call(this,args);};
G__12108.cljs$lang$maxFixedArity = 0;
G__12108.cljs$lang$applyTo = (function (arglist__12110){
var args = cljs.core.seq(arglist__12110);
return G__12108__delegate(args);
});
G__12108.cljs$core$IFn$_invoke$arity$variadic = G__12108__delegate;
return G__12108;
})()
);

(o.error = (function() { 
var G__12111__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12112__i = 0, G__12112__a = new Array(arguments.length -  0);
while (G__12112__i < G__12112__a.length) {G__12112__a[G__12112__i] = arguments[G__12112__i + 0]; ++G__12112__i;}
  args = new cljs.core.IndexedSeq(G__12112__a,0,null);
} 
return G__12111__delegate.call(this,args);};
G__12111.cljs$lang$maxFixedArity = 0;
G__12111.cljs$lang$applyTo = (function (arglist__12113){
var args = cljs.core.seq(arglist__12113);
return G__12111__delegate(args);
});
G__12111.cljs$core$IFn$_invoke$arity$variadic = G__12111__delegate;
return G__12111;
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
