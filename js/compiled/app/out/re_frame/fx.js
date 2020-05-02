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
var _STAR_current_trace_STAR__orig_val__13845 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13846 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13846);

try{try{var seq__13847 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13848 = null;
var count__13849 = (0);
var i__13850 = (0);
while(true){
if((i__13850 < count__13849)){
var vec__13857 = chunk__13848.cljs$core$IIndexed$_nth$arity$2(null,i__13850);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(1),null);
var temp__5733__auto___13879 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13879)){
var effect_fn_13880 = temp__5733__auto___13879;
(effect_fn_13880.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13880.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13880.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13881 = seq__13847;
var G__13882 = chunk__13848;
var G__13883 = count__13849;
var G__13884 = (i__13850 + (1));
seq__13847 = G__13881;
chunk__13848 = G__13882;
count__13849 = G__13883;
i__13850 = G__13884;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13847);
if(temp__5735__auto__){
var seq__13847__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13847__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13847__$1);
var G__13885 = cljs.core.chunk_rest(seq__13847__$1);
var G__13886 = c__4609__auto__;
var G__13887 = cljs.core.count(c__4609__auto__);
var G__13888 = (0);
seq__13847 = G__13885;
chunk__13848 = G__13886;
count__13849 = G__13887;
i__13850 = G__13888;
continue;
} else {
var vec__13860 = cljs.core.first(seq__13847__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13860,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13860,(1),null);
var temp__5733__auto___13889 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13889)){
var effect_fn_13890 = temp__5733__auto___13889;
(effect_fn_13890.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13890.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13890.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13891 = cljs.core.next(seq__13847__$1);
var G__13892 = null;
var G__13893 = (0);
var G__13894 = (0);
seq__13847 = G__13891;
chunk__13848 = G__13892;
count__13849 = G__13893;
i__13850 = G__13894;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13075__auto___13895 = re_frame.interop.now();
var duration__13076__auto___13896 = (end__13075__auto___13895 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13076__auto___13896,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13075__auto___13895);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13845);
}} else {
var seq__13863 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13864 = null;
var count__13865 = (0);
var i__13866 = (0);
while(true){
if((i__13866 < count__13865)){
var vec__13873 = chunk__13864.cljs$core$IIndexed$_nth$arity$2(null,i__13866);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13873,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13873,(1),null);
var temp__5733__auto___13897 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13897)){
var effect_fn_13898 = temp__5733__auto___13897;
(effect_fn_13898.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13898.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13898.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13899 = seq__13863;
var G__13900 = chunk__13864;
var G__13901 = count__13865;
var G__13902 = (i__13866 + (1));
seq__13863 = G__13899;
chunk__13864 = G__13900;
count__13865 = G__13901;
i__13866 = G__13902;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13863);
if(temp__5735__auto__){
var seq__13863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13863__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13863__$1);
var G__13903 = cljs.core.chunk_rest(seq__13863__$1);
var G__13904 = c__4609__auto__;
var G__13905 = cljs.core.count(c__4609__auto__);
var G__13906 = (0);
seq__13863 = G__13903;
chunk__13864 = G__13904;
count__13865 = G__13905;
i__13866 = G__13906;
continue;
} else {
var vec__13876 = cljs.core.first(seq__13863__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13876,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13876,(1),null);
var temp__5733__auto___13907 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13907)){
var effect_fn_13908 = temp__5733__auto___13907;
(effect_fn_13908.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13908.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13908.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13909 = cljs.core.next(seq__13863__$1);
var G__13910 = null;
var G__13911 = (0);
var G__13912 = (0);
seq__13863 = G__13909;
chunk__13864 = G__13910;
count__13865 = G__13911;
i__13866 = G__13912;
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
var seq__13913 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13914 = null;
var count__13915 = (0);
var i__13916 = (0);
while(true){
if((i__13916 < count__13915)){
var map__13921 = chunk__13914.cljs$core$IIndexed$_nth$arity$2(null,i__13916);
var map__13921__$1 = (((((!((map__13921 == null))))?(((((map__13921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13921):map__13921);
var effect = map__13921__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13921__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13921__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13913,chunk__13914,count__13915,i__13916,map__13921,map__13921__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13913,chunk__13914,count__13915,i__13916,map__13921,map__13921__$1,effect,ms,dispatch))
,ms);
}


var G__13925 = seq__13913;
var G__13926 = chunk__13914;
var G__13927 = count__13915;
var G__13928 = (i__13916 + (1));
seq__13913 = G__13925;
chunk__13914 = G__13926;
count__13915 = G__13927;
i__13916 = G__13928;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13913);
if(temp__5735__auto__){
var seq__13913__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13913__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13913__$1);
var G__13929 = cljs.core.chunk_rest(seq__13913__$1);
var G__13930 = c__4609__auto__;
var G__13931 = cljs.core.count(c__4609__auto__);
var G__13932 = (0);
seq__13913 = G__13929;
chunk__13914 = G__13930;
count__13915 = G__13931;
i__13916 = G__13932;
continue;
} else {
var map__13923 = cljs.core.first(seq__13913__$1);
var map__13923__$1 = (((((!((map__13923 == null))))?(((((map__13923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13923):map__13923);
var effect = map__13923__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13923__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13923__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13913,chunk__13914,count__13915,i__13916,map__13923,map__13923__$1,effect,ms,dispatch,seq__13913__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13913,chunk__13914,count__13915,i__13916,map__13923,map__13923__$1,effect,ms,dispatch,seq__13913__$1,temp__5735__auto__))
,ms);
}


var G__13933 = cljs.core.next(seq__13913__$1);
var G__13934 = null;
var G__13935 = (0);
var G__13936 = (0);
seq__13913 = G__13933;
chunk__13914 = G__13934;
count__13915 = G__13935;
i__13916 = G__13936;
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
var seq__13937 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13938 = null;
var count__13939 = (0);
var i__13940 = (0);
while(true){
if((i__13940 < count__13939)){
var event = chunk__13938.cljs$core$IIndexed$_nth$arity$2(null,i__13940);
re_frame.router.dispatch(event);


var G__13941 = seq__13937;
var G__13942 = chunk__13938;
var G__13943 = count__13939;
var G__13944 = (i__13940 + (1));
seq__13937 = G__13941;
chunk__13938 = G__13942;
count__13939 = G__13943;
i__13940 = G__13944;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13937);
if(temp__5735__auto__){
var seq__13937__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13937__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13937__$1);
var G__13945 = cljs.core.chunk_rest(seq__13937__$1);
var G__13946 = c__4609__auto__;
var G__13947 = cljs.core.count(c__4609__auto__);
var G__13948 = (0);
seq__13937 = G__13945;
chunk__13938 = G__13946;
count__13939 = G__13947;
i__13940 = G__13948;
continue;
} else {
var event = cljs.core.first(seq__13937__$1);
re_frame.router.dispatch(event);


var G__13949 = cljs.core.next(seq__13937__$1);
var G__13950 = null;
var G__13951 = (0);
var G__13952 = (0);
seq__13937 = G__13949;
chunk__13938 = G__13950;
count__13939 = G__13951;
i__13940 = G__13952;
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
var seq__13953 = cljs.core.seq(value);
var chunk__13954 = null;
var count__13955 = (0);
var i__13956 = (0);
while(true){
if((i__13956 < count__13955)){
var event = chunk__13954.cljs$core$IIndexed$_nth$arity$2(null,i__13956);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13957 = seq__13953;
var G__13958 = chunk__13954;
var G__13959 = count__13955;
var G__13960 = (i__13956 + (1));
seq__13953 = G__13957;
chunk__13954 = G__13958;
count__13955 = G__13959;
i__13956 = G__13960;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13953);
if(temp__5735__auto__){
var seq__13953__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13953__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13953__$1);
var G__13961 = cljs.core.chunk_rest(seq__13953__$1);
var G__13962 = c__4609__auto__;
var G__13963 = cljs.core.count(c__4609__auto__);
var G__13964 = (0);
seq__13953 = G__13961;
chunk__13954 = G__13962;
count__13955 = G__13963;
i__13956 = G__13964;
continue;
} else {
var event = cljs.core.first(seq__13953__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13965 = cljs.core.next(seq__13953__$1);
var G__13966 = null;
var G__13967 = (0);
var G__13968 = (0);
seq__13953 = G__13965;
chunk__13954 = G__13966;
count__13955 = G__13967;
i__13956 = G__13968;
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
