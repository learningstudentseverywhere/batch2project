sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("com.practice.batch2ui.controller.Home",{onInit:function(){},GetStudentFeesData:function(){let e="";let t=this;let n=this.getView().byId("inputValue1").getValue();let u="/odata/v4/school/StudentFees";let i=`?$filter=student_id eq '${n}'`;$.ajax({url:u+i,dataType:"json",success:function(n){e=n.value[0].fees_paid;t.getView().byId("inputValue2").setValue(e)},error:function(e){}})}})});
//# sourceMappingURL=Home.controller.js.map