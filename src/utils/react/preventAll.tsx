import React from "react";

export function preventAll<T extends (event: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(event: E) => {
    event.preventDefault();
    event.stopPropagation();
    fn(event);
  };
}

// Вызов функции onChange={preventAll(getValue(onChange)))
// получит значение из syntheticEvent,
// выполнит preventDefault, stopPropagation
// передаст значение в функцию обработчик событий
// эквивалент onChange={preventDefault(stopPropagation(getValue(onChange))))

// Применение

function NotStandardLink(props: any) {
  return <a onClick={preventAll(props.onClick)}>Hello</a>;
}