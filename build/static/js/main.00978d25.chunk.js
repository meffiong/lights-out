(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),s=(n(15),n(9)),i=n(1),l=n(2),u=n(6),h=n(4),p=n(5),d=n(3),f=(n(16),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),b=(n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nrows;t++){for(var n=[],a=0;a<this.props.ncols;a++)n.push(Math.random()<this.props.chanceLightStartsOn);e.push(n)}return e}},{key:"flipCellsAroundMe",value:function(e){var t=this.props,n=t.nrows,a=t.ncols,r=this.state.board,o=e.split("-").map(Number),c=Object(s.a)(o,2),i=c[0],l=c[1];function u(e,t){t>=0&&t<a&&e>=0&&e<n&&(r[e][t]=!r[e][t])}u(l,i),u(l,i-1),u(l,i+1),u(l-1,i),u(l+1,i);this.setState({board:r,hasWon:!1})}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<this.props.nrows;n++){for(var a=[],o=function(t){var o="".concat(n,"-").concat(t);a.push(r.a.createElement(f,{key:o,isLit:e.state.board[t][n],flipCellsAroundMe:function(){return e.flipCellsAroundMe(o)}}))},c=0;c<this.props.ncols;c++)o(c);t.push(r.a.createElement("tr",{key:n},a))}return r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,t))}}]),t}(a.Component));b.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.25};var m=b;n(18);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.00978d25.chunk.js.map