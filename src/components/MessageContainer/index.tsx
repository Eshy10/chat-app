import React, { Fragment } from 'react';
import Image from 'next/image';
import { trpc } from '~/utils/trpc';
import moment from 'moment';
import styles from './message.module.css';

const Message = () => {
  const messageQuery = trpc.msg.list.useInfiniteQuery(
    {
      limit: 5,
    },
    {
      getPreviousPageParam(lastPage) {
        return lastPage.nextCursor;
      },
    },
  );

  return (
    <div className={styles['messageWrapper']}>
      {messageQuery.data?.pages.map((page, index) => (
        <Fragment key={page.items[0]?.id || index}>
          {page.items.map((item) => (
            <div className={styles['messageWrapper__content']} key={item.id}>
              <p>{item.message}</p>
              {item.hasImage && (
                <Image
                  src={item.image ? item.image : ''}
                  alt="image"
                  width={100}
                  height={100}
                  objectFit={'cover'}
                />
              )}
              <p>{moment(item.createdAt.toString()).fromNow()}</p>
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Message;
