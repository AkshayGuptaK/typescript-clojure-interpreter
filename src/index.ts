import { repl } from "./repl.js";
// lexer
// syntactic analysis

// Lex
// accept input string
// create variable for tracking position = token
// make an array of tokens
// keep iterating with a while loop through input
// check each token to see if it matches known types
// add it to array

type Interpreter = (input: string) => string | null;

const interpretClojure: Interpreter = (input) => {
  return input;
};

repl(interpretClojure);

// function tokenize(input: string): Array<any> {
//   let cursor = 0;
//   const tokens = [];

//   while (cursor < input.length) {
//     // do something
//   }
//   return tokens;
// }
