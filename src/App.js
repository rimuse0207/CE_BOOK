import './App.css';
import BodyMainPage from './Components/Body/BodyMainPage';
import HeaderMainPage from './Components/Header/HeaderMainPage';
import NavigationMainPage from './Components/Navigation/NavigationMainPage';
import PdfTest from './PdfTest';
import styled from 'styled-components';

const AppMainFloatContainer = styled.div`
    ::after {
        content: '';
        display: block;
        clear: both;
    }
    .AppMain_Float_Left {
        width: 20%;
        float: left;
    }
    .AppMain_Float_Right {
        width: 80%;
        float: right;
        padding-right: 20px;
    }
`;

function App() {
    return (
        <div className="App" style={{ backgroundColor: '#F5F5F5', minHeight: '100vh' }}>
            <HeaderMainPage></HeaderMainPage>
            <AppMainFloatContainer>
                <div className="AppMain_Float_Left">
                    <NavigationMainPage></NavigationMainPage>
                </div>
                <div className="AppMain_Float_Right">
                    <BodyMainPage></BodyMainPage>
                </div>
            </AppMainFloatContainer>
            <div></div>
        </div>
    );
}

export default App;
