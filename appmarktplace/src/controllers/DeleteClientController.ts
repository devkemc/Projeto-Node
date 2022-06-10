import { Request, Response } from "express";
import { DeleteClientService } from "../services/DeleteClientService";

class DeleteClientController {
  async handle(request: Request, response: Response) {
    const deleteClientService = new DeleteClientService();
    const id= request.params.id;
    const client = await deleteClientService.execute({id});

    return response.json(client);
  }
}

export { DeleteClientController };