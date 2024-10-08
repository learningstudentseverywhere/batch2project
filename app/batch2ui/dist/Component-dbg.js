/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/practice/batch2ui/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models,JSONModel) {
        "use strict";

        return UIComponent.extend("com.practice.batch2ui.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                //Setting the data for the model
                let studentPostData = {
                    "studentId":"",
                    "studentName":"",
                    "parentName":"",
                    "updateStudentId":"",
                    "updateStudentName":"",
                    "deleteStudentId":"",
                    "allStudentData":[]
                }

                this.setModel(new JSONModel(studentPostData),"localStudentModel");
            }
        });
    }
);