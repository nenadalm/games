// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = cljs.core.cst$kw$sub;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind) : re_frame.registrar.kinds.call(null,re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__17147_17163 = cljs.core.seq(cljs.core.deref(re_frame.subs.query__GT_reaction));
var chunk__17148_17164 = null;
var count__17149_17165 = (0);
var i__17150_17166 = (0);
while(true){
if((i__17150_17166 < count__17149_17165)){
var vec__17157_17167 = chunk__17148_17164.cljs$core$IIndexed$_nth$arity$2(null,i__17150_17166);
var k_17168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17157_17167,(0),null);
var rxn_17169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17157_17167,(1),null);
re_frame.interop.dispose_BANG_(rxn_17169);


var G__17170 = seq__17147_17163;
var G__17171 = chunk__17148_17164;
var G__17172 = count__17149_17165;
var G__17173 = (i__17150_17166 + (1));
seq__17147_17163 = G__17170;
chunk__17148_17164 = G__17171;
count__17149_17165 = G__17172;
i__17150_17166 = G__17173;
continue;
} else {
var temp__5720__auto___17174 = cljs.core.seq(seq__17147_17163);
if(temp__5720__auto___17174){
var seq__17147_17175__$1 = temp__5720__auto___17174;
if(cljs.core.chunked_seq_QMARK_(seq__17147_17175__$1)){
var c__4550__auto___17176 = cljs.core.chunk_first(seq__17147_17175__$1);
var G__17177 = cljs.core.chunk_rest(seq__17147_17175__$1);
var G__17178 = c__4550__auto___17176;
var G__17179 = cljs.core.count(c__4550__auto___17176);
var G__17180 = (0);
seq__17147_17163 = G__17177;
chunk__17148_17164 = G__17178;
count__17149_17165 = G__17179;
i__17150_17166 = G__17180;
continue;
} else {
var vec__17160_17181 = cljs.core.first(seq__17147_17175__$1);
var k_17182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17160_17181,(0),null);
var rxn_17183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17160_17181,(1),null);
re_frame.interop.dispose_BANG_(rxn_17183);


var G__17184 = cljs.core.next(seq__17147_17175__$1);
var G__17185 = null;
var G__17186 = (0);
var G__17187 = (0);
seq__17147_17163 = G__17184;
chunk__17148_17164 = G__17185;
count__17149_17165 = G__17186;
i__17150_17166 = G__17187;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__17188 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17189 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_dispose,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_v,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17189;

try{try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.subs.query__GT_reaction,((function (_STAR_current_trace_STAR__orig_val__17188,_STAR_current_trace_STAR__temp_val__17189,cache_key){
return (function (query_cache){
if(((cljs.core.contains_QMARK_(query_cache,cache_key)) && ((r === cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key);
} else {
return query_cache;
}
});})(_STAR_current_trace_STAR__orig_val__17188,_STAR_current_trace_STAR__temp_val__17189,cache_key))
);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13312__auto___17190 = re_frame.interop.now();
var duration__13313__auto___17191 = (end__13312__auto___17190 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13313__auto___17191,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13312__auto___17190);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17188;
}} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.subs.query__GT_reaction,((function (cache_key){
return (function (query_cache){
if(((cljs.core.contains_QMARK_(query_cache,cache_key)) && ((r === cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key);
} else {
return query_cache;
}
});})(cache_key))
);
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.subs.query__GT_reaction,((function (cache_key){
return (function (query_cache){
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.contains_QMARK_(query_cache,cache_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: Adding a new subscription to the cache while there is an existing subscription in the cache",cache_key], 0));
} else {
}
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_cache,cache_key,r);
});})(cache_key))
);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17192 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17192;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__17194 = arguments.length;
switch (G__17194) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__17197 = arguments.length;
switch (G__17197) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__17198 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17199 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,query], null)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17199;

try{try{var temp__5718__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17209 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17209;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17210 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17210;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17211 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17211;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13312__auto___17212 = re_frame.interop.now();
var duration__13313__auto___17213 = (end__13312__auto___17212 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13313__auto___17213,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13312__auto___17212);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17198;
}} else {
var temp__5718__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17214 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17214;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17215 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17215;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17216 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17216;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__17200 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17201 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query,cljs.core.cst$kw$dyn_DASH_v,dynv], null)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17201;

