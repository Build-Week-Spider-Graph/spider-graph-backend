# Spider Graph - Backend Documentation

This is a full list of the endpoints needed to connect to the Spider Graph API.

This file is subject to change, and as such **should be checked from time to time**.

## Base Url

`https://spider-graph-backend.herokuapp.com`

## Authentication

- When logging in, an Authorization token is generated that contains the encoded `CLIENT_ID` and `CLIENT_SECRET` that match the server. Authorization must then be sent containing this information via the Request Header in order to gain access to restricted areas.

## Login and Registration

### Register

**To add a new user, you must have _no authentication token_ in your server request.**
- As a result of this, a new user will not be automatically logged in (This may change in the future), and instead should be routed to the Login page.

**POST** to `/api/auth/register`

**Request Body**
```
{
    "username": "Jane123",
	"password": "secret",
	"firstname": "Jane",
	"lastname": "Doe",
	"email": "janedoe@mail.com"
}
```

### Login

**To add a new user, an _authentication token must be_ in your server request.**
- A token will then be generated and given to the user, granting access to previously restricted areas.

**POST** to `/api/auth/login`

**Request Body**
```
{
    "username": "Jane123",
	"password": "secret"
}
```

## Graph Data

### GET all Graph Data

**GET** to `/api/graphs`

- Responds with graph data from all users.

### GET Graph Data by user

**In Progress**

- Responds with graph data from the user alone.

### GET Graph Data by graph id

**GET** to `/api/graphs/:graphId`

- Responds with graph data from one graph only, the one belonging to that id.

### GET Area Data by graph id

**GET** to `/api/graphs/:graphId/areas`

- Responds with area data from one graph only, the one belonging to that id.

### GET single Area Data by graph and area id

**GET** to `/api/graphs/:graphId/areas/:areaId`

- Responds with area data from one area of one graph only, the one belonging to that id.

### GET Point Data by graph and area id

**GET** to `/api/graphs/:graphId/areas/:areaId/points`

- Responds with point data from one area of one graph only, the one belonging to that id.

### POST Graph Data

**POST** to `/api/graphs`

- Adds Graph data to the DB.

```
{
  "id": 8,
  "title": "New Graph",
  "user_id": 1
}
```

### POST Area Data

**POST** to `/api/graphs/:graphId/areas/`

- Adds Area data to one graph in the DB.

```
 {
    "id": 3,
    "title": "New Graph",
    "color": null,
    "graph_id": 8
  }
```

### POST Point Data

**POST** to `/api/graphs/:graphId/areas/:areaId/points`

- Adds Point data to one Area on a graph in the DB.

```
 {
    "id": 2,
    "label": "New Label",
    "order_position": 1,
    "area_id": 5
  }
```

### PUT Graph Data by graph id

**PUT** to `/api/graphs/:graphId`

- Updates graph data from one graph in the DB.

```
{
   "title": "New Graph"
}
```

### PUT Area Data by graph id

**PUT** to `/:graphId/areas/:areaId`

- Updates Area data from one graph in the DB.

```
 {
    "id": 3,
    "title": "New Graph",
    "color": null,
    "graph_id": 8
  }
```

### PUT Point Data by Area id

**PUT** to `/api/graphs/:graphId/areas/:areaId/points/:pointId`

- Updates Point data to one Area on a graph in the DB.

```
 {
    "id": 2,
    "label": "New Label",
    "order_position": 1,
    "area_id": 5
  }
```

### DELETE Graph Data by graph id

**Work in progress** 


