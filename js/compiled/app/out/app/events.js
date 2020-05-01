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
var G__17024_17026 = cljs.core.cst$kw$canvas;
var G__17025_17027 = (function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$canvas,cljs.core.deref(app.events.canvas));
});
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__17024_17026,G__17025_17027) : re_frame.core.reg_cofx.call(null,G__17024_17026,G__17025_17027));
var G__17028_17030 = cljs.core.cst$kw$canvas;
var G__17029_17031 = (function (new_canvas){
return cljs.core.vreset_BANG_(app.events.canvas,new_canvas);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17028_17030,G__17029_17031) : re_frame.core.reg_fx.call(null,G__17028_17030,G__17029_17031));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replace_DASH_canvas,(function (_,p__17032){
var vec__17033 = p__17032;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17033,(0),null);
var new_canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17033,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$canvas,new_canvas,cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_canvas,new_canvas], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$game_SLASH_start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17036 = cljs.core.cst$kw$canvas;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__17036) : re_frame.core.inject_cofx.call(null,G__17036));
})()], null),(function (p__17037,p__17038){
var map__17039 = p__17037;
var map__17039__$1 = (((((!((map__17039 == null))))?(((((map__17039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17039):map__17039);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17039__$1,cljs.core.cst$kw$db);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17039__$1,cljs.core.cst$kw$canvas);
var vec__17040 = p__17038;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17040,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17040,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$game,(app.events.games.cljs$core$IFn$_invoke$arity$1 ? app.events.games.cljs$core$IFn$_invoke$arity$1(game) : app.events.games.call(null,game)),cljs.core.cst$kw$canvas,canvas], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_pause,(function (p__17044,_){
var map__17045 = p__17044;
var map__17045__$1 = (((((!((map__17045 == null))))?(((((map__17045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17045):map__17045);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17045__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$paused),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pause], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_resume,(function (p__17047,p__17048){
var map__17049 = p__17047;
var map__17049__$1 = (((((!((map__17049 == null))))?(((((map__17049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17049):map__17049);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17049__$1,cljs.core.cst$kw$db);
var vec__17050 = p__17048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17050,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17050,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stopped,cljs.core.cst$kw$game_SLASH_state.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$stopped))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_start,game], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resume], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game$input_SLASH_key_DASH_down,(function (_,p__17054){
var vec__17055 = p__17054;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17055,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17055,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_down,key], null)], null)], null);
}));
