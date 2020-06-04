(this["webpackJsonpbudget-app"]=this["webpackJsonpbudget-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),o=(n(16),n(3)),l=n(6),u=n(7),s=n(10),m=n(8),p=(n(17),n(18),function(e){var t=new Date,n=t.getDay(),a=t.getDate(),c=t.getFullYear();return r.a.createElement("div",{className:"top-div"},r.a.createElement("div",{className:"top-date"},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n]," ",a,", ",c),r.a.createElement("div",{className:"top-amount",onChange:e.changed},"Balance: $",e.total.toLocaleString()))}),d=(n(19),function(e){return r.a.createElement("div",{className:"inputBar-div"},r.a.createElement("select",{className:"selectType",value:e.type,onChange:e.changeType},r.a.createElement("option",{value:"income",id:"income",className:"optionValue"},"income"),r.a.createElement("option",{value:"expense",id:"expense",className:"optionValue"},"expense")),r.a.createElement("input",{type:"text",className:"inputBar-description ".concat("income"===e.type?"incomeStyle":"expenseStyle"),placeholder:"description",value:e.description,onChange:e.changeDescription}),r.a.createElement("input",{type:"number",className:"inputBar-input ".concat("income"===e.type?"incomeStyle":"expenseStyle"),placeholder:"$ amount",value:e.value,onChange:e.changeValue}),r.a.createElement("button",{className:"inputBar-btn ".concat("income"===e.type?"incomeStyle":"expenseStyle"),value:"addBtn",onClick:e.clicked},"add"))}),v=(n(20),n(9)),f=function(e){var t=function(e){return e.split("").reverse().map((function(e,t){return t%3===0&&0!==t?e="".concat(e,","):e})).reverse().join("")},n=(e=+e).toString();if(n.includes(".")){var a=n.split("."),r=Object(v.a)(a,2),c=r[0],i=r[1];return t(c).concat(".".concat(i))}return t(n)},y=function(e){var t=e.iArr.map((function(t,n){return r.a.createElement("li",{key:n},t.description,": $",f(t.value)," ",r.a.createElement("button",{className:"removeItem",onClick:function(n){return e.deleteItem(n,t.id)}},"x"))})),n=e.eArr.map((function(t,n){return r.a.createElement("li",{key:n},t.description,": $",f(t.value)," ",r.a.createElement("button",{className:"removeItem",onClick:function(n){return e.deleteItem(n,t.id)}},"x"))}));return r.a.createElement("div",{className:"listContainer"},r.a.createElement("div",{className:"list"},r.a.createElement("h1",null,"Income"),r.a.createElement("ul",null,t)),r.a.createElement("div",{className:"list"},r.a.createElement("h1",null,"Expense"),r.a.createElement("ul",null,n)))},h=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={type:"income",description:"",value:"",completeListArr:[],incomeArr:[],expenseArr:[],total:0},e.addListItemHandler=function(t){if("Enter"===t.key||"addBtn"===t.target.value){var n=e.state,a=n.type,r=n.description,c=n.value;if(0!==r.trim().length&&""!==c){var i=Object(o.a)(e.state.completeListArr),l={type:a,description:r,value:c,id:Math.random()+Date.now()};i.push(l);var u=i.filter((function(e){return"income"===e.type})),s=+u.map((function(e){return e.value})).reduce((function(e,t){return e+ +t}),0),m=i.filter((function(e){return"expense"===e.type})),p=s-+m.map((function(e){return e.value})).reduce((function(e,t){return e+ +t}),0);document.querySelector(".inputBar-description").focus(),e.setState({completeListArr:i,incomeArr:u,expenseArr:m,description:"",value:"",total:p})}}},e.deleteListItemHandler=function(t,n){var a=Object(o.a)(e.state.completeListArr),r=(a=a.filter((function(e){return e.id!==n}))).filter((function(e){return"income"===e.type})),c=+r.map((function(e){return e.value})).reduce((function(e,t){return e+ +t}),0),i=a.filter((function(e){return"expense"===e.type})),l=c-+i.map((function(e){return e.value})).reduce((function(e,t){return e+ +t}),0);e.setState({completeListArr:a,incomeArr:r,expenseArr:i,total:l})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.querySelector(".inputBar-description").focus(),document.body.addEventListener("keydown",this.addListItemHandler)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(p,{changed:function(t){return e.setState({total:t.target.value})},total:this.state.total}),r.a.createElement(d,{type:this.state.type,description:this.state.description,value:this.state.value,changeType:function(t){return e.setState({type:t.target.value})},changeDescription:function(t){return e.setState({description:t.target.value})},changeValue:function(t){return e.setState({value:t.target.value})},clicked:this.addListItemHandler})),r.a.createElement(y,{iArr:this.state.incomeArr,eArr:this.state.expenseArr,deleteItem:this.deleteListItemHandler}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.cfb7912f.chunk.js.map