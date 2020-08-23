import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { ProstgresUsersRepository } from "../../repositories/implementations/ProstgresUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const prostgresUsersRepository = new ProstgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUserCase = new CreateUserUseCase(
  prostgresUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUserCase);

export { createUserUserCase, createUserController };
