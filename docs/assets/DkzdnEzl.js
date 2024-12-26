import{_ as p}from"./BfeqWGdb.js";import{_ as f}from"./DNn280Ok.js";import{_ as c,o as r,c as i,b as s,a as t,w as m,d as x,t as g,n as v,m as C}from"./k4apm0uG.js";const $={name:"HomeNavbar"},b={class:"navbar"},w={height:"100%"};function I(n,e,o,u,a,l){const h=p,d=f;return r(),i("div",b,[s(h),t("div",w,[s(d,{to:"/portfolio",height:"100%"},{default:m(()=>e[0]||(e[0]=[t("button",null,"Portfolio",-1)])),_:1}),s(d,{to:"/contact",height:"100%"},{default:m(()=>e[1]||(e[1]=[t("button",null,"Contact",-1)])),_:1})])])}const k=c($,[["render",I]]),L={name:"HomeSubtext",data(){return{texts:[{text:"Data Scientist",color:"red"},{text:"Audio Engineer",color:"yellow"},{text:"Web Developer",color:"green"},{text:"Software Developer",color:"mauve"}],displayText:" ",currentTextIndex:0,currentCharIndex:0,isDeleting:!1}},mounted(){this.type()},methods:{type(){const e=this.texts[this.currentTextIndex].text;this.isDeleting?(this.displayText=e.substring(0,this.currentCharIndex-1),this.currentCharIndex--):(this.displayText=e.substring(0,this.currentCharIndex+1),this.currentCharIndex++),!this.isDeleting&&this.currentCharIndex===e.length?setTimeout(()=>this.isDeleting=!0,1e3):this.isDeleting&&this.currentCharIndex===0&&(this.isDeleting=!1,this.currentTextIndex=(this.currentTextIndex+1)%this.texts.length),setTimeout(this.type,this.isDeleting?100:200)}},computed:{currentColor(){return`var(--${this.texts[this.currentTextIndex].color})`}}},T={class:"subtext"};function y(n,e,o,u,a,l){return r(),i("div",T,[t("h2",{style:v({color:l.currentColor})},[e[0]||(e[0]=t("span",null,"- ",-1)),x(g(a.displayText),1)],4)])}const S=c(L,[["render",y],["__scopeId","data-v-68a7f8e4"]]),D=""+new URL("SoundGirlBackground.D2n_bN2q.jpg",import.meta.url).href,H=""+new URL("SoundGirlRoto.Xov3KCNu.png",import.meta.url).href,N={name:"HomeHexPhoto",props:{hexColor:{type:String,default:"var(--green)"}},mounted(){const n=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&(this.$refs.hexContainer.classList.add("animate-entrance"),n.unobserve(o.target),setTimeout(()=>{this.$refs.hexContainer.classList.add("animate")},1e3))})},{threshold:.1});n.observe(this.$refs.hexContainer),window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const e=10+window.scrollY*-.01;this.$refs.foregroundImage.style.transform=`translateY(${e}px) translateX(-15px)`}}},B={class:"hex-container",ref:"hexContainer"},V={viewBox:"-5 -5 110 110",class:"hex-svg"},E=["stroke"],G={class:"image-mask",mask:"url(#hexMask)"},M={class:"hex-image background-image",ref:"backgroundImage",href:D,width:"110%",height:"110%"},R={class:"hex-image foreground-image",ref:"foregroundImage",href:H,width:"115%",height:"115%"};function A(n,e,o,u,a,l){return r(),i("div",B,[(r(),i("svg",V,[e[0]||(e[0]=C(`<defs data-v-d89e5e3f><mask id="hexMask" data-v-d89e5e3f><path d="M 5 50
                             L 5 32.5
                             C 5 25 5 25 11.75 21.4
                             L 43.25 4.6
                             C 50 1 50 1 56.75 4.6
                             L 88.25 21.4
                             C 95 25 95 25 95 32.5
                             L 95 67.5
                             C 95 75 95 75 88.25 78.6
                             L 56.75 95.4
                             C 50 99 50 99 43.25 95.4
                             L 11.75 78.6
                             C 5 75 5 75 5 67.5
                             Z" fill="white" filter="url(#roundCorners)" data-v-d89e5e3f></path></mask><filter id="roundCorners" data-v-d89e5e3f><feGaussianBlur in="SourceGraphic" stdDeviation="0.75" data-v-d89e5e3f></feGaussianBlur><feComponentTransfer data-v-d89e5e3f><feFuncA type="linear" slope="2.5" intercept="0" data-v-d89e5e3f></feFuncA></feComponentTransfer></filter></defs>`,1)),t("path",{class:"glowing-shape",d:`M 5 50
                                           L 5 32.5
                                           C 5 25 5 25 11.75 21.4
                                           L 43.25 4.6
                                           C 50 1 50 1 56.75 4.6
                                           L 88.25 21.4
                                           C 95 25 95 25 95 32.5
                                           L 95 67.5
                                           C 95 75 95 75 88.25 78.6
                                           L 56.75 95.4
                                           C 50 99 50 99 43.25 95.4
                                           L 11.75 78.6
                                           C 5 75 5 75 5 67.5
                                           Z`,fill:"none","stroke-width":"2",stroke:o.hexColor},null,8,E),t("g",G,[t("image",M,null,512),t("image",R,null,512)])]))],512)}const O=c(N,[["render",A],["__scopeId","data-v-d89e5e3f"]]),P=""+new URL("BoomOp.6paUcs3z.png",import.meta.url).href,U={name:"Home"},j={class:"home"},Q={class:"landing"},Y={class:"left-text"},z={class:"about"},F={class:"left-image"};function X(n,e,o,u,a,l){const h=k,d=S,_=O;return r(),i("div",j,[s(h),t("div",Q,[e[1]||(e[1]=t("span",{class:"background-lambda"},"λ",-1)),t("div",Y,[e[0]||(e[0]=t("h1",null,"Quinn Valencia Cecil",-1)),s(d)]),e[2]||(e[2]=t("div",{class:"right-image"},[t("img",{src:P,alt:"Quinn Valencia Cecil"})],-1))]),t("div",z,[t("div",F,[s(_,{"hex-color":"var(--green)"})]),e[3]||(e[3]=t("div",{class:"right-text"},[t("h2",null,"About Me"),t("p",null,"Hi! I'm Quinn, a full stack developer with a background in audio engineering. I love creating things, whether it's a new song or a new app. I'm passionate about accessibility and making the web a better place for everyone. I'm currently looking for new opportunities to grow and learn."),t("button",null,"Resume")],-1))]),e[4]||(e[4]=t("div",{class:"skills"},[t("h2",null,"Skills")],-1)),e[5]||(e[5]=t("div",{class:"portfolio"},[t("h2",null,"Portfolio")],-1))])}const W=c(U,[["render",X],["__scopeId","data-v-e42ec628"]]);export{W as default};