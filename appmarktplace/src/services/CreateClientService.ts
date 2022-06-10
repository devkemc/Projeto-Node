import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../repositories/ClientRepositories";


interface IClientRequest {
    name: string;
    phone: number;
    email: string;
    password: string;
    cpf: number;
    andress: string;
    city: string;
    state:string
    district: string;
}

 class CreateClientService {
    async execute({ name, phone, email, password, cpf, andress, city, state, district}: IClientRequest) {

     const clientRepository = getCustomRepository(ClientRepositories);
      
   
      if (!name) {
        throw new Error("Nome Obrigatorio!");
      }
      if (!password) {
        throw new Error("Senha Obrigatoria!");
      }
      if (!cpf) {
        throw new Error("CPF Obrigatorio!");
      }

      const clientAlreadyExixsts = await clientRepository.findOne({
          cpf,
      })
      if(clientAlreadyExixsts){
          throw new Error("Cliente ja cadastrado");
      }

   
      const client = clientRepository.create({
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
      await clientRepository.save(client);

      return client;
    }
}
  export { CreateClientService };