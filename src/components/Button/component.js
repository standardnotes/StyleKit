/** @jsx h */
import { h, Component } from "preact";
import {
  Menu,
  MenuButton
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { label, onClick, variant } = this.props;
    return (
      <Menu>
        <MenuButton className={`sn-button ${variant}`} onClick={onClick}>
          <span>{label}</span>
        </MenuButton>
      </Menu>
    );
  }
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf([
    "contrast",
    "neutral",
    "info",
    "warning",
    "danger",
    "success"
  ])
};

Button.defaultProps = {
  variant: "info"
};

