sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/batch2ui/presentationvariantbatch2/test/integration/FirstJourney',
		'com/batch2ui/presentationvariantbatch2/test/integration/pages/StudentsList',
		'com/batch2ui/presentationvariantbatch2/test/integration/pages/StudentsObjectPage',
		'com/batch2ui/presentationvariantbatch2/test/integration/pages/StudentMarksObjectPage'
    ],
    function(JourneyRunner, opaJourney, StudentsList, StudentsObjectPage, StudentMarksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/batch2ui/presentationvariantbatch2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheStudentsList: StudentsList,
					onTheStudentsObjectPage: StudentsObjectPage,
					onTheStudentMarksObjectPage: StudentMarksObjectPage
                }
            },
            opaJourney.run
        );
    }
);