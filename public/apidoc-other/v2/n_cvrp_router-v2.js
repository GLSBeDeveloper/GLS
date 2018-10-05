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
 * @apiParamExample {json} Request-Example:
 *      {
 *          "username": "demo1",
 *          "password": "123"
 *      }
 * @apiSuccess {json} User User Object with "token"
 * @apiSuccessExample Success-Response: 200 OK
 *      HTTP/1.1 200 OK
 *      {
            username: "planner_yap",
            profile: {
            name: "planner",
            dateTimeFormat: "YYYY-MM-DD hh:mm:ss A",
            userDropdownMenu: {
            items: {Array of Objects}
            },
            optimizationConfig: {
                engine: "siwei",
                maxIterations: 500,
                nThreads: 2,
                measureService: "osmap",
                constraintOptions: {Object}
                bSearchDistanceUsingDB: true,
                bUpdateDistanceToDB: true
            },
            mappingConfig: {Object},
            role: "planner",
            modified_date: "2017-08-01T05:08:21.407Z",
            email: null,
            fullname: "Yap Sui Jing",
            token: {Token String}
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
            username: "planner_yap",
            profile: {
            name: "planner",
            dateTimeFormat: "YYYY-MM-DD hh:mm:ss A",
            userDropdownMenu: {
            items: {Array of Objects}
            },
            optimizationConfig: {
                engine: "siwei",
                maxIterations: 500,
                nThreads: 2,
                measureService: "osmap",
                constraintOptions: {Object}
                bSearchDistanceUsingDB: true,
                bUpdateDistanceToDB: true
            },
            mappingConfig: {Object},
            role: "planner",
            modified_date: "2017-08-01T05:08:21.407Z",
            email: null,
            fullname: "Yap Sui Jing",
            token: {Token String}
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
 * @apiUse Success204
 * @apiUse Error401
 */

/**
 * @api {get} problem/rest/v2/problem_abstract Get all abstract problems
 * @apiDescription Get all abstract problems (containing only selected fields) belong to user authenticated in current session.
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName problem_abstract
 * @apiGroup CRUD Problem
 *
 * @apiSuccess {Integer} -._id  Problem's unique id.
 * @apiSuccess {String} -.name  Problem's name.
 * @apiSuccess {Float} -.coord_mode  Coordinate type. Could be either "REAL" (real lat/lng coordinates) or "2D" (any float numbers)
 * @apiSuccess {Float} -.no_of_solutions  Numbers of Solutions exists in problem
 * @apiSuccess {Float} -.no_of_orders Numbers of Orders (service + shipment) exists in problem
 * @apiSuccessExample Success-Response: 200 OK
 *      [{
            _id: "p_planner_yap_2017_06_06",
            name: "p_planner_yap_2017_06_06",
            coord_mode: "REAL",
            created_date: "2017-06-06T10:13:35.491Z",
            modified_date: "2017-06-06T10:13:37.210Z",
            no_of_solutions: 0,
            no_of_vehicles: 8,
            no_of_orders: 99
        },
        {
            _id: "p_planner_2017_08_02",
            name: "p_planner_2017_08_02",
            coord_mode: "REAL",
            created_date: "2017-08-02T01:53:38.477Z",
            modified_date: "2017-08-03T01:38:21.241Z",
            no_of_solutions: 2,
            no_of_vehicles: 8,
            no_of_orders: 500
        }]
 * @apiUse Error401
 * @apiUse Error500
 */

/**
 * @api {get} problem/rest/v2/problem Get all problems
 * @apiDescription Get all problems (full JSON files) belong to user authenticated in current session.
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName getProblemAbstract
 * @apiGroup CRUD Problem
 * @apiSuccessExample Success-Response 200
*   [{
        _id: "p_planner_yap_2017_06_06",
        name: "p_planner_yap_2017_06_06",
        fleet_size: "FINITE",
        coord_mode: "REAL",
        username: ["planner_yap"],
        date_format: "MM/DD/YY HH:mm",
        vehicles: [Array of vehicles]
        vehicle_types: [Array of vehicle types]
        services: [Array of services]
        shipments: [Array of shipments]
        solutions: [Array of solutions],
        addresses: [Array of addresses]
        items: [{
                id: "Item01",
                weight: 1,
                description: "Items in KG Measurement"
        }],
        created_date: "2017-06-06T10:13:35.491Z",
        modified_date: "2017-06-06T10:13:37.210Z",
        delivery_details: [Array of delivery details]
    },
    {
        _id: "p_planner_2017_08_02",
        name: "p_planner_2017_08_02",
        fleet_size: "FINITE",
        coord_mode: "REAL",
        username: ["planner"],
        date_format: "MM/DD/YY HH:mm",
        vehicles: [Array of vehicles]
        vehicle_types: [Array of vehicle types]
        services: [Array of services]
        shipments: [Array of shipments]
        solutions: [Array of solutions],
        addresses: [Array of addresses]
        items: [{
                id: "Item01",
                weight: 1,
                description: "Items in KG Measurement"
        }],
        created_date: "2017-06-06T10:13:35.491Z",
        modified_date: "2017-06-06T10:13:37.210Z",
        delivery_details: [Array of delivery details]
    }]

 * @apiUse Success204
 * @apiUse Error500
 */

/**
 * @api {post} problem/rest/v2/problem Create a problem
 * @apiDescription Create a problem
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName createProblem
 * @apiGroup CRUD Problem
 * @apiParamExample Request-Example:
 *  {
	"name": "sample_problem_name",
	"fleet_size": "FINITE",
	"coord_mode": "REAL",
	"vehicles": [],
	"vehicle_types": [],
	"items": [],
	"services": [],
	"shipments": [],
	"solutions": [],
	"addresses": [],
	"username": ["admin"]
    }
    @apiSuccessExample Success-Response 200
    {
	"_id": "5982d65f3d1a401450d0272b",
	"name": "sample_problem_name",
	"fleet_size": "FINITE",
	"coord_mode": "REAL",
	"username": ["admin"],
	"date_format": "MM/DD/YY HH:mm",
	"vehicles": [],
	"vehicle_types": [{
		"id": "A",
		"capacity": [10000],
		"fixed_costs": 0,
		"distance_dependent_costs": 1,
		"time_dependent_costs": 0
	}],
	"services": [],
	"shipments": [],
	"solutions": [],
	"addresses": [],
	"items": [{
		"id": "Item1",
		"weight": 1
	}],
	"created_date": "2017-08-03T07:53:03.450Z",
	"modified_date": "2017-08-03T07:53:03.450Z"
    }
    @apiUse Success204
    @apiUse Error500
 */

/**
 * @api {get} problem/rest/v2/problem/:problemId Get a problem
 * @apiDescription Get a problem (full JSON file)
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName getProblem
 * @apiGroup CRUD Problem
 * @apiParam {String} problemId  _id of instance
 * @apiSuccessExample Success-Response 200
 *  {
        _id: "p_planner_yap_2017_06_06",
        name: "p_planner_yap_2017_06_06",
        fleet_size: "FINITE",
        coord_mode: "REAL",
        username: ["planner_yap"],
        date_format: "MM/DD/YY HH:mm",
        vehicles: [Array of vehicles]
        vehicle_types: [Array of vehicle types]
        services: [Array of services]
        shipments: [Array of shipments]
        solutions: [Array of solutions],
        addresses: [Array of addresses]
        items: [{
                id: "Item01",
                weight: 1,
                description: "Items in KG Measurement"
        }],
        created_date: "2017-06-06T10:13:35.491Z",
        modified_date: "2017-06-06T10:13:37.210Z",
        delivery_details: [Array of delivery details]
    }
 * @apiUse Success204
 * @apiUse Error500
 */

/**
 * @api {put} problem/rest/v2/problem/:problemId Update problem
 * @apiDescription Update a problem
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName updateProblem
 * @apiGroup CRUD Problem
 * @apiParam {String} problemId  _id of instance
 * @apiSuccessExample Success-Response 200
 *  Updated problem object
 *  {
        _id: "p_planner_yap_2017_06_06",
        name: "p_planner_yap_2017_06_06",
        fleet_size: "FINITE",
        coord_mode: "REAL",
        username: ["planner_yap"],
        date_format: "MM/DD/YY HH:mm",
        vehicles: [Array of vehicles]
        vehicle_types: [Array of vehicle types]
        services: [Array of services]
        shipments: [Array of shipments]
        solutions: [Array of solutions],
        addresses: [Array of addresses]
        items: [{
                id: "Item01",
                weight: 1,
                description: "Items in KG Measurement"
        }],
        created_date: "2017-06-06T10:13:35.491Z",
        modified_date: "2017-06-06T10:13:37.210Z",
        delivery_details: [Array of delivery details]
    }
 * @apiUse Success204
 * @apiUse Error500
 */

/**
 * @api {delete} problem/rest/v2/problem/:problemIds Delete problems
 * @apiDescription Delete one or multiple problem instances
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName deleteProblem
 * @apiGroup CRUD Problem
 * @apiParam {String} problemIds  Primary key value of instance to delete (separated by comma)
 * @apiSuccessExample Success-Response 200
 *      {"ok":1,"n":1}
 * @apiUse Success204
 * @apiUse Error401
 * @apiUse Error500
 */

/**
 * @api {get} problem/rest/v2/problem/:problemId/:fieldName Get field
 * @apiDescription Get a field of a problem
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName getProblemField
 * @apiGroup CRUD Problem Field
 * @apiParam {String} problemId  _id of problem instance
 * @apiParam {String} fieldName  field names in problem instance
 * @apiSuccessExample Success-Response 200
 *  CALL /rest/problem/p_planner_yap_2017_06_06/services
 *  RETURN problem id: p_planner_yap_2017_06_06 [services ARRAY]
 *
 * @apiUse Success204
 * @apiUse Error500
 */

/**
 * @api {post} problem/rest/v2/problem/:problemId/:fieldName Create field
 * @apiDescription Create a field of a problem
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName createProblemField
 * @apiGroup CRUD Problem Field
 * @apiParam {String} problemId  _id of problem instance
 * @apiParam {String} fieldName  field name in problem instance
 * @apiSuccessExample Success-Response 200
 *      {"ok":1,"n":1}
 * @apiUse Success204
 * @apiUse Error500
 */

/**
 * @api {put} problem/rest/v2/problem:problemId/:fieldName Update  field
 * @apiDescription Update a field of a problem
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName updateProblemFieldItem
 * @apiGroup CRUD Problem Field
 * @apiParam {String} problemId  _id of problem instance
 * @apiParam {String} fieldName  field name in problem instance
 * @apiSuccessExample Success-Response 200
 *      {"ok":1,"n":1}
 * @apiUse Success204
 * @apiUse Error500
 */

/**
 * @api {put} problem/rest/v2/problem:problemId/:fieldName Update  field
 * @apiDescription Update a field of a problem
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName updateProblemFieldItem
 * @apiGroup CRUD Problem Field
 * @apiParam {String} problemId  _id of problem instance
 * @apiParam {String} fieldName  field name in problem instance
 * @apiSuccessExample Success-Response 200
 *      {"ok":1,"n":1}
 * @apiUse Success204
 * @apiUse Error500
 */

/**
 * @api {get} problem/rest/v2/problem/:problemId/:fieldName/:itemId Get record
 * @apiDescription Get a specific record of a field array of a problem
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName getProblemFieldRecord
 * @apiGroup CRUD Problem Record
 * @apiParam {String} problemId  _id of problem instance
 * @apiParam {String} fieldName  field names in problem instance
 * @apiParam {String} itemId  id of record
 * @apiSuccessExample Success-Response 200
 *      CALL /rest/problem/p_planner_2017_08_07/services/2017-08-07_0001
 *      RETURN
 *      {
            id: "2017-08-07_0001",
            name: "Rolando Alvarez",
            type: "delivery",
            size: [30],
            address: {
                    id: "238959",
                    postal: "238959",
                    name: "Rolando Alvarez",
                    address: "sample Address",
                    lat: 1.293928897,
                    lon: 103.8416786
            },
            service_duration: 300,
            time_window: {
                    start: "2017-08-07T14:00+08:00",
                    end: "2017-08-07T16:00+08:00"
            },
            allowed_vehicles: [""],
            status: 1,
            priority: 1
        }
 *
 * @apiUse Success204
 * @apiUse Error500
 */

/**
 * @api {delete} problem/rest/v2/problem/:problemId/:fieldName Delete record
 * @apiDescription Delete a record of a field array of a problem
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName deleteProblemFieldRecord
 * @apiGroup CRUD Problem Record
 * @apiParam {String} problemId  _id of problem instance
 * @apiParam {String} fieldName  field names in problem instance
 * @apiParam {String} itemId  id of record
 * @apiSuccessExample Success-Response 200
 *      {"ok":1,"n":1}
 * @apiUse Success204
 * @apiUse Error500
 */

/**
 * @api {get} problem/rest/v2/geocode_problem/:problemId Geocode Problem
 * @apiDescription Gecode all addresses in a problem (query lat/lng using a specific map service provider)
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName geocodeProblem
 * @apiParam {String} problemId _id of problem instance
 * @apiGroup Optimization
 */

/**
 * @api {post} problem/rest/v2/optimize_problem/:problemId Optimize Problem
 * @apiDescription Optimise delivery route for selected orders and vehicles using vrp-engine.
 * @apiPermission user
 * @apiParam {String} problemId _id of problem instance
 * @apiParam (Request Body) {String} engine Name of solver(DO NOT CHANGE)
 * @apiParam (Request Body) {Integer} maxIterations Max of iterations
 * @apiParam (Request Body) {String} constraints Constraints settings(DO NOT CHANGE)
 * @apiParam (Request Body) {String} mapService Map service to measure travel time and distance(DO NOT CHANGE) 
 * @apiParam (Request Body) {Boolean} isSaved Solution to be saved or not(DO NOT CHANGE)
 * @apiParam (Request Body) {Object[]} problem Inputs of problem or model 
 * @apiParam (Request Body) {String} problem.fleet_size Model type [FINITE, INFINITE](DO NOT CHANGE)
 * @apiParam (Request Body) {String} problem.coord_mode Type of coordinates [REAL, 2D] (DO NOT CHANGE)
 * @apiParam (Request Body) {Object[]} problem.vehicles Array of vehicles
 * @apiParam (Request Body) {String} problem.vehicles.id Unique id of vehicle
 * @apiParam (Request Body) {String} problem.vehicles.type_id Type of id of vehicle (reference to id of vehicle_types)
 * @apiParam (Request Body) {Object} problem.vehicles.start_address Start location of this vehicle
 * @apiParam (Request Body) {String} problem.vehicles.start_address.id Unique id of location
 * @apiParam (Request Body) {String} problem.vehicles.start_address.lat Latitude of location
 * @apiParam (Request Body) {String} problem.vehicles.start_address.lon Longitude of location
 * @apiParam (Request Body) {Object} problem.vehicles.end_address End location of this vehicle
 * @apiParam (Request Body) {String} problem.vehicles.earliest_start Earliest start time of this vehicle (in yyyy-MM-dd'T'HH:mmZ format or UTC)
 * @apiParam (Request Body) {String} problem.vehicles.latest_end Latest return time of this vehicle (in yyyy-MM-dd'T'HH:mmZ format or UTC)
 * @apiParam (Request Body) {Boolean} problem.vehicles.return_to_depot Whether vehicle needs to return to depot
 * @apiParam (Request Body) {Object[]} problem.vehicle_types Array of vehicle types
 * @apiParam (Request Body) {String} problem.vehicle_types.id Unique id of vehicle type
 * @apiParam (Request Body) {Array} problem.vehicle_types.capacity Capacity array 
 * @apiParam (Request Body) {String} [problem.vehicle_types.capacity=99] capacity of 1st product
 * @apiParam (Request Body) {Float} problem.vehicle_types.fixed_costs Fixed cost for 1 trip ($ per trip)
 * @apiParam (Request Body) {Float} problem.vehicle_types.distance_dependent_costs Travel distance costing unit ($ per meter)
 * @apiParam (Request Body) {Float} problem.vehicle_types.time_dependent_costs Travel time costing unit ($ per second)
 * @apiParam (Request Body) {Float} problem.vehicle_types.waiting_time_dependent_costs Waiting time costing unit ($ per second)
 * @apiParam (Request Body) {Object[]} problem.services Array of jobs
 * @apiParam (Request Body) {String} problem.services.id Unique id of job
 * @apiParam (Request Body) {String} problem.services.size Quantity of 1st product
 * @apiParam (Request Body) {String} problem.services.type Type of job [pickup, delivery]
 * @apiParam (Request Body) {Object} problem.services.address Location of job
 * @apiParam (Request Body) {Float} problem.services.service_duration Service duration (in seconds)
 * @apiParam (Request Body) {String} problem.services.time_window Time window (in mm/dd/yy hh:mm format or UTC)
 * @apiParam (Request Body) {Integer{1-10}} problem.services.priority Priority level [1, 2,…,10]
 * @apiParamExample Request-Example:
 *     {
        "engine": "chinh", 
        "maxIterations": 300, 
        "constraints": "capacity_timeWindow_priorityJob", 
        "mapService": "osmap",
        "isSaved": false, 
        "problem": { 
            "fleet_size": "FINITE", 
            "coord_mode": "REAL", 
            "vehicles": [ 
                {
                "id": "1767", 
                "type_id": "2", 
                "start_address": { 
                    "id":"Start", 
                    "lat": 1.2817225, 
                    "lon": 103.8203438 
                },
                "end_address": { 
                    "id":"End", 
                    "lat": 1.340746, 
                    "lon": 103.746997 
                },
                "earliest_start": "2016-08-07T13:11+08:00", 
                "latest_end": "2017-07-08T23:59+08:00", 
                "return_to_depot": true 
                }
            ],
            "vehicle_types": [ 
                {
                    "id": "2", 
                    "capacity": [ 
                        99  
                    ],
                    "fixed_costs": 0, 
                    "distance_dependent_costs": 0.001, 
                    "time_dependent_costs": 0, 
                    "waiting_time_dependent_costs": 0 
                }
            ],
            "services": [ 
                {
                    "id": "2877089", 
                    "size": [
                        1 
                    ],
                    "type": "pickup", 
                    "address": {
                        "id": "s1",
                        "lat": "1.340746",
                        "lon": "103.746997"
                    },
                    "service_duration": 300, 
                    "time_window": { 
                        "start": "2017-07-08T09:00+08:00",
                        "end": "2017-07-08T17:30+08:00"
                    },
                    "priority": 10 
                },
                {
                    "id": "2877091",
                    "name": "1606HL12432",
                    "size": [
                        1
                    ],
                    "type": "delivery",
                    "address": {
                        "id": "s2",
                        "lat": "1.305373",
                        "lon": "103.761347"
                    },
                    "service_duration": 300,
                    "time_window": {
                        "start": "2017-07-08T09:00+08:00",
                        "end": "2017-07-08T17:30+08:00"
                    },
                    "priority": 10
                }
            ]
            }
 *      }
 * @apiSuccess {Float} costs Total cost ($)
 * @apiSuccess {Float} fixed_costs Fixed cost ($)
 * @apiSuccess {Float} variable_costs Total other cost ($)
 * @apiSuccess {Float} distance Total Distance (meter)
 * @apiSuccess {Float} time Total Time (second)
 * @apiSuccess {Float} waiting_time Total Waiting Time (second)
 * @apiSuccess {Float} service_time Total Service Time (second)
 * @apiSuccess {Float} transport_time Total Travel Time (second)
 * @apiSuccess {Integer} no_deliveries Total Number of Delivery jobs
 * @apiSuccess {Integer} no_pickups Total Number of Pickup Jobs
 * @apiSuccess {Integer} no_unassigned_jobs Number of Unassigned Jobs 
 * @apiSuccess {Integer} no_routes Number of routes
 * @apiSuccess {Object[]} routes Array of Routes
 * @apiSuccess {String} routes.vehicle_id id of vehicle (reference to id of vehicles section)
 * @apiSuccess {String} routes.start_time Estimated Start Time of Trip
 * @apiSuccess {String} routes.end_time Estimated End Time of Trip
 * @apiSuccess {Object[]} act Sequence of jobs to be delivered or picked up
 * @apiSuccess {String} act.type Type of Job [pickup, delivery]
 * @apiSuccess {String} act.job_id Id of Job (reference to id of services
 * @apiSuccess {Float} act.arr_time Estimated Arrival time (in UTC)
 * @apiSuccess {Float} act.end_time Estimated Leave time (in UTC)
 * @apiSuccess {Float} act.waiting_time Estimated Waiting time (in second)
 * @apiSuccess {Float} act.distance Accumulated travel distance (from beginning of trip)
 * @apiSuccess {Float} act.last_distance Travel distance from previous location to current one
 * @apiSuccess {Float} act.last_transport_time Accumulated travelled time (from beginning of trip)
 * @apiSuccess {Float} act.transport_time Travel Time from previous location to current one
 * @apiSuccessExample Success-Response: 200 OK
 *      HTTP/1.1 200 OK
 *      {
 *          "costs": 14.630682617000001,
            "fixed_costs": 0,
            "variable_costs": 14.630682617000001,
            "distance": 14630.682617000002,
            "time": 2094.035715341568,
            "waiting_time": 0,
            "service_time": 0,
            "transport_time": 2094.035715341568,
            "no_deliveries": 1,
            "no_pickups": 1,
            "no_unassigned_jobs": 0,
            "unassigned_jobs": [],
            "no_routes": 1,
            "routes": [
                {
                    "vehicle_id": "1767",
                    "fixed_costs": 0,
                    "variable_costs": 14.630682617000001,
                    "distance": 14630.682617000002,
                    "transport_time": 2094.035715341568,
                    "no_activities": 2,
                    "start_time": "2016-07-08T13:11+0800",
                    "end_time": "2016-07-08T13:45+0800",
                    "max_load": [
                        1
                    ],
            "act": [
                {
                    "type": "delivery",
                    "job_id": "2877091",
                    "job_prop": "service",
                    "arr_time": "2016-07-08T13:30+0800",
                    "end_time": "2016-07-08T13:30+0800",
                    "waiting_time": 0,
                    "operation_time": 0,
                    "theoretical_ealiest_start_time": 1467939600,
                    "theoretical_latest_start_time": 1467970200,
                    "distance": 9080.158203,
                    "last_distance": 9080.158203,
                    "last_transport_time": 1185.0468084812164,
                    "transport_time": 1185.0468084812164,
                    "load_before": [
                        1
                    ],
                    "load_after": [
                        0
                    ],
                    "capacity_violation_after": [
                        0
                    ],
                    "job_time_window": {
                        "start": "2017-07-08T09:00+08:00",
                        "end": "2017-07-08T17:30+08:00"
                    },
                    "address": {
                        "id": "s2",
                        "lat": "1.305373",
                        "lon": "103.761347"
                    },
                    "job_name": "1606HL12432",
                    "job_size": [
                        1
                    ]
                },
                {
                    "type": "pickup",
                    "job_id": "2877089",
                    "job_prop": "service",
                    "arr_time": "2016-07-08T13:45+0800",
                    "end_time": "2016-07-08T13:45+0800",
                    "waiting_time": 0,
                    "operation_time": 0,
                    "theoretical_ealiest_start_time": 1467939600,
                    "theoretical_latest_start_time": 1467970200,
                    "distance": 14630.682617000002,
                    "last_distance": 5550.524414,
                    "last_transport_time": 908.8164069652557,
                    "transport_time": 2093.863215446472,
                    "load_before": [
                        0
                    ],
                    "load_after": [
                        1
                    ],
                    "capacity_violation_after": [
                        0
                    ],
                    "job_time_window": {
                        "start": "2017-07-08T09:00+08:00",
                        "end": "2017-07-08T17:30+08:00"
                    },
                    "address": {
                        "id": "s1",
                        "lat": "1.340746",
                        "lon": "103.746997"
                    },
                    "job_size": [
                        1
                    ]
                }
            ],
            "return_to_depot": {
                "arr_time": "2016-07-08T13:45+0800",
                "end_time": "2016-07-08T13:45+0800",
                "distance": 14630.682617000002,
                "last_distance": 0
            },
            "id": 0,
            "start_address": {
                "id": "Start",
                "lat": "1.2817225",
                "lon": "103.8203438"
            },
            "end_address": {
                "id": "Start",
                "lat": "1.2817225",
                "lon": "103.8203438"
            }
        }
    ],
    "id": "hi_01",
    "constraints": "capacity_timeWindow_priorityJob",
    "engine": "chinh",
    "calc_duration": 0.697,
    "calc_date": "2018-01-23T16:16:18.456Z",
    "ignored_jobs": [],
    "no_ignored_jobs": 0,
    "ignored_vehicles": []
}
 * @apiVersion 1.0.0
 * @apiName optimizeProblem
 * @apiGroup Optimization
 */

/**
 * @api {post} map/route Get direction routes
 * @apiDescription Skyfy Route API
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName get_direction_routes
 * @apiGroup Skyfy Route API
 * @apiParam (Request Body) {Array} coordinates Latitude and Longitude array of locations to be visited. As in example: 4 locations will be visited A1, A2, A3 and A4. Their coordinates are provided
 * @apiParamExample Request-Example:
 *      { 
            "coordinates":[
            [1.340746,103.746997],
            [1.305373,103.761347],
            [1.3553794,103.8677444],
            [1.349591,103.956788]
            ]
        }
 * @apiSuccess {Object[]} legs Duration and distance travel for travel between waypoints. As in example: Travel duration and distance from A1 A2  A3  A4 are returned. 
 * @apiSuccess {String} geometry Encoded string of Geometry of driving route. Encoding/Decoding algorithm is as follows: https://developers.google.com/maps/documentation/utilities/polylinealgorithm .URL to test decoded and encoded routes: https://google-developers.appspot.com/maps/documentation/utilities/polyline-utility/polylineutility   
 * @apiSuccess {Float} duration Total duration (in seconds) of the trip: from A1 to A2 to A3 to A4
 * @apiSuccess {Float} distance Total distance (in meters) of the trip
 * @apiSuccessExample Success-Response 200
    {
        "code":"Ok",
        "routes":[
            {
                "legs": [
                {
                    "steps": [],
                    "summary": "",
                    "duration": 939.6109766197442,
                    "distance": 5921.9
                },
                {
                    "steps": [],
                    "summary": "",
                    "duration": 1667.2673153447665,
                    "distance": 16178.3
                },
                {
                    "steps": [],
                    "summary": "",
                    "duration": 1593.8449970026115,
                    "distance": 15028.9
                }
            ],
        "geometry": "uxdGkafxRvAcCfANMl@mBvCDH?PEFEBpDfCTa@h@y@LYJ[J{@Hg@Hw@RiAHYhI@\\A`@?n@IPAHAv@GzD]\\ArDOx@C|@DVBdATVJl@V|@h@v@XNFVBRAVCZKZGjCyC`@e@RSvCgDh@k@nA{ABEdBcCb@o@bBqDVk@DMh@gBlAsEpBwJb@sBt@gDDMPi@Tk@d@kAfAwBfBaChCeCn@c@vDgCdCyApAeAjB_A~@c@r@_@n@]|ByAnBcAl@_@bAm@hIsEz@a@jBy@n@SlA_@XIVIvAa@ZM|CgATMRMl@_@fAq@TUDCl@o@n@aAHWTm@`@eAb@@F@f@Rn@Th@RfE|AjHnDpCbB~AbB~@jBRl@DL^jAN^HNRTTRNNHPJHRNRJLFLDPHXJd@PHBm@|A{@nCnA^d@Nd@L@@x@VPGFUt@wB?E@GDGDCH_AKAKCc@M]MqAa@i@QICe@QYKQIMEMGSKSOKISCQO[[[a@KUIWIYGOIYGSMa@m@qAu@aA{@}@iAq@kAo@_HkDiEyAk@SECa@Mm@UGA[URy@N}@JaB@yAEcAYaFEu@IsAM_CA[M}AYuEUyDCi@IeDJqBXaBh@gBt@mBhAeCpCwE~@eB\\q@d@}@nDaHZm@|@cBLYh@aANWf@gAZq@b@_BHk@J_ADe@Do@GaAMqBAOO{BO}ASqA_@qCGaAEo@?Y?K?g@Bc@Ji@Ls@ZaADQ?_@CQEIEEe@U}@Sk@M]C_@?[Bo@L}Ab@}@R_ALS?c@@s@I[QWKg@a@aBkBKKgB}AsAmAWYCAACIEQYx@}A|@iAz@mAd@o@R_@d@sBAgAIe@EQIWc@{@Sc@gAyCIYEWCY?]?]Da@F_@Vw@L]tAwCx@kB|@mDh@gCBKPkAl@}CDk@?SESOUYQqAUiAQ}@Oq@OoBw@]IUGy@SkBg@}@Ym@[y@m@k@g@eAgAMOMOsB}Bi@o@WW[_@i@m@IIKMeG{GeAmAQ_@y@{ACEM]m@}Am@_BYs@a@y@S[_AeAqAmA_BeAi@a@q@[k@O_@GeEe@kD_@}AS_AM_AGyDSuCMoBGs@Cq@G]Ae@G_@Is@OGCeA_@aAg@QMc@Wc@WGEy@g@QKcAm@aBu@oAg@{Ao@{@a@}@g@qA{@iBqAsAiAKI{@m@u@a@wAu@ECYM_@Mu@U[KkEsAq@UmDaAiBo@GA{@]_Ac@q@e@i@m@c@m@Yo@YeAm@sBk@cCU_A_@sBWaAm@oCQy@Iw@EeAAeAHgFHgFL{An@iFXqDLmBZ_EDm@@a@ByAEuAIgAYoAYy@uAuBa@q@i@eAgA}B{@gBeAuB[s@Wq@Ws@_@oASk@Si@[k@Ye@OOQQe@_@g@[[UYW[a@Yc@We@Sg@Mc@Kg@Ca@Ca@@g@Bg@TgAL_@Tm@Zs@Xs@Zu@Pe@Ru@Po@Lq@Jq@Bm@@g@?[E{@SeFC_A?}@@_ARiHHkAd@mFB[P_CDgAXiCH_DH{B@m@?{C@S@kB@_BAiBIwD?E?k@EkA?a@E}AMgCEQESGMQQOKQEWCOEOIEIImAQSIMKAyBPSBmDb@g@FoALqDTw@@g@AoAIi@Ik@WCAg@UeBoAeBqA}@k@gB{AMKu@k@q@i@a@[oFuE}AwAWUMMQIUI_@CW@CQMs@e@yAWy@_AeC[{@Sk@Us@g@cBWqAEUSmAK{AKmEAg@GmCEyAAq@AuBC{C?q@?[D]Ne@JUdAaBb@o@p@k@jDyCn@k@zBmBJKj@g@^[j@s@NYTe@J[HWd@oCNm@DOTs@R_@b@k@fAaANMl@Yl@WzEuAVGfAYRGXEn@KnAItCUp@Gl@Yf@[fAkABCv@s@nA}@lDmBHEhCqAf@SjCeAnAm@t@i@FGb@c@~@kA\\a@bAkAHMBCj@eANc@Bo@OaAYcAa@gAo@yAs@wAaAeCo@cBe@sAk@wBSy@YeAS}@Mk@WkAEYp@KJAdBKnAGjAQpAWnAk@b@S~@m@l@m@Za@PU^w@LY^gA`AmCXs@z@_BbAsA|@_Av@w@b@a@`AcAhFqF|CeDpAsA~@cAt@u@~EgFb@g@xA{AbBgBt@w@LMl@m@tBqB`CkC|@_A`AaAl@o@JMn@e@NMtAw@l@]nAc@d@IfASn@W\\YT_@J]De@@q@AiAAu@GmAOcASeAW_AY{@k@iBuBeEeAsB{BwFoAiDqFkOkB_FeCgHuA}D_AcCuCgIqDsJmBmIk@qDe@wDOiBKkBKgFDuD^qON{ER}FToHHqD@iAGgAK}@Qs@[{@i@eA}C{DkEuFeN_QaKaMuIyKkEqF_GkHgEyFsHeJgDiEgA_B_@s@[u@]kA{@qC[uA]kBOcCKuBE{BDsC?cBG{@Sw@_@cAy@{@}Ao@eBc@e@YSKMKIMYkA`@Cr@Cr@?f@DrBHjBNv@JpAXzBd@~AJ^Ej@M\\WJg@Cc@Q_@c@Qo@Ek@RaAx@Wj@}@zBYdA_@xAWxAQ|AKvAI~AAbAFnDP`Cj@rCTx@p@zB^nALZ",
        "duration": 2261.7,
        "distance": 37129.1
        }
        ],
        "waypoints": [
        {
            "hint": "F5QCgBqUAoAAAAAAAAAAAIoAAAAAAAAAQAAAAAAAAADFbQFD-EgBAPlIAQAyAQAAew0vBhB0FAC1DS8GSnUUAAAAAQHyHm77",
            "name": "",
            "location": [
                103.746939,
                1.340432
            ]
        },
        {
            "hint": "qqEAgHxzAYAAAAAANgAAAAIAAAARAAAAAAAAAHgqNkLF4cg_5noAAN96AAAyAQAAz0UvBhfrEwDDRS8GHesTAAEAAQHyHm77",
            "name": "",
            "location": [
                103.761359,
                1.305367
            ]
        },
        {
            "hint": "bDsAgP___3_bAAAAHQAAACUAAAAkAAAAAAAAAEY_10IkX0FBpXoAAMFBAAAyAQAAXuUwBneuFABg5TAGc64UAAEAAQHyHm77",
            "name": "Lorong Chuan",
            "location": [
                103.867742,
                1.355383
            ]
        },
        {
            "hint": "v0wAgP___382AAAABwAAAA4AAABEAAAAiQAAAH8hLkP7laVDJQIAAHlUAAAyAQAAK0EyBuaXFAA0QTIG15cUAAMAAQHyHm77",
            "name": "Pan-Island Expressway (PIE)",
            "location": [
                103.956779,
                1.349606
            ]
        }
        ]
    }
 */