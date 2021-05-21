import React from 'react';

function DetailViewSwitch({setMap}) {
    return (
        <button onClick={() => setMap(m => !m)}>
            Switch
        </button>
    );
}

export default DetailViewSwitch;