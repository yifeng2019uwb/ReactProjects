import { useState } from "react";

function AddPlace( {onAddPlace} ) {
    const [placeName, setPlaceName] = useState('');

    return ( 
        <>
        <input
            placeholder="Add place"
            value={placeName}
            onChange={e => setPlaceName(e.target.value)}
        />
        <button onClick={() => {
            setPlaceName('');
            onAddPlace(placeName);
        }}>Add</button>
        </>
     );
}

export default AddPlace;