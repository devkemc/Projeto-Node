import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../repositories/SalesRepositories";
import { classToPlain } from "class-transformer";
interface IListSalesIdProductService {
    id_product: string;
}
class ListSalesIdProductService {
  async execute({id_product}:IListSalesIdProductService) {

    console.log(id_product);

      const salesRepository = getCustomRepository(SalesRepositories);

      const sales = await salesRepository.find({
        id_product,
      });

      if (!sales) {
          throw new Error("Não existe vendas desse produto!");
      }

      return classToPlain(sales);
           
  }
}

export { ListSalesIdProductService };