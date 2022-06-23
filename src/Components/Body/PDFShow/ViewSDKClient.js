class ViewSDKClient {
    constructor() {
        this.readyPromise = new Promise(resolve => {
            console.log('window.AdobeDC', window.AdobeDC);
            if (window.AdobeDC) {
                console.log('resolve 실행');
                resolve();
            } else {
                /* Wait for Adobe Document Services PDF Embed API to be ready */
                console.log('API 기달');
                document.addEventListener('adobe_dc_view_sdk.ready', () => {
                    resolve();
                    console.log('resolve 실행');
                });
            }
        });
        this.adobeDCView = undefined;
    }

    ready() {
        console.log('ready');
        return this.readyPromise;
    }

    previewFile(divId, viewerConfig) {
        const config = {
            /* Pass your registered client id */
            clientId: '2a8d4f79dbd2430f90659dad57a1e118',
        };
        if (divId) {
            /* Optional only for Light Box embed mode */
            /* Pass the div id in which PDF should be rendered */
            config.divId = divId;
        }
        /* Initialize the AdobeDC View object */
        this.adobeDCView = new window.AdobeDC.View(config);

        /* Invoke the file preview API on Adobe DC View object */
        const previewFilePromise = this.adobeDCView.previewFile(
            {
                /* Pass information on how to access the file */
                content: {
                    /* Location of file where it is hosted */
                    location: {
                        url: 'http://192.168.2.155:3001/CEBook/aaaa01.pdf',
                        /*
                    If the file URL requires some additional headers, then it can be passed as follows:-
                    headers: [
                        {
                            key: "<HEADER_KEY>",
                            value: "<HEADER_VALUE>",
                        }
                    ]
                    */
                    },
                },
                /* Pass meta data of file */
                metaData: {
                    /* file name */
                    fileName: 'aaaa01.pdf',
                    /* file ID */
                    id: '6d07d124-ac85-43b3-a867-36930f502ac6',
                },
            },
            viewerConfig
        );

        return previewFilePromise;
    }

    previewFileUsingFilePromise(divId, filePromise, fileName) {
        /* Initialize the AdobeDC View object */
        this.adobeDCView = new window.AdobeDC.View({
            /* Pass your registered client id */
            clientId: '2a8d4f79dbd2430f90659dad57a1e118',
            /* Pass the div id in which PDF should be rendered */
            divId,
        });

        /* Invoke the file preview API on Adobe DC View object */
        this.adobeDCView.previewFile(
            {
                /* Pass information on how to access the file */
                content: {
                    /* pass file promise which resolve to arrayBuffer */
                    promise: filePromise,
                },
                /* Pass meta data of file */
                metaData: {
                    /* file name */
                    fileName: fileName,
                },
            },
            {
                showDownloadPDF: false,
                showPrintPDF: false,
                showAnnotationTools: false,
                showLeftHandPanel: false,
            }
        );
    }

    registerSaveApiHandler() {
        /* Define Save API Handler */
        const saveApiHandler = (metaData, content, options) => {
            console.log(metaData, content, options);
            return new Promise(resolve => {
                /* Dummy implementation of Save API, replace with your business logic */
                setTimeout(() => {
                    const response = {
                        code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
                        data: {
                            metaData: Object.assign(metaData, { updatedAt: new Date().getTime() }),
                        },
                    };
                    resolve(response);
                }, 2000);
            });
        };

        this.adobeDCView.registerCallback(window.AdobeDC.View.Enum.CallbackType.SAVE_API, saveApiHandler, {});
    }

    registerEventsHandler() {
        /* Register the callback to receive the events */
        this.adobeDCView.registerCallback(
            /* Type of call back */
            window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
            /* call back function */
            event => {
                console.log(event);
            },
            /* options to control the callback execution */
            {
                /* Enable PDF analytics events on user interaction. */
                enablePDFAnalytics: true,
            }
        );
    }
}

export default ViewSDKClient;
