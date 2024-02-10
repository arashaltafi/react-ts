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
import { customLog } from '../utils/CustomConsole';

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
                customLog('Only image files are allowed.')
                return;
            }

            const maxSize = 1 * 1024 * 1024; // 1MB
            if (selectedFile.size > maxSize) {
                customLog('File size exceeds the limit of 1MB.')
                return;
            }

            customLog("Selected file:", selectedFile);
            customLog("Selected name:", selectedFile.name);
            customLog("Selected size:", selectedFile.size);

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result?.toString();
                setImageBase64(base64String);
                customLog('base64String', base64String);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const removeBase64Prefix = (base64String: string): string => {
        const prefixes = ["data:image/png;base64,", "data:image/jpeg;base64,", "data:image/jpg;base64,", "data:image/jpe;base64,"];
    
        for (const prefix of prefixes) {
            if (base64String.startsWith(prefix)) {
                return base64String.slice(prefix.length);
            }
        }
    
        // If the input string doesn't start with any of the known prefixes, return the original string
        return base64String;
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