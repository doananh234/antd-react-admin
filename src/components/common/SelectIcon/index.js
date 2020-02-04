import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllIconName } from 'utils/tools';
import { SelectIconWrapper } from './styles';

const SelectIcon = ({ defaultValue, onChange }) => {
  const [typeIcons, setTypeIcons] = useState([]);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const fetchIcon = async () => {
      const typeIcons = await getAllIconName();
      setTypeIcons(typeIcons);
    };
    typeIcons.length === 0 && fetchIcon();
    setValue(defaultValue);
  }, [defaultValue, typeIcons.length]);

  const onSelect = e => {
    setValue(e);
    onChange(e);
  };

  return (
    <SelectIconWrapper>
      <div className="row">
        {typeIcons.map(e => (
          <div
            role="presentation"
            onClick={() => onSelect(e)}
            className={`icon ${e} ${value === e ? 'selected' : ''}`}
          />
        ))}
      </div>
    </SelectIconWrapper>
  );
};

SelectIcon.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.any,
};

export default SelectIcon;
