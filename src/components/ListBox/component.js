import { h, Fragment } from "preact";
import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";
import { Icon } from "@Components/Icon";
import PropTypes from 'prop-types';

const ListBox = ({ defaultValue, placeholder, options, onChange }) => {
  /**
   * If no options yet, we don't want to render the component.
   */
  if (!options) {
    return;
  }

  return (
    <ListboxInput className="sn-listbox" defaultValue={defaultValue} onChange={onChange}>
      {({ value, valueLabel, isExpanded }) => (
        <Fragment>
          <ListboxButton className="sn-listbox-button">
            <span data-value={value}>{valueLabel ?? placeholder}</span> {isExpanded ? <Icon name="menu-arrow-up" /> : <Icon name="menu-arrow-down" />}
          </ListboxButton>
          <ListboxPopover className="sn-listbox-popover">
            <ListboxList className="sn-listbox-list">
              {options && options.map((option) => (
                <ListboxOption className="sn-listbox-list-option" value={option.value} valueText={option.label}>
                  {option.label}
                </ListboxOption>
              ))}
            </ListboxList>
          </ListboxPopover>
        </Fragment>
      )}
    </ListboxInput>
  );
};

ListBox.propTypes = {
  defaultValue: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

ListBox.defaultProps = {
  defaultValue: "",
  placeholder: "Choose an option..."
};

export default ListBox;
