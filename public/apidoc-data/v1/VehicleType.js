    /**
     * @api {get} /v1/vehicle/type/:vehicleTypeId Get one
     * @apiDescription Get one database instance from VehicleType table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_one_vehicle_type
     * @apiGroup VehicleType
     *
     * @apiParam {String} vehicleTypeId  Primary key value of instance to find.
     *
     * @apiSuccess {Integer} Id  Primary key value.
     * @apiSuccess {String} Name  Vehicle Type's identifier.
     * @apiSuccess {String} Capacity  The total weight that can be carried by the vehicle.
     * @apiSuccess {Float} FixedCost  Unit: Dollars. Daily one-time fixed cost of activating a vehicle.
     * @apiSuccess {Float} DistanceCost  Unit: Dollars. Cost incurred per meter travelled by vehicle. Suitable for quantifying fuel cost.
     * @apiSuccess {Float} TravelTimeCost  Unit: Dollars. Cost incurred per second spent by vehicle travelling.
     * @apiSuccess {Float} WaitingTimeCost  Unit: Dollars. Cost incurred per second spent by driver waiting to serve the customer.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/vehicle/type/1
     *      {
     *          "Id": 1,
     *          "Name": "Dry",
     *          "Capacity": "1000",
     *          "FixedCost": 60,
     *          "DistanceCost": 0.001,
     *          "TravelTimeCost": 0,
     *          "WaitingTimeCost": 0.006
     *      }
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/vehicle/type Get many
     * @apiDescription Get multiple database instance(s) from VehicleType table based on where filter.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_all_vehicle_type
     * @apiGroup VehicleType
     *
     * @apiParam (Query String) {String} [where]  Where conditions for SQL query.
     * @apiParamExample Request-Example:
     *      // Get vehicle types that have capacity 1000
     *      // http://localhost/vrp/rest/v1/vehicle/type?where={"Capacity":1000}
     *      {
     *          "where": {
     *              "Capacity": "1000"
     *          }
     *      }
     *
     * @apiSuccess {Object[]} -.  List of VehicleType instances.
     * @apiSuccess {Integer} -.Id  Primary key value.
     * @apiSuccess {String} -.Name  Vehicle Type's identifier.
     * @apiSuccess {String} -.Capacity  The total weight that can be carried by the vehicle.
     * @apiSuccess {Float} -.FixedCost  Unit: Dollars. Daily one-time fixed cost of activating a vehicle.
     * @apiSuccess {Float} -.DistanceCost  Unit: Dollars. Cost incurred per meter travelled by vehicle. Suitable for quantifying fuel cost.
     * @apiSuccess {Float} -.TravelTimeCost  Unit: Dollars. Cost incurred per second spent by vehicle travelling.
     * @apiSuccess {Float} -.WaitingTimeCost  Unit: Dollars. Cost incurred per second spent by driver waiting to serve the customer.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      [{
     *          "Id": 1,
     *          "Name": "Dry",
     *          "Capacity": "1000",
     *          "FixedCost": 60,
     *          "DistanceCost": 0.001,
     *          "TravelTimeCost": 0,
     *          "WaitingTimeCost": 0.006
     *      }, {
     *          "Id": 2,
     *          "Name": "Cold",
     *          "Capacity": "1000",
     *          "FixedCost": 60,
     *          "DistanceCost": 0.001,
     *          "TravelTimeCost": 1,
     *          "WaitingTimeCost": 0.006
     *      }]
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {post} /v1/vehicle/type Create
     * @apiDescription Insert one or many Vehicle Type(s) into VehicleType table.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName create_vehicle_type
     * @apiGroup VehicleType
     *
     * @apiParam (Request Body) {Object[]} record  Record(s) to be inserted into the database.
     * @apiParam (Request Body) {String{..256}} record.Name  Vehicle Type's identifier.
     * @apiParam (Request Body) {String} [record.Capacity]  The total weight that can be carried by the vehicle.
     * @apiParam (Request Body) {Float} [record.FixedCost=1]  Unit: Dollars. Daily one-time fixed cost of activating a vehicle.
     * @apiParam (Request Body) {Float} [record.DistanceCost=1]  Unit: Dollars. Cost incurred per meter travelled by vehicle. Suitable for quantifying fuel cost.
     * @apiParam (Request Body) {Float} [record.TravelTimeCost=1]  Unit: Dollars. Cost incurred per second spent by vehicle travelling.
     * @apiParam (Request Body) {Float} [record.WaitingTimeCost=1]  Unit: Dollars. Cost incurred per second spent by driver waiting to serve the customer.
     * @apiParamExample Request-Example: Create one
     *      {
     *          "record": {
     *              "Name": "Dry",
     *              "Capacity": "[1000,1000]",
     *              "FixedCost": 60,
     *              "DistanceCost": 0.001,
     *              "TravelTimeCost": 0,
     *              "WaitingTimeCost": 0.006
     *          }
     *      }
     * @apiParamExample Request-Example: Create many
     *      {
     *          "record": [{
     *              "Name": "Dry",
     *              "Capacity": "[1000,1000]",
     *              "FixedCost": 60,
     *              "DistanceCost": 0.001,
     *              "TravelTimeCost": 0,
     *              "WaitingTimeCost": 0.006
     *          }, {
     *              "Name": "Cold",
     *              "Capacity": "1000"
     *          }]
     *      }
     *
     * @apiSuccess {Array} -  List of primary keys of affected rows
     * @apiSuccessExample Success-Response: Create one
     *      HTTP/1.1 200 OK
     *      // One record inserted
     *      [29]
     * @apiSuccessExample Success-Response: Create many
     *      HTTP/1.1 200 OK
     *      // Two records inserted
     *      [30, 31]
     *
     * @apiUse Error401
     * @apiUse Error500_List
     */

     /**
     * @api {delete} /v1/vehicle/type/:vehicleTypeId Delete
     * @apiDescription Delete one database instance from VehicleType table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName delete_vehicle_type
     * @apiGroup VehicleType
     *
     * @apiParam {String} vehicleTypeId  Primary key value of instance to delete.
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
     * @api {put} /v1/vehicle/type/:vehicleTypeId Update
     * @apiDescription Update one database instance in VehicleType table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName update_vehicle_type
     * @apiGroup VehicleType
     *
     * @apiParam {String} vehicleTypeId  Primary key value of instance to update.
     * @apiParam (Request Body) {String} newValues  Record(s) to be inserted into the database.
     * @apiParam (Request Body) {String{..256}} [newValues.Name]  Vehicle Type's identifier.
     * @apiParam (Request Body) {String} [newValues.Capacity]  The total weight that can be carried by the vehicle.
     * @apiParam (Request Body) {Float} [newValues.FixedCost]  Unit: Dollars. Daily one-time fixed cost of activating a vehicle.
     * @apiParam (Request Body) {Float} [newValues.DistanceCost]  Unit: Dollars. Cost incurred per meter travelled by vehicle. Suitable for quantifying fuel cost.
     * @apiParam (Request Body) {Float} [newValues.TravelTimeCost]  Unit: Dollars. Cost incurred per second spent by vehicle travelling.
     * @apiParam (Request Body) {Float} [newValues.WaitingTimeCost]  Unit: Dollars. Cost incurred per second spent by driver waiting to serve the customer.
     * @apiParamExample Request-Example:
     *      // http://localhost/vrp/rest/v1/vehicle/type/1
     *      {
     *          "newValues": {
     *              "Capacity": "1002"
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
