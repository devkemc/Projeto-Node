import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { Exclude } from "class-transformer";
  import { v4 as uuid } from "uuid";
  
  @Entity("client")
  class Client {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      name!: string;
  
    @Column()
      phone!: number;
  
    @Column()
      email!: string;
  

    @Column()
      password!: string;
      
    @Column()
      cpf!: number;

    @Column()
      andress!: string;
    
    @Column()
      city!: string;

    @Column()
      state!: string;

    @Column()
      district!: string;

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
  
  export { Client };