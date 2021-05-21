import React, {useState, useContext, useEffect} from 'react';
import Cards from './Cards'
import NewButton from './NewButton'
import {DataContext} from './DataContext'

function Collection({match, apiPath}) {
    const [data, setData] = useState(null)

    //Home - Collection Cards 
    //Results - Collection Cards - /querystring    
    //Detail List/Map - Cards of a Collection - collection/:id
    //User - Collection Cards

    const apiURL =  process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${apiURL}/collections/${match ? match.params.id : ''}?detail=true`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return(      
            <div>
                {data ? <Cards collec={data}/>: "Loading..."}
            </div>        
    )
    }


export default Collection;
 