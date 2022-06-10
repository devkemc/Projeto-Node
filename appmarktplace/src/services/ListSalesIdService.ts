import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../repositories/SalesRepositories";
import { classToPlain } from "class-transformer";
interface IListSalesIdService {
    id: string;
}
class ListSalesIdService {
  async execute({id}:IListSalesIdService) {

      const salesRepository = getCustomRepository(SalesRepositories);

      const sales = await salesRepository.findOne({
        id,
      });

      if (!sales) {
          throw new Error("Não existe esta venda!");
      }

      return classToPlain(sales);
           
  }
}

export { ListSalesIdService };