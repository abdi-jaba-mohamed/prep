(self.webpackChunk=self.webpackChunk||[]).push([[7206],{71284:(e,t,s)=>{s.d(t,{a:()=>n,A:()=>p});var n,o=s(27378),i=s(88056),r=s(95195),a=s(95574);!function(e){let t;!function(e){e.supportsSVGDominantBaseline="supportsSVGDominantBaseline",e.supportsSetGoalsLoader="supportsSetGoalsLoader",e.onlyTrustedEvents="onlyTrustedEvents"}(t=e.Flag||(e.Flag={})),e.Context=o.createContext(i.Y.invariantContent("PlatformEnvironment"));e.Mock=class{constructor(){this.has=()=>!1,this.actions={openUrl:()=>r.right(void 0),openPopup:()=>r.right(void 0)}}}}(n||(n={}));class p{constructor(){this.actions={openUrl:e=>a.tryCatchError((()=>{throw new Error("Not implemented")})),openPopup:e=>a.tryCatchError((()=>{throw new Error("Not implemented")}))}}has(e){throw new Error("Not implemented")}}},29847:(e,t,s)=>{s.d(t,{l5:()=>k,EJ:()=>P,T9:()=>N});var n=s(27378),o=s(71249),i=s(57050),r=s(40327),a=s(38983),p=s(5739),l=s(93508),h=s(77176),c=s(16118),d=s(32952),u=s(98403),m=s(44586),v=s(76974),_=s(24209),b=s(38062),y=s(50628),g=s(80900),f=s(17343),w=s(60797),C=s(69935),E=s(19751),x=s(5114);class k extends n.Component{constructor(){super(...arguments),this._state=this.props.state.pipe(l.O(void 0),h.U(((e,t)=>({state:e,key:t}))),c.G(),h.U((([e,t])=>{const s=this.props.stateToClassMapper(e.state,t.state);return{prev:{key:e.key,state:e.state,view:S(s.prev)},next:{key:t.key,state:t.state,view:S(s.next)}}}))),this._elements=a.h.create(F.empty),this._done=new d.xQ,this._subs=[]}componentDidMount(){const{children:e}=this.props;this._subs.push(this._state.pipe(h.U((({prev:t,next:s})=>{const n=e;return void 0===e?F.empty:[(0,r.pipe)(t.state,x.fromNullable,x.map((e=>n({state:e,view:t.view,type:"prev",done:()=>this._done.next("prev")}))),x.chain(x.fromNullable),x.map((e=>({key:t.key,entry:e})))),(0,r.pipe)(n({state:s.state,view:s.view,type:"next"}),x.fromNullable,x.map((e=>({key:s.key,entry:e}))))]}))).subscribe(u.wW(this._elements)),this._done.subscribe((e=>{"prev"===e&&this._elements.modify((([e,t])=>[x.none,t])),"next"===e&&this._elements.set(F.empty)})))}componentWillUnmount(){this._subs.forEach((e=>e.unsubscribe())),this._subs=[]}render(){const{children:e,className:t,onMount:s,onMouseDown:i}=this.props;return e?n.createElement(p.F.div,{className:t,mount:s,onMouseDown:i},this._elements.view(o.array.compact).view((e=>e.map((e=>n.createElement(n.Fragment,{key:e.key},e.entry)))))):null}}const P=e=>({start:e,end:e});var F;function S({start:e,end:t}){return m.y.create((s=>{s.next(e);const n=requestAnimationFrame((()=>requestAnimationFrame((()=>s.next(t)))));return()=>cancelAnimationFrame(n)}))}!function(e){e.empty=[x.none,x.none]}(F||(F={}));const N=e=>{const t=e.content.pipe(h.U((t=>({className:e.classes.rendered,el:t,onTransitionEnd:i.constVoid}))),h.U(x.some),l.O(x.none),c.G(),h.U((([t,s])=>(0,r.pipe)(t,x.fold((()=>x.map(v.of)(s)),(t=>(0,r.pipe)(s,x.map((s=>{const n=new d.xQ;return _.T(v.of({className:e.classes.removing,el:t.el,onTransitionEnd:()=>n.next()}),b.S3(n.pipe(y.P()),g.H(e.timeout)).pipe(f.h(s)))})))))))),w.oA,C.B(),E.d({refCount:!0,bufferSize:1}));return n.createElement(p.F.div,{className:t.pipe(h.U((e=>e.className))),onTransitionEnd:t.pipe(h.U((e=>e.onTransitionEnd)))},t.pipe(h.U((e=>e.el))))}},95286:(e,t,s)=>{s.d(t,{L:()=>H});var n=s(27378),o=s(40327),i=s(38983),r=s(12187),a=s(5739),p=s(16118),l=s(66310),h=s(80900),c=s(17343),d=s(76974),u=s(95093),m=s(77176),v=s(28043),_=s(2834),b=s(38194),y=s(93508),g=s(598),f=s(2844),w=s(24713),C=s(50628),E=s(32952),x=s(18208),k=s(19962),P=s(5114),F=s(22232),S=s(8125),N=s(54338),A=s(71284),T=s(41488),D=s(29847),M=s(98403),O=s(47486);class U extends D.l5{}class H extends n.PureComponent{constructor(){super(...arguments),this._uuid=x.alphanumeric(12),this._initialState=!1,this._hovered=i.h.create(this._initialState),this._hidden=i.h.create(!this._initialState),this._listPosState=i.h.create({}),this._dropdownEl=null,this._subs=[],this._viewport=i.h.create(k.Rect.empty),this.hovered=this._hovered.pipe(p.G(),l.w((([e,t])=>t?h.H(this.props.showDelay).pipe(c.h(!0)):e?h.H(void 0===this.props.closeDelay?H.defaultProps.closeDelay:this.props.closeDelay).pipe(c.h(!1)):d.of(!1))),u.T(H._hoveredForce.pipe(m.U(P.exists((e=>e===this._uuid))))),v.x(),_.b((e=>e&&H._hoveredForce.next(P.some(this._uuid)))),_.b((e=>e&&this._hidden.set(!1))),b.B(),y.O(this._initialState)),this._handleClickForAppearanceHover=e=>{const t=e.target;if(k.isDisabled(t)||!0===this.props.dontCloseOnClickInside)return;const s=!k.hasParentWithClassName(t,O.P.list);H._hoveredForce.next(s?P.some(this._uuid):P.none),this._hovered.set(s)},this._handleMouseEnterForAppearanceHover=()=>{this._hovered.set(!0)},this._handleClickForAppearanceClick=(e,t)=>{t&&!e.isTrusted||this._hovered.modify((e=>!e))},this._handleMouseEnterForAppearanceClick=e=>{const t=e.target;k.hasParentWithClassName(t,O.P.list)&&(H._hoveredForce.next(P.some(this._uuid)),this._hovered.set(!0))}}_getHAlign(e){switch(e){case"left":case"auto":return{left:"0"};case"right":return{right:"0"};case"center":return{right:"50%",marginRight:`-${(this._dropdownEl?this._dropdownEl.offsetWidth:0)/2}px`};default:return(0,F.vE)(e)}}_getVAlign(e){switch(e){case"top":return{bottom:"100%"};case"bottom":case"auto":return{top:"100%"};default:return(0,F.vE)(e)}}calcDropdownPosition(){const e=this.props.align,t=this.props.vAlign;this._listPosState.set(Object.assign(Object.assign({},this._getHAlign(e)),this._getVAlign(t)));const s="auto"===e,n="auto"===t;(s||n)&&requestAnimationFrame((()=>{if(this._dropdownEl){const o=this._viewport.get(),i=this._dropdownEl.getBoundingClientRect();this._listPosState.set(Object.assign(Object.assign({},this._getHAlign(s?o.right<i.right?"right":"left":e)),this._getVAlign(n?o.bottom<i.bottom?"top":"bottom":t)))}}))}componentDidMount(){this._subs.push(this.hovered.pipe(_.b((e=>{this.props.onVisibilityChange&&this.props.onVisibilityChange(e)})),g.c((0,o.pipe)(P.fromNullable(this.props.customPosition),P.fold((()=>d.of(P.none)),(({top:e,left:t})=>f.aj(M.Dx(e),M.Dx(t)).pipe(m.U(P.some))))))).subscribe(P.fold((()=>this.calcDropdownPosition()),(([e,t])=>this._listPosState.set({top:e,left:t})))),this.context.pipe(w.j("rect")).subscribe(M.wW(this._viewport))),this.props.forceHide&&this._subs.push(this._hidden.pipe(l.w(M.wX(this.props.forceHide.pipe(C.P())))).subscribe((()=>this._hidden.set(!0))))}componentWillUnmount(){this._subs.forEach((e=>e.unsubscribe())),this._subs=[]}componentWillReciveProps(){this.calcDropdownPosition()}mapStateToClass(e,t){const s={start:"",end:""};return t?{prev:s,next:{start:O.P.transparent,end:""}}:{prev:{start:"",end:O.P.transparent},next:s}}_behaviour(e){return"mouseClick"===this.props.appearanceBehavior?{onClickCapture:t=>this._handleClickForAppearanceClick(t,e),onMouseEnter:this._handleMouseEnterForAppearanceClick,onMouseLeave:()=>this._hovered.set(this._initialState)}:{onClickCapture:this._handleClickForAppearanceHover,onMouseEnter:this._handleMouseEnterForAppearanceHover,onMouseLeave:()=>this._hovered.set(this._initialState)}}render(){const{label:e,theme:t={}}=this.props;return n.createElement(A.a.Context.Consumer,null,(s=>n.createElement(N.f.Context.Consumer,null,(o=>n.createElement(N.f.Context.Provider,{value:N.f.withValue(o,{hovered:this._hovered})},n.createElement("div",Object.assign({},(0,r.Sh)(O.P.wrapper,t.dropdownContainer),this._behaviour(s.has(A.a.Flag.onlyTrustedEvents))),e,n.createElement(U,{state:this.hovered,stateToClassMapper:this.mapStateToClass},(e=>e.state?n.createElement(a.F.div,null,this._hidden.view((s=>n.createElement(R,Object.assign({key:"list",name:this.props.name,onTransitionEnd:"prev"===e.type?()=>this._hidden.set(!0):S.ZT},(0,r.Sh)(t.dropdownList,e.view),{mount:e=>this._dropdownEl=e,style:this._listPosState,hidden:s}),this.props.children)))):null))))))))}}H.defaultProps={align:"auto",vAlign:"auto",showDelay:500,closeDelay:500,appearanceBehavior:"mouseHover"},H.Delimiter=()=>n.createElement("div",{className:O.P.delimiter}),H._hoveredForce=new E.xQ,H.contextType=T.l.Context;class R extends n.Component{constructor(){super(...arguments),this._elementState=N.f.emptyWithName(`${void 0!==this.context.name?`${this.context.name}/`:""}dropdown-${this.props.name}`)}render(){return n.createElement(N.f.Context.Provider,{value:this._elementState},n.createElement(a.F.div,Object.assign({},(0,r.Sh)(this.props.className,!0===this.props.hidden?O.P.hidden:O.P.list),{style:this.props.style,mount:this.props.mount,role:"dropdown-list","data-name":"dropdown-"+this.props.name,onTransitionEnd:this.props.onTransitionEnd}),this.props.children))}}R.displayName="DropdownList",R.contextType=N.f.Context},47486:(e,t,s)=>{s.d(t,{P:()=>p});var n=s(44060),o=s(63969),i=s(40219);const r={position:"absolute",zIndex:i.VN,display:"flex",flexDirection:"column",margin:`${o.u.rem(.5)} 0`,padding:`${o.u.rem(.5)} 0`,minWidth:o.u.percent(100),borderRadius:o.u.rem(i.Jr),background:n.Il.CoreNeutral0,boxShadow:n.uc.Z200,opacity:1,transition:"opacity .2s"},a={margin:o.u.rem(.5),height:o.u.px(1),backgroundColor:n.Il.CoreNeutral20},p={wrapper:o.u.style({position:"relative"}),list:o.u.style(r),transparent:o.u.style({opacity:0}),hidden:o.u.style({display:"none"}),delimiter:o.u.style(a)}},28154:(e,t,s)=>{s.r(t),s.d(t,{EmogenieReportFeedback:()=>p});var n=s(27378),o=s(24394),i=s(7046),r=s(95286),a=s(21474);const p=n.forwardRef((({emogenieReportComponent:e,onVote:t},s)=>n.createElement("div",{ref:s},n.createElement(r.L,{showDelay:0,label:e,vAlign:"bottom",align:"auto",name:"emogenie-report-feedback",appearanceBehavior:"mouseClick",dontCloseOnClickInside:!0},n.createElement(i.zx.Flat,{name:"emogenie-report-incorrect",onClick:()=>{t(o.x.INCORRECT)}},n.createElement(a.JO.NoCircle,null),"Tone detected incorrectly"),n.createElement(i.zx.Flat,{name:"emogenie-report-offensive",onClick:()=>{t(o.x.OFFENSIVE)}},n.createElement(a.JO.Report,null),"Report offensive content")))))}}]);