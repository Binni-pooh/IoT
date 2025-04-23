import * as process from "node:process";

export const config = {
    port: process.env.PORT || 3100,
    databaseUrl: process.env.MONGODB_URI || "mongodb+srv://@aplikacjewebowe.sn3jxxw.mongodb.net/IoT?retryWrites=true&w=majority&appName=AplikacjeWebowe"
};
