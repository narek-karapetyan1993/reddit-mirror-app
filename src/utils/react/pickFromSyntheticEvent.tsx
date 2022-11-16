import React from "react";

export function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) =>
    <E extends (t: T[K]) => void>(fn: E) =>
    (event: React.SyntheticEvent<T>) =>
      fn(event.currentTarget[key]);
}

// Для получения данных из любого события
//
// Применение

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()("value");
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()("checked");

// function Input({onChange, value}: {onChange: (value: string) => void, value: string}) {
//   return (
//     <input value={value} onChange={getValue(onChange)} />
//   )
// }

function Checkbox({
  onChange,
  value,
}: {
  onChange: (value: boolean) => void;
  value: boolean;
}) {
  return (
    <input type="checkbox" checked={value} onChange={getChecked(onChange)} />
  );
}

// Для совмешения утилит

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
