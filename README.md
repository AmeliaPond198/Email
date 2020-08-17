# Email

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1 along with and [Angular Material](https://material.angular.io/) version 9.2.4. This project is a News Dashboard based on the Udemy's course, [The Modern Angular Bootcamp course](https://www.udemy.com/course/the-modern-angular-bootcamp/) by [Stephen Grider](https://www.udemy.com/user/sgslo/).  

## Email Server

### Sign Up  
- URL (POST):  
`https://api.angular-email.com/auth/signup` 
- Body:  
`{"username":"Reza", "password":"mypassword", "passwordConfirmation":"mypassword"}`
- Headers:  
`KEY: Content-Type/VALUE: application/json`
### Sign In  
- URL (POST):  
`https://api.angular-email.com/auth/signin` 
- Body:  
`{"username":"Reza", "password":"mypassword"}`
- Headers:  
`KEY: Content-Type/VALUE: application/json`
### Username Check  
- URL (POST):  
`https://api.angular-email.com/auth/username` 
- Body:  
`{"username":"Reza"}`
- Headers:  
`KEY: Content-Type/VALUE: application/json`
### User already signed in Check  
- URL (GET):  
`https://api.angular-email.com/auth/signedin` 
### Sign Out  
- URL (POST):  
`https://api.angular-email.com/auth/signout` 
- Body:  
`{}`
- Headers:  
`KEY: Content-Type/VALUE: application/json`
### Get List of All Emails 
- URL (GET):  
`https://api.angular-email.com/emails`  
### Get an specific Email 
- URL (GET):  
`https://api.angular-email.com/emails/:id`  
### Send an Email 
- URL (POST):  
`https://api.angular-email.com/emails`  
- Body:  
`{"subject":"Reza", "text":"mypassword", "to":"Reza@gmail.com", "from":"me@me.com"}`  