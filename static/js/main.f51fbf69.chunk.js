(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(13),i=n.n(a),c=n(18),r=n(6),o=n(15),l=n(5),d=n(1);var u=function(e){var t=Object(s.useState)(""),n=Object(r.a)(t,2),a=n[0],i=n[1],c=Object(s.useState)([]),o=Object(r.a)(c,2),l=o[0],u=o[1],j=Object(s.useState)(""),m=Object(r.a)(j,2),h=m[0],b=m[1],O=Object(s.useState)(""),x=Object(r.a)(O,2),v=x[0],f=x[1];return Object(d.jsx)("div",{className:"row justify-content-center mt-5",children:Object(d.jsx)("div",{className:"col-6",children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={name:a,ingredients:l,instructions:h,notes:v,id:e.newId};e.addCard(n),i(""),u([]),b(""),f("")},style:{display:"flex",flexDirection:"column"},children:[Object(d.jsxs)("label",{children:["Name of Your Creation:",Object(d.jsx)("input",{className:"form-control",onChange:function(e){i(e.target.value)},type:"text",name:"creation-name",value:a,required:!0})]}),Object(d.jsxs)("label",{children:["Ingredients:",Object(d.jsx)("textarea",{className:"form-control",style:{width:"100%"},onChange:function(e){u(e.target.value)},type:"text",name:"ingredients",value:l,required:!0})]}),Object(d.jsxs)("label",{children:["Instructions:",Object(d.jsx)("textarea",{className:"form-control",style:{width:"100%"},onChange:function(e){b(e.target.value)},type:"text",name:"instructions",value:h,required:!0})]}),Object(d.jsxs)("label",{children:["Notes:",Object(d.jsx)("textarea",{className:"form-control",style:{width:"100%"},onChange:function(e){f(e.target.value)},type:"text",name:"notes",value:v,required:!0})]}),Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add Smoothie"}),Object(d.jsx)("button",{className:"btn btn-secondary mt-2",type:"reset",children:"Cancel"})]})})})};var j=function(e){var t=e.ingredients,n=e.instructions,s=e.notes;return Object(d.jsxs)("div",{className:"smoothie-detail",children:[Object(d.jsx)("h5",{className:"smoothie-detail-ing",children:"Ingredients:"}),Object(d.jsx)("p",{children:t}),Object(d.jsx)("h5",{className:"smoothie-detail-inst",children:"Instructions:"}),Object(d.jsx)("p",{children:n}),Object(d.jsx)("h5",{className:"smoothie-detail-notes",children:"Notes:"}),Object(d.jsx)("p",{children:s})]})},m=n(42),h=n(41);var b=function(e){var t=Object(s.useState)(e.name),n=Object(r.a)(t,2),a=n[0],i=n[1],c=Object(s.useState)(e.ingredients),o=Object(r.a)(c,2),l=o[0],u=o[1],b=Object(s.useState)(e.instructions),O=Object(r.a)(b,2),x=O[0],v=O[1],f=Object(s.useState)(e.notes),g=Object(r.a)(f,2),N=g[0],p=g[1],y=Object(s.useState)(!1),C=Object(r.a)(y,2),S=C[0],w=C[1],k=function(){w(!1),T(!1)},I=Object(s.useState)(!1),E=Object(r.a)(I,2),B=E[0],T=E[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m.a,{className:"smoothie-card",variant:"primary",onClick:function(){w(!0),T(!1)},children:Object(d.jsx)("h3",{className:"card-title",children:Object(d.jsx)("span",{children:e.name})})}),Object(d.jsxs)(h.a,{show:S,onHide:k,children:[Object(d.jsx)(h.a.Header,{closeButton:!0,children:B?Object(d.jsx)("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)},id:e.id}):Object(d.jsxs)(h.a.Title,{children:["Smoothie: ",e.name]})}),Object(d.jsx)(h.a.Body,{children:B?Object(d.jsxs)("div",{className:"editModal",children:[Object(d.jsx)("h5",{children:"Ingredients:"}),Object(d.jsx)("textarea",{className:"editText",type:"text",value:l,onChange:function(e){return u(e.target.value)},id:e.id}),Object(d.jsx)("h5",{children:"Instructions:"}),Object(d.jsx)("textarea",{className:"editText",type:"text",value:x,onChange:function(e){return v(e.target.value)},id:e.id}),Object(d.jsx)("h5",{children:"Notes:"}),Object(d.jsx)("textarea",{className:"editText",type:"text",value:N,onChange:function(e){return p(e.target.value)},id:e.id})]}):Object(d.jsx)(j,{ingredients:e.ingredients,instructions:e.instructions,notes:e.notes,id:e.id})}),Object(d.jsxs)(h.a.Footer,{className:"modalButtons",children:[Object(d.jsx)(m.a,{variant:"dark",className:"mr-5",onClick:function(t){var n=e.smoothies.filter((function(t){return t.id===e.id}));window.confirm("Sure you want to dump this smoothie?")&&e.deleteCard(n[0])},children:"Delete Card"}),Object(d.jsx)(m.a,{variant:"secondary",className:"closeModalButton",onClick:k,children:"Close"}),B?Object(d.jsx)(m.a,{variant:"primary",onClick:function(t){var n={name:a,ingredients:l,instructions:x,notes:N,id:e.id};e.saveCardEdit(n),T(!1)},children:"Save Changes"}):Object(d.jsx)(m.a,{variant:"primary",onClick:function(){T(!0)},children:"Edit Card"})]})]})]})};var O=function(e){var t=e.smoothies,n=e.deleteCard,a=e.setIngredients,i=e.setInstructions,c=e.setNotes,o=e.saveCardEdit,l=t.map((function(e,s){return Object(d.jsx)(b,{name:e.name,ingredients:e.ingredients,instructions:e.instructions,notes:e.notes,id:e.id,deleteCard:n,saveCardEdit:o,smoothies:t,setIngredients:a,setInstructions:i,setNotes:c},e.id)})),u=Object(s.useState)(""),j=Object(r.a)(u,2),m=j[0],h=j[1],O=Object(s.useState)([]),x=Object(r.a)(O,2),v=x[0],f=x[1],g=function(e,t){var n=new RegExp(e,"gi");return t.filter((function(e){return e.name.match(n)}))};return Object(d.jsxs)("div",{className:"view-smoothies",children:[Object(d.jsx)("h1",{className:"slogan mt-5",children:"Welcome to the New You"}),Object(d.jsxs)("form",{className:"search-form",onSubmit:function(e){if(e.preventDefault(),g(m,t).length){var s=g(m,t).map((function(e,s){return Object(d.jsx)(b,{name:e.name,ingredients:e.ingredients,instructions:e.instructions,notes:e.notes,id:e.i,deleteCard:n,saveCardEdit:o,smoothies:t,setIngredients:a,setInstructions:i,setNotes:c},e.id)}));f(s),e.target.reset()}else alert('Sorry, there are no matches for "'.concat(m,'"!')),f(l),e.target.reset()},children:[Object(d.jsx)("input",{className:"search-bar mt-5 ml-4",type:"text",placeholder:"Where's mah smoothie?",onChange:function(e){h(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary ml-4 mb-1",children:"Search"})]}),Object(d.jsx)("div",{className:"view-cards",children:v.length?Object(d.jsx)("div",{className:"view-cards",children:v}):Object(d.jsx)("div",{className:"view-cards",children:l})})]})};var x=function(){return Object(d.jsxs)("div",{className:"navBar",children:[Object(d.jsx)("li",{className:"customLink title",children:"Navi's Smoothies"}),Object(d.jsxs)("ul",{className:"navBarLinks",children:[Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsx)(o.b,{className:"customLink",to:"/NaviSmoothie/",onClick:function(){window.location.href="/NaviSmoothie/"},children:"View All"})}),Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsx)(o.b,{className:"customLink",to:"/SmoothieForm",children:"Create New"})})]})]})},v=[{name:"May Unicorn",ingredients:"Nonfat yogurt - 2 cups, Almond milk - 1 cup, Mixed berries - 1 cup, Sour gummibears, Sprinkles - 1 TB",instructions:"Add cashews for texture, blend with ice.",notes:"Calories: 200g, Sugar: 13g, Protein: 11g",id:0},{name:"Kevin",ingredients:"Nonfat greek yogurt - 2 cups, Almond milk - 2 cups, SUPER CREATINE",instructions:"Eat with hot cheetos, blend with ice.",notes:"Calories: 0, Sugar: 000000000",id:1},{name:"NoDramaLlama",ingredients:"Nonfat greek yogurt - 1/2 cup, Unsweetened almond milk - 1 cups, Frozen sliced bananas - 2 cups, Flax seeds - 1 TB, ground coffee beans - 1/4 cup, boba balls",instructions:"Blend on high until smooth",notes:"Calories: 300g, Sugar: 21g, Fiber: 4g, Protein 20g",id:2}];var f=function(e,t){var n=Object(s.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(s){return console.log(s),t}})),a=Object(r.a)(n,2),i=a[0],c=a[1];return[i,function(t){try{var n=t instanceof Function?t(i):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(s){console.log(s)}}]};var g=function(){var e=f("smoothies",v),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(3),j=Object(r.a)(i,2),m=j[0],h=j[1],b=function(e){return!n.some((function(t){return t.name===e}))};return Object(d.jsx)("div",{className:"parentContainer",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(x,{}),Object(d.jsx)("div",{className:"switchContainer",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/NaviSmoothie/",children:Object(d.jsx)(O,{smoothies:n,deleteCard:function(e){var t=Object(c.a)(n),s=t.filter((function(t){return t.id===e.id})),i=t.indexOf(s[0]);t.splice(i,1),a(t),window.location.href="/NaviSmoothie/"},saveCardEdit:function(e){if(r=e.name,o=e.id,n.some((function(e){return e.name===r&&e.id===o}))||b(e.name)){for(var t,s=Object(c.a)(n),i=0;i<s.length;i++)e.id===s[i].id&&(t=i);s[t].name=e.name,s[t].ingredients=e.ingredients,s[t].instructions=e.instructions,s[t].notes=e.notes,a(s),window.location.href="/NaviSmoothie/"}else alert("This name is already taken! Please enter another name.");var r,o},newId:m})}),Object(d.jsx)(l.a,{path:"/SmoothieForm",children:Object(d.jsx)(u,{addCard:function(e){if(b(e.name)){var t=Object(c.a)(n);t.push(e),a(t),h(m+1),alert("Card successfully added!"),window.location.href="/NaviSmoothie/"}else alert("This name is already taken! Please enter a unique name.")},newId:m})})]})})]})})};n(37);i.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f51fbf69.chunk.js.map