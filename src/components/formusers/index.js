import { SaveOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Row,
  Select,
} from "antd";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import { useAppContext } from "../../contex";
import { css } from "@emotion/css";

const FormUser = () => {
  const { selectedUser, setSelectedUser, theme } = useAppContext();
  const { handleSubmit, control, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: selectedUser.name.first,
      lastName: selectedUser.name.last,
      email: selectedUser.email,
      birthday: moment(selectedUser.dob.date, "YYYY-MM-DD"),
      gender: selectedUser.gender,
      description: selectedUser.description,
    },
  });

  const onSubmit = (data) => {
    setSelectedUser({
      ...data,
      name: {
        first: data.firstName,
        last: data.lastName,
      },
      dob: {
        date: data.birthday.format("YYYY-MM-DD"),
      },
      picture: selectedUser.picture,
    });
    message.success(`user updated!`);
  };

  return (
    <Card
      bordered={false}
      className={css(`
      width: 500
    `)}
    >
      <Form layout="vertical" onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={16}>
          <Col span={12} className="gutter-row">
            <Form.Item label="First Name">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
          <Col span={12} className="gutter-row">
            <Form.Item label="Last Name">
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Email">
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12} className="gutter-row">
            <Form.Item label="Gender">
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select defaultValue={selectedUser.gender} {...field}>
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
                render={({ field }) => (
                  <DatePicker
                    className={css(`
                    width: 100%;
                  `)}
                    {...field}
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
            render={({ field }) => <Input.TextArea rows={4} {...field} />}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="dashed"
            htmlType="submit"
            icon={<SaveOutlined />}
            size="large"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormUser;
