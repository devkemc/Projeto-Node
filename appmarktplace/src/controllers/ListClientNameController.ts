import { Request, Response } from "express";
import { ListClientNameService } from "../services/ListClientNameService";

class ListClientNameController {
  async handle(request: Request, response: Response) {
    const listClientNameService = new ListClientNameService();
    const name =  request.params.name;
    const client = await listClientNameService.execute({name});


    return response.json(client);
  }
}

export { ListClientNameController };