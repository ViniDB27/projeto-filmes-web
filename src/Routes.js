import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StoreProvider from './components/Store/Provider'
import RoutesPrivate from './components/Routes/Private/Private'

//imports screens
import Home from './screens/Home'
import Favorite from './screens/Favorites'
import Register from './screens/Register'
import Login from './screens/Login'

function Routes(){
    return(
        <StoreProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <RoutesPrivate exact path="/" component={Home} />
                    <RoutesPrivate exact path="/favorite" component={Favorite} />
                </Switch>
            </BrowserRouter>
        </StoreProvider>
    )
}

export default Routes
