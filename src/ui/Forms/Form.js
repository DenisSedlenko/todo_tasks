import { useForm } from 'react-hook-form';

const Form = ({
  defaultValues,
  onSubmit,
  children,
  validateOn = 'onSubmit',
  className,
  ...htmlProps
}) => {
  const {
    handleSubmit,
    register,
    control,
    getValues,
    formState,
    watch,
    setValue,
  } = useForm({
    mode: validateOn,
    defaultValues,
  });

  return (
    <form
      className={`form ${className}`}
      onSubmit={handleSubmit(onSubmit)}
      {...htmlProps}
    >
      {children({ register, control, getValues, formState, watch, setValue })}
    </form>
  );
};

export default Form;
