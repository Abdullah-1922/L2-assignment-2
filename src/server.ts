import connectDB from "./DB";
import app from "./app";
import config from "./app/config";

connectDB()
  .then(() => {
    app.listen(config.port || 3000, () => {
      console.log(`Example app listening on port ${config.port || 3000}`);
    });
  })

  .catch((error) => {
    console.log("mongoDB connection failed ", error);
  });
