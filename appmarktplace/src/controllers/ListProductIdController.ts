import { Request, Response } from "express";
import { ListProductIdService } from "../services/ListProductIdService";

class ListProductIdController {
  async handle(request: Request, response: Response) {
    const listProductIdService = new ListProductIdService();
    const id =  request.params.id;
    const product = await listProductIdService.execute({id});


    return response.json(product);
  }
}

export { ListProductIdController };