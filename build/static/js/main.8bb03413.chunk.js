(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{18:function(e,a,t){e.exports=t(33)},23:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(16),r=t.n(c),s=t(13),i=(t(23),t(1)),m=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,s=m.includes(c)?c:m[0],u=o.includes(r)?r:o[0];return l.a.createElement(i.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))};t(29);var E=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!0),m=Object(s.a)(r,2),o=m[0],E=m[1],b=function(){return c(!1)},d=function(){window.innerWidth<=960?E(!1):E(!0)};return Object(n.useEffect)((function(){d()}),[]),window.addEventListener("resize",d),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:b},"Q&Q",l.a.createElement("i",{class:"fas fa-baby-carriage"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/",className:"nav-links",onClick:b},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/services",className:"nav-links",onClick:b},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/products",className:"nav-links",onClick:b},"Products")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/sign-up",className:"nav-links-mobile",onClick:b},"Sign Up"))),o&&l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))};t(8),t(30);var b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(i.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var d=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Look at my family!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img-10.jpeg",text:"When we ate at Pasir Ris",label:"Services",path:"/services"}),l.a.createElement(b,{src:"images/img-19.jpg",text:"This was makan makan at Badoque",label:"Services",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img-12.jpg",text:"Qaizer in Nenek lap",label:"Services",path:"/services"}),l.a.createElement(b,{src:"images/img-13.jpg",text:"Qayla Birthday",label:"Products",path:"/products"}),l.a.createElement(b,{src:"images/img-14.jpg",text:"Qayla Birthday",label:"Sign Up",path:"/sign-up"})))))};t(31);var p=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-4.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"QAIZER QAYLA"),l.a.createElement("p",null,"Coming Soon"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"Who are we?"),l.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"WATCH us in ACTION ",l.a.createElement("i",{className:"far fa-play-circle"}))))};t(32);var v=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Sign up for Q&Q newsletter"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(i.b,{to:"/sign-up"},"How it works"),l.a.createElement(i.b,{to:"/sign-up"},"Testimonials"),l.a.createElement(i.b,{to:"/"},"Careers"),l.a.createElement(i.b,{to:"/"},"Investors"),l.a.createElement(i.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(i.b,{to:"/"},"Contact"),l.a.createElement(i.b,{to:"/"},"Support"),l.a.createElement(i.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Products"),l.a.createElement(i.b,{to:"/"},"Submit Products"),l.a.createElement(i.b,{to:"/"},"Ambassadors"),l.a.createElement(i.b,{to:"/"},"Agency"),l.a.createElement(i.b,{to:"/"},"Influencer")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(i.b,{to:"/"},"Instagram"),l.a.createElement(i.b,{to:"/"},"Facebook"),l.a.createElement(i.b,{to:"/"},"Youtube"),l.a.createElement(i.b,{to:"/"},"Twitter")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(i.b,{to:"",className:"social-logo"},"Q&Q",l.a.createElement("i",{class:"fas fa-baby-carriage"}))),l.a.createElement("small",{class:"website-rights"},"Q&Q \xa9 2020"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(i.b,{class:"social-icon-link facebook",to:"https://www.facebook.com/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(i.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(i.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(d,null),l.a.createElement(v,null))},g=t(2);function N(){return l.a.createElement("h1",{className:"services"},"Page reserved for services")}function k(){return l.a.createElement("h1",{className:"products"},"Page reserved for products")}function h(){return l.a.createElement("div",{className:"signup-container"},l.a.createElement("h1",null," See You Soon!"),l.a.createElement("video",{src:"/videos/video-3.mp4",autoPlay:!0,loop:!0,muted:!0}))}var _=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(E,null),l.a.createElement(g.c,null,l.a.createElement(g.a,{path:"/",exact:!0,component:f}),l.a.createElement(g.a,{path:"/services",component:N}),l.a.createElement(g.a,{path:"/products",component:k}),l.a.createElement(g.a,{path:"/sign-up",component:h}))))};r.a.render(l.a.createElement(_,null),document.getElementById("root"))},8:function(e,a,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.8bb03413.chunk.js.map