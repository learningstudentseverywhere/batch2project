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
