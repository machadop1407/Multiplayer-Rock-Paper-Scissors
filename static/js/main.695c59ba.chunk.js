(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{142:function(e,o){},144:function(e,o){},154:function(e,o){},156:function(e,o){},183:function(e,o){},184:function(e,o){},189:function(e,o){},191:function(e,o){},215:function(e,o){},250:function(e,o){},253:function(e,o,t){},254:function(e,o,t){"use strict";t.r(o);var n=t(0),c=t(3),i=t.n(c),s=t(131),r=t.n(s),a=t(8),u=(t(39),Object(c.createContext)(null)),h=Object(c.createContext)(null),j=t(132);var p=function(e){var o=e.socket,t=Object(c.useState)(""),i=Object(a.a)(t,2),s=i[0],r=i[1],p=Object(c.useState)(!1),b=Object(a.a)(p,2),C=b[0],l=b[1],O=Object(c.useContext)(u),m=(O.gameState,O.setGameState),d=Object(c.useContext)(h),x=(d.gameRoom,d.setGameRoom);return Object(n.jsx)(n.Fragment,{children:C?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{onClick:function(){m("running")},children:"Start Game"}),Object(n.jsx)("h2",{children:s})]}):Object(n.jsx)("button",{onClick:function(){var e=j.randomBytes(2).toString("hex");r(e),l(!0),o.emit("join_game",e),x(e)},children:"Generate Code"})})};var b=function(e){var o=e.socket,t=Object(c.useState)(""),i=Object(a.a)(t,2),s=i[0],r=i[1],j=Object(c.useContext)(u),p=(j.gameState,j.setGameState),b=Object(c.useContext)(h),C=(b.gameRoom,b.setGameRoom);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",placeholder:"Code...",onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){o.emit("join_game",s),C(s),p("running")},children:"Enter Game"})]})},C=t(133),l=t.n(C);t(253);var O,m=function(e){var o=e.socket,t=Object(c.useState)({yourChoice:"",opponentChoice:""}),i=Object(a.a)(t,2),s=i[0],r=i[1],u=Object(c.useState)({winner:"",message:""}),j=Object(a.a)(u,2),p=j[0],b=j[1],C=Object(c.useState)({youChose:!1,opponentChose:!1}),l=Object(a.a)(C,2),O=l[0],m=l[1],d=Object(c.useContext)(h),x=d.gameRoom;d.setGameRoom,Object(c.useEffect)((function(){o.on("receive_choice",(function(e){r({yourChoice:s.yourChoice,opponentChoice:e}),m({youChose:O.youChose,opponentChose:!0})}))})),Object(c.useEffect)((function(){O.youChose&&O.opponentChose&&g()}),[O.youChose,O.opponentChose]);var g=function(){s.yourChoice===s.opponentChoice?b({winner:"No One",message:"You both chose ".concat(s.yourChoice)}):"rock"===s.yourChoice&&"paper"==s.opponentChoice?b({winner:"Your Opponent",message:"You chose: ".concat(s.yourChoice," and your Opponent chose: ").concat(s.opponentChoice)}):"rock"===s.yourChoice&&"scissors"==s.opponentChoice||"paper"===s.yourChoice&&"rock"==s.opponentChoice?b({winner:"You",message:"You chose: ".concat(s.yourChoice," and your Opponent chose: ").concat(s.opponentChoice)}):"paper"===s.yourChoice&&"scissors"==s.opponentChoice?b({winner:"Your Opponent",message:"You chose: ".concat(s.yourChoice," and your Opponent chose: ").concat(s.opponentChoice)}):"scissors"===s.yourChoice&&"paper"==s.opponentChoice?b({winner:"You",message:"You chose: ".concat(s.yourChoice," and your Opponent chose: ").concat(s.opponentChoice)}):"scissors"===s.yourChoice&&"rock"==s.opponentChoice&&b({winner:"Your Opponent",message:"You chose: ".concat(s.yourChoice," and your Opponent chose: ").concat(s.opponentChoice)})};return Object(n.jsxs)("div",{className:"gameContainer",children:[Object(n.jsx)("h1",{children:"Make Your Choice"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){return r({yourChoice:"rock",opponentChoice:""})},children:"Rock"}),Object(n.jsx)("button",{onClick:function(){return r({yourChoice:"paper",opponentChoice:""})},children:"Paper"}),Object(n.jsx)("button",{onClick:function(){return r({yourChoice:"scissors",opponentChoice:""})},children:"Scissors"})]}),Object(n.jsx)("button",{onClick:function(){o.emit("make_choice",{room:x,choice:s.yourChoice}),m({youChose:!0,opponentChose:O.opponentChose})},children:"Submit Choice"}),p.winner?Object(n.jsxs)("div",{className:"results",children:[" ",Object(n.jsxs)("h1",{children:["Winner: ",p.winner]})," ",Object(n.jsx)("p",{children:p.message}),Object(n.jsx)("button",{onClick:function(){m({youChose:!1,opponentChose:!1}),b({winner:"",message:""}),r({yourChoice:"",opponentChoice:""})},children:"Play Again"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h1",{children:["You selected: ",s.yourChoice]}),O.youChose&&Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h1",{children:"Waiting for opponent to select..."})})]})]})},d="https://rpsmultiplayergame.herokuapp.com/";var x=function(){var e=Object(c.useState)("initial"),o=Object(a.a)(e,2),t=o[0],i=o[1],s=Object(c.useState)("starting"),r=Object(a.a)(s,2),j=r[0],C=r[1],x=Object(c.useState)(""),g=Object(a.a)(x,2),f=g[0],y=g[1];return Object(c.useEffect)((function(){O=l()(d)}),[d]),Object(n.jsx)(u.Provider,{value:{gameState:j,setGameState:C},children:Object(n.jsx)(h.Provider,{value:{gameRoom:f,setGameRoom:y},children:Object(n.jsx)("div",{className:"App",children:"starting"==j?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"top",children:[Object(n.jsx)("h1",{children:"Welcome to Rock, Paper and Scissors"}),Object(n.jsx)("p",{className:"intro",children:"Connect With a friend and play the game! To create a game, press the create game button. You will receive a code that you can send to your friend to enter in the same game as you."})]}),Object(n.jsx)("div",{className:"menu",children:"initial"==t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{onClick:function(){return i("create")},children:"Create New Game"}),Object(n.jsx)("button",{onClick:function(){return i("enter")},children:"Enter Game"})]}):"create"==t?Object(n.jsx)(p,{socket:O}):Object(n.jsx)(b,{socket:O})})]}):Object(n.jsx)(m,{socket:O})})})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,255)).then((function(o){var t=o.getCLS,n=o.getFID,c=o.getFCP,i=o.getLCP,s=o.getTTFB;t(e),n(e),c(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),g()},39:function(e,o,t){}},[[254,1,2]]]);
//# sourceMappingURL=main.695c59ba.chunk.js.map