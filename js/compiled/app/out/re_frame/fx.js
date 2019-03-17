// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13492 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13493 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13493;

try{try{var seq__13494 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13495 = null;
var count__13496 = (0);
var i__13497 = (0);
while(true){
if((i__13497 < count__13496)){
var vec__13504 = chunk__13495.cljs$core$IIndexed$_nth$arity$2(null,i__13497);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13504,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13504,(1),null);
var temp__5718__auto___13526 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13526)){
var effect_fn_13527 = temp__5718__auto___13526;
(effect_fn_13527.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13527.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13527.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13528 = seq__13494;
var G__13529 = chunk__13495;
var G__13530 = count__13496;
var G__13531 = (i__13497 + (1));
seq__13494 = G__13528;
chunk__13495 = G__13529;
count__13496 = G__13530;
i__13497 = G__13531;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13494);
if(temp__5720__auto__){
var seq__13494__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13494__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13494__$1);
var G__13532 = cljs.core.chunk_rest(seq__13494__$1);
var G__13533 = c__4550__auto__;
var G__13534 = cljs.core.count(c__4550__auto__);
var G__13535 = (0);
seq__13494 = G__13532;
chunk__13495 = G__13533;
count__13496 = G__13534;
i__13497 = G__13535;
continue;
} else {
var vec__13507 = cljs.core.first(seq__13494__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13507,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13507,(1),null);
var temp__5718__auto___13536 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13536)){
var effect_fn_13537 = temp__5718__auto___13536;
(effect_fn_13537.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13537.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13537.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13538 = cljs.core.next(seq__13494__$1);
var G__13539 = null;
var G__13540 = (0);
var G__13541 = (0);
seq__13494 = G__13538;
chunk__13495 = G__13539;
count__13496 = G__13540;
i__13497 = G__13541;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13312__auto___13542 = re_frame.interop.now();
var duration__13313__auto___13543 = (end__13312__auto___13542 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13313__auto___13543,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13312__auto___13542);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13492;
}} else {
var seq__13510 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13511 = null;
var count__13512 = (0);
var i__13513 = (0);
while(true){
if((i__13513 < count__13512)){
var vec__13520 = chunk__13511.cljs$core$IIndexed$_nth$arity$2(null,i__13513);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13520,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13520,(1),null);
var temp__5718__auto___13544 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13544)){
var effect_fn_13545 = temp__5718__auto___13544;
(effect_fn_13545.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13545.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13545.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13546 = seq__13510;
var G__13547 = chunk__13511;
var G__13548 = count__13512;
var G__13549 = (i__13513 + (1));
seq__13510 = G__13546;
chunk__13511 = G__13547;
count__13512 = G__13548;
i__13513 = G__13549;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13510);
if(temp__5720__auto__){
var seq__13510__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13510__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13510__$1);
var G__13550 = cljs.core.chunk_rest(seq__13510__$1);
var G__13551 = c__4550__auto__;
var G__13552 = cljs.core.count(c__4550__auto__);
var G__13553 = (0);
seq__13510 = G__13550;
chunk__13511 = G__13551;
count__13512 = G__13552;
i__13513 = G__13553;
continue;
} else {
var vec__13523 = cljs.core.first(seq__13510__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13523,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13523,(1),null);
var temp__5718__auto___13554 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13554)){
var effect_fn_13555 = temp__5718__auto___13554;
(effect_fn_13555.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13555.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13555.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13556 = cljs.core.next(seq__13510__$1);
var G__13557 = null;
var G__13558 = (0);
var G__13559 = (0);
seq__13510 = G__13556;
chunk__13511 = G__13557;
count__13512 = G__13558;
i__13513 = G__13559;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__13560 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13561 = null;
var count__13562 = (0);
var i__13563 = (0);
while(true){
if((i__13563 < count__13562)){
var map__13568 = chunk__13561.cljs$core$IIndexed$_nth$arity$2(null,i__13563);
var map__13568__$1 = (((((!((map__13568 == null))))?(((((map__13568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13568):map__13568);
var effect = map__13568__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13568__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13568__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13560,chunk__13561,count__13562,i__13563,map__13568,map__13568__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13560,chunk__13561,count__13562,i__13563,map__13568,map__13568__$1,effect,ms,dispatch))
,ms);
}


var G__13572 = seq__13560;
var G__13573 = chunk__13561;
var G__13574 = count__13562;
var G__13575 = (i__13563 + (1));
seq__13560 = G__13572;
chunk__13561 = G__13573;
count__13562 = G__13574;
i__13563 = G__13575;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13560);
if(temp__5720__auto__){
var seq__13560__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13560__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13560__$1);
var G__13576 = cljs.core.chunk_rest(seq__13560__$1);
var G__13577 = c__4550__auto__;
var G__13578 = cljs.core.count(c__4550__auto__);
var G__13579 = (0);
seq__13560 = G__13576;
chunk__13561 = G__13577;
count__13562 = G__13578;
i__13563 = G__13579;
continue;
} else {
var map__13570 = cljs.core.first(seq__13560__$1);
var map__13570__$1 = (((((!((map__13570 == null))))?(((((map__13570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13570):map__13570);
var effect = map__13570__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13570__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13570__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13560,chunk__13561,count__13562,i__13563,map__13570,map__13570__$1,effect,ms,dispatch,seq__13560__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13560,chunk__13561,count__13562,i__13563,map__13570,map__13570__$1,effect,ms,dispatch,seq__13560__$1,temp__5720__auto__))
,ms);
}


var G__13580 = cljs.core.next(seq__13560__$1);
var G__13581 = null;
var G__13582 = (0);
var G__13583 = (0);
seq__13560 = G__13580;
chunk__13561 = G__13581;
count__13562 = G__13582;
i__13563 = G__13583;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__13584 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13585 = null;
var count__13586 = (0);
var i__13587 = (0);
while(true){
if((i__13587 < count__13586)){
var event = chunk__13585.cljs$core$IIndexed$_nth$arity$2(null,i__13587);
re_frame.router.dispatch(event);


var G__13588 = seq__13584;
var G__13589 = chunk__13585;
var G__13590 = count__13586;
var G__13591 = (i__13587 + (1));
seq__13584 = G__13588;
chunk__13585 = G__13589;
count__13586 = G__13590;
i__13587 = G__13591;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13584);
if(temp__5720__auto__){
var seq__13584__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13584__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13584__$1);
var G__13592 = cljs.core.chunk_rest(seq__13584__$1);
var G__13593 = c__4550__auto__;
var G__13594 = cljs.core.count(c__4550__auto__);
var G__13595 = (0);
seq__13584 = G__13592;
chunk__13585 = G__13593;
count__13586 = G__13594;
i__13587 = G__13595;
continue;
} else {
var event = cljs.core.first(seq__13584__$1);
re_frame.router.dispatch(event);


var G__13596 = cljs.core.next(seq__13584__$1);
var G__13597 = null;
var G__13598 = (0);
var G__13599 = (0);
seq__13584 = G__13596;
chunk__13585 = G__13597;
count__13586 = G__13598;
i__13587 = G__13599;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13600 = cljs.core.seq(value);
var chunk__13601 = null;
var count__13602 = (0);
var i__13603 = (0);
while(true){
if((i__13603 < count__13602)){
var event = chunk__13601.cljs$core$IIndexed$_nth$arity$2(null,i__13603);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13604 = seq__13600;
var G__13605 = chunk__13601;
var G__13606 = count__13602;
var G__13607 = (i__13603 + (1));
seq__13600 = G__13604;
chunk__13601 = G__13605;
count__13602 = G__13606;
i__13603 = G__13607;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13600);
if(temp__5720__auto__){
var seq__13600__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13600__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13600__$1);
var G__13608 = cljs.core.chunk_rest(seq__13600__$1);
var G__13609 = c__4550__auto__;
var G__13610 = cljs.core.count(c__4550__auto__);
var G__13611 = (0);
seq__13600 = G__13608;
chunk__13601 = G__13609;
count__13602 = G__13610;
i__13603 = G__13611;
continue;
} else {
var event = cljs.core.first(seq__13600__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13612 = cljs.core.next(seq__13600__$1);
var G__13613 = null;
var G__13614 = (0);
var G__13615 = (0);
seq__13600 = G__13612;
chunk__13601 = G__13613;
count__13602 = G__13614;
i__13603 = G__13615;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
