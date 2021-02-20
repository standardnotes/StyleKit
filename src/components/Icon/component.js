import { h } from "preact";
import PropTypes from 'prop-types';
import IconSprite from './icons-sprite.svg';

const Icon = ({ name, width, height, className }) => {
  return (
    <svg className={`sn-icon ${className ? className : ''}`} width={width} height={height}>
      <use href={IconSprite + `#ic-${name}`}></use>
    </svg>
  );
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

export default Icon;
