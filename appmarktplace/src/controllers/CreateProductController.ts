import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController {

    async handle(request: Request, response: Response) {
      const { name, description, price, id_category} = request.body;
  
      const createProductService = new CreateProductService();
  
      const product = await createProductService.execute({
        name,
        description,
        price,
        id_category
      });
  
      return response.json(product);
    }
  }
  
  export { CreateProductController };