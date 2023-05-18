var WordDictionary = function () {
  this.root = {
    children: {},
    isWord: false,
  };
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let currNode = this.root;
  for (let char of word) {
    if (!currNode.children[char]) {
      currNode.children[char] = {
        children: {},
      };
    }
    currNode = currNode.children[char];
  }
  currNode.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.simpleSearch(this.root, word, 0);
};

WordDictionary.prototype.simpleSearch = function (currNode, word, index) {
  if (
    !currNode ||
    !currNode.children ||
    (word[index] !== "." && !currNode.children[word[index]])
  ) {
    return false;
  }

  if (word.length - 1 === index) {
    if (word[index] === ".") {
      for (let child in currNode.children || {}) {
        if (!!currNode.children[child].isWord) {
          return true;
        }
      }
      return false;
    } else {
      return !!currNode.children[word[index]].isWord;
    }
  }

  if (currNode.children[word[index]]) {
    if (this.simpleSearch(currNode.children[word[index]], word, index + 1)) {
      return true;
    }
  } else if (word[index] === ".") {
    for (let char in currNode.children) {
      if (this.simpleSearch(currNode.children[char], word, index + 1)) {
        return true;
      }
    }
  }

  return false;
};

const obj = new WordDictionary();
obj.addWord("bad");
obj.addWord("pad");
obj.addWord("mad");

console.log(JSON.stringify(obj));
console.log(obj.search("b.."));
