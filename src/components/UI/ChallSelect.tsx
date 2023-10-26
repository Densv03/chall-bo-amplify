import Select from 'react-select';
import chroma from 'chroma-js';
import { StylesConfig } from 'react-select';

interface ChallSelectProps {
  styles?: StylesConfig<ColourOption>;
  options?: ColourOption[];
  onChange?: () => void;
  onInputChange?: () => void;
  onMenuClose?: () => void;
  onMenuOpen?: () => void;
  placeholder?: string;
}

interface ColourOption {
  readonly value: string;
  readonly label: string;
  color: string;
  theme?: any; // ChallSelectThemeEnum
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const sampleOptions: ColourOption[] = [
  { value: 'recent', label: 'Recent', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

const sampleStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: isSelected ? data.color : color.alpha(0.3).css(),
      },
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles) => ({ ...styles }),
};
const samplePlaceholder = 'Select...';
export const ChallSelect: React.FC<ChallSelectProps> = ({
  onChange,
  onInputChange,
  onMenuOpen,
  onMenuClose,
  styles,
  options,
  placeholder,
}) => {
  return (
    <Select
      styles={styles ? styles : sampleStyles}
      options={options ? options : sampleOptions}
      onChange={onChange}
      onInputChange={onInputChange}
      onMenuClose={onMenuClose}
      onMenuOpen={onMenuOpen}
      placeholder={placeholder ? placeholder : samplePlaceholder}
    />
  );
};
