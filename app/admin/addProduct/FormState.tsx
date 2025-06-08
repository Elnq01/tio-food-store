import { useState } from 'react';

export function useFormControl(initialValue="") {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
    // setValue(e.target.value);
    // console.log("What I typed: ", e.target.value)
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  };

  return inputProps;
}
