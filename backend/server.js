import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/usersRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config();

const port = process.env.PORT || 5000;
// const port = process.env.PORT 

const app = express()
app.use(express.json())

app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});