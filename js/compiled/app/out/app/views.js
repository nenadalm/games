// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('app.events');
goog.require('app.subs');
goog.require('app.components.layout');
app.views.canvas_ref = (function app$views$canvas_ref(canvas){
var G__29052_29054 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_canvas,canvas], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29052_29054) : re_frame.core.dispatch.call(null,G__29052_29054));

if(cljs.core.truth_(canvas)){
return canvas.addEventListener("keydown",(function (e){
if(cljs.core.truth_(e.repeat)){
return null;
} else {
var G__29053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game$input_SLASH_key_DASH_down,e.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29053) : re_frame.core.dispatch.call(null,G__29053));
}
}));
} else {
return null;
}
});
app.views.state_label = (function app$views$state_label(){
var state = cljs.core.deref((function (){var G__29055 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29055) : re_frame.core.subscribe.call(null,G__29055));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"State: ",state,(function (){var G__29056 = state;
var G__29056__$1 = (((G__29056 instanceof cljs.core.Keyword))?G__29056.fqn:null);
switch (G__29056__$1) {
case "stopped":
return " (click into the game area to start te game)";

break;
case "paused":
return " (click into the game area to continue the game)";

break;
case "running":
return " (start typing to move forward)";

break;
default:
return "";

}
})()], null);
});
app.views.app = (function app$views$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.layout.layout,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title$is_DASH_1,"Typing race"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.state_label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,"400px",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$tab_DASH_index,(1),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid"], null),cljs.core.cst$kw$on_DASH_focus,(function (){
var G__29058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_resume,cljs.core.cst$kw$typing_DASH_race], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29058) : re_frame.core.dispatch.call(null,G__29058));
}),cljs.core.cst$kw$on_DASH_blur,(function (){
var G__29059 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_pause], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29059) : re_frame.core.dispatch.call(null,G__29059));
}),cljs.core.cst$kw$ref,app.views.canvas_ref], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$title$is_DASH_2,"Description"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"There is a car at the bottom of the game area that would like to move forward, ","but there are some letters in it's way! Your goal is to clear the path by ","shooting the letters by pressing the keys on your keyboard."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$title$is_DASH_2,"Possible future features"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Missiles should be launched off the car on key press and once they hit a letter, it should explode."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Statistics about typing (speed, accuracy, ...)."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Support for keyboards activated by touch (phones, tablets, ...)."], null)], null)], null)], null)], null)], null)], null)], null);
});
