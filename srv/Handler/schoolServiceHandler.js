var schoolServiceHandler = async function(that,cds) {
//before,select query and request rejection
that.before('CREATE','Students',async req => {
    let student_idFromUser = req.data.student_id;

    let HasStudentPaidTheFees = await SELECT.from('batch2Project_StudentFees').where({student_id:student_idFromUser});

    if(HasStudentPaidTheFees.length>0 && HasStudentPaidTheFees[0].FEES_PAID==1){
         
    }
    else{
      req.reject({
             code : '500',
             message : 'Please pay the fees before Creating record in the students table'
          });
    }
});

//After event
that.after('CREATE','Students',async req =>{
  let student_id = req.student_id
  let payloadForInsert = {
    student_id:student_id,
    message : "Successfully Created the Student"
  }

  let finalResult = await INSERT.into('batch2Project_Logs').entries(payloadForInsert);
    console.log(finalResult)
});


that.before('CREATE','EmployeeAttendance',async req =>{
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


that.after('CREATE','EmployeeAttendance',async req=>{
let employee_id = req.employee_id;
let payloadForInsert = {
   employee_id:employee_id,
   date:new Date().toISOString().split('T')[0]
}
await INSERT.into('batch2Project_EveryDayLunch').entries(payloadForInsert)
  console.log("Entered After");
});


that.on('READ','CompleteStudentInfo',async req=> {
let student_idFromUser = req.params[0].student_id;
let StudentName = await SELECT.from('batch2Project_Students').where({student_id:student_idFromUser});
StudentName = StudentName[0].student_name

let StudentMarks = await SELECT.from('batch2Project_StudentMarks').where({student_id:student_idFromUser});

let StudentFees = await SELECT.from('batch2Project_StudentFees').where({student_id:student_idFromUser});
    StudentFees = StudentFees[0].fees_paid

let response = {
  student_id : student_idFromUser,         //5000
  student_name : StudentName,
  Marks : StudentMarks,
  fees_paid : StudentFees
}

req.reply(response);

console.log("Entered on Handler");
});

//Function
that.on('GetAllData',async req=>{
  let finalResult = {
        SchoolData:[],
        EmployeeData:[],
        StaffData:[]
  }

  let SchoolDataValue = await SELECT.from('batch2Project_Students').columns("student_id","student_name");
  let EmployeeDataValue = await SELECT.from('batch2Project_Employee');
  let StaffDataValue = await SELECT.from('batch2Project_staff').columns("staff_name");

  finalResult.SchoolData = SchoolDataValue;
  finalResult.EmployeeData = EmployeeDataValue;
  finalResult.StaffData = StaffDataValue

  return finalResult;

});

//Action
that.on('GetAllDataviaAction',async req=>{
  console.log('Entered Action');
  let finalResult = {
    SchoolData:[],
    EmployeeData:[],
    StaffData:[]
}

let SchoolDataValue = await SELECT.from('batch2Project_Students').columns("student_id","student_name");
let EmployeeDataValue = await SELECT.from('batch2Project_Employee');
let StaffDataValue = await SELECT.from('batch2Project_staff').columns("staff_name");

finalResult.SchoolData = SchoolDataValue;
finalResult.EmployeeData = EmployeeDataValue;
finalResult.StaffData = StaffDataValue

return finalResult;
});

that.on('IncreasenoofdaysbyTen',async req=>{
  
  //Get the table to be fetched
   let tableName = req.target;

   //Get the student data which is selected by user to be modified 
   let studentData = await SELECT.from(tableName).where(req.query.SELECT.from.ref[0].where);
 
   //Getting the student id and draft type
   const [{student_id,IsActiveEntity}] = req.params;

   //Changing the value of no of days
   studentData[0].no_of_days_Present = studentData[0].no_of_days_Present + 10;

   //Updating the db
   await UPDATE.entity(tableName).data(studentData[0]).where({student_id:student_id});

   //Refershing the UI
   return that.read(tableName,{student_id,IsActiveEntity});
  
});

that.on('IncreasebyCustomValue',async req=>{
  console.log("Entered Custom Action");
  //Get the table to be fetched
  let tableName = req.target;

  //Get the student data which is selected by user to be modified 
  let studentData = await SELECT.from(tableName).where(req.query.SELECT.from.ref[0].where);

  //Getting the student id and draft type
  const [{student_id,IsActiveEntity}] = req.params;

  //Changing the value of no of days
  studentData[0].no_of_days_Present = studentData[0].no_of_days_Present + req.data.inputDays;

  //Updating the db
  await UPDATE.entity(tableName).data(studentData[0]).where({student_id:student_id});

  //Refershing the UI
  return that.read(tableName,{student_id,IsActiveEntity});
})
}

module.exports =schoolServiceHandler;