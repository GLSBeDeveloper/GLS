    /**
     * @api {get} /v1/delivery/job/:deliveryDetailId/note Get all
     * @apiDescription
     *      Get database instances from DeliveryNote table based on DeliveryDetail's primary key.<br>
     *      Driver can only retrieve photos note of jobs that they have executed.
     * @apiVersion 1.0.0
     * @apiName get_delivery_note
     * @apiGroup DeliveryNote
     *
     * @apiParam {String} deliveryDetailId  Primary key value of associated DeliveryDetail instance.
     *
     * @apiSuccess {String[]} -.  List of Photo column of instances from DeliveryNote table in Base64 format
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      // http://localhost/vrp/rest/v1/delivery/job/1/note
     *      [
     *          "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
     *          "R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+goOXMv8"
     *      ]
     *
     * @apiUse Error401
     * @apiUse Error500
     */
    