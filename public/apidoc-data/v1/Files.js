    /**
     * @api {get} /v1/files/transaction_log Transaction Log
     * @apiDescription
     *      Generate transaction log
     * @apiVersion 1.0.0
     * @apiName get_transaction_log
     * @apiGroup Files
     *
     * @apiParam (Query String) {String} [date="today"]  Date to search records on. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParam (Query String) {String} [startDate]  Search records in a date range. Must be specified together with `endDate`. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParam (Query String) {String} [endDate]  Search records in a date range. Must be specified together with `startDate`. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).
     * @apiParam (Query String) {Boolean} [withPhotos=false]  Download all photos associated with the records in transaction log.
     * @apiParamExample Request-Example:
     *      // Get transaction log for today
     *      // http://localhost/vrp/rest/v1/files/transaction_log
     * @apiParamExample Request-Example:
     *      // Get transaction log between on 1 January 2017 to 31 December 2017 with all images
     *      // http://localhost/vrp/rest/v1/files/transaction_log?startDate=2017-01-01&endDate=2017-12-31&withPhotos=true
     *      {
     *          "startDate": "2017-01-01",
     *          "endDate": "2017-12-31",
     *          "withPhotos": true
     *      }
     *
     * @apiSuccess {Buffer} -.  Zip file that contains transaction log in excel format, and images of DeliveryNote and DeliveryPOD
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/files/service_chit/:deliveryDetailId Service Chit
     * @apiDescription
     *      Generate service chit
     * @apiVersion 1.0.0
     * @apiName get_service_chit
     * @apiGroup Files
     *
     * @apiParam {String} deliveryDetailId  Primary key value of associated DeliveryDetail instance.
     * @apiParamExample Request-Example:
     *      // Get service chit for DeliveryDetail Id 1
     *      // http://localhost/vrp/rest/v1/files/service_chit/1
     *
     * @apiSuccess {Buffer} -.  Service chit in PDF file
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v1/files/data_template Data Template
     * @apiDescription
     *      Download data template for uploading data in planner web application A1 version
     * @apiVersion 1.0.0
     * @apiName get_data_template
     * @apiGroup Files
     *
     * @apiSuccess {Buffer} -.  Data template in Excel
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {get} /v2/files/data_template Data Template
     * @apiDescription
     *      Download data template for uploading data in planner web application A4 version
     * @apiVersion 2.0.0
     * @apiName get_data_template
     * @apiGroup Files
     *
     * @apiSuccess {Buffer} -.  Data template in Excel
     *
     * @apiUse Error401
     * @apiUse Error500
     */
    