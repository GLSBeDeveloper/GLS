    /**
     * @api {get} /v1/delivery/job/:deliveryDetailId/pod Get one
     * @apiDescription
     *      Get database instances from DeliveryPOD table based on DeliveryDetail's primary key.<br>
     *      Driver can only retrieve POD of jobs that they have executed.
     * @apiVersion 1.0.0
     * @apiName get_one_delivery_pod
     * @apiGroup DeliveryPOD
     *
     * @apiParam {String} deliveryDetailId  Primary key value of associated DeliveryDetail instance.
     *
     * @apiSuccess {String} DeliveryDetailId  References to the primary key value from DeliveryDetail table.
     * @apiSuccess {String} Signature  Signature as proof of delivery in Base64 format.
     * @apiSuccess {String} Photo  Photo as proof of delivery in Base64 format.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/1/pod
     *      {
     *          "DeliveryDetailId": 1,
     *          "Signature": "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
     *          "Photo": null
     *      }
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/delivery/job/:deliveryDetailId/pod/:podType Get signature or photo only
     * @apiDescription
     *      Get Signature or Photo column of one database instance from DeliveryPOD table based on primary key.<br>
     *      Driver can only retrieve POD of jobs that they have executed.
     * @apiVersion 1.0.0
     * @apiName get_delivery_pod_by_column
     * @apiGroup DeliveryPOD
     *
     * @apiParam {String} deliveryDetailId  Primary key value of associated DeliveryDetail instance.
     * @apiParam {String="photo","signature"} podType  The column to retrieve.
     *
     * @apiSuccess {String} -  Either Photo or Signature column in Base64, depending which column param was specified.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/1/pod/signature
     *      "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/1/pod/photo
     *      "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
     *
     * @apiUse Error401
     * @apiUse Error500
     */
    