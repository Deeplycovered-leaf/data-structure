import ArrayStack from './ArrayStack'

function decimal_2_binary(decimal: number): string {
  const stack = new ArrayStack<number>()

  let res: number
  while (decimal > 0) {
    res = decimal % 2

    stack.push(res)

    decimal = Math.floor(decimal / 2)
  }

  let binary = ''
  while (!stack.isEmpty())
    binary += stack.pop()

  return binary
}

console.log(decimal_2_binary(2))
