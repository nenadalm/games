// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('app.games.arkanoid.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.game');
goog.require('app.math');
app.games.arkanoid.core.pi = 3.14;
app.games.arkanoid.core.polar__GT_cartesian = (function app$games$arkanoid$core$polar__GT_cartesian(r,phi){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r * Math.cos(phi)),(r * Math.sin(phi))], null);
});
app.games.arkanoid.core.intersection_point = (function app$games$arkanoid$core$intersection_point(l1,l2){
var vec__13754 = l1;
var vec__13757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13754,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13757,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13757,(1),null);
var vec__13760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13754,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13760,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13760,(1),null);
var vec__13763 = l2;
var vec__13766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13763,(0),null);
var x3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766,(0),null);
var y3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766,(1),null);
var vec__13769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13763,(1),null);
var x4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13769,(0),null);
var y4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13769,(1),null);
var x = (((((x1 * y2) - (y1 * x2)) * (x3 - x4)) - ((x1 - x2) * ((x3 * x4) - (y3 * x4)))) / (((x1 - x2) * (y3 - y4)) - ((y1 - y2) * (x3 - x4))));
var y = (((((x1 * y2) - (y1 * x2)) * (y3 - y4)) - ((y1 - y2) * ((x3 * y4) - (y3 * x4)))) / (((x1 - x2) * (y3 - y4)) - ((y1 - y2) * (x3 - x4))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
app.games.arkanoid.core.update_ball = (function app$games$arkanoid$core$update_ball(data,delta){
var ball_dir = app.math.into_vector2(cljs.core.cst$kw$ball_DASH_dir.cljs$core$IFn$_invoke$arity$1(data));
var ball_pos = app.math.into_point2(cljs.core.cst$kw$ball_DASH_pos.cljs$core$IFn$_invoke$arity$1(data));
var coef = (cljs.core.cst$kw$ball_DASH_speed.cljs$core$IFn$_invoke$arity$1(data) * delta);
var movement = app.math._STAR_.cljs$core$IFn$_invoke$arity$2(ball_dir,coef);
var requested_pos = app.math._PLUS_.cljs$core$IFn$_invoke$arity$2(ball_pos,movement);
var pos = cljs.core.cst$kw$ball_DASH_pos.cljs$core$IFn$_invoke$arity$1(data);
var max_x = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_area_SLASH_size,(0)], null)) - cljs.core.cst$kw$ball_DASH_size.cljs$core$IFn$_invoke$arity$1(data));
var max_y = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_area_SLASH_size,(1)], null)) - cljs.core.cst$kw$ball_DASH_size.cljs$core$IFn$_invoke$arity$1(data));
var update_pos = (function (wall_dir,wall_line_segment){
var new_dir = app.math.reflection(ball_dir,wall_dir);
var vec__13772 = app.games.arkanoid.core.intersection_point(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(requested_pos),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(requested_pos)], null)], null),wall_line_segment);
var ip_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(0),null);
var ip_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(1),null);
var ip = (new app.math.Vector2(ip_x,ip_y,null,null,null));
var new_movement = app.math.reflection(app.math.into_vector2(app.math._.cljs$core$IFn$_invoke$arity$2(requested_pos,ip)),wall_dir);
var new_requested_pos = app.math._PLUS_.cljs$core$IFn$_invoke$arity$2(ball_pos,new_movement);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$ball_DASH_dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(new_dir),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(new_dir)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ball_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(new_requested_pos),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(new_requested_pos)], null)], 0));
});
if((max_x < cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(requested_pos))){
return update_pos((new app.math.Vector2((0),(-1),null,null,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_x,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_x,max_y], null)], null));
} else {
if((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(requested_pos) < (0))){
return update_pos((new app.math.Vector2((1),(0),null,null,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_x,(0)], null)], null));
} else {
if((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(requested_pos) < (0))){
return update_pos((new app.math.Vector2((0),(-1),null,null,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),max_y], null)], null));
} else {
if((max_y < cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(requested_pos))){
return update_pos((new app.math.Vector2((1),(0),null,null,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),max_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_x,max_y], null)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$ball_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(requested_pos),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(requested_pos)], null));

}
}
}
}
});
app.games.arkanoid.core.process_input = (function app$games$arkanoid$core$process_input(data,input){
var G__13775 = cljs.core.first(input);
var G__13775__$1 = (((G__13775 instanceof cljs.core.Keyword))?G__13775.fqn:null);
switch (G__13775__$1) {
case "delta":
return app.games.arkanoid.core.update_ball(cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$paddle_DASH_pos,(function (pos){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(pos,(0),(function (x){
var dx = ((cljs.core.cst$kw$paddle_DASH_dir.cljs$core$IFn$_invoke$arity$1(data) * cljs.core.cst$kw$paddle_DASH_speed.cljs$core$IFn$_invoke$arity$1(data)) * cljs.core.second(input));
var new_x = (x + dx);
var max_x = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_area_SLASH_size,(0)], null)) - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paddle_DASH_size,(0)], null)));
var x__4276__auto__ = max_x;
var y__4277__auto__ = (function (){var x__4273__auto__ = (0);
var y__4274__auto__ = new_x;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
}));
})),cljs.core.second(input));

