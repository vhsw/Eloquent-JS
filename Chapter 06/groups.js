class Group {
  constructor(arr = []) {
    this.arr = arr;
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
}

let group = Group.from([10, 20]);
console.log(group)
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group)
group.delete(10);
console.log(group)
console.log(group.has(10));
// → false
