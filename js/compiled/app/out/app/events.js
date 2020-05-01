// Compiled by ClojureScript 1.10.748 {:static-fns true, :optimize-constants true}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('app.games.typing_race.core');
/**
 * All available games by their name.
 */
app.events.games = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$typing_DASH_race,(new app.games.typing_race.core.__GT_TypingRace())], null);
/**
 * Canvas to render current game on.
 */
app.events.canvas = cljs.core.volatile_BANG_(null);
var G__17021_17023 = cljs.core.cst$kw$canvas;
var G__17022_17024 = (function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$canvas,cljs.core.deref(app.events.canvas));
});
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__17021_17023,G__17022_17024) : re_frame.core.reg_cofx.call(null,G__17021_17023,G__17022_17024));
var G__17025_17027 = cljs.core.cst$kw$canvas;
var G__17026_17028 = (function (new_canvas){
return cljs.core.vreset_BANG_(app.events.canvas,new_canvas);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17025_17027,G__17026_17028) : re_frame.core.reg_fx.call(null,G__17025_17027,G__17026_17028));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replace_DASH_canvas,(function (_,p__17029){
var vec__17030 = p__17029;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17030,(0),null);
var new_canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17030,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$canvas,new_canvas,cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_canvas,new_canvas], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$game_SLASH_start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17033 = cljs.core.cst$kw$canvas;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__17033) : re_frame.core.inject_cofx.call(null,G__17033));
})()], null),(function (p__17034,p__17035){
var map__17036 = p__17034;
var map__17036__$1 = (((((!((map__17036 == null))))?(((((map__17036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17036):map__17036);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17036__$1,cljs.core.cst$kw$db);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17036__$1,cljs.core.cst$kw$canvas);
var vec__17037 = p__17035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17037,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17037,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$game,(app.events.games.cljs$core$IFn$_invoke$arity$1 ? app.events.games.cljs$core$IFn$_invoke$arity$1(game) : app.events.games.call(null,game)),cljs.core.cst$kw$canvas,canvas], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_pause,(function (p__17041,_){
var map__17042 = p__17041;
var map__17042__$1 = (((((!((map__17042 == null))))?(((((map__17042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17042):map__17042);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17042__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$paused),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pause], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_resume,(function (p__17044,p__17045){
var map__17046 = p__17044;
var map__17046__$1 = (((((!((map__17046 == null))))?(((((map__17046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17046):map__17046);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17046__$1,cljs.core.cst$kw$db);
var vec__17047 = p__17045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17047,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17047,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stopped,cljs.core.cst$kw$game_SLASH_state.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$stopped))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_start,game], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resume], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game$input_SLASH_key_DASH_down,(function (_,p__17051){
var vec__17052 = p__17051;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17052,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17052,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_down,key], null)], null)], null);
}));
