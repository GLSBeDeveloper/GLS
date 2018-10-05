    /**
     * @api {get} /v1/delivery/:deliveryMasterId Get one
     * @apiDescription Get one database instance from DeliveryMaster table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_one_delivery_master
     * @apiGroup DeliveryMaster
     *
     * @apiParam {String} deliveryMasterId  Primary key value of instance to find.
     *
     * @apiSuccess {String} Id  Order number.
     * @apiSuccess {String} VehicleId  References to the primary key value from Vehicle table.
     * @apiSuccess {String} LastAttemptedByDriver  Full name of the driver that has attempted this order. It will only keep the driver's full name who most recently attempted this order. It assumes that pickup and delivery will be attempted by the same driver.
     * @apiSuccess {String} LastAttemptedByPlateNumber  Vehicle plate number of the vehicle that the driver used to attempt this order. It will only keep the vehicle plate number of the vehice that most recently attempted this order. It assumes that pickup and delivery will be attempted by the same vehicle.
     * @apiSuccess {Integer} Priority  Ranking of jobs. Higher number has higher priority.
     * @apiSuccess {String} CustomerName  Name of the person who has placed this order.
     * @apiSuccess {String} CustomerPhone  Contact number of the person who has placed this order.
     * @apiSuccess {String} CustomerEmail  Email address of the person who has placed this order.
     * @apiSuccess {String} VehicleRestriction  Comma delimited string. May have space between delimiters. VehicleId is without @. VehicleType is with @. Prepend # to exclude. Example: YE0234M,@Dry,#YR0213M,@#Cold
     * @apiSuccess {Object[]} DeliveryDetails  Instance(s) from DeliveryDetail table that are related to this DeliveryMaster.
     * @apiSuccess {Object[]} DeliveryDetails.DeliveryItems  Instance(s) from DeliveryItem table that are related to this DeliveryMaster.
     * @apiSuccess {Object} DeliveryDetails.VerificationCode  Instance(s) from VerificationCode table that are related to this DeliveryMaster.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/35187491
     *      {
     *          "Id": "35187491",
     *          "VehicleId": "YE0423M",
     *          "LastAttemptedByDriver": "Doe Ng",
     *          "LastAttemptedByPlateNumber": "YE0423MNum",
     *          "Priority": 1,
     *          "CustomerName": null,
     *          "CustomerPhone": 98889888,
     *          "CustomerEmail": "john.doe@gmail.com",
     *          "VehicleRestriction": null,
     *          "DeliveryDetails": [{
     *              "Id": 1,
     *              "DeliveryMasterId": "35187409",
     *              "Status": 3,
     *              "JobSequence": 1,
     *              "JobType": "PICKUP",
     *              "Address": "11 Tuas Link 1",
     *              "Postal": "639588",
     *              "Lat": 1.3341,
     *              "Lng": 103.636,
     *              "StartTimeWindow": "2017-02-08T09:00:00Z",
     *              "EndTimeWindow": "2017-02-08T13:00:00Z",
     *              "ServiceTime": 5,
     *              "NoteFromPlanner": null,
     *              "NoteFromDriver": null,
     *              "ContactName": null,
     *              "ContactPhone": null,
     *              "ContactEmail": null,
     *              "EngineRouteSeqNum": 11,
     *              "ActualDeliveryTime": "2017-02-08T09:30:00Z",
     *              "DeliveryItems": [{
     *                  "Id": 1,
     *                  "DeliveryDetailId": 1,
     *                  "ItemId": "WD-SC",
     *                  "ItemQty": 5,
     *                  "ActualItemQty": 5
     *              }],
     *              "VerificationCode": {
     *                  "DeliveryDetailId": 1,
     *                  "Code": "12345"
     *              }
     *          }]
     *      }
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/delivery Get many
     * @apiDescription Get multiple database instance(s) from DeliveryMaster table based on where filter.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_delivery_master
     * @apiGroup DeliveryMaster
     *
     * @apiParam (Query String) {String} [date]  Date to search records on. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParam (Query String) {String} [startDate]  Search records in a date range. Must be specified together with `endDate`. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParam (Query String) {String} [endDate]  Search records in a date range. Must be specified together with `startDate`. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParam (Query String) {String} [where]  Where conditions for SQL query.
     * @apiParamExample Request-Example:
     *      // Get all instances whose Priority is 2
     *      // http://localhost/vrp/rest/v1/delivery?where={"Priority":2}
     *      {
     *          "where": {
     *              "Priority": 2
     *          }
     *      }
     * @apiParamExample Request-Example:
     *      // Get instances whose TimeWindow is on 1 Feburary 2017
     *      // http://localhost/vrp/rest/v1/vehicle?date=2017-02-01
     *      {
     *          "date": "2017-02-01"
     *      }
     * @apiParamExample Request-Example:
     *      // Get instances whose TimeWindow is between on 1 January 2017 to 31 December 2017
     *      // http://localhost/vrp/rest/v1/vehicle?startDate=2017-01-01&endDate=2017-12-31
     *      {
     *          "startDate": "2017-01-01",
     *          "endDate": "2017-12-31"
     *      }
     *
     * @apiSuccess {Object[]} -.  List of DeliveryMaster instances.
     * @apiSuccess {String} -.Id  Order number.
     * @apiSuccess {String} -.VehicleId  References to the primary key value from Vehicle table.
     * @apiSuccess {String} -.LastAttemptedByDriver  Full name of the driver that has attempted this order. It will only keep the driver's full name who most recently attempted this order. It assumes that pickup and delivery will be attempted by the same driver.
     * @apiSuccess {String} -.LastAttemptedByPlateNumber  Vehicle plate number of the vehicle that the driver used to attempt this order. It will only keep the vehicle plate number of the vehice that most recently attempted this order. It assumes that pickup and delivery will be attempted by the same vehicle.
     * @apiSuccess {Integer} -.Priority  Ranking of jobs. Higher number has higher priority.
     * @apiSuccess {String} -.CustomerName  Name of the person who has placed this order.
     * @apiSuccess {String} -.CustomerPhone  Contact number of the person who has placed this order.
     * @apiSuccess {String} -.CustomerEmail  Email address of the person who has placed this order.
     * @apiSuccess {String} -.VehicleRestriction  Comma delimited string. May have space between delimiters. VehicleId is without @. VehicleType is with @. Prepend # to exclude. Example: YE0234M,@Dry,#YR0213M,@#Cold
     * @apiSuccess {Object[]} -.DeliveryDetails  Instance(s) from DeliveryDetail table that are related to this DeliveryMaster.
     * @apiSuccess {Object[]} -.DeliveryDetails.DeliveryItems  Instance(s) from DeliveryItem table that are related to this DeliveryMaster.
     * @apiSuccess {Object} -.DeliveryDetails.VerificationCode  Instance(s) from VerificationCode table that are related to this DeliveryMaster.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/
     *      [{
     *          "Id": "35187491",
     *          "VehicleId": "YE0423M",
     *          "LastAttemptedByDriver": "Doe Ng",
     *          "LastAttemptedByPlateNumber": "YE0423MNum",
     *          "Priority": 1,
     *          "CustomerName": null,
     *          "CustomerPhone": 98889888,
     *          "CustomerEmail": "john.doe@gmail.com",
     *          "VehicleRestriction": null,
     *          "DeliveryDetails": [{
     *              "Id": 1,
     *              "DeliveryMasterId": "35187409",
     *              "Status": 3,
     *              "JobSequence": 1,
     *              "JobType": "PICKUP",
     *              "Address": "11 Tuas Link 1",
     *              "Postal": "639588",
     *              "Lat": 1.3341,
     *              "Lng": 103.636,
     *              "StartTimeWindow": "2017-02-08T09:00:00Z",
     *              "EndTimeWindow": "2017-02-08T13:00:00Z",
     *              "ServiceTime": 5,
     *              "NoteFromPlanner": null,
     *              "NoteFromDriver": null,
     *              "ContactName": null,
     *              "ContactPhone": null,
     *              "ContactEmail": null,
     *              "EngineRouteSeqNum": 11,
     *              "ActualDeliveryTime": "2017-02-08T09:30:00Z",
     *              "DeliveryItems": [{
     *                  "Id": 1,
     *                  "DeliveryDetailId": 1,
     *                  "ItemId": "WD-SC",
     *                  "ItemQty": 5,
     *                  "ActualItemQty": 5
     *              }],
     *              "VerificationCode": {
     *                  "DeliveryDetailId": 1,
     *                  "Code": "12345"
     *              }
     *          }]
     *      }, {
     *          ...
     *      }]
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {post} /v1/delivery Create one
     * @apiDescription Insert one Delivery information into DeliveryMaster table.<br>
     *      DeliveryDetails, DeliveryItems and VerificationCode properties are supported (i.e. insert into DeliveryDetail and DeliveryItem
     *      table at the same time).<br>
     *      If there is any error with DeliveryDetails, DeliveryItems and/or VerificationCode, the entire insert will fail (i.e. DeliveryMaster will
     *      also not be inserted).<br>
     *      <br>
     *      <strong><span style="color:red">IMPORTANT</span></strong>: This API does not support bulkInsert due to MSSQL error when
     *      SQL statement contains OUTPUT clause without INTO clause.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName create_delivery_master
     * @apiGroup DeliveryMaster
     *
     * @apiParam (Request Body) {Object} record  Record to be inserted into the database.
     * @apiParam (Request Body) {String{..30}} record.Id  Order number.
     * @apiParam (Request Body) {Integer=1-10} [record.Priority=2]  Ranking of jobs. Higher number has higher priority.
     * @apiParam (Request Body) {String{..254}} [record.CustomerName]  Name of the person who has placed this order.
     * @apiParam (Request Body) {Integer{8}} [record.CustomerPhone]  Contact number of the person who has placed this order.
     * @apiParam (Request Body) {String{..254}} [record.CustomerEmail]  Email address of the person who has placed this order.
     * @apiParam (Request Body) {String} [record.VehicleRestriction]  Comma delimited string. May have space between delimiters. VehicleId is without @. VehicleType is with @. Prepend # to exclude. Example: YE0234M,@Dry,#YR0213M,@#Cold
     * @apiParam (Request Body) {Object[]} [record.DeliveryDetails  DeliveryDetail] instance(s). Refer to #POST DeliveryDetail API for format.
     * @apiParam (Request Body) {Object[]} [record.DeliveryDetails.DeliveryItems]  DeliveryItem instance(s). Refer to #POST DeliveryItem API for format.
     * @apiParam (Request Body) {Object} [record.DeliveryDetails.VerificationCode]  One VerificationCode instance. Refer to #POST VerificationCode API for format.
     * @apiParamExample
     *      HTTP/1.1 200 OK
     *      {
     *          "record": {
     *              "Id": "35187491",
     *              "Priority": 1,
     *              "VehicleId": null,
     *              "LastAttemptedByDriver": "Doe Ng",
     *              "LastAttemptedByPlateNumber": "YE0423MNum",
     *              "CustomerName": null,
     *              "CustomerPhone": 98889888,
     *              "CustomerEmail": "john.doe@gmail.com",
     *              "VehicleRestriction": null,
     *              "DeliveryDetails": [{
     *                  "JobSequence": 1,
     *                  "JobType": "PICKUP",
     *                  "Address": "11 Tuas Link 1",
     *                  "Postal": "639588",
     *                  "Lat": 1.3341,
     *                  "Lng": 103.636,
     *                  "StartTimeWindow": "2017-02-08T09:00:00Z",
     *                  "EndTimeWindow": "2017-02-08T13:00:00Z",
     *                  "ServiceTime": 5,
     *                  "NoteFromPlanner": null,
     *                  "NoteFromDriver": null,
     *                  "ContactName": null,
     *                  "ContactPhone": null,
     *                  "ContactEmail": null,
     *                  "DeliveryItems": [{
     *                      "ItemId": "WD-SC",
     *                      "ItemQty": 5
     *                  }],
     *                  "VerificationCode": {
     *                      "Code": "12345"
     *                  }
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
     * @apiUse Error500
     */

     /**
     * @api {delete} /v1/delivery/:deliveryMasterId Delete
     * @apiDescription Delete one database instance from DeliveryMaster table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName delete_delivery_master
     * @apiGroup DeliveryMaster
     *
     * @apiParam {String} deliveryMasterId  Primary key value of instance to delete.
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

     /**
     * @api {put} /v1/delivery/:deliveryMasterId Update
     * @apiDescription Update one database instance in DeliveryMaster table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName update_delivery_master
     * @apiGroup DeliveryMaster
     *
     * @apiParam {String} deliveryMasterId  Primary key value of instance to update.
     * @apiParam (Request Body) {String{..50}} [newValues.VehicleId]  References to the primary key value from Vehicle table.
     * @apiParam (Request Body) {String{..100}} [newValues.LastAttemptedByDriver]  Full name of the driver that has attempted this order. It will only keep the driver's full name who most recently attempted this order. It assumes that pickup and delivery will be attempted by the same driver.
     * @apiParam (Request Body) {String{..10}} [newValues.LastAttemptedByPlateNumber]  Vehicle plate number of the vehicle that the driver used to attempt this order. It will only keep the vehicle plate number of the vehice that most recently attempted this order. It assumes that pickup and delivery will be attempted by the same vehicle.
     * @apiParam (Request Body) {Integer=1-10} [newValues.Priority]  Ranking of jobs. Higher number has higher priority.
     * @apiParam (Request Body) {String{..254}} [newValues.CustomerName]  Name of the person who has placed this order.
     * @apiParam (Request Body) {Integer{8}} [newValues.CustomerPhone]  Contact number of the person who has placed this order.
     * @apiParam (Request Body) {String{..254}} [newValues.CustomerEmail]  Email address of the person who has placed this order.
     * @apiParam (Request Body) {String} [newValues.VehicleRestriction]  Comma delimited string. May have space between delimiters. VehicleId is without @. VehicleType is with @. Prepend # to exclude. Example: YE0234M,@Dry,#YR0213M,@#Cold
     * @apiParamExample Request-Example:
     *      // http://localhost/vrp/rest/v1/delivery/35187491
     *      {
     *          "newValues": {
     *              "Priority": 3
     *          }
     *      }
     *
     * @apiSuccess {Integer} -  Number of affected rows.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // One record was updated
     *      1
     *
     * @apiUse Error401
     * @apiUse Error500
     */
    