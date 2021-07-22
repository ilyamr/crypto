import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Setting } from "../../icons/threepuls.svg";
import { ReactComponent as Statistick } from "../../icons/statistick.svg";

import styles from "./StatistickTable.module.scss";

const StatistickTable = ({ USD }) => {
  return (
    <div className={styles.statistick}>
      <div className={styles.statistick__title}>
        <p className={styles.statistick__title__value}>$ {USD}</p>
        <Setting />
      </div>
      <Statistick className={styles.statistick__line} />
    </div>
  );
};

StatistickTable.propTypes = {
  USD: PropTypes.string,
};

StatistickTable.defaultProps = {
  USD: "17 643.41",
};

export default StatistickTable;
