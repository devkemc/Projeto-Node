import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";
import { ProductRepositories } from "../repositories/ProductRepositories";

interface IProductRequest {
    name: string;
    description: string;
    price: number;
    id_category: string;
}

 class CreateProductService {
    async execute({ name, description, price, id_category}: IProductRequest) {

     const productRepository = getCustomRepository(ProductRepositories);
      
   
      if (!name) {
        throw new Error("Nome Obrigatorio!");
      }
      if (!description) {
        throw new Error("Descrição Obrigatoria!");
      }
      if (!price) {
        throw new Error("Preço Obrigatorio!");
      }

      const productAlreadyExixsts = await productRepository.findOne({
          name,
      })
      if(productAlreadyExixsts){
          throw new Error("Produto ja cadastrado");
      }
      const categoryRepository = getCustomRepository(CategoryRepositories);
      const categoryAlreadyExists = await categoryRepository.findOne({
          name : id_category,
          });
      
      if (categoryAlreadyExists) {
            id_category = categoryAlreadyExists.id;
      }else{
        throw new Error("Categoria não existe!");
      }
      const product = productRepository.create({
        name,
        description,
        price,
        id_category
        
      });
      await productRepository.save(product);

      return product;
    }
}
  export { CreateProductService };