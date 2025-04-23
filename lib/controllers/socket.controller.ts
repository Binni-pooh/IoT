import Controller from '../interfaces/controller.interface';
import {Request, Response, NextFunction, Router} from 'express';
import path from 'path';
import { Server, Socket } from "socket.io";

class SocketController implements Controller {
    public path = '/socket';
    public router = Router();
    private io: Server;

    constructor(io: Server) {
        this.io = io;
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path + '/emit', this.emitReading);
        this.router.post(this.path, this.emitData);
    }

    private emitReading = async (request: Request, response: Response, next: NextFunction) => {
        try {
            setInterval(() => this.io.emit('measurement', {"temperature": "24.9",
                "pressure": "995.9",
                "humidity": "43.6",
                "deviceId": "10"}), 3000);
            //this.io.emit("message", 'nowy pomiar');
            response.status(200).json({ res: "ok" });
        } catch (error) {
            console.error("Błąd podczas emisji danych:", error);
            response.status(500).json({ error: "Błąd serwera" });
        }
    };

    private emitData = async (request: Request, response: Response, next: NextFunction) => {
        try {
            this.io.emit('measurement', request.body)
            response.status(200).json({ res: "ok" });
        } catch (error) {
            console.error("Błąd podczas emisji danych:", error);
            response.status(500).json({ error: "Błąd serwera" });
        }
    }
}

export default SocketController;