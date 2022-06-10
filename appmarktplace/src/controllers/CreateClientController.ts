import { Request, Response } from "express";
import { CreateClientService } from "../services/CreateClientService";

class CreateClientController {

    async handle(request: Request, response: Response) {
      const { name, phone, email, password, cpf, andress, city, state, district} = request.body;
  
      const createClientService = new CreateClientService();
  
      const client = await createClientService.execute({
        name,
        phone,
        email,
        password,
        cpf,
        andress,
        city,
        state,
        district
      });
  
      return response.json(client);
    }
  }
  
  export { CreateClientController };