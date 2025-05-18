import express from 'express';
import "dotenv/config.js";
import goals from './routes/goalRoutes.js';
import users from './routes/userRoutes.js';
import errorHandler  from './middleware/error.js';
import logger from './middleware/logger.js';
import { connectDB } from './config/db.js'; 
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




connectDB();
const port = process.env.PORT || 8000;

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger);

app.use('/api/goals',goals);
app.use('/api/users',users);
app.get('/ping', (req, res) => {
    res.send('pong');
  });

if(process.env.NODE_ENV === 'production'){
    console.log('Serving static from:', path.join(__dirname, '../frontend/dist'));
console.log('NODE_ENV:', process.env.NODE_ENV);

    app.use(express.static(path.join(__dirname,'../frontend/dist')));
    app.get('/*splat', (req, res) =>
        res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'))
    );
}
else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }



app.use(errorHandler);


app.listen(port,()=>{console.log('server started')});