// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('app.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('app.events');
goog.require('app.subs');
goog.require('app.components.layout');
app.views.canvas_ref = (function app$views$canvas_ref(canvas){
var G__17110_17113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_canvas,canvas], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17110_17113) : re_frame.core.dispatch.call(null,G__17110_17113));

if(cljs.core.truth_(canvas)){
canvas.addEventListener("keydown",(function (e){
e.preventDefault();

if(cljs.core.truth_(e.repeat)){
return null;
} else {
var G__17111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game$input_SLASH_key_DASH_down,e.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17111) : re_frame.core.dispatch.call(null,G__17111));
}
}));

return canvas.addEventListener("keyup",(function (e){
e.preventDefault();

var G__17112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game$input_SLASH_key_DASH_up,e.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17112) : re_frame.core.dispatch.call(null,G__17112));
}));
} else {
return null;
}
});
app.views.state_label = (function app$views$state_label(){
var state = cljs.core.deref((function (){var G__17114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17114) : re_frame.core.subscribe.call(null,G__17114));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"State: ",state,(function (){var G__17115 = state;
var G__17115__$1 = (((G__17115 instanceof cljs.core.Keyword))?G__17115.fqn:null);
switch (G__17115__$1) {
case "stopped":
return " (click into the game area to start the game)";

break;
case "paused":
return " (click into the game area to continue the game)";

break;
default:
return "";

}
})()], null);
});
app.views.typing_race_content = (function app$views$typing_race_content(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$title$is_DASH_2,"Description"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"There is a car at the bottom of the game area that would like to move forward, ","but there are some letters in it's way! Your goal is to clear the path by ","shooting the letters by pressing the keys on your keyboard."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$title$is_DASH_2,"Controls"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Shoot: press letter on keyboard you see in front of the car."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$title$is_DASH_2,"Possible future features"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Missiles should be launched off the car on key press and once they hit a letter, it should explode."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Statistics about typing (speed, accuracy, ...)."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Support for keyboards activated by touch (phones, tablets, ...)."], null)], null)], null)], null)], null);
});
app.views.arkanoid_content = (function app$views$arkanoid_content(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$title$is_DASH_2,"Description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This game is work in progress."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$title$is_DASH_2,"Controls"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Move paddle to left: left arrow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Move paddle to right: right arrow"], null)], null);
});
app.views.games = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$typing_DASH_race,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Typing race",cljs.core.cst$kw$name,cljs.core.cst$kw$typing_DASH_race,cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.typing_race_content], null)], null),cljs.core.cst$kw$arkanoid,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"[WIP]: Arkanoid",cljs.core.cst$kw$name,cljs.core.cst$kw$arkanoid,cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.arkanoid_content], null)], null)], null);
app.views.render_game = (function app$views$render_game(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title$is_DASH_1,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.state_label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,"400px",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$tab_DASH_index,(1),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid"], null),cljs.core.cst$kw$on_DASH_focus,(function (){
var G__17117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_resume,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(game)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17117) : re_frame.core.dispatch.call(null,G__17117));
}),cljs.core.cst$kw$on_DASH_blur,(function (){
var G__17118 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_pause], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17118) : re_frame.core.dispatch.call(null,G__17118));
}),cljs.core.cst$kw$ref,app.views.canvas_ref], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column,cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
});
app.views.app = (function app$views$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.layout.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.render_game,cljs.core.cst$kw$typing_DASH_race.cljs$core$IFn$_invoke$arity$1(app.views.games)], null)], null);
});