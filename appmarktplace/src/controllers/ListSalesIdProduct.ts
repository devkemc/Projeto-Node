import { Request, Response } from "express";
import { ListSalesIdProductService } from "../services/ListSalesIdProductService";

class ListSalesIdProductController {
  async handle(request: Request, response: Response) {
    const listSalesIdProductService = new ListSalesIdProductService();
    const id_product =  request.params.id_product;
    const sales = await listSalesIdProductService.execute({id_product});


    return response.json(sales);
  }
}

export { ListSalesIdProductController };