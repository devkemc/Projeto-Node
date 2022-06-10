import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../repositories/ClientRepositories";
import { classToPlain } from "class-transformer";
interface IListClientAndressService {
    andress: string;
    
}
class ListClientAndressService {
  async execute({andress}:IListClientAndressService) {

      const clientRepository = getCustomRepository(ClientRepositories);

      const client = await clientRepository.findOne({
        andress,
      });

      if (!client) {
          throw new Error("Cliente não cadastrado!");
      }

      return classToPlain(client);
           
  }
}

export { ListClientAndressService };