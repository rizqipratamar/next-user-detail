import Head from "next/head";
import dynamic from "next/dynamic";
const ListUsersComponent = dynamic(() => import("../src/components/listusers"));

export default function ListUsersPage({ metaData }) {
  return (
    <div>
      <Head>
        <title data-testid="title-page">{metaData?.title}</title>
        <meta name="description" content={metaData?.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div data-testid="list-users">
          <ListUsersComponent />
        </div>
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
