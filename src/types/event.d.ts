declare namespace Event {
  export type UnionEventType = InputEventType | SelectEventType;

  export type FactoryEventType = InputEventType | TextAreaEventType;

  export type InputEventType = React.ChangeEvent<HTMLInputElement>;
  export type SelectEventType = React.ChangeEvent<HTMLSelectElement>;
  export type TextAreaEventType = React.ChangeEvent<HTMLTextAreaElement>;
  export type FormEventType = React.FormEvent<HTMLFormElement>;
  export type ButtonEventType = React.MouseEvent<HTMLButtonElement>;
  export type KeyboardEventType = React.KeyboardEvent<HTMLInputElement>;
}
