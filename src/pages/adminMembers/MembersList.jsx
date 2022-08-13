import "./members.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import styles from "./MembersList.module.css";
import { Button,Checkbox, Table,Modal} from 'antd';
import React, { useState } from 'react';
import deleteRecord from "../../assets/images/adminMember/delete.svg";
import editRecord from "../../assets/images/adminMember/edit.svg";
import photo1 from "../../assets/images/adminMember/photo1.svg";
import searchIcons from "../../assets/images/adminMember/searchbar.svg";
import AddMember from "./AddMember";


const MembersList =() => {
    const [visible, setVisible] = useState(false);
    const columns = [
        {
            render: () => 
            <div className="name-wrapper">
                <img className='action' src={photo1} alt="Google" width="40"/>
                <div>
                    <p className="name">Shyamsundar</p>
                    <p className="email">shyamsundar@gmail.com</p>
                </div>
            </div>,  
          title: 'Name',
          dataIndex: 'name',
        },
        {
            title: 'Created Date',
            dataIndex: 'created_date',
        },
        {
            render: () => <div className="status-wrapper">
                <input type="submit" value="Active" />
            </div>,
            title: 'Status',
            dataIndex: 'Status',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: () => 
            <div className="img-wrapper">
                <img className='action' src={editRecord} alt="Google" width="17.65"/>
                <img className='action' src={deleteRecord} alt="Google" width="17.65"/>
            </div>,
        },
    ];
    const data = [];
    for (let i = 0; i < 50; i++) {
        const roles = i%2 ? 'Admin' : 'Super Admin'
        data.push({
            key: i,
            name: `Edward King `,
            created_date: `24/06/22`,
            Status: 32,
            role: roles,
        });
    }

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

  return (
    <div className='members-wrapper'>
        <div className="table-head">
            <button className='button add-new' type="button" onClick={() => setVisible(true)}>+ Add new</button>
            <h1>Member List</h1>
        </div>
        <div className='search-wrapper'>
            <img className='search-icon' src={searchIcons} alt="Google" width="17.65"/>
            <input className='search-options' type="search" placeholder='Search username, email...'/>
            <select name="cars" id="cars">
                <option value="volvo">User Permissions</option>
            </select>
            <button className='button' type="button">Search</button>
        </div>
        <Table className="pagination-list-table" rowSelection={rowSelection} columns={columns} dataSource={data} />
        <Modal
            title="Add  Member"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={1059}
            okText="Save"
            cancelText="Cancel"
            className="popup-wrapper"
            style={{
                top: 1,
            }}
        >
            <AddMember/>
        </Modal>

    </div>
  )
}

export default MembersList