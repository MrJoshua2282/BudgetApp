(this["webpackJsonpbudget-app"]=this["webpackJsonpbudget-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),o=(n(16),n(3)),u=n(6),l=n(7),s=n(10),d=n(8),m=(n(17),n(18),function(e){var t=new Date,n=t.getDay(),a=t.getDate(),c=t.getFullYear();return r.a.createElement("div",{className:"top-div"},r.a.createElement("div",{className:"top-date"},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n]," ",a,", ",c),r.a.createElement("div",{className:"top-amount",onChange:e.changed},"Balance: $",e.total.toLocaleString()))}),p=(n(19),function(e){return r.a.createElement("div",{className:"inputBar-div"},r.a.createElement("select",{className:"selectType",value:e.type,onChange:e.changeType},r.a.createElement("option",{value:"income",id:"income",className:"optionValue"},"income"),r.a.createElement("option",{value:"expense",id:"expense",className:"optionValue"},"expense")),r.a.createElement("input",{type:"text",className:"inputBar-description",placeholder:"description",value:e.description,onChange:e.changeDescription}),r.a.createElement("input",{type:"number",className:"inputBar-input",placeholder:"$ amount",value:e.value,onChange:e.changeValue}),r.a.createElement("button",{className:"inputBar-btn",value:"addBtn",onClick:e.clicked},"add"))}),y=(n(20),n(9)),v=function(e){var t=function(e){return e.split("").reverse().map((function(e,t){return t%3===0&&0!==t?e="".concat(e,","):e})).reverse().join("")},n=(e=+e).toString();if(n.includes(".")){var a=n.split("."),r=Object(y.a)(a,2),c=r[0],i=r[1];return t(c).concat(".".concat(i))}return t(n)},f=function(e){var t=e.iArr.map((function(t,n){return r.a.createElement("li",{key:n},t.description,": $",v(t.value)," ",r.a.createElement("button",{className:"removeItem",onClick:function(n){return e.deleteItem(n,t.id)}},"x"))})),n=e.eArr.map((function(t,n){return r.a.createElement("li",{key:n},t.description,": $",v(t.value)," ",r.a.createElement("button",{className:"removeItem",onClick:function(n){return e.deleteItem(n,t.id)}},"x"))}));return r.a.createElement("div",{className:"listContainer"},r.a.createElement("div",{className:"list"},r.a.createElement("h1",null,"Income"),r.a.createElement("ul",null,t)),r.a.createElement("div",{className:"list"},r.a.createElement("h1",null,"Expense"),r.a.createElement("ul",null,n)))},h=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={type:"income",description:"",value:"",completeListArr:[],incomeArr:[],expenseArr:[],total:0},e.addListItemHandler=function(t){if("Enter"===t.key||"addBtn"===t.target.value){var n=e.state,a=n.type,r=n.description,c=n.value;if(0!==r.trim().length&&""!==c){var i=Object(o.a)(e.state.completeListArr),u={type:a,description:r,value:c,id:Math.random()+Date.now()};i.push(u);var l=i.filter((function(e){return"income"===e.type})),s=+l.map((function(e){return e.value})).reduce((function(e,t){return e+ +t}),0),d=i.filter((function(e){return"expense"===e.type})),m=s-+d.map((function(e){return e.value})).reduce((function(e,t){return e+ +t}),0);document.querySelector(".inputBar-description").focus(),e.setState({completeListArr:i,incomeArr:l,expenseArr:d,description:"",value:"",total:m})}}},e.deleteListItemHandler=function(t,n){var a=Object(o.a)(e.state.completeListArr),r=(a=a.filter((function(e){return e.id!==n}))).filter((function(e){return"income"===e.type})),c=+r.map((function(e){return e.value})).reduce((function(e,t){return e+ +t}),0),i=a.filter((function(e){return"expense"===e.type})),u=c-+i.map((function(e){return e.value})).reduce((function(e,t){return e+ +t}),0);e.setState({completeListArr:a,incomeArr:r,expenseArr:i,total:u})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.querySelector(".inputBar-description").focus(),document.body.addEventListener("keydown",this.addListItemHandler),document.querySelector(".inputBar-description").classList.add("incomeStyle"),document.querySelector(".inputBar-input").classList.add("incomeStyle"),document.querySelector(".inputBar-btn").classList.add("incomeStyle")}},{key:"componentDidUpdate",value:function(){"income"===this.state.type?(document.querySelector(".inputBar-description").classList.remove("expenseStyle"),document.querySelector(".inputBar-input").classList.remove("expenseStyle"),document.querySelector(".inputBar-btn").classList.remove("expenseStyle"),document.querySelector(".inputBar-description").classList.add("incomeStyle"),document.querySelector(".inputBar-input").classList.add("incomeStyle"),document.querySelector(".inputBar-btn").classList.add("incomeStyle")):(document.querySelector(".inputBar-description").classList.remove("incomeStyle"),document.querySelector(".inputBar-input").classList.remove("incomeStyle"),document.querySelector(".inputBar-btn").classList.remove("incomeStyle"),document.querySelector(".inputBar-description").classList.add("expenseStyle"),document.querySelector(".inputBar-input").classList.add("expenseStyle"),document.querySelector(".inputBar-btn").classList.add("expenseStyle"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(m,{changed:function(t){return e.setState({total:t.target.value})},total:this.state.total}),r.a.createElement(p,{type:this.state.type,description:this.state.description,value:this.state.value,changeType:function(t){return e.setState({type:t.target.value})},changeDescription:function(t){return e.setState({description:t.target.value})},changeValue:function(t){return e.setState({value:t.target.value})},clicked:this.addListItemHandler})),r.a.createElement(f,{iArr:this.state.incomeArr,eArr:this.state.expenseArr,deleteItem:this.deleteListItemHandler}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.5b8759a9.chunk.js.map