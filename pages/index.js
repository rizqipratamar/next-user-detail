import { EditOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Head from "next/head";

export default function ListUsersPage({ users }) {
  return (
    <div>
      <Head>
        <title>List Users</title>
        <meta name="description" content="User with mock API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Row gutter={16}>
          {users?.map((user, index) => (
            <Col span={6} key={index}>
              <Card
                style={{
                  marginTop: 16,
                }}
                title={`${user.name.title} ${user.name.first} ${user.name.last}`}
                actions={[<EditOutlined key="edit" onClick={() => {}} />]}
              >
                {"task.desc"}
              </Card>
            </Col>
          ))}
        </Row>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const props = {
    users: [],
  };

  try {
    const responseUsers = await fetch(`https://randomuser.me/api/?results=8`);
    const { results } = await responseUsers.json();
    props.users = results;
  } catch (err) {
    console.error(err);
  }
  return { props };
};
