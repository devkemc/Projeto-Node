import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../repositories/ClientRepositories";
import { classToPlain } from "class-transformer";
interface IListClientCpfService {
    id: string;
}
class ListClientIdService {
  async execute({id}:IListClientCpfService) {

      
      const clientRepository = getCustomRepository(ClientRepositories);

      const client = await clientRepository.findOne({
        id,
      });

      if (!client) {
          throw new Error("Cliente não cadastrado!");
      }

      return classToPlain(client);
           
  }
}

export { ListClientIdService };
