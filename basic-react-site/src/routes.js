import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Estacao from './pages/public/Estacao';
import Cuco from './pages/public/Cuco';
import Main from './pages/public/Main';
import Admin from './pages/admin/Admin';


function Routes(){
    const base_url = process.env.PUBLIC_URL || "";
    return(
        <>
            <BrowserRouter>
            <Switch>
                <Route path={base_url+"/"} exact={true} component={Main} />
                <Route path={base_url+"/estacao-cuco-maluko"} exact={true} component={Estacao} />
                <Route path={base_url + "/cuco-maluko"} exact={true} component={Cuco} />
                <Route path={base_url+"/admin/:sectionId"} component={Admin} />
                <Route path={base_url+"/admin"} component={Admin} />
            </Switch>
            </BrowserRouter>
        </>
    );
}

export default Routes;