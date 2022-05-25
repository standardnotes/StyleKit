import { Menu, MenuButton } from '@reach/menu-button'
import PropTypes from 'prop-types'

const Button = ({ label, onClick, variant }) => {
  return (
    <Menu>
      <MenuButton className={`sn-button ${variant}`} onClick={onClick}>
        {label}
      </MenuButton>
    </Menu>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['contrast', 'neutral', 'info', 'warning', 'danger', 'success']),
}

Button.defaultProps = {
  variant: 'info',
}

export default Button
