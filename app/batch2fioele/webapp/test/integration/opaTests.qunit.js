sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/batch2/batch2fioele/test/integration/FirstJourney',
		'com/batch2/batch2fioele/test/integration/pages/StudentsList',
		'com/batch2/batch2fioele/test/integration/pages/StudentsObjectPage',
		'com/batch2/batch2fioele/test/integration/pages/StudentMarksObjectPage'
    ],
    function(JourneyRunner, opaJourney, StudentsList, StudentsObjectPage, StudentMarksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/batch2/batch2fioele') + '/index.html'
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