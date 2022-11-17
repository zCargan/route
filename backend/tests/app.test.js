const request = require('supertest');
const user = require('../models/user');
const app = require('../app.js');

describe('updateUser', () => {
    it("retourne 201 si la modification est réussie", async () => {
        const res = await request(app)
            .post('/updateUser')
            .send({id : "id=635698138791699c49fcf9d2",username : "b",email : "a"});
        expect(res.statusCode).toEqual(201);
    })
});

describe('delete cookie', () => {
    it("retourne 200 si les cookies ont bien été supprimés", async () => {
        const res = await request(app)
            .get('/deletecookie')
        expect(res.statusCode).toEqual(200);
        //expect(res.response).toEqual('Cookie supprimé')
    })
});

describe('get user', () => {
    it("retourne 200 si le user a été trouvé dans la db", async () => {
        const res = await request(app)
            .get('/user')
            .send({id: "Id=635698138791699c49fcf9d2"})
        expect(res.statusCode).toEqual(200);
    })
});