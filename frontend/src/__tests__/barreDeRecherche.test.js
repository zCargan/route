import { fireEvent, render, screen} from '@testing-library/react';
import  BarreRecherche  from "../components/BarreDeRecherche";
import userEvent from '@testing-library/user-event';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';



describe('Test function barre de recherche', () => {
    it('Devrait renvoyer la barre de recherche sans crash', async() => {
        render(<Router><BarreRecherche/></Router>)
    })
    it('Barre de recherche doit etre vide initialement.',() => {
        render(<Router><BarreRecherche/></Router>)
        const barreVide = screen.getByTestId('searchInput')
        expect(barreVide.textContent).toBe('')
    })
    it("Ve devrait se trouver dans la barre de recherche", () => {
        const component = render(<Router><BarreRecherche/></Router>)
        const barreRecherche = component.getByTestId('searchInput')
        userEvent.type(screen.getByTestId('searchInput'), "Ve")
        expect(barreRecherche.value).toBe('Ve')
        
    })
    /*it("Verum devrait se trouver dans la liste filtrer", async() => {
        const component = render(<Router><BarreRecherche/></Router>)
        const barreRecherche = component.getByTestId('searchInput')
        userEvent.type(screen.getByTestId('searchInput'), "Ve")
        const listeFiltre = component.getByTestId('dataResult')
    })*/

})

