import React from "react";
import "./account.css";
// import styles from "./account.module.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Form, Input,Anchor,Image,Typography} from 'antd';
import proPick from "../../assets/images/account/account-pro-img.svg";
const { Link } = Anchor;

function Account() {
  return (
    <>
        <div className="title-wrapper"><h3>Account</h3></div>
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
            className="account-wrapper"
        >
            <div className="content-wrapper-1">
                <Form.Item>
                    <Image
                        width={100}
                        src={proPick}
                    />
                    <Anchor
                    className="link-wrapper"
                    >
                        <Link  className="upload-pic" href="#" title="Upload Image" />
                        <Link className="remmove-pic"href="#" title="Remove" />
                    </Anchor>
                </Form.Item>
                <Form.Item>
                    <Form.Item
                        label="First Name"
                        name="name"
                        className="f-name form-field"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                    >  
                        <Input  placeholder="First Name"/>
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="lastName"
                        className="form-field"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Last Name"/>
                    </Form.Item>
                    
                    <Form.Item
                        label="Email Address"
                        name="email"
                        className="l-name form-field"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Email Address"/>
                    </Form.Item>
                    
                    <Form.Item
                        label="Phone Number"
                        name="Phone"
                        className="l-name form-field"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Phone Number"/>
                    </Form.Item>
                    
                </Form.Item>
            </div>
            <div className="change-pass-section"><h1>Change Password</h1></div>
            <div className="content-wrapper-2">
            <Form.Item
                className="content-colm-fist"
            ></Form.Item>
            <Form.Item
                className="content-colm-secound"  
            >
                <Form.Item
                    label="Old Password"
                    name="OldPassword"
                    className="form-field"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                >
                    <Input.Password placeholder="Old Password"/>
                </Form.Item>
                <Form.Item
                    label=""
                    className="form-field"
                >
                </Form.Item>
                <Form.Item
                    label="New Password"
                    name="NewPassword"
                    className="form-field"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                >
                    <Input.Password placeholder="New Password"/>
                </Form.Item>
                <Form.Item
                    label="Retype New Password"
                    name="retypePassword"
                    className="form-field"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                >
                    <Input.Password placeholder="New Password"/>
                </Form.Item>
                
            </Form.Item>
            </div>
            <Form.Item 
                className="accout-sub-btn-group"
            >
                <Button 
                    type="primary" 
                    htmlType="submit"
                    className="acc-ci-btn-save"
                >
                    Save
                </Button>
                <Button 
                    type="primary cancel"
                    className="acc-ci-btn-cancel"
                >
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    </>
  )
}

export default Account

// import React from "react";
// import "./account.css";
// // import styles from "./account.module.css";
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import { Button, Form, Input,Anchor,Image,Typography} from 'antd';
// import proPick from "../../assets/images/account/account-pro-img.svg";
// const { Link } = Anchor;

// function Account() {
//   return (
//     <>
//         <div className={styles.title_wrapper}><h3>Account</h3></div>
//         <Form
//             name="wrap"
//             labelCol={{
//             flex: '110px',
//             }}
//             labelAlign="left"
//             labelWrap
//             wrapperCol={{
//             flex: 1,
//             }}
//             colon={false}
//             className={styles.account_wrapper}
//         >
//             <div className={styles.content_wrapper_1}>
//                 <Form.Item>
//                     <Image
//                         width={100}
//                         src={proPick}
//                     />
//                     <Anchor
//                     className={styles.link_wrapper}
//                     >
//                         <Link  className={styles.upload_pic} href="#" title="Upload Image" />
//                         <Link className={styles.remmove_pic} href="#" title="Remove" />
//                     </Anchor>
//                 </Form.Item>
//                 <Form.Item>
//                     <Form.Item
//                         label="First Name"
//                         name="name"
//                         className={`${styles.f_name}, ${styles.form_field}`}
//                         rules={[
//                             {
//                             required: true,
//                             },
//                         ]}
//                     >  
//                         <Input  placeholder="First Name"/>
//                     </Form.Item>

//                     <Form.Item
//                         label="Last Name"
//                         name="lastName"
//                         className={styles.form_field}
//                         rules={[
//                             {
//                             required: true,
//                             },
//                         ]}
//                     >
//                         <Input placeholder="Last Name"/>
//                     </Form.Item>
                    
//                     <Form.Item
//                         label="Email Address"
//                         name="email"
//                         className={`${styles.l_name}, ${styles.form_field}`}
//                         rules={[
//                             {
//                             required: true,
//                             },
//                         ]}
//                     >
//                         <Input placeholder="Email Address"/>
//                     </Form.Item>
                    
//                     <Form.Item
//                         label="Phone Number"
//                         name="phone"
//                         className={`${styles.l_name}, ${styles.form_field}`}
//                         rules={[
//                             {
//                             required: true,
//                             },
//                         ]}
//                     >
//                         <Input placeholder="Phone Number"/>
//                     </Form.Item>
                    
//                 </Form.Item>
//             </div>
//             <div className={styles.content_wrapper_2}>
//             <Form.Item
//                 className={styles.content_colm_fist}
//             >
//             </Form.Item>
//             <Form.Item
//                 className={styles.content_colm_secound} 
//             >
//                 <Form.Item
//                     label="Old Password"
//                     name="oldpass"
//                     className={styles.form_field}
//                     rules={[
//                         {
//                         required: true,
//                         },
//                     ]}
//                 >
//                     <Input placeholder="Old Password"/>
//                 </Form.Item>
//                 <Form.Item
//                     label=""
//                     className={styles.form_field}
//                 >

//                 </Form.Item>
//                 <Form.Item
//                     label="New Password"
//                     name="newpass"
//                     className={styles.form_field}
//                     rules={[
//                         {
//                         required: true,
//                         },
//                     ]}
//                 >
//                     <Input placeholder="New Password"/>
//                 </Form.Item>
//                 <Form.Item
//                     label="Retype New Password"
//                     name="renewpass"
//                     className={styles.form_field}
//                     rules={[
//                         {
//                         required: true,
//                         },
//                     ]}
//                 >
//                     <Input placeholder="New Password"/>
//                 </Form.Item>
                
//             </Form.Item>
//             </div>
//             <Form.Item 
//                 className={styles.accout_sub_btn_group}
//             >
//                 <Button type="primary" htmlType="submit">
//                     Save
//                 </Button>
//                 <Button type="primary cancel">
//                     Cancel
//                 </Button>
//             </Form.Item>
//         </Form>
//     </>
//   )
// }

// export default Account