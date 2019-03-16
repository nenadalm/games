// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.game_engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('re_frame.core');
goog.require('app.game');
app.game_engine.game_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
app.game_engine.replace_canvas = (function app$game_engine$replace_canvas(state,canvas){
if(cljs.core.truth_(canvas)){
var context = canvas.getContext("2d");
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$context,context),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$game_DASH_area_SLASH_size], null),((function (context){
return (function (p1__29062_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__29062_SHARP_,cljs.core.cst$kw$width,canvas.width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,canvas.height], 0));
});})(context))
);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$context,null);
}
});
app.game_engine.unpause = (function app$game_engine$unpause(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$running,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$prev_DASH_time,window.performance.now()], 0));
});
/**
 * Runs single iteration of the game loop (update, render). Returns state.
 */
app.game_engine.game_iter_BANG_ = (function app$game_engine$game_iter_BANG_(state){
var current_time = window.performance.now();
var delta = (current_time - cljs.core.cst$kw$prev_DASH_time.cljs$core$IFn$_invoke$arity$1(state));
var inputs = (cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(state))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delta,delta], null)):cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state));
var game = app.game.process_inputs(cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(state),inputs);
var updated_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$game,game,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$prev_DASH_time,current_time], 0));
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(updated_state);
if(cljs.core.truth_(context)){
app.game.render(game,cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(updated_state),context);
} else {
}

window.requestAnimationFrame(((function (current_time,delta,inputs,game,updated_state,context){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.game_engine.game_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loop], null));
});})(current_time,delta,inputs,game,updated_state,context))
);

return updated_state;
});
/**
 * Initializes game. Returns initial game state.
 */
app.game_engine.start_game_BANG_ = (function app$game_engine$start_game_BANG_(p__29063){
var map__29064 = p__29063;
var map__29064__$1 = (((((!((map__29064 == null))))?(((((map__29064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29064):map__29064);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29064__$1,cljs.core.cst$kw$settings);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29064__$1,cljs.core.cst$kw$game);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29064__$1,cljs.core.cst$kw$canvas);
var initial_state = app.game_engine.unpause(app.game_engine.replace_canvas(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$running,true,cljs.core.cst$kw$settings,settings,cljs.core.cst$kw$game,app.game.init(game)], null),canvas));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.game_engine.game_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loop], null));

