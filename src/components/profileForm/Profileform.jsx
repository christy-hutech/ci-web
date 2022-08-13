import React from "react";
import { Button, Col, Divider, Form, Input, Row, Select, Space } from "antd";
import "antd/dist/antd.css";
import styles from "./Profileform.module.css";
import Profileimg from "../../assets/images/profileImgs/profileimg.svg";
const subscribe = ["Newsletter", "Post", "Articles"];
const { TextArea } = Input;

const Profileform = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    setTimeout(() => {
      form.resetFields();
    }, 3000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        form={form}
        requiredMark={false}
        colon={false}
        name="basic"
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className={styles.profile_header}>
          <h3>Profile</h3>
          <Space>
            <Button className={styles.cancel_btn} shape="round">
              Cancel
            </Button>

            <Button
              type="primary"
              shape="round"
              htmlType="submit"
              className={styles.save_btn}
            >
              Save
            </Button>
          </Space>
        </div>

        <div className={styles.user_details}>
          <div className={styles.tab2_header}>
            <div className={styles.profile_inner}>Edit Profile</div>
          </div>
          <Divider></Divider>
          <Row justify="space-evenly">
            <Col className={styles.profile_col} span={4}>
              <img src={Profileimg} alt="profileimg" width="100" height="100" />
              <Button className={styles.upload_btn} type="text">
                Upload Image
              </Button>
              <Button className={styles.remove_btn} type="text">
                Remove
              </Button>
            </Col>

            <Col span={9}>
              <Form.Item
                label="First Name"
                name="FirstName"
                rules={[
                  {
                    required: true,
                    message: "Please input First name!",
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="primaryemail"
                label="Primary Email"
                rules={[
                  {
                    type: "email",
                    message: "Please Input Primary Email Address!",
                  },
                ]}
              >
                <Input placeholder="Primary Email Address" />
              </Form.Item>
              <Form.Item
                name="primaryNumber"
                label="Primary Number"
                rules={[
                  {
                    required: true,
                    message: "Please Input Primary Phone number!",
                  },
                ]}
              >
                <Input placeholder="Primary Phone Number" />
              </Form.Item>
              <Form.Item name="kycdetails" label="KYC Details">
                <Button className={styles.verify_btn} type="primary">
                  VERIFIED
                </Button>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label="Last Name"
                name="LastName"
                rules={[
                  {
                    required: true,
                    message: "Please Input Last name!",
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                name="secondaryemail"
                label="Secondary Email"
                rules={[
                  {
                    type: "email",
                    message: "Please Input Secondary Email Address!",
                  },
                ]}
              >
                <Input placeholder="Secondary Email Address" />
              </Form.Item>
              <Form.Item
                name="secondaryNumber"
                label="Secondary Number"
                rules={[
                  {
                    required: true,
                    message: "Please Input Phone number!",
                  },
                ]}
              >
                <Input placeholder="Secondary Phone Number" />
              </Form.Item>
              <Form.Item
                name="subscribe"
                label="Subscribe"
                rules={[
                  {
                    required: true,
                    message: "Please Input Subscribe!",
                  },
                ]}
              >
                <Select placeholder="Select subscribe mode">
                  {subscribe.map((fr, index) => {
                    return (
                      <Select.Option key={index} value={fr}>
                        {fr}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Col className={styles.profile_col} span={4}></Col>
            <Col span={18}>
              <Form.Item label="Descriptions">
                <TextArea rows={5} />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default Profileform;
