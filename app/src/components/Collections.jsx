import React, {useState, useContext, useEffect} from 'react';
import CollectionCards from './CollectionCards'

function Collections(props) {
    const [data, setData] = useState(null)
    const apiURL =  process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${apiURL}/collections?detail=true`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return(      
            <div>
                {data ? <CollectionCards data={data}/>: "Loading..."}
            </div>        
    )
    }


export default Collections;
 