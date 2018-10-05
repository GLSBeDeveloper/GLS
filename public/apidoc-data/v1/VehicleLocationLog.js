    /**
     * @apiDefine Error500
     * @apiError (Error 500) {String} -  Error message.
     * @apiErrorExample Error-Response: 500 Internal Server Error
     *      HTTP/1.1 500 Internal Server Error
     *      "Error message"
     */

    /**
     * @apiDefine Error500_List
     * @apiError (Error 500) {String[]} -  List of errors.
     * @apiErrorExample Error-Response: 500 Internal Server Error
     *      HTTP/1.1 500 Internal Server Error
     *      ["Error message 1", "Error message 2"]
     */

    /**
     * @apiDefine Error401
     * @apiErrorExample Error-Response: 401 Unauthorized
     *      HTTP/1.1 401 Unauthorized
     */

    /**
     * @apiDefine Success204
     * @apiSuccessExample Success-Response: 204 No Content
     *      HTTP/1.1 204 No Content
     */
    
    /**
     * @api {get} /v1/vehicle/location/last Get last location of each vehicle
     * @apiDescription Get the last seen location of each Vehicle from VehicleLocationLog table.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_all_last_vehicle_location_log
     * @apiGroup VehicleLocationLog
     *
     * @apiSuccess {Object[]} -.  List of VehicleLocationLog instances.
     * @apiSuccess {String} -.VehicleId  The vehicle who owns the coordinates.
     * @apiSuccess {String} -.DriverName  The name of the driver.
     * @apiSuccess {String} -.PlateNumber  The vehicle's plate number that the driver was on.
     * @apiSuccess {Float} -.Lat  Latitude in degrees.
     * @apiSuccess {Float} -.Lng  Longitude in degrees.
     * @apiSuccess {Date} -.RecordedTime  Time when position was acquired.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      [{
     *          "VehicleId": "YE0423M",
     *          "DriverName": "John",
     *          "PlateNumber": "YE0423MNum",
     *          "Lat": 1.3553794,
     *          "Lng": 103.5677444,
     *          "RecordedTime": "2017-01-01T14:20:39.468Z"
     *      }, {
     *          "VehicleId": "YE5458U",
     *          "DriverName": "Doe",
     *          "PlateNumber": "YE5458UNum",
     *          "Lat": 1.3553794,
     *          "Lng": 103.5677444,
     *          "RecordedTime": "2017-01-01T14:20:45.468Z"
     *      }]
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/vehicle/:id/location/last Get last location of one vehicle
     * @apiDescription Get the last seen location of one Vehicle from VehicleLocationLog table.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_last_vehicle_location_log
     * @apiGroup VehicleLocationLog
     *
     * @apiSuccess {String} VehicleId  The vehicle who owns the coordinates.
     * @apiSuccess {String} DriverName  The name of the driver.
     * @apiSuccess {String} PlateNumber  The vehicle's plate number that the driver was on.
     * @apiSuccess {Float} Lat  Latitude in degrees.
     * @apiSuccess {Float} Lng  Longitude in degrees.
     * @apiSuccess {Date} RecordedTime  Time when position was acquired.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // Get LastSeen of VehicleId "YE0423M"
     *      // http://localhost/vrp/rest/v1/vehicle/YE0423M/location/last
     *      {
     *          "VehicleId": "YE0423M",
     *          "DriverName": "John",
     *          "PlateNumber": "YE0423MNum",
     *          "Lat": 1.3553794,
     *          "Lng": 103.5677444,
     *          "RecordedTime": "2017-01-01T14:20:39.468Z"
     *      }
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/vehicle/location Get many
     * @apiDescription Get multiple database instance(s) from VehicleLocationLog table based on where filter.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_all_vehicle_location_log
     * @apiGroup VehicleLocationLog
     *
     * @apiParam (Query String) {String} [where]  Where conditions for SQL query.
     * @apiParamExample Request-Example:
     *      // Get locations that belong to vehicle "YE0423M"
     *      // http://localhost/vrp/rest/v1/vehicle/location?where={"VehicleId":"YE0423M"}
     *      {
     *          "where": {
     *              "VehicleId": "YE0423M"
     *          }
     *      }
     * @apiParamExample Request-Example:
     *      // Get instances whose driver is either John or Doe
     *      // http://localhost/vrp/rest/v1/vehicle/location?where={"DriverName":["John", "Doe"]}
     *      {
     *          "where": {
     *              "DriverName": {
     *                  $in: ["John", "Doe"]
     *              }
     *          }
     *      }
     *
     * @apiSuccess {Object[]} -.  List of VehicleLocationLog instances.
     * @apiSuccess {String} -.VehicleId  The vehicle who owns the coordinates.
     * @apiSuccess {String} -.DriverName  The name of the driver.
     * @apiSuccess {String} -.PlateNumber  The vehicle's plate number that the driver was on.
     * @apiSuccess {Float} -.Lat  Latitude in degrees.
     * @apiSuccess {Float} -.Lng  Longitude in degrees.
     * @apiSuccess {Date} -.RecordedTime  Time when position was acquired.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      [{
     *          "VehicleId": "YE0423M",
     *          "DriverName": "John",
     *          "PlateNumber": "YE0423MNum",
     *          "Coordinates": [103.5677444, 1.3553794],
     *          "RecordedTime": "2017-01-01T14:20:39.468Z"
     *      }, {
     *          "VehicleId": "YE5458U",
     *          "DriverName": "Doe",
     *          "PlateNumber": "YE5458UNum",
     *          "Coordinates": [103.5677444, 1.3553794],
     *          "RecordedTime": "2017-01-01T14:20:39.468Z"
     *      }]
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {post} /v1/vehicle/location Create
     * @apiDescription Insert one or many Vehicle's coordinates into VehicleLocationLog table.
     * @apiPermission driver
     * @apiVersion 1.0.0
     * @apiName create_vehicle_location_log
     * @apiGroup VehicleLocationLog
     *
     * @apiParam (Request Body) {Object[]} record  Record(s) to be inserted into the database.
     * @apiParam (Request Body) {String{..50}} record.VehicleId  The vehicle who owns the coordinates.
     * @apiParam (Request Body) {String{..100}} [record.DriverName]  The name of the driver.
     * @apiParam (Request Body) {String{..10}} [record.PlateNumber]  The vehicle's plate number that the driver was on.
     * @apiParam (Request Body) {Float{-90 to 90}} record.Lat  Latitude in degrees.
     * @apiParam (Request Body) {Float{-180 to 180}} record.Lng  Longitude in degrees.
     * @apiParam (Request Body) {Date} [record.RecordedTime=now]  Time when position was acquired in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParamExample Request-Example: Create one
     *      {
     *          "record": {
     *              "VehicleId": "YE0423M",
     *              "DriverName": "John",
     *              "PlateNumber": "YE0423MNum",
     *              "Lat": 1.3553794,
     *              "Lng": 103.5677444,
     *              "RecordedTime": "2017-01-01T14:20:39.468Z"
     *          }
     *      }
     * @apiParamExample Request-Example: Create many
     *      {
     *          "record": [{
     *              "VehicleId": "YE0423M",
     *              "DriverName": "John",
     *              "PlateNumber": "YE0423MNum",
     *              "Lat": 1.3553794,
     *              "Lng": 103.5677444,
     *              "RecordedTime": "2017-01-01T14:20:39.468Z"
     *          }, {
     *              "VehicleId": "YE5458U",
     *              "DriverName": "Doe",
     *              "PlateNumber": "YE5458UNum",
     *              "Lat": 1.3553794,
     *              "Lng": 103.5677444,
     *              "RecordedTime": "2017-01-01T14:20:45.468Z"
     *          }]
     *      }
     *
     * @apiSuccess {Array} -  Number of inserted records
     * @apiSuccessExample Success-Response: Create one
     *      HTTP/1.1 200 OK
     *      // One record inserted
     *      1
     * @apiSuccessExample Success-Response: Create many
     *      HTTP/1.1 200 OK
     *      // Two records inserted
     *      2
     *
     * @apiUse Error401
     */
    