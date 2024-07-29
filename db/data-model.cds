namespace batch2Project;

//Table Creation
entity Students{
    key student_id : String;         //5000
        student_name : String;
}


entity StudentMarks{
    key student_id : String;
    key subject : String;
        Marks : Integer;
}

entity StudentFees{
    key student_id : String;
        fees_paid : Boolean;
}

entity Logs{
    key student_id : String;
        message : String;
}


entity Employee{
    key employee_id  : String(10);
}


entity EmployeeAccess{
    key employee_id : String(10);
    access_present : Boolean;
}

entity EmployeeAttendance {
    key employee_id : String(10);
    key todaysdate : Date;                       //yyyy-mm-dd
}


entity EveryDayLunch{
    key employee_id : String(10);
    key date : Date;
}

type StudentMarkstype {
        student_id : String(10);
        subject : String;
        Marks : Integer;
}


entity CompleteStudentInfo{
    key student_id : String;         //5000
        student_name : String;
        Marks : Array of StudentMarkstype;
        fees_paid : Boolean;
}