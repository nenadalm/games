// Compiled by ClojureScript 1.10.748 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.events');
goog.require('re_frame.subs');
goog.require('re_frame.interop');
goog.require('re_frame.db');
goog.require('re_frame.fx');
goog.require('re_frame.cofx');
goog.require('re_frame.router');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.interceptor');
goog.require('re_frame.std_interceptors');
goog.require('clojure.set');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.clear_subscription_cache_BANG_ = re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,handler_fn);
});
re_frame.core.reg_fx = re_frame.fx.reg_fx;
re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.reg_cofx;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var G__16951 = arguments.length;
switch (G__16951) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
}));

(re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var G__16954 = arguments.length;
switch (G__16954) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
}));

(re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var G__16957 = arguments.length;
switch (G__16957) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
}));

(re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3);

re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(re_frame.db.app_db);
var subs_cache = cljs.core.deref(re_frame.subs.query__GT_reaction);
return (function (){
var original_subs_16963 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_16964 = cljs.core.set(cljs.core.vals(cljs.core.deref(re_frame.subs.query__GT_reaction)));
var seq__16959_16965 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_16964,original_subs_16963));
var chunk__16960_16966 = null;
var count__16961_16967 = (0);
var i__16962_16968 = (0);
while(true){
if((i__16962_16968 < count__16961_16967)){
var sub_16969 = chunk__16960_16966.cljs$core$IIndexed$_nth$arity$2(null,i__16962_16968);
re_frame.interop.dispose_BANG_(sub_16969);


var G__16970 = seq__16959_16965;
var G__16971 = chunk__16960_16966;
var G__16972 = count__16961_16967;
var G__16973 = (i__16962_16968 + (1));
seq__16959_16965 = G__16970;
chunk__16960_16966 = G__16971;
count__16961_16967 = G__16972;
i__16962_16968 = G__16973;
continue;
} else {
var temp__5720__auto___16974 = cljs.core.seq(seq__16959_16965);
if(temp__5720__auto___16974){
var seq__16959_16975__$1 = temp__5720__auto___16974;
if(cljs.core.chunked_seq_QMARK_(seq__16959_16975__$1)){
var c__4551__auto___16976 = cljs.core.chunk_first(seq__16959_16975__$1);
var G__16977 = cljs.core.chunk_rest(seq__16959_16975__$1);
var G__16978 = c__4551__auto___16976;
var G__16979 = cljs.core.count(c__4551__auto___16976);
var G__16980 = (0);
seq__16959_16965 = G__16977;
chunk__16960_16966 = G__16978;
count__16961_16967 = G__16979;
i__16962_16968 = G__16980;
continue;
} else {
var sub_16981 = cljs.core.first(seq__16959_16975__$1);
re_frame.interop.dispose_BANG_(sub_16981);


var G__16982 = cljs.core.next(seq__16959_16975__$1);
var G__16983 = null;
var G__16984 = (0);
var G__16985 = (0);
seq__16959_16965 = G__16982;
chunk__16960_16966 = G__16983;
count__16961_16967 = G__16984;
i__16962_16968 = G__16985;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(re_frame.db.app_db,app_db);

return null;
});
});
/**
 * Remove all events queued for processing
 */
re_frame.core.purge_event_queue = (function re_frame$core$purge_event_queue(){
return re_frame.router.event_queue.re_frame$router$IEventQueue$purge$arity$1(null);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var G__16987 = arguments.length;
switch (G__16987) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
}));

(re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.event_queue.re_frame$router$IEventQueue$add_post_event_callback$arity$3(null,id,f);
}));

(re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2);

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.event_queue.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__4737__auto__ = [];
var len__4731__auto___16994 = arguments.length;
var i__4732__auto___16995 = (0);
while(true){
if((i__4732__auto___16995 < len__4731__auto___16994)){
args__4737__auto__.push((arguments[i__4732__auto___16995]));

var G__16996 = (i__4732__auto___16995 + (1));
i__4732__auto___16995 = G__16996;
continue;
} else {
}
break;
}

var argseq__4738__auto__ = ((((0) < args__4737__auto__.length))?(new cljs.core.IndexedSeq(args__4737__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4738__auto__);
});

(re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__16990_16997 = cljs.core.cst$kw$warn;
var G__16991_16998 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of";
var G__16992_16999 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__16993_17000 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__16990_16997,G__16991_16998,G__16992_16999,G__16993_17000) : re_frame.core.console.call(null,G__16990_16997,G__16991_16998,G__16992_16999,G__16993_17000));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_event_db,args);
}));

(re_frame.core.register_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.core.register_handler.cljs$lang$applyTo = (function (seq16989){
var self__4719__auto__ = this;
return self__4719__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16989));
}));

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__4737__auto__ = [];
var len__4731__auto___17006 = arguments.length;
var i__4732__auto___17007 = (0);
while(true){
if((i__4732__auto___17007 < len__4731__auto___17006)){
args__4737__auto__.push((arguments[i__4732__auto___17007]));

var G__17008 = (i__4732__auto___17007 + (1));
i__4732__auto___17007 = G__17008;
continue;
} else {
}
break;
}

var argseq__4738__auto__ = ((((0) < args__4737__auto__.length))?(new cljs.core.IndexedSeq(args__4737__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4738__auto__);
});

(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__17002_17009 = cljs.core.cst$kw$warn;
var G__17003_17010 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of";
var G__17004_17011 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__17005_17012 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__17002_17009,G__17003_17010,G__17004_17011,G__17005_17012) : re_frame.core.console.call(null,G__17002_17009,G__17003_17010,G__17004_17011,G__17005_17012));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_sub_raw,args);
}));

(re_frame.core.register_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.core.register_sub.cljs$lang$applyTo = (function (seq17001){
var self__4719__auto__ = this;
return self__4719__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17001));
}));

