const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const products_routes = require("./routes/products");

app.get("/", (req, res) => {
    res.send("Yes I am Live");
});

// middleware
app.use("/api/products", products_routes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} YES I AM CONNECTED`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();