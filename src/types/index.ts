export interface Stack<T = any> extends List<T> {
  push(element: T): void
  pop(): T | undefined
}

export interface Queue<T = any> extends List<T> {
  enqueue(element: T): void
  dequeue(): T | undefined
}

interface List<T = any> {
  peek(): T
  is_empty(): boolean
  get size(): number
}
