import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";
import { classToPlain } from "class-transformer";
interface IListCategoryNameService {
    name: string;
}
class ListCategoryNameService {
  async execute({name}:IListCategoryNameService) {

      console.log(name);
      const categoryRepository = getCustomRepository(CategoryRepositories);

      const category = await categoryRepository.findOne({
        name,
      });

      if (!category) {
          throw new Error("Categoria não existe!");
      }

      return classToPlain(category);
           
  }
}

export { ListCategoryNameService };