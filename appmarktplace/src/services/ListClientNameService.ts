import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../repositories/ClientRepositories";
import { classToPlain } from "class-transformer";
interface IListClientNameService {
    name: string;
}
class ListClientNameService {
  async execute({name}:IListClientNameService) {

      console.log(name);
      const clientRepository = getCustomRepository(ClientRepositories);

      const client = await clientRepository.findOne({
        name,
      });

      if (!client) {
          throw new Error("Cliente não cadastrado!");
      }

      return classToPlain(client);
           
  }
}

export { ListClientNameService };