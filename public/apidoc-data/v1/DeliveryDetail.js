    /**
     * @api {post} /v1/delivery/job/sync Synchronise
     * @apiDescription
     *      Synchronises files that are created when a User has no Internet connectivity.<br>
     *      Invalid files will be ignored and deleted from server.<br>
     * @apiVersion 1.0.0
     * @apiName synchronise_deliveries
     * @apiGroup DeliveryDetail
     *
     * @apiParam (Multipart-Form) {Object[]} -.  List of jobs to sync.
     * @apiParam (Multipart-Form) {String} -.jobId  Primary key value of DeliveryDetail table.
     * @apiParam (Multipart-Form) {Boolean} -.delivered  Indicates whether the delivery was successful or unsuccessful.
     * @apiParam (Multipart-Form) {String} -.attemptedByDriver  Full name of the driver who has attempted this job.
     * @apiParam (Multipart-Form) {String} -.attemptedByVehicle  Vehicle plate number of the vehicle that the driver used to attempt this job.
     * @apiParam (Multipart-Form) {Object[]} -.note  Remarks/note/memo from driver, either in JSON format or JSON parsable string.
     * @apiParam (Multipart-Form) {String} -.note.key  Purpose of remark. Required for generating service chit.
     * @apiParam (Multipart-Form) {String} -.note.value  Respective comment for the key. For example, "Customer is not home", "Waited 10 minutes". New lines will be replaced with fullstops.
     * @apiParam (Multipart-Form) {String} -.deliveryTime  Actual time of delivery in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParam (Multipart-Form) {File} -.signature  Customer's proof of delivery (signature) in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg).
     * @apiParam (Multipart-Form) {File} [-.photo]  Customer's proof of delivery (photo) in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg).
     * @apiParam (Multipart-Form) {File[]} [notePhotos]  Driver note in photo in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg). Maximum three.
     * @apiParam (Multipart-Form) {Object[]} [-.items]  List of DeliveryItems.
     * @apiParam (Multipart-Form) {String} [-.items.Id]  DeliveryItem Id that was picked-up or delivered.
     * @apiParam (Multipart-Form) {Float} [-.items.ActualItemQty]  Quantity that was picked-up or delivered.
     * @apiParamExample Multipart-Form-Request-Example:
     *      // http://localhost/vrp/rest/v1/misc/sync/
     *      [{
     *          "jobId": 1,
     *          "delivered": true,
     *          "attemptedByDriver": "John Doe",
     *          "attemptedByVehicle": "YE0123M",
     *          "note": null,
     *          "deliveryTime": "2017-01-01T010:00:00Z",
     *          "signature": (Signature in Blob),
     *          "photo": (Photo in Blob),
     *          "notePhotos": [(Photo in Blob), (Photo in Blob)],
     *          "items": [{
     *              "Id": 1,
     *              "ActualItemQty": 4
     *
     }] *
     }, {
         *"jobId": 2,
         *"delivered": false,
         *"attemptedByDriver": "John Doe",
         *"attemptedByVehicle": "YE0123M",
         *"note": [{
             *"key": "template",
             *"value": "Customer is not home" *
         }, {
             *"key": "comments",
             *"value": "Waited 10 minutes" *
         }],
         *"deliveryTime": "2017-01-01T010:00:00Z" *
     }]
     *
     * @apiUse Success204
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {put} /v1/delivery/job/:deliveryDetailId/attempt Delivery attempt
     * @apiDescription Called after every delivery attempt, regardless whether the job was successful or unsuccessful.
     * @apiPermission driver
     * @apiVersion 1.0.0
     * @apiName attempted_delivery
     * @apiGroup DeliveryDetail
     *
     * @apiParam {String} deliveryDetailId  Primary key value of instance to update.
     * @apiParam (Multipart-Form) {Boolean} delivered  Indicates whether the delivery was successful or unsuccessful.
     * @apiParam (Multipart-Form) {Object[]} note  Remarks/note/memo from driver, either in JSON format or JSON parsable string.
     * @apiParam (Multipart-Form) {String} note.key  Purpose of remark. Required for generating service chit.
     * @apiParam (Multipart-Form) {String} note.value  Respective comment for the key. For example, "Customer is not home", "Waited 10 minutes". New lines will be replaced with fullstops.
     * @apiParam (Multipart-Form) {File} signature  Customer's proof of delivery (signature) in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg).
     * @apiParam (Multipart-Form) {File} [photo]  Customer's proof of delivery (photo) in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg).
     * @apiParam (Multipart-Form) {File[]} [notePhotos]  Driver note in photo in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg).
     * @apiParam (Multipart-Form) {Object[]} [items]  List of DeliveryItems.
     * @apiParam (Multipart-Form) {String} [items.Id]  DeliveryItem Id that was picked-up or delivered.
     * @apiParam (Multipart-Form) {Float} [items.ActualItemQty]  Quantity that was picked-up or delivered.
     * @apiParamExample Multipart-Form-Request-Example:
     *      // http://localhost/vrp/rest/v1/delivery/job/1/attempt (DELIVERY was successful)
     *      {
     *          "delivered": true,
     *          "note": [{
     *              "key": "template",
     *              "value": "Customer is not home"
     *          }, {
     *              "key": "comments",
     *              "value": "Waited 10 minutes"
     *          }],
     *          "signature": (Signature in Blob),
     *          "photo": (Photo in Blob),
     *          "notePhotos": [(Photo in Blob), (Photo in Blob)],
     *          "items": [{
     *              "Id": 1,
     *              "ActualItemQty": 4
     *          }]
     *      }
     *
     * @apiSuccess {Integer} Id  Primary key value of DeliveryDetail instance.
     * @apiSuccess {String} DeliveryMasterId  References to the primary key value from DeliveryMaster table.
     * @apiSuccess {Integer} Status  Job's status. Pending=1, Late=2, Ontime=3, Unsuccessful=4, Expected to be late=5.
     * @apiSuccess {Integer} JobSequence  Indicates the execution order for jobs for each order.
     * @apiSuccess {String} JobType  Indicates whether this instance is a pick up or delivery.
     * @apiSuccess {String} Address  Street address.
     * @apiSuccess {String} Postal  Postal code of the address.
     * @apiSuccess {Float} Lat  Latitude of Postal in degrees.
     * @apiSuccess {Float} Lng  Longitude of Postal in degrees.
     * @apiSuccess {String} StartTimeWindow  Start time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiSuccess {String} EndTimeWindow  End time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiSuccess {Float} ServiceTime  Unit: Minutes. Time required to be at the address.
     * @apiSuccess {Object[]} NoteFromPlanner  A remarks/note/memo from planner.
     * @apiSuccess {String} NoteFromPlanner.-.key  Purpose of remark. For example, "Payment mode", "Equipments".
     * @apiSuccess {String} NoteFromPlanner.-.value  Respective comment for the key. For example, "Cash", "Crane".
     * @apiSuccess {Object[]} NoteFromDriver  A remarks/note/memo from driver.
     * @apiSuccess {String} NoteFromDriver.-.key  Purpose of remark. For example, "template", "comments".
     * @apiSuccess {String} NoteFromDriver.-.value  Respective comment for the key. For example, "Customer is not home", "Waited 10 minutes".
     * @apiSuccess {String} ContactName  Name of person to contact at Address.
     * @apiSuccess {Integer} ContactPhone  Phone number of person to contact at Address.
     * @apiSuccess {String} ContactEmail  Email address of person to contact at Address.
     * @apiSuccess {String} ActualDeliveryTime  Actual time of delivery in ISO8601 format. Timezone matters (e.g. Z implies UTC). If value is null, job has not been attempted.
     * @apiSuccess {Integer} EngineRouteSeqNum  Instances with lower route sequence number is expected to be attempted before instances with higher route sequence number.
     * @apiSuccess {Object} DeliveryMaster  Instance from DeliveryMaster table based on DeliveryMasterId.
     * @apiSuccess {Object[]} DeliveryItems  Instance(s) from DeliveryItem table that are related to this DeliveryDetail.
     * @apiSuccessExample Success-Response: 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/1/attempt
     *      {
     *          "Id": 1,
     *          "DeliveryMasterId": "35187491",
     *          "Status": 2,
     *          "JobSequence": 1,
     *          "JobType": "PICKUP",
     *          "Address": "11 Tuas Link 1",
     *          "Postal": "639588",
     *          "Lat": 1.3341,
     *          "Lng": 103.636,
     *          "StartTimeWindow": "2017-02-08T09:00:00Z",
     *          "EndTimeWindow": "2017-02-08T13:00:00Z",
     *          "ServiceTime": 5,
     *          "NoteFromPlanner": null,
     *          "NoteFromDriver": [{
     *              "key": "template",
     *              "value": "Customer is not home"
     *          }, {
     *              "key": "comments",
     *              "value": "Waited 10 minutes"
     *          }],
     *          "ContactName": null,
     *          "ContactPhone": null,
     *          "ContactEmail": null,
     *          "EngineRouteSeqNum": 11,
     *          "ActualDeliveryTime": "2017-02-08T14:03:00Z",
     *          "DeliveryMaster": {
     *              "Id": "35187491",
     *              "Status": 11,
     *              "VehicleId": "YE0423M",
     *              "Priority": 2,
     *              "CustomerName": null,
     *              "CustomerPhone": 98889888,
     *              "CustomerEmail": "john.doe@gmail.com",
     *              "VehicleRestriction": null
     *          },
     *          "DeliveryItems": [{
     *              "Id": 1,
     *              "DeliveryDetailId": 1,
     *              "ItemId": "WD-SC",
     *              "ItemQty": 5,
     *              "ActualItemQty": 4
     *          }]
     *      }
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/delivery/job/:id Get one
     * @apiDescription Get one database instance from DeliveryDetail table based on primary key.<br>
     *      Planner will receive all database instance(s).<br>
     *      Driver will only receive database instance(s) that are under his/her VehicleId (i.e. VehicleId column = Driver's VehicleId), and orders that are confirmed.<br>
     * @apiPermission planner, driver
     * @apiVersion 1.0.0
     * @apiName get_one_delivery_detail
     * @apiGroup DeliveryDetail
     *
     * @apiParam {String} id  Primary key value of instance to find.
     *
     * @apiSuccess {Integer} Id  Primary key value.
     * @apiSuccess {String} DeliveryMasterId  References to the primary key value from DeliveryMaster table.
     * @apiSuccess {Integer} Status  Job's status. Pending=1, Late=2, Ontime=3, Unsuccessful=4, Expected to be late=5.
     * @apiSuccess {Integer} JobSequence  Indicates the execution order for jobs for each order.
     * @apiSuccess {String} JobType  Indicates whether this instance is a pick up or delivery.
     * @apiSuccess {String} Address  Street address.
     * @apiSuccess {String} Postal  Postal code of the address.
     * @apiSuccess {Float} Lat  Latitude of Postal in degrees.
     * @apiSuccess {Float} Lng  Longitude of Postal in degrees.
     * @apiSuccess {String} StartTimeWindow  Start time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiSuccess {String} EndTimeWindow  End time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiSuccess {Float} ServiceTime  Unit: Minutes. Time required to be at the address.
     * @apiSuccess {Object[]} NoteFromPlanner  A remarks/note/memo from planner.
     * @apiSuccess {String} NoteFromPlanner.-.key  Purpose of remark. For example, "Payment mode", "Equipments".
     * @apiSuccess {String} NoteFromPlanner.-.value  Respective comment for the key. For example, "Cash", "Crane".
     * @apiSuccess {Object[]} NoteFromDriver  A remarks/note/memo from driver.
     * @apiSuccess {String} NoteFromDriver.-.key  Purpose of remark. For example, "template", "comments".
     * @apiSuccess {String} NoteFromDriver.-.value  Respective comment for the key. For example, "Customer is not home", "Waited 10 minutes".
     * @apiSuccess {String} ContactName  Name of person to contact at Address.
     * @apiSuccess {Integer} ContactPhone  Phone number of person to contact at Address.
     * @apiSuccess {String} ContactEmail  Email address of person to contact at Address.
     * @apiSuccess {String} ActualDeliveryTime  Actual time of delivery in ISO8601 format. Timezone matters (e.g. Z implies UTC). If value is null, job has not been attempted.
     * @apiSuccess {Integer} EngineRouteSeqNum  Instances with lower route sequence number is expected to be attempted before instances with higher route sequence number.
     * @apiSuccess {Object[]} DeliveryItems  Instance(s) from DeliveryItem table that are related to this DeliveryDetail.
     * @apiSuccess {Object} VerificationCode  Instance(s) from VerificationCode table that are related to this DeliveryDetail.
     * @apiSuccess {Object} DeliveryMaster  Instance from DeliveryMaster table based on DeliveryMasterId. Not included in driver's request.
     * @apiSuccessExample Success-Response (Planner): 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/1
     *      {
     *          "Id": 1,
     *          "DeliveryMasterId": "35187491",
     *          "Status": 3,
     *          "JobSequence": 1,
     *          "JobType": "PICKUP",
     *          "Address": "11 Tuas Link 1",
     *          "Postal": "639588",
     *          "Lat": 1.3341,
     *          "Lng": 103.636,
     *          "StartTimeWindow": "2017-02-08T09:00:00Z",
     *          "EndTimeWindow": "2017-02-08T13:00:00Z",
     *          "ServiceTime": 5,
     *          "NoteFromPlanner": null,
     *          "NoteFromDriver": [{
     *              "key": "template",
     *              "value": "Customer is not home"
     *          }, {
     *              "key": "comments",
     *              "value": "Waited 10 minutes"
     *          }],
     *          "ContactName": null,
     *          "ContactPhone": null,
     *          "ContactEmail": null,
     *          "EngineRouteSeqNum": 11,
     *          "ActualDeliveryTime": "2017-02-08T09:30:00Z",
     *          "DeliveryMaster": {
     *              "Id": "35187491",
     *              "Status": 11,
     *              "VehicleId": "YE0423M",
     *              "Priority": 2,
     *              "CustomerName": null,
     *              "CustomerPhone": 98889888,
     *              "CustomerEmail": "john.doe@gmail.com",
     *              "VehicleRestriction": null
     *          },
     *          "DeliveryItems": [{
     *              "Id": 1,
     *              "DeliveryDetailId": 1,
     *              "ItemId": "WD-SC",
     *              "ItemQty": 5,
     *              "ActualItemQty": 5
     *          }],
     *          "VerificationCode": {
     *              "Code": "12345"
     *          }
     *      }
     * @apiSuccessExample Success-Response (Driver): 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/1
     *      {
     *          "Id": 1,
     *          "DeliveryMasterId": "35187491",
     *          "Status": 3,
     *          "JobSequence": 1,
     *          "JobType": "PICKUP",
     *          "Address": "11 Tuas Link 1",
     *          "Postal": "639588",
     *          "Lat": 1.3341,
     *          "Lng": 103.636,
     *          "StartTimeWindow": "2017-02-08T09:00:00Z",
     *          "EndTimeWindow": "2017-02-08T13:00:00Z",
     *          "ServiceTime": 5,
     *          "NoteFromPlanner": null,
     *          "NoteFromDriver": [{
     *              "key": "template",
     *              "value": "Customer is not home"
     *          }, {
     *              "key": "comments",
     *              "value": "Waited 10 minutes"
     *          }],
     *          "ContactName": null,
     *          "ContactPhone": null,
     *          "ContactEmail": null,
     *          "EngineRouteSeqNum": 11,
     *          "ActualDeliveryTime": "2017-02-08T09:30:00Z",
     *          "DeliveryItems": [{
     *              "Id": 1,
     *              "DeliveryDetailId": 1,
     *              "ItemId": "WD-SC",
     *              "ItemQty": 5,
     *              "ActualItemQty": 5
     *          }],
     *          "VerificationCode": {
     *              "Code": "12345"
     *          }
     *      }
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/delivery/job Get many
     * @apiDescription Get multiple database instance(s) from DeliveryDetail table based on where filter.<br>
     *      Planner will receive all database instance(s).<br>
     *      Driver will only receive database instance(s) that are under his/her VehicleId (i.e. VehicleId column = Driver's VehicleId), and orders that are confirmed.<br>
     * @apiPermission planner, driver
     * @apiVersion 1.0.0
     * @apiName get_all_delivery_detail
     * @apiGroup DeliveryDetail
     *
     * @apiParam (Query String) {String} [where]  Where conditions for SQL query.
     * @apiParam (Query String) {String} [startDate]  Search records in a date range. Must be specified together with `endDate`. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParam (Query String) {String} [endDate]  Search records in a date range. Must be specified together with `startDate`. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParam (Query String) {String} [where]  Where conditions for SQL query.
     * @apiParamExample Request-Example:
     *      // Get instances that haven't been delivered
     *      // http://localhost/vrp/rest/v1/delivery/job?where={"ActualDeliveryTime":null}
     *      {
     *          "where": {
     *              "ActualDeliveryTime": null
     *          }
     *      }
     * @apiParamExample Request-Example:
     *      // Get instances whose TimeWindow is on 1 Feburary 2017
     *      // http://localhost/vrp/rest/v1/delivery/job?date=2017-02-01
     *      {
     *          "date": "2017-02-01"
     *      }
     * @apiParamExample Request-Example:
     *      // Get instances whose TimeWindow is between on 1 January 2017 to 31 December 2017
     *      // http://localhost/vrp/rest/v1/delivery/job?startDate=2017-01-01&endDate=2017-12-31
     *      {
     *          "startDate": "2017-01-01",
     *          "endDate": "2017-12-31"
     *      }
     *
     * @apiSuccess {Object[]} -.  List of DeliveryDetail instances.
     * @apiSuccess {Integer} -.Id  Primary key value.
     * @apiSuccess {String} -.DeliveryMasterId  References to the primary key value from DeliveryMaster table.
     * @apiSuccess {Integer} -.Status  Job's status. Pending=1, Late=2, Ontime=3, Unsuccessful=4, Expected to be late=5.
     * @apiSuccess {Integer} -.JobSequence  Indicates the execution order for jobs for each order.
     * @apiSuccess {String} -.JobType  Indicates whether this instance is a pick up or delivery.
     * @apiSuccess {String} -.Address  Street address.
     * @apiSuccess {String} -.Postal  Postal code of the address.
     * @apiSuccess {Float} -.Lat  Latitude of Postal in degrees.
     * @apiSuccess {Float} -.Lng  Longitude of Postal in degrees.
     * @apiSuccess {String} -.StartTimeWindow  Start time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiSuccess {String} -.EndTimeWindow  End time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiSuccess {Float} -.ServiceTime  Unit: Minutes. Time required to be at the address.
     * @apiSuccess {Object[]} NoteFromPlanner  A remarks/note/memo from planner.
     * @apiSuccess {String} NoteFromPlanner.-.key  Purpose of remark. For example, "Payment mode", "Equipments".
     * @apiSuccess {String} NoteFromPlanner.-.value  Respective comment for the key. For example, "Cash", "Crane".
     * @apiSuccess {Object[]} NoteFromDriver  A remarks/note/memo from driver.
     * @apiSuccess {String} NoteFromDriver.-.key  Purpose of remark. For example, "template", "comments".
     * @apiSuccess {String} NoteFromDriver.-.value  Respective comment for the key. For example, "Customer is not home", "Waited 10 minutes".
     * @apiSuccess {String} -.ContactName  Name of person to contact at Address.
     * @apiSuccess {Integer} -.ContactPhone  Phone number of person to contact at Address.
     * @apiSuccess {String} -.ContactEmail  Email address of person to contact at Address.
     * @apiSuccess {String} -.ActualDeliveryTime  Actual time of delivery in ISO8601 format. Timezone matters (e.g. Z implies UTC). If value is null, job has not been attempted.
     * @apiSuccess {Integer} -.EngineRouteSeqNum  Instances with lower route sequence number is expected to be attempted before instances with higher route sequence number.
     * @apiSuccess {Object[]} -.DeliveryItems  Instance(s) from DeliveryItem table that are related to this DeliveryDetail.
     * @apiSuccess {Object} -.VerificationCode  Instance(s) from VerificationCode table that are related to this DeliveryDetail.
     * @apiSuccess {Object} -.DeliveryMaster  Instance from DeliveryMaster table based on DeliveryMasterId. Not included in driver's request.
     * @apiSuccessExample Success-Response: 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/
     *      [{
     *          "Id": 1,
     *          "DeliveryMasterId": "35187491",
     *          "Status": 3,
     *          "JobSequence": 1,
     *          "JobType": "PICKUP",
     *          "Address": "11 Tuas Link 1",
     *          "Postal": "639588",
     *          "Lat": 1.3341,
     *          "Lng": 103.636,
     *          "StartTimeWindow": "2017-02-08T09:00:00Z",
     *          "EndTimeWindow": "2017-02-08T13:00:00Z",
     *          "ServiceTime": 5,
     *          "NoteFromPlanner": [{
     *              "key": "Payment",
     *              "value": "Cash"
     *          }],
     *          "NoteFromDriver": [{
     *              "key": "template",
     *              "value": "Customer is not home"
     *          }, {
     *              "key": "comments",
     *              "value": "Waited 10 minutes"
     *          }],
     *          "ContactName": null,
     *          "ContactPhone": null,
     *          "ContactEmail": null,
     *          "EngineRouteSeqNum": 11,
     *          "ActualDeliveryTime": "2017-02-08T09:30:00Z",
     *          "DeliveryMaster": {
     *              "Id": "35187491",
     *              "Status": 11,
     *              "VehicleId": "YE0423M",
     *              "Priority": 2,
     *              "CustomerName": null,
     *              "CustomerPhone": 98889888,
     *              "CustomerEmail": "john.doe@gmail.com",
     *              "VehicleRestriction": null
     *          },
     *          "DeliveryItems": [{
     *              "Id": 1,
     *              "DeliveryDetailId": 1,
     *              "ItemId": "WD-SC",
     *              "ItemQty": 5,
     *              "ActualItemQty": 5
     *          }],
     *          "VerificationCode": {
     *              "Code": "12345"
     *          }
     *      }, {
     *          ...
     *      }]
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {post} /v1/delivery/:deliveryMasterId/job Create one
     * @apiDescription
     *      Insert one Delivery information into DeliveryDetail table.<br>
     *      DeliveryItems and VerificationCode properties are supported (i.e. insert into DeliveryItem table at the same time).<br>
     *      If there is any error with DeliveryItems and/or VerificationCode, the entire insert will fail (i.e. DeliveryDetail will
     *      also not be inserted).<br>
     *      <br>
     *      <strong><span style="color:red">IMPORTANT</span></strong>: This API does not support bulkInsert due to MSSQL error when
     *      SQL statement contains OUTPUT clause without INTO clause.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName create_delivery_detail
     * @apiGroup DeliveryDetail
     *
     * @apiParam {String} deliveryMasterId  Primary key value of associated DeliveryMaster instance.
     * @apiParam (Request Body) {Object} record  One record to be inserted into the database.
     * @apiParam (Request Body) {Integer{1-}} record.JobSequence  Indicates the execution order for jobs for each order.
     * @apiParam (Request Body) {String="PICKUP","DELIVERY"} record.JobType Indicates whether this instance is a pick up or delivery.
     * @apiParam (Request Body) {String{..1024}} record.Address] Street address.
     * @apiParam (Request Body) {String{6}} record.Postal  Postal code of the address.
     * @apiParam (Request Body) {Float{-90 to 90}} record.Lat  Latitude of Postal in degrees.
     * @apiParam (Request Body) {Float{-180 to 180}} record.Lng  Longitude of Postal in degrees.
     * @apiParam (Request Body) {String} [record.StartTimeWindow]  Start time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParam (Request Body) {String} record.EndTimeWindow  End time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParam (Request Body) {Float} [record.ServiceTime=15]  Unit: Minutes. Time required to be at the address.
     * @apiParam (Request Body) {Object[]} [record.NoteFromPlanner]  A remarks/note/memo from planner in JSON format, or string that is JSON parsable.
     * @apiParam (Request Body) {String} [record.NoteFromPlanner.key]  Purpose of remark. For example, "Payment mode", "Equipments".
     * @apiParam (Request Body) {String} [record.NoteFromPlanner.value]  Respective comment for the key. For example, "Cash", "Crane".
     * @apiParam (Request Body) {String{..254}} [record.ContactName]  Name of person to contact at Address.
     * @apiParam (Request Body) {Integer{8}} [record.ContactPhone]  Phone number of person to contact at Address.
     * @apiParam (Request Body) {String{..254}} [record.ContactEmail]  Email address of person to contact at Address.
     * @apiParam (Request Body) {Object[]} [record.DeliveryItems]  DeliveryItem instance(s). Refer to #POST DeliveryItem API for format.
     * @apiParam (Request Body) {Object} [record.VerificationCode]  One VerificationCode instance. Refer to #POST VerificationCode API for format.
     * @apiParamExample Request-Example: Create one
     *      {
     *          "record": {
     *              "JobSequence": 1,
     *              "JobType": "PICKUP",
     *              "Address": "11 Tuas Link 1",
     *              "Postal": "639588",
     *              "Lat": 1.3341,
     *              "Lng": 103.636,
     *              "StartTimeWindow": "2017-02-08T09:00:00Z",
     *              "EndTimeWindow": "2017-02-08T13:00:00Z",
     *              "ServiceTime": 5,
     *              "NoteFromPlanner": "[{\"key\":\"Payment\",\"value\":\"Cash\"}]",
     *              "NoteFromDriver": [{
     *                  "key": "template",
     *                  "value": "Customer is not home"
     *              }, {
     *                  "key": "comments",
     *                  "value": "Waited 10 minutes"
     *              }],
     *              "ContactName": null,
     *              "ContactPhone": null,
     *              "ContactEmail": null,
     *              "DeliveryItems": [{
     *                  "ItemId": "WD-SC",
     *                  "ItemQty": 5,
     *                  "ActualItemQty": 5
     *              }]
     *          }
     *      }
     *
     * @apiSuccess {String} -  Primary key of affected row
     * @apiSuccessExample Success-Response:
     *      HTTP/1.1 200 OK
     *      // One record inserted
     *      "35187491"
     *
     * @apiUse Error401
     * @apiUse Error500_List
     */

     /**
     * @api {delete} /v1/delivery/job/:deliveryDetailId Delete
     * @apiDescription Delete one database instance from DeliveryDetail table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName delete_delivery_detail
     * @apiGroup DeliveryDetail
     *
     * @apiParam {String} deliveryDetailId  Primary key value of associated DeliveryDetail instance.
     *
     * @apiSuccess {Integer} -  Number of affected rows.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // One record was deleted
     *      1
     *
     * @apiUse Error401
     * @apiUse Error500
     */
