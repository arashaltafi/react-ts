import download from 'downloadjs';

const DownloadSample1 = () => {

    const handleDownload = () => {
        download('https://arashaltafi.ir/url_sample/mp4.mp4');
    };

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>Download 1</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>
                <button onClick={handleDownload} className="btnSuccess">Download</button>
            </div>
        </div>
    )
}

export default DownloadSample1