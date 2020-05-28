import mongoose from 'mongoose';
import { mongodb } from './keys';

const options = {
  user: mongodb.user,
  pass: mongodb.pass,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(mongodb.uri, options, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('connected...');
  }
});
