import React, {useState} from 'react';
import Collection from './Collection'
import Collections from './Collections'
import { Route, Switch } from 'react-router-dom' 
import Image from './Image'
import EditForm from './EditForm'

function Main(props) {
    const [map, setMap] = useState(true)
 
    return (
            <div>
                <Route exact path="/" component={Collections}/>
                <Route exact path="/new" component={EditForm}/>
                <Route exact path="/collections/:id" render={routerProps => <Collection apiPath={"collections/"} match={routerProps.match}/>}/>
                <Route exact path="/image/:id" render={routerProps => <Image match={routerProps.match}/>} />
            </div>


        
    );
}

export default Main;
