"use strict";(self.webpackChunkcpanel=self.webpackChunkcpanel||[]).push([[697],{2697:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var n,s=t(8683),i=t(885),a=t(2791),u=t(3531),c=t(6916),o=t(1276),d=t(9413),l=t(4404),f=t(2993),m=t(168),p=t(6444).ZP.main(n||(n=(0,m.Z)(["\n\tmargin-top: 3rem;\n\tmargin-bottom: 2rem;\n\tpadding: .4rem;\n"]))),h=t(184);var g=(0,c.zB)({orders:l.pi,ordersStatus:l._$}),j=(0,u.$j)(g,(function(e){return{fetchOrders:function(r){return e((0,d.h_)(r))}}}))((function(e){var r,t=e.fetchOrders,n=e.orders,u=e.ordersStatus,c=(0,a.useContext)(o.V).currentUser.id,d=(0,a.useState)(!1),l=(0,i.Z)(d,2),m=l[0],g=l[1];if((0,a.useEffect)((function(){return t(c),setTimeout((function(){return g(!0)}),2e3),function(){g(!1)}}),[t,c]),"pending"===u)r=(0,h.jsx)("p",{children:"Loading..."});else if(n.length&&"success"===u){r=(0,h.jsxs)(p,{className:"order-container",children:[(0,h.jsx)(f.Dj,{type:"orders",filterName:"Show filters"}),(0,h.jsx)(f.iA,{tableHead:["ID","category","services","link","status","quantity","charge","average time"],children:n.map((function(e){return(0,h.jsx)(f.mq,(0,s.Z)({},e),null===e||void 0===e?void 0:e.id)}))})]})}else r=(0,h.jsx)(f.Mm,{});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.HJ,{title:"Orders",description:"Orders",type:"article"}),(0,h.jsx)(f.NZ,{style:{marginTop:m?"2rem":"0"}}),r]})}))}}]);
//# sourceMappingURL=697.d22e07bd.chunk.js.map