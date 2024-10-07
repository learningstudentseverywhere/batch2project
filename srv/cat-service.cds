using {batch2Project as dbTables} from '../db/data-model';

//       ./ --> Search within the folder
//       ../ --> Search outside the folder

service school{
    entity Students as projection on dbTables.Students  actions{
        @Common.IsActionCritical:true
        action IncreasenoofdaysbyTen() returns Students;

        
        action IncreasebyCustomValue(inputDays:Integer @mandatory) returns Students;
    };
    entity StudentMarks as projection on dbTables.StudentMarks;
    entity StudentFees as projection on dbTables.StudentFees;
    entity Logs as projection on dbTables.Logs;
    entity CompleteStudentInfo as projection on dbTables.CompleteStudentInfo;
    entity studentsBackup as projection on dbTables.studentsBackup;

    entity Employee as projection on dbTables.Employee;
    entity EmployeeAccess as projection on dbTables.EmployeeAccess;
    entity EmployeeAttendance as projection on dbTables.EmployeeAttendance;
    entity EveryDayLunch as projection on dbTables.EveryDayLunch;
    entity staff as projection on dbTables.staff;


    entity SalesOrderheader as projection on dbTables.SalesOrderheader;
    entity SalesOrderItem as projection on dbTables.SalesOrderItem;


    type StudentStructure{
         student_id : String;         //5000
        student_name : String;
    }

    type EmployeesStructure{
         employee_id  : String(10);
    }

    type StaffStructure {
         staff_name : String;
    }

    type FinalData {
        SchoolData:Array of StudentStructure;
        EmployeeData:Array of EmployeesStructure;
        StaffData:Array of StaffStructure;
    }

    function GetAllData() returns FinalData;

    type FinalInput {
        student_id : String;
        employee_id : String(10);
        staff_name : String(10);
    }
    
    action GetAllDataviaAction(Input:FinalInput) returns FinalData;

    entity ViewForStudentsandMarks as select
        A.student_id,
        A.student_name,
        B.subject,
        B.Marks
    from Students as A
    inner join StudentMarks as B 
    on A.student_id = B.student_id;
}


service College{
    entity CollegeStudents as projection on dbTables.CollegeStudents;
}