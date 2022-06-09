import { Request, Response } from "express";
import { ListUserIdService } from "../services/ListUserIdService";

class ListUserIdController {
  async handle(request: Request, response: Response) {
    const listUserIdService = new ListUserIdService();
    const id =  request.params.id;
    const users = await listUserIdService.execute({id});


    return response.json(users);
  }
}

export { ListUserIdController };