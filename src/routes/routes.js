import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AuthContext } from '../contexts/auth.context'
import { routeType } from '../resources/routeTypes'

import Login from '../pages/AuthPage/Login'
import DragonsList from '../pages/DragonsPage/DragonsList'
import DragonForm from '../pages/DragonsPage/DragonForm'

const CustomRoute = ({ isPrivate, ...rest }) => {
    const { authenticated } = useContext(AuthContext)
    if (isPrivate && !authenticated) {
        return <Redirect to={routeType.LOGIN} />
    }

    return <Route {...rest} />
}

const Routes = () => {
    const { authenticated } = useContext(AuthContext)
    return (
        <Switch>
            <CustomRoute path={routeType.LOGIN} exact component={Login} />
            <CustomRoute
                path={routeType.DRAGONS_LIST}
                exact
                isPrivate
                component={DragonsList}
            />
            <CustomRoute
                path={routeType.DRAGONS_CREATE}
                exact
                isPrivate
                component={DragonForm}
            />
            <CustomRoute
                path={routeType.DRAGONS_EDIT}
                exact
                isPrivate
                component={() => <DragonForm edit />}
            />
            <CustomRoute
                path={routeType.DRAGONS_DETAILS}
                exact
                isPrivate
                component={() => <DragonForm />}
            />
            <Redirect
                from=""
                to={authenticated ? routeType.DRAGONS_LIST : routeType.LOGIN}
            />
            <Redirect
                from={routeType.DRAGONS_ROOT}
                to={authenticated ? routeType.DRAGONS_LIST : routeType.LOGIN}
            />
        </Switch>
    )
}

export default Routes
