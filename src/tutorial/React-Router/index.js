import React from 'react';
import About from './About';
import Home from './Home';
import Error from './Error';
import NavBar from './NavBar';
import People from './People';
import Person from './Person';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
// we want to use our router in our web page so that we would require a router which can route our component 
// to their respective links and we also need some kind of switch to enable or disable our router
// we can use either vert unique path routes or we can use exact keyword


function ReactRouterDom() {
    return (

        <Router>
            <NavBar />
            <Switch>
            <Route exact path = "/">
                 <Home />
             </Route>

             <Route path = "/about">
                 <About />
             </Route>
             
             <Route path = "/people">
                 <People />
             </Route>
             <Route path ="/person/:id" children={<Person/>}></Route>
 
             {/* Here we need to setup the dynamic link over there in Person file */}




             <Route path = "*">  { /* means all the pages so no matter what route i select this page is going to be displayed */ }
                 <Error />
             </Route>

            </Switch>
            
        </Router>
    )
}
export default ReactRouterDom
