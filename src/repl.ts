export function repl(interpreter: (input: string) => string | null): void {
  const stdin = process.openStdin();
  stdin.addListener("data", function (text) {
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
  });
}
