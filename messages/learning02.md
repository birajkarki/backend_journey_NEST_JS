Controllers are responsible for handling incoming requests and returning responses to the client.

dto -> data transfer object
validation pipe 
1. Use class-validator to turn the body into an instance of the DTO class
2. Use class-transformer to validate the instance 3. If there are validation error, respond immediately, otherwise provide body to request handler




Inversion of Control Principle
-> Classes should not create instances of its dependancies on its own


Nest Dependency Injection / Injector Container

1. At startup, register all classes with the container
2. Container will figure out what each dependency each class has
3. We then ask the container to create an instance of a class for us
4. Container creates all required dependencies and gives us the instance
5. Container will hold onto the created dependency instances and reuse them of needed 
