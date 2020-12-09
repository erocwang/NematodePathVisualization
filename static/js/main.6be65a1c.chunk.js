(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(1),a=t.n(r),s=t(11),c=t.n(s),u=(t(17),t(6)),i=(t(18),t(10)),l=t(2),d=t(3),f=t(5),m=t(4),h=(t(19),function(e){Object(f.a)(t,e);var n=Object(m.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=n.call(this,e)).state={},o}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,n=e.row,t=e.col,r=e.isStart,a=e.isEnd,s=e.isWall,c=e.onMouseDown,u=e.onMouseEnter,i=e.onMouseUp,l=a?"node-end":r?"node-start":s?"node-wall":"";return Object(o.jsx)("div",{id:"node-".concat(n,"-").concat(t),className:"node ".concat(l),onMouseDown:function(){return c(n,t)},onMouseEnter:function(){return u(n,t)},onMouseUp:function(){return i()}})}}]),t}(r.Component)),v=(t(20),function(e){Object(f.a)(t,e);var n=Object(m.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=n.call(this,e)).state={},o}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.tag,n="AWC"===e?"neuron":"inter-neuron";return Object(o.jsx)("div",{id:"neuron-".concat(e),className:"".concat(n),children:e})}}]),t}(r.Component)),j=t(9);function b(e,n,t){!function(e,n){var t,o=Object(j.a)(e);try{for(o.s();!(t=o.n()).done;){var r,a=t.value,s=Object(j.a)(a);try{for(s.s();!(r=s.n()).done;){var c=r.value;c.dist=Math.abs(n.row-c.row)+Math.abs(n.col-c.col)}}catch(u){s.e(u)}finally{s.f()}}}catch(u){o.e(u)}finally{o.f()}}(e,t);for(var o=[],r=n,a=1e3;r!==t&&a;){a--;for(var s=g(r,e,t),c=Object(u.a)(s,2),i=c[0],l=c[1],d=l[l.length-1],f=Math.random()*d,m=0;m<l.length;m++)if(f<=l[m]){r=i[m],o.push(r);break}}return o}function g(e,n,t){for(var o=[],r=[],a=[[1,0],[-1,0],[0,-1],[0,1]],s=0,c=0,u=0;u<4;u++){var i=e.row+a[u][0],l=e.col+a[u][1];i>=0&&i<=n.length-1&&l>=0&&l<=n[0].length-1&&!n[i][l].isWall&&(o.push(n[i][l]),s+=Math.pow(n[i][l].dist,10),n[i][l].dist>e.dist?r.push((50-n[i][l].dist)/2):r.push(50-n[i][l].dist),c+=r[r.length-1])}for(var d=0,f=0;f<o.length;f++)d+=r[f]/c*s,r[f]=d;return[o,r]}t(21);var p=function(e){Object(f.a)(t,e);var n=Object(m.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=n.call(this,e)).state={grid:[],circuit:[],mouseIsPressed:!1},o}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=y(),n=N();this.setState({grid:e,circuit:n})}},{key:"handleMouseDown",value:function(e,n){var t=E(this.state.grid,e,n);this.setState({grid:t,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,n){if(this.state.mouseIsPressed){var t=E(this.state.grid,e,n);this.setState({grid:t})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"reset",value:function(){for(var e=0;e<20;e++)for(var n=0;n<50;n++)10===e&&10===n||10===e&&40===n||(document.getElementById("node-".concat(e,"-").concat(n)).className="node");document.getElementById("neuron-AWC").className="neuron",document.getElementById("neuron-AIB").className="inter-neuron",document.getElementById("neuron-AIY").className="inter-neuron"}},{key:"floodVisualize",value:function(){for(var e=0;e<10;e++)this.visualizeNematode()}},{key:"visualizeNematode",value:function(){var e=this.state.grid,n=b(e,e[10][10],e[10][40]);this.animateNematode(n)}},{key:"animateNematode",value:function(e){for(var n=function(n){var t=e[n],o=0===n?1e3:e[n-1].dist;setTimeout((function(){10===t.row&&40===t.col||(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"),t.dist>o?(document.getElementById("neuron-AWC").className="neuron green",document.getElementById("neuron-AIB").className="inter-neuron red",document.getElementById("neuron-AIY").className="inter-neuron off"):(document.getElementById("neuron-AWC").className="neuron off",document.getElementById("neuron-AIB").className="inter-neuron off",document.getElementById("neuron-AIY").className="inter-neuron blue")}),50*(n+1)-50),setTimeout((function(){document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-seen"}),50*(n+1)-25)},t=1;t<e.length-1;t++)n(t)}},{key:"render",value:function(){var e=this,n=this.state,t=n.grid,r=n.circuit,a=n.mouseIsPressed;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"back",children:[Object(o.jsxs)("div",{className:"navigation",children:[Object(o.jsx)("button",{class:"button1",onClick:function(){return e.visualizeNematode()},children:"Visualize Nematode"}),Object(o.jsx)("button",{class:"button1",onClick:function(){return e.floodVisualize()},children:"Flood!"}),Object(o.jsx)("button",{class:"button1",onClick:function(){return e.reset()},children:"Reset"})]}),Object(o.jsx)("div",{className:"grid",children:t.map((function(n,t){return Object(o.jsx)("div",{children:n.map((function(n,t){var r=n.row,s=n.col,c=n.isStart,u=n.isEnd,i=n.isWall;return Object(o.jsx)(h,{row:r,col:s,isStart:c,isEnd:u,isWall:i,mouseIsPressed:a,onMouseDown:function(n,t){return e.handleMouseDown(n,t)},onMouseEnter:function(n,t){return e.handleMouseEnter(n,t)},onMouseUp:function(){return e.handleMouseUp()}},t)}))},t)}))}),Object(o.jsx)("div",{className:"circuit",children:r.map((function(e,n){return Object(o.jsx)("div",{className:"container",children:e.map((function(e,n){var t=e.tag;return Object(o.jsx)(v,{tag:t},n)}))},n)}))})]})})}}]),t}(r.Component),O=function(e,n){return{row:e,col:n,isStart:10===e&&10===n,isEnd:10===e&&40===n,dist:1/0}},y=function(){for(var e=[],n=0;n<20;n++){for(var t=[],o=0;o<50;o++)t.push(O(n,o));e.push(t)}return e},I=function(e){return{tag:e}},N=function(){var e=[],n=[];n.push(I("AWC"));var t=[];return t.push(I("AIB")),t.push(I("AIY")),e.push(n),e.push(t),e},E=function(e,n,t){var o=e.slice(),r=o[n][t],a=Object(i.a)(Object(i.a)({},r),{},{isWall:!r.isWall});return o[n][t]=a,o};var M=function(){var e=Object(r.useState)(0),n=Object(u.a)(e,2),t=n[0];return n[1],Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(p,{},t)})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),o(e),r(e),a(e),s(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),w()}],[[22,1,2]]]);
//# sourceMappingURL=main.6be65a1c.chunk.js.map