try{try{var temp__5718__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17217 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17217;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17218 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17218;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__5720__auto___17219 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5720__auto___17219)){
var not_reactive_17220 = temp__5720__auto___17219;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_17220], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17221 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17221;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__17200,_STAR_current_trace_STAR__temp_val__17201){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__17200,_STAR_current_trace_STAR__temp_val__17201))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__17200,_STAR_current_trace_STAR__temp_val__17201){
return (function (){
var G__17202 = re_frame.db.app_db;
var G__17203 = query;
var G__17204 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__17202,G__17203,G__17204) : handler_fn.call(null,G__17202,G__17203,G__17204));
});})(dyn_vals,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__17200,_STAR_current_trace_STAR__temp_val__17201))
);
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__17200,_STAR_current_trace_STAR__temp_val__17201){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__17200,_STAR_current_trace_STAR__temp_val__17201))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13312__auto___17222 = re_frame.interop.now();
var duration__13313__auto___17223 = (end__13312__auto___17222 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13313__auto___17223,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13312__auto___17222);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17200;
}} else {
var temp__5718__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17224 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17224;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17225 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17225;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__5720__auto___17226 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5720__auto___17226)){
var not_reactive_17227 = temp__5720__auto___17226;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_17227], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17228 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17228;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__5718__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5718__auto__))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__5718__auto__){
return (function (){
var G__17205 = re_frame.db.app_db;
var G__17206 = query;
var G__17207 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__17205,G__17206,G__17207) : handler_fn.call(null,G__17205,G__17206,G__17207));
});})(dyn_vals,query_id,handler_fn,temp__5718__auto__))
);
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__5718__auto__){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5718__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__17229){
var vec__17230 = p__17229;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17230,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
/**
 * Runs f over signals. Signals may take several
 *   forms, this function handles all of them.
 */
re_frame.subs.map_signals = (function re_frame$subs$map_signals(f,signals){
if(cljs.core.sequential_QMARK_(signals)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,signals);
} else {
if(cljs.core.map_QMARK_(signals)){
return re_frame.subs.map_vals(f,signals);
} else {
if(re_frame.interop.deref_QMARK_(signals)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(signals) : f.call(null,signals));
} else {
return cljs.core.List.EMPTY;

}
}
}
});
/**
 * Coerces x to a seq if it isn't one already
 */
re_frame.subs.to_seq = (function re_frame$subs$to_seq(x){
if(cljs.core.sequential_QMARK_(x)){
return x;
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var dereffed_signals = re_frame.subs.map_signals(cljs.core.deref,signals);
if(cljs.core.sequential_QMARK_(signals)){
cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_(signals)){
re_frame.subs.map_vals(cljs.core.deref,signals);
} else {
if(re_frame.interop.deref_QMARK_(signals)){
cljs.core.deref(signals);
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for",query_id,", the input-signals function returns:",signals], 0));

}
}
}

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17233 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(re_frame.subs.to_seq(re_frame.subs.map_signals(re_frame.interop.reagent_id,signals)))], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(re_frame.subs.to_seq(re_frame.subs.map_signals(re_frame.interop.reagent_id,signals)))], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17233;

} else {
}

return dereffed_signals;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17254 = arguments.length;
var i__4731__auto___17255 = (0);
while(true){
if((i__4731__auto___17255 < len__4730__auto___17254)){
args__4736__auto__.push((arguments[i__4731__auto___17255]));

var G__17256 = (i__4731__auto___17255 + (1));
i__4731__auto___17255 = G__17256;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__17236 = cljs.core.count(input_args);
switch (G__17236) {
case (0):
return ((function (G__17236,computation_fn,input_args,err_header){
return (function() {
var G__17258 = null;
var G__17258__1 = (function (_){
return re_frame.db.app_db;
});
var G__17258__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__17258 = function(_,___$1){
switch(arguments.length){
case 1:
return G__17258__1.call(this,_);
case 2:
return G__17258__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17258.cljs$core$IFn$_invoke$arity$1 = G__17258__1;
G__17258.cljs$core$IFn$_invoke$arity$2 = G__17258__2;
return G__17258;
})()
;})(G__17236,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
var vec__17237 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17237,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17237,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT__DASH_,marker)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got:",marker], 0));
}

return ((function (vec__17237,marker,vec,G__17236,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__17237,marker,vec,G__17236,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_LT__DASH_,null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)))){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,markers,vecs,G__17236,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__17236,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__17240 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17241 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17241;

try{try{var subscription = (function (){var G__17242 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__17243 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__17242,G__17243) : computation_fn.call(null,G__17242,G__17243));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17259 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17259;

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13312__auto___17260 = re_frame.interop.now();
var duration__13313__auto___17261 = (end__13312__auto___17260 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13313__auto___17261,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13312__auto___17260);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17240;
}} else {
var subscription = (function (){var G__17244 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__17245 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__17244,G__17245) : computation_fn.call(null,G__17244,G__17245));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17262 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17262;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__17246 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17247 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$dyn_DASH_v,dyn_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17247;

try{try{var subscription = (function (){var G__17248 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__17249 = query_vec;
var G__17250 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__17248,G__17249,G__17250) : computation_fn.call(null,G__17248,G__17249,G__17250));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17263 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17263;

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13312__auto___17264 = re_frame.interop.now();
var duration__13313__auto___17265 = (end__13312__auto___17264 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13313__auto___17265,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13312__auto___17264);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17246;
}} else {
var subscription = (function (){var G__17251 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__17252 = query_vec;
var G__17253 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__17251,G__17252,G__17253) : computation_fn.call(null,G__17251,G__17252,G__17253));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__13314__auto___17266 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__13314__auto___17266;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq17234){
var G__17235 = cljs.core.first(seq17234);
var seq17234__$1 = cljs.core.next(seq17234);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17235,seq17234__$1);
});

