(this["webpackJsonpbooks-library"]=this["webpackJsonpbooks-library"]||[]).push([[0],{14:function(e,t,o){},15:function(e,t,o){},17:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o.n(n),r=o(4),s=o.n(r),c=(o(14),o(15),o(3)),i=o(5),b=o(6),l=o(7),j=o(9),d=o(8),h=o(0),u=function(e){Object(j.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(b.a)(this,o),(n=t.call(this,e)).changeHandler=function(e){var t=e.target.name,o=e.target.value;n.setState(Object(i.a)({},t,o))},n.submitHandler=function(e){e.preventDefault();var t=n.state.bookCategory,o=n.state.bookName,a=n.state.bookAuthor,r=n.state.read;o&&a&&n.setState((function(e){return{books:[].concat(Object(c.a)(e.books),[{bookCategory:t,bookName:o,bookAuthor:a,read:r}])}}),(function(){localStorage.setItem("books",JSON.stringify(n.state.books))}))},n.removeBook=function(e){var t=Object(c.a)(n.state.books);t&&n.setState({books:t.filter((function(t,o){return o!==e}))},(function(){localStorage.setItem("books",JSON.stringify(n.state.books))}))},n.saveLocal=function(){localStorage.setItem("books",JSON.stringify(n.state.books))},n.state={bookCategory:"",bookAuthor:"",bookName:"",read:"No",books:[]},n}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("books");e&&this.setState({books:JSON.parse(e)})}},{key:"render",value:function(){var e=this,t=this.state.books;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{className:"bookForm",onSubmit:this.submitHandler,children:[Object(h.jsx)("label",{for:"bookName",children:"Title"}),Object(h.jsx)("input",{id:"bookName",name:"bookName",type:"text",placeholder:"Title",maxLength:"40",onChange:this.changeHandler,required:!0}),Object(h.jsx)("label",{for:"bookAuthor",children:"Author"}),Object(h.jsx)("input",{id:"bookAuthor",name:"bookAuthor",type:"text",placeholder:"Author",maxLength:"30",onChange:this.changeHandler,required:!0}),Object(h.jsx)("label",{children:"Read"}),Object(h.jsxs)("select",{id:"read",name:"read",onChange:this.changeHandler,value:this.state.read,children:[Object(h.jsx)("option",{value:"Yes",children:"Yes"}),Object(h.jsx)("option",{value:"No",children:"No"})]}),Object(h.jsx)("label",{children:"Category"}),Object(h.jsxs)("select",{id:"bookCategory",name:"bookCategory",onChange:this.changeHandler,value:this.state.bookCategory,children:[Object(h.jsx)("option",{value:"Fiction",children:"Fiction"}),Object(h.jsx)("option",{value:"Non-fiction",children:"Non-fiction"}),Object(h.jsx)("option",{value:"Magazines",children:"Magazines"})]}),Object(h.jsx)("input",{id:"submit",type:"submit",value:"ADD NEW BOOK"})]}),Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Category"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:"Author"}),Object(h.jsx)("th",{children:"Finished (Yes/No)"}),Object(h.jsx)("th",{colSpan:"2",children:"Settings"})]}),t.map((function(t,o){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.bookCategory}),Object(h.jsx)("td",{children:t.bookName}),Object(h.jsx)("td",{children:t.bookAuthor}),Object(h.jsx)("td",{children:t.read}),Object(h.jsxs)("td",{id:"settings",children:[Object(h.jsx)("button",{onClick:function(){"Yes"===t.read?t.read="No":t.read="Yes",e.saveLocal(),e.forceUpdate()},children:"Yes"===t.read?"Still reading":"Finished"}),Object(h.jsx)("button",{onClick:function(){e.removeBook(o)},children:"Remove"})]})]},o)}))]})]})}}]),o}(a.a.Component);var O=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(u,{})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2a45ecf5.chunk.js.map