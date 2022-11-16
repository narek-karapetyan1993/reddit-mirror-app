import React from "react";

export function preventDefault<T extends (event: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(event: E) => {
    event.preventDefault();
    fn(event);
  };
}

// Вызов функции onChange={preventDefault(getValue(onChange)))
// получит значение из syntheticEvent,
// выполнит preventDefault
// передаст значение в функцию обработчик событий

// Применение

function NotStandardLink(props: any) {
  return <a onClick={preventDefault(props.onClick)}>Hello</a>;
}

// Для совмешения утилит

// function NotStandardLink(props: any) {
//   return <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>;
// }

// const getValue = pickFromSyntheticEvent<HTMLInputElement>()("value");
// const getChecked = pickFromSyntheticEvent<HTMLInputElement>()("checked");

// interface IInputProps {
//   onChange: (value: string) => void;
//   value: string;
// }

// function Input({ value, onChange }: IInputProps) {
//   return (
//     <input
//       value={value}
//       onChange={preventDefault(stopPropagation(getValue(onChange)))}
//     />
//   );
// }
