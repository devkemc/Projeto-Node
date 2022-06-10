import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Sales1654831746205 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "sales",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "id_product",
                  type: "uuid",
                },
                {
                  name: "id_client",
                  type: "uuid",
                },
                {
                    name: "quantity",
                    type: "varchar",
                },
                {
                  name: "grossTotal",
                  type: "varchar",
                  
                },
                {
                    name: "discount",
                    type: "varchar",
                    
                },
                {
                    name: "amount",
                    type: "varchar",
                    
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            })
          );
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sales");
    }

}
