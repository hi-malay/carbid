(this.webpackJsonpcarbid=this.webpackJsonpcarbid||[]).push([[0],{369:function(e,t,a){},370:function(e,t,a){},371:function(e,t,a){},453:function(e,t,a){},454:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(15),o=a.n(c),s=(a(369),a(370),a(109)),l=a(110),r=a(122),d=a(121),m=a(182),h=a(28),j=a(475),b=a(477),u=a(310),O=(a(371),i.a.createContext({})),g=a(311),p=a(204),x=a(347),f=a.n(x),v="https://intense-tor-76305.herokuapp.com/merchants";var C=function(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),i=a[0],c=a[1],o=Object(n.useState)(!1),s=Object(p.a)(o,2),l=s[0],r=s[1],d=Object(n.useState)(!1),m=Object(p.a)(d,2),h=m[0],j=m[1];return Object(n.useEffect)((function(){f.a.get(v).then((function(e){e.data&&(console.log("data",e.data),c(e.data),r(!0),console.log("byr2",i))})).catch((function(e){console.log("error",e)}))}),[e.location.pathname]),{userData:[i,c],isValid:[l,r],isReferValid:[h,j]}},y=a(11),S=Object(h.g)((function(e){var t=C(e),a=function(){localStorage.removeItem("Login"),e.history.push("/")};return console.log("pp",t.isValid[1]),console.log("keysss",t.userData[0]),void 0!=localStorage.getItem("Login")&&null!=localStorage.getItem("Login")?t.userData[0].length>0?Object(y.jsx)(h.b,{render:function(){return Object(y.jsx)("div",{className:"bg-grey full-len mt-3",children:Object(y.jsx)(O.Provider,{value:t,children:Object(y.jsx)("div",{className:"max-width max-width-padd mt-4",children:Object(y.jsx)(j.a,{className:"custom-card card-dashboard",children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)("h1",{className:"header-main",children:"Trav Clan Assignment"}),Object(y.jsx)(u.a,{variant:"contained",color:"primary",className:"btn-class mt-4",onClick:a,children:"Logout"}),Object(y.jsx)("div",{className:"col-md-12 mt-5",children:Object(y.jsx)(e.component,{})})]})})})})})}}):t.isReferValid[0]?Object(y.jsx)(h.a,{to:{pathname:"/"}}):Object(y.jsx)("div",{className:"Circular-Progress",children:Object(y.jsx)(g.a,{color:"inherit"})}):Object(y.jsx)(h.a,{to:{pathname:"/"}})})),N=a(481),w=a(483),D=a(351),P=a(79),_=a(352),k=a(237),M=a.n(k);function I(e){return Object(y.jsx)(M.a,Object(_.a)({},e))}var L=a(350),T=a.n(L),F=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleCloseSub=function(){n.setState({date_match_modal:!1})},n.showModal=function(e,t){console.log("modaldata",t),P.a.event({category:"Modal",action:"Modal",label:"Modal Rendered"}),n.setState({date_match_modal:!0,modalData:t})},n.state={date_match_modal:!1,modalData:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e,t=this,a=function(e){var t=[];if(e.length>0)return e.map((function(e,a){var n={};n.name=e.firstname+" "+e.lastname,n.email=e.email,n.phone=e.phone,n.hasPremium=e.hasPremium,n.bids=Math.max.apply(Math,Object(D.a)(e.bids.map((function(e){return e.amount}))).concat([0])),n.bidsData=e.bids,n.avtar=e.avatarUrl,t.push(n)})),t}(null===(e=this.context)||void 0===e?void 0:e.userData[0]);return Object(y.jsxs)("div",{className:"max-width-in",children:[Object(y.jsx)(I,{className:"mt-3",options:{paginationType:"stepped",search:!0,paging:!0,filtering:!1,showTitle:!1,toolbar:!0,emptyRowsWhenPaging:!1,pageSize:5,actionsColumnIndex:-1},localization:{},actions:[{icon:function(){return Object(y.jsx)(T.a,{})},tooltip:"Show User",onClick:function(e,a){t.showModal(e,a)}}],columns:[{title:"Customer Name",field:"name"},{title:"Email",field:"email"},{title:"Phone",field:"phone"},{title:"Premium",field:"hasPremium"},{title:"Max Bids",field:"bids"}],data:a}),Object(y.jsx)(N.a,{open:this.state.date_match_modal,onClose:this.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:""==this.state.modalData?Object(y.jsx)("h3",{className:"modal-title",children:"Fetching"}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h3",{className:"modal-title",children:this.state.modalData.name}),Object(y.jsx)("div",{className:"mb-3 person-icon",children:Object(y.jsx)("img",{src:this.state.modalData.avtar,alt:"icon"})}),Object(y.jsx)(I,{className:"mt-3",options:{paginationType:"stepped",search:!0,paging:!0,filtering:!1,showTitle:!1,toolbar:!0,emptyRowsWhenPaging:!1,pageSize:5,actionsColumnIndex:-1},columns:[{title:"Amount",field:"amount"},{title:"Car Title",field:"carTitle"}],data:this.state.modalData.bidsData}),Object(y.jsx)(w.a,{children:Object(y.jsx)(u.a,{onClick:this.handleCloseSub,color:"primary",children:"Close"})})]})})]})}}]),a}(i.a.Component);F.contextType=O;var R=F,z=a(487),A=a(88),B=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){P.a.set({page:"/login"}),P.a.pageview("/login"),P.a.event({category:"Page",action:"Login",label:"Login Rendered"})},n.handleCloseSub=function(){n.setState({date_match_modal:!1})},n.changeState=function(){localStorage.setItem("Login","true"),n.setState({action:"home"})},n.renderFormSign=function(){return Object(y.jsxs)(j.a,{className:"",variant:"outlined",children:[Object(y.jsxs)(b.a,{children:[Object(y.jsx)(A.a,{variant:"h5",component:"h2",className:"main-title mb-3",children:"BID APP"}),Object(y.jsx)(u.a,{variant:"contained",color:"primary",className:"btn-class mt-4",onClick:n.changeState,children:"LOGIN"})]}),Object(y.jsxs)(z.a,{children:[Object(y.jsx)(u.a,{size:"small",children:"By: Malay Mishra"}),Object(y.jsx)("br",{}),Object(y.jsx)(u.a,{size:"small",children:"Production"})]})]})},n.renderDialog=function(){var e=n.state.date_match_modal;return Object(y.jsxs)(N.a,{open:e,onClose:n.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(y.jsx)("h3",{className:"modal-title",children:"Hi, "}),Object(y.jsx)("h3",{className:"modal-subtitle",children:"Wrong Credentials "}),Object(y.jsx)(w.a,{children:Object(y.jsx)(u.a,{onClick:n.handleCloseSub,color:"primary",children:"Close"})})]})},n.state={date_match_modal:!1,action:""},n}return Object(l.a)(a,[{key:"render",value:function(){return"home"===this.state.action?Object(y.jsx)(h.a,{to:{pathname:"/home"}}):Object(y.jsxs)("div",{className:"max-width-in",children:[Object(y.jsx)(this.renderFormSign,{}),Object(y.jsx)(this.renderDialog,{})]})}}]),a}(i.a.Component),V=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isRedirect:!1},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(y.jsx)(m.a,{basename:"/carbid",children:Object(y.jsxs)(h.d,{children:[Object(y.jsx)(S,{path:"/home",component:R}),Object(y.jsx)(h.b,{path:"/login",component:B})]})})}}]),a}(i.a.Component);var E=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(V,{})})},U=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,862)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),c(e),o(e)}))};a(453);P.a.initialize("UA-194888640-1"),P.a.pageview(window.location.pathname+window.location.search),o.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(E,{})}),document.getElementById("root")),U()}},[[454,1,2]]]);
//# sourceMappingURL=main.04e227e4.chunk.js.map