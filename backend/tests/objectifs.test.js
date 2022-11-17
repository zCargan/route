const request = require('supertest')
const user = require('../models/user');
const app = require('../app.js');

describe("Ajout d'un objectif sur un profil", () => {
    it("retourne 201 si l'ajout est réussi", async () => {
        const objectifs = {id : "id=635698138791699c49fcf9d2", objectifs : "Apprendre l'anglais"}
        const res = await request(app)
            .post('/user/objectif')
            .send(objectifs);
        expect(res.statusCode).toEqual(201);
    })
});

describe("Ajout d'un objectif sur un profil", () => {
    it("retourne 'Vous n'êtes pas connecté' quand on est pas connecté", async () => {
        const objectifs = {id : "", objectifs : "Apprendre l'anglais"}
        const res = await request(app)
            .post('/user/objectif')
            .send(objectifs);
        expect(res.text).toBe("Vous n'êtes pas connecté");
    })
});

describe("Ajout d'un objectif sur un profil", () => {
    it("retourne 'Veuillez entrer un objectif' quand il n'y a pas d'objectif spécifié", async () => {
        const objectifs = {id : "id=635698138791699c49fcf9d2", objectifs : ""}
        const res = await request(app)
            .post('/user/objectif')
            .send(objectifs);
        expect(res.text).toBe("Veuillez entrer un objectif");
    })
});