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
var _STAR_current_trace_STAR__orig_val__13842 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13843 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13843);

try{try{var seq__13844 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13845 = null;
var count__13846 = (0);
var i__13847 = (0);
while(true){
if((i__13847 < count__13846)){
var vec__13854 = chunk__13845.cljs$core$IIndexed$_nth$arity$2(null,i__13847);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13854,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13854,(1),null);
var temp__5733__auto___13876 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13876)){
var effect_fn_13877 = temp__5733__auto___13876;
(effect_fn_13877.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13877.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13877.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13878 = seq__13844;
var G__13879 = chunk__13845;
var G__13880 = count__13846;
var G__13881 = (i__13847 + (1));
seq__13844 = G__13878;
chunk__13845 = G__13879;
count__13846 = G__13880;
i__13847 = G__13881;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13844);
if(temp__5735__auto__){
var seq__13844__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13844__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13844__$1);
var G__13882 = cljs.core.chunk_rest(seq__13844__$1);
var G__13883 = c__4609__auto__;
var G__13884 = cljs.core.count(c__4609__auto__);
var G__13885 = (0);
seq__13844 = G__13882;
chunk__13845 = G__13883;
count__13846 = G__13884;
i__13847 = G__13885;
continue;
} else {
var vec__13857 = cljs.core.first(seq__13844__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(1),null);
var temp__5733__auto___13886 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13886)){
var effect_fn_13887 = temp__5733__auto___13886;
(effect_fn_13887.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13887.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13887.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13888 = cljs.core.next(seq__13844__$1);
var G__13889 = null;
var G__13890 = (0);
var G__13891 = (0);
seq__13844 = G__13888;
chunk__13845 = G__13889;
count__13846 = G__13890;
i__13847 = G__13891;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13075__auto___13892 = re_frame.interop.now();
var duration__13076__auto___13893 = (end__13075__auto___13892 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13076__auto___13893,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13075__auto___13892);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13842);
}} else {
var seq__13860 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13861 = null;
var count__13862 = (0);
var i__13863 = (0);
while(true){
if((i__13863 < count__13862)){
var vec__13870 = chunk__13861.cljs$core$IIndexed$_nth$arity$2(null,i__13863);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13870,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13870,(1),null);
var temp__5733__auto___13894 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13894)){
var effect_fn_13895 = temp__5733__auto___13894;
(effect_fn_13895.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13895.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13895.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13896 = seq__13860;
var G__13897 = chunk__13861;
var G__13898 = count__13862;
var G__13899 = (i__13863 + (1));
seq__13860 = G__13896;
chunk__13861 = G__13897;
count__13862 = G__13898;
i__13863 = G__13899;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13860);
if(temp__5735__auto__){
var seq__13860__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13860__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13860__$1);
var G__13900 = cljs.core.chunk_rest(seq__13860__$1);
var G__13901 = c__4609__auto__;
var G__13902 = cljs.core.count(c__4609__auto__);
var G__13903 = (0);
seq__13860 = G__13900;
chunk__13861 = G__13901;
count__13862 = G__13902;
i__13863 = G__13903;
continue;
} else {
var vec__13873 = cljs.core.first(seq__13860__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13873,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13873,(1),null);
var temp__5733__auto___13904 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13904)){
var effect_fn_13905 = temp__5733__auto___13904;
(effect_fn_13905.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13905.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13905.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13906 = cljs.core.next(seq__13860__$1);
var G__13907 = null;
var G__13908 = (0);
var G__13909 = (0);
seq__13860 = G__13906;
chunk__13861 = G__13907;
count__13862 = G__13908;
i__13863 = G__13909;
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
var seq__13910 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13911 = null;
var count__13912 = (0);
var i__13913 = (0);
while(true){
if((i__13913 < count__13912)){
var map__13918 = chunk__13911.cljs$core$IIndexed$_nth$arity$2(null,i__13913);
var map__13918__$1 = (((((!((map__13918 == null))))?(((((map__13918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13918):map__13918);
var effect = map__13918__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13918__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13918__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13910,chunk__13911,count__13912,i__13913,map__13918,map__13918__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13910,chunk__13911,count__13912,i__13913,map__13918,map__13918__$1,effect,ms,dispatch))
,ms);
}


var G__13922 = seq__13910;
var G__13923 = chunk__13911;
var G__13924 = count__13912;
var G__13925 = (i__13913 + (1));
seq__13910 = G__13922;
chunk__13911 = G__13923;
count__13912 = G__13924;
i__13913 = G__13925;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13910);
if(temp__5735__auto__){
var seq__13910__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13910__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13910__$1);
var G__13926 = cljs.core.chunk_rest(seq__13910__$1);
var G__13927 = c__4609__auto__;
var G__13928 = cljs.core.count(c__4609__auto__);
var G__13929 = (0);
seq__13910 = G__13926;
chunk__13911 = G__13927;
count__13912 = G__13928;
i__13913 = G__13929;
continue;
} else {
var map__13920 = cljs.core.first(seq__13910__$1);
var map__13920__$1 = (((((!((map__13920 == null))))?(((((map__13920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13920):map__13920);
var effect = map__13920__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13910,chunk__13911,count__13912,i__13913,map__13920,map__13920__$1,effect,ms,dispatch,seq__13910__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13910,chunk__13911,count__13912,i__13913,map__13920,map__13920__$1,effect,ms,dispatch,seq__13910__$1,temp__5735__auto__))
,ms);
}


var G__13930 = cljs.core.next(seq__13910__$1);
var G__13931 = null;
var G__13932 = (0);
var G__13933 = (0);
seq__13910 = G__13930;
chunk__13911 = G__13931;
count__13912 = G__13932;
i__13913 = G__13933;
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
var seq__13934 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13935 = null;
var count__13936 = (0);
var i__13937 = (0);
while(true){
if((i__13937 < count__13936)){
var event = chunk__13935.cljs$core$IIndexed$_nth$arity$2(null,i__13937);
re_frame.router.dispatch(event);


var G__13938 = seq__13934;
var G__13939 = chunk__13935;
var G__13940 = count__13936;
var G__13941 = (i__13937 + (1));
seq__13934 = G__13938;
chunk__13935 = G__13939;
count__13936 = G__13940;
i__13937 = G__13941;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13934);
if(temp__5735__auto__){
var seq__13934__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13934__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13934__$1);
var G__13942 = cljs.core.chunk_rest(seq__13934__$1);
var G__13943 = c__4609__auto__;
var G__13944 = cljs.core.count(c__4609__auto__);
var G__13945 = (0);
seq__13934 = G__13942;
chunk__13935 = G__13943;
count__13936 = G__13944;
i__13937 = G__13945;
continue;
} else {
var event = cljs.core.first(seq__13934__$1);
re_frame.router.dispatch(event);


var G__13946 = cljs.core.next(seq__13934__$1);
var G__13947 = null;
var G__13948 = (0);
var G__13949 = (0);
seq__13934 = G__13946;
chunk__13935 = G__13947;
count__13936 = G__13948;
i__13937 = G__13949;
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
var seq__13950 = cljs.core.seq(value);
var chunk__13951 = null;
var count__13952 = (0);
var i__13953 = (0);
while(true){
if((i__13953 < count__13952)){
var event = chunk__13951.cljs$core$IIndexed$_nth$arity$2(null,i__13953);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13954 = seq__13950;
var G__13955 = chunk__13951;
var G__13956 = count__13952;
var G__13957 = (i__13953 + (1));
seq__13950 = G__13954;
chunk__13951 = G__13955;
count__13952 = G__13956;
i__13953 = G__13957;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13950);
if(temp__5735__auto__){
var seq__13950__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13950__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13950__$1);
var G__13958 = cljs.core.chunk_rest(seq__13950__$1);
var G__13959 = c__4609__auto__;
var G__13960 = cljs.core.count(c__4609__auto__);
var G__13961 = (0);
seq__13950 = G__13958;
chunk__13951 = G__13959;
count__13952 = G__13960;
i__13953 = G__13961;
continue;
} else {
var event = cljs.core.first(seq__13950__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13962 = cljs.core.next(seq__13950__$1);
var G__13963 = null;
var G__13964 = (0);
var G__13965 = (0);
seq__13950 = G__13962;
chunk__13951 = G__13963;
count__13952 = G__13964;
i__13953 = G__13965;
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
