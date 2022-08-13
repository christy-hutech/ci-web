import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { Button, Col, Row } from "antd";
import Img from "../../../assets/images/homeImgs/cihomefeatured-left.png";
import LeftArrow from "../../../assets/images/homeImgs/left-arrow.png";
import RightArrow from "../../../assets/images/homeImgs/right-arrow.png";
import RedRightArrow from "../../../assets/images/homeImgs/arrow-right-red.png";
import { useNavigate } from "react-router";

function CiHomeCampaigns() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const navigate = useNavigate()
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className={styles.ci_home_campaigns_container}>
      <div className={styles.ci_home_essentials_heading}>Campaigns</div>
      <div className={styles.ci_home_essentials_heading_bottom_border}></div>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={16}
          lg={12}
          xl={12}
          className={styles.ci_home_campaign_subheading}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </Col>
      </Row>
      <motion.div
        ref={carousel}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <Row>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={styles.inner_carousel1}
          >
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
              return (
                <Col xs={22} sm={22} md={16} lg={7} xl={7} onClick={()=>navigate('/campaigndetails')}>
                  <motion.div className={styles.ci_home_campaigns_card}>
                    <div>
                      <img
                        src={Img}
                        draggable="false"
                        className={styles.ci_home_campaigns_card_img}
                      />
                    </div>
                    <div className={styles.ci_home_campaigns_card_heading}>
                      Oil Palm Cultivation Can Be Expanded While Sparing
                      Biodiversity in India
                    </div>
                    <div className={styles.ci_home_campaigns_card_subheading}>
                      A leopard was found dead in Manpur forest range near Mhow,
                      raising suspicion that a gang of..
                    </div>
                    <div className={styles.ci_home_campaigns_card_btn_wrapper}>
                      <Button>Oil Palms</Button>
                      <Button className={styles.ci_home_btn_mrgn_left}>
                        Northeast India NE
                      </Button>
                      {/* <Button style={{marginLeft:'0px'}} className={styles.ci_home_btn_mrgn_left}>
                        + 2 More
                      </Button> */}
                    </div>
                  </motion.div>
                </Col>
              );
            })}
          </motion.div>
        </Row>
      </motion.div>
      
      <div className={styles.ci_home_slider_container}>
            <div>
              <img src={LeftArrow} className={styles.arrow_btns} />
              <img
                src={RightArrow}
                className={`${styles.arrow_btns} ${styles.arrow_right}`}
              />
            </div>
            <Button
              onClick={() => navigate("/campaign")}
              className={styles.ci_home_slider_viewmore}
            >
              View More{" "}
              <img src={RedRightArrow} className={styles.arrow_red_icon} />
            </Button>
          </div>
    </div>
  );
}

export default CiHomeCampaigns;
