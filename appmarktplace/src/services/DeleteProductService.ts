
import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../repositories/ProductRepositories";

interface IProductDelete {
    id: string;
}
class DeleteProductService {
  async execute({id}:IProductDelete) {

      console.log(id);
      const productRepository = getCustomRepository(ProductRepositories);

      const productAlreadyExists = await productRepository.findOne({
        id,
      });

      if (!productAlreadyExists) {
          throw new Error("Produto não existe");
      }

      return await productRepository.delete(id)
            .then(f => {
                console.log(f);
                var messagmsgeDelete = {
                  message:"Registro excluido com sucesso"
                }
            
                return messagmsgeDelete;
                
            }, err => {
              throw new Error("Erro na exclusão");
            });
           
  }
}

export { DeleteProductService };