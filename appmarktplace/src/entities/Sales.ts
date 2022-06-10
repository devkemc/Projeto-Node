import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { Exclude } from "class-transformer";
  import { v4 as uuid } from "uuid";
  
  @Entity("sales")
  class Sales {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      id_product!: string;
  
    @Column()
      id_client!: string;
  
    @Column()
      quantity!: number;
  

    @Column()
      grossTotal!: number;
      
    @Column()
      discount!: number;

    @Column()
      amount!: number;

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
  
  export { Sales };