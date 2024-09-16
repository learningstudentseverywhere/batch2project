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


        },
        CreateStudent : function(){
            //Get the details of new student from the UI
            let oModel = this.getView().getModel('localStudentModel');
            let studentid = oModel.getProperty("/studentId");
            let studentName = oModel.getProperty("/studentName");
            let parentName = oModel.getProperty("/parentName");


            //Ajax call for creating
            //Creating the URL
            let studentCreateurl = "/odata/v4/school/Students"


            //Payload
            let payload = {
                student_id:studentid,
                student_name : studentName,
                parent_id:parentName

            }

            //Ajax call
            $.ajax({
                url:studentCreateurl,
                contentType:"application/json",
                type:"POST",
                data:JSON.stringify(payload),
                dataType:"json",
                success:function(oResult){
                    console.log("Success");
                },
                error:function(oError){
                    console.log('Error');
                }
            })

            console.log("End")
        }, 
        updateStudent:function(){
            //Fetch values from UI
            let oModel = this.getView().getModel('localStudentModel');
            let studentid = oModel.getProperty("/updateStudentId");
            let studentName = oModel.getProperty("/updateStudentName");
           
            //URL
            let updateURL= `/odata/v4/school/Students(student_id='${studentid}')`;

            //Payload
            let payload = {
                student_name : studentName
            }

            //Ajax call
            $.ajax({
                url:updateURL,
                contentType:'application/json',
                type:"PATCH",
                data:JSON.stringify(payload),
                dataType:"json",
                success:function(oData){
                    console.log(oData);
                },
                error:function(oError){
                    console.log(oError);
                }
            })
        },
        DeleteStudent : function(){
             //Fetch values from UI
             let oModel = this.getView().getModel('localStudentModel');
             let studentid = oModel.getProperty("/deleteStudentId");

             
               //URL
               let deleteURL= `/odata/v4/school/Students(student_id='${studentid}')`;


                  //Ajax call
            $.ajax({
                url:deleteURL,
                contentType:'application/json',
                type:"DELETE",
                dataType:"json",
                success:function(oData){
                    console.log(oData);
                },
                error:function(oError){
                    console.log(oError);
                }
            })
            
        },
        AllStudentData : async function(){
            //Get all data 
              let url = "/odata/v4/school/Students"
              let oModel = this.getView().getModel('localStudentModel');
             
            //Normal way
            // $.ajax({
            //     url:url,
            //     dataType:"json",
            //     success:function(data){
            //        console.log(data)
            //        oModel.setProperty("/allStudentData",data.value)
            //     },
            //     error:function(error){
            //         console.log(error)
            //     }
            // })

            //Using Promises
            //Promise is used to make the javascript flow sequentia
            //await statement same as node.js to make the program run in sequesce mode
            //If we want to use await, the function has to be async

            let dataReceived = await this.fetchData();
            oModel.setProperty("/allStudentData",dataReceived.value)

        },
        fetchData : async function(){

            return new Promise((resolve,reject) => {
               //Inside this promise blockk, paste your code
               //Wherever you call the resolve, there at that point the promise will be completed
               //Until then the promise will be in pending state
               let url = "/odata/v4/school/Students"
               $.ajax({
                url:url,
                dataType:"json",
                success:function(data){
                  resolve(data);
                },
                error:function(error){
                    console.log(error)
                }
            })
            });
        }

    });
});
