"use strict";(self["webpackChunkqutter"]=self["webpackChunkqutter"]||[]).push([[282],{5282:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var l=a(3673),s=a(8880),o=a(2323);const d={class:"q-py-lg q-px-md row items-end"},n={class:"col"},i=(0,l._)("img",{src:"https://cdn.quasar.dev/img/avatar5.jpg"},null,-1),u={class:"col col-shrink"},r=(0,l._)("img",{src:"https://cdn.quasar.dev/img/avatar2.jpg"},null,-1),c=(0,l._)("strong",null,"Krishna Chaitanya",-1),m={class:"text-grey-7"},f=(0,l.Uk)(" @k_c_dutt "),p=(0,l._)("br",{class:"lt-md"},null,-1),w={class:"comm-icon row justify-between q-mt-sm"};function q(e,t,a,q,h,g){const k=(0,l.up)("q-avatar"),v=(0,l.up)("q-input"),_=(0,l.up)("q-btn"),Q=(0,l.up)("q-separator"),W=(0,l.up)("q-item-section"),y=(0,l.up)("q-item-label"),b=(0,l.up)("q-item"),Z=(0,l.up)("q-list"),C=(0,l.up)("q-scroll-area"),D=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(D,{class:"relative-position"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{class:"absolute full-width full-height"},{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l._)("div",n,[(0,l.Wm)(v,{autogrow:"",class:"quttertweet","bottom-slots":"",modelValue:e.QutterTweet,"onUpdate:modelValue":t[0]||(t[0]=t=>e.QutterTweet=t),placeholder:"What's happening?",counter:"",maxlength:"280"},{before:(0,l.w5)((()=>[(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[i])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",u,[(0,l.Wm)(_,{onClick:e.Addnewqueet,unelevated:"",class:"q-mb-lg",disable:!e.QutterTweet,rounded:"",color:"primary",label:"Queet"},null,8,["onClick","disable"])])]),(0,l.Wm)(Q,{class:"line-break",size:"10px",color:"grey-2"}),(0,l.Wm)(Z,{separator:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s.W3,{appear:"","enter-active-class":"animated fadeIn slower","leave-active-class":"animated fadeOut slow"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.queets,(t=>((0,l.wg)(),(0,l.j4)(b,{key:t.id,class:"queet"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{avatar:"",top:""},{default:(0,l.w5)((()=>[(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[r])),_:1})])),_:1}),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[c,(0,l._)("span",m,[f,p,(0,l.Uk)("•"+(0,o.zw)(e.relativeDate(t.date,e.relativeDate)),1)])])),_:2},1024),(0,l.Wm)(y,{class:"queet-content"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(t.content),1)])),_:2},1024),(0,l._)("div",w,[(0,l.Wm)(_,{flat:"",round:"",color:"grey",icon:"far fa-comment",size:"sm"}),(0,l.Wm)(_,{flat:"",round:"",color:"grey",icon:"fas fa-retweet",size:"sm"}),(0,l.Wm)(_,{onClick:a=>e.Queetliked(t),flat:"",round:"",color:t.liked?"pink":"grey",icon:t.liked?"fas fa-heart":"far fa-heart",size:"sm"},null,8,["onClick","color","icon"]),(0,l.Wm)(_,{flat:"",round:"",color:"grey",icon:"fas fa-trash",size:"sm",onClick:a=>e.Deletequeet(t)},null,8,["onClick"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}var h=a(7253),g=a(2490),k=a(8127);const v=(0,l.aZ)({name:"PageHome",data(){return{QutterTweet:"",queets:[]}},methods:{relativeDate(e){return(0,h.Z)(e,new Date)},Addnewqueet(){let e={content:this.QutterTweet,date:Date.now(),liked:!1};(0,k.ET)((0,k.hJ)(g["default"],"queets"),{content:e.content,date:e.date,liked:e.liked});this.QutterTweet=""},Deletequeet(e){(0,k.oe)((0,k.JU)(g["default"],"queets",e.id))},Queetliked(e){const t=(0,k.JU)(g["default"],"queets",e.id);(0,k.r7)(t,{liked:!e.liked})}},mounted(){const e=(0,k.IO)((0,k.hJ)(g["default"],"queets"),(0,k.Xo)("date"));(0,k.cf)(e,(e=>{e.docChanges().forEach((e=>{let t=e.doc.data();if(t.id=e.doc.id,"added"===e.type&&(console.log("New city: ",e.doc.data()),this.queets.unshift(t)),"modified"===e.type){console.log("Modified city: ",e.doc.data());let a=this.queets.findIndex((e=>e.id===t.id));Object.assign(this.queets[a],t)}if("removed"===e.type){console.log("Removed city: ",e.doc.data());let a=this.queets.findIndex((e=>e.id===t.id));this.queets.splice(a,1)}}))}))}});var _=a(4379),Q=a(7704),W=a(6112),y=a(5096),b=a(4607),Z=a(5869),C=a(7011),D=a(3414),I=a(2035),z=a(2350),T=a(7518),j=a.n(T);v.render=q;const x=v;j()(v,"components",{QPage:_.Z,QScrollArea:Q.Z,QInput:W.Z,QAvatar:y.Z,QBtn:b.Z,QSeparator:Z.Z,QList:C.Z,QItem:D.Z,QItemSection:I.Z,QItemLabel:z.Z})}}]);