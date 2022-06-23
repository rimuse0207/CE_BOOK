import React, { Component } from 'react';
import ViewSDKClient from './ViewSDKClient';

class FullWindow extends Component {
    componentDidMount() {
        const viewSDKClient = new ViewSDKClient();

        viewSDKClient
            .ready()
            .then(() => {
                console.log('Then실행');
                viewSDKClient.previewFile('pdf-div', {
                    showDownloadPDF: false,
                    showPrintPDF: false,
                    showAnnotationTools: false,
                    showLeftHandPanel: false,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return <div id="pdf-div" className="full-window-div" />;
    }
}

export default FullWindow;
