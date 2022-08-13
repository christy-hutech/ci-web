import { Switch } from "antd";
import React from "react";
import styles from "./index.module.css";
function Notifications() {
  return (
    <div>
      <div className={styles.ci_notification_container}>
        <div className={styles.ci_notification_heaading}>
          Notification Settings
        </div>
        <div className={styles.ci_notification_sub_heading}>
          You will get only notification what have enabled.
        </div>
        <div className={styles.ci_notification_line}></div>

        {/* email_setting */}
        <div className={styles.ci_notification_alerts_heading}>
          Security Alerts
        </div>
        <div className={styles.ci_notification_sub_heading}>
          You will get only those email notification what you want.
        </div>
        <div className={styles.setting_wrapper_one}>
          <Switch defaultChecked={false} onChange={() => {}} />
          <div className={styles.setting_wrapper_text}>
            Email me whenever encounter unusual activity
          </div>
        </div>
        <div className={styles.setting_wrapper_two}>
          <Switch defaultChecked onChange={() => {}} />
          <div className={styles.setting_wrapper_text}>
            Email me whenever encounter unusual activity
          </div>
        </div>
        <div className={styles.ci_notification_line}></div>
        {/* news_setting */}
        <div className={styles.ci_notification_alerts_heading}>News</div>
        <div className={styles.ci_notification_sub_heading}>
          You will get only those email notification what you want.
        </div>
        <div className={styles.setting_wrapper_one}>
          <Switch defaultChecked onChange={() => {}} />
          <div className={styles.setting_wrapper_text}>
            Notify me by email about sales and latest news
          </div>
        </div>
        <div className={styles.setting_wrapper_two}>
          <Switch defaultChecked={false} onChange={() => {}} />
          <div className={styles.setting_wrapper_text}>
            Email me about new features and updates
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
