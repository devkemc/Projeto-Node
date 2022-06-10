import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { ListUserIdController } from "./controllers/ListUserIdController";
import { AuthenticateUserController} from "./controllers/AuthenticateUserController";
import { ListUserNameController } from "./controllers/ListUserNameController";
import { ensureAdmin} from "./middlewares/ensureAdmin";
import { ensureAuthenticated} from "./middlewares/ensureAuthenticated";

import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { ListCategoryNameController } from "./controllers/ListCategoryNameController";
import { ListCategoryIdController } from "./controllers/ListCategoryIdController";

import { CreateProductController } from "./controllers/CreateProductController";
import { ListProductIdController } from "./controllers/ListProductIdController";
import { ListProductNameController } from "./controllers/ListProductNameController";
import { DeleteProductController } from "./controllers/DeleteProductController";

import { CreateClientController } from "./controllers/CreateClientController";
import { ListClientNameController } from "./controllers/ListClientNameController";
import { ListClientIdController } from "./controllers/ListClientIdController";
import { ListClientAndressController } from "./controllers/ListClientAndressController";
import { DeleteClientController } from "./controllers/DeleteClientController";

import { CreateSalesController } from "./controllers/CreateSalesController";
import { ListSalesIdController } from "./controllers/ListSalesIdController";
import { ListSalesIdProductController } from "./controllers/ListSalesIdProduct";
import { ListSalesIdClientController } from "./controllers/ListSalesIdClientController"
import { DeleteSalesController } from "./controllers/DeleteSalesController";

//user
const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const listUserIdController = new ListUserIdController()
const listUserNameController = new ListUserNameController();
const deleteUserController  = new DeleteUserController();
const updateUserController  = new UpdateUserController();
const autenticationUserController  = new AuthenticateUserController();

//category
const createCategoryController = new CreateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const listCategoryNameController = new ListCategoryNameController();
const listCategoryIdController = new ListCategoryIdController();

//product
const createProductController = new CreateProductController();
const listProductIdController = new ListProductIdController();
const listProductNameController = new ListProductNameController();
const deleteProductController = new DeleteProductController();

//client
const createClientController = new CreateClientController();
const listClientNameController = new ListClientNameController();
const listClientIdController = new ListClientIdController();
const listClientAndressController = new ListClientAndressController();
const deleteClientController = new DeleteClientController();

//sales
const createSalesController = new CreateSalesController();
const listSalesIdController = new ListSalesIdController();
const listSalesIdProductController = new ListSalesIdProductController();
const listSalesIdClientController = new ListSalesIdClientController();
const deleteSalesController = new DeleteSalesController();

const router = Router();
//user
router.post("/users", createUserController.handle);
router.post("/login", autenticationUserController.handle);
router.use(ensureAuthenticated)//autenticação (precisa estar logado)
router.put("/users", updateUserController.handle);
router.use(ensureAdmin)//autenticação (precisa ser admin)
router.delete("/users/:id", deleteUserController.handle);
router.get("/users", listUsersController.handle);
router.get("/users/listarName/:name", listUserNameController.handle);
router.get("/users/listarId/:id", listUserIdController.handle);
//category
router.post("/category", createCategoryController.handle);
router.delete("/category/:id", deleteCategoryController.handle);
router.get("/category/listarName/:name", listCategoryNameController.handle);
router.get("/category/listarId/:id", listCategoryIdController.handle);
//product
router.post("/product", createProductController.handle);
router.get("/product/listarName/:name", listProductNameController.handle);
router.get("/product/listarId/:id", listProductIdController.handle);
router.delete("/product/:id", deleteProductController.handle);
//client
router.post("/client", createClientController.handle);
router.get("/client/listarName/:name", listClientNameController.handle);
router.get("/client/listaId/:id", listClientIdController.handle);
router.get("/client/listarAndress/:andress", listClientAndressController.handle);
router.delete("/client/:id", deleteClientController.handle);
//sales
router.post("/sales", createSalesController.handle);
router.get("/sales/listarId/:id", listSalesIdController.handle);
router.get("/sales/listarIdProduct/:id_product", listSalesIdProductController.handle);
router.get("/sales/listarIdClient/:id_client", listSalesIdClientController.handle);
router.delete("/sales/:id", deleteSalesController.handle);


export {router}