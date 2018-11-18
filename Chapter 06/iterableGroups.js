class Group {
  constructor(arr = []) {
    this.arr = arr;
    this.pos = 0;
  }
  static from(arr) {
    return new Group(arr);
  }
  has(item) {
    return this.arr.includes(item);
  }
  add(item) {
    if (!this.has(item)) {
      this.arr.push(item);
    }
  }
  delete(item) {
    if (this.has(item)) {
      this.arr = this.arr.filter(element => element != item);
    }
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.pos = 0;
  }
  next() {
    while (this.pos < this.group.arr.length) {
      return {
        value: this.group.arr[this.pos++],
        done: false
      };
    }
    return {
      done: true
    };
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c