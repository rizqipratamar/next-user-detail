import Head from "next/head";
import dynamic from "next/dynamic";
const ListUsersComponent = dynamic(() => import("../src/components/listusers"));

export default function ListUsersPage({ metaData }) {
  return (
    <div>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ListUsersComponent />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaData: {
        title: "List Users",
        description: "List random users with mock API from randomuser.me ",
      },
    },
  };
}
