import React, { useState } from "react";
import { Button, Divider, Row, Col, Select, Form, List, Space, DatePicker } from "antd";
import "./SearchResult.css";
import moment from 'moment';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const { Option } = Select;
const data = Array.from({
  length: 8,
}).map((_, i) => ({
  title: `Forging Linkages Across Regions for the Wide-ranging Asian Elephant`,
  avatar: "https://joeschmoe.io/api/v1/random",
  description: "By Shekar Dattatri",
  content:
    "Connectivity across habitats and animal populations is critical to conservation. Connectivity is forged by animal movements..",
}));

const datas = Array.from({
    length: 3,
  }).map((_, i) => ({
    title: `Forging Linkages Across Regions for the Wide-ranging Asian Elephant`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description: "By Shekar Dattatri",
    content:
      "Connectivity across habitats and animal populations is critical to conservation. Connectivity is forged by animal movements..",
  }));

const SearchResult = () => {
    const [isShown, setIsShown] = useState(false);

    const onClickHandle = (event) => {

        setIsShown(current => !current)
    }
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="ci_search_result">
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 className="ci_heading">Showing results for "Endangered Species"</h2>
        <Button className="first_button"> Endangered Species </Button>
        <Button className="second_button" onClick={onClickHandle}> Advanced Search </Button>
        {isShown && (
        <div className="center_div">
        <Row>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Form.Item name="filterByTags" label="Filter by Tags" wrapperCol={{
            span: 18,
          }}>
              <Select defaultValue="forestrightact">
                <Option value="forestrightact">Forest Rights Act</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Form.Item name="filterByType" label="Filter by Type" wrapperCol={{
            span: 18,
          }}>
              <Select defaultValue="typeofposts">
                <Option value="typeofposts">Type of posts</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Form.Item
              label="Last Modified"
            >
              <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
            </Form.Item>
          </Col>
        </Row>
        <Button className="clear_button">Clear</Button>
              <Button className="search_button">Search</Button>
      </div>
      )}
        
        <Divider />
        <Row>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <h3 className="ci_heading">Articles</h3>
            <div className="ci_form_heading_border"></div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} className="sort-dropdown">
            <Form.Item name="sortBy" label="SORT BY">
              <Select defaultValue="relevance">
                <Option value="relevance">Relevance</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16} className="list-title">
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 6,
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                  extra={
                    <img
                      style={{ height: "159px", width: "238px" }}
                      alt="logo"
                      src="https://www.elephantnaturepark.org/wp-content/uploads/2020/04/94351084_2570825139826450_7563146999747313664_n.jpg"
                    />
                  }
                >
                  <List.Item.Meta
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  <p className="content_para">{item.content}</p>
                  {<Button className="third_button">Wildlife Tourism</Button>}
                  {
                    <Button className="fourth_button">
                      Endangered Species
                    </Button>
                  }
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} className="related-title">
            <p className="related_topic">Related Topics</p>

            <List
              itemLayout="vertical"
              size="large"
              dataSource={datas}
              renderItem={(item) => (
                <List.Item
                className="list_topic"
                  key={item.title}
                  extra={
                    <img
                      style={{ height: "86px", width: "86px" }}
                      alt="logo"
                      src="https://www.elephantnaturepark.org/wp-content/uploads/2020/04/94351084_2570825139826450_7563146999747313664_n.jpg"
                    />
                  }
                  
                >
                  <List.Item.Meta
                    title={<a href={item.href}>{item.title}</a>}
                  />
                  <p className="content-item">{item.content}</p>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchResult;
