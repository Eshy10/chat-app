import React from 'react';
import { trpc } from '~/utils/trpc';
import { inferProcedureInput } from '@trpc/server';
import type { AppRouter } from '~/server/routers/_app';
import { useFileUpload } from '~/hooks/useFileUpload';
import Image from 'next/image';
import { toast } from 'react-toastify';
import styles from './input.module.css';
import PreviewContainer from '../PreviewContainer';

const ChatInput = () => {
  const utils = trpc.useContext();

  const addMessage = trpc.msg.add.useMutation({
    async onSuccess() {
      await utils.msg.list.invalidate();
    },
  });

  const { file, setFile, uploadFile, uploadingStatus, handleUploadFileChange } =
    useFileUpload();

  return (
    <>
      <PreviewContainer file={file} setFile={setFile} />
      <form
        className={styles['inputWrapper']}
        onSubmit={async (e) => {
          e.preventDefault();
          const $form = e.currentTarget;
          const values = Object.fromEntries(new FormData($form));
          type Input = inferProcedureInput<AppRouter['msg']['add']>;
          const input: Input = {
            message: values.text as string,
          };
          try {
            if (file) {
              uploadFile()
                .then(async (res) => {
                  await addMessage.mutateAsync({
                    ...input,
                    hasImage: true,
                    image: res,
                  });
                  $form.reset();
                  setFile(null);
                })
                .catch((err) => {
                  toast.error(err.message, {
                    position: toast.POSITION.BOTTOM_LEFT,
                  });
                  console.log(err.message);
                });
            } else {
              await addMessage.mutateAsync(input);
              $form.reset();
            }
          } catch (cause) {
            console.error({ cause }, 'Failed to add post');
          }
        }}
      >
        <input
          title="text"
          id="text"
          name="text"
          placeholder="Enter Message"
          required
        />
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
      </form>
    </>
  );
};

export default ChatInput;
