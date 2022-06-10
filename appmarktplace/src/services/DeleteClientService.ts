
import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../repositories/ClientRepositories";

interface IClientDelete {
    id: string;
}
class DeleteClientService {
  async execute({id}:IClientDelete) {

      console.log(id);
      const clientRepository = getCustomRepository(ClientRepositories);

      const clientAlreadyExists = await clientRepository.findOne({
        id,
      });

      if (!clientAlreadyExists) {
          throw new Error("Cliente não cadastrado");
      }

      return await clientRepository.delete(id)
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

export { DeleteClientService };