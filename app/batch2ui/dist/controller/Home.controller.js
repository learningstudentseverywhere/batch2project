sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("com.practice.batch2ui.controller.Home",{onInit:function(){},GetStudentFeesData:function(){let t="";let e=this;let n=this.getView().byId("inputValue1").getValue();let o="/odata/v4/school/StudentFees";let l=`?$filter=student_id eq '${n}'`;$.ajax({url:o+l,dataType:"json",success:function(n){t=n.value[0].fees_paid;e.getView().byId("inputValue2").setValue(t)},error:function(t){}})},CreateStudent:function(){let t=this.getView().getModel("localStudentModel");let e=t.getProperty("/studentId");let n=t.getProperty("/studentName");let o=t.getProperty("/parentName");let l="/odata/v4/school/Students";let a={student_id:e,student_name:n,parent_id:o};$.ajax({url:l,contentType:"application/json",type:"POST",data:JSON.stringify(a),dataType:"json",success:function(t){console.log("Success")},error:function(t){console.log("Error")}});console.log("End")},updateStudent:function(){let t=this.getView().getModel("localStudentModel");let e=t.getProperty("/updateStudentId");let n=t.getProperty("/updateStudentName");let o=`/odata/v4/school/Students(student_id='${e}')`;let l={student_name:n};$.ajax({url:o,contentType:"application/json",type:"PATCH",data:JSON.stringify(l),dataType:"json",success:function(t){console.log(t)},error:function(t){console.log(t)}})}})});
//# sourceMappingURL=Home.controller.js.map