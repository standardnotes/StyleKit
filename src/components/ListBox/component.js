import { h, Component, Fragment } from "preact";
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

export default class ListBox extends Component {
  getInitialValue() {
    const { defaultValue, options } = this.props;
    return (options && options[0].value || defaultValue);
  }

  render() {
    const { defaultValue, options, onChange } = this.props;
    const initialValue = this.getInitialValue();
    return (
      <ListboxInput className="sn-listbox" defaultValue={defaultValue} onChange={onChange} value={initialValue}>
        {({ value, valueLabel, isExpanded }) => (
          <Fragment>
            <ListboxButton className="sn-listbox-button">
              <span data-value={value}>{valueLabel}</span> {isExpanded ? <Icon name="menu-arrow-up" /> : <Icon name="menu-arrow-down" />}
            </ListboxButton>
            <ListboxPopover className="sn-listbox-popover">
              <ListboxList className="sn-listbox-list">
                {options && options.map((option) => (
                  <ListboxOption value={option.value} valueText={option.label}>
                    {option.label}
                  </ListboxOption>
                ))}
              </ListboxList>
            </ListboxPopover>
          </Fragment>
        )}
      </ListboxInput>
    );
  }
};

ListBox.propTypes = {
  defaultValue: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

ListBox.defaultProps = {
  defaultValue: ""
};
