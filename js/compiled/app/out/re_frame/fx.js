// Compiled by ClojureScript 1.10.748 {:static-fns true, :optimize-constants true}
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
var _STAR_current_trace_STAR__orig_val__13787 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13788 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13788);

try{try{var seq__13789 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13790 = null;
var count__13791 = (0);
var i__13792 = (0);
while(true){
if((i__13792 < count__13791)){
var vec__13799 = chunk__13790.cljs$core$IIndexed$_nth$arity$2(null,i__13792);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13799,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13799,(1),null);
var temp__5718__auto___13821 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13821)){
var effect_fn_13822 = temp__5718__auto___13821;
(effect_fn_13822.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13822.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13822.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13823 = seq__13789;
var G__13824 = chunk__13790;
var G__13825 = count__13791;
var G__13826 = (i__13792 + (1));
seq__13789 = G__13823;
chunk__13790 = G__13824;
count__13791 = G__13825;
i__13792 = G__13826;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13789);
if(temp__5720__auto__){
var seq__13789__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13789__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__13789__$1);
var G__13827 = cljs.core.chunk_rest(seq__13789__$1);
var G__13828 = c__4551__auto__;
var G__13829 = cljs.core.count(c__4551__auto__);
var G__13830 = (0);
seq__13789 = G__13827;
chunk__13790 = G__13828;
count__13791 = G__13829;
i__13792 = G__13830;
continue;
} else {
var vec__13802 = cljs.core.first(seq__13789__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802,(1),null);
var temp__5718__auto___13831 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13831)){
var effect_fn_13832 = temp__5718__auto___13831;
(effect_fn_13832.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13832.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13832.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13833 = cljs.core.next(seq__13789__$1);
var G__13834 = null;
var G__13835 = (0);
var G__13836 = (0);
seq__13789 = G__13833;
chunk__13790 = G__13834;
count__13791 = G__13835;
i__13792 = G__13836;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13165__auto___13837 = re_frame.interop.now();
var duration__13166__auto___13838 = (end__13165__auto___13837 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13166__auto___13838,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13165__auto___13837);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13787);
}} else {
var seq__13805 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13806 = null;
var count__13807 = (0);
var i__13808 = (0);
while(true){
if((i__13808 < count__13807)){
var vec__13815 = chunk__13806.cljs$core$IIndexed$_nth$arity$2(null,i__13808);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815,(1),null);
var temp__5718__auto___13839 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13839)){
var effect_fn_13840 = temp__5718__auto___13839;
(effect_fn_13840.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13840.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13840.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13841 = seq__13805;
var G__13842 = chunk__13806;
var G__13843 = count__13807;
var G__13844 = (i__13808 + (1));
seq__13805 = G__13841;
chunk__13806 = G__13842;
count__13807 = G__13843;
i__13808 = G__13844;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13805);
if(temp__5720__auto__){
var seq__13805__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13805__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__13805__$1);
var G__13845 = cljs.core.chunk_rest(seq__13805__$1);
var G__13846 = c__4551__auto__;
var G__13847 = cljs.core.count(c__4551__auto__);
var G__13848 = (0);
seq__13805 = G__13845;
chunk__13806 = G__13846;
count__13807 = G__13847;
i__13808 = G__13848;
continue;
} else {
var vec__13818 = cljs.core.first(seq__13805__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13818,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13818,(1),null);
var temp__5718__auto___13849 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13849)){
var effect_fn_13850 = temp__5718__auto___13849;
(effect_fn_13850.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13850.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13850.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13851 = cljs.core.next(seq__13805__$1);
var G__13852 = null;
var G__13853 = (0);
var G__13854 = (0);
seq__13805 = G__13851;
chunk__13806 = G__13852;
count__13807 = G__13853;
i__13808 = G__13854;
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
var seq__13855 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13856 = null;
var count__13857 = (0);
var i__13858 = (0);
while(true){
if((i__13858 < count__13857)){
var map__13863 = chunk__13856.cljs$core$IIndexed$_nth$arity$2(null,i__13858);
var map__13863__$1 = (((((!((map__13863 == null))))?(((((map__13863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13863):map__13863);
var effect = map__13863__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13863__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13863__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13855,chunk__13856,count__13857,i__13858,map__13863,map__13863__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13855,chunk__13856,count__13857,i__13858,map__13863,map__13863__$1,effect,ms,dispatch))
,ms);
}


var G__13867 = seq__13855;
var G__13868 = chunk__13856;
var G__13869 = count__13857;
var G__13870 = (i__13858 + (1));
seq__13855 = G__13867;
chunk__13856 = G__13868;
count__13857 = G__13869;
i__13858 = G__13870;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13855);
if(temp__5720__auto__){
var seq__13855__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13855__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__13855__$1);
var G__13871 = cljs.core.chunk_rest(seq__13855__$1);
var G__13872 = c__4551__auto__;
var G__13873 = cljs.core.count(c__4551__auto__);
var G__13874 = (0);
seq__13855 = G__13871;
chunk__13856 = G__13872;
count__13857 = G__13873;
i__13858 = G__13874;
continue;
} else {
var map__13865 = cljs.core.first(seq__13855__$1);
var map__13865__$1 = (((((!((map__13865 == null))))?(((((map__13865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13865):map__13865);
var effect = map__13865__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13865__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13865__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13855,chunk__13856,count__13857,i__13858,map__13865,map__13865__$1,effect,ms,dispatch,seq__13855__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13855,chunk__13856,count__13857,i__13858,map__13865,map__13865__$1,effect,ms,dispatch,seq__13855__$1,temp__5720__auto__))
,ms);
}


var G__13875 = cljs.core.next(seq__13855__$1);
var G__13876 = null;
var G__13877 = (0);
var G__13878 = (0);
seq__13855 = G__13875;
chunk__13856 = G__13876;
count__13857 = G__13877;
i__13858 = G__13878;
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
var seq__13879 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13880 = null;
var count__13881 = (0);
var i__13882 = (0);
while(true){
if((i__13882 < count__13881)){
var event = chunk__13880.cljs$core$IIndexed$_nth$arity$2(null,i__13882);
re_frame.router.dispatch(event);


var G__13883 = seq__13879;
var G__13884 = chunk__13880;
var G__13885 = count__13881;
var G__13886 = (i__13882 + (1));
seq__13879 = G__13883;
chunk__13880 = G__13884;
count__13881 = G__13885;
i__13882 = G__13886;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13879);
if(temp__5720__auto__){
var seq__13879__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13879__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__13879__$1);
var G__13887 = cljs.core.chunk_rest(seq__13879__$1);
var G__13888 = c__4551__auto__;
var G__13889 = cljs.core.count(c__4551__auto__);
var G__13890 = (0);
seq__13879 = G__13887;
chunk__13880 = G__13888;
count__13881 = G__13889;
i__13882 = G__13890;
continue;
} else {
var event = cljs.core.first(seq__13879__$1);
re_frame.router.dispatch(event);


var G__13891 = cljs.core.next(seq__13879__$1);
var G__13892 = null;
var G__13893 = (0);
var G__13894 = (0);
seq__13879 = G__13891;
chunk__13880 = G__13892;
count__13881 = G__13893;
i__13882 = G__13894;
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
var seq__13895 = cljs.core.seq(value);
var chunk__13896 = null;
var count__13897 = (0);
var i__13898 = (0);
while(true){
if((i__13898 < count__13897)){
var event = chunk__13896.cljs$core$IIndexed$_nth$arity$2(null,i__13898);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13899 = seq__13895;
var G__13900 = chunk__13896;
var G__13901 = count__13897;
var G__13902 = (i__13898 + (1));
seq__13895 = G__13899;
chunk__13896 = G__13900;
count__13897 = G__13901;
i__13898 = G__13902;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13895);
if(temp__5720__auto__){
var seq__13895__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13895__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__13895__$1);
var G__13903 = cljs.core.chunk_rest(seq__13895__$1);
var G__13904 = c__4551__auto__;
var G__13905 = cljs.core.count(c__4551__auto__);
var G__13906 = (0);
seq__13895 = G__13903;
chunk__13896 = G__13904;
count__13897 = G__13905;
i__13898 = G__13906;
continue;
} else {
var event = cljs.core.first(seq__13895__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13907 = cljs.core.next(seq__13895__$1);
var G__13908 = null;
var G__13909 = (0);
var G__13910 = (0);
seq__13895 = G__13907;
chunk__13896 = G__13908;
count__13897 = G__13909;
i__13898 = G__13910;
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
