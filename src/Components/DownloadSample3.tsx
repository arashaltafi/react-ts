import { useState } from "react";

const DownloadSample3 = () => {

    const [downloadProgress, setDownloadProgress] = useState<number>(0);
    const [fileSize, setFileSize] = useState<number | null>(null);
    const [downloadPaused, setDownloadPaused] = useState<boolean>(false);

    const handleDownload = async () => {
        try {
            const response = await fetch('https://arashaltafi.ir/url_sample/mp3.mp3');
            const totalSize = parseInt(response.headers.get('content-length') || '0', 10);
            setFileSize(totalSize);

            const chunks: Uint8Array[] = [];
            const readableStream = response.body!.getReader();
            let downloadedSize = 0;

            while (true) {
                const { done, value } = await readableStream.read();

                if (done || downloadPaused) {
                    break;
                }

                downloadedSize += value!.length;
                const progress = (downloadedSize / totalSize) * 100;
                setDownloadProgress(progress);

                // Store each chunk for later use
                chunks.push(value!);
            }

            // At this point, the download is complete or paused
            if (!downloadPaused) {
                const blob = new Blob(chunks, { type: response.headers.get('content-type') || '' });
                const blobUrl = URL.createObjectURL(blob);

                // Create a link element and trigger the download
                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = 'downloaded-video.mp4'; // You can set a custom filename here
                document.body.appendChild(link);
                link.click();

                // Clean up the temporary URL and link
                URL.revokeObjectURL(blobUrl);
                document.body.removeChild(link);
            }
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    const handlePause = () => {
        setDownloadPaused(true);
    };

    const handleResume = () => {
        setDownloadPaused(false);
        handleDownload();
    };

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>Download 3</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>
                <button className="btnSuccess" onClick={handleDownload}>Download</button>
                <button className="btnSuccess" onClick={handlePause} disabled={downloadPaused}>Pause Download</button>
                <button className="btnSuccess" onClick={handleResume} disabled={!downloadPaused}>Resume Download</button>
                {downloadProgress > 0 && (
                    <div>
                        Download Progress: {downloadProgress.toFixed(2)}%
                    </div>
                )}
                {fileSize !== null && (
                    <div>
                        File Size: {fileSize} bytes
                    </div>
                )}
            </div>
        </div>
    )
}

export default DownloadSample3