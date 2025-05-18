import express from 'express';
import "dotenv/config.js";
import goals from './routes/goalRoutes.js';
import users from './routes/userRoutes.js';
import errorHandler  from './middleware/error.js';
import logger from './middleware/logger.js';
import { connectDB } from './config/db.js'; 

connectDB();
const port = process.env.PORT || 8000;

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger);

app.use('/api/goals',goals);
app.use('/api/users',users);
app.use(errorHandler);


app.listen(port,()=>{console.log('server started')});