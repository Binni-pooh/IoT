import App from './app';
import IndexController from "./controllers/index.controller";
import ItemController from "./controllers/item.controller";
import DataController from "./controllers/data.controller";
import SocketController from "./controllers/socket.controller";

const app: App = new App([]);

const controllers = [
    new DataController(),
    new ItemController(),
    new SocketController(app.getIo()),
    new IndexController()
];

controllers.forEach((controller) => {
    app.app.use("/", controller.router);
});

app.listen();