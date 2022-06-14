import React, { useState } from 'react';
import styled from 'styled-components';
import ContentList from './ContentList/ContentList';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { InfoGet } from '../../../Api/ContentAPI/ContentAPI';

const ContentBoxMainDivBox = styled.div`
    min-height: 70vh;
    .ContentBox_MainList_box {
        border: 1px dashed lightgray;
        margin: 20px;
        padding: 10px;
        height: 100%;
    }
    #info-block {
        padding: 30px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    #info-block section {
        border: 2px dashed lightgray;
        padding-bottom: 50px;
    }

    .file-marker > div {
        padding: 0 2px;
        min-height: 100vh;
        margin-top: -2.5em;
        .box-title {
            background: white none repeat scroll 0 0;
            display: inline-block;
            padding: 0 1px;
            margin-left: 1em;
            font-size: 3em;
            font-weight: bolder;
        }
    }
`;

const ContentBox = () => {
    const NaviClicksData = useSelector(state => state.NaviSelectCheck.NaviClickTitle);
    const [PDFData, setPDFData] = useState([
        { pdfName: 'Britymail.pdf', ShowCount: 280 },
        { pdfName: 'PrecisionProcessingTools.pdf', ShowCount: 140 },
        { pdfName: 'TNL2022.pdf', ShowCount: 1300 },
    ]);

    useEffect(() => {
        if (NaviClicksData) {
            GetPDFFileData();
        }
    }, [NaviClicksData]);

    const GetPDFFileData = async () => {
        try {
            const getPDFFileDatas = await InfoGet(`${process.env.REACT_APP_API_URL}/CeBook_app_server/navi_data`, NaviClicksData, 0);
            console.log(getPDFFileDatas);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ContentBoxMainDivBox>
            <aside id="info-block">
                <section class="file-marker">
                    <div>
                        <div class="box-title">{NaviClicksData}</div>
                        <div class="box-contents">
                            <div id="audit-trail">
                                {PDFData.map((list, i) => {
                                    return <ContentList pdfName={list.pdfName} ShowCount={list.ShowCount}></ContentList>;
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </aside>
        </ContentBoxMainDivBox>
    );
};

export default ContentBox;
