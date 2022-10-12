import { toast } from 'react-toastify';
import axios from 'axios';
import { useState, ChangeEvent } from 'react';

export const useFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadingStatus, setUploadingStatus] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<string>('');

  const uploadFile = async () => {
    setUploadingStatus(true);
    toast.info('Uploading image file....', {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    const { data } = await axios.post('/api/upload', {
      name: file?.name,
      type: file?.type,
    });

    const url = data.url;
    const newData = await axios.put(url, file, {
      headers: {
        'Content-type': file?.type,
        'Access-Control-Allow-Origin': '*',
      },
    });

    if (newData && file) {
      setUploadingStatus(false);
      setUploadedFile(process.env.NEXT_PUBLIC_BUCKET_URL + file.name);
      toast.success('Uploaded Succesfuly...', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      setFile(null);
    }
  };

  const handleUploadFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0] as File);
    }
  };

  return {
    handleUploadFileChange,
    uploadedFile,
    uploadingStatus,
    uploadFile,
    setUploadedFile,
  };
};
