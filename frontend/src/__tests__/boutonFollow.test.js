import ButtonFollow from "../components/BoutonFollow";
import { render } from '@testing-library/react';
import React from 'react';

describe('Test function barre de recherche', () => {
    it('Devrait renvoyer la barre de recherche sans crash', async() => {
        const div = document.createElement('div');
        render(<ButtonFollow/>, div)
        
    })
})
