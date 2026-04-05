export const $ = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document,
) => {
  const element = context.querySelector<T>(selector);
  return element;
};

export const $$ = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document,
) => {
  const elements = context.querySelectorAll<T>(selector);
  return elements;
};

export const addClass = (element: HTMLElement | Element, className: string) => {
  element.classList.add(className);
};

export const replaceClass = (
  element: HTMLElement | Element,
  remove: string,
  add: string,
) => {
  element.classList.remove(remove);
  element.classList.add(add);
};
