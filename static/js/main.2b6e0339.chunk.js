(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(10),i=n.n(r),s=(n(16),n(5)),u=(n(17),n(2)),d=n(3),l=n(7),h=n(4),f=(n(18),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={},a}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.row,n=t.col,c=t.isStart,o=t.isEnd?"node-end":c?"node-start":"";return Object(a.jsx)("div",{id:"node-".concat(e,"-").concat(n),className:"node ".concat(o)})}}]),n}(c.Component)),v=n(9);function j(t,e,n){!function(t,e){var n,a=e.row+e.col,c=Object(v.a)(t);try{for(c.s();!(n=c.n()).done;){var o,r=n.value,i=Object(v.a)(r);try{for(i.s();!(o=i.n()).done;){var s=o.value;s.dist=Math.pow(a-(Math.abs(e.row-s.row)+Math.abs(e.col-s.col)),10)}}catch(u){i.e(u)}finally{i.f()}}}catch(u){c.e(u)}finally{c.f()}}(t,n);for(var a=[],c=e;c!==n;)for(var o=b(c,t),r=Object(s.a)(o,2),i=r[0],u=r[1],d=u[u.length-1],l=Math.random()*d,h=0;h<u.length;h++)if(l<=u[h]){c=i[h],a.push(c);break}return a}function b(t,e){var n=[],a=[],c=t.row,o=t.col,r=0;return c>0&&(n.push(e[c-1][o]),r+=e[c-1][o].dist,a.push(r)),c<e.length-1&&(n.push(e[c+1][o]),r+=e[c+1][o].dist,a.push(r)),o>0&&(n.push(e[c][o-1]),r+=e[c][o-1].dist,a.push(r)),o<e[0].length-1&&(n.push(e[c][o+1]),r+=e[c][o+1].dist,a.push(r)),[n,a]}n(19);var p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={grid:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=O();this.setState({grid:t})}},{key:"visualizeNematode",value:function(){var t=this.state.grid,e=j(t,t[0][0],t[19][49]);this.animateNematode(e)}},{key:"animateNematode",value:function(t){for(var e=function(e){var n=t[e];setTimeout((function(){document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-visited"}),50*(e+1)-50),setTimeout((function(){document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-seen"}),50*(e+1)-25)},n=0;n<t.length-1;n++)e(n)}},{key:"render",value:function(){var t=this,e=this.state.grid;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:function(){return t.visualizeNematode()},children:"Visualize Nematode"}),Object(a.jsx)("div",{className:"grid",children:e.map((function(t,e){return Object(a.jsx)("div",{children:t.map((function(t,e){var n=t.row,c=t.col,o=t.isStart,r=t.isEnd;return Object(a.jsx)(f,{row:n,col:c,isStart:o,isEnd:r},e)}))},e)}))})]})}}]),n}(c.Component),m=function(t,e){return{row:t,col:e,isStart:0===t&&0===e,isEnd:19===t&&49===e,dist:1/0}},O=function(){for(var t=[],e=0;e<20;e++){for(var n=[],a=0;a<50;a++)n.push(m(e,a));t.push(n)}return t};var g=function(){var t=Object(c.useState)(0),e=Object(s.a)(t,2),n=e[0],o=e[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("button",{onClick:function(){o(n+1)},children:"Reset"}),Object(a.jsx)(p,{},n)]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),y()}},[[20,1,2]]]);
//# sourceMappingURL=main.2b6e0339.chunk.js.map