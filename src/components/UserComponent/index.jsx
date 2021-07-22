import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as User } from "../../icons/userIcon.svg";
import { ReactComponent as UserArrow } from "../../icons/userclickicon.svg";

import styles from "./UserComponent.module.scss";

const UserComponent = ({ userName }) => {
  return (
    <div className={styles.user}>
      <User className={styles.user__icon} />
      <p className={styles.user__name}>{userName}</p>
      <UserArrow />
    </div>
  );
};

UserComponent.propTypes = {
  userName: PropTypes.string,
};

UserComponent.defaultProps = {
  userName: "Zoia M.",
};

export default UserComponent;
