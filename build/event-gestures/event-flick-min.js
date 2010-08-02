/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0PR1
build: nightly
*/
YUI.add("event-flick",function(C){var G=("ontouchstart" in C.config.win&&!C.UA.chrome)?{start:"touchstart",end:"touchend"}:{start:"mousedown",end:"mouseup"},H="start",K="end",B="ownerDocument",I="minVelocity",E="minDistance",A="preventDefault",D="_fs",F="_fsh",L="_feh",J="nodeType";C.Event.define("flick",{on:function(N,M,P){var O=N.on(G[H],this._onStart,this,N,M,P);M[F]=O;},detach:function(O,N,Q){var P=N[F],M=N[L];if(P){P.detach();N[F]=null;}if(M){M.detach();N[L]=null;}},processArgs:function(M){var N=(M.length>3)?C.merge(M.splice(3,1)[0]):{};if(!(I in N)){N[I]=this.MIN_VELOCITY;}if(!(E in N)){N[E]=this.MIN_DISTANCE;}if(!(A in N)){N[A]=this.PREVENT_DEFAULT;}return N;},_onStart:function(Q,O,U,N){var M=true,T,S,R=U._extra.preventDefault,P=Q;if(Q.touches){M=(Q.touches.length===1);Q=Q.touches[0];}if(M){if(R){if(!R.call||R(Q)){P.preventDefault();}}Q.flick={time:new Date().getTime()};U[D]=Q;T=U[L];if(!T){S=(O.get(J)===9)?O:O.get(B);T=S.on(G[K],C.bind(this._onEnd,this),null,O,U,N);U[L]=T;}}},_onEnd:function(Z,T,a,Q){var X=new Date().getTime(),O=a[D],M=!!O,b=Z,P,S,Y,V,W,N,U,R;if(M){if(Z.changedTouches){if(Z.changedTouches.length===1&&Z.touches.length===0){b=Z.changedTouches[0];}else{M=false;}}if(M){V=a._extra;Y=V[A];if(Y){if(!Y.call||Y(Z)){b.preventDefault();}}P=O.flick.time;X=new Date().getTime();S=X-P;W=[b.pageX-O.pageX,b.pageY-O.pageY];R=V.axis||(Math.abs(W[0])>=Math.abs(W[1]))?"x":"y";N=W[(R==="x")?0:1];U=(S!==0)?N/S:0;if(isFinite(U)&&(Math.abs(N)>=V[E])&&(Math.abs(U)>=V[I])){Z.type="flick";Z.flick={time:S,distance:N,velocity:U,axis:R,start:O};Q.fire(Z);}a[D]=null;}}},MIN_VELOCITY:0,MIN_DISTANCE:0,PREVENT_DEFAULT:true});},"3.2.0PR1",{requires:["node-base","event-touch","event-synthetic"]});