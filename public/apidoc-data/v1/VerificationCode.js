    /**
     * @api {post} /v1/delivery/job/:deliveryDetailId/code/notify Notify
     * @apiDescription Notify VerificationCode to contact person via Email address specified in DeliveryDetail table.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName notify_verification_code
     * @apiGroup VerificationCode
     *
     * @apiParam {String} deliveryDetailId  Primary key value of DeliveryDetail instance.
     *
     * @apiUse Success204
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/delivery/job/:deliveryDetailId/code Get one
     * @apiDescription Get database instances from VerificationCode table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName get_verification_code
     * @apiGroup VerificationCode
     *
     * @apiParam {String} deliveryDetailId  Primary key value of DeliveryDetail instance.
     *
     * @apiSuccess {String} DeliveryDetailId  Primary key value of DeliveryDetail instance.
     * @apiSuccess {String} Code  Code that is used to verify whether the customer is authorised.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/1/code
     *      {
     *          "DeliveryDetailId": 1,
     *          "Code": "12345"
     *      }
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {post} /v1/delivery/job/:deliveryDetailId/code Create one
     * @apiDescription Insert one instance into VerificationCode table.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName create_verification_code
     * @apiGroup VerificationCode
     *
     * @apiParam {String} deliveryDetailId  Primary key value of DeliveryDetail instance.
     * @apiParam (Request Body) {Object} record  Record to be inserted into the database.
     * @apiParam (Request Body) {Integer{5}} record.Code  Code that is used to verify whether the customer is authorised.
     * @apiParamExample
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/3/code
     *      {
     *          "record": {
     *              "Code": "12345"
     *          }
     *      }
     *
     * @apiSuccess {String} -  Primary key of affected row
     * @apiSuccessExample Success-Response:
     *      HTTP/1.1 200 OK
     *      // One record inserted
     *      "3"
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {delete} /v1/delivery/job/:deliveryDetailId/code Delete
     * @apiDescription Delete one database instance from VerificationCode table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName delete_verification_code
     * @apiGroup VerificationCode
     *
     * @apiParam {String} deliveryDetailId  Primary key value of DeliveryDetail instance.
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
     * @api {put} /v1/delivery/job/:deliveryDetailId/code Update
     * @apiDescription Update database instances in VerificationCode table based on primary key.
     * @apiPermission planner
     * @apiVersion 1.0.0
     * @apiName update_verification_code
     * @apiGroup VerificationCode
     *
     * @apiParam {String} deliveryDetailId  Primary key value of DeliveryDetail instance.
     * @apiParam (Request Body) {Integer{5}} newValues.Code  Code that is used to verify whether the customer is authorised.
     * @apiParamExample Request-Example:
     *      // http://localhost/vrp/rest/v1/delivery/job/1/code
     *      {
     *          "newValues": {
     *              "Code": "54321"
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
    