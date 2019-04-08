import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

class index extends Component {
  render() {
    return (
      <div
        className={cx("card shadow-sm", { active: this.props.active })}
        onClick={this.props.onClick}
      >
        <div className="p-2">
          <div>{this.props.type}</div>
          <div>{this.props.name}</div>
        </div>
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
