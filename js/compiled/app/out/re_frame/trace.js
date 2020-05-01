// Compiled by ClojureScript 1.10.748 {:static-fns true, :optimize-constants true}
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

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
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
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__13187){
var map__13188 = p__13187;
var map__13188__$1 = (((((!((map__13188 == null))))?(((((map__13188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13188):map__13188);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13188__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13188__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13188__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13188__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4121__auto__ = child_of;
if(cljs.core.truth_(or__4121__auto__)){
return or__4121__auto__;
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
var seq__13190_13214 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__13191_13215 = null;
var count__13192_13216 = (0);
var i__13193_13217 = (0);
while(true){
if((i__13193_13217 < count__13192_13216)){
var vec__13204_13218 = chunk__13191_13215.cljs$core$IIndexed$_nth$arity$2(null,i__13193_13217);
var k_13219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13204_13218,(0),null);
var cb_13220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13204_13218,(1),null);
try{var G__13208_13221 = cljs.core.deref(re_frame.trace.traces);
(cb_13220.cljs$core$IFn$_invoke$arity$1 ? cb_13220.cljs$core$IFn$_invoke$arity$1(G__13208_13221) : cb_13220.call(null,G__13208_13221));
}catch (e13207){var e_13222 = e13207;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13219,"while storing",cljs.core.deref(re_frame.trace.traces),e_13222], 0));
}

var G__13223 = seq__13190_13214;
var G__13224 = chunk__13191_13215;
var G__13225 = count__13192_13216;
var G__13226 = (i__13193_13217 + (1));
seq__13190_13214 = G__13223;
chunk__13191_13215 = G__13224;
count__13192_13216 = G__13225;
i__13193_13217 = G__13226;
continue;
} else {
var temp__5720__auto___13227 = cljs.core.seq(seq__13190_13214);
if(temp__5720__auto___13227){
var seq__13190_13228__$1 = temp__5720__auto___13227;
if(cljs.core.chunked_seq_QMARK_(seq__13190_13228__$1)){
var c__4551__auto___13229 = cljs.core.chunk_first(seq__13190_13228__$1);
var G__13230 = cljs.core.chunk_rest(seq__13190_13228__$1);
var G__13231 = c__4551__auto___13229;
var G__13232 = cljs.core.count(c__4551__auto___13229);
var G__13233 = (0);
seq__13190_13214 = G__13230;
chunk__13191_13215 = G__13231;
count__13192_13216 = G__13232;
i__13193_13217 = G__13233;
continue;
} else {
var vec__13209_13234 = cljs.core.first(seq__13190_13228__$1);
var k_13235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13209_13234,(0),null);
var cb_13236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13209_13234,(1),null);
try{var G__13213_13237 = cljs.core.deref(re_frame.trace.traces);
(cb_13236.cljs$core$IFn$_invoke$arity$1 ? cb_13236.cljs$core$IFn$_invoke$arity$1(G__13213_13237) : cb_13236.call(null,G__13213_13237));
}catch (e13212){var e_13238 = e13212;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13235,"while storing",cljs.core.deref(re_frame.trace.traces),e_13238], 0));
}

var G__13239 = cljs.core.next(seq__13190_13228__$1);
var G__13240 = null;
var G__13241 = (0);
var G__13242 = (0);
seq__13190_13214 = G__13239;
chunk__13191_13215 = G__13240;
count__13192_13216 = G__13241;
i__13193_13217 = G__13242;
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
