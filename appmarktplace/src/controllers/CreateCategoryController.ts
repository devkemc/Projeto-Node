import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

class CreateCategoryController {

    async handle(request: Request, response: Response) {
      const { name, description} = request.body;
  
      const createUserService = new CreateCategoryService();
  
      const category = await createUserService.execute({
        name,
        description
      });
  
      return response.json(category);
    }
  }
  
  export { CreateCategoryController };