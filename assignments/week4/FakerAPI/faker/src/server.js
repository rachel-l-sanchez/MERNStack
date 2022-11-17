const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

app.listen( port, () => console.log(`Listening on port: ${port}`) );

// we can hard code some users like this
// later on we will want to store users in a database

const createPerson = () => {
    const newFake = {
        _id: faker.commerce._id(),
        firstName: faker.commerce.firstName(),
        lastName: faker.commerce.lastName(),
        email: faker.commerce.email(),
        password: faker.commerce.password(),
        phoneNumber: faker.commerce.phoneNumber()
    };
    return newFake;
};

const createCompany = () => {
    const newComp = {
        _id: faker.commerce._id(),
        name: faker.commerce.name(),
        address: {
            street: faker.commerce.street(),
            city: faker.commerce.city(),
            state: faker.commerce.state(),
            zipCode: faker.commerce.zipCode(),
            country: faker.commerce.country()
        }
    };
    return newComp;
};
    


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    const newUser = createPerson();
    console.log(newUser);
    res.json(newUser );
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    console.log(newCompany);
    res.json(newComp);
});

app.get("/api/user/company", (req, res) => {
    res.json(newComp, newFake);
});

app.post('/addUser', (req,res)=> {
    console.log(req.body)
    console.log(req)
    res.json(req.body)
})

