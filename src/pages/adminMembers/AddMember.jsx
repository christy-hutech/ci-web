import React from 'react'
// import styles from "./members.module.css";
import uploadIcon from "../../assets/images/adminMember/upload-icon.svg";

const AddMember =() => {
  return (
    <>
        <div className='modal-wrapper'>
            <div>
                <p>Name<b>*</b></p>
                <input className='modal-element' type="text"  name="fname" />
            </div>
            <div>
                <p>Email<b>*</b></p>
                <input className='modal-element' type="text"  name="fname" />
            </div>
            <div>
                <p>User Permissions<b>*</b></p>
                <select className='modal-element' name="cars" id="cars" form="carform">
                    <option value="volvo">Admin</option>
                </select>
            </div>
            <div>
                <p>Date<b>*</b></p>
                <input className='modal-element' type="date"  name="fname" />
            </div>
            <div>
                <p>Status<b>*</b></p>
                <select className='modal-element' name="cars" id="cars" form="carform">
                    <option value="volvo">Active</option>
                </select>
            </div>
            <div className='file-upload'>
                <p>Upload Photo</p>
                <span className='upload-wrapper'><img className='action' src={uploadIcon} alt="upload" width="18.25"/> Drag & Drop images here to upload.</span>
                <input className='modal-element' type="file"  name="fname" />
                <p className='upload-text'>Max file size : 20MB</p>
            </div>
        </div>
        <div className='modal-wrapper-checkox'>
            <div>
                <span><input type="checkbox" className='modal-element-checkbox' name="vehicle1" value="Bike"/></span>
                <span><label for="vehicle1"> Post Articles</label></span>
            </div>
            <div>
                <input type="checkbox" className='modal-element-checkbox' name="vehicle1" value="Bike"/>
                <label for="vehicle1"> Archive own posts</label>
            </div>
            <div>
                <input type="checkbox" className='modal-element-checkbox' name="vehicle1" value="Bike"/>
                <label for="vehicle1"> Report against a post</label>
            </div>
            <div>
                <input type="checkbox" className='modal-element-checkbox' name="vehicle1" value="Bike"/>
                <label for="vehicle1"> Review Post</label>
            </div>
            <div>
                <input type="checkbox" className='modal-element-checkbox' name="vehicle1" value="Bike"/>
                <label for="vehicle1"> Subscribe tags</label>
            </div>
            <div>
                <input type="checkbox" className='modal-element-checkbox' name="vehicle1" value="Bike"/>
                <label for="vehicle1"> Grant/Suspend Admin priviledge</label>
            </div>
            <div>
                <input type="checkbox" className='modal-element-checkbox' name="vehicle1" value="Bike"/>
                <label for="vehicle1">Create Tags</label>
            </div>
            <div>
                <input type="checkbox" className='modal-element-checkbox' name="vehicle1" value="Bike"/>
                <label for="vehicle1">Suggest new tags</label>
            </div>
            <div>
                <input type="checkbox" className='modal-element-checkbox' name="vehicle1" value="Bike"/>
                <label for="vehicle1">Grant/Suspend Review priviledges </label>
            </div>
        </div>
    </>
  )
}

export default AddMember