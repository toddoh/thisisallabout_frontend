(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/wid":function(e,t,a){"use strict";a.r(t),a.d(t,"init_render",function(){return o});var r=a("AaG5");a("1Ue7");function o(){const e=(e,t)=>{t||(t=window.location.href),e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null==a?null:a[1]};if(localStorage.getItem("tiaa_stuart_edt_ac_t")){var t;t="//thisisallabout.com:5020/members";var o={"x-access-token":localStorage.getItem("tiaa_stuart_edt_ac_t")};document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(t,{method:"GET",headers:o}).then(e=>e.json()).then(function(t){if(t.username){const t=[{id:"nav-editorial-track",name:"Tracker",path:"editorialfloor/track"},{id:"nav-editorial-datasetextract",name:"Dataset Extractor",path:"editorialfloor/datasetextract"},{id:"nav-editorial-monthlycluster",name:"MonthlyCluster Editor",path:"editorialfloor/monthlycluster"}],i=()=>r["a"]`
                    <p class="section-guide">EDITORIALCONSOLE</p>
                    <ul class="sections-list editorial">
                        ${t.map(e=>r["a"]`
                            <li data-sectionid="${e.id}"><a href="/${e.path}">${e.name}</a></li>
                        `)}
                    </ul>
                `;var o=document.createElement("div");o.setAttribute("class","sections-group editorial");var n=document.querySelector(".minion-sections");n.querySelector(".developer").after(o),Object(r.b)(i(),n.querySelector(".editorial")),$(".stuart-sections-reveal").on("click",function(e){document.querySelector(".minion-stuartbox").classList.contains("opened")?document.querySelector(".minion-stuartbox").classList.remove("opened"):document.querySelector(".minion-stuartbox").classList.add("opened")}),$(".minion-editorial-header .stuart-action-logout").on("click",function(e){confirm("Are you sure you want to signout from editorial console?")&&(localStorage.removeItem("tiaa_stuart_edt_ac_t"),window.location.href=window.location.protocol+"//"+window.location.host+"/editorialfloor")}),""!==e("type")&&null!==e("type")?a("ARze")("./"+e("type")).then(e=>{e.init_render()}):Promise.all([a.e(0),a.e(1),a.e(4),a.e(5)]).then(a.bind(null,"fXJO")).then(e=>{e.init_render()})}else alert("Unable to verify editorial auth credentials"),localStorage.removeItem("tiaa_stuart_edt_ac_t"),a.e(13).then(a.bind(null,"+gsa")).then(e=>{e.init_render()})}).catch(e=>alert("Unable to verify editorial auth credentials. ERR_MSG_CODE: "+e))}else a.e(13).then(a.bind(null,"+gsa")).then(e=>{e.init_render()})}},"1Ue7":function(e,t,a){},ARze:function(e,t,a){var r={"./auth":["+gsa",13],"./auth.js":["+gsa",13],"./datasetextract":["GVee",11],"./datasetextract.js":["GVee",11],"./datasetextract_wts":["PIaM",1,8],"./datasetextract_wts.js":["PIaM",1,8],"./monthlycluster":["OsU7",0,9],"./monthlycluster.js":["OsU7",0,9],"./theyearframe":["0Lbv",0,10],"./theyearframe.js":["0Lbv",0,10],"./track":["fXJO",0,1,4,5],"./track.js":["fXJO",0,1,4,5]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(a.e)).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="ARze",e.exports=o}}]);