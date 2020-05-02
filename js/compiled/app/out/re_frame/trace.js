// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__13097){
var map__13098 = p__13097;
var map__13098__$1 = (((((!((map__13098 == null))))?(((((map__13098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13098):map__13098);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13098__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13098__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13098__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13098__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__13100_13124 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__13101_13125 = null;
var count__13102_13126 = (0);
var i__13103_13127 = (0);
while(true){
if((i__13103_13127 < count__13102_13126)){
var vec__13114_13128 = chunk__13101_13125.cljs$core$IIndexed$_nth$arity$2(null,i__13103_13127);
var k_13129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13114_13128,(0),null);
var cb_13130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13114_13128,(1),null);
try{var G__13118_13131 = cljs.core.deref(re_frame.trace.traces);
(cb_13130.cljs$core$IFn$_invoke$arity$1 ? cb_13130.cljs$core$IFn$_invoke$arity$1(G__13118_13131) : cb_13130.call(null,G__13118_13131));
}catch (e13117){var e_13132 = e13117;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13129,"while storing",cljs.core.deref(re_frame.trace.traces),e_13132], 0));
}

var G__13133 = seq__13100_13124;
var G__13134 = chunk__13101_13125;
var G__13135 = count__13102_13126;
var G__13136 = (i__13103_13127 + (1));
seq__13100_13124 = G__13133;
chunk__13101_13125 = G__13134;
count__13102_13126 = G__13135;
i__13103_13127 = G__13136;
continue;
} else {
var temp__5735__auto___13137 = cljs.core.seq(seq__13100_13124);
if(temp__5735__auto___13137){
var seq__13100_13138__$1 = temp__5735__auto___13137;
if(cljs.core.chunked_seq_QMARK_(seq__13100_13138__$1)){
var c__4609__auto___13139 = cljs.core.chunk_first(seq__13100_13138__$1);
var G__13140 = cljs.core.chunk_rest(seq__13100_13138__$1);
var G__13141 = c__4609__auto___13139;
var G__13142 = cljs.core.count(c__4609__auto___13139);
var G__13143 = (0);
seq__13100_13124 = G__13140;
chunk__13101_13125 = G__13141;
count__13102_13126 = G__13142;
i__13103_13127 = G__13143;
continue;
} else {
var vec__13119_13144 = cljs.core.first(seq__13100_13138__$1);
var k_13145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13119_13144,(0),null);
var cb_13146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13119_13144,(1),null);
try{var G__13123_13147 = cljs.core.deref(re_frame.trace.traces);
(cb_13146.cljs$core$IFn$_invoke$arity$1 ? cb_13146.cljs$core$IFn$_invoke$arity$1(G__13123_13147) : cb_13146.call(null,G__13123_13147));
}catch (e13122){var e_13148 = e13122;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13145,"while storing",cljs.core.deref(re_frame.trace.traces),e_13148], 0));
}

var G__13149 = cljs.core.next(seq__13100_13138__$1);
var G__13150 = null;
var G__13151 = (0);
var G__13152 = (0);
seq__13100_13124 = G__13149;
chunk__13101_13125 = G__13150;
count__13102_13126 = G__13151;
i__13103_13127 = G__13152;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
