import { Request, Response } from "express";
import { ListClientIdService} from "../services/ListClientIdService";

class ListClientIdController {
  async handle(request: Request, response: Response) {
    const listClientCpfService = new ListClientIdService();
    const id =  request.params.id;
    const client = await listClientCpfService.execute({id});


    return response.json(client);
  }
}

export { ListClientIdController };