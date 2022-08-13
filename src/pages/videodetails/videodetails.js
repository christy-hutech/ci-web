import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Row,
  Col,
  Image,
  Divider,
  List,
  Input,
  Avatar,
  Select,
  Form,
  Card,
} from "antd";
import "./videodetails.css";
import Facebook from "../../assets/images/socialIcons/facebook-icon@2x.svg";
import LinkedIn from "../../assets/images/socialIcons/linkedin-icon@2x.svg";
import Twitter from "../../assets/images/socialIcons/twitter@2x.svg";
import ArrowRight from "../../assets/images/homeImgs/arrow-right-red.png";
const { Option } = Select;
const { Meta } = Card;

const VideoDetails = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  const titleData = [
    {
      title: "Divya Khosla",
    },
  ];
  return (
    <div>
      <div className="video_details_container">
        <Row>
        <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
          >
            <Typography className="video_details_header">
          Conservation Conversations E1: Wildlife Recovery in India
        </Typography>
            </Col>

        </Row>
        <div className="video_details_header_bottom"></div>
        <div>
        <div className="video_details_author_date">
          <Typography className="video_details_author_name">
            Shekar Dattatri
          </Typography>
          <Typography className="video_details_date">
            Thursday, Feb 17th, 2022
          </Typography>
        </div>
        <iframe
          className="video_details_iframe"
          src="https://www.youtube.com/embed/BBA1BMKn3LU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      </div>
      <div className="video_details_body">
        <Row gutter={[32, 32]}>
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            className="video_details_column"
          >
            <Row>
              <Col xs={8} sm={8} md={24} lg={24} xl={24}>
                <Image src={Facebook} />
              </Col>
              <Col
                xs={8}
                sm={8}
                md={24}
                lg={24}
                xl={24}
                className="video_details_linkedin_icon"
              >
                <Image src={LinkedIn} />
              </Col>
              <Col xs={8} sm={8} md={24} lg={24} xl={24}>
                <Image src={Twitter} />
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            className="video_details_column1"
          >
            <p className="video_details_paragraph">
              In Episode-1 of Conservation Conversations, renowned wildlife
              biologist, Dr. K. Ullas Karanth, of the Wildlife Conservation
              Society, talks about wildlife recovery in India.
            </p>
            <div className="video_details_author_information">
              <Typography className="video_details_author_name_div">
                About the author
              </Typography>
              <div className="video_details_author_bottom_border"></div>
              <p className="video_details_author_name_para">Shekar Dattatri</p>
              <p className="video_details_autor_content">
                Shakar founded and lead Conservation Initiatives, a
                Northeast-India based NGO dedicated to science-based
                conservation of endangered wildlife and their habitats. Divya is
                interested in new and feasible approaches to better improve our
                understanding of animal movement and dispersal. Varun has
                expertise on the Asian elephant and landscape-scale
                conservation, and hails from Northeast India.
              </p>
            </div>
            <Divider />
            <div>
              <h3 className="video_details_comment">Comments</h3>
              <div className="video_details_sort">
                <p className="video_details_comment_paragraph">
                  2 comments
                </p>
                <Form.Item name="sortBy" label="Sortby:">
                  <Select defaultValue="oldest">
                    <Option value="oldest">Oldest</Option>
                  </Select>
                </Form.Item>
              </div>

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
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                    />
                  </List.Item>
                )}
              />
              <Divider />
              <List
                itemLayout="horizontal"
                dataSource={titleData}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://i.pinimg.com/originals/3d/7c/76/3d7c76a706a82c783e7717ccecb88692.jpg" />
                      }
                    />
                    <Input size="large" placeholder="Add a comment..." />
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
        <Divider />
        <Typography className="video_details_related_video_header">
          Related Videos
        </Typography>

        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <Row>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel"
            >
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                return (
                  <Col xs={22} sm={22} md={7} lg={7} xl={7}>
                    <motion.div className="ci_home_campaigns_card">
                      <div>
                        <iframe
                          className="video_details_card_img"
                          src="https://www.youtube.com/embed/BBA1BMKn3LU"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="video_details_card_heading">
                        February 28, 2022 • 8 min
                      </div>
                      <div className="video_details_card_subheading">
                        Conservation Conservations E2: Human Wildlife
                        Coexistence
                      </div>
                    </motion.div>
                  </Col>
                );
              })}
            </motion.div>
          </Row>
          <div className="essential_details_ask_us_btn_wrapper">
            <button className="essential_details_ask_us_btn">
              View More <img src={ArrowRight} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoDetails;
