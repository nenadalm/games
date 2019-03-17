// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.timbre.appender.sentry');
goog.require('cljs.core');
goog.require('cljs.core.constants');
app.timbre.appender.sentry.global$module$sentry = goog.global["Sentry"];
app.timbre.appender.sentry.timbre__GT_sentry_levels = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,"debug",cljs.core.cst$kw$debug,"debug",cljs.core.cst$kw$report,"info",cljs.core.cst$kw$info,"info",cljs.core.cst$kw$warn,"warning",cljs.core.cst$kw$error,"error",cljs.core.cst$kw$fatal,"fatal"], null);
app.timbre.appender.sentry.sentry_appender = (function app$timbre$appender$sentry$sentry_appender(dsn){
app.timbre.appender.sentry.global$module$sentry.init(({"dsn": dsn}));

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$min_DASH_level,cljs.core.cst$kw$warn,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$fn,(function (data){
var map__13710 = data;
var map__13710__$1 = (((((!((map__13710 == null))))?(((((map__13710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13710):map__13710);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,cljs.core.cst$kw$level);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,cljs.core.cst$kw$msg_);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,cljs.core.cst$kw$context);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,cljs.core.cst$kw$_QMARK_err);
var event = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,cljs.core.force(msg_),cljs.core.cst$kw$level,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.timbre.appender.sentry.timbre__GT_sentry_levels,level)], null),(cljs.core.truth_(context)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extra,context], null):null)], 0));
if(cljs.core.truth_(_QMARK_err)){
return app.timbre.appender.sentry.global$module$sentry.captureException(_QMARK_err);
} else {
return app.timbre.appender.sentry.global$module$sentry.captureMessage(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(event),cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(event));
}
})], null);
});
