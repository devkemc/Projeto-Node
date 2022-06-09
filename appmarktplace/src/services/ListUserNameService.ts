import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";
interface IListUserNameService {
    name: string;
}
class ListUserNameService {
  async execute({name}:IListUserNameService) {

      console.log(name);
      const usersRepository = getCustomRepository(UsersRepositories);

      const user = await usersRepository.findOne({
        name,
      });

      if (!user) {
          throw new Error("Usuario não existe!");
      }

      return classToPlain(user);
           
  }
}

export { ListUserNameService };