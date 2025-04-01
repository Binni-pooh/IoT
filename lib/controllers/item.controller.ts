import Controller from '../interfaces/controller.interface';
import {Request, Response, NextFunction, Router} from 'express';

let items: string[] = [];


class ItemController implements Controller {
    public path = '/api/items';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.checkId, this.getItem);
        this.router.put(`${this.path}/:id`, this.checkId, this.changeItem);
        this.router.delete(`${this.path}/:id`, this.checkId, this.deleteItem);
        this.router.get(this.path, this.getItems);
        this.router.post(this.path, this.createItem);
    }

    private getItems = async (request: Request, response: Response) => {
        response.send(items);
    }

    private createItem = async (request: Request, response: Response)=> {
        items.push(request.body.item)
        response.send(items);
    }

    private getItem = async (request: Request, response: Response) => {
        const id = parseInt(request.params.id)
        response.send(items[id]);
    }

    private changeItem = async (request: Request, response: Response)=> {
        const id = parseInt(request.params.id)
        items[id] = request.body.item
        response.send(items[id]);
    }

    private deleteItem = async (request: Request, response: Response) => {
        const id = parseInt(request.params.id)
        items.splice(id, 1);
        response.send(items);
    }

    private checkId= async (request: Request, response: Response, next: NextFunction) => {
        const id = parseInt(request.params.id);

        if (isNaN(id) || id < 0) {
            return response.status(400).send({ error: "Invalid ID" });
        }
        else if (id >= items.length) {
            return response.status(400).send({ error: "Item not found" });
        }

        next();
    }
}

export default ItemController;