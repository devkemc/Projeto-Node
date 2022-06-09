import {MigrationInterface, QueryRunner, Table } from "typeorm";


export class CreateProducts1647557194826 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
              name: "products",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "description",
                  type: "varchar",
                }, {
                  name: "price",
                  type: "varchar",
                },
                {
                  name: "id_category",
                  type: "uuid",
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
        await queryRunner.dropDatabase("products");
    }

}
