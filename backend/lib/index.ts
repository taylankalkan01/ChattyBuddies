import express, { Application,Response } from 'express';
import dotenv from "dotenv"
dotenv.config({
    path: "./.env.local"
  });

const app:Application = express();
app.use(express.json());

app.get('/', (_, res:Response) => {
    res.send('Chatty Buddies!');
})


const PORT= process.env.APP_PORT
app.listen(PORT, async() => {
    console.log(`The application is listening on port ${PORT}!`);
    
})