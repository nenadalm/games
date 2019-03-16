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
var _STAR_current_trace_STAR__orig_val__13482 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13483 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13483;

try{try{var seq__13484 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13485 = null;
var count__13486 = (0);
var i__13487 = (0);
while(true){
if((i__13487 < count__13486)){
var vec__13494 = chunk__13485.cljs$core$IIndexed$_nth$arity$2(null,i__13487);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13494,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13494,(1),null);
var temp__5718__auto___13516 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13516)){
var effect_fn_13517 = temp__5718__auto___13516;
(effect_fn_13517.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13517.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13517.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13518 = seq__13484;
var G__13519 = chunk__13485;
var G__13520 = count__13486;
var G__13521 = (i__13487 + (1));
seq__13484 = G__13518;
chunk__13485 = G__13519;
count__13486 = G__13520;
i__13487 = G__13521;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13484);
if(temp__5720__auto__){
var seq__13484__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13484__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13484__$1);
var G__13522 = cljs.core.chunk_rest(seq__13484__$1);
var G__13523 = c__4550__auto__;
var G__13524 = cljs.core.count(c__4550__auto__);
var G__13525 = (0);
seq__13484 = G__13522;
chunk__13485 = G__13523;
count__13486 = G__13524;
i__13487 = G__13525;
continue;
} else {
var vec__13497 = cljs.core.first(seq__13484__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13497,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13497,(1),null);
var temp__5718__auto___13526 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13526)){
var effect_fn_13527 = temp__5718__auto___13526;
(effect_fn_13527.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13527.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13527.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13528 = cljs.core.next(seq__13484__$1);
var G__13529 = null;
var G__13530 = (0);
var G__13531 = (0);
seq__13484 = G__13528;
chunk__13485 = G__13529;
count__13486 = G__13530;
i__13487 = G__13531;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13302__auto___13532 = re_frame.interop.now();
var duration__13303__auto___13533 = (end__13302__auto___13532 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13303__auto___13533,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13302__auto___13532);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13482;
}} else {
var seq__13500 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13501 = null;
var count__13502 = (0);
var i__13503 = (0);
while(true){
if((i__13503 < count__13502)){
var vec__13510 = chunk__13501.cljs$core$IIndexed$_nth$arity$2(null,i__13503);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13510,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13510,(1),null);
var temp__5718__auto___13534 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13534)){
var effect_fn_13535 = temp__5718__auto___13534;
(effect_fn_13535.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13535.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13535.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13536 = seq__13500;
var G__13537 = chunk__13501;
var G__13538 = count__13502;
var G__13539 = (i__13503 + (1));
seq__13500 = G__13536;
chunk__13501 = G__13537;
count__13502 = G__13538;
i__13503 = G__13539;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13500);
if(temp__5720__auto__){
var seq__13500__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13500__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13500__$1);
var G__13540 = cljs.core.chunk_rest(seq__13500__$1);
var G__13541 = c__4550__auto__;
var G__13542 = cljs.core.count(c__4550__auto__);
var G__13543 = (0);
seq__13500 = G__13540;
chunk__13501 = G__13541;
count__13502 = G__13542;
i__13503 = G__13543;
continue;
} else {
var vec__13513 = cljs.core.first(seq__13500__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13513,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13513,(1),null);
var temp__5718__auto___13544 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13544)){
var effect_fn_13545 = temp__5718__auto___13544;
(effect_fn_13545.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13545.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13545.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13546 = cljs.core.next(seq__13500__$1);
var G__13547 = null;
var G__13548 = (0);
var G__13549 = (0);
seq__13500 = G__13546;
chunk__13501 = G__13547;
count__13502 = G__13548;
i__13503 = G__13549;
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
var seq__13550 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13551 = null;
var count__13552 = (0);
var i__13553 = (0);
while(true){
if((i__13553 < count__13552)){
var map__13558 = chunk__13551.cljs$core$IIndexed$_nth$arity$2(null,i__13553);
var map__13558__$1 = (((((!((map__13558 == null))))?(((((map__13558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13558):map__13558);
var effect = map__13558__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13558__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13558__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13550,chunk__13551,count__13552,i__13553,map__13558,map__13558__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13550,chunk__13551,count__13552,i__13553,map__13558,map__13558__$1,effect,ms,dispatch))
,ms);
}


var G__13562 = seq__13550;
var G__13563 = chunk__13551;
var G__13564 = count__13552;
var G__13565 = (i__13553 + (1));
seq__13550 = G__13562;
chunk__13551 = G__13563;
count__13552 = G__13564;
i__13553 = G__13565;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13550);
if(temp__5720__auto__){
var seq__13550__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13550__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13550__$1);
var G__13566 = cljs.core.chunk_rest(seq__13550__$1);
var G__13567 = c__4550__auto__;
var G__13568 = cljs.core.count(c__4550__auto__);
var G__13569 = (0);
seq__13550 = G__13566;
chunk__13551 = G__13567;
count__13552 = G__13568;
i__13553 = G__13569;
continue;
} else {
var map__13560 = cljs.core.first(seq__13550__$1);
var map__13560__$1 = (((((!((map__13560 == null))))?(((((map__13560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13560):map__13560);
var effect = map__13560__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13560__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13560__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13550,chunk__13551,count__13552,i__13553,map__13560,map__13560__$1,effect,ms,dispatch,seq__13550__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13550,chunk__13551,count__13552,i__13553,map__13560,map__13560__$1,effect,ms,dispatch,seq__13550__$1,temp__5720__auto__))
,ms);
}


var G__13570 = cljs.core.next(seq__13550__$1);
var G__13571 = null;
var G__13572 = (0);
var G__13573 = (0);
seq__13550 = G__13570;
chunk__13551 = G__13571;
count__13552 = G__13572;
i__13553 = G__13573;
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
var seq__13574 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13575 = null;
var count__13576 = (0);
var i__13577 = (0);
while(true){
if((i__13577 < count__13576)){
var event = chunk__13575.cljs$core$IIndexed$_nth$arity$2(null,i__13577);
re_frame.router.dispatch(event);


var G__13578 = seq__13574;
var G__13579 = chunk__13575;
var G__13580 = count__13576;
var G__13581 = (i__13577 + (1));
seq__13574 = G__13578;
chunk__13575 = G__13579;
count__13576 = G__13580;
i__13577 = G__13581;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13574);
if(temp__5720__auto__){
var seq__13574__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13574__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13574__$1);
var G__13582 = cljs.core.chunk_rest(seq__13574__$1);
var G__13583 = c__4550__auto__;
var G__13584 = cljs.core.count(c__4550__auto__);
var G__13585 = (0);
seq__13574 = G__13582;
chunk__13575 = G__13583;
count__13576 = G__13584;
i__13577 = G__13585;
continue;
} else {
var event = cljs.core.first(seq__13574__$1);
re_frame.router.dispatch(event);


var G__13586 = cljs.core.next(seq__13574__$1);
var G__13587 = null;
var G__13588 = (0);
var G__13589 = (0);
seq__13574 = G__13586;
chunk__13575 = G__13587;
count__13576 = G__13588;
i__13577 = G__13589;
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
var seq__13590 = cljs.core.seq(value);
var chunk__13591 = null;
var count__13592 = (0);
var i__13593 = (0);
while(true){
if((i__13593 < count__13592)){
var event = chunk__13591.cljs$core$IIndexed$_nth$arity$2(null,i__13593);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13594 = seq__13590;
var G__13595 = chunk__13591;
var G__13596 = count__13592;
var G__13597 = (i__13593 + (1));
seq__13590 = G__13594;
chunk__13591 = G__13595;
count__13592 = G__13596;
i__13593 = G__13597;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13590);
if(temp__5720__auto__){
var seq__13590__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13590__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13590__$1);
var G__13598 = cljs.core.chunk_rest(seq__13590__$1);
var G__13599 = c__4550__auto__;
var G__13600 = cljs.core.count(c__4550__auto__);
var G__13601 = (0);
seq__13590 = G__13598;
chunk__13591 = G__13599;
count__13592 = G__13600;
i__13593 = G__13601;
continue;
} else {
var event = cljs.core.first(seq__13590__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13602 = cljs.core.next(seq__13590__$1);
var G__13603 = null;
var G__13604 = (0);
var G__13605 = (0);
seq__13590 = G__13602;
chunk__13591 = G__13603;
count__13592 = G__13604;
i__13593 = G__13605;
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
