import * as dotenv from 'dotenv';

dotenv.config();

export const mongodb = {
  uri: `mongodb://${process.env.MONGODB_URL_PORT}/${process.env.MONGODB_DATABASE}`,
  user: process.env.MONGODB_USERNAME,
  pass: process.env.MONGODB_PASSWORD,
};
