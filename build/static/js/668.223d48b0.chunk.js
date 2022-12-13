"use strict";(self.webpackChunkcpanel=self.webpackChunkcpanel||[]).push([[668],{6668:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r=t(885),a=t(2791),i=t(6916),s=t(3531),l=t(1276);var d,o,c,u,m,h,g,x,f=function(e){var n=e.category,t=e.service,r=e.link,a=e.averageTime,i=e.quantity,s=e.charge,l={};return n.length||(l.categories="Please select a category you would like to order"),t.length||(l.service="Please select a service you would like to order"),t.includes(n)||(l.service="Select service based on the selected category"),/^https:\/\/(t\.me)+\/[\w]+$/gi.exec(r)||/^@[a-zA-Z]{3,}$/gi.exec(r)||(l.link="Please add a valid telegram account"),(i<500||i>28e3)&&(l.quantity="Quantity can't be less than 500 or greater than 28000"),/^[\d]{0,}\shour(s)?(\s[\d]{1,}\sminute(s)?)?$/gi.exec(a)||(l.averageTime="Error"),s.length||(l.charge="Charge can't be empty"),l},p=t(7410),v=t(1053),j=t(9413),y=t(4404),b=t(825),w=t(2993),Z=t(168),k=t(6444),S=(0,k.iv)(d||(d=(0,Z.Z)(["\n\tfont-size: 1.06rem;\n\n\t@media (max-width: 1100px) {\n    \tfont-size: 1.04rem;\n    }\n\n    @media (max-width: 900px) {\n    \tfont-size: 1.08rem;\n    }\n\n    @media (max-width: 425px) {\n    \tfont-size: 1.15rem;\n    }\n\n    @media (max-width: 300px) {\n    \tfont-size: 1.2rem;\n    \tline-height: 1.2;\n    }\n"]))),C=k.ZP.main(o||(o=(0,Z.Z)(["\n\tgrid-template-columns: 1fr 56% 40%;\n\tgrid-row-gap: 1.6rem;\n\tgrid-column-gap: 2.2rem;\n\n\t@media (max-width: 1100px) {\n\t\tgrid-template-columns: 50% 46%;\n\t}\n\n\t@media (max-width: 900px) {\n\t\tgrid-template-columns: 1fr;\n\t\tpadding: 0 1.5rem;\n\t}\n\n\t@media (max-width: 800px) {\n\t\tpadding: 0 1rem;\n\t}\n\n\t@media (max-width: 425px) {\n\t\tpadding: 0;\n\t}\n"]))),N=k.ZP.form(c||(c=(0,Z.Z)(["\n\tgrid-column: 1/3;\n\tgap: 1.4rem;\n\n\t@media (max-width: 1100px) {\n\t\tgrid-column: 1/2;\n\t}\n\n\t@media (max-width: 900px) {\n\t\tgrid-column: 1/-1;\n\t}\n"]))),P=k.ZP.div(u||(u=(0,Z.Z)(["\n\tgrid-column: 3/-1;\n\tpadding: 1.6rem 1.8rem;\n\tborder-radius: .3rem;\n\tbackground: var(--grey-tint-1-61);\n\tcolor: var(--grey-tint-8);\n\n\t@media (max-width: 1100px) {\n\t\tgrid-column: 2/-1;\n\t}\n\n\t@media (max-width: 900px) {\n\t\tgrid-column: 1/-1;\n\t}\n\n\t@media (max-width: 320px) {\n\t\tpadding: 1.6rem 1.2rem;\n\t}\n"]))),T=k.ZP.h5(m||(m=(0,Z.Z)(["\n\tfont-size: 1.1rem;\n\tfont-weight: 500;\n"]))),z=k.ZP.div(h||(h=(0,Z.Z)(["\n\tgap: 1.5rem;\n\tmargin-top: 1rem;\n"]))),$=k.ZP.ul(g||(g=(0,Z.Z)(["\n\t","\n\tgap: 0.2rem;\n\tmargin: 2rem 0;\n    color: var(--primary);\n\n\t@media (max-width: 900px) {\n\t\tgap: .4rem;\n\t}    \n\n\t@media (max-width: 425px) {\n\t\tgap: .6rem;\n\t}\n"])),S),E=k.ZP.p(x||(x=(0,Z.Z)(["\n\t","\n\tline-height: 1.5;\n\tmargin: 1.5rem 0;\n"])),S),q=t(184);var D=(0,i.zB)({categories:v.VN,servicesList:v.Bx,orderStatus:y._$,orderError:y.NT}),O=(0,s.$j)(D,(function(e){return{fetchServices:function(){return e((0,p.Qz)())},addOrder:function(n){return e((0,j.Q2)(n))}}}))((function(e){var n=e.fetchServices,t=e.categories,i=e.servicesList,s=e.addOrder,d=e.orderStatus,o=(e.orderError,(0,a.useContext)(l.V).currentUser.id),c=t.filter((function(e){return"all"!==e})),u=(0,a.useState)(""),m=(0,r.Z)(u,2),h=m[0],g=m[1],x=(0,a.useState)(""),p=(0,r.Z)(x,2),v=p[0],j=p[1],y=(0,a.useState)(""),Z=(0,r.Z)(y,2),k=Z[0],S=Z[1],D=(0,a.useState)(""),O=(0,r.Z)(D,2),L=O[0],Q=O[1],B=(0,a.useState)(""),F=(0,r.Z)(B,2),I=F[0],V=F[1],_=(0,a.useState)(""),A=(0,r.Z)(_,2),W=A[0],G=A[1],M=(0,a.useState)({}),U=(0,r.Z)(M,2),Y=U[0],H=U[1],J=(0,a.useState)(!1),K=(0,r.Z)(J,2),R=K[0],X=K[1],ee=(0,a.useState)(!1),ne=(0,r.Z)(ee,2),te=ne[0],re=ne[1],ae=b.$e.features,ie=b.$e.fastWorking,se=b.$e.info;return(0,a.useEffect)((function(){return re(!0),function(){re(!1)}}),[re]),(0,a.useEffect)((function(){n()}),[n]),(0,a.useEffect)((function(){0===Object.keys(Y).length&&R&&(s({userID:o,category:h,service:v,link:k,averageTime:L,quantity:I,charge:W}),"success"===d&&(g(""),S(""),j(""),V(""),G(""),Q("")))}),[Y,R,s,d,o,h,v,k,L,I,W,g,S,j,V,G,Q]),(0,q.jsxs)(C,{className:"d-grid",children:[te&&(0,q.jsx)(w.u_,{isOpen:te,closeModal:function(){return re((function(e){return!e}))},children:(0,q.jsxs)(w.f7,{children:[(0,q.jsxs)("ul",{children:[(0,q.jsx)("li",{children:"Please be sure to read the full description of our services"}),(0,q.jsxs)("li",{children:["Do not use two different services with the ",(0,q.jsx)("span",{className:"font-bold gradient-text",children:"Same Link."})," If you do this, we will not be able to to fix it, wait for the first order to be completed before placing a new order"]})]}),(0,q.jsx)(w.CT,{noticeText:b.$y})]})}),(0,q.jsxs)(N,{className:"d-flex d-flex-column",onSubmit:function(e){e.preventDefault(),H(f({category:h,service:v,link:k,averageTime:L,quantity:I,charge:W})),X(!0)},noValidate:!0,children:[(0,q.jsx)(w.ih,{label:"Categories",name:"services-category",options:c,value:h,handleChange:function(e){var n=e.target;return g(n.value)},error:null===Y||void 0===Y?void 0:Y.categories}),(0,q.jsx)(w.ih,{label:"Services",name:"services",options:i,value:v,handleChange:function(e){var n=e.target;return j(n.value)},error:null===Y||void 0===Y?void 0:Y.service}),(0,q.jsx)(w.yt,{type:"text",name:"link",label:"Link",value:k,handleChange:function(e){var n=e.target;return S(n.value)},error:null===Y||void 0===Y?void 0:Y.link}),(0,q.jsx)(w.yt,{type:"text",name:"quantity",label:"Quantity",info:"min: 500 - max: 28000",value:I,handleChange:function(e){var n=e.target;return V(n.value)},error:null===Y||void 0===Y?void 0:Y.quantity}),(0,q.jsx)(w.yt,{type:"text",name:"average_time",label:"Average Time",placeholder:"1 hour 30 minute",value:L,handleChange:function(e){var n=e.target;return Q(n.value)},error:null===Y||void 0===Y?void 0:Y.averageTime}),(0,q.jsx)(w.yt,{type:"text",name:"charge",label:"Charge",value:W,handleChange:function(e){var n=e.target;return G(n.value)},error:null===Y||void 0===Y?void 0:Y.charge}),(0,q.jsx)(w.zx,{type:"submit",variant:"primary",style:{width:"100%"},children:"Book  Order"})]}),(0,q.jsxs)(P,{children:[(0,q.jsx)(T,{children:"Description"}),(0,q.jsxs)(z,{children:[(0,q.jsx)($,{className:"d-flex d-flex-column",children:ae.map((function(e){return(0,q.jsx)("li",{children:e})}))}),(0,q.jsx)(E,{children:"\u23f3 Start Time: Fast[15k+/daily]"}),(0,q.jsx)(E,{children:"Fast Working"}),(0,q.jsx)($,{className:"d-flex d-flex-column",children:ie.map((function(e){return(0,q.jsx)("li",{children:e})}))}),(0,q.jsx)(E,{children:"\u23f3 Start Time: 30 min - 4 hours"}),(0,q.jsx)(E,{children:se.link}),se.content.map((function(e){return(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(E,{children:e})})})),(0,q.jsxs)(E,{children:[" ",(0,q.jsx)("span",{className:"font-bold",children:"\u2b55 Important:"})," You must have minimum 5 posts in ",(0,q.jsx)("span",{className:"font-bold",children:"Channel"}),". Subjects of ",(0,q.jsx)("span",{className:"font-bold",children:"Drugs"}),"/",(0,q.jsx)("span",{className:"font-bold",children:"Earnings"}),"/",(0,q.jsx)("span",{className:"font-bold",children:"Scam"}),"/",(0,q.jsx)("span",{className:"font-bold",children:"Cheating"}),"/",(0,q.jsx)("span",{className:"font-bold",children:"Guns"})," are prohibited and orders will be cancelled."]})]})]})]})}))}}]);
//# sourceMappingURL=668.223d48b0.chunk.js.map