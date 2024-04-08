import { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/OnClickOutside";
import ArrowDownIcon from '../../assets/icons/ArrowDownIcon.svg';
import styles from './SelectDropdown.module.css';

const SelectDropdown = ({
  placeholder,
  options,
  handleSelect,
  selectedOption,
  withFilterIcon,
  filteredIcons,
  isForm,
  label,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setShowOptions(false));

  return (
    <div
     className={styles.selectdropdown}
      ref={dropdownRef}
    
    >
      {isForm && (
        <label
           className={styles.label}
        >
          {label}
        </label>
      )}
      <button
        type="button"
      className={styles.optionsbtn}
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      ><div>
        {withFilterIcon && (
      <span style={{marginRight:'5px'}}>{filteredIcons}</span>
        )}
        {selectedOption || placeholder}</div>
        <span><img src={ArrowDownIcon} alt='icon'/></span>
      </button>

      {showOptions && (
        <div
      className={styles.showoptions}
        >
          {options.map((option) => (
            <button
              type="button"
              key={option.id}
          className={styles.options}
              onClick={() => {
                handleSelect(option);
                setShowOptions(false);
              }}
            
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;