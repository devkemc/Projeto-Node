import { Request, Response } from "express";
import { ListSalesIdService } from "../services/ListSalesIdService";

class ListSalesIdController {
  async handle(request: Request, response: Response) {
    const listSalesIdService = new ListSalesIdService();
    const id =  request.params.id;
    const sales = await listSalesIdService.execute({id});


    return response.json(sales);
  }
}

export { ListSalesIdController };