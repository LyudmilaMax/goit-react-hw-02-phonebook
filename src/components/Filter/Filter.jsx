import { Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <Input
        type="text"
        placeholder="Find contacts by name"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
