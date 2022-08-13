import { Button, Col, Row, Typography } from "antd";
import React from "react";
import styles from "./index.module.css";
import Img from "../../../assets/images/homeImgs/cihomefeatured-left.png";
import LeftArrow from "../../../assets/images/homeImgs/left-arrow.png";
import RightArrow from "../../../assets/images/homeImgs/right-arrow.png";
import RedRightArrow from "../../../assets/images/homeImgs/arrow-right-red.png";
import { useNavigate } from "react-router";

const { Paragraph } = Typography;
function CiHomeTopics() {
  const navigate = useNavigate();
  return (
    <div className={styles.ci_home_topics_container}>
      <Typography className={styles.ci_home_topics_heading}>
        Conservation India Topics
      </Typography>
      <div className={styles.ci_home_elinks_heading_bottom_border}></div>
      <div className={styles.ci_home_topics_subheading}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </div>
      <Row
        justify="space-between"
        className={styles.ci_home_topics_card_container}
      >
        {[1, 1, 1].map((item, index) => {
          return (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={7}
              xl={7}
              className={styles.ci_home_topics_antd_col}
            >
              <div>
                <img src={Img} className={styles.ci_home_topics_card_img} />
              </div>
              <div className={styles.ci_home_topics_card_img_details}>
                <div className={styles.ci_home_topics_card_img_details_heading}>
                  Feral Dogs - Wildlife Conflicts
                </div>
                <div className={styles.ci_home_topics_card_img_count}>
                  {13} Articles • {2} Images
                </div>
                <div className={styles.ci_home_topics_card_line}></div>
              </div>
              <div className={styles.ci_home_topics_card_sub_cards_container}>
                {[1, 2, 3].map((item, index) => {
                  return (
                    <div className={styles.ci_home_topics_card_sub_cards}>
                      <div
                        className={styles.ci_home_topics_card_sub_cards_content}
                      >
                        <div
                          className={
                            styles.ci_home_topics_card_sub_cards_content_heading
                          }
                        >
                          A Leopard’s Meal – the Ubiquitous Feral Dog
                        </div>
                        <div
                          className={
                            styles.ci_home_topics_card_sub_cards_content_sub_heading
                          }
                        >
                          Man’s so-called best friend is indeed the most
                          numerous ....
                        </div>
                      </div>
                      <div className={styles.ci_home_topics_card_sub_cards_img}>
                        <img
                          src={Img}
                          className={
                            styles.ci_home_topics_card_sub_cards_img_tag
                          }
                        />
                      </div>
                    </div>
                  );
                })}
                <div
                  onClick={() => navigate("/topic-details")}
                  className={styles.ci_home_topics_card_sub_cards_view_more}
                >
                  Veiw More
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <div className={styles.ci_home_slider_container}>
        <div>
          <img src={LeftArrow} className={styles.arrow_btns} />
          <img
            src={RightArrow}
            className={`${styles.arrow_btns} ${styles.arrow_right}`}
          />
        </div>
        <Button
          onClick={() => navigate("/topics")}
          className={styles.ci_home_slider_viewmore}
        >
          View More{" "}
          <img src={RedRightArrow} className={styles.arrow_red_icon} />
        </Button>
      </div>
    </div>
  );
}

export default CiHomeTopics;
