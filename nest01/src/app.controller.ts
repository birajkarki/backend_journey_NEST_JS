import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get('/sa')
    getRootRoute() {
        return "Hello World!";
    }
}