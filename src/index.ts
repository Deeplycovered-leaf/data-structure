import { expect, it } from 'vitest'
import { LinkedList } from './LinkedList'

const linked_list = new LinkedList<number>()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.insert(1, 0)
linked_list.insert(0, 4)
linked_list.traverse()

linked_list.remove(0)
linked_list.traverse()

linked_list.remove(2)
linked_list.traverse()

console.log('linked_list.get(0) =>', linked_list.get(0))
console.log('linked_list.get(2) =>', linked_list.get(2))

console.log('linked_list.index_of(0) =>', linked_list.index_of(0))

linked_list.remove_by_value(0)
linked_list.traverse()
// if (import.meta.vitest) {
//   it('should be insert 0 into before 2', () => {
//     expect(hot_potato(['zi', 'ze', 'zb', 'zd'], 3)).toBe('zi')
//   })
// }
