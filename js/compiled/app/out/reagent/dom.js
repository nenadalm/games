// Compiled by ClojureScript 1.10.748 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__12428 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12429 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12429);

try{var G__12430 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__12431 = container;
var G__12432 = (function (){
var _STAR_always_update_STAR__orig_val__12433 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12434 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12434);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12433);
}});
return reagent.dom.global$module$react_dom.render(G__12430,G__12431,G__12432);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12428);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__12436 = arguments.length;
switch (G__12436) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__12438_12442 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__12439_12443 = null;
var count__12440_12444 = (0);
var i__12441_12445 = (0);
while(true){
if((i__12441_12445 < count__12440_12444)){
var v_12446 = chunk__12439_12443.cljs$core$IIndexed$_nth$arity$2(null,i__12441_12445);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12446);


var G__12447 = seq__12438_12442;
var G__12448 = chunk__12439_12443;
var G__12449 = count__12440_12444;
var G__12450 = (i__12441_12445 + (1));
seq__12438_12442 = G__12447;
chunk__12439_12443 = G__12448;
count__12440_12444 = G__12449;
i__12441_12445 = G__12450;
continue;
} else {
var temp__5720__auto___12451 = cljs.core.seq(seq__12438_12442);
if(temp__5720__auto___12451){
var seq__12438_12452__$1 = temp__5720__auto___12451;
if(cljs.core.chunked_seq_QMARK_(seq__12438_12452__$1)){
var c__4551__auto___12453 = cljs.core.chunk_first(seq__12438_12452__$1);
var G__12454 = cljs.core.chunk_rest(seq__12438_12452__$1);
var G__12455 = c__4551__auto___12453;
var G__12456 = cljs.core.count(c__4551__auto___12453);
var G__12457 = (0);
seq__12438_12442 = G__12454;
chunk__12439_12443 = G__12455;
count__12440_12444 = G__12456;
i__12441_12445 = G__12457;
continue;
} else {
var v_12458 = cljs.core.first(seq__12438_12452__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12458);


var G__12459 = cljs.core.next(seq__12438_12452__$1);
var G__12460 = null;
var G__12461 = (0);
var G__12462 = (0);
seq__12438_12442 = G__12459;
chunk__12439_12443 = G__12460;
count__12440_12444 = G__12461;
i__12441_12445 = G__12462;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
