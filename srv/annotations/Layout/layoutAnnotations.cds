using {school as service } from '../../cat-service';




annotate service.Students with @UI:{
SelectionFields  : [
  student_id,
  student_name  
],
LineItem  : [
    {
       $Type:'UI.DataField',
        Value: student_id
    },
    {
       $Type:'UI.DataField',
        Value:student_name
    },
    {
       $Type:'UI.DataField',
        Value:no_of_days_Present
    },
      {
       $Type:'UI.DataField',
        Value:Grade
    },
    {
        $Type:'UI.DataFieldForAction',
        Action:'service.IncreasenoofdaysbyTen',
        Label:'Increase no of Students by 10'
    },
     {
        $Type:'UI.DataFieldForAction',
        Action:'school.IncreasebyCustomValue',
        Label:'Increase by Custom Value'
    }
],
HeaderInfo  : {
    $Type : 'UI.HeaderInfoType',
    TypeName : 'Student',
    TypeNamePlural : 'Students Data',
    Title:{
        $Type:'UI.DataField',
        Value: student_id
    }
},
HeaderFacets  : [
    {
        $Type:'UI.ReferenceFacet',
        ID:'StudentBasicInfo',
        Label:'Student Basic Information',
        Target: '@UI.FieldGroup#StudentBasicData'
    },
     {
        $Type:'UI.ReferenceFacet',
        ID:'ParentInfo',
        Label:'Parent Information of Student',
        Target: '@UI.FieldGroup#ParentBasicData'
    }
],
Facets  : [
    {
        $Type:'UI.ReferenceFacet',
        ID:'StudentBasicInfo',
        Label:'Student Basic Information',
        Target: '@UI.FieldGroup#StudentBasicData'
    },
     {
        $Type:'UI.ReferenceFacet',
        ID:'ParentInfo',
        Label:'Parent Information of Student',
        Target: '@UI.FieldGroup#ParentBasicData'
    },
    {
        $Type:'UI.ReferenceFacet',
        ID:'StudentMarksInfo',
        Label:'Student Marks',
        Target: 'to_StudentMarks/@UI.LineItem'
    }
],
FieldGroup #StudentBasicData:{
    $Type:'UI.FieldGroupType',
    Data: [
        {
            $Type:'UI.DataField',
            Value:student_id
        },
        {
            $Type:'UI.DataField',
            Value:student_name
        }
    ]
},
FieldGroup #ParentBasicData:{
    $Type:'UI.FieldGroupType',
    Data: [
        {
            $Type:'UI.DataField',
            Value:parent_id
        }
    ]
}
};



annotate service.StudentMarks with @UI:{
    LineItem  : [
        {
            $Type:'UI.DataField',
            Value:subject
        },
         {
            $Type:'UI.DataField',
            Value:Marks
        }
    ],
};