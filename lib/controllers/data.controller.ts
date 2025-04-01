import Controller from '../interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';
import DataService from '../modules/services/data.service';
import { IData } from '../modules/models/data.model';

class DataController implements Controller {
    public path = '/api/data';
    public router = Router();
    private dataService = new DataService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/get`, this.getAll);
        this.router.post(`${this.path}/add`, this.create);
        this.router.delete(`${this.path}/:id`, this.delete)
    }

    private getAll = async (request: Request, response: Response) => {
        response.send(this.dataService.getAll());
    }

    private create = async (request: Request, response: Response) => {
        response.status(201).send(this.dataService.create(request.body));
    }

    private delete = async (request: Request, response: Response) => {
        const id = request.params.id
        response.status(200).send(this.dataService.delete(id));
    }
}

export default DataController;