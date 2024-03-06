import { useState } from 'react'
import { useDropzone } from 'react-dropzone';

//npm install react-dropzone
const DragDropSampleUpload = () => {
    const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles: any) => {
            setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
            // Call your backend API endpoint to upload files
        }
    });

    return (
        <div className="w-full py-8 flex flex-col gap-16">
            <h1 className='title'>DragDropSampleUpload</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>
                <div
                    className='cursor-pointer w-full'
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    <p className='w-full my-16 title text-red-500'>Drag and drop files here or click to browse.</p>
                    <ul className='mt-8 w-full'>
                        {uploadedFiles.map((file: any) => (
                            <li key={file.name} className='my-4 w-full'>
                                <div className='flex flex-row items-center justify-center gap-8'>
                                    <p className='text-2xl font-bold text-center'>name:</p>
                                    <p className='text-2xl font-normal text-center'>{file.name}</p>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-8'>
                                    <p className='text-2xl font-bold text-center'>size:</p>
                                    <p className='text-2xl font-normal text-center'>{file.size} bytes</p>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-8'>
                                    <p className='text-2xl font-bold text-center'>type:</p>
                                    <p className='text-2xl font-normal text-center'>{file.type}</p>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-8'>
                                    <p className='text-2xl font-bold text-center'>lastModified:</p>
                                    <p className='text-2xl font-normal text-center'>
                                        {new Date(file.lastModified).toLocaleString()}
                                    </p>
                                </div>
                                <div className='w-full flex flex-row items-center justify-center'>
                                    <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DragDropSampleUpload