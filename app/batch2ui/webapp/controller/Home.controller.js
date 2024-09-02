sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.practice.batch2ui.controller.Home", {
        onInit: function () {

        }, 
        GetStudentFeesData : function(){
            let feesOfStudent = ""
            let that = this 
            //The input from the UI
            let studentId = this.getView().byId("inputValue1").getValue();

            //Building the URL of CAPM Service
            let url = "/odata/v4/school/StudentFees"
            let FilterUrl = `?$filter=student_id eq '${studentId}'`

            //ajax
            //Get
            $.ajax({
                url:url+FilterUrl,
                dataType:"json",
                success:function(data){
                    feesOfStudent = data.value[0].fees_paid;
                    that.getView().byId("inputValue2").setValue(feesOfStudent)
                },
                error:function(error){
                   
                }
            })


        }
    });
});
