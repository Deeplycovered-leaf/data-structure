import { describe, expect, it } from 'vitest'
import { is_valid } from '.'

describe('valid () {} []', () => {
  it('should be return true when input ()', () => {
    expect(is_valid('()')).toBe(true)
  })

  it('should be return true when input (){}[]', () => {
    expect(is_valid('(){}[]')).toBe(true)
  })

  it('should be return false when input (]', () => {
    expect(is_valid('(]')).toBe(false)
  })
})
