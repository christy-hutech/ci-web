import React, {useState} from "react";
import { List, Col, Row, Form, Input, Typography, Image, Avatar, Divider, Button} from "antd";
import "./essentialdetails.css";
import TextArea from "antd/lib/input/TextArea";
import ArrowRight from "../../assets/images/homeImgs/arrow-right-red.png";
import Facebook from "../../assets/images/socialIcons/facebook-icon@2x.svg";
import LinkedIn from "../../assets/images/socialIcons/linkedin-icon@2x.svg";
import Twitter from "../../assets/images/socialIcons/twitter@2x.svg";

const EssentialDetails = () => {
  const [trendingTags, setTrensdingTags] = useState([
    "Arunachal Pradesh",
    "Community Conservation",
    "Dibang Valley",
    "Conservation campaigns",
    "Forest Advisory Committee (FAC)",
  ]);
  const data = Array.from({
    length: 1,
  }).map((_, i) => ({
    title: `India’s Conservation Challenges`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description: "Visionary conservationist - Ullas Karanth",
    content: '"I think there is still reason for hope"',
  }));
  const titleData = [
    {
      title: "Divya Khosla",
    },
  ];

  return (
    <div className="essential_details_page">
      <div className="essential_details_page_card">
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
                  src="https://st2.depositphotos.com/1524415/11013/i/950/depositphotos_110135304-stock-photo-elderly-active-man-hiking-in.jpg"
                />
              }
            >
              <List.Item.Meta
                title={
                  <a href={item.href}>
                    {item.title}
                    <div className="topic_details_page_images_bottom_border"></div>
                  </a>
                }
                description={item.description}
              />
              <p className="topic_details_content">{item.content}</p>
            </List.Item>
          )}
        />
      </div>
      <div className="essential_details_content">
        <Row gutter={[32, 32]}>
          <Col
            xs={24}
            sm={24}
            md={4}
            lg={4}
            xl={4}
            className="essential_details_column"
          >
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Image src={Facebook} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} className="essential_details_linkedin_icon">
                <Image src={LinkedIn} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
            className="essential_details_column"
          >
            <h3 className="essentail_details_headers">
              Wildlife conservation at crossroads
            </h3>
            <h3 className="essentail_details_headers">
              An interview with Dr. K. Ullas
            </h3>
            <p className="essentail_details_paragraph">
              Karanth Dr Ullas Karanth, a Senior Scientist with the
              international NGO, Wildlife Conservation Society (WCS), is a
              world-renowned wildlife biologist. In a wide-ranging interview
              with wildlife and conservation filmmaker, Shekar Dattatri, he
              outlines the basic problems that beset wildlife conservation in
              India’s human dominated landscape, and shares his views on
              preserving these last wild places. (This is an updated version of
              an interview that was first published under the title ‘Not much
              time left’ in the Deccan Herald in February 2002).
            </p>
            <h3 className="essentail_details_headers">
              India’s rich wildlife heritage is facing several threats. Just how
              serious is the problem?
            </h3>
            <p className="essentail_details_paragraph">
              India is renowned as the land of the tiger and the elephant; many
              of our gods are depicted riding peacocks or tigers. But sadly, the
              equation that existed between people and wildlife centuries ago
              has vanished, and our Protected areas, which comprise a mere 4% of
              India’s landscape, are now mere islands amidst a sea of people,
              with tremendous demands and pressures being put on them. The most
              serious problem that I see today is the neglect and collapse of
              basic wildlife protection capacity during the last decade. This
              “mission-drift” has resulted from several causes: lack of
              political will, deterioration in the quality of forest
              administration, and the influence of international conservation
              paradigms that blindly promote “sustainable use” as a solution,
              while failing to recognize the overexploited status of the forest
              resources targeted for such use.
            </p>

            <h3 className="essentail_details_headers">
              What, in your opinion, are the most urgent threats to wildlife?
            </h3>
            <p className="essentail_details_paragraph">
              By far the most urgent threat is the pressure from illegal hunting
              or poaching. We still have substantial amounts of forests left in
              some areas, particularly in the huge swathes of the tribal belts
              of Central and North East India, but they are “empty forests”. The
              wildlife in them has mostly been killed off, eaten or sold. The
              killers come in a variety of forms: they may be local people
              hunting for the pot, using snares or guns, or they may be the
              lowest link in a mafia that is involved in the massive
              international illegal trade in wildlife that is today almost as
              big as the drug trade. In addition, during the past decade,
              reckless development in the form of new highways, mines, dams and
              even so-called ecotourism have emerged as major indirect threats
              to wildlife habitats both inside nature reserves, as well as
              outside them. There are powerful lobbies pushing these projects..
            </p>
            <h3 className="essentail_details_headers">
              As a biologist, can you tell us about the impact of poaching?
            </h3>
            <p className="essentail_details_paragraph">
              The most severe impact of poaching is that it depresses wildlife
              populations. Many species get hunted down to levels below which
              their populations are not viable. Poaching also has secondary
              impacts. If herbivores such as deer, gaur, and wild pig are killed
              without respite, a tigress, which needs to make about 50 or 60
              kills a year to survive, won’t be able to raise her cubs. The
              third thing is, when we take species out of a wildlife community,
              we are not even sure what the ultimate impact will be. You may be
              taking out a species of civet or a species of bird that is crucial
              for pollinating a tree or dispersing its seeds. So, rampant
              poaching is dismantling, at random, a very intricate piece of
              machinery that nature has built over millions of years, the
              consequences of which we do not even fully comprehend today.
            </p>

            <h3 className="essentail_details_headers">
              What’s the modus operandi of poachers in our forests?
            </h3>
            <p className="essentail_details_paragraph">
              There is a common misconception that a poacher is always someone
              who shoots animals with a gun. In actual fact, poaching takes
              place in very many different ways. Poachers are often harmless and
              humble looking local people operating quietly in the forest. A
              very common technique is to set snares on trails used by animals…
              these are simple snares made of telephone wire or motorcycle
              clutch cables, which can kill a deer or even a tiger. ‘Deadfall
              traps’ are set, ‘jaw traps’ are set…..some of these are extremely
              cruel. But one thing is common to all these forms of silent
              poaching – they are very hard to detect. You can hear a gun shot,
              and try to corner the poacher; but a silently set snare, a
              poisoned carcass or a deadfall trap is a different matter. You may
              not even know such poaching is going on, but it’s going on all
              over the country in our forests on a massive scale.
            </p>
            <div>
              <h3 className="essential_details_comment">Comments</h3>
              <p className="essential_details_comment_paragraph">2 comments</p>
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

                  // title={<a href="">{item.title}</a>}
                  // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                />
                <Input size="large" placeholder="Add a comment..." />
              </List.Item>
            )}
          />
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
            className="essential_details_column"
          >
            <p className="topic_details_authors">Tips and More</p>
            <p className="topic_details_subparagraph">
              New to Conservation India? Here is a curated list of tips and
              educational reading material.
            </p>
            <div className="essential_details_typography"></div>
            <Typography className="typo">File Inspection under RTI</Typography>
            <div className="essential_details_typography"></div>
            <div className="essential_details_ask_us_btn_wrapper">
              <button className="essential_details_ask_us_btn">
                View More <img src={ArrowRight} />
              </button>
            </div>
          </Col>
        </Row>

        <Divider />
        <div className="ci_home_articles_right_content_tag_container">
            {trendingTags.map((item, index) => {
              return (
                <Button className="ci_home_articles_right_content_tags">
                  {item}
                </Button>
              );
            })}
          </div>

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
              Ask us any question related to wildlife conservation in India and
              we will answer it after consulting with our panel of experts.
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
    </div>
  );
};

export default EssentialDetails;
