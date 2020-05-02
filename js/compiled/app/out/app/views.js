// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('app.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('app.events');
goog.require('app.subs');
goog.require('app.components.layout');
goog.require('app.games.typing_race.core');
goog.require('app.games.arkanoid.core');
app.views.canvas_ref = (function app$views$canvas_ref(canvas){
var G__17124_17127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_canvas,canvas], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17124_17127) : re_frame.core.dispatch.call(null,G__17124_17127));

if(cljs.core.truth_(canvas)){
canvas.addEventListener("keydown",(function (e){
e.preventDefault();

if(cljs.core.truth_(e.repeat)){
return null;
} else {
var G__17125 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game$input_SLASH_key_DASH_down,e.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17125) : re_frame.core.dispatch.call(null,G__17125));
}
}));

return canvas.addEventListener("keyup",(function (e){
e.preventDefault();

var G__17126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game$input_SLASH_key_DASH_up,e.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17126) : re_frame.core.dispatch.call(null,G__17126));
}));
} else {
return null;
}
});
app.views.state_label = (function app$views$state_label(){
var state = cljs.core.deref((function (){var G__17128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17128) : re_frame.core.subscribe.call(null,G__17128));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"State: ",state,(function (){var G__17129 = state;
var G__17129__$1 = (((G__17129 instanceof cljs.core.Keyword))?G__17129.fqn:null);
switch (G__17129__$1) {
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
app.views.games = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$typing_DASH_race,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Typing race",cljs.core.cst$kw$name,cljs.core.cst$kw$typing_DASH_race,cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.typing_race_content], null),cljs.core.cst$kw$start,(function (){
return (new app.games.typing_race.core.__GT_TypingRace());
})], null),cljs.core.cst$kw$arkanoid,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"[WIP]: Arkanoid",cljs.core.cst$kw$name,cljs.core.cst$kw$arkanoid,cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.arkanoid_content], null),cljs.core.cst$kw$start,(function (){
return (new app.games.arkanoid.core.__GT_Arkanoid());
})], null)], null);
app.views.render_game = (function app$views$render_game(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title$is_DASH_1,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.state_label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,"400px",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$tab_DASH_index,(1),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid"], null),cljs.core.cst$kw$on_DASH_focus,(function (){
var G__17131 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_resume,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(game),(function (){var fexpr__17132 = cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(game);
return (fexpr__17132.cljs$core$IFn$_invoke$arity$0 ? fexpr__17132.cljs$core$IFn$_invoke$arity$0() : fexpr__17132.call(null));
})()], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17131) : re_frame.core.dispatch.call(null,G__17131));
}),cljs.core.cst$kw$on_DASH_blur,(function (){
var G__17133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_pause], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17133) : re_frame.core.dispatch.call(null,G__17133));
}),cljs.core.cst$kw$ref,app.views.canvas_ref], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column,cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
});
app.views.game_nav = (function app$views$game_nav(game){
var current_page = cljs.core.deref((function (){var G__17134 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17134) : re_frame.core.subscribe.call(null,G__17134));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,(function (){var G__17135 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(game),current_page)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17135,cljs.core.cst$kw$class,"is-active");
} else {
return G__17135;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__17136 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$open_DASH_page,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(game)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17136) : re_frame.core.dispatch.call(null,G__17136));
})], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(game)], null)], null);
});
app.views.games_bar = (function app$views$games_bar(games){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tabs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4582__auto__ = (function app$views$games_bar_$_iter__17137(s__17138){
return (new cljs.core.LazySeq(null,(function (){
var s__17138__$1 = s__17138;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__17138__$1);
if(temp__5735__auto__){
var s__17138__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17138__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__17138__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__17140 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__17139 = (0);
while(true){
if((i__17139 < size__4581__auto__)){
var vec__17141 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__17139);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17141,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17141,(1),null);
cljs.core.chunk_append(b__17140,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.game_nav,game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(game)], null)));

var G__17147 = (i__17139 + (1));
i__17139 = G__17147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17140),app$views$games_bar_$_iter__17137(cljs.core.chunk_rest(s__17138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17140),null);
}
} else {
var vec__17144 = cljs.core.first(s__17138__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17144,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17144,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.game_nav,game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(game)], null)),app$views$games_bar_$_iter__17137(cljs.core.rest(s__17138__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(games);
})()], null)], null);
});
app.views.app = (function app$views$app(){
var current_page = cljs.core.deref((function (){var G__17148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page_DASH_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17148) : re_frame.core.subscribe.call(null,G__17148));
})());
var game = (app.views.games.cljs$core$IFn$_invoke$arity$1 ? app.views.games.cljs$core$IFn$_invoke$arity$1(current_page) : app.views.games.call(null,current_page));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.layout.layout,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.games_bar,app.views.games], null),(cljs.core.truth_(game)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.render_game,game], null):null)], null)], null);
});
