import { Col, Row, Typography, Button, Select } from "antd";
import React, { useState } from "react";
import styles from "./article.module.css";
import img1 from "../../assets/images/articleList/article-img1.svg";
import img2 from "../../assets/images/articleList/article-img2.svg";
import img3 from "../../assets/images/articleList/article-img3.svg";
import img4 from "../../assets/images/articleList/article-img4.svg";
import img5 from "../../assets/images/articleList/article-img5.svg";
import img6 from "../../assets/images/articleList/article-img6.svg";
import img7 from "../../assets/images/articleList/article-img7.svg";
import img8 from "../../assets/images/articleList/article-img8.svg";

function ArticleListing() {
    const [articleListingnewData, setArticleListingNewData] = useState([
        {
          heading: 'Forging Linkages Across Regions for the Wide-ranging Asian Elephant',
          sub_subheading: 'By Shekar Dattatri',
          sub_heading: 'Connectivity across habitats and animal populations is critical to conservation. Connectivity is forged by animal movements..',
          img: img1,
        },
        {
          heading: 'Against the Elephant: MoEFCC’s Guidelines for Human-Elephant Conflict Management',
          sub_subheading: 'By Divya Khosla',
          sub_heading: 'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
          img: img2,
        },
        {
          heading: 'Ecologists urge MoEFCC to revoke the EIA draft notification, 2020',
          sub_subheading: 'By Shekar Dattatri',
          sub_heading: 'On 11th August, 2020, a group of 20 wildlife biologists/ ecologists submitted their comments and objections against the draft..',
          img: img3,
        },
        {
          heading: 'Forging Linkages Across Regions for the Wide-ranging Asian Elephant',
          sub_subheading: 'By Shekar Dattatri',
          sub_heading: 'Connectivity across habitats and animal populations is critical to conservation. Connectivity is forged by animal movements..',
          img: img4,
        },
        {
          heading: 'Hessarghatta Grasslands Must Be Saved!',
          sub_subheading: 'By Divya Khosla',
          sub_heading: 'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
          img: img5,
        },
        {
          heading: 'Hessarghatta Grasslands Must Be Saved!',
          sub_subheading: 'By Divya Khosla',
          sub_heading: 'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
          img: img6,
        },
        {
          heading: 'Hessarghatta Grasslands Must Be Saved!',
          sub_subheading: 'By Divya Khosla',
          sub_heading: 'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
          img: img7,
        },
        {
          heading: 'Hessarghatta Grasslands Must Be Saved!',
          sub_subheading: 'By Divya Khosla',
          sub_heading: 'We urge the government to take a visionary decision to protect the natural grassland habitat of Hessarghatta for posterity by..',
          img: img8,
        }
      ])
    
      const [authorData, setAuthorData] = useState([
        {
          img: img1,
          authheading: 'Divya Khosla',
          subauthor: '24 Articles • 2 Case Studies',
        },
        {
          img: img1,
          authheading: 'Divya Khosla',
          subauthor: '24 Articles • 2 Case Studies',
        },
        {
          img: img1,
          authheading: 'Divya Khosla',
          subauthor: '24 Articles • 2 Case Studies',
        },
    
        {
          img: img1,
          authheading: 'Divya Khosla',
          subauthor: '24 Articles • 2 Case Studies',
        }
      ])
  

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
          {articleListingnewData.map((item, index) => {
            return (
              <div className={styles.ci_home_articles_left_content_cards}>
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
                  <Button
                    className={styles.ci_home_articles_left_content_card_btn}
                  >
                    Invasive Species
                  </Button>
                  <Button
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
                     src={item.img} 
                    className={styles.ci_home_articles_left_content_card_img}
                  />
                </div>
              </div>
            );
          })}
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={7}
          xl={7}
          className={styles.ci_home_articles_right_content}
        >
         
          
            <div
              className={styles.ci_home_articles_right_content_ask_us_heading}
            >
              
            </div>
            <div
              className={
                styles.ci_home_articles_right_content_ask_us_heading_bottom_line
              }
            >   <div className={ styles.main_sort}>
            <h3 className={ styles.head_sort}>Sort By</h3>
                 <div className={styles.bar_gallery}>
            <Select className={styles.post_new} placeholder="Last 7 days">
              <Select.Option value="-1">Last 7 days</Select.Option>
              <Select.Option class="level-0" value="26">Last 30 days</Select.Option>
              <Select.Option class="level-0" value="26">Last year</Select.Option>
            </Select>
            </div>
            </div>
            </div>
            <div className={styles.card_box}>
            <div className={styles.block_author}>
              <div className={styles.sec_block}>Wildlife Tourism
              </div>
              <div className={styles.sec_block}>Wildlife Crime & Trade
              </div>
            </div>
            <div className={styles.block_authornew}>
              <div className={styles.sec_block}>Invasive Species
              </div>
              <div className={styles.sec_block}>Habitat Destruction
              </div>
            </div>
            <div className={styles.block_authornew}>
              <div className={styles.sec_block}>Law & Governance
              </div>
              <div className={styles.sec_block}>Forest Rights Act
              </div>
            </div>
            <div className={styles.block_authornew}>
              <div className={styles.sec_block}>Human_Wildlife Conflicts
              </div>
              <div className={styles.sec_block}>Forest Rights Act
              </div>
            </div>
            <div className={styles.block_authorone}>
              <div className={styles.sec_blocknew}>
                Feral Dogs _ Wildlife Conflicts</div>
            </div>
            </div>
            <div
              className={styles.ci_home_articles_right_content_ask_us_content}
            > <div className={styles.main_head}>
            <h2 className={styles.author_head}>Popular Authors</h2>
            <h4 className={styles.subhead_article}>New to Conservation India? Here is a curated list of tips and educational reading material.</h4>
            {authorData.map((item, index) => {
              return (
                <>
                  <div className={styles.author_main}>
                    <img className={styles.image_wrapper} />
                    <div className={styles.flex_author}>
                      <h4 className={styles.case_author}>{item.authheading}</h4><br />
                      <h5 className={styles.case_two}>{item.subauthor}</h5>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
             
            </div>
            
    
        </Col>
      </Row>
    </div>
  );
}

export default ArticleListing;
