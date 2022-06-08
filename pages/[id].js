import Head from "next/head";
import dynamic from "next/dynamic";
import { Col, Row } from "antd";
import CardDetailUser from "../src/components/carddetailuser";
const FormUser = dynamic(() => import("../src/components/formusers"));

export default function DetailUserPage({}) {
  return (
    <div>
      <Head>
        <title>{"Detail User"}</title>
      </Head>
      <main>
        <Row>
          <Col span={12}>
            <FormUser />
          </Col>
          <Col span={12}>
            <CardDetailUser />
          </Col>
        </Row>
      </main>
    </div>
  );
}
