import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import useWindowSize from '../../../useWindowSize';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { MdScreenRotation } from 'react-icons/md';
import { useSelector } from 'react-redux';
import moment from 'moment';
const PdfTestMainDivBox = styled.div`
    background-color: #525659;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    #PDFContainer {
        width: 100%;
        height: 100%;
    }
    @media print {
        #PDFContainer {
            display: none !important;
        }
    }
    embed {
        /* pointer-events: none; */
    }
`;

const EmbedMainPage = () => {
    const { ID } = useParams();
    const windowSize = useWindowSize();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageZoomNumber, setPageZoomNumber] = useState(100);
    const [rotateSetting, setrotateSetting] = useState(0);
    const [PositionChange, setPositionChange] = useState(false);
    const LoginCheckData = useSelector(state => state.LoginCheck);

    return (
        <PdfTestMainDivBox>
            <div id="PDFContainer">
                {/* <iframe src={`${process.env.REACT_APP_API_URL}/CEBook/${ID}`} width="100%" height="100%"></iframe> */}
                <embed src={`${process.env.REACT_APP_API_URL}/CEBook/${ID}`} type="application/pdf" width="100%" height="100%" />
                {/* <iframe src={`C:\Users\Yoo SungJae\Desktop\CEBook\aaaa01.pdf`} type="application/pdf" width="100%" height="100%"></iframe> */}
            </div>
        </PdfTestMainDivBox>
    );
};

export default EmbedMainPage;
