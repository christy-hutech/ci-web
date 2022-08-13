import React from 'react'
import "./campaignDetails.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Form, Input,Anchor,Image,Typography,Col, Divider, Row} from 'antd';
import cmpDetails1 from "../../assets/images/campaign/landscp.svg";
import fbLogo from "../../assets/images/campaign/fb-logo-1.svg";
import inLogo from "../../assets/images/campaign/in-logo-1.svg";
import twitterLogo from "../../assets/images/campaign/twitter-logo-1.svg";
import redLogo from "../../assets/images/campaign/red-logo.svg";
import download from "../../assets/images/campaign/download.svg";
import arrow from "../../assets/images/campaign/arrow.svg";
import rightArrow from "../../assets/images/campaign/right-arrow.svg";
import { campaignData,section1,section2Content} from '../../api/constants';

const style = {
  background: '#0092ff',
  padding: '8px 0',
};

const CampaignDetails = ()=> {
  const { TextArea } = Input;

  return (
    <div className='campaign-details-wrapper'>
      <section className="campaign-section-1">
        <div  className="sub-campaign-section-1">
          <div className="title-setion">
            <h1>
              {section1.title}
            </h1>
            <span className='out-line'></span>
            <p>{section1.content}</p>
            <span>{section1.name}</span>
          </div>
          <div className="img-section">
            <img className='action' src={section1.img} alt="Google" width="525"/>
          </div>
        </div>
      </section >
      <section className="campaign-section-2">
        <div className='sub-section-2'>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col className="gutter-row col-1" span={2}>
              <div className='col-1-wrapper'>
                <p><a href='#'><img src={fbLogo} alt="Google" width="48"/></a></p>
                <p><a href='#'><img src={inLogo} alt="Google" width="48"/></a></p>
                <p><a href='#'><img src={twitterLogo} alt="Google" width="48"/></a></p>
              </div>
            </Col>
            <Col className="gutter-row col-2" span={14}>
              <div className='col-2-wrapper'>
                <div className='colm-2-para'>
                  <p>{section2Content.content1}</p>
                  <p>{section2Content.content2}</p>
                </div>
                <div className='colm-2-box'>
                    <div><img  src={redLogo} alt="red" width="24"/></div>
                    <div>
                      <p>{section2Content.boxcontent.content1}</p>
                      <p>{section2Content.boxcontent.content2}</p>
                    </div>
                </div>
                <div className='colm-2-para'>
                  <p>{section2Content.content3}</p>
                  <p>{section2Content.content4}</p>
                  <p>{section2Content.content5}</p>
                  <p>{section2Content.content6}</p>
                  <p>{section2Content.content7}</p>
                  <p>{section2Content.content8}</p>
                </div>
                <div className='colm-2-box-letter'>
                  <h3>{section2Content.boxLetter.title}</h3>
                  <p>{section2Content.boxLetter.sub}</p>
                  <p>{section2Content.boxLetter.content1}</p>
                  <p>{section2Content.boxLetter.content2}</p>
                  <p>{section2Content.boxLetter.sig1}</p>
                  <p>{section2Content.boxLetter.sig2}</p>

                </div>
                <div className='colm-2-para'>
                    <p>{section2Content.content9}</p>
                </div>
              </div>
            </Col>
            <Col className="gutter-row col-3" span={8}>
              <div className="editorial-bg">
                <div className="editorial">
                {
                  campaignData.map((elem,index)=>{
                    return (
                      <>
                        <h1>{index === 0 ? elem.mainTitle : ''}</h1>
                        <div className="editorial-content">
                          <h3>{elem.title || ''}</h3>
                          <p>{elem.content || ''}</p>
                        </div>
                      </>
                    )
                  })
                }
                <div className='button-wrapper'><button className='more-options'>View More  <i class='fas fa-arrow-down'></i></button></div>
                </div>
                <div className='box-downloadpdf'>
                  <h3>{section2Content.boxdocument.title}</h3>
                  <span className='border-red'></span>
                  <p>{section2Content.boxdocument.content}</p>
                  <div className='downlobutton-wrapper'><button className='download-options'><img className='action' src={download} alt="download" width="20"/> Download PDF</button></div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section >
      <section className="campaign-section-3">
        <div className='sub-campaign-section-3'>
          <div className='main-title-wrapper'>
              <h1>{section2Content.imageGallery.mainTitle}</h1>
              <span className='out-line'></span>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              </p>
          </div>
          <div className='image-wrapper'>
            {section2Content.imageGallery.imageGroup.map((elem)=>{
              return(
                <>
                  <div>
                    <img className='action' src={elem.image} alt="Google" width="384"/>
                    <p className='img-para'>{elem.content}</p>
                  </div>
                </>
              )
            })}
          </div >
          <p className='image-details'>Images @ Shashank Dalvi, Dhritiman Mukherjee, John Goodrich and Ramki Sreenivasan / Conservation India.</p>
          <div className='button-wrapper'>
            <div className='sub-button-wrapper'>
                <button>Arunachal Pradesh</button>
                <button>Community Conservation</button>
                <button>Dibang Valley</button>
                <button>Conservation campaigns</button>
                <button>Forest Advisory Committee (FAC)</button>
            </div>
          </div>
        </div>
      </section>
      <section className='campaign-section-4'>
        <div className='sub-campaign-section-4'>
            <div className='enq-form-wrapper'>
              <Form
                  name="wrap"
                  labelCol={{
                  flex: '110px',
                  }}
                  labelAlign="left"
                  labelWrap
                  wrapperCol={{
                  flex: 1,
                  }}
                  colon={false}
                  className="enq-form"
              >
                <div className='enq-form-content'>
                  <div className='enq-title-wrapper'><h1>Ask Conservation India</h1><span></span></div>
                  <p>Ask us any question related to wildlife conservation in India and we will answer it after consulting with our panel of experts.</p>
                </div>
                <div className='enq-form-content'>
                  <Form.Item>
                    <Form.Item
                      name="name"
                      className="fName"
                      rules={[
                          {
                          required: true,
                          },
                      ]}
                    >  
                      <Input className='form-field-input'  placeholder="Name"/>
                    </Form.Item>
                    <Form.Item
                      name="email"
                      className="email"
                      rules={[
                          {
                          required: true,
                          },
                      ]}
                    >  
                      <Input  className='form-field-input' placeholder="Email Address (will not be published)"/>
                    </Form.Item>
                    <Form.Item
                      name="texarea"
                      className="textarea"
                      rules={[
                          {
                          required: true,
                          },
                      ]}
                    >
                      <TextArea className='form-field-input' rows={6} placeholder="Question" />
                    </Form.Item>
                  </Form.Item>
                  <Form.Item 
                    className='ask-us-btn'
                  >
                      <Button type="primary" htmlType="submit" className='enq-form-btn'>
                        Ask us <img className='action' src={arrow} alt="arrow" width="24"/>
                      </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
        </div>
      </section>
      <section className='campaign-section-5'>
        <div className='sub-campaign-section-5'>
          <h1>Subscribe to our Newsletter</h1>
          <span className='title-border'></span>
          <p>Want to stay in touch with our latest articles and posts? Subscribe to get Conservation India posts right in your inbox.</p>
          <Form
                name="wrap"
                labelCol={{
                flex: '110px',
                }}
                labelAlign="left"
                labelWrap
                wrapperCol={{
                flex: 1,
                }}
                colon={false}
                className=""
          >
            <Form.Item
              name="texarea"
              rules={[
                  {
                  required: true,
                  },
              ]}
            >
              <span className='send-button-wrapper'>
                <Input rows={6} placeholder="Enter Email Address*" className="send-email" />
                <Button  htmlType="submit" className='email-send-form-btn'>
                  <img className='action' src={rightArrow} alt="arrow" width="24"/>
                </Button>
              </span>
            </Form.Item>
          </Form>

        </div>

      </section>
    </div>
  )
}

export default CampaignDetails