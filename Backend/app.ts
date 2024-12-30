import express from "express";
import router from "./routes/index";
import dbConnect from './dbConnect/index';



const PORT = 3000;
const app = express();
app.use(express.json());

app.use('/api', router);

dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});