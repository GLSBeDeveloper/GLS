    /**
     * @api {get} /v1/item/:itemId Get one
     * @apiDescription Get one database instance from Item table based on primary key.
     * @apiPermission planner, driver
     * @apiVersion 1.0.0
     * @apiName get_one_item
     * @apiGroup Item
     *
     * @apiParam {String} itemId  Primary key value of instance to find.
     *
     * @apiSuccess {String} Id  Item's identifier. Can be name or an item code.
     * @apiSuccess {Float} Weight  Unit: Kg. Item's weight.
     * @apiSuccess {String} Description  Item's description.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/item/Pallet
     *      {
     *          "Name": "Pallet",
     *          "Weight": 14.9,
     *          "Description": "889 mm by 1156 mm"
     *      }
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {post} /v1/item Create
     * @apiDescription Insert one or many Item's information into Item table.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName create_item
     * @apiGroup Item
     *
     * @apiParam (Request Body) {Object[]} record  Record(s) to be inserted into the database.
     * @apiParam (Request Body) {String{..100}} record.Id  Item's identifier. Can be name or an item code.
     * @apiParam (Request Body) {Float} record.Weight  Unit: Kg. Item's weight.
     * @apiParam (Request Body) {String{..1024}} [record.Description]  Item's description.
     * @apiParamExample Request-Example: Create one
     *      {
     *          "record": {
     *              "Id": "Pallet",
     *              "Weight": 14.9,
     *              "Description": "889 mm by 1156 mm"
     *          }
     *      }
     * @apiParamExample Request-Example: Create many
     *      {
     *          "record": [{
     *              "Id": "Pallet",
     *              "Weight": 14.9,
     *              "Description": "889 mm by 1156 mm"
     *          }, {
     *              "Id": "Box",
     *              "Weight": 5.6,
     *          }]
     *      }
     *
     * @apiSuccess {Array} -  List of primary keys of affected rows
     * @apiSuccessExample Success-Response: Create one
     *      HTTP/1.1 200 OK
     *      // One record inserted
     *      ["Pallet"]
     * @apiSuccessExample Success-Response: Create many
     *      HTTP/1.1 200 OK
     *      // Two records inserted
     *      ["Pallet", "Box"]
     *
     * @apiUse Error401
     * @apiUse Error500_List
     */

     /**
     * @api {delete} /v1/item/:itemId Delete
     * @apiDescription Delete one database instance from Item table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName delete_item
     * @apiGroup Item
     *
     * @apiParam {String} itemId  Primary key value of instance to delete.
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
     * @api {put} /v1/item/:itemId Update
     * @apiDescription Update one database instance in Item table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName update_item
     * @apiGroup Item
     *
     * @apiParam {String} itemId  Primary key value of instance to update.
     * @apiParam (Request Body) {Object} newValues  New values to overwrite existing record with.
     * @apiParam (Request Body) {Float} [newValues.Weight]  Unit: Kg. Item's weight.
     * @apiParam (Request Body) {String{..1024}} [newValues.Description]  Item's description.
     * @apiParamExample Request-Example:
     *      // http://localhost/vrp/rest/v1/item/Pallet
     *      {
     *          "newValues": {
     *              "Weight": "6"
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
    