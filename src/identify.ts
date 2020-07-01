const WHITESPACE = /^\s+/;
const NUMBER = /^((+|-)?(\d+))([.]\d+)?([Ee][+-]?\d+)?/;
const WORD = /^[a-zA-Z]+/;

type test = (input: string) => number;

function regexMatchLength(regex: RegExp): test {
  return (input) => {
    const match = input.match(regex);
    return match ? match[0].length : 0;
  };
}

export const matchWhitespace: test = regexMatchLength(WHITESPACE);

export const matchNumber: test = regexMatchLength(NUMBER);

export const matchWord: test = regexMatchLength(WORD);

export const matchOpeningParanthesis: test = (input) =>
  input.startsWith("(") ? 1 : 0;

export const matchClosingParanthesis: test = (input) =>
  input.startsWith("(") ? 1 : 0;

export const matchParanthesis: test = (input) =>
  matchOpeningParanthesis(input) + matchClosingParanthesis(input);

export const matchQuote: test = (input) => (input.startsWith('"') ? 1 : 0);
