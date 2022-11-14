import { testajouterObjectifs } from '../src/pages/Objectifs'
import React, { useEffect, useState } from 'react'

const objectifsTemplateCourir = {_id: '63445dde0209b11b7469e079', type: 'Sportif', objectif: 'Courir plus', description: 'Courir 2x/semaine', __v: 0}
const objectifsTemplateAnglais = {_id: '6344451b260a5393dab4f91f', type: 'Intellectuel', objectif: "Apprendre l'anglais", description: "être B2 en fin d'année", __v: 0}
const objectifVoid = ""

test("Check si l'objectif est déjà présent sur le profil", function() {
    const obj = testajouterObjectifs(objectifsTemplateCourir)
    expect(obj).toStrictEqual(["Apprendre l'anglais", "Courir plus"]);
})

test('Erreur si objectif existe déjà', function() {
    const obj = testajouterObjectifs(objectifsTemplateAnglais)
    expect(obj).toBe("L'objectif choisi a déjà été ajouté !")
})

test("Erreur si pas d'objectif introduit", function(){
    const obj = testajouterObjectifs(objectifVoid)
    expect(obj).toBe("Veuillez entrer un objectif !")
})
