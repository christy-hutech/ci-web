import React from "react";
import "./ConservationTopics.css";
import {
  Col,
  Row,
  Form,
  Input,
  Select,
  Card,
  List,
  Space,
  Pagination 
} from "antd";

const { Option } = Select;
const { Meta } = Card;
const data = Array.from({
  length: 3,
}).map((_, i) => ({
  title: `A Leopard’s Meal – the Ubiquitous Feral Dog`,
  avatar: "https://joeschmoe.io/api/v1/random",
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality designs..",
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ConservationTopics = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="ci_form">
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 className="ci_heading">Conservation India Topics</h2>
        <div className="ci_form_heading_border"></div>
        <Row>
          <Col xs={24} sm={14} md={12} lg={12} xl={12}>
            <p className="ci_form_subheading">
              Lorem isupum Conservation India Topics Lorem isupum Conservation
              India Topics Lorem isupum Conservation India Topics
            </p>
          </Col>
          <Col xs={24} sm={14} md={12} lg={6} xl={6}></Col>
          <Col xs={24} sm={14} md={12} lg={6} xl={6}>
            <Form.Item name="sortBy" label="SORT BY">
              <Select defaultValue="last7days">
                <Option value="last7days">Last 7 days</Option>
                <Option value="last30days">Last 30 days</Option>
                <Option value="lastyear">Last year</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[32, 32]}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
          <Col xs={24} sm={14} md={8} lg={8} xl={8}>
            <div className="card-div">
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://www.conservationindia.org/wp-content/files_mf/feral-dog-illustration-copy-CI.jpg"
                  />
                }
              >
                <Meta
                  title="Feral Dogs - Wildlife Conflicts"
                  description="13 Articles • 2 Images"
                />
                <div className="ci_form_bottom_line"></div>
              </Card>

              <List
                itemLayout="vertical"
                size="large"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    key={item.title}
                    extra={
                      <img
                        style={{ height: "86px", width: "86px" }}
                        alt="logo"
                        src="https://www.conservationindia.org/wp-content/files_mf/Feral-Dog-with-Little-Grebe-as-prey-CI-1.jpg"
                      />
                    }
                  >
                    <List.Item.Meta
                      title={<a href={item.href}>{item.title}</a>}
                    />
                    <p className="ci_form_item_content">{item.content}</p>
                  </List.Item>
                )}
              />
              <div className="ci_form_view">Veiw More</div>
            </div>
          </Col>
          );
        })}
        </Row>
        <Pagination defaultCurrent={1} total={20} />;

        <h2 className="ci_subscribe">Subscribe to our Newsletter</h2>
        <div className="ci_form_bottom"></div>
        <p className="subscribe_para">
          Want to stay in touch with our latest articles and posts?Subscribe
          <br />
          to get Conservation India posts right in your inbox.
        </p>
        <Row>
          <Col xs={24} sm={24} md={11} lg={8} xl={8}></Col>
          <Col xs={24} sm={24} md={11} lg={8} xl={8}>
            <Form.Item name="email" className="email_input">
              <Input
                placeholder="Enter Email Address"
                suffix={
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="22" cy="22" r="22" fill="#1F1A17" />
                    <path
                      d="M16 22L27 22"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="square"
                    />
                    <path
                      d="M22 16L28 22L22 28"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="square"
                    />
                  </svg>
                }
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ConservationTopics;
