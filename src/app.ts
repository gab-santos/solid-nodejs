import express from "express";
import router from "./routes";

class AppController {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {}

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(router);
  }
}

export default new AppController().app;
