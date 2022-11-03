import React, { useState } from 'react';

const test = () => {

    const [selects, setSelects] = useState();
    return (
        <div>
            <select value={selects} onChange={e => setSelects(e.target.value)}>
                <h1>
                    {selects}
                </h1>
                <option>Orange</option>
                <option>Mango</option>
                <option>Apple</option>

            </select>
        </div>
    );
};

export default test;