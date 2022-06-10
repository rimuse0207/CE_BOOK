import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import ErrorPage from './ErrorPage';
import PdfTest from './PdfTest';
import PptTest from './PptTest';

const RouterPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route exact path="/ShowPdf/:ID" component={PdfTest}></Route>
                    <Route exact path="/TestPdf" component={PptTest}></Route>
                    <Route path="*" component={ErrorPage}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default RouterPage;
