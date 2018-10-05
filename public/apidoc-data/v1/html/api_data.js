define({ "api": [
  {
    "type": "get",
    "url": "/v1/auth/is_logged_in",
    "title": "Check if User is logged in",
    "description": "<p>Checks if User is logged into the system by validating the session ID.</p>",
    "version": "1.0.0",
    "name": "is_logged_in",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "token",
            "defaultValue": "false",
            "description": "<p>Indicates whether to return token value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userRole",
            "description": "<p>Role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "vehicleId",
            "description": "<p>Vehicle assigned to the driver. Returns only if the user is a driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "vehiclePlateNumber",
            "description": "<p>Vehicle's plate number of the vehicle that is assigned to the driver. Returns only if the user is a driver.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n    \"userName\": \"user_planner\",\n    \"fullname\": \"planner A\",\n    \"userRole\": \"planner\",\n    \"statusLabels\": [\n        { \"value\": 1, \"label\": \"PENDING\" },\n        { \"value\": 2, \"label\": \"LATE\" },\n        { \"value\": 3, \"label\": \"ONTIME\" },\n        { \"value\": 4, \"label\": \"UNSUCCESSFUL\" }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n    \"userName\": \"user_doe\",\n    \"fullname\": \"john doe\",\n    \"userRole\": \"driver\",\n    \"vehicleId\": \"YE01233M\",\n    \"vehiclePlateNumber\": \"YE01233MNum\",\n    \"statusLabels\": [\n        { \"value\": 1, \"label\": \"PENDING\" },\n        { \"value\": 2, \"label\": \"LATE\" },\n        { \"value\": 3, \"label\": \"ONTIME\" },\n        { \"value\": 4, \"label\": \"UNSUCCESSFUL\" }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/12_Authentication-v2.js",
    "groupTitle": "Authentication",
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
    "url": "/v1/auth/login",
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
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "token",
            "defaultValue": "false",
            "description": "<p>Indicates whether to return token value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// http://localhost/vrp/rest/v1/login?token=true\n{\n    \"username\": \"user_doe\",\n    \"password\": \"123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userRole",
            "description": "<p>Role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "vehicleId",
            "description": "<p>Vehicle assigned to the driver. Returns only if the user is a driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "vehiclePlateNumber",
            "description": "<p>Vehicle's plate number of the vehicle that is assigned to the driver. Returns only if the user is a driver.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n    \"userName\": \"user_planner\",\n    \"fullname\": \"planner A\",\n    \"userRole\": \"planner\",\n    \"statusLabels\": [\n        { \"value\": 1, \"label\": \"PENDING\" },\n        { \"value\": 2, \"label\": \"LATE\" },\n        { \"value\": 3, \"label\": \"ONTIME\" },\n        { \"value\": 4, \"label\": \"UNSUCCESSFUL\" }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n    \"userName\": \"user_doe\",\n    \"fullname\": \"john doe\",\n    \"userRole\": \"driver\",\n    \"vehicleId\": \"YE01233M\",\n    \"vehiclePlateNumber\": \"YE01233MNum\",\n    \"statusLabels\": [\n        { \"value\": 1, \"label\": \"PENDING\" },\n        { \"value\": 2, \"label\": \"LATE\" },\n        { \"value\": 3, \"label\": \"ONTIME\" },\n        { \"value\": 4, \"label\": \"UNSUCCESSFUL\" }\n    ],\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/12_Authentication-v2.js",
    "groupTitle": "Authentication",
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
    "url": "/v1/auth/logout",
    "title": "Logout",
    "description": "<p>Logs user out of the system. User is recognised by his/her session ID.</p>",
    "version": "1.0.0",
    "name": "logout",
    "group": "Authentication",
    "filename": "vrp-mct/api/routes-v2/v1-v2/12_Authentication-v2.js",
    "groupTitle": "Authentication",
    "success": {
      "examples": [
        {
          "title": "Success-Response: 204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
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
    "type": "put",
    "url": "/v1/auth/password",
    "title": "Reset password",
    "description": "<p>Changes password for logged in User.</p>",
    "version": "1.0.0",
    "name": "reset_password",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>User's old/previous password.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password that the User wishes to change to.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Used to verify if <code>newPassword</code> value is correct.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: Change password from 123 to 456",
          "content": "{\n    \"oldPassword\": \"123\",\n    \"newPassword\": \"456\",\n    \"confirmPassword\": \"456\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/12_Authentication-v2.js",
    "groupTitle": "Authentication",
    "success": {
      "examples": [
        {
          "title": "Success-Response: 204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
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
    "url": "/v1/delivery/job/:deliveryDetailId/attempt",
    "title": "Delivery attempt",
    "description": "<p>Called after every delivery attempt, regardless whether the job was successful or unsuccessful.</p>",
    "permission": [
      {
        "name": "driver"
      }
    ],
    "version": "1.0.0",
    "name": "attempted_delivery",
    "group": "DeliveryDetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of instance to update.</p>"
          }
        ],
        "Multipart-Form": [
          {
            "group": "Multipart-Form",
            "type": "Boolean",
            "optional": false,
            "field": "delivered",
            "description": "<p>Indicates whether the delivery was successful or unsuccessful.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "Object[]",
            "optional": false,
            "field": "note",
            "description": "<p>Remarks/note/memo from driver, either in JSON format or JSON parsable string.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "String",
            "optional": false,
            "field": "note.key",
            "description": "<p>Purpose of remark. Required for generating service chit.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "String",
            "optional": false,
            "field": "note.value",
            "description": "<p>Respective comment for the key. For example, &quot;Customer is not home&quot;, &quot;Waited 10 minutes&quot;. New lines will be replaced with fullstops.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "File",
            "optional": false,
            "field": "signature",
            "description": "<p>Customer's proof of delivery (signature) in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg).</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "File",
            "optional": true,
            "field": "photo",
            "description": "<p>Customer's proof of delivery (photo) in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg).</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "File[]",
            "optional": true,
            "field": "notePhotos",
            "description": "<p>Driver note in photo in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg).</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "Object[]",
            "optional": true,
            "field": "items",
            "description": "<p>List of DeliveryItems.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "String",
            "optional": true,
            "field": "items.Id",
            "description": "<p>DeliveryItem Id that was picked-up or delivered.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "Float",
            "optional": true,
            "field": "items.ActualItemQty",
            "description": "<p>Quantity that was picked-up or delivered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Multipart-Form-Request-Example:",
          "content": "// http://localhost/vrp/rest/v1/delivery/job/1/attempt (DELIVERY was successful)\n{\n    \"delivered\": true,\n    \"note\": [{\n        \"key\": \"template\",\n        \"value\": \"Customer is not home\"\n    }, {\n        \"key\": \"comments\",\n        \"value\": \"Waited 10 minutes\"\n    }],\n    \"signature\": (Signature in Blob),\n    \"photo\": (Photo in Blob),\n    \"notePhotos\": [(Photo in Blob), (Photo in Blob)],\n    \"items\": [{\n        \"Id\": 1,\n        \"ActualItemQty\": 4\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Id",
            "description": "<p>Primary key value of DeliveryDetail instance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DeliveryMasterId",
            "description": "<p>References to the primary key value from DeliveryMaster table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Status",
            "description": "<p>Job's status. Pending=1, Late=2, Ontime=3, Unsuccessful=4, Expected to be late=5.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "JobSequence",
            "description": "<p>Indicates the execution order for jobs for each order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "JobType",
            "description": "<p>Indicates whether this instance is a pick up or delivery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>Street address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Postal",
            "description": "<p>Postal code of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Lat",
            "description": "<p>Latitude of Postal in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Lng",
            "description": "<p>Longitude of Postal in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "StartTimeWindow",
            "description": "<p>Start time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "EndTimeWindow",
            "description": "<p>End time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "ServiceTime",
            "description": "<p>Unit: Minutes. Time required to be at the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "NoteFromPlanner",
            "description": "<p>A remarks/note/memo from planner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromPlanner.-.key",
            "description": "<p>Purpose of remark. For example, &quot;Payment mode&quot;, &quot;Equipments&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromPlanner.-.value",
            "description": "<p>Respective comment for the key. For example, &quot;Cash&quot;, &quot;Crane&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "NoteFromDriver",
            "description": "<p>A remarks/note/memo from driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromDriver.-.key",
            "description": "<p>Purpose of remark. For example, &quot;template&quot;, &quot;comments&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromDriver.-.value",
            "description": "<p>Respective comment for the key. For example, &quot;Customer is not home&quot;, &quot;Waited 10 minutes&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ContactName",
            "description": "<p>Name of person to contact at Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ContactPhone",
            "description": "<p>Phone number of person to contact at Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ContactEmail",
            "description": "<p>Email address of person to contact at Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ActualDeliveryTime",
            "description": "<p>Actual time of delivery in ISO8601 format. Timezone matters (e.g. Z implies UTC). If value is null, job has not been attempted.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "EngineRouteSeqNum",
            "description": "<p>Instances with lower route sequence number is expected to be attempted before instances with higher route sequence number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "DeliveryMaster",
            "description": "<p>Instance from DeliveryMaster table based on DeliveryMasterId.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "DeliveryItems",
            "description": "<p>Instance(s) from DeliveryItem table that are related to this DeliveryDetail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "// http://localhost/vrp/rest/v1/delivery/job/1/attempt\n{\n    \"Id\": 1,\n    \"DeliveryMasterId\": \"35187491\",\n    \"Status\": 2,\n    \"JobSequence\": 1,\n    \"JobType\": \"PICKUP\",\n    \"Address\": \"11 Tuas Link 1\",\n    \"Postal\": \"639588\",\n    \"Lat\": 1.3341,\n    \"Lng\": 103.636,\n    \"StartTimeWindow\": \"2017-02-08T09:00:00Z\",\n    \"EndTimeWindow\": \"2017-02-08T13:00:00Z\",\n    \"ServiceTime\": 5,\n    \"NoteFromPlanner\": null,\n    \"NoteFromDriver\": [{\n        \"key\": \"template\",\n        \"value\": \"Customer is not home\"\n    }, {\n        \"key\": \"comments\",\n        \"value\": \"Waited 10 minutes\"\n    }],\n    \"ContactName\": null,\n    \"ContactPhone\": null,\n    \"ContactEmail\": null,\n    \"EngineRouteSeqNum\": 11,\n    \"ActualDeliveryTime\": \"2017-02-08T14:03:00Z\",\n    \"DeliveryMaster\": {\n        \"Id\": \"35187491\",\n        \"Status\": 11,\n        \"VehicleId\": \"YE0423M\",\n        \"Priority\": 2,\n        \"CustomerName\": null,\n        \"CustomerPhone\": 98889888,\n        \"CustomerEmail\": \"john.doe@gmail.com\",\n        \"VehicleRestriction\": null\n    },\n    \"DeliveryItems\": [{\n        \"Id\": 1,\n        \"DeliveryDetailId\": 1,\n        \"ItemId\": \"WD-SC\",\n        \"ItemQty\": 5,\n        \"ActualItemQty\": 4\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/09_DeliveryDetail-v2.js",
    "groupTitle": "DeliveryDetail",
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
    "type": "post",
    "url": "/v1/delivery/:deliveryMasterId/job",
    "title": "Create one",
    "description": "<p>Insert one Delivery information into DeliveryDetail table.<br> DeliveryItems and VerificationCode properties are supported (i.e. insert into DeliveryItem table at the same time).<br> If there is any error with DeliveryItems and/or VerificationCode, the entire insert will fail (i.e. DeliveryDetail will also not be inserted).<br> <br> <strong><span style=\"color:red\">IMPORTANT</span></strong>: This API does not support bulkInsert due to MSSQL error when SQL statement contains OUTPUT clause without INTO clause.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "create_delivery_detail",
    "group": "DeliveryDetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryMasterId",
            "description": "<p>Primary key value of associated DeliveryMaster instance.</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "record",
            "description": "<p>One record to be inserted into the database.</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "size": "1-",
            "optional": false,
            "field": "record.JobSequence",
            "description": "<p>Indicates the execution order for jobs for each order.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "allowedValues": [
              "\"PICKUP\"",
              "\"DELIVERY\""
            ],
            "optional": false,
            "field": "record.JobType",
            "description": "<p>Indicates whether this instance is a pick up or delivery.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..1024",
            "optional": false,
            "field": "record.Address",
            "description": "<p>Street address.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "6",
            "optional": false,
            "field": "record.Postal",
            "description": "<p>Postal code of the address.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "size": "-90 to 90",
            "optional": false,
            "field": "record.Lat",
            "description": "<p>Latitude of Postal in degrees.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "size": "-180 to 180",
            "optional": false,
            "field": "record.Lng",
            "description": "<p>Longitude of Postal in degrees.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "record.StartTimeWindow",
            "description": "<p>Start time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "record.EndTimeWindow",
            "description": "<p>End time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "record.ServiceTime",
            "defaultValue": "15",
            "description": "<p>Unit: Minutes. Time required to be at the address.</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": true,
            "field": "record.NoteFromPlanner",
            "description": "<p>A remarks/note/memo from planner in JSON format, or string that is JSON parsable.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "record.NoteFromPlanner.key",
            "description": "<p>Purpose of remark. For example, &quot;Payment mode&quot;, &quot;Equipments&quot;.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "record.NoteFromPlanner.value",
            "description": "<p>Respective comment for the key. For example, &quot;Cash&quot;, &quot;Crane&quot;.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..254",
            "optional": true,
            "field": "record.ContactName",
            "description": "<p>Name of person to contact at Address.</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "size": "8",
            "optional": true,
            "field": "record.ContactPhone",
            "description": "<p>Phone number of person to contact at Address.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..254",
            "optional": true,
            "field": "record.ContactEmail",
            "description": "<p>Email address of person to contact at Address.</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": true,
            "field": "record.DeliveryItems",
            "description": "<p>DeliveryItem instance(s). Refer to #POST DeliveryItem API for format.</p>"
          },
          {
            "group": "Request Body",
            "type": "Object",
            "optional": true,
            "field": "record.VerificationCode",
            "description": "<p>One VerificationCode instance. Refer to #POST VerificationCode API for format.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: Create one",
          "content": "{\n    \"record\": {\n        \"JobSequence\": 1,\n        \"JobType\": \"PICKUP\",\n        \"Address\": \"11 Tuas Link 1\",\n        \"Postal\": \"639588\",\n        \"Lat\": 1.3341,\n        \"Lng\": 103.636,\n        \"StartTimeWindow\": \"2017-02-08T09:00:00Z\",\n        \"EndTimeWindow\": \"2017-02-08T13:00:00Z\",\n        \"ServiceTime\": 5,\n        \"NoteFromPlanner\": \"[{\\\"key\\\":\\\"Payment\\\",\\\"value\\\":\\\"Cash\\\"}]\",\n        \"NoteFromDriver\": [{\n            \"key\": \"template\",\n            \"value\": \"Customer is not home\"\n        }, {\n            \"key\": \"comments\",\n            \"value\": \"Waited 10 minutes\"\n        }],\n        \"ContactName\": null,\n        \"ContactPhone\": null,\n        \"ContactEmail\": null,\n        \"DeliveryItems\": [{\n            \"ItemId\": \"WD-SC\",\n            \"ItemQty\": 5,\n            \"ActualItemQty\": 5\n        }]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>Primary key of affected row</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n// One record inserted\n\"35187491\"",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/09_DeliveryDetail-v2.js",
    "groupTitle": "DeliveryDetail",
    "error": {
      "examples": [
        {
          "title": "Error-Response: 401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n[\"Error message 1\", \"Error message 2\"]",
          "type": "json"
        }
      ],
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of errors.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/v1/delivery/job/:deliveryDetailId",
    "title": "Delete",
    "description": "<p>Delete one database instance from DeliveryDetail table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "delete_delivery_detail",
    "group": "DeliveryDetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of associated DeliveryDetail instance.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was deleted\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/09_DeliveryDetail-v2.js",
    "groupTitle": "DeliveryDetail",
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
    "url": "/v1/delivery/job",
    "title": "Get many",
    "description": "<p>Get multiple database instance(s) from DeliveryDetail table based on where filter.<br> Planner will receive all database instance(s).<br> Driver will only receive database instance(s) that are under his/her VehicleId (i.e. VehicleId column = Driver's VehicleId), and orders that are confirmed.<br></p>",
    "permission": [
      {
        "name": "planner, driver"
      }
    ],
    "version": "1.0.0",
    "name": "get_all_delivery_detail",
    "group": "DeliveryDetail",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "where",
            "description": "<p>Where conditions for SQL query.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "startDate",
            "description": "<p>Search records in a date range. Must be specified together with <code>endDate</code>. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "endDate",
            "description": "<p>Search records in a date range. Must be specified together with <code>startDate</code>. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// Get instances that haven't been delivered\n// http://localhost/vrp/rest/v1/delivery/job?where={\"ActualDeliveryTime\":null}\n{\n    \"where\": {\n        \"ActualDeliveryTime\": null\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "// Get instances whose TimeWindow is on 1 Feburary 2017\n// http://localhost/vrp/rest/v1/delivery/job?date=2017-02-01\n{\n    \"date\": \"2017-02-01\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "// Get instances whose TimeWindow is between on 1 January 2017 to 31 December 2017\n// http://localhost/vrp/rest/v1/delivery/job?startDate=2017-01-01&endDate=2017-12-31\n{\n    \"startDate\": \"2017-01-01\",\n    \"endDate\": \"2017-12-31\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.",
            "description": "<p>List of DeliveryDetail instances.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.Id",
            "description": "<p>Primary key value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.DeliveryMasterId",
            "description": "<p>References to the primary key value from DeliveryMaster table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.Status",
            "description": "<p>Job's status. Pending=1, Late=2, Ontime=3, Unsuccessful=4, Expected to be late=5.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.JobSequence",
            "description": "<p>Indicates the execution order for jobs for each order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.JobType",
            "description": "<p>Indicates whether this instance is a pick up or delivery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.Address",
            "description": "<p>Street address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.Postal",
            "description": "<p>Postal code of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.Lat",
            "description": "<p>Latitude of Postal in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.Lng",
            "description": "<p>Longitude of Postal in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.StartTimeWindow",
            "description": "<p>Start time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.EndTimeWindow",
            "description": "<p>End time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.ServiceTime",
            "description": "<p>Unit: Minutes. Time required to be at the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "NoteFromPlanner",
            "description": "<p>A remarks/note/memo from planner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromPlanner.-.key",
            "description": "<p>Purpose of remark. For example, &quot;Payment mode&quot;, &quot;Equipments&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromPlanner.-.value",
            "description": "<p>Respective comment for the key. For example, &quot;Cash&quot;, &quot;Crane&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "NoteFromDriver",
            "description": "<p>A remarks/note/memo from driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromDriver.-.key",
            "description": "<p>Purpose of remark. For example, &quot;template&quot;, &quot;comments&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromDriver.-.value",
            "description": "<p>Respective comment for the key. For example, &quot;Customer is not home&quot;, &quot;Waited 10 minutes&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.ContactName",
            "description": "<p>Name of person to contact at Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.ContactPhone",
            "description": "<p>Phone number of person to contact at Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.ContactEmail",
            "description": "<p>Email address of person to contact at Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.ActualDeliveryTime",
            "description": "<p>Actual time of delivery in ISO8601 format. Timezone matters (e.g. Z implies UTC). If value is null, job has not been attempted.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.EngineRouteSeqNum",
            "description": "<p>Instances with lower route sequence number is expected to be attempted before instances with higher route sequence number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.DeliveryItems",
            "description": "<p>Instance(s) from DeliveryItem table that are related to this DeliveryDetail.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-.VerificationCode",
            "description": "<p>Instance(s) from VerificationCode table that are related to this DeliveryDetail.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-.DeliveryMaster",
            "description": "<p>Instance from DeliveryMaster table based on DeliveryMasterId. Not included in driver's request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "// http://localhost/vrp/rest/v1/delivery/job/\n[{\n    \"Id\": 1,\n    \"DeliveryMasterId\": \"35187491\",\n    \"Status\": 3,\n    \"JobSequence\": 1,\n    \"JobType\": \"PICKUP\",\n    \"Address\": \"11 Tuas Link 1\",\n    \"Postal\": \"639588\",\n    \"Lat\": 1.3341,\n    \"Lng\": 103.636,\n    \"StartTimeWindow\": \"2017-02-08T09:00:00Z\",\n    \"EndTimeWindow\": \"2017-02-08T13:00:00Z\",\n    \"ServiceTime\": 5,\n    \"NoteFromPlanner\": [{\n        \"key\": \"Payment\",\n        \"value\": \"Cash\"\n    }],\n    \"NoteFromDriver\": [{\n        \"key\": \"template\",\n        \"value\": \"Customer is not home\"\n    }, {\n        \"key\": \"comments\",\n        \"value\": \"Waited 10 minutes\"\n    }],\n    \"ContactName\": null,\n    \"ContactPhone\": null,\n    \"ContactEmail\": null,\n    \"EngineRouteSeqNum\": 11,\n    \"ActualDeliveryTime\": \"2017-02-08T09:30:00Z\",\n    \"DeliveryMaster\": {\n        \"Id\": \"35187491\",\n        \"Status\": 11,\n        \"VehicleId\": \"YE0423M\",\n        \"Priority\": 2,\n        \"CustomerName\": null,\n        \"CustomerPhone\": 98889888,\n        \"CustomerEmail\": \"john.doe@gmail.com\",\n        \"VehicleRestriction\": null\n    },\n    \"DeliveryItems\": [{\n        \"Id\": 1,\n        \"DeliveryDetailId\": 1,\n        \"ItemId\": \"WD-SC\",\n        \"ItemQty\": 5,\n        \"ActualItemQty\": 5\n    }],\n    \"VerificationCode\": {\n        \"Code\": \"12345\"\n    }\n}, {\n    ...\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/09_DeliveryDetail-v2.js",
    "groupTitle": "DeliveryDetail",
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
    "url": "/v1/delivery/job/:deliveryDetailId/item",
    "title": "Get DeliveryItem",
    "description": "<p>Get all DeliveryItem instances that are associated with a particular DeliveryDetail instance.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_delivery_item_by_delivery_detail",
    "group": "DeliveryDetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of DeliveryDetail instance.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.",
            "description": "<p>Instance(s) from DeliveryItem table that are related to this DeliveryDetail Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.Id",
            "description": "<p>Primary key value of DeliveryItem instance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.DeliveryDetailId",
            "description": "<p>References to the primary key value from DeliveryDetail table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.ItemId",
            "description": "<p>References to the primary key value from Item table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.ItemQty",
            "description": "<p>Indicates number of units to pick up and/or deliver.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.ActualItemQty",
            "description": "<p>Indicates number of units that have been picked up and/or delivered.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-.Item",
            "description": "<p>Instance from Item table based on ItemId.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/delivery/job/1/item\n[{\n    \"Id\": 12,\n    \"DeliveryDetailId\": 1,\n    \"ItemId\": 12,\n    \"ItemQty\": 5,\n    \"ActualItemQty\": 5,\n    \"Item\": {\n        \"Id\": 12,\n        \"Name\": \"WD-SC\",\n        \"Weight\": 5,\n        \"Description\": \"Refill Cartridge:Woody/Herby\"\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/06_DeliveryItem-v2.js",
    "groupTitle": "DeliveryDetail",
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
    "url": "/v1/delivery/job/:id",
    "title": "Get one",
    "description": "<p>Get one database instance from DeliveryDetail table based on primary key.<br> Planner will receive all database instance(s).<br> Driver will only receive database instance(s) that are under his/her VehicleId (i.e. VehicleId column = Driver's VehicleId), and orders that are confirmed.<br></p>",
    "permission": [
      {
        "name": "planner, driver"
      }
    ],
    "version": "1.0.0",
    "name": "get_one_delivery_detail",
    "group": "DeliveryDetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Primary key value of instance to find.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Id",
            "description": "<p>Primary key value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DeliveryMasterId",
            "description": "<p>References to the primary key value from DeliveryMaster table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Status",
            "description": "<p>Job's status. Pending=1, Late=2, Ontime=3, Unsuccessful=4, Expected to be late=5.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "JobSequence",
            "description": "<p>Indicates the execution order for jobs for each order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "JobType",
            "description": "<p>Indicates whether this instance is a pick up or delivery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>Street address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Postal",
            "description": "<p>Postal code of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Lat",
            "description": "<p>Latitude of Postal in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Lng",
            "description": "<p>Longitude of Postal in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "StartTimeWindow",
            "description": "<p>Start time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "EndTimeWindow",
            "description": "<p>End time of time window in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "ServiceTime",
            "description": "<p>Unit: Minutes. Time required to be at the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "NoteFromPlanner",
            "description": "<p>A remarks/note/memo from planner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromPlanner.-.key",
            "description": "<p>Purpose of remark. For example, &quot;Payment mode&quot;, &quot;Equipments&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromPlanner.-.value",
            "description": "<p>Respective comment for the key. For example, &quot;Cash&quot;, &quot;Crane&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "NoteFromDriver",
            "description": "<p>A remarks/note/memo from driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromDriver.-.key",
            "description": "<p>Purpose of remark. For example, &quot;template&quot;, &quot;comments&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NoteFromDriver.-.value",
            "description": "<p>Respective comment for the key. For example, &quot;Customer is not home&quot;, &quot;Waited 10 minutes&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ContactName",
            "description": "<p>Name of person to contact at Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ContactPhone",
            "description": "<p>Phone number of person to contact at Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ContactEmail",
            "description": "<p>Email address of person to contact at Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ActualDeliveryTime",
            "description": "<p>Actual time of delivery in ISO8601 format. Timezone matters (e.g. Z implies UTC). If value is null, job has not been attempted.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "EngineRouteSeqNum",
            "description": "<p>Instances with lower route sequence number is expected to be attempted before instances with higher route sequence number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "DeliveryItems",
            "description": "<p>Instance(s) from DeliveryItem table that are related to this DeliveryDetail.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "VerificationCode",
            "description": "<p>Instance(s) from VerificationCode table that are related to this DeliveryDetail.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "DeliveryMaster",
            "description": "<p>Instance from DeliveryMaster table based on DeliveryMasterId. Not included in driver's request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (Planner): 200 OK",
          "content": "// http://localhost/vrp/rest/v1/delivery/job/1\n{\n    \"Id\": 1,\n    \"DeliveryMasterId\": \"35187491\",\n    \"Status\": 3,\n    \"JobSequence\": 1,\n    \"JobType\": \"PICKUP\",\n    \"Address\": \"11 Tuas Link 1\",\n    \"Postal\": \"639588\",\n    \"Lat\": 1.3341,\n    \"Lng\": 103.636,\n    \"StartTimeWindow\": \"2017-02-08T09:00:00Z\",\n    \"EndTimeWindow\": \"2017-02-08T13:00:00Z\",\n    \"ServiceTime\": 5,\n    \"NoteFromPlanner\": null,\n    \"NoteFromDriver\": [{\n        \"key\": \"template\",\n        \"value\": \"Customer is not home\"\n    }, {\n        \"key\": \"comments\",\n        \"value\": \"Waited 10 minutes\"\n    }],\n    \"ContactName\": null,\n    \"ContactPhone\": null,\n    \"ContactEmail\": null,\n    \"EngineRouteSeqNum\": 11,\n    \"ActualDeliveryTime\": \"2017-02-08T09:30:00Z\",\n    \"DeliveryMaster\": {\n        \"Id\": \"35187491\",\n        \"Status\": 11,\n        \"VehicleId\": \"YE0423M\",\n        \"Priority\": 2,\n        \"CustomerName\": null,\n        \"CustomerPhone\": 98889888,\n        \"CustomerEmail\": \"john.doe@gmail.com\",\n        \"VehicleRestriction\": null\n    },\n    \"DeliveryItems\": [{\n        \"Id\": 1,\n        \"DeliveryDetailId\": 1,\n        \"ItemId\": \"WD-SC\",\n        \"ItemQty\": 5,\n        \"ActualItemQty\": 5\n    }],\n    \"VerificationCode\": {\n        \"Code\": \"12345\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (Driver): 200 OK",
          "content": "// http://localhost/vrp/rest/v1/delivery/job/1\n{\n    \"Id\": 1,\n    \"DeliveryMasterId\": \"35187491\",\n    \"Status\": 3,\n    \"JobSequence\": 1,\n    \"JobType\": \"PICKUP\",\n    \"Address\": \"11 Tuas Link 1\",\n    \"Postal\": \"639588\",\n    \"Lat\": 1.3341,\n    \"Lng\": 103.636,\n    \"StartTimeWindow\": \"2017-02-08T09:00:00Z\",\n    \"EndTimeWindow\": \"2017-02-08T13:00:00Z\",\n    \"ServiceTime\": 5,\n    \"NoteFromPlanner\": null,\n    \"NoteFromDriver\": [{\n        \"key\": \"template\",\n        \"value\": \"Customer is not home\"\n    }, {\n        \"key\": \"comments\",\n        \"value\": \"Waited 10 minutes\"\n    }],\n    \"ContactName\": null,\n    \"ContactPhone\": null,\n    \"ContactEmail\": null,\n    \"EngineRouteSeqNum\": 11,\n    \"ActualDeliveryTime\": \"2017-02-08T09:30:00Z\",\n    \"DeliveryItems\": [{\n        \"Id\": 1,\n        \"DeliveryDetailId\": 1,\n        \"ItemId\": \"WD-SC\",\n        \"ItemQty\": 5,\n        \"ActualItemQty\": 5\n    }],\n    \"VerificationCode\": {\n        \"Code\": \"12345\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/09_DeliveryDetail-v2.js",
    "groupTitle": "DeliveryDetail",
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
    "type": "post",
    "url": "/v1/delivery/job/sync",
    "title": "Synchronise",
    "description": "<p>Synchronises files that are created when a User has no Internet connectivity.<br> Invalid files will be ignored and deleted from server.<br></p>",
    "version": "1.0.0",
    "name": "synchronise_deliveries",
    "group": "DeliveryDetail",
    "parameter": {
      "fields": {
        "Multipart-Form": [
          {
            "group": "Multipart-Form",
            "type": "Object[]",
            "optional": false,
            "field": "-.",
            "description": "<p>List of jobs to sync.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "String",
            "optional": false,
            "field": "-.jobId",
            "description": "<p>Primary key value of DeliveryDetail table.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "Boolean",
            "optional": false,
            "field": "-.delivered",
            "description": "<p>Indicates whether the delivery was successful or unsuccessful.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "String",
            "optional": false,
            "field": "-.attemptedByDriver",
            "description": "<p>Full name of the driver who has attempted this job.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "String",
            "optional": false,
            "field": "-.attemptedByVehicle",
            "description": "<p>Vehicle plate number of the vehicle that the driver used to attempt this job.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "Object[]",
            "optional": false,
            "field": "-.note",
            "description": "<p>Remarks/note/memo from driver, either in JSON format or JSON parsable string.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "String",
            "optional": false,
            "field": "-.note.key",
            "description": "<p>Purpose of remark. Required for generating service chit.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "String",
            "optional": false,
            "field": "-.note.value",
            "description": "<p>Respective comment for the key. For example, &quot;Customer is not home&quot;, &quot;Waited 10 minutes&quot;. New lines will be replaced with fullstops.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "String",
            "optional": false,
            "field": "-.deliveryTime",
            "description": "<p>Actual time of delivery in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "File",
            "optional": false,
            "field": "-.signature",
            "description": "<p>Customer's proof of delivery (signature) in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg).</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "File",
            "optional": true,
            "field": "-.photo",
            "description": "<p>Customer's proof of delivery (photo) in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg).</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "File[]",
            "optional": true,
            "field": "notePhotos",
            "description": "<p>Driver note in photo in PNG, JPG or JPEG only (image/png or image/jpg or image/jpeg). Maximum three.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "Object[]",
            "optional": true,
            "field": "-.items",
            "description": "<p>List of DeliveryItems.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "String",
            "optional": true,
            "field": "-.items.Id",
            "description": "<p>DeliveryItem Id that was picked-up or delivered.</p>"
          },
          {
            "group": "Multipart-Form",
            "type": "Float",
            "optional": true,
            "field": "-.items.ActualItemQty",
            "description": "<p>Quantity that was picked-up or delivered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Multipart-Form-Request-Example:",
          "content": "     // http://localhost/vrp/rest/v1/misc/sync/\n     [{\n         \"jobId\": 1,\n         \"delivered\": true,\n         \"attemptedByDriver\": \"John Doe\",\n         \"attemptedByVehicle\": \"YE0123M\",\n         \"note\": null,\n         \"deliveryTime\": \"2017-01-01T010:00:00Z\",\n         \"signature\": (Signature in Blob),\n         \"photo\": (Photo in Blob),\n         \"notePhotos\": [(Photo in Blob), (Photo in Blob)],\n         \"items\": [{\n             \"Id\": 1,\n             \"ActualItemQty\": 4\n\n     }] *\n     }, {\n\"jobId\": 2,\n\"delivered\": false,\n\"attemptedByDriver\": \"John Doe\",\n\"attemptedByVehicle\": \"YE0123M\",\n\"note\": [{\n\"key\": \"template\",\n\"value\": \"Customer is not home\" *\n         }, {\n\"key\": \"comments\",\n\"value\": \"Waited 10 minutes\" *\n         }],\n\"deliveryTime\": \"2017-01-01T010:00:00Z\" *\n     }]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/09_DeliveryDetail-v2.js",
    "groupTitle": "DeliveryDetail",
    "success": {
      "examples": [
        {
          "title": "Success-Response: 204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
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
    "type": "post",
    "url": "/v1/delivery/job/:deliveryDetailId/item",
    "title": "Create",
    "description": "<p>Insert one or many DeliveryItem's information into DeliveryItem table.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "create_delivery_item",
    "group": "DeliveryItem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of associated DeliveryDetail instance.</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "record",
            "description": "<p>Record(s) to be inserted into the database.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..100",
            "optional": false,
            "field": "record.ItemId",
            "description": "<p>References to the primary key value from Item table.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": false,
            "field": "record.ItemQty",
            "description": "<p>Indicates number of units to pick up and/or deliver.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"record\": {\n        \"ItemId\": 1,\n        \"ItemQty\": 3\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "-",
            "description": "<p>List of primary keys of affected rows</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: Create one",
          "content": "HTTP/1.1 200 OK\n// One record inserted\n[29]",
          "type": "json"
        },
        {
          "title": "Success-Response: Create many",
          "content": "HTTP/1.1 200 OK\n// Two records inserted\n[30, 31]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/06_DeliveryItem-v2.js",
    "groupTitle": "DeliveryItem",
    "error": {
      "examples": [
        {
          "title": "Error-Response: 401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n[\"Error message 1\", \"Error message 2\"]",
          "type": "json"
        }
      ],
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of errors.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/v1/delivery/job/:deliveryDetailId/item",
    "title": "Delete all",
    "description": "<p>Delete all DeliveryItem database instances that are associated to a DeliveryDetail instance.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "delete_deliveryItem",
    "group": "DeliveryItem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of DeliveryDetail instance.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/delivery/job/1/item\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/06_DeliveryItem-v2.js",
    "groupTitle": "DeliveryItem",
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
    "type": "delete",
    "url": "/v1/delivery/item/:deliveryItemId",
    "title": "Delete",
    "description": "<p>Delete one database instance from DeliveryItem table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "delete_delivery_item",
    "group": "DeliveryItem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryItemId",
            "description": "<p>Primary key value of instance to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was deleted\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/06_DeliveryItem-v2.js",
    "groupTitle": "DeliveryItem",
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
    "url": "/v1/delivery/item",
    "title": "Get many",
    "description": "<p>Get multiple database instance(s) from DeliveryItem table based on where filter.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_all_delivery_item",
    "group": "DeliveryItem",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "where",
            "description": "<p>Where conditions for SQL query.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// Get instances whose primary key value is either 1 or 2\n// http://localhost/vrp/rest/v1/delivery/item?where={\"Id\":[1,2]}\n{\n    \"where\": {\n        \"Id\": [1,2]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.",
            "description": "<p>List of DeliveryItem instances.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.Id",
            "description": "<p>Primary key value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.DeliveryDetailId",
            "description": "<p>References to the primary key value from DeliveryDetail table.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.ItemId",
            "description": "<p>References to the primary key value from Item table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.ItemQty",
            "description": "<p>Indicates number of units to pick up and/or deliver.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.ActualItemQty",
            "description": "<p>Indicates number of units that have been picked up and/or delivered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n[{\n    \"Id\": 1,\n    \"DeliveryDetailId\": 1,\n    \"ItemId\": \"BR-SC\",\n    \"ItemQty\": 3,\n    \"ActualItemQty\": 3,\n    \"Item\": {\n        \"Id\": \"BR-SC\",\n        \"Weight\": 5,\n        \"Description\": \"Refill Cartridge: Minty/Oceanic\"\n    }\n}, {\n    \"Id\": 2,\n    \"DeliveryDetailId\": 2,\n    \"ItemId\": \"SU-SC\",\n    \"ItemQty\": 30,\n    \"ActualItemQty\": null,\n    \"Item\": {\n        \"Id\": \"SU-SC\",\n        \"Weight\": 5,\n        \"Description\": \"Refill Cartridge: Summer\"\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/06_DeliveryItem-v2.js",
    "groupTitle": "DeliveryItem",
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
    "url": "/v1/delivery/item/:deliveryItemId",
    "title": "Get one",
    "description": "<p>Get one database instance from DeliveryItem table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_one_delivery_item",
    "group": "DeliveryItem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryItemId",
            "description": "<p>Primary key value of instance to find.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Id",
            "description": "<p>Primary key value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "DeliveryDetailId",
            "description": "<p>References to the primary key value from DeliveryDetail table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ItemId",
            "description": "<p>References to the primary key value from Item table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "ItemQty",
            "description": "<p>Indicates number of units to pick up and/or deliver.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "ActualItemQty",
            "description": "<p>Indicates number of units that have been picked up and/or delivered.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Item",
            "description": "<p>Instance from Item table based on ItemId.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n    \"Id\": 1,\n    \"DeliveryDetailId\": 1,\n    \"ItemId\": 6,\n    \"ItemQty\": 3,\n    \"ActualItemQty\" null,\n    \"Item\": {\n        \"Id\": 6,\n        \"Name\": \"BR-SC\",\n        \"Weight\": 5,\n        \"Description\": \"Refill Cartridge: Minty/Oceanic\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/06_DeliveryItem-v2.js",
    "groupTitle": "DeliveryItem",
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
    "url": "/v1/delivery/item/:deliveryItemId",
    "title": "Update",
    "description": "<p>Update one database instance in DeliveryItem table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "update_delivery_item",
    "group": "DeliveryItem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryItemId",
            "description": "<p>Primary key value of instance to update.</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "newValues",
            "description": "<p>New values to overwrite existing record with.</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "optional": true,
            "field": "newValues.DeliveryDetailId",
            "description": "<p>References to the primary key value from DeliveryDetail table.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..100",
            "optional": true,
            "field": "newValues.ItemId",
            "description": "<p>References to the primary key value from Item table.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "newValues.ItemQty",
            "description": "<p>Indicates number of units to pick up and/or deliver.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "newValues.ActualItemQty",
            "description": "<p>Indicates number of units that have been picked up and/or delivered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// http://localhost/vrp/rest/v1/delivery/item/1\n{\n    \"newValues\": {\n        \"ItemQty\": 16\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was updated\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/06_DeliveryItem-v2.js",
    "groupTitle": "DeliveryItem",
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
    "type": "post",
    "url": "/v1/delivery",
    "title": "Create one",
    "description": "<p>Insert one Delivery information into DeliveryMaster table.<br> DeliveryDetails, DeliveryItems and VerificationCode properties are supported (i.e. insert into DeliveryDetail and DeliveryItem table at the same time).<br> If there is any error with DeliveryDetails, DeliveryItems and/or VerificationCode, the entire insert will fail (i.e. DeliveryMaster will also not be inserted).<br> <br> <strong><span style=\"color:red\">IMPORTANT</span></strong>: This API does not support bulkInsert due to MSSQL error when SQL statement contains OUTPUT clause without INTO clause.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "create_delivery_master",
    "group": "DeliveryMaster",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "record",
            "description": "<p>Record to be inserted into the database.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..30",
            "optional": false,
            "field": "record.Id",
            "description": "<p>Order number.</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "allowedValues": [
              "1-10"
            ],
            "optional": true,
            "field": "record.Priority",
            "defaultValue": "2",
            "description": "<p>Ranking of jobs. Higher number has higher priority.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..254",
            "optional": true,
            "field": "record.CustomerName",
            "description": "<p>Name of the person who has placed this order.</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "size": "8",
            "optional": true,
            "field": "record.CustomerPhone",
            "description": "<p>Contact number of the person who has placed this order.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..254",
            "optional": true,
            "field": "record.CustomerEmail",
            "description": "<p>Email address of the person who has placed this order.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "record.VehicleRestriction",
            "description": "<p>Comma delimited string. May have space between delimiters. VehicleId is without @. VehicleType is with @. Prepend # to exclude. Example: YE0234M,@Dry,#YR0213M,@#Cold</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": true,
            "field": "record.DeliveryDetails",
            "description": "<p>DeliveryDetail] instance(s). Refer to #POST DeliveryDetail API for format.</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": true,
            "field": "record.DeliveryDetails.DeliveryItems",
            "description": "<p>DeliveryItem instance(s). Refer to #POST DeliveryItem API for format.</p>"
          },
          {
            "group": "Request Body",
            "type": "Object",
            "optional": true,
            "field": "record.DeliveryDetails.VerificationCode",
            "description": "<p>One VerificationCode instance. Refer to #POST VerificationCode API for format.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n    \"record\": {\n        \"Id\": \"35187491\",\n        \"Priority\": 1,\n        \"VehicleId\": null,\n        \"LastAttemptedByDriver\": \"Doe Ng\",\n        \"LastAttemptedByPlateNumber\": \"YE0423MNum\",\n        \"CustomerName\": null,\n        \"CustomerPhone\": 98889888,\n        \"CustomerEmail\": \"john.doe@gmail.com\",\n        \"VehicleRestriction\": null,\n        \"DeliveryDetails\": [{\n            \"JobSequence\": 1,\n            \"JobType\": \"PICKUP\",\n            \"Address\": \"11 Tuas Link 1\",\n            \"Postal\": \"639588\",\n            \"Lat\": 1.3341,\n            \"Lng\": 103.636,\n            \"StartTimeWindow\": \"2017-02-08T09:00:00Z\",\n            \"EndTimeWindow\": \"2017-02-08T13:00:00Z\",\n            \"ServiceTime\": 5,\n            \"NoteFromPlanner\": null,\n            \"NoteFromDriver\": null,\n            \"ContactName\": null,\n            \"ContactPhone\": null,\n            \"ContactEmail\": null,\n            \"DeliveryItems\": [{\n                \"ItemId\": \"WD-SC\",\n                \"ItemQty\": 5\n            }],\n            \"VerificationCode\": {\n                \"Code\": \"12345\"\n            }\n        }]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>Primary key of affected row</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n// One record inserted\n\"35187491\"",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/10_DeliveryMaster-v2.js",
    "groupTitle": "DeliveryMaster",
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
    "type": "delete",
    "url": "/v1/delivery/:deliveryMasterId",
    "title": "Delete",
    "description": "<p>Delete one database instance from DeliveryMaster table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "delete_delivery_master",
    "group": "DeliveryMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryMasterId",
            "description": "<p>Primary key value of instance to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was deleted\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/10_DeliveryMaster-v2.js",
    "groupTitle": "DeliveryMaster",
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
    "url": "/v1/delivery",
    "title": "Get many",
    "description": "<p>Get multiple database instance(s) from DeliveryMaster table based on where filter.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_delivery_master",
    "group": "DeliveryMaster",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "date",
            "description": "<p>Date to search records on. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "startDate",
            "description": "<p>Search records in a date range. Must be specified together with <code>endDate</code>. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "endDate",
            "description": "<p>Search records in a date range. Must be specified together with <code>startDate</code>. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "where",
            "description": "<p>Where conditions for SQL query.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// Get all instances whose Priority is 2\n// http://localhost/vrp/rest/v1/delivery?where={\"Priority\":2}\n{\n    \"where\": {\n        \"Priority\": 2\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "// Get instances whose TimeWindow is on 1 Feburary 2017\n// http://localhost/vrp/rest/v1/vehicle?date=2017-02-01\n{\n    \"date\": \"2017-02-01\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "// Get instances whose TimeWindow is between on 1 January 2017 to 31 December 2017\n// http://localhost/vrp/rest/v1/vehicle?startDate=2017-01-01&endDate=2017-12-31\n{\n    \"startDate\": \"2017-01-01\",\n    \"endDate\": \"2017-12-31\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.",
            "description": "<p>List of DeliveryMaster instances.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.Id",
            "description": "<p>Order number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.VehicleId",
            "description": "<p>References to the primary key value from Vehicle table.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.LastAttemptedByDriver",
            "description": "<p>Full name of the driver that has attempted this order. It will only keep the driver's full name who most recently attempted this order. It assumes that pickup and delivery will be attempted by the same driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.LastAttemptedByPlateNumber",
            "description": "<p>Vehicle plate number of the vehicle that the driver used to attempt this order. It will only keep the vehicle plate number of the vehice that most recently attempted this order. It assumes that pickup and delivery will be attempted by the same vehicle.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.Priority",
            "description": "<p>Ranking of jobs. Higher number has higher priority.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.CustomerName",
            "description": "<p>Name of the person who has placed this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.CustomerPhone",
            "description": "<p>Contact number of the person who has placed this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.CustomerEmail",
            "description": "<p>Email address of the person who has placed this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.VehicleRestriction",
            "description": "<p>Comma delimited string. May have space between delimiters. VehicleId is without @. VehicleType is with @. Prepend # to exclude. Example: YE0234M,@Dry,#YR0213M,@#Cold</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.DeliveryDetails",
            "description": "<p>Instance(s) from DeliveryDetail table that are related to this DeliveryMaster.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.DeliveryDetails.DeliveryItems",
            "description": "<p>Instance(s) from DeliveryItem table that are related to this DeliveryMaster.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-.DeliveryDetails.VerificationCode",
            "description": "<p>Instance(s) from VerificationCode table that are related to this DeliveryMaster.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/delivery/\n[{\n    \"Id\": \"35187491\",\n    \"VehicleId\": \"YE0423M\",\n    \"LastAttemptedByDriver\": \"Doe Ng\",\n    \"LastAttemptedByPlateNumber\": \"YE0423MNum\",\n    \"Priority\": 1,\n    \"CustomerName\": null,\n    \"CustomerPhone\": 98889888,\n    \"CustomerEmail\": \"john.doe@gmail.com\",\n    \"VehicleRestriction\": null,\n    \"DeliveryDetails\": [{\n        \"Id\": 1,\n        \"DeliveryMasterId\": \"35187409\",\n        \"Status\": 3,\n        \"JobSequence\": 1,\n        \"JobType\": \"PICKUP\",\n        \"Address\": \"11 Tuas Link 1\",\n        \"Postal\": \"639588\",\n        \"Lat\": 1.3341,\n        \"Lng\": 103.636,\n        \"StartTimeWindow\": \"2017-02-08T09:00:00Z\",\n        \"EndTimeWindow\": \"2017-02-08T13:00:00Z\",\n        \"ServiceTime\": 5,\n        \"NoteFromPlanner\": null,\n        \"NoteFromDriver\": null,\n        \"ContactName\": null,\n        \"ContactPhone\": null,\n        \"ContactEmail\": null,\n        \"EngineRouteSeqNum\": 11,\n        \"ActualDeliveryTime\": \"2017-02-08T09:30:00Z\",\n        \"DeliveryItems\": [{\n            \"Id\": 1,\n            \"DeliveryDetailId\": 1,\n            \"ItemId\": \"WD-SC\",\n            \"ItemQty\": 5,\n            \"ActualItemQty\": 5\n        }],\n        \"VerificationCode\": {\n            \"DeliveryDetailId\": 1,\n            \"Code\": \"12345\"\n        }\n    }]\n}, {\n    ...\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/10_DeliveryMaster-v2.js",
    "groupTitle": "DeliveryMaster",
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
    "url": "/v1/delivery/:deliveryMasterId",
    "title": "Get one",
    "description": "<p>Get one database instance from DeliveryMaster table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_one_delivery_master",
    "group": "DeliveryMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryMasterId",
            "description": "<p>Primary key value of instance to find.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Order number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "VehicleId",
            "description": "<p>References to the primary key value from Vehicle table.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LastAttemptedByDriver",
            "description": "<p>Full name of the driver that has attempted this order. It will only keep the driver's full name who most recently attempted this order. It assumes that pickup and delivery will be attempted by the same driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LastAttemptedByPlateNumber",
            "description": "<p>Vehicle plate number of the vehicle that the driver used to attempt this order. It will only keep the vehicle plate number of the vehice that most recently attempted this order. It assumes that pickup and delivery will be attempted by the same vehicle.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Priority",
            "description": "<p>Ranking of jobs. Higher number has higher priority.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CustomerName",
            "description": "<p>Name of the person who has placed this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CustomerPhone",
            "description": "<p>Contact number of the person who has placed this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CustomerEmail",
            "description": "<p>Email address of the person who has placed this order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "VehicleRestriction",
            "description": "<p>Comma delimited string. May have space between delimiters. VehicleId is without @. VehicleType is with @. Prepend # to exclude. Example: YE0234M,@Dry,#YR0213M,@#Cold</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "DeliveryDetails",
            "description": "<p>Instance(s) from DeliveryDetail table that are related to this DeliveryMaster.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "DeliveryDetails.DeliveryItems",
            "description": "<p>Instance(s) from DeliveryItem table that are related to this DeliveryMaster.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "DeliveryDetails.VerificationCode",
            "description": "<p>Instance(s) from VerificationCode table that are related to this DeliveryMaster.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/delivery/35187491\n{\n    \"Id\": \"35187491\",\n    \"VehicleId\": \"YE0423M\",\n    \"LastAttemptedByDriver\": \"Doe Ng\",\n    \"LastAttemptedByPlateNumber\": \"YE0423MNum\",\n    \"Priority\": 1,\n    \"CustomerName\": null,\n    \"CustomerPhone\": 98889888,\n    \"CustomerEmail\": \"john.doe@gmail.com\",\n    \"VehicleRestriction\": null,\n    \"DeliveryDetails\": [{\n        \"Id\": 1,\n        \"DeliveryMasterId\": \"35187409\",\n        \"Status\": 3,\n        \"JobSequence\": 1,\n        \"JobType\": \"PICKUP\",\n        \"Address\": \"11 Tuas Link 1\",\n        \"Postal\": \"639588\",\n        \"Lat\": 1.3341,\n        \"Lng\": 103.636,\n        \"StartTimeWindow\": \"2017-02-08T09:00:00Z\",\n        \"EndTimeWindow\": \"2017-02-08T13:00:00Z\",\n        \"ServiceTime\": 5,\n        \"NoteFromPlanner\": null,\n        \"NoteFromDriver\": null,\n        \"ContactName\": null,\n        \"ContactPhone\": null,\n        \"ContactEmail\": null,\n        \"EngineRouteSeqNum\": 11,\n        \"ActualDeliveryTime\": \"2017-02-08T09:30:00Z\",\n        \"DeliveryItems\": [{\n            \"Id\": 1,\n            \"DeliveryDetailId\": 1,\n            \"ItemId\": \"WD-SC\",\n            \"ItemQty\": 5,\n            \"ActualItemQty\": 5\n        }],\n        \"VerificationCode\": {\n            \"DeliveryDetailId\": 1,\n            \"Code\": \"12345\"\n        }\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/10_DeliveryMaster-v2.js",
    "groupTitle": "DeliveryMaster",
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
    "url": "/v1/delivery/:deliveryMasterId",
    "title": "Update",
    "description": "<p>Update one database instance in DeliveryMaster table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "update_delivery_master",
    "group": "DeliveryMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryMasterId",
            "description": "<p>Primary key value of instance to update.</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "newValues.VehicleId",
            "description": "<p>References to the primary key value from Vehicle table.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..100",
            "optional": true,
            "field": "newValues.LastAttemptedByDriver",
            "description": "<p>Full name of the driver that has attempted this order. It will only keep the driver's full name who most recently attempted this order. It assumes that pickup and delivery will be attempted by the same driver.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..10",
            "optional": true,
            "field": "newValues.LastAttemptedByPlateNumber",
            "description": "<p>Vehicle plate number of the vehicle that the driver used to attempt this order. It will only keep the vehicle plate number of the vehice that most recently attempted this order. It assumes that pickup and delivery will be attempted by the same vehicle.</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "allowedValues": [
              "1-10"
            ],
            "optional": true,
            "field": "newValues.Priority",
            "description": "<p>Ranking of jobs. Higher number has higher priority.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..254",
            "optional": true,
            "field": "newValues.CustomerName",
            "description": "<p>Name of the person who has placed this order.</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "size": "8",
            "optional": true,
            "field": "newValues.CustomerPhone",
            "description": "<p>Contact number of the person who has placed this order.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..254",
            "optional": true,
            "field": "newValues.CustomerEmail",
            "description": "<p>Email address of the person who has placed this order.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "newValues.VehicleRestriction",
            "description": "<p>Comma delimited string. May have space between delimiters. VehicleId is without @. VehicleType is with @. Prepend # to exclude. Example: YE0234M,@Dry,#YR0213M,@#Cold</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// http://localhost/vrp/rest/v1/delivery/35187491\n{\n    \"newValues\": {\n        \"Priority\": 3\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was updated\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/10_DeliveryMaster-v2.js",
    "groupTitle": "DeliveryMaster",
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
    "url": "/v1/delivery/job/:deliveryDetailId/note",
    "title": "Get all",
    "description": "<p>Get database instances from DeliveryNote table based on DeliveryDetail's primary key.<br> Driver can only retrieve photos note of jobs that they have executed.</p>",
    "version": "1.0.0",
    "name": "get_delivery_note",
    "group": "DeliveryNote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of associated DeliveryDetail instance.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "-.",
            "description": "<p>List of Photo column of instances from DeliveryNote table in Base64 format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/delivery/job/1/note\n[\n    \"R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\",\n    \"R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+goOXMv8\"\n]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/05_DeliveryNote-v2.js",
    "groupTitle": "DeliveryNote",
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
    "url": "/v1/delivery/job/:deliveryDetailId/pod/:podType",
    "title": "Get signature or photo only",
    "description": "<p>Get Signature or Photo column of one database instance from DeliveryPOD table based on primary key.<br> Driver can only retrieve POD of jobs that they have executed.</p>",
    "version": "1.0.0",
    "name": "get_delivery_pod_by_column",
    "group": "DeliveryPOD",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of associated DeliveryDetail instance.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"photo\"",
              "\"signature\""
            ],
            "optional": false,
            "field": "podType",
            "description": "<p>The column to retrieve.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>Either Photo or Signature column in Base64, depending which column param was specified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/delivery/job/1/pod/signature\n\"R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"",
          "type": "json"
        },
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/delivery/job/1/pod/photo\n\"R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/07_DeliveryPOD-v2.js",
    "groupTitle": "DeliveryPOD",
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
    "url": "/v1/delivery/job/:deliveryDetailId/pod",
    "title": "Get one",
    "description": "<p>Get database instances from DeliveryPOD table based on DeliveryDetail's primary key.<br> Driver can only retrieve POD of jobs that they have executed.</p>",
    "version": "1.0.0",
    "name": "get_one_delivery_pod",
    "group": "DeliveryPOD",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of associated DeliveryDetail instance.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DeliveryDetailId",
            "description": "<p>References to the primary key value from DeliveryDetail table.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Signature",
            "description": "<p>Signature as proof of delivery in Base64 format.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Photo",
            "description": "<p>Photo as proof of delivery in Base64 format.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/delivery/job/1/pod\n{\n    \"DeliveryDetailId\": 1,\n    \"Signature\": \"R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\",\n    \"Photo\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/07_DeliveryPOD-v2.js",
    "groupTitle": "DeliveryPOD",
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
    "url": "/v1/delivery_plan",
    "title": "Approve plan",
    "description": "<p>Approve a DeliveryPlan. Solution will only pass if <u>all</u> jobs in the same order are PENDING or UNSUCCESSFUL.<br> Assigned orders will have Status=10 (PENDING).<br> Unassigned orders will have Status=12 (NEW).<br> <br> <strong><span style=\"color:red\">IMPORTANT</span></strong>: This API does not ensure that a shipment is assigned to the same driver. It assumes that the solution provided is correct and executable.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "approve",
    "group": "DeliveryPlan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "solution",
            "description": "<p>Solution generated by vrp-engine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// http://localhost/vrp/rest/v1/delivery_plan/\n{\n    \"solution\": {\n        \"routes\": [{\n            \"vehicle_id\": \"YE0423M\",\n            \"start_time\": \"01/01/70 07:30\",\n            \"end_time\": \"04/03/17 16:33\",\n            \"act\": [{\n                \"type\": \"pickup\",\n                \"job_id\": \"35188928\"\n            }]\n        }],\n        \"unassigned_jobs\": [\"35188929\",\"35188930\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/11_DeliveryPlan-v2.js",
    "groupTitle": "DeliveryPlan"
  },
  {
    "type": "get",
    "url": "/v2/files/data_template",
    "title": "Data Template",
    "description": "<p>Download data template for uploading data in planner web application A4 version</p>",
    "version": "2.0.0",
    "name": "get_data_template",
    "group": "Files",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Buffer",
            "optional": false,
            "field": "-.",
            "description": "<p>Data template in Excel</p>"
          }
        ]
      }
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/13_Files-v2.js",
    "groupTitle": "Files",
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
    "url": "/v1/files/data_template",
    "title": "Data Template",
    "description": "<p>Download data template for uploading data in planner web application A1 version</p>",
    "version": "1.0.0",
    "name": "get_data_template",
    "group": "Files",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Buffer",
            "optional": false,
            "field": "-.",
            "description": "<p>Data template in Excel</p>"
          }
        ]
      }
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/13_Files-v2.js",
    "groupTitle": "Files",
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
    "url": "/v1/files/service_chit/:deliveryDetailId",
    "title": "Service Chit",
    "description": "<p>Generate service chit</p>",
    "version": "1.0.0",
    "name": "get_service_chit",
    "group": "Files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of associated DeliveryDetail instance.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// Get service chit for DeliveryDetail Id 1\n// http://localhost/vrp/rest/v1/files/service_chit/1",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Buffer",
            "optional": false,
            "field": "-.",
            "description": "<p>Service chit in PDF file</p>"
          }
        ]
      }
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/13_Files-v2.js",
    "groupTitle": "Files",
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
    "url": "/v1/files/transaction_log",
    "title": "Transaction Log",
    "description": "<p>Generate transaction log</p>",
    "version": "1.0.0",
    "name": "get_transaction_log",
    "group": "Files",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "date",
            "defaultValue": "today",
            "description": "<p>Date to search records on. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "startDate",
            "description": "<p>Search records in a date range. Must be specified together with <code>endDate</code>. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "endDate",
            "description": "<p>Search records in a date range. Must be specified together with <code>startDate</code>. Date must be in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          },
          {
            "group": "Query String",
            "type": "Boolean",
            "optional": true,
            "field": "withPhotos",
            "defaultValue": "false",
            "description": "<p>Download all photos associated with the records in transaction log.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// Get transaction log for today\n// http://localhost/vrp/rest/v1/files/transaction_log",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "// Get transaction log between on 1 January 2017 to 31 December 2017 with all images\n// http://localhost/vrp/rest/v1/files/transaction_log?startDate=2017-01-01&endDate=2017-12-31&withPhotos=true\n{\n    \"startDate\": \"2017-01-01\",\n    \"endDate\": \"2017-12-31\",\n    \"withPhotos\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Buffer",
            "optional": false,
            "field": "-.",
            "description": "<p>Zip file that contains transaction log in excel format, and images of DeliveryNote and DeliveryPOD</p>"
          }
        ]
      }
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/13_Files-v2.js",
    "groupTitle": "Files",
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
    "type": "post",
    "url": "/v1/item",
    "title": "Create",
    "description": "<p>Insert one or many Item's information into Item table.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "create_item",
    "group": "Item",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "record",
            "description": "<p>Record(s) to be inserted into the database.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..100",
            "optional": false,
            "field": "record.Id",
            "description": "<p>Item's identifier. Can be name or an item code.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": false,
            "field": "record.Weight",
            "description": "<p>Unit: Kg. Item's weight.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..1024",
            "optional": true,
            "field": "record.Description",
            "description": "<p>Item's description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: Create one",
          "content": "{\n    \"record\": {\n        \"Id\": \"Pallet\",\n        \"Weight\": 14.9,\n        \"Description\": \"889 mm by 1156 mm\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example: Create many",
          "content": "{\n    \"record\": [{\n        \"Id\": \"Pallet\",\n        \"Weight\": 14.9,\n        \"Description\": \"889 mm by 1156 mm\"\n    }, {\n        \"Id\": \"Box\",\n        \"Weight\": 5.6,\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "-",
            "description": "<p>List of primary keys of affected rows</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: Create one",
          "content": "HTTP/1.1 200 OK\n// One record inserted\n[\"Pallet\"]",
          "type": "json"
        },
        {
          "title": "Success-Response: Create many",
          "content": "HTTP/1.1 200 OK\n// Two records inserted\n[\"Pallet\", \"Box\"]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/04_Item-v2.js",
    "groupTitle": "Item",
    "error": {
      "examples": [
        {
          "title": "Error-Response: 401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n[\"Error message 1\", \"Error message 2\"]",
          "type": "json"
        }
      ],
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of errors.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/v1/item/:itemId",
    "title": "Delete",
    "description": "<p>Delete one database instance from Item table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "delete_item",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Primary key value of instance to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was deleted\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/04_Item-v2.js",
    "groupTitle": "Item",
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
    "url": "/v1/item/:itemId",
    "title": "Get one",
    "description": "<p>Get one database instance from Item table based on primary key.</p>",
    "permission": [
      {
        "name": "planner, driver"
      }
    ],
    "version": "1.0.0",
    "name": "get_one_item",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Primary key value of instance to find.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Item's identifier. Can be name or an item code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Weight",
            "description": "<p>Unit: Kg. Item's weight.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Item's description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/item/Pallet\n{\n    \"Name\": \"Pallet\",\n    \"Weight\": 14.9,\n    \"Description\": \"889 mm by 1156 mm\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/04_Item-v2.js",
    "groupTitle": "Item",
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
    "url": "/v1/item/:itemId",
    "title": "Update",
    "description": "<p>Update one database instance in Item table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "update_item",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Primary key value of instance to update.</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "newValues",
            "description": "<p>New values to overwrite existing record with.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "newValues.Weight",
            "description": "<p>Unit: Kg. Item's weight.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..1024",
            "optional": true,
            "field": "newValues.Description",
            "description": "<p>Item's description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// http://localhost/vrp/rest/v1/item/Pallet\n{\n    \"newValues\": {\n        \"Weight\": \"6\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was updated\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/04_Item-v2.js",
    "groupTitle": "Item",
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
    "url": "/v1/misc/app/version",
    "title": "Get latest app version",
    "description": "<p>Returns latest app version number</p>",
    "version": "1.0.0",
    "name": "get_latest_app_version",
    "group": "Misc",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.",
            "description": "<p>Latest app version number</p>"
          }
        ]
      }
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/14_Misc-v2.js",
    "groupTitle": "Misc",
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
    "url": "/v1/misc/app/version",
    "title": "Get latest app version",
    "description": "<p>Returns latest app version number</p>",
    "version": "1.0.0",
    "name": "get_latest_app_version",
    "group": "Misc",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.",
            "description": "<p>Latest app version number</p>"
          }
        ]
      }
    },
    "filename": "vrp-mct/api/routes-v2/v2-v2/Misc-2.0-v2.js",
    "groupTitle": "Misc",
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
    "type": "post",
    "url": "/v1/vehicle/location",
    "title": "Create",
    "description": "<p>Insert one or many Vehicle's coordinates into VehicleLocationLog table.</p>",
    "permission": [
      {
        "name": "driver"
      }
    ],
    "version": "1.0.0",
    "name": "create_vehicle_location_log",
    "group": "VehicleLocationLog",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "record",
            "description": "<p>Record(s) to be inserted into the database.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "record.VehicleId",
            "description": "<p>The vehicle who owns the coordinates.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..100",
            "optional": true,
            "field": "record.DriverName",
            "description": "<p>The name of the driver.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..10",
            "optional": true,
            "field": "record.PlateNumber",
            "description": "<p>The vehicle's plate number that the driver was on.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "size": "-90 to 90",
            "optional": false,
            "field": "record.Lat",
            "description": "<p>Latitude in degrees.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "size": "-180 to 180",
            "optional": false,
            "field": "record.Lng",
            "description": "<p>Longitude in degrees.</p>"
          },
          {
            "group": "Request Body",
            "type": "Date",
            "optional": true,
            "field": "record.RecordedTime",
            "defaultValue": "now",
            "description": "<p>Time when position was acquired in ISO8601 format. Timezone matters (e.g. Z implies UTC).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: Create one",
          "content": "{\n    \"record\": {\n        \"VehicleId\": \"YE0423M\",\n        \"DriverName\": \"John\",\n        \"PlateNumber\": \"YE0423MNum\",\n        \"Lat\": 1.3553794,\n        \"Lng\": 103.5677444,\n        \"RecordedTime\": \"2017-01-01T14:20:39.468Z\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example: Create many",
          "content": "{\n    \"record\": [{\n        \"VehicleId\": \"YE0423M\",\n        \"DriverName\": \"John\",\n        \"PlateNumber\": \"YE0423MNum\",\n        \"Lat\": 1.3553794,\n        \"Lng\": 103.5677444,\n        \"RecordedTime\": \"2017-01-01T14:20:39.468Z\"\n    }, {\n        \"VehicleId\": \"YE5458U\",\n        \"DriverName\": \"Doe\",\n        \"PlateNumber\": \"YE5458UNum\",\n        \"Lat\": 1.3553794,\n        \"Lng\": 103.5677444,\n        \"RecordedTime\": \"2017-01-01T14:20:45.468Z\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "-",
            "description": "<p>Number of inserted records</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: Create one",
          "content": "HTTP/1.1 200 OK\n// One record inserted\n1",
          "type": "json"
        },
        {
          "title": "Success-Response: Create many",
          "content": "HTTP/1.1 200 OK\n// Two records inserted\n2",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/01_VehicleLocationLog-v2.js",
    "groupTitle": "VehicleLocationLog",
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
    "url": "/v1/vehicle/location/last",
    "title": "Get last location of each vehicle",
    "description": "<p>Get the last seen location of each Vehicle from VehicleLocationLog table.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_all_last_vehicle_location_log",
    "group": "VehicleLocationLog",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.",
            "description": "<p>List of VehicleLocationLog instances.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.VehicleId",
            "description": "<p>The vehicle who owns the coordinates.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.DriverName",
            "description": "<p>The name of the driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.PlateNumber",
            "description": "<p>The vehicle's plate number that the driver was on.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.Lat",
            "description": "<p>Latitude in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.Lng",
            "description": "<p>Longitude in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "-.RecordedTime",
            "description": "<p>Time when position was acquired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n[{\n    \"VehicleId\": \"YE0423M\",\n    \"DriverName\": \"John\",\n    \"PlateNumber\": \"YE0423MNum\",\n    \"Lat\": 1.3553794,\n    \"Lng\": 103.5677444,\n    \"RecordedTime\": \"2017-01-01T14:20:39.468Z\"\n}, {\n    \"VehicleId\": \"YE5458U\",\n    \"DriverName\": \"Doe\",\n    \"PlateNumber\": \"YE5458UNum\",\n    \"Lat\": 1.3553794,\n    \"Lng\": 103.5677444,\n    \"RecordedTime\": \"2017-01-01T14:20:45.468Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/01_VehicleLocationLog-v2.js",
    "groupTitle": "VehicleLocationLog",
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
    "url": "/v1/vehicle/location",
    "title": "Get many",
    "description": "<p>Get multiple database instance(s) from VehicleLocationLog table based on where filter.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_all_vehicle_location_log",
    "group": "VehicleLocationLog",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "where",
            "description": "<p>Where conditions for SQL query.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// Get locations that belong to vehicle \"YE0423M\"\n// http://localhost/vrp/rest/v1/vehicle/location?where={\"VehicleId\":\"YE0423M\"}\n{\n    \"where\": {\n        \"VehicleId\": \"YE0423M\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "// Get instances whose driver is either John or Doe\n// http://localhost/vrp/rest/v1/vehicle/location?where={\"DriverName\":[\"John\", \"Doe\"]}\n{\n    \"where\": {\n        \"DriverName\": {\n            $in: [\"John\", \"Doe\"]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.",
            "description": "<p>List of VehicleLocationLog instances.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.VehicleId",
            "description": "<p>The vehicle who owns the coordinates.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.DriverName",
            "description": "<p>The name of the driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.PlateNumber",
            "description": "<p>The vehicle's plate number that the driver was on.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.Lat",
            "description": "<p>Latitude in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.Lng",
            "description": "<p>Longitude in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "-.RecordedTime",
            "description": "<p>Time when position was acquired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n[{\n    \"VehicleId\": \"YE0423M\",\n    \"DriverName\": \"John\",\n    \"PlateNumber\": \"YE0423MNum\",\n    \"Coordinates\": [103.5677444, 1.3553794],\n    \"RecordedTime\": \"2017-01-01T14:20:39.468Z\"\n}, {\n    \"VehicleId\": \"YE5458U\",\n    \"DriverName\": \"Doe\",\n    \"PlateNumber\": \"YE5458UNum\",\n    \"Coordinates\": [103.5677444, 1.3553794],\n    \"RecordedTime\": \"2017-01-01T14:20:39.468Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/01_VehicleLocationLog-v2.js",
    "groupTitle": "VehicleLocationLog",
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
    "url": "/v1/vehicle/:id/location/last",
    "title": "Get last location of one vehicle",
    "description": "<p>Get the last seen location of one Vehicle from VehicleLocationLog table.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_last_vehicle_location_log",
    "group": "VehicleLocationLog",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "VehicleId",
            "description": "<p>The vehicle who owns the coordinates.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DriverName",
            "description": "<p>The name of the driver.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PlateNumber",
            "description": "<p>The vehicle's plate number that the driver was on.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Lat",
            "description": "<p>Latitude in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Lng",
            "description": "<p>Longitude in degrees.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "RecordedTime",
            "description": "<p>Time when position was acquired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// Get LastSeen of VehicleId \"YE0423M\"\n// http://localhost/vrp/rest/v1/vehicle/YE0423M/location/last\n{\n    \"VehicleId\": \"YE0423M\",\n    \"DriverName\": \"John\",\n    \"PlateNumber\": \"YE0423MNum\",\n    \"Lat\": 1.3553794,\n    \"Lng\": 103.5677444,\n    \"RecordedTime\": \"2017-01-01T14:20:39.468Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/01_VehicleLocationLog-v2.js",
    "groupTitle": "VehicleLocationLog",
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
    "type": "post",
    "url": "/v1/vehicle/type",
    "title": "Create",
    "description": "<p>Insert one or many Vehicle Type(s) into VehicleType table.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "create_vehicle_type",
    "group": "VehicleType",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "record",
            "description": "<p>Record(s) to be inserted into the database.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..256",
            "optional": false,
            "field": "record.Name",
            "description": "<p>Vehicle Type's identifier.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "record.Capacity",
            "description": "<p>The total weight that can be carried by the vehicle.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "record.FixedCost",
            "defaultValue": "1",
            "description": "<p>Unit: Dollars. Daily one-time fixed cost of activating a vehicle.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "record.DistanceCost",
            "defaultValue": "1",
            "description": "<p>Unit: Dollars. Cost incurred per meter travelled by vehicle. Suitable for quantifying fuel cost.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "record.TravelTimeCost",
            "defaultValue": "1",
            "description": "<p>Unit: Dollars. Cost incurred per second spent by vehicle travelling.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "record.WaitingTimeCost",
            "defaultValue": "1",
            "description": "<p>Unit: Dollars. Cost incurred per second spent by driver waiting to serve the customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: Create one",
          "content": "{\n    \"record\": {\n        \"Name\": \"Dry\",\n        \"Capacity\": \"[1000,1000]\",\n        \"FixedCost\": 60,\n        \"DistanceCost\": 0.001,\n        \"TravelTimeCost\": 0,\n        \"WaitingTimeCost\": 0.006\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example: Create many",
          "content": "{\n    \"record\": [{\n        \"Name\": \"Dry\",\n        \"Capacity\": \"[1000,1000]\",\n        \"FixedCost\": 60,\n        \"DistanceCost\": 0.001,\n        \"TravelTimeCost\": 0,\n        \"WaitingTimeCost\": 0.006\n    }, {\n        \"Name\": \"Cold\",\n        \"Capacity\": \"1000\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "-",
            "description": "<p>List of primary keys of affected rows</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: Create one",
          "content": "HTTP/1.1 200 OK\n// One record inserted\n[29]",
          "type": "json"
        },
        {
          "title": "Success-Response: Create many",
          "content": "HTTP/1.1 200 OK\n// Two records inserted\n[30, 31]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/02_VehicleType-v2.js",
    "groupTitle": "VehicleType",
    "error": {
      "examples": [
        {
          "title": "Error-Response: 401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n[\"Error message 1\", \"Error message 2\"]",
          "type": "json"
        }
      ],
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of errors.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/v1/vehicle/type/:vehicleTypeId",
    "title": "Delete",
    "description": "<p>Delete one database instance from VehicleType table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "delete_vehicle_type",
    "group": "VehicleType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicleTypeId",
            "description": "<p>Primary key value of instance to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was deleted\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/02_VehicleType-v2.js",
    "groupTitle": "VehicleType",
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
    "url": "/v1/vehicle/type",
    "title": "Get many",
    "description": "<p>Get multiple database instance(s) from VehicleType table based on where filter.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_all_vehicle_type",
    "group": "VehicleType",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "where",
            "description": "<p>Where conditions for SQL query.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// Get vehicle types that have capacity 1000\n// http://localhost/vrp/rest/v1/vehicle/type?where={\"Capacity\":1000}\n{\n    \"where\": {\n        \"Capacity\": \"1000\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.",
            "description": "<p>List of VehicleType instances.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.Id",
            "description": "<p>Primary key value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.Name",
            "description": "<p>Vehicle Type's identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.Capacity",
            "description": "<p>The total weight that can be carried by the vehicle.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.FixedCost",
            "description": "<p>Unit: Dollars. Daily one-time fixed cost of activating a vehicle.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.DistanceCost",
            "description": "<p>Unit: Dollars. Cost incurred per meter travelled by vehicle. Suitable for quantifying fuel cost.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.TravelTimeCost",
            "description": "<p>Unit: Dollars. Cost incurred per second spent by vehicle travelling.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "-.WaitingTimeCost",
            "description": "<p>Unit: Dollars. Cost incurred per second spent by driver waiting to serve the customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n[{\n    \"Id\": 1,\n    \"Name\": \"Dry\",\n    \"Capacity\": \"1000\",\n    \"FixedCost\": 60,\n    \"DistanceCost\": 0.001,\n    \"TravelTimeCost\": 0,\n    \"WaitingTimeCost\": 0.006\n}, {\n    \"Id\": 2,\n    \"Name\": \"Cold\",\n    \"Capacity\": \"1000\",\n    \"FixedCost\": 60,\n    \"DistanceCost\": 0.001,\n    \"TravelTimeCost\": 1,\n    \"WaitingTimeCost\": 0.006\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/02_VehicleType-v2.js",
    "groupTitle": "VehicleType",
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
    "url": "/v1/vehicle/type/:vehicleTypeId",
    "title": "Get one",
    "description": "<p>Get one database instance from VehicleType table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_one_vehicle_type",
    "group": "VehicleType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicleTypeId",
            "description": "<p>Primary key value of instance to find.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Id",
            "description": "<p>Primary key value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Vehicle Type's identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Capacity",
            "description": "<p>The total weight that can be carried by the vehicle.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "FixedCost",
            "description": "<p>Unit: Dollars. Daily one-time fixed cost of activating a vehicle.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "DistanceCost",
            "description": "<p>Unit: Dollars. Cost incurred per meter travelled by vehicle. Suitable for quantifying fuel cost.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "TravelTimeCost",
            "description": "<p>Unit: Dollars. Cost incurred per second spent by vehicle travelling.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "WaitingTimeCost",
            "description": "<p>Unit: Dollars. Cost incurred per second spent by driver waiting to serve the customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/vehicle/type/1\n{\n    \"Id\": 1,\n    \"Name\": \"Dry\",\n    \"Capacity\": \"1000\",\n    \"FixedCost\": 60,\n    \"DistanceCost\": 0.001,\n    \"TravelTimeCost\": 0,\n    \"WaitingTimeCost\": 0.006\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/02_VehicleType-v2.js",
    "groupTitle": "VehicleType",
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
    "url": "/v1/vehicle/type/:vehicleTypeId",
    "title": "Update",
    "description": "<p>Update one database instance in VehicleType table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "update_vehicle_type",
    "group": "VehicleType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicleTypeId",
            "description": "<p>Primary key value of instance to update.</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "newValues",
            "description": "<p>Record(s) to be inserted into the database.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..256",
            "optional": true,
            "field": "newValues.Name",
            "description": "<p>Vehicle Type's identifier.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "newValues.Capacity",
            "description": "<p>The total weight that can be carried by the vehicle.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "newValues.FixedCost",
            "description": "<p>Unit: Dollars. Daily one-time fixed cost of activating a vehicle.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "newValues.DistanceCost",
            "description": "<p>Unit: Dollars. Cost incurred per meter travelled by vehicle. Suitable for quantifying fuel cost.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "newValues.TravelTimeCost",
            "description": "<p>Unit: Dollars. Cost incurred per second spent by vehicle travelling.</p>"
          },
          {
            "group": "Request Body",
            "type": "Float",
            "optional": true,
            "field": "newValues.WaitingTimeCost",
            "description": "<p>Unit: Dollars. Cost incurred per second spent by driver waiting to serve the customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// http://localhost/vrp/rest/v1/vehicle/type/1\n{\n    \"newValues\": {\n        \"Capacity\": \"1002\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was updated\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/02_VehicleType-v2.js",
    "groupTitle": "VehicleType",
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
    "type": "post",
    "url": "/v1/vehicle",
    "title": "Create",
    "description": "<p>Insert one or many Vehicle's information into Vehicle table.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "create_vehicle",
    "group": "Vehicle",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "record",
            "description": "<p>Record(s) to be inserted into the database.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "record.Id",
            "description": "<p>Vehicle's number plate.</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "optional": false,
            "field": "record.VehicleTypeId",
            "description": "<p>Vehicle's type. References to the primary key value from VehicleType table.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..10",
            "optional": true,
            "field": "record.PlateNumber",
            "description": "<p>Vehicle's number plate. Only letters, numbers and dashes are allowed.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "6",
            "optional": false,
            "field": "record.StartAddressPostal",
            "description": "<p>Vehicle's start location.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "6",
            "optional": true,
            "field": "record.EndAddressPostal",
            "defaultValue": "null",
            "description": "<p>Vehicle's end location.</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": true,
            "field": "record.ReturnToEndAddress",
            "defaultValue": "false",
            "description": "<p>Indicates whether the vehicle needs to return to EndAddress after completion of all jobs.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..100",
            "optional": false,
            "field": "record.DriverUsername",
            "description": "<p>Username of the current driver for this vehicle.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "record.StartTime",
            "description": "<p>Start of vehicle operational time in HH:mm 24-hour format. Required if EndTime is specified.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "record.EndTime",
            "description": "<p>End of vehicle operational time in HH:mm 24-hour format. Required if StartTime is specified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: Create one",
          "content": "{\n    \"record\": {\n        \"Id\": \"YE0423M\",\n        \"VehicleTypeId\": 1,\n        \"PlateNumber\": \"YE0423MNum\",\n        \"StartAddressPostal\": \"639588\",\n        \"EndAddressPostal\": \"639588\",\n        \"ReturnToEndAddress\": true,\n        \"DriverUsername\": \"user_john\",\n        \"StartTime\": \"09:00\",\n        \"EndTime\": \"18:00\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example: Create many",
          "content": "{\n    \"record\": [{\n        \"Id\": \"YE0423M\",\n        \"VehicleTypeId\": 1,\n        \"PlateNumber\": \"YE0423MNum\",\n        \"StartAddressPostal\": \"639588\",\n        \"EndAddressPostal\": \"639588\",\n        \"ReturnToEndAddress\": true,\n        \"DriverUsername\": \"user_doe\",\n        \"StartTime\": \"09:00\",\n        \"EndTime\": \"18:00\"\n    }, {\n        \"Id\": \"YE5458U\",\n        \"VehicleTypeId\": 2,\n        \"PlateNumber\": \"YE5458UNum\",\n        \"StartAddressPostal\": \"639588\",\n        \"EndAddressPostal\": \"639588\",\n        \"ReturnToEndAddress\": true,\n        \"DriverUsername\": \"user_john\",\n        \"StartTime\": \"09:00\",\n        \"EndTime\": \"18:00\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "-",
            "description": "<p>List of primary keys of affected rows</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: Create one",
          "content": "HTTP/1.1 200 OK\n// One record inserted\n[\"YE0423M\"]",
          "type": "json"
        },
        {
          "title": "Success-Response: Create many",
          "content": "HTTP/1.1 200 OK\n// Two records inserted\n[\"YE0423M\", \"YE5458U\"]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/03_Vehicle-v2.js",
    "groupTitle": "Vehicle",
    "error": {
      "examples": [
        {
          "title": "Error-Response: 401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response: 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n[\"Error message 1\", \"Error message 2\"]",
          "type": "json"
        }
      ],
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of errors.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/v1/vehicle/:vehicleId",
    "title": "Delete",
    "description": "<p>Delete one database instance from Vehicle table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "delete_vehicle",
    "group": "Vehicle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicleId",
            "description": "<p>Primary key value of instance to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was deleted\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/03_Vehicle-v2.js",
    "groupTitle": "Vehicle",
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
    "url": "/v1/vehicle",
    "title": "Get many",
    "description": "<p>Get multiple database instance(s) from Vehicle table based on where filter.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_all_vehicle",
    "group": "Vehicle",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": true,
            "field": "where",
            "description": "<p>Where conditions for SQL query.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// Get vehicle whose DriverUsername is \"user_john\"\n// http://localhost/vrp/rest/v1/vehicle?where={\"DriverUsername\":\"user_john\"}\n{\n    \"where\": {\n        \"DriverUsername\": \"user_john\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "// Get instances whose StartTime is at 09:00\n// http://localhost/vrp/rest/v1/vehicle?where={\"StartTime\":\"06:00\"}\n{\n    \"where\": {\n        \"StartTime\": \"09:00\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.",
            "description": "<p>List of Vehicle instances.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.Id",
            "description": "<p>Vehicle's number plate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-.VehicleTypeId",
            "description": "<p>Vehicle's type. References to the primary key value from VehicleType table.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.PlateNumber",
            "description": "<p>Vehicle's number plate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.StartAddressPostal",
            "description": "<p>Vehicle's start location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.EndAddressPostal",
            "description": "<p>Vehicle's end location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "-.ReturnToEndAddress",
            "description": "<p>Indicates whether the vehicle needs to return to EndAddressPostal after completion of all jobs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.DriverUsername",
            "description": "<p>Username of the current driver for this vehicle.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.StartTime",
            "description": "<p>Start of vehicle operational time in hh:mm 24 hour format.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.EndTime",
            "description": "<p>End of vehicle operational time in hh:mm 24 hour format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-.VehicleType",
            "description": "<p>Instance from VehicleType table based on VehicleTypeId.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n[{\n    \"Id\": \"YE0423M\",\n    \"VehicleTypeId\": 1,\n    \"PlateNumber\": \"YE0423MNum\",\n    \"StartAddressPostal\": \"639588\",\n    \"EndAddressPostal\": \"639588\",\n    \"ReturnToEndAddress\": true,\n    \"DriverUsername\": \"user_john\",\n    \"StartTime\": \"09:00\",\n    \"EndTime\": \"18:00\",\n    \"VehicleType\": {\n        \"Id\": 1,\n        \"Name\": \"Dry\",\n        \"Capacity\": \"1000\",\n        \"FixedCost\": 60,\n        \"DistanceCost\": 0.001,\n        \"TravelTimeCost\": 0,\n        \"WaitingTimeCost\": 0.006\n    }\n}, {\n    ...\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/03_Vehicle-v2.js",
    "groupTitle": "Vehicle",
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
    "url": "/v1/vehicle/:vehicleId",
    "title": "Get one",
    "description": "<p>Get one database instance from Vehicle table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_one_vehicle",
    "group": "Vehicle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicleId",
            "description": "<p>Primary key value of instance to find.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Vehicle's number plate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "VehicleTypeId",
            "description": "<p>Vehicle's type. References to the primary key value from VehicleType table.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PlateNumber",
            "description": "<p>Vehicle's number plate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "StartAddressPostal",
            "description": "<p>Vehicle's start location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "EndAddressPostal",
            "description": "<p>Vehicle's end location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ReturnToEndAddress",
            "description": "<p>Indicates whether the vehicle needs to return to EndAddressPostal after completion of all jobs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DriverUsername",
            "description": "<p>Username of the current driver for this vehicle.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "StartTime",
            "description": "<p>Start of vehicle operational time in hh:mm 24 hour format.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "EndTime",
            "description": "<p>End of vehicle operational time in hh:mm 24 hour format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "VehicleType",
            "description": "<p>Instance from VehicleType table based on VehicleTypeId.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/vehicle/YE0423M\n{\n    \"Id\": \"YE0423M\",\n    \"VehicleTypeId\": 1,\n    \"PlateNumber\": \"YE0423MNum\",\n    \"StartAddressPostal\": \"639588\",\n    \"EndAddressPostal\": \"639588\",\n    \"ReturnToEndAddress\": true,\n    \"DriverUsername\": \"user_john\",\n    \"StartTime\": \"09:00\",\n    \"EndTime\": \"18:00\",\n    \"VehicleType\": {\n        \"Id\": 1,\n        \"Name\": \"Dry\",\n        \"Capacity\": \"1000\",\n        \"FixedCost\": 60,\n        \"DistanceCost\": 0.001,\n        \"TravelTimeCost\": 0,\n        \"WaitingTimeCost\": 0.006\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/03_Vehicle-v2.js",
    "groupTitle": "Vehicle",
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
    "url": "/v1/vehicle/:vehicleId",
    "title": "Update",
    "description": "<p>Update one database instance in Vehicle table based on primary key.<br> Planner can update any database instance(s).<br> Driver can only update PlateNumber column of the database instance that is associated to his/her username (i.e. DriverUsername column = Driver's username).<br></p>",
    "permission": [
      {
        "name": "planner, driver"
      }
    ],
    "version": "1.0.0",
    "name": "update_vehicle",
    "group": "Vehicle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicleId",
            "description": "<p>Primary key value of instance to update.</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "newValues",
            "description": "<p>New values to overwrite existing record with.</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "optional": true,
            "field": "newValues.VehicleTypeId",
            "description": "<p>Vehicle's type. References to the primary key value from VehicleType table.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..10",
            "optional": true,
            "field": "newValues.PlateNumber",
            "description": "<p>Vehicle's number plate. Only letters, numbers and dashes are allowed.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "6",
            "optional": true,
            "field": "newValues.StartAddressPostal",
            "description": "<p>Vehicle's start location.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "6",
            "optional": true,
            "field": "newValues.EndAddressPostal",
            "description": "<p>Vehicle's end location.</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": true,
            "field": "newValues.ReturnToEndAddress",
            "description": "<p>Indicates whether the vehicle needs to return to EndAddress after completion of all jobs.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "size": "..100",
            "optional": true,
            "field": "newValues.DriverUsername",
            "description": "<p>Username of the current driver for this vehicle.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "newValues.StartTime",
            "description": "<p>Start of vehicle operational time in HH:mm 24-hour format. Required if EndTime is specified.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "newValues.EndTime",
            "description": "<p>End of vehicle operational time in HH:mm 24-hour format. Required if StartTime is specified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// http://localhost/vrp/rest/v1/vehicle/YE0423M\n{\n    \"newValues\": {\n        \"ReturnToEndAddress\": \"false\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was updated\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/03_Vehicle-v2.js",
    "groupTitle": "Vehicle",
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
    "type": "post",
    "url": "/v1/delivery/job/:deliveryDetailId/code",
    "title": "Create one",
    "description": "<p>Insert one instance into VerificationCode table.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "create_verification_code",
    "group": "VerificationCode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of DeliveryDetail instance.</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "record",
            "description": "<p>Record to be inserted into the database.</p>"
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "size": "5",
            "optional": false,
            "field": "record.Code",
            "description": "<p>Code that is used to verify whether the customer is authorised.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/delivery/job/3/code\n{\n    \"record\": {\n        \"Code\": \"12345\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>Primary key of affected row</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n// One record inserted\n\"3\"",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/08_VerificationCode-v2.js",
    "groupTitle": "VerificationCode",
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
    "type": "delete",
    "url": "/v1/delivery/job/:deliveryDetailId/code",
    "title": "Delete",
    "description": "<p>Delete one database instance from VerificationCode table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "delete_verification_code",
    "group": "VerificationCode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of DeliveryDetail instance.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was deleted\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/08_VerificationCode-v2.js",
    "groupTitle": "VerificationCode",
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
    "url": "/v1/delivery/job/:deliveryDetailId/code",
    "title": "Get one",
    "description": "<p>Get database instances from VerificationCode table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "get_verification_code",
    "group": "VerificationCode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of DeliveryDetail instance.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DeliveryDetailId",
            "description": "<p>Primary key value of DeliveryDetail instance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Code",
            "description": "<p>Code that is used to verify whether the customer is authorised.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// http://localhost/vrp/rest/v1/delivery/job/1/code\n{\n    \"DeliveryDetailId\": 1,\n    \"Code\": \"12345\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/08_VerificationCode-v2.js",
    "groupTitle": "VerificationCode",
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
    "type": "post",
    "url": "/v1/delivery/job/:deliveryDetailId/code/notify",
    "title": "Notify",
    "description": "<p>Notify VerificationCode to contact person via Email address specified in DeliveryDetail table.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "notify_verification_code",
    "group": "VerificationCode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of DeliveryDetail instance.</p>"
          }
        ]
      }
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/08_VerificationCode-v2.js",
    "groupTitle": "VerificationCode",
    "success": {
      "examples": [
        {
          "title": "Success-Response: 204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
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
    "url": "/v1/delivery/job/:deliveryDetailId/code",
    "title": "Update",
    "description": "<p>Update database instances in VerificationCode table based on primary key.</p>",
    "permission": [
      {
        "name": "planner"
      }
    ],
    "version": "1.0.0",
    "name": "update_verification_code",
    "group": "VerificationCode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDetailId",
            "description": "<p>Primary key value of DeliveryDetail instance.</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Integer",
            "size": "5",
            "optional": false,
            "field": "newValues.Code",
            "description": "<p>Code that is used to verify whether the customer is authorised.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "// http://localhost/vrp/rest/v1/delivery/job/1/code\n{\n    \"newValues\": {\n        \"Code\": \"54321\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "-",
            "description": "<p>Number of affected rows.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: 200 OK",
          "content": "HTTP/1.1 200 OK\n// One record was updated\n1",
          "type": "json"
        }
      ]
    },
    "filename": "vrp-mct/api/routes-v2/v1-v2/08_VerificationCode-v2.js",
    "groupTitle": "VerificationCode",
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
  }
] });
