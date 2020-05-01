// Compiled by ClojureScript 1.10.748 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.loggers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
re_frame.loggers.loggers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$log,console.log.bind(console),cljs.core.cst$kw$warn,console.warn.bind(console),cljs.core.cst$kw$error,console.error.bind(console),cljs.core.cst$kw$debug,console.debug.bind(console),cljs.core.cst$kw$group,(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),cljs.core.cst$kw$groupEnd,(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null));
re_frame.loggers.console = (function re_frame$loggers$console(var_args){
var args__4737__auto__ = [];
var len__4731__auto___11951 = arguments.length;
var i__4732__auto___11952 = (0);
while(true){
if((i__4732__auto___11952 < len__4731__auto___11951)){
args__4737__auto__.push((arguments[i__4732__auto___11952]));

var G__11953 = (i__4732__auto___11952 + (1));
i__4732__auto___11952 = G__11953;
continue;
} else {
}
break;
}

var argseq__4738__auto__ = ((((1) < args__4737__auto__.length))?(new cljs.core.IndexedSeq(args__4737__auto__.slice((1)),(0),null)):null);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4738__auto__);
});

(re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
if(cljs.core.contains_QMARK_(cljs.core.deref(re_frame.loggers.loggers),level)){
} else {
throw (new Error(["Assert failed: ",["re-frame: log called with unknown level: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join(''),"\n","(contains? (clojure.core/deref loggers) level)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__11950 = cljs.core.deref(re_frame.loggers.loggers);
return (level.cljs$core$IFn$_invoke$arity$1 ? level.cljs$core$IFn$_invoke$arity$1(G__11950) : level.call(null,G__11950));
})(),args);
}));

(re_frame.loggers.console.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.loggers.console.cljs$lang$applyTo = (function (seq11948){
var G__11949 = cljs.core.first(seq11948);
var seq11948__$1 = cljs.core.next(seq11948);
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11949,seq11948__$1);
}));

/**
 * Change the set (or a subset) of logging functions used by re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
re_frame.loggers.set_loggers_BANG_ = (function re_frame$loggers$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_loggers)),cljs.core.set(cljs.core.keys(cljs.core.deref(re_frame.loggers.loggers)))))){
} else {
throw (new Error(["Assert failed: ","Unknown keys in new-loggers","\n","(empty? (difference (set (keys new-loggers)) (-> (clojure.core/deref loggers) keys set)))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
/**
 * Get the current logging functions used by re-frame.
 */
re_frame.loggers.get_loggers = (function re_frame$loggers$get_loggers(){
return cljs.core.deref(re_frame.loggers.loggers);
});
