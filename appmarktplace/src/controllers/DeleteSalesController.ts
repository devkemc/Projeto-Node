import { Request, Response } from "express";
import { DeleteSalesService } from "../services/DeleteSalesService";

class DeleteSalesController {
  async handle(request: Request, response: Response) {
    const deleteSalesService = new DeleteSalesService();
    const id= request.params.id;
    const users = await deleteSalesService.execute({id});

    return response.json(users);
  }
}

export { DeleteSalesController };