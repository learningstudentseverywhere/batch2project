using {school as service } from '../../cat-service';



annotate service.Students with @UI:{
 SelectionVariant#GradeA  : {
     $Type : 'UI.SelectionVariantType',
     ID:'GradeA',
     Text:'Grade A',
     Parameters:[],
     FilterExpression:'',
     SelectOptions:[
        {
            $Type:'UI.SelectOptionType',
            PropertyName:Grade,
            Ranges:[
                {
                    $Type:'UI.SelectionRangeType',
                    Sign:#I,
                    Option:#EQ,
                    Low:'A'
                }
            ]
        }
     ]
     
 },
  SelectionVariant#GradeB  : {
     $Type : 'UI.SelectionVariantType',
     ID:'GradeB',
     Text:'Grade B',
     Parameters:[],
     FilterExpression:'',
     SelectOptions:[
        {
            $Type:'UI.SelectOptionType',
            PropertyName:Grade,
            Ranges:[
                {
                    $Type:'UI.SelectionRangeType',
                    Sign:#I,
                    Option:#EQ,
                    Low:'B'
                }
            ]
        }
     ]
     
 },
  SelectionVariant#GradeC  : {
     $Type : 'UI.SelectionVariantType',
     ID:'GradeC',
     Text:'Grade C',
     Parameters:[],
     FilterExpression:'',
     SelectOptions:[
        {
            $Type:'UI.SelectOptionType',
            PropertyName:Grade,
            Ranges:[
                {
                    $Type:'UI.SelectionRangeType',
                    Sign:#I,
                    Option:#EQ,
                    Low:'C'
                }
            ]
        }
     ]
     
 }
};