import { Col, Row, Typography, Button } from "antd";
import React, { useState } from "react";
import styles from "./index.module.css";
import Img from "../../../assets/images/homeImgs/cihomefeatured-left.png";
import BackgroundImg from "../../../assets/images/homeImgs/article-bg.png";
import ArrowRight from "../../../assets/images/homeImgs/arrow-right-red.png";
import LeftArrow from "../../../assets/images/homeImgs/left-arrow.png";
import RightArrow from "../../../assets/images/homeImgs/right-arrow.png";
import RedRightArrow from "../../../assets/images/homeImgs/arrow-right-red.png";
import { useNavigate } from "react-router";

function CiHomeLatestArticles() {
  const navigate = useNavigate()
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

  return (
    <div className={styles.ci_home_articles_container}>
      <Typography className={styles.ci_home_articles_heading}>
        Latest Articles
      </Typography>
      <div className={styles.ci_home_articles_heading_bottom_border}></div>
      <Row className={styles.ci_home_articles_content}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={17}
          xl={17}
          justify="space-between"
          className={styles.ci_home_articles_left_content}
        >
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div onClick={()=>navigate('/articledetails')} className={styles.ci_home_articles_left_content_cards}>
                <div
                  className={styles.ci_home_articles_left_content_card_details}
                >
                  <div
                    className={styles.ci_home_articles_left_content_card_fline}
                  >
                    Forging Linkages Across Regions for the Wide-ranging Asian
                    Elephant
                  </div>
                  <div
                    className={styles.ci_home_articles_left_content_card_sline}
                  >
                    By Shekar Dattatri
                  </div>
                  <div
                    className={styles.ci_home_articles_left_content_card_tline}
                  >
                    Connectivity across habitats and animal populations is
                    critical to conservation. Connectivity is forged by animal
                    movements..
                  </div>
                  <Button onClick={(e)=>e.stopPropagation()}
                    className={styles.ci_home_articles_left_content_card_btn}
                  >
                    Invasive Species
                  </Button>
                  <Button onClick={(e)=>{e.stopPropagation()}}
                    className={`${styles.ci_home_articles_left_content_card_btn} ${styles.seccond_btn}`}
                  >
                    Wildlife Tourism
                  </Button>
                </div>
                <div
                  className={
                    styles.ci_home_articles_left_content_card_img_wrapper
                  }
                >
                  <img
                    src={Img}
                    className={styles.ci_home_articles_left_content_card_img}
                  />
                </div>
              </div>
            );
          })}

          <div className={styles.ci_home_slider_container}>
            <div>
              <img src={LeftArrow} className={styles.arrow_btns} />
              <img
                src={RightArrow}
                className={`${styles.arrow_btns} ${styles.arrow_right}`}
              />
            </div>
            <Button
              onClick={() => navigate("/articles")}
              className={styles.ci_home_slider_viewmore}
            >
              View More{" "}
              <img src={RedRightArrow} className={styles.arrow_red_icon} />
            </Button>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={7}
          xl={7}
          className={styles.ci_home_articles_right_content}
        >
          <div className={styles.ci_home_articles_right_content_heading}>
            TRENDING TAGS
          </div>
          <div className={styles.ci_home_articles_right_content_tag_container}>
            {trendingTags.map((item, index) => {
              return (
                <Button className={styles.ci_home_articles_right_content_tags}>
                  {item}
                </Button>
              );
            })}
          </div>
          <div
            className={styles.ci_home_articles_right_content_ask_us}
            style={{
              backgroundImage: `url(${BackgroundImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              padding: "8%",
            }}
          >
            <div
              className={styles.ci_home_articles_right_content_ask_us_heading}
            >
              Ask Conservation India
            </div>
            <div
              className={
                styles.ci_home_articles_right_content_ask_us_heading_bottom_line
              }
            ></div>
            <div
              className={styles.ci_home_articles_right_content_ask_us_content}
            >
              Ask us any question related to wildlife conservation in India and
              we will answer it after consulting with our panel of experts.
            </div>
            <button
              className={styles.ci_home_articles_right_content_ask_us_btn}
            >
              Ask us <img src={ArrowRight} className={styles.ask_us_btn} />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CiHomeLatestArticles;
