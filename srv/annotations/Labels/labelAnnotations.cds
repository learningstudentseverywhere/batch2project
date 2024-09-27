using {school as service } from '../../cat-service';


annotate service.Students {
    student_id @title : 'Student ID';
    student_name @title : 'Student Name';
    parent_id @title : 'Parent Id';
}