// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
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
var G__17340_17342 = cljs.core.cst$kw$canvas;
var G__17341_17343 = ((function (G__17340_17342){
return (function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$canvas,cljs.core.deref(app.events.canvas));
});})(G__17340_17342))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__17340_17342,G__17341_17343) : re_frame.core.reg_cofx.call(null,G__17340_17342,G__17341_17343));
var G__17344_17346 = cljs.core.cst$kw$canvas;
var G__17345_17347 = ((function (G__17344_17346){
return (function (new_canvas){
return cljs.core.vreset_BANG_(app.events.canvas,new_canvas);
});})(G__17344_17346))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17344_17346,G__17345_17347) : re_frame.core.reg_fx.call(null,G__17344_17346,G__17345_17347));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replace_DASH_canvas,(function (_,p__17348){
var vec__17349 = p__17348;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17349,(0),null);
var new_canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17349,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$canvas,new_canvas,cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_canvas,new_canvas], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$game_SLASH_start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17352 = cljs.core.cst$kw$canvas;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__17352) : re_frame.core.inject_cofx.call(null,G__17352));
})()], null),(function (p__17353,p__17354){
var map__17355 = p__17353;
var map__17355__$1 = (((((!((map__17355 == null))))?(((((map__17355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17355):map__17355);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17355__$1,cljs.core.cst$kw$db);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17355__$1,cljs.core.cst$kw$canvas);
var vec__17356 = p__17354;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17356,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17356,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$game,(app.events.games.cljs$core$IFn$_invoke$arity$1 ? app.events.games.cljs$core$IFn$_invoke$arity$1(game) : app.events.games.call(null,game)),cljs.core.cst$kw$canvas,canvas], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_pause,(function (p__17360,_){
var map__17361 = p__17360;
var map__17361__$1 = (((((!((map__17361 == null))))?(((((map__17361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17361):map__17361);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17361__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$paused),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pause], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_resume,(function (p__17363,p__17364){
var map__17365 = p__17363;
var map__17365__$1 = (((((!((map__17365 == null))))?(((((map__17365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17365):map__17365);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17365__$1,cljs.core.cst$kw$db);
var vec__17366 = p__17364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17366,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17366,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stopped,cljs.core.cst$kw$game_SLASH_state.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$stopped))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_start,game], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resume], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game$input_SLASH_key_DASH_down,(function (_,p__17370){
var vec__17371 = p__17370;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17371,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17371,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_down,key], null)], null)], null);
}));
