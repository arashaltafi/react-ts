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

    const handleDownloadFileTxt = (response: string) => {
        // Create a Blob from the string
        const blob = new Blob([response], { type: 'text/plain' });
    
        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);
    
        // Create an anchor element
        const a = document.createElement("a");
        console.log(response)
    
        // Set the download URL and filename
        a.href = url;
        a.download = "response.txt";
    
        // Append the anchor to the document body and trigger the click
        document.body.appendChild(a);
        a.click();
    
        // Remove the anchor from the document body
        document.body.removeChild(a);
    
        // Revoke the Blob URL to free up memory
        URL.revokeObjectURL(url);
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