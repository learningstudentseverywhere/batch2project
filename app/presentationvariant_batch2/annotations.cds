using school as service from '../../srv/cat-service';
using from '../../srv/annotations/Layout/layoutAnnotations';

annotate service.Students with @(
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
                {
                    $Type:'UI.SelectOptionType',
                    PropertyName:Grade,
                    Ranges : [
                        {
                            $Type:'UI.SelectionRangeType',
                            Sign:#I,
                            Option:#EQ,
                            Low : 'A'
                        }
                    ]
                }
            ],
        },
        Text : 'Grade A',
    },
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : Grade,
            Label : 'Grade',
        },
        {
            $Type : 'UI.DataField',
            Value : student_id,
        },
        {
            $Type : 'UI.DataField',
            Value : student_name,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'school.IncreasenoofdaysbyTen',
            Label : 'IncreasenoofdaysbyTen',
        },
    ],
    UI.SelectionPresentationVariant #tableView1 : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
             SelectOptions : [
                {
                    $Type:'UI.SelectOptionType',
                    PropertyName:Grade,
                    Ranges : [
                        {
                            $Type:'UI.SelectionRangeType',
                            Sign:#I,
                            Option:#EQ,
                            Low : 'B'
                        }
                    ]
                }
            ],
        },
        Text : 'Grade B',
    },
    UI.LineItem #tableView1 : [
        {
            $Type : 'UI.DataField',
            Value : Grade,
            Label : 'Grade',
        },
        {
            $Type : 'UI.DataField',
            Value : student_name,
        },
    ],
    UI.SelectionPresentationVariant #tableView2 : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView1',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
                {
                    $Type:'UI.SelectOptionType',
                    PropertyName:Grade,
                    Ranges : [
                        {
                            $Type:'UI.SelectionRangeType',
                            Sign:#I,
                            Option:#EQ,
                            Low : 'C'
                        }
                    ]
                }
            ],
        },
        Text : 'Grade C',
    },
);

