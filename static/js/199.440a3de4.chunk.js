"use strict";(self.webpackChunkreact_film_library=self.webpackChunkreact_film_library||[]).push([[199],{3020:function(n,t,e){e.d(t,{M1:function(){return x},QO:function(){return u},gH:function(){return p},t2:function(){return d},tx:function(){return m}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243),o="https://api.themoviedb.org/3",s="048dfb7517a31fb5a77ea118ba208738";function u(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(c().mark((function n(){var t,e,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e="".concat(o,"/trending/all/day?api_key=").concat(s,"&page=").concat(t),n.next=4,i.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t),n.next=3,i.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"?api_key=").concat(s),n.next=3,i.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s),n.next=3,i.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s),n.next=3,i.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},199:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r,a,c,i,o,s,u,l,p,f,d,h=e(5861),x=e(9439),g=e(4687),m=e.n(g),v=e(2791),y=e(7689),Z=e(3020),j=e(168),k=e(5706),b=e(1087),w=k.Z.div(r||(r=(0,j.Z)(["\n  display: flex;\n  padding: 15px;\n"]))),_=k.Z.div(a||(a=(0,j.Z)(["\n  margin-left: 20px;\n"]))),z=k.Z.ul(c||(c=(0,j.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),R=k.Z.li(i||(i=(0,j.Z)([""]))),C=k.Z.img(o||(o=(0,j.Z)(["\n  width: 300px;\n"]))),O=(0,k.Z)(b.rU)(s||(s=(0,j.Z)(["\n  text-decoration: none;\n  font-family: sans-serif;\n  color: darkslategray;\n  font-size: 18px;\n"]))),U=(0,k.Z)(b.rU)(u||(u=(0,j.Z)(["\n  display: inline-block;\n  height: 20px;\n  text-decoration: none;\n  border: 1px solid darkslategray;\n  border-radius: 3px;\n  cursor: pointer;\n  outline: none;\n  width: 45px;\n  text-align: center;\n  margin-top: 10px;\n  margin-left: 15px;\n\n  &:hover,\n  &:focus {\n    background-color: darkslategray;\n    color: white;\n  }\n"]))),F=k.Z.ul(l||(l=(0,j.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),H=k.Z.h2(p||(p=(0,j.Z)(["\n  font-family: sans-serif;\n  color: darkslategray;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  font-size: 30px;\n"]))),S=k.Z.h3(f||(f=(0,j.Z)(["\n  font-family: sans-serif;\n  color: darkslategray;\n  margin-top: 0;\n  margin-bottom: 5px;\n  font-size: 18px;\n"]))),q=k.Z.p(d||(d=(0,j.Z)(["\n  font-family: sans-serif;\n  color: darkslategray;\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 18px;\n"]))),B=e(6445),E=e(9419),G=e(184),I=function(){var n,t,e=(0,y.UO)().movieId,r=(0,v.useState)({}),a=(0,x.Z)(r,2),c=a[0],i=a[1],o=(0,y.TH)(),s=(0,v.useRef)(null!==(n=null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");(0,v.useEffect)((function(){var n=function(){var n=(0,h.Z)(m().mark((function n(){var t;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,Z.t2)(e);case 3:t=n.sent,i(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]);var u=c.genres;return console.log(c),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(U,{to:s.current,children:"Back "}),(0,G.jsxs)(w,{children:[(0,G.jsx)(C,{src:c.poster_path?"https://image.tmdb.org/t/p/w300".concat(c.poster_path):E,alt:c.title||c.name}),(0,G.jsxs)(_,{children:[(0,G.jsx)(H,{children:c.title||c.name}),(0,G.jsx)(S,{children:"Release"}),(0,G.jsxs)(q,{children:[" ",c.release_date]}),(0,G.jsx)(S,{children:"Overview"}),(0,G.jsxs)(q,{children:[" ",c.overview]}),(0,G.jsx)(S,{children:"Genres"}),(0,G.jsx)(F,{children:u?u.map((function(n){return(0,G.jsx)("li",{children:(0,G.jsx)(q,{children:n.name})},n.id)})):(0,G.jsx)("p",{children:"no genres"})}),(0,G.jsx)(S,{children:"Runtime"}),(0,G.jsxs)(q,{children:[" ",c.runtime," min"]})]})]}),(0,G.jsxs)(z,{children:[(0,G.jsx)(R,{children:(0,G.jsx)(O,{to:"cast",children:"Cast"})}),(0,G.jsx)(R,{children:(0,G.jsx)(O,{to:"reviews",children:"Rewies"})})]}),(0,G.jsx)(v.Suspense,{fallback:(0,G.jsx)(B.a,{}),children:(0,G.jsx)(y.j3,{})})]})}},9419:function(n,t,e){n.exports=e.p+"static/media/noFoto.47b950d4f6a1dd386722.jpg"}}]);
//# sourceMappingURL=199.440a3de4.chunk.js.map