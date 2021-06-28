// NPM package
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Project files
import Home from '../../pages/Home';
import ParcelDetail from '../../pages/ParcelDetail';
export default function StatusLoaded({data}) {
    console.log("loaded", [data])
    return (
      <Switch>
        <Route path="/" exact>
            <Home data= {data}/>
        </Route>
        <Route path="/order">
            <ParcelDetail data ={data}/>
        </Route>
      </Switch>
    );
}
