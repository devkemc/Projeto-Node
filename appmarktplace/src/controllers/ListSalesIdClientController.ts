import { Request, Response } from "express";
import { ListSalesIdClientService } from "../services/ListSalesIdClientService";

class ListSalesIdClientController {
  async handle(request: Request, response: Response) {
    const listSalesIdClientService = new ListSalesIdClientService();
    const id_client =  request.params.id_client;
    const sales = await listSalesIdClientService.execute({id_client});


    return response.json(sales);
  }
}

export { ListSalesIdClientController };