import Head from "next/head";
import dynamic from "next/dynamic";
import { Col, Row } from "antd";
const FormUser = dynamic(() => import("../src/components/formusers"));

export default function DetailUserPage() {
  return (
    <div>
      <Head>
        <title>Detail Users</title>
        <meta name="description" content="User with mock API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Row>
          <Col span={12}>
            <FormUser />
          </Col>
          <Col span={12}></Col>
        </Row>
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
