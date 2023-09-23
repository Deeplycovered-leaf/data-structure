import ArrayStack from './ArrayStack'

export function is_valid(str: string) {
  const quotes = str.split('')
  const stack = new ArrayStack<string>()

  for (const char of quotes) {
    if (char === '(')
      stack.push(')')
    else if (char === '{')
      stack.push('}')
    else if (char === '[')
      stack.push(']')
    else if (stack.pop() !== char)
      return false
  }

  return true
}
