/* eslint-disable no-console */
import mongoose from 'mongoose';

class DbConn {
  static async handleDbConn() {
    try {
      mongoose.set('strictQuery', true);
      const dbConn = mongoose.connect(process.env.MONGO_URL);
      console.log('Connected successfull the Mongodb with Mongoose.');
      return dbConn;
    } catch (err) {
      console.log('Error:', err);
      return err;
    }
  }
}

DbConn.handleDbConn().catch((err) => console.log(`Error: ${err}`));

export default mongoose;
