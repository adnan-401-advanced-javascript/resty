(this.webpackJsonplab26=this.webpackJsonplab26||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n.n(o),c=(n(18),n(19),n(1)),u=n(2),s=n(4),i=n(3),h=(n(20),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"RESTy"))}}]),n}(a.Component)),m=n(6),d=n.n(m),p=n(12),E=n(9),f=n(10),b=n(11),v=n.n(b),g=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(e){return r.a.createElement(v.a,{json:this.props.json})}}]),n}(a.Component),j=(n(107),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).fetchData=function(){console.log("fetch",a.state.method,a.state.url),fetch(a.state.url,{method:a.state.method||"get",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(f.a)(d.a.mark((function e(t){var n,r,o,l,c,u,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},r=Object(E.a)(t.headers.entries());try{for(r.s();!(o=r.n()).done;)l=Object(p.a)(o.value,2),c=l[0],u=l[1],n[c]=u}catch(i){r.e(i)}finally{r.f()}return e.next=5,t.json();case 5:s=e.sent,a.setState({responseJson:{Headers:n,Response:s}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},a.onChangeMethod=function(e){return a.setState({method:e.target.value})},a.onChangeUrl=function(e){return a.setState({url:e.target.value})},a.printUrlAndMethod=function(e){e.preventDefault(),a.setState({goMethod:a.state.method}),a.setState({goUrl:a.state.url}),a.fetchData()},a.state={method:"",url:"",goMethod:"",goUrl:"",responseJson:{}},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.printUrlAndMethod,className:"form"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"http://",onChange:this.onChangeUrl}),r.a.createElement("br",null),r.a.createElement("input",{checked:!0,type:"radio",value:"GET",name:"method",onChange:this.onChangeMethod}),r.a.createElement("label",{htmlFor:"GET"},"GET"),r.a.createElement("input",{type:"radio",value:"POST",name:"method",onChange:this.onChangeMethod}),r.a.createElement("label",{htmlFor:"POST"},"POST"),r.a.createElement("input",{type:"radio",value:"PUT",name:"method",onChange:this.onChangeMethod}),r.a.createElement("label",{htmlFor:"PUT"},"PUT"),r.a.createElement("input",{type:"radio",value:"DELETE",name:"method",onChange:this.onChangeMethod}),r.a.createElement("label",{htmlFor:"DELETE"},"DELETE"),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Go")),r.a.createElement("div",null,r.a.createElement("span",null,this.state.goMethod," \xa0 ",this.state.goUrl," ")),r.a.createElement("div",{style:{float:"left"}},r.a.createElement(g,{json:this.state.responseJson})))}}]),n}(a.Component)),O=(n(108),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"})}}]),n}(a.Component));var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement(j,null)),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},13:function(e,t,n){e.exports=n(109)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.a23709f6.chunk.js.map