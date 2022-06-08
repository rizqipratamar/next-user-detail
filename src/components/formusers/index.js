import { Card, Col, DatePicker, Form, Input, Row, Select } from "antd";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import { useAppContext } from "../../contex";

const FormUser = () => {
  const { handleSubmit, control } = useForm();
  const { selectedUser, theme } = useAppContext();
  const onSubmit = (data) => {};
  return (
    <Card bordered={false} style={{ width: 500 }}>
      <Form layout="vertical" onSubmit={handleSubmit(onSubmit)} style={{}}>
        <Form.Item label="Name">
          <Controller
            name="name"
            control={control}
            render={({ onChange, value }) => (
              <Input
                onChange={onChange}
                value={value}
                defaultValue={`${selectedUser.name.first} ${selectedUser.name.last}`}
              />
            )}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Controller
            name="email"
            control={control}
            render={({ onChange, value }) => (
              <Input
                onChange={onChange}
                value={value}
                disabled
                defaultValue={selectedUser.email}
              />
            )}
          />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12} className="gutter-row">
            <Form.Item label="Gender">
              <Controller
                name="gender"
                control={control}
                render={({ onChange, value }) => (
                  <Select
                    defaultValue={selectedUser.gender}
                    onChange={onChange}
                    value={value}
                  >
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                  </Select>
                )}
              />
            </Form.Item>
          </Col>
          <Col span={12} className="gutter-row">
            <Form.Item label="Birth Day">
              <Controller
                name="birthday"
                control={control}
                render={({ onChange, value }) => (
                  <DatePicker
                    onChange={onChange}
                    value={value}
                    style={{ width: "100%" }}
                    defaultValue={moment(selectedUser.dob.date, "YYYY-MM-DD")}
                  />
                )}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Description">
          <Controller
            name="description"
            control={control}
            render={({ onChange, value }) => (
              <Input.TextArea
                rows={4}
                onChange={onChange}
                value={value}
                defaultValue={`${selectedUser.name.title} ${selectedUser.name.first} ${selectedUser.name.last} is a ${selectedUser.gender} life at ${selectedUser.location.city} ${selectedUser.location.state} ${selectedUser.location.country}`}
              />
            )}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormUser;
