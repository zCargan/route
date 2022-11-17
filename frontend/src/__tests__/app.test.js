import App from "../App";
import { render } from '@testing-library/react';
import React from 'react';

test('test app sans crash', () =>{
    const div = document.createElement('div');
    render(<App/>, div)
})


