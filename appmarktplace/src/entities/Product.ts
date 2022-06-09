import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { Exclude } from "class-transformer";
  import { v4 as uuid } from "uuid";
  
  @Entity("products")
  class Product {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      name!: string;
  
    @Column()
      description!: string;
  
    @Column()
      price!: number;
  
      
    @Column()
      id_category!: string;
  
    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Product };
  