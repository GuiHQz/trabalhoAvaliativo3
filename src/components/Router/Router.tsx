import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { Pricing } from '../../pages/Pricing'
import  Adm  from '../../pages/Adm/Adm'

export const Router: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/Pricing' component={Pricing} />
            <Route path='/Adm' component={Adm}/>
        </Switch>

    )
}

