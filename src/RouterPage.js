import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import ErrorPage from './ErrorPage';
import PdfMainPage from './Components/Body/PDFShow/PdfMainPage';

const RouterPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route exact path="/ShowPdf/:ID" component={PdfMainPage}></Route>

                    <Route path="*" component={ErrorPage}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default RouterPage;
