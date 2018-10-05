    /**
     * @api {get} /v1/vehicle/:vehicleId Get one
     * @apiDescription Get one database instance from Vehicle table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_one_vehicle
     * @apiGroup Vehicle
     *
     * @apiParam {String} vehicleId  Primary key value of instance to find.
     *
     * @apiSuccess {String} Id  Vehicle's number plate.
     * @apiSuccess {Integer} VehicleTypeId  Vehicle's type. References to the primary key value from VehicleType table.
     * @apiSuccess {String} PlateNumber  Vehicle's number plate.
     * @apiSuccess {String} StartAddressPostal  Vehicle's start location.
     * @apiSuccess {String} EndAddressPostal  Vehicle's end location.
     * @apiSuccess {Boolean} ReturnToEndAddress  Indicates whether the vehicle needs to return to EndAddressPostal after completion of all jobs.
     * @apiSuccess {String} DriverUsername  Username of the current driver for this vehicle.
     * @apiSuccess {String} StartTime  Start of vehicle operational time in hh:mm 24 hour format.
     * @apiSuccess {String} EndTime  End of vehicle operational time in hh:mm 24 hour format.
     * @apiSuccess {Object} VehicleType  Instance from VehicleType table based on VehicleTypeId.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/vehicle/YE0423M
     *      {
     *          "Id": "YE0423M",
     *          "VehicleTypeId": 1,
     *          "PlateNumber": "YE0423MNum",
     *          "StartAddressPostal": "639588",
     *          "EndAddressPostal": "639588",
     *          "ReturnToEndAddress": true,
     *          "DriverUsername": "user_john",
     *          "StartTime": "09:00",
     *          "EndTime": "18:00",
     *          "VehicleType": {
     *              "Id": 1,
     *              "Name": "Dry",
     *              "Capacity": "1000",
     *              "FixedCost": 60,
     *              "DistanceCost": 0.001,
     *              "TravelTimeCost": 0,
     *              "WaitingTimeCost": 0.006
     *          }
     *      }
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/vehicle Get many
     * @apiDescription Get multiple database instance(s) from Vehicle table based on where filter.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_all_vehicle
     * @apiGroup Vehicle
     *
     * @apiParam (Query String) {String} [where]  Where conditions for SQL query.
     * @apiParamExample Request-Example:
     *      // Get vehicle whose DriverUsername is "user_john"
     *      // http://localhost/vrp/rest/v1/vehicle?where={"DriverUsername":"user_john"}
     *      {
     *          "where": {
     *              "DriverUsername": "user_john"
     *          }
     *      }
     * @apiParamExample Request-Example:
     *      // Get instances whose StartTime is at 09:00
     *      // http://localhost/vrp/rest/v1/vehicle?where={"StartTime":"06:00"}
     *      {
     *          "where": {
     *              "StartTime": "09:00"
     *          }
     *      }
     *
     * @apiSuccess {Object[]} -.  List of Vehicle instances.
     * @apiSuccess {String} -.Id  Vehicle's number plate.
     * @apiSuccess {Integer} -.VehicleTypeId  Vehicle's type. References to the primary key value from VehicleType table.
     * @apiSuccess {String} -.PlateNumber  Vehicle's number plate.
     * @apiSuccess {String} -.StartAddressPostal  Vehicle's start location.
     * @apiSuccess {String} -.EndAddressPostal  Vehicle's end location.
     * @apiSuccess {Boolean} -.ReturnToEndAddress  Indicates whether the vehicle needs to return to EndAddressPostal after completion of all jobs.
     * @apiSuccess {String} -.DriverUsername  Username of the current driver for this vehicle.
     * @apiSuccess {String} -.StartTime  Start of vehicle operational time in hh:mm 24 hour format.
     * @apiSuccess {String} -.EndTime  End of vehicle operational time in hh:mm 24 hour format.
     * @apiSuccess {Object} -.VehicleType  Instance from VehicleType table based on VehicleTypeId.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      [{
     *          "Id": "YE0423M",
     *          "VehicleTypeId": 1,
     *          "PlateNumber": "YE0423MNum",
     *          "StartAddressPostal": "639588",
     *          "EndAddressPostal": "639588",
     *          "ReturnToEndAddress": true,
     *          "DriverUsername": "user_john",
     *          "StartTime": "09:00",
     *          "EndTime": "18:00",
     *          "VehicleType": {
     *              "Id": 1,
     *              "Name": "Dry",
     *              "Capacity": "1000",
     *              "FixedCost": 60,
     *              "DistanceCost": 0.001,
     *              "TravelTimeCost": 0,
     *              "WaitingTimeCost": 0.006
     *          }
     *      }, {
     *          ...
     *      }]
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {post} /v1/vehicle Create
     * @apiDescription Insert one or many Vehicle's information into Vehicle table.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName create_vehicle
     * @apiGroup Vehicle
     *
     * @apiParam (Request Body) {Object[]} record  Record(s) to be inserted into the database.
     * @apiParam (Request Body) {String{..50}} record.Id  Vehicle's number plate.
     * @apiParam (Request Body) {Integer} record.VehicleTypeId  Vehicle's type. References to the primary key value from VehicleType table.
     * @apiParam (Request Body) {String{..10}} [record.PlateNumber]  Vehicle's number plate. Only letters, numbers and dashes are allowed.
     * @apiParam (Request Body) {String{6}} record.StartAddressPostal  Vehicle's start location.
     * @apiParam (Request Body) {String{6}} [record.EndAddressPostal=null]  Vehicle's end location.
     * @apiParam (Request Body) {Boolean} [record.ReturnToEndAddress=false]  Indicates whether the vehicle needs to return to EndAddress after completion of all jobs.
     * @apiParam (Request Body) {String{..100}} record.DriverUsername  Username of the current driver for this vehicle.
     * @apiParam (Request Body) {String} record.StartTime  Start of vehicle operational time in HH:mm 24-hour format. Required if EndTime is specified.
     * @apiParam (Request Body) {String} record.EndTime  End of vehicle operational time in HH:mm 24-hour format. Required if StartTime is specified.
     * @apiParamExample Request-Example: Create one
     *      {
     *          "record": {
     *              "Id": "YE0423M",
     *              "VehicleTypeId": 1,
     *              "PlateNumber": "YE0423MNum",
     *              "StartAddressPostal": "639588",
     *              "EndAddressPostal": "639588",
     *              "ReturnToEndAddress": true,
     *              "DriverUsername": "user_john",
     *              "StartTime": "09:00",
     *              "EndTime": "18:00"
     *          }
     *      }
     * @apiParamExample Request-Example: Create many
     *      {
     *          "record": [{
     *              "Id": "YE0423M",
     *              "VehicleTypeId": 1,
     *              "PlateNumber": "YE0423MNum",
     *              "StartAddressPostal": "639588",
     *              "EndAddressPostal": "639588",
     *              "ReturnToEndAddress": true,
     *              "DriverUsername": "user_doe",
     *              "StartTime": "09:00",
     *              "EndTime": "18:00"
     *          }, {
     *              "Id": "YE5458U",
     *              "VehicleTypeId": 2,
     *              "PlateNumber": "YE5458UNum",
     *              "StartAddressPostal": "639588",
     *              "EndAddressPostal": "639588",
     *              "ReturnToEndAddress": true,
     *              "DriverUsername": "user_john",
     *              "StartTime": "09:00",
     *              "EndTime": "18:00"
     *          }]
     *      }
     *
     * @apiSuccess {Array} -  List of primary keys of affected rows
     * @apiSuccessExample Success-Response: Create one
     *      HTTP/1.1 200 OK
     *      // One record inserted
     *      ["YE0423M"]
     * @apiSuccessExample Success-Response: Create many
     *      HTTP/1.1 200 OK
     *      // Two records inserted
     *      ["YE0423M", "YE5458U"]
     *
     * @apiUse Error401
     * @apiUse Error500_List
     */

     /**
     * @api {delete} /v1/vehicle/:vehicleId Delete
     * @apiDescription Delete one database instance from Vehicle table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName delete_vehicle
     * @apiGroup Vehicle
     *
     * @apiParam {String} vehicleId  Primary key value of instance to delete.
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
     * @api {put} /v1/vehicle/:vehicleId Update
     * @apiDescription Update one database instance in Vehicle table based on primary key.<br>
     *      Planner can update any database instance(s).<br>
     *      Driver can only update PlateNumber column of the database instance that is associated to his/her username (i.e. DriverUsername column = Driver's username).<br>
     * @apiPermission planner, driver
     * @apiVersion 1.0.0
     * @apiName update_vehicle
     * @apiGroup Vehicle
     *
     * @apiParam {String} vehicleId  Primary key value of instance to update.
     * @apiParam (Request Body) {Object} newValues  New values to overwrite existing record with.
     * @apiParam (Request Body) {Integer} [newValues.VehicleTypeId]  Vehicle's type. References to the primary key value from VehicleType table.
     * @apiParam (Request Body) {String{..10}} [newValues.PlateNumber]  Vehicle's number plate. Only letters, numbers and dashes are allowed.
     * @apiParam (Request Body) {String{6}} [newValues.StartAddressPostal]  Vehicle's start location.
     * @apiParam (Request Body) {String{6}} [newValues.EndAddressPostal]  Vehicle's end location.
     * @apiParam (Request Body) {Boolean} [newValues.ReturnToEndAddress]  Indicates whether the vehicle needs to return to EndAddress after completion of all jobs.
     * @apiParam (Request Body) {String{..100}} [newValues.DriverUsername]  Username of the current driver for this vehicle.
     * @apiParam (Request Body) {String} [newValues.StartTime]  Start of vehicle operational time in HH:mm 24-hour format. Required if EndTime is specified.
     * @apiParam (Request Body) {String} [newValues.EndTime]  End of vehicle operational time in HH:mm 24-hour format. Required if StartTime is specified.
     * @apiParamExample Request-Example:
     *      // http://localhost/vrp/rest/v1/vehicle/YE0423M
     *      {
     *          "newValues": {
     *              "ReturnToEndAddress": "false"
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
