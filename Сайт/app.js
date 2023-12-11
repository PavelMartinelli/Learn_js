const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h1>Главная страница</h1>");
});

// http://localhost:3000/about?id=23&name=Tom
app.use("/about", function(request, response){
    const id = request.query.id;
    const userName = request.query.name;
    response.send(`<h1>Информация</h1><p>id: ${id}</p><p>name: ${userName}</p>`);
});

app.get("/contact", function(request, response){
    response.send("<h1>Контакты</h1> <p>Номер телефона: +76666666666</p>")
});
app.listen(3000);