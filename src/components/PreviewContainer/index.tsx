import React from 'react';
import Image from 'next/image';
import styles from './preview.module.css';

type PreviewContainerProps = {
  file: File | null;
  setFile: (file: File | null) => void;
};

const PreviewContainer = ({ file, setFile }: PreviewContainerProps) => {
  const handleDelete = () => {
    setFile(null);
  };

  return (
    file && (
      <div className={styles['preview']}>
        <div className={styles['preview__imageEdit']}>
          <Image
            src={URL.createObjectURL(file)}
            alt={file.name}
            width={100}
            height={100}
            objectFit={'contain'}
          />
          <Image
            src={'/cancel.svg'}
            alt="user"
            width={20}
            height={20}
            onClick={() => handleDelete()}
            className={styles['preview__imageIcon']}
          />
        </div>
      </div>
    )
  );
};

export default PreviewContainer;
