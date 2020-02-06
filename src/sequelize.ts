import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const env_variables = config.prod;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": env_variables.username,
  "password": env_variables.password,
  "database": env_variables.database,
  "host":     env_variables.host,

  dialect: 'postgres',
  storage: ':memory:',
});

