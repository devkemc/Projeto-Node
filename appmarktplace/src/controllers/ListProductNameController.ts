import { Request, Response } from "express";
import { ListProductNameService } from "../services/ListProductNameService";

class ListProductNameController {
  async handle(request: Request, response: Response) {
    const listProductNameService = new ListProductNameService();
    const name =  request.params.name;
    const product = await listProductNameService.execute({name});


    return response.json(product);
  }
}

export { ListProductNameController };