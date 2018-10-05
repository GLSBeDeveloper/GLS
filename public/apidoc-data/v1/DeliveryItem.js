    /**
     * @api {get} /v1/delivery/item/:deliveryItemId Get one
     * @apiDescription Get one database instance from DeliveryItem table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_one_delivery_item
     * @apiGroup DeliveryItem
     *
     * @apiParam {String} deliveryItemId  Primary key value of instance to find.
     *
     * @apiSuccess {Integer} Id  Primary key value.
     * @apiSuccess {Integer} DeliveryDetailId  References to the primary key value from DeliveryDetail table.
     * @apiSuccess {Integer} ItemId  References to the primary key value from Item table.
     * @apiSuccess {Float} ItemQty  Indicates number of units to pick up and/or deliver.
     * @apiSuccess {Float} ActualItemQty  Indicates number of units that have been picked up and/or delivered.
     * @apiSuccess {Object} Item  Instance from Item table based on ItemId.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      {
     *          "Id": 1,
     *          "DeliveryDetailId": 1,
     *          "ItemId": 6,
     *          "ItemQty": 3,
     *          "ActualItemQty" null,
     *          "Item": {
     *              "Id": 6,
     *              "Name": "BR-SC",
     *              "Weight": 5,
     *              "Description": "Refill Cartridge: Minty/Oceanic"
     *          }
     *      }
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/delivery/item Get many
     * @apiDescription Get multiple database instance(s) from DeliveryItem table based on where filter.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_all_delivery_item
     * @apiGroup DeliveryItem
     *
     * @apiParam (Query String) {String} [where]  Where conditions for SQL query.
     * @apiParamExample Request-Example:
     *      // Get instances whose primary key value is either 1 or 2
     *      // http://localhost/vrp/rest/v1/delivery/item?where={"Id":[1,2]}
     *      {
     *          "where": {
     *              "Id": [1,2]
     *          }
     *      }
     *
     * @apiSuccess {Object[]} -.  List of DeliveryItem instances.
     * @apiSuccess {Integer} -.Id  Primary key value.
     * @apiSuccess {Integer} -.DeliveryDetailId  References to the primary key value from DeliveryDetail table.
     * @apiSuccess {String} -.ItemId  References to the primary key value from Item table.
     * @apiSuccess {Float} -.ItemQty  Indicates number of units to pick up and/or deliver.
     * @apiSuccess {Float} -.ActualItemQty  Indicates number of units that have been picked up and/or delivered.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      [{
     *          "Id": 1,
     *          "DeliveryDetailId": 1,
     *          "ItemId": "BR-SC",
     *          "ItemQty": 3,
     *          "ActualItemQty": 3,
     *          "Item": {
     *              "Id": "BR-SC",
     *              "Weight": 5,
     *              "Description": "Refill Cartridge: Minty/Oceanic"
     *          }
     *      }, {
     *          "Id": 2,
     *          "DeliveryDetailId": 2,
     *          "ItemId": "SU-SC",
     *          "ItemQty": 30,
     *          "ActualItemQty": null,
     *          "Item": {
     *              "Id": "SU-SC",
     *              "Weight": 5,
     *              "Description": "Refill Cartridge: Summer"
     *          }
     *      }]
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {post} /v1/delivery/job/:deliveryDetailId/item Create
     * @apiDescription Insert one or many DeliveryItem's information into DeliveryItem table.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName create_delivery_item
     * @apiGroup DeliveryItem
     *
     * @apiParam {String} deliveryDetailId  Primary key value of associated DeliveryDetail instance.
     * @apiParam (Request Body) {Object[]} record  Record(s) to be inserted into the database.
     * @apiParam (Request Body) {String{..100}} record.ItemId  References to the primary key value from Item table.
     * @apiParam (Request Body) {Float} record.ItemQty  Indicates number of units to pick up and/or deliver.
     * @apiParamExample Request-Example:
     *      {
     *          "record": {
     *              "ItemId": 1,
     *              "ItemQty": 3
     *          }
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
     * @api {delete} /v1/delivery/item/:deliveryItemId Delete
     * @apiDescription Delete one database instance from DeliveryItem table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName delete_delivery_item
     * @apiGroup DeliveryItem
     *
     * @apiParam {String} deliveryItemId  Primary key value of instance to delete.
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
     * @api {put} /v1/delivery/item/:deliveryItemId Update
     * @apiDescription Update one database instance in DeliveryItem table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName update_delivery_item
     * @apiGroup DeliveryItem
     *
     * @apiParam {String} deliveryItemId  Primary key value of instance to update.
     * @apiParam (Request Body) {Object} newValues  New values to overwrite existing record with.
     * @apiParam (Request Body) {Integer} [newValues.DeliveryDetailId]  References to the primary key value from DeliveryDetail table.
     * @apiParam (Request Body) {String{..100}} [newValues.ItemId]  References to the primary key value from Item table.
     * @apiParam (Request Body) {Float} [newValues.ItemQty]  Indicates number of units to pick up and/or deliver.
     * @apiParam (Request Body) {Float} [newValues.ActualItemQty]  Indicates number of units that have been picked up and/or delivered.
     * @apiParamExample Request-Example:
     *      // http://localhost/vrp/rest/v1/delivery/item/1
     *      {
     *          "newValues": {
     *              "ItemQty": 16
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

    /**
     * @api {get} /v1/delivery/job/:deliveryDetailId/item Get DeliveryItem
     * @apiDescription Get all DeliveryItem instances that are associated with a particular DeliveryDetail instance.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_delivery_item_by_delivery_detail
     * @apiGroup DeliveryDetail
     *
     * @apiParam {String} deliveryDetailId  Primary key value of DeliveryDetail instance.
     *
     * @apiSuccess {Object[]} -.  Instance(s) from DeliveryItem table that are related to this DeliveryDetail Id.
     * @apiSuccess {Integer} -.Id  Primary key value of DeliveryItem instance.
     * @apiSuccess {Integer} -.DeliveryDetailId  References to the primary key value from DeliveryDetail table.
     * @apiSuccess {Integer} -.ItemId  References to the primary key value from Item table.
     * @apiSuccess {Float} -.ItemQty  Indicates number of units to pick up and/or deliver.
     * @apiSuccess {Float} -.ActualItemQty  Indicates number of units that have been picked up and/or delivered.
     * @apiSuccess {Object} -.Item  Instance from Item table based on ItemId.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/1/item
     *      [{
     *          "Id": 12,
     *          "DeliveryDetailId": 1,
     *          "ItemId": 12,
     *          "ItemQty": 5,
     *          "ActualItemQty": 5,
     *          "Item": {
     *              "Id": 12,
     *              "Name": "WD-SC",
     *              "Weight": 5,
     *              "Description": "Refill Cartridge:Woody/Herby"
     *          }
     *      }]
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {delete} /v1/delivery/job/:deliveryDetailId/item Delete all
     * @apiDescription Delete all DeliveryItem database instances that are associated to a DeliveryDetail instance.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName delete_deliveryItem
     * @apiGroup DeliveryItem
     *
     * @apiParam {String} deliveryDetailId  Primary key value of DeliveryDetail instance.
     *
     * @apiSuccess {Integer} -  Number of affected rows.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/1/item
     *      1
     *
     * @apiUse Error401
     * @apiUse Error500
     */
