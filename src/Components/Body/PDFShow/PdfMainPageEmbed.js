import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import useWindowSize from '../../../useWindowSize';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { MdScreenRotation } from 'react-icons/md';
import { useSelector } from 'react-redux';
import moment from 'moment';
import FullWindow from './FullWindow';
const PdfTestMainDivBox = styled.div`
    background-color: #525659;
    width: 100vw;
    height: 100vh;
    overflow: auto;
`;

const PdfMainPageEmbed = () => {
    const { ID } = useParams();

    return (
        // <PdfTestMainDivBox>
        //     <embed
        //         id="iframe"
        //         src={`${process.env.REACT_APP_API_URL}/CEBook/${ID}#zoom=85&toolbar=0`}
        //         type="application/pdf"
        //         width="100%"
        //         height="100%"
        //         link="index.css"
        //     />
        // </PdfTestMainDivBox>
        <PdfTestMainDivBox>
            <FullWindow></FullWindow>
        </PdfTestMainDivBox>
    );
};

export default PdfMainPageEmbed;
