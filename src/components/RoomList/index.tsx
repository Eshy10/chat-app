import React from 'react';
import Link from 'next/link';
import styles from './chatRoom.module.css';

const RoomList = () => {
  return (
    <div className={styles['chatList']}>
      <h2>Chat Room</h2>
      <div>
        <p className={styles['chatList__title']}>Rooms 💬</p>
        <Link href={'/'}>
          <a># main</a>
        </Link>
      </div>
    </div>
  );
};

export default RoomList;
