/** @jsx h */
import { h, Component, Fragment } from "preact";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import PropTypes from 'prop-types';

export default class DropdownMenu extends Component {
  render() {
    const { label, items, icon } = this.props;
    return (
      <Menu>
        {({ isExpanded }) => (
          <Fragment>
            <MenuButton className="sn-dropdown-menu">
              {icon && icon} {label} <span aria-hidden>{isExpanded ? "▴" : "▾"}</span>
            </MenuButton>
            <MenuList className="sn-dropdown-menu-list">
              {items.map((item) => (
                <MenuItem valueText={item.value}>{item.icon && item.icon} {item.label}</MenuItem>
              ))}
            </MenuList>
          </Fragment>
        )}
      </Menu>
    );
  }
};

DropdownMenu.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  icon: PropTypes.element,
};
