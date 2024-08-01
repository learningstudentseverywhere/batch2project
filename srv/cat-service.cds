using {batch2Project as dbTables} from '../db/data-model';

//       ./ --> Search within the folder
//       ../ --> Search outside the folder

service school{
    entity Students as projection on dbTables.Students;
    entity StudentMarks as projection on dbTables.StudentMarks;
    entity StudentFees as projection on dbTables.StudentFees;
    entity Logs as projection on dbTables.Logs;
    entity CompleteStudentInfo as projection on dbTables.CompleteStudentInfo;


    entity Employee as projection on dbTables.Employee;
    entity EmployeeAccess as projection on dbTables.EmployeeAccess;
    entity EmployeeAttendance as projection on dbTables.EmployeeAttendance;
    entity EveryDayLunch as projection on dbTables.EveryDayLunch;
    entity staff as projection on dbTables.staff;
}