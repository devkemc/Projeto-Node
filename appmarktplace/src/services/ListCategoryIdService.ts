import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";
import { classToPlain } from "class-transformer";
interface IListCategoryIdService {
    id: string;
}
class ListCategoryIdService {
  async execute({id}:IListCategoryIdService) {

      console.log(id);
      const categoryRepository = getCustomRepository(CategoryRepositories);

      const category = await categoryRepository.findOne({
        id,
      });

      if (!category) {
          throw new Error("Categoria não existe!");
      }

      return classToPlain(category);
           
  }
}

export { ListCategoryIdService };