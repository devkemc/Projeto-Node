import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";
interface IListUserIdService {
    id: string;
}
class ListUserIdService {
  async execute({id}:IListUserIdService) {

      console.log(id);
      const usersRepository = getCustomRepository(UsersRepositories);

      const user = await usersRepository.findOne({
        id,
      });

      if (!user) {
          throw new Error("Usuario não existe");
      }

      return classToPlain(user);
           
  }
}

export { ListUserIdService };