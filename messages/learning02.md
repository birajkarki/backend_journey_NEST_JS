Controllers are responsible for handling incoming requests and returning responses to the client.

dto -> data transfer object
validation pipe 
1. Use class-validator to turn the body into an instance of the DTO class
2. Use class-transformer to validate the instance 3. If there are validation error, respond immediately, otherwise provide body to request handler