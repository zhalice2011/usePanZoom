import{useRef as n,useCallback as e,useState as t,useEffect as r}from"react";function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var u,i=function(n,e){return function(t){return Math.max(n,Math.min(t,e))}},c=function(n){return n},a=function(){},f=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.reduce((function(n,e){return function(){return n(e.apply(void 0,arguments))}}))},v=function(n,e){return function(t){return null==t?n():e(t)}},s=v((function(){return{left:0,top:0}}),f((function(n){var e=n[0],t=n[1];return{left:t.left+e.offsetLeft,top:t.top+e.offsetTop}}),(u=function(n){return s(n.offsetParent)},function(n){return[n[0],u(n[1])]}),(function(n){return[n,n]}))),l=f((function(n){var e=n.left,t=n.top;return function(n,r){return{x:n-e,y:r-t}}}),s),d=function(t){var r=n(t);return[e((function(){return r.current}),[]),e((function(n){return r.current="function"==typeof n?n(r.current):n,r.current}),[])]};export default function(u){var f,s=u.enablePan,p=void 0===s||s,m=u.enableZoom,y=void 0===m||m,g=u.requireCtrlToZoom,x=void 0!==g&&g,h=u.panOnDrag,E=void 0===h||h,L=u.preventClickOnPan,P=void 0===L||L,z=u.zoomSensitivity,M=void 0===z?.01:z,Y=u.scrollPanSensitivity,X=void 0===Y?1:Y,w=u.minZoom,O=void 0===w?0:w,Z=u.maxZoom,b=void 0===Z?Infinity:Z,C=u.minX,D=void 0===C?-Infinity:C,T=u.maxX,I=void 0===T?Infinity:T,S=u.minY,j=void 0===S?-Infinity:S,H=u.maxY,k=void 0===H?Infinity:H,W=u.initialZoom,q=void 0===W?1:W,A=u.initialPan,K=void 0===A?{x:0,y:0}:A,U=u.onPanStart,B=void 0===U?a:U,F=u.onPan,G=void 0===F?a:F,J=u.onPanEnd,N=void 0===J?a:J,Q=u.onZoom,R=void 0===Q?a:Q,V=n(null),$=(f=t(Object.create(null))[1],e((function(){f(Object.create(null))}),[f])),_=n(!1),nn=n([]),en=n(1),tn=d({top:0,left:0}),rn=tn[0],on=tn[1],un=d(!1),cn=un[0],an=un[1],fn=d(o({},K,{zoom:q})),vn=fn[0],sn=fn[1],ln=e(i(D,I),[D,I]),dn=e(i(j,k),[j,k]),pn=e(i(O,b),[O,b]),mn=e((function(n){var e=sn(n),t=vn(),r=t.zoom;return on({top:(V.current.offsetHeight/2-t.y)/r,left:(V.current.offsetWidth/2-t.x)/r}),$(),e}),[]),yn=e((function(n){return mn((function(e){var t=e.zoom,r="function"==typeof n?n({x:e.x,y:e.y}):n;return{x:ln(r.x),y:dn(r.y),zoom:t}}))}),[D,I,j,k]),gn=e((function(n,e){return mn((function(t){var r=t.x,o=t.y,u=t.zoom,i=pn("function"==typeof n?n(u):n),a=v((function(){return{x:V.current.offsetWidth/2,y:V.current.offsetHeight/2}}),c)(e);return{x:ln(r+(a.x-r)*(u-i)/u),y:dn(o+(a.y-o)*(u-i)/u),zoom:i}}))}),[D,I,j,k,O,b]),xn=e((function(n){p&&(nn.current=n,an(!0),B(n))}),[p,B]),hn=e((function(n){if(cn()){_.current=!0;var e=nn.current;nn.current=n,yn((function(t){for(var r=t.x,o=t.y,u=0,i=0,c=Math.min(n.length,e.length),a=0;a<c;a++)u+=n[a].x-e[a].x,i+=n[a].y-e[a].y;return{x:r+u/c,y:o+i/c}})),G(n)}}),[cn,G,D,I,j,k]),En=e((function(){cn()&&(an(!1),N())}),[N]),Ln=e((function(n){_.current&&(_.current=!1,n.stopPropagation())}),[P]),Pn=e((function(n){if(y&&V.current)if(n.preventDefault(),!x||n.ctrlKey){var e=n.pageX,t=n.pageY,r=n.deltaY,o=l(V.current)(e,t);gn((function(n){return n*Math.pow(1-M,r)}),o),R()}else{var u=n.deltaX,i=n.deltaY;yn((function(n){return{x:n.x-u,y:n.y-i}}))}}),[y,R,D,I,j,k,O,b,X,yn]),zn=e((function(n){n.preventDefault(),en.current=vn().zoom}),[]),Mn=e((function(n){n.preventDefault();var e=n.pageX,t=n.pageY,r=n.scale,o=getPositionOnElement(V.current)(e,t);gn(en.current*r,o),R()}),[]),Yn=e((function(n){if(n)n.addEventListener("wheel",Pn),n.addEventListener("gesturestart",zn),n.addEventListener("gesturechange",Mn),n.addEventListener("gestureend",Mn);else if(V.current)return function(){V.current.removeEventListener("wheel",Pn),V.current.removeEventListener("gesturestart",zn),V.current.removeEventListener("gesturechange",Mn),V.current.removeEventListener("gestureend",Mn)};V.current=n}),[]);r((function(){if(V.current)return V.current.addEventListener("wheel",Pn),V.current.addEventListener("gesturestart",zn),V.current.addEventListener("gesturechange",Mn),V.current.addEventListener("gestureend",Mn),function(){V.current.removeEventListener("wheel",Pn),V.current.removeEventListener("gesturestart",zn),V.current.removeEventListener("gesturechange",Mn),V.current.removeEventListener("gestureend",Mn)}}),[]);var Xn=vn();return{container:V,setContainer:Yn,transformStyle:"translate3D("+Xn.x+"px, "+Xn.y+"px, 0) scale("+Xn.zoom+")",transform:Xn,center:rn(),pan:{x:Xn.x,y:Xn.y},zoom:Xn.zoom,setPan:yn,setZoom:gn,panZoomHandlers:E?{onTouchStart:function(n){return xn([].concat(n.touches).map((function(n){return{x:n.pageX,y:n.pageY}})))},onTouchMove:function(n){return hn([].concat(n.touches).map((function(n){return{x:n.pageX,y:n.pageY}})))},onTouchEnd:function(){return En()},onTouchCancel:function(){return En()},onMouseDown:function(n){return xn([{x:n.pageX,y:n.pageY}])},onMouseMove:function(n){return hn([{x:n.pageX,y:n.pageY}])},onMouseUp:function(){return En()},onMouseLeave:function(){return En()},onClickCapture:Ln}:{}}}
//# sourceMappingURL=index.modern.js.map