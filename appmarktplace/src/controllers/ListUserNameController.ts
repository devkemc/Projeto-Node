import { Request, Response } from "express";
import { ListUserNameService } from "../services/ListUserNameService";

class ListUserNameController {
  async handle(request: Request, response: Response) {
    const listUserIdService = new ListUserNameService();
    const name =  request.params.name;
    const users = await listUserIdService.execute({name});


    return response.json(users);
  }
}

export { ListUserNameController };