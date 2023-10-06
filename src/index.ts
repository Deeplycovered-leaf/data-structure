import { expect, it } from 'vitest'
import { LinkedList } from './LinkedList'

class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }

  delete_node(node: ListNode | null): void {
    if (!node)
      return

    node!.val = node!.next!.val
    node!.next = node!.next!.next
  }
}

// if (import.meta.vitest) {
//   it('should be insert 0 into before 2', () => {
//     expect(hot_potato(['zi', 'ze', 'zb', 'zd'], 3)).toBe('zi')
//   })
// }
