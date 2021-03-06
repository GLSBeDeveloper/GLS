define({ "api": [
  {
    "type": "get",
    "url": "auth/v2/isLoggedIn",
    "title": "Check if User is logged in",
    "description": "<p>Checks if User is logged into the system by validating the session ID.</p>",
    "version": "1.0.0",
    "name": "isLoggedIn",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "User",
            "description": "<p>User object with &quot;token&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n       \"fullname\": \"EDMUND\",\n       \"username\": \"Edmund\",\n       \"role\": \"driver\",\n       \"profile\": {\n           \"name\": \"driver\",\n           \"dateTimeFormat\": \"YYYY-MM-DD hh:mm:ss A\",\n           \"statusLabels\": [\n               {\n                   \"value\": 1,\n                   \"label\": \"PENDING\"\n               },\n               {\n                   \"value\": 2,\n                   \"label\": \"LATE\"\n               },\n               {\n                   \"value\": 3,\n                   \"label\": \"ONTIME\"\n               },\n               {\n                   \"value\": 4,\n                   \"label\": \"UNSUCCESSFUL\"\n               },\n               {\n                   \"value\": 10,\n                   \"label\": \"PENDING\"\n               },\n               {\n                   \"value\": 11,\n                   \"label\": \"COMPLETED\"\n               },\n               {\n                   \"value\": 12,\n                   \"label\": \"NEW\"\n               }\n           ]\n       },\n       \"modified_date\": \"2018-02-14T02:37:11.038Z\",\n       \"email\": null,\n       \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkVETVVORCIsInVzZXJuYW1lIjoiRWRtdW5kIiwicm9sZSI6ImRyaXZlciIsInByb2ZpbGUiOnsibmFtZSI6ImRyaXZlciIsImRhdGVUaW1lRm9ybWF0IjoiWVlZWS1NTS1ERCBoaDptbTpzcyBBIiwic3RhdHVzTGFiZWxzIjpbeyJ2YWx1ZSI6MSwibGFiZWwiOiJQRU5ESU5HIn0seyJ2YWx1ZSI6MiwibGFiZWwiOiJMQVRFIn0seyJ2YWx1ZSI6MywibGFiZWwiOiJPTlRJTUUifSx7InZhbHVlIjo0LCJsYWJlbCI6IlVOU1VDQ0VTU0ZVTCJ9LHsidmFsdWUiOjEwLCJsYWJlbCI6IlBFTkRJTkcifSx7InZhbHVlIjoxMSwibGFiZWwiOiJDT01QTEVURUQifSx7InZhbHVlIjoxMiwibGFiZWwiOiJORVcifV19LCJtb2RpZmllZF9kYXRlIjoiMjAxOC0wMi0xNFQwMjozNzoxMS4wMzhaIiwiZW1haWwiOm51bGwsImlhdCI6MTUyNjk3OTk4NiwiZXhwIjoxNTI5NTcxOTg2fQ.GRgXUdVa84z8Mt3hvYRSQ8sTuVFBwGCGqbNkI1pINM4\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-problem/apidoc-v3/n_auth-router.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost/auth/v2/isLoggedIn"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response: 401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "auth/v2/login",
    "title": "Login",
    "description": "<p>Allows User to log into the system if he/she is authenticated and authorised.</p>",
    "version": "1.0.0",
    "name": "login",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\": \"edmund\",\n    \"password\": \"123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "User",
            "description": "<p>User Object with &quot;token&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n       \"fullname\": \"EDMUND\",\n       \"username\": \"Edmund\",\n       \"role\": \"driver\",\n       \"profile\": {\n           \"name\": \"driver\",\n           \"dateTimeFormat\": \"YYYY-MM-DD hh:mm:ss A\",\n           \"statusLabels\": [\n               {\n                   \"value\": 1,\n                   \"label\": \"PENDING\"\n               },\n               {\n                   \"value\": 2,\n                   \"label\": \"LATE\"\n               },\n               {\n                   \"value\": 3,\n                   \"label\": \"ONTIME\"\n               },\n               {\n                   \"value\": 4,\n                   \"label\": \"UNSUCCESSFUL\"\n               },\n               {\n                   \"value\": 10,\n                   \"label\": \"PENDING\"\n               },\n               {\n                   \"value\": 11,\n                   \"label\": \"COMPLETED\"\n               },\n               {\n                   \"value\": 12,\n                   \"label\": \"NEW\"\n               }\n           ]\n       },\n       \"modified_date\": \"2018-02-14T02:37:11.038Z\",\n       \"email\": null,\n       \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IkVETVVORCIsInVzZXJuYW1lIjoiRWRtdW5kIiwicm9sZSI6ImRyaXZlciIsInByb2ZpbGUiOnsibmFtZSI6ImRyaXZlciIsImRhdGVUaW1lRm9ybWF0IjoiWVlZWS1NTS1ERCBoaDptbTpzcyBBIiwic3RhdHVzTGFiZWxzIjpbeyJ2YWx1ZSI6MSwibGFiZWwiOiJQRU5ESU5HIn0seyJ2YWx1ZSI6MiwibGFiZWwiOiJMQVRFIn0seyJ2YWx1ZSI6MywibGFiZWwiOiJPTlRJTUUifSx7InZhbHVlIjo0LCJsYWJlbCI6IlVOU1VDQ0VTU0ZVTCJ9LHsidmFsdWUiOjEwLCJsYWJlbCI6IlBFTkRJTkcifSx7InZhbHVlIjoxMSwibGFiZWwiOiJDT01QTEVURUQifSx7InZhbHVlIjoxMiwibGFiZWwiOiJORVcifV19LCJtb2RpZmllZF9kYXRlIjoiMjAxOC0wMi0xNFQwMjozNzoxMS4wMzhaIiwiZW1haWwiOm51bGwsImlhdCI6MTUyNjk3OTY0OSwiZXhwIjoxNTI5NTcxNjQ5fQ.txXg1QX3WjvPEDr9HBPpUjUSeSOaJ7jbfOHz8sRgdEA\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-problem/apidoc-v3/n_auth-router.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost/auth/v2/login"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response: 401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "auth/v2/logout",
    "title": "Logout",
    "description": "<p>Logs user out of the system. User is recognised by his/her session ID.</p>",
    "version": "1.0.0",
    "name": "logout",
    "group": "Authentication",
    "success": {
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "{\n    \"logout\": true\n}",
          "type": "json"
        },
        {
          "title": "Success-Response: 204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-problem/apidoc-v3/n_auth-router.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost/auth/v2/logout"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response: 401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "vrp-problem/apidoc-v3/public/main.js",
    "group": "D__Project_vrp_nodejs_vrp_problem_apidoc_v3_static_files_main_js",
    "groupTitle": "D__Project_vrp_nodejs_vrp_problem_apidoc_v3_static_files_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "problem/rest/v2/geocode_problem/:problemId",
    "title": "Geocode Problem",
    "description": "<p>Gecode all addresses in a problem (query lat/lng using a specific map service provider)</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "version": "1.0.0",
    "name": "geocodeProblem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "problemId",
            "description": "<p>_id of problem instance</p>"
          }
        ]
      }
    },
    "group": "Optimization",
    "filename": "vrp-problem/apidoc-v3/n_problem-router.js",
    "groupTitle": "Optimization",
    "sampleRequest": [
      {
        "url": "http://localhost/problem/rest/v2/geocode_problem/:problemId"
      }
    ]
  },
  {
    "type": "post",
    "url": "problem/rest/v2/optimize_problem/:problemId",
    "title": "Optimize Problem",
    "description": "<p>Optimise delivery route for selected orders and vehicles using vrp-engine.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "problemId",
            "description": "<p>_id of problem instance</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "engine",
            "description": "<p>Name of solver(DO NOT CHANGE)</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "optional": false,
            "field": "maxIterations",
            "description": "<p>Max of iterations</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "constraints",
            "description": "<p>Constraints settings(DO NOT CHANGE)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "mapService",
            "description": "<p>Map service to measure travel time and distance(DO NOT CHANGE)</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "isSaved",
            "description": "<p>Solution to be saved or not(DO NOT CHANGE)</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "problem",
            "description": "<p>Inputs of problem or model</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.fleet_size",
            "description": "<p>Model type [FINITE, INFINITE](DO NOT CHANGE)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.coord_mode",
            "description": "<p>Type of coordinates [REAL, 2D] (DO NOT CHANGE)</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "problem.vehicles",
            "description": "<p>Array of vehicles</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.vehicles.id",
            "description": "<p>Unique id of vehicle</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.vehicles.type_id",
            "description": "<p>Type of id of vehicle (reference to id of vehicle_types)</p>"
          },
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "problem.vehicles.start_address",
            "description": "<p>Start location of this vehicle</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.vehicles.start_address.id",
            "description": "<p>Unique id of location</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.vehicles.start_address.lat",
            "description": "<p>Latitude of location</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.vehicles.start_address.lon",
            "description": "<p>Longitude of location</p>"
          },
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "problem.vehicles.end_address",
            "description": "<p>End location of this vehicle</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.vehicles.earliest_start",
            "description": "<p>Earliest start time of this vehicle (in yyyy-MM-dd'T'HH:mmZ format or UTC)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.vehicles.latest_end",
            "description": "<p>Latest return time of this vehicle (in yyyy-MM-dd'T'HH:mmZ format or UTC)</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "problem.vehicles.return_to_depot",
            "description": "<p>Whether vehicle needs to return to depot</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "problem.vehicle_types",
            "description": "<p>Array of vehicle types</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.vehicle_types.id",
            "description": "<p>Unique id of vehicle type</p>"
          },
          {
            "group": "Request Body",
            "type": "Array",
            "optional": false,
            "field": "problem.vehicle_types.capacity",
            "description": "<p>Capacity array</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": false,
            "field": "problem.vehicle_types.fixed_costs",
            "description": "<p>Fixed cost for 1 trip ($ per trip)</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": false,
            "field": "problem.vehicle_types.distance_dependent_costs",
            "description": "<p>Travel distance costing unit ($ per meter)</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": false,
            "field": "problem.vehicle_types.time_dependent_costs",
            "description": "<p>Travel time costing unit ($ per second)</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": false,
            "field": "problem.vehicle_types.waiting_time_dependent_costs",
            "description": "<p>Waiting time costing unit ($ per second)</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "problem.services",
            "description": "<p>Array of jobs</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.services.id",
            "description": "<p>Unique id of job</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.services.size",
            "description": "<p>Quantity of 1st product</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.services.type",
            "description": "<p>Type of job [pickup, delivery]</p>"
          },
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "problem.services.address",
            "description": "<p>Location of job</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": false,
            "field": "problem.services.service_duration",
            "description": "<p>Service duration (in seconds)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "problem.services.time_window",
            "description": "<p>Time window (in mm/dd/yy hh:mm format or UTC)</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "size": "1-10",
            "optional": false,
            "field": "problem.services.priority",
            "description": "<p>Priority level [1, 2,…,10]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"engine\": \"chinh\", \n    \"maxIterations\": 300, \n    \"constraints\": \"capacity_timeWindow_priorityJob\", \n    \"mapService\": \"osmap\",\n    \"isSaved\": false, \n    \"problem\": { \n        \"fleet_size\": \"FINITE\", \n        \"coord_mode\": \"REAL\", \n        \"vehicles\": [ \n            {\n            \"id\": \"1767\", \n            \"type_id\": \"2\", \n            \"start_address\": { \n                \"id\":\"Start\", \n                \"lat\": 1.2817225, \n                \"lon\": 103.8203438 \n            },\n            \"end_address\": { \n                \"id\":\"End\", \n                \"lat\": 1.340746, \n                \"lon\": 103.746997 \n            },\n            \"earliest_start\": \"2016-08-07T13:11+08:00\", \n            \"latest_end\": \"2017-07-08T23:59+08:00\", \n            \"return_to_depot\": true \n            }\n        ],\n        \"vehicle_types\": [ \n            {\n                \"id\": \"2\", \n                \"capacity\": [ \n                    99  \n                ],\n                \"fixed_costs\": 0, \n                \"distance_dependent_costs\": 0.001, \n                \"time_dependent_costs\": 0, \n                \"waiting_time_dependent_costs\": 0 \n            }\n        ],\n        \"services\": [ \n            {\n                \"id\": \"2877089\", \n                \"size\": [\n                    1 \n                ],\n                \"type\": \"pickup\", \n                \"address\": {\n                    \"id\": \"s1\",\n                    \"lat\": \"1.340746\",\n                    \"lon\": \"103.746997\"\n                },\n                \"service_duration\": 300, \n                \"time_window\": { \n                    \"start\": \"2017-07-08T09:00+08:00\",\n                    \"end\": \"2017-07-08T17:30+08:00\"\n                },\n                \"priority\": 10 \n            },\n            {\n                \"id\": \"2877091\",\n                \"name\": \"1606HL12432\",\n                \"size\": [\n                    1\n                ],\n                \"type\": \"delivery\",\n                \"address\": {\n                    \"id\": \"s2\",\n                    \"lat\": \"1.305373\",\n                    \"lon\": \"103.761347\"\n                },\n                \"service_duration\": 300,\n                \"time_window\": {\n                    \"start\": \"2017-07-08T09:00+08:00\",\n                    \"end\": \"2017-07-08T17:30+08:00\"\n                },\n                \"priority\": 10\n            }\n        ]\n        }\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "costs",
            "description": "<p>Total cost ($)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "fixed_costs",
            "description": "<p>Fixed cost ($)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "variable_costs",
            "description": "<p>Total other cost ($)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "distance",
            "description": "<p>Total Distance (meter)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "time",
            "description": "<p>Total Time (second)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "waiting_time",
            "description": "<p>Total Waiting Time (second)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "service_time",
            "description": "<p>Total Service Time (second)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "transport_time",
            "description": "<p>Total Travel Time (second)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "no_deliveries",
            "description": "<p>Total Number of Delivery jobs</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "no_pickups",
            "description": "<p>Total Number of Pickup Jobs</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "no_unassigned_jobs",
            "description": "<p>Number of Unassigned Jobs</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "no_routes",
            "description": "<p>Number of routes</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "routes",
            "description": "<p>Array of Routes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routes.vehicle_id",
            "description": "<p>id of vehicle (reference to id of vehicles section)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routes.start_time",
            "description": "<p>Estimated Start Time of Trip</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routes.end_time",
            "description": "<p>Estimated End Time of Trip</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "act",
            "description": "<p>Sequence of jobs to be delivered or picked up</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "act.type",
            "description": "<p>Type of Job [pickup, delivery]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "act.job_id",
            "description": "<p>Id of Job (reference to id of services</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "act.arr_time",
            "description": "<p>Estimated Arrival time (in UTC)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "act.end_time",
            "description": "<p>Estimated Leave time (in UTC)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "act.waiting_time",
            "description": "<p>Estimated Waiting time (in second)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "act.distance",
            "description": "<p>Accumulated travel distance (from beginning of trip)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "act.last_distance",
            "description": "<p>Travel distance from previous location to current one</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "act.last_transport_time",
            "description": "<p>Accumulated travelled time (from beginning of trip)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "act.transport_time",
            "description": "<p>Travel Time from previous location to current one</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "     HTTP/1.1 200 OK\n     {\n         \"costs\": 14.630682617000001,\n            \"fixed_costs\": 0,\n            \"variable_costs\": 14.630682617000001,\n            \"distance\": 14630.682617000002,\n            \"time\": 2094.035715341568,\n            \"waiting_time\": 0,\n            \"service_time\": 0,\n            \"transport_time\": 2094.035715341568,\n            \"no_deliveries\": 1,\n            \"no_pickups\": 1,\n            \"no_unassigned_jobs\": 0,\n            \"unassigned_jobs\": [],\n            \"no_routes\": 1,\n            \"routes\": [\n                {\n                    \"vehicle_id\": \"1767\",\n                    \"fixed_costs\": 0,\n                    \"variable_costs\": 14.630682617000001,\n                    \"distance\": 14630.682617000002,\n                    \"transport_time\": 2094.035715341568,\n                    \"no_activities\": 2,\n                    \"start_time\": \"2016-07-08T13:11+0800\",\n                    \"end_time\": \"2016-07-08T13:45+0800\",\n                    \"max_load\": [\n                        1\n                    ],\n            \"act\": [\n                {\n                    \"type\": \"delivery\",\n                    \"job_id\": \"2877091\",\n                    \"job_prop\": \"service\",\n                    \"arr_time\": \"2016-07-08T13:30+0800\",\n                    \"end_time\": \"2016-07-08T13:30+0800\",\n                    \"waiting_time\": 0,\n                    \"operation_time\": 0,\n                    \"theoretical_ealiest_start_time\": 1467939600,\n                    \"theoretical_latest_start_time\": 1467970200,\n                    \"distance\": 9080.158203,\n                    \"last_distance\": 9080.158203,\n                    \"last_transport_time\": 1185.0468084812164,\n                    \"transport_time\": 1185.0468084812164,\n                    \"load_before\": [\n                        1\n                    ],\n                    \"load_after\": [\n                        0\n                    ],\n                    \"capacity_violation_after\": [\n                        0\n                    ],\n                    \"job_time_window\": {\n                        \"start\": \"2017-07-08T09:00+08:00\",\n                        \"end\": \"2017-07-08T17:30+08:00\"\n                    },\n                    \"address\": {\n                        \"id\": \"s2\",\n                        \"lat\": \"1.305373\",\n                        \"lon\": \"103.761347\"\n                    },\n                    \"job_name\": \"1606HL12432\",\n                    \"job_size\": [\n                        1\n                    ]\n                },\n                {\n                    \"type\": \"pickup\",\n                    \"job_id\": \"2877089\",\n                    \"job_prop\": \"service\",\n                    \"arr_time\": \"2016-07-08T13:45+0800\",\n                    \"end_time\": \"2016-07-08T13:45+0800\",\n                    \"waiting_time\": 0,\n                    \"operation_time\": 0,\n                    \"theoretical_ealiest_start_time\": 1467939600,\n                    \"theoretical_latest_start_time\": 1467970200,\n                    \"distance\": 14630.682617000002,\n                    \"last_distance\": 5550.524414,\n                    \"last_transport_time\": 908.8164069652557,\n                    \"transport_time\": 2093.863215446472,\n                    \"load_before\": [\n                        0\n                    ],\n                    \"load_after\": [\n                        1\n                    ],\n                    \"capacity_violation_after\": [\n                        0\n                    ],\n                    \"job_time_window\": {\n                        \"start\": \"2017-07-08T09:00+08:00\",\n                        \"end\": \"2017-07-08T17:30+08:00\"\n                    },\n                    \"address\": {\n                        \"id\": \"s1\",\n                        \"lat\": \"1.340746\",\n                        \"lon\": \"103.746997\"\n                    },\n                    \"job_size\": [\n                        1\n                    ]\n                }\n            ],\n            \"return_to_depot\": {\n                \"arr_time\": \"2016-07-08T13:45+0800\",\n                \"end_time\": \"2016-07-08T13:45+0800\",\n                \"distance\": 14630.682617000002,\n                \"last_distance\": 0\n            },\n            \"id\": 0,\n            \"start_address\": {\n                \"id\": \"Start\",\n                \"lat\": \"1.2817225\",\n                \"lon\": \"103.8203438\"\n            },\n            \"end_address\": {\n                \"id\": \"Start\",\n                \"lat\": \"1.2817225\",\n                \"lon\": \"103.8203438\"\n            }\n        }\n    ],\n    \"id\": \"hi_01\",\n    \"constraints\": \"capacity_timeWindow_priorityJob\",\n    \"engine\": \"chinh\",\n    \"calc_duration\": 0.697,\n    \"calc_date\": \"2018-01-23T16:16:18.456Z\",\n    \"ignored_jobs\": [],\n    \"no_ignored_jobs\": 0,\n    \"ignored_vehicles\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "name": "optimizeProblem",
    "group": "Optimization",
    "filename": "vrp-problem/apidoc-v3/n_problem-router.js",
    "groupTitle": "Optimization",
    "sampleRequest": [
      {
        "url": "http://localhost/problem/rest/v2/optimize_problem/:problemId"
      }
    ]
  },
  {
    "type": "post",
    "url": "problem/rest/v2/problem",
    "title": "Create a problem",
    "description": "<p>Create a problem</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "version": "1.0.0",
    "name": "createProblem",
    "group": "Problem",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"name\": \"sample_problem_name\",\n\t\"fleet_size\": \"FINITE\",\n\t\"coord_mode\": \"REAL\",\n\t\"vehicles\": [],\n\t\"vehicle_types\": [],\n\t\"items\": [],\n\t\"services\": [],\n\t\"shipments\": [],\n\t\"solutions\": [],\n\t\"addresses\": [],\n\t\"username\": [\"admin\"]\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response 200",
          "content": "{\n    \"name\": \"cvrp\",\n    \"fleet_size\": \"FINITE\",\n    \"coord_mode\": \"REAL\",\n    \"username\": [],\n    \"date_format\": \"MM/DD/YY HH:mm\",\n    \"vehicles\": [],\n    \"vehicle_types\": [],\n    \"services\": [],\n    \"shipments\": [],\n    \"solutions\": [],\n    \"addresses\": [],\n    \"items\": [\n        {\n            \"id\": \"Item1\",\n            \"weight\": 1\n        }\n    ],\n    \"created_date\": \"2018-05-22T09:55:08.760Z\",\n    \"modified_date\": \"2018-05-22T09:55:08.760Z\",\n    \"_id\": \"5b03e8fc5ecd263d4d7012be\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response: 204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-problem/apidoc-v3/n_problem-router.js",
    "groupTitle": "Problem",
    "sampleRequest": [
      {
        "url": "http://localhost/problem/rest/v2/problem"
      }
    ],
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n\"Error message\"",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "problem/rest/v2/problem/:problemIds",
    "title": "Delete problems",
    "description": "<p>Delete one or multiple problem instances</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "version": "1.0.0",
    "name": "deleteProblem",
    "group": "Problem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "problemIds",
            "description": "<p>Primary key value of instance to delete (separated by comma)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response 200",
          "content": "{\"ok\":1,\"n\":1}",
          "type": "json"
        },
        {
          "title": "Success-Response: 204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-problem/apidoc-v3/n_problem-router.js",
    "groupTitle": "Problem",
    "sampleRequest": [
      {
        "url": "http://localhost/problem/rest/v2/problem/:problemIds"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response: 401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n\"Error message\"",
          "type": "json"
        }
      ],
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "problem/rest/v2/problem/:problemId",
    "title": "Get a problem",
    "description": "<p>Get a problem (full JSON file)</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "version": "1.0.0",
    "name": "getProblem",
    "group": "Problem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "problemId",
            "description": "<p>_id of instance</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response 200",
          "content": "{\n       _id: \"p_planner_yap_2017_06_06\",\n       name: \"p_planner_yap_2017_06_06\",\n       fleet_size: \"FINITE\",\n       coord_mode: \"REAL\",\n       username: [\"planner_yap\"],\n       date_format: \"MM/DD/YY HH:mm\",\n       vehicles: [Array of vehicles]\n       vehicle_types: [Array of vehicle types]\n       services: [Array of services]\n       shipments: [Array of shipments]\n       solutions: [Array of solutions],\n       addresses: [Array of addresses]\n       items: [{\n               id: \"Item01\",\n               weight: 1,\n               description: \"Items in KG Measurement\"\n       }],\n       created_date: \"2017-06-06T10:13:35.491Z\",\n       modified_date: \"2017-06-06T10:13:37.210Z\",\n       delivery_details: [Array of delivery details]\n   }",
          "type": "json"
        },
        {
          "title": "Success-Response: 204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-problem/apidoc-v3/n_problem-router.js",
    "groupTitle": "Problem",
    "sampleRequest": [
      {
        "url": "http://localhost/problem/rest/v2/problem/:problemId"
      }
    ],
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n\"Error message\"",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "problem/rest/v2/problem",
    "title": "Get all problems",
    "description": "<p>Get all problems (full JSON files) belong to user authenticated in current session.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "version": "1.0.0",
    "name": "getProblemAbstract",
    "group": "Problem",
    "success": {
      "examples": [
        {
          "title": "Success-Response 200",
          "content": "[{\n      _id: \"p_planner_yap_2017_06_06\",\n      name: \"p_planner_yap_2017_06_06\",\n      fleet_size: \"FINITE\",\n      coord_mode: \"REAL\",\n      username: [\"planner_yap\"],\n      date_format: \"MM/DD/YY HH:mm\",\n      vehicles: [Array of vehicles]\n      vehicle_types: [Array of vehicle types]\n      services: [Array of services]\n      shipments: [Array of shipments]\n      solutions: [Array of solutions],\n      addresses: [Array of addresses]\n      items: [{\n              id: \"Item01\",\n              weight: 1,\n              description: \"Items in KG Measurement\"\n      }],\n      created_date: \"2017-06-06T10:13:35.491Z\",\n      modified_date: \"2017-06-06T10:13:37.210Z\",\n      delivery_details: [Array of delivery details]\n  },\n  {\n      _id: \"p_planner_2017_08_02\",\n      name: \"p_planner_2017_08_02\",\n      fleet_size: \"FINITE\",\n      coord_mode: \"REAL\",\n      username: [\"planner\"],\n      date_format: \"MM/DD/YY HH:mm\",\n      vehicles: [Array of vehicles]\n      vehicle_types: [Array of vehicle types]\n      services: [Array of services]\n      shipments: [Array of shipments]\n      solutions: [Array of solutions],\n      addresses: [Array of addresses]\n      items: [{\n              id: \"Item01\",\n              weight: 1,\n              description: \"Items in KG Measurement\"\n      }],\n      created_date: \"2017-06-06T10:13:35.491Z\",\n      modified_date: \"2017-06-06T10:13:37.210Z\",\n      delivery_details: [Array of delivery details]\n  }]",
          "type": "json"
        },
        {
          "title": "Success-Response: 204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-problem/apidoc-v3/n_problem-router.js",
    "groupTitle": "Problem",
    "sampleRequest": [
      {
        "url": "http://localhost/problem/rest/v2/problem"
      }
    ],
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n\"Error message\"",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "problem/rest/v2/problem_abstract",
    "title": "Get all abstract problems",
    "description": "<p>Get all abstract problems (containing only selected fields) belong to user authenticated in current session.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "version": "1.0.0",
    "name": "problem_abstract",
    "group": "Problem",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-._id",
            "description": "<p>Problem's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>Problem's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.coord_mode",
            "description": "<p>Coordinate type. Could be either &quot;REAL&quot; (real lat/lng coordinates) or &quot;2D&quot; (any float numbers)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.no_of_solutions",
            "description": "<p>Numbers of Solutions exists in problem</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.no_of_orders",
            "description": "<p>Numbers of Orders (service + shipment) exists in problem</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "[{\n       _id: \"p_planner_yap_2017_06_06\",\n       name: \"p_planner_yap_2017_06_06\",\n       coord_mode: \"REAL\",\n       created_date: \"2017-06-06T10:13:35.491Z\",\n       modified_date: \"2017-06-06T10:13:37.210Z\",\n       no_of_solutions: 0,\n       no_of_vehicles: 8,\n       no_of_orders: 99\n   },\n   {\n       _id: \"p_planner_2017_08_02\",\n       name: \"p_planner_2017_08_02\",\n       coord_mode: \"REAL\",\n       created_date: \"2017-08-02T01:53:38.477Z\",\n       modified_date: \"2017-08-03T01:38:21.241Z\",\n       no_of_solutions: 2,\n       no_of_vehicles: 8,\n       no_of_orders: 500\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-problem/apidoc-v3/n_problem-router.js",
    "groupTitle": "Problem",
    "sampleRequest": [
      {
        "url": "http://localhost/problem/rest/v2/problem_abstract"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response: 401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n\"Error message\"",
          "type": "json"
        }
      ],
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "problem/rest/v2/problem_abstract",
    "title": "Get abstract info of problems",
    "description": "<p>Get all abstract problems (containing only selected fields) belong to user authenticated in current session.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "version": "1.0.0",
    "name": "problem_abstract",
    "group": "Problem",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-._id",
            "description": "<p>Problem's unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>Problem's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.coord_mode",
            "description": "<p>Coordinate type. Could be either &quot;REAL&quot; (real lat/lng coordinates) or &quot;2D&quot; (any float numbers)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.no_of_solutions",
            "description": "<p>Numbers of Solutions exists in problem</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.no_of_orders",
            "description": "<p>Numbers of Orders (service + shipment) exists in problem</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "[{\n       _id: \"p_planner_yap_2017_06_06\",\n       name: \"p_planner_yap_2017_06_06\",\n       coord_mode: \"REAL\",\n       created_date: \"2017-06-06T10:13:35.491Z\",\n       modified_date: \"2017-06-06T10:13:37.210Z\",\n       no_of_solutions: 0,\n       no_of_vehicles: 8,\n       no_of_orders: 99\n   },\n   {\n       _id: \"p_planner_2017_08_02\",\n       name: \"p_planner_2017_08_02\",\n       coord_mode: \"REAL\",\n       created_date: \"2017-08-02T01:53:38.477Z\",\n       modified_date: \"2017-08-03T01:38:21.241Z\",\n       no_of_solutions: 2,\n       no_of_vehicles: 8,\n       no_of_orders: 500\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-problem/apidoc-v3/n_problem-router.js",
    "groupTitle": "Problem",
    "sampleRequest": [
      {
        "url": "http://localhost/problem/rest/v2/problem_abstract"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response: 401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n\"Error message\"",
          "type": "json"
        }
      ],
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "problem/rest/v2/problem/:problemId",
    "title": "Update problem",
    "description": "<p>Update a problem</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "version": "1.0.0",
    "name": "updateProblem",
    "group": "Problem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "problemId",
            "description": "<p>_id of instance</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response 200",
          "content": "Updated problem object\n{\n       _id: \"p_planner_yap_2017_06_06\",\n       name: \"p_planner_yap_2017_06_06\",\n       fleet_size: \"FINITE\",\n       coord_mode: \"REAL\",\n       username: [\"planner_yap\"],\n       date_format: \"MM/DD/YY HH:mm\",\n       vehicles: [Array of vehicles]\n       vehicle_types: [Array of vehicle types]\n       services: [Array of services]\n       shipments: [Array of shipments]\n       solutions: [Array of solutions],\n       addresses: [Array of addresses]\n       items: [{\n               id: \"Item01\",\n               weight: 1,\n               description: \"Items in KG Measurement\"\n       }],\n       created_date: \"2017-06-06T10:13:35.491Z\",\n       modified_date: \"2017-06-06T10:13:37.210Z\",\n       delivery_details: [Array of delivery details]\n   }",
          "type": "json"
        },
        {
          "title": "Success-Response: 204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-problem/apidoc-v3/n_problem-router.js",
    "groupTitle": "Problem",
    "sampleRequest": [
      {
        "url": "http://localhost/problem/rest/v2/problem/:problemId"
      }
    ],
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n\"Error message\"",
          "type": "json"
        }
      ]
    }
  }
] });
