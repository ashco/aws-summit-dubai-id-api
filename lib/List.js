const ids = "./ids.json";

class List {
  constructor() {
    this.index = 0;
    this.ids = ids;
    this.unavailableIndexes = [];
  }

  getId() {
    if (this.unavailableIndexes.length >= this.ids.length) {
      throw Error("No more IDs to provide!");
    }

    // get id at current index
    const currentId = this.ids[this.index];
  }

  incrementId() {
    // if (this.unavailableIndexes.length >= this.ids.length) {
    //   throw Error("No more IDs to provide!");
    // }

    // increment index
    this.index += 1;
    // if unavailableIndexes contains index, increment again.
    if (this.unavailableIndexes.includes(this.index)) {
      this.incrementId();
    }
  }
}

module.exports = List;
