const cds = require('@sap/cds');  //Importing the required Libraries


//If we use module.exports, then only the custom logic will be public for all other files
//Or else it will be a private variable and cannot be used by other files
module.exports = cds.service.impl(
  
  async function(){

//before,select query and request rejection
    this.before('CREATE','Students',async req => {
          let student_idFromUser = req.data.student_id;

          let HasStudentPaidTheFees = await SELECT.from('batch2Project_StudentFees').where({student_id:student_idFromUser});

          if(HasStudentPaidTheFees.length>0 && HasStudentPaidTheFees[0].fees_paid==1){
               
          }
          else{
            req.reject({
                   code : '500',
                   message : 'Please pay the fees before Creating record in the students table'
                });
          }
    });

//After event
    this.after('CREATE','Students',async req =>{
        let student_id = req.student_id
        let payloadForInsert = {
          student_id:student_id,
          message : "Successfully Created the Student"
        }

        let finalResult = await INSERT.into('batch2Project_Logs').entries(payloadForInsert);
          console.log(finalResult)
    });


    this.before('CREATE','EmployeeAttendance',async req =>{
          let employee_id = req.data.employee_id;
          let employee_has_access = await SELECT.from('batch2Project_EmployeeAccess').where({employee_id:employee_id});
          employee_has_access = employee_has_access[0].access_present;
          if(!employee_has_access){
              req.reject({
                code:'500',
                message : "Access Denied, Please contact Administrator"
              });
          }
    });


    this.after('CREATE','EmployeeAttendance',async req=>{
      let employee_id = req.employee_id;
      let payloadForInsert = {
         employee_id:employee_id,
         date:new Date().toISOString().split('T')[0]
      }
      await INSERT.into('batch2Project_EveryDayLunch').entries(payloadForInsert)
        console.log("Entered After");
    });

        
  
  }


);