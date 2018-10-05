    /**
     * @api {put} /v1/auth/password Reset password
     * @apiDescription Changes password for logged in User.
     * @apiVersion 1.0.0
     * @apiName reset_password
     * @apiGroup Authentication
     *
     * @apiParam (Request Body) {String} oldPassword  User's old/previous password.
     * @apiParam (Request Body) {String} newPassword  New password that the User wishes to change to.
     * @apiParam (Request Body) {String} confirmPassword  Used to verify if `newPassword` value is correct.
     * @apiParamExample Request-Example: Change password from 123 to 456
     *      {
     *          "oldPassword": "123",
     *          "newPassword": "456",
     *          "confirmPassword": "456"
     *      }
     *
     * @apiUse Success204
     *
     * @apiUse Error401
     * @apiUse Error500
     */

     /**
     * @api {post} /v1/auth/login Login
     * @apiDescription Allows User to log into the system if he/she is authenticated and authorised.
     * @apiVersion 1.0.0
     * @apiName login
     * @apiGroup Authentication
     *
     * @apiParam (Request Body) {String} username  Username of the User.
     * @apiParam (Request Body) {String} password  Password of the User.
     * @apiParam {Boolean} [token=false]  Indicates whether to return token value.
     * @apiParamExample Request-Example:
     *      // http://localhost/vrp/rest/v1/login?token=true
     *      {
     *          "username": "user_doe",
     *          "password": "123"
     *      }
     *
     * @apiSuccess {String} userName  Username of the User.
     * @apiSuccess {String} userRole  Role of the User.
     * @apiSuccess {String} [vehicleId]  Vehicle assigned to the driver. Returns only if the user is a driver.
     * @apiSuccess {String} [vehiclePlateNumber]  Vehicle's plate number of the vehicle that is assigned to the driver. Returns only if the user is a driver.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      {
     *          "userName": "user_planner",
     *          "fullname": "planner A",
     *          "userRole": "planner",
     *          "statusLabels": [
     *              { "value": 1, "label": "PENDING" },
     *              { "value": 2, "label": "LATE" },
     *              { "value": 3, "label": "ONTIME" },
     *              { "value": 4, "label": "UNSUCCESSFUL" }
     *          ]
     *      }
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      {
     *          "userName": "user_doe",
     *          "fullname": "john doe",
     *          "userRole": "driver",
     *          "vehicleId": "YE01233M",
     *          "vehiclePlateNumber": "YE01233MNum",
     *          "statusLabels": [
     *              { "value": 1, "label": "PENDING" },
     *              { "value": 2, "label": "LATE" },
     *              { "value": 3, "label": "ONTIME" },
     *              { "value": 4, "label": "UNSUCCESSFUL" }
     *          ],
     *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6"
     *      }
     *
     * @apiUse Error401
     */

     /**
     * @api {get} /v1/auth/is_logged_in Check if User is logged in
     * @apiDescription Checks if User is logged into the system by validating the session ID.
     * @apiVersion 1.0.0
     * @apiName is_logged_in
     * @apiGroup Authentication
     *
     * @apiParam {Boolean} [token=false]  Indicates whether to return token value.
     *
     * @apiSuccess {String} userName  Username of the User.
     * @apiSuccess {String} userRole  Role of the User.
     * @apiSuccess {String} [vehicleId]  Vehicle assigned to the driver. Returns only if the user is a driver.
     * @apiSuccess {String} [vehiclePlateNumber]  Vehicle's plate number of the vehicle that is assigned to the driver. Returns only if the user is a driver.
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      {
     *          "userName": "user_planner",
     *          "fullname": "planner A",
     *          "userRole": "planner",
     *          "statusLabels": [
     *              { "value": 1, "label": "PENDING" },
     *              { "value": 2, "label": "LATE" },
     *              { "value": 3, "label": "ONTIME" },
     *              { "value": 4, "label": "UNSUCCESSFUL" }
     *          ]
     *      }
     * @apiSuccessExample Success-Response: 200 OK
     *      HTTP/1.1 200 OK
     *      {
     *          "userName": "user_doe",
     *          "fullname": "john doe",
     *          "userRole": "driver",
     *          "vehicleId": "YE01233M",
     *          "vehiclePlateNumber": "YE01233MNum",
     *          "statusLabels": [
     *              { "value": 1, "label": "PENDING" },
     *              { "value": 2, "label": "LATE" },
     *              { "value": 3, "label": "ONTIME" },
     *              { "value": 4, "label": "UNSUCCESSFUL" }
     *          ]
     *      }
     *
     * @apiUse Error401
     */

     /**
     * @api {post} /v1/auth/logout Logout
     * @apiDescription Logs user out of the system. User is recognised by his/her session ID.
     * @apiVersion 1.0.0
     * @apiName logout
     * @apiGroup Authentication
     *
     * @apiUse Success204
     *
     * @apiUse Error401
     */
    