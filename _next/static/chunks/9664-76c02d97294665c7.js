(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9664],{4449:(t,e,i)=>{"use strict";var n=i(99408);i.n(n)().setLevel("error")},30179:(t,e,i)=>{"use strict";i.d(e,{n:()=>a});var n=i(25956);let o=new n.NRn,s=new n.Pq0;class a extends n.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new n.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new n.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return void 0!==e&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new n.LuO(e,6,1);return this.setAttribute("instanceStart",new n.eHs(i,3,0)),this.setAttribute("instanceEnd",new n.eHs(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new n.LuO(e,6,1);return this.setAttribute("instanceColorStart",new n.eHs(i,3,0)),this.setAttribute("instanceColorEnd",new n.eHs(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new n.XJ7(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new n.NRn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;void 0!==t&&void 0!==e&&(this.boundingBox.setFromBufferAttribute(t),o.setFromBufferAttribute(e),this.boundingBox.union(o))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new n.iyt),null===this.boundingBox&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(void 0!==t&&void 0!==e){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let o=0,a=t.count;o<a;o++)s.fromBufferAttribute(t,o),n=Math.max(n,i.distanceToSquared(s)),s.fromBufferAttribute(e,o),n=Math.max(n,i.distanceToSquared(s));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}},35098:(t,e,i)=>{"use strict";i.d(e,{HC:()=>N,jI:()=>O});var n=i(68394);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var i,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)e.indexOf(i=s[n])>=0||(o[i]=t[i]);return o}function a(t){var e=(0,n.useRef)(t),i=(0,n.useRef)(function(t){e.current&&e.current(t)});return e.current=t,i.current}var r,l=function(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=1),t>i?i:t<e?e:t},h=function(t){return"touches"in t},c=function(t){return t&&t.ownerDocument.defaultView||self},u=function(t,e,i){var n=t.getBoundingClientRect(),o=h(e)?function(t,e){for(var i=0;i<t.length;i++)if(t[i].identifier===e)return t[i];return t[0]}(e.touches,i):e;return{left:l((o.pageX-(n.left+c(t).pageXOffset))/n.width),top:l((o.pageY-(n.top+c(t).pageYOffset))/n.height)}},d=function(t){h(t)||t.preventDefault()},p=n.memo(function(t){var e=t.onMove,i=t.onKey,r=t.onEnd,l=s(t,["onMove","onKey","onEnd"]),p=(0,n.useRef)(null),f=a(e),m=a(i),_=a(r),v=(0,n.useRef)(null),g=(0,n.useRef)(!1),y=(0,n.useMemo)(function(){var t=function(t){d(t),(h(t)?t.touches.length>0:t.buttons>0)&&p.current?f(u(p.current,t,v.current)):(i(!1),_())},e=function(){i(!1),_()};function i(i){var n=g.current,o=c(p.current),s=i?o.addEventListener:o.removeEventListener;s(n?"touchmove":"mousemove",t),s(n?"touchend":"mouseup",e)}return[function(t){var e=t.nativeEvent,n=p.current;if(n&&(d(e),(!g.current||h(e))&&n)){if(h(e)){g.current=!0;var o=e.changedTouches||[];o.length&&(v.current=o[0].identifier)}n.focus(),f(u(n,e,v.current)),i(!0)}},function(t){var e=t.which||t.keyCode;e<37||e>40||(t.preventDefault(),m({left:39===e?.05:37===e?-.05:0,top:40===e?.05:38===e?-.05:0}))},function(t){var e=t.which||t.keyCode;e>=37&&e<=40&&_()},i]},[m,f,_]),b=y[0],w=y[1],E=y[2],S=y[3];return(0,n.useEffect)(function(){return S},[S]),n.createElement("div",o({},l,{onTouchStart:b,onMouseDown:b,className:"react-colorful__interactive",ref:p,onKeyDown:w,onKeyUp:E,tabIndex:0,role:"slider"}))}),f=function(t){return t.filter(Boolean).join(" ")},m=function(t){var e=t.color,i=t.left,o=t.top,s=f(["react-colorful__pointer",t.className]);return n.createElement("div",{className:s,style:{top:100*(void 0===o?.5:o)+"%",left:100*i+"%"}},n.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:e}}))},_=function(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=Math.pow(10,e)),Math.round(i*t)/i},v=function(t){return"#"===t[0]&&(t=t.substring(1)),t.length<6?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:4===t.length?_(parseInt(t[3]+t[3],16)/255,2):1}:{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16),a:8===t.length?_(parseInt(t.substring(6,8),16)/255,2):1}},g=function(t){var e=t.s,i=t.v,n=t.a,o=(200-e)*i/100;return{h:_(t.h),s:_(o>0&&o<200?e*i/100/(o<=100?o:200-o)*100:0),l:_(o/2),a:_(n,2)}},y=function(t){var e=g(t);return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},b=function(t){var e=t.h,i=t.s,n=t.v,o=t.a;e=e/360*6,i/=100,n/=100;var s=Math.floor(e),a=n*(1-i),r=n*(1-(e-s)*i),l=n*(1-(1-e+s)*i),h=s%6;return{r:_(255*[n,r,a,a,l,n][h]),g:_(255*[l,n,n,r,a,a][h]),b:_(255*[a,a,l,n,n,r][h]),a:_(o,2)}},w=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},E=function(t){var e=t.r,i=t.g,n=t.b,o=t.a,s=o<1?w(_(255*o)):"";return"#"+w(e)+w(i)+w(n)+s},S=function(t){var e=t.r,i=t.g,n=t.b,o=t.a,s=Math.max(e,i,n),a=s-Math.min(e,i,n),r=a?s===e?(i-n)/a:s===i?2+(n-e)/a:4+(e-i)/a:0;return{h:_(60*(r<0?r+6:r)),s:_(s?a/s*100:0),v:_(s/255*100),a:o}},x=n.memo(function(t){var e=t.hue,i=t.onChange,o=t.onChangeEnd,s=f(["react-colorful__hue",t.className]);return n.createElement("div",{className:s},n.createElement(p,{onMove:function(t){i({h:360*t.left})},onKey:function(t){i({h:l(e+360*t.left,0,360)})},onEnd:o,"aria-label":"Hue","aria-valuenow":_(e),"aria-valuemax":"360","aria-valuemin":"0"},n.createElement(m,{className:"react-colorful__hue-pointer",left:e/360,color:y({h:e,s:100,v:100,a:1})})))}),P=n.memo(function(t){var e=t.hsva,i=t.onChange,o=t.onChangeEnd,s={backgroundColor:y({h:e.h,s:100,v:100,a:1})};return n.createElement("div",{className:"react-colorful__saturation",style:s},n.createElement(p,{onMove:function(t){i({s:100*t.left,v:100-100*t.top})},onKey:function(t){i({s:l(e.s+100*t.left,0,100),v:l(e.v-100*t.top,0,100)})},onEnd:o,"aria-label":"Color","aria-valuetext":"Saturation "+_(e.s)+"%, Brightness "+_(e.v)+"%"},n.createElement(m,{className:"react-colorful__saturation-pointer",top:1-e.v/100,left:e.s/100,color:y(e)})))}),T=function(t,e){if(t===e)return!0;for(var i in t)if(t[i]!==e[i])return!1;return!0},D="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,M=new WeakMap,A=function(t){D(function(){var e=t.current;if("undefined"!=typeof document&&e){var n=e.getRootNode?e.getRootNode():e.ownerDocument,o=n&&("head"in n||"host"in n)?n:e.ownerDocument;if(!M.has(o)){var s="head"in o?o.head:o,a=(s.ownerDocument||document).createElement("style");a.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';var l=r||i.nc;l&&a.setAttribute("nonce",l),M.set(o,a),s.appendChild(a)}}},[])},L=function(t){var e,i,r,l,h,c,u,d=t.className,p=t.colorModel,m=t.color,_=void 0===m?p.defaultColor:m,v=t.onChange,g=t.onChangeEnd,y=s(t,["className","colorModel","color","onChange","onChangeEnd"]),b=(0,n.useRef)(null);A(b);var w=(e=a(v),i=a(g),l=(r=(0,n.useState)(function(){return p.toHsva(_)}))[0],h=r[1],c=(0,n.useRef)({color:_,hsva:l}),u=(0,n.useRef)(!1),(0,n.useEffect)(function(){if(!p.equal(_,c.current.color)){var t=p.toHsva(_);c.current={hsva:t,color:_},h(t),u.current=!1}},[_,p]),(0,n.useEffect)(function(){var t;T(l,c.current.hsva)||p.equal(t=p.fromHsva(l),c.current.color)||(c.current={hsva:l,color:t},e(t),u.current=!0)},[l,p,e]),[l,(0,n.useCallback)(function(t){h(function(e){return Object.assign({},e,t)})},[]),(0,n.useCallback)(function(){u.current&&(u.current=!1,i(c.current.color))},[i])]),E=w[0],S=w[1],D=w[2],M=f(["react-colorful",d]);return n.createElement("div",o({},y,{ref:b,className:M}),n.createElement(P,{hsva:E,onChange:S,onChangeEnd:D}),n.createElement(x,{hue:E.h,onChange:S,onChangeEnd:D,className:"react-colorful__last-control"}))},C={defaultColor:"000",toHsva:function(t){return S(v(t))},fromHsva:function(t){return E(b({h:t.h,s:t.s,v:t.v,a:1}))},equal:function(t,e){return t.toLowerCase()===e.toLowerCase()||T(v(t),v(e))}},O=function(t){return n.createElement(L,o({},t,{colorModel:C}))},R=/^#?([0-9A-F]{3,8})$/i,z=function(t){var e=t.color,i=void 0===e?"":e,r=t.onChange,l=t.onBlur,h=t.escape,c=t.validate,u=t.format,d=t.process,p=s(t,["color","onChange","onBlur","escape","validate","format","process"]),f=(0,n.useState)(function(){return h(i)}),m=f[0],_=f[1],v=a(r),g=a(l),y=(0,n.useCallback)(function(t){var e=h(t.target.value);_(e),c(e)&&v(d?d(e):e)},[h,d,c,v]),b=(0,n.useCallback)(function(t){c(t.target.value)||_(h(i)),g(t)},[i,h,c,g]);return(0,n.useEffect)(function(){_(h(i))},[i,h]),n.createElement("input",o({},p,{value:u?u(m):m,spellCheck:"false",onChange:y,onBlur:b}))},k=function(t){return"#"+t},N=function(t){var e=t.prefixed,i=t.alpha,a=s(t,["prefixed","alpha"]),r=(0,n.useCallback)(function(t){return t.replace(/([^0-9A-F]+)/gi,"").substring(0,i?8:6)},[i]),l=(0,n.useCallback)(function(t){var e,n;return 3===(n=(e=R.exec(t))?e[1].length:0)||6===n||!!i&&4===n||!!i&&8===n},[i]);return n.createElement(z,o({},a,{escape:r,format:e?k:void 0,process:k,validate:l}))}},42036:(t,e,i)=>{"use strict";i.d(e,{N:()=>p});var n=i(25956);let o={type:"change"},s={type:"start"},a={type:"end"},r=new n.RlV,l=new n.Zcv,h=Math.cos(70*n.cj9.DEG2RAD),c=new n.Pq0,u=2*Math.PI,d={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};class p extends n.H2z{constructor(t,e=null){super(t,e),this.state=d.NONE,this.target=new n.Pq0,this.cursor=new n.Pq0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:n.kBv.ROTATE,MIDDLE:n.kBv.DOLLY,RIGHT:n.kBv.PAN},this.touches={ONE:n.wtR.ROTATE,TWO:n.wtR.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new n.Pq0,this._lastQuaternion=new n.PTz,this._lastTargetPosition=new n.Pq0,this._quat=new n.PTz().setFromUnitVectors(t.up,new n.Pq0(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new n.YHV,this._sphericalDelta=new n.YHV,this._scale=1,this._panOffset=new n.Pq0,this._rotateStart=new n.I9Y,this._rotateEnd=new n.I9Y,this._rotateDelta=new n.I9Y,this._panStart=new n.I9Y,this._panEnd=new n.I9Y,this._panDelta=new n.I9Y,this._dollyStart=new n.I9Y,this._dollyEnd=new n.I9Y,this._dollyDelta=new n.I9Y,this._dollyDirection=new n.Pq0,this._mouse=new n.I9Y,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=m.bind(this),this._onPointerDown=f.bind(this),this._onPointerUp=_.bind(this),this._onContextMenu=S.bind(this),this._onMouseWheel=y.bind(this),this._onKeyDown=b.bind(this),this._onTouchStart=w.bind(this),this._onTouchMove=E.bind(this),this._onMouseDown=v.bind(this),this._onMouseMove=g.bind(this),this._interceptControlDown=x.bind(this),this._interceptControlUp=P.bind(this),null!==this.domElement&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,"grab"===t?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){null!==this._domElementKeyEvents&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(o),this.update(),this.state=d.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;c.copy(e).sub(this.target),c.applyQuaternion(this._quat),this._spherical.setFromVector3(c),this.autoRotate&&this.state===d.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=u:i>Math.PI&&(i-=u),s<-Math.PI?s+=u:s>Math.PI&&(s-=u),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),!0===this.enableDamping?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let t=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=t!=this._spherical.radius}if(c.setFromSpherical(this._spherical),c.applyQuaternion(this._quatInverse),e.copy(this.target).add(c),this.object.lookAt(this.target),!0===this.enableDamping?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let t=null;if(this.object.isPerspectiveCamera){let e=c.length();t=this._clampDistance(e*this._scale);let i=e-t;this.object.position.addScaledVector(this._dollyDirection,i),this.object.updateMatrixWorld(),a=!!i}else if(this.object.isOrthographicCamera){let e=new n.Pq0(this._mouse.x,this._mouse.y,0);e.unproject(this.object);let i=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=i!==this.object.zoom;let o=new n.Pq0(this._mouse.x,this._mouse.y,0);o.unproject(this.object),this.object.position.sub(o).add(e),this.object.updateMatrixWorld(),t=c.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;null!==t&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(t).add(this.object.position):(r.origin.copy(this.object.position),r.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(r.direction))<h?this.object.lookAt(this.target):(l.setFromNormalAndCoplanarPoint(this.object.up,this.target),r.intersectPlane(l,this.target))))}else if(this.object.isOrthographicCamera){let t=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),t!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,!!(a||this._lastPosition.distanceToSquared(this.object.position)>1e-6||8*(1-this._lastQuaternion.dot(this.object.quaternion))>1e-6||this._lastTargetPosition.distanceToSquared(this.target)>1e-6)&&(this.dispatchEvent(o),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0)}_getAutoRotationAngle(t){return null!==t?u/60*this.autoRotateSpeed*t:u/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(.01*t);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){c.setFromMatrixColumn(e,0),c.multiplyScalar(-t),this._panOffset.add(c)}_panUp(t,e){!0===this.screenSpacePanning?c.setFromMatrixColumn(e,1):(c.setFromMatrixColumn(e,0),c.crossVectors(this.object.up,c)),c.multiplyScalar(t),this._panOffset.add(c)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;c.copy(n).sub(this.target);let o=c.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=t-i.left,o=e-i.top,s=i.width,a=i.height;this._mouse.x=n/s*2-1,this._mouse.y=-(o/a*2)+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(u*this._rotateDelta.x/e.clientHeight),this._rotateUp(u*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(u*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-u*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(u*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-u*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(1===this._pointers.length)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(t){if(1===this._pointers.length)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panStart.set(i,n)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,o=Math.sqrt(i*i+n*n);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(1==this._pointers.length)this._rotateEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateEnd.set(i,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(u*this._rotateDelta.x/e.clientHeight),this._rotateUp(u*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(1===this._pointers.length)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,o=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let s=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return void this._pointers.splice(e,1)}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];void 0===e&&(e=new n.I9Y,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function f(t){!1!==this.enabled&&(0===this._pointers.length&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),this._isTrackingPointer(t)||(this._addPointer(t),"touch"===t.pointerType?this._onTouchStart(t):this._onMouseDown(t),"grab"===this._cursorStyle&&(this.domElement.style.cursor="grabbing")))}function m(t){!1!==this.enabled&&("touch"===t.pointerType?this._onTouchMove(t):this._onMouseMove(t))}function _(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(a),this.state=d.NONE,"grab"===this._cursorStyle&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y})}}function v(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case n.kBv.DOLLY:if(!1===this.enableZoom)return;this._handleMouseDownDolly(t),this.state=d.DOLLY;break;case n.kBv.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===this.enablePan)return;this._handleMouseDownPan(t),this.state=d.PAN}else{if(!1===this.enableRotate)return;this._handleMouseDownRotate(t),this.state=d.ROTATE}break;case n.kBv.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===this.enableRotate)return;this._handleMouseDownRotate(t),this.state=d.ROTATE}else{if(!1===this.enablePan)return;this._handleMouseDownPan(t),this.state=d.PAN}break;default:this.state=d.NONE}this.state!==d.NONE&&this.dispatchEvent(s)}function g(t){switch(this.state){case d.ROTATE:if(!1===this.enableRotate)return;this._handleMouseMoveRotate(t);break;case d.DOLLY:if(!1===this.enableZoom)return;this._handleMouseMoveDolly(t);break;case d.PAN:if(!1===this.enablePan)return;this._handleMouseMovePan(t)}}function y(t){!1!==this.enabled&&!1!==this.enableZoom&&this.state===d.NONE&&(t.preventDefault(),this.dispatchEvent(s),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(a))}function b(t){!1!==this.enabled&&this._handleKeyDown(t)}function w(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case n.wtR.ROTATE:if(!1===this.enableRotate)return;this._handleTouchStartRotate(t),this.state=d.TOUCH_ROTATE;break;case n.wtR.PAN:if(!1===this.enablePan)return;this._handleTouchStartPan(t),this.state=d.TOUCH_PAN;break;default:this.state=d.NONE}break;case 2:switch(this.touches.TWO){case n.wtR.DOLLY_PAN:if(!1===this.enableZoom&&!1===this.enablePan)return;this._handleTouchStartDollyPan(t),this.state=d.TOUCH_DOLLY_PAN;break;case n.wtR.DOLLY_ROTATE:if(!1===this.enableZoom&&!1===this.enableRotate)return;this._handleTouchStartDollyRotate(t),this.state=d.TOUCH_DOLLY_ROTATE;break;default:this.state=d.NONE}break;default:this.state=d.NONE}this.state!==d.NONE&&this.dispatchEvent(s)}function E(t){switch(this._trackPointer(t),this.state){case d.TOUCH_ROTATE:if(!1===this.enableRotate)return;this._handleTouchMoveRotate(t),this.update();break;case d.TOUCH_PAN:if(!1===this.enablePan)return;this._handleTouchMovePan(t),this.update();break;case d.TOUCH_DOLLY_PAN:if(!1===this.enableZoom&&!1===this.enablePan)return;this._handleTouchMoveDollyPan(t),this.update();break;case d.TOUCH_DOLLY_ROTATE:if(!1===this.enableZoom&&!1===this.enableRotate)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=d.NONE}}function S(t){!1!==this.enabled&&t.preventDefault()}function x(t){"Control"===t.key&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function P(t){"Control"===t.key&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}},53208:(t,e,i)=>{"use strict";i.d(e,{A:()=>n});let n=(0,i(78442).A)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},62991:(t,e,i)=>{"use strict";let n,o;i.d(e,{b:()=>E});var s=i(25956),a=i(30179),r=i(71132);let l=new s.IUQ,h=new s.Pq0,c=new s.Pq0,u=new s.IUQ,d=new s.IUQ,p=new s.IUQ,f=new s.Pq0,m=new s.kn4,_=new s.cZY,v=new s.Pq0,g=new s.NRn,y=new s.iyt,b=new s.IUQ;function w(t,e,i){return b.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),b.multiplyScalar(1/b.w),b.x=o/i.width,b.y=o/i.height,b.applyMatrix4(t.projectionMatrixInverse),b.multiplyScalar(1/b.w),Math.abs(Math.max(b.x,b.y))}class E extends s.eaF{constructor(t=new a.n,e=new r.G({color:0xffffff*Math.random()})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,n=new Float32Array(2*e.count);for(let t=0,o=0,s=e.count;t<s;t++,o+=2)h.fromBufferAttribute(e,t),c.fromBufferAttribute(i,t),n[o]=0===o?0:n[o-1],n[o+1]=n[o]+h.distanceTo(c);let o=new s.LuO(n,2,1);return t.setAttribute("instanceDistanceStart",new s.eHs(o,1,0)),t.setAttribute("instanceDistanceEnd",new s.eHs(o,1,1)),this}raycast(t,e){let i,a,r=this.material.worldUnits,l=t.camera;null!==l||r||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let h=void 0!==t.params.Line2&&t.params.Line2.threshold||0;n=t.ray;let c=this.matrixWorld,b=this.geometry,E=this.material;if(o=E.linewidth+h,null===b.boundingSphere&&b.computeBoundingSphere(),y.copy(b.boundingSphere).applyMatrix4(c),r)i=.5*o;else{let t=Math.max(l.near,y.distanceToPoint(n.origin));i=w(l,t,E.resolution)}if(y.radius+=i,!1!==n.intersectsSphere(y)){if(null===b.boundingBox&&b.computeBoundingBox(),g.copy(b.boundingBox).applyMatrix4(c),r)a=.5*o;else{let t=Math.max(l.near,g.distanceToPoint(n.origin));a=w(l,t,E.resolution)}g.expandByScalar(a),!1!==n.intersectsBox(g)&&(r?function(t,e){let i=t.matrixWorld,a=t.geometry,r=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,r.count);for(let a=0;a<h;a++){_.start.fromBufferAttribute(r,a),_.end.fromBufferAttribute(l,a),_.applyMatrix4(i);let h=new s.Pq0,c=new s.Pq0;n.distanceSqToSegment(_.start,_.end,c,h),c.distanceTo(h)<.5*o&&e.push({point:c,pointOnLine:h,distance:n.origin.distanceTo(c),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}(this,e):function(t,e,i){let a=e.projectionMatrix,r=t.material.resolution,l=t.matrixWorld,h=t.geometry,c=h.attributes.instanceStart,g=h.attributes.instanceEnd,y=Math.min(h.instanceCount,c.count),b=-e.near;n.at(1,p),p.w=1,p.applyMatrix4(e.matrixWorldInverse),p.applyMatrix4(a),p.multiplyScalar(1/p.w),p.x*=r.x/2,p.y*=r.y/2,p.z=0,f.copy(p),m.multiplyMatrices(e.matrixWorldInverse,l);for(let e=0;e<y;e++){if(u.fromBufferAttribute(c,e),d.fromBufferAttribute(g,e),u.w=1,d.w=1,u.applyMatrix4(m),d.applyMatrix4(m),u.z>b&&d.z>b)continue;if(u.z>b){let t=u.z-d.z,e=(u.z-b)/t;u.lerp(d,e)}else if(d.z>b){let t=d.z-u.z,e=(d.z-b)/t;d.lerp(u,e)}u.applyMatrix4(a),d.applyMatrix4(a),u.multiplyScalar(1/u.w),d.multiplyScalar(1/d.w),u.x*=r.x/2,u.y*=r.y/2,d.x*=r.x/2,d.y*=r.y/2,_.start.copy(u),_.start.z=0,_.end.copy(d),_.end.z=0;let h=_.closestPointToPointParameter(f,!0);_.at(h,v);let p=s.cj9.lerp(u.z,d.z,h),y=p>=-1&&p<=1,w=f.distanceTo(v)<.5*o;if(y&&w){_.start.fromBufferAttribute(c,e),_.end.fromBufferAttribute(g,e),_.start.applyMatrix4(l),_.end.applyMatrix4(l);let o=new s.Pq0,a=new s.Pq0;n.distanceSqToSegment(_.start,_.end,a,o),i.push({point:a,pointOnLine:o,distance:n.origin.distanceTo(a),object:t,face:null,faceIndex:e,uv:null,uv1:null})}}}(this,l,e))}}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(l),this.material.uniforms.resolution.value.set(l.z,l.w))}}},67739:(t,e,i)=>{"use strict";i.d(e,{A:()=>n});let n=(0,i(78442).A)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},71132:(t,e,i)=>{"use strict";i.d(e,{G:()=>s});var n=i(16955),o=i(25956);n.fCn.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new o.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},n.zkh.line={uniforms:o.LlO.merge([n.fCn.common,n.fCn.fog,n.fCn.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class s extends o.BKk{constructor(t){super({type:"LineMaterial",uniforms:o.LlO.clone(n.zkh.line.uniforms),vertexShader:n.zkh.line.vertexShader,fragmentShader:n.zkh.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){!0===t!==this.worldUnits&&(this.needsUpdate=!0),!0===t?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){!0===t!==this.dashed&&(this.needsUpdate=!0),!0===t?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(!0===t!==this.alphaToCoverage&&(this.needsUpdate=!0),!0===t?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}},71268:(t,e,i)=>{"use strict";function n(t,e,i){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object");e.set(t,i)}i.d(e,{_:()=>n})},78442:(t,e,i)=>{"use strict";i.d(e,{A:()=>l});var n=i(68394);let o=t=>{let e=t.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,e,i)=>i?i.toUpperCase():e.toLowerCase());return e.charAt(0).toUpperCase()+e.slice(1)},s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.filter((t,e,i)=>!!t&&""!==t.trim()&&i.indexOf(t)===e).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let r=(0,n.forwardRef)((t,e)=>{let{color:i="currentColor",size:o=24,strokeWidth:r=2,absoluteStrokeWidth:l,className:h="",children:c,iconNode:u,...d}=t;return(0,n.createElement)("svg",{ref:e,...a,width:o,height:o,stroke:i,strokeWidth:l?24*Number(r)/Number(o):r,className:s("lucide",h),...!c&&!(t=>{for(let e in t)if(e.startsWith("aria-")||"role"===e||"title"===e)return!0})(d)&&{"aria-hidden":"true"},...d},[...u.map(t=>{let[e,i]=t;return(0,n.createElement)(e,i)}),...Array.isArray(c)?c:[c]])}),l=(t,e)=>{let i=(0,n.forwardRef)((i,a)=>{let{className:l,...h}=i;return(0,n.createElement)(r,{ref:a,iconNode:e,className:s("lucide-".concat(o(t).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),"lucide-".concat(t),l),...h})});return i.displayName=o(t),i}},82941:(t,e,i)=>{"use strict";function n(t,e,i){if(!e.has(t))throw TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}i.d(e,{_:()=>n})},92822:(t,e,i)=>{"use strict";i.d(e,{_:()=>o});var n=i(82941);function o(t,e){var i=(0,n._)(t,e,"get");return i.get?i.get.call(t):i.value}},95049:(t,e,i)=>{"use strict";i.d(e,{_:()=>o});var n=i(82941);function o(t,e,i){var o=(0,n._)(t,e,"set");if(o.set)o.set.call(t,i);else{if(!o.writable)throw TypeError("attempted to set read only private field");o.value=i}return i}},97353:(t,e,i)=>{"use strict";i.d(e,{LO:()=>c,je:()=>u,zQ:()=>l});var n=i(25956),o=i(71869);parseInt(n.sPf);let s={Mesh:n.eaF.prototype.raycast,Line:n.N1A.prototype.raycast,LineSegments:n.DXC.prototype.raycast,LineLoop:n.FCc.prototype.raycast,Points:n.ONl.prototype.raycast,BatchedMesh:n.$Ed.prototype.raycast},a=new n.eaF,r=[];function l(t,e){if(this.isBatchedMesh)h.call(this,t,e);else{let{geometry:i}=this;if(i.boundsTree)i.boundsTree.raycastObject3D(this,t,e);else{let i;if(this instanceof n.eaF)i=s.Mesh;else if(this instanceof n.DXC)i=s.LineSegments;else if(this instanceof n.FCc)i=s.LineLoop;else if(this instanceof n.N1A)i=s.Line;else if(this instanceof n.ONl)i=s.Points;else throw Error("BVH: Fallback raycast function not found.");i.call(this,t,e)}}}function h(t,e){if(this.boundsTrees){let i=this.boundsTrees,o=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,l=this.matrixWorld;a.material=this.material,a.geometry=this.geometry;let h=a.geometry.boundsTree,c=a.geometry.drawRange;null===a.geometry.boundingSphere&&(a.geometry.boundingSphere=new n.iyt);for(let n=0,h=o.length;n<h;n++){if(!this.getVisibleAt(n))continue;let h=o[n].geometryIndex;if(a.geometry.boundsTree=i[h],this.getMatrixAt(n,a.matrixWorld).premultiply(l),!a.geometry.boundsTree){this.getBoundingBoxAt(h,a.geometry.boundingBox),this.getBoundingSphereAt(h,a.geometry.boundingSphere);let t=s[h];a.geometry.setDrawRange(t.start,t.count)}a.raycast(t,r);for(let t=0,i=r.length;t<i;t++){let i=r[t];i.object=this,i.batchId=n,e.push(i)}r.length=0}a.geometry.boundsTree=h,a.geometry.drawRange=c,a.material=null,a.geometry=null}else s.BatchedMesh.call(this,t,e)}function c(t={}){let{type:e=o.G}=t;return this.boundsTree=new e(this,t),this.boundsTree}function u(){this.boundsTree=null}},99408:function(t,e,i){var n,o;!function(s,a){"use strict";void 0===(o="function"==typeof(n=a)?n.call(e,i,e,t):n)||(t.exports=o)}(0,function(){"use strict";var t=function(){},e="undefined",i=typeof window!==e&&typeof window.navigator!==e&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"],o={},s=null;function a(t,e){var i=t[e];if("function"==typeof i.bind)return i.bind(t);try{return Function.prototype.bind.call(i,t)}catch(e){return function(){return Function.prototype.apply.apply(i,[t,arguments])}}}function r(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(){for(var i=this.getLevel(),o=0;o<n.length;o++){var s=n[o];this[s]=o<i?t:this.methodFactory(s,i,this.name)}if(this.log=this.debug,typeof console===e&&i<this.levels.SILENT)return"No console available for logging"}function h(t){return function(){typeof console!==e&&(l.call(this),this[t].apply(this,arguments))}}function c(n,o,s){var l;return"debug"===(l=n)&&(l="log"),typeof console!==e&&("trace"===l&&i?r:void 0!==console[l]?a(console,l):void 0!==console.log?a(console,"log"):t)||h.apply(this,arguments)}function u(t,i){var a,r,h,u=this,d="loglevel";function p(){var t;if(typeof window!==e&&d){try{t=window.localStorage[d]}catch(t){}if(typeof t===e)try{var i=window.document.cookie,n=encodeURIComponent(d),o=i.indexOf(n+"=");-1!==o&&(t=/^([^;]+)/.exec(i.slice(o+n.length+1))[1])}catch(t){}return void 0===u.levels[t]&&(t=void 0),t}}function f(t){var e=t;if("string"==typeof e&&void 0!==u.levels[e.toUpperCase()]&&(e=u.levels[e.toUpperCase()]),"number"==typeof e&&e>=0&&e<=u.levels.SILENT)return e;throw TypeError("log.setLevel() called with invalid level: "+t)}"string"==typeof t?d+=":"+t:"symbol"==typeof t&&(d=void 0),u.name=t,u.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},u.methodFactory=i||c,u.getLevel=function(){return null!=h?h:null!=r?r:a},u.setLevel=function(t,i){return h=f(t),!1!==i&&function(t){var i=(n[t]||"silent").toUpperCase();if(typeof window!==e&&d){try{window.localStorage[d]=i;return}catch(t){}try{window.document.cookie=encodeURIComponent(d)+"="+i+";"}catch(t){}}}(h),l.call(u)},u.setDefaultLevel=function(t){r=f(t),p()||u.setLevel(t,!1)},u.resetLevel=function(){if(h=null,typeof window!==e&&d){try{window.localStorage.removeItem(d)}catch(t){}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(t){}}l.call(u)},u.enableAll=function(t){u.setLevel(u.levels.TRACE,t)},u.disableAll=function(t){u.setLevel(u.levels.SILENT,t)},u.rebuild=function(){if(s!==u&&(a=f(s.getLevel())),l.call(u),s===u)for(var t in o)o[t].rebuild()},a=f(s?s.getLevel():"WARN");var m=p();null!=m&&(h=f(m)),l.call(u)}(s=new u).getLogger=function(t){if("symbol"!=typeof t&&"string"!=typeof t||""===t)throw TypeError("You must supply a name when creating a logger.");var e=o[t];return e||(e=o[t]=new u(t,s.methodFactory)),e};var d=typeof window!==e?window.log:void 0;return s.noConflict=function(){return typeof window!==e&&window.log===s&&(window.log=d),s},s.getLoggers=function(){return o},s.default=s,s})}}]);