break;
case "key-down":
var G__13776 = cljs.core.second(input);
switch (G__13776) {
case "ArrowLeft":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$paddle_DASH_dir,cljs.core.dec);

break;
case "ArrowRight":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$paddle_DASH_dir,cljs.core.inc);

break;
default:
return data;

}

break;
case "key-up":
var G__13777 = cljs.core.second(input);
switch (G__13777) {
case "ArrowLeft":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$paddle_DASH_dir,cljs.core.inc);

break;
case "ArrowRight":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$paddle_DASH_dir,cljs.core.dec);

break;
default:
return data;

}

break;
default:
return data;

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {app.game.Game}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.games.arkanoid.core.Arkanoid = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k13782,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__13786 = k13782;
switch (G__13786) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13782,else__4442__auto__);

}
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__13787){
var vec__13788 = p__13787;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#app.games.arkanoid.core.Arkanoid{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13781){
var self__ = this;
var G__13781__$1 = this;
return (new cljs.core.RecordIter((0),G__13781__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new app.games.arkanoid.core.Arkanoid(self__.__meta,self__.__extmap,self__.__hash));
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__13791 = (function (coll__4436__auto__){
return (-2006909491 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__13791(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13783,other13784){
var self__ = this;
var this13783__$1 = this;
return (((!((other13784 == null)))) && ((this13783__$1.constructor === other13784.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13783__$1.__extmap,other13784.__extmap)));
}));

(app.games.arkanoid.core.Arkanoid.prototype.app$game$Game$ = cljs.core.PROTOCOL_SENTINEL);

(app.games.arkanoid.core.Arkanoid.prototype.app$game$Game$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var game_area_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null);
var tiles = (10);
var area_horizontal_center = (function (){var G__13792 = ((game_area_size.cljs$core$IFn$_invoke$arity$1 ? game_area_size.cljs$core$IFn$_invoke$arity$1((0)) : game_area_size.call(null,(0))) / (2));
return Math.floor(G__13792);
})();
var tile_size = (function (){var G__13793 = ((game_area_size.cljs$core$IFn$_invoke$arity$1 ? game_area_size.cljs$core$IFn$_invoke$arity$1((1)) : game_area_size.call(null,(1))) / tiles);
return Math.floor(G__13793);
})();
var paddle_width = ((2) * tile_size);
var paddle_height = (tile_size / (4));
var ball_size = paddle_height;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.cst$kw$tiles,tiles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ball_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13794 = (area_horizontal_center - (ball_size / (2)));
return Math.floor(G__13794);
})(),(((game_area_size.cljs$core$IFn$_invoke$arity$1 ? game_area_size.cljs$core$IFn$_invoke$arity$1((1)) : game_area_size.call(null,(1))) - paddle_height) - ball_size)], null),cljs.core.cst$kw$paddle_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13795 = (area_horizontal_center - (paddle_width / (2)));
return Math.floor(G__13795);
})(),((game_area_size.cljs$core$IFn$_invoke$arity$1 ? game_area_size.cljs$core$IFn$_invoke$arity$1((1)) : game_area_size.call(null,(1))) - paddle_height)], null),cljs.core.cst$kw$ball_DASH_speed,0.22,cljs.core.cst$kw$paddle_DASH_speed,0.22,cljs.core.cst$kw$paddle_DASH_dir,(0),cljs.core.cst$kw$paddle_DASH_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paddle_width,paddle_height], null),cljs.core.cst$kw$ball_DASH_size,paddle_height,cljs.core.cst$kw$ball_DASH_dir,app.games.arkanoid.core.polar__GT_cartesian((1),(app.games.arkanoid.core.pi / (-4))),cljs.core.cst$kw$game_DASH_area_SLASH_size,game_area_size], 0));
}));

