import express, { Express } from "express";
import { Server } from "http";
import {LoggerService} from "./logger/logger.service";

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: LoggerService

    constructor(logger: LoggerService) {
        this.app = express();
        this.port = 8000;
        this.logger = logger
    }

    useRoutes() {}

    public async init() {
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`The server starts on http://localhost:${this.port}`);
    }
}