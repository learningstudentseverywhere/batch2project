using {school as service } from '../../cat-service';



annotate service.Students with {
    student_id  @Common:{
        ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Students',
            Parameters:[
                {
                    $Type:'Common.ValueListParameterInOut',
                    LocalDataProperty:student_id,
                    ValueListProperty:'student_id'
                },
                 {
                    $Type:'Common.ValueListParameterInOut',
                    LocalDataProperty:student_name,
                    ValueListProperty:'student_name'
                }
            ]
        },
    } ; 
    student_name @Common:{
        ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Students',
            Parameters:[
                   {
                    $Type:'Common.ValueListParameterInOut',
                    LocalDataProperty:student_id,
                    ValueListProperty:'student_id'
                },
                 {
                    $Type:'Common.ValueListParameterInOut',
                    LocalDataProperty:student_name,
                    ValueListProperty:'student_name'
                },
            ]
        },
    }
}