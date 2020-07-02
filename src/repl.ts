type Interpreter = (input: string) => string | null;

function processInput(interpreter: Interpreter) {
  return function (text): void {
    try {
      const response = interpreter(text.toString().trim());
      if (response != null) {
        console.log(JSON.stringify(response));
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  };
}

export function repl(interpreter: Interpreter): void {
  const stdin = process.openStdin();
  stdin.addListener("data", processInput(interpreter));
}
