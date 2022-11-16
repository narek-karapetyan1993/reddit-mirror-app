import React from "react";

export function stopPropagation<T extends (event: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(event: E) => {
    event.stopPropagation();
    fn(event);
  };
}

// Вызов функции onChange={stopPropagation(getValue(onChange)))
// получит значение из syntheticEvent,
// выполнит stopPropagation
// передаст значение в функцию обработчик событий

// Применение

function NotStandardLink(props: any) {
  return <a onClick={stopPropagation(props.onClick)}>Hello</a>;
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