(app.games.arkanoid.core.Arkanoid.prototype.app$game$Game$_process_inputs$arity$2 = (function (this$,inputs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.games.arkanoid.core.process_input,this$__$1,inputs);
}));

(app.games.arkanoid.core.Arkanoid.prototype.app$game$Game$_render$arity$3 = (function (this$,_,context){
var self__ = this;
var this$__$1 = this;
var game_area_size = cljs.core.cst$kw$game_DASH_area_SLASH_size.cljs$core$IFn$_invoke$arity$1(this$__$1);
var ball_size = cljs.core.cst$kw$ball_DASH_size.cljs$core$IFn$_invoke$arity$1(this$__$1);
var ball_pos = cljs.core.cst$kw$ball_DASH_pos.cljs$core$IFn$_invoke$arity$1(this$__$1);
var paddle_pos = cljs.core.cst$kw$paddle_DASH_pos.cljs$core$IFn$_invoke$arity$1(this$__$1);
var paddle_size = cljs.core.cst$kw$paddle_DASH_size.cljs$core$IFn$_invoke$arity$1(this$__$1);
context.clearRect((0),(0),(game_area_size.cljs$core$IFn$_invoke$arity$1 ? game_area_size.cljs$core$IFn$_invoke$arity$1((0)) : game_area_size.call(null,(0))),(game_area_size.cljs$core$IFn$_invoke$arity$1 ? game_area_size.cljs$core$IFn$_invoke$arity$1((1)) : game_area_size.call(null,(1))));

context.fillRect((paddle_pos.cljs$core$IFn$_invoke$arity$1 ? paddle_pos.cljs$core$IFn$_invoke$arity$1((0)) : paddle_pos.call(null,(0))),(paddle_pos.cljs$core$IFn$_invoke$arity$1 ? paddle_pos.cljs$core$IFn$_invoke$arity$1((1)) : paddle_pos.call(null,(1))),(paddle_size.cljs$core$IFn$_invoke$arity$1 ? paddle_size.cljs$core$IFn$_invoke$arity$1((0)) : paddle_size.call(null,(0))),(paddle_size.cljs$core$IFn$_invoke$arity$1 ? paddle_size.cljs$core$IFn$_invoke$arity$1((1)) : paddle_size.call(null,(1))));

return context.fillRect((ball_pos.cljs$core$IFn$_invoke$arity$1 ? ball_pos.cljs$core$IFn$_invoke$arity$1((0)) : ball_pos.call(null,(0))),(ball_pos.cljs$core$IFn$_invoke$arity$1 ? ball_pos.cljs$core$IFn$_invoke$arity$1((1)) : ball_pos.call(null,(1))),ball_size,ball_size);
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new app.games.arkanoid.core.Arkanoid(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__13781){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__13796 = cljs.core.keyword_identical_QMARK_;
var expr__13797 = k__4447__auto__;
return (new app.games.arkanoid.core.Arkanoid(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__13781),null));
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__13781){
var self__ = this;
var this__4438__auto____$1 = this;
return (new app.games.arkanoid.core.Arkanoid(G__13781,self__.__extmap,self__.__hash));
}));

(app.games.arkanoid.core.Arkanoid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(app.games.arkanoid.core.Arkanoid.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(app.games.arkanoid.core.Arkanoid.cljs$lang$type = true);

(app.games.arkanoid.core.Arkanoid.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"app.games.arkanoid.core/Arkanoid",null,(1),null));
}));

(app.games.arkanoid.core.Arkanoid.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"app.games.arkanoid.core/Arkanoid");
}));

/**
 * Positional factory function for app.games.arkanoid.core/Arkanoid.
 */
app.games.arkanoid.core.__GT_Arkanoid = (function app$games$arkanoid$core$__GT_Arkanoid(){
return (new app.games.arkanoid.core.Arkanoid(null,null,null));
});

/**
 * Factory function for app.games.arkanoid.core/Arkanoid, taking a map of keywords to field values.
 */
app.games.arkanoid.core.map__GT_Arkanoid = (function app$games$arkanoid$core$map__GT_Arkanoid(G__13785){
var extmap__4478__auto__ = (function (){var G__13799 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__13785);
if(cljs.core.record_QMARK_(G__13785)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13799);
} else {
return G__13799;
}
})();
return (new app.games.arkanoid.core.Arkanoid(null,cljs.core.not_empty(extmap__4478__auto__),null));
});

