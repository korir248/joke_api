(function(){"use strict";var e={3106:function(e,t,o){var s=o(9242),a=o(3396);function n(e,t,o,s,n,r){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}var r={name:"App"},l=o(89);const i=(0,l.Z)(r,[["render",n]]);var c=i,d=o(7139);const p={class:"container"},u={class:"row justify-content-center"},m={class:"col-8"},f={class:"card mt-5",style:{width:"100%"}},h={class:"card-body"},_=(0,a._)("h5",{class:"card-title"},"Get Random Joke",-1),k={key:0,class:"alert alert-success",role:"alert"},v={class:"alert-heading"},w=(0,a._)("hr",null,null,-1),y={class:"mb-0"},g={class:"mb-3"},b=(0,a._)("option",{value:""},"Select Joke Type",-1),j=["value"],x={key:0,class:"fs-6 text-danger float-start"},D=(0,a._)("button",{type:"submit",class:"btn btn-primary btn-joke float-end"}," Get Joke ",-1);function S(e,t,o,n,r,l){const i=(0,a.up)("MainNav");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a._)("div",p,[(0,a._)("div",u,[(0,a._)("div",m,[(0,a._)("div",f,[(0,a._)("div",h,[_,r.random_joke?((0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("h4",v,(0,d.zw)(r.random_joke["type"])+" Joke!",1),(0,a._)("p",null,(0,d.zw)(r.random_joke["setup"]),1),w,(0,a._)("p",y,(0,d.zw)(r.random_joke["punchline"]),1)])):(0,a.kq)("",!0),(0,a._)("form",{onSubmit:t[1]||(t[1]=(0,s.iM)(((...e)=>l.getRandomJoke&&l.getRandomJoke(...e)),["prevent"]))},[(0,a._)("div",g,[(0,a.wy)((0,a._)("select",{class:"form-select","aria-label":"Default select example",name:"joke_type","onUpdate:modelValue":t[0]||(t[0]=e=>r.form.joke_type=e)},[b,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.joke_types,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.type,value:e.type},(0,d.zw)(e.type),9,j)))),128))],512),[[s.bM,r.form.joke_type]]),r.form.joke_type?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",x," Please select a joke type "))]),D],32)])])])])])],64)}const J={class:"container"},C=(0,a._)("a",{href:"",class:"navbar-brand"},"Jokes API",-1),U=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarItems"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),M={class:"collapse navbar-collapse",id:"navbarItems"},T={class:"navbar-nav ms-auto py-3"},A={class:"nav-item"},I={class:"nav-item"},P={key:0,class:"nav-item"},F={key:1,class:"nav-item"},Z={class:"nav-item dropdown"},N={class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},O={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},Y=(0,a._)("li",null,[(0,a._)("hr",{class:"dropdown-divider"})],-1);function B(e,t,o,n,r,l){const i=(0,a.up)("router-link"),c=(0,a.up)("navbar");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(c,{class:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},{default:(0,a.w5)((()=>[(0,a._)("div",J,[C,U,(0,a._)("div",M,[(0,a._)("ul",T,[(0,a._)("li",A,[(0,a.Wm)(i,{class:"nav-link",to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1})]),(0,a._)("li",I,[(0,a.Wm)(i,{class:"nav-link",to:"/submit-joke"},{default:(0,a.w5)((()=>[(0,a.Uk)("Submit Joke")])),_:1})]),r.user?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",P,[(0,a.Wm)(i,{class:"nav-link",to:"/sign-up"},{default:(0,a.w5)((()=>[(0,a.Uk)("Sign Up")])),_:1})])),r.user?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",F,[(0,a.Wm)(i,{class:"nav-link",to:"/login"},{default:(0,a.w5)((()=>[(0,a.Uk)("Login")])),_:1})])),(0,a.wy)((0,a._)("li",Z,[(0,a._)("a",N,(0,d.zw)(r.user.fullname),1),(0,a._)("ul",O,[(0,a._)("li",null,[(0,a.Wm)(i,{class:"dropdown-item",to:"/dashboard"},{default:(0,a.w5)((()=>[(0,a.Uk)("Dashboard")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(i,{class:"dropdown-item",to:"/users"},{default:(0,a.w5)((()=>[(0,a.Uk)("Users")])),_:1})]),Y,(0,a._)("li",null,[(0,a._)("a",{class:"dropdown-item",href:"javascript:void(0)",onClick:t[0]||(t[0]=e=>l.logout())},"Logout")])])],512),[[s.F8,r.user]])])])])])),_:1})])}o(7658);var q={name:"MainNav",data(){return{user:""}},mounted(){let e=JSON.parse(localStorage.getItem("user"));e&&(this.user=e)},methods:{logout(){localStorage.clear(),this.$router.push({name:"Home"})}}};const z=(0,l.Z)(q,[["render",B]]);var E=z,H=o(4161),V=o(2492),W=o.n(V);window.Swal=W();const L=W().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=L;var R={name:"GetRandomJoke",components:{MainNav:E},data(){return{joke_types:{},random_joke:"",form:{joke_type:""}}},created(){this.getJokeTypes()},methods:{getJokeTypes(){H.Z.get("/get-joke-types").then((e=>{this.joke_types=e.data.data}))},getRandomJoke(){this.form.joke_type?H.Z.post("/get-random-joke",this.form).then((e=>{this.random_joke=e.data})):L.fire({icon:"error",title:"You have errors on your form."})}}};const K=(0,l.Z)(R,[["render",S]]);var $=K;const G={class:"container"},Q={class:"row justify-content-center"},X={class:"col-8"},ee={class:"card mt-5",style:{width:"100%"}},te={class:"card-body"},oe=(0,a._)("h5",{class:"card-title"},"Submit A Joke",-1),se={class:"mb-3"},ae=(0,a._)("option",{value:""},"Select Joke Type",-1),ne=["value"],re={key:0,class:"fs-6 text-danger float-start"},le={class:"mb-3"},ie={key:0,class:"fs-6 text-danger float-start"},ce={class:"mb-3"},de={key:0,class:"fs-6 text-danger float-start"},pe=(0,a._)("button",{type:"submit",class:"btn btn-primary btn-joke float-end"}," Submit Joke ",-1);function ue(e,t,o,n,r,l){const i=(0,a.up)("MainNav");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a._)("div",G,[(0,a._)("div",Q,[(0,a._)("div",X,[(0,a._)("div",ee,[(0,a._)("div",te,[oe,(0,a._)("form",{onSubmit:t[3]||(t[3]=(0,s.iM)((e=>l.saveJoke()),["prevent"]))},[(0,a._)("div",se,[(0,a.wy)((0,a._)("select",{class:"form-select","aria-label":"Default select example",name:"joke_type","onUpdate:modelValue":t[0]||(t[0]=e=>r.form.joke_type=e)},[ae,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.joke_types,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.type,value:e.type},(0,d.zw)(e.type),9,ne)))),128))],512),[[s.bM,r.form.joke_type]]),r.form.joke_type?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",re," Please select a joke type "))]),(0,a._)("div",le,[(0,a.wy)((0,a._)("input",{type:"text",name:"setup","onUpdate:modelValue":t[1]||(t[1]=e=>r.form.setup=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter joke setup"},null,512),[[s.nr,r.form.setup]]),r.form.setup?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",ie," Please input the joke setup "))]),(0,a._)("div",ce,[(0,a.wy)((0,a._)("textarea",{class:"form-control",name:"punchline","onUpdate:modelValue":t[2]||(t[2]=e=>r.form.punchline=e),id:"exampleFormControlTextarea1",placeholder:"Enter Punchline",rows:"3"},null,512),[[s.nr,r.form.punchline]]),r.form.punchline?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",de," Please enter the joke punchline "))]),pe],32)])])])])])],64)}window.Swal=W();const me=W().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=me;var fe={name:"SubmitJoke",components:{MainNav:E},data(){return{joke_types:{},form:{joke_type:"",setup:"",punchline:""}}},created(){this.getJokeTypes()},methods:{getJokeTypes(){H.Z.get("/get-joke-types").then((e=>{this.joke_types=e.data.data}))},saveJoke(){this.form.joke_type&&this.form.setup&&this.form.punchline?H.Z.post("/save-joke",this.form).then((e=>{me.fire({position:"top-end",icon:"success",title:"Joke Successfuly Submitted",showConfirmButton:!1,timer:1500}),this.$router.push({name:"Home"}),this.clearForm(),console.log(e)})):me.fire({icon:"error",title:"You have errors on your form."})},clearForm(){this.form.joke_type="",this.form.setup="",this.form.punchline=""}}};const he=(0,l.Z)(fe,[["render",ue]]);var _e=he;const ke={class:"container"},ve={class:"row justify-content-center"},we={class:"col-6"},ye={class:"card mt-5",style:{width:"100%"}},ge={class:"card-body"},be=(0,a._)("h5",{class:"card-title"},"Moderator Sign Up",-1),je={class:"mb-3"},xe={key:0,class:"fs-6 text-danger float-start"},De={class:"mb-3"},Se={key:0,class:"fs-6 text-danger float-start"},Je={class:"mb-3"},Ce={key:0,class:"fs-6 text-danger float-start"},Ue=(0,a._)("button",{type:"submit",class:"btn btn-primary btn-joke float-end"}," Sign Up ",-1);function Me(e,t,o,n,r,l){const i=(0,a.up)("MainNav");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a._)("div",ke,[(0,a._)("div",ve,[(0,a._)("div",we,[(0,a._)("div",ye,[(0,a._)("div",ge,[be,(0,a._)("form",{onSubmit:t[3]||(t[3]=(0,s.iM)((e=>l.signUp()),["prevent"]))},[(0,a._)("div",je,[(0,a.wy)((0,a._)("input",{type:"text",name:"name","onUpdate:modelValue":t[0]||(t[0]=e=>r.form.name=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Full Name"},null,512),[[s.nr,r.form.name]]),r.form.name?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",xe," Please enter full name "))]),(0,a._)("div",De,[(0,a.wy)((0,a._)("input",{type:"email",name:"email","onUpdate:modelValue":t[1]||(t[1]=e=>r.form.email=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Email"},null,512),[[s.nr,r.form.email]]),r.form.email?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",Se," Please enter your email "))]),(0,a._)("div",Je,[(0,a.wy)((0,a._)("input",{type:"password",name:"password","onUpdate:modelValue":t[2]||(t[2]=e=>r.form.password=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Password"},null,512),[[s.nr,r.form.password]]),r.form.password?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",Ce," Please enter your password "))]),Ue],32)])])])])])],64)}window.Swal=W();const Te=W().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=Te;var Ae={name:"SignUp",components:{MainNav:E},data(){return{form:{name:"",email:"",password:""}}},methods:{signUp(){this.form.name&&this.form.email&&this.form.password?H.Z.post("/sign-up",this.form).then((e=>{console.log(e),Te.fire({position:"top-end",icon:"success",title:"Successfuly Signed Up",showConfirmButton:!1,timer:1500}),this.$router.push({name:"Login"}),this.clearForm()})):Te.fire({icon:"error",title:"You have errors on your form."})},clearForm(){this.form.name="",this.form.email="",this.form.password=""}}};const Ie=(0,l.Z)(Ae,[["render",Me]]);var Pe=Ie;const Fe={class:"container"},Ze={class:"row justify-content-center"},Ne={class:"col-6"},Oe={class:"card mt-5",style:{width:"100%"}},Ye={class:"card-body"},Be=(0,a._)("h5",{class:"card-title"},"Moderator Login",-1),qe={class:"mb-3"},ze={key:0,class:"fs-6 text-danger float-start"},Ee={class:"mb-3"},He={key:0,class:"fs-6 text-danger float-start"},Ve=(0,a._)("button",{type:"submit",class:"btn btn-primary btn-joke float-end"}," Login ",-1);function We(e,t,o,n,r,l){const i=(0,a.up)("MainNav");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a._)("div",Fe,[(0,a._)("div",Ze,[(0,a._)("div",Ne,[(0,a._)("div",Oe,[(0,a._)("div",Ye,[Be,(0,a._)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)((e=>l.login()),["prevent"]))},[(0,a._)("div",qe,[(0,a.wy)((0,a._)("input",{type:"email",name:"email","onUpdate:modelValue":t[0]||(t[0]=e=>r.form.email=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Email"},null,512),[[s.nr,r.form.email]]),r.form.email?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",ze," Please enter full name "))]),(0,a._)("div",Ee,[(0,a.wy)((0,a._)("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=e=>r.form.password=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Password"},null,512),[[s.nr,r.form.password]]),r.form.password?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",He," Please enter password "))]),Ve],32)])])])])])],64)}window.Swal=W();const Le=W().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=Le;var Re={name:"SubmitJoke",components:{MainNav:E},data(){return{form:{email:"",password:""}}},methods:{login(){this.form.email&&this.form.password?H.Z.post("/login",this.form).then((e=>{localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),this.$router.push({name:"Dashboard"}),this.clearForm()})):Le.fire({icon:"error",title:"You have errors on your form."})},clearForm(){this.form.email="",this.form.password=""}}};const Ke=(0,l.Z)(Re,[["render",We]]);var $e=Ke,Ge=o.p+"img/not_found.033f0045.svg";const Qe={class:"container"},Xe={key:0,class:"row justify-content-center"},et={class:"col-12"},tt={class:"card mt-5",style:{width:"100%"}},ot={class:"card-body"},st={class:"mb-4"},at=(0,a._)("h5",{class:"card-title float-start"},"All Jokes",-1),nt={class:"table table-striped table-hover"},rt=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"#"),(0,a._)("th",{scope:"col"},"Joke Type"),(0,a._)("th",{scope:"col"},"Joke Setup"),(0,a._)("th",{scope:"col"},"Joke Punchline"),(0,a._)("th",{scope:"col"},"Is Approved")])],-1),lt={scope:"row"},it={class:"text-wrap",style:{width:"15rem"}},ct={key:0,class:"badge bg-warning text-dark"},dt={key:1,class:"badge bg-success text-dark"},pt=["onClick"],ut=["onClick"],mt={key:1,class:"row justify-content-center"},ft=(0,a._)("div",{class:"col-8"},[(0,a._)("div",{class:"card mt-5",style:{width:"100%"}},[(0,a._)("div",{class:"card-body"},[(0,a._)("img",{class:"mb-3",style:{width:"50%"},src:Ge}),(0,a._)("h5",null,"Sorry your account is not verified yet")])])],-1),ht=[ft],_t={class:"modal fade",id:"jokeModal",tabindex:"-1","aria-labelledby":"jokeLabel","aria-hidden":"true"},kt={class:"modal-dialog"},vt={class:"modal-content"},wt=(0,a._)("div",{class:"modal-header"},[(0,a._)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Update Joke"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),yt={class:"modal-body"},gt={class:"mb-3"},bt=["value"],jt={key:0,class:"fs-6 text-danger float-start"},xt={class:"mb-3"},Dt={key:0,class:"fs-6 text-danger float-start"},St={class:"mb-3"},Jt={key:0,class:"fs-6 text-danger float-start"},Ct={class:"mb-3"},Ut=(0,a._)("option",{value:"1"},"Approved",-1),Mt=(0,a._)("option",{value:"0"},"Rejected",-1),Tt=[Ut,Mt],At={key:0,class:"fs-6 text-danger float-start"},It={class:"modal-footer"},Pt=(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),Ft=(0,a._)("span",null,"Update",-1),Zt=[Ft];function Nt(e,t,o,n,r,l){const i=(0,a.up)("MainNav");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a._)("div",Qe,[1==r.user.is_approved?((0,a.wg)(),(0,a.iD)("div",Xe,[(0,a._)("div",et,[(0,a._)("div",tt,[(0,a._)("div",ot,[(0,a._)("div",st,[at,(0,a._)("button",{type:"button",class:"btn btn-primary float-end",onClick:t[0]||(t[0]=(0,s.iM)((e=>l.redirectToSubmitJoke()),["prevent"]))}," Add New Joke ")]),(0,a._)("table",nt,[rt,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.jokes,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("th",lt,(0,d.zw)(e.joke_id),1),(0,a._)("td",null,(0,d.zw)(e.type),1),(0,a._)("td",null,[(0,a._)("div",it,(0,d.zw)(e.setup),1)]),(0,a._)("td",null,(0,d.zw)(e.punchline),1),(0,a._)("td",null,[0==e.is_approved?((0,a.wg)(),(0,a.iD)("span",ct,"False")):((0,a.wg)(),(0,a.iD)("span",dt,"True"))]),(0,a._)("td",null,[(0,a._)("a",{class:"btn btn-sm btn-success mx-2",href:"javascript:void(0)",onClick:t=>l.editJoke(e)},"Edit",8,pt),(0,a._)("a",{class:"btn btn-sm btn-danger",href:"javascript:void(0)",onClick:t=>l.deleteJoke(e.joke_id)},"Delete",8,ut)])])))),128))])])])])])])):((0,a.wg)(),(0,a.iD)("div",mt,ht))]),(0,a._)("div",_t,[(0,a._)("div",kt,[(0,a._)("div",vt,[wt,(0,a._)("div",yt,[(0,a._)("form",{onSubmit:t[5]||(t[5]=(0,s.iM)((e=>l.updateJoke()),["prevent"]))},[(0,a._)("div",gt,[(0,a.wy)((0,a._)("select",{class:"form-select","aria-label":"Default select example",name:"joke_type","onUpdate:modelValue":t[1]||(t[1]=e=>r.form.joke_type=e)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.joke_types,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.id,value:e.type},(0,d.zw)(e.type),9,bt)))),128))],512),[[s.bM,r.form.joke_type]]),r.form.joke_type?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",jt," Please select a joke type "))]),(0,a._)("div",xt,[(0,a.wy)((0,a._)("input",{type:"text",name:"setup","onUpdate:modelValue":t[2]||(t[2]=e=>r.form.setup=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter joke setup"},null,512),[[s.nr,r.form.setup]]),r.form.setup?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",Dt," Please input the joke setup "))]),(0,a._)("div",St,[(0,a.wy)((0,a._)("textarea",{class:"form-control",name:"punchline","onUpdate:modelValue":t[3]||(t[3]=e=>r.form.punchline=e),id:"exampleFormControlTextarea1",placeholder:"Enter Punchline",rows:"3"},null,512),[[s.nr,r.form.punchline]]),r.form.punchline?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",Jt," Please enter the joke punchline "))]),(0,a._)("div",Ct,[(0,a.wy)((0,a._)("select",{class:"form-select","aria-label":"Default select example",name:"is_approved","onUpdate:modelValue":t[4]||(t[4]=e=>r.form.is_approved=e)},Tt,512),[[s.bM,r.form.is_approved]]),r.form.joke_type?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",At," Please approve or reject this joke "))])],32)]),(0,a._)("div",It,[Pt,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=(0,s.iM)((e=>l.updateJoke()),["prevent"]))},Zt)])])])])],64)}var Ot=o(2166);window.Swal=W();const Yt=W().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=Yt,window.bootstrap=Ot;var Bt={name:"Dash-board",components:{MainNav:E},data(){return{edit:!1,joke_types:{},jokes:{},user:"",form:{id:"",joke_type:"",setup:"",punchline:"",is_approved:""}}},created(){this.getAllJokes(),this.getJokeTypes()},mounted(){let e=JSON.parse(localStorage.getItem("user"));e&&(this.user=e)},methods:{getAllJokes(){H.Z.get(" /get-all-jokes").then((e=>{this.jokes=e.data.data}))},getJokeTypes(){H.Z.get(" /get-joke-types").then((e=>{this.joke_types=e.data.data}))},saveJoke(){H.Z.post("/save-joke-md",this.form).then((e=>{console.log(e)})),H.Z.post(" /save-joke",this.form).then((e=>{console.log(e),this.clearForm()}))},editJoke(e){this.edit=!0;let t=Ot.Modal.getOrCreateInstance(document.getElementById("jokeModal"));t.show(),this.fillJokeData(e)},redirectToSubmitJoke(){this.$router.push({name:"SubmitJoke"})},fillJokeData(e){this.form.joke_type=e.type,this.form.setup=e.setup,this.form.punchline=e.punchline,this.form.is_approved=e.is_approved,this.form.id=e.joke_id},updateJoke(){if(this.form.joke_type&&this.form.setup&&this.form.punchline&&this.form.is_approved){const e=localStorage.getItem("token");console.log(e);const t={headers:{"Content-Type":"application/json",Authorization:e}};H.Z.put(" /edit-joke",this.form,t).then((e=>{let t=Ot.Modal.getOrCreateInstance(document.getElementById("jokeModal"));t.hide(),this.getAllJokes(),console.log(e),this.clearForm(),Yt.fire({icon:"success",title:"The joke has been updated successfully."})})).catch((e=>{console.log(e),W().fire({icon:"error",title:"Something went wrong."})}))}else Yt.fire({icon:"error",title:"You have errors on your form."})},deleteJoke(e){W().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((t=>{if(t.value){const t=localStorage.getItem("token");console.log(t),H.Z["delete"](" /delete-joke",{headers:{Authorization:t},data:{id:e}}),W().fire("Deleted!","The joke has been deleted.","success"),this.getAllJokes()}}))},clearForm(){this.form.joke_type="",this.form.setup="",this.form.punchline=""}}};const qt=(0,l.Z)(Bt,[["render",Nt]]);var zt=qt;const Et={class:"container"},Ht={key:0,class:"row justify-content-center"},Vt={class:"col-12"},Wt={class:"card mt-5",style:{width:"100%"}},Lt={class:"card-body"},Rt=(0,a._)("div",{class:"mb-4"},[(0,a._)("h5",{class:"card-title float-start"},"All Users")],-1),Kt={class:"table table-striped table-hover"},$t=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"#"),(0,a._)("th",{scope:"col"},"Name"),(0,a._)("th",{scope:"col"},"Email"),(0,a._)("th",{scope:"col"},"Is Approved")])],-1),Gt={scope:"row"},Qt={class:"text-wrap",style:{width:"15rem"}},Xt={key:0,class:"badge bg-warning text-dark"},eo={key:1,class:"badge bg-success text-dark"},to=["onClick"],oo={key:1,class:"row justify-content-center"},so=(0,a._)("div",{class:"col-8"},[(0,a._)("div",{class:"card mt-5",style:{width:"100%"}},[(0,a._)("div",{class:"card-body"},[(0,a._)("img",{class:"mb-3",style:{width:"50%"},src:Ge}),(0,a._)("h5",null,"Sorry your account is not verified yet")])])],-1),ao=[so];function no(e,t,o,s,n,r){const l=(0,a.up)("MainNav");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l),(0,a._)("div",Et,[1==n.user.is_approved?((0,a.wg)(),(0,a.iD)("div",Ht,[(0,a._)("div",Vt,[(0,a._)("div",Wt,[(0,a._)("div",Lt,[Rt,(0,a._)("table",Kt,[$t,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.users,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.user_id},[(0,a._)("th",Gt,(0,d.zw)(e.user_id),1),(0,a._)("td",null,(0,d.zw)(e.fullname),1),(0,a._)("td",null,[(0,a._)("div",Qt,(0,d.zw)(e.email),1)]),(0,a._)("td",null,[0==e.is_approved?((0,a.wg)(),(0,a.iD)("span",Xt,"False")):((0,a.wg)(),(0,a.iD)("span",eo,"True"))]),(0,a._)("td",null,[0==e.is_approved?((0,a.wg)(),(0,a.iD)("a",{key:0,class:"btn btn-sm btn-success mx-2",href:"javascript:void(0)",onClick:t=>r.editUser(e)},"Approve",8,to)):(0,a.kq)("",!0)])])))),128))])])])])])])):((0,a.wg)(),(0,a.iD)("div",oo,ao))])],64)}window.Swal=W();const ro=W().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=ro,window.bootstrap=Ot;var lo={name:"AllUsers",components:{MainNav:E},data(){return{users:{},user:"",form:{user_id:""}}},created(){this.getAllUsers()},mounted(){let e=JSON.parse(localStorage.getItem("user"));e&&(this.user=e)},methods:{getAllUsers(){H.Z.get("/get-all-users").then((e=>{this.users=e.data.data}))},editUser(e){this.form.user_id=e.user_id,W().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, approve this user!"}).then((e=>{if(e.value){const e=localStorage.getItem("token");console.log(e);const t={headers:{"Content-Type":"application/json",Authorization:e}};H.Z.put("/edit-user",this.form,t).then((e=>{console.log(e),this.getAllUsers(),ro.fire({icon:"success",title:"The user has been approved successfully."})})).catch((e=>{console.log(e),W().fire({icon:"error",title:"Something went wrong."})}))}}))}}};const io=(0,l.Z)(lo,[["render",no]]);var co=io,po=o(678);const uo=[{name:"Home",component:$,path:"/"},{name:"SubmitJoke",component:_e,path:"/submit-joke"},{name:"SignUp",component:Pe,path:"/sign-up"},{name:"Login",component:$e,path:"/login"},{name:"Dashboard",component:zt,path:"/dashboard"},{name:"AllUsers",component:co,path:"/users"}],mo=(0,po.p7)({history:(0,po.PO)(),routes:uo});var fo=mo;window.Swal=W();const ho=W().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=ho,(0,s.ri)(c).use(fo).mount("#app")}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,s,a,n){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],a=e[d][1],n=e[d][2];for(var l=!0,i=0;i<s.length;i++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](s[i])}))?s.splice(i--,1):(l=!1,n<r&&(r=n));if(l){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,a,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,n,r=s[0],l=s[1],i=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(i)var d=i(o)}for(t&&t(s);c<r.length;c++)n=r[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},s=self["webpackChunkjokes"]=self["webpackChunkjokes"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(3106)}));s=o.O(s)})();
//# sourceMappingURL=app.a91e4f07.js.map