# User API Spec

## Register User API

Endpoint : POST /post/users

request Body : 
```json
{
    "username" : "andika",
    "password" : "rahasia",
    "name" : "Andika Pemana Putra"
}
```


Response Body Success : 

```json
{
    "data" : {
        "username" : "andika",
        "name" : "Andika Permana Putra"
    } 
}
```

Response Body Error : 
```json
{
    "errors": "Username already registered"
}
```
## Login User API

Endpoint : POST api/users/login

```json
{
    "username" : "andika",
    "password"  : "rahasia"
}
```

Response Body Success : 

```json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Error : 

```json
{
    "errors" : "username or password wrong"
}
```
## Update User API

Endpoint : PACTH /api/users/current

Headers : 
- Authorization : Token

Request Body:
```json
{
    "nama" : "andika permana putra", //optional
    "password" : "new-password" //optional
}

```

Response Body Success:

```json
{
    "data" : {
        "username" : "andika",
        "name" : "andika perman putra"
    }
}
```


Response Body Errors : 

```json
{
    "errors" : "Name length max 100"
}

```

## Get User API

Endppoin : GET /api/users/current

Headers : 
- Authorization : Token

Response Body Success:

```json
{
    "data" : {
        "username" : "andika",
        "name" : "andika permana putra"
    }
}
```

Response Body Error : 

```json
{
    errors  : "Unauthorized"
}
```

## Logout User API

Endpoint: DELETE /api/users/logout

Headers : 
- Authorization : Token

Response Body Success : 
```json
{
    "data" : "OK"
}
```

Response Body Error : 

```json
{
    "errors" : "Unauthorized"
}
```