return initial_state;
});
app.game_engine.init = (function app$game_engine$init(){
var c__26746__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto__){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto__){
return (function (state_29112){
var state_val_29113 = (state_29112[(1)]);
if((state_val_29113 === (7))){
var inst_29074 = (state_29112[(7)]);
var inst_29071 = (state_29112[(8)]);
var inst_29077 = cljs.core.second(inst_29074);
var inst_29078 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_29071,cljs.core.cst$kw$inputs,cljs.core.conj,inst_29077);
var state_29112__$1 = state_29112;
var statearr_29114_29152 = state_29112__$1;
(statearr_29114_29152[(2)] = inst_29078);

(statearr_29114_29152[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (1))){
var inst_29066 = [cljs.core.cst$kw$inputs,cljs.core.cst$kw$running,cljs.core.cst$kw$settings,cljs.core.cst$kw$prev_DASH_time];
var inst_29067 = cljs.core.PersistentVector.EMPTY;
var inst_29068 = cljs.core.PersistentHashMap.EMPTY;
var inst_29069 = [inst_29067,false,inst_29068,null];
var inst_29070 = cljs.core.PersistentHashMap.fromArrays(inst_29066,inst_29069);
var inst_29071 = inst_29070;
var state_29112__$1 = (function (){var statearr_29115 = state_29112;
(statearr_29115[(8)] = inst_29071);

return statearr_29115;
})();
var statearr_29116_29153 = state_29112__$1;
(statearr_29116_29153[(2)] = null);

(statearr_29116_29153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (4))){
var inst_29074 = (state_29112[(7)]);
var inst_29074__$1 = (state_29112[(2)]);
var inst_29106 = cljs.core.first(inst_29074__$1);
var state_29112__$1 = (function (){var statearr_29117 = state_29112;
(statearr_29117[(7)] = inst_29074__$1);

return statearr_29117;
})();
var G__29118_29154 = inst_29106;
var G__29118_29155__$1 = (((G__29118_29154 instanceof cljs.core.Keyword))?G__29118_29154.fqn:null);
switch (G__29118_29155__$1) {
case "input":
var statearr_29119_29157 = state_29112__$1;
(statearr_29119_29157[(1)] = (6));


break;
case "loop":
var statearr_29120_29158 = state_29112__$1;
(statearr_29120_29158[(1)] = (10));


break;
case "start":
var statearr_29121_29159 = state_29112__$1;
(statearr_29121_29159[(1)] = (11));


break;
case "stop":
var statearr_29122_29160 = state_29112__$1;
(statearr_29122_29160[(1)] = (12));


break;
case "pause":
var statearr_29123_29161 = state_29112__$1;
(statearr_29123_29161[(1)] = (13));


break;
case "resume":
var statearr_29124_29162 = state_29112__$1;
(statearr_29124_29162[(1)] = (14));


break;
case "replace-canvas":
var statearr_29125_29163 = state_29112__$1;
(statearr_29125_29163[(1)] = (15));


break;
default:
var statearr_29126_29164 = state_29112__$1;
(statearr_29126_29164[(1)] = (16));



}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (15))){
var inst_29074 = (state_29112[(7)]);
var inst_29071 = (state_29112[(8)]);
var inst_29100 = cljs.core.second(inst_29074);
var inst_29101 = app.game_engine.replace_canvas(inst_29071,inst_29100);
var inst_29071__$1 = inst_29101;
var state_29112__$1 = (function (){var statearr_29127 = state_29112;
(statearr_29127[(8)] = inst_29071__$1);

return statearr_29127;
})();
var statearr_29128_29165 = state_29112__$1;
(statearr_29128_29165[(2)] = null);

(statearr_29128_29165[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (13))){
var inst_29071 = (state_29112[(8)]);
var inst_29094 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_29071,cljs.core.cst$kw$running,false);
var inst_29071__$1 = inst_29094;
var state_29112__$1 = (function (){var statearr_29129 = state_29112;
(statearr_29129[(8)] = inst_29071__$1);

return statearr_29129;
})();
var statearr_29130_29166 = state_29112__$1;
(statearr_29130_29166[(2)] = null);

(statearr_29130_29166[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (6))){
var inst_29071 = (state_29112[(8)]);
var inst_29075 = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(inst_29071);
var state_29112__$1 = state_29112;
if(cljs.core.truth_(inst_29075)){
var statearr_29131_29167 = state_29112__$1;
(statearr_29131_29167[(1)] = (7));

} else {
var statearr_29132_29168 = state_29112__$1;
(statearr_29132_29168[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (3))){
var inst_29110 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29112__$1,inst_29110);
} else {
if((state_val_29113 === (12))){
var inst_29071 = (state_29112[(8)]);
var inst_29091 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_29071,cljs.core.cst$kw$running,false);
var inst_29071__$1 = inst_29091;
var state_29112__$1 = (function (){var statearr_29133 = state_29112;
(statearr_29133[(8)] = inst_29071__$1);

return statearr_29133;
})();
var statearr_29134_29169 = state_29112__$1;
(statearr_29134_29169[(2)] = null);

(statearr_29134_29169[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (2))){
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29112__$1,(4),app.game_engine.game_channel);
} else {
if((state_val_29113 === (11))){
var inst_29074 = (state_29112[(7)]);
var inst_29087 = cljs.core.second(inst_29074);
var inst_29088 = app.game_engine.start_game_BANG_(inst_29087);
var inst_29071 = inst_29088;
var state_29112__$1 = (function (){var statearr_29135 = state_29112;
(statearr_29135[(8)] = inst_29071);

return statearr_29135;
})();
var statearr_29136_29170 = state_29112__$1;
(statearr_29136_29170[(2)] = null);

(statearr_29136_29170[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (9))){
var inst_29081 = (state_29112[(2)]);
var inst_29071 = inst_29081;
var state_29112__$1 = (function (){var statearr_29137 = state_29112;
(statearr_29137[(8)] = inst_29071);

return statearr_29137;
})();
var statearr_29138_29171 = state_29112__$1;
(statearr_29138_29171[(2)] = null);

(statearr_29138_29171[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (5))){
var inst_29108 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29140_29172 = state_29112__$1;
(statearr_29140_29172[(2)] = inst_29108);

(statearr_29140_29172[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (14))){
var inst_29071 = (state_29112[(8)]);
var inst_29097 = app.game_engine.unpause(inst_29071);
var inst_29071__$1 = inst_29097;
var state_29112__$1 = (function (){var statearr_29141 = state_29112;
(statearr_29141[(8)] = inst_29071__$1);

return statearr_29141;
})();
var statearr_29142_29173 = state_29112__$1;
(statearr_29142_29173[(2)] = null);

(statearr_29142_29173[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (16))){
var inst_29071 = (state_29112[(8)]);
var tmp29139 = inst_29071;
var inst_29071__$1 = tmp29139;
var state_29112__$1 = (function (){var statearr_29143 = state_29112;
(statearr_29143[(8)] = inst_29071__$1);

return statearr_29143;
})();
var statearr_29144_29174 = state_29112__$1;
(statearr_29144_29174[(2)] = null);

(statearr_29144_29174[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (10))){
var inst_29071 = (state_29112[(8)]);
var inst_29084 = app.game_engine.game_iter_BANG_(inst_29071);
var inst_29071__$1 = inst_29084;
var state_29112__$1 = (function (){var statearr_29145 = state_29112;
(statearr_29145[(8)] = inst_29071__$1);

return statearr_29145;
})();
var statearr_29146_29175 = state_29112__$1;
(statearr_29146_29175[(2)] = null);

(statearr_29146_29175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29113 === (8))){
var inst_29071 = (state_29112[(8)]);
var state_29112__$1 = state_29112;
var statearr_29147_29176 = state_29112__$1;
(statearr_29147_29176[(2)] = inst_29071);

(statearr_29147_29176[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26746__auto__))
;
return ((function (switch__26639__auto__,c__26746__auto__){
return (function() {
var app$game_engine$init_$_state_machine__26640__auto__ = null;
var app$game_engine$init_$_state_machine__26640__auto____0 = (function (){
var statearr_29148 = [null,null,null,null,null,null,null,null,null];
(statearr_29148[(0)] = app$game_engine$init_$_state_machine__26640__auto__);

(statearr_29148[(1)] = (1));

return statearr_29148;
});
var app$game_engine$init_$_state_machine__26640__auto____1 = (function (state_29112){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_29112);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e29149){if((e29149 instanceof Object)){
var ex__26643__auto__ = e29149;
var statearr_29150_29177 = state_29112;
(statearr_29150_29177[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29112);

return cljs.core.cst$kw$recur;
} else {
throw e29149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__29178 = state_29112;
state_29112 = G__29178;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
app$game_engine$init_$_state_machine__26640__auto__ = function(state_29112){
switch(arguments.length){
case 0:
return app$game_engine$init_$_state_machine__26640__auto____0.call(this);
case 1:
return app$game_engine$init_$_state_machine__26640__auto____1.call(this,state_29112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$game_engine$init_$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = app$game_engine$init_$_state_machine__26640__auto____0;
app$game_engine$init_$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = app$game_engine$init_$_state_machine__26640__auto____1;
return app$game_engine$init_$_state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto__))
})();
var state__26748__auto__ = (function (){var statearr_29151 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_29151[(6)] = c__26746__auto__);

return statearr_29151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto__))
);

return c__26746__auto__;
});
var G__29179_29181 = cljs.core.cst$kw$game_DASH_event;
var G__29180_29182 = ((function (G__29179_29181){
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.game_engine.game_channel,event);
});})(G__29179_29181))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__29179_29181,G__29180_29182) : re_frame.core.reg_fx.call(null,G__29179_29181,G__29180_29182));
