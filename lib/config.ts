import * as process from "node:process";

export const config = {
    port: process.env.PORT || 3100,
    socketPort: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_URI || "mongodb+srv://maxc0766:FfeG6QvQSIyHH7SS@aplikacjewebowe.sn3jxxw.mongodb.net/?retryWrites=true&w=majority"
};