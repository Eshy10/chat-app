import { NextPageWithLayout } from './_app';
import RoomList from '~/components/RoomList';
import { ToastContainer } from 'react-toastify';
import Message from '~/components/MessageContainer';
import ChatInput from '~/components/InputContainer';
import styles from '~/styles/home.module.css';

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <RoomList />
      <div className={styles['chatRoom']}>
        <h3 className={styles['chatRoom__header']}>Main Room</h3>
        <div className={styles['chatRoom__wrapper']}>
          <Message />
        </div>
        <ChatInput />
      </div>
      <ToastContainer />
    </>
  );
};

export default IndexPage;

/**
 * If you want to statically render this page
 * - Export `appRouter` & `createContext` from [trpc].ts
 * - Make the `opts` object optional on `createContext()`
 *
 * @link https://trpc.io/docs/ssg
 */
// export const getStaticProps = async (
//   context: GetStaticPropsContext<{ filter: string }>,
// ) => {
//   const ssg = createProxySSGHelpers({
//     router: appRouter,
//     ctx: await createContext(),
//   });
//
//   await ssg.post.all.fetch();
//
//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       filter: context.params?.filter ?? 'all',
//     },
//     revalidate: 1,
//   };
// };
