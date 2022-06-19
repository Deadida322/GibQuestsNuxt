import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import "reflect-metadata";
// import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import * as express from 'express';
import { initRoutes } from "./routes";
// import { accessLog, errorRequestHandler } from "./middleware";
// import { config } from "./entity";
import * as config from 'config';

const port = config.get("port")


AppDataSource.initialize().then(async () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    // app.use(accessLog)
    // register all application routes
    initRoutes(app)

    // app.use(errorRequestHandler);
    
    // run app
    app.listen(port);

    console.log(`Express application is up and running on port ${port}`);


}).catch(error => console.log(error))
