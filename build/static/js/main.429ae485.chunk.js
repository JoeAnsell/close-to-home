(this["webpackJsonpclose-to-home"]=this["webpackJsonpclose-to-home"]||[]).push([[0],{160:function(e,n,t){"use strict";t.r(n);var a,i,r,c,s,o,l,d,b,u,j,p,h,m,x,O,g,f,v,y,w,k,C,S,_,E,N,T,z,B,A,q,F,I,L,M=t(0),P=t(14),R=t.n(P),D=t(9),V=t(7),H=t.n(V),U=t(13),W=t(11),Q=t(8),Y=t(86),G=new(t.n(Y).a)("".concat("pk_test_27186b92b3a7a7e9e438a5a33f6887335c734827e6ae4")),X=t(196),K=t(197),J=t(192),Z=t(198),$=t(16),ee=t(20),ne=t(1),te=function(e){var n=e.totalItems,t=Object($.g)();return Object(ne.jsxs)(ae,{position:"fixed",color:"inherit",children:[Object(ne.jsx)(ie,{children:Object(ne.jsx)(ee.b,{to:"/",children:"/"!==t.pathname&&"/checkout"===t.pathname?Object(ne.jsx)(J.a,{className:"dark"}):"/"!==t.pathname&&Object(ne.jsx)(J.a,{})})}),Object(ne.jsx)(re,{children:"/"===t.pathname&&Object(ne.jsx)("div",{children:Object(ne.jsx)(ee.b,{to:"/basket",children:Object(ne.jsx)(X.a,{"arial-label":"Show cart items",color:"inherit",children:Object(ne.jsx)(K.a,{badgeContent:n,color:"secondary",children:Object(ne.jsx)(Z.a,{})})})})})})]})},ae=Q.b.div(a||(a=Object(D.a)(["\n  display: flex;\n  position: fixed;\n  top: 0;\n  max-width: 100vw;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  z-index: 2;\n  color: #d5da89;\n  ","\n  .dark {\n    color: black;\n    background-color: white;\n  }\n\n  button {\n    background-color: black;\n  }\n"])),""),ie=Q.b.div(i||(i=Object(D.a)(["\n  margin: 10px;\n"]))),re=Q.b.div(r||(r=Object(D.a)(["\n  margin: 10px;\n"]))),ce=t(199),se=function(e){var n=e.product,t=e.onAddToCart;return Object(M.useEffect)((function(){console.log(n)})),Object(ne.jsx)(oe,{children:Object(ne.jsx)(le,{"aria-label":"Add to Cart",onClick:function(){return t(n.id,1)},children:Object(ne.jsx)(ce.a,{})})})},oe=Q.b.div(c||(c=Object(D.a)(["\n  display: block;\n"]))),le=(Q.b.div(s||(s=Object(D.a)(["\n  display: block;\n"]))),Q.b.div(o||(o=Object(D.a)(["\n  display: block;\n"]))),Q.b.div(l||(l=Object(D.a)(["\n  display: block;\n  cursor: pointer;\n"])))),de=function(e){var n=e.products,t=e.onAddToCart;return Object(ne.jsx)("main",{children:n.map((function(e,n){return Object(ne.jsx)(se,{product:e,onAddToCart:t},n)}))})},be=(Q.b.button(d||(d=Object(D.a)(["\n  padding: 5px 15px;\n  border-radius: 25px;\n  cursor: pointer;\n  transition: 0.25s;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  &:hover {\n    background-color: #b9b9b9;\n    border: 2px solid white;\n  }\n"]))),Q.b.button(b||(b=Object(D.a)(["\n  padding: 5px 20px;\n  cursor: pointer;\n  border: none;\n  background-color: rgba(255, 255, 255, 0);\n  color: white;\n  font-weight: light;\n  transition: 0.15s;\n  border-radius: 5px;\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n"])))),ue=Q.b.button(u||(u=Object(D.a)(["\n  padding: 5px 20px;\n  border: 10px;\n  cursor: pointer;\n  border-radius: 5px;\n"]))),je=(Q.b.div(j||(j=Object(D.a)(["\n  display: block;\n  margin-bottom: 30px;\n"]))),Q.b.div(p||(p=Object(D.a)(["\n  display: block;\n"]))),Q.b.div(h||(h=Object(D.a)(["\n  display: block;\n"]))),Q.b.div(m||(m=Object(D.a)(["\n  display: block;\n"]))),function(e){var n=e.item,t=e.onUpdateCartQty,a=e.onRemoveFromCart;return Object(ne.jsxs)(pe,{children:[Object(ne.jsx)("img",{src:n.media.source}),Object(ne.jsx)("p",{children:n.name}),Object(ne.jsx)("p",{children:n.line_total.formatted_with_symbol}),Object(ne.jsxs)(he,{children:[Object(ne.jsx)(be,{size:"small",color:"primary",variant:"contained",onClick:function(){t(n.id,n.quantity-1)},children:"\u2013"}),Object(ne.jsx)("p",{children:n.quantity}),Object(ne.jsx)(be,{size:"small",color:"primary",variant:"contained",onClick:function(){t(n.id,n.quantity+1)},children:"+"})]}),Object(ne.jsx)("div",{children:Object(ne.jsx)(be,{color:"primary",variant:"outlined",onClick:function(){a(n.id)},children:"Remove"})})]})}),pe=Q.b.div(x||(x=Object(D.a)(["\n  display: block;\n  img {\n    max-width: 200px;\n  }\n  div {\n    margin-bottom: 10px;\n  }\n  button {\n    ","\n    margin: 0px 20px;\n    ","\n    span {\n      color: black;\n    }\n  }\n"])),"",""),he=Q.b.div(O||(O=Object(D.a)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  button {\n    ","\n    ","\n  }\n"])),"",""),me=function(e){var n=e.cart,t=e.handleUpdateCartQty,a=e.handleRemoveFromCart,i=e.handleEmptyCart,r=function(){return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)("p",{children:"You have no items in your cart"}),Object(ne.jsx)(ee.b,{to:"/",children:Object(ne.jsx)("p",{children:"Start adding some items"})})]})},c=function(){return n.line_items?Object(ne.jsxs)(ne.Fragment,{children:[n.line_items.map((function(e,n){return Object(ne.jsx)(je,{onUpdateCartQty:t,onRemoveFromCart:a,item:e},n)})),Object(ne.jsx)("br",{}),Object(ne.jsxs)("h4",{style:{color:"#d5da89"},children:["Subtotal : ",n.subtotal.formatted_with_symbol]}),Object(ne.jsxs)(Oe,{children:[Object(ne.jsx)(be,{onClick:i,children:"Empty Cart"}),Object(ne.jsx)(ee.b,{to:"/checkout",children:Object(ne.jsx)(ue,{children:"Checkout "})})]})]}):"loading..."};return Object(ne.jsxs)(xe,{children:[Object(ne.jsx)("h2",{children:"Your ShoppingCart"}),Object(ne.jsx)("br",{}),n.line_items?Object(ne.jsx)(c,{}):Object(ne.jsx)(r,{})]})},xe=Q.b.div(g||(g=Object(D.a)(["\n  display: block;\n  background-color: #151515;\n  padding: 30px;\n  border-radius: 30px;\n  text-align: center;\n  color: white;\n"]))),Oe=Q.b.div(f||(f=Object(D.a)(["\n  margin-top: 10px;\n  > button {\n    margin-right: 10px;\n  }\n"]))),ge=t(54),fe=t(209),ve=t(211),ye=t(212),we=t(204),ke=t(220),Ce=t(213),Se=t(216),_e=t(27),Ee=t(200),Ne=Object(Ee.a)((function(e){var n;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(_e.a)({marginTop:"5%",width:"auto"},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(n={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(5,0,3,0)},Object(_e.a)(n,e.breakpoints.down("xs"),{width:"100%"}),Object(_e.a)(n,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),n),stepper:{padding:e.spacing(3,1,5,1)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),Te=t(52),ze=t(201),Be=t(206),Ae=t(215),qe=t(219),Fe=t(214),Ie=t(207),Le=t(40),Me=t(217),Pe=function(e){var n=e.name,t=e.label,a=e.required,i=Object(Le.d)().control;return Object(ne.jsx)(ze.a,{item:!0,xs:12,sm:6,children:Object(ne.jsx)(Le.a,{name:n,label:t,control:i,defaultValue:"",render:function(e){var i=e.field,r=i.onChange,c=(i.onBlur,i.value),s=(i.ref,e.fieldState);s.invalid,s.isTouched,s.isDirty,s.error,e.formState;return Object(ne.jsx)(Me.a,{onChange:r,fullWidth:!0,required:a,name:n,label:t,value:c,error:false})}})})},Re=function(e){var n=e.checkoutToken,t=e.next,a=Object(M.useState)([]),i=Object(W.a)(a,2),r=i[0],c=i[1],s=Object(M.useState)(""),o=Object(W.a)(s,2),l=o[0],d=o[1],b=Object(M.useState)([]),u=Object(W.a)(b,2),j=u[0],p=u[1],h=Object(M.useState)(""),m=Object(W.a)(h,2),x=m[0],O=m[1],g=Object(M.useState)([]),f=Object(W.a)(g,2),v=f[0],y=f[1],w=Object(M.useState)(""),k=Object(W.a)(w,2),C=k[0],S=k[1],_=Object(M.useState)(!0),E=Object(W.a)(_,2),N=E[0],T=E[1],z=Object(Le.c)(),B=Object.entries(r).map((function(e){var n=Object(W.a)(e,2);return{id:n[0],label:n[1]}})),A=Object.entries(j).map((function(e){var n=Object(W.a)(e,2);return{id:n[0],label:n[1]}})),q=v.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})),F=function(){var e=Object(U.a)(H.a.mark((function e(n){var t,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.services.localeListShippingCountries(n);case 2:t=e.sent,a=t.countries,c(a),d(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=function(){var e=Object(U.a)(H.a.mark((function e(n){var t,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.services.localeListSubdivisions(n);case 2:t=e.sent,a=t.subdivisions,p(a),O(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L=function(){var e=Object(U.a)(H.a.mark((function e(n,t){var a,i,r=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>2&&void 0!==r[2]?r[2]:null,e.next=3,G.checkout.getShippingOptions(n,{country:t,region:a});case 3:i=e.sent,console.log(i),y(i),S(i[0].id);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return Object(M.useEffect)((function(){F(n.id)}),[]),Object(M.useEffect)((function(){l&&I(l)}),[l]),Object(M.useEffect)((function(){x&&(console.log(x),L(n.id,l,x))}),[x]),Object(ne.jsx)(De,{children:Object(ne.jsx)(Le.b,Object(Te.a)(Object(Te.a)({},z),{},{children:Object(ne.jsxs)("form",{onSubmit:z.handleSubmit((function(e){return t(Object(Te.a)(Object(Te.a)({},e),{},{shippingCountry:l,shippingSubdivision:x,shippingOption:C}))})),children:[Object(ne.jsxs)(ze.a,{container:!0,spacing:3,children:[Object(ne.jsx)(ge.a,{style:{width:"100%"},variant:"h6",children:"Shipping Address"}),Object(ne.jsx)(Pe,{required:!0,name:"firstName",label:"First name"}),Object(ne.jsx)(Pe,{required:!0,name:"lastName",label:"Last name"}),Object(ne.jsx)(Pe,{required:!0,name:"address1",label:"Address line 1"}),Object(ne.jsx)(Pe,{required:!0,name:"email",label:"Email"}),Object(ne.jsx)(Pe,{required:!0,name:"city",label:"City"}),Object(ne.jsx)(Pe,{required:!0,name:"zip",label:"Zip / Postal code"}),Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),Object(ne.jsx)(Be.a,{className:"billing-toggle",control:Object(ne.jsx)(Ae.a,{checked:!N,onChange:function(){return T(!N)},name:"checkedB",color:"primary"}),label:"Billing address same as Shipping address?"}),N&&Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ge.a,{className:"billing-title",variant:"h6",children:"Billing Address"}),Object(ne.jsx)(Pe,{required:!0,name:"billing_firstName",label:"First name"}),Object(ne.jsx)(Pe,{required:!0,name:"billing_lastName",label:"Last name"}),Object(ne.jsx)(Pe,{required:!0,name:"billing_address1",label:"Address line 1"}),Object(ne.jsx)(Pe,{required:!0,name:"billing_email",label:"Email"}),Object(ne.jsx)(Pe,{required:!0,name:"billing_city",label:"City"}),Object(ne.jsx)(Pe,{required:!0,name:"billing_zip",label:"Zip / Postal code"})]}),Object(ne.jsx)(ge.a,{style:{width:"100%",marginTop:"30px",marginBottom:"20px"},variant:"h6",gutterBottom:!0,children:"Delivery Method"}),Object(ne.jsxs)(ze.a,{item:!0,xs:12,sm:6,children:[Object(ne.jsx)(qe.a,{children:"Shipping Country"}),Object(ne.jsx)(Fe.a,{value:l,fullWidth:!0,onChange:function(e){return d(e.target.value)},children:B.map((function(e){return Object(ne.jsx)(Ie.a,{value:e.id,children:e.label},e.id)}))})]}),Object(ne.jsxs)(ze.a,{item:!0,xs:12,sm:6,children:[Object(ne.jsx)(qe.a,{children:"Shipping Subdivision"}),Object(ne.jsx)(Fe.a,{value:x,fullWidth:!0,onChange:function(e){return O(e.target.value)},children:A.map((function(e){return Object(ne.jsx)(Ie.a,{value:e.id,children:e.label},e.id)}))})]}),Object(ne.jsxs)(ze.a,{item:!0,xs:12,sm:6,children:[Object(ne.jsx)(qe.a,{children:"Shipping Options"}),Object(ne.jsx)(Fe.a,{value:C,fullWidth:!0,onChange:function(e){return S(e.target.value)},children:q.map((function(e){return Object(ne.jsx)(Ie.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),Object(ne.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(ne.jsx)(ee.b,{to:"/basket",children:Object(ne.jsx)(ue,{variant:"outlined",children:"Back to Cart"})}),Object(ne.jsx)(ue,{type:"submit",color:"primary",variant:"contained",children:"Next"})]})]})}))})},De=Q.b.div(v||(v=Object(D.a)(["\n  display: block;\n  .billing-title {\n    margin-top: 30px;\n    width: 100%;\n  }\n  .billing-toggle {\n    margin: 20px 0px 10px 0px;\n  }\n  .billing-spacer {\n    margin-bottom: 30px;\n  }\n"]))),Ve=t(210),He=t(53),Ue=t(94),We=t(205),Qe=t(161),Ye=t(208),Ge=function(e){var n=e.checkoutToken;return Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsxs)(ge.a,{variant:"h6",gutterBottom:!0,children:[console.log(n),Object(ne.jsxs)(We.a,{disablePadding:!0,children:[n&&n.live.line_items.map((function(e){return Object(ne.jsxs)(Qe.a,{style:{padding:"10px 0"},children:[Object(ne.jsx)(Ye.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(ne.jsx)(ge.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(ne.jsxs)(Qe.a,{style:{padding:"10px 0"},children:[Object(ne.jsx)(Ye.a,{primary:"Total"}),Object(ne.jsx)(ge.a,{variant:"subtitle1",style:{fontWeight:700},children:n.live.subtotal.formatted_with_symbol})]})]})]})})},Xe=Object(Ue.a)("".concat("pk_test_518q3dvAof4LIlayextvHfXwWyxRuxT8fcbpyAUgaIMY7w9msZvQXhSHwV83CQOKCDueJI4ycgwzRTpYbFHnK9vHt00bKgKaqi4")),Ke=function(e){var n=e.checkoutToken,t=e.shippingData,a=e.backStep,i=e.nextStep,r=e.onCaptureCheckout,c=(e.timeout,function(){var e=Object(U.a)(H.a.mark((function e(a,c,s){var o,l,d,b,u;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s&&c){e.next=3;break}return e.abrupt("return");case 3:return o=c.getElement(He.CardElement),e.next=6,s.createPaymentMethod({type:"card",card:o});case 6:l=e.sent,d=l.error,b=l.paymentMethod,console.log(n),console.log(t),d?console.log(d):(u={line_items:n.live.line_items,customer:{firstname:t.firstName,lastname:t.lastName,email:t.email},shipping:{name:"Primary",street:t.address1,town_city:t.city,county_state:t.shippingSubdivision,postal_zip_code:t.zip,country:t.shippingCountry},billing:{name:"Primary",street:"".concat(t.billing_address1?t.billing_address1:t.address1),town_city:"".concat(t.billing_city?t.billing_city:t.city),county_state:"".concat(t.billing_shippingSubdivision?t.billing_shippingSubdivision:t.shippingSubdivision),postal_zip_code:"".concat(t.billing_zip?t.billing_zip:t.zip),country:"".concat(t.billing_shippingCountry?t.billing_shippingCountry:t.shippingCountry)},fulfillment:{shipping_method:t.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:b.id}}},console.log(u),console.log(n.id),r(n.id,u),i());case 12:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}());return Object(ne.jsxs)(Je,{children:[Object(ne.jsx)(Ge,{checkoutToken:n}),Object(ne.jsx)(fe.a,{}),Object(ne.jsx)(ge.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(ne.jsx)(He.Elements,{stripe:Xe,children:Object(ne.jsx)(He.ElementsConsumer,{children:function(e){var t=e.elements,i=e.stripe;return Object(ne.jsxs)("form",{onSubmit:function(e){c(e,t,i)},children:[Object(ne.jsx)(He.CardElement,{}),Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),Object(ne.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(ne.jsx)(Ve.a,{variant:"outlined",onClick:a,children:"Back"}),Object(ne.jsxs)(Ve.a,{type:"submit",variant:"contained",disabled:!i,color:"primary",children:["Pay ",n.live.subtotal.formatted_with_symbol]})]})]})}})})]})},Je=Q.b.div(y||(y=Object(D.a)(["\n  display: block;\n"]))),Ze=t(47),$e=["Shipping ".concat(Ze.MobileView?"":"address"),"Payment ".concat(Ze.MobileView?"":"details")],en=function(e){var n=e.cart,t=e.order,a=e.onCaptureCheckout,i=e.error,r=Object(M.useState)(0),c=Object(W.a)(r,2),s=c[0],o=c[1],l=Object(M.useState)(null),d=Object(W.a)(l,2),b=d[0],u=d[1],j=Object(M.useState)({}),p=Object(W.a)(j,2),h=p[0],m=p[1],x=Object(M.useState)(!1),O=Object(W.a)(x,2),g=O[0],f=O[1],v=(Object($.f)(),Ne()),y=function(){return o((function(e){return e+1}))},w=function(){return o((function(e){return e-1}))},k=function(){var e=Object(U.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.checkout.generateToken(n.id,{type:"cart"});case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("no token");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(M.useEffect)((function(){k(),console.log(t)}),[n]);var C=function(e){console.log(e),m(e),y()},S=function(){setTimeout((function(){f(!0)}),3e3)},_=function(){return t.customer?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)("div",{children:[Object(ne.jsxs)(ge.a,{variant:"h5",children:["Thank you for your purchase, ",t.customer.firstname," ",t.customer.lastname]}),Object(ne.jsx)(fe.a,{className:v.divider}),Object(ne.jsxs)(ge.a,{variant:"subtitilte2",children:["Order ref: ",t.customer_reference]})]}),Object(ne.jsx)("br",{}),Object(ne.jsx)(ee.b,{to:"/",children:Object(ne.jsx)(ue,{cvariant:"outlined",type:"button",children:"Back to Home"})})]}):g?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)("div",{children:[Object(ne.jsx)(ge.a,{variasnt:"h5",children:"Thank you for your purchase"}),Object(ne.jsx)(fe.a,{className:v.divider})]}),Object(ne.jsx)("br",{}),Object(ne.jsx)(ee.b,{to:"/",children:Object(ne.jsx)(ue,{cvariant:"outlined",type:"button",children:"Back to Home"})})]}):Object(ne.jsx)("div",{className:v.spinner,children:Object(ne.jsx)(ve.a,{})})};i&&(ne.Fragment,ge.a,ee.b);var E=function(){return 0===s?Object(ne.jsx)(Re,{checkoutToken:b,next:C}):Object(ne.jsx)(Ke,{shippingData:h,checkoutToken:b,backStep:w,nextStep:y,onCaptureCheckout:a,timeout:S})};return Object(ne.jsxs)(nn,{children:[Object(ne.jsx)(ye.a,{}),Object(ne.jsx)("main",{className:v.layout,children:Object(ne.jsxs)(we.a,{className:v.paper,children:[Object(ne.jsx)("h1",{children:"Checkout"}),Object(ne.jsx)(ke.a,{activeStep:s,className:v.stepper,children:$e.map((function(e,n){return Object(ne.jsx)(Ce.a,{children:Object(ne.jsx)(Se.a,{children:e})},e)}))}),Object(ne.jsx)(tn,{children:s===$e.length?Object(ne.jsx)(_,{}):b&&Object(ne.jsx)(E,{})})]})})]})},nn=Q.b.div(w||(w=Object(D.a)(["\n  max-width: 700px;\n  margin: 0 auto;\n\n  h1 {\n    text-align: center;\n  }\n"]))),tn=Q.b.div(k||(k=Object(D.a)(["\n  padding: 0px 25px 25px 25px;\n"]))),an=t.p+"static/media/tape-case-back-comp.db659dc4.png",rn=t.p+"static/media/tape-case-front-comp.9b4b8391.png",cn=t.p+"static/media/tape-comp.25505c8f.png",sn=t.p+"static/media/smudge.a46d5a2c.png",on=t(95),ln=(t(159),[t.p+"static/media/Styling-intro.cd8ec32c.jpeg",t.p+"static/media/crep-sole-converse.3225dd7d.jpg",t.p+"static/media/context-proto-final.62e784fa.jpg"]),dn=function(e){var n=e.windowSmall,t=Object(M.useState)(!1),a=Object(W.a)(t,2),i=a[0],r=a[1],c=Object(M.useState)(0),s=Object(W.a)(c,2),o=s[0],l=s[1],d=Object(M.useState)(0),b=Object(W.a)(d,2),u=b[0],j=b[1],p=function(){var e=window.innerWidth;return j((e-640)/2/2),["frog","dog"]};return Object(M.useEffect)((function(){return window.addEventListener("resize",p),p(),function(){return window.removeEventListener("resize",p)}}),[]),Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(un,{className:"".concat(n&&"small"),children:ln.map((function(e,n){return Object(ne.jsx)(jn,{style:{width:u},className:"image-".concat(n+1),onClick:function(){l(n),r(!0)},src:e},n)}))}),n&&Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsx)(bn,{children:"(Click images to expand)"})}),i&&Object(ne.jsx)(on.a,{imagePadding:50,mainSrc:ln[o],nextSrc:ln[o+1],prevSrc:ln[o-1],onCloseRequest:function(){return r(!1)},onMovePrevRequest:function(){return l(o-1)},onMoveNextRequest:function(){return l(o+1)}})]})},bn=Q.b.p(C||(C=Object(D.a)(["\n  font-size: 12px;\n  margin-bottom: 20px;\n"]))),un=Q.b.div(S||(S=Object(D.a)(["\n  display: block;\n  position: absolute;\n  top: 55px;\n  width: 100vw;\n  min-width: 100vh;\n  &.small {\n    position: inherit;\n    display: flex;\n    width: 100%;\n    min-width: unset;\n    justify-content: space-between;\n    margin: 20px 0px;\n    img {\n      position: inherit;\n      display: block;\n      top: unset;\n      left: unset;\n      max-width: unset;\n      min-width: 31%;\n      min-height: unset;\n      max-height: unset;\n      opacity: 1;\n    }\n  }\n"]))),jn=Q.b.img(_||(_=Object(D.a)(["\n  display: block;\n  min-width: 150px;\n  max-width: 500px;\n  height: auto;\n  opacity: 0.5;\n  transition: 0.15s;\n  position: absolute;\n  &:hover {\n    opacity: 1;\n    cursor: zoom-in;\n    transform: scale(1.05);\n  }\n  &.image-1 {\n    top: 10vh;\n    left: 5vh;\n  }\n  &.image-2 {\n    top: 35vh;\n    right: 10vh;\n  }\n  &.image-3 {\n    left: 9vh;\n    top: 80vh;\n  }\n  &.small {\n  }\n"]))),pn=function(e){var n=e.products,t=e.onAddToCart,a=e.windowSmall;return Object(ne.jsxs)(hn,{children:[Object(ne.jsxs)(mn,{children:[Object(ne.jsxs)(xn,{children:[Object(ne.jsx)("div",{className:"price",children:Object(ne.jsx)("h2",{children:"\xa335"})}),Object(ne.jsx)("div",{className:"purchase",children:n.length>-1&&Object(ne.jsx)(de,{products:n,onAddToCart:t})})]}),Object(ne.jsx)(gn,{children:Object(ne.jsx)("img",{src:rn,className:"left"})}),Object(ne.jsxs)(gn,{className:"right",children:[Object(ne.jsx)("img",{src:an}),Object(ne.jsx)("img",{src:cn})]})]}),Object(ne.jsxs)(On,{children:[Object(ne.jsxs)("h3",{children:["USB CASSETE TAPE\x03",Object(ne.jsx)("br",{}),"INSIDE INCLUDES\x03",Object(ne.jsx)("br",{}),"100+ IMAGES\x03"]}),Object(ne.jsx)("br",{}),a&&Object(ne.jsx)(dn,{windowSmall:a}),Object(ne.jsx)("br",{}),Object(ne.jsx)("h3",{children:"CLOSE TO HOME VOL 1"}),Object(ne.jsx)("p",{children:Object(ne.jsx)("b",{children:"Fashion mixtape"})}),Object(ne.jsx)("br",{}),Object(ne.jsx)("p",{children:"Northamptonshire brothers take inspiration from \u201cclose to home\u201d which is the history of Northampton shoe heritage, uncle Graham and Bauhaus. Garments take elements from dress shoes like such as wingtip trousers and broguing details on garments. Also, using leather Velcro patches to replicate punk badges. The shoes supplied by Converse include details found on dress shoes such as broguing, gimping, and thonging on the back tag. Another shoe has a full Velcro upper making it fully modular when applying the Velcro patches. The patches include NANG paintings, uncle Graham on tour, and bands who inspired the collection."}),Object(ne.jsx)("br",{}),Object(ne.jsxs)("p",{children:["The mixtapes consist of 6 songs which are Brogue Converse, Eyelet Converse, Velcro Converse, Resoleable Converse, Velcro blazer, Velcro trousers. Bonus tracks are wingtip trousers, a cobweb vest and a Velcro sweater. The collection is sustainable as the garments are made from recycled materials such as recycled nylon and footwear is made from remnants leathers from Northampton shoe factories such as Church\u2019s and footwear consists of other sustainable elements like using crepe rubber. Bobby who is an ex-apprentice at Church\u2019s learned his cordwaining skills. Nav Nangla interned at Yang Li where he furthered his skills and knowledge.",Object(ne.jsx)("br",{}),"The mixtape includes 100+ pages which have the process from research, making process, studio shots, product shots, and miscellaneous images. USB cassette tape included."]})]})]})},hn=Q.b.div(E||(E=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin: 0 auto;\n  color: #d5da89;\n  z-index: 1;\n"]))),mn=Q.b.div(N||(N=Object(D.a)(["\n  display: flex;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 40px;\n  max-width: 600px;\n  position: relative;\n  align-items: center;\n"]))),xn=Q.b.div(T||(T=Object(D.a)(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translateX(100%);\n\n  .price,\n  .purchase {\n    position: relative;\n    display: block;\n    margin-bottom: 40px;\n    &::after {\n      display: block;\n      position: absolute;\n      content: "";\n      background-image: url(',");\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 250%;\n      height: 250%;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      z-index: -1;\n    }\n  }\n  .purchase {\n    &::after {\n      transform: rotate(-180deg), translate(-50%, -50%);\n    }\n    &:hover {\n      svg {\n        path {\n          color: #b4b77e;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 800px) {\n    display: flex;\n    right: 20px;\n    transform: translateX(0%);\n    .price,\n    .purchase {\n      margin-bottom: 0px;\n      padding: 5px;\n      display: table;\n      &:after {\n        width: 90px;\n        height: 90px;\n      }\n    }\n    .price {\n      margin-right: 57px;\n      margin-top: 4px;\n    }\n  }\n"])),sn),On=Q.b.div(z||(z=Object(D.a)(["\n  display: block;\n  margin-top: 20px;\n  @media only screen and (max-width: 500px) {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n"]))),gn=Q.b.div(B||(B=Object(D.a)(["\n  width: 50%;\n  display: block;\n  img {\n    max-width: 100%;\n    padding: 10px;\n  }\n  &.right {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: vertical;\n    align-items: center;\n    justify-content: center;\n    margin-top: 25px;\n    @media only screen and (max-width: 500px) {\n      margin-top: 15px;\n    }\n  }\n"]))),fn=function(e){var n=e.location,t=Object(M.useState)(""),a=Object(W.a)(t,2),i=a[0],r=a[1];Object($.f)();return Object(M.useEffect)((function(){r(n.pathname)})),Object(ne.jsxs)(vn,{className:"".concat("/checkout"===i&&"dark"),children:[Object(ne.jsx)("h1",{children:"CLOSE TO HOME"}),Object(ne.jsxs)("p",{children:["FASHION MIXTAPE",Object(ne.jsx)("br",{}),"PRODUCED BY NAVINDER & BOBBY NANGLA"]})]})},vn=Q.b.div(A||(A=Object(D.a)(["\n  text-align: center;\n  h1 {\n    font-size: 30px;\n  }\n  p {\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 1.5;\n  }\n  margin-bottom: 30px;\n  color: #d5da89;\n  &.dark {\n    h1 {\n      font-size: 22px;\n    }\n    p {\n      font-weight: bold;\n      font-size: 0.7rem;\n    }\n    color: black;\n  }\n"]))),yn=t.p+"static/media/bg-comp.236aa0ee.jpg",wn=t.p+"static/media/bg-mobile-comp.eb255700.jpg",kn=t(97),Cn=function(){var e,n,t,a,i=[],r=0,c=function(){for(var e=n.createImageData(t,a),r=new Uint32Array(e.data.buffer),c=r.length,s=0;s<c;s++)Math.random()<.3&&(r[s]=4278190080);i.push(e)},s=function e(){9===r?r=0:r++,n.putImageData(i[r],0,0),window.setTimeout((function(){window.requestAnimationFrame(e)}),40)},o=function(){t=window.innerWidth,a=window.innerHeight,e.width=t,e.height=a;for(var n=0;n<10;n++)c();s()};(e=document.getElementById("noise"))&&(n=e.getContext("2d"),o())},Sn=function(){var e=Object(M.useState)([]),n=Object(W.a)(e,2),t=n[0],a=n[1],i=Object(M.useState)({}),r=Object(W.a)(i,2),c=r[0],s=r[1],o=Object(M.useState)({}),l=Object(W.a)(o,2),d=l[0],b=l[1],u=Object(M.useState)(""),j=Object(W.a)(u,2),p=j[0],h=j[1],m=Object(M.useState)(!1),x=Object(W.a)(m,2),O=x[0],g=x[1],f=function(){var e=Object(U.a)(H.a.mark((function e(){var n,t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.products.list();case 2:n=e.sent,t=n.data,a(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(U.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,G.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(U.a)(H.a.mark((function e(n,t){var a,i;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.cart.add(n,t);case 2:a=e.sent,i=a.cart,s(i);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),w=function(){var e=Object(U.a)(H.a.mark((function e(n,t){var a,i;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.cart.update(n,{quantity:t});case 2:a=e.sent,i=a.cart,s(i);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),k=function(){var e=Object(U.a)(H.a.mark((function e(n){var t,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.cart.remove(n);case 2:t=e.sent,a=t.cart,s(a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=Object(U.a)(H.a.mark((function e(){var n,t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.cart.empty();case 2:n=e.sent,t=n.cart,s(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(U.a)(H.a.mark((function e(){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.cart.refresh();case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(U.a)(H.a.mark((function e(n,t){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.checkout.capture(n,t);case 3:a=e.sent,b(a),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),h(e.t0),console.log(e.t0);case 11:S();case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}();Object(M.useEffect)((function(){Cn()}));var E=function(){var e=window.innerWidth;setTimeout((function(){g(e<800)}),500)};return Object(M.useEffect)((function(){return f(),v(),window.addEventListener("resize",E),E(),function(){return window.removeEventListener("resize",E)}}),[]),Object(ne.jsx)(ee.a,{children:Object(ne.jsxs)(_n,{children:[Object(ne.jsx)(Tn,{}),Object(ne.jsx)(te,{totalItems:c.total_items}),Object(ne.jsx)($.c,{children:Object(ne.jsx)($.a,{render:function(e){var n=e.location;return["/","/basket"].includes(n.pathname)?Object(ne.jsxs)(kn.Parallax,{blur:0,className:"".concat(Ze.isMobile&&"mobile"),bgImage:"".concat(Ze.isMobile?wn:yn),strength:1e3,children:["/"===n.pathname&&!O&&Object(ne.jsx)(dn,{windowSmall:O}),Object(ne.jsx)(Nn,{id:"noise"}),Object(ne.jsxs)(En,{children:[Object(ne.jsx)(fn,{location:n}),Object(ne.jsxs)($.c,{children:[Object(ne.jsx)($.a,{exact:!0,path:"/",children:Object(ne.jsx)(pn,{windowSmall:O,products:t,onAddToCart:y})}),Object(ne.jsx)($.a,{exact:!0,path:"/basket",children:Object(ne.jsx)(me,{cart:c,handleUpdateCartQty:w,handleRemoveFromCart:k,handleEmptyCart:C})})]})]})]}):Object(ne.jsx)(En,{children:Object(ne.jsxs)($.a,{exact:!0,path:"/checkout",children:[Object(ne.jsx)(fn,{location:n}),Object(ne.jsx)(en,{cart:c,order:d,onCaptureCheckout:_,error:p})]})})}})})]})})},_n=Q.b.div(q||(q=Object(D.a)(["\n  max-width: 100vw;\n  background: transparent;\n\n  .react-parallax-bgimage {\n    max-height: 250vh !important;\n    z-index: -2;\n  }\n"]))),En=Q.b.div(F||(F=Object(D.a)(["\n  padding: 50px 30px 100px 30px;\n  margin: 0 auto;\n  max-width: 700px;\n  position: relative;\n  z-index: 1;\n  @media only screen and (max-width: 500px) {\n    padding: 80px 10px 100px 10px;\n  }\n"]))),Nn=Q.b.canvas(I||(I=Object(D.a)(["\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n"]))),Tn=Object(Q.a)(L||(L=Object(D.a)(['\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: "helvetica", "arial", san-serif;\n    line-height: 1.3;\n    font-size: 18px;\n    \n    body{\n      background-color: black;\n    }\n\n    a,a:visited{\n      color: inherit;\n    }\n    button{\n      -webkit-tap-highlight-color: transparent;\n      color: black;\n    }\n\n\n\n    h1{\n      font-size: 1.7rem;\n      line-height: 1.8rem;\n    }\n    h2{\n      font-size: 1.2rem;\n      line-height: 1.3rem;\n    }\n    @media only screen and (max-width: 500px) {\n        h1{\n        font-size: 1.5rem;\n        line-height: 1.6rem;\n      }\n      h2{\n        font-size: 1rem;\n        line-height: 1.1rem;\n      }\n        font-size: 17px;\n      }\n    }\n'])));R.a.render(Object(ne.jsx)(Sn,{}),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.429ae485.chunk.js.map