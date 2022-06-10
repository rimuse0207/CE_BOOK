import React from 'react';
import styled from 'styled-components';

const HeaderMainPageMainContainer = styled.div`
    text-align: center;
    h1 {
        margin-top: 0px;
    }
`;

const HeaderMainPage = () => {
    return (
        <header>
            <HeaderMainPageMainContainer>
                <h1>CE 교육 자료</h1>
            </HeaderMainPageMainContainer>
        </header>
    );
};

export default HeaderMainPage;
