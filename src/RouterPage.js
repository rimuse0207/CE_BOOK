import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import ErrorPage from './ErrorPage';
import PdfMainPage from './Components/Body/PDFShow/PdfMainPage';
import { useSelector } from 'react-redux/es/exports';
import LoginMainPage from './Components/Body/Login/LoginMainPage';
import PdfMainPageEmbed from './Components/Body/PDFShow/PdfMainPageEmbed';
import EmbedMainPage from './Components/Body/PDFShow/EmbedMainPage';
import IframeTag from './Components/Body/PDFShow/IframeTag';
const RouterPage = () => {
    const LoginCheckData = useSelector(state => state.LoginCheck);
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {LoginCheckData.LoginCheck ? (
                        <>
                            <Route exact path="/" component={App}></Route>
                            <Route exact path="/:HeaderTokenNames" component={App}></Route>
                            <Route exact path="/ShowPdf/:ID" component={EmbedMainPage}></Route>
                            <Route exact path="/iframeTag/:ID" component={IframeTag}></Route>
                            {/* <Route exact path="*" component={ErrorPage}></Route> */}
                        </>
                    ) : (
                        <>
                            <Route path={['*/:HeaderTokenNames', '/']} component={LoginMainPage}></Route>
                        </>
                    )}
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default RouterPage;
