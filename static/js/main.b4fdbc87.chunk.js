(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump"}]')},19:function(e,a,t){},28:function(e,a,t){e.exports=t(37)},33:function(e,a,t){},34:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(8),c=t.n(i),r=(t(33),t(20)),l=t(21),s=t(26),m=t(22),d=t(25);t(34);var u=function(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("h4",null,"Clicky Game"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("h5",null,"Click an image to start playing"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("h4",{className:"score"},"Score: ",e.score," || Top Score: ",e.topScore," ")))))};var h=function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"Clicky Game"),o.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once")))};t(19);var g=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"card-img",src:e.image,alt:e.name,onClick:e.handleCharacterClick}))};var p=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)},v=t(15),k=t(40),f=t(41);var b=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{show:e.show,onHide:e.handleModalClose,animation:!1},o.a.createElement(k.a.Header,{closeButton:!0},o.a.createElement(k.a.Title,null,e.title)),o.a.createElement(k.a.Body,null,e.body),o.a.createElement(k.a.Footer,null,o.a.createElement(f.a,{variant:"secondary",onClick:e.handleModalClose},"Close"))))},w=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={score:0,topScore:0,clicked:[],characters:v,modalTitle:"",modalBody:"",show:!1},t.handleWin=function(){t.setState({score:0,clicked:[]}),t.handleModalShow("YOU WIN!","CONGRATS")},t.handleLoss=function(){t.setState({score:0,clicked:[]}),t.handleModalShow("You lost","Better luck next time")},t.handleModalShow=function(e,a){t.setState({modalTitle:e,modalBody:a,show:!0})},t.handleModalClose=function(){t.setState({show:!1})},t.handleCharacterClick=function(e){t.state.clicked.includes(e)?t.handleLoss():t.setState((function(a){var n=a.clicked.concat(e);return t.state.score===t.state.topScore&&(t.setState({topScore:t.state.topScore+1}),11===t.state.score&&t.handleWin(),t.shuffle(t.state.characters)),{clicked:n,score:t.state.score+1}}))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"shuffle",value:function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;this.setState({characters:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(u,{score:this.state.score,topScore:this.state.topScore}),o.a.createElement(h,null),o.a.createElement(b,{title:this.state.modalTitle,body:this.state.modalBody,show:this.state.show,handleModalClose:function(){return e.handleModalClose()}}),o.a.createElement(p,null,v.map((function(a){return o.a.createElement(g,{image:a.image,name:a.name,handleCharacterClick:function(){return e.handleCharacterClick(a.id)}})}))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.b4fdbc87.chunk.js.map