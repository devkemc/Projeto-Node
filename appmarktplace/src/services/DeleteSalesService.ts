import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../repositories/SalesRepositories";

interface ISalesDelete {
    id: string;
}
class DeleteSalesService {
  async execute({id}:ISalesDelete) {

      const salesRepository = getCustomRepository(SalesRepositories);

      const salesAlreadyExists = await salesRepository.findOne({
        id,
      });

      if (!salesAlreadyExists) {
          throw new Error("Venda não existe");
      }

      return await salesRepository.delete(id)
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

export { DeleteSalesService };