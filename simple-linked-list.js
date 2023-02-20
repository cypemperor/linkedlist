//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  value
  next
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }

  get value() {
    return this.value
  }

  get next() {
    return this.next
  }
}

export class List {
  size
  head
  tail
  constructor(arr = null) {
    this.size = 0
    this.head = null
    this.tail = null
    if (arr) {
      arr.forEach(element => {
        this.add(new Element(element))
      });
    }
  }

  add(nextValue) {
    if (!this.head) {
      this.head = nextValue
    } else {
      let current = this.head;
      this.head = nextValue
      this.head.next = current
    }
    this.size++
  }

  get length() {
    return this.size
  }

  get head() {
    return this.head
  }

  // 4 -> 3 -> 2 -> 1 -> null
  //                       .
  toArray() {

    return this.toArrayRecursive(this.head, [])


    // while (current !== null) {
    //   arr.push(current.value)
    //   current = current.next
    // }
  }

  toArrayRecursive(current, arr) {
    if (current === null) return arr

    arr.push(current.value)

    return this.toArrayRecursive(current.next, arr)
  }

  reverse() {
    let current = this.head
    let prev = null
    let next = this.head.next

    while (current !== null) {
      next = current.next // 1
      current.next = prev
      prev = current
      current = next
    }

    this.head = prev

    return this
  }

  find(index) {
    let count = 0
    let current = this.head

    while (current !== null) {
      if (count === index) {
        return current.value
      }
      current = current.next
      count++
    }
    return false
  }

  removeByValue(val) {
    let current = this.head
    let next = this.head.next
    let prev = null

    while (current !== null) {
      if (current.value === val) {
        if (prev === null) {
          this.head = next
        } else {
          prev.next = current.next
        }
        this.size--
      }
      prev = current
      current = current.next
    }

    return this
  }
}
