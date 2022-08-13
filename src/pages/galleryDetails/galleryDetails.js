import React, { useEffect, useRef, useState } from "react";
// import "./galleryDetails.css";
import GalleryImg from "../../../src/assets/images/galleryDetails/gallery-img.svg";
import Img2 from "../../../src/assets/images/galleryDetails/img-2.svg";
import Img3 from "../../../src/assets/images/galleryDetails/img-3.svg";
import PictureAward from "../../../src/assets/images/galleryDetails/picture-award.svg";
import RightArrow from "../../../src/assets/images/right-arrow@2x.svg";
import UserImg from "../../../src/assets/images/galleryDetails/user-img.svg";
import RelatedImg from "../../../src/assets/images/galleryDetails/related-img.png";
import LeftMove from "../../../src/assets/images/galleryDetails/left-move.svg";
import RightMove from "../../../src/assets/images/galleryDetails/right-move.svg";
import { Button, Col, Input, Row, Select } from "antd";
import { motion } from "framer-motion";
import styles from "./galleryDetails.module.css";
import LinkedInImg from "../../../src/assets/images/linkdin.svg";
import FaceBookImg from "../../../src/assets/images/facebook.svg";
import TwitterImg from "../../../src/assets/images/twitter.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./index.css";
function GalleryDetails() {
  const [tags, setTags] = useState([
    "NBWL Matters",
    "Endangered Species",
    "Feral Dogs - Wildlife Conflicts",
    "Invasive Species",
    "Wildlife Tourism",
  ]);
  const [comments, setCooments] = useState([
    {
      img: UserImg,
      name: "Divya Khosla",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      img: UserImg,
      name: "Divya Khosla",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      img: UserImg,
      name: "Divya Khosla",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <div className={styles.gallery_details_top_section}>
        <div className={styles.gallery_details_top_section_inner_div}>
          <div className={styles.heading}>
            Major Mortality of Birds in a Vineyard in Karnataka
          </div>
          <div className={styles.border_bottom}></div>
          <div className={styles.name_publish_date}>
            <div className={styles.name}>Mike Prince</div>
            <div className={styles.publisg_date}>Thursday, Feb 17th, 2022</div>
          </div>
          <div className={styles.img_div1}>
            <Carousel>
              {[1, 2, 3].map((item, index) => {
                return (
                  <div>
                    <img src={GalleryImg} />
                    <div className={styles.img_title}>
                      {/* <img src={PictureAward} className={styles.award_img_icon}/> */}
                      Picture of the week
                    </div>
                  </div>
                );
              })}
            </Carousel>

            {/* <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={LeftMove}
                style={{
                  height: "20px",
                  width: "20px",
                  position: "absolute",
                  left: "-10%",
                  top: "50%",
                }}
              />
              <img src={GalleryImg} />
              <img
                src={RightMove}
                style={{
                  height: "20px",
                  width: "20px",
                  position: "absolute",
                  right: "-10%",
                  top: "50%",
                }}
              />
            </div>
            <div className={styles.img_title}>
              <img src={PictureAward} />
              Picture of the week
            </div> */}
          </div>
          {/* <div className={styles.sub_imgs}>
            <div className={styles.arrow_btns}>
              <img src={RightArrow} />
              <img src={RightArrow} />
            </div>
            <div className={styles.sub_images}>
              {[GalleryImg, GalleryImg, GalleryImg, GalleryImg].map(
                (item, index) => {
                  return <img src={item} key={index} />;
                }
              )}
            </div>
          </div> */}
        </div>
      </div>
      <Row justify="space-between" className={styles.second_container_row}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={6}
          xl={6}
          className={styles.second_container_third_col}
        >
          <img src={FaceBookImg} />
          <img src={LinkedInImg} />
          <img src={TwitterImg} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className={styles.gallery_details_content}>
            <div className={styles.gallery_details_content_top_card}>
              <h4>Chosen as “Picture of the week”</h4>
              <div>
                Listed in Schedule I of the Wildlife Protection Act, 1972, the
                Fishing Cat is accorded the highest level of protection as the
                tiger, lion and the elephant in India. The fishing cat is also
                the State Animal of West Bengal and local conservation NGOs feel
                that the cat needs coordinated action from all departments for
                its protection.
              </div>
            </div>
            <div className={styles.gallery_details_content_details_text}>
              <p>
                On 20th January 2022, local conservationist Chitrak Pramanick
                was informed of the killing of three female Fishing Cats in
                Bagnan, Howrah district. The ​carcasses were dumped at one place
                with the legs tied with plastic ropes. No injury marks were
                visible on the bodies and from the condition of the carcasses,
                it appeared that they were killed over a period of 3-4 days,
                probably by poisoning. The shocking incident seems to be a
                symbolic display of mockery against long term conservation
                efforts in the district.
              </p>
              <p>
                The Forest Department then lodged a prayer to the Alipore
                District Court to involve the Police Department in arresting the
                culprits. The court gave a directive to the police to issue a
                warrant and arrest the culprits.
              </p>
              <p>
                Listed in Schedule I of the Wildlife Protection Act, 1972, the
                Fishing Cat is accorded the highest level of protection as the
                tiger, lion and the elephant in India. The fishing cat is also
                the state animal of West Bengal and local NGOs feel that the cat
                needs coordinated action from all departments for its
                protection.
              </p>
            </div>
            <div className={styles.gallery_details_content_details_update_text}>
              Update: The culprits have got anticipatory bail and are not in
            </div>
            <div className={styles.gallery_details_content_details_tags}>
              {tags.map((item, index) => {
                return <Button>{item}</Button>;
              })}
            </div>
            <div className={styles.gallery_details_content_details_comment}>
              <div className={styles.heading}>Comments</div>
              <div className={styles.comments_sortby}>
                <div>2 comments</div>
                <Select defaultValue={"oldest"}>
                  <Select.Option>Oldest</Select.Option>
                  <Select.Option>Newest</Select.Option>
                </Select>
              </div>
            </div>
            <div className={styles.gallery_details_content_comments}>
              {comments.map((item, index) => {
                return (
                  <div className={styles.coment_card}>
                    <img src={item.img} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.add_comment}>
              <img src={UserImg} style={{ height: "30px", width: "30px" }} />
              <Input
                placeholder="add a comment.."
                className={styles.Add_comment_input_box}
              />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}></Col>
      </Row>
      <div className={styles.gallery_details_related_imgs}>
        <div className={styles.heading}>Related Images</div>

        <motion.div
          ref={carousel}
          className={styles.gallery_details_carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <Row>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className={styles.gallery_details_inner_carousel}
            >
              {[RelatedImg, Img2, Img3, RelatedImg, Img2, Img3].map(
                (item, index) => {
                  return (
                    <Col
                      xs={22}
                      sm={22}
                      md={16}
                      lg={7}
                      xl={7}
                      style={{ marginRight: "20px" }}
                    >
                      <motion.div
                        className={styles.gallery_details_carousel_card}
                      >
                        <img
                          draggable="false"
                          src={item}
                          className={
                            styles.gallery_details_related_carousel_img
                          }
                        />
                        <div
                          className={styles.gallery_details_related_img_title}
                        >
                          A giant squirrel dead next to road near Tamilnadu
                        </div>
                      </motion.div>
                    </Col>
                  );
                }
              )}
            </motion.div>
          </Row>
        </motion.div>
      </div>
    </div>
  );
}

export default GalleryDetails;
