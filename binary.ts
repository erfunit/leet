enum Operation {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "*",
  DIVIDE = "/",
}

function performOperation(
  values: [number, number],
  operation: Operation
): number {
  switch (operation) {
    case "+":
      return values[0] + values[1];
    case "-":
      return values[0] - values[1];
    case "*":
      return values[0] * values[1];
    case "/":
      return values[0] / values[1];
    default:
      return values[0];
  }
}
