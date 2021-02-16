/** @jsx h */
import { h, Component } from "preact";
import PropTypes from 'prop-types';
import IconSprite from './icons-sprite.svg';

export default class Icon extends Component {
  render() {
    const { name, width, height, classList } = this.props;
    return (
      <svg className={`sn-icon ${classList ? classList : ''}`} width={width} height={height}>
        <use href={IconSprite + `#ic-${name}`}></use>
      </svg>
    );
  }
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    "history",
    "menu-arrow-down",
    "menu-arrow-up",
    "text-rich",
    "undo",
    "redo",
  ]).isRequired,
  classList: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

Icon.defaultProps = {
  width: 20,
  height: 20
};
