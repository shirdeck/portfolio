(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{45:function(A,e,c){},46:function(A,e,c){},47:function(A,e,c){},57:function(A,e,c){"use strict";c.r(e);var n=c(1),a=c(0),t=c.n(a),s=c(8),r=c.n(s),i=(c(45),c(22)),o=(c(46),c(32)),l=c(4);var g=[320,280],j=[[8,7],[8,8]],b=[8,3],d=20,w={38:[0,-1],40:[0,1],37:[-1,0],39:[1,0]},B=function(){var A=Object(a.useRef)(),e=Object(a.useState)(j),c=Object(l.a)(e,2),t=c[0],s=c[1],r=Object(a.useState)(b),i=Object(l.a)(r,2),B=i[0],u=i[1],C=Object(a.useState)([0,-1]),h=Object(l.a)(C,2),m=h[0],D=h[1],E=Object(a.useState)(null),Q=Object(l.a)(E,2),x=Q[0],p=Q[1],O=Object(a.useState)(!1),I=Object(l.a)(O,2),f=I[0],v=I[1],N=Object(a.useState)(!0),M=Object(l.a)(N,2),y=M[0],Y=M[1];!function(A,e){var c=Object(a.useRef)();Object(a.useEffect)((function(){c.current=A}),[A]),Object(a.useEffect)((function(){if(null!==e){var A=setInterval((function(){c.current()}),e);return function(){return clearInterval(A)}}}),[e])}((function(){return P()}),x);var F=function(){return B.map((function(A,e){return Math.floor(Math.random()*(g[e]/d))}))},H=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;if(A[0]*d>=g[0]||A[0]<0||A[1]*d>=g[1]||A[1]<0)return!0;var c,n=Object(o.a)(e);try{for(n.s();!(c=n.n()).done;){var a=c.value;if(A[0]===a[0]&&A[1]===a[1])return!0}}catch(s){n.e(s)}finally{n.f()}return!1},P=function(){var A=JSON.parse(JSON.stringify(t)),e=[A[0][0]+m[0],A[0][1]+m[1]];A.unshift(e),H(e)&&(p(null),v(!0),Y(!0)),function(A){if(A[0][0]===B[0]&&A[0][1]===B[1]){for(var e=F();H(e,A);)e=F();return u(e),!0}return!1}(A)||A.pop(),s(A)};return Object(a.useEffect)((function(){var e=A.current.getContext("2d");e.setTransform(d,0,0,d,0,0),e.clearRect(0,0,window.innerWidth,window.innerHeight),e.fillStyle="black",t.forEach((function(A){var c=Object(l.a)(A,2),n=c[0],a=c[1];return e.fillRect(n,a,1,1)})),e.fillStyle="#ff8100",e.fillRect(B[0],B[1],1,1)}),[t,B,f]),Object(n.jsxs)("div",{role:"button",style:{outline:"none",border:"none"},tabIndex:"0",onKeyDown:function(A){return function(A){var e=A.keyCode;return e>=37&&e<=40&&D(w[e])}(A)},children:[Object(n.jsx)("canvas",{style:{outline:"none",border:"none"},id:"snakeGame",ref:A,width:"".concat(g[0],"px"),height:"".concat(g[1],"px")}),f&&Object(n.jsxs)("div",{className:"gameover",children:[Object(n.jsx)("span",{className:"char1",children:"T"}),Object(n.jsx)("span",{className:"char2",children:"R"}),Object(n.jsx)("span",{className:"char3",children:"Y"}),Object(n.jsx)("span",{className:"char4",children:" "}),Object(n.jsx)("span",{className:"char5",children:"A"}),Object(n.jsx)("span",{className:"char6",children:"G"}),Object(n.jsx)("span",{className:"char7",children:"A"}),Object(n.jsx)("span",{className:"char8",children:"I"}),Object(n.jsx)("span",{className:"char9",children:"N"}),Object(n.jsx)("span",{className:"char10",children:"!"})]}),y&&Object(n.jsx)("div",{className:"button",onClick:function(){s(j),u(b),D([0,-1]),p(200),Y(!1),v(!1)},children:"play"})]})},u=(c(47),function(){return Object(n.jsxs)("ul",{className:"c-rainbow",children:[Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--white",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--orange",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--red",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--violet",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--blue",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--green",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--yellow",children:"Web Developer"})]})}),C=function(){return Object(n.jsxs)("ul",{className:"c-rainbow",children:[Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--white",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--orange",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--red",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--violet",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--blue",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--green",children:"Web Developer"}),Object(n.jsx)("li",{className:"c-rainbow__layer c-rainbow__layer--yellow",children:"Web Developer"})]})},h=c(33),m=c.n(h);function D(A){A.preventDefault(),m.a.sendForm("service_4hjyq7y","template_bjpmrmh",A.target,"user_x4R5WsosTxiWIwL0dKNEd").then((function(A){alert("Your mail has been sent successfuly! I'll get back to you shortly...")}),(function(A){console.log(A.text)}))}var E=c(34),Q=c.p+"static/media/oops.82bd378c.mp3";function x(){var A=Object(E.a)(Q,{volume:.5}),e=Object(l.a)(A,2),c=e[0],a=(e[1].stop,t.a.useState(!1)),s=Object(l.a)(a,2),r=(s[0],s[1]),o=Object(i.useMediaQuery)({maxWidth:1260});return o?Object(n.jsxs)("form",{className:"contact-form",onSubmit:D,children:[Object(n.jsx)("div",{className:"headline",children:Object(n.jsx)("p",{children:"!let's talk!"})}),Object(n.jsxs)("div",{className:"grid",children:[Object(n.jsxs)("div",{className:"head",children:[Object(n.jsx)("input",{type:"text",name:"user_name",placeholder:"NAME",required:!0}),Object(n.jsx)("input",{type:"email",name:"user_email",placeholder:"EMAIL",required:!0})]}),Object(n.jsxs)("div",{className:"body",children:[Object(n.jsx)("textarea",{placeholder:o?"Type your message...":"HEY SHIR...",name:"message",required:!0}),Object(n.jsx)("input",{type:"submit",value:"SEND",onMouseDown:function(){r(!0),c()}})]})]})]}):Object(n.jsxs)("form",{className:"contact-form",onSubmit:D,children:[Object(n.jsx)("div",{className:"headline",children:Object(n.jsx)("p",{children:"!let's talk!"})}),Object(n.jsxs)("div",{className:"head",children:[Object(n.jsx)("input",{className:"name",type:"text",name:"user_name",placeholder:"NAME",required:!0}),Object(n.jsx)("input",{type:"email",name:"user_email",placeholder:"EMAIL",required:!0})]}),Object(n.jsxs)("div",{className:"body",children:[Object(n.jsx)("textarea",{placeholder:o?"Type your message...":"HEY SHIR...",name:"message",required:!0}),Object(n.jsx)("input",{type:"submit",value:"SEND",onMouseDown:function(){r(!0),c()}})]})]})}var p="data:image/png;base64,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",O=c.p+"static/media/github.4b99d1ff.png",I=c.p+"static/media/github-orange.fcf4504e.png",f=function(){var A=Object(a.useState)(p),e=Object(l.a)(A,2),c=e[0],t=e[1],s=Object(a.useState)(O),r=Object(l.a)(s,2),i=r[0],o=r[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/shirdecker",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:c,onMouseEnter:function(){return t("data:image/png;base64,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")},onMouseLeave:function(){return t(p)},alt:""})}),Object(n.jsx)("a",{href:"https://github.com/shirdeck",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:i,onMouseEnter:function(){return o(I)},onMouseLeave:function(){return o(O)},alt:""})})]})};onmouseover="this.src='http://icons.iconarchive.com/icons/fasticon/angry-birds/128/red-bird-icon.png'",onmouseout="this.src='http://icons.iconarchive.com/icons/fasticon/angry-birds/128/yellow-bird-icon.png'";var v=c.p+"static/media/web-icon.5b3b3836.png",N=c.p+"static/media/memoji.e3b43792.png",M=c(73),y=c(76),Y=c(78),F=c(77),H=c.p+"static/media/shir.5595038b.png",P=Object(M.a)((function(A){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:A.palette.background.paper,border:"5px solid black",boxShadow:A.shadows[5],padding:A.spacing(2,4,3),outline:"none",height:"500px",width:"700px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",lineHeight:"27px",textAlign:"center",fontFamily:"'Open Sans', sans-serif",fontSize:"17px"}}}));function k(){var A=P(),e=t.a.useState(!1),c=Object(l.a)(e,2),a=c[0],s=c[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"about-title",onClick:function(){s(!0)},children:"about me"}),Object(n.jsx)(y.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:A.modal,open:a,onClose:function(){s(!1)},closeAfterTransition:!0,BackdropComponent:Y.a,BackdropProps:{timeout:500},children:Object(n.jsx)(F.a,{in:a,children:Object(n.jsxs)("div",{className:A.paper,children:[Object(n.jsx)("img",{src:H,alt:"",className:"shir"}),Object(n.jsxs)("p",{children:["Hello there!",Object(n.jsx)("br",{}),"I'm Shir, a web developer looking to continue his professional journey and growth.",Object(n.jsx)("br",{}),"During the last two years, I worked for ironSource where I used HTML/CSS/JS to build diverse and responsive web applications for a variety of clients and also used technologies such as React.js and Node.js through working on internally used efficiency tools and projects.",Object(n.jsx)("br",{}),"With a strong design background, a friendly attitude, and an ambitious drive, I like problem-solving through research and collaborations and would love to set new goals and dive headfirst into a new role.",Object(n.jsx)("br",{}),"I Would love to talk and tell you more about myself,",Object(n.jsx)("br",{}),"Shir Decker"]})]})})})]})}var G=c.p+"static/media/CV-ShirDecker.e2186656.pdf",J=Object(M.a)((function(A){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:A.palette.background.paper,border:"5px solid black",boxShadow:A.shadows[5],padding:A.spacing(2,4,3),outline:"none",height:"707px",width:"500px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",lineHeight:"27px",textAlign:"center",fontFamily:"'Open Sans', sans-serif",fontSize:"17px"}}}));function U(){var A=J(),e=t.a.useState(!1),c=Object(l.a)(e,2),a=c[0],s=c[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"about-title",onClick:function(){s(!0)},children:"my cv"}),Object(n.jsx)(y.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:A.modal,open:a,onClose:function(){s(!1)},closeAfterTransition:!0,BackdropComponent:Y.a,BackdropProps:{timeout:500},children:Object(n.jsx)(F.a,{in:a,children:Object(n.jsx)("div",{className:A.paper,children:Object(n.jsx)("embed",{src:G,width:"100%",height:"100%"})})})})]})}var L=c(28),S=c(5);var T=function(){var A=Object(i.useMediaQuery)({query:"(min-width: 1261px)"}),e=Object(i.useMediaQuery)({query:"(max-width: 1260px)"});return Object(n.jsxs)("div",{className:"grid-container",children:[A&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("img",{src:v,alt:"web-icon"})}),Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("span",{children:"Hi, I'm Shir Decker..."})}),Object(n.jsx)(k,{}),Object(n.jsx)(U,{}),Object(n.jsxs)(L.a,{children:[Object(n.jsx)(L.b,{to:"/jff",className:"jff-title",children:"just for fun"}),Object(n.jsx)(S.c,{children:Object(n.jsx)(S.a,{path:"/jff",children:Object(n.jsx)(C,{})})})]}),Object(n.jsx)("div",{className:"ticker",children:Object(n.jsx)(u,{})}),Object(n.jsx)("div",{className:"snake",children:Object(n.jsx)(B,{})}),Object(n.jsx)("div",{className:"memoji",children:Object(n.jsx)("img",{src:N,alt:"memoji"})}),Object(n.jsx)("div",{className:"projects",children:"SOON"}),Object(n.jsx)("div",{className:"jff",children:"SOON"}),Object(n.jsx)("div",{className:"contact",children:Object(n.jsx)(x,{})}),Object(n.jsx)("div",{className:"links",children:Object(n.jsx)(f,{})})]}),e&&Object(n.jsxs)("div",{class:"mobile",children:[Object(n.jsxs)("div",{className:"title-container",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("img",{src:v,alt:"web-icon"})}),Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("span",{children:"Shir Decker"})})]}),Object(n.jsxs)("div",{class:"about",children:[Object(n.jsxs)("div",{className:"column",children:[Object(n.jsx)("div",{className:"mobile-about-me",children:"about me"}),Object(n.jsx)("div",{className:"mobile-cv",children:"my cv"})]}),Object(n.jsx)("div",{className:"memoji",children:Object(n.jsx)("img",{src:N,alt:"memoji"})})]}),Object(n.jsx)("div",{className:"contact",children:Object(n.jsx)(x,{})}),Object(n.jsx)("div",{className:"links",children:Object(n.jsx)(f,{})})]})]})},W=function(A){A&&A instanceof Function&&c.e(4).then(c.bind(null,80)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,t=e.getLCP,s=e.getTTFB;c(A),n(A),a(A),t(A),s(A)}))};r.a.render(Object(n.jsx)(t.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),W()}},[[57,1,2]]]);
//# sourceMappingURL=main.d48cc27d.chunk.js.map