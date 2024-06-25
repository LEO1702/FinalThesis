const app = require("./index");
const connect = require("./configs/db");


const port = process.env.PORT || 8081;

app.listen(port, async() => {
    await connect();
    console.log(`Listening to port ${port}`);
});