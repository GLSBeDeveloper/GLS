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
 * @api {post} auth/v2/login Login
 * @apiDescription Allows User to log into the system if he/she is authenticated and authorised.
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup Authentication
 * @apiParam (Request Body) {String} username  Username of the User.
 * @apiParam (Request Body) {String} password  Password of the User.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
 *          "username": "edmund",
 *          "password": "123"
 *      }
 * @apiSuccess {json} User User Object with "token"
 * @apiSuccessExample Success-Response: 200 OK
 *      HTTP/1.1 200 OK
 *      {
            "fullname": "EDMUND",
            "username": "Edmund",
            "role": "driver",
            "profile": {
                "name": "driver",
                "dateTimeFormat": "YYYY-MM-DD hh:mm:ss A",
                "statusLabels": [
                    {
                        "value": 1,
                        "label": "PENDING"
                    },
                    {
                        "value": 2,
                        "label": "LATE"
                    },
                    {
                        "value": 3,
                        "label": "ONTIME"
                    },
                    {
                        "value": 4,
                        "label": "UNSUCCESSFUL"
                    },
                    {
                        "value": 10,
                        "label": "PENDING"
                    },
                    {
                        "value": 11,
                        "label": "COMPLETED"
                    },
                    {
                        "value": 12,
                        "label": "NEW"
                    }
                ]
            },
            "modified_date": "2018-02-14T02:37:11.038Z",
            "email": null,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkVETVVORCIsInVzZXJuYW1lIjoiRWRtdW5kIiwicm9sZSI6ImRyaXZlciIsInByb2ZpbGUiOnsibmFtZSI6ImRyaXZlciIsImRhdGVUaW1lRm9ybWF0IjoiWVlZWS1NTS1ERCBoaDptbTpzcyBBIiwic3RhdHVzTGFiZWxzIjpbeyJ2YWx1ZSI6MSwibGFiZWwiOiJQRU5ESU5HIn0seyJ2YWx1ZSI6MiwibGFiZWwiOiJMQVRFIn0seyJ2YWx1ZSI6MywibGFiZWwiOiJPTlRJTUUifSx7InZhbHVlIjo0LCJsYWJlbCI6IlVOU1VDQ0VTU0ZVTCJ9LHsidmFsdWUiOjEwLCJsYWJlbCI6IlBFTkRJTkcifSx7InZhbHVlIjoxMSwibGFiZWwiOiJDT01QTEVURUQifSx7InZhbHVlIjoxMiwibGFiZWwiOiJORVcifV19LCJtb2RpZmllZF9kYXRlIjoiMjAxOC0wMi0xNFQwMjozNzoxMS4wMzhaIiwiZW1haWwiOm51bGwsImlhdCI6MTUyNjk3OTY0OSwiZXhwIjoxNTI5NTcxNjQ5fQ.txXg1QX3WjvPEDr9HBPpUjUSeSOaJ7jbfOHz8sRgdEA"
        }
 *
 *
 * @apiUse Error401
 */

 /**
 * @api {get} auth/v2/isLoggedIn Check if User is logged in
 * @apiDescription Checks if User is logged into the system by validating the session ID.
 * @apiVersion 1.0.0
 * @apiName isLoggedIn
 * @apiGroup Authentication
 *
 * @apiSuccess {json} User User object with "token"
 * @apiSuccessExample Success-Response: 200 OK
 *      HTTP/1.1 200 OK
 *      {
            "fullname": "EDMUND",
            "username": "Edmund",
            "role": "driver",
            "profile": {
                "name": "driver",
                "dateTimeFormat": "YYYY-MM-DD hh:mm:ss A",
                "statusLabels": [
                    {
                        "value": 1,
                        "label": "PENDING"
                    },
                    {
                        "value": 2,
                        "label": "LATE"
                    },
                    {
                        "value": 3,
                        "label": "ONTIME"
                    },
                    {
                        "value": 4,
                        "label": "UNSUCCESSFUL"
                    },
                    {
                        "value": 10,
                        "label": "PENDING"
                    },
                    {
                        "value": 11,
                        "label": "COMPLETED"
                    },
                    {
                        "value": 12,
                        "label": "NEW"
                    }
                ]
            },
            "modified_date": "2018-02-14T02:37:11.038Z",
            "email": null,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkVETVVORCIsInVzZXJuYW1lIjoiRWRtdW5kIiwicm9sZSI6ImRyaXZlciIsInByb2ZpbGUiOnsibmFtZSI6ImRyaXZlciIsImRhdGVUaW1lRm9ybWF0IjoiWVlZWS1NTS1ERCBoaDptbTpzcyBBIiwic3RhdHVzTGFiZWxzIjpbeyJ2YWx1ZSI6MSwibGFiZWwiOiJQRU5ESU5HIn0seyJ2YWx1ZSI6MiwibGFiZWwiOiJMQVRFIn0seyJ2YWx1ZSI6MywibGFiZWwiOiJPTlRJTUUifSx7InZhbHVlIjo0LCJsYWJlbCI6IlVOU1VDQ0VTU0ZVTCJ9LHsidmFsdWUiOjEwLCJsYWJlbCI6IlBFTkRJTkcifSx7InZhbHVlIjoxMSwibGFiZWwiOiJDT01QTEVURUQifSx7InZhbHVlIjoxMiwibGFiZWwiOiJORVcifV19LCJtb2RpZmllZF9kYXRlIjoiMjAxOC0wMi0xNFQwMjozNzoxMS4wMzhaIiwiZW1haWwiOm51bGwsImlhdCI6MTUyNjk3OTk4NiwiZXhwIjoxNTI5NTcxOTg2fQ.GRgXUdVa84z8Mt3hvYRSQ8sTuVFBwGCGqbNkI1pINM4"
        }
 *
 * @apiUse Error401
 */
 
/**
 * @api {get} auth/v2/logout Logout
 * @apiDescription Logs user out of the system. User is recognised by his/her session ID.
 * @apiVersion 1.0.0
 * @apiName logout
 * @apiGroup Authentication
 * @apiSuccessExample Success-Response: 200 OK
    {
        "logout": true
    }
 * @apiUse Success204
 * @apiUse Error401
 */
