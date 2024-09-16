//@ui5-bundle com/practice/batch2ui/Component-preload.js
sap.ui.require.preload({
	"com/practice/batch2ui/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/practice/batch2ui/model/models","sap/ui/model/json/JSONModel"],function(e,t,i,n){"use strict";return e.extend("com.practice.batch2ui.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device");let t={studentId:"",studentName:"",parentName:"",updateStudentId:"",updateStudentName:""};this.setModel(new n(t),"localStudentModel")}})});
},
	"com/practice/batch2ui/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("com.practice.batch2ui.controller.App",{onInit:function(){}})});
},
	"com/practice/batch2ui/controller/Home.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("com.practice.batch2ui.controller.Home",{onInit:function(){},GetStudentFeesData:function(){let t="";let e=this;let n=this.getView().byId("inputValue1").getValue();let o="/odata/v4/school/StudentFees";let l=`?$filter=student_id eq '${n}'`;$.ajax({url:o+l,dataType:"json",success:function(n){t=n.value[0].fees_paid;e.getView().byId("inputValue2").setValue(t)},error:function(t){}})},CreateStudent:function(){let t=this.getView().getModel("localStudentModel");let e=t.getProperty("/studentId");let n=t.getProperty("/studentName");let o=t.getProperty("/parentName");let l="/odata/v4/school/Students";let a={student_id:e,student_name:n,parent_id:o};$.ajax({url:l,contentType:"application/json",type:"POST",data:JSON.stringify(a),dataType:"json",success:function(t){console.log("Success")},error:function(t){console.log("Error")}});console.log("End")},updateStudent:function(){let t=this.getView().getModel("localStudentModel");let e=t.getProperty("/updateStudentId");let n=t.getProperty("/updateStudentName");let o=`/odata/v4/school/Students(student_id='${e}')`;let l={student_name:n};$.ajax({url:o,contentType:"application/json",type:"PATCH",data:JSON.stringify(l),dataType:"json",success:function(t){console.log(t)},error:function(t){console.log(t)}})}})});
},
	"com/practice/batch2ui/i18n/i18n.properties":'# This is the resource bundle for com.practice.batch2ui\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=School Application\n\n#YDES: Application description\nappDescription=School Application\n#XTIT: Main view title\ntitle=School Application\n\n#XFLD,78\nflpTitle=Batch 2 School application\n',
	"com/practice/batch2ui/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.practice.batch2ui","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.14.2","toolsId":"989e919e-0856-48cb-ac49-b6c7a23a30cd"},"dataSources":{"mainService":{"uri":"odata/v4/school/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"ZBatch2Semobj-display":{"semanticObject":"ZBatch2Semobj","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.127.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.practice.batch2ui.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"com.practice.batch2ui.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteHome","pattern":":?query:","target":["TargetHome"]}],"targets":{"TargetHome":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Home","viewName":"Home"}}},"rootView":{"viewName":"com.practice.batch2ui.view.App","type":"XML","async":true,"id":"App"}}}',
	"com/practice/batch2ui/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/practice/batch2ui/view/App.view.xml":'<mvc:View controllerName="com.practice.batch2ui.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"com/practice/batch2ui/view/Home.view.xml":'<mvc:View\n  controllerName="com.practice.batch2ui.controller.Home"\n  xmlns:mvc="sap.ui.core.mvc"\n  displayBlock="true"\n  xmlns="sap.m"\n><Page\n    id="page"\n    title="{i18n>title}"\n  ><content><IconTabBar\n        id="idIconTabBarInlineMode"\n        headerMode="Inline"\n        expanded="{device>/isNoPhone}"\n        class="sapUiResponsiveContentPadding"\n      ><items><IconTabFilter\n            text="Get Student Data"\n            key="info"\n          ><VBox><HBox\n                class="sapUiMediumMarginBegin sapUiMediumMarginTop sapUiMediumMarginBottom"\n              ><Label\n                  id="inputLabel1"\n                  text="Enter Student Id"\n                  class="sapUiMediumMarginEnd"\n                /><Input\n                  id="inputValue1"\n                  value=""\n                /></HBox><Button\n                id="button1"\n                text="Get Fees Details"\n                press="GetStudentFeesData"\n                class="sapUiMediumMarginBegin sapUiTinyMarginTop sapUiMediumMarginBottom"\n              /><HBox\n                class="sapUiMediumMarginBegin sapUiTinyMarginTop sapUiMediumMarginBottom"\n              ><Label\n                  id="inputLabel2"\n                  text="Fees Details"\n                  class="sapUiMediumMarginEnd"\n                /><Input\n                  id="inputValue2"\n                  value=""\n                  editable="false"\n                /></HBox></VBox></IconTabFilter><IconTabFilter\n            text="Create Student"\n            key="attachments"\n          ><VBox><HBox\n                class="sapUiMediumMarginBegin sapUiMediumMarginTop sapUiMediumMarginBottom"\n              ><Label\n                  id="inputLabel3"\n                  text="Enter Student Id"\n                  class="sapUiMediumMarginEnd"\n                /><Input\n                  id="inputValue3"\n                  value="{localStudentModel>/studentId}"\n                /></HBox><HBox\n                class="sapUiMediumMarginBegin sapUiTinyMarginTop sapUiMediumMarginBottom"\n              ><Label\n                  id="inputLabel4"\n                  text="Student Name"\n                  class="sapUiMediumMarginEnd"\n                /><Input\n                  id="inputValue4"\n                  value="{localStudentModel>/studentName}"\n                /></HBox><HBox\n                class="sapUiMediumMarginBegin sapUiTinyMarginTop sapUiMediumMarginBottom"\n              ><Label\n                  id="inputLabel5"\n                  text="Parent Name"\n                  class="sapUiMediumMarginEnd"\n                /><Input\n                  id="inputValue5"\n                  value="{localStudentModel>/parentName}"\n                /></HBox><Button\n                id="button2"\n                text="Create Student"\n                press="CreateStudent"\n                class="sapUiMediumMarginBegin sapUiTinyMarginTop sapUiMediumMarginBottom"\n              /></VBox></IconTabFilter><IconTabFilter\n            text="Update Student Name"\n            key="notes"\n          ><HBox\n              class="sapUiMediumMarginBegin sapUiTinyMarginTop sapUiMediumMarginBottom"\n            ><Label\n                id="inputLabel6"\n                text="Student Id"\n                class="sapUiMediumMarginEnd"\n              /><Input\n                id="inputValue6"\n                value="{localStudentModel>/updateStudentId}"\n              /></HBox><HBox\n              class="sapUiMediumMarginBegin sapUiTinyMarginTop sapUiMediumMarginBottom"\n            ><Label\n                id="inputLabel7"\n                text="Student Name"\n                class="sapUiMediumMarginEnd"\n              /><Input\n                id="inputValue7"\n                value="{localStudentModel>/updateStudentName}"\n              /></HBox><Button\n              id="button3"\n              text="Update Student Name"\n              press="updateStudent"\n              class="sapUiMediumMarginBegin sapUiTinyMarginTop sapUiMediumMarginBottom"\n            /></IconTabFilter><IconTabFilter\n            text="People"\n            key="people"\n            count="34"\n          ><Text text="People content goes here ..." /></IconTabFilter></items></IconTabBar></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
