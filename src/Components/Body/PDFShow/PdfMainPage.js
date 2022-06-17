import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import useWindowSize from '../../../useWindowSize';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { MdScreenRotation } from 'react-icons/md';

const PdfTestMainDivBox = styled.div`
    background-color: #525659;

    .UpMenubar {
        background-color: #3e4042;
        height: 60px;
        position: sticky;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        .ExplainContent {
            width: 200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .PageZoom {
                font-size: 1.5em;
                font-weight: bolder;
            }
            .PageZoom:hover {
                cursor: pointer;
            }
            span {
                margin-right: 10px;
                margin-left: 10px;
            }
        }
    }
    .MainContentCotainer {
        overflow: hidden;
        ::after {
            content: '';
            display: block;
            clear: both;
        }

        .SideMenuPreView {
            width: 20%;
            float: left;
            background-color: #525659;
            position: sticky;
            padding-top: 20px;
            height: calc(100vh - 60px);
            overflow-x: hidden;
            overflow-y: scroll;
            top: 0px;
            z-index: 10;
            #PdfFileListContainer {
                margin-top: 10px;
                width: 50%;
                margin: 0 auto;
                .SideMenuPreView_indexNumbering {
                    text-align: center;
                    color: white;
                    margin-bottom: 10px;
                }
                .PreMenuBarContentPdfViewer_NowContent {
                    border: 10px solid #368;
                }
                .PreMenuBarContentPdfViewer {
                    opacity: 0.5;
                    .react-pdf__Page__textContent {
                        width: auto !important;
                    }
                }
                .PreMenuBarContentPdfViewer:hover {
                    cursor: pointer;
                }
            }
        }
        #test {
            width: 80%;
            margin: 0 auto;
            border: 1px solid black;
            float: right;
            background-color: #525659;
            height: calc(100vh - 60px);
            overflow: auto;
            display: flex;
            justify-content: center;

            .PdfFileListContainer_mainContant {
                box-shadow: 3px 3px 6px 3px darkgray;
                width: 100%;
                position: relative;
                overflow: hidden;

                .PrintBlock_WaterMark_bottom {
                    position: absolute;
                    /* font-size: 2em; */
                    transform: rotate(-45deg);
                    top: -350px;
                    right: 0px;
                    color: black;
                    z-index: 0;
                    user-select: none;
                    -moz-user-select: none;
                    -khtml-user-select: none;
                    -webkit-user-select: none;
                    -o-user-select: none;

                    div {
                        opacity: 0.15;
                        margin: 20px;
                    }
                }
                .PrintBlock_WaterMark_top {
                    position: absolute;
                    /* font-size: 2em; */
                    transform: rotate(-45deg);
                    top: -350px;
                    left: 0px;
                    color: black;
                    z-index: 0;
                    user-select: none;
                    -moz-user-select: none;
                    -khtml-user-select: none;
                    -webkit-user-select: none;
                    -o-user-select: none;

                    div {
                        opacity: 0.15;
                        margin: 20px;
                    }
                }
                .PdfViwerContainer {
                    width: 100%;
                    height: 100%;
                }
                .MainPageContentPdfViewer {
                    display: inline-block;
                }
            }
        }
    }

    @media print {
        #test {
            display: none;
        }
    }
`;

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const PdfMainPage = () => {
    const { ID } = useParams();
    const windowSize = useWindowSize();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageZoomNumber, setPageZoomNumber] = useState(100);
    const [rotateSetting, setrotateSetting] = useState(0);
    const [PositionChange, setPositionChange] = useState(false);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleMenuClicks = pageNumber => {
        const ContentHeight = document.getElementsByClassName('PdfFileListContainer_mainContant')[0].offsetHeight;

        document.getElementById('test').scrollTo({ top: ContentHeight * (pageNumber - 1), behavior: 'smooth' });
        setPageNumber(pageNumber);
    };

    const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
    const handleFollow = () => {
        setScrollY(document.getElementById('test').scrollTop); // window 스크롤 값을 ScrollY에 저장
    };

    useEffect(() => {
        if (numPages) {
            if (setScrollY === 0) {
                const ww = document.getElementsByClassName(`menubar_0`);
                if (ww) ww[0].children[0].className = 'react-pdf__Page PreMenuBarContentPdfViewer_NowContent';
            } else {
                const ad = document.getElementsByClassName('MainPageContentPdfViewer')[0].offsetHeight;
                if (ad) {
                    for (var i = 0; i < numPages; i++) {
                        const aw = document.getElementsByClassName(`menubar_${i}`);
                        aw[0].children[0].className = 'react-pdf__Page PreMenuBarContentPdfViewer';
                    }
                    const ww = document.getElementsByClassName(`menubar_${Math.floor(ScrollY / ad)}`);
                    ww[0].children[0].className = 'react-pdf__Page PreMenuBarContentPdfViewer_NowContent';
                    document
                        .getElementsByClassName('SideMenuPreView')[0]
                        .scrollTo({ top: ww[0].children[0].offsetHeight * Math.floor(ScrollY / ad) });
                    setPageNumber(Math.floor(ScrollY / ad) + 1);
                }
            }
        }
    }, [ScrollY]);

    useEffect(() => {
        const watch = () => {
            document.getElementById('test').addEventListener('scroll', handleFollow);
        };
        watch(); // addEventListener 함수를 실행
        return () => {
            document.getElementById('test').removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        };
    });

    return (
        <PdfTestMainDivBox>
            <div className="UpMenubar">
                <div className="ExplainContent">
                    <div>
                        {/* <span>
                            <input value={pageNumber} onChange={e => setPageNumber(e.target.value)}></input>
                        </span>
                        <span> / </span>
                        <span>{numPages}</span> */}
                        {pageNumber} / {numPages}
                    </div>
                    <div>|</div>
                    <div>
                        <span
                            className="PageZoom"
                            onClick={() => {
                                pageZoomNumber === 50 ? alert('축소 불가') : setPageZoomNumber(pageZoomNumber - 25);
                            }}
                        >
                            -
                        </span>
                        <span>{pageZoomNumber}%</span>
                        <span
                            className="PageZoom"
                            onClick={() => {
                                pageZoomNumber === 150 ? alert('확대 불가') : setPageZoomNumber(pageZoomNumber + 25);
                            }}
                        >
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="MainContentCotainer">
                <div className="SideMenuPreView">
                    <Document
                        file={`${process.env.REACT_APP_API_URL}/CEBook/${ID}`}
                        onLoadSuccess={onDocumentLoadSuccess}
                        id={'PdfViwerTest'}
                    >
                        {Array.from(new Array(numPages), (_, index) => (
                            <div id="PdfFileListContainer">
                                <div
                                    className={`PdfViwerContainer menubar_${index}`}
                                    onClick={e => {
                                        handleMenuClicks(index + 1);
                                    }}
                                >
                                    <Page
                                        className={index === 0 ? 'PreMenuBarContentPdfViewer_NowContent' : 'PreMenuBarContentPdfViewer'}
                                        key={index}
                                        pageNumber={index + 1}
                                        renderAnnotationLayer={false}
                                    />
                                </div>
                                <div className="SideMenuPreView_indexNumbering">{index + 1}</div>
                            </div>
                        ))}
                    </Document>
                </div>

                <div id="test" style={{ textAlign: 'center' }} onContextMenu={e => e.preventDefault()}>
                    <Document
                        file={`${process.env.REACT_APP_API_URL}/CEBook/${ID}`}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="adadadad"
                    >
                        {Array.from(new Array(numPages), (_, index) => (
                            <div className="PdfFileListContainer_mainContant">
                                <div className="PdfViwerContainer">
                                    <Page
                                        className="MainPageContentPdfViewer"
                                        width={(windowSize.width - windowSize.width / 2.5) * (pageZoomNumber / 100)}
                                        height={windowSize.height}
                                        key={index}
                                        pageNumber={index + 1}
                                        renderAnnotationLayer={false}
                                    />
                                </div>
                                <div className="PrintBlock_WaterMark_bottom">
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                </div>
                                <div className="PrintBlock_WaterMark_top">
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                    <div>sjyoo@dhk.co.kr-IP[192.168.2.155]/2022-06-13</div>
                                </div>
                            </div>
                        ))}
                    </Document>
                </div>
            </div>
        </PdfTestMainDivBox>
    );
};

export default PdfMainPage;
