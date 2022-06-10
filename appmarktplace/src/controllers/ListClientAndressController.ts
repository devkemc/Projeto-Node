import { Request, Response } from "express";
import { ListClientAndressService } from "../services/ListClientAndressService";

class ListClientAndressController {
  async handle(request: Request, response: Response) {
    const listClientAndressService = new ListClientAndressService();
    const andress =  request.params.andress;
    const client = await listClientAndressService.execute({andress});


    return response.json(client);
  }
}

export { ListClientAndressController };