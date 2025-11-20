import express from 'express';
import "reflect-metadata";
import { sequelize } from './config/database';
import shirtController from './controllers/shirtController';
import jeanController from './controllers/jeanController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/shirts', shirtController);
app.use('/api/v1/jeans', jeanController);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
