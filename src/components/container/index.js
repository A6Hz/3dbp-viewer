import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./style.css";

class index extends Component {
  render() {
    return (
      <div
        className={cx("card", { active: this.props.active })}
        onClick={this.props.onClick}
      >
        <div>{this.props.type}</div>
        <div>{this.props.name}</div>
      </div>
    );
  }

  static get propTypes() {
    return {
      type: PropTypes.number,
      name: PropTypes.string,
      active: PropTypes.bool,
      onClick: PropTypes.func
    };
  }
}

export default index;
