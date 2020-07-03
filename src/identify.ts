const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;

type test = (character: string) => boolean;

export const isLetter: test = LETTER.test.bind(LETTER);

export const isWhitespace: test = WHITESPACE.test.bind(WHITESPACE);

export const isNumber: test = NUMBER.test.bind(NUMBER);

export const isOpeningParanthesis: test = (character) => character === "(";

export const isClosingParanthesis: test = (character) => character === ")";

export const isParanthesis: test = (character) =>
  isOpeningParanthesis(character) || isClosingParanthesis(character);

export const isQuote: test = (character) => character === '"';
