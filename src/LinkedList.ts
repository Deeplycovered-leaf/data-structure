export class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

export class LinkedList<T> {
  #head: Node<T> | null = null
  #size: number = 0

  get length(): number {
    return this.#size
  }

  append(value: T): void {
    const node = new Node(value)

    if (this.#head === null) {
      this.#head = node
    }
    else {
      let current = this.#head
      while (current.next)
        current = current.next

      current.next = node
    }

    this.#size++
  }

  traverse(): void {
    const res: T[] = []
    let current = this.#head
    while (current) {
      res.push(current.value)
      current = current.next
    }

    console.log(res.join(' -> '))
  }

  insert(position: number, value: T): boolean {
    if (position < 0 || position > this.#size)
      return false

    const node = new Node(value)

    if (position === 0) {
      node.next = this.#head
      this.#head = node
    }
    else {
      const previous = this.get_node(position - 1)!

      node.next = previous.next
      previous.next = node
    }

    this.#size++

    return true
  }

  remove(position: number): boolean {
    if (this.check_margin(position))
      return false

    if (position === 0) {
      this.#head = this.#head!.next
    }
    else {
      const previous = this.get_node(position - 1)!

      previous.next = previous?.next?.next ?? null
    }

    this.#size--

    return true
  }

  remove_by_value(value: T): boolean {
    const index = this.index_of(value)

    return this.remove(index)
  }

  get(position: number): T | null {
    if (this.check_margin(position))
      return null

    const current = this.get_node(position)

    return current?.value ?? null
  }

  update(position: number, value: T): boolean {
    if (this.check_margin(position))
      return false

    const node = this.get_node(position)!

    node.value = value

    return true
  }

  index_of(value: T): number {
    let current = this.#head
    let index = 0

    while (current) {
      if (current.value === value)
        return index

      index++
      current = current.next
    }

    return -1
  }

  is_empty(): boolean {
    return this.#size === 0
  }

  private get_node(position: number) {
    let current = this.#head

    while (current && position--)
      current = current.next

    return current
  }

  private check_margin(position: number) {
    return position < 0 || position >= this.#size
  }
}
