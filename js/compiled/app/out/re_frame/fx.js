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
var _STAR_current_trace_STAR__orig_val__13821 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13822 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13822);

try{try{var seq__13823 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13824 = null;
var count__13825 = (0);
var i__13826 = (0);
while(true){
if((i__13826 < count__13825)){
var vec__13833 = chunk__13824.cljs$core$IIndexed$_nth$arity$2(null,i__13826);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13833,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13833,(1),null);
var temp__5733__auto___13855 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13855)){
var effect_fn_13856 = temp__5733__auto___13855;
(effect_fn_13856.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13856.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13856.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13857 = seq__13823;
var G__13858 = chunk__13824;
var G__13859 = count__13825;
var G__13860 = (i__13826 + (1));
seq__13823 = G__13857;
chunk__13824 = G__13858;
count__13825 = G__13859;
i__13826 = G__13860;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13823);
if(temp__5735__auto__){
var seq__13823__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13823__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13823__$1);
var G__13861 = cljs.core.chunk_rest(seq__13823__$1);
var G__13862 = c__4609__auto__;
var G__13863 = cljs.core.count(c__4609__auto__);
var G__13864 = (0);
seq__13823 = G__13861;
chunk__13824 = G__13862;
count__13825 = G__13863;
i__13826 = G__13864;
continue;
} else {
var vec__13836 = cljs.core.first(seq__13823__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13836,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13836,(1),null);
var temp__5733__auto___13865 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13865)){
var effect_fn_13866 = temp__5733__auto___13865;
(effect_fn_13866.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13866.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13866.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13867 = cljs.core.next(seq__13823__$1);
var G__13868 = null;
var G__13869 = (0);
var G__13870 = (0);
seq__13823 = G__13867;
chunk__13824 = G__13868;
count__13825 = G__13869;
i__13826 = G__13870;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13075__auto___13871 = re_frame.interop.now();
var duration__13076__auto___13872 = (end__13075__auto___13871 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13076__auto___13872,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13075__auto___13871);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13821);
}} else {
var seq__13839 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13840 = null;
var count__13841 = (0);
var i__13842 = (0);
while(true){
if((i__13842 < count__13841)){
var vec__13849 = chunk__13840.cljs$core$IIndexed$_nth$arity$2(null,i__13842);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13849,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13849,(1),null);
var temp__5733__auto___13873 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13873)){
var effect_fn_13874 = temp__5733__auto___13873;
(effect_fn_13874.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13874.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13874.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13875 = seq__13839;
var G__13876 = chunk__13840;
var G__13877 = count__13841;
var G__13878 = (i__13842 + (1));
seq__13839 = G__13875;
chunk__13840 = G__13876;
count__13841 = G__13877;
i__13842 = G__13878;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13839);
if(temp__5735__auto__){
var seq__13839__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13839__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13839__$1);
var G__13879 = cljs.core.chunk_rest(seq__13839__$1);
var G__13880 = c__4609__auto__;
var G__13881 = cljs.core.count(c__4609__auto__);
var G__13882 = (0);
seq__13839 = G__13879;
chunk__13840 = G__13880;
count__13841 = G__13881;
i__13842 = G__13882;
continue;
} else {
var vec__13852 = cljs.core.first(seq__13839__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13852,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13852,(1),null);
var temp__5733__auto___13883 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13883)){
var effect_fn_13884 = temp__5733__auto___13883;
(effect_fn_13884.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13884.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13884.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13885 = cljs.core.next(seq__13839__$1);
var G__13886 = null;
var G__13887 = (0);
var G__13888 = (0);
seq__13839 = G__13885;
chunk__13840 = G__13886;
count__13841 = G__13887;
i__13842 = G__13888;
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
var seq__13889 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13890 = null;
var count__13891 = (0);
var i__13892 = (0);
while(true){
if((i__13892 < count__13891)){
var map__13897 = chunk__13890.cljs$core$IIndexed$_nth$arity$2(null,i__13892);
var map__13897__$1 = (((((!((map__13897 == null))))?(((((map__13897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13897):map__13897);
var effect = map__13897__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13897__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13897__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13889,chunk__13890,count__13891,i__13892,map__13897,map__13897__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13889,chunk__13890,count__13891,i__13892,map__13897,map__13897__$1,effect,ms,dispatch))
,ms);
}


var G__13901 = seq__13889;
var G__13902 = chunk__13890;
var G__13903 = count__13891;
var G__13904 = (i__13892 + (1));
seq__13889 = G__13901;
chunk__13890 = G__13902;
count__13891 = G__13903;
i__13892 = G__13904;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13889);
if(temp__5735__auto__){
var seq__13889__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13889__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13889__$1);
var G__13905 = cljs.core.chunk_rest(seq__13889__$1);
var G__13906 = c__4609__auto__;
var G__13907 = cljs.core.count(c__4609__auto__);
var G__13908 = (0);
seq__13889 = G__13905;
chunk__13890 = G__13906;
count__13891 = G__13907;
i__13892 = G__13908;
continue;
} else {
var map__13899 = cljs.core.first(seq__13889__$1);
var map__13899__$1 = (((((!((map__13899 == null))))?(((((map__13899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13899):map__13899);
var effect = map__13899__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13899__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13899__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13889,chunk__13890,count__13891,i__13892,map__13899,map__13899__$1,effect,ms,dispatch,seq__13889__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13889,chunk__13890,count__13891,i__13892,map__13899,map__13899__$1,effect,ms,dispatch,seq__13889__$1,temp__5735__auto__))
,ms);
}


var G__13909 = cljs.core.next(seq__13889__$1);
var G__13910 = null;
var G__13911 = (0);
var G__13912 = (0);
seq__13889 = G__13909;
chunk__13890 = G__13910;
count__13891 = G__13911;
i__13892 = G__13912;
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
var seq__13913 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13914 = null;
var count__13915 = (0);
var i__13916 = (0);
while(true){
if((i__13916 < count__13915)){
var event = chunk__13914.cljs$core$IIndexed$_nth$arity$2(null,i__13916);
re_frame.router.dispatch(event);


var G__13917 = seq__13913;
var G__13918 = chunk__13914;
var G__13919 = count__13915;
var G__13920 = (i__13916 + (1));
seq__13913 = G__13917;
chunk__13914 = G__13918;
count__13915 = G__13919;
i__13916 = G__13920;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13913);
if(temp__5735__auto__){
var seq__13913__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13913__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13913__$1);
var G__13921 = cljs.core.chunk_rest(seq__13913__$1);
var G__13922 = c__4609__auto__;
var G__13923 = cljs.core.count(c__4609__auto__);
var G__13924 = (0);
seq__13913 = G__13921;
chunk__13914 = G__13922;
count__13915 = G__13923;
i__13916 = G__13924;
continue;
} else {
var event = cljs.core.first(seq__13913__$1);
re_frame.router.dispatch(event);


var G__13925 = cljs.core.next(seq__13913__$1);
var G__13926 = null;
var G__13927 = (0);
var G__13928 = (0);
seq__13913 = G__13925;
chunk__13914 = G__13926;
count__13915 = G__13927;
i__13916 = G__13928;
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
var seq__13929 = cljs.core.seq(value);
var chunk__13930 = null;
var count__13931 = (0);
var i__13932 = (0);
while(true){
if((i__13932 < count__13931)){
var event = chunk__13930.cljs$core$IIndexed$_nth$arity$2(null,i__13932);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13933 = seq__13929;
var G__13934 = chunk__13930;
var G__13935 = count__13931;
var G__13936 = (i__13932 + (1));
seq__13929 = G__13933;
chunk__13930 = G__13934;
count__13931 = G__13935;
i__13932 = G__13936;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13929);
if(temp__5735__auto__){
var seq__13929__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13929__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__13929__$1);
var G__13937 = cljs.core.chunk_rest(seq__13929__$1);
var G__13938 = c__4609__auto__;
var G__13939 = cljs.core.count(c__4609__auto__);
var G__13940 = (0);
seq__13929 = G__13937;
chunk__13930 = G__13938;
count__13931 = G__13939;
i__13932 = G__13940;
continue;
} else {
var event = cljs.core.first(seq__13929__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13941 = cljs.core.next(seq__13929__$1);
var G__13942 = null;
var G__13943 = (0);
var G__13944 = (0);
seq__13929 = G__13941;
chunk__13930 = G__13942;
count__13931 = G__13943;
i__13932 = G__13944;
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
