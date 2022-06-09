
import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";

interface ICategoryRequest {
    name: string;
    description: string;
}

 class CreateCategoryService {
    async execute({ name, description}: ICategoryRequest) {

     
      const categoryRepository = getCustomRepository(CategoryRepositories);
   
      if (!name) {
        throw new Error("Nome Obrigatorio!");
      }
  
      const categoryAlreadyExists = await categoryRepository.findOne({
          name,
      });

      if (categoryAlreadyExists) {
        throw new Error("Categoria ja existe!");
      }
      const category = categoryRepository.create({
        name,
        description
      });
      await categoryRepository.save(category);

      return category;
    }
}
  export { CreateCategoryService };