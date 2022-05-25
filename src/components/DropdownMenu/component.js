import { Fragment } from 'react'
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'
import { Icon } from '@Components/Icon'
import PropTypes from 'prop-types'

const DropdownMenu = ({ label, items, icon, onSelectItem }) => {
  return (
    <Menu>
      {({ isExpanded }) => (
        <Fragment>
          <MenuButton className="sn-dropdown-menu">
            {icon && icon} {label} {isExpanded ? <Icon name="menu-arrow-up" /> : <Icon name="menu-arrow-down" />}
          </MenuButton>
          <MenuList className="sn-dropdown-menu-list">
            {items &&
              items.map((item) => (
                <MenuItem
                  className="sn-dropdown-menu-list-item"
                  valueText={item.value}
                  onSelect={() => (item.onSelect ? item.onSelect(item.value) : onSelectItem(item.value))}
                >
                  {item.icon && item.icon} {item.label}
                </MenuItem>
              ))}
          </MenuList>
        </Fragment>
      )}
    </Menu>
  )
}

DropdownMenu.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  icon: PropTypes.element,
}

export default DropdownMenu
