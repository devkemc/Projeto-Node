import { Request, Response } from "express";
import { CreateSalesService } from "../services/CreateSalesService";

class CreateSalesController {

    async handle(request: Request, response: Response) {
      const { id_product, id_client, quantity, grossTotal, discount, amount } = request.body;
  
      const createSalesService = new CreateSalesService();
  
      const sales = await createSalesService.execute({
        id_product,
        id_client,
        quantity,
        grossTotal,
        discount,
        amount
      });
  
      return response.json(sales);
    }
  }
  
  export { CreateSalesController };