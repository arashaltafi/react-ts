const DownloadSample2 = () => {

    const handleDownload = () => {
        // Create a link element
        const link = document.createElement('a');
        link.href = 'https://arashaltafi.ir/url_sample/mp4.mp4';

        // Set the download attribute with a desired filename
        link.download = 'downloaded-video.mp4';

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click on the link to initiate the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    };

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>Download 2</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>
                <button className="btnSuccess" onClick={handleDownload}>Download</button>
            </div>
        </div>
    )
}

export default DownloadSample2