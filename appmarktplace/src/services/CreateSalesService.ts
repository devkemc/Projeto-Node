import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../repositories/SalesRepositories";
import { ProductRepositories } from "../repositories/ProductRepositories";
import { ClientRepositories } from "../repositories/ClientRepositories";

interface ISalesRequest {
    id_product: string;
    id_client: string;
    quantity: number;
    grossTotal: number;
    discount: number;
    amount: number;
}

 class CreateSalesService {
    async execute({ id_product, id_client, quantity, grossTotal, discount, amount}: ISalesRequest) {
     
        const salesRepository = getCustomRepository(SalesRepositories);
   
      if (!id_product) {
        throw new Error("Produto Obrigatorio!");
      }
      if (!id_client) {
        throw new Error("Cliente Obrigatorio!");
      }
      if (!quantity) {
        throw new Error("Quantidade Obrigatoria!");
      }
      if (!grossTotal) {
        throw new Error("Total bruto Obrigatorio!");
      }
      if (!discount) {
        throw new Error("Desconto Obrigatorio!");
      }
      if (!amount) {
        throw new Error("Valor total Obrigatorio!");
      }
      const productRepository = getCustomRepository(ProductRepositories);
      const productAlreadyExixsts = await productRepository.findOne({
          name:id_product,
      })
      if(productAlreadyExixsts){
          id_product = productAlreadyExixsts.id;
      }else{
        throw new Error("Produto não cadastrado");
      }
      const clientRepository = getCustomRepository(ClientRepositories);
      const clientAlreadyExixsts = await clientRepository.findOne({
          name:id_client,
      })
      if(clientAlreadyExixsts){
         id_client = clientAlreadyExixsts.id;
         console.log(id_client);
      }else{
        throw new Error("Cliente não cadastrado");
      }

      const sales = salesRepository.create({
        id_client,
        id_product,
        quantity,
        grossTotal,
        discount,
        amount
        
      });
      await salesRepository.save(sales);

      return sales;
    }
}
  export { CreateSalesService };