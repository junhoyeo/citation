export type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const onChange = (
  e: OnChangeEvent,
  callback: (value: string) => void
) => {
    callback(e.target.value);
  };
