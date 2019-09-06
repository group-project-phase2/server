Recipes Finder By Savero, Ricardo & Candra

===

## Usage
on server
```javascript
$ npm install
$ npm run dev
```
on client 
```
$live-server
```

API End Point
```
http://localhost:3000
```

## User Routes
|Routes|HTTP|Header(s)|Body|Response|Description| 
|:--:|:--:|:--:|:--:|:--:|:--:|
|/users/register  |POST  |none|username: String (**required**), email: String (**required**),  password: String (**required**)|**Success**: Register a user, **Error**: Internal server error (Validation)|Register a user|
|/users/login  |POST  |none|email: String (**required**),  password: String (**required**)|**Success**: Login as a user, **Error**: Internal server error (Wrong e-mail/password)|Login as a user|
|/users/Gsignin  |POST  |none|email: String (**required**),  password: String (**required**)|**Success**: Login as a user (**via Google**), **Error**: Internal server error (Wrong e-mail/password)|Login as a user (**via Google**)|



## food Routes

|Routes|HTTP|Header(s)|Body|Response|Description| 
|:--:|:--:|:--:|:--:|:--:|:--:|
|/foods/recipe/:id  |GET  |token|None|**Success**: Get all recipes about food, **Error**: 404 (Data not found)|Get all food recipes|
|/foods/nutrition  |POST  |token|ingr: Array (**required**)|**Success**: fetch food nutrition  **Error**: 404(data not found) |Get All food nutrition|


