import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CloudUpload, File, XIcon } from 'lucide-react';
import { useRef } from 'react'

function AdminProductImageUpload({
    file,
    setFile,
}: any) {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: any) => {

        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            setFile(selectedFile)
        }
    }

    const handleDragOver = (e: any) => {
        e.preventDefault();

    }

    const handleDrop = (e: any) => {
        e.preventDefault();
        const dropedFile = e.dataTransfer?.files?.[0];
        if (dropedFile) {
            setFile(dropedFile)
        }
    }

    const handleRemoveImage = () => {
        setFile(null)
        if (inputRef.current) {
            inputRef.current.value = '';
          }
    }

    return (
        <div className='w-full max-w-md mx-auto'>
            <Label className="text-sm font-medium text-left text-zinc-800">Upload Image</Label>
            <div
                className=" mt-2 mb-4"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <Input
                    id='image-upload'
                    type='file'
                    className='hidden'
                    ref={inputRef}
                    onChange={handleFileChange}
                />
                {
                    !file ?
                        <Label
                            htmlFor='image-upload'
                            className='flex flex-col justify-center items-center h-32 cursor-pointer border-2 border-dashed rounded-lg'
                        >
                            <CloudUpload className='w-10 h-10 mb-2 text-zinc-600' />
                            <span> Drag & drop or click to upload image</span>

                        </Label> :
                        <div className="flex justify-between items-center p-2 border border-dashed rounded-lg">
                            <div className="flex items-center">
                                <File className='w-8 h-8 mr-2 text-zinc-800' />
                            </div>
                            <p className='text-sm'>{file?.name}</p>
                            <Button variant={"ghost"} size={'icon'} className='p-1' onClick={handleRemoveImage}>
                                <XIcon className='w-4 h-4 text-zinc-800'/>
                            </Button>
                        </div>
                }
            </div>
        </div>
    )
}

export default AdminProductImageUpload