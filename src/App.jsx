import React from "react";
import HomePage from "./views/HomePage";
import NotFoundPage from "./views/NotFoundPage";
import PrivacyPolicyPage from './views/PrivacyPolicyPage'
import OffertaPage from "./views/OffertaPage";
import SwaggerPage from "./views/SwaggerPege/SwaggerPage";
import LoginPage from "./views/LoginPage";
import AccountUserPage from "./views/AccountUserPage";
import {Route, Switch} from "react-router-dom";

function App() {

  return (

     <Switch>
         <Route exact path ="/" component={HomePage}/>
         <Route exact path={'/login'} component={LoginPage}/>
         <Route exact path={'/account'} component={AccountUserPage}/>
         <Route exact path ="/privacy_policy" component={PrivacyPolicyPage}/>
         <Route exact path ="/contact_offerta" component={OffertaPage}/>
         <Route exact path ="/swagger" component={SwaggerPage}/>
         <Route path="*" component={NotFoundPage}/>
     </Switch>


  );
}

export default App;
