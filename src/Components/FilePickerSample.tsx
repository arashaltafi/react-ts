import React, { useRef, useState } from 'react'
import { Dialog, DialogContent } from "@material-ui/core";
import DialogAttachmentItem from './DialogAttachmentItem';
import {
    FolderOutlined,
    LocationOnOutlined,
    MusicNoteOutlined,
    PhotoOutlined,
    SmartDisplayOutlined,
} from "@mui/icons-material";

const FilePickerSample = () => {
    const [open, setOpen] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageBase64, setImageBase64] = useState<string | undefined | null>(null);

    const handleOpenFilePicker = (formats: string) => {
        if (fileInputRef.current) {
            fileInputRef.current.accept = formats;
            fileInputRef.current.click();
        }
    };

    const handleOnClose = () => {
        setOpen(false)
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            if (!selectedFile.type.startsWith('image/')) {
                console.log('Only image files are allowed.')
                return;
            }

            const maxSize = 1 * 1024 * 1024; // 1MB
            if (selectedFile.size > maxSize) {
                console.log('File size exceeds the limit of 1MB.')
                return;
            }

            console.log("Selected file:", selectedFile);
            console.log("Selected name:", selectedFile.name);
            console.log("Selected size:", selectedFile.size);

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result?.toString();
                setImageBase64(base64String);
                console.log('base64String', base64String);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div className="w-full flex items-center justify-center mt-8">
            <button className='btnSuccess' onClick={() => setOpen(!open)}>FilePickerSample</button>
            <input
                type="file"
                ref={fileInputRef}
                accept="*.*"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />

            <Dialog
                PaperProps={{
                    className:
                        "!self-end w-full !max-w-[600px] !max-h-[300px] !rounded-t-[10px] shadow",
                }}
                open={open}
                fullScreen
                onClose={handleOnClose}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    accept=".pdf,.doc,.txt"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                <DialogContent>
                    <div className="grid grid-cols-3 gap-x-4 gap-y-6">
                        <DialogAttachmentItem
                            handleClick={() => handleOpenFilePicker(".*")}
                            icon={<FolderOutlined />}
                            text="فایل"
                        />
                        <DialogAttachmentItem
                            icon={<PhotoOutlined />}
                            handleClick={() => handleOpenFilePicker(".png,.jpg,.svg")}
                            text="عکس"
                        />
                        <DialogAttachmentItem
                            icon={<SmartDisplayOutlined />}
                            text="فیلم"
                            handleClick={() => handleOpenFilePicker(".mp4")}
                        />
                        <DialogAttachmentItem
                            icon={<LocationOnOutlined />}
                            text="موقعیت مکانی"
                        />
                        <DialogAttachmentItem
                            icon={<MusicNoteOutlined />}
                            text="موسیقی"
                            handleClick={() => handleOpenFilePicker(".mp3")}
                        />
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default FilePickerSample