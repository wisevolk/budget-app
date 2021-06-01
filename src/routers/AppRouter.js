import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";

const AppRouter = () => (
    <div>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path={"/"} component={ExpenseDashboardPage}/>
                <Route path={"/create"} component={AddExpensePage}/>
                <Route path={"/edit/:id"} component={EditExpensePage}/>
                <Route path={"/help"} component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    </div>
);

export default AppRouter;
