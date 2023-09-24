import { expect, it } from 'vitest'
import ArrayQueue from './ArrayQueue'

function hot_potato(names: string[], num: number): string {
  const queue = new ArrayQueue<string>()

  for (const item of names)
    queue.enqueue(item)

  let counter = 0
  while (queue.size > 1) {
    const first = queue.dequeue()

    counter++
    if (counter === num) {
      counter = 0
      continue
    }

    queue.enqueue(first!)
  }

  return queue.dequeue()!
}

if (import.meta.vitest) {
  it('should be return zi when input ()', () => {
    expect(hot_potato(['zi', 'ze', 'zb', 'zd'], 3)).toBe('zi')
  })
}
