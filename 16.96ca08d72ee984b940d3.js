(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"//qd":function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),i=t("oBZk"),r=t("ZZ/e"),s=t("Ip0R"),a=t("06PF"),b=t("cfV7"),c=function(l,n,t,u){return new(t||(t=Promise))(function(e,o){function i(l){try{s(u.next(l))}catch(n){o(n)}}function r(l){try{s(u.throw(l))}catch(n){o(n)}}function s(l){l.done?e(l.value):new t(function(n){n(l.value)}).then(i,r)}s((u=u.apply(l,n||[])).next())})},p=function(l,n){var t,u,e,o,i={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,u&&(e=2&o[0]?u.return:o[0]?u.throw||((e=u.return)&&e.call(u),0):u.next)&&!(e=e.call(u,o[1])).done)return e;switch(u=0,e&&(o=[2&o[0],e.value]),o[0]){case 0:case 1:e=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,u=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(e=(e=i.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){i.label=o[1];break}if(6===o[0]&&i.label<e[1]){i.label=e[1],e=o;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(o);break}e[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(l,i)}catch(r){o=[6,r],u=0}finally{t=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},h=function(){function l(l,n,t,u,e){var o=this;this.manageStorage=l,this.router=n,this.loadingCtrl=t,this.emailService=u,this.toastController=e,this.isLoading=!0,this.name="Tito",this.emailAddress="tito@mail.com",this.sightings=[],this.presentLoading(),this.manageStorage.getSightingsForAllUsers().then(function(l){o.sightings=l,o.dismisLoading()}),this.manageStorage.getUserDetails().then(function(l){o.name=l.firstname,o.emailAddress=l.email})}return l.prototype.presentLoading=function(){return c(this,void 0,void 0,function(){var l,n=this;return p(this,function(t){switch(t.label){case 0:return this.isLoading=!0,l=this,[4,this.loadingCtrl.create().then(function(l){l.present().then(function(){n.isLoading||l.dismiss()})})];case 1:return l.loading=t.sent(),[2]}})})},l.prototype.dismisLoading=function(){return c(this,void 0,void 0,function(){return p(this,function(l){switch(l.label){case 0:return this.isLoading=!1,[4,this.loadingCtrl.dismiss()];case 1:return[2,l.sent()]}})})},l.prototype.exportAll=function(){return c(this,void 0,void 0,function(){var l=this;return p(this,function(n){return this.presentLoading(),this.emailService.requestEmail(this.emailAddress).then(function(n){l.showToast(200===n?"Email sent":"Gasp, issue with sending email..."),l.dismisLoading()}),[2]})})},l.prototype.showToast=function(l){return c(this,void 0,void 0,function(){return p(this,function(n){switch(n.label){case 0:return[4,this.toastController.create({showCloseButton:!0,closeButtonText:"OK",position:"bottom",message:l,color:"primary"})];case 1:return n.sent().present(),[2]}})})},l}(),d=t("ZYCi"),g=u.nb({encapsulation:2,styles:[],data:{}});function f(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,3,"ion-item",[],null,null,null,i.H,i.c)),u.ob(2,49152,null,0,r.m,[u.h,u.k],null,null),(l()(),u.pb(3,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["No sightings captured yet."]))],null,null)}function m(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,10,"ion-header",[],null,null,null,i.hb,i.C)),u.ob(1,49152,null,0,r.Pb,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,i.X,i.s)),u.ob(3,49152,null,0,r.fb,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.Z,i.u)),u.ob(5,49152,null,0,r.zb,[u.h,u.k],null,null),(l()(),u.pb(6,0,null,0,1,"ion-menu-button",[["color","light"]],null,null,null,i.L,i.g)),u.ob(7,49152,null,0,r.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(8,0,null,0,2,"ion-title",[],null,null,null,i.V,i.q)),u.ob(9,49152,null,0,r.db,[u.h,u.k],null,null),(l()(),u.Gb(-1,0,[" Export sightings "])),(l()(),u.pb(11,0,null,null,27,"ion-content",[["padding",""]],null,null,null,i.fb,i.A)),u.ob(12,49152,null,0,r.Ib,[u.h,u.k],null,null),(l()(),u.pb(13,0,null,0,23,"ion-card",[],null,null,null,i.ab,i.v)),u.ob(14,49152,null,0,r.Ab,[u.h,u.k],null,null),(l()(),u.pb(15,0,null,0,1,"ion-img",[["src","/assets/excel.png"]],null,null,null,i.jb,i.E)),u.ob(16,49152,null,0,r.Rb,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(17,0,null,0,4,"ion-card-header",[],null,null,null,i.cb,i.x)),u.ob(18,49152,null,0,r.Cb,[u.h,u.k],null,null),(l()(),u.pb(19,0,null,0,2,"ion-card-title",[],null,null,null,i.db,i.y)),u.ob(20,49152,null,0,r.Eb,[u.h,u.k],null,null),(l()(),u.Gb(-1,0,["Export to excel"])),(l()(),u.pb(22,0,null,0,14,"ion-card-content",[],null,null,null,i.bb,i.w)),u.ob(23,49152,null,0,r.Bb,[u.h,u.k],null,null),(l()(),u.pb(24,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Gb(25,null,["Hi ",""])),(l()(),u.pb(26,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["All sightings will be exported to an Excel spreadsheet, where each sighting is a different sheet."])),(l()(),u.pb(28,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["The spreadsheet will be sent to:"])),(l()(),u.pb(30,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),u.pb(31,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Gb(32,null,["",""])),(l()(),u.pb(33,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(34,0,null,0,2,"ion-button",[["aria-label","Export all sightings"],["color","secondary"],["expand","block"],["slot","start"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.exportAll()&&u),u},i.Y,i.t)),u.ob(35,49152,null,0,r.yb,[u.h,u.k],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),u.Gb(-1,0,["Export all sightings"])),(l()(),u.gb(16777216,null,0,1,null,f)),u.ob(38,16384,null,0,s.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,7,0,"light"),l(n,16,0,"/assets/excel.png"),l(n,35,0,"secondary","block","button"),l(n,38,0,0===(null==t.sightings?null:t.sightings.length))},function(l,n){var t=n.component;l(n,25,0,t.name),l(n,32,0,t.emailAddress)})}function x(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,1,"page-export",[],null,null,null,m,g)),u.ob(1,49152,null,0,h,[a.a,d.m,r.e,b.a,r.h],null,null)],null,null)}var y=u.lb("page-export",h,x,{},{},[]),v=t("gIcY");t.d(n,"ExportPageModuleNgFactory",function(){return w});var w=u.mb(e,[],function(l){return u.wb([u.xb(512,u.j,u.bb,[[8,[o.a,y]],[3,u.j],u.x]),u.xb(4608,s.l,s.k,[u.u,[2,s.s]]),u.xb(4608,v.p,v.p,[]),u.xb(4608,v.b,v.b,[]),u.xb(4608,r.rb,r.rb,[u.z,u.g]),u.xb(4608,r.ub,r.ub,[r.rb,u.j,u.q]),u.xb(4608,r.vb,r.vb,[r.rb,u.j,u.q]),u.xb(1073742336,s.b,s.b,[]),u.xb(1073742336,v.n,v.n,[]),u.xb(1073742336,v.e,v.e,[]),u.xb(1073742336,v.k,v.k,[]),u.xb(1073742336,r.c,r.c,[]),u.xb(1073742336,d.o,d.o,[[2,d.u],[2,d.m]]),u.xb(1073742336,e,e,[]),u.xb(1024,d.k,function(){return[[{path:"",component:h}]]},[])])})}}]);