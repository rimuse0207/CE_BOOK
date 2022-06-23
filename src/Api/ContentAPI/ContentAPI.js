import { request } from '../index';

export const InfoPost = (RequestURL, ParamasData) => {
    console.log(ParamasData);
    return request.post(RequestURL, {
        params: ParamasData,
    });
};

export const InfoGet = (RequestURL, ClikName, ClickIndex) => {
    return request.get(RequestURL, {
        params: {
            menus_Name: ClikName,
            menus_index: ClickIndex,
        },
    });
};

export const ClicksCEPDF = (RequestURL, ID, PDFData) => {
    return request.post(RequestURL, {
        ID,
        PDFData,
    });
};
