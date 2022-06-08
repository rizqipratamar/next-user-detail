import Head from "next/head";
import dynamic from "next/dynamic";
const ListUsersComponent = dynamic(() => import("../src/components/listusers"));

export default function ListUsersPage({ initialUsers }) {
  return (
    <div>
      <Head>
        <title>List Users</title>
        <meta name="description" content="User with mock API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ListUsersComponent />
      </main>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const props = {
//     initialUsers: [],
//   };
//   try {
//     const initialUsers = await fetch(fakeDataUrl);
//     const { results } = await initialUsers.json();

//     props.initialUsers = results;
//   } catch (err) {
//     console.error(err);
//   }
//   return { props };
// };
