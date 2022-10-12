import React from 'react';
import { trpc } from '~/utils/trpc';
import { inferProcedureInput } from '@trpc/server';
import type { AppRouter } from '~/server/routers/_app';
import { useFileUpload } from '~/hooks/useFileUpload';
import Image from 'next/image';
import { toast } from 'react-toastify';
import styles from './input.module.css';

const ChatInput = () => {
  const utils = trpc.useContext();

  const addMessage = trpc.msg.add.useMutation({
    async onSuccess() {
      await utils.msg.list.invalidate();
    },
  });

  const {
    uploadFile,
    uploadingStatus,
    uploadedFile,
    setUploadedFile,
    handleUploadFileChange,
  } = useFileUpload();

  return (
    <form
      className={styles['inputWrapper']}
      onSubmit={async (e) => {
        e.preventDefault();
        const $form = e.currentTarget;
        const values = Object.fromEntries(new FormData($form));
        type Input = inferProcedureInput<AppRouter['msg']['add']>;
        const input: Input = {
          message: values.text as string,
          image: uploadedFile?.length > 0 ? uploadedFile : null,
          hasImage: uploadedFile?.length > 0 ? true : false,
        };
        try {
          uploadFile()
            .then(async () => {
              await addMessage.mutateAsync(input);
              setUploadedFile('');
              $form.reset();
            })
            .catch((err) => {
              toast.error(err.message, {
                position: toast.POSITION.BOTTOM_LEFT,
              });
              console.log(err.message);
            });
        } catch (cause) {
          console.error({ cause }, 'Failed to add post');
        }
      }}
    >
      <input title="text" id="text" name="text" placeholder="Enter Message" />
      <div className={styles['inputWrapper__action']}>
        <label htmlFor="upload-button">
          <Image src={'/paper-clip.svg'} alt="user" width={20} height={20} />
        </label>
        <input
          title="file"
          type="file"
          accept="image/png, image/jpeg"
          id="upload-button"
          style={{ display: 'none' }}
          onChange={(e) => handleUploadFileChange(e)}
        />
        <button
          type="submit"
          disabled={addMessage.isLoading || uploadingStatus}
        >
          Send
        </button>
      </div>
      {addMessage.error &&
        toast.error(addMessage.error.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        })}
    </form>
  );
};

export default ChatInput;