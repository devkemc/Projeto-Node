import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../repositories/ProductRepositories";
import { classToPlain } from "class-transformer";
interface IListProductNameService {
    name: string;
}
class ListProductNameService {
  async execute({name}:IListProductNameService) {

      console.log(name);
      const productRepository = getCustomRepository(ProductRepositories);

      const product = await productRepository.findOne({
        name,
      });

      if (!product) {
          throw new Error("Não existe prodto com esse nome!");
      }

      return classToPlain(product);
           
  }
}

export { ListProductNameService };