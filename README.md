# REST endpoints with Node.js, Express.js and MongoDB

## Installation
### Requirements
- Node.js
- npm or Yarn
- MongoDB

### Steps
Clone the repository on your local machine

Use your package manager to install the dependancies:
```
npm install
```

Launch the server:
```
npm start
```

### Endpoints
Create a contact: POST with form-urlencoded

```
http://localhost:3000/contact
```

Update a contact: PUT with form-urlencoded
```
http://localhost:3000/contact/:contactId
```

Get all contacts: GET
```
http://localhost:3000/contact
```

Get a contact by ID: GET
```
http://localhost:3000/contact/:contactId
```

Delete a contact: DELETE
```
http://localhost:3000/contact/:contactId
```

