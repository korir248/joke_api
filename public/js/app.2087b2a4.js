(function(){"use strict";var e={1232:function(e,t,o){var a=o(9242),n=o(3396);function s(e,t,o,a,s,r){const l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(l)}var r={name:"App"},l=o(89);const i=(0,l.Z)(r,[["render",s]]);var c=i,d=o(7139);const m={class:"container"},p={class:"row justify-content-center"},u={class:"col-8"},f={class:"card mt-5",style:{width:"100%"}},h={class:"card-body"},k=(0,n._)("h5",{class:"card-title"},"Get Random Joke",-1),_={key:0,class:"alert alert-success",role:"alert"},v={class:"alert-heading"},y=(0,n._)("hr",null,null,-1),w={class:"mb-0"},b={class:"mb-3"},g=(0,n._)("option",{value:""},"Select Joke Type",-1),j=["value"],x={key:0,class:"fs-6 text-danger float-start"},J=(0,n._)("button",{type:"submit",class:"btn btn-primary btn-joke float-end"}," Get Joke ",-1);function S(e,t,o,s,r,l){const i=(0,n.up)("MainNav");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(i),(0,n._)("div",m,[(0,n._)("div",p,[(0,n._)("div",u,[(0,n._)("div",f,[(0,n._)("div",h,[k,r.random_joke?((0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("h4",v,(0,d.zw)(r.random_joke["type"])+" Joke!",1),(0,n._)("p",null,(0,d.zw)(r.random_joke["setup"]),1),y,(0,n._)("p",w,(0,d.zw)(r.random_joke["punchline"]),1)])):(0,n.kq)("",!0),(0,n._)("form",{onSubmit:t[1]||(t[1]=(0,a.iM)(((...e)=>l.getRandomJoke&&l.getRandomJoke(...e)),["prevent"]))},[(0,n._)("div",b,[(0,n.wy)((0,n._)("select",{class:"form-select","aria-label":"Default select example",name:"joke_type","onUpdate:modelValue":t[0]||(t[0]=e=>r.form.joke_type=e)},[g,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.joke_types,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.type,value:e.type},(0,d.zw)(e.type),9,j)))),128))],512),[[a.bM,r.form.joke_type]]),r.form.joke_type?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",x," Please select a joke type "))]),J],32)])])])])])],64)}const D={class:"container"},C=(0,n._)("a",{href:"",class:"navbar-brand"},"Jokes API",-1),M=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarItems"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),T={class:"collapse navbar-collapse",id:"navbarItems"},U={class:"navbar-nav ms-auto py-3"},P={class:"nav-item"},F={class:"nav-item"},I={key:0,class:"nav-item"},O={key:1,class:"nav-item"},Z={class:"nav-item"},q={key:2,class:"nav-item"};function Y(e,t,o,s,r,l){const i=(0,n.up)("router-link"),c=(0,n.up)("navbar");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(c,{class:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},{default:(0,n.w5)((()=>[(0,n._)("div",D,[C,M,(0,n._)("div",T,[(0,n._)("ul",U,[(0,n._)("li",P,[(0,n.Wm)(i,{class:"nav-link",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1})]),(0,n._)("li",F,[(0,n.Wm)(i,{class:"nav-link",to:"/submit-joke"},{default:(0,n.w5)((()=>[(0,n.Uk)("Submit Joke")])),_:1})]),r.user?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("li",I,[(0,n.Wm)(i,{class:"nav-link",to:"/sign-up"},{default:(0,n.w5)((()=>[(0,n.Uk)("Sign Up")])),_:1})])),r.user?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("li",O,[(0,n.Wm)(i,{class:"nav-link",to:"/login"},{default:(0,n.w5)((()=>[(0,n.Uk)("Login")])),_:1})])),(0,n.wy)((0,n._)("li",Z,[(0,n.Wm)(i,{class:"nav-link",to:"/dashboard"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,d.zw)(r.user.fullname)+" Dashboard",1)])),_:1})],512),[[a.F8,r.user]]),r.user?((0,n.wg)(),(0,n.iD)("li",q,[(0,n._)("a",{class:"nav-link",href:"javascript:void(0)",onClick:t[0]||(t[0]=e=>l.logout())},"Logout")])):(0,n.kq)("",!0)])])])])),_:1})])}o(7658);var E={name:"MainNav",data(){return{user:""}},mounted(){let e=JSON.parse(localStorage.getItem("user"));e&&(this.user=e)},methods:{logout(){localStorage.clear(),this.$router.push({name:"Home"})}}};const N=(0,l.Z)(E,[["render",Y]]);var A=N,B=o(4161),z=o(2492),H=o.n(z);window.Swal=H();const V=H().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=V;var W={name:"GetRandomJoke",components:{MainNav:A},data(){return{joke_types:{},random_joke:"",form:{joke_type:""}}},created(){this.getJokeTypes()},methods:{getJokeTypes(){B.Z.get("/get-joke-types").then((e=>{this.joke_types=e.data.data}))},getRandomJoke(){this.form.joke_type?B.Z.post("/get-random-joke",this.form).then((e=>{this.random_joke=e.data})):V.fire({icon:"error",title:"You have errors on your form."})}}};const L=(0,l.Z)(W,[["render",S]]);var R=L;const $={class:"container"},K={class:"row justify-content-center"},G={class:"col-8"},Q={class:"card mt-5",style:{width:"100%"}},X={class:"card-body"},ee=(0,n._)("h5",{class:"card-title"},"Submit A Joke",-1),te={class:"mb-3"},oe=(0,n._)("option",{value:""},"Select Joke Type",-1),ae=["value"],ne={key:0,class:"fs-6 text-danger float-start"},se={class:"mb-3"},re={key:0,class:"fs-6 text-danger float-start"},le={class:"mb-3"},ie={key:0,class:"fs-6 text-danger float-start"},ce=(0,n._)("button",{type:"submit",class:"btn btn-primary btn-joke float-end"}," Submit Joke ",-1);function de(e,t,o,s,r,l){const i=(0,n.up)("MainNav");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(i),(0,n._)("div",$,[(0,n._)("div",K,[(0,n._)("div",G,[(0,n._)("div",Q,[(0,n._)("div",X,[ee,(0,n._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)((e=>l.saveJoke()),["prevent"]))},[(0,n._)("div",te,[(0,n.wy)((0,n._)("select",{class:"form-select","aria-label":"Default select example",name:"joke_type","onUpdate:modelValue":t[0]||(t[0]=e=>r.form.joke_type=e)},[oe,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.joke_types,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.type,value:e.type},(0,d.zw)(e.type),9,ae)))),128))],512),[[a.bM,r.form.joke_type]]),r.form.joke_type?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",ne," Please select a joke type "))]),(0,n._)("div",se,[(0,n.wy)((0,n._)("input",{type:"text",name:"setup","onUpdate:modelValue":t[1]||(t[1]=e=>r.form.setup=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter joke setup"},null,512),[[a.nr,r.form.setup]]),r.form.setup?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",re," Please input the joke setup "))]),(0,n._)("div",le,[(0,n.wy)((0,n._)("textarea",{class:"form-control",name:"punchline","onUpdate:modelValue":t[2]||(t[2]=e=>r.form.punchline=e),id:"exampleFormControlTextarea1",placeholder:"Enter Punchline",rows:"3"},null,512),[[a.nr,r.form.punchline]]),r.form.punchline?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",ie," Please enter the joke punchline "))]),ce],32)])])])])])],64)}window.Swal=H();const me=H().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=me;var pe={name:"SubmitJoke",components:{MainNav:A},data(){return{joke_types:{},form:{joke_type:"",setup:"",punchline:""}}},created(){this.getJokeTypes()},methods:{getJokeTypes(){B.Z.get("/get-joke-types").then((e=>{this.joke_types=e.data.data}))},saveJoke(){this.form.joke_type&&this.form.setup&&this.form.punchline?B.Z.post("/save-joke",this.form).then((e=>{me.fire({position:"top-end",icon:"success",title:"Joke Successfuly Submitted",showConfirmButton:!1,timer:1500}),this.$router.push({name:"Home"}),this.clearForm(),console.log(e)})):me.fire({icon:"error",title:"You have errors on your form."})},clearForm(){this.form.joke_type="",this.form.setup="",this.form.punchline=""}}};const ue=(0,l.Z)(pe,[["render",de]]);var fe=ue;const he={class:"container"},ke={class:"row justify-content-center"},_e={class:"col-6"},ve={class:"card mt-5",style:{width:"100%"}},ye={class:"card-body"},we=(0,n._)("h5",{class:"card-title"},"Moderator Sign Up",-1),be={class:"mb-3"},ge={key:0,class:"fs-6 text-danger float-start"},je={class:"mb-3"},xe={key:0,class:"fs-6 text-danger float-start"},Je={class:"mb-3"},Se={key:0,class:"fs-6 text-danger float-start"},De=(0,n._)("button",{type:"submit",class:"btn btn-primary btn-joke float-end"}," Sign Up ",-1);function Ce(e,t,o,s,r,l){const i=(0,n.up)("MainNav");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(i),(0,n._)("div",he,[(0,n._)("div",ke,[(0,n._)("div",_e,[(0,n._)("div",ve,[(0,n._)("div",ye,[we,(0,n._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)((e=>l.signUp()),["prevent"]))},[(0,n._)("div",be,[(0,n.wy)((0,n._)("input",{type:"text",name:"name","onUpdate:modelValue":t[0]||(t[0]=e=>r.form.name=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Full Name"},null,512),[[a.nr,r.form.name]]),r.form.name?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",ge," Please enter full name "))]),(0,n._)("div",je,[(0,n.wy)((0,n._)("input",{type:"email",name:"email","onUpdate:modelValue":t[1]||(t[1]=e=>r.form.email=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Email"},null,512),[[a.nr,r.form.email]]),r.form.email?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",xe," Please enter your email "))]),(0,n._)("div",Je,[(0,n.wy)((0,n._)("input",{type:"password",name:"password","onUpdate:modelValue":t[2]||(t[2]=e=>r.form.password=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Password"},null,512),[[a.nr,r.form.password]]),r.form.password?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",Se," Please enter your password "))]),De],32)])])])])])],64)}window.Swal=H();const Me=H().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=Me;var Te={name:"SignUp",components:{MainNav:A},data(){return{form:{name:"",email:"",password:""}}},methods:{signUp(){this.form.name&&this.form.email&&this.form.password?B.Z.post("/sign-up",this.form).then((e=>{console.log(e),Me.fire({position:"top-end",icon:"success",title:"Successfuly Signed Up",showConfirmButton:!1,timer:1500}),this.$router.push({name:"Login"}),this.clearForm()})):Me.fire({icon:"error",title:"You have errors on your form."})},clearForm(){this.form.name="",this.form.email="",this.form.password=""}}};const Ue=(0,l.Z)(Te,[["render",Ce]]);var Pe=Ue;const Fe={class:"container"},Ie={class:"row justify-content-center"},Oe={class:"col-6"},Ze={class:"card mt-5",style:{width:"100%"}},qe={class:"card-body"},Ye=(0,n._)("h5",{class:"card-title"},"Moderator Login",-1),Ee={class:"mb-3"},Ne={key:0,class:"fs-6 text-danger float-start"},Ae={class:"mb-3"},Be={key:0,class:"fs-6 text-danger float-start"},ze=(0,n._)("button",{type:"submit",class:"btn btn-primary btn-joke float-end"}," Login ",-1);function He(e,t,o,s,r,l){const i=(0,n.up)("MainNav");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(i),(0,n._)("div",Fe,[(0,n._)("div",Ie,[(0,n._)("div",Oe,[(0,n._)("div",Ze,[(0,n._)("div",qe,[Ye,(0,n._)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)((e=>l.login()),["prevent"]))},[(0,n._)("div",Ee,[(0,n.wy)((0,n._)("input",{type:"email",name:"email","onUpdate:modelValue":t[0]||(t[0]=e=>r.form.email=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Email"},null,512),[[a.nr,r.form.email]]),r.form.email?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",Ne," Please enter full name "))]),(0,n._)("div",Ae,[(0,n.wy)((0,n._)("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=e=>r.form.password=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Password"},null,512),[[a.nr,r.form.password]]),r.form.password?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",Be," Please enter password "))]),ze],32)])])])])])],64)}window.Swal=H();const Ve=H().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=Ve;var We={name:"SubmitJoke",components:{MainNav:A},data(){return{form:{email:"",password:""}}},methods:{login(){this.form.email&&this.form.password?B.Z.post("/login",this.form).then((e=>{localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),this.$router.push({name:"Dashboard"}),this.clearForm()})):Ve.fire({icon:"error",title:"You have errors on your form."})},clearForm(){this.form.email="",this.form.password=""}}};const Le=(0,l.Z)(We,[["render",He]]);var Re=Le;const $e={class:"container"},Ke={class:"row justify-content-center"},Ge={class:"col-12"},Qe={class:"card mt-5",style:{width:"100%"}},Xe={class:"card-body"},et={class:"mb-4"},tt=(0,n._)("h5",{class:"card-title float-start"},"All Jokes",-1),ot={class:"table table-striped table-hover"},at=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{scope:"col"},"#"),(0,n._)("th",{scope:"col"},"Joke Type"),(0,n._)("th",{scope:"col"},"Joke Setup"),(0,n._)("th",{scope:"col"},"Joke Punchline"),(0,n._)("th",{scope:"col"},"Is Approved")])],-1),nt={scope:"row"},st={class:"text-wrap",style:{width:"15rem"}},rt={key:0,class:"badge bg-warning text-dark"},lt={key:1,class:"badge bg-success text-dark"},it=["onClick"],ct=["onClick"],dt={class:"modal fade",id:"jokeModal",tabindex:"-1","aria-labelledby":"jokeLabel","aria-hidden":"true"},mt={class:"modal-dialog"},pt={class:"modal-content"},ut=(0,n._)("div",{class:"modal-header"},[(0,n._)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Update Joke"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ft={class:"modal-body"},ht={class:"mb-3"},kt=["value"],_t={key:0,class:"fs-6 text-danger float-start"},vt={class:"mb-3"},yt={key:0,class:"fs-6 text-danger float-start"},wt={class:"mb-3"},bt={key:0,class:"fs-6 text-danger float-start"},gt={class:"mb-3"},jt=(0,n._)("option",{value:"1"},"Approved",-1),xt=(0,n._)("option",{value:"0"},"Rejected",-1),Jt=[jt,xt],St={key:0,class:"fs-6 text-danger float-start"},Dt={class:"modal-footer"},Ct=(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),Mt=(0,n._)("span",null,"Update",-1),Tt=[Mt];function Ut(e,t,o,s,r,l){const i=(0,n.up)("MainNav");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(i),(0,n._)("div",$e,[(0,n._)("div",Ke,[(0,n._)("div",Ge,[(0,n._)("div",Qe,[(0,n._)("div",Xe,[(0,n._)("div",et,[tt,(0,n._)("button",{type:"button",class:"btn btn-primary float-end",onClick:t[0]||(t[0]=(0,a.iM)((e=>l.redirectToSubmitJoke()),["prevent"]))}," Add New Joke ")]),(0,n._)("table",ot,[at,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.jokes,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n._)("th",nt,(0,d.zw)(e.joke_id),1),(0,n._)("td",null,(0,d.zw)(e.type),1),(0,n._)("td",null,[(0,n._)("div",st,(0,d.zw)(e.setup),1)]),(0,n._)("td",null,(0,d.zw)(e.punchline),1),(0,n._)("td",null,[0==e.is_approved?((0,n.wg)(),(0,n.iD)("span",rt,"False")):((0,n.wg)(),(0,n.iD)("span",lt,"True"))]),(0,n._)("td",null,[(0,n._)("a",{class:"btn btn-sm btn-success mx-2",href:"javascript:void(0)",onClick:t=>l.editJoke(e)},"Edit",8,it),(0,n._)("a",{class:"btn btn-sm btn-danger",href:"javascript:void(0)",onClick:t=>l.deleteJoke(e.joke_id)},"Delete",8,ct)])])))),128))])])])])])])]),(0,n._)("div",dt,[(0,n._)("div",mt,[(0,n._)("div",pt,[ut,(0,n._)("div",ft,[(0,n._)("form",{onSubmit:t[5]||(t[5]=(0,a.iM)((e=>l.updateJoke()),["prevent"]))},[(0,n._)("div",ht,[(0,n.wy)((0,n._)("select",{class:"form-select","aria-label":"Default select example",name:"joke_type","onUpdate:modelValue":t[1]||(t[1]=e=>r.form.joke_type=e)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.joke_types,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.id,value:e.type},(0,d.zw)(e.type),9,kt)))),128))],512),[[a.bM,r.form.joke_type]]),r.form.joke_type?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",_t," Please select a joke type "))]),(0,n._)("div",vt,[(0,n.wy)((0,n._)("input",{type:"text",name:"setup","onUpdate:modelValue":t[2]||(t[2]=e=>r.form.setup=e),class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter joke setup"},null,512),[[a.nr,r.form.setup]]),r.form.setup?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",yt," Please input the joke setup "))]),(0,n._)("div",wt,[(0,n.wy)((0,n._)("textarea",{class:"form-control",name:"punchline","onUpdate:modelValue":t[3]||(t[3]=e=>r.form.punchline=e),id:"exampleFormControlTextarea1",placeholder:"Enter Punchline",rows:"3"},null,512),[[a.nr,r.form.punchline]]),r.form.punchline?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",bt," Please enter the joke punchline "))]),(0,n._)("div",gt,[(0,n.wy)((0,n._)("select",{class:"form-select","aria-label":"Default select example",name:"is_approved","onUpdate:modelValue":t[4]||(t[4]=e=>r.form.is_approved=e)},Jt,512),[[a.bM,r.form.is_approved]]),r.form.joke_type?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",St," Please approve or reject this joke "))])],32)]),(0,n._)("div",Dt,[Ct,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=(0,a.iM)((e=>l.updateJoke()),["prevent"]))},Tt)])])])])],64)}var Pt=o(2166);window.Swal=H();const Ft=H().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=Ft,window.bootstrap=Pt;var It={name:"Dash-board",components:{MainNav:A},data(){return{edit:!1,joke_types:{},jokes:{},form:{id:"",joke_type:"",setup:"",punchline:"",is_approved:""}}},created(){this.getAllJokes(),this.getJokeTypes()},methods:{getAllJokes(){B.Z.get("/get-all-jokes").then((e=>{this.jokes=e.data.data}))},getJokeTypes(){B.Z.get("/get-joke-types").then((e=>{this.joke_types=e.data.data}))},saveJoke(){B.Z.post("/save-joke",this.form).then((e=>{console.log(e),this.clearForm()}))},editJoke(e){this.edit=!0;let t=Pt.Modal.getOrCreateInstance(document.getElementById("jokeModal"));t.show(),this.fillJokeData(e)},redirectToSubmitJoke(){this.$router.push({name:"SubmitJoke"})},fillJokeData(e){this.form.joke_type=e.type,this.form.setup=e.setup,this.form.punchline=e.punchline,this.form.is_approved=e.is_approved,this.form.id=e.joke_id},updateJoke(){if(this.form.joke_type&&this.form.setup&&this.form.punchline&&this.form.is_approved){const e=localStorage.getItem("token");console.log(e);const t={headers:{"Content-Type":"application/json",Authorization:e}};B.Z.put("/edit-joke",this.form,t).then((e=>{let t=Pt.Modal.getOrCreateInstance(document.getElementById("jokeModal"));t.hide(),this.getAllJokes(),console.log(e),this.clearForm(),Ft.fire({icon:"success",title:"The joke has been updated successfully."})})).catch((e=>{console.log(e),H().fire({icon:"error",title:"Something went wrong."})}))}else Ft.fire({icon:"error",title:"You have errors on your form."})},deleteJoke(e){H().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((t=>{if(t.value){const t=localStorage.getItem("token");console.log(t),B.Z["delete"]("http://localhost:8081/delete-joke",{headers:{Authorization:t},data:{id:e}}),H().fire("Deleted!","The joke has been deleted.","success"),this.getAllJokes()}}))},clearForm(){this.form.joke_type="",this.form.setup="",this.form.punchline=""}}};const Ot=(0,l.Z)(It,[["render",Ut]]);var Zt=Ot,qt=o(678);const Yt=[{name:"Home",component:R,path:"/"},{name:"SubmitJoke",component:fe,path:"/submit-joke"},{name:"SignUp",component:Pe,path:"/sign-up"},{name:"Login",component:Re,path:"/login"},{name:"Dashboard",component:Zt,path:"/dashboard"}],Et=(0,qt.p7)({history:(0,qt.PO)(),routes:Yt});var Nt=Et;window.Swal=H();const At=H().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});window.Toast=At,(0,a.ri)(c).use(Nt).mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,s){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],s=e[d][2];for(var l=!0,i=0;i<a.length;i++)(!1&s||r>=s)&&Object.keys(o.O).every((function(e){return o.O[e](a[i])}))?a.splice(i--,1):(l=!1,s<r&&(r=s));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,n,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,s,r=a[0],l=a[1],i=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(i)var d=i(o)}for(t&&t(a);c<r.length;c++)s=r[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},a=self["webpackChunkjokes"]=self["webpackChunkjokes"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(1232)}));a=o.O(a)})();
//# sourceMappingURL=app.2087b2a4.js.map