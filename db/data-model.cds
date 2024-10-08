namespace batch2Project;
using {cuid,managed} from '@sap/cds/common';

//Aspect --Custom Aspect  
aspect ParentNameAspect {
   key parent_name : String(20);
      parent_occupation : String(5);
                       
}


//Standard Aspects -- Aspects provided by SAP



//Table Creation
entity Students{
    key student_id : String;         //5000
        student_name : String;
        parent_id : String(10);
        no_of_days_Present : Integer;
        Grade : String;
        to_StudentMarks : Association to many StudentMarks on to_StudentMarks.student_id = $self.student_id;
}


entity StudentMarks{
    key student_id : String;
    key subject : String;
        Marks : Integer;
}

entity StudentFees:ParentNameAspect{
    key student_id : String;
        fees_paid : Boolean;
        parent_id : String(10);
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


entity staff:cuid,managed{

    staff_name : String;
}


entity SalesOrderheader{
    key order_id:String(10);
        ordered_person_name : String;
        // to_SalesOrderItem : Association to many SalesOrderItem on to_SalesOrderItem.order_id = $self.order_id;
        to_SalesOrderItem : Composition of  many SalesOrderItem on to_SalesOrderItem.order_id = $self.order_id;

}



entity SalesOrderItem{
    key order_id : String(10);
    key order_item_id : String(10);
        item_name : String(10);
        to_OrderHeader : Association to  SalesOrderheader on to_OrderHeader.order_id = $self.order_id;
}

entity CollegeStudents{
    key college_student_id : String;
}

entity studentsBackup{
     key student_id : String;         //5000
        student_name : String;
        parent_id : String(10);
}