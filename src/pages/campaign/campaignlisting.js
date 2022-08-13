import React, { useState } from "react";
import styles from "./campaign.module.css";
import { Col, Row, Select } from 'antd';
import img1 from "./Images/camp-img1.jpg";
import img2 from "./Images/camp-img2.jpg";
import img3 from "./Images/camp-img3.jpg";
import img4 from "./Images/camp-img4.jpg";
import img5 from "./Images/camp-img6.jpg";
import img6 from "./Images/camp-img7.jpg";
import img7 from "./Images/camp-img8.jpg";
import img8 from "./Images/camp-img10.jpg";
import img9 from "./Images/camp-img11.jpg";
import img10 from "./Images/camp-img12.jpg";
import img11 from "./Images/camp-img13.jpg";
import img12 from "./Images/camp-img14.jpg";


const Campaign = () => {
  const [campaignListingData, setCampaignListingData ]= useState([
    {
      heading:'Oil Palm Cultivation Can Be Expanded While Sparing Biodiversity in India',
      sub_heading:'sub heading goes hre',
      img:img1,
      },
      {
        heading:'Proposed Development Tsunami will Engulf Great Nicobar Islands',
        sub_heading:'sub heading goes hre',
        img:img2,
        },
        {
          heading:'Proposed Amendments to the Forest (Conservation) Act, 1980. Act Now!',
          sub_heading:'sub heading goes hre',
          img:img3,
          },
          {
            heading:'Oil Palm Cultivation Can Be Expanded While Sparing Biodiversity in India',
            sub_heading:'sub heading goes hre',
            img:img4,
            },
            {
              heading:'Proposed Development Tsunami will Engulf Great Nicobar Islands',
              sub_heading:'sub heading goes hre',
              img:img5,
              },
              {
                heading:'Proposed Amendments to the Forest (Conservation) Act, 1980. Act Now!',
                sub_heading:'sub heading goes hre',
                img:img6,
                },
                {
                  heading:'Oil Palm Cultivation Can Be Expanded While Sparing Biodiversity in India',
                  sub_heading:'sub heading goes hre',
                  img:img7,
                  },
                  {
                    heading:'Proposed Development Tsunami will Engulf Great Nicobar Islands',
                    sub_heading:'sub heading goes hre',
                    img:img8,
                    },
                    {
                      heading:'Proposed Amendments to the Forest (Conservation) Act, 1980. Act Now!',
                      sub_heading:'sub heading goes hre',
                      img:img9,
                      },
                      {
                        heading:'Oil Palm Cultivation Can Be Expanded While Sparing Biodiversity in India',
                        sub_heading:'sub heading goes hre',
                        img:img10,
                        },
                        {
                          heading:'Proposed Development Tsunami will Engulf Great Nicobar Islands',
                          sub_heading:'sub heading goes hre',
                          img:img11,
                          },
                          {
                            heading:'Proposed Amendments to the Forest (Conservation) Act, 1980. Act Now!',
                            sub_heading:'sub heading goes hre',
                            img:img12,
                            }

  ])
  return (
<div className={styles.body_gallery }>
      <div className={styles.gallery_head }>Campaign</div>
      <div className={styles.line_gallery }></div>
      <div className={styles.gallery_main }>
      <p className={styles.para_campaign}>There are many variations 
      of passages of Lorem Ipsum available, but the majority have suffered 
      alteration in some form, by injected humour.</p>
        <div className={styles.sort_gallery }>
          </div>
          <div className={ styles.main_sort}>
          <h3 className={ styles.head_sort}>Sort By</h3>
          <div className={styles.bar_gallery}>
            <Select className={ styles.post_new} placeholder="Last 7 days">
              <Select.Option value="-1">Last 7 days</Select.Option>
              <Select.Option class="level-0" value="26">Last 30 days</Select.Option>
              <Select.Option class="level-0" value="26">Last year</Select.Option>
            </Select>
          </div>
          </div>
        </div>
      
      {/* <div className="grid-campaign"> */}
      <Row justify=" space-evenly" className={styles.card_container}>
        {campaignListingData.map((item, index) => {
          return (<Col className="gutter-row" xs={24}
            sm={24}
            md={24}
            lg={7}
            xl={7}>
            <div className={styles.main_card}>
              <img className={styles.gallery_img}
                src={item.img} />

              <div className={styles.box_gallery}>
                <h3  className={styles.first_gallery}>{item.heading}</h3>
              <h5  className={styles.second_gallery}>{item.sub_heading}</h5>
              <div className={styles.row_main}>
          <div className={styles.section_row}>Oil Palms
          </div>
          <div className={styles.section_rowone}>Northeast India NE
          </div>
          <div className={styles.section_row}>+ 2 more
          </div>
        </div>
              </div>
            </div>
          </Col>
          )
        })}

      </Row>
      <hr />
    </div>
     );
    };
    
    export default Campaign;