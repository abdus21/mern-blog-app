import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'


mongoose.connect(process.env.MONGO).then(() => {
  console.log('MongoDb is connected');
})
.catch((err) => {
  console.log(err);
});

const app = express()

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})