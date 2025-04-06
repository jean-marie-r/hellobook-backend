import { Controller, Get } from '@nestjs/common';
import { HttpResponse } from 'src/application/http/http-response';

@Controller('/status')
export class UsersController {
    constructor() {}

    @Get()
    async getStatus(): Promise<HttpResponse<{ status: string }>> {
        return HttpResponse.success({ status: "All Systems Operational" });
    }
}
