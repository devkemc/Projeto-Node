import { Request, Response } from "express";
import { ListCategoryNameService } from "../services/ListCategoryNameService";

class ListCategoryNameController {
  async handle(request: Request, response: Response) {
    const listCategoryNameService = new ListCategoryNameService();
    const name =  request.params.name;
    const category = await listCategoryNameService.execute({name});


    return response.json(category);
  }
}

export { ListCategoryNameController };