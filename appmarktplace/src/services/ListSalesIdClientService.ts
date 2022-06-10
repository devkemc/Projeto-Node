import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../repositories/SalesRepositories";
import { classToPlain } from "class-transformer";
interface IListSalesIdClientService {
    id_client: string;
}
class ListSalesIdClientService {
  async execute({id_client}:IListSalesIdClientService) {

    console.log(id_client);

      const salesRepository = getCustomRepository(SalesRepositories);

      const sales = await salesRepository.find({
        id_client,
      });

      if (!sales) {
          throw new Error("Não existe vendas desse produto!");
      }

      return classToPlain(sales);
           
  }
}

export { ListSalesIdClientService };