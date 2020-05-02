// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
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
var _STAR_current_trace_STAR__orig_val__13313 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13314 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13314);

try{try{var seq__13315 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13316 = null;
var count__13317 = (0);
var i__13318 = (0);
while(true){
if((i__13318 < count__13317)){
var vec__13325 = chunk__13316.cljs$core$IIndexed$_nth$arity$2(null,i__13318);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13325,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13325,(1),null);
var temp__5733__auto___13347 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13347)){
var effect_fn_13348 = temp__5733__auto___13347;
(effect_fn_13348.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13348.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13348.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13349 = seq__13315;
var G__13350 = chunk__13316;
var G__13351 = count__13317;
var G__13352 = (i__13318 + (1));
seq__13315 = G__13349;
chunk__13316 = G__13350;
count__13317 = G__13351;
i__13318 = G__13352;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13315);
if(temp__5735__auto__){
var seq__13315__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13315__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13315__$1);
var G__13353 = cljs.core.chunk_rest(seq__13315__$1);
var G__13354 = c__4609__auto__;
var G__13355 = cljs.core.count(c__4609__auto__);
var G__13356 = (0);
seq__13315 = G__13353;
chunk__13316 = G__13354;
count__13317 = G__13355;
i__13318 = G__13356;
continue;
} else {
var vec__13328 = cljs.core.first(seq__13315__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13328,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13328,(1),null);
var temp__5733__auto___13357 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13357)){
var effect_fn_13358 = temp__5733__auto___13357;
(effect_fn_13358.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13358.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13358.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13359 = cljs.core.next(seq__13315__$1);
var G__13360 = null;
var G__13361 = (0);
var G__13362 = (0);
seq__13315 = G__13359;
chunk__13316 = G__13360;
count__13317 = G__13361;
i__13318 = G__13362;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13126__auto___13363 = re_frame.interop.now();
var duration__13127__auto___13364 = (end__13126__auto___13363 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13127__auto___13364,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13126__auto___13363);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13313);
}} else {
var seq__13331 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13332 = null;
var count__13333 = (0);
var i__13334 = (0);
while(true){
if((i__13334 < count__13333)){
var vec__13341 = chunk__13332.cljs$core$IIndexed$_nth$arity$2(null,i__13334);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13341,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13341,(1),null);
var temp__5733__auto___13365 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13365)){
var effect_fn_13366 = temp__5733__auto___13365;
(effect_fn_13366.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13366.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13366.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13367 = seq__13331;
var G__13368 = chunk__13332;
var G__13369 = count__13333;
var G__13370 = (i__13334 + (1));
seq__13331 = G__13367;
chunk__13332 = G__13368;
count__13333 = G__13369;
i__13334 = G__13370;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13331);
if(temp__5735__auto__){
var seq__13331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13331__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13331__$1);
var G__13371 = cljs.core.chunk_rest(seq__13331__$1);
var G__13372 = c__4609__auto__;
var G__13373 = cljs.core.count(c__4609__auto__);
var G__13374 = (0);
seq__13331 = G__13371;
chunk__13332 = G__13372;
count__13333 = G__13373;
i__13334 = G__13374;
continue;
} else {
var vec__13344 = cljs.core.first(seq__13331__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13344,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13344,(1),null);
var temp__5733__auto___13375 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13375)){
var effect_fn_13376 = temp__5733__auto___13375;
(effect_fn_13376.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13376.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13376.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13377 = cljs.core.next(seq__13331__$1);
var G__13378 = null;
var G__13379 = (0);
var G__13380 = (0);
seq__13331 = G__13377;
chunk__13332 = G__13378;
count__13333 = G__13379;
i__13334 = G__13380;
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
var seq__13381 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13382 = null;
var count__13383 = (0);
var i__13384 = (0);
while(true){
if((i__13384 < count__13383)){
var map__13389 = chunk__13382.cljs$core$IIndexed$_nth$arity$2(null,i__13384);
var map__13389__$1 = (((((!((map__13389 == null))))?(((((map__13389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13389):map__13389);
var effect = map__13389__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13389__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13389__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13381,chunk__13382,count__13383,i__13384,map__13389,map__13389__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13381,chunk__13382,count__13383,i__13384,map__13389,map__13389__$1,effect,ms,dispatch))
,ms);
}


var G__13393 = seq__13381;
var G__13394 = chunk__13382;
var G__13395 = count__13383;
var G__13396 = (i__13384 + (1));
seq__13381 = G__13393;
chunk__13382 = G__13394;
count__13383 = G__13395;
i__13384 = G__13396;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13381);
if(temp__5735__auto__){
var seq__13381__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13381__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13381__$1);
var G__13397 = cljs.core.chunk_rest(seq__13381__$1);
var G__13398 = c__4609__auto__;
var G__13399 = cljs.core.count(c__4609__auto__);
var G__13400 = (0);
seq__13381 = G__13397;
chunk__13382 = G__13398;
count__13383 = G__13399;
i__13384 = G__13400;
continue;
} else {
var map__13391 = cljs.core.first(seq__13381__$1);
var map__13391__$1 = (((((!((map__13391 == null))))?(((((map__13391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13391):map__13391);
var effect = map__13391__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13391__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13391__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13381,chunk__13382,count__13383,i__13384,map__13391,map__13391__$1,effect,ms,dispatch,seq__13381__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13381,chunk__13382,count__13383,i__13384,map__13391,map__13391__$1,effect,ms,dispatch,seq__13381__$1,temp__5735__auto__))
,ms);
}


var G__13401 = cljs.core.next(seq__13381__$1);
var G__13402 = null;
var G__13403 = (0);
var G__13404 = (0);
seq__13381 = G__13401;
chunk__13382 = G__13402;
count__13383 = G__13403;
i__13384 = G__13404;
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
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__13405 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13406 = null;
var count__13407 = (0);
var i__13408 = (0);
while(true){
if((i__13408 < count__13407)){
var event = chunk__13406.cljs$core$IIndexed$_nth$arity$2(null,i__13408);
re_frame.router.dispatch(event);


var G__13409 = seq__13405;
var G__13410 = chunk__13406;
var G__13411 = count__13407;
var G__13412 = (i__13408 + (1));
seq__13405 = G__13409;
chunk__13406 = G__13410;
count__13407 = G__13411;
i__13408 = G__13412;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13405);
if(temp__5735__auto__){
var seq__13405__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13405__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13405__$1);
var G__13413 = cljs.core.chunk_rest(seq__13405__$1);
var G__13414 = c__4609__auto__;
var G__13415 = cljs.core.count(c__4609__auto__);
var G__13416 = (0);
seq__13405 = G__13413;
chunk__13406 = G__13414;
count__13407 = G__13415;
i__13408 = G__13416;
continue;
} else {
var event = cljs.core.first(seq__13405__$1);
re_frame.router.dispatch(event);


var G__13417 = cljs.core.next(seq__13405__$1);
var G__13418 = null;
var G__13419 = (0);
var G__13420 = (0);
seq__13405 = G__13417;
chunk__13406 = G__13418;
count__13407 = G__13419;
i__13408 = G__13420;
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
var seq__13421 = cljs.core.seq(value);
var chunk__13422 = null;
var count__13423 = (0);
var i__13424 = (0);
while(true){
if((i__13424 < count__13423)){
var event = chunk__13422.cljs$core$IIndexed$_nth$arity$2(null,i__13424);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13425 = seq__13421;
var G__13426 = chunk__13422;
var G__13427 = count__13423;
var G__13428 = (i__13424 + (1));
seq__13421 = G__13425;
chunk__13422 = G__13426;
count__13423 = G__13427;
i__13424 = G__13428;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13421);
if(temp__5735__auto__){
var seq__13421__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13421__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13421__$1);
var G__13429 = cljs.core.chunk_rest(seq__13421__$1);
var G__13430 = c__4609__auto__;
var G__13431 = cljs.core.count(c__4609__auto__);
var G__13432 = (0);
seq__13421 = G__13429;
chunk__13422 = G__13430;
count__13423 = G__13431;
i__13424 = G__13432;
continue;
} else {
var event = cljs.core.first(seq__13421__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13433 = cljs.core.next(seq__13421__$1);
var G__13434 = null;
var G__13435 = (0);
var G__13436 = (0);
seq__13421 = G__13433;
chunk__13422 = G__13434;
count__13423 = G__13435;
i__13424 = G__13436;
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
