import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../repositories/ProductRepositories";
import { classToPlain } from "class-transformer";
interface IListProductIdService {
    id: string;
}
class ListProductIdService {
  async execute({id}:IListProductIdService) {

      console.log(id);
      const productRepository = getCustomRepository(ProductRepositories);

      const product = await productRepository.findOne({
        id,
      });

      if (!product) {
          throw new Error("Não existe produto com este ID");
      }

      return classToPlain(product);
           
  }
}

export { ListProductIdService };