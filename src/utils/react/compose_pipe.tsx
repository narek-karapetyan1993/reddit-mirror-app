import { preventDefault } from "./preventDefault";
import { stopPropagation } from "./stopPropagation";
import { getValue } from "./pickFromSyntheticEvent";
import React from "react";

function inputExample({ value, onChange }: any) {
  return (
    <input
      value={value}
      // onChange={preventDefault(stopPropagation(getValue(onChange)))}
      // onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
      onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
    />
  );
}

function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

export function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop];
}

const some = pick("value")({ value: 1 });

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

const comments = [
  { id: 22, text: "text one" },
  { id: 45, text: "text two" },
];

const createFilterBy = (prop: string) => (id: number) =>
  pipe(pick("id"), isEqual(id), cond);

const filteredById = createFilterBy("id");
const filteredByValue = createFilterBy("value");

const filteredComments = comments.filter(filteredById(22));

function cond(b: boolean) {
  return !b;
}

const getValueNumber = pipe(pick("currentTarget"), pick("value"), parseInt);
