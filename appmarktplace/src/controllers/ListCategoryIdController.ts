import { Request, Response } from "express";
import { ListCategoryIdService } from "../services/ListCategoryIdService";

class ListCategoryIdController {
  async handle(request: Request, response: Response) {
    const listCategoryIdService = new ListCategoryIdService();
    const id =  request.params.id;
    const category = await listCategoryIdService.execute({id});


    return response.json(category);
  }
}

export { ListCategoryIdController };