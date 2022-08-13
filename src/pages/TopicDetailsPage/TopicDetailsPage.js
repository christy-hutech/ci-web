import React, { useState, useRef, useEffect } from "react";
import "./TopicDetailsPage.css";
import { motion } from "framer-motion";
import { List, Col, Row, Form, Input, Select, Button, Avatar } from "antd";
import TextArea from "antd/lib/input/TextArea";
import fileFolder from "../../assets/images/topicDetailsImages/icon1@2x.svg";
import imageFolder from "../../assets/images/topicDetailsImages/icon2@2x.svg";
import ArrowRight from "../../assets/images/homeImgs/arrow-right-red.png";

const { Option } = Select;
const TopicDetailsPage = () => {
  const [trendingTags, setTrensdingTags] = useState([
    "NBWL Matters",
    "Endangered Species",
    "Feral Dogs - Wildlife Conflicts",
    "Invasive Species",
    "Wildlife Tourism",
    "Law & Governance",
    "Human Resettlement",
    "Habitat Destruction",
    "Wildlife Crime & Trade",
    "Conservation Campaign",
    "Forest Rights Act",
    "Human-Wildlife Conflicts",
  ]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  const data = Array.from({
    length: 1,
  }).map((_, i) => ({
    title: `Feral Dogs - Wildlife Conflicts`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "Man’s so-called best friend is indeed the most numerous and widespread of the world’s carnivores. In addition to posing as competition to wild carnivores, as demonstrated here, feral dogs are known reservoirs of epidemic-causing infectious pathogens of many wild carnivores.",
  }));
  const datas = Array.from({
    length: 5,
  }).map((_, i) => ({
    title: `Forging Linkages Across Regions for the Wide-ranging Asian Elephant`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description: "By Shekar Dattatri",
    content:
      "Connectivity across habitats and animal populations is critical to conservation. Connectivity is forged by animal movements..",
  }));
  const titleData = [
    {
      title: "Divya Khosla",
    },
    {
      title: "Priya Singh",
    },
    {
      title: "Swapna Reddy",
    },
    {
      title: "Zoya Farooqui",
    },
  ];
  return (
    <div className="topic_details_page">
      <div className="topic_details_card">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              extra={
                <img
                  style={{ height: "365px", width: "596px" }}
                  alt="logo"
                  src="https://www.conservationindia.org/wp-content/files_mf/Feral-Dog-with-Little-Grebe-as-prey-CI-1.jpg"
                />
              }
            >
              <List.Item.Meta title={<a href={item.href}>{item.title}
              <div className="topic_details_page_images_bottom_border"></div>
              </a>
            } />
              <p className="topic_details_content">{item.content}</p>
              <div className="topic_details_sub_card">
              <div className="topic_details_article_images_section">
                <div className="div1">
                  <img src={fileFolder} className="" />
                </div>
                <div className="topic_details_file">
                  <p className="topic_details_integer">12</p>
                  <p className="topic_details_sub_article">Articles</p>
                </div>
              </div>

              <div className="topic_details_article_images_section1">
                <div className="div1">
                  <img src={imageFolder} className="" />
                </div>
                <div className="topic_details_file">
                  <p className="topic_details_integer">24</p>
                  <p className="topic_details_sub_article">Images</p>
                </div>
              </div>
              
              </div>
            </List.Item>
          )}
        />
      </div>
      <div className="topic_details_images">
        <h2 className="ci_heading">Images</h2>
        <div className="topic_details_page_images_bottom_border"></div>
        <p className="ci_form_subheading">
          There are many variations of passages of Lorem Ipsum available,\ but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>

        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <Row>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner_carousel"
            >
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                return (
                  <Col xs={22} sm={22} md={7} lg={7} xl={7}>
                    <motion.div className="ci_home_campaigns_card">
                      <div>
                        <img
                          src={
                            "https://www.conservationindia.org/wp-content/files_mf/Feral-Dog-with-Little-Grebe-as-prey-CI-1.jpg"
                          }
                          className="topic_details_card_image"
                        />
                      </div>
                    </motion.div>
                  </Col>
                );
              })}
            </motion.div>
          </Row>
        </motion.div>
      </div>
      <Row className="ci_article_section">
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <h3 className="ci_heading">Articles</h3>
          <div className="topic_details_page_article_bottom_border"></div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={16} xl={16} className="list_title">
          <List
            itemLayout="vertical"
            size="large"
            dataSource={datas}
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
                {<Button className="fourth_button">Endangered Species</Button>}
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="related_title">
          <p className="related_topic">TRENDING TAGS</p>
          <div className="ci_home_articles_right_content_tag_container">
            {trendingTags.map((item, index) => {
              return (
                <Button className="ci_home_articles_right_content_tags">
                  {item}
                </Button>
              );
            })}
          </div>
          <p className="topic_details_authors">Popular Authors</p>
          <p className="topic_details_subparagraph">
            New to Conservation India? Here is a curated list of tips and
            educational reading material.
          </p>
          <List
            itemLayout="horizontal"
            dataSource={titleData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://i.pinimg.com/originals/3d/7c/76/3d7c76a706a82c783e7717ccecb88692.jpg" />
                  }
                  title={<a href="">{item.title}</a>}
                  description="13 Articles • 2 Case Studies"
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Row className="ci_home_connect">
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="ci_home_connect_ask_querry_left_card"
        >
          <div className="ci_home_connect_ask_querry_heading_container">
            <div className="ci_home_connect_ask_querry_heading">
              Ask Conservation India
            </div>
            <div className="ci_home_connect_ask_querry_heading_bottom_border"></div>
          </div>
          <div className="ci_home_connect_ask_querry_subheading">
            Ask us any question related to wildlife conservation in India and we
            will answer it after consulting with our panel of experts.
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="ci_home_connect_ask_querry_right_card"
        >
          <Input size="large" placeholder="Name" />
          <Input
            size="large"
            placeholder="Email Address (will not be published)"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <TextArea rows={4} placeholder="Question" />
          <div className="ci_home_connect_ask_us_btn_wrapper">
            <button className="ci_home_connect_ask_us_btn">
              Ask Us <img src={ArrowRight} />
            </button>
          </div>
        </Col>
        
      </Row>

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
    </div>
  );
};

export default TopicDetailsPage;
