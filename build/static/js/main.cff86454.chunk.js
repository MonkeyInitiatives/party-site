(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=n(1),l=n(2),s=n(4),u=n(3),m=n(5),d=(n(14),{jumbotron:{textAlign:"center",color:"white",background:"none",textShadow:"2px 2px #000000"}});var b=function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:"the-jumbotron",style:{background:"none"}},o.a.createElement("div",{className:"container",style:d.jumbotron},o.a.createElement("h1",{className:"display-4"},"August Bootcamp Demo Day!"),o.a.createElement("p",{className:"lead"},"August 6th, 2020"),o.a.createElement("p",{className:"lead"},"Will you be ready!")))},p=n(8),h=n.n(p),y={container:{paddingTop:"50px",paddingBottom:"50px",paddingLeft:"0px",paddingRight:"0px",display:"flex",flexWrap:"wrap",margin:"0 auto",justifyContent:"center"}},g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={playConfetti:!1},n.setIsShown=function(e){document.getElementById("no-button").style.visibility=!0===e?"hidden":"visible"},n.buttonClicked=function(){console.log("good"),n.setState({playConfetti:!0})},n.showGreeting=function(){return document.getElementById("the-jumbotron").style.display="none",o.a.createElement("div",{className:"greeting-class"},o.a.createElement("h1",null,"Heck yeah!"),o.a.createElement("br",null),o.a.createElement("h2",null,"It is going to be fun and exciting!"))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.playConfetti;return o.a.createElement("main",{className:"container",id:"gameBoard",style:y.container},o.a.createElement(h.a,{run:this.state.playConfetti}),!1===t&&o.a.createElement("div",{id:"button-div",onMouseEnter:function(){return e.setIsShown(!0)},onMouseLeave:function(){return e.setIsShown(!1)}},o.a.createElement("button",{type:"button",className:"btn btn-primary",id:"yes-button",style:{margin:"20px"},onClick:this.buttonClicked},"Yes"),o.a.createElement("button",{type:"button",className:"btn btn-primary",id:"no-button",style:{margin:"20px"}},"No")),!0===t&&this.showGreeting())}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).theDate="August 6, 2020 18:30:00 GMT-05:00",n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"formatDate",value:function(e){var t=new Date(e),n=new Date;return Math.ceil((t.getTime()-n.getTime())/36e5)}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{style:{textAlign:"center"}},this.formatDate(this.theDate)," Hours Remaining"),o.a.createElement(b,null),o.a.createElement(g,{theDate:this.theDate}))}}]),t}(a.Component);i.a.render(o.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.cff86454.chunk.js.map