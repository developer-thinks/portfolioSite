(this["webpackJsonpinteractive-resume"]=this["webpackJsonpinteractive-resume"]||[]).push([[0],{100:function(e,a,t){},111:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),i=t(11),r=t.n(i);t(68),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(69);var o=t(16),s=t(17),c=t(21),m=t(20),d=(t(70),t(12)),u=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={isClose:!0},e.handleUserClick=function(a){window.innerWidth<=850&&e.setState({isClose:!e.state.isClose})},e.toggleHamburgerIconClass=function(a){e.setState({isClose:!e.state.isClose})},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScrollEvent)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScrollEvent)}},{key:"handleScrollEvent",value:function(){var e=document.getElementById("navbar");window.pageYOffset>=window.innerHeight?e.classList.add("sticky"):e.classList.remove("sticky")}},{key:"handleSetActive",value:function(e){window.innerWidth>850&&"nav-Main"===e&&!this.state.isClose&&this.setState({isClose:!this.state.isClose})}},{key:"handleSetInactive",value:function(e){window.innerWidth>850&&"nav-Main"===e&&this.state.isClose&&this.setState({isClose:!this.state.isClose})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"navbar",className:"navbar"},l.a.createElement("div",{className:"hamburger-menu"},l.a.createElement("div",{id:"hamburger-icon",className:this.state.isClose?"":"open",onClick:this.toggleHamburgerIconClass},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("nav",{className:"nav-menu",style:this.state.isClose?{display:"none"}:{display:"block"}},l.a.createElement("div",{id:"nav-Main"},l.a.createElement(d.Link,{activeClass:"active",to:"Main",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:function(){return e.handleSetActive("nav-Main")},onSetInactive:function(){return e.handleSetInactive("nav-Main")}})),l.a.createElement(d.Link,{activeClass:"active",to:"Profile",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Profile "))),l.a.createElement(d.Link,{activeClass:"active",to:"Experiences",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Education"))),l.a.createElement(d.Link,{activeClass:"active",to:"Projects",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Projects"))),l.a.createElement(d.Link,{activeClass:"active",to:"Skills",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Skills"))),l.a.createElement(d.Link,{activeClass:"active",to:"Volunteer",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Volunteer"))),l.a.createElement(d.Link,{activeClass:"active",to:"Contact",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Contact")))))}}]),t}(l.a.Component),E=(t(81),t(46)),v=(t(82),t(47));function p(){return l.a.createElement("div",{className:"jumbotron main-card"},l.a.createElement("p",{className:"name"},"SAMMED SANKONATTI"),l.a.createElement("hr",{className:"line"}),l.a.createElement("h4",{className:"status"},"Leetcoder \u2022  Software Dev "),l.a.createElement("h5",{className:"status1"},"Looking for my next challenge"),l.a.createElement(d.Link,{activeClass:"active",to:"Profile",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement("div",{className:"scroll"},l.a.createElement("h6",{className:"scrollText"},"Resume"),l.a.createElement("div",{className:"scrollIcon"},l.a.createElement(v.a,{size:40})))))}function h(){return l.a.createElement("div",{id:"Main",className:"Main"},l.a.createElement(p,null),l.a.createElement(E.a,{className:"ParticlesBg",num:20,color:"#3341FF",type:"polygon",bg:!1}))}t(83);var f=t(48),g=t.n(f),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Profile",id:"Profile"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"profile-title"},"Profile"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 about-me-col"},l.a.createElement("h2",{className:"sub-title"},"About me"),l.a.createElement("div",null,l.a.createElement("p",{className:"about-me"},"Electrical Engineering Student with Bachelor's degree from  BMS College of engineering Bangalore.")),l.a.createElement("div",null,l.a.createElement("p",{className:"about-me"},"Fashionated coder and interested in competative coding.")),l.a.createElement("div",null,l.a.createElement("p",{className:"about-me"},"Self-learner and work on my skills to improve them.")),l.a.createElement("div",null,l.a.createElement("p",{className:"about-me"},"Looking for a new challenge as a Software engineer or a full-stack position, with the possibility of a Full-time job."))),l.a.createElement("div",{className:"col-sm-5 image-col"},l.a.createElement("img",{className:"proflie-img",src:g.a,alt:"profile"})),l.a.createElement("div",{className:"col-sm-3 details-col"},l.a.createElement("h2",{className:"sub-title"},"Detials"),l.a.createElement("div",null,l.a.createElement("h5",null,"Name"),l.a.createElement("h6",null,"Sammed Sankonatti")),l.a.createElement("div",null,l.a.createElement("h5",null,"Age"),l.a.createElement("h6",null,"21 Years")),l.a.createElement("div",null,l.a.createElement("h5",null,"Location"),l.a.createElement("h6",null,"Bangalore, India")))),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h5",null,"My dream has always been to be in a position that can affect millions of people around the world, especially in companies with an unlimited vision that reflects my personality."))))}}]),t}(l.a.Component);t(84);function N(e){var a=e.title,t=e.quotes,n=e.quotesAuthor;return l.a.createElement("div",null,l.a.createElement("h1",{className:"section-title"},a),l.a.createElement("div",{className:"quotes"},l.a.createElement("h5",{className:"quotes"},t),l.a.createElement("h6",{className:"quotes"},n)),l.a.createElement("hr",null))}t(85);var C=t(52),k=t(49);function y(e){var a=e.title,t=e.subTitle,n=e.date,i=e.location,r=e.details,o=e.detailsType,s=e.myVideoId;return l.a.createElement("div",{className:"row card-row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",{className:"card-name"},a),l.a.createElement("p",{className:"card-date"},n),l.a.createElement("div",{className:"card-location"},l.a.createElement(C.a,null)," ",i)),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("div",{className:"card-details"},l.a.createElement("h6",{className:"card-details-title"},t),"p"===o?r.map((function(e,a){return l.a.createElement("p",{key:a,className:"par-details"},e)})):"li"===o?l.a.createElement("ul",{className:"list"},r.map((function(e,a){return l.a.createElement("li",{key:a},e)}))):null,l.a.createElement("div",{style:""===s?{display:"none"}:{}},l.a.createElement(k.a,{className:"youtubeVideo",videoId:s,opts:{width:"100%"}})))))}function S(){return l.a.createElement("div",{className:"section",id:"Experiences",style:{backgroundColor:"#e0e0e0"}},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"EDUCATION",quotes:O,quotesAuthor:T}),l.a.createElement(y,{title:"BMS College",subTitle:"B.Tech in Electrical and Electronics Engineering.",date:"Aug.2017 \u2013 Jun.2021",location:"Bangalore, India",details:w,detailsType:"p",myVideoId:""}),l.a.createElement("hr",null),l.a.createElement(y,{title:"Tungal Science College",subTitle:"PU in Science with Mathematics and Statistics.",date:"Jun.2015 \u2013 May.2017",location:"Jamkhandi, Karnataka",details:P,detailsType:"p",myVideoId:""}),l.a.createElement(y,{title:"SSDP kokatnoor",subTitle:" Higher-primary Schooling",date:"Jun.2012 \u2013 march.2015",location:"kokatnoor, Athani",details:j,detailsType:"p",myVideoId:""})))}var O='"Education is the most powerful weapon which you can use to change the world"',T="Nelson Mandela.",w=["BMS college of Engineering Bangalore"," CGPA: 8.2"],P=["Karnataka State Board for Higher Secondary Education.","Percentage: 92% ","CET : 4500."],j=["Central Board of Secondary Education","CGPA: 9.6"],A=t(53),I=t.n(A),_=t(54),x=t.n(_);t(97);function L(e){var a=e.name,t=e.details,n=e.projectLink,i=e.pic;return l.a.createElement("div",{className:"row project"},l.a.createElement("div",{className:"col-sm-4 project-detials"},l.a.createElement("h5",null,a),t.map((function(e,a){return l.a.createElement("p",{key:a},e)})),l.a.createElement("button",{style:void 0===n?{display:"none"}:{display:"block"},onClick:function(){return window.open(n,"_blank","noopener,noreferrer")},type:"button",className:"btn btn-secondary"},"Website")),l.a.createElement("div",{className:"col-sm-8 project-pic"},void 0===n?l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:i,alt:"sorting project",className:"project-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"text"}))):void 0!==n?l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:i,alt:a,className:"project-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"text"},"Website")))):null))}var D=t(29),R=t(55),B=t(56),M=(t(98),l.a.createElement(D.b,{size:70})),W=l.a.createElement(D.a,{size:70}),H=l.a.createElement(R.a,{size:70}),F=l.a.createElement(B.a,{size:70});function q(e){var a=e.myClassName,t=e.myHref,n="linkedin"===a?M:"github"===a?W:"mail"===a?H:"phone"===a?F:null;return l.a.createElement("a",{className:a,href:t,target:"_blank",rel:"noopener noreferrer"},n)}function U(){return l.a.createElement("div",{id:"Projects",className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"PROJECTS",quotes:K,quotesAuthor:J}),l.a.createElement(L,{name:"Pathfinding Visualizer",details:V,projectLink:"https://sammed-sankonatti.github.io/pathfinder/",pic:I.a}),l.a.createElement("hr",null),l.a.createElement(L,{name:"Sorting Visualizer",details:z,projectLink:"https://sammed-sankonatti.github.io/sorting-visualizer/",pic:x.a}),l.a.createElement("hr",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h5",null,"See more projects"),l.a.createElement(q,{myClassName:"github",myHref:"https://github.com/sammed-sankonatti"}))))}var V=["Built React/ Redux application for visualizing pathfinding algorithms.","Implemented Algorithm:","A* Search.","Dijkstra\u2019s Algorithm.","Breadth First Search (BFS).","Depth First Search (DFS)."],z=["Built React application for visualizing sorting algorithms.","Implemented Algorithm:","Selection Sort, Bubble Sort.","Insertion Sort, Merge Sort.","Quick Sort, Heap Sort."],K='"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."',J="Linus Torvalds",Y=(t(99),t(22)),G=(t(100),t(8)),$=t(14),Q=t(33),X=t.n(Q),Z=t(138),ee=t(142),ae=t(141),te=t(140),ne=t(58),le=t.n(ne),ie=t(59),re=t.n(ie),oe=t(40),se={disabled:{"&:before":{backgroundColor:"transparent !important"}},underline:{"&:hover:not($disabled):before,&:before":{borderColor:"#D2D2D2 !important",borderWidth:"1px !important"},"&:after":{borderColor:"#ff6600"}},labelRoot:Object(oe.a)(Object(oe.a)({},{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"}),{},{color:"#AAAAAA !important",fontWeight:"400",fontSize:"14px",lineHeight:"1.42857",letterSpacing:"unset"}),feedback:{position:"absolute",top:"18px",right:"0",zIndex:"2",display:"block",width:"24px",height:"24px",textAlign:"center",pointerEvents:"none"},marginTop:{marginTop:"16px"},formControl:{paddingBottom:"10px",margin:"27px 0 0 0",position:"relative",verticalAlign:"unset"}},ce=Object(Z.a)(se);function me(e){var a,t,n=ce(),i=e.formControlProps,r=e.labelText,o=e.id,s=e.name,c=e.labelProps,m=e.inputProps,d=e.error,u=e.success,E=X()((a={},Object($.a)(a," "+n.labelRootError,d),Object($.a)(a," "+n.labelRootSuccess,u&&!d),a)),v=X()((t={},Object($.a)(t,n.underlineError,d),Object($.a)(t,n.underlineSuccess,u&&!d),Object($.a)(t,n.underline,!0),t)),p=X()(Object($.a)({},n.marginTop,void 0===r));return l.a.createElement(ee.a,Object.assign({},i,{className:i.className+" "+n.formControl}),void 0!==r?l.a.createElement(ae.a,Object.assign({className:n.labelRoot+E,htmlFor:o},c),r):null,l.a.createElement(te.a,Object.assign({classes:{root:p,disabled:n.disabled,underline:v},id:o,name:s},m)),d?l.a.createElement(le.a,{className:n.feedback+" "+n.labelRootError}):u?l.a.createElement(re.a,{className:n.feedback+" "+n.labelRootSuccess}):null)}t(104);var de=t(60);t(107).config(),G.a.configure();var ue=function(e){Object(c.a)(n,e);var a=Object(m.a)(n);function n(e){var t;return Object(o.a)(this,n),(t=a.call(this,e)).handleOnSubmit=t.handleOnSubmit.bind(Object(Y.a)(t)),t.validateEmail=t.validateEmail.bind(Object(Y.a)(t)),t.validateForm=t.validateForm.bind(Object(Y.a)(t)),t}return Object(s.a)(n,[{key:"validateForm",value:function(e){var a=new FormData(e.target);G.a.configure();var t=!0,n=a.get("first-name"),l=a.get("last-name"),i=a.get("email-address"),r=a.get("message");return""===n?(t=!1,G.a.error("first name required..!",{position:G.a.POSITION.TOP_CENTER,autoClose:2e3})):""===l?(t=!1,G.a.error("last name required..!",{position:G.a.POSITION.TOP_CENTER,autoClose:2e3})):""===i?(t=!1,G.a.error("E-mail Address required..!",{position:G.a.POSITION.TOP_CENTER,autoClose:2e3})):this.validateEmail(i)?""===r&&(t=!1,G.a.error("message required..!",{position:G.a.POSITION.TOP_CENTER,autoClose:2e3})):(t=!1,G.a.error("E-mail Address unvalid..!",{position:G.a.POSITION.TOP_CENTER,autoClose:2e3})),t}},{key:"validateEmail",value:function(e){return t(110).validate(e)}},{key:"handleOnSubmit",value:function(e){e.preventDefault(),this.validateForm(e)&&(de.sendForm(Object({NODE_ENV:"production",PUBLIC_URL:"/interactive-resume",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EMAILJS_SERVICE_ID,Object({NODE_ENV:"production",PUBLIC_URL:"/interactive-resume",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EMAILJS_TEMPLATE_ID,e.target,Object({NODE_ENV:"production",PUBLIC_URL:"/interactive-resume",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EMAILJS_USER_ID).then((function(){G.a.success("Sent!",{position:G.a.POSITION.TOP_CENTER,autoClose:5e3})}),(function(e){G.a.error("Sorry, we are unable to send the message now, please try later.",{position:G.a.POSITION.TOP_CENTER,autoClose:1e4})})),e.target.reset())}},{key:"render",value:function(){return l.a.createElement("form",{id:"myForm",className:"card",onSubmit:this.handleOnSubmit},l.a.createElement("div",{className:"cardHeader"},l.a.createElement("h5",{style:{color:"white"}},"I am sure that the combination of my skills and motivation with your company vision will lead to the greatest technologies that change the world for the better.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(me,{labelText:"First Name",id:"first-name",name:"first-name",formControlProps:{fullWidth:!0}})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(me,{labelText:"Last Name",id:"last-name",name:"last-name",formControlProps:{fullWidth:!0}}))),l.a.createElement(me,{labelText:"Email address",id:"email-address",name:"email-address",formControlProps:{fullWidth:!0}}),l.a.createElement(me,{labelText:"Message",id:"message",name:"message",formControlProps:{fullWidth:!0},inputProps:{multiline:!0,rows:5}}),l.a.createElement("div",{className:"send-button-div"},l.a.createElement("button",{className:"sendButton"},"SEND")))}}]),n}(l.a.Component);function Ee(){return l.a.createElement("div",{className:"section",id:"Contact",style:{textAlign:"center",backgroundColor:"#e0e0e0"}},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Lets work together",quotes:"",quotesAuthor:""}),l.a.createElement(ue,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(q,{myClassName:"linkedin",myHref:"https://www.linkedin.com/in/sammed-sankonatti"}),l.a.createElement(q,{myClassName:"github",myHref:"https://github.com/sammed-sankonatti"})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(q,{myClassName:"mail",myHref:"mailto:sammed.sankonatti45@gmail.com"}),l.a.createElement(q,{myClassName:"phone",myHref:"tel:+918317379314"}))),l.a.createElement("h6",{className:"info"},"sammed.sankonatti45@gmail.com"),l.a.createElement("h6",{className:"info"},"+91 831-737-9314"),l.a.createElement("button",{onClick:function(){return window.open("")},type:"button",className:"btn btn-outline-danger"},"View full CV"),l.a.createElement("hr",null)))}t(111),t(112);t(113);t(114);function ve(){return l.a.createElement("div",{className:"progress animation-progress",style:{height:"25px"}},l.a.createElement("div",{className:"progress-bar animation-progress-bar"},l.a.createElement("div",{className:"progress-text"}," Self Learning - 100%")))}t(115);function pe(){return l.a.createElement("div",{className:"section",id:"Skills",style:{backgroundColor:"#e0e0e0"}},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Skills",quotes:"",quotesAuthor:""}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"skills"},l.a.createElement("div",{className:"col-sm-3 skill"},l.a.createElement("i",{class:" icons devicon-cplusplus-plain colored"}),l.a.createElement("i",{class:" icons devicon-javascript-plain colored"}),l.a.createElement("br",null),l.a.createElement("i",{class:" icons devicon-python-plain colored"}),l.a.createElement("i",{class:" icons devicon-java-plain-wordmark colored"}),l.a.createElement("br",null),l.a.createElement("p",null," Programming languages")),l.a.createElement("div",{className:"col-sm-3 skill"},l.a.createElement("i",{class:"icons devicon-html5-plain-wordmark colored"}),l.a.createElement("i",{class:"icons devicon-css3-plain-wordmark colored"}),l.a.createElement("br",null),l.a.createElement("i",{class:"icons devicon-react-original colored"}),l.a.createElement("i",{class:"icons devicon-bootstrap-plain colored"}),l.a.createElement("br",null),l.a.createElement("p",null," Front-End Technologies")),l.a.createElement("div",{className:"col-sm-3 skill"},l.a.createElement("i",{class:"icons devicon-nodejs-plain colored"}),l.a.createElement("i",{class:"icons devicon-express-original colored"}),l.a.createElement("br",null),l.a.createElement("i",{class:"icons devicon-mongodb-plain-wordmark colored"}),l.a.createElement("i",{class:"icons devicon-mysql-plain-wordmark colored"}),l.a.createElement("p",null," Back-End Technologies")),l.a.createElement("div",{className:"col-sm-3 skill"},l.a.createElement("i",{class:"icons devicon-git-plain colored"}),l.a.createElement("i",{class:"icons devicon-visualstudio-plain colored"}),l.a.createElement("br",null),l.a.createElement("i",{class:"icons devicon-linux-plain colored"}),l.a.createElement("i",{class:"icons devicon-github-plain colored"}),l.a.createElement("p",null," Other Technology Tools")))),l.a.createElement(ve,null)))}r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(u,null),l.a.createElement(b,null),l.a.createElement(S,null),l.a.createElement(U,null),l.a.createElement(pe,null),l.a.createElement(Ee,null),l.a.createElement("footer",{id:"footer"},l.a.createElement("h6",{className:"rights"},"Copyright \xa9 ",(new Date).getFullYear()," sammed.sankonatti")))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,a,t){e.exports=t.p+"static/media/ali-proflie.9ec29b45.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/pathfinding.0f23d6ec.png"},54:function(e,a,t){e.exports=t.p+"static/media/sorting.186f05f8.png"},63:function(e,a,t){e.exports=t(116)},68:function(e,a,t){},70:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.941890da.chunk.js.map