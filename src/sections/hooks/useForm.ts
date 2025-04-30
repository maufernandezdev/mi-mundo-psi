import { type ChangeEvent, useState } from "react";

export const useForm = <T>(initState: T) => {
  const [formValues, setFormValues] = useState(initState);

  const onChangeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormValues({ ...initState });
  };

  return {
    ...formValues,
    formValues,
    onChangeValue,
    resetForm,
  };
};
