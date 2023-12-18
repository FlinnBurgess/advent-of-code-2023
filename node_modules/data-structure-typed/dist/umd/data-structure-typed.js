"use strict";
var dataStructureTyped = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __knownSymbol = (name, symbol) => {
    if (symbol = Symbol[name])
      return symbol;
    throw Error("Symbol." + name + " is not defined");
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  var __await = function(promise, isYieldStar) {
    this[0] = promise;
    this[1] = isYieldStar;
  };
  var __yieldStar = (value) => {
    var obj = value[__knownSymbol("asyncIterator")];
    var isAwait = false;
    var method;
    var it = {};
    if (obj == null) {
      obj = value[__knownSymbol("iterator")]();
      method = (k) => it[k] = (x) => obj[k](x);
    } else {
      obj = obj.call(value);
      method = (k) => it[k] = (v) => {
        if (isAwait) {
          isAwait = false;
          if (k === "throw")
            throw v;
          return v;
        }
        isAwait = true;
        return {
          done: false,
          value: new __await(new Promise((resolve) => {
            var x = obj[k](v);
            if (!(x instanceof Object))
              throw TypeError("Object expected");
            resolve(x);
          }), 1)
        };
      };
    }
    return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
      throw x;
    }, "return" in obj && method("return"), it;
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    AVLTree: () => AVLTree,
    AVLTreeNode: () => AVLTreeNode,
    AbstractEdge: () => AbstractEdge,
    AbstractGraph: () => AbstractGraph,
    AbstractVertex: () => AbstractVertex,
    BST: () => BST,
    BSTNode: () => BSTNode,
    BSTVariant: () => BSTVariant,
    BinaryIndexedTree: () => BinaryIndexedTree,
    BinaryTree: () => BinaryTree,
    BinaryTreeNode: () => BinaryTreeNode,
    CP: () => CP,
    Character: () => Character,
    Deque: () => Deque,
    DirectedEdge: () => DirectedEdge,
    DirectedGraph: () => DirectedGraph,
    DirectedVertex: () => DirectedVertex,
    DoublyLinkedList: () => DoublyLinkedList,
    DoublyLinkedListNode: () => DoublyLinkedListNode,
    FamilyPosition: () => FamilyPosition,
    FibonacciHeap: () => FibonacciHeap,
    FibonacciHeapNode: () => FibonacciHeapNode,
    HashMap: () => HashMap,
    HashTable: () => HashTable,
    HashTableNode: () => HashTableNode,
    Heap: () => Heap,
    IterableElementBase: () => IterableElementBase,
    IterableEntryBase: () => IterableEntryBase,
    IterationType: () => IterationType,
    LinkedHashMap: () => LinkedHashMap,
    LinkedListQueue: () => LinkedListQueue,
    MapEdge: () => MapEdge,
    MapGraph: () => MapGraph,
    MapVertex: () => MapVertex,
    Matrix2D: () => Matrix2D,
    MatrixNTI2D: () => MatrixNTI2D,
    MaxHeap: () => MaxHeap,
    MaxPriorityQueue: () => MaxPriorityQueue,
    MinHeap: () => MinHeap,
    MinPriorityQueue: () => MinPriorityQueue,
    Navigator: () => Navigator,
    PriorityQueue: () => PriorityQueue,
    Queue: () => Queue,
    RBTNColor: () => RBTNColor,
    RedBlackTree: () => RedBlackTree,
    RedBlackTreeNode: () => RedBlackTreeNode,
    SegmentTree: () => SegmentTree,
    SegmentTreeNode: () => SegmentTreeNode,
    SinglyLinkedList: () => SinglyLinkedList,
    SinglyLinkedListNode: () => SinglyLinkedListNode,
    SkipList: () => SkipList,
    SkipListNode: () => SkipListNode,
    Stack: () => Stack,
    THUNK_SYMBOL: () => THUNK_SYMBOL,
    TreeMultimap: () => TreeMultimap,
    TreeMultimapNode: () => TreeMultimapNode,
    TreeNode: () => TreeNode,
    Trie: () => Trie,
    TrieNode: () => TrieNode,
    UndirectedEdge: () => UndirectedEdge,
    UndirectedGraph: () => UndirectedGraph,
    UndirectedVertex: () => UndirectedVertex,
    Vector2D: () => Vector2D,
    arrayRemove: () => arrayRemove,
    calcMinUnitsRequired: () => calcMinUnitsRequired,
    getMSB: () => getMSB,
    isThunk: () => isThunk,
    isWeakKey: () => isWeakKey,
    rangeCheck: () => rangeCheck,
    throwRangeError: () => throwRangeError,
    toThunk: () => toThunk,
    trampoline: () => trampoline,
    trampolineAsync: () => trampolineAsync,
    uuidV4: () => uuidV4
  });

  // src/data-structures/hash/hash-table.ts
  var HashTableNode = class {
    constructor(key, value) {
      __publicField(this, "key");
      __publicField(this, "value");
      __publicField(this, "next");
      this.key = key;
      this.value = value;
      this.next = void 0;
    }
  };
  var _HashTable = class _HashTable {
    constructor(capacity = _HashTable.DEFAULT_CAPACITY, hashFn) {
      __publicField(this, "_capacity");
      __publicField(this, "_size");
      __publicField(this, "_buckets");
      __publicField(this, "_hashFn");
      this._hashFn = hashFn || this._defaultHashFn;
      this._capacity = Math.max(capacity, _HashTable.DEFAULT_CAPACITY);
      this._size = 0;
      this._buckets = new Array(this._capacity).fill(void 0);
    }
    get capacity() {
      return this._capacity;
    }
    get size() {
      return this._size;
    }
    get buckets() {
      return this._buckets;
    }
    get hashFn() {
      return this._hashFn;
    }
    /**
     * The set function adds a key-value pair to the hash table, handling collisions and resizing if necessary.
     * @param {K} key - The key parameter represents the key of the key-value pair that you want to insert into the hash
     * table. It is of type K, which is a generic type representing the key's data type.
     * @param {V} value - The parameter `value` represents the value that you want to associate with the given key in the hash
     * table.
     * @returns Nothing is being returned. The return type of the `put` method is `void`, which means it does not return any
     * value.
     */
    set(key, value) {
      const index = this._hash(key);
      const newNode = new HashTableNode(key, value);
      if (!this._buckets[index]) {
        this._buckets[index] = newNode;
      } else {
        let currentNode = this._buckets[index];
        while (currentNode) {
          if (currentNode.key === key) {
            currentNode.value = value;
            return;
          }
          if (!currentNode.next) {
            break;
          }
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
      this._size++;
      if (this._size / this._capacity >= _HashTable.LOAD_FACTOR) {
        this._expand();
      }
    }
    /**
     * The `get` function retrieves the value associated with a given key from a hash table.
     * @param {K} key - The `key` parameter represents the key of the element that we want to retrieve from the data
     * structure.
     * @returns The method is returning the value associated with the given key if it exists in the hash table. If the key is
     * not found, it returns `undefined`.
     */
    get(key) {
      const index = this._hash(key);
      let currentNode = this._buckets[index];
      while (currentNode) {
        if (currentNode.key === key) {
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
      return void 0;
    }
    /**
     * The delete function removes a key-value pair from a hash table.
     * @param {K} key - The `key` parameter represents the key of the key-value pair that needs to be removed from the hash
     * table.
     * @returns Nothing is being returned. The `delete` method has a return type of `void`, which means it does not return
     * any value.
     */
    delete(key) {
      const index = this._hash(key);
      let currentNode = this._buckets[index];
      let prevNode = void 0;
      while (currentNode) {
        if (currentNode.key === key) {
          if (prevNode) {
            prevNode.next = currentNode.next;
          } else {
            this._buckets[index] = currentNode.next;
          }
          this._size--;
          currentNode.next = void 0;
          return;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    *[Symbol.iterator]() {
      for (const bucket of this._buckets) {
        let currentNode = bucket;
        while (currentNode) {
          yield [currentNode.key, currentNode.value];
          currentNode = currentNode.next;
        }
      }
    }
    forEach(callback) {
      let index = 0;
      for (const entry of this) {
        callback(entry, index, this);
        index++;
      }
    }
    filter(predicate) {
      const newTable = new _HashTable();
      let index = 0;
      for (const [key, value] of this) {
        if (predicate([key, value], index, this)) {
          newTable.set(key, value);
        }
        index++;
      }
      return newTable;
    }
    map(callback) {
      const newTable = new _HashTable();
      let index = 0;
      for (const [key, value] of this) {
        newTable.set(key, callback([key, value], index, this));
        index++;
      }
      return newTable;
    }
    reduce(callback, initialValue) {
      let accumulator = initialValue;
      let index = 0;
      for (const entry of this) {
        accumulator = callback(accumulator, entry, index, this);
        index++;
      }
      return accumulator;
    }
    /**
     * The function `_defaultHashFn` calculates the hash value of a given key and returns the remainder when divided by the
     * capacity of the data structure.
     * @param {K} key - The `key` parameter is the input value that needs to be hashed. It can be of any type, but in this
     * code snippet, it is checked whether the key is a string or an object. If it is a string, the `_murmurStringHashFn`
     * function is used to
     * @returns the hash value of the key modulo the capacity of the data structure.
     */
    _defaultHashFn(key) {
      const hashValue = typeof key === "string" ? this._murmurStringHashFn(key) : this._objectHash(key);
      return hashValue % this._capacity;
    }
    /**
     * The `_multiplicativeStringHashFn` function calculates a hash value for a given string key using the multiplicative
     * string hash function.
     * @param {K} key - The `key` parameter is the input value for which we want to calculate the hash. It can be of any
     * type, as it is generic (`K`). The function converts the `key` to a string using the `String()` function.
     * @returns a number, which is the result of the multiplicative string hash function applied to the input key.
     */
    _multiplicativeStringHashFn(key) {
      const keyString = String(key);
      let hash = 0;
      for (let i = 0; i < keyString.length; i++) {
        const charCode = keyString.charCodeAt(i);
        const A = 0.618033988749895;
        const M = 1 << 30;
        hash = (hash * A + charCode) % M;
      }
      return Math.abs(hash);
    }
    /**
     * The function `_murmurStringHashFn` calculates a hash value for a given string key using the MurmurHash algorithm.
     * @param {K} key - The `key` parameter is the input value for which you want to calculate the hash. It can be of any
     * type, but it will be converted to a string using the `String()` function before calculating the hash.
     * @returns a number, which is the hash value calculated for the given key.
     */
    _murmurStringHashFn(key) {
      const keyString = String(key);
      const seed = 0;
      let hash = seed;
      for (let i = 0; i < keyString.length; i++) {
        const char = keyString.charCodeAt(i);
        hash = (hash ^ char) * 1540483477;
        hash = (hash ^ hash >>> 15) * 668265261;
        hash = hash ^ hash >>> 15;
      }
      return Math.abs(hash);
    }
    /**
     * The _hash function takes a key and returns a number.
     * @param {K} key - The parameter "key" is of type K, which represents the type of the key that will be hashed.
     * @returns The hash function is returning a number.
     */
    _hash(key) {
      return this.hashFn(key);
    }
    /**
     * The function calculates a hash value for a given string using the djb2 algorithm.
     * @param {string} key - The `key` parameter in the `stringHash` function is a string value that represents the input for
     * which we want to calculate the hash value.
     * @returns a number, which is the hash value of the input string.
     */
    _stringHash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = hash * 31 + key.charCodeAt(i) & 4294967295;
      }
      return hash;
    }
    /**
     * The function `_objectHash` takes a key and returns a hash value, using a custom hash function for objects.
     * @param {K} key - The parameter "key" is of type "K", which means it can be any type. It could be a string, number,
     * boolean, object, or any other type of value. The purpose of the objectHash function is to generate a hash value for
     * the key, which can be used for
     * @returns a number, which is the hash value of the key.
     */
    _objectHash(key) {
      return this._stringHash(JSON.stringify(key));
    }
    /**
     * The `expand` function increases the capacity of a hash table by creating a new array of buckets with double the
     * capacity and rehashing all the existing key-value pairs into the new buckets.
     */
    _expand() {
      const newCapacity = this._capacity * 2;
      const newBuckets = new Array(newCapacity).fill(void 0);
      for (const bucket of this._buckets) {
        let currentNode = bucket;
        while (currentNode) {
          const newIndex = this._hash(currentNode.key);
          const newNode = new HashTableNode(currentNode.key, currentNode.value);
          if (!newBuckets[newIndex]) {
            newBuckets[newIndex] = newNode;
          } else {
            let currentNewNode = newBuckets[newIndex];
            while (currentNewNode.next) {
              currentNewNode = currentNewNode.next;
            }
            currentNewNode.next = newNode;
          }
          currentNode = currentNode.next;
        }
      }
      this._buckets = newBuckets;
      this._capacity = newCapacity;
    }
  };
  __publicField(_HashTable, "DEFAULT_CAPACITY", 16);
  __publicField(_HashTable, "LOAD_FACTOR", 0.75);
  var HashTable = _HashTable;

  // src/data-structures/base/iterable-base.ts
  var IterableEntryBase = class {
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The function is an implementation of the Symbol.iterator method that returns an iterable iterator.
     * @param {any[]} args - The `args` parameter in the code snippet represents a rest parameter. It
     * allows the function to accept any number of arguments as an array. In this case, the `args`
     * parameter is used to pass any additional arguments to the `_getIterator` method.
     */
    *[Symbol.iterator](...args) {
      yield* __yieldStar(this._getIterator(...args));
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The function returns an iterator that yields key-value pairs from the object, where the value can
     * be undefined.
     */
    *entries() {
      for (const item of this) {
        yield item;
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The function returns an iterator that yields the keys of a data structure.
     */
    *keys() {
      for (const item of this) {
        yield item[0];
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The function returns an iterator that yields the values of a collection.
     */
    *values() {
      for (const item of this) {
        yield item[1];
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The `every` function checks if every element in a collection satisfies a given condition.
     * @param predicate - The `predicate` parameter is a callback function that takes three arguments:
     * `value`, `key`, and `index`. It should return a boolean value indicating whether the condition is
     * met for the current element in the iteration.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `predicate` function. If `thisArg` is provided, it will be
     * passed as the first argument to the `predicate` function. If `thisArg` is not provided
     * @returns The `every` method is returning a boolean value. It returns `true` if every element in
     * the collection satisfies the provided predicate function, and `false` otherwise.
     */
    every(predicate, thisArg) {
      let index = 0;
      for (const item of this) {
        if (!predicate.call(thisArg, item[1], item[0], index++, this)) {
          return false;
        }
      }
      return true;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The "some" function iterates over a collection and returns true if at least one element satisfies
     * a given predicate.
     * @param predicate - The `predicate` parameter is a callback function that takes three arguments:
     * `value`, `key`, and `index`. It should return a boolean value indicating whether the condition is
     * met for the current element in the iteration.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as the `this` value when executing the `predicate` function. If `thisArg` is provided,
     * it will be passed as the first argument to the `predicate` function. If `thisArg` is
     * @returns a boolean value. It returns true if the predicate function returns true for any pair in
     * the collection, and false otherwise.
     */
    some(predicate, thisArg) {
      let index = 0;
      for (const item of this) {
        if (predicate.call(thisArg, item[1], item[0], index++, this)) {
          return true;
        }
      }
      return false;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The `forEach` function iterates over each key-value pair in a collection and executes a callback
     * function for each pair.
     * @param callbackfn - The callback function that will be called for each element in the collection.
     * It takes four parameters: the value of the current element, the key of the current element, the
     * index of the current element, and the collection itself.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that allows you to
     * specify the value of `this` within the callback function. If `thisArg` is provided, it will be
     * used as the `this` value when calling the callback function. If `thisArg` is not provided, `
     */
    forEach(callbackfn, thisArg) {
      let index = 0;
      for (const item of this) {
        const [key, value] = item;
        callbackfn.call(thisArg, value, key, index++, this);
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The `reduce` function iterates over key-value pairs and applies a callback function to each pair,
     * accumulating a single value.
     * @param callbackfn - The callback function that will be called for each element in the collection.
     * It takes four arguments: the current accumulator value, the current value of the element, the key
     * of the element, and the index of the element in the collection. It should return the updated
     * accumulator value.
     * @param {U} initialValue - The `initialValue` parameter is the initial value of the accumulator. It
     * is the value that will be used as the first argument to the `callbackfn` function when reducing
     * the elements of the collection.
     * @returns The `reduce` method is returning the final value of the accumulator after iterating over
     * all the elements in the collection.
     */
    reduce(callbackfn, initialValue) {
      let accumulator = initialValue;
      let index = 0;
      for (const item of this) {
        const [key, value] = item;
        accumulator = callbackfn(accumulator, value, key, index++, this);
      }
      return accumulator;
    }
    hasValue(value) {
      for (const [, elementValue] of this) {
        if (elementValue === value)
          return true;
      }
      return false;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    print() {
      console.log([...this]);
    }
  };
  var IterableElementBase = class {
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The function is an implementation of the Symbol.iterator method that returns an IterableIterator.
     * @param {any[]} args - The `args` parameter in the code snippet represents a rest parameter. It
     * allows the function to accept any number of arguments as an array. In this case, the `args`
     * parameter is used to pass any number of arguments to the `_getIterator` method.
     */
    *[Symbol.iterator](...args) {
      yield* __yieldStar(this._getIterator(...args));
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The function returns an iterator that yields all the values in the object.
     */
    *values() {
      for (const item of this) {
        yield item;
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The `every` function checks if every element in the array satisfies a given predicate.
     * @param predicate - The `predicate` parameter is a callback function that takes three arguments:
     * the current element being processed, its index, and the array it belongs to. It should return a
     * boolean value indicating whether the element satisfies a certain condition or not.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `predicate` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `predicate` function. If `thisArg` is
     * @returns The `every` method is returning a boolean value. It returns `true` if every element in
     * the array satisfies the provided predicate function, and `false` otherwise.
     */
    every(predicate, thisArg) {
      let index = 0;
      for (const item of this) {
        if (!predicate.call(thisArg, item, index++, this)) {
          return false;
        }
      }
      return true;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The "some" function checks if at least one element in a collection satisfies a given predicate.
     * @param predicate - The `predicate` parameter is a callback function that takes three arguments:
     * `value`, `index`, and `array`. It should return a boolean value indicating whether the current
     * element satisfies the condition.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as the `this` value when executing the `predicate` function. If `thisArg` is provided,
     * it will be passed as the `this` value to the `predicate` function. If `thisArg
     * @returns a boolean value. It returns true if the predicate function returns true for any element
     * in the collection, and false otherwise.
     */
    some(predicate, thisArg) {
      let index = 0;
      for (const item of this) {
        if (predicate.call(thisArg, item, index++, this)) {
          return true;
        }
      }
      return false;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The `forEach` function iterates over each element in an array-like object and calls a callback
     * function for each element.
     * @param callbackfn - The callbackfn parameter is a function that will be called for each element in
     * the array. It takes three arguments: the current element being processed, the index of the current
     * element, and the array that forEach was called upon.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `callbackfn` function. If `thisArg` is provided, it will
     * be passed as the `this` value to the `callbackfn` function. If `thisArg
     */
    forEach(callbackfn, thisArg) {
      let index = 0;
      for (const item of this) {
        callbackfn.call(thisArg, item, index++, this);
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The `reduce` function iterates over the elements of an array-like object and applies a callback
     * function to reduce them into a single value.
     * @param callbackfn - The callbackfn parameter is a function that will be called for each element in
     * the array. It takes four arguments:
     * @param {U} initialValue - The initialValue parameter is the initial value of the accumulator. It
     * is the value that the accumulator starts with before the reduction operation begins.
     * @returns The `reduce` method is returning the final value of the accumulator after iterating over
     * all the elements in the array and applying the callback function to each element.
     */
    reduce(callbackfn, initialValue) {
      let accumulator = initialValue;
      let index = 0;
      for (const item of this) {
        accumulator = callbackfn(accumulator, item, index++, this);
      }
      return accumulator;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    print() {
      console.log([...this]);
    }
  };

  // src/utils/utils.ts
  var uuidV4 = function() {
    return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[x]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  };
  var arrayRemove = function(array, predicate) {
    let i = -1, len = array ? array.length : 0;
    const result = [];
    while (++i < len) {
      const value = array[i];
      if (predicate(value, i, array)) {
        result.push(value);
        Array.prototype.splice.call(array, i--, 1);
        len--;
      }
    }
    return result;
  };
  var THUNK_SYMBOL = Symbol("thunk");
  var isThunk = (fnOrValue) => {
    return typeof fnOrValue === "function" && fnOrValue.__THUNK__ === THUNK_SYMBOL;
  };
  var toThunk = (fn) => {
    const thunk = () => fn();
    thunk.__THUNK__ = THUNK_SYMBOL;
    return thunk;
  };
  var trampoline = (fn) => {
    const cont = (...args) => toThunk(() => fn(...args));
    return Object.assign(
      (...args) => {
        let result = fn(...args);
        while (isThunk(result) && typeof result === "function") {
          result = result();
        }
        return result;
      },
      { cont }
    );
  };
  var trampolineAsync = (fn) => {
    const cont = (...args) => toThunk(() => fn(...args));
    return Object.assign(
      (...args) => __async(void 0, null, function* () {
        let result = yield fn(...args);
        while (isThunk(result) && typeof result === "function") {
          result = yield result();
        }
        return result;
      }),
      { cont }
    );
  };
  var getMSB = (value) => {
    if (value <= 0) {
      return 0;
    }
    return 1 << 31 - Math.clz32(value);
  };
  var rangeCheck = (index, min, max, message = "Index out of bounds.") => {
    if (index < min || index > max)
      throw new RangeError(message);
  };
  var throwRangeError = (message = "The value is off-limits.") => {
    throw new RangeError(message);
  };
  var isWeakKey = (input) => {
    const inputType = typeof input;
    return inputType === "object" && input !== null || inputType === "function";
  };
  var calcMinUnitsRequired = (totalQuantity, unitSize) => Math.floor((totalQuantity + unitSize - 1) / unitSize);

  // src/data-structures/hash/hash-map.ts
  var HashMap = class _HashMap extends IterableEntryBase {
    /**
     * The constructor function initializes a new instance of a class with optional elements and options.
     * @param elements - The `elements` parameter is an iterable containing key-value pairs `[K, V]`. It
     * is optional and defaults to an empty array `[]`. This parameter is used to initialize the map with
     * key-value pairs.
     * @param [options] - The `options` parameter is an optional object that can contain additional
     * configuration options for the constructor. In this case, it has one property:
     */
    constructor(elements = [], options) {
      super();
      __publicField(this, "_store", {});
      __publicField(this, "_objMap", /* @__PURE__ */ new Map());
      __publicField(this, "_size", 0);
      __publicField(this, "_hashFn", (key) => String(key));
      if (options) {
        const { hashFn } = options;
        if (hashFn) {
          this._hashFn = hashFn;
        }
      }
      if (elements) {
        this.setMany(elements);
      }
    }
    get size() {
      return this._size;
    }
    isEmpty() {
      return this.size === 0;
    }
    clear() {
      this._store = {};
      this._objMap.clear();
      this._size = 0;
    }
    /**
     * The `set` function adds a key-value pair to a map-like data structure, incrementing the size if
     * the key is not already present.
     * @param {K} key - The key parameter is the key used to identify the value in the data structure. It
     * can be of any type, but if it is an object, it will be stored in a Map, otherwise it will be
     * stored in a regular JavaScript object.
     * @param {V} value - The value parameter represents the value that you want to associate with the
     * key in the data structure.
     */
    set(key, value) {
      if (this._isObjKey(key)) {
        if (!this._objMap.has(key)) {
          this._size++;
        }
        this._objMap.set(key, value);
      } else {
        const strKey = this._getNoObjKey(key);
        if (this._store[strKey] === void 0) {
          this._size++;
        }
        this._store[strKey] = { key, value };
      }
      return true;
    }
    /**
     * The function "setMany" sets multiple key-value pairs in a map.
     * @param elements - The `elements` parameter is an iterable containing key-value pairs. Each
     * key-value pair is represented as an array with two elements: the key and the value.
     */
    setMany(elements) {
      const results = [];
      for (const [key, value] of elements)
        results.push(this.set(key, value));
      return results;
    }
    /**
     * The `get` function retrieves a value from a map based on a given key, either from an object map or
     * a string map.
     * @param {K} key - The `key` parameter is the key used to retrieve a value from the map. It can be
     * of any type, but it should be compatible with the key type used when the map was created.
     * @returns The method `get(key: K)` returns a value of type `V` if the key exists in the `_objMap`
     * or `_store`, otherwise it returns `undefined`.
     */
    get(key) {
      var _a;
      if (this._isObjKey(key)) {
        return this._objMap.get(key);
      } else {
        const strKey = this._getNoObjKey(key);
        return (_a = this._store[strKey]) == null ? void 0 : _a.value;
      }
    }
    /**
     * The `has` function checks if a given key exists in the `_objMap` or `_store` based on whether it
     * is an object key or not.
     * @param {K} key - The parameter "key" is of type K, which means it can be any type.
     * @returns The `has` method is returning a boolean value.
     */
    has(key) {
      if (this._isObjKey(key)) {
        return this._objMap.has(key);
      } else {
        const strKey = this._getNoObjKey(key);
        return strKey in this._store;
      }
    }
    /**
     * The `delete` function removes an element from a map-like data structure based on the provided key.
     * @param {K} key - The `key` parameter is the key of the element that you want to delete from the
     * data structure.
     * @returns The `delete` method returns a boolean value. It returns `true` if the key was
     * successfully deleted from the map, and `false` if the key was not found in the map.
     */
    delete(key) {
      if (this._isObjKey(key)) {
        if (this._objMap.has(key)) {
          this._size--;
        }
        return this._objMap.delete(key);
      } else {
        const strKey = this._getNoObjKey(key);
        if (strKey in this._store) {
          delete this._store[strKey];
          this._size--;
          return true;
        }
        return false;
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `map` function in TypeScript creates a new HashMap by applying a callback function to each
     * key-value pair in the original HashMap.
     * @param callbackfn - The callback function that will be called for each key-value pair in the
     * HashMap. It takes four parameters:
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `callbackfn` function. If `thisArg` is provided, it will
     * be passed as the `this` value to the `callbackfn` function. If `thisArg
     * @returns The `map` method is returning a new `HashMap` object with the transformed values based on
     * the provided callback function.
     */
    map(callbackfn, thisArg) {
      const resultMap = new _HashMap();
      let index = 0;
      for (const [key, value] of this) {
        resultMap.set(key, callbackfn.call(thisArg, value, key, index++, this));
      }
      return resultMap;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `filter` function creates a new HashMap containing key-value pairs from the original HashMap
     * that satisfy a given predicate function.
     * @param predicate - The predicate parameter is a function that takes four arguments: value, key,
     * index, and map. It is used to determine whether an element should be included in the filtered map
     * or not. The function should return a boolean value - true if the element should be included, and
     * false otherwise.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `predicate` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `predicate` function. If `thisArg` is
     * @returns The `filter` method is returning a new `HashMap` object that contains the key-value pairs
     * from the original `HashMap` that pass the provided `predicate` function.
     */
    filter(predicate, thisArg) {
      const filteredMap = new _HashMap();
      let index = 0;
      for (const [key, value] of this) {
        if (predicate.call(thisArg, value, key, index++, this)) {
          filteredMap.set(key, value);
        }
      }
      return filteredMap;
    }
    print() {
      console.log([...this.entries()]);
    }
    put(key, value) {
      return this.set(key, value);
    }
    /**
     * The function returns an iterator that yields key-value pairs from both an object store and an
     * object map.
     */
    *_getIterator() {
      for (const node of Object.values(this._store)) {
        yield [node.key, node.value];
      }
      for (const node of this._objMap) {
        yield node;
      }
    }
    _isObjKey(key) {
      const keyType = typeof key;
      return (keyType === "object" || keyType === "function") && key !== null;
    }
    _getNoObjKey(key) {
      const keyType = typeof key;
      let strKey;
      if (keyType !== "string" && keyType !== "number" && keyType !== "symbol") {
        strKey = this._hashFn(key);
      } else {
        if (keyType === "number") {
          strKey = key;
        } else {
          strKey = key;
        }
      }
      return strKey;
    }
  };
  var LinkedHashMap = class _LinkedHashMap extends IterableEntryBase {
    constructor(elements, options = {
      hashFn: (key) => String(key),
      objHashFn: (key) => key
    }) {
      super();
      __publicField(this, "_noObjMap", {});
      __publicField(this, "_objMap", /* @__PURE__ */ new WeakMap());
      __publicField(this, "_head");
      __publicField(this, "_tail");
      __publicField(this, "_sentinel");
      __publicField(this, "_hashFn");
      __publicField(this, "_objHashFn");
      __publicField(this, "_size", 0);
      this._sentinel = {};
      this._sentinel.prev = this._sentinel.next = this._head = this._tail = this._sentinel;
      const { hashFn, objHashFn } = options;
      this._hashFn = hashFn;
      this._objHashFn = objHashFn;
      if (elements) {
        for (const el of elements) {
          this.set(el[0], el[1]);
        }
      }
    }
    get size() {
      return this._size;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function returns the key-value pair at the front of a data structure.
     * @returns The front element of the data structure, represented as a tuple with a key (K) and a
     * value (V).
     */
    get first() {
      if (this._size === 0)
        return;
      return [this._head.key, this._head.value];
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function returns the key-value pair at the end of a data structure.
     * @returns The method is returning an array containing the key-value pair of the tail element in the
     * data structure.
     */
    get last() {
      if (this._size === 0)
        return;
      return [this._tail.key, this._tail.value];
    }
    /**
     * The `begin()` function in TypeScript iterates over a linked list and yields key-value pairs.
     */
    *begin() {
      let node = this._head;
      while (node !== this._sentinel) {
        yield [node.key, node.value];
        node = node.next;
      }
    }
    /**
     * The function `reverseBegin()` iterates over a linked list in reverse order, yielding each node's
     * key and value.
     */
    *reverseBegin() {
      let node = this._tail;
      while (node !== this._sentinel) {
        yield [node.key, node.value];
        node = node.prev;
      }
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `set` function adds a new key-value pair to a data structure, either using an object key or a
     * string key.
     * @param {K} key - The `key` parameter is the key to be set in the data structure. It can be of any
     * type, but typically it is a string or symbol.
     * @param {V} [value] - The `value` parameter is an optional parameter of type `V`. It represents the
     * value associated with the key being set in the data structure.
     * @returns the size of the data structure after the key-value pair has been set.
     */
    set(key, value) {
      let node;
      const isNewKey = !this.has(key);
      if (isWeakKey(key)) {
        const hash = this._objHashFn(key);
        node = this._objMap.get(hash);
        if (!node && isNewKey) {
          node = { key: hash, value, prev: this._tail, next: this._sentinel };
          this._objMap.set(hash, node);
        } else if (node) {
          node.value = value;
        }
      } else {
        const hash = this._hashFn(key);
        node = this._noObjMap[hash];
        if (!node && isNewKey) {
          this._noObjMap[hash] = node = { key, value, prev: this._tail, next: this._sentinel };
        } else if (node) {
          node.value = value;
        }
      }
      if (node && isNewKey) {
        if (this._size === 0) {
          this._head = node;
          this._sentinel.next = node;
        } else {
          this._tail.next = node;
          node.prev = this._tail;
        }
        this._tail = node;
        this._sentinel.prev = node;
        this._size++;
      }
      return true;
    }
    has(key) {
      if (isWeakKey(key)) {
        const hash = this._objHashFn(key);
        return this._objMap.has(hash);
      } else {
        const hash = this._hashFn(key);
        return hash in this._noObjMap;
      }
    }
    setMany(entries) {
      const results = [];
      for (const entry of entries) {
        const [key, value] = entry;
        results.push(this.set(key, value));
      }
      return results;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function `get` retrieves the value associated with a given key from a map, either by using the
     * key directly or by using an index stored in the key object.
     * @param {K} key - The `key` parameter is the key used to retrieve a value from the map. It can be
     * of any type, but typically it is a string or symbol.
     * @returns The value associated with the given key is being returned. If the key is an object key,
     * the value is retrieved from the `_nodes` array using the index stored in the `OBJ_KEY_INDEX`
     * property of the key. If the key is a string key, the value is retrieved from the `_noObjMap` object
     * using the key itself. If the key is not found, `undefined` is
     */
    get(key) {
      if (isWeakKey(key)) {
        const hash = this._objHashFn(key);
        const node = this._objMap.get(hash);
        return node ? node.value : void 0;
      } else {
        const hash = this._hashFn(key);
        const node = this._noObjMap[hash];
        return node ? node.value : void 0;
      }
    }
    /**
     * Time Complexity: O(n), where n is the index.
     * Space Complexity: O(1)
     *
     * The function `getAt` retrieves the key-value pair at a specified index in a linked list.
     * @param {number} index - The index parameter is a number that represents the position of the
     * element we want to retrieve from the data structure.
     * @returns The method `getAt(index: number)` is returning an array containing the key-value pair at
     * the specified index in the data structure. The key-value pair is represented as a tuple `[K, V]`,
     * where `K` is the key and `V` is the value.
     */
    getAt(index) {
      rangeCheck(index, 0, this._size - 1);
      let node = this._head;
      while (index--) {
        node = node.next;
      }
      return node.value;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `delete` function removes a key-value pair from a map-like data structure.
     * @param {K} key - The `key` parameter is the key that you want to delete from the data structure.
     * It can be of any type, but typically it is a string or an object.
     * @returns a boolean value. It returns `true` if the deletion was successful, and `false` if the key
     * was not found.
     */
    delete(key) {
      let node;
      if (isWeakKey(key)) {
        const hash = this._objHashFn(key);
        node = this._objMap.get(hash);
        if (!node) {
          return false;
        }
        this._objMap.delete(hash);
      } else {
        const hash = this._hashFn(key);
        node = this._noObjMap[hash];
        if (!node) {
          return false;
        }
        delete this._noObjMap[hash];
      }
      this._deleteNode(node);
      return true;
    }
    /**
     * Time Complexity: O(n), where n is the index.
     * Space Complexity: O(1)
     *
     * The `deleteAt` function deletes a node at a specified index in a linked list.
     * @param {number} index - The index parameter represents the position at which the node should be
     * deleted in the linked list.
     * @returns The size of the list after deleting the element at the specified index.
     */
    deleteAt(index) {
      rangeCheck(index, 0, this._size - 1);
      let node = this._head;
      while (index--) {
        node = node.next;
      }
      return this._deleteNode(node);
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function checks if a data structure is empty by comparing its size to zero.
     * @returns The method is returning a boolean value indicating whether the size of the object is 0 or
     * not.
     */
    isEmpty() {
      return this._size === 0;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `clear` function clears all the elements in a data structure and resets its properties.
     */
    clear() {
      this._noObjMap = {};
      this._size = 0;
      this._head = this._tail = this._sentinel.prev = this._sentinel.next = this._sentinel;
    }
    clone() {
      const cloned = new _LinkedHashMap([], { hashFn: this._hashFn, objHashFn: this._objHashFn });
      for (const entry of this) {
        const [key, value] = entry;
        cloned.set(key, value);
      }
      return cloned;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `filter` function creates a new `LinkedHashMap` containing key-value pairs from the original
     * map that satisfy a given predicate function.
     * @param predicate - The `predicate` parameter is a callback function that takes four arguments:
     * `value`, `key`, `index`, and `this`. It should return a boolean value indicating whether the
     * current element should be included in the filtered map or not.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that allows you to
     * specify the value of `this` within the `predicate` function. It is used when you want to bind a
     * specific object as the context for the `predicate` function. If `thisArg` is not provided, `this
     * @returns a new `LinkedHashMap` object that contains the key-value pairs from the original
     * `LinkedHashMap` object that satisfy the given predicate function.
     */
    filter(predicate, thisArg) {
      const filteredMap = new _LinkedHashMap();
      let index = 0;
      for (const [key, value] of this) {
        if (predicate.call(thisArg, value, key, index, this)) {
          filteredMap.set(key, value);
        }
        index++;
      }
      return filteredMap;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `map` function in TypeScript creates a new `LinkedHashMap` by applying a callback function to
     * each key-value pair in the original map.
     * @param callback - The callback parameter is a function that will be called for each key-value pair
     * in the map. It takes four arguments: the value of the current key-value pair, the key of the
     * current key-value pair, the index of the current key-value pair, and the map itself. The callback
     * function should
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that allows you to
     * specify the value of `this` within the callback function. If provided, the callback function will
     * be called with `thisArg` as its `this` value. If not provided, `this` will refer to the current
     * map
     * @returns a new `LinkedHashMap` object with the values mapped according to the provided callback
     * function.
     */
    map(callback, thisArg) {
      const mappedMap = new _LinkedHashMap();
      let index = 0;
      for (const [key, value] of this) {
        const newValue = callback.call(thisArg, value, key, index, this);
        mappedMap.set(key, newValue);
        index++;
      }
      return mappedMap;
    }
    put(key, value) {
      return this.set(key, value);
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the LinkedHashMap.
     * Space Complexity: O(1)
     *
     * The above function is an iterator that yields key-value pairs from a linked list.
     */
    *_getIterator() {
      let node = this._head;
      while (node !== this._sentinel) {
        yield [node.key, node.value];
        node = node.next;
      }
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `_deleteNode` function removes a node from a doubly linked list and updates the head and tail
     * pointers if necessary.
     * @param node - The `node` parameter is an instance of the `HashMapLinkedNode` class, which
     * represents a node in a linked list. It contains a key-value pair and references to the previous
     * and next nodes in the list.
     */
    _deleteNode(node) {
      const { prev, next } = node;
      prev.next = next;
      next.prev = prev;
      if (node === this._head) {
        this._head = next;
      }
      if (node === this._tail) {
        this._tail = prev;
      }
      this._size -= 1;
      return true;
    }
  };

  // src/data-structures/linked-list/singly-linked-list.ts
  var SinglyLinkedListNode = class {
    /**
     * The constructor function initializes an instance of a class with a given value and sets the next property to undefined.
     * @param {E} value - The "value" parameter is of type E, which means it can be any data type. It represents the value that
     * will be stored in the node of a linked list.
     */
    constructor(value) {
      __publicField(this, "value");
      __publicField(this, "next");
      this.value = value;
      this.next = void 0;
    }
  };
  var SinglyLinkedList = class _SinglyLinkedList extends IterableElementBase {
    /**
     * The constructor initializes the linked list with an empty head, tail, and length.
     */
    constructor(elements) {
      super();
      __publicField(this, "_head");
      __publicField(this, "_tail");
      __publicField(this, "_size");
      this._head = void 0;
      this._tail = void 0;
      this._size = 0;
      if (elements) {
        for (const el of elements)
          this.push(el);
      }
    }
    get head() {
      return this._head;
    }
    get tail() {
      return this._tail;
    }
    get size() {
      return this._size;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the input array, as it performs a loop to push each element into the linked list.
     * Space Complexity: O(n) - Linear space, as it creates a new node for each element in the array.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the input array, as it performs a loop to push each element into the linked list.
     * Space Complexity: O(n) - Linear space, as it creates a new node for each element in the array.
     *
     * The `fromArray` function creates a new SinglyLinkedList instance and populates it with the elements from the given
     * array.
     * @param {E[]} data - The `data` parameter is an array of elements of type `E`.
     * @returns The `fromArray` function returns a `SinglyLinkedList` object.
     */
    static fromArray(data) {
      const singlyLinkedList = new _SinglyLinkedList();
      for (const item of data) {
        singlyLinkedList.push(item);
      }
      return singlyLinkedList;
    }
    /**
     * Time Complexity: O(1) - Constant time, as it involves basic pointer adjustments.
     * Space Complexity: O(1) - Constant space, as it only creates a new node.
     */
    /**
     * Time Complexity: O(1) - Constant time, as it involves basic pointer adjustments.
     * Space Complexity: O(1) - Constant space, as it only creates a new node.
     *
     * The `push` function adds a new node with the given value to the end of a singly linked list.
     * @param {E} value - The "value" parameter represents the value that you want to add to the linked list. It can be of
     * any type (E) as specified in the generic type declaration of the class or function.
     */
    push(value) {
      const newNode = new SinglyLinkedListNode(value);
      if (!this.head) {
        this._head = newNode;
        this._tail = newNode;
      } else {
        this.tail.next = newNode;
        this._tail = newNode;
      }
      this._size++;
      return true;
    }
    /**
     * Time Complexity: O(1) - Constant time, as it involves basic pointer adjustments.
     * Space Complexity: O(1) - Constant space, as it only creates a new node.
     */
    /**
     * Time Complexity: O(1) - Constant time, as it involves basic pointer adjustments.
     * Space Complexity: O(1) - Constant space, as it only creates a new node.
     *
     * The `push` function adds a new node with the given value to the end of a singly linked list.
     * @param {E} value - The "value" parameter represents the value that you want to add to the linked list. It can be of
     * any type (E) as specified in the generic type declaration of the class or function.
     */
    addLast(value) {
      return this.push(value);
    }
    /**
     * Time Complexity: O(n) - Linear time in the worst case, as it may need to traverse the list to find the last element.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time in the worst case, as it may need to traverse the list to find the last element.
     * Space Complexity: O(1) - Constant space.
     *
     * The `pop()` function removes and returns the value of the last element in a linked list, updating the head and tail
     * pointers accordingly.
     * @returns The method `pop()` returns the value of the node that is being removed from the end of the linked list. If
     * the linked list is empty, it returns `undefined`.
     */
    pop() {
      if (!this.head)
        return void 0;
      if (this.head === this.tail) {
        const value2 = this.head.value;
        this._head = void 0;
        this._tail = void 0;
        this._size--;
        return value2;
      }
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      const value = this.tail.value;
      current.next = void 0;
      this._tail = current;
      this._size--;
      return value;
    }
    /**
     * Time Complexity: O(n) - Linear time in the worst case, as it may need to traverse the list to find the last element.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time in the worst case, as it may need to traverse the list to find the last element.
     * Space Complexity: O(1) - Constant space.
     *
     * The `pollLast()` function removes and returns the value of the last element in a linked list, updating the head and tail
     * pointers accordingly.
     * @returns The method `pop()` returns the value of the node that is being removed from the end of the linked list. If
     * the linked list is empty, it returns `undefined`.
     */
    pollLast() {
      return this.pop();
    }
    /**
     * Time Complexity: O(1) - Constant time, as it involves adjusting pointers at the head.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(1) - Constant time, as it involves adjusting pointers at the head.
     * Space Complexity: O(1) - Constant space.
     *
     * The `shift()` function removes and returns the value of the first node in a linked list.
     * @returns The value of the node that is being removed from the beginning of the linked list.
     */
    shift() {
      if (!this.head)
        return void 0;
      const removedNode = this.head;
      this._head = this.head.next;
      this._size--;
      return removedNode.value;
    }
    /**
     * Time Complexity: O(1) - Constant time, as it involves adjusting pointers at the head.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(1) - Constant time, as it involves adjusting pointers at the head.
     * Space Complexity: O(1) - Constant space.
     *
     * The `pollFirst()` function removes and returns the value of the first node in a linked list.
     * @returns The value of the node that is being removed from the beginning of the linked list.
     */
    pollFirst() {
      return this.shift();
    }
    /**
     * Time Complexity: O(1) - Constant time, as it involves adjusting pointers at the head.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(1) - Constant time, as it involves adjusting pointers at the head.
     * Space Complexity: O(1) - Constant space.
     *
     * The unshift function adds a new node with the given value to the beginning of a singly linked list.
     * @param {E} value - The parameter "value" represents the value of the new node that will be added to the beginning of the
     * linked list.
     */
    unshift(value) {
      const newNode = new SinglyLinkedListNode(value);
      if (!this.head) {
        this._head = newNode;
        this._tail = newNode;
      } else {
        newNode.next = this.head;
        this._head = newNode;
      }
      this._size++;
      return true;
    }
    /**
     * Time Complexity: O(1) - Constant time, as it involves adjusting pointers at the head.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(1) - Constant time, as it involves adjusting pointers at the head.
     * Space Complexity: O(1) - Constant space.
     *
     * The addFirst function adds a new node with the given value to the beginning of a singly linked list.
     * @param {E} value - The parameter "value" represents the value of the new node that will be added to the beginning of the
     * linked list.
     */
    addFirst(value) {
      return this.unshift(value);
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the index, as it may need to traverse the list to find the desired node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the index, as it may need to traverse the list to find the desired node.
     * Space Complexity: O(1) - Constant space.
     *
     * The function `getAt` returns the value at a specified index in a linked list, or undefined if the index is out of range.
     * @param {number} index - The index parameter is a number that represents the position of the element we want to
     * retrieve from the list.
     * @returns The method `getAt(index: number): E | undefined` returns the value at the specified index in the linked list, or
     * `undefined` if the index is out of bounds.
     */
    getAt(index) {
      if (index < 0 || index >= this.size)
        return void 0;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current.value;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the index, as it may need to traverse the list to find the desired node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the index, as it may need to traverse the list to find the desired node.
     * Space Complexity: O(1) - Constant space.
     *
     * The function `getNodeAt` returns the node at a given index in a singly linked list.
     * @param {number} index - The `index` parameter is a number that represents the position of the node we want to
     * retrieve from the linked list. It indicates the zero-based index of the node we want to access.
     * @returns The method `getNodeAt(index: number)` returns a `SinglyLinkedListNode<E>` object if the node at the
     * specified index exists, or `undefined` if the index is out of bounds.
     */
    getNodeAt(index) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the index, as it may need to traverse the list to find the desired node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the index, as it may need to traverse the list to find the desired node.
     * Space Complexity: O(1) - Constant space.
     *
     * The `deleteAt` function removes an element at a specified index from a linked list and returns the removed element.
     * @param {number} index - The index parameter represents the position of the element that needs to be deleted in the
     * data structure. It is of type number.
     * @returns The method `deleteAt` returns the value of the node that was deleted, or `undefined` if the index is out of
     * bounds.
     */
    deleteAt(index) {
      if (index < 0 || index >= this.size)
        return false;
      if (index === 0) {
        this.shift();
        return true;
      }
      if (index === this.size - 1) {
        this.pop();
        return true;
      }
      const prevNode = this.getNodeAt(index - 1);
      const removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      this._size--;
      return true;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the index, as it may need to traverse the list to find the desired node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the index, as it may need to traverse the list to find the desired node.
     * Space Complexity: O(1) - Constant space.
     *
     * The delete function removes a node with a specific value from a singly linked list.
     * @param {E | SinglyLinkedListNode<E>} valueOrNode - The `valueOrNode` parameter can accept either a value of type `E`
     * or a `SinglyLinkedListNode<E>` object.
     * @returns The `delete` method returns a boolean value. It returns `true` if the value or node is found and
     * successfully deleted from the linked list, and `false` if the value or node is not found in the linked list.
     */
    delete(valueOrNode) {
      if (!valueOrNode)
        return false;
      let value;
      if (valueOrNode instanceof SinglyLinkedListNode) {
        value = valueOrNode.value;
      } else {
        value = valueOrNode;
      }
      let current = this.head, prev = void 0;
      while (current) {
        if (current.value === value) {
          if (prev === void 0) {
            this._head = current.next;
            if (current === this.tail) {
              this._tail = void 0;
            }
          } else {
            prev.next = current.next;
            if (current === this.tail) {
              this._tail = prev;
            }
          }
          this._size--;
          return true;
        }
        prev = current;
        current = current.next;
      }
      return false;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the index, as it may need to traverse the list to find the desired node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the index, as it may need to traverse the list to find the desired node.
     * Space Complexity: O(1) - Constant space.
     *
     * The `addAt` function inserts a value at a specified index in a singly linked list.
     * @param {number} index - The index parameter represents the position at which the new value should be inserted in the
     * linked list. It is of type number.
     * @param {E} value - The `value` parameter represents the value that you want to insert into the linked list at the
     * specified index.
     * @returns The `insert` method returns a boolean value. It returns `true` if the insertion is successful, and `false`
     * if the index is out of bounds.
     */
    addAt(index, value) {
      if (index < 0 || index > this.size)
        return false;
      if (index === 0) {
        this.unshift(value);
        return true;
      }
      if (index === this.size) {
        this.push(value);
        return true;
      }
      const newNode = new SinglyLinkedListNode(value);
      const prevNode = this.getNodeAt(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this._size++;
      return true;
    }
    /**
     * The function checks if the length of a data structure is equal to zero and returns a boolean value indicating
     * whether it is empty or not.
     * @returns A boolean value indicating whether the length of the object is equal to 0.
     */
    isEmpty() {
      return this.size === 0;
    }
    /**
     * The `clear` function resets the linked list by setting the head, tail, and length to undefined and 0 respectively.
     */
    clear() {
      this._head = void 0;
      this._tail = void 0;
      this._size = 0;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to traverse the entire list to convert it to an array.
     * Space Complexity: O(n) - Linear space, as it creates an array with the same length as the list.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to traverse the entire list to convert it to an array.
     * Space Complexity: O(n) - Linear space, as it creates an array with the same length as the list.
     *
     * The `toArray` function converts a linked list into an array.
     * @returns The `toArray()` method is returning an array of type `E[]`.
     */
    toArray() {
      const array = [];
      let current = this.head;
      while (current) {
        array.push(current.value);
        current = current.next;
      }
      return array;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     *
     * The `reverse` function reverses the order of the nodes in a singly linked list.
     * @returns The reverse() method does not return anything. It has a return type of void.
     */
    reverse() {
      if (!this.head || this.head === this.tail)
        return this;
      let prev = void 0;
      let current = this.head;
      let next = void 0;
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      [this._head, this._tail] = [this.tail, this.head];
      return this;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     *
     * The `find` function iterates through a linked list and returns the first element that satisfies a given condition.
     * @param callback - A function that takes a value of type E as its parameter and returns a boolean value. This
     * function is used to determine whether a particular value in the linked list satisfies a certain condition.
     * @returns The method `find` returns the first element in the linked list that satisfies the condition specified by
     * the callback function. If no element satisfies the condition, it returns `undefined`.
     */
    find(callback) {
      let current = this.head;
      while (current) {
        if (callback(current.value)) {
          return current.value;
        }
        current = current.next;
      }
      return void 0;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     *
     * The `indexOf` function returns the index of the first occurrence of a given value in a linked list.
     * @param {E} value - The value parameter is the value that you want to find the index of in the linked list.
     * @returns The method is returning the index of the first occurrence of the specified value in the linked list. If the
     * value is not found, it returns -1.
     */
    indexOf(value) {
      let index = 0;
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return index;
        }
        index++;
        current = current.next;
      }
      return -1;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     *
     * The function finds a node in a singly linked list by its value and returns the node if found, otherwise returns
     * undefined.
     * @param {E} value - The value parameter is the value that we want to search for in the linked list.
     * @returns a `SinglyLinkedListNode<E>` if a node with the specified value is found in the linked list. If no node with
     * the specified value is found, the function returns `undefined`.
     */
    getNode(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return current;
        }
        current = current.next;
      }
      return void 0;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     *
     * The `addBefore` function inserts a new value before an existing value in a singly linked list.
     * @param {E | SinglyLinkedListNode<E>} existingValueOrNode - The existing value or node that you want to insert the
     * new value before. It can be either the value itself or a node containing the value in the linked list.
     * @param {E} newValue - The `newValue` parameter represents the value that you want to insert into the linked list.
     * @returns The method `addBefore` returns a boolean value. It returns `true` if the new value was successfully
     * inserted before the existing value, and `false` otherwise.
     */
    addBefore(existingValueOrNode, newValue) {
      if (!this.head)
        return false;
      let existingValue;
      if (existingValueOrNode instanceof SinglyLinkedListNode) {
        existingValue = existingValueOrNode.value;
      } else {
        existingValue = existingValueOrNode;
      }
      if (this.head.value === existingValue) {
        this.unshift(newValue);
        return true;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.value === existingValue) {
          const newNode = new SinglyLinkedListNode(newValue);
          newNode.next = current.next;
          current.next = newNode;
          this._size++;
          return true;
        }
        current = current.next;
      }
      return false;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     *
     * The `addAfter` function inserts a new node with a given value after an existing node in a singly linked list.
     * @param {E | SinglyLinkedListNode<E>} existingValueOrNode - The existing value or node in the linked list after which
     * the new value will be inserted. It can be either the value of the existing node or the existing node itself.
     * @param {E} newValue - The value that you want to insert into the linked list after the existing value or node.
     * @returns The method returns a boolean value. It returns true if the new value was successfully inserted after the
     * existing value or node, and false if the existing value or node was not found in the linked list.
     */
    addAfter(existingValueOrNode, newValue) {
      let existingNode;
      if (existingValueOrNode instanceof SinglyLinkedListNode) {
        existingNode = existingValueOrNode;
      } else {
        existingNode = this.getNode(existingValueOrNode);
      }
      if (existingNode) {
        const newNode = new SinglyLinkedListNode(newValue);
        newNode.next = existingNode.next;
        existingNode.next = newNode;
        if (existingNode === this.tail) {
          this._tail = newNode;
        }
        this._size++;
        return true;
      }
      return false;
    }
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(n) - Linear time, where n is the length of the list, as it needs to reverse the pointers of each node.
     * Space Complexity: O(1) - Constant space.
     *
     * The function counts the number of occurrences of a given value in a linked list.
     * @param {E} value - The value parameter is the value that you want to count the occurrences of in the linked list.
     * @returns The count of occurrences of the given value in the linked list.
     */
    countOccurrences(value) {
      let count = 0;
      let current = this.head;
      while (current) {
        if (current.value === value) {
          count++;
        }
        current = current.next;
      }
      return count;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `filter` function creates a new SinglyLinkedList by iterating over the elements of the current
     * list and applying a callback function to each element to determine if it should be included in the
     * filtered list.
     * @param callback - The callback parameter is a function that will be called for each element in the
     * list. It takes three arguments: the current element, the index of the current element, and the
     * list itself. The callback function should return a boolean value indicating whether the current
     * element should be included in the filtered list or not
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `callback` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `callback` function. If `thisArg` is
     * @returns The `filter` method is returning a new `SinglyLinkedList` object that contains the
     * elements that pass the filter condition specified by the `callback` function.
     */
    filter(callback, thisArg) {
      const filteredList = new _SinglyLinkedList();
      let index = 0;
      for (const current of this) {
        if (callback.call(thisArg, current, index, this)) {
          filteredList.push(current);
        }
        index++;
      }
      return filteredList;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `map` function creates a new SinglyLinkedList by applying a callback function to each element
     * of the original list.
     * @param callback - The `callback` parameter is a function that will be called for each element in
     * the linked list. It takes three arguments:
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `callback` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `callback` function. If `thisArg` is
     * @returns The `map` function is returning a new `SinglyLinkedList` object that contains the results
     * of applying the provided `callback` function to each element in the original list.
     */
    map(callback, thisArg) {
      const mappedList = new _SinglyLinkedList();
      let index = 0;
      for (const current of this) {
        mappedList.push(callback.call(thisArg, current, index, this));
        index++;
      }
      return mappedList;
    }
    *_getIterator() {
      let current = this.head;
      while (current) {
        yield current.value;
        current = current.next;
      }
    }
  };

  // src/data-structures/linked-list/doubly-linked-list.ts
  var DoublyLinkedListNode = class {
    /**
     * The constructor function initializes the value, next, and previous properties of an object.
     * @param {E} value - The "value" parameter is the value that will be stored in the node. It can be of any data type, as it
     * is defined as a generic type "E".
     */
    constructor(value) {
      __publicField(this, "value");
      __publicField(this, "next");
      __publicField(this, "prev");
      this.value = value;
      this.next = void 0;
      this.prev = void 0;
    }
  };
  var DoublyLinkedList = class _DoublyLinkedList extends IterableElementBase {
    /**
     * The constructor initializes the linked list with an empty head, tail, and size.
     */
    constructor(elements) {
      super();
      __publicField(this, "_head");
      __publicField(this, "_tail");
      __publicField(this, "_size");
      this._head = void 0;
      this._tail = void 0;
      this._size = 0;
      if (elements) {
        for (const el of elements) {
          this.push(el);
        }
      }
    }
    get head() {
      return this._head;
    }
    get tail() {
      return this._tail;
    }
    get size() {
      return this._size;
    }
    /**
     * Time Complexity: O(n), where n is the size of the input array.
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n), where n is the size of the input array.
     * Space Complexity: O(n)
     *
     * The `fromArray` function creates a new instance of a DoublyLinkedList and populates it with the elements from the
     * given array.
     * @param {E[]} data - The `data` parameter is an array of elements of type `E`.
     * @returns The `fromArray` function returns a DoublyLinkedList object.
     */
    static fromArray(data) {
      const doublyLinkedList = new _DoublyLinkedList();
      for (const item of data) {
        doublyLinkedList.push(item);
      }
      return doublyLinkedList;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The push function adds a new node with the given value to the end of the doubly linked list.
     * @param {E} value - The value to be added to the linked list.
     */
    push(value) {
      const newNode = new DoublyLinkedListNode(value);
      if (!this.head) {
        this._head = newNode;
        this._tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this._tail = newNode;
      }
      this._size++;
      return true;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `pop()` function removes and returns the value of the last node in a doubly linked list.
     * @returns The method is returning the value of the removed node (removedNode.value) if the list is not empty. If the
     * list is empty, it returns undefined.
     */
    pop() {
      if (!this.tail)
        return void 0;
      const removedNode = this.tail;
      if (this.head === this.tail) {
        this._head = void 0;
        this._tail = void 0;
      } else {
        this._tail = removedNode.prev;
        this.tail.next = void 0;
      }
      this._size--;
      return removedNode.value;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `shift()` function removes and returns the value of the first node in a doubly linked list.
     * @returns The method `shift()` returns the value of the node that is removed from the beginning of the doubly linked
     * list.
     */
    shift() {
      if (!this.head)
        return void 0;
      const removedNode = this.head;
      if (this.head === this.tail) {
        this._head = void 0;
        this._tail = void 0;
      } else {
        this._head = removedNode.next;
        this.head.prev = void 0;
      }
      this._size--;
      return removedNode.value;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The unshift function adds a new node with the given value to the beginning of a doubly linked list.
     * @param {E} value - The `value` parameter represents the value of the new node that will be added to the beginning of the
     * doubly linked list.
     */
    unshift(value) {
      const newNode = new DoublyLinkedListNode(value);
      if (!this.head) {
        this._head = newNode;
        this._tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this._head = newNode;
      }
      this._size++;
      return true;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The `getAt` function returns the value at a specified index in a linked list, or undefined if the index is out of bounds.
     * @param {number} index - The index parameter is a number that represents the position of the element we want to
     * retrieve from the list.
     * @returns The method is returning the value at the specified index in the linked list. If the index is out of bounds
     * or the linked list is empty, it will return undefined.
     */
    getAt(index) {
      if (index < 0 || index >= this.size)
        return void 0;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current.value;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The function `getNodeAt` returns the node at a given index in a doubly linked list, or undefined if the index is out of
     * range.
     * @param {number} index - The `index` parameter is a number that represents the position of the node we want to
     * retrieve from the doubly linked list. It indicates the zero-based index of the node we want to access.
     * @returns The method `getNodeAt(index: number)` returns a `DoublyLinkedListNode<E>` object if the index is within the
     * valid range of the linked list, otherwise it returns `undefined`.
     */
    getNodeAt(index) {
      if (index < 0 || index >= this.size)
        return void 0;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The function `findNodeByValue` searches for a node with a specific value in a doubly linked list and returns the
     * node if found, otherwise it returns undefined.
     * @param {E} value - The `value` parameter is the value that we want to search for in the doubly linked list.
     * @returns The function `findNodeByValue` returns a `DoublyLinkedListNode<E>` if a node with the specified value `value`
     * is found in the linked list. If no such node is found, it returns `undefined`.
     */
    getNode(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return current;
        }
        current = current.next;
      }
      return void 0;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The `insert` function inserts a value at a specified index in a doubly linked list.
     * @param {number} index - The index parameter represents the position at which the new value should be inserted in the
     * DoublyLinkedList. It is of type number.
     * @param {E} value - The `value` parameter represents the value that you want to insert into the Doubly Linked List at the
     * specified index.
     * @returns The `insert` method returns a boolean value. It returns `true` if the insertion is successful, and `false`
     * if the index is out of bounds.
     */
    addAt(index, value) {
      if (index < 0 || index > this.size)
        return false;
      if (index === 0) {
        this.unshift(value);
        return true;
      }
      if (index === this.size) {
        this.push(value);
        return true;
      }
      const newNode = new DoublyLinkedListNode(value);
      const prevNode = this.getNodeAt(index - 1);
      const nextNode = prevNode.next;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      prevNode.next = newNode;
      nextNode.prev = newNode;
      this._size++;
      return true;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The `addBefore` function inserts a new value before an existing value or node in a doubly linked list.
     * @param {E | DoublyLinkedListNode<E>} existingValueOrNode - The existing value or node in the doubly linked list
     * before which the new value will be inserted. It can be either the value of the existing node or the existing node
     * itself.
     * @param {E} newValue - The `newValue` parameter represents the value that you want to insert into the doubly linked
     * list.
     * @returns The method returns a boolean value. It returns `true` if the insertion is successful, and `false` if the
     * insertion fails.
     */
    addBefore(existingValueOrNode, newValue) {
      let existingNode;
      if (existingValueOrNode instanceof DoublyLinkedListNode) {
        existingNode = existingValueOrNode;
      } else {
        existingNode = this.getNode(existingValueOrNode);
      }
      if (existingNode) {
        const newNode = new DoublyLinkedListNode(newValue);
        newNode.prev = existingNode.prev;
        if (existingNode.prev) {
          existingNode.prev.next = newNode;
        }
        newNode.next = existingNode;
        existingNode.prev = newNode;
        if (existingNode === this.head) {
          this._head = newNode;
        }
        this._size++;
        return true;
      }
      return false;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The `addAfter` function inserts a new node with a given value after an existing node in a doubly linked list.
     * @param {E | DoublyLinkedListNode<E>} existingValueOrNode - The existing value or node in the doubly linked list
     * after which the new value will be inserted. It can be either the value of the existing node or the existing node
     * itself.
     * @param {E} newValue - The value that you want to insert into the doubly linked list.
     * @returns The method returns a boolean value. It returns true if the insertion is successful, and false if the
     * existing value or node is not found in the doubly linked list.
     */
    addAfter(existingValueOrNode, newValue) {
      let existingNode;
      if (existingValueOrNode instanceof DoublyLinkedListNode) {
        existingNode = existingValueOrNode;
      } else {
        existingNode = this.getNode(existingValueOrNode);
      }
      if (existingNode) {
        const newNode = new DoublyLinkedListNode(newValue);
        newNode.next = existingNode.next;
        if (existingNode.next) {
          existingNode.next.prev = newNode;
        }
        newNode.prev = existingNode;
        existingNode.next = newNode;
        if (existingNode === this.tail) {
          this._tail = newNode;
        }
        this._size++;
        return true;
      }
      return false;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The `deleteAt` function removes an element at a specified index from a linked list and returns the removed element.
     * @param {number} index - The index parameter represents the position of the element that needs to be deleted in the
     * data structure. It is of type number.
     * @returns The method `deleteAt` returns the value of the node that was deleted, or `undefined` if the index is out of
     * bounds.
     */
    deleteAt(index) {
      if (index < 0 || index >= this.size)
        return false;
      if (index === 0) {
        this.shift();
        return true;
      }
      if (index === this.size - 1) {
        this.pop();
        return true;
      }
      const removedNode = this.getNodeAt(index);
      const prevNode = removedNode.prev;
      const nextNode = removedNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this._size--;
      return true;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The `delete` function removes a node from a doubly linked list based on either the node itself or its value.
     * @param {E | DoublyLinkedListNode<E>} valOrNode - The `valOrNode` parameter can accept either a value of type `E` or
     * a `DoublyLinkedListNode<E>` object.
     * @returns The `delete` method returns a boolean value. It returns `true` if the value or node was successfully
     * deleted from the doubly linked list, and `false` if the value or node was not found in the list.
     */
    delete(valOrNode) {
      let node;
      if (valOrNode instanceof DoublyLinkedListNode) {
        node = valOrNode;
      } else {
        node = this.getNode(valOrNode);
      }
      if (node) {
        if (node === this.head) {
          this.shift();
        } else if (node === this.tail) {
          this.pop();
        } else {
          const prevNode = node.prev;
          const nextNode = node.next;
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
          this._size--;
        }
        return true;
      }
      return false;
    }
    /**
     * The function checks if a variable has a size greater than zero and returns a boolean value.
     * @returns A boolean value is being returned.
     */
    isEmpty() {
      return this.size === 0;
    }
    /**
     * The `clear` function resets the linked list by setting the head, tail, and size to undefined and 0 respectively.
     */
    clear() {
      this._head = void 0;
      this._tail = void 0;
      this._size = 0;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The `find` function iterates through a linked list and returns the first element that satisfies a given condition.
     * @param callback - A function that takes a value of type E as its parameter and returns a boolean value. This
     * function is used to determine whether a particular value in the linked list satisfies a certain condition.
     * @returns The method `find` returns the first element in the linked list that satisfies the condition specified by
     * the callback function. If no element satisfies the condition, it returns `undefined`.
     */
    find(callback) {
      let current = this.head;
      while (current) {
        if (callback(current.value)) {
          return current.value;
        }
        current = current.next;
      }
      return void 0;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The function returns the index of the first occurrence of a given value in a linked list.
     * @param {E} value - The parameter `value` is of type `E`, which means it can be any data type. It represents the value
     * that we are searching for in the linked list.
     * @returns The method `indexOf` returns the index of the first occurrence of the specified value `value` in the linked
     * list. If the value is not found, it returns -1.
     */
    indexOf(value) {
      let index = 0;
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return index;
        }
        index++;
        current = current.next;
      }
      return -1;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The `findBackward` function iterates through a linked list from the last node to the first node and returns the last
     * value that satisfies the given callback function, or undefined if no value satisfies the callback.
     * @param callback - A function that takes a value of type E as its parameter and returns a boolean value. This
     * function is used to determine whether a given value satisfies a certain condition.
     * @returns The method `findBackward` returns the last value in the linked list that satisfies the condition specified by
     * the callback function. If no value satisfies the condition, it returns `undefined`.
     */
    findBackward(callback) {
      let current = this.tail;
      while (current) {
        if (callback(current.value)) {
          return current.value;
        }
        current = current.prev;
      }
      return void 0;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The `reverse` function reverses the order of the elements in a doubly linked list.
     */
    reverse() {
      let current = this.head;
      [this._head, this._tail] = [this.tail, this.head];
      while (current) {
        const next = current.next;
        [current.prev, current.next] = [current.next, current.prev];
        current = next;
      }
      return this;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(n)
     *
     * The `toArray` function converts a linked list into an array.
     * @returns The `toArray()` method is returning an array of type `E[]`.
     */
    toArray() {
      const array = [];
      let current = this.head;
      while (current) {
        array.push(current.value);
        current = current.next;
      }
      return array;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(n)
     *
     * The `toReversedArray` function converts a doubly linked list into an array in reverse order.
     * @returns The `toReversedArray()` function returns an array of type `E[]`.
     */
    toReversedArray() {
      const array = [];
      let current = this.tail;
      while (current) {
        array.push(current.value);
        current = current.prev;
      }
      return array;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `filter` function creates a new DoublyLinkedList by iterating over the elements of the current
     * list and applying a callback function to each element, returning only the elements for which the
     * callback function returns true.
     * @param callback - The `callback` parameter is a function that will be called for each element in
     * the DoublyLinkedList. It takes three arguments: the current element, the index of the current
     * element, and the DoublyLinkedList itself. The callback function should return a boolean value
     * indicating whether the current element should be included
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `callback` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `callback` function. If `thisArg` is
     * @returns The `filter` method is returning a new `DoublyLinkedList` object that contains the
     * elements that pass the filter condition specified by the `callback` function.
     */
    filter(callback, thisArg) {
      const filteredList = new _DoublyLinkedList();
      let index = 0;
      for (const current of this) {
        if (callback.call(thisArg, current, index, this)) {
          filteredList.push(current);
        }
        index++;
      }
      return filteredList;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `map` function creates a new DoublyLinkedList by applying a callback function to each element
     * in the original list.
     * @param callback - The callback parameter is a function that will be called for each element in the
     * DoublyLinkedList. It takes three arguments: the current element, the index of the current element,
     * and the DoublyLinkedList itself. The callback function should return a value that will be added to
     * the new DoublyLinkedList that
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `callback` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `callback` function. If `thisArg` is
     * @returns The `map` function is returning a new `DoublyLinkedList` object that contains the results
     * of applying the provided `callback` function to each element in the original `DoublyLinkedList`
     * object.
     */
    map(callback, thisArg) {
      const mappedList = new _DoublyLinkedList();
      let index = 0;
      for (const current of this) {
        mappedList.push(callback.call(thisArg, current, index, this));
        index++;
      }
      return mappedList;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The addLast function adds a new node with the given value to the end of the doubly linked list.
     * @param {E} value - The value to be added to the linked list.
     */
    addLast(value) {
      return this.push(value);
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `pollLast()` function removes and returns the value of the last node in a doubly linked list.
     * @returns The method is returning the value of the removed node (removedNode.value) if the list is not empty. If the
     * list is empty, it returns undefined.
     */
    pollLast() {
      return this.pop();
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `pollFirst()` function removes and returns the value of the first node in a doubly linked list.
     * @returns The method `shift()` returns the value of the node that is removed from the beginning of the doubly linked
     * list.
     */
    pollFirst() {
      return this.shift();
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The addFirst function adds a new node with the given value to the beginning of a doubly linked list.
     * @param {E} value - The `value` parameter represents the value of the new node that will be added to the beginning of the
     * doubly linked list.
     */
    addFirst(value) {
      this.unshift(value);
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The `get first` function returns the first node in a doubly linked list, or undefined if the list is empty.
     * @returns The method `get first()` returns the first node of the doubly linked list, or `undefined` if the list is empty.
     */
    get first() {
      var _a;
      return (_a = this.head) == null ? void 0 : _a.value;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * The `get last` function returns the last node in a doubly linked list, or undefined if the list is empty.
     * @returns The method `get last()` returns the last node of the doubly linked list, or `undefined` if the list is empty.
     */
    get last() {
      var _a;
      return (_a = this.tail) == null ? void 0 : _a.value;
    }
    /**
     * The function returns an iterator that iterates over the values of a linked list.
     */
    *_getIterator() {
      let current = this.head;
      while (current) {
        yield current.value;
        current = current.next;
      }
    }
  };

  // src/data-structures/linked-list/skip-linked-list.ts
  var SkipListNode = class {
    constructor(key, value, level) {
      __publicField(this, "key");
      __publicField(this, "value");
      __publicField(this, "forward");
      this.key = key;
      this.value = value;
      this.forward = new Array(level);
    }
  };
  var SkipList = class {
    /**
     * The constructor initializes a SkipList with a specified maximum level and probability.
     * @param [maxLevel=16] - The `maxLevel` parameter represents the maximum level that a skip list can have. It determines
     * the maximum number of levels that can be created in the skip list.
     * @param [probability=0.5] - The probability parameter represents the probability of a node being promoted to a higher
     * level in the skip list. It is used to determine the height of each node in the skip list.
     */
    constructor(maxLevel = 16, probability = 0.5) {
      __publicField(this, "_head");
      __publicField(this, "_level");
      __publicField(this, "_maxLevel");
      __publicField(this, "_probability");
      this._head = new SkipListNode(void 0, void 0, maxLevel);
      this._level = 0;
      this._maxLevel = maxLevel;
      this._probability = probability;
    }
    get head() {
      return this._head;
    }
    get level() {
      return this._level;
    }
    get maxLevel() {
      return this._maxLevel;
    }
    get probability() {
      return this._probability;
    }
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     */
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     *
     * The add function adds a new node with a given key and value to a Skip List data structure.
     * @param {K} key - The key parameter represents the key of the node that needs to be added to the skip list.
     * @param {V} value - The "value" parameter represents the value associated with the key that is being added to the Skip
     * List.
     */
    add(key, value) {
      const newNode = new SkipListNode(key, value, this._randomLevel());
      const update = new Array(this.maxLevel).fill(this.head);
      let current = this.head;
      for (let i = this.level - 1; i >= 0; i--) {
        while (current.forward[i] && current.forward[i].key < key) {
          current = current.forward[i];
        }
        update[i] = current;
      }
      for (let i = 0; i < newNode.forward.length; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }
      if (!newNode.forward[0]) {
        this._level = Math.max(this.level, newNode.forward.length);
      }
    }
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     */
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     *
     * The function `get` retrieves the value associated with a given key from a skip list data structure.
     * @param {K} key - The `key` parameter is the key of the element that we want to retrieve from the data structure.
     * @returns The method `get(key: K)` returns the value associated with the given key if it exists in the data structure,
     * otherwise it returns `undefined`.
     */
    get(key) {
      let current = this.head;
      for (let i = this.level - 1; i >= 0; i--) {
        while (current.forward[i] && current.forward[i].key < key) {
          current = current.forward[i];
        }
      }
      current = current.forward[0];
      if (current && current.key === key) {
        return current.value;
      }
      return void 0;
    }
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     */
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     */
    has(key) {
      return this.get(key) !== void 0;
    }
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     */
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     *
     * The `delete` function removes a node with a specific key from a Skip List data structure.
     * @param {K} key - The key parameter represents the key of the node that needs to be removed from the skip list.
     * @returns The `delete` method returns a boolean value. It returns `true` if the key was successfully removed from the
     * skip list, and `false` if the key was not found in the skip list.
     */
    delete(key) {
      const update = new Array(this.maxLevel).fill(this.head);
      let current = this.head;
      for (let i = this.level - 1; i >= 0; i--) {
        while (current.forward[i] && current.forward[i].key < key) {
          current = current.forward[i];
        }
        update[i] = current;
      }
      current = current.forward[0];
      if (current && current.key === key) {
        for (let i = 0; i < this.level; i++) {
          if (update[i].forward[i] !== current) {
            break;
          }
          update[i].forward[i] = current.forward[i];
        }
        while (this.level > 0 && !this.head.forward[this.level - 1]) {
          this._level--;
        }
        return true;
      }
      return false;
    }
    /**
     * Time Complexity: O(1) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     */
    /**
     * Time Complexity: O(1) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     *
     * Get the value of the first element (the smallest element) in the Skip List.
     * @returns The value of the first element, or undefined if the Skip List is empty.
     */
    get first() {
      const firstNode = this.head.forward[0];
      return firstNode ? firstNode.value : void 0;
    }
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     */
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     *
     * Get the value of the last element (the largest element) in the Skip List.
     * @returns The value of the last element, or undefined if the Skip List is empty.
     */
    get last() {
      let current = this.head;
      for (let i = this.level - 1; i >= 0; i--) {
        while (current.forward[i]) {
          current = current.forward[i];
        }
      }
      return current.value;
    }
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     */
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     *
     * Get the value of the first element in the Skip List that is greater than the given key.
     * @param key - the given key.
     * @returns The value of the first element greater than the given key, or undefined if there is no such element.
     */
    higher(key) {
      let current = this.head;
      for (let i = this.level - 1; i >= 0; i--) {
        while (current.forward[i] && current.forward[i].key <= key) {
          current = current.forward[i];
        }
      }
      const nextNode = current.forward[0];
      return nextNode ? nextNode.value : void 0;
    }
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     */
    /**
     * Time Complexity: O(log n) - where n is the number of elements in the SkipList, as it traverses the levels of the SkipList.
     * Space Complexity: O(1) - constant space, as it uses a fixed amount of space regardless of the size of the SkipList.
     *
     * Get the value of the last element in the Skip List that is less than the given key.
     * @param key - the given key.
     * @returns The value of the last element less than the given key, or undefined if there is no such element.
     */
    lower(key) {
      let current = this.head;
      let lastLess = void 0;
      for (let i = this.level - 1; i >= 0; i--) {
        while (current.forward[i] && current.forward[i].key < key) {
          current = current.forward[i];
        }
        if (current.key < key) {
          lastLess = current;
        }
      }
      return lastLess ? lastLess.value : void 0;
    }
    /**
     * Time Complexity: O(maxLevel) - where maxLevel is the maximum level of the SkipList, as it may iterate up to maxLevel times in the worst case.
     * Space Complexity: O(1) - constant space.
     */
    /**
     * Time Complexity: O(maxLevel) - where maxLevel is the maximum level of the SkipList, as it may iterate up to maxLevel times in the worst case.
     * Space Complexity: O(1) - constant space.
     *
     * The function "_randomLevel" generates a random level based on a given probability and maximum level.
     * @returns the level, which is a number.
     */
    _randomLevel() {
      let level = 1;
      while (Math.random() < this.probability && level < this.maxLevel) {
        level++;
      }
      return level;
    }
  };

  // src/data-structures/stack/stack.ts
  var Stack = class _Stack extends IterableElementBase {
    /**
     * The constructor initializes an array of elements, which can be provided as an optional parameter.
     * @param {E[]} [elements] - The `elements` parameter is an optional parameter of type `E[]`, which represents an array
     * of elements of type `E`. It is used to initialize the `_elements` property of the class. If the `elements` parameter
     * is provided and is an array, it is assigned to the `_elements
     */
    constructor(elements) {
      super();
      __publicField(this, "_elements");
      this._elements = [];
      if (elements) {
        for (const el of elements) {
          this.push(el);
        }
      }
    }
    get elements() {
      return this._elements;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the input array. Similar to the constructor, it requires iterating through each element.
     * Space Complexity: O(n), as it creates a new stack with the elements from the input array.
     */
    /**
     * The size() function returns the number of elements in an array.
     * @returns The size of the elements array.
     */
    get size() {
      return this.elements.length;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the input array. Similar to the constructor, it requires iterating through each element.
     * Space Complexity: O(n), as it creates a new stack with the elements from the input array.
     *
     * The function "fromArray" creates a new Stack object from an array of elements.
     * @param {E[]} elements - The `elements` parameter is an array of elements of type `E`.
     * @returns {Stack} The method is returning a new instance of the Stack class, initialized with the elements from the input
     * array.
     */
    static fromArray(elements) {
      return new _Stack(elements);
    }
    /**
     * The function checks if an array is empty and returns a boolean value.
     * @returns A boolean value indicating whether the `_elements` array is empty or not.
     */
    isEmpty() {
      return this.elements.length === 0;
    }
    /**
     * Time Complexity: O(1), as it only involves accessing the last element of the array.
     * Space Complexity: O(1), as it does not use any additional space.
     */
    /**
     * Time Complexity: O(1), as it only involves accessing the last element of the array.
     * Space Complexity: O(1), as it does not use any additional space.
     *
     * The `peek` function returns the last element of an array, or undefined if the array is empty.
     * @returns The `peek()` function returns the last element of the `_elements` array, or `undefined` if the array is empty.
     */
    peek() {
      if (this.isEmpty())
        return void 0;
      return this.elements[this.elements.length - 1];
    }
    /**
     * Time Complexity: O(1), as it only involves accessing the last element of the array.
     * Space Complexity: O(1), as it does not use any additional space.
     */
    /**
     * Time Complexity: O(1), as it only involves accessing the last element of the array.
     * Space Complexity: O(1), as it does not use any additional space.
     *
     * The push function adds an element to the stack and returns the updated stack.
     * @param {E} element - The parameter "element" is of type E, which means it can be any data type.
     * @returns The `push` method is returning the updated `Stack<E>` object.
     */
    push(element) {
      this.elements.push(element);
      return true;
    }
    /**
     * Time Complexity: O(1), as it only involves accessing the last element of the array.
     * Space Complexity: O(1), as it does not use any additional space.
     */
    /**
     * Time Complexity: O(1), as it only involves accessing the last element of the array.
     * Space Complexity: O(1), as it does not use any additional space.
     *
     * The `pop` function removes and returns the last element from an array, or returns undefined if the array is empty.
     * @returns The `pop()` method is returning the last element of the array `_elements` if the array is not empty. If the
     * array is empty, it returns `undefined`.
     */
    pop() {
      if (this.isEmpty())
        return;
      return this.elements.pop();
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The toArray function returns a copy of the elements in an array.
     * @returns An array of type E.
     */
    toArray() {
      return this.elements.slice();
    }
    /**
     * The clear function clears the elements array.
     */
    clear() {
      this._elements = [];
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the stack, as it creates a new stack and copies all elements into it.
     * Space Complexity: O(n), as it creates a new stack.
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the stack, as it creates a new stack and copies all elements into it.
     * Space Complexity: O(n), as it creates a new stack.
     *
     * The `clone()` function returns a new `Stack` object with the same elements as the original stack.
     * @returns The `clone()` method is returning a new `Stack` object with a copy of the `_elements` array.
     */
    clone() {
      return new _Stack(this.elements.slice());
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `filter` function creates a new stack containing elements from the original stack that satisfy
     * a given predicate function.
     * @param predicate - The `predicate` parameter is a callback function that takes three arguments:
     * the current element being iterated over, the index of the current element, and the stack itself.
     * It should return a boolean value indicating whether the element should be included in the filtered
     * stack or not.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `predicate` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `predicate` function. If `thisArg` is
     * @returns The `filter` method is returning a new `Stack` object that contains the elements that
     * satisfy the given predicate function.
     */
    filter(predicate, thisArg) {
      const newStack = new _Stack();
      let index = 0;
      for (const el of this) {
        if (predicate.call(thisArg, el, index, this)) {
          newStack.push(el);
        }
        index++;
      }
      return newStack;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `map` function takes a callback function and applies it to each element in the stack,
     * returning a new stack with the results.
     * @param callback - The `callback` parameter is a function that will be called for each element in
     * the stack. It takes three arguments:
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `callback` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `callback` function. If `thisArg` is
     * @returns The `map` method is returning a new `Stack` object.
     */
    map(callback, thisArg) {
      const newStack = new _Stack();
      let index = 0;
      for (const el of this) {
        newStack.push(callback.call(thisArg, el, index, this));
        index++;
      }
      return newStack;
    }
    /**
     * Custom iterator for the Stack class.
     * @returns An iterator object.
     */
    *_getIterator() {
      for (let i = 0; i < this.elements.length; i++) {
        yield this.elements[i];
      }
    }
  };

  // src/data-structures/queue/queue.ts
  var Queue = class _Queue extends IterableElementBase {
    /**
     * The constructor initializes an instance of a class with an optional array of elements and sets the offset to 0.
     * @param {E[]} [elements] - The `elements` parameter is an optional array of elements of type `E`. If provided, it
     * will be used to initialize the `_nodes` property of the class. If not provided, the `_nodes` property will be
     * initialized as an empty array.
     */
    constructor(elements) {
      super();
      __publicField(this, "_nodes");
      __publicField(this, "_offset");
      this._nodes = elements || [];
      this._offset = 0;
    }
    get nodes() {
      return this._nodes;
    }
    get offset() {
      return this._offset;
    }
    /**
     * The size function returns the number of elements in an array.
     * @returns {number} The size of the array, which is the difference between the length of the array and the offset.
     */
    get size() {
      return this.nodes.length - this.offset;
    }
    /**
     * The function "fromArray" creates a new Queue object from an array of elements.Creates a queue from an existing array.
     * @public
     * @static
     * @param {E[]} elements - The "elements" parameter is an array of elements of type E.
     * @returns The method is returning a new instance of the Queue class, initialized with the elements from the input
     * array.
     */
    static fromArray(elements) {
      return new _Queue(elements);
    }
    /**
     * Time Complexity: O(1) - constant time as it adds an element to the end of the array.
     * Space Complexity: O(1) - no additional space is used.
     */
    /**
     * Time Complexity: O(1) - constant time as it adds an element to the end of the array.
     * Space Complexity: O(1) - no additional space is used.
     *
     * The push function adds an element to the end of the queue and returns the updated queue.Adds an element at the back of the queue.
     * @param {E} element - The `element` parameter represents the element that you want to add to the queue.
     * @returns The `add` method is returning a `Queue<E>` object.
     */
    push(element) {
      this.nodes.push(element);
      return true;
    }
    /**
     * Time Complexity: O(n) - where n is the number of elements in the queue. In the worst case, it may need to shift all elements to update the offset.
     * Space Complexity: O(1) - no additional space is used.
     */
    /**
     * Time Complexity: O(n) - where n is the number of elements in the queue. In the worst case, it may need to shift all elements to update the offset.
     * Space Complexity: O(1) - no additional space is used.
     *
     * The `shift` function removes and returns the first element in the queue, and adjusts the internal data structure if
     * necessary to optimize performance.
     * @returns The function `shift()` returns either the first element in the queue or `undefined` if the queue is empty.
     */
    shift() {
      if (this.size === 0)
        return void 0;
      const first = this.first;
      this._offset += 1;
      if (this.offset * 2 < this.nodes.length)
        return first;
      this._nodes = this.nodes.slice(this.offset);
      this._offset = 0;
      return first;
    }
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the current offset.
     * Space Complexity: O(1) - no additional space is used.
     */
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the current offset.
     * Space Complexity: O(1) - no additional space is used.
     *
     * The `first` function returns the first element of the array `_nodes` if it exists, otherwise it returns `undefined`.
     * @returns The `get first()` method returns the first element of the data structure, represented by the `_nodes` array at
     * the `_offset` index. If the data structure is empty (size is 0), it returns `undefined`.
     */
    get first() {
      return this.size > 0 ? this.nodes[this.offset] : void 0;
    }
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the current offset.
     * Space Complexity: O(1) - no additional space is used.
     */
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the current offset.
     * Space Complexity: O(1) - no additional space is used.
     *
     * The `peek` function returns the first element of the array `_nodes` if it exists, otherwise it returns `undefined`.
     * @returns The `peek()` method returns the first element of the data structure, represented by the `_nodes` array at
     * the `_offset` index. If the data structure is empty (size is 0), it returns `undefined`.
     */
    peek() {
      return this.first;
    }
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the current offset.
     * Space Complexity: O(1) - no additional space is used.
     */
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the current offset.
     * Space Complexity: O(1) - no additional space is used.
     *
     * The `last` function returns the last element in an array-like data structure, or undefined if the structure is empty.
     * @returns The method `get last()` returns the last element of the `_nodes` array if the array is not empty. If the
     * array is empty, it returns `undefined`.
     */
    get last() {
      return this.size > 0 ? this.nodes[this.nodes.length - 1] : void 0;
    }
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the current offset.
     * Space Complexity: O(1) - no additional space is used.
     */
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the current offset.
     * Space Complexity: O(1) - no additional space is used.
     *
     * The `peekLast` function returns the last element in an array-like data structure, or undefined if the structure is empty.
     * @returns The method `peekLast()` returns the last element of the `_nodes` array if the array is not empty. If the
     * array is empty, it returns `undefined`.
     */
    peekLast() {
      return this.last;
    }
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the current offset.
     * Space Complexity: O(1) - no additional space is used.
     */
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the current offset.
     * Space Complexity: O(1) - no additional space is used.
     *
     * The enqueue function adds a value to the end of a queue.
     * @param {E} value - The value parameter represents the value that you want to add to the queue.
     */
    enqueue(value) {
      return this.push(value);
    }
    /**
     * Time Complexity: O(n) - same as shift().
     * Space Complexity: O(1) - same as shift().
     */
    /**
     * Time Complexity: O(n) - same as shift().
     * Space Complexity: O(1) - same as shift().
     *
     * The `dequeue` function removes and returns the first element from a queue, or returns undefined if the queue is empty.
     * @returns The method is returning a value of type E or undefined.
     */
    dequeue() {
      return this.shift();
    }
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the specified index.
     * Space Complexity: O(1) - no additional space is used.
     */
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the specified index.
     * Space Complexity: O(1) - no additional space is used.
     *
     * @param index
     */
    getAt(index) {
      return this.nodes[index];
    }
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the specified index.
     * Space Complexity: O(1) - no additional space is used.
     */
    /**
     * Time Complexity: O(1) - constant time as it retrieves the value at the specified index.
     * Space Complexity: O(1) - no additional space is used.
     *
     * The function checks if a data structure is empty by comparing its size to zero.
     * @returns {boolean} A boolean value indicating whether the size of the object is 0 or not.
     */
    isEmpty() {
      return this.size === 0;
    }
    /**
     * Time Complexity: O(1) - constant time as it returns a shallow copy of the internal array.
     * Space Complexity: O(n) - where n is the number of elements in the queue.
     */
    /**
     * Time Complexity: O(1) - constant time as it returns a shallow copy of the internal array.
     * Space Complexity: O(n) - where n is the number of elements in the queue.
     *
     * The toArray() function returns an array of elements from the current offset to the end of the _nodes array.
     * @returns An array of type E is being returned.
     */
    toArray() {
      return this.nodes.slice(this.offset);
    }
    /**
     * The clear function resets the nodes array and offset to their initial values.
     */
    clear() {
      this._nodes = [];
      this._offset = 0;
    }
    /**
     * Time Complexity: O(n) - where n is the number of elements in the queue. It creates a shallow copy of the internal array.
     * Space Complexity: O(n) - the space required is proportional to the number of elements in the queue.
     */
    /**
     * Time Complexity: O(n) - where n is the number of elements in the queue. It creates a shallow copy of the internal array.
     * Space Complexity: O(n) - the space required is proportional to the number of elements in the queue.
     *
     * The `clone()` function returns a new Queue object with the same elements as the original Queue.
     * @returns The `clone()` method is returning a new instance of the `Queue` class.
     */
    clone() {
      return new _Queue(this.nodes.slice(this.offset));
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `filter` function creates a new `Queue` object containing elements from the original `Queue`
     * that satisfy a given predicate function.
     * @param predicate - The `predicate` parameter is a callback function that takes three arguments:
     * the current element being iterated over, the index of the current element, and the queue itself.
     * It should return a boolean value indicating whether the element should be included in the filtered
     * queue or not.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `predicate` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `predicate` function. If `thisArg` is
     * @returns The `filter` method is returning a new `Queue` object that contains the elements that
     * satisfy the given predicate function.
     */
    filter(predicate, thisArg) {
      const newDeque = new _Queue([]);
      let index = 0;
      for (const el of this) {
        if (predicate.call(thisArg, el, index, this)) {
          newDeque.push(el);
        }
        index++;
      }
      return newDeque;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `map` function takes a callback function and applies it to each element in the queue,
     * returning a new queue with the results.
     * @param callback - The callback parameter is a function that will be called for each element in the
     * queue. It takes three arguments: the current element, the index of the current element, and the
     * queue itself. The callback function should return a new value that will be added to the new queue.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `callback` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `callback` function. If `thisArg` is
     * @returns The `map` function is returning a new `Queue` object with the transformed elements.
     */
    map(callback, thisArg) {
      const newDeque = new _Queue([]);
      let index = 0;
      for (const el of this) {
        newDeque.push(callback.call(thisArg, el, index, this));
        index++;
      }
      return newDeque;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    *_getIterator() {
      for (const item of this.nodes) {
        yield item;
      }
    }
  };
  var LinkedListQueue = class extends SinglyLinkedList {
    /**
     * The enqueue function adds a value to the end of an array.
     * @param {E} value - The value parameter represents the value that you want to add to the queue.
     */
    enqueue(value) {
      return this.push(value);
    }
    /**
     * The `dequeue` function removes and returns the first element from a queue, or returns undefined if the queue is empty.
     * @returns The method is returning the element at the front of the queue, or undefined if the queue is empty.
     */
    dequeue() {
      return this.shift();
    }
    /**
     * The `get first` function returns the value of the head node in a linked list, or `undefined` if the list is empty.
     * @returns The `get first()` method is returning the value of the `head` node if it exists, otherwise it returns `undefined`.
     */
    get first() {
      var _a;
      return (_a = this.head) == null ? void 0 : _a.value;
    }
    /**
     * The `peek` function returns the value of the head node in a linked list, or `undefined` if the list is empty.
     * @returns The `peek()` method is returning the value of the `head` node if it exists, otherwise it returns `undefined`.
     */
    peek() {
      return this.first;
    }
  };

  // src/data-structures/queue/deque.ts
  var Deque = class _Deque extends IterableElementBase {
    /**
     * The constructor initializes a data structure with a specified bucket size and populates it with
     * elements from an iterable.
     * @param elements - The `elements` parameter is an iterable object (such as an array or a Set) that
     * contains the initial elements to be stored in the data structure. It can also be an object with a
     * `length` property or a `size` property, which represents the number of elements in the iterable.
     * @param bucketSize - The `bucketSize` parameter is the maximum number of elements that can be
     * stored in each bucket. It determines the size of each bucket in the data structure.
     */
    constructor(elements = [], bucketSize = 1 << 12) {
      super();
      __publicField(this, "_bucketFirst", 0);
      __publicField(this, "_firstInBucket", 0);
      __publicField(this, "_bucketLast", 0);
      __publicField(this, "_lastInBucket", 0);
      __publicField(this, "_bucketCount", 0);
      __publicField(this, "_bucketSize");
      __publicField(this, "_buckets", []);
      __publicField(this, "_size", 0);
      let _size;
      if ("length" in elements) {
        if (elements.length instanceof Function)
          _size = elements.length();
        else
          _size = elements.length;
      } else {
        if (elements.size instanceof Function)
          _size = elements.size();
        else
          _size = elements.size;
      }
      this._bucketSize = bucketSize;
      this._bucketCount = calcMinUnitsRequired(_size, this._bucketSize) || 1;
      for (let i = 0; i < this._bucketCount; ++i) {
        this._buckets.push(new Array(this._bucketSize));
      }
      const needBucketNum = calcMinUnitsRequired(_size, this._bucketSize);
      this._bucketFirst = this._bucketLast = (this._bucketCount >> 1) - (needBucketNum >> 1);
      this._firstInBucket = this._lastInBucket = this._bucketSize - _size % this._bucketSize >> 1;
      for (const element of elements) {
        this.push(element);
      }
    }
    get buckets() {
      return this._buckets;
    }
    get size() {
      return this._size;
    }
    /**
     * The function returns the first element in a collection if it exists, otherwise it returns
     * undefined.
     * @returns The first element of the collection, of type E, is being returned.
     */
    get first() {
      if (this.size === 0)
        return;
      return this._buckets[this._bucketFirst][this._firstInBucket];
    }
    get last() {
      if (this.size === 0)
        return;
      return this._buckets[this._bucketLast][this._lastInBucket];
    }
    /**
     * Time Complexity - Amortized O(1) (possible reallocation)
     * Space Complexity - O(n) (due to potential resizing).
     */
    /**
     * Time Complexity - Amortized O(1) (possible reallocation),
     * Space Complexity - O(n) (due to potential resizing).
     *
     * The push function adds an element to a data structure and reallocates memory if necessary.
     * @param {E} element - The `element` parameter represents the value that you want to add to the data
     * structure.
     * @returns The size of the data structure after the element has been pushed.
     */
    push(element) {
      if (this.size) {
        if (this._lastInBucket < this._bucketSize - 1) {
          this._lastInBucket += 1;
        } else if (this._bucketLast < this._bucketCount - 1) {
          this._bucketLast += 1;
          this._lastInBucket = 0;
        } else {
          this._bucketLast = 0;
          this._lastInBucket = 0;
        }
        if (this._bucketLast === this._bucketFirst && this._lastInBucket === this._firstInBucket)
          this._reallocate();
      }
      this._size += 1;
      this._buckets[this._bucketLast][this._lastInBucket] = element;
      return true;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `pop()` function removes and returns the last element from a data structure, updating the
     * internal state variables accordingly.
     * @returns The element that was removed from the data structure is being returned.
     */
    pop() {
      if (this.size === 0)
        return;
      const element = this._buckets[this._bucketLast][this._lastInBucket];
      if (this.size !== 1) {
        if (this._lastInBucket > 0) {
          this._lastInBucket -= 1;
        } else if (this._bucketLast > 0) {
          this._bucketLast -= 1;
          this._lastInBucket = this._bucketSize - 1;
        } else {
          this._bucketLast = this._bucketCount - 1;
          this._lastInBucket = this._bucketSize - 1;
        }
      }
      this._size -= 1;
      return element;
    }
    /**
     * Time Complexity: Amortized O(1)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: Amortized O(1)
     * Space Complexity: O(n)
     *
     * The `unshift` function adds an element to the beginning of an array-like data structure and
     * returns the new size of the structure.
     * @param {E} element - The `element` parameter represents the element that you want to add to the
     * beginning of the data structure.
     * @returns The size of the data structure after the element has been added.
     */
    unshift(element) {
      if (this.size) {
        if (this._firstInBucket > 0) {
          this._firstInBucket -= 1;
        } else if (this._bucketFirst > 0) {
          this._bucketFirst -= 1;
          this._firstInBucket = this._bucketSize - 1;
        } else {
          this._bucketFirst = this._bucketCount - 1;
          this._firstInBucket = this._bucketSize - 1;
        }
        if (this._bucketFirst === this._bucketLast && this._firstInBucket === this._lastInBucket)
          this._reallocate();
      }
      this._size += 1;
      this._buckets[this._bucketFirst][this._firstInBucket] = element;
      return true;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `shift()` function removes and returns the first element from a data structure, updating the
     * internal state variables accordingly.
     * @returns The element that is being removed from the beginning of the data structure is being
     * returned.
     */
    shift() {
      if (this.size === 0)
        return;
      const element = this._buckets[this._bucketFirst][this._firstInBucket];
      if (this.size !== 1) {
        if (this._firstInBucket < this._bucketSize - 1) {
          this._firstInBucket += 1;
        } else if (this._bucketFirst < this._bucketCount - 1) {
          this._bucketFirst += 1;
          this._firstInBucket = 0;
        } else {
          this._bucketFirst = 0;
          this._firstInBucket = 0;
        }
      }
      this._size -= 1;
      return element;
    }
    /**
     * Time Complexity: O(1) - Removes the last element.
     * Space Complexity: O(1) - Operates in-place.
     */
    isEmpty() {
      return this.size === 0;
    }
    /**
     * The clear() function resets the state of the object by initializing all variables to their default
     * values.
     */
    clear() {
      this._buckets = [new Array(this._bucketSize)];
      this._bucketCount = 1;
      this._bucketFirst = this._bucketLast = this._size = 0;
      this._firstInBucket = this._lastInBucket = this._bucketSize >> 1;
    }
    /**
     * The below function is a generator that yields elements from a collection one by one.
     */
    *begin() {
      let index = 0;
      while (index < this.size) {
        yield this.getAt(index);
        index++;
      }
    }
    /**
     * The function `reverseBegin()` is a generator that yields elements in reverse order starting from
     * the last element.
     */
    *reverseBegin() {
      let index = this.size - 1;
      while (index >= 0) {
        yield this.getAt(index);
        index--;
      }
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `getAt` function retrieves an element at a specified position in an array-like data structure.
     * @param {number} pos - The `pos` parameter represents the position of the element that you want to
     * retrieve from the data structure. It is of type `number` and should be a valid index within the
     * range of the data structure.
     * @returns The element at the specified position in the data structure is being returned.
     */
    getAt(pos) {
      rangeCheck(pos, 0, this.size - 1);
      const {
        bucketIndex,
        indexInBucket
      } = this._getBucketAndPosition(pos);
      return this._buckets[bucketIndex][indexInBucket];
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `setAt` function sets an element at a specific position in an array-like data structure.
     * @param {number} pos - The `pos` parameter represents the position at which the element needs to be
     * set. It is of type `number`.
     * @param {E} element - The `element` parameter is the value that you want to set at the specified
     * position in the data structure.
     */
    setAt(pos, element) {
      rangeCheck(pos, 0, this.size - 1);
      const {
        bucketIndex,
        indexInBucket
      } = this._getBucketAndPosition(pos);
      this._buckets[bucketIndex][indexInBucket] = element;
      return true;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `addAt` function inserts one or more elements at a specified position in an array-like data
     * structure.
     * @param {number} pos - The `pos` parameter represents the position at which the element(s) should
     * be inserted. It is of type `number`.
     * @param {E} element - The `element` parameter represents the element that you want to insert into
     * the array at the specified position.
     * @param [num=1] - The `num` parameter represents the number of times the `element` should be
     * inserted at the specified position (`pos`). By default, it is set to 1, meaning that the `element`
     * will be inserted once. However, you can provide a different value for `num` if you want
     * @returns The size of the array after the insertion is being returned.
     */
    addAt(pos, element, num = 1) {
      const length = this.size;
      rangeCheck(pos, 0, length);
      if (pos === 0) {
        while (num--)
          this.unshift(element);
      } else if (pos === this.size) {
        while (num--)
          this.push(element);
      } else {
        const arr = [];
        for (let i = pos; i < this.size; ++i) {
          arr.push(this.getAt(i));
        }
        this.cut(pos - 1);
        for (let i = 0; i < num; ++i)
          this.push(element);
        for (let i = 0; i < arr.length; ++i)
          this.push(arr[i]);
      }
      return true;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The `cut` function updates the state of the object based on the given position and returns the
     * updated size.
     * @param {number} pos - The `pos` parameter represents the position at which the string should be
     * cut. It is a number that indicates the index of the character where the cut should be made.
     * @returns The method is returning the updated size of the data structure.
     */
    cut(pos) {
      if (pos < 0) {
        this.clear();
        return 0;
      }
      const {
        bucketIndex,
        indexInBucket
      } = this._getBucketAndPosition(pos);
      this._bucketLast = bucketIndex;
      this._lastInBucket = indexInBucket;
      this._size = pos + 1;
      return this.size;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The `deleteAt` function removes an element at a specified position in an array-like data
     * structure.
     * @param {number} pos - The `pos` parameter in the `deleteAt` function represents the position at
     * which an element needs to be deleted from the data structure. It is of type `number` and indicates
     * the index of the element to be deleted.
     * @returns The size of the data structure after the deletion operation is performed.
     */
    deleteAt(pos) {
      rangeCheck(pos, 0, this.size - 1);
      if (pos === 0)
        this.shift();
      else if (pos === this.size - 1)
        this.pop();
      else {
        const length = this.size - 1;
        let {
          bucketIndex: curBucket,
          indexInBucket: curPointer
        } = this._getBucketAndPosition(pos);
        for (let i = pos; i < length; ++i) {
          const {
            bucketIndex: nextBucket,
            indexInBucket: nextPointer
          } = this._getBucketAndPosition(pos + 1);
          this._buckets[curBucket][curPointer] = this._buckets[nextBucket][nextPointer];
          curBucket = nextBucket;
          curPointer = nextPointer;
        }
        this.pop();
      }
      return true;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The `delete` function removes all occurrences of a specified element from an array-like data
     * structure.
     * @param {E} element - The `element` parameter represents the element that you want to delete from
     * the data structure.
     * @returns The size of the data structure after the element has been deleted.
     */
    delete(element) {
      const size = this.size;
      if (size === 0)
        return false;
      let i = 0;
      let index = 0;
      while (i < size) {
        const oldElement = this.getAt(i);
        if (oldElement !== element) {
          this.setAt(index, oldElement);
          index += 1;
        }
        i += 1;
      }
      this.cut(index - 1);
      return true;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The reverse() function reverses the order of the buckets and the elements within each bucket in a
     * data structure.
     * @returns The reverse() method is returning the object itself (this) after performing the reverse
     * operation on the buckets and updating the relevant properties.
     */
    reverse() {
      this._buckets.reverse().forEach(function(bucket) {
        bucket.reverse();
      });
      const { _bucketFirst, _bucketLast, _firstInBucket, _lastInBucket } = this;
      this._bucketFirst = this._bucketCount - _bucketLast - 1;
      this._bucketLast = this._bucketCount - _bucketFirst - 1;
      this._firstInBucket = this._bucketSize - _lastInBucket - 1;
      this._lastInBucket = this._bucketSize - _firstInBucket - 1;
      return this;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The `unique()` function removes duplicate elements from an array-like data structure and returns
     * the number of unique elements.
     * @returns The size of the modified array is being returned.
     */
    unique() {
      if (this.size <= 1) {
        return this;
      }
      let index = 1;
      let prev = this.getAt(0);
      for (let i = 1; i < this.size; ++i) {
        const cur = this.getAt(i);
        if (cur !== prev) {
          prev = cur;
          this.setAt(index++, cur);
        }
      }
      this.cut(index - 1);
      return this;
    }
    /**
     * Time Complexity: O(n log n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n log n)
     * Space Complexity: O(n)
     *
     * The `sort` function sorts the elements in a data structure using a provided comparator function.
     * @param [comparator] - The `comparator` parameter is a function that takes in two elements `x` and
     * `y` of type `E` and returns a number. The comparator function is used to determine the order of
     * the elements in the sorted array.
     * @returns Deque<E>
     */
    sort(comparator) {
      const arr = [];
      for (let i = 0; i < this.size; ++i) {
        arr.push(this.getAt(i));
      }
      arr.sort(comparator);
      for (let i = 0; i < this.size; ++i) {
        this.setAt(i, arr[i]);
      }
      return this;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `shrinkToFit` function reorganizes the elements in an array-like data structure to minimize
     * memory usage.
     * @returns Nothing is being returned. The function is using the `return` statement to exit early if
     * `this.size` is 0, but it does not return any value.
     */
    shrinkToFit() {
      if (this.size === 0)
        return;
      const newBuckets = [];
      if (this._bucketFirst === this._bucketLast)
        return;
      else if (this._bucketFirst < this._bucketLast) {
        for (let i = this._bucketFirst; i <= this._bucketLast; ++i) {
          newBuckets.push(this._buckets[i]);
        }
      } else {
        for (let i = this._bucketFirst; i < this._bucketCount; ++i) {
          newBuckets.push(this._buckets[i]);
        }
        for (let i = 0; i <= this._bucketLast; ++i) {
          newBuckets.push(this._buckets[i]);
        }
      }
      this._bucketFirst = 0;
      this._bucketLast = newBuckets.length - 1;
      this._buckets = newBuckets;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The `find` function iterates over the elements in a deque and returns the first element for which
     * the callback function returns true, or undefined if no such element is found.
     * @param callback - A function that takes three parameters: element, index, and deque. It should
     * return a boolean value indicating whether the element satisfies a certain condition.
     * @returns The method `find` returns the first element in the deque that satisfies the condition
     * specified by the callback function. If no element satisfies the condition, it returns `undefined`.
     */
    find(callback) {
      for (let i = 0; i < this.size; ++i) {
        const element = this.getAt(i);
        if (callback(element, i, this)) {
          return element;
        }
      }
      return;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The function "indexOf" returns the index of the first occurrence of a given element in an array,
     * or -1 if the element is not found.
     * @param {E} element - The "element" parameter represents the element that you want to find the
     * index of in the data structure.
     * @returns The indexOf function returns the index of the first occurrence of the specified element
     * in the data structure. If the element is not found, it returns -1.
     */
    indexOf(element) {
      for (let i = 0; i < this.size; ++i) {
        if (this.getAt(i) === element) {
          return i;
        }
      }
      return -1;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `toArray` function converts the elements of a data structure into an array.
     * @returns The `toArray()` method is returning an array of elements of type `E`.
     */
    toArray() {
      return [...this];
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `filter` function creates a new deque containing elements from the original deque that satisfy
     * a given predicate function.
     * @param predicate - The `predicate` parameter is a callback function that takes three arguments:
     * the current element being iterated over, the index of the current element, and the deque itself.
     * It should return a boolean value indicating whether the element should be included in the filtered
     * deque or not.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `predicate` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `predicate` function. If `thisArg` is
     * @returns The `filter` method is returning a new `Deque` object that contains the elements that
     * satisfy the given predicate function.
     */
    filter(predicate, thisArg) {
      const newDeque = new _Deque([], this._bucketSize);
      let index = 0;
      for (const el of this) {
        if (predicate.call(thisArg, el, index, this)) {
          newDeque.push(el);
        }
        index++;
      }
      return newDeque;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `map` function creates a new Deque by applying a callback function to each element of the
     * original Deque.
     * @param callback - The `callback` parameter is a function that will be called for each element in
     * the deque. It takes three arguments:
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `callback` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `callback` function. If `thisArg` is
     * @returns a new Deque object with the mapped values.
     */
    map(callback, thisArg) {
      const newDeque = new _Deque([], this._bucketSize);
      let index = 0;
      for (const el of this) {
        newDeque.push(callback.call(thisArg, el, index, this));
        index++;
      }
      return newDeque;
    }
    /**
     * Time Complexity: Amortized O(1) - Similar to push, resizing leads to O(n).
     * Space Complexity: O(n) - Due to potential resizing.
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(n) - In worst case, resizing doubles the array size.
     *
     * The addLast function adds an element to the end of an array.
     * @param {E} element - The element parameter represents the element that you want to add to the end of the
     * data structure.
     */
    addLast(element) {
      return this.push(element);
    }
    /**
     * Time Complexity: O(1) - Removes the first element.
     * Space Complexity: O(1) - In-place operation.
     */
    /**
     * Time Complexity: O(1) - Removes the last element.
     * Space Complexity: O(1) - Operates in-place.
     *
     * The function "pollLast" removes and returns the last element of an array.
     * @returns The last element of the array is being returned.
     */
    pollLast() {
      return this.pop();
    }
    /**
     * Time Complexity: O(1).
     * Space Complexity: O(n) - Due to potential resizing.
     *
     * The "addFirst" function adds an element to the beginning of an array.
     * @param {E} element - The parameter "element" represents the element that you want to add to the
     * beginning of the data structure.
     */
    addFirst(element) {
      return this.unshift(element);
    }
    /**
     * Time Complexity: O(1) - Removes the first element.
     * Space Complexity: O(1) - In-place operation.
     *
     * The function "pollFirst" removes and returns the first element of an array.
     * @returns The method `pollFirst()` is returning the first element of the array after removing it
     * from the beginning. If the array is empty, it will return `undefined`.
     */
    pollFirst() {
      return this.shift();
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The above function is an implementation of the iterator protocol in TypeScript, allowing the
     * object to be iterated over using a for...of loop.
     */
    *_getIterator() {
      for (let i = 0; i < this.size; ++i) {
        yield this.getAt(i);
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `_reallocate` function reallocates the buckets in an array, adding new buckets if needed.
     * @param {number} [needBucketNum] - The `needBucketNum` parameter is an optional number that
     * specifies the number of new buckets needed. If not provided, it will default to half of the
     * current bucket count (`this._bucketCount >> 1`) or 1 if the current bucket count is less than 2.
     */
    _reallocate(needBucketNum) {
      const newBuckets = [];
      const addBucketNum = needBucketNum || this._bucketCount >> 1 || 1;
      for (let i = 0; i < addBucketNum; ++i) {
        newBuckets[i] = new Array(this._bucketSize);
      }
      for (let i = this._bucketFirst; i < this._bucketCount; ++i) {
        newBuckets[newBuckets.length] = this._buckets[i];
      }
      for (let i = 0; i < this._bucketLast; ++i) {
        newBuckets[newBuckets.length] = this._buckets[i];
      }
      newBuckets[newBuckets.length] = [...this._buckets[this._bucketLast]];
      this._bucketFirst = addBucketNum;
      this._bucketLast = newBuckets.length - 1;
      for (let i = 0; i < addBucketNum; ++i) {
        newBuckets[newBuckets.length] = new Array(this._bucketSize);
      }
      this._buckets = newBuckets;
      this._bucketCount = newBuckets.length;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function calculates the bucket index and index within the bucket based on the given position.
     * @param {number} pos - The `pos` parameter represents the position within the data structure. It is
     * a number that indicates the index or position of an element within the structure.
     * @returns an object with two properties: "bucketIndex" and "indexInBucket".
     */
    _getBucketAndPosition(pos) {
      let bucketIndex;
      let indexInBucket;
      const overallIndex = this._firstInBucket + pos;
      bucketIndex = this._bucketFirst + Math.floor(overallIndex / this._bucketSize);
      if (bucketIndex >= this._bucketCount) {
        bucketIndex -= this._bucketCount;
      }
      indexInBucket = (overallIndex + 1) % this._bucketSize - 1;
      if (indexInBucket < 0) {
        indexInBucket = this._bucketSize - 1;
      }
      return { bucketIndex, indexInBucket };
    }
  };

  // src/data-structures/heap/heap.ts
  var Heap = class _Heap extends IterableElementBase {
    constructor(elements, options) {
      super();
      __publicField(this, "options");
      __publicField(this, "_elements", []);
      const defaultComparator = (a, b) => {
        if (!(typeof a === "number" && typeof b === "number")) {
          throw new Error("The a, b params of compare function must be number");
        } else {
          return a - b;
        }
      };
      if (options) {
        this.options = options;
      } else {
        this.options = {
          comparator: defaultComparator
        };
      }
      if (elements) {
        for (const el of elements) {
          this.add(el);
        }
      }
    }
    get elements() {
      return this._elements;
    }
    /**
     * Get the size (number of elements) of the heap.
     */
    get size() {
      return this.elements.length;
    }
    /**
     * Get the last element in the heap, which is not necessarily a leaf node.
     * @returns The last element or undefined if the heap is empty.
     */
    get leaf() {
      var _a;
      return (_a = this.elements[this.size - 1]) != null ? _a : void 0;
    }
    /**
     * Static method that creates a binary heap from an array of elements and a comparison function.
     * @returns A new Heap instance.
     * @param elements
     * @param options
     */
    static heapify(elements, options) {
      return new _Heap(elements, options);
    }
    /**
     * Time Complexity: O(log n), where n is the number of elements in the heap.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n), where n is the number of elements in the heap.
     * Space Complexity: O(1)
     *
     * Insert an element into the heap and maintain the heap properties.
     * @param element - The element to be inserted.
     */
    add(element) {
      this._elements.push(element);
      return this._bubbleUp(this.elements.length - 1);
    }
    /**
     * Time Complexity: O(log n), where n is the number of elements in the heap.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n), where n is the number of elements in the heap.
     * Space Complexity: O(1)
     *
     * Remove and return the top element (smallest or largest element) from the heap.
     * @returns The top element or undefined if the heap is empty.
     */
    poll() {
      if (this.elements.length === 0)
        return;
      const value = this.elements[0];
      const last = this.elements.pop();
      if (this.elements.length) {
        this.elements[0] = last;
        this._sinkDown(0, this.elements.length >> 1);
      }
      return value;
    }
    /**
     * Peek at the top element of the heap without removing it.
     * @returns The top element or undefined if the heap is empty.
     */
    peek() {
      return this.elements[0];
    }
    /**
     * Check if the heap is empty.
     * @returns True if the heap is empty, otherwise false.
     */
    isEmpty() {
      return this.size === 0;
    }
    /**
     * Reset the elements of the heap. Make the elements empty.
     */
    clear() {
      this._elements = [];
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the elements array.
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the elements array.
     * Space Complexity: O(n)
     *
     * Clear and add elements of the heap
     * @param elements
     */
    refill(elements) {
      this._elements = elements;
      return this.fix();
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the heap.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the heap.
     * Space Complexity: O(1)
     *
     * Use a comparison function to check whether a binary heap contains a specific element.
     * @param element - the element to check.
     * @returns Returns true if the specified element is contained; otherwise, returns false.
     */
    has(element) {
      return this.elements.includes(element);
    }
    /**
     * Time Complexity:  O(n). The worst-case  O(n), where n is the number of elements in the heap. This is because, in the worst case, the element to be deleted is located at the end of the heap (not the root), and after deletion, we may need to reorganize the elements by performing a sinkDown operation.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity:  O(n). The worst-case  O(n), where n is the number of elements in the heap. This is because, in the worst case, the element to be deleted is located at the end of the heap (not the root), and after deletion, we may need to reorganize the elements by performing a sinkDown operation.
     * Space Complexity: O(1)
     *
     * The `delete` function removes an element from an array-like data structure, maintaining the order
     * and structure of the remaining elements.
     * @param {E} element - The `element` parameter represents the element that you want to delete from
     * the array `this.elements`.
     * @returns The `delete` function is returning a boolean value. It returns `true` if the element was
     * successfully deleted from the array, and `false` if the element was not found in the array.
     */
    delete(element) {
      const index = this.elements.indexOf(element);
      if (index < 0)
        return false;
      if (index === 0) {
        this.poll();
      } else if (index === this.elements.length - 1) {
        this.elements.pop();
      } else {
        this.elements.splice(index, 1, this.elements.pop());
        this._bubbleUp(index);
        this._sinkDown(index, this.elements.length >> 1);
      }
      return true;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the heap.
     * Space Complexity: O(h), where h is the height of the heap.
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the heap.
     * Space Complexity: O(h), where h is the height of the heap.
     *
     * Depth-first search (DFS) method, different traversal orders can be selected。
     * @param order - Traverse order parameter: 'in' (in-order), 'pre' (pre-order) or 'post' (post-order).
     * @returns An array containing elements traversed in the specified order.
     */
    dfs(order = "pre") {
      const result = [];
      const _dfs = (index) => {
        const left = 2 * index + 1, right = left + 1;
        if (index < this.size) {
          if (order === "in") {
            _dfs(left);
            result.push(this.elements[index]);
            _dfs(right);
          } else if (order === "pre") {
            result.push(this.elements[index]);
            _dfs(left);
            _dfs(right);
          } else if (order === "post") {
            _dfs(left);
            _dfs(right);
            result.push(this.elements[index]);
          }
        }
      };
      _dfs(0);
      return result;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * Convert the heap to an array.
     * @returns An array containing the elements of the heap.
     */
    toArray() {
      return [...this.elements];
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * Clone the heap, creating a new heap with the same elements.
     * @returns A new Heap instance containing the same elements.
     */
    clone() {
      const clonedHeap = new _Heap([], this.options);
      clonedHeap._elements = [...this.elements];
      return clonedHeap;
    }
    /**
     * Time Complexity: O(n log n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n log n)
     * Space Complexity: O(n)
     *
     * Sort the elements in the heap and return them as an array.
     * @returns An array containing the elements sorted in ascending order.
     */
    sort() {
      const visitedNode = [];
      const cloned = this.clone();
      while (cloned.size !== 0) {
        const top = cloned.poll();
        if (top)
          visitedNode.push(top);
      }
      return visitedNode;
    }
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * Fix the entire heap to maintain heap properties.
     */
    fix() {
      const results = [];
      for (let i = Math.floor(this.size / 2); i >= 0; i--)
        results.push(this._sinkDown(i, this.elements.length >> 1));
      return results;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `filter` function creates a new Heap object containing elements that pass a given callback
     * function.
     * @param callback - The `callback` parameter is a function that will be called for each element in
     * the heap. It takes three arguments: the current element, the index of the current element, and the
     * heap itself. The callback function should return a boolean value indicating whether the current
     * element should be included in the filtered list
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `callback` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `callback` function. If `thisArg` is
     * @returns The `filter` method is returning a new `Heap` object that contains the elements that pass
     * the filter condition specified by the `callback` function.
     */
    filter(callback, thisArg) {
      const filteredList = new _Heap();
      let index = 0;
      for (const current of this) {
        if (callback.call(thisArg, current, index, this)) {
          filteredList.add(current);
        }
        index++;
      }
      return filteredList;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `map` function creates a new heap by applying a callback function to each element of the
     * original heap.
     * @param callback - The callback parameter is a function that will be called for each element in the
     * original heap. It takes three arguments: the current element, the index of the current element,
     * and the original heap itself. The callback function should return a value of type T, which will be
     * added to the mapped heap.
     * @param comparator - The `comparator` parameter is a function that is used to compare elements in
     * the heap. It takes two arguments, `a` and `b`, and returns a negative number if `a` is less than
     * `b`, a positive number if `a` is greater than `b`, or
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that allows you to
     * specify the value of `this` within the callback function. It is used when you want to bind a
     * specific object as the context for the callback function. If `thisArg` is not provided,
     * `undefined` is used as
     * @returns a new instance of the Heap class, which is created using the mapped elements from the
     * original Heap.
     */
    map(callback, comparator, thisArg) {
      const mappedHeap = new _Heap([], { comparator });
      let index = 0;
      for (const el of this) {
        mappedHeap.add(callback.call(thisArg, el, index, this));
        index++;
      }
      return mappedHeap;
    }
    *_getIterator() {
      for (const element of this.elements) {
        yield element;
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     *
     * Float operation to maintain heap properties after adding an element.
     * @param index - The index of the newly added element.
     */
    _bubbleUp(index) {
      const element = this.elements[index];
      while (index > 0) {
        const parent = index - 1 >> 1;
        const parentItem = this.elements[parent];
        if (this.options.comparator(parentItem, element) <= 0)
          break;
        this.elements[index] = parentItem;
        index = parent;
      }
      this.elements[index] = element;
      return true;
    }
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     *
     * Sinking operation to maintain heap properties after removing the top element.
     * @param index - The index from which to start sinking.
     * @param halfLength
     */
    _sinkDown(index, halfLength) {
      const element = this.elements[index];
      while (index < halfLength) {
        let left = index << 1 | 1;
        const right = left + 1;
        let minItem = this.elements[left];
        if (right < this.elements.length && this.options.comparator(minItem, this.elements[right]) > 0) {
          left = right;
          minItem = this.elements[right];
        }
        if (this.options.comparator(minItem, element) >= 0)
          break;
        this.elements[index] = minItem;
        index = left;
      }
      this.elements[index] = element;
      return true;
    }
  };
  var FibonacciHeapNode = class {
    constructor(element, degree = 0) {
      __publicField(this, "element");
      __publicField(this, "degree");
      __publicField(this, "left");
      __publicField(this, "right");
      __publicField(this, "child");
      __publicField(this, "parent");
      __publicField(this, "marked");
      this.element = element;
      this.degree = degree;
      this.marked = false;
    }
  };
  var FibonacciHeap = class {
    constructor(comparator) {
      __publicField(this, "_root");
      __publicField(this, "_size", 0);
      __publicField(this, "_min");
      __publicField(this, "_comparator");
      this.clear();
      this._comparator = comparator || this._defaultComparator;
      if (typeof this.comparator !== "function") {
        throw new Error("FibonacciHeap constructor: given comparator should be a function.");
      }
    }
    get root() {
      return this._root;
    }
    get size() {
      return this._size;
    }
    get min() {
      return this._min;
    }
    get comparator() {
      return this._comparator;
    }
    /**
     * Get the size (number of elements) of the heap.
     * @returns {number} The size of the heap.  Returns 0 if the heap is empty. Returns -1 if the heap is invalid.
     */
    clear() {
      this._root = void 0;
      this._min = void 0;
      this._size = 0;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * Insert an element into the heap and maintain the heap properties.
     * @param element
     * @returns {FibonacciHeap<E>} FibonacciHeap<E> - The heap itself.
     */
    add(element) {
      return this.push(element);
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * Insert an element into the heap and maintain the heap properties.
     * @param element
     * @returns {FibonacciHeap<E>} FibonacciHeap<E> - The heap itself.
     */
    push(element) {
      const node = this.createNode(element);
      node.left = node;
      node.right = node;
      this.mergeWithRoot(node);
      if (!this.min || this.comparator(node.element, this.min.element) <= 0) {
        this._min = node;
      }
      this._size++;
      return this;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * Peek at the top element of the heap without removing it.
     * @returns The top element or undefined if the heap is empty.
     * @protected
     */
    peek() {
      return this.min ? this.min.element : void 0;
    }
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n), where n is the number of elements in the linked list.
     * Space Complexity: O(1)
     *
     * Get the size (number of elements) of the heap.
     * @param {FibonacciHeapNode<E>} head - The head of the linked list.
     * @protected
     * @returns FibonacciHeapNode<E>[] - An array containing the elements of the linked list.
     */
    consumeLinkedList(head) {
      const elements = [];
      if (!head)
        return elements;
      let node = head;
      let flag = false;
      while (true) {
        if (node === head && flag)
          break;
        else if (node === head)
          flag = true;
        if (node) {
          elements.push(node);
          node = node.right;
        }
      }
      return elements;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * @param parent
     * @param node
     */
    mergeWithChild(parent, node) {
      if (!parent.child) {
        parent.child = node;
      } else {
        node.right = parent.child.right;
        node.left = parent.child;
        parent.child.right.left = node;
        parent.child.right = node;
      }
    }
    /**
     * Time Complexity: O(log n), where n is the number of elements in the heap.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n), where n is the number of elements in the heap.
     * Space Complexity: O(1)
     *
     * Remove and return the top element (smallest or largest element) from the heap.
     * @returns The top element or undefined if the heap is empty.
     */
    poll() {
      return this.pop();
    }
    /**
     * Time Complexity: O(log n), where n is the number of elements in the heap.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n), where n is the number of elements in the heap.
     * Space Complexity: O(1)
     *
     * Remove and return the top element (smallest or largest element) from the heap.
     * @returns The top element or undefined if the heap is empty.
     */
    pop() {
      if (this.size === 0)
        return void 0;
      const z = this.min;
      if (z.child) {
        const elements = this.consumeLinkedList(z.child);
        for (const node of elements) {
          this.mergeWithRoot(node);
          node.parent = void 0;
        }
      }
      this.removeFromRoot(z);
      if (z === z.right) {
        this._min = void 0;
        this._root = void 0;
      } else {
        this._min = z.right;
        this._consolidate();
      }
      this._size--;
      return z.element;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * merge two heaps. The heap that is merged will be cleared. The heap that is merged into will remain.
     * @param heapToMerge
     */
    merge(heapToMerge) {
      if (heapToMerge.size === 0) {
        return;
      }
      if (this.root && heapToMerge.root) {
        const thisRoot = this.root;
        const otherRoot = heapToMerge.root;
        const thisRootRight = thisRoot.right;
        const otherRootLeft = otherRoot.left;
        thisRoot.right = otherRoot;
        otherRoot.left = thisRoot;
        thisRootRight.left = otherRootLeft;
        otherRootLeft.right = thisRootRight;
      }
      if (!this.min || heapToMerge.min && this.comparator(heapToMerge.min.element, this.min.element) < 0) {
        this._min = heapToMerge.min;
      }
      this._size += heapToMerge.size;
      heapToMerge.clear();
    }
    /**
     * Create a new node.
     * @param element
     * @protected
     */
    createNode(element) {
      return new FibonacciHeapNode(element);
    }
    /**
     * Default comparator function used by the heap.
     * @param {E} a
     * @param {E} b
     * @protected
     */
    _defaultComparator(a, b) {
      if (a < b)
        return -1;
      if (a > b)
        return 1;
      return 0;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * Merge the given node with the root list.
     * @param node - The node to be merged.
     */
    mergeWithRoot(node) {
      if (!this.root) {
        this._root = node;
      } else {
        node.right = this.root.right;
        node.left = this.root;
        this.root.right.left = node;
        this.root.right = node;
      }
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *.
     * Remove and return the top element (smallest or largest element) from the heap.
     * @param node - The node to be removed.
     * @protected
     */
    removeFromRoot(node) {
      if (this.root === node)
        this._root = node.right;
      if (node.left)
        node.left.right = node.right;
      if (node.right)
        node.right.left = node.left;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * Remove and return the top element (smallest or largest element) from the heap.
     * @param y
     * @param x
     * @protected
     */
    _link(y, x) {
      this.removeFromRoot(y);
      y.left = y;
      y.right = y;
      this.mergeWithChild(x, y);
      x.degree++;
      y.parent = x;
    }
    /**
     * Time Complexity: O(n log n), where n is the number of elements in the heap.
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n log n), where n is the number of elements in the heap.
     * Space Complexity: O(n)
     *
     * Remove and return the top element (smallest or largest element) from the heap.
     * @protected
     */
    _consolidate() {
      const A = new Array(this.size);
      const elements = this.consumeLinkedList(this.root);
      let x, y, d, t;
      for (const node of elements) {
        x = node;
        d = x.degree;
        while (A[d]) {
          y = A[d];
          if (this.comparator(x.element, y.element) > 0) {
            t = x;
            x = y;
            y = t;
          }
          this._link(y, x);
          A[d] = void 0;
          d++;
        }
        A[d] = x;
      }
      for (let i = 0; i < this.size; i++) {
        if (A[i] && this.comparator(A[i].element, this.min.element) <= 0) {
          this._min = A[i];
        }
      }
    }
  };

  // src/data-structures/heap/max-heap.ts
  var MaxHeap = class extends Heap {
    constructor(elements, options = {
      comparator: (a, b) => {
        if (!(typeof a === "number" && typeof b === "number")) {
          throw new Error("The a, b params of compare function must be number");
        } else {
          return b - a;
        }
      }
    }) {
      super(elements, options);
    }
  };

  // src/data-structures/heap/min-heap.ts
  var MinHeap = class extends Heap {
    constructor(elements, options = {
      comparator: (a, b) => {
        if (!(typeof a === "number" && typeof b === "number")) {
          throw new Error("The a, b params of compare function must be number");
        } else {
          return a - b;
        }
      }
    }) {
      super(elements, options);
    }
  };

  // src/data-structures/graph/abstract-graph.ts
  var AbstractVertex = class {
    /**
     * The function is a protected constructor that takes an key and an optional value as parameters.
     * @param {VertexKey} key - The `key` parameter is of type `VertexKey` and represents the identifier of the vertex. It is
     * used to uniquely identify the vertex object.
     * @param {V} [value] - The parameter "value" is an optional parameter of type V. It is used to assign a value to the
     * vertex. If no value is provided, it will be set to undefined.
     */
    constructor(key, value) {
      __publicField(this, "key");
      __publicField(this, "value");
      this.key = key;
      this.value = value;
    }
  };
  var AbstractEdge = class {
    /**
     * The above function is a protected constructor that initializes the weight, value, and hash code properties of an
     * object.
     * @param {number} [weight] - The `weight` parameter is an optional number that represents the weight of the object. If
     * a value is provided, it will be assigned to the `_weight` property. If no value is provided, the default value of 1
     * will be assigned.
     * @param {VO} [value] - The `value` parameter is of type `VO`, which means it can be any type. It is an optional parameter,
     * meaning it can be omitted when creating an instance of the class.
     */
    constructor(weight, value) {
      __publicField(this, "value");
      __publicField(this, "weight");
      __publicField(this, "_hashCode");
      this.weight = weight !== void 0 ? weight : 1;
      this.value = value;
      this._hashCode = uuidV4();
    }
    get hashCode() {
      return this._hashCode;
    }
    /**
     * In TypeScript, a subclass inherits the interface implementation of its parent class, without needing to implement the same interface again in the subclass. This behavior differs from Java's approach. In Java, if a parent class implements an interface, the subclass needs to explicitly implement the same interface, even if the parent class has already implemented it.
     * This means that using abstract methods in the parent class cannot constrain the grandchild classes. Defining methods within an interface also cannot constrain the descendant classes. When inheriting from this class, developers need to be aware that this method needs to be overridden.
     */
  };
  var AbstractGraph = class extends IterableEntryBase {
    constructor() {
      super();
      __publicField(this, "_vertexMap", /* @__PURE__ */ new Map());
    }
    get vertexMap() {
      return this._vertexMap;
    }
    /**
     * Time Complexity: O(1) - Constant time for Map lookup.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     */
    /**
     * Time Complexity: O(1) - Constant time for Map lookup.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     *
     * The function "getVertex" returns the vertex with the specified ID or undefined if it doesn't exist.
     * @param {VertexKey} vertexKey - The `vertexKey` parameter is the identifier of the vertex that you want to retrieve from
     * the `_vertexMap` map.
     * @returns The method `getVertex` returns the vertex with the specified `vertexKey` if it exists in the `_vertexMap`
     * map. If the vertex does not exist, it returns `undefined`.
     */
    getVertex(vertexKey) {
      return this._vertexMap.get(vertexKey) || void 0;
    }
    /**
     * Time Complexity: O(1) - Constant time for Map lookup.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     */
    /**
     * Time Complexity: O(1) - Constant time for Map lookup.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     *
     * The function checks if a vertex exists in a graph.
     * @param {VO | VertexKey} vertexOrKey - The parameter `vertexOrKey` can be either a vertex object (`VO`) or a vertex ID
     * (`VertexKey`).
     * @returns a boolean value.
     */
    hasVertex(vertexOrKey) {
      return this._vertexMap.has(this._getVertexKey(vertexOrKey));
    }
    /**
     * Time Complexity: O(1) - Constant time for Map operations.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     */
    addVertex(keyOrVertex, value) {
      if (keyOrVertex instanceof AbstractVertex) {
        return this._addVertexOnly(keyOrVertex);
      } else {
        const newVertex = this.createVertex(keyOrVertex, value);
        return this._addVertexOnly(newVertex);
      }
    }
    isVertexKey(potentialKey) {
      const potentialKeyType = typeof potentialKey;
      return potentialKeyType === "string" || potentialKeyType === "number";
    }
    /**
     * Time Complexity: O(1) - Constant time for Map operations.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     */
    /**
     * Time Complexity: O(1) - Constant time for Map operations.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     *
     * The `deleteVertex` function removes a vertex from a graph by its ID or by the vertex object itself.
     * @param {VO | VertexKey} vertexOrKey - The parameter `vertexOrKey` can be either a vertex object (`VO`) or a vertex ID
     * (`VertexKey`).
     * @returns The method is returning a boolean value.
     */
    deleteVertex(vertexOrKey) {
      const vertexKey = this._getVertexKey(vertexOrKey);
      return this._vertexMap.delete(vertexKey);
    }
    /**
     * Time Complexity: O(K), where K is the number of vertexMap to be removed.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     */
    /**
     * Time Complexity: O(K), where K is the number of vertexMap to be removed.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     *
     * The function removes all vertexMap from a graph and returns a boolean indicating if any vertexMap were removed.
     * @param {VO[] | VertexKey[]} vertexMap - The `vertexMap` parameter can be either an array of vertexMap (`VO[]`) or an array
     * of vertex IDs (`VertexKey[]`).
     * @returns a boolean value. It returns true if at least one vertex was successfully removed, and false if no vertexMap
     * were removed.
     */
    removeManyVertices(vertexMap) {
      const removed = [];
      for (const v of vertexMap) {
        removed.push(this.deleteVertex(v));
      }
      return removed.length > 0;
    }
    /**
     * Time Complexity: O(1) - Depends on the implementation in the concrete class.
     * Space Complexity: O(1) - Depends on the implementation in the concrete class.
     */
    /**
     * Time Complexity: O(1) - Depends on the implementation in the concrete class.
     * Space Complexity: O(1) - Depends on the implementation in the concrete class.
     *
     * The function checks if there is an edge between two vertexMap and returns a boolean value indicating the result.
     * @param {VertexKey | VO} v1 - The parameter v1 can be either a VertexKey or a VO. A VertexKey represents the unique
     * identifier of a vertex in a graph, while VO represents the type of the vertex object itself.
     * @param {VertexKey | VO} v2 - The parameter `v2` represents the second vertex in the edge. It can be either a
     * `VertexKey` or a `VO` type, which represents the type of the vertex.
     * @returns A boolean value is being returned.
     */
    hasEdge(v1, v2) {
      const edge = this.getEdge(v1, v2);
      return !!edge;
    }
    /**
     * Time Complexity: O(1) - Depends on the implementation in the concrete class.
     * Space Complexity: O(1) - Depends on the implementation in the concrete class.
     */
    addEdge(srcOrEdge, dest, weight, value) {
      if (srcOrEdge instanceof AbstractEdge) {
        return this._addEdgeOnly(srcOrEdge);
      } else {
        if (dest instanceof AbstractVertex || typeof dest === "string" || typeof dest === "number") {
          if (!(this.hasVertex(srcOrEdge) && this.hasVertex(dest)))
            return false;
          if (srcOrEdge instanceof AbstractVertex)
            srcOrEdge = srcOrEdge.key;
          if (dest instanceof AbstractVertex)
            dest = dest.key;
          const newEdge = this.createEdge(srcOrEdge, dest, weight, value);
          return this._addEdgeOnly(newEdge);
        } else {
          throw new Error("dest must be a Vertex or vertex key while srcOrEdge is an Edge");
        }
      }
    }
    /**
     * Time Complexity: O(1) - Constant time for Map and Edge operations.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     */
    /**
     * Time Complexity: O(1) - Constant time for Map and Edge operations.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     *
     * The function sets the weight of an edge between two vertexMap in a graph.
     * @param {VertexKey | VO} srcOrKey - The `srcOrKey` parameter can be either a `VertexKey` or a `VO` object. It represents
     * the source vertex of the edge.
     * @param {VertexKey | VO} destOrKey - The `destOrKey` parameter represents the destination vertex of the edge. It can be
     * either a `VertexKey` or a vertex object `VO`.
     * @param {number} weight - The weight parameter represents the weight of the edge between the source vertex (srcOrKey)
     * and the destination vertex (destOrKey).
     * @returns a boolean value. If the edge exists between the source and destination vertexMap, the function will update
     * the weight of the edge and return true. If the edge does not exist, the function will return false.
     */
    setEdgeWeight(srcOrKey, destOrKey, weight) {
      const edge = this.getEdge(srcOrKey, destOrKey);
      if (edge) {
        edge.weight = weight;
        return true;
      } else {
        return false;
      }
    }
    /**
     * Time Complexity: O(P), where P is the number of paths found (in the worst case, exploring all paths).
     * Space Complexity: O(P) - Linear space, where P is the number of paths found.
     */
    /**
     * Time Complexity: O(P), where P is the number of paths found (in the worst case, exploring all paths).
     * Space Complexity: O(P) - Linear space, where P is the number of paths found.
     *
     * The function `getAllPathsBetween` finds all paths between two vertexMap in a graph using depth-first search.
     * @param {VO | VertexKey} v1 - The parameter `v1` represents either a vertex object (`VO`) or a vertex ID (`VertexKey`).
     * It is the starting vertex for finding paths.
     * @param {VO | VertexKey} v2 - The parameter `v2` represents either a vertex object (`VO`) or a vertex ID (`VertexKey`).
     * @param limit - The count of limitation of result array.
     * @returns The function `getAllPathsBetween` returns an array of arrays of vertexMap (`VO[][]`).
     */
    getAllPathsBetween(v1, v2, limit = 1e3) {
      const paths = [];
      const vertex1 = this._getVertex(v1);
      const vertex2 = this._getVertex(v2);
      if (!(vertex1 && vertex2)) {
        return [];
      }
      const stack = [];
      stack.push({ vertex: vertex1, path: [vertex1] });
      while (stack.length > 0) {
        const { vertex, path } = stack.pop();
        if (vertex === vertex2) {
          paths.push(path);
          if (paths.length >= limit)
            return paths;
        }
        const neighbors = this.getNeighbors(vertex);
        for (const neighbor of neighbors) {
          if (!path.includes(neighbor)) {
            const newPath = [...path, neighbor];
            stack.push({ vertex: neighbor, path: newPath });
          }
        }
      }
      return paths;
    }
    /**
     * Time Complexity: O(L), where L is the length of the path.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(L), where L is the length of the path.
     * Space Complexity: O(1) - Constant space.
     *
     * The function calculates the sum of weights along a given path.
     * @param {VO[]} path - An array of vertexMap (VO) representing a path in a graph.
     * @returns The function `getPathSumWeight` returns the sum of the weights of the edgeMap in the given path.
     */
    getPathSumWeight(path) {
      var _a;
      let sum = 0;
      for (let i = 0; i < path.length; i++) {
        sum += ((_a = this.getEdge(path[i], path[i + 1])) == null ? void 0 : _a.weight) || 0;
      }
      return sum;
    }
    /**
     * Time Complexity: O(V + E) - Depends on the implementation (Dijkstra's algorithm).
     * Space Complexity: O(V + E) - Depends on the implementation (Dijkstra's algorithm).
     */
    /**
     * Time Complexity: O(V + E) - Depends on the implementation (Dijkstra's algorithm).
     * Space Complexity: O(V + E) - Depends on the implementation (Dijkstra's algorithm).
     *
     * The function `getMinCostBetween` calculates the minimum cost between two vertexMap in a graph, either based on edge
     * weights or using a breadth-first search algorithm.
     * @param {VO | VertexKey} v1 - The parameter `v1` represents the starting vertex or its ID.
     * @param {VO | VertexKey} v2 - The parameter `v2` represents the destination vertex or its ID. It is the vertex to which
     * you want to find the minimum cost or weight from the source vertex `v1`.
     * @param {boolean} [isWeight] - isWeight is an optional parameter that indicates whether the graph edgeMap have weights.
     * If isWeight is set to true, the function will calculate the minimum cost between v1 and v2 based on the weights of
     * the edgeMap. If isWeight is set to false or not provided, the function will calculate the
     * @returns The function `getMinCostBetween` returns a number representing the minimum cost between two vertexMap (`v1`
     * and `v2`). If the `isWeight` parameter is `true`, it calculates the minimum weight among all paths between the
     * vertexMap. If `isWeight` is `false` or not provided, it uses a breadth-first search (BFS) algorithm to calculate the
     * minimum number of
     */
    getMinCostBetween(v1, v2, isWeight) {
      if (isWeight === void 0)
        isWeight = false;
      if (isWeight) {
        const allPaths = this.getAllPathsBetween(v1, v2);
        let min = Infinity;
        for (const path of allPaths) {
          min = Math.min(this.getPathSumWeight(path), min);
        }
        return min;
      } else {
        const vertex2 = this._getVertex(v2);
        const vertex1 = this._getVertex(v1);
        if (!(vertex1 && vertex2)) {
          return void 0;
        }
        const visited = /* @__PURE__ */ new Map();
        const queue = new Queue([vertex1]);
        visited.set(vertex1, true);
        let cost = 0;
        while (queue.size > 0) {
          for (let i = 0; i < queue.size; i++) {
            const cur = queue.shift();
            if (cur === vertex2) {
              return cost;
            }
            if (cur !== void 0) {
              const neighbors = this.getNeighbors(cur);
              for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                  visited.set(neighbor, true);
                  queue.push(neighbor);
                }
              }
            }
          }
          cost++;
        }
        return void 0;
      }
    }
    /**
     * Time Complexity: O(V + E) - Depends on the implementation (Dijkstra's algorithm or DFS).
     * Space Complexity: O(V + E) - Depends on the implementation (Dijkstra's algorithm or DFS).
     */
    /**
     * Time Complexity: O(V + E) - Depends on the implementation (Dijkstra's algorithm or DFS).
     * Space Complexity: O(V + E) - Depends on the implementation (Dijkstra's algorithm or DFS).
     *
     * The function `getMinPathBetween` returns the minimum path between two vertexMap in a graph, either based on weight or
     * using a breadth-first search algorithm.
     * @param {VO | VertexKey} v1 - The parameter `v1` represents the starting vertex of the path. It can be either a vertex
     * object (`VO`) or a vertex ID (`VertexKey`).
     * @param {VO | VertexKey} v2 - VO | VertexKey - The second vertex or vertex ID between which we want to find the minimum
     * path.
     * @param {boolean} [isWeight] - A boolean flag indicating whether to consider the weight of edgeMap in finding the
     * minimum path. If set to true, the function will use Dijkstra's algorithm to find the minimum weighted path. If set
     * to false, the function will use breadth-first search (BFS) to find the minimum path.
     * @param isDFS - If set to true, it enforces the use of getAllPathsBetween to first obtain all possible paths,
     * followed by iterative computation of the shortest path. This approach may result in exponential time complexity,
     * so the default method is to use the Dijkstra algorithm to obtain the shortest weighted path.
     * @returns The function `getMinPathBetween` returns an array of vertexMap (`VO[]`) representing the minimum path between
     * two vertexMap (`v1` and `v2`). If there is no path between the vertexMap, it returns `undefined`.
     */
    getMinPathBetween(v1, v2, isWeight, isDFS = false) {
      var _a, _b;
      if (isWeight === void 0)
        isWeight = false;
      if (isWeight) {
        if (isDFS) {
          const allPaths = this.getAllPathsBetween(v1, v2, 1e4);
          let min = Infinity;
          let minIndex = -1;
          let index = 0;
          for (const path of allPaths) {
            const pathSumWeight = this.getPathSumWeight(path);
            if (pathSumWeight < min) {
              min = pathSumWeight;
              minIndex = index;
            }
            index++;
          }
          return allPaths[minIndex] || void 0;
        } else {
          return (_b = (_a = this.dijkstra(v1, v2, true, true)) == null ? void 0 : _a.minPath) != null ? _b : [];
        }
      } else {
        let minPath = [];
        const vertex1 = this._getVertex(v1);
        const vertex2 = this._getVertex(v2);
        if (!(vertex1 && vertex2))
          return [];
        const dfs = (cur, dest, visiting, path) => {
          visiting.add(cur);
          if (cur === dest) {
            minPath = [vertex1, ...path];
            return;
          }
          const neighbors = this.getNeighbors(cur);
          for (const neighbor of neighbors) {
            if (!visiting.has(neighbor)) {
              path.push(neighbor);
              dfs(neighbor, dest, visiting, path);
              path.pop();
            }
          }
          visiting.delete(cur);
        };
        dfs(vertex1, vertex2, /* @__PURE__ */ new Set(), []);
        return minPath;
      }
    }
    /**
       *  Dijkstra algorithm time: O(VE) space: O(VO + EO)
       * /
    
       /**
       * Time Complexity: O(V^2 + E) - Quadratic time in the worst case (no heap optimization).
       * Space Complexity: O(V + E) - Depends on the implementation (Dijkstra's algorithm).
       */
    /**
     * Time Complexity: O(V^2 + E) - Quadratic time in the worst case (no heap optimization).
     * Space Complexity: O(V + E) - Depends on the implementation (Dijkstra's algorithm).
     *
     * The function `dijkstraWithoutHeap` implements Dijkstra's algorithm to find the shortest path between two vertexMap in
     * a graph without using a heap data structure.
     * @param {VO | VertexKey} src - The source vertex from which to start the Dijkstra's algorithm. It can be either a
     * vertex object or a vertex ID.
     * @param {VO | VertexKey | undefined} [dest] - The `dest` parameter in the `dijkstraWithoutHeap` function is an optional
     * parameter that specifies the destination vertex for the Dijkstra algorithm. It can be either a vertex object or its
     * identifier. If no destination is provided, the value is set to `undefined`.
     * @param {boolean} [getMinDist] - The `getMinDist` parameter is a boolean flag that determines whether the minimum
     * distance from the source vertex to the destination vertex should be calculated and returned in the result. If
     * `getMinDist` is set to `true`, the `minDist` property in the result will contain the minimum distance
     * @param {boolean} [genPaths] - The `genPaths` parameter is a boolean flag that determines whether or not to generate
     * paths in the Dijkstra algorithm. If `genPaths` is set to `true`, the algorithm will calculate and return the
     * shortest paths from the source vertex to all other vertexMap in the graph. If `genPaths
     * @returns The function `dijkstraWithoutHeap` returns an object of type `DijkstraResult<VO>`.
     */
    dijkstraWithoutHeap(src, dest = void 0, getMinDist = false, genPaths = false) {
      let minDist = Infinity;
      let minDest = void 0;
      let minPath = [];
      const paths = [];
      const vertexMap = this._vertexMap;
      const distMap = /* @__PURE__ */ new Map();
      const seen = /* @__PURE__ */ new Set();
      const preMap = /* @__PURE__ */ new Map();
      const srcVertex = this._getVertex(src);
      const destVertex = dest ? this._getVertex(dest) : void 0;
      if (!srcVertex) {
        return void 0;
      }
      for (const vertex of vertexMap) {
        const vertexOrKey = vertex[1];
        if (vertexOrKey instanceof AbstractVertex)
          distMap.set(vertexOrKey, Infinity);
      }
      distMap.set(srcVertex, 0);
      preMap.set(srcVertex, void 0);
      const getMinOfNoSeen = () => {
        let min = Infinity;
        let minV = void 0;
        for (const [key, value] of distMap) {
          if (!seen.has(key)) {
            if (value < min) {
              min = value;
              minV = key;
            }
          }
        }
        return minV;
      };
      const getPaths = (minV) => {
        for (const vertex of vertexMap) {
          const vertexOrKey = vertex[1];
          if (vertexOrKey instanceof AbstractVertex) {
            const path = [vertexOrKey];
            let parent = preMap.get(vertexOrKey);
            while (parent) {
              path.push(parent);
              parent = preMap.get(parent);
            }
            const reversed = path.reverse();
            if (vertex[1] === minV)
              minPath = reversed;
            paths.push(reversed);
          }
        }
      };
      for (let i = 1; i < vertexMap.size; i++) {
        const cur = getMinOfNoSeen();
        if (cur) {
          seen.add(cur);
          if (destVertex && destVertex === cur) {
            if (getMinDist) {
              minDist = distMap.get(destVertex) || Infinity;
            }
            if (genPaths) {
              getPaths(destVertex);
            }
            return { distMap, preMap, seen, paths, minDist, minPath };
          }
          const neighbors = this.getNeighbors(cur);
          for (const neighbor of neighbors) {
            if (!seen.has(neighbor)) {
              const edge = this.getEdge(cur, neighbor);
              if (edge) {
                const curFromMap = distMap.get(cur);
                const neighborFromMap = distMap.get(neighbor);
                if (curFromMap !== void 0 && neighborFromMap !== void 0) {
                  if (edge.weight + curFromMap < neighborFromMap) {
                    distMap.set(neighbor, edge.weight + curFromMap);
                    preMap.set(neighbor, cur);
                  }
                }
              }
            }
          }
        }
      }
      getMinDist && distMap.forEach((d, v) => {
        if (v !== srcVertex) {
          if (d < minDist) {
            minDist = d;
            if (genPaths)
              minDest = v;
          }
        }
      });
      genPaths && getPaths(minDest);
      return { distMap, preMap, seen, paths, minDist, minPath };
    }
    /**
       *  Dijkstra algorithm time: O(logVE) space: O(VO + EO)
       *
       * Dijkstra's algorithm only solves the single-source shortest path problem, while the Bellman-Ford algorithm and Floyd-Warshall algorithm can address shortest paths between all pairs of nodes.
       * Dijkstra's algorithm is suitable for graphs with non-negative edge weights, whereas the Bellman-Ford algorithm and Floyd-Warshall algorithm can handle negative-weight edgeMap.
       * The time complexity of Dijkstra's algorithm and the Bellman-Ford algorithm depends on the size of the graph, while the time complexity of the Floyd-Warshall algorithm is O(VO^3), where VO is the number of nodes. For dense graphs, Floyd-Warshall might become slower.
       *
       * /
    
       /**
       * Time Complexity: O((V + E) * log(V)) - Depends on the implementation (using a binary heap).
       * Space Complexity: O(V + E) - Depends on the implementation (using a binary heap).
       */
    /**
     * Time Complexity: O((V + E) * log(V)) - Depends on the implementation (using a binary heap).
     * Space Complexity: O(V + E) - Depends on the implementation (using a binary heap).
     *
     * Dijkstra's algorithm is used to find the shortest paths from a source node to all other nodes in a graph. Its basic idea is to repeatedly choose the node closest to the source node and update the distances of other nodes using this node as an intermediary. Dijkstra's algorithm requires that the edge weights in the graph are non-negative.
     * The `dijkstra` function implements Dijkstra's algorithm to find the shortest path between a source vertex and an
     * optional destination vertex, and optionally returns the minimum distance, the paths, and other information.
     * @param {VO | VertexKey} src - The `src` parameter represents the source vertex from which the Dijkstra algorithm will
     * start. It can be either a vertex object or a vertex ID.
     * @param {VO | VertexKey | undefined} [dest] - The `dest` parameter is the destination vertex or vertex ID. It specifies the
     * vertex to which the shortest path is calculated from the source vertex. If no destination is provided, the algorithm
     * will calculate the shortest paths to all other vertexMap from the source vertex.
     * @param {boolean} [getMinDist] - The `getMinDist` parameter is a boolean flag that determines whether the minimum
     * distance from the source vertex to the destination vertex should be calculated and returned in the result. If
     * `getMinDist` is set to `true`, the `minDist` property in the result will contain the minimum distance
     * @param {boolean} [genPaths] - The `genPaths` parameter is a boolean flag that determines whether or not to generate
     * paths in the Dijkstra algorithm. If `genPaths` is set to `true`, the algorithm will calculate and return the
     * shortest paths from the source vertex to all other vertexMap in the graph. If `genPaths
     * @returns The function `dijkstra` returns an object of type `DijkstraResult<VO>`.
     */
    dijkstra(src, dest = void 0, getMinDist = false, genPaths = false) {
      var _a;
      let minDist = Infinity;
      let minDest = void 0;
      let minPath = [];
      const paths = [];
      const vertexMap = this._vertexMap;
      const distMap = /* @__PURE__ */ new Map();
      const seen = /* @__PURE__ */ new Set();
      const preMap = /* @__PURE__ */ new Map();
      const srcVertex = this._getVertex(src);
      const destVertex = dest ? this._getVertex(dest) : void 0;
      if (!srcVertex)
        return void 0;
      for (const vertex of vertexMap) {
        const vertexOrKey = vertex[1];
        if (vertexOrKey instanceof AbstractVertex)
          distMap.set(vertexOrKey, Infinity);
      }
      const heap = new Heap([], { comparator: (a, b) => a.key - b.key });
      heap.add({ key: 0, value: srcVertex });
      distMap.set(srcVertex, 0);
      preMap.set(srcVertex, void 0);
      const getPaths = (minV) => {
        for (const vertex of vertexMap) {
          const vertexOrKey = vertex[1];
          if (vertexOrKey instanceof AbstractVertex) {
            const path = [vertexOrKey];
            let parent = preMap.get(vertexOrKey);
            while (parent) {
              path.push(parent);
              parent = preMap.get(parent);
            }
            const reversed = path.reverse();
            if (vertex[1] === minV)
              minPath = reversed;
            paths.push(reversed);
          }
        }
      };
      while (heap.size > 0) {
        const curHeapNode = heap.poll();
        const dist = curHeapNode == null ? void 0 : curHeapNode.key;
        const cur = curHeapNode == null ? void 0 : curHeapNode.value;
        if (dist !== void 0) {
          if (cur) {
            seen.add(cur);
            if (destVertex && destVertex === cur) {
              if (getMinDist) {
                minDist = distMap.get(destVertex) || Infinity;
              }
              if (genPaths) {
                getPaths(destVertex);
              }
              return { distMap, preMap, seen, paths, minDist, minPath };
            }
            const neighbors = this.getNeighbors(cur);
            for (const neighbor of neighbors) {
              if (!seen.has(neighbor)) {
                const weight = (_a = this.getEdge(cur, neighbor)) == null ? void 0 : _a.weight;
                if (typeof weight === "number") {
                  const distSrcToNeighbor = distMap.get(neighbor);
                  if (distSrcToNeighbor) {
                    if (dist + weight < distSrcToNeighbor) {
                      heap.add({ key: dist + weight, value: neighbor });
                      preMap.set(neighbor, cur);
                      distMap.set(neighbor, dist + weight);
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (getMinDist) {
        distMap.forEach((d, v) => {
          if (v !== srcVertex) {
            if (d < minDist) {
              minDist = d;
              if (genPaths)
                minDest = v;
            }
          }
        });
      }
      if (genPaths) {
        getPaths(minDest);
      }
      return { distMap, preMap, seen, paths, minDist, minPath };
    }
    /**
       * Time Complexity: O(V * E) - Quadratic time in the worst case (Bellman-Ford algorithm).
       * Space Complexity: O(V + E) - Depends on the implementation (Bellman-Ford algorithm).
       * one to rest pairs
       * /
    
       /**
       * Time Complexity: O(V * E) - Quadratic time in the worst case (Bellman-Ford algorithm).
       * Space Complexity: O(V + E) - Depends on the implementation (Bellman-Ford algorithm).
       *
       * one to rest pairs
       * The Bellman-Ford algorithm is also used to find the shortest paths from a source node to all other nodes in a graph. Unlike Dijkstra's algorithm, it can handle edge weights that are negative. Its basic idea involves iterative relaxation of all edgeMap for several rounds to gradually approximate the shortest paths. Due to its ability to handle negative-weight edgeMap, the Bellman-Ford algorithm is more flexible in some scenarios.
       * The `bellmanFord` function implements the Bellman-Ford algorithm to find the shortest path from a source vertex to
       * all other vertexMap in a graph, and optionally detects negative cycles and generates the minimum path.
       * @param {VO | VertexKey} src - The `src` parameter is the source vertex from which the Bellman-Ford algorithm will
       * start calculating the shortest paths. It can be either a vertex object or a vertex ID.
       * @param {boolean} [scanNegativeCycle] - A boolean flag indicating whether to scan for negative cycles in the graph.
       * @param {boolean} [getMin] - The `getMin` parameter is a boolean flag that determines whether the algorithm should
       * calculate the minimum distance from the source vertex to all other vertexMap in the graph. If `getMin` is set to
       * `true`, the algorithm will find the minimum distance and update the `min` variable with the minimum
       * @param {boolean} [genPath] - A boolean flag indicating whether to generate paths for all vertexMap from the source
       * vertex.
       * @returns The function `bellmanFord` returns an object with the following properties:
       */
    bellmanFord(src, scanNegativeCycle, getMin, genPath) {
      if (getMin === void 0)
        getMin = false;
      if (genPath === void 0)
        genPath = false;
      const srcVertex = this._getVertex(src);
      const paths = [];
      const distMap = /* @__PURE__ */ new Map();
      const preMap = /* @__PURE__ */ new Map();
      let min = Infinity;
      let minPath = [];
      let hasNegativeCycle;
      if (scanNegativeCycle)
        hasNegativeCycle = false;
      if (!srcVertex)
        return { hasNegativeCycle, distMap, preMap, paths, min, minPath };
      const vertexMap = this._vertexMap;
      const numOfVertices = vertexMap.size;
      const edgeMap = this.edgeSet();
      const numOfEdges = edgeMap.length;
      this._vertexMap.forEach((vertex) => {
        distMap.set(vertex, Infinity);
      });
      distMap.set(srcVertex, 0);
      for (let i = 1; i < numOfVertices; ++i) {
        for (let j = 0; j < numOfEdges; ++j) {
          const ends = this.getEndsOfEdge(edgeMap[j]);
          if (ends) {
            const [s, d] = ends;
            const weight = edgeMap[j].weight;
            const sWeight = distMap.get(s);
            const dWeight = distMap.get(d);
            if (sWeight !== void 0 && dWeight !== void 0) {
              if (distMap.get(s) !== Infinity && sWeight + weight < dWeight) {
                distMap.set(d, sWeight + weight);
                genPath && preMap.set(d, s);
              }
            }
          }
        }
      }
      let minDest = void 0;
      if (getMin) {
        distMap.forEach((d, v) => {
          if (v !== srcVertex) {
            if (d < min) {
              min = d;
              if (genPath)
                minDest = v;
            }
          }
        });
      }
      if (genPath) {
        for (const vertex of vertexMap) {
          const vertexOrKey = vertex[1];
          if (vertexOrKey instanceof AbstractVertex) {
            const path = [vertexOrKey];
            let parent = preMap.get(vertexOrKey);
            while (parent !== void 0) {
              path.push(parent);
              parent = preMap.get(parent);
            }
            const reversed = path.reverse();
            if (vertex[1] === minDest)
              minPath = reversed;
            paths.push(reversed);
          }
        }
      }
      for (let j = 0; j < numOfEdges; ++j) {
        const ends = this.getEndsOfEdge(edgeMap[j]);
        if (ends) {
          const [s] = ends;
          const weight = edgeMap[j].weight;
          const sWeight = distMap.get(s);
          if (sWeight) {
            if (sWeight !== Infinity && sWeight + weight < sWeight)
              hasNegativeCycle = true;
          }
        }
      }
      return { hasNegativeCycle, distMap, preMap, paths, min, minPath };
    }
    /**
       * Dijkstra algorithm time: O(logVE) space: O(VO + EO)
       * /
    
       /**
       * Dijkstra algorithm time: O(logVE) space: O(VO + EO)
       * Dijkstra's algorithm is used to find the shortest paths from a source node to all other nodes in a graph. Its basic idea is to repeatedly choose the node closest to the source node and update the distances of other nodes using this node as an intermediary. Dijkstra's algorithm requires that the edge weights in the graph are non-negative.
       */
    /**
     * BellmanFord time:O(VE) space:O(VO)
     * one to rest pairs
     * The Bellman-Ford algorithm is also used to find the shortest paths from a source node to all other nodes in a graph. Unlike Dijkstra's algorithm, it can handle edge weights that are negative. Its basic idea involves iterative relaxation of all edgeMap for several rounds to gradually approximate the shortest paths. Due to its ability to handle negative-weight edgeMap, the Bellman-Ford algorithm is more flexible in some scenarios.
     * The `bellmanFord` function implements the Bellman-Ford algorithm to find the shortest path from a source vertex to
     */
    /**
       * Time Complexity: O(V^3) - Cubic time (Floyd-Warshall algorithm).
       * Space Complexity: O(V^2) - Quadratic space (Floyd-Warshall algorithm).
       * Not support graph with negative weight cycle
       * all pairs
       * The Floyd-Warshall algorithm is used to find the shortest paths between all pairs of nodes in a graph. It employs dynamic programming to compute the shortest paths from any node to any other node. The Floyd-Warshall algorithm's advantage lies in its ability to handle graphs with negative-weight edgeMap, and it can simultaneously compute shortest paths between any two nodes.
       * /
    
       /**
       * Time Complexity: O(V^3) - Cubic time (Floyd-Warshall algorithm).
       * Space Complexity: O(V^2) - Quadratic space (Floyd-Warshall algorithm).
       *
       * Not support graph with negative weight cycle
       * all pairs
       * The Floyd-Warshall algorithm is used to find the shortest paths between all pairs of nodes in a graph. It employs dynamic programming to compute the shortest paths from any node to any other node. The Floyd-Warshall algorithm's advantage lies in its ability to handle graphs with negative-weight edgeMap, and it can simultaneously compute shortest paths between any two nodes.
       * The function implements the Floyd-Warshall algorithm to find the shortest path between all pairs of vertexMap in a
       * graph.
       * @returns The function `floydWarshall()` returns an object with two properties: `costs` and `predecessor`. The `costs`
       * property is a 2D array of numbers representing the shortest path costs between vertexMap in a graph. The
       * `predecessor` property is a 2D array of vertexMap (or `undefined`) representing the predecessor vertexMap in the shortest
       * path between vertexMap in the
       */
    floydWarshall() {
      var _a;
      const idAndVertices = [...this._vertexMap];
      const n = idAndVertices.length;
      const costs = [];
      const predecessor = [];
      for (let i = 0; i < n; i++) {
        costs[i] = [];
        predecessor[i] = [];
        for (let j = 0; j < n; j++) {
          predecessor[i][j] = void 0;
        }
      }
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          costs[i][j] = ((_a = this.getEdge(idAndVertices[i][1], idAndVertices[j][1])) == null ? void 0 : _a.weight) || Infinity;
        }
      }
      for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            if (costs[i][j] > costs[i][k] + costs[k][j]) {
              costs[i][j] = costs[i][k] + costs[k][j];
              predecessor[i][j] = idAndVertices[k][1];
            }
          }
        }
      }
      return { costs, predecessor };
    }
    /**
       * Time Complexity: O(V + E) - Linear time (Tarjan's algorithm).
       * Space Complexity: O(V) - Linear space (Tarjan's algorithm).
       * Tarjan is an algorithm based on dfs,which is used to solve the connectivity problem of graphs.
       * Tarjan can find cycles in directed or undirected graph
       * Tarjan can find the articulation points and bridges(critical edgeMap) of undirected graphs in linear time,
       * Tarjan solve the bi-connected components of undirected graphs;
       * Tarjan can find the SSC(strongly connected components), articulation points, and bridges of directed graphs.
       * /
    
       /**
       * Time Complexity: O(V + E) - Linear time (Tarjan's algorithm).
       * Space Complexity: O(V) - Linear space (Tarjan's algorithm).
       *
       * Tarjan is an algorithm based on dfs,which is used to solve the connectivity problem of graphs.
       * Tarjan can find cycles in directed or undirected graph
       * Tarjan can find the articulation points and bridges(critical edgeMap) of undirected graphs in linear time,
       * Tarjan solve the bi-connected components of undirected graphs;
       * Tarjan can find the SSC(strongly connected components), articulation points, and bridges of directed graphs.
       * The `tarjan` function is used to perform various graph analysis tasks such as finding articulation points, bridges,
       * strongly connected components (SCCs), and cycles in a graph.
       * @param {boolean} [needCutVertexes] - A boolean value indicating whether or not to calculate and return the
       * articulation points in the graph. Articulation points are the vertexMap in a graph whose removal would increase the
       * number of connected components in the graph.
       * @param {boolean} [needBridges] - A boolean flag indicating whether the algorithm should find and return the bridges
       * (edgeMap whose removal would increase the number of connected components in the graph).
       * @param {boolean} [needSCCs] - A boolean value indicating whether the Strongly Connected Components (SCCs) of the
       * graph are needed. If set to true, the function will calculate and return the SCCs of the graph. If set to false, the
       * SCCs will not be calculated or returned.
       * @param {boolean} [needCycles] - A boolean flag indicating whether the algorithm should find cycles in the graph. If
       * set to true, the algorithm will return a map of cycles, where the keys are the low values of the SCCs and the values
       * are arrays of vertexMap that form cycles within the SCCs.
       * @returns The function `tarjan` returns an object with the following properties:
       */
    tarjan(needCutVertexes = false, needBridges = false, needSCCs = true, needCycles = false) {
      const defaultConfig = false;
      if (needCutVertexes === void 0)
        needCutVertexes = defaultConfig;
      if (needBridges === void 0)
        needBridges = defaultConfig;
      if (needSCCs === void 0)
        needSCCs = defaultConfig;
      if (needCycles === void 0)
        needCycles = defaultConfig;
      const dfnMap = /* @__PURE__ */ new Map();
      const lowMap = /* @__PURE__ */ new Map();
      const vertexMap = this._vertexMap;
      vertexMap.forEach((v) => {
        dfnMap.set(v, -1);
        lowMap.set(v, Infinity);
      });
      const [root] = vertexMap.values();
      const cutVertexes = [];
      const bridges = [];
      let dfn = 0;
      const dfs = (cur, parent) => {
        dfn++;
        dfnMap.set(cur, dfn);
        lowMap.set(cur, dfn);
        const neighbors = this.getNeighbors(cur);
        let childCount = 0;
        for (const neighbor of neighbors) {
          if (neighbor !== parent) {
            if (dfnMap.get(neighbor) === -1) {
              childCount++;
              dfs(neighbor, cur);
            }
            const childLow = lowMap.get(neighbor);
            const curLow = lowMap.get(cur);
            if (curLow !== void 0 && childLow !== void 0) {
              lowMap.set(cur, Math.min(curLow, childLow));
            }
            const curFromMap = dfnMap.get(cur);
            if (childLow !== void 0 && curFromMap !== void 0) {
              if (needCutVertexes) {
                if (cur === root && childCount >= 2 || cur !== root && childLow >= curFromMap) {
                  cutVertexes.push(cur);
                }
              }
              if (needBridges) {
                if (childLow > curFromMap) {
                  const edgeCurToNeighbor = this.getEdge(cur, neighbor);
                  if (edgeCurToNeighbor) {
                    bridges.push(edgeCurToNeighbor);
                  }
                }
              }
            }
          }
        }
      };
      dfs(root, void 0);
      let SCCs = /* @__PURE__ */ new Map();
      const getSCCs = () => {
        const SCCs2 = /* @__PURE__ */ new Map();
        lowMap.forEach((low, vertex) => {
          var _a;
          if (!SCCs2.has(low)) {
            SCCs2.set(low, [vertex]);
          } else {
            (_a = SCCs2.get(low)) == null ? void 0 : _a.push(vertex);
          }
        });
        return SCCs2;
      };
      if (needSCCs) {
        SCCs = getSCCs();
      }
      const cycles = /* @__PURE__ */ new Map();
      if (needCycles) {
        const visitedMap = /* @__PURE__ */ new Map();
        const stack = [];
        const findCyclesDFS = (cur, parent) => {
          visitedMap.set(cur, true);
          stack.push(cur);
          const neighbors = this.getNeighbors(cur);
          for (const neighbor of neighbors) {
            if (!visitedMap.get(neighbor)) {
              findCyclesDFS(neighbor, cur);
            } else if (stack.includes(neighbor) && neighbor !== parent) {
              const cycleStartIndex = stack.indexOf(neighbor);
              const cycle = stack.slice(cycleStartIndex);
              const cycleLow = Math.min(...cycle.map((v) => dfnMap.get(v) || Infinity));
              cycles.set(cycleLow, cycle);
            }
          }
          stack.pop();
        };
        vertexMap.forEach((v) => {
          if (!visitedMap.get(v)) {
            findCyclesDFS(v, void 0);
          }
        });
      }
      return { dfnMap, lowMap, bridges, cutVertexes, SCCs, cycles };
    }
    /**
     * Time Complexity: O(V + E) - Depends on the implementation (Tarjan's algorithm).
     * Space Complexity: O(V) - Depends on the implementation (Tarjan's algorithm).
     */
    /**
     * Time Complexity: O(V + E) - Depends on the implementation (Tarjan's algorithm).
     * Space Complexity: O(V) - Depends on the implementation (Tarjan's algorithm).
     *
     * The function returns a map that associates each vertex object with its corresponding depth-first
     * number.
     * @returns A Map object with keys of type VO and values of type number.
     */
    getDFNMap() {
      return this.tarjan(false, false, false, false).dfnMap;
    }
    /**
     * The function returns a Map object that contains the low values of each vertex in a Tarjan
     * algorithm.
     * @returns The method `getLowMap()` is returning a `Map` object with keys of type `VO` and values of
     * type `number`.
     */
    getLowMap() {
      return this.tarjan(false, false, false, false).lowMap;
    }
    /**
     * The function `getCycles` returns a map of cycles found using the Tarjan algorithm.
     * @returns The function `getCycles()` is returning a `Map<number, VO[]>`.
     */
    getCycles() {
      return this.tarjan(false, false, false, true).cycles;
    }
    /**
     * The function "getCutVertexes" returns an array of cut vertexes using the Tarjan algorithm.
     * @returns an array of VO objects, specifically the cut vertexes.
     */
    getCutVertexes() {
      return this.tarjan(true, false, false, false).cutVertexes;
    }
    /**
     * The function "getSCCs" returns a map of strongly connected components (SCCs) using the Tarjan
     * algorithm.
     * @returns a map where the keys are numbers and the values are arrays of VO objects.
     */
    getSCCs() {
      return this.tarjan(false, false, true, false).SCCs;
    }
    /**
     * The function "getBridges" returns an array of bridges using the Tarjan algorithm.
     * @returns the bridges found using the Tarjan algorithm.
     */
    getBridges() {
      return this.tarjan(false, true, false, false).bridges;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `filter` function iterates over key-value pairs in a data structure and returns an array of
     * pairs that satisfy a given predicate.
     * @param predicate - The `predicate` parameter is a callback function that takes four arguments:
     * `value`, `key`, `index`, and `this`. It is used to determine whether an element should be included
     * in the filtered array. The callback function should return `true` if the element should be
     * included, and `
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that allows you to
     * specify the value of `this` within the `predicate` function. It is used when you want to bind a
     * specific object as the context for the `predicate` function. If `thisArg` is provided, it will be
     * @returns The `filter` method returns an array of key-value pairs `[VertexKey, V | undefined][]`
     * that satisfy the given predicate function.
     */
    filter(predicate, thisArg) {
      const filtered = [];
      let index = 0;
      for (const [key, value] of this) {
        if (predicate.call(thisArg, value, key, index, this)) {
          filtered.push([key, value]);
        }
        index++;
      }
      return filtered;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `map` function iterates over the elements of a collection and applies a callback function to
     * each element, returning an array of the results.
     * @param callback - The callback parameter is a function that will be called for each element in the
     * map. It takes four arguments:
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that allows you to
     * specify the value of `this` within the callback function. If `thisArg` is provided, it will be
     * used as the `this` value when calling the callback function. If `thisArg` is not provided, `
     * @returns The `map` function is returning an array of type `T[]`.
     */
    map(callback, thisArg) {
      const mapped = [];
      let index = 0;
      for (const [key, value] of this) {
        mapped.push(callback.call(thisArg, value, key, index, this));
        index++;
      }
      return mapped;
    }
    *_getIterator() {
      for (const vertex of this._vertexMap.values()) {
        yield [vertex.key, vertex.value];
      }
    }
    _addVertexOnly(newVertex) {
      if (this.hasVertex(newVertex)) {
        return false;
      }
      this._vertexMap.set(newVertex.key, newVertex);
      return true;
    }
    _getVertex(vertexOrKey) {
      const vertexKey = this._getVertexKey(vertexOrKey);
      return this._vertexMap.get(vertexKey) || void 0;
    }
    _getVertexKey(vertexOrKey) {
      return vertexOrKey instanceof AbstractVertex ? vertexOrKey.key : vertexOrKey;
    }
  };

  // src/data-structures/graph/directed-graph.ts
  var DirectedVertex = class extends AbstractVertex {
    /**
     * The constructor function initializes a vertex with an optional value.
     * @param {VertexKey} key - The `key` parameter is of type `VertexKey` and represents the identifier of the vertex. It is
     * used to uniquely identify the vertex within a graph or data structure.
     * @param {V} [value] - The "value" parameter is an optional parameter of type V. It is used to initialize the value of the
     * vertex. If no value is provided, the vertex will be initialized with a default value.
     */
    constructor(key, value) {
      super(key, value);
    }
  };
  var DirectedEdge = class extends AbstractEdge {
    /**
     * The constructor function initializes the source and destination vertexMap of an edge, along with an optional weight
     * and value.
     * @param {VertexKey} src - The `src` parameter is the source vertex ID. It represents the starting point of an edge in
     * a graph.
     * @param {VertexKey} dest - The `dest` parameter represents the destination vertex of an edge. It is of type
     * `VertexKey`, which is likely a unique identifier for a vertex in a graph.
     * @param {number} [weight] - The weight parameter is an optional number that represents the weight of the edge.
     * @param {E} [value] - The `value` parameter is an optional parameter of type `E`. It represents the value associated with
     * the edge.
     */
    constructor(src, dest, weight, value) {
      super(weight, value);
      __publicField(this, "src");
      __publicField(this, "dest");
      this.src = src;
      this.dest = dest;
    }
  };
  var DirectedGraph = class extends AbstractGraph {
    /**
     * The constructor function initializes an instance of a class.
     */
    constructor() {
      super();
      __publicField(this, "_outEdgeMap", /* @__PURE__ */ new Map());
      __publicField(this, "_inEdgeMap", /* @__PURE__ */ new Map());
    }
    get outEdgeMap() {
      return this._outEdgeMap;
    }
    get inEdgeMap() {
      return this._inEdgeMap;
    }
    /**
     * In TypeScript, a subclass inherits the interface implementation of its parent class, without needing to implement the same interface again in the subclass. This behavior differs from Java's approach. In Java, if a parent class implements an interface, the subclass needs to explicitly implement the same interface, even if the parent class has already implemented it.
     * This means that using abstract methods in the parent class cannot constrain the grandchild classes. Defining methods within an interface also cannot constrain the descendant classes. When inheriting from this class, developers need to be aware that this method needs to be overridden.
     */
    /**
     * The function creates a new vertex with an optional value and returns it.
     * @param {VertexKey} key - The `key` parameter is the unique identifier for the vertex. It is of type `VertexKey`, which
     * could be a number or a string depending on how you want to identify your vertexMap.
     * @param [value] - The 'value' parameter is an optional value that can be assigned to the vertex. If a value is provided,
     * it will be assigned to the 'value' property of the vertex. If no value is provided, the 'value' property will be
     * assigned the same value as the 'key' parameter
     * @returns a new instance of a DirectedVertex object, casted as type VO.
     */
    createVertex(key, value) {
      return new DirectedVertex(key, value);
    }
    /**
     * In TypeScript, a subclass inherits the interface implementation of its parent class, without needing to implement the same interface again in the subclass. This behavior differs from Java's approach. In Java, if a parent class implements an interface, the subclass needs to explicitly implement the same interface, even if the parent class has already implemented it.
     * This means that using abstract methods in the parent class cannot constrain the grandchild classes. Defining methods within an interface also cannot constrain the descendant classes. When inheriting from this class, developers need to be aware that this method needs to be overridden.
     */
    /**
     * The function creates a directed edge between two vertexMap with an optional weight and value.
     * @param {VertexKey} src - The source vertex ID of the edge. It represents the starting point of the edge.
     * @param {VertexKey} dest - The `dest` parameter is the identifier of the destination vertex for the edge.
     * @param {number} [weight] - The weight parameter is an optional number that represents the weight of the edge. If no
     * weight is provided, it defaults to 1.
     * @param [value] - The 'value' parameter is an optional value that can be assigned to the edge. It can be of any type and
     * is used to store additional information or data associated with the edge.
     * @returns a new instance of a DirectedEdge object, casted as type EO.
     */
    createEdge(src, dest, weight, value) {
      return new DirectedEdge(src, dest, weight != null ? weight : 1, value);
    }
    /**
     * Time Complexity: O(|V|) where |V| is the number of vertexMap
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(|V|) where |V| is the number of vertexMap
     * Space Complexity: O(1)
     *
     * The `getEdge` function retrieves an edge between two vertexMap based on their source and destination IDs.
     * @param {VO | VertexKey | undefined} srcOrKey - The source vertex or its ID. It can be either a vertex object or a vertex ID.
     * @param {VO | VertexKey | undefined} destOrKey - The `destOrKey` parameter in the `getEdge` function represents the
     * destination vertex of the edge. It can be either a vertex object (`VO`), a vertex ID (`VertexKey`), or `undefined` if the
     * destination is not specified.
     * @returns the first edge found between the source and destination vertexMap, or undefined if no such edge is found.
     */
    getEdge(srcOrKey, destOrKey) {
      let edgeMap = [];
      if (srcOrKey !== void 0 && destOrKey !== void 0) {
        const src = this._getVertex(srcOrKey);
        const dest = this._getVertex(destOrKey);
        if (src && dest) {
          const srcOutEdges = this._outEdgeMap.get(src);
          if (srcOutEdges) {
            edgeMap = srcOutEdges.filter((edge) => edge.dest === dest.key);
          }
        }
      }
      return edgeMap[0] || void 0;
    }
    /**
     * Time Complexity: O(|E|) where |E| is the number of edgeMap
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(|E|) where |E| is the number of edgeMap
     * Space Complexity: O(1)
     *
     * The function removes an edge between two vertexMap in a graph and returns the removed edge.
     * @param {VO | VertexKey} srcOrKey - The source vertex or its ID.
     * @param {VO | VertexKey} destOrKey - The `destOrKey` parameter represents the destination vertex or its ID.
     * @returns the removed edge (EO) if it exists, or undefined if either the source or destination vertex does not exist.
     */
    deleteEdgeSrcToDest(srcOrKey, destOrKey) {
      const src = this._getVertex(srcOrKey);
      const dest = this._getVertex(destOrKey);
      let removed = void 0;
      if (!src || !dest) {
        return void 0;
      }
      const srcOutEdges = this._outEdgeMap.get(src);
      if (srcOutEdges) {
        arrayRemove(srcOutEdges, (edge) => edge.dest === dest.key);
      }
      const destInEdges = this._inEdgeMap.get(dest);
      if (destInEdges) {
        removed = arrayRemove(destInEdges, (edge) => edge.src === src.key)[0] || void 0;
      }
      return removed;
    }
    /**
     * Time Complexity: O(E) where E is the number of edgeMap
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(E) where E is the number of edgeMap
     * Space Complexity: O(1)
     *
     * The `deleteEdge` function removes an edge from a graph and returns the removed edge.
     * @param {EO | VertexKey} edgeOrSrcVertexKey - The `edge` parameter can be either an `EO` object (edge object) or
     * a `VertexKey` (key of a vertex).
     * @param {VertexKey} [destVertexKey] - The `destVertexKey` parameter is an optional parameter that
     * represents the key of the destination vertex of the edge. It is used to specify the destination
     * vertex when the `edge` parameter is a vertex key. If `destVertexKey` is not provided, the function
     * assumes that the `edge`
     * @returns the removed edge (EO) or undefined if no edge was removed.
     */
    deleteEdge(edgeOrSrcVertexKey, destVertexKey) {
      let removed = void 0;
      let src, dest;
      if (this.isVertexKey(edgeOrSrcVertexKey)) {
        if (this.isVertexKey(destVertexKey)) {
          src = this._getVertex(edgeOrSrcVertexKey);
          dest = this._getVertex(destVertexKey);
        } else {
          return;
        }
      } else {
        src = this._getVertex(edgeOrSrcVertexKey.src);
        dest = this._getVertex(edgeOrSrcVertexKey.dest);
      }
      if (src && dest) {
        const srcOutEdges = this._outEdgeMap.get(src);
        if (srcOutEdges && srcOutEdges.length > 0) {
          arrayRemove(srcOutEdges, (edge) => edge.src === src.key && edge.dest === (dest == null ? void 0 : dest.key));
        }
        const destInEdges = this._inEdgeMap.get(dest);
        if (destInEdges && destInEdges.length > 0) {
          removed = arrayRemove(destInEdges, (edge) => edge.src === src.key && edge.dest === dest.key)[0];
        }
      }
      return removed;
    }
    /**
     * Time Complexity: O(1) - Constant time for Map operations.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     */
    /**
     * Time Complexity: O(1) - Constant time for Map operations.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     *
     * The `deleteVertex` function removes a vertex from a graph by its ID or by the vertex object itself.
     * @param {VO | VertexKey} vertexOrKey - The parameter `vertexOrKey` can be either a vertex object (`VO`) or a vertex ID
     * (`VertexKey`).
     * @returns The method is returning a boolean value.
     */
    deleteVertex(vertexOrKey) {
      let vertexKey;
      let vertex;
      if (this.isVertexKey(vertexOrKey)) {
        vertex = this.getVertex(vertexOrKey);
        vertexKey = vertexOrKey;
      } else {
        vertex = vertexOrKey;
        vertexKey = this._getVertexKey(vertexOrKey);
      }
      if (vertex) {
        this._outEdgeMap.delete(vertex);
        this._inEdgeMap.delete(vertex);
      }
      return this._vertexMap.delete(vertexKey);
    }
    /**
     * Time Complexity: O(|E|) where |E| is the number of edgeMap
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(|E|) where |E| is the number of edgeMap
     * Space Complexity: O(1)
     *
     * The function removes edgeMap between two vertexMap and returns the removed edgeMap.
     * @param {VertexKey | VO} v1 - The parameter `v1` can be either a `VertexKey` or a `VO`. A `VertexKey` represents the
     * unique identifier of a vertex in a graph, while `VO` represents the actual vertex object.
     * @param {VertexKey | VO} v2 - The parameter `v2` represents either a `VertexKey` or a `VO` object. It is used to specify
     * the second vertex in the edge that needs to be removed.
     * @returns an array of removed edgeMap (EO[]).
     */
    deleteEdgesBetween(v1, v2) {
      const removed = [];
      if (v1 && v2) {
        const v1ToV2 = this.deleteEdgeSrcToDest(v1, v2);
        const v2ToV1 = this.deleteEdgeSrcToDest(v2, v1);
        v1ToV2 && removed.push(v1ToV2);
        v2ToV1 && removed.push(v2ToV1);
      }
      return removed;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function `incomingEdgesOf` returns an array of incoming edgeMap for a given vertex or vertex ID.
     * @param {VO | VertexKey} vertexOrKey - The parameter `vertexOrKey` can be either a vertex object (`VO`) or a vertex ID
     * (`VertexKey`).
     * @returns The method `incomingEdgesOf` returns an array of edgeMap (`EO[]`).
     */
    incomingEdgesOf(vertexOrKey) {
      const target = this._getVertex(vertexOrKey);
      if (target) {
        return this.inEdgeMap.get(target) || [];
      }
      return [];
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function `outgoingEdgesOf` returns an array of outgoing edgeMap from a given vertex or vertex ID.
     * @param {VO | VertexKey} vertexOrKey - The parameter `vertexOrKey` can accept either a vertex object (`VO`) or a vertex ID
     * (`VertexKey`).
     * @returns The method `outgoingEdgesOf` returns an array of edgeMap (`EO[]`).
     */
    outgoingEdgesOf(vertexOrKey) {
      const target = this._getVertex(vertexOrKey);
      if (target) {
        return this._outEdgeMap.get(target) || [];
      }
      return [];
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function "degreeOf" returns the total degree of a vertex, which is the sum of its out-degree and in-degree.
     * @param {VertexKey | VO} vertexOrKey - The parameter `vertexOrKey` can be either a `VertexKey` or a `VO`.
     * @returns The sum of the out-degree and in-degree of the specified vertex or vertex ID.
     */
    degreeOf(vertexOrKey) {
      return this.outDegreeOf(vertexOrKey) + this.inDegreeOf(vertexOrKey);
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function "inDegreeOf" returns the number of incoming edgeMap for a given vertex.
     * @param {VertexKey | VO} vertexOrKey - The parameter `vertexOrKey` can be either a `VertexKey` or a `VO`.
     * @returns The number of incoming edgeMap of the specified vertex or vertex ID.
     */
    inDegreeOf(vertexOrKey) {
      return this.incomingEdgesOf(vertexOrKey).length;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function `outDegreeOf` returns the number of outgoing edgeMap from a given vertex.
     * @param {VertexKey | VO} vertexOrKey - The parameter `vertexOrKey` can be either a `VertexKey` or a `VO`.
     * @returns The number of outgoing edgeMap from the specified vertex or vertex ID.
     */
    outDegreeOf(vertexOrKey) {
      return this.outgoingEdgesOf(vertexOrKey).length;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function "edgesOf" returns an array of both outgoing and incoming edgeMap of a given vertex or vertex ID.
     * @param {VertexKey | VO} vertexOrKey - The parameter `vertexOrKey` can be either a `VertexKey` or a `VO`.
     * @returns The function `edgesOf` returns an array of edgeMap.
     */
    edgesOf(vertexOrKey) {
      return [...this.outgoingEdgesOf(vertexOrKey), ...this.incomingEdgesOf(vertexOrKey)];
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function "getEdgeSrc" returns the source vertex of an edge, or undefined if the edge does not exist.
     * @param {EO} e - The parameter "e" is of type EO, which represents an edge in a graph.
     * @returns either a vertex object (VO) or undefined.
     */
    getEdgeSrc(e) {
      return this._getVertex(e.src);
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function "getEdgeDest" returns the destination vertex of an edge.
     * @param {EO} e - The parameter "e" is of type "EO", which represents an edge in a graph.
     * @returns either a vertex object of type VO or undefined.
     */
    getEdgeDest(e) {
      return this._getVertex(e.dest);
    }
    /**
     * Time Complexity: O(|E|) where |E| is the number of edgeMap
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(|E|) where |E| is the number of edgeMap
     * Space Complexity: O(1)
     *
     * The function `getDestinations` returns an array of destination vertexMap connected to a given vertex.
     * @param {VO | VertexKey | undefined} vertex - The `vertex` parameter represents the starting vertex from which we want to
     * find the destinations. It can be either a `VO` object, a `VertexKey` value, or `undefined`.
     * @returns an array of vertexMap (VO[]).
     */
    getDestinations(vertex) {
      if (vertex === void 0) {
        return [];
      }
      const destinations = [];
      const outgoingEdges = this.outgoingEdgesOf(vertex);
      for (const outEdge of outgoingEdges) {
        const child = this.getEdgeDest(outEdge);
        if (child) {
          destinations.push(child);
        }
      }
      return destinations;
    }
    /**
     * Time Complexity: O(|V| + |E|) where |V| is the number of vertexMap and |E| is the number of edgeMap
     * Space Complexity: O(|V|)
     */
    /**
     * Time Complexity: O(|V| + |E|) where |V| is the number of vertexMap and |E| is the number of edgeMap
     * Space Complexity: O(|V|)
     *
     * The `topologicalSort` function performs a topological sort on a graph and returns an array of vertexMap or vertex IDs
     * in the sorted order, or undefined if the graph contains a cycle.
     * @param {'vertex' | 'key'} [propertyName] - The `propertyName` parameter is an optional parameter that specifies the
     * property to use for sorting the vertexMap. It can have two possible values: 'vertex' or 'key'. If 'vertex' is
     * specified, the vertexMap themselves will be used for sorting. If 'key' is specified, the ids of
     * @returns an array of vertexMap or vertex IDs in topological order. If there is a cycle in the graph, it returns undefined.
     */
    topologicalSort(propertyName) {
      propertyName = propertyName != null ? propertyName : "key";
      const statusMap = /* @__PURE__ */ new Map();
      for (const entry of this.vertexMap) {
        statusMap.set(entry[1], 0);
      }
      let sorted = [];
      let hasCycle = false;
      const dfs = (cur) => {
        statusMap.set(cur, 1);
        const children = this.getDestinations(cur);
        for (const child of children) {
          const childStatus = statusMap.get(child);
          if (childStatus === 0) {
            dfs(child);
          } else if (childStatus === 1) {
            hasCycle = true;
          }
        }
        statusMap.set(cur, 2);
        sorted.push(cur);
      };
      for (const entry of this.vertexMap) {
        if (statusMap.get(entry[1]) === 0) {
          dfs(entry[1]);
        }
      }
      if (hasCycle)
        return void 0;
      if (propertyName === "key")
        sorted = sorted.map((vertex) => vertex instanceof DirectedVertex ? vertex.key : vertex);
      return sorted.reverse();
    }
    /**
     * Time Complexity: O(|E|) where |E| is the number of edgeMap
     * Space Complexity: O(|E|)
     */
    /**
     * Time Complexity: O(|E|) where |E| is the number of edgeMap
     * Space Complexity: O(|E|)
     *
     * The `edgeSet` function returns an array of all the edgeMap in the graph.
     * @returns The `edgeSet()` method returns an array of edgeMap (`EO[]`).
     */
    edgeSet() {
      let edgeMap = [];
      this._outEdgeMap.forEach((outEdges) => {
        edgeMap = [...edgeMap, ...outEdges];
      });
      return edgeMap;
    }
    /**
     * Time Complexity: O(|E|) where |E| is the number of edgeMap
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(|E|) where |E| is the number of edgeMap
     * Space Complexity: O(1)
     *
     * The function `getNeighbors` returns an array of neighboring vertexMap of a given vertex or vertex ID in a graph.
     * @param {VO | VertexKey} vertexOrKey - The parameter `vertexOrKey` can be either a vertex object (`VO`) or a vertex ID
     * (`VertexKey`).
     * @returns an array of vertexMap (VO[]).
     */
    getNeighbors(vertexOrKey) {
      const neighbors = [];
      const vertex = this._getVertex(vertexOrKey);
      if (vertex) {
        const outEdges = this.outgoingEdgesOf(vertex);
        for (const outEdge of outEdges) {
          const neighbor = this._getVertex(outEdge.dest);
          if (neighbor) {
            neighbors.push(neighbor);
          }
        }
      }
      return neighbors;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function "getEndsOfEdge" returns the source and destination vertexMap of an edge if it exists in the graph,
     * otherwise it returns undefined.
     * @param {EO} edge - The parameter `edge` is of type `EO`, which represents an edge in a graph.
     * @returns The function `getEndsOfEdge` returns an array containing two vertexMap `[VO, VO]` if the edge exists in the
     * graph. If the edge does not exist, it returns `undefined`.
     */
    getEndsOfEdge(edge) {
      if (!this.hasEdge(edge.src, edge.dest)) {
        return void 0;
      }
      const v1 = this._getVertex(edge.src);
      const v2 = this._getVertex(edge.dest);
      if (v1 && v2) {
        return [v1, v2];
      } else {
        return void 0;
      }
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function `_addEdgeOnly` adds an edge to a graph if the source and destination vertexMap exist.
     * @param {EO} edge - The parameter `edge` is of type `EO`, which represents an edge in a graph. It is the edge that
     * needs to be added to the graph.
     * @returns a boolean value. It returns true if the edge was successfully added to the graph, and false if either the
     * source or destination vertex does not exist in the graph.
     */
    _addEdgeOnly(edge) {
      if (!(this.hasVertex(edge.src) && this.hasVertex(edge.dest))) {
        return false;
      }
      const srcVertex = this._getVertex(edge.src);
      const destVertex = this._getVertex(edge.dest);
      if (srcVertex && destVertex) {
        const srcOutEdges = this._outEdgeMap.get(srcVertex);
        if (srcOutEdges) {
          srcOutEdges.push(edge);
        } else {
          this._outEdgeMap.set(srcVertex, [edge]);
        }
        const destInEdges = this._inEdgeMap.get(destVertex);
        if (destInEdges) {
          destInEdges.push(edge);
        } else {
          this._inEdgeMap.set(destVertex, [edge]);
        }
        return true;
      } else {
        return false;
      }
    }
  };

  // src/data-structures/graph/undirected-graph.ts
  var UndirectedVertex = class extends AbstractVertex {
    /**
     * The constructor function initializes a vertex with an optional value.
     * @param {VertexKey} key - The `key` parameter is of type `VertexKey` and represents the identifier of the vertex. It is
     * used to uniquely identify the vertex within a graph or network.
     * @param {V} [value] - The "value" parameter is an optional parameter of type V. It is used to initialize the value of the
     * vertex. If no value is provided, the vertex will be initialized with a default value.
     */
    constructor(key, value) {
      super(key, value);
    }
  };
  var UndirectedEdge = class extends AbstractEdge {
    /**
     * The constructor function creates an instance of a class with two vertex IDs, an optional weight, and an optional
     * value.
     * @param {VertexKey} v1 - The first vertex ID of the edge.
     * @param {VertexKey} v2 - The parameter `v2` is a `VertexKey`, which represents the identifier of the second vertex in a
     * graph edge.
     * @param {number} [weight] - The weight parameter is an optional number that represents the weight of the edge.
     * @param {E} [value] - The "value" parameter is an optional parameter of type E. It is used to store a value associated
     * with the edge.
     */
    constructor(v1, v2, weight, value) {
      super(weight, value);
      __publicField(this, "vertexMap");
      this.vertexMap = [v1, v2];
    }
  };
  var UndirectedGraph = class extends AbstractGraph {
    /**
     * The constructor initializes a new Map object to store edgeMap.
     */
    constructor() {
      super();
      __publicField(this, "_edgeMap");
      this._edgeMap = /* @__PURE__ */ new Map();
    }
    get edgeMap() {
      return this._edgeMap;
    }
    /**
     * The function creates a new vertex with an optional value and returns it.
     * @param {VertexKey} key - The `key` parameter is the unique identifier for the vertex. It is used to distinguish one
     * vertex from another in the graph.
     * @param [value] - The `value` parameter is an optional value that can be assigned to the vertex. If a value is provided,
     * it will be used as the value of the vertex. If no value is provided, the `key` parameter will be used as the value of
     * the vertex.
     * @returns The method is returning a new instance of the `UndirectedVertex` class, casted as type `VO`.
     */
    createVertex(key, value) {
      return new UndirectedVertex(key, value != null ? value : key);
    }
    /**
     * The function creates an undirected edge between two vertexMap with an optional weight and value.
     * @param {VertexKey} v1 - The parameter `v1` represents the first vertex of the edge.
     * @param {VertexKey} v2 - The parameter `v2` represents the second vertex of the edge.
     * @param {number} [weight] - The `weight` parameter is an optional number that represents the weight of the edge. If
     * no weight is provided, it defaults to 1.
     * @param [value] - The `value` parameter is an optional value that can be assigned to the edge. It can be of any type and
     * is used to store additional information or data associated with the edge.
     * @returns a new instance of the `UndirectedEdge` class, which is casted as type `EO`.
     */
    createEdge(v1, v2, weight, value) {
      return new UndirectedEdge(v1, v2, weight != null ? weight : 1, value);
    }
    /**
     * Time Complexity: O(|E|), where |E| is the number of edgeMap incident to the given vertex.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(|E|), where |E| is the number of edgeMap incident to the given vertex.
     * Space Complexity: O(1)
     *
     * The function `getEdge` returns the first edge that connects two vertexMap, or undefined if no such edge exists.
     * @param {VO | VertexKey | undefined} v1 - The parameter `v1` represents a vertex or vertex ID. It can be of type `VO` (vertex
     * object), `undefined`, or `VertexKey` (a string or number representing the ID of a vertex).
     * @param {VO | VertexKey | undefined} v2 - The parameter `v2` represents a vertex or vertex ID. It can be of type `VO` (vertex
     * object), `undefined`, or `VertexKey` (vertex ID).
     * @returns an edge (EO) or undefined.
     */
    getEdge(v1, v2) {
      var _a;
      let edgeMap = [];
      if (v1 !== void 0 && v2 !== void 0) {
        const vertex1 = this._getVertex(v1);
        const vertex2 = this._getVertex(v2);
        if (vertex1 && vertex2) {
          edgeMap = (_a = this._edgeMap.get(vertex1)) == null ? void 0 : _a.filter((e) => e.vertexMap.includes(vertex2.key));
        }
      }
      return edgeMap ? edgeMap[0] || void 0 : void 0;
    }
    /**
     * Time Complexity: O(|E|), where |E| is the number of edgeMap incident to the given vertex.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(|E|), where |E| is the number of edgeMap incident to the given vertex.
     * Space Complexity: O(1)
     *
     * The function removes an edge between two vertexMap in a graph and returns the removed edge.
     * @param {VO | VertexKey} v1 - The parameter `v1` represents either a vertex object (`VO`) or a vertex ID (`VertexKey`).
     * @param {VO | VertexKey} v2 - VO | VertexKey - This parameter can be either a vertex object (VO) or a vertex ID
     * (VertexKey). It represents the second vertex of the edge that needs to be removed.
     * @returns the removed edge (EO) if it exists, or undefined if either of the vertexMap (VO) does not exist.
     */
    deleteEdgeBetween(v1, v2) {
      const vertex1 = this._getVertex(v1);
      const vertex2 = this._getVertex(v2);
      if (!vertex1 || !vertex2) {
        return void 0;
      }
      const v1Edges = this._edgeMap.get(vertex1);
      let removed = void 0;
      if (v1Edges) {
        removed = arrayRemove(v1Edges, (e) => e.vertexMap.includes(vertex2.key))[0] || void 0;
      }
      const v2Edges = this._edgeMap.get(vertex2);
      if (v2Edges) {
        arrayRemove(v2Edges, (e) => e.vertexMap.includes(vertex1.key));
      }
      return removed;
    }
    /**
     * Time Complexity: O(E), where E is the number of edgeMap incident to the given vertex.
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(E), where E is the number of edgeMap incident to the given vertex.
     * Space Complexity: O(1)
     *
     * The function `deleteEdge` deletes an edge between two vertexMap in a graph.
     * @param {EO | VertexKey} edgeOrOneSideVertexKey - The parameter `edgeOrOneSideVertexKey` can be
     * either an edge object or a vertex key.
     * @param {VertexKey} [otherSideVertexKey] - The parameter `otherSideVertexKey` is an optional
     * parameter that represents the key of the vertex on the other side of the edge. It is used when the
     * `edgeOrOneSideVertexKey` parameter is a vertex key, and it specifies the key of the vertex on the
     * other side of the
     * @returns The `deleteEdge` function returns either the deleted edge object (EO) or `undefined`.
     */
    deleteEdge(edgeOrOneSideVertexKey, otherSideVertexKey) {
      let oneSide, otherSide;
      if (this.isVertexKey(edgeOrOneSideVertexKey)) {
        if (this.isVertexKey(otherSideVertexKey)) {
          oneSide = this._getVertex(edgeOrOneSideVertexKey);
          otherSide = this._getVertex(otherSideVertexKey);
        } else {
          return;
        }
      } else {
        oneSide = this._getVertex(edgeOrOneSideVertexKey.vertexMap[0]);
        otherSide = this._getVertex(edgeOrOneSideVertexKey.vertexMap[1]);
      }
      if (oneSide && otherSide) {
        return this.deleteEdgeBetween(oneSide, otherSide);
      } else {
        return;
      }
    }
    /**
     * Time Complexity: O(1) - Constant time for Map operations.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     */
    /**
     * Time Complexity: O(1) - Constant time for Map operations.
     * Space Complexity: O(1) - Constant space, as it creates only a few variables.
     *
     * The `deleteVertex` function removes a vertex from a graph by its ID or by the vertex object itself.
     * @param {VO | VertexKey} vertexOrKey - The parameter `vertexOrKey` can be either a vertex object (`VO`) or a vertex ID
     * (`VertexKey`).
     * @returns The method is returning a boolean value.
     */
    deleteVertex(vertexOrKey) {
      let vertexKey;
      let vertex;
      if (this.isVertexKey(vertexOrKey)) {
        vertex = this.getVertex(vertexOrKey);
        vertexKey = vertexOrKey;
      } else {
        vertex = vertexOrKey;
        vertexKey = this._getVertexKey(vertexOrKey);
      }
      const neighbors = this.getNeighbors(vertexOrKey);
      if (vertex) {
        neighbors.forEach((neighbor) => {
          const neighborEdges = this._edgeMap.get(neighbor);
          if (neighborEdges) {
            const restEdges = neighborEdges.filter((edge) => {
              return !edge.vertexMap.includes(vertexKey);
            });
            this._edgeMap.set(neighbor, restEdges);
          }
        });
        this._edgeMap.delete(vertex);
      }
      return this._vertexMap.delete(vertexKey);
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function `degreeOf` returns the degree of a vertex in a graph, which is the number of edgeMap connected to that
     * vertex.
     * @param {VertexKey | VO} vertexOrKey - The parameter `vertexOrKey` can be either a `VertexKey` or a `VO`.
     * @returns The function `degreeOf` returns the degree of a vertex in a graph. The degree of a vertex is the number of
     * edgeMap connected to that vertex.
     */
    degreeOf(vertexOrKey) {
      var _a;
      const vertex = this._getVertex(vertexOrKey);
      if (vertex) {
        return ((_a = this._edgeMap.get(vertex)) == null ? void 0 : _a.length) || 0;
      } else {
        return 0;
      }
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function returns the edgeMap of a given vertex or vertex ID.
     * @param {VertexKey | VO} vertexOrKey - The parameter `vertexOrKey` can be either a `VertexKey` or a `VO`. A `VertexKey` is a
     * unique identifier for a vertex in a graph, while `VO` represents the type of the vertex.
     * @returns an array of edgeMap.
     */
    edgesOf(vertexOrKey) {
      const vertex = this._getVertex(vertexOrKey);
      if (vertex) {
        return this._edgeMap.get(vertex) || [];
      } else {
        return [];
      }
    }
    /**
     * Time Complexity: O(|V| + |E|), where |V| is the number of vertexMap and |E| is the number of edgeMap.
     * Space Complexity: O(|E|)
     */
    /**
     * Time Complexity: O(|V| + |E|), where |V| is the number of vertexMap and |E| is the number of edgeMap.
     * Space Complexity: O(|E|)
     *
     * The function "edgeSet" returns an array of unique edgeMap from a set of edgeMap.
     * @returns The method `edgeSet()` returns an array of type `EO[]`.
     */
    edgeSet() {
      const edgeSet = /* @__PURE__ */ new Set();
      this._edgeMap.forEach((edgeMap) => {
        edgeMap.forEach((edge) => {
          edgeSet.add(edge);
        });
      });
      return [...edgeSet];
    }
    /**
     * Time Complexity: O(|V| + |E|), where |V| is the number of vertexMap and |E| is the number of edgeMap.
     * Space Complexity: O(|E|)
     */
    /**
     * Time Complexity: O(|V| + |E|), where |V| is the number of vertexMap and |E| is the number of edgeMap.
     * Space Complexity: O(|E|)
     *
     * The function "getNeighbors" returns an array of neighboring vertexMap for a given vertex or vertex ID.
     * @param {VO | VertexKey} vertexOrKey - The parameter `vertexOrKey` can be either a vertex object (`VO`) or a vertex ID
     * (`VertexKey`).
     * @returns an array of vertexMap (VO[]).
     */
    getNeighbors(vertexOrKey) {
      const neighbors = [];
      const vertex = this._getVertex(vertexOrKey);
      if (vertex) {
        const neighborEdges = this.edgesOf(vertex);
        for (const edge of neighborEdges) {
          const neighbor = this._getVertex(edge.vertexMap.filter((e) => e !== vertex.key)[0]);
          if (neighbor) {
            neighbors.push(neighbor);
          }
        }
      }
      return neighbors;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function "getEndsOfEdge" returns the vertexMap at the ends of an edge if the edge exists in the graph, otherwise
     * it returns undefined.
     * @param {EO} edge - The parameter "edge" is of type EO, which represents an edge in a graph.
     * @returns The function `getEndsOfEdge` returns an array containing two vertexMap `[VO, VO]` if the edge exists in the
     * graph. If the edge does not exist, it returns `undefined`.
     */
    getEndsOfEdge(edge) {
      if (!this.hasEdge(edge.vertexMap[0], edge.vertexMap[1])) {
        return void 0;
      }
      const v1 = this._getVertex(edge.vertexMap[0]);
      const v2 = this._getVertex(edge.vertexMap[1]);
      if (v1 && v2) {
        return [v1, v2];
      } else {
        return void 0;
      }
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function adds an edge to the graph by updating the adjacency list with the vertexMap of the edge.
     * @param {EO} edge - The parameter "edge" is of type EO, which represents an edge in a graph.
     * @returns a boolean value.
     */
    _addEdgeOnly(edge) {
      for (const end of edge.vertexMap) {
        const endVertex = this._getVertex(end);
        if (endVertex === void 0)
          return false;
        if (endVertex) {
          const edgeMap = this._edgeMap.get(endVertex);
          if (edgeMap) {
            edgeMap.push(edge);
          } else {
            this._edgeMap.set(endVertex, [edge]);
          }
        }
      }
      return true;
    }
  };

  // src/data-structures/graph/map-graph.ts
  var MapVertex = class extends DirectedVertex {
    /**
     * The constructor function initializes an object with an key, latitude, longitude, and an optional value.
     * @param {VertexKey} key - The `key` parameter is of type `VertexKey` and represents the identifier of the vertex.
     * @param {number} lat - The "lat" parameter represents the latitude of a vertex. Latitude is a geographic coordinate
     * that specifies the north-south position of a point on the Earth's surface. It is measured in degrees, with positive
     * values representing points north of the equator and negative values representing points south of the equator.
     * @param {number} long - The "long" parameter represents the longitude of a location. Longitude is a geographic
     * coordinate that specifies the east-west position of a point on the Earth's surface. It is measured in degrees, with
     * values ranging from -180 to 180.
     * @param {V} [value] - The "value" parameter is an optional value of type V. It is not required to be provided when
     * creating an instance of the class.
     */
    constructor(key, value, lat, long) {
      super(key, value);
      __publicField(this, "lat");
      __publicField(this, "long");
      this.lat = lat;
      this.long = long;
    }
  };
  var MapEdge = class extends DirectedEdge {
    /**
     * The constructor function initializes a new instance of a class with the given source, destination, weight, and
     * value.
     * @param {VertexKey} src - The `src` parameter is the source vertex ID. It represents the starting point of an edge in
     * a graph.
     * @param {VertexKey} dest - The `dest` parameter is the identifier of the destination vertex for an edge.
     * @param {number} [weight] - The weight parameter is an optional number that represents the weight of the edge.
     * @param {E} [value] - The "value" parameter is an optional parameter of type E. It is used to store additional
     * information or data associated with the edge.
     */
    constructor(src, dest, weight, value) {
      super(src, dest, weight, value);
    }
  };
  var MapGraph = class extends DirectedGraph {
    /**
     * The constructor function initializes the originCoord and bottomRight properties of a MapGraphCoordinate object.
     * @param {MapGraphCoordinate} originCoord - The `originCoord` parameter is a `MapGraphCoordinate` object that represents the
     * starting point or reference point of the map graph. It defines the coordinates of the top-left corner of the map
     * graph.
     * @param {MapGraphCoordinate} [bottomRight] - The `bottomRight` parameter is an optional parameter of type
     * `MapGraphCoordinate`. It represents the bottom right coordinate of a map graph. If this parameter is not provided,
     * it will default to `undefined`.
     */
    constructor(originCoord, bottomRight) {
      super();
      __publicField(this, "_originCoord", [0, 0]);
      __publicField(this, "_bottomRight");
      this._originCoord = originCoord;
      this._bottomRight = bottomRight;
    }
    get originCoord() {
      return this._originCoord;
    }
    get bottomRight() {
      return this._bottomRight;
    }
    /**
     * The function creates a new vertex with the given key, value, latitude, and longitude.
     * @param {VertexKey} key - The key parameter is the unique identifier for the vertex. It is of type VertexKey, which could
     * be a string or a number depending on how you define it in your code.
     * @param [value] - The `value` parameter is an optional value that can be assigned to the `value` property of the vertex. It
     * is of type `V`, which means it should be of the same type as the `value` property of the vertex class `VO`.
     * @param {number} lat - The `lat` parameter represents the latitude of the vertex. It is a number that specifies the
     * position of the vertex on the Earth's surface in the north-south direction.
     * @param {number} long - The `long` parameter represents the longitude coordinate of the vertex.
     * @returns The method is returning a new instance of the `MapVertex` class, casted as type `VO`.
     */
    createVertex(key, value, lat = this.originCoord[0], long = this.originCoord[1]) {
      return new MapVertex(key, value, lat, long);
    }
    /**
     * The function creates a new instance of a MapEdge with the given source, destination, weight, and value.
     * @param {VertexKey} src - The source vertex ID of the edge. It represents the starting point of the edge.
     * @param {VertexKey} dest - The `dest` parameter is the identifier of the destination vertex for the edge being
     * created.
     * @param {number} [weight] - The `weight` parameter is an optional number that represents the weight of the edge. It
     * is used to assign a numerical value to the edge, which can be used in algorithms such as shortest path algorithms.
     * If the weight is not provided, it can be set to a default value or left undefined.
     * @param [value] - The `value` parameter is an optional value that can be assigned to the edge. It can be of any type,
     * depending on the specific implementation of the `MapEdge` class.
     * @returns a new instance of the `MapEdge` class, cast as type `EO`.
     */
    createEdge(src, dest, weight, value) {
      return new MapEdge(src, dest, weight, value);
    }
  };

  // src/types/data-structures/binary-tree/rb-tree.ts
  var RBTNColor = /* @__PURE__ */ ((RBTNColor2) => {
    RBTNColor2[RBTNColor2["RED"] = 1] = "RED";
    RBTNColor2[RBTNColor2["BLACK"] = 0] = "BLACK";
    return RBTNColor2;
  })(RBTNColor || {});

  // src/types/common.ts
  var BSTVariant = /* @__PURE__ */ ((BSTVariant2) => {
    BSTVariant2["MIN"] = "MIN";
    BSTVariant2["MAX"] = "MAX";
    return BSTVariant2;
  })(BSTVariant || {});
  var CP = /* @__PURE__ */ ((CP2) => {
    CP2["lt"] = "lt";
    CP2["eq"] = "eq";
    CP2["gt"] = "gt";
    return CP2;
  })(CP || {});
  var IterationType = /* @__PURE__ */ ((IterationType3) => {
    IterationType3["ITERATIVE"] = "ITERATIVE";
    IterationType3["RECURSIVE"] = "RECURSIVE";
    return IterationType3;
  })(IterationType || {});
  var FamilyPosition = /* @__PURE__ */ ((FamilyPosition2) => {
    FamilyPosition2["ROOT"] = "ROOT";
    FamilyPosition2["LEFT"] = "LEFT";
    FamilyPosition2["RIGHT"] = "RIGHT";
    FamilyPosition2["ROOT_LEFT"] = "ROOT_LEFT";
    FamilyPosition2["ROOT_RIGHT"] = "ROOT_RIGHT";
    FamilyPosition2["ISOLATED"] = "ISOLATED";
    FamilyPosition2["MAL_NODE"] = "MAL_NODE";
    return FamilyPosition2;
  })(FamilyPosition || {});

  // src/data-structures/binary-tree/binary-tree.ts
  var BinaryTreeNode = class {
    constructor(key, value) {
      __publicField(this, "key");
      __publicField(this, "value");
      __publicField(this, "parent");
      __publicField(this, "_left");
      __publicField(this, "_right");
      this.key = key;
      this.value = value;
    }
    get left() {
      return this._left;
    }
    set left(v) {
      if (v) {
        v.parent = this;
      }
      this._left = v;
    }
    get right() {
      return this._right;
    }
    set right(v) {
      if (v) {
        v.parent = this;
      }
      this._right = v;
    }
    /**
     * Get the position of the node within its family.
     * @returns {FamilyPosition} - The family position of the node.
     */
    get familyPosition() {
      const that = this;
      if (!this.parent) {
        return this.left || this.right ? "ROOT" /* ROOT */ : "ISOLATED" /* ISOLATED */;
      }
      if (this.parent.left === that) {
        return this.left || this.right ? "ROOT_LEFT" /* ROOT_LEFT */ : "LEFT" /* LEFT */;
      } else if (this.parent.right === that) {
        return this.left || this.right ? "ROOT_RIGHT" /* ROOT_RIGHT */ : "RIGHT" /* RIGHT */;
      }
      return "MAL_NODE" /* MAL_NODE */;
    }
  };
  var BinaryTree = class _BinaryTree extends IterableEntryBase {
    /**
     * The constructor function initializes a binary tree object with optional elements and options.
     * @param [elements] - An optional iterable of BTNExemplar objects. These objects represent the
     * elements to be added to the binary tree.
     * @param [options] - The `options` parameter is an optional object that can contain additional
     * configuration options for the binary tree. In this case, it is of type
     * `Partial<BinaryTreeOptions>`, which means that not all properties of `BinaryTreeOptions` are
     * required.
     */
    constructor(elements, options) {
      super();
      __publicField(this, "iterationType", "ITERATIVE" /* ITERATIVE */);
      __publicField(this, "_extractor", (key) => Number(key));
      __publicField(this, "_root");
      __publicField(this, "_size");
      __publicField(this, "_defaultOneParamCallback", (node) => node.key);
      if (options) {
        const { iterationType, extractor } = options;
        if (iterationType) {
          this.iterationType = iterationType;
        }
        if (extractor) {
          this._extractor = extractor;
        }
      }
      this._size = 0;
      if (elements)
        this.addMany(elements);
    }
    get extractor() {
      return this._extractor;
    }
    get root() {
      return this._root;
    }
    get size() {
      return this._size;
    }
    /**
     * Creates a new instance of BinaryTreeNode with the given key and value.
     * @param {K} key - The key for the new node.
     * @param {V} value - The value for the new node.
     * @returns {N} - The newly created BinaryTreeNode.
     */
    createNode(key, value) {
      return new BinaryTreeNode(key, value);
    }
    /**
     * The function creates a binary tree with the given options.
     * @param [options] - The `options` parameter is an optional object that allows you to customize the
     * behavior of the `BinaryTree` class. It is of type `Partial<BinaryTreeOptions>`, which means that
     * you can provide only a subset of the properties defined in the `BinaryTreeOptions` interface.
     * @returns a new instance of a binary tree.
     */
    createTree(options) {
      return new _BinaryTree([], __spreadValues({ iterationType: this.iterationType }, options));
    }
    /**
     * The function "isNode" checks if an exemplar is an instance of the BinaryTreeNode class.
     * @param exemplar - The `exemplar` parameter is a variable of type `BTNExemplar<K, V,N>`.
     * @returns a boolean value indicating whether the exemplar is an instance of the class N.
     */
    isNode(exemplar) {
      return exemplar instanceof BinaryTreeNode;
    }
    /**
     * The function `exemplarToNode` converts an exemplar object into a node object.
     * @param exemplar - The `exemplar` parameter is of type `BTNExemplar<K, V, N>`.
     * @param {V} [value] - The `value` parameter is an optional value that can be passed to the
     * `exemplarToNode` function. It represents the value associated with the exemplar node. If no value
     * is provided, it will be `undefined`.
     * @returns a value of type N (node), or null, or undefined.
     */
    exemplarToNode(exemplar, value) {
      if (exemplar === void 0)
        return;
      let node;
      if (exemplar === null) {
        node = null;
      } else if (this.isEntry(exemplar)) {
        const [key, value2] = exemplar;
        if (key === void 0) {
          return;
        } else if (key === null) {
          node = null;
        } else {
          node = this.createNode(key, value2);
        }
      } else if (this.isNode(exemplar)) {
        node = exemplar;
      } else if (this.isNotNodeInstance(exemplar)) {
        node = this.createNode(exemplar, value);
      } else {
        return;
      }
      return node;
    }
    /**
     * The function checks if a given value is an entry in a binary tree node.
     * @param kne - BTNExemplar<K, V,N> - A generic type representing a node in a binary tree. It has
     * two type parameters V and N, representing the value and node type respectively.
     * @returns a boolean value.
     */
    isEntry(kne) {
      return Array.isArray(kne) && kne.length === 2;
    }
    /**
     * Time Complexity O(log n) - O(n)
     * Space Complexity O(1)
     */
    /**
     * Time Complexity O(log n) - O(n)
     * Space Complexity O(1)
     *
     * The `add` function adds a new node to a binary tree, either by creating a new node or replacing an
     * existing node with the same key.
     * @param keyOrNodeOrEntry - The `keyOrNodeOrEntry` parameter can be one of the following:
     * @param {V} [value] - The value to be inserted into the binary tree.
     * @returns The function `add` returns either a node (`N`), `null`, or `undefined`.
     */
    add(keyOrNodeOrEntry, value) {
      const newNode = this.exemplarToNode(keyOrNodeOrEntry, value);
      if (newNode === void 0)
        return;
      if (!this.root) {
        this._root = newNode;
        this._size = 1;
        return newNode;
      }
      const queue = new Queue([this.root]);
      let potentialParent;
      while (queue.size > 0) {
        const cur = queue.shift();
        if (!cur)
          continue;
        if (newNode !== null && cur.key === newNode.key) {
          this._replaceNode(cur, newNode);
          return newNode;
        }
        if (potentialParent === void 0 && (cur.left === void 0 || cur.right === void 0)) {
          potentialParent = cur;
        }
        if (cur.left !== null) {
          cur.left && queue.push(cur.left);
        }
        if (cur.right !== null) {
          cur.right && queue.push(cur.right);
        }
      }
      if (potentialParent) {
        if (potentialParent.left === void 0) {
          potentialParent.left = newNode;
        } else if (potentialParent.right === void 0) {
          potentialParent.right = newNode;
        }
        this._size++;
        return newNode;
      }
      return void 0;
    }
    /**
     * Time Complexity: O(k log n) - O(k * n)
     * Space Complexity: O(1)
     * Comments: The time complexity for adding a node depends on the depth of the tree. In the best case (when the tree is empty), it's O(1). In the worst case (when the tree is a degenerate tree), it's O(n). The space complexity is constant.
     */
    /**
     * Time Complexity: O(k log n) - O(k * n)
     * Space Complexity: O(1)
     *
     * The `addMany` function takes in a collection of nodes and an optional collection of values, and
     * adds each node with its corresponding value to the data structure.
     * @param nodes - An iterable collection of BTNExemplar objects.
     * @param [values] - An optional iterable of values that will be assigned to each node being added.
     * @returns The function `addMany` returns an array of `N`, `null`, or `undefined` values.
     */
    addMany(nodes, values) {
      const inserted = [];
      let valuesIterator;
      if (values) {
        valuesIterator = values[Symbol.iterator]();
      }
      for (const kne of nodes) {
        let value = void 0;
        if (valuesIterator) {
          const valueResult = valuesIterator.next();
          if (!valueResult.done) {
            value = valueResult.value;
          }
        }
        inserted.push(this.add(kne, value));
      }
      return inserted;
    }
    /**
     * Time Complexity: O(k * n)  "n" is the number of nodes in the tree, and "k" is the number of keys to be inserted.
     * Space Complexity: O(1)
     */
    refill(nodesOrKeysOrEntries, values) {
      this.clear();
      this.addMany(nodesOrKeysOrEntries, values);
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The function deletes a node from a binary tree and returns an array of the deleted nodes along
     * with the nodes that need to be balanced.
     * @param {ReturnType<C> | null | undefined} identifier - The identifier parameter is the value or
     * object that you want to delete from the binary tree. It can be of any type that is compatible with
     * the callback function's return type. It can also be null or undefined if you want to delete a
     * specific node based on its value or object.
     * @param {C} callback - The `callback` parameter is a function that is used to determine the
     * identifier of the node to be deleted. It is optional and has a default value of
     * `this._defaultOneParamCallback`. The `callback` function should return the identifier of the node.
     * @returns an array of `BinaryTreeDeleteResult<N>`.
     */
    delete(identifier, callback = this._defaultOneParamCallback) {
      const deletedResult = [];
      if (!this.root)
        return deletedResult;
      if ((!callback || callback === this._defaultOneParamCallback) && identifier instanceof BinaryTreeNode)
        callback = (node) => node;
      const curr = this.getNode(identifier, callback);
      if (!curr)
        return deletedResult;
      const parent = (curr == null ? void 0 : curr.parent) ? curr.parent : null;
      let needBalanced = void 0;
      let orgCurrent = curr;
      if (!curr.left) {
        if (!parent) {
          this._setRoot(null);
        } else {
          const { familyPosition: fp } = curr;
          if (fp === "LEFT" /* LEFT */ || fp === "ROOT_LEFT" /* ROOT_LEFT */) {
            parent.left = curr.right;
          } else if (fp === "RIGHT" /* RIGHT */ || fp === "ROOT_RIGHT" /* ROOT_RIGHT */) {
            parent.right = curr.right;
          }
          needBalanced = parent;
        }
      } else {
        if (curr.left) {
          const leftSubTreeRightMost = this.getRightMost(curr.left);
          if (leftSubTreeRightMost) {
            const parentOfLeftSubTreeMax = leftSubTreeRightMost.parent;
            orgCurrent = this._swapProperties(curr, leftSubTreeRightMost);
            if (parentOfLeftSubTreeMax) {
              if (parentOfLeftSubTreeMax.right === leftSubTreeRightMost)
                parentOfLeftSubTreeMax.right = leftSubTreeRightMost.left;
              else
                parentOfLeftSubTreeMax.left = leftSubTreeRightMost.left;
              needBalanced = parentOfLeftSubTreeMax;
            }
          }
        }
      }
      this._size = this.size - 1;
      deletedResult.push({ deleted: orgCurrent, needBalanced });
      return deletedResult;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The function calculates the depth of a given node in a binary tree.
     * @param {K | N | null | undefined} distNode - The `distNode` parameter represents the node in
     * the binary tree whose depth we want to find. It can be of type `K`, `N`, `null`, or
     * `undefined`.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter is the starting node
     * from which we want to calculate the depth. It can be either a `K` (binary tree node key) or
     * `N` (binary tree node) or `null` or `undefined`. If no value is provided for `beginRoot
     * @returns the depth of the `distNode` relative to the `beginRoot`.
     */
    getDepth(distNode, beginRoot = this.root) {
      distNode = this.ensureNode(distNode);
      beginRoot = this.ensureNode(beginRoot);
      let depth = 0;
      while (distNode == null ? void 0 : distNode.parent) {
        if (distNode === beginRoot) {
          return depth;
        }
        depth++;
        distNode = distNode.parent;
      }
      return depth;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n)
     *
     * The function `getHeight` calculates the maximum height of a binary tree using either recursive or
     * iterative traversal.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter represents the
     * starting node of the binary tree from which we want to calculate the height. It can be of type
     * `K`, `N`, `null`, or `undefined`. If not provided, it defaults to `this.root`.
     * @param iterationType - The `iterationType` parameter is used to determine whether to calculate the
     * height of the tree using a recursive approach or an iterative approach. It can have two possible
     * values:
     * @returns the height of the binary tree.
     */
    getHeight(beginRoot = this.root, iterationType = this.iterationType) {
      beginRoot = this.ensureNode(beginRoot);
      if (!beginRoot)
        return -1;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _getMaxHeight = (cur) => {
          if (!cur)
            return -1;
          const leftHeight = _getMaxHeight(cur.left);
          const rightHeight = _getMaxHeight(cur.right);
          return Math.max(leftHeight, rightHeight) + 1;
        };
        return _getMaxHeight(beginRoot);
      } else {
        const stack = [{ node: beginRoot, depth: 0 }];
        let maxHeight = 0;
        while (stack.length > 0) {
          const { node, depth } = stack.pop();
          if (node.left)
            stack.push({ node: node.left, depth: depth + 1 });
          if (node.right)
            stack.push({ node: node.right, depth: depth + 1 });
          maxHeight = Math.max(maxHeight, depth);
        }
        return maxHeight;
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n)
     * Best Case - O(log n) (when using recursive iterationType), Worst Case - O(n) (when using iterative iterationType)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n)
     *
     * The `getMinHeight` function calculates the minimum height of a binary tree using either a
     * recursive or iterative approach.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter represents the
     * starting node of the binary tree from which we want to calculate the minimum height. It can be of
     * type `K`, `N`, `null`, or `undefined`. If no value is provided, it defaults to `this.root`.
     * @param iterationType - The `iterationType` parameter is used to determine the method of iteration
     * to calculate the minimum height of a binary tree. It can have two possible values:
     * @returns The function `getMinHeight` returns the minimum height of a binary tree.
     */
    getMinHeight(beginRoot = this.root, iterationType = this.iterationType) {
      var _a, _b, _c;
      beginRoot = this.ensureNode(beginRoot);
      if (!beginRoot)
        return -1;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _getMinHeight = (cur) => {
          if (!cur)
            return 0;
          if (!cur.left && !cur.right)
            return 0;
          const leftMinHeight = _getMinHeight(cur.left);
          const rightMinHeight = _getMinHeight(cur.right);
          return Math.min(leftMinHeight, rightMinHeight) + 1;
        };
        return _getMinHeight(beginRoot);
      } else {
        const stack = [];
        let node = beginRoot, last = null;
        const depths = /* @__PURE__ */ new Map();
        while (stack.length > 0 || node) {
          if (node) {
            stack.push(node);
            node = node.left;
          } else {
            node = stack[stack.length - 1];
            if (!node.right || last === node.right) {
              node = stack.pop();
              if (node) {
                const leftMinHeight = node.left ? (_a = depths.get(node.left)) != null ? _a : -1 : -1;
                const rightMinHeight = node.right ? (_b = depths.get(node.right)) != null ? _b : -1 : -1;
                depths.set(node, 1 + Math.min(leftMinHeight, rightMinHeight));
                last = node;
                node = null;
              }
            } else
              node = node.right;
          }
        }
        return (_c = depths.get(beginRoot)) != null ? _c : -1;
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n)
     * Best Case - O(log n) (when using recursive iterationType), Worst Case - O(n) (when using iterative iterationType)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n)
     *
     * The function checks if a binary tree is perfectly balanced by comparing the minimum height and the
     * height of the tree.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter is the starting point
     * for calculating the height and minimum height of a binary tree. It can be either a `K` (a key
     * value of a binary tree node), `N` (a node of a binary tree), `null`, or `undefined`. If
     * @returns a boolean value.
     */
    isPerfectlyBalanced(beginRoot = this.root) {
      return this.getMinHeight(beginRoot) + 1 >= this.getHeight(beginRoot);
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n).
     *
     * The function `getNodes` retrieves nodes from a binary tree based on a given identifier and
     * callback function.
     * @param {ReturnType<C> | null | undefined} identifier - The `identifier` parameter is the value
     * that you want to search for in the binary tree. It can be of any type that is returned by the
     * callback function `C`. It can also be `null` or `undefined` if you don't want to search for a
     * specific value.
     * @param {C} callback - The `callback` parameter is a function that takes a node of type `N` as
     * input and returns a value of type `C`. It is used to determine if a node matches the given
     * identifier. If no callback is provided, the `_defaultOneParamCallback` function is used as the
     * default
     * @param [onlyOne=false] - A boolean value indicating whether to only return the first node that
     * matches the identifier. If set to true, the function will stop iterating once it finds a matching
     * node and return that node. If set to false (default), the function will continue iterating and
     * return all nodes that match the identifier.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter represents the
     * starting node for the traversal. It can be either a key, a node object, or `null`/`undefined`. If
     * it is `null` or `undefined`, an empty array will be returned.
     * @param iterationType - The `iterationType` parameter determines the type of iteration used to
     * traverse the binary tree. It can have two possible values:
     * @returns an array of nodes of type `N`.
     */
    getNodes(identifier, callback = this._defaultOneParamCallback, onlyOne = false, beginRoot = this.root, iterationType = this.iterationType) {
      if ((!callback || callback === this._defaultOneParamCallback) && identifier instanceof BinaryTreeNode)
        callback = (node) => node;
      beginRoot = this.ensureNode(beginRoot);
      if (!beginRoot)
        return [];
      const ans = [];
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _traverse = (cur) => {
          if (callback(cur) === identifier) {
            ans.push(cur);
            if (onlyOne)
              return;
          }
          if (!cur.left && !cur.right)
            return;
          cur.left && _traverse(cur.left);
          cur.right && _traverse(cur.right);
        };
        _traverse(beginRoot);
      } else {
        const queue = new Queue([beginRoot]);
        while (queue.size > 0) {
          const cur = queue.shift();
          if (cur) {
            if (callback(cur) === identifier) {
              ans.push(cur);
              if (onlyOne)
                return ans;
            }
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
          }
        }
      }
      return ans;
    }
    /**
     * Time Complexity: O(n)
     *
     * The function checks if a Binary Tree Node with a specific identifier exists in the tree.
     * @param {ReturnType<C> | null | undefined} identifier - The `identifier` parameter is the value
     * that you want to search for in the binary tree. It can be of any type that is returned by the
     * callback function `C`. It can also be `null` or `undefined` if you don't want to specify a
     * specific identifier.
     * @param {C} callback - The `callback` parameter is a function that will be called for each node in
     * the binary tree. It is used to filter the nodes based on certain conditions. The `callback`
     * function should return a boolean value indicating whether the node should be included in the
     * result or not.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter is the starting point
     * for the search in the binary tree. It can be specified as a `K` (a unique identifier for a
     * node in the binary tree), a node object (`N`), or `null`/`undefined` to start the search from
     * @param iterationType - The `iterationType` parameter is a variable that determines the type of
     * iteration to be performed on the binary tree. It is used to specify whether the iteration should
     * be performed in a pre-order, in-order, or post-order manner.
     * @returns a boolean value.
     */
    has(identifier, callback = this._defaultOneParamCallback, beginRoot = this.root, iterationType = this.iterationType) {
      if ((!callback || callback === this._defaultOneParamCallback) && identifier instanceof BinaryTreeNode)
        callback = (node) => node;
      return this.getNodes(identifier, callback, true, beginRoot, iterationType).length > 0;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n)
     *
     * The function `getNode` returns the first node that matches the given identifier and callback
     * function.
     * @param {ReturnType<C> | null | undefined} identifier - The `identifier` parameter is the value
     * used to identify the node you want to retrieve. It can be of any type that is returned by the
     * callback function `C`. It can also be `null` or `undefined` if you don't have a specific
     * identifier.
     * @param {C} callback - The `callback` parameter is a function that will be called for each node in
     * the binary tree. It is used to determine if a node matches the given identifier. The `callback`
     * function should take a single parameter of type `N` (the type of the nodes in the binary tree) and
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter is the starting point
     * for searching the binary tree. It can be either a key value, a node object, or `null`/`undefined`.
     * If `null` or `undefined` is passed, the search will start from the root of the binary tree.
     * @param iterationType - The `iterationType` parameter is used to specify the type of iteration to
     * be performed when searching for nodes in the binary tree. It determines the order in which the
     * nodes are visited during the search.
     * @returns a value of type `N | null | undefined`.
     */
    getNode(identifier, callback = this._defaultOneParamCallback, beginRoot = this.root, iterationType = this.iterationType) {
      var _a;
      if ((!callback || callback === this._defaultOneParamCallback) && identifier instanceof BinaryTreeNode)
        callback = (node) => node;
      return (_a = this.getNodes(identifier, callback, true, beginRoot, iterationType)[0]) != null ? _a : null;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n)
     *
     * The function `getNodeByKey` searches for a node in a binary tree by its key, using either
     * recursive or iterative iteration.
     * @param {K} key - The `key` parameter is the key value that we are searching for in the tree.
     * It is used to find the node with the matching key value.
     * @param iterationType - The `iterationType` parameter is used to determine whether the search for
     * the node with the given key should be performed iteratively or recursively. It has two possible
     * values:
     * @returns The function `getNodeByKey` returns a node (`N`) if a node with the specified key is
     * found in the binary tree. If no node is found, it returns `undefined`.
     */
    getNodeByKey(key, iterationType = "ITERATIVE" /* ITERATIVE */) {
      if (!this.root)
        return void 0;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _dfs = (cur) => {
          if (cur.key === key)
            return cur;
          if (!cur.left && !cur.right)
            return;
          if (cur.left)
            return _dfs(cur.left);
          if (cur.right)
            return _dfs(cur.right);
        };
        return _dfs(this.root);
      } else {
        const queue = new Queue([this.root]);
        while (queue.size > 0) {
          const cur = queue.shift();
          if (cur) {
            if (cur.key === key)
              return cur;
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
          }
        }
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n)
     */
    /**
     * The function `ensureNode` returns the node corresponding to the given key if it is a valid node
     * key, otherwise it returns the key itself.
     * @param {K | N | null | undefined} key - The `key` parameter can be of type `K`, `N`,
     * `null`, or `undefined`. It represents a key used to identify a node in a binary tree.
     * @param iterationType - The `iterationType` parameter is an optional parameter that specifies the
     * type of iteration to be used when searching for a node by key. It has a default value of
     * `IterationType.ITERATIVE`.
     * @returns either the node corresponding to the given key if it is a valid node key, or the key
     * itself if it is not a valid node key.
     */
    ensureNode(key, iterationType = "ITERATIVE" /* ITERATIVE */) {
      return this.isNotNodeInstance(key) ? this.getNodeByKey(key, iterationType) : key;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n)
     *
     * The function `get` retrieves the value of a node in a binary tree based on the provided identifier
     * and callback function.
     * @param {ReturnType<C> | null | undefined} identifier - The `identifier` parameter is the value
     * used to identify the node in the binary tree. It can be of any type that is the return type of the
     * callback function `C`. It can also be `null` or `undefined` if no identifier is provided.
     * @param {C} callback - The `callback` parameter is a function that will be called with each node in
     * the binary tree. It is used to determine whether a node matches the given identifier. The callback
     * function should return a value that can be compared to the identifier to determine if it is a
     * match.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter is the starting point
     * for the search in the binary tree. It can be specified as a `K` (a unique identifier for a
     * node), a node object of type `N`, or `null`/`undefined` to start the search from the root of
     * @param iterationType - The `iterationType` parameter is used to specify the type of iteration to
     * be performed when searching for a node in the binary tree. It is an optional parameter with a
     * default value specified by `this.iterationType`.
     * @returns The value of the node with the given identifier is being returned. If the node is not
     * found, `undefined` is returned.
     */
    get(identifier, callback = this._defaultOneParamCallback, beginRoot = this.root, iterationType = this.iterationType) {
      var _a, _b;
      if ((!callback || callback === this._defaultOneParamCallback) && identifier instanceof BinaryTreeNode)
        callback = (node) => node;
      return (_b = (_a = this.getNode(identifier, callback, beginRoot, iterationType)) == null ? void 0 : _a.value) != null ? _b : void 0;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(log n)
     */
    /**
     * Clear the binary tree, removing all nodes.
     */
    clear() {
      this._setRoot(void 0);
      this._size = 0;
    }
    /**
     * Check if the binary tree is empty.
     * @returns {boolean} - True if the binary tree is empty, false otherwise.
     */
    isEmpty() {
      return this.size === 0;
    }
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(log n)
     *
     * The function `getPathToRoot` returns an array of nodes from a given node to the root of a tree
     * structure, with the option to reverse the order of the nodes.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter represents the
     * starting node from which you want to find the path to the root. It can be of type `K`, `N`,
     * `null`, or `undefined`.
     * @param [isReverse=true] - The `isReverse` parameter is a boolean flag that determines whether the
     * resulting path should be reversed or not. If `isReverse` is set to `true`, the path will be
     * reversed before returning it. If `isReverse` is set to `false`, the path will be returned as is
     * @returns The function `getPathToRoot` returns an array of nodes (`N[]`).
     */
    getPathToRoot(beginRoot, isReverse = true) {
      const result = [];
      beginRoot = this.ensureNode(beginRoot);
      if (!beginRoot)
        return result;
      while (beginRoot.parent) {
        result.push(beginRoot);
        beginRoot = beginRoot.parent;
      }
      result.push(beginRoot);
      return isReverse ? result.reverse() : result;
    }
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(log n)
     */
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     *
     * The function `getLeftMost` returns the leftmost node in a binary tree, either recursively or
     * iteratively.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter is the starting point
     * for finding the leftmost node in a binary tree. It can be either a `K` (a key value), `N` (a
     * node), `null`, or `undefined`. If not provided, it defaults to `this.root`,
     * @param iterationType - The `iterationType` parameter is used to determine the type of iteration to
     * be performed when finding the leftmost node in a binary tree. It can have two possible values:
     * @returns The function `getLeftMost` returns the leftmost node (`N`) in the binary tree. If there
     * is no leftmost node, it returns `null` or `undefined` depending on the input.
     */
    getLeftMost(beginRoot = this.root, iterationType = this.iterationType) {
      beginRoot = this.ensureNode(beginRoot);
      if (!beginRoot)
        return beginRoot;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _traverse = (cur) => {
          if (!this.isRealNode(cur.left))
            return cur;
          return _traverse(cur.left);
        };
        return _traverse(beginRoot);
      } else {
        const _traverse = trampoline((cur) => {
          if (!this.isRealNode(cur.left))
            return cur;
          return _traverse.cont(cur.left);
        });
        return _traverse(beginRoot);
      }
    }
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     *
     * The function `getRightMost` returns the rightmost node in a binary tree, either recursively or
     * iteratively.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter represents the
     * starting node from which we want to find the rightmost node. It can be of type `K`, `N`,
     * `null`, or `undefined`. If not provided, it defaults to `this.root`, which is a property of the
     * current object.
     * @param iterationType - The `iterationType` parameter is an optional parameter that specifies the
     * type of iteration to use when finding the rightmost node. It can have one of two values:
     * @returns The function `getRightMost` returns the rightmost node (`N`) in a binary tree. If there
     * is no rightmost node, it returns `null` or `undefined`, depending on the input.
     */
    getRightMost(beginRoot = this.root, iterationType = this.iterationType) {
      beginRoot = this.ensureNode(beginRoot);
      if (!beginRoot)
        return beginRoot;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _traverse = (cur) => {
          if (!this.isRealNode(cur.right))
            return cur;
          return _traverse(cur.right);
        };
        return _traverse(beginRoot);
      } else {
        const _traverse = trampoline((cur) => {
          if (!this.isRealNode(cur.right))
            return cur;
          return _traverse.cont(cur.right);
        });
        return _traverse(beginRoot);
      }
    }
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The function `isSubtreeBST` checks if a given binary tree is a valid binary search tree.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter represents the root
     * node of the binary search tree (BST) that you want to check if it is a subtree of another BST.
     * @param iterationType - The `iterationType` parameter is an optional parameter that specifies the
     * type of iteration to use when checking if a subtree is a binary search tree (BST). It can have two
     * possible values:
     * @returns a boolean value.
     */
    isSubtreeBST(beginRoot, iterationType = this.iterationType) {
      beginRoot = this.ensureNode(beginRoot);
      if (!beginRoot)
        return true;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const dfs = (cur, min, max) => {
          if (!cur)
            return true;
          const numKey = this.extractor(cur.key);
          if (numKey <= min || numKey >= max)
            return false;
          return dfs(cur.left, min, numKey) && dfs(cur.right, numKey, max);
        };
        return dfs(beginRoot, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
      } else {
        const stack = [];
        let prev = Number.MIN_SAFE_INTEGER, curr = beginRoot;
        while (curr || stack.length > 0) {
          while (curr) {
            stack.push(curr);
            curr = curr.left;
          }
          curr = stack.pop();
          const numKey = this.extractor(curr.key);
          if (!curr || prev >= numKey)
            return false;
          prev = numKey;
          curr = curr.right;
        }
        return true;
      }
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     *
     * The function checks if a binary tree is a binary search tree.
     * @param iterationType - The parameter "iterationType" is used to specify the type of iteration to
     * be used when checking if the binary tree is a binary search tree (BST). It is an optional
     * parameter with a default value of "this.iterationType". The value of "this.iterationType" is
     * expected to be
     * @returns a boolean value.
     */
    isBST(iterationType = this.iterationType) {
      if (this.root === null)
        return true;
      return this.isSubtreeBST(this.root, iterationType);
    }
    /**
     * Time complexity: O(n)
     * Space complexity: O(log n)
     *
     * The function `subTreeTraverse` traverses a binary tree and applies a callback function to each
     * node, either recursively or iteratively.
     * @param {C} callback - The `callback` parameter is a function that will be called for each node in
     * the subtree traversal. It takes a single parameter, which is the current node being traversed, and
     * returns a value of any type.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter represents the
     * starting node or key from which the subtree traversal should begin. It can be of type `K`,
     * `N`, `null`, or `undefined`. If not provided, the `root` property of the current object is used as
     * the default value.
     * @param iterationType - The `iterationType` parameter determines the type of traversal to be
     * performed on the subtree. It can have two possible values:
     * @param [includeNull=false] - The `includeNull` parameter is a boolean value that determines
     * whether to include null values in the traversal. If `includeNull` is set to `true`, the
     * traversal will include null values, otherwise it will skip them.
     * @returns The function `subTreeTraverse` returns an array of values that are the result of invoking
     * the `callback` function on each node in the subtree. The type of the array elements is determined
     * by the return type of the `callback` function.
     */
    subTreeTraverse(callback = this._defaultOneParamCallback, beginRoot = this.root, iterationType = this.iterationType, includeNull = false) {
      beginRoot = this.ensureNode(beginRoot);
      const ans = [];
      if (!beginRoot)
        return ans;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _traverse = (cur) => {
          if (cur !== void 0) {
            ans.push(callback(cur));
            if (includeNull) {
              cur && this.isNodeOrNull(cur.left) && _traverse(cur.left);
              cur && this.isNodeOrNull(cur.right) && _traverse(cur.right);
            } else {
              cur && cur.left && _traverse(cur.left);
              cur && cur.right && _traverse(cur.right);
            }
          }
        };
        _traverse(beginRoot);
      } else {
        const stack = [beginRoot];
        while (stack.length > 0) {
          const cur = stack.pop();
          if (cur !== void 0) {
            ans.push(callback(cur));
            if (includeNull) {
              cur && this.isNodeOrNull(cur.right) && stack.push(cur.right);
              cur && this.isNodeOrNull(cur.left) && stack.push(cur.left);
            } else {
              cur && cur.right && stack.push(cur.right);
              cur && cur.left && stack.push(cur.left);
            }
          }
        }
      }
      return ans;
    }
    /**
     * Time complexity: O(n)
     * Space complexity: O(log n)
     */
    /**
     * The function checks if a given node is a real node by verifying if it is an instance of
     * BinaryTreeNode and its key is not NaN.
     * @param {any} node - The parameter `node` is of type `any`, which means it can be any data type.
     * @returns a boolean value.
     */
    isRealNode(node) {
      return node instanceof BinaryTreeNode && String(node.key) !== "NaN";
    }
    /**
     * The function checks if a given node is a BinaryTreeNode instance and has a key value of NaN.
     * @param {any} node - The parameter `node` is of type `any`, which means it can be any data type.
     * @returns a boolean value.
     */
    isNIL(node) {
      return node instanceof BinaryTreeNode && String(node.key) === "NaN";
    }
    /**
     * The function checks if a given node is a real node or null.
     * @param {any} node - The parameter `node` is of type `any`, which means it can be any data type.
     * @returns a boolean value.
     */
    isNodeOrNull(node) {
      return this.isRealNode(node) || node === null;
    }
    /**
     * The function "isNotNodeInstance" checks if a potential key is a K.
     * @param {any} potentialKey - The potentialKey parameter is of type any, which means it can be any
     * data type.
     * @returns a boolean value indicating whether the potentialKey is of type number or not.
     */
    isNotNodeInstance(potentialKey) {
      return !(potentialKey instanceof BinaryTreeNode);
    }
    /**
     * Time complexity: O(n)
     * Space complexity: O(n)
     *
     * The `dfs` function performs a depth-first search traversal on a binary tree or graph, based on the
     * specified pattern and iteration type, and returns an array of values obtained from applying a
     * callback function to each visited node.
     * @param {C} callback - The `callback` parameter is a function that will be called for each node in
     * the tree during the depth-first search. It takes a single parameter, which can be of type `N`,
     * `null`, or `undefined`, and returns a value of any type. The default value for this parameter is
     * @param {DFSOrderPattern} [pattern=in] - The `pattern` parameter determines the order in which the
     * nodes are traversed during the depth-first search. It can have one of the following values:
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter is the starting node
     * for the depth-first search traversal. It can be specified as a key, a node object, or
     * `null`/`undefined`. If not provided, the `beginRoot` will default to the root node of the tree.
     * @param {IterationType} iterationType - The `iterationType` parameter determines the type of
     * iteration to use when traversing the tree. It can have one of the following values:
     * @param [includeNull=false] - The `includeNull` parameter is a boolean value that determines
     * whether null or undefined nodes should be included in the traversal. If `includeNull` is set to
     * `true`, null or undefined nodes will be included in the traversal. If `includeNull` is set to
     * `false`, null or undefined
     * @returns an array of values that are the return values of the callback function.
     */
    dfs(callback = this._defaultOneParamCallback, pattern = "in", beginRoot = this.root, iterationType = "ITERATIVE" /* ITERATIVE */, includeNull = false) {
      beginRoot = this.ensureNode(beginRoot);
      if (!beginRoot)
        return [];
      const ans = [];
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _traverse = (node) => {
          switch (pattern) {
            case "in":
              if (includeNull) {
                if (node && this.isNodeOrNull(node.left))
                  _traverse(node.left);
                this.isNodeOrNull(node) && ans.push(callback(node));
                if (node && this.isNodeOrNull(node.right))
                  _traverse(node.right);
              } else {
                if (node && node.left)
                  _traverse(node.left);
                this.isRealNode(node) && ans.push(callback(node));
                if (node && node.right)
                  _traverse(node.right);
              }
              break;
            case "pre":
              if (includeNull) {
                this.isNodeOrNull(node) && ans.push(callback(node));
                if (node && this.isNodeOrNull(node.left))
                  _traverse(node.left);
                if (node && this.isNodeOrNull(node.right))
                  _traverse(node.right);
              } else {
                this.isRealNode(node) && ans.push(callback(node));
                if (node && node.left)
                  _traverse(node.left);
                if (node && node.right)
                  _traverse(node.right);
              }
              break;
            case "post":
              if (includeNull) {
                if (node && this.isNodeOrNull(node.left))
                  _traverse(node.left);
                if (node && this.isNodeOrNull(node.right))
                  _traverse(node.right);
                this.isNodeOrNull(node) && ans.push(callback(node));
              } else {
                if (node && node.left)
                  _traverse(node.left);
                if (node && node.right)
                  _traverse(node.right);
                this.isRealNode(node) && ans.push(callback(node));
              }
              break;
          }
        };
        _traverse(beginRoot);
      } else {
        const stack = [{ opt: 0, node: beginRoot }];
        while (stack.length > 0) {
          const cur = stack.pop();
          if (cur === void 0 || this.isNIL(cur.node))
            continue;
          if (includeNull) {
            if (cur.node === void 0)
              continue;
          } else {
            if (cur.node === null || cur.node === void 0)
              continue;
          }
          if (cur.opt === 1) {
            ans.push(callback(cur.node));
          } else {
            switch (pattern) {
              case "in":
                cur.node && stack.push({ opt: 0, node: cur.node.right });
                stack.push({ opt: 1, node: cur.node });
                cur.node && stack.push({ opt: 0, node: cur.node.left });
                break;
              case "pre":
                cur.node && stack.push({ opt: 0, node: cur.node.right });
                cur.node && stack.push({ opt: 0, node: cur.node.left });
                stack.push({ opt: 1, node: cur.node });
                break;
              case "post":
                stack.push({ opt: 1, node: cur.node });
                cur.node && stack.push({ opt: 0, node: cur.node.right });
                cur.node && stack.push({ opt: 0, node: cur.node.left });
                break;
              default:
                cur.node && stack.push({ opt: 0, node: cur.node.right });
                stack.push({ opt: 1, node: cur.node });
                cur.node && stack.push({ opt: 0, node: cur.node.left });
                break;
            }
          }
        }
      }
      return ans;
    }
    /**
     * Time complexity: O(n)
     * Space complexity: O(n)
     *
     * The `bfs` function performs a breadth-first search traversal on a binary tree, executing a
     * callback function on each node.
     * @param {C} callback - The `callback` parameter is a function that will be called for each node in
     * the breadth-first search traversal. It takes a single parameter, which is the current node being
     * visited, and returns a value of any type.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter represents the
     * starting node for the breadth-first search traversal. It can be specified as a key, a node object,
     * or `null`/`undefined` to indicate the root of the tree. If not provided, the `root` property of
     * the class is used as
     * @param iterationType - The `iterationType` parameter determines the type of iteration to be
     * performed during the breadth-first search (BFS). It can have two possible values:
     * @param [includeNull=false] - The `includeNull` parameter is a boolean flag that determines whether
     * to include null values in the breadth-first search traversal. If `includeNull` is set to
     * `true`, null values will be included in the traversal, otherwise they will be skipped.
     * @returns an array of values that are the result of invoking the callback function on each node in
     * the breadth-first traversal of a binary tree.
     */
    bfs(callback = this._defaultOneParamCallback, beginRoot = this.root, iterationType = this.iterationType, includeNull = false) {
      beginRoot = this.ensureNode(beginRoot);
      if (!beginRoot)
        return [];
      const ans = [];
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const queue = new Queue([beginRoot]);
        const traverse = (level) => {
          if (queue.size === 0)
            return;
          const current = queue.shift();
          ans.push(callback(current));
          if (includeNull) {
            if (current && this.isNodeOrNull(current.left))
              queue.push(current.left);
            if (current && this.isNodeOrNull(current.right))
              queue.push(current.right);
          } else {
            if (current.left)
              queue.push(current.left);
            if (current.right)
              queue.push(current.right);
          }
          traverse(level + 1);
        };
        traverse(0);
      } else {
        const queue = new Queue([beginRoot]);
        while (queue.size > 0) {
          const levelSize = queue.size;
          for (let i = 0; i < levelSize; i++) {
            const current = queue.shift();
            ans.push(callback(current));
            if (includeNull) {
              if (current && this.isNodeOrNull(current.left))
                queue.push(current.left);
              if (current && this.isNodeOrNull(current.right))
                queue.push(current.right);
            } else {
              if (current.left)
                queue.push(current.left);
              if (current.right)
                queue.push(current.right);
            }
          }
        }
      }
      return ans;
    }
    /**
     * Time complexity: O(n)
     * Space complexity: O(n)
     *
     * The `listLevels` function returns an array of arrays, where each inner array represents a level in
     * a binary tree and contains the values returned by a callback function applied to the nodes at that
     * level.
     * @param {C} callback - The `callback` parameter is a function that will be called for each node in
     * the tree. It takes a single parameter, which can be of type `N`, `null`, or `undefined`, and
     * returns a value of any type.
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter represents the
     * starting node for traversing the tree. It can be either a node object (`N`), a key value
     * (`K`), `null`, or `undefined`. If not provided, it defaults to the root node of the tree.
     * @param iterationType - The `iterationType` parameter determines the type of iteration to be
     * performed on the tree. It can have two possible values:
     * @param [includeNull=false] - The `includeNull` parameter is a boolean value that determines
     * whether to include null values in the resulting levels. If `includeNull` is set to `true`,
     * null values will be included in the levels. If `includeNull` is set to `false`, null values will
     * be excluded
     * @returns The function `listLevels` returns a two-dimensional array of type `ReturnType<C>[][]`.
     */
    listLevels(callback = this._defaultOneParamCallback, beginRoot = this.root, iterationType = this.iterationType, includeNull = false) {
      beginRoot = this.ensureNode(beginRoot);
      const levelsNodes = [];
      if (!beginRoot)
        return levelsNodes;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _recursive = (node, level) => {
          if (!levelsNodes[level])
            levelsNodes[level] = [];
          levelsNodes[level].push(callback(node));
          if (includeNull) {
            if (node && this.isNodeOrNull(node.left))
              _recursive(node.left, level + 1);
            if (node && this.isNodeOrNull(node.right))
              _recursive(node.right, level + 1);
          } else {
            if (node && node.left)
              _recursive(node.left, level + 1);
            if (node && node.right)
              _recursive(node.right, level + 1);
          }
        };
        _recursive(beginRoot, 0);
      } else {
        const stack = [[beginRoot, 0]];
        while (stack.length > 0) {
          const head = stack.pop();
          const [node, level] = head;
          if (!levelsNodes[level])
            levelsNodes[level] = [];
          levelsNodes[level].push(callback(node));
          if (includeNull) {
            if (node && this.isNodeOrNull(node.right))
              stack.push([node.right, level + 1]);
            if (node && this.isNodeOrNull(node.left))
              stack.push([node.left, level + 1]);
          } else {
            if (node && node.right)
              stack.push([node.right, level + 1]);
            if (node && node.left)
              stack.push([node.left, level + 1]);
          }
        }
      }
      return levelsNodes;
    }
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     *
     * The function returns the predecessor of a given node in a tree.
     * @param {N} node - The parameter `node` is of type `RedBlackTreeNode`, which represents a node in a
     * tree.
     * @returns the predecessor of the given 'node'.
     */
    getPredecessor(node) {
      if (this.isRealNode(node.left)) {
        let predecessor = node.left;
        while (!this.isRealNode(predecessor) || this.isRealNode(predecessor.right) && predecessor.right !== node) {
          if (this.isRealNode(predecessor)) {
            predecessor = predecessor.right;
          }
        }
        return predecessor;
      } else {
        return node;
      }
    }
    /**
     * The function `getSuccessor` returns the next node in a binary tree given a current node.
     * @param {K | N | null} [x] - The parameter `x` can be of type `K`, `N`, or `null`.
     * @returns the successor of the given node or key. The successor is the node that comes immediately
     * after the given node in the inorder traversal of the binary tree.
     */
    getSuccessor(x) {
      x = this.ensureNode(x);
      if (!this.isRealNode(x))
        return void 0;
      if (this.isRealNode(x.right)) {
        return this.getLeftMost(x.right);
      }
      let y = x.parent;
      while (this.isRealNode(y) && x === y.right) {
        x = y;
        y = y.parent;
      }
      return y;
    }
    /**
     * Time complexity: O(n)
     * Space complexity: O(1)
     * The `morris` function performs a depth-first traversal on a binary tree using the Morris traversal
     * algorithm.
     * @param {C} callback - The `callback` parameter is a function that will be called for each node in
     * the tree. It takes a single parameter of type `N` (the type of the nodes in the tree) and returns
     * a value of any type.
     * @param {DFSOrderPattern} [pattern=in] - The `pattern` parameter in the `morris` function
     * determines the order in which the nodes of a binary tree are traversed. It can have one of the
     * following values:
     * @param {K | N | null | undefined} beginRoot - The `beginRoot` parameter is the starting node
     * for the traversal. It can be specified as a key, a node object, or `null`/`undefined` to indicate
     * the root of the tree. If no value is provided, the default value is the root of the tree.
     * @returns The function `morris` returns an array of values that are the result of invoking the
     * `callback` function on each node in the binary tree. The type of the array elements is determined
     * by the return type of the `callback` function.
     */
    morris(callback = this._defaultOneParamCallback, pattern = "in", beginRoot = this.root) {
      beginRoot = this.ensureNode(beginRoot);
      if (beginRoot === null)
        return [];
      const ans = [];
      let cur = beginRoot;
      const _reverseEdge = (node) => {
        let pre = null;
        let next = null;
        while (node) {
          next = node.right;
          node.right = pre;
          pre = node;
          node = next;
        }
        return pre;
      };
      const _printEdge = (node) => {
        const tail = _reverseEdge(node);
        let cur2 = tail;
        while (cur2) {
          ans.push(callback(cur2));
          cur2 = cur2.right;
        }
        _reverseEdge(tail);
      };
      switch (pattern) {
        case "in":
          while (cur) {
            if (cur.left) {
              const predecessor = this.getPredecessor(cur);
              if (!predecessor.right) {
                predecessor.right = cur;
                cur = cur.left;
                continue;
              } else {
                predecessor.right = null;
              }
            }
            ans.push(callback(cur));
            cur = cur.right;
          }
          break;
        case "pre":
          while (cur) {
            if (cur.left) {
              const predecessor = this.getPredecessor(cur);
              if (!predecessor.right) {
                predecessor.right = cur;
                ans.push(callback(cur));
                cur = cur.left;
                continue;
              } else {
                predecessor.right = null;
              }
            } else {
              ans.push(callback(cur));
            }
            cur = cur.right;
          }
          break;
        case "post":
          while (cur) {
            if (cur.left) {
              const predecessor = this.getPredecessor(cur);
              if (predecessor.right === null) {
                predecessor.right = cur;
                cur = cur.left;
                continue;
              } else {
                predecessor.right = null;
                _printEdge(cur.left);
              }
            }
            cur = cur.right;
          }
          _printEdge(beginRoot);
          break;
      }
      return ans;
    }
    /**
     * Time complexity: O(n)
     * Space complexity: O(n)
     */
    /**
     * Time complexity: O(n)
     * Space complexity: O(n)
     *
     * The `clone` function creates a new tree object and copies all the nodes from the original tree to
     * the new tree.
     * @returns The `clone()` method is returning a cloned instance of the `TREE` object.
     */
    clone() {
      const cloned = this.createTree();
      this.bfs((node) => cloned.add([node.key, node.value]));
      return cloned;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `filter` function creates a new tree by iterating over the elements of the current tree and
     * adding only the elements that satisfy the given predicate function.
     * @param predicate - The `predicate` parameter is a function that takes three arguments: `value`,
     * `key`, and `index`. It should return a boolean value indicating whether the pair should be
     * included in the filtered tree or not.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as the `this` value when executing the `predicate` function. If `thisArg` is provided,
     * it will be passed as the first argument to the `predicate` function. If `thisArg` is
     * @returns The `filter` method is returning a new tree object that contains the key-value pairs that
     * pass the given predicate function.
     */
    filter(predicate, thisArg) {
      const newTree = this.createTree();
      let index = 0;
      for (const [key, value] of this) {
        if (predicate.call(thisArg, value, key, index++, this)) {
          newTree.add([key, value]);
        }
      }
      return newTree;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `map` function creates a new tree by applying a callback function to each key-value pair in
     * the original tree.
     * @param callback - The callback parameter is a function that will be called for each key-value pair
     * in the tree. It takes four arguments: the value of the current pair, the key of the current pair,
     * the index of the current pair, and a reference to the tree itself. The callback function should
     * return a new
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that allows you to
     * specify the value of `this` within the callback function. If you pass a value for `thisArg`, it
     * will be used as the `this` value when the callback function is called. If you don't pass a value
     * @returns The `map` method is returning a new tree object.
     */
    map(callback, thisArg) {
      const newTree = this.createTree();
      let index = 0;
      for (const [key, value] of this) {
        newTree.add([key, callback.call(thisArg, value, key, index++, this)]);
      }
      return newTree;
    }
    // // TODO Type error, need to return a TREE<NV> that is a value type only for callback function.
    // // map<NV>(callback: (entry: [K, V | undefined], tree: this) => NV) {
    // //   const newTree = this.createTree();
    // //   for (const [key, value] of this) {
    // //     newTree.add(key, callback([key, value], this));
    // //   }
    // //   return newTree;
    // // }
    //
    /**
     * The `print` function is used to display a binary tree structure in a visually appealing way.
     * @param {K | N | null | undefined} [beginRoot=this.root] - The `root` parameter is of type `K | N | null |
     * undefined`. It represents the root node of a binary tree. The root node can have one of the
     * following types:
     * @param {BinaryTreePrintOptions} [options={ isShowUndefined: false, isShowNull: false, isShowRedBlackNIL: false}] - Options object that controls printing behavior. You can specify whether to display undefined, null, or sentinel nodes.
     */
    print(beginRoot = this.root, options) {
      const opts = __spreadValues({ isShowUndefined: false, isShowNull: false, isShowRedBlackNIL: false }, options);
      beginRoot = this.ensureNode(beginRoot);
      if (!beginRoot)
        return;
      if (opts.isShowUndefined)
        console.log(`U for undefined
      `);
      if (opts.isShowNull)
        console.log(`N for null
      `);
      if (opts.isShowRedBlackNIL)
        console.log(`S for Sentinel Node
      `);
      const display = (root) => {
        const [lines, , ,] = this._displayAux(root, opts);
        for (const line of lines) {
          console.log(line);
        }
      };
      display(beginRoot);
    }
    *_getIterator(node = this.root) {
      if (!node)
        return;
      if (this.iterationType === "ITERATIVE" /* ITERATIVE */) {
        const stack = [];
        let current = node;
        while (current || stack.length > 0) {
          while (current && !isNaN(this.extractor(current.key))) {
            stack.push(current);
            current = current.left;
          }
          current = stack.pop();
          if (current && !isNaN(this.extractor(current.key))) {
            yield [current.key, current.value];
            current = current.right;
          }
        }
      } else {
        if (node.left && !isNaN(this.extractor(node.key))) {
          yield* __yieldStar(this[Symbol.iterator](node.left));
        }
        yield [node.key, node.value];
        if (node.right && !isNaN(this.extractor(node.key))) {
          yield* __yieldStar(this[Symbol.iterator](node.right));
        }
      }
    }
    _displayAux(node, options) {
      const { isShowNull, isShowUndefined, isShowRedBlackNIL } = options;
      const emptyDisplayLayout = [["\u2500"], 1, 0, 0];
      if (node === null && !isShowNull) {
        return emptyDisplayLayout;
      } else if (node === void 0 && !isShowUndefined) {
        return emptyDisplayLayout;
      } else if (node !== null && node !== void 0 && isNaN(this.extractor(node.key)) && !isShowRedBlackNIL) {
        return emptyDisplayLayout;
      } else if (node !== null && node !== void 0) {
        const key = node.key, line = isNaN(this.extractor(key)) ? "S" : this.extractor(key).toString(), width = line.length;
        return _buildNodeDisplay(line, width, this._displayAux(node.left, options), this._displayAux(node.right, options));
      } else {
        const line = node === void 0 ? "U" : "N", width = line.length;
        return _buildNodeDisplay(line, width, [[""], 1, 0, 0], [[""], 1, 0, 0]);
      }
      function _buildNodeDisplay(line, width, left, right) {
        const [leftLines, leftWidth, leftHeight, leftMiddle] = left;
        const [rightLines, rightWidth, rightHeight, rightMiddle] = right;
        const firstLine = " ".repeat(Math.max(0, leftMiddle + 1)) + "_".repeat(Math.max(0, leftWidth - leftMiddle - 1)) + line + "_".repeat(Math.max(0, rightMiddle)) + " ".repeat(Math.max(0, rightWidth - rightMiddle));
        const secondLine = (leftHeight > 0 ? " ".repeat(leftMiddle) + "/" + " ".repeat(leftWidth - leftMiddle - 1) : " ".repeat(leftWidth)) + " ".repeat(width) + (rightHeight > 0 ? " ".repeat(rightMiddle) + "\\" + " ".repeat(rightWidth - rightMiddle - 1) : " ".repeat(rightWidth));
        const mergedLines = [firstLine, secondLine];
        for (let i = 0; i < Math.max(leftHeight, rightHeight); i++) {
          const leftLine = i < leftHeight ? leftLines[i] : " ".repeat(leftWidth);
          const rightLine = i < rightHeight ? rightLines[i] : " ".repeat(rightWidth);
          mergedLines.push(leftLine + " ".repeat(width) + rightLine);
        }
        return [mergedLines, leftWidth + width + rightWidth, Math.max(leftHeight, rightHeight) + 2, leftWidth + Math.floor(width / 2)];
      }
    }
    /**
     * Swap the data of two nodes in the binary tree.
     * @param {N} srcNode - The source node to swap.
     * @param {N} destNode - The destination node to swap.
     * @returns {N} - The destination node after the swap.
     */
    _swapProperties(srcNode, destNode) {
      srcNode = this.ensureNode(srcNode);
      destNode = this.ensureNode(destNode);
      if (srcNode && destNode) {
        const { key, value } = destNode;
        const tempNode = this.createNode(key, value);
        if (tempNode) {
          destNode.key = srcNode.key;
          destNode.value = srcNode.value;
          srcNode.key = tempNode.key;
          srcNode.value = tempNode.value;
        }
        return destNode;
      }
      return void 0;
    }
    /**
     * The function replaces an old node with a new node in a binary tree.
     * @param {N} oldNode - The oldNode parameter represents the node that needs to be replaced in the
     * tree.
     * @param {N} newNode - The `newNode` parameter is the node that will replace the `oldNode` in the
     * tree.
     * @returns The method is returning the newNode.
     */
    _replaceNode(oldNode, newNode) {
      if (oldNode.parent) {
        if (oldNode.parent.left === oldNode) {
          oldNode.parent.left = newNode;
        } else if (oldNode.parent.right === oldNode) {
          oldNode.parent.right = newNode;
        }
      }
      newNode.left = oldNode.left;
      newNode.right = oldNode.right;
      newNode.parent = oldNode.parent;
      if (this.root === oldNode) {
        this._root = newNode;
      }
      return newNode;
    }
    /**
     * The function `_addTo` adds a new node to a binary tree if there is an available position.
     * @param {N | null | undefined} newNode - The `newNode` parameter represents the node that you want to add to
     * the binary tree. It can be either a node object or `null`.
     * @param {N} parent - The `parent` parameter represents the parent node to which the new node will
     * be added as a child.
     * @returns either the left or right child node of the parent node, depending on which child is
     * available for adding the new node. If a new node is added, the function also updates the size of
     * the binary tree. If neither the left nor right child is available, the function returns undefined.
     * If the parent node is null, the function also returns undefined.
     */
    _addTo(newNode, parent) {
      if (this.isNotNodeInstance(parent))
        parent = this.getNode(parent);
      if (parent) {
        if (parent.left === void 0) {
          parent.left = newNode;
          if (newNode) {
            this._size = this.size + 1;
          }
          return parent.left;
        } else if (parent.right === void 0) {
          parent.right = newNode;
          if (newNode) {
            this._size = this.size + 1;
          }
          return parent.right;
        } else {
          return;
        }
      } else {
        return;
      }
    }
    /**
     * The function sets the root property of an object to a given value, and if the value is not null,
     * it also sets the parent property of the value to undefined.
     * @param {N | null | undefined} v - The parameter `v` is of type `N | null | undefined`, which means it can either be of
     * type `N` or `null`.
     */
    _setRoot(v) {
      if (v) {
        v.parent = void 0;
      }
      this._root = v;
    }
  };

  // src/data-structures/binary-tree/bst.ts
  var BSTNode = class extends BinaryTreeNode {
    constructor(key, value) {
      super(key, value);
      __publicField(this, "parent");
      __publicField(this, "_left");
      __publicField(this, "_right");
      this.parent = void 0;
      this._left = void 0;
      this._right = void 0;
    }
    /**
     * Get the left child node.
     */
    get left() {
      return this._left;
    }
    /**
     * Set the left child node.
     * @param {N | undefined} v - The left child node.
     */
    set left(v) {
      if (v) {
        v.parent = this;
      }
      this._left = v;
    }
    /**
     * Get the right child node.
     */
    get right() {
      return this._right;
    }
    /**
     * Set the right child node.
     * @param {N | undefined} v - The right child node.
     */
    set right(v) {
      if (v) {
        v.parent = this;
      }
      this._right = v;
    }
  };
  var BST = class _BST extends BinaryTree {
    /**
     * This is the constructor function for a binary search tree class in TypeScript, which initializes
     * the tree with optional elements and options.
     * @param [elements] - An optional iterable of BTNExemplar objects that will be added to the
     * binary search tree.
     * @param [options] - The `options` parameter is an optional object that can contain additional
     * configuration options for the binary search tree. It can have the following properties:
     */
    constructor(elements, options) {
      super([], options);
      __publicField(this, "_root");
      __publicField(this, "_variant", "MIN" /* MIN */);
      if (options) {
        const { variant } = options;
        if (variant) {
          this._variant = variant;
        }
      }
      this._root = void 0;
      if (elements)
        this.addMany(elements);
    }
    get root() {
      return this._root;
    }
    get variant() {
      return this._variant;
    }
    /**
     * The function creates a new binary search tree node with the given key and value.
     * @param {K} key - The key parameter is the key value that will be associated with
     * the new node. It is used to determine the position of the node in the binary search tree.
     * @param [value] - The parameter `value` is an optional value that can be assigned to the node. It
     * represents the value associated with the node in a binary search tree.
     * @returns a new instance of the BSTNode class with the specified key and value.
     */
    createNode(key, value) {
      return new BSTNode(key, value);
    }
    /**
     * The function creates a new binary search tree with the specified options.
     * @param [options] - The `options` parameter is an optional object that allows you to customize the
     * behavior of the `createTree` method. It accepts a partial `BSTOptions` object, which is a type
     * that defines various options for creating a binary search tree.
     * @returns a new instance of the BST class with the specified options.
     */
    createTree(options) {
      return new _BST([], __spreadValues({
        iterationType: this.iterationType,
        variant: this.variant
      }, options));
    }
    /**
     * The function checks if an exemplar is an instance of BSTNode.
     * @param exemplar - The `exemplar` parameter is a variable of type `BTNExemplar<K, V, N>`.
     * @returns a boolean value indicating whether the exemplar is an instance of the BSTNode class.
     */
    isNode(exemplar) {
      return exemplar instanceof BSTNode;
    }
    /**
     * The function `exemplarToNode` takes an exemplar and returns a node if the exemplar is valid,
     * otherwise it returns undefined.
     * @param exemplar - The `exemplar` parameter is of type `BTNExemplar<K, V, N>`, where:
     * @param {V} [value] - The `value` parameter is an optional value that can be passed to the
     * `exemplarToNode` function. It represents the value associated with the exemplar node.
     * @returns a node of type N or undefined.
     */
    exemplarToNode(exemplar, value) {
      let node;
      if (exemplar === null || exemplar === void 0) {
        return;
      } else if (this.isNode(exemplar)) {
        node = exemplar;
      } else if (this.isEntry(exemplar)) {
        const [key, value2] = exemplar;
        if (key === void 0 || key === null) {
          return;
        } else {
          node = this.createNode(key, value2);
        }
      } else if (this.isNotNodeInstance(exemplar)) {
        node = this.createNode(exemplar, value);
      } else {
        return;
      }
      return node;
    }
    /**
     * Time Complexity: O(log n) - Average case for a balanced tree. In the worst case (unbalanced tree), it can be O(n).
     * Space Complexity: O(1) - Constant space is used.
     */
    /**
     * Time Complexity: O(log n) - Average case for a balanced tree. In the worst case (unbalanced tree), it can be O(n).
     * Space Complexity: O(1) - Constant space is used.
     *
     * The `add` function adds a new node to a binary tree, updating the value if the key already exists
     * or inserting a new node if the key is unique.
     * @param keyOrNodeOrEntry - The `keyOrNodeOrEntry` parameter can accept three types of values:
     * @param {V} [value] - The `value` parameter represents the value associated with the key that is
     * being added to the binary tree.
     * @returns The method `add` returns either the newly added node (`newNode`) or `undefined` if the
     * node was not added.
     */
    add(keyOrNodeOrEntry, value) {
      const newNode = this.exemplarToNode(keyOrNodeOrEntry, value);
      if (newNode === void 0)
        return;
      if (this.root === void 0) {
        this._setRoot(newNode);
        this._size++;
        return this.root;
      }
      let current = this.root;
      while (current !== void 0) {
        if (this._compare(current.key, newNode.key) === "eq" /* eq */) {
          this._replaceNode(current, newNode);
          return newNode;
        } else if (this._compare(current.key, newNode.key) === "gt" /* gt */) {
          if (current.left === void 0) {
            current.left = newNode;
            newNode.parent = current;
            this._size++;
            return newNode;
          }
          current = current.left;
        } else {
          if (current.right === void 0) {
            current.right = newNode;
            newNode.parent = current;
            this._size++;
            return newNode;
          }
          current = current.right;
        }
      }
      return void 0;
    }
    /**
     * Time Complexity: O(k log n) - Adding each element individually in a balanced tree.
     * Space Complexity: O(k) - Additional space is required for the sorted array.
     */
    /**
     * Time Complexity: O(k log n) - Adding each element individually in a balanced tree.
     * Space Complexity: O(k) - Additional space is required for the sorted array.
     *
     * The `addMany` function in TypeScript adds multiple keys or nodes to a binary tree, optionally
     * balancing the tree after each addition.
     * @param keysOrNodesOrEntries - An iterable containing the keys, nodes, or entries to be added to
     * the binary tree.
     * @param [values] - An optional iterable of values to be associated with the keys or nodes being
     * added. If provided, the values will be assigned to the corresponding keys or nodes in the same
     * order. If not provided, undefined will be assigned as the value for each key or node.
     * @param [isBalanceAdd=true] - A boolean flag indicating whether the add operation should be
     * balanced or not. If set to true, the add operation will be balanced using a binary search tree
     * algorithm. If set to false, the add operation will not be balanced and the elements will be added
     * in the order they appear in the input.
     * @param iterationType - The `iterationType` parameter is an optional parameter that specifies the
     * type of iteration to use when adding multiple keys or nodes. It has a default value of
     * `this.iterationType`, which suggests that it is a property of the current object.
     * @returns The function `addMany` returns an array of nodes (`N`) or `undefined` values.
     */
    addMany(keysOrNodesOrEntries, values, isBalanceAdd = true, iterationType = this.iterationType) {
      const inserted = [];
      let valuesIterator;
      if (values) {
        valuesIterator = values[Symbol.iterator]();
      }
      if (!isBalanceAdd) {
        for (const kve of keysOrNodesOrEntries) {
          const value = valuesIterator == null ? void 0 : valuesIterator.next().value;
          const nn = this.add(kve, value);
          inserted.push(nn);
        }
        return inserted;
      }
      const realBTNExemplars = [];
      const isRealBTNExemplar = (kve) => {
        if (kve === void 0 || kve === null)
          return false;
        return !(this.isEntry(kve) && (kve[0] === void 0 || kve[0] === null));
      };
      for (const kve of keysOrNodesOrEntries) {
        isRealBTNExemplar(kve) && realBTNExemplars.push(kve);
      }
      let sorted = [];
      sorted = realBTNExemplars.sort((a, b) => {
        let aR, bR;
        if (this.isEntry(a))
          aR = this.extractor(a[0]);
        else if (this.isRealNode(a))
          aR = this.extractor(a.key);
        else
          aR = this.extractor(a);
        if (this.isEntry(b))
          bR = this.extractor(b[0]);
        else if (this.isRealNode(b))
          bR = this.extractor(b.key);
        else
          bR = this.extractor(b);
        return aR - bR;
      });
      const _dfs = (arr) => {
        if (arr.length === 0)
          return;
        const mid = Math.floor((arr.length - 1) / 2);
        const newNode = this.add(arr[mid]);
        inserted.push(newNode);
        _dfs(arr.slice(0, mid));
        _dfs(arr.slice(mid + 1));
      };
      const _iterate = () => {
        const n = sorted.length;
        const stack = [[0, n - 1]];
        while (stack.length > 0) {
          const popped = stack.pop();
          if (popped) {
            const [l, r] = popped;
            if (l <= r) {
              const m = l + Math.floor((r - l) / 2);
              const newNode = this.add(sorted[m]);
              inserted.push(newNode);
              stack.push([m + 1, r]);
              stack.push([l, m - 1]);
            }
          }
        }
      };
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        _dfs(sorted);
      } else {
        _iterate();
      }
      return inserted;
    }
    /**
     * Time Complexity: O(n log n) - Adding each element individually in a balanced tree.
     * Space Complexity: O(n) - Additional space is required for the sorted array.
     */
    /**
     * Time Complexity: O(log n) - Average case for a balanced tree.
     * Space Complexity: O(1) - Constant space is used.
     *
     * The `lastKey` function returns the key of the rightmost node in a binary tree, or the key of the
     * leftmost node if the comparison result is greater than.
     * @param {K | N | undefined} beginRoot - The `beginRoot` parameter is optional and can be of
     * type `K`, `N`, or `undefined`. It represents the starting point for finding the last key in
     * the binary tree. If not provided, it defaults to the root of the binary tree (`this.root`).
     * @param iterationType - The `iterationType` parameter is used to specify the type of iteration to
     * be performed. It can have one of the following values:
     * @returns the key of the rightmost node in the binary tree if the comparison result is less than,
     * the key of the leftmost node if the comparison result is greater than, and the key of the
     * rightmost node otherwise. If no node is found, it returns 0.
     */
    lastKey(beginRoot = this.root) {
      let current = this.ensureNode(beginRoot);
      if (!current)
        return void 0;
      if (this._variant === "MIN" /* MIN */) {
        while (current.right !== void 0) {
          current = current.right;
        }
      } else {
        while (current.left !== void 0) {
          current = current.left;
        }
      }
      return current.key;
    }
    /**
     * Time Complexity: O(log n) - Average case for a balanced tree.
     * Space Complexity: O(1) - Constant space is used.
     */
    /**
     * Time Complexity: O(log n) - Average case for a balanced tree.
     * Space Complexity: O(log n) - Space for the recursive call stack in the worst case.
     *
     * The function `getNodeByKey` searches for a node in a binary tree based on a given key, using
     * either recursive or iterative methods.
     * @param {K} key - The `key` parameter is the key value that we are searching for in the tree.
     * It is used to identify the node that we want to retrieve.
     * @param iterationType - The `iterationType` parameter is an optional parameter that specifies the
     * type of iteration to use when searching for a node in the binary tree. It can have two possible
     * values:
     * @returns The function `getNodeByKey` returns a node (`N`) if a node with the specified key is
     * found in the binary tree. If no node is found, it returns `undefined`.
     */
    getNodeByKey(key, iterationType = "ITERATIVE" /* ITERATIVE */) {
      if (!this.root)
        return void 0;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _dfs = (cur) => {
          if (cur.key === key)
            return cur;
          if (!cur.left && !cur.right)
            return;
          if (this._compare(cur.key, key) === "gt" /* gt */ && cur.left)
            return _dfs(cur.left);
          if (this._compare(cur.key, key) === "lt" /* lt */ && cur.right)
            return _dfs(cur.right);
        };
        return _dfs(this.root);
      } else {
        const queue = new Queue([this.root]);
        while (queue.size > 0) {
          const cur = queue.shift();
          if (cur) {
            if (this._compare(cur.key, key) === "eq" /* eq */)
              return cur;
            if (this._compare(cur.key, key) === "gt" /* gt */)
              cur.left && queue.push(cur.left);
            if (this._compare(cur.key, key) === "lt" /* lt */)
              cur.right && queue.push(cur.right);
          }
        }
      }
    }
    /**
     * The function "isNotNodeInstance" checks if a potential key is a K.
     * @param {any} potentialKey - The potentialKey parameter is of type any, which means it can be any
     * data type.
     * @returns a boolean value indicating whether the potentialKey is of type number or not.
     */
    isNotNodeInstance(potentialKey) {
      return !(potentialKey instanceof BSTNode);
    }
    /**
     * Time Complexity: O(log n) - Average case for a balanced tree.
     * Space Complexity: O(log n) - Space for the recursive call stack in the worst case.
     */
    /**
     * The function `ensureNode` returns the node corresponding to the given key if it is a node key,
     * otherwise it returns the key itself.
     * @param {K | N | undefined} key - The `key` parameter can be of type `K`, `N`, or
     * `undefined`.
     * @param iterationType - The `iterationType` parameter is an optional parameter that specifies the
     * type of iteration to be performed. It has a default value of `IterationType.ITERATIVE`.
     * @returns either a node object (N) or undefined.
     */
    ensureNode(key, iterationType = "ITERATIVE" /* ITERATIVE */) {
      return this.isNotNodeInstance(key) ? this.getNodeByKey(key, iterationType) : key;
    }
    /**
     * Time Complexity: O(log n) - Average case for a balanced tree. O(n) - Visiting each node once when identifier is not node's key.
     * Space Complexity: O(log n) - Space for the recursive call stack in the worst case.
     *
     * The function `getNodes` returns an array of nodes that match a given identifier, using either a
     * recursive or iterative approach.
     * @param {ReturnType<C> | undefined} identifier - The `identifier` parameter is the value that you
     * want to search for in the nodes of the binary tree. It can be of any type that is returned by the
     * callback function `C`.
     * @param {C} callback - The `callback` parameter is a function that takes a node of type `N` as its
     * argument and returns a value of type `ReturnType<C>`. The `C` type parameter represents a callback
     * function type that extends the `BTNCallback<N>` type. The `BTNCallback<N>` type is
     * @param [onlyOne=false] - A boolean flag indicating whether to stop searching after finding the
     * first node that matches the identifier. If set to true, the function will return an array
     * containing only the first matching node. If set to false (default), the function will continue
     * searching for all nodes that match the identifier and return an array containing
     * @param {K | N | undefined} beginRoot - The `beginRoot` parameter represents the starting node
     * for the traversal. It can be either a key value or a node object. If it is undefined, the
     * traversal will start from the root of the tree.
     * @param iterationType - The `iterationType` parameter determines the type of iteration to be
     * performed on the binary tree. It can have two possible values:
     * @returns The method returns an array of nodes (`N[]`).
     */
    getNodes(identifier, callback = this._defaultOneParamCallback, onlyOne = false, beginRoot = this.root, iterationType = this.iterationType) {
      beginRoot = this.ensureNode(beginRoot);
      if (!beginRoot)
        return [];
      const ans = [];
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _traverse = (cur) => {
          const callbackResult = callback(cur);
          if (callbackResult === identifier) {
            ans.push(cur);
            if (onlyOne)
              return;
          }
          if (!cur.left && !cur.right)
            return;
          if (callback === this._defaultOneParamCallback) {
            if (this._compare(cur.key, identifier) === "gt" /* gt */)
              cur.left && _traverse(cur.left);
            if (this._compare(cur.key, identifier) === "lt" /* lt */)
              cur.right && _traverse(cur.right);
          } else {
            cur.left && _traverse(cur.left);
            cur.right && _traverse(cur.right);
          }
        };
        _traverse(beginRoot);
      } else {
        const queue = new Queue([beginRoot]);
        while (queue.size > 0) {
          const cur = queue.shift();
          if (cur) {
            const callbackResult = callback(cur);
            if (callbackResult === identifier) {
              ans.push(cur);
              if (onlyOne)
                return ans;
            }
            if (callback === this._defaultOneParamCallback) {
              if (this._compare(cur.key, identifier) === "gt" /* gt */)
                cur.left && queue.push(cur.left);
              if (this._compare(cur.key, identifier) === "lt" /* lt */)
                cur.right && queue.push(cur.right);
            } else {
              cur.left && queue.push(cur.left);
              cur.right && queue.push(cur.right);
            }
          }
        }
      }
      return ans;
    }
    /**
     * Time Complexity: O(log n) - Average case for a balanced tree. O(n) - Visiting each node once when identifier is not node's key.
     * Space Complexity: O(log n) - Space for the recursive call stack in the worst case.
     */
    /**
     * Time Complexity: O(log n) - Average case for a balanced tree. O(n) - Visiting each node once when identifier is not node's key.
     * Space Complexity: O(log n) - Space for the recursive call stack in the worst case.
     *
     * The `lesserOrGreaterTraverse` function traverses a binary tree and returns an array of nodes that
     * are either lesser or greater than a target node, depending on the specified comparison type.
     * @param {C} callback - The `callback` parameter is a function that will be called for each node
     * that satisfies the condition specified by the `lesserOrGreater` parameter. It takes a single
     * parameter of type `N` (the node type) and returns a value of any type.
     * @param {CP} lesserOrGreater - The `lesserOrGreater` parameter is used to determine whether to
     * traverse nodes that are lesser than, greater than, or equal to the `targetNode`. It is of type
     * `CP`, which is a custom type representing the comparison operator. The possible values for
     * `lesserOrGreater` are
     * @param {K | N | undefined} targetNode - The `targetNode` parameter represents the node in the
     * binary tree that you want to traverse from. It can be specified either by its key, by the node
     * object itself, or it can be left undefined to start the traversal from the root of the tree.
     * @param iterationType - The `iterationType` parameter determines the type of traversal to be
     * performed on the binary tree. It can have two possible values:
     * @returns The function `lesserOrGreaterTraverse` returns an array of values of type
     * `ReturnType<C>`, which is the return type of the callback function passed as an argument.
     */
    lesserOrGreaterTraverse(callback = this._defaultOneParamCallback, lesserOrGreater = "lt" /* lt */, targetNode = this.root, iterationType = this.iterationType) {
      targetNode = this.ensureNode(targetNode);
      const ans = [];
      if (!targetNode)
        return ans;
      if (!this.root)
        return ans;
      const targetKey = targetNode.key;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _traverse = (cur) => {
          const compared = this._compare(cur.key, targetKey);
          if (compared === lesserOrGreater)
            ans.push(callback(cur));
          if (!cur.left && !cur.right)
            return;
          if (cur.left && this._compare(cur.left.key, targetKey) === lesserOrGreater)
            _traverse(cur.left);
          if (cur.right && this._compare(cur.right.key, targetKey) === lesserOrGreater)
            _traverse(cur.right);
        };
        _traverse(this.root);
        return ans;
      } else {
        const queue = new Queue([this.root]);
        while (queue.size > 0) {
          const cur = queue.shift();
          if (cur) {
            const compared = this._compare(cur.key, targetKey);
            if (compared === lesserOrGreater)
              ans.push(callback(cur));
            if (cur.left && this._compare(cur.left.key, targetKey) === lesserOrGreater)
              queue.push(cur.left);
            if (cur.right && this._compare(cur.right.key, targetKey) === lesserOrGreater)
              queue.push(cur.right);
          }
        }
        return ans;
      }
    }
    /**
     * Time Complexity: O(log n) - Average case for a balanced tree. O(n) - Visiting each node once when identifier is not node's key.
     * Space Complexity: O(log n) - Space for the recursive call stack in the worst case.
     */
    /**
     * Time Complexity: O(n) - Building a balanced tree from a sorted array.
     * Space Complexity: O(n) - Additional space is required for the sorted array.
     *
     * The `perfectlyBalance` function balances a binary search tree by adding nodes in a way that
     * ensures the tree is perfectly balanced.
     * @param iterationType - The `iterationType` parameter is an optional parameter that specifies the
     * type of iteration to use when building a balanced binary search tree. It can have two possible
     * values:
     * @returns The function `perfectlyBalance` returns a boolean value.
     */
    perfectlyBalance(iterationType = this.iterationType) {
      const sorted = this.dfs((node) => node, "in"), n = sorted.length;
      this.clear();
      if (sorted.length < 1)
        return false;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const buildBalanceBST = (l, r) => {
          if (l > r)
            return;
          const m = l + Math.floor((r - l) / 2);
          const midNode = sorted[m];
          this.add([midNode.key, midNode.value]);
          buildBalanceBST(l, m - 1);
          buildBalanceBST(m + 1, r);
        };
        buildBalanceBST(0, n - 1);
        return true;
      } else {
        const stack = [[0, n - 1]];
        while (stack.length > 0) {
          const popped = stack.pop();
          if (popped) {
            const [l, r] = popped;
            if (l <= r) {
              const m = l + Math.floor((r - l) / 2);
              const midNode = sorted[m];
              this.add([midNode.key, midNode.value]);
              stack.push([m + 1, r]);
              stack.push([l, m - 1]);
            }
          }
        }
        return true;
      }
    }
    /**
     * Balancing Adjustment:
     * Perfectly Balanced Binary Tree: Since the balance of a perfectly balanced binary tree is already fixed, no additional balancing adjustment is needed. Any insertion or deletion operation will disrupt the perfect balance, often requiring a complete reconstruction of the tree.
     * AVL Tree: After insertion or deletion operations, an AVL tree performs rotation adjustments based on the balance factor of nodes to restore the tree's balance. These rotations can be left rotations, right rotations, left-right rotations, or right-left rotations, performed as needed.
     *
     * Use Cases and Efficiency:
     * Perfectly Balanced Binary Tree: Perfectly balanced binary trees are typically used in specific scenarios such as complete binary heaps in heap sort or certain types of Huffman trees. However, they are not suitable for dynamic operations requiring frequent insertions and deletions, as these operations often necessitate full tree reconstruction.
     * AVL Tree: AVL trees are well-suited for scenarios involving frequent searching, insertion, and deletion operations. Through rotation adjustments, AVL trees maintain their balance, ensuring average and worst-case time complexity of O(log n).
     */
    /**
     * Time Complexity: O(n) - Building a balanced tree from a sorted array.
     * Space Complexity: O(n) - Additional space is required for the sorted array.
     */
    /**
     * Time Complexity: O(n) - Visiting each node once.
     * Space Complexity: O(log n) - Space for the recursive call stack in the worst case.
     *
     * The function checks if a binary tree is AVL balanced using either recursive or iterative approach.
     * @param iterationType - The `iterationType` parameter is used to determine the method of iteration
     * to check if the AVL tree is balanced. It can have two possible values:
     * @returns a boolean value.
     */
    isAVLBalanced(iterationType = this.iterationType) {
      var _a, _b;
      if (!this.root)
        return true;
      let balanced = true;
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const _height = (cur) => {
          if (!cur)
            return 0;
          const leftHeight = _height(cur.left), rightHeight = _height(cur.right);
          if (Math.abs(leftHeight - rightHeight) > 1)
            balanced = false;
          return Math.max(leftHeight, rightHeight) + 1;
        };
        _height(this.root);
      } else {
        const stack = [];
        let node = this.root, last = void 0;
        const depths = /* @__PURE__ */ new Map();
        while (stack.length > 0 || node) {
          if (node) {
            stack.push(node);
            node = node.left;
          } else {
            node = stack[stack.length - 1];
            if (!node.right || last === node.right) {
              node = stack.pop();
              if (node) {
                const left = node.left ? (_a = depths.get(node.left)) != null ? _a : -1 : -1;
                const right = node.right ? (_b = depths.get(node.right)) != null ? _b : -1 : -1;
                if (Math.abs(left - right) > 1)
                  return false;
                depths.set(node, 1 + Math.max(left, right));
                last = node;
                node = void 0;
              }
            } else
              node = node.right;
          }
        }
      }
      return balanced;
    }
    _setRoot(v) {
      if (v) {
        v.parent = void 0;
      }
      this._root = v;
    }
    /**
     * The function compares two values using a comparator function and returns whether the first value
     * is greater than, less than, or equal to the second value.
     * @param {K} a - The parameter "a" is of type K.
     * @param {K} b - The parameter "b" in the above code represents a K.
     * @returns a value of type CP (ComparisonResult). The possible return values are CP.gt (greater
     * than), CP.lt (less than), or CP.eq (equal).
     */
    _compare(a, b) {
      const extractedA = this.extractor(a);
      const extractedB = this.extractor(b);
      const compared = this.variant === "MIN" /* MIN */ ? extractedA - extractedB : extractedB - extractedA;
      return compared > 0 ? "gt" /* gt */ : compared < 0 ? "lt" /* lt */ : "eq" /* eq */;
    }
  };

  // src/data-structures/binary-tree/binary-indexed-tree.ts
  var BinaryIndexedTree = class {
    /**
     * The constructor initializes the properties of an object, including default frequency, maximum
     * value, a freqMap data structure, the most significant bit, and the count of negative frequencies.
     * @param  - - `frequency`: The default frequency value. It is optional and has a default
     * value of 0.
     */
    constructor({ frequency = 0, max }) {
      __publicField(this, "_freq");
      __publicField(this, "_max");
      __publicField(this, "_freqMap");
      __publicField(this, "_msb");
      __publicField(this, "_negativeCount");
      this._freq = frequency;
      this._max = max;
      this._freqMap = { 0: 0 };
      this._msb = getMSB(max);
      this._negativeCount = frequency < 0 ? max : 0;
    }
    get freqMap() {
      return this._freqMap;
    }
    get msb() {
      return this._msb;
    }
    get negativeCount() {
      return this._negativeCount;
    }
    get freq() {
      return this._freq;
    }
    get max() {
      return this._max;
    }
    /**
     * The function "readSingle" reads a single number from a specified index.
     * @param {number} index - The `index` parameter is a number that represents the index of an element in a
     * collection or array.
     * @returns a number.
     */
    readSingle(index) {
      this._checkIndex(index);
      return this._readSingle(index);
    }
    /**
     * The "update" function updates the value at a given index by adding a delta and triggers a callback
     * to notify of the change.
     * @param {number} position - The `index` parameter represents the index of the element that needs to be
     * updated in the data structure.
     * @param {number} change - The "delta" parameter represents the change in value that needs to be
     * applied to the frequency at the specified index.
     */
    update(position, change) {
      this._checkIndex(position);
      const freqCur = this._readSingle(position);
      this._update(position, change);
      this._updateNegativeCount(freqCur, freqCur + change);
    }
    /**
     * The function "writeSingle" checks the index and writes a single value with a given frequency.
     * @param {number} index - The `index` parameter is a number that represents the index of an element. It
     * is used to identify the specific element that needs to be written.
     * @param {number} freq - The `freq` parameter represents the frequency value that needs to be
     * written.
     */
    writeSingle(index, freq) {
      this._checkIndex(index);
      this._writeSingle(index, freq);
    }
    /**
     * The read function takes a count parameter, checks if it is an integer, and returns the result of
     * calling the _read function with the count parameter clamped between 0 and the maximum value.
     * @param {number} count - The `count` parameter is a number that represents the number of items to
     * read.
     * @returns a number.
     */
    read(count) {
      if (!Number.isInteger(count)) {
        throw new Error("Invalid count");
      }
      return this._read(Math.max(Math.min(count, this.max), 0));
    }
    /**
     * The function returns the lower bound of a non-descending sequence that sums up to a given number.
     * @param {number} sum - The `sum` parameter is a number that represents the target sum that we want
     * to find in the sequence.
     * @returns The lowerBound function is returning a number.
     */
    lowerBound(sum) {
      if (this.negativeCount > 0) {
        throw new Error("Sequence is not non-descending");
      }
      return this._binarySearch(sum, (x, y) => x < y);
    }
    /**
     * The upperBound function returns the index of the first element in a sequence that is greater than
     * or equal to a given sum.
     * @param {number} sum - The "sum" parameter is a number that represents the target sum that we want
     * to find in the sequence.
     * @returns The upperBound function is returning a number.
     */
    upperBound(sum) {
      if (this.negativeCount > 0) {
        throw new Error("Must not be descending");
      }
      return this._binarySearch(sum, (x, y) => x <= y);
    }
    /**
     * The function calculates the prefix sum of an array using a binary indexed tree.
     * @param {number} i - The parameter "i" in the function "getPrefixSum" represents the index of the element in the
     * array for which we want to calculate the prefix sum.
     * @returns The function `getPrefixSum` returns the prefix sum of the elements in the binary indexed tree up to index
     * `i`.
     */
    getPrefixSum(i) {
      this._checkIndex(i);
      i++;
      let sum = 0;
      while (i > 0) {
        sum += this._getFrequency(i);
        i -= i & -i;
      }
      return sum;
    }
    /**
     * The function returns the value of a specific index in a freqMap data structure, or a default value if
     * the index is not found.
     * @param {number} index - The `index` parameter is a number that represents the index of a node in a
     * freqMap data structure.
     * @returns a number.
     */
    _getFrequency(index) {
      if (index in this.freqMap) {
        return this.freqMap[index];
      }
      return this.freq * (index & -index);
    }
    /**
     * The function _updateFrequency adds a delta value to the element at the specified index in the freqMap array.
     * @param {number} index - The index parameter is a number that represents the index of the freqMap
     * element that needs to be updated.
     * @param {number} delta - The `delta` parameter represents the change in value that needs to be
     * added to the freqMap at the specified `index`.
     */
    _updateFrequency(index, delta) {
      this.freqMap[index] = this._getFrequency(index) + delta;
    }
    /**
     * The function checks if the given index is valid and within the range.
     * @param {number} index - The parameter "index" is of type number and represents the index value
     * that needs to be checked.
     */
    _checkIndex(index) {
      if (!Number.isInteger(index)) {
        throw new Error("Invalid index: Index must be an integer.");
      }
      if (index < 0 || index >= this.max) {
        throw new Error("Index out of range: Index must be within the range [0, this.max).");
      }
    }
    /**
     * The function calculates the sum of elements in an array up to a given index using a binary indexed
     * freqMap.
     * @param {number} index - The `index` parameter is a number that represents the index of an element in a
     * data structure.
     * @returns a number.
     */
    _readSingle(index) {
      index = index + 1;
      let sum = this._getFrequency(index);
      const z = index - (index & -index);
      index--;
      while (index !== z) {
        sum -= this._getFrequency(index);
        index -= index & -index;
      }
      return sum;
    }
    /**
     * The function `_updateNegativeCount` updates a counter based on changes in frequency values.
     * @param {number} freqCur - The current frequency value.
     * @param {number} freqNew - The freqNew parameter represents the new frequency value.
     */
    _updateNegativeCount(freqCur, freqNew) {
      if (freqCur < 0 && freqNew >= 0) {
        this._negativeCount--;
      } else if (freqCur >= 0 && freqNew < 0) {
        this._negativeCount++;
      }
    }
    /**
     * The `_update` function updates the values in a binary indexed freqMap starting from a given index and
     * propagating the changes to its parent nodes.
     * @param {number} index - The `index` parameter is a number that represents the index of the element in
     * the data structure that needs to be updated.
     * @param {number} delta - The `delta` parameter represents the change in value that needs to be
     * applied to the elements in the data structure.
     */
    _update(index, delta) {
      index = index + 1;
      while (index <= this.max) {
        this._updateFrequency(index, delta);
        index += index & -index;
      }
    }
    /**
     * The `_writeSingle` function updates the frequency at a specific index and triggers a callback if
     * the frequency has changed.
     * @param {number} index - The `index` parameter is a number that represents the index of the element
     * being modified or accessed.
     * @param {number} freq - The `freq` parameter represents the new frequency value that needs to be
     * written to the specified index `index`.
     */
    _writeSingle(index, freq) {
      const freqCur = this._readSingle(index);
      this._update(index, freq - freqCur);
      this._updateNegativeCount(freqCur, freq);
    }
    /**
     * The `_read` function calculates the sum of values in a binary freqMap up to a given count.
     * @param {number} count - The `count` parameter is a number that represents the number of elements
     * to read from the freqMap.
     * @returns the sum of the values obtained from calling the `_getFrequency` method for each index in the
     * range from `count` to 1.
     */
    _read(count) {
      let index = count;
      let sum = 0;
      while (index) {
        sum += this._getFrequency(index);
        index -= index & -index;
      }
      return sum;
    }
    /**
     * The function `_binarySearch` performs a binary search to find the largest number that satisfies a given
     * condition.
     * @param {number} sum - The sum parameter is a number that represents the target sum value.
     * @param before - The `before` parameter is a function that takes two numbers `x` and `y` as
     * arguments and returns a boolean value. It is used to determine if `x` is less than or equal to
     * `y`. The purpose of this function is to compare two numbers and determine their order.
     * @returns the value of the variable "left".
     */
    _binarySearch(sum, before) {
      let left = 0;
      let right = this.msb << 1;
      let sumT = sum;
      while (right > left + 1) {
        const middle = left + right >> 1;
        const sumM = this._getFrequency(middle);
        if (middle <= this.max && before(sumM, sumT)) {
          sumT -= sumM;
          left = middle;
        } else {
          right = middle;
        }
      }
      return left;
    }
  };

  // src/data-structures/binary-tree/segment-tree.ts
  var SegmentTreeNode = class {
    constructor(start, end, sum, value) {
      __publicField(this, "start", 0);
      __publicField(this, "end", 0);
      __publicField(this, "value");
      __publicField(this, "sum", 0);
      __publicField(this, "left");
      __publicField(this, "right");
      this.start = start;
      this.end = end;
      this.sum = sum;
      this.value = value || void 0;
    }
  };
  var SegmentTree = class {
    /**
     * The constructor initializes the values, start, end, and root properties of an object.
     * @param {number[]} values - An array of numbers that will be used to build a binary search tree.
     * @param {number} [start] - The `start` parameter is the index of the first element in the `values` array that should
     * be included in the range. If no value is provided for `start`, it defaults to 0, which means the range starts from
     * the beginning of the array.
     * @param {number} [end] - The "end" parameter is the index of the last element in the "values" array that should be
     * included in the range. If not provided, it defaults to the index of the last element in the "values" array.
     */
    constructor(values, start, end) {
      __publicField(this, "_values", []);
      __publicField(this, "_start", 0);
      __publicField(this, "_end");
      __publicField(this, "_root");
      start = start || 0;
      end = end || values.length - 1;
      this._values = values;
      this._start = start;
      this._end = end;
      if (values.length > 0) {
        this._root = this.build(start, end);
      } else {
        this._root = void 0;
        this._values = [];
      }
    }
    get values() {
      return this._values;
    }
    get start() {
      return this._start;
    }
    get end() {
      return this._end;
    }
    get root() {
      return this._root;
    }
    /**
     * The build function creates a segment tree by recursively dividing the given range into smaller segments and assigning
     * the sum of values to each segment.
     * @param {number} start - The `start` parameter represents the starting index of the segment or range for which we are
     * building the segment tree.
     * @param {number} end - The "end" parameter represents the ending index of the segment or range for which we want to
     * build a segment tree.
     * @returns a SegmentTreeNode object.
     */
    build(start, end) {
      if (start > end) {
        return new SegmentTreeNode(start, end, 0);
      }
      if (start === end)
        return new SegmentTreeNode(start, end, this._values[start]);
      const mid = start + Math.floor((end - start) / 2);
      const left = this.build(start, mid);
      const right = this.build(mid + 1, end);
      const cur = new SegmentTreeNode(start, end, left.sum + right.sum);
      cur.left = left;
      cur.right = right;
      return cur;
    }
    /**
     * The function updates the value of a node in a segment tree and recalculates the sum of its children if they exist.
     * @param {number} index - The index parameter represents the index of the node in the segment tree that needs to be
     * updated.
     * @param {number} sum - The `sum` parameter represents the new value that should be assigned to the `sum` property of
     * the `SegmentTreeNode` at the specified `index`.
     * @param {SegmentTreeNodeVal} [value] - The `value` parameter is an optional value that can be assigned to the `value`
     * property of the `SegmentTreeNode` object. It is not currently used in the code, but you can uncomment the line `//
     * cur.value = value;` and pass a value for `value` in the
     * @returns The function does not return anything.
     */
    updateNode(index, sum, value) {
      const root = this.root || void 0;
      if (!root) {
        return;
      }
      const dfs = (cur, index2, sum2, value2) => {
        if (cur.start === cur.end && cur.start === index2) {
          cur.sum = sum2;
          if (value2 !== void 0)
            cur.value = value2;
          return;
        }
        const mid = cur.start + Math.floor((cur.end - cur.start) / 2);
        if (index2 <= mid) {
          if (cur.left) {
            dfs(cur.left, index2, sum2, value2);
          }
        } else {
          if (cur.right) {
            dfs(cur.right, index2, sum2, value2);
          }
        }
        if (cur.left && cur.right) {
          cur.sum = cur.left.sum + cur.right.sum;
        }
      };
      dfs(root, index, sum, value);
    }
    /**
     * The function `querySumByRange` calculates the sum of values within a given range in a segment tree.
     * @param {number} indexA - The starting index of the range for which you want to calculate the sum.
     * @param {number} indexB - The parameter `indexB` represents the ending index of the range for which you want to
     * calculate the sum.
     * @returns The function `querySumByRange` returns a number.
     */
    querySumByRange(indexA, indexB) {
      const root = this.root || void 0;
      if (!root) {
        return 0;
      }
      if (indexA < 0 || indexB >= this.values.length || indexA > indexB) {
        return NaN;
      }
      const dfs = (cur, i, j) => {
        if (i <= cur.start && j >= cur.end) {
          return cur.sum;
        }
        const mid = cur.start + Math.floor((cur.end - cur.start) / 2);
        if (j <= mid) {
          if (cur.left) {
            return dfs(cur.left, i, j);
          } else {
            return NaN;
          }
        } else if (i > mid) {
          if (cur.right) {
            return dfs(cur.right, i, j);
          } else {
            return NaN;
          }
        } else {
          let leftSum = 0;
          let rightSum = 0;
          if (cur.left) {
            leftSum = dfs(cur.left, i, mid);
          }
          if (cur.right) {
            rightSum = dfs(cur.right, mid + 1, j);
          }
          return leftSum + rightSum;
        }
      };
      return dfs(root, indexA, indexB);
    }
  };

  // src/data-structures/binary-tree/avl-tree.ts
  var AVLTreeNode = class extends BSTNode {
    constructor(key, value) {
      super(key, value);
      __publicField(this, "height");
      this.height = 0;
    }
  };
  var AVLTree = class _AVLTree extends BST {
    /**
     * The constructor function initializes an AVLTree object with optional elements and options.
     * @param [elements] - The `elements` parameter is an optional iterable of `BTNExemplar<K, V, N>`
     * objects. It represents a collection of elements that will be added to the AVL tree during
     * initialization.
     * @param [options] - The `options` parameter is an optional object that allows you to customize the
     * behavior of the AVL tree. It is of type `Partial<AVLTreeOptions>`, which means that you can
     * provide only a subset of the properties defined in the `AVLTreeOptions` interface.
     */
    constructor(elements, options) {
      super([], options);
      if (elements)
        super.addMany(elements);
    }
    /**
     * The function creates a new AVL tree node with the specified key and value.
     * @param {K} key - The key parameter is the key value that will be associated with
     * the new node. It is used to determine the position of the node in the binary search tree.
     * @param [value] - The parameter `value` is an optional value that can be assigned to the node. It is of
     * type `V`, which means it can be any value that is assignable to the `value` property of the
     * node type `N`.
     * @returns a new AVLTreeNode object with the specified key and value.
     */
    createNode(key, value) {
      return new AVLTreeNode(key, value);
    }
    /**
     * The function creates a new AVL tree with the specified options and returns it.
     * @param {AVLTreeOptions} [options] - The `options` parameter is an optional object that can be
     * passed to the `createTree` function. It is used to customize the behavior of the AVL tree that is
     * being created.
     * @returns a new AVLTree object.
     */
    createTree(options) {
      return new _AVLTree([], __spreadValues({
        iterationType: this.iterationType,
        variant: this.variant
      }, options));
    }
    /**
     * The function checks if an exemplar is an instance of AVLTreeNode.
     * @param exemplar - The `exemplar` parameter is of type `BTNExemplar<K, V, N>`.
     * @returns a boolean value indicating whether the exemplar is an instance of the AVLTreeNode class.
     */
    isNode(exemplar) {
      return exemplar instanceof AVLTreeNode;
    }
    /**
     * The function "isNotNodeInstance" checks if a potential key is a K.
     * @param {any} potentialKey - The potentialKey parameter is of type any, which means it can be any
     * data type.
     * @returns a boolean value indicating whether the potentialKey is of type number or not.
     */
    isNotNodeInstance(potentialKey) {
      return !(potentialKey instanceof AVLTreeNode);
    }
    /**
     * Time Complexity: O(log n) - logarithmic time, where "n" is the number of nodes in the tree. The add method of the superclass (BST) has logarithmic time complexity.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     */
    /**
     * Time Complexity: O(log n) - logarithmic time, where "n" is the number of nodes in the tree. The add method of the superclass (BST) has logarithmic time complexity.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     *
     * The function overrides the add method of a binary tree node and balances the tree after inserting
     * a new node.
     * @param keyOrNodeOrEntry - The `keyOrNodeOrEntry` parameter can be either a key, a node, or an
     * entry.
     * @param {V} [value] - The `value` parameter represents the value associated with the key that is
     * being added to the binary tree.
     * @returns The method is returning either the inserted node or undefined.
     */
    add(keyOrNodeOrEntry, value) {
      if (keyOrNodeOrEntry === null)
        return void 0;
      const inserted = super.add(keyOrNodeOrEntry, value);
      if (inserted)
        this._balancePath(inserted);
      return inserted;
    }
    /**
     * Time Complexity: O(log n) - logarithmic time, where "n" is the number of nodes in the tree. The add method of the superclass (BST) has logarithmic time complexity.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     */
    /**
     * Time Complexity: O(log n) - logarithmic time, where "n" is the number of nodes in the tree. The delete method of the superclass (BST) has logarithmic time complexity.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     *
     * The function overrides the delete method of a binary tree, performs the deletion, and then
     * balances the tree if necessary.
     * @param identifier - The `identifier` parameter is the value or condition used to identify the
     * node(s) to be deleted from the binary tree. It can be of any type and is the return type of the
     * `callback` function.
     * @param {C} callback - The `callback` parameter is a function that will be called for each node
     * that is deleted from the binary tree. It is an optional parameter and if not provided, it will
     * default to the `_defaultOneParamCallback` function. The `callback` function should have a single
     * parameter of type `N
     * @returns The method is returning an array of `BinaryTreeDeleteResult<N>`.
     */
    delete(identifier, callback = this._defaultOneParamCallback) {
      if (identifier instanceof AVLTreeNode)
        callback = (node) => node;
      const deletedResults = super.delete(identifier, callback);
      for (const { needBalanced } of deletedResults) {
        if (needBalanced) {
          this._balancePath(needBalanced);
        }
      }
      return deletedResults;
    }
    /**
     * The `_swapProperties` function swaps the key, value, and height properties between two nodes in a binary
     * tree.
     * @param {K | N | undefined} srcNode - The `srcNode` parameter represents the source node that
     * needs to be swapped with the destination node. It can be of type `K`, `N`, or `undefined`.
     * @param {K | N  | undefined} destNode - The `destNode` parameter represents the destination
     * node where the values from the source node will be swapped to.
     * @returns either the `destNode` object if both `srcNode` and `destNode` are defined, or `undefined`
     * if either `srcNode` or `destNode` is undefined.
     */
    _swapProperties(srcNode, destNode) {
      srcNode = this.ensureNode(srcNode);
      destNode = this.ensureNode(destNode);
      if (srcNode && destNode) {
        const { key, value, height } = destNode;
        const tempNode = this.createNode(key, value);
        if (tempNode) {
          tempNode.height = height;
          destNode.key = srcNode.key;
          destNode.value = srcNode.value;
          destNode.height = srcNode.height;
          srcNode.key = tempNode.key;
          srcNode.value = tempNode.value;
          srcNode.height = tempNode.height;
        }
        return destNode;
      }
      return void 0;
    }
    /**
     * Time Complexity: O(1) - constant time, as it performs a fixed number of operations.
     * Space Complexity: O(1) - constant space, as it only uses a constant amount of memory.
     */
    /**
     * Time Complexity: O(1) - constant time, as it performs a fixed number of operations.
     * Space Complexity: O(1) - constant space, as it only uses a constant amount of memory.
     *
     * The function calculates the balance factor of a node in a binary tree.
     * @param {N} node - The parameter "node" represents a node in a binary tree data structure.
     * @returns the balance factor of a given node. The balance factor is calculated by subtracting the
     * height of the left subtree from the height of the right subtree.
     */
    _balanceFactor(node) {
      if (!node.right)
        return -node.height;
      else if (!node.left)
        return +node.height;
      else
        return node.right.height - node.left.height;
    }
    /**
     * Time Complexity: O(1) - constant time, as it performs a fixed number of operations.
     * Space Complexity: O(1) - constant space, as it only uses a constant amount of memory.
     */
    /**
     * Time Complexity: O(1) - constant time, as it performs a fixed number of operations.
     * Space Complexity: O(1) - constant space, as it only uses a constant amount of memory.
     *
     * The function updates the height of a node in a binary tree based on the heights of its left and
     * right children.
     * @param {N} node - The parameter "node" represents a node in a binary tree data structure.
     */
    _updateHeight(node) {
      if (!node.left && !node.right)
        node.height = 0;
      else if (!node.left) {
        const rightHeight = node.right ? node.right.height : 0;
        node.height = 1 + rightHeight;
      } else if (!node.right)
        node.height = 1 + node.left.height;
      else
        node.height = 1 + Math.max(node.right.height, node.left.height);
    }
    /**
     * Time Complexity: O(log n) - logarithmic time, where "n" is the number of nodes in the tree. The method traverses the path from the inserted node to the root.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     */
    /**
     * Time Complexity: O(log n) - logarithmic time, where "n" is the number of nodes in the tree. The method traverses the path from the inserted node to the root.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     *
     * The `_balancePath` function is used to update the heights of nodes and perform rotation operations
     * to restore balance in an AVL tree after inserting a node.
     * @param {N} node - The `node` parameter in the `_balancePath` function represents the node in the
     * AVL tree that needs to be balanced.
     */
    _balancePath(node) {
      const path = this.getPathToRoot(node, false);
      for (let i = 0; i < path.length; i++) {
        const A = path[i];
        this._updateHeight(A);
        switch (this._balanceFactor(A)) {
          case -2:
            if (A && A.left) {
              if (this._balanceFactor(A.left) <= 0) {
                this._balanceLL(A);
              } else {
                this._balanceLR(A);
              }
            }
            break;
          case 2:
            if (A && A.right) {
              if (this._balanceFactor(A.right) >= 0) {
                this._balanceRR(A);
              } else {
                this._balanceRL(A);
              }
            }
        }
      }
    }
    /**
     * Time Complexity: O(1) - constant time, as these methods perform a fixed number of operations.
     * Space Complexity: O(1) - constant space, as they only use a constant amount of memory.
     */
    /**
     * Time Complexity: O(1) - constant time, as these methods perform a fixed number of operations.
     * Space Complexity: O(1) - constant space, as they only use a constant amount of memory.
     *
     * The function `_balanceLL` performs a left-left rotation to balance a binary tree.
     * @param {N} A - A is a node in a binary tree.
     */
    _balanceLL(A) {
      const parentOfA = A.parent;
      const B = A.left;
      A.parent = B;
      if (B && B.right) {
        B.right.parent = A;
      }
      if (B)
        B.parent = parentOfA;
      if (A === this.root) {
        if (B)
          this._setRoot(B);
      } else {
        if ((parentOfA == null ? void 0 : parentOfA.left) === A) {
          parentOfA.left = B;
        } else {
          if (parentOfA)
            parentOfA.right = B;
        }
      }
      if (B) {
        A.left = B.right;
        B.right = A;
      }
      this._updateHeight(A);
      if (B)
        this._updateHeight(B);
    }
    /**
     * Time Complexity: O(1) - constant time, as these methods perform a fixed number of operations.
     * Space Complexity: O(1) - constant space, as they only use a constant amount of memory.
     */
    /**
     * Time Complexity: O(1) - constant time, as these methods perform a fixed number of operations.
     * Space Complexity: O(1) - constant space, as they only use a constant amount of memory.
     *
     * The `_balanceLR` function performs a left-right rotation to balance a binary tree.
     * @param {N} A - A is a node in a binary tree.
     */
    _balanceLR(A) {
      const parentOfA = A.parent;
      const B = A.left;
      let C = void 0;
      if (B) {
        C = B.right;
      }
      if (A)
        A.parent = C;
      if (B)
        B.parent = C;
      if (C) {
        if (C.left) {
          C.left.parent = B;
        }
        if (C.right) {
          C.right.parent = A;
        }
        C.parent = parentOfA;
      }
      if (A === this.root) {
        if (C)
          this._setRoot(C);
      } else {
        if (parentOfA) {
          if (parentOfA.left === A) {
            parentOfA.left = C;
          } else {
            parentOfA.right = C;
          }
        }
      }
      if (C) {
        A.left = C.right;
        if (B)
          B.right = C.left;
        C.left = B;
        C.right = A;
      }
      this._updateHeight(A);
      B && this._updateHeight(B);
      C && this._updateHeight(C);
    }
    /**
     * Time Complexity: O(1) - constant time, as these methods perform a fixed number of operations.
     * Space Complexity: O(1) - constant space, as they only use a constant amount of memory.
     */
    /**
     * Time Complexity: O(1) - constant time, as these methods perform a fixed number of operations.
     * Space Complexity: O(1) - constant space, as they only use a constant amount of memory.
     *
     * The function `_balanceRR` performs a right-right rotation to balance a binary tree.
     * @param {N} A - A is a node in a binary tree.
     */
    _balanceRR(A) {
      const parentOfA = A.parent;
      const B = A.right;
      A.parent = B;
      if (B) {
        if (B.left) {
          B.left.parent = A;
        }
        B.parent = parentOfA;
      }
      if (A === this.root) {
        if (B)
          this._setRoot(B);
      } else {
        if (parentOfA) {
          if (parentOfA.left === A) {
            parentOfA.left = B;
          } else {
            parentOfA.right = B;
          }
        }
      }
      if (B) {
        A.right = B.left;
        B.left = A;
      }
      this._updateHeight(A);
      B && this._updateHeight(B);
    }
    /**
     * Time Complexity: O(1) - constant time, as these methods perform a fixed number of operations.
     * Space Complexity: O(1) - constant space, as they only use a constant amount of memory.
     */
    /**
     * Time Complexity: O(1) - constant time, as these methods perform a fixed number of operations.
     * Space Complexity: O(1) - constant space, as they only use a constant amount of memory.
     *
     * The function `_balanceRL` performs a right-left rotation to balance a binary tree.
     * @param {N} A - A is a node in a binary tree.
     */
    _balanceRL(A) {
      const parentOfA = A.parent;
      const B = A.right;
      let C = void 0;
      if (B) {
        C = B.left;
      }
      A.parent = C;
      if (B)
        B.parent = C;
      if (C) {
        if (C.left) {
          C.left.parent = A;
        }
        if (C.right) {
          C.right.parent = B;
        }
        C.parent = parentOfA;
      }
      if (A === this.root) {
        if (C)
          this._setRoot(C);
      } else {
        if (parentOfA) {
          if (parentOfA.left === A) {
            parentOfA.left = C;
          } else {
            parentOfA.right = C;
          }
        }
      }
      if (C)
        A.right = C.left;
      if (B && C)
        B.left = C.right;
      if (C)
        C.left = A;
      if (C)
        C.right = B;
      this._updateHeight(A);
      B && this._updateHeight(B);
      C && this._updateHeight(C);
    }
    _replaceNode(oldNode, newNode) {
      newNode.height = oldNode.height;
      return super._replaceNode(oldNode, newNode);
    }
  };

  // src/data-structures/binary-tree/rb-tree.ts
  var RedBlackTreeNode = class extends BSTNode {
    constructor(key, value, color = 0 /* BLACK */) {
      super(key, value);
      __publicField(this, "color");
      this.color = color;
    }
  };
  var RedBlackTree = class _RedBlackTree extends BST {
    /**
     * This is the constructor function for a Red-Black Tree data structure in TypeScript, which
     * initializes the tree with optional elements and options.
     * @param [elements] - The `elements` parameter is an optional iterable of `BTNExemplar<K, V, N>`
     * objects. It represents the initial elements that will be added to the RBTree during its
     * construction. If this parameter is provided, the `addMany` method is called to add all the
     * elements to the
     * @param [options] - The `options` parameter is an optional object that allows you to customize the
     * behavior of the RBTree. It is of type `Partial<RBTreeOptions>`, which means that you can provide
     * only a subset of the properties defined in the `RBTreeOptions` interface.
     */
    constructor(elements, options) {
      super([], options);
      __publicField(this, "Sentinel", new RedBlackTreeNode(NaN));
      __publicField(this, "_root");
      __publicField(this, "_size", 0);
      this._root = this.Sentinel;
      if (elements)
        super.addMany(elements);
    }
    get root() {
      return this._root;
    }
    get size() {
      return this._size;
    }
    /**
     * The function creates a new Red-Black Tree node with the specified key, value, and color.
     * @param {K} key - The key parameter is the key value associated with the node. It is used to
     * identify and compare nodes in the Red-Black Tree.
     * @param {V} [value] - The `value` parameter is an optional parameter that represents the value
     * associated with the node. It is of type `V`, which is a generic type that can be replaced with any
     * specific type when using the `createNode` method.
     * @param {RBTNColor} color - The "color" parameter is used to specify the color of the node in a
     * Red-Black Tree. It can be either "RED" or "BLACK". By default, the color is set to "BLACK".
     * @returns The method is returning a new instance of a RedBlackTreeNode with the specified key,
     * value, and color.
     */
    createNode(key, value, color = 0 /* BLACK */) {
      return new RedBlackTreeNode(key, value, color);
    }
    /**
     * The function creates a Red-Black Tree with the specified options and returns it.
     * @param {RBTreeOptions} [options] - The `options` parameter is an optional object that can be
     * passed to the `createTree` function. It is used to customize the behavior of the `RedBlackTree`
     * class.
     * @returns a new instance of a RedBlackTree object.
     */
    createTree(options) {
      return new _RedBlackTree([], __spreadValues({
        iterationType: this.iterationType,
        variant: this.variant
      }, options));
    }
    /**
     * The function checks if an exemplar is an instance of the RedBlackTreeNode class.
     * @param exemplar - The `exemplar` parameter is of type `BTNExemplar<K, V, N>`.
     * @returns a boolean value indicating whether the exemplar is an instance of the RedBlackTreeNode
     * class.
     */
    isNode(exemplar) {
      return exemplar instanceof RedBlackTreeNode;
    }
    /**
     * The function "isNotNodeInstance" checks if a potential key is a K.
     * @param {any} potentialKey - The potentialKey parameter is of type any, which means it can be any
     * data type.
     * @returns a boolean value indicating whether the potentialKey is of type number or not.
     */
    isNotNodeInstance(potentialKey) {
      return !(potentialKey instanceof RedBlackTreeNode);
    }
    /**
     * The function `exemplarToNode` takes an exemplar and converts it into a node object if possible.
     * @param exemplar - The `exemplar` parameter is of type `BTNExemplar<K, V, N>`, where:
     * @param {V} [value] - The `value` parameter is an optional value that can be passed to the
     * `exemplarToNode` function. It represents the value associated with the exemplar node. If a value
     * is provided, it will be used when creating the new node. If no value is provided, the new node
     * @returns a node of type N or undefined.
     */
    exemplarToNode(exemplar, value) {
      let node;
      if (exemplar === null || exemplar === void 0) {
        return;
      } else if (this.isNode(exemplar)) {
        node = exemplar;
      } else if (this.isEntry(exemplar)) {
        const [key, value2] = exemplar;
        if (key === void 0 || key === null) {
          return;
        } else {
          node = this.createNode(key, value2, 1 /* RED */);
        }
      } else if (this.isNotNodeInstance(exemplar)) {
        node = this.createNode(exemplar, value, 1 /* RED */);
      } else {
        return;
      }
      return node;
    }
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     *
     * The `add` function adds a new node to a binary search tree and performs necessary rotations and
     * color changes to maintain the red-black tree properties.
     * @param keyOrNodeOrEntry - The `keyOrNodeOrEntry` parameter can be either a key, a node, or an
     * entry.
     * @param {V} [value] - The `value` parameter represents the value associated with the key that is
     * being added to the binary search tree.
     * @returns The method `add` returns either the newly added node (`N`) or `undefined`.
     */
    add(keyOrNodeOrEntry, value) {
      const newNode = this.exemplarToNode(keyOrNodeOrEntry, value);
      if (newNode === void 0)
        return;
      newNode.left = this.Sentinel;
      newNode.right = this.Sentinel;
      let y = void 0;
      let x = this.root;
      while (x !== this.Sentinel) {
        y = x;
        if (x) {
          if (newNode.key < x.key) {
            x = x.left;
          } else if (newNode.key > x.key) {
            x = x == null ? void 0 : x.right;
          } else {
            if (newNode !== x) {
              this._replaceNode(x, newNode);
            }
            return;
          }
        }
      }
      newNode.parent = y;
      if (y === void 0) {
        this._setRoot(newNode);
      } else if (newNode.key < y.key) {
        y.left = newNode;
      } else {
        y.right = newNode;
      }
      if (newNode.parent === void 0) {
        newNode.color = 0 /* BLACK */;
        this._size++;
        return;
      }
      if (newNode.parent.parent === void 0) {
        this._size++;
        return;
      }
      this._fixInsert(newNode);
      this._size++;
    }
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     *
     * The `delete` function removes a node from a binary tree based on a given identifier and updates
     * the tree accordingly.
     * @param {ReturnType<C> | null | undefined} identifier - The `identifier` parameter is the value
     * that you want to use to identify the node that you want to delete from the binary tree. It can be
     * of any type that is returned by the callback function `C`. It can also be `null` or `undefined` if
     * you don't want to
     * @param {C} callback - The `callback` parameter is a function that takes a node of type `N` and
     * returns a value of type `ReturnType<C>`. It is used to determine if a node should be deleted based
     * on its identifier. The `callback` function is optional and defaults to `this._defaultOneParam
     * @returns an array of `BinaryTreeDeleteResult<N>`.
     */
    delete(identifier, callback = this._defaultOneParamCallback) {
      const ans = [];
      if (identifier === null)
        return ans;
      const helper = (node) => {
        let z = this.Sentinel;
        let x, y;
        while (node !== this.Sentinel) {
          if (node && callback(node) === identifier) {
            z = node;
          }
          if (node && identifier && callback(node) <= identifier) {
            node = node.right;
          } else {
            node = node == null ? void 0 : node.left;
          }
        }
        if (z === this.Sentinel) {
          this._size--;
          return;
        }
        y = z;
        let yOriginalColor = y.color;
        if (z.left === this.Sentinel) {
          x = z.right;
          this._rbTransplant(z, z.right);
        } else if (z.right === this.Sentinel) {
          x = z.left;
          this._rbTransplant(z, z.left);
        } else {
          y = this.getLeftMost(z.right);
          yOriginalColor = y.color;
          x = y.right;
          if (y.parent === z) {
            x.parent = y;
          } else {
            this._rbTransplant(y, y.right);
            y.right = z.right;
            y.right.parent = y;
          }
          this._rbTransplant(z, y);
          y.left = z.left;
          y.left.parent = y;
          y.color = z.color;
        }
        if (yOriginalColor === 0 /* BLACK */) {
          this._fixDelete(x);
        }
        this._size--;
      };
      helper(this.root);
      return ans;
    }
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     */
    isRealNode(node) {
      if (node === this.Sentinel || node === void 0)
        return false;
      return node instanceof RedBlackTreeNode;
    }
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     *
     * The function `getNode` retrieves a single node from a binary tree based on a given identifier and
     * callback function.
     * @param {ReturnType<C> | undefined} identifier - The `identifier` parameter is the value used to
     * identify the node you want to retrieve. It can be of any type that is the return type of the `C`
     * callback function. If the `identifier` is `undefined`, it means you want to retrieve the first
     * node that matches the other criteria
     * @param {C} callback - The `callback` parameter is a function that will be called for each node in
     * the binary tree. It is used to determine if a node matches the given identifier. The `callback`
     * function should take a single parameter of type `N` (the type of the nodes in the binary tree) and
     * @param {K | N | undefined} beginRoot - The `beginRoot` parameter is the starting point for
     * searching for a node in a binary tree. It can be either a key value or a node object. If it is not
     * provided, the search will start from the root of the binary tree.
     * @param iterationType - The `iterationType` parameter is a variable that determines the type of
     * iteration to be performed when searching for nodes in the binary tree. It is used in the
     * `getNodes` method, which is called within the `getNode` method.
     * @returns a value of type `N`, `null`, or `undefined`.
     */
    getNode(identifier, callback = this._defaultOneParamCallback, beginRoot = this.root, iterationType = this.iterationType) {
      var _a;
      if (identifier instanceof RedBlackTreeNode)
        callback = (node) => node;
      beginRoot = this.ensureNode(beginRoot);
      return (_a = this.getNodes(identifier, callback, true, beginRoot, iterationType)[0]) != null ? _a : void 0;
    }
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n)
     * Space Complexity: O(1)
     *
     * The function returns the predecessor of a given node in a red-black tree.
     * @param {RedBlackTreeNode} x - The parameter `x` is of type `RedBlackTreeNode`, which represents a node in a
     * Red-Black Tree.
     * @returns the predecessor of the given RedBlackTreeNode 'x'.
     */
    getPredecessor(x) {
      if (this.isRealNode(x.left)) {
        return this.getRightMost(x.left);
      }
      let y = x.parent;
      while (this.isRealNode(y) && x === y.left) {
        x = y;
        y = y.parent;
      }
      return y;
    }
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     */
    clear() {
      this._root = this.Sentinel;
      this._size = 0;
    }
    _setRoot(v) {
      if (v) {
        v.parent = void 0;
      }
      this._root = v;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function performs a left rotation on a binary tree node.
     * @param {RedBlackTreeNode} x - The parameter `x` is of type `N`, which likely represents a node in a binary tree.
     */
    _leftRotate(x) {
      if (x.right) {
        const y = x.right;
        x.right = y.left;
        if (y.left !== this.Sentinel) {
          if (y.left)
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === void 0) {
          this._setRoot(y);
        } else if (x === x.parent.left) {
          x.parent.left = y;
        } else {
          x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
      }
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function performs a right rotation on a red-black tree node.
     * @param {RedBlackTreeNode} x - x is a RedBlackTreeNode, which represents the node that needs to be right
     * rotated.
     */
    _rightRotate(x) {
      if (x.left) {
        const y = x.left;
        x.left = y.right;
        if (y.right !== this.Sentinel) {
          if (y.right)
            y.right.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === void 0) {
          this._setRoot(y);
        } else if (x === x.parent.right) {
          x.parent.right = y;
        } else {
          x.parent.left = y;
        }
        y.right = x;
        x.parent = y;
      }
    }
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     *
     * The function `_fixDelete` is used to fix the red-black tree after a node deletion.
     * @param {RedBlackTreeNode} x - The parameter `x` represents a node in a Red-Black Tree (RBT).
     */
    _fixDelete(x) {
      let s;
      while (x !== this.root && x.color === 0 /* BLACK */) {
        if (x.parent && x === x.parent.left) {
          s = x.parent.right;
          if (s.color === 1) {
            s.color = 0 /* BLACK */;
            x.parent.color = 1 /* RED */;
            this._leftRotate(x.parent);
            s = x.parent.right;
          }
          if (s.left !== void 0 && s.left.color === 0 /* BLACK */ && s.right && s.right.color === 0 /* BLACK */) {
            s.color = 1 /* RED */;
            x = x.parent;
          } else {
            if (s.right && s.right.color === 0 /* BLACK */) {
              if (s.left)
                s.left.color = 0 /* BLACK */;
              s.color = 1 /* RED */;
              this._rightRotate(s);
              s = x.parent.right;
            }
            if (s)
              s.color = x.parent.color;
            x.parent.color = 0 /* BLACK */;
            if (s && s.right)
              s.right.color = 0 /* BLACK */;
            this._leftRotate(x.parent);
            x = this.root;
          }
        } else {
          s = x.parent.left;
          if (s.color === 1) {
            s.color = 0 /* BLACK */;
            x.parent.color = 1 /* RED */;
            this._rightRotate(x.parent);
            s = x.parent.left;
          }
          if (s && s.right && s.right.color === 0 /* BLACK */ && s.right.color === 0 /* BLACK */) {
            s.color = 1 /* RED */;
            x = x.parent;
          } else {
            if (s && s.left && s.left.color === 0 /* BLACK */) {
              if (s.right)
                s.right.color = 0 /* BLACK */;
              s.color = 1 /* RED */;
              this._leftRotate(s);
              s = x.parent.left;
            }
            if (s)
              s.color = x.parent.color;
            x.parent.color = 0 /* BLACK */;
            if (s && s.left)
              s.left.color = 0 /* BLACK */;
            this._rightRotate(x.parent);
            x = this.root;
          }
        }
      }
      x.color = 0 /* BLACK */;
    }
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     *
     * The function `_rbTransplant` replaces one node in a red-black tree with another node.
     * @param {RedBlackTreeNode} u - The parameter "u" represents a RedBlackTreeNode object.
     * @param {RedBlackTreeNode} v - The parameter "v" is a RedBlackTreeNode object.
     */
    _rbTransplant(u, v) {
      if (u.parent === void 0) {
        this._setRoot(v);
      } else if (u === u.parent.left) {
        u.parent.left = v;
      } else {
        u.parent.right = v;
      }
      v.parent = u.parent;
    }
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     */
    /**
     * Time Complexity: O(log n) on average (where n is the number of nodes in the tree)
     * Space Complexity: O(1)
     *
     * The `_fixInsert` function is used to fix the red-black tree after an insertion operation.
     * @param {RedBlackTreeNode} k - The parameter `k` is a RedBlackTreeNode object, which represents a node in a
     * red-black tree.
     */
    _fixInsert(k) {
      let u;
      while (k.parent && k.parent.color === 1) {
        if (k.parent.parent && k.parent === k.parent.parent.right) {
          u = k.parent.parent.left;
          if (u && u.color === 1) {
            u.color = 0 /* BLACK */;
            k.parent.color = 0 /* BLACK */;
            k.parent.parent.color = 1 /* RED */;
            k = k.parent.parent;
          } else {
            if (k === k.parent.left) {
              k = k.parent;
              this._rightRotate(k);
            }
            k.parent.color = 0 /* BLACK */;
            k.parent.parent.color = 1 /* RED */;
            this._leftRotate(k.parent.parent);
          }
        } else {
          u = k.parent.parent.right;
          if (u && u.color === 1) {
            u.color = 0 /* BLACK */;
            k.parent.color = 0 /* BLACK */;
            k.parent.parent.color = 1 /* RED */;
            k = k.parent.parent;
          } else {
            if (k === k.parent.right) {
              k = k.parent;
              this._leftRotate(k);
            }
            k.parent.color = 0 /* BLACK */;
            k.parent.parent.color = 1 /* RED */;
            this._rightRotate(k.parent.parent);
          }
        }
        if (k === this.root) {
          break;
        }
      }
      this.root.color = 0 /* BLACK */;
    }
    /**
     * The function replaces an old node with a new node while preserving the color of the old node.
     * @param {N} oldNode - The `oldNode` parameter represents the node that needs to be replaced in a
     * data structure. It is of type `N`, which is the type of the nodes in the data structure.
     * @param {N} newNode - The `newNode` parameter is the node that will replace the `oldNode` in the
     * data structure.
     * @returns The method is returning the result of calling the `_replaceNode` method from the
     * superclass, passing in the `oldNode` and `newNode` as arguments.
     */
    _replaceNode(oldNode, newNode) {
      newNode.color = oldNode.color;
      return super._replaceNode(oldNode, newNode);
    }
  };

  // src/data-structures/binary-tree/tree-multimap.ts
  var TreeMultimapNode = class extends AVLTreeNode {
    /**
     * The constructor function initializes a BinaryTreeNode object with a key, value, and count.
     * @param {K} key - The `key` parameter is of type `K` and represents the unique identifier
     * of the binary tree node.
     * @param {V} [value] - The `value` parameter is an optional parameter of type `V`. It represents the value of the binary
     * tree node. If no value is provided, it will be `undefined`.
     * @param {number} [count=1] - The `count` parameter is a number that represents the number of times a particular value
     * occurs in a binary tree node. It has a default value of 1, which means that if no value is provided for the `count`
     * parameter when creating a new instance of the `BinaryTreeNode` class.
     */
    constructor(key, value, count = 1) {
      super(key, value);
      __publicField(this, "count");
      this.count = count;
    }
  };
  var TreeMultimap = class _TreeMultimap extends AVLTree {
    constructor(elements, options) {
      super([], options);
      __publicField(this, "_count", 0);
      if (elements)
        this.addMany(elements);
    }
    // TODO the _count is not accurate after nodes count modified
    get count() {
      let sum = 0;
      this.subTreeTraverse((node) => sum += node.count);
      return sum;
    }
    /**
     * The function creates a new BSTNode with the given key, value, and count.
     * @param {K} key - The key parameter is the unique identifier for the binary tree node. It is used to
     * distinguish one node from another in the tree.
     * @param {N} value - The `value` parameter represents the value that will be stored in the binary search tree node.
     * @param {number} [count] - The "count" parameter is an optional parameter of type number. It represents the number of
     * occurrences of the value in the binary search tree node. If not provided, the count will default to 1.
     * @returns A new instance of the BSTNode class with the specified key, value, and count (if provided).
     */
    createNode(key, value, count) {
      return new TreeMultimapNode(key, value, count);
    }
    createTree(options) {
      return new _TreeMultimap([], __spreadValues({
        iterationType: this.iterationType,
        variant: this.variant
      }, options));
    }
    /**
     * The function checks if an exemplar is an instance of the TreeMultimapNode class.
     * @param exemplar - The `exemplar` parameter is of type `BTNExemplar<K, V, N>`.
     * @returns a boolean value indicating whether the exemplar is an instance of the TreeMultimapNode
     * class.
     */
    isNode(exemplar) {
      return exemplar instanceof TreeMultimapNode;
    }
    /**
     * The function "isNotNodeInstance" checks if a potential key is a K.
     * @param {any} potentialKey - The potentialKey parameter is of type any, which means it can be any
     * data type.
     * @returns a boolean value indicating whether the potentialKey is of type number or not.
     */
    isNotNodeInstance(potentialKey) {
      return !(potentialKey instanceof TreeMultimapNode);
    }
    /**
     * The function `exemplarToNode` converts an exemplar object into a node object.
     * @param exemplar - The `exemplar` parameter is of type `BTNExemplar<K, V, N>`, which means it
     * can be one of the following:
     * @param {V} [value] - The `value` parameter is an optional argument that represents the value
     * associated with the node. It is of type `V`, which can be any data type. If no value is provided,
     * it defaults to `undefined`.
     * @param [count=1] - The `count` parameter is an optional parameter that specifies the number of
     * times the value should be added to the node. If not provided, it defaults to 1.
     * @returns a node of type `N` or `undefined`.
     */
    exemplarToNode(exemplar, value, count = 1) {
      let node;
      if (exemplar === void 0 || exemplar === null) {
        return;
      } else if (this.isNode(exemplar)) {
        node = exemplar;
      } else if (this.isEntry(exemplar)) {
        const [key, value2] = exemplar;
        if (key === void 0 || key === null) {
          return;
        } else {
          node = this.createNode(key, value2, count);
        }
      } else if (this.isNotNodeInstance(exemplar)) {
        node = this.createNode(exemplar, value, count);
      } else {
        return;
      }
      return node;
    }
    /**
     * Time Complexity: O(log n) - logarithmic time, where "n" is the number of nodes in the tree. The add method of the superclass (AVLTree) has logarithmic time complexity.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     */
    /**
     * Time Complexity: O(log n) - logarithmic time, where "n" is the number of nodes in the tree. The add method of the superclass (AVLTree) has logarithmic time complexity.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     *
     * The function overrides the add method of a binary tree node and adds a new node to the tree.
     * @param keyOrNodeOrEntry - The `keyOrNodeOrEntry` parameter can be either a key, a node, or an
     * entry. It represents the key, node, or entry that you want to add to the binary tree.
     * @param {V} [value] - The `value` parameter represents the value associated with the key in the
     * binary tree node. It is an optional parameter, meaning it can be omitted when calling the `add`
     * method.
     * @param [count=1] - The `count` parameter represents the number of times the key-value pair should
     * be added to the binary tree. By default, it is set to 1, meaning that the key-value pair will be
     * added once. However, you can specify a different value for `count` if you want to add
     * @returns The method is returning either the newly inserted node or `undefined` if the insertion
     * was not successful.
     */
    add(keyOrNodeOrEntry, value, count = 1) {
      const newNode = this.exemplarToNode(keyOrNodeOrEntry, value, count);
      if (newNode === void 0)
        return;
      const orgNodeCount = (newNode == null ? void 0 : newNode.count) || 0;
      const inserted = super.add(newNode);
      if (inserted) {
        this._count += orgNodeCount;
      }
      return inserted;
    }
    /**
     * Time Complexity: O(k log n) - logarithmic time, where "n" is the number of nodes in the tree. The add method of the superclass (AVLTree) has logarithmic time complexity.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     */
    /**
     * Time Complexity: O(k log n) - logarithmic time, where "n" is the number of nodes in the tree. The add method of the superclass (AVLTree) has logarithmic time complexity.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     *
     * The function overrides the addMany method to add multiple keys, nodes, or entries to a data
     * structure.
     * @param keysOrNodesOrEntries - The parameter `keysOrNodesOrEntries` is an iterable that can contain
     * either keys, nodes, or entries.
     * @returns The method is returning an array of type `N | undefined`.
     */
    addMany(keysOrNodesOrEntries) {
      return super.addMany(keysOrNodesOrEntries);
    }
    /**
     * Time Complexity: O(1) - constant time, as it performs basic pointer assignments.
     * Space Complexity: O(1) - constant space, as it only uses a constant amount of memory.
     */
    /**
     * Time Complexity: O(n log n) - logarithmic time for each insertion, where "n" is the number of nodes in the tree. This is because the method calls the add method for each node.
     * Space Complexity: O(n) - linear space, as it creates an array to store the sorted nodes.
     *
     * The `perfectlyBalance` function takes a sorted array of nodes and builds a balanced binary search
     * tree using either a recursive or iterative approach.
     * @param iterationType - The `iterationType` parameter is an optional parameter that specifies the
     * type of iteration to use when building the balanced binary search tree. It can have two possible
     * values:
     * @returns a boolean value.
     */
    perfectlyBalance(iterationType = this.iterationType) {
      const sorted = this.dfs((node) => node, "in"), n = sorted.length;
      if (sorted.length < 1)
        return false;
      this.clear();
      if (iterationType === "RECURSIVE" /* RECURSIVE */) {
        const buildBalanceBST = (l, r) => {
          if (l > r)
            return;
          const m = l + Math.floor((r - l) / 2);
          const midNode = sorted[m];
          this.add(midNode.key, midNode.value, midNode.count);
          buildBalanceBST(l, m - 1);
          buildBalanceBST(m + 1, r);
        };
        buildBalanceBST(0, n - 1);
        return true;
      } else {
        const stack = [[0, n - 1]];
        while (stack.length > 0) {
          const popped = stack.pop();
          if (popped) {
            const [l, r] = popped;
            if (l <= r) {
              const m = l + Math.floor((r - l) / 2);
              const midNode = sorted[m];
              this.add(midNode.key, midNode.value, midNode.count);
              stack.push([m + 1, r]);
              stack.push([l, m - 1]);
            }
          }
        }
        return true;
      }
    }
    /**
     * Time Complexity: O(k log n) - logarithmic time for each insertion, where "n" is the number of nodes in the tree, and "k" is the number of keys to be inserted. This is because the method iterates through the keys and calls the add method for each.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     */
    /**
     * Time Complexity: O(log n) - logarithmic time, where "n" is the number of nodes in the tree. The delete method of the superclass (AVLTree) has logarithmic time complexity.
     * Space Complexity: O(1) - constant space, as it doesn't use additional data structures that scale with input size.
     *
     * The `delete` function in TypeScript is used to remove a node from a binary tree, taking into
     * account the count of the node and balancing the tree if necessary.
     * @param identifier - The identifier is the value or key that is used to identify the node that
     * needs to be deleted from the binary tree. It can be of any type that is returned by the callback
     * function.
     * @param {C} callback - The `callback` parameter is a function that is used to determine if a node
     * should be deleted. It is optional and defaults to a default callback function. The `callback`
     * function takes one parameter, which is the identifier of the node, and returns a value that is
     * used to identify the node to
     * @param [ignoreCount=false] - A boolean flag indicating whether to ignore the count of the node
     * being deleted. If set to true, the count of the node will not be considered and the node will be
     * deleted regardless of its count. If set to false (default), the count of the node will be
     * decremented by 1 and
     * @returns an array of `BinaryTreeDeleteResult<N>`.
     */
    delete(identifier, callback = this._defaultOneParamCallback, ignoreCount = false) {
      var _a;
      const deletedResult = [];
      if (!this.root)
        return deletedResult;
      const curr = (_a = this.getNode(identifier, callback)) != null ? _a : void 0;
      if (!curr)
        return deletedResult;
      const parent = (curr == null ? void 0 : curr.parent) ? curr.parent : void 0;
      let needBalanced = void 0, orgCurrent = curr;
      if (curr.count > 1 && !ignoreCount) {
        curr.count--;
        this._count--;
      } else {
        if (!curr.left) {
          if (!parent) {
            if (curr.right !== void 0)
              this._setRoot(curr.right);
          } else {
            const { familyPosition: fp } = curr;
            if (fp === "LEFT" /* LEFT */ || fp === "ROOT_LEFT" /* ROOT_LEFT */) {
              parent.left = curr.right;
            } else if (fp === "RIGHT" /* RIGHT */ || fp === "ROOT_RIGHT" /* ROOT_RIGHT */) {
              parent.right = curr.right;
            }
            needBalanced = parent;
          }
        } else {
          const leftSubTreeRightMost = curr.left ? this.getRightMost(curr.left) : void 0;
          if (leftSubTreeRightMost) {
            const parentOfLeftSubTreeMax = leftSubTreeRightMost.parent;
            orgCurrent = this._swapProperties(curr, leftSubTreeRightMost);
            if (parentOfLeftSubTreeMax) {
              if (parentOfLeftSubTreeMax.right === leftSubTreeRightMost) {
                parentOfLeftSubTreeMax.right = leftSubTreeRightMost.left;
              } else {
                parentOfLeftSubTreeMax.left = leftSubTreeRightMost.left;
              }
              needBalanced = parentOfLeftSubTreeMax;
            }
          }
        }
        this._size = this.size - 1;
        if (orgCurrent)
          this._count -= orgCurrent.count;
      }
      deletedResult.push({ deleted: orgCurrent, needBalanced });
      if (needBalanced) {
        this._balancePath(needBalanced);
      }
      return deletedResult;
    }
    /**
     * Time Complexity: O(n log n) - logarithmic time for each insertion, where "n" is the number of nodes in the tree. This is because the method calls the add method for each node.
     * Space Complexity: O(n) - linear space, as it creates an array to store the sorted nodes.
     */
    /**
     * The clear() function clears the contents of a data structure and sets the count to zero.
     */
    clear() {
      super.clear();
      this._count = 0;
    }
    /**
     * Time complexity: O(n)
     * Space complexity: O(n)
     */
    /**
     * Time complexity: O(n)
     * Space complexity: O(n)
     *
     * The `clone` function creates a deep copy of a tree object.
     * @returns The `clone()` method is returning a cloned instance of the `TREE` object.
     */
    clone() {
      const cloned = this.createTree();
      this.bfs((node) => cloned.add(node.key, node.value, node.count));
      return cloned;
    }
    /**
     * Time Complexity: O(1) - constant time, as it performs basic pointer assignments.
     * Space Complexity: O(1) - constant space, as it only uses a constant amount of memory.
     *
     * The function adds a new node to a binary tree, either as the left child or the right child of a
     * given parent node.
     * @param {N | undefined} newNode - The `newNode` parameter represents the node that needs to be
     * added to the binary tree. It can be of type `N` (which represents a node in the binary tree) or
     * `undefined` if there is no node to add.
     * @param {K | N | undefined} parent - The `parent` parameter represents the parent node to
     * which the new node will be added as a child. It can be either a node object (`N`) or a key value
     * (`K`).
     * @returns The method `_addTo` returns either the `parent.left` or `parent.right` node that was
     * added, or `undefined` if no node was added.
     */
    _addTo(newNode, parent) {
      parent = this.ensureNode(parent);
      if (parent) {
        if (parent.left === void 0) {
          parent.left = newNode;
          if (newNode !== void 0) {
            this._size = this.size + 1;
            this._count += newNode.count;
          }
          return parent.left;
        } else if (parent.right === void 0) {
          parent.right = newNode;
          if (newNode !== void 0) {
            this._size = this.size + 1;
            this._count += newNode.count;
          }
          return parent.right;
        } else {
          return;
        }
      } else {
        return;
      }
    }
    /**
     * The `_swapProperties` function swaps the key, value, count, and height properties between two nodes.
     * @param {K | N | undefined} srcNode - The `srcNode` parameter represents the source node from
     * which the values will be swapped. It can be of type `K`, `N`, or `undefined`.
     * @param {K | N | undefined} destNode - The `destNode` parameter represents the destination
     * node where the values from the source node will be swapped to.
     * @returns either the `destNode` object if both `srcNode` and `destNode` are defined, or `undefined`
     * if either `srcNode` or `destNode` is undefined.
     */
    _swapProperties(srcNode, destNode) {
      srcNode = this.ensureNode(srcNode);
      destNode = this.ensureNode(destNode);
      if (srcNode && destNode) {
        const { key, value, count, height } = destNode;
        const tempNode = this.createNode(key, value, count);
        if (tempNode) {
          tempNode.height = height;
          destNode.key = srcNode.key;
          destNode.value = srcNode.value;
          destNode.count = srcNode.count;
          destNode.height = srcNode.height;
          srcNode.key = tempNode.key;
          srcNode.value = tempNode.value;
          srcNode.count = tempNode.count;
          srcNode.height = tempNode.height;
        }
        return destNode;
      }
      return void 0;
    }
    _replaceNode(oldNode, newNode) {
      newNode.count = oldNode.count + newNode.count;
      return super._replaceNode(oldNode, newNode);
    }
  };

  // src/data-structures/tree/tree.ts
  var TreeNode = class _TreeNode {
    constructor(key, value, children) {
      __publicField(this, "key");
      __publicField(this, "value");
      __publicField(this, "children");
      this.key = key;
      this.value = value || void 0;
      this.children = children || [];
    }
    addChildren(children) {
      if (!this.children) {
        this.children = [];
      }
      if (children instanceof _TreeNode) {
        this.children.push(children);
      } else {
        this.children = this.children.concat(children);
      }
    }
    getHeight() {
      let maxDepth = 0;
      if (this) {
        const bfs = (node, level) => {
          if (level > maxDepth) {
            maxDepth = level;
          }
          const { children } = node;
          if (children) {
            for (let i = 0, len = children.length; i < len; i++) {
              bfs(children[i], level + 1);
            }
          }
        };
        bfs(this, 0);
      }
      return maxDepth;
    }
  };

  // src/data-structures/priority-queue/priority-queue.ts
  var PriorityQueue = class extends Heap {
    constructor(elements, options) {
      super(elements, options);
    }
  };

  // src/data-structures/priority-queue/min-priority-queue.ts
  var MinPriorityQueue = class extends PriorityQueue {
    constructor(elements, options = {
      comparator: (a, b) => {
        if (!(typeof a === "number" && typeof b === "number")) {
          throw new Error("The a, b params of compare function must be number");
        } else {
          return a - b;
        }
      }
    }) {
      super(elements, options);
    }
  };

  // src/data-structures/priority-queue/max-priority-queue.ts
  var MaxPriorityQueue = class extends PriorityQueue {
    constructor(elements, options = {
      comparator: (a, b) => {
        if (!(typeof a === "number" && typeof b === "number")) {
          throw new Error("The a, b params of compare function must be number");
        } else {
          return b - a;
        }
      }
    }) {
      super(elements, options);
    }
  };

  // src/data-structures/matrix/matrix.ts
  var MatrixNTI2D = class {
    /**
     * The constructor creates a matrix with the specified number of rows and columns, and initializes all elements to a
     * given initial value or 0 if not provided.
     * @param options - An object containing the following properties:
     */
    constructor(options) {
      __publicField(this, "_matrix");
      const { row, col, initialVal } = options;
      this._matrix = new Array(row).fill(void 0).map(() => new Array(col).fill(initialVal || 0));
    }
    /* The `toArray` method returns the matrix as a two-dimensional array. It converts the internal representation of the
    matrix, which is an array of arrays, into a format that is more commonly used in JavaScript. */
    toArray() {
      return this._matrix;
    }
  };

  // src/data-structures/matrix/vector2d.ts
  var Vector2D = class _Vector2D {
    constructor(x = 0, y = 0, w = 1) {
      this.x = x;
      this.y = y;
      this.w = w;
    }
    /**
     * The function checks if the x and y values of a point are both zero.
     * @returns A boolean value indicating whether both the x and y properties of the object are equal to 0.
     */
    get isZero() {
      return this.x === 0 && this.y === 0;
    }
    /**
     * The above function calculates the length of a vector using the Pythagorean theorem.
     * @returns The length of a vector, calculated using the Pythagorean theorem.
     */
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * The function calculates the square of the length of a vector.
     * @returns The method is returning the sum of the squares of the x and y values.
     */
    get lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    /**
     * The "rounded" function returns a new Vector2D object with the x and y values rounded to the nearest whole number.
     * @returns The method is returning a new instance of the Vector2D class with the x and y values rounded to the nearest
     * whole number.
     */
    get rounded() {
      return new _Vector2D(Math.round(this.x), Math.round(this.y));
    }
    /**
     * The function "add" takes two Vector2D objects as parameters and returns a new Vector2D object with the sum of their
     * x and y components.
     * @param {Vector2D} vector1 - The parameter `vector1` is an instance of the `Vector2D` class. It represents a
     * 2-dimensional vector with an `x` and `y` component.
     * @param {Vector2D} vector2 - The parameter "vector2" is of type Vector2D. It represents a 2-dimensional vector with
     * an x and y component.
     * @returns The method is returning a new instance of the Vector2D class with the x and y components of the two input
     * vectors added together.
     */
    static add(vector1, vector2) {
      return new _Vector2D(vector1.x + vector2.x, vector1.y + vector2.y);
    }
    /**
     * The subtract function takes two Vector2D objects as parameters and returns a new Vector2D object with the x and y
     * components subtracted.
     * @param {Vector2D} vector1 - The parameter `vector1` is an instance of the `Vector2D` class, representing a
     * 2-dimensional vector. It has properties `x` and `y` which represent the x and y components of the vector
     * respectively.
     * @param {Vector2D} vector2 - The parameter "vector2" is a Vector2D object. It represents the second vector that you
     * want to subtract from the first vector.
     * @returns The method is returning a new Vector2D object with the x and y components subtracted from vector1 and
     * vector2.
     */
    static subtract(vector1, vector2) {
      return new _Vector2D(vector1.x - vector2.x, vector1.y - vector2.y);
    }
    /**
     * The function subtracts a given value from the x and y components of a Vector2D object and returns a new Vector2D
     * object.
     * @param {Vector2D} vector - The parameter "vector" is of type Vector2D, which represents a 2-dimensional vector with
     * x and y components.
     * @param {number} value - The "value" parameter is a number that will be subtracted from both the x and y components
     * of the "vector" parameter.
     * @returns A new Vector2D object with the x and y values subtracted by the given value.
     */
    static subtractValue(vector, value) {
      return new _Vector2D(vector.x - value, vector.y - value);
    }
    /**
     * The function multiplies a Vector2D object by a given value.
     * @param {Vector2D} vector - The parameter "vector" is of type Vector2D, which represents a 2-dimensional vector with
     * x and y components.
     * @param {number} value - The "value" parameter is a number that represents the value by which the x and y components
     * of the vector will be multiplied.
     * @returns A new Vector2D object with the x and y values multiplied by the given value.
     */
    static multiply(vector, value) {
      return new _Vector2D(vector.x * value, vector.y * value);
    }
    /**
     * The function divides the x and y components of a Vector2D by a given value and returns a new Vector2D.
     * @param {Vector2D} vector - The parameter "vector" is of type Vector2D, which represents a 2-dimensional vector with
     * x and y components.
     * @param {number} value - The value parameter is a number that will be used to divide the x and y components of the
     * vector.
     * @returns A new instance of the Vector2D class with the x and y values divided by the given value.
     */
    static divide(vector, value) {
      return new _Vector2D(vector.x / value, vector.y / value);
    }
    /**
     * The function checks if two Vector2D objects are equal by comparing their x and y values.
     * @param {Vector2D} vector1 - The parameter `vector1` is of type `Vector2D`, which represents a 2-dimensional vector.
     * It has two properties: `x` and `y`, which represent the x and y components of the vector, respectively.
     * @param {Vector2D} vector2 - The parameter "vector2" is of type Vector2D.
     * @returns a boolean value, which indicates whether the two input vectors are equal or not.
     */
    static equals(vector1, vector2) {
      return vector1.x === vector2.x && vector1.y === vector2.y;
    }
    /**
     * The function checks if two Vector2D objects are equal within a specified rounding factor.
     * @param {Vector2D} vector1 - The first vector to compare.
     * @param {Vector2D} vector2 - The parameter "vector2" is a Vector2D object, which represents a 2-dimensional vector.
     * It is used as one of the inputs for the "equalsRounded" function.
     * @param [roundingFactor=12] - The roundingFactor parameter is used to determine the threshold for considering two
     * vectors as equal. If the absolute difference in the x and y components of the vectors is less than the
     * roundingFactor, the vectors are considered equal.
     * @returns a boolean value.
     */
    static equalsRounded(vector1, vector2, roundingFactor = 12) {
      const vector = _Vector2D.abs(_Vector2D.subtract(vector1, vector2));
      if (vector.x < roundingFactor && vector.y < roundingFactor) {
        return true;
      }
      return false;
    }
    /**
     * The normalize function takes a vector as input and returns a normalized version of the vector.Normalizes the vector if it matches a certain condition
     * @param {Vector2D} vector - The parameter "vector" is of type Vector2D.
     * @returns the normalized vector if its length is greater than a very small value (epsilon), otherwise it returns the
     * original vector.
     */
    static normalize(vector) {
      const length = vector.length;
      if (length > 2220446049250313e-31) {
        return _Vector2D.divide(vector, length);
      }
      return vector;
    }
    /**
     * The function truncates a vector to a maximum length if it exceeds that length.Adjusts x and y so that the length of the vector does not exceed max
     * @param {Vector2D} vector - A 2D vector represented by the Vector2D class.
     * @param {number} max - The `max` parameter is a number that represents the maximum length that the `vector` should
     * have.
     * @returns either the original vector or a truncated version of the vector, depending on whether the length of the
     * vector is greater than the maximum value specified.
     */
    static truncate(vector, max) {
      if (vector.length > max) {
        return _Vector2D.multiply(_Vector2D.normalize(vector), max);
      }
      return vector;
    }
    /**
     * The function returns a new Vector2D object that is perpendicular to the input vector.The vector that is perpendicular to this one
     * @param {Vector2D} vector - The parameter "vector" is of type Vector2D.
     * @returns A new Vector2D object is being returned.
     */
    static perp(vector) {
      return new _Vector2D(-vector.y, vector.x);
    }
    /**
     * The reverse function takes a Vector2D object and returns a new Vector2D object with the negated x and y values.
     * @param {Vector2D} vector - The parameter "vector" is of type Vector2D, which represents a 2-dimensional vector. It
     * has two properties: "x" and "y", which represent the x and y components of the vector, respectively.
     * @returns A new Vector2D object with the negated x and y values of the input vector. Returns the vector that is the reverse of this vector
     */
    static reverse(vector) {
      return new _Vector2D(-vector.x, -vector.y);
    }
    /**
     * The function takes a Vector2D object as input and returns a new Vector2D object with the absolute values of its x
     * and y components.
     * @param {Vector2D} vector - The parameter "vector" is of type Vector2D, which represents a 2-dimensional vector. It
     * has two properties: "x" and "y", which represent the x and y components of the vector, respectively.
     * @returns The method is returning a new Vector2D object with the absolute values of the x and y components of the
     * input vector.
     */
    static abs(vector) {
      return new _Vector2D(Math.abs(vector.x), Math.abs(vector.y));
    }
    /**
     * The dot function calculates the dot product of two 2D vectors.The dot product of v1 and v2
     * @param {Vector2D} vector1 - The parameter `vector1` represents a 2D vector with its x and y components.
     * @param {Vector2D} vector2 - The "vector2" parameter is a Vector2D object. It represents a two-dimensional vector
     * with an x and y component.
     * @returns The dot product of the two input vectors.
     */
    static dot(vector1, vector2) {
      return vector1.x * vector2.x + vector1.y * vector2.y;
    }
    // /**
    //  * Transform vectors based on the current tranformation matrices: translation, rotation and scale
    //  * @param vectors The vectors to transform
    //  */
    // static transform(vector: Vector2D, transformation: Matrix2D): Vector2D {
    //     return Matrix2D.multiplyByVector(transformation, vector)
    // }
    // /**
    //  * Transform vectors based on the current tranformation matrices: translation, rotation and scale
    //  * @param vectors The vectors to transform
    //  */
    // static transformList(vectors: Vector2D[], transformation: Matrix2D): Vector2D[] {
    //     return vectors.map(vector => Matrix2D.multiplyByVector(transformation, vector))
    // }
    /**
     * The function calculates the distance between two points in a two-dimensional space.
     * @param {Vector2D} vector1 - The parameter `vector1` represents the first vector in 2D space, while `vector2`
     * represents the second vector. Each vector has an `x` and `y` component, which represent their respective coordinates
     * in the 2D space.
     * @param {Vector2D} vector2 - The `vector2` parameter represents the second vector in the calculation of distance. It
     * is an instance of the `Vector2D` class, which typically has properties `x` and `y` representing the coordinates of
     * the vector in a 2D space.
     * @returns The distance between vector1 and vector2.
     */
    static distance(vector1, vector2) {
      const ySeparation = vector2.y - vector1.y;
      const xSeparation = vector2.x - vector1.x;
      return Math.sqrt(ySeparation * ySeparation + xSeparation * xSeparation);
    }
    /**
     * The function calculates the squared distance between two 2D vectors.
     * @param {Vector2D} vector1 - The parameter `vector1` represents the first vector, which is an instance of the
     * `Vector2D` class. It contains the x and y coordinates of the vector.
     * @param {Vector2D} vector2 - The `vector2` parameter represents the second vector in a two-dimensional space. It has
     * properties `x` and `y` which represent the coordinates of the vector.
     * @returns the square of the distance between the two input vectors.
     */
    static distanceSq(vector1, vector2) {
      const ySeparation = vector2.y - vector1.y;
      const xSeparation = vector2.x - vector1.x;
      return ySeparation * ySeparation + xSeparation * xSeparation;
    }
    /**
     * The sign function determines the sign of the cross product between two 2D vectors.
     * (assuming the Y axis is pointing down, X axis to right like a Window app)
     * @param {Vector2D} vector1 - The parameter `vector1` is of type `Vector2D`, which represents a 2-dimensional vector.
     * It likely has properties `x` and `y` representing the x and y components of the vector, respectively.
     * @param {Vector2D} vector2 - The above code defines a function called "sign" that takes two parameters: vector1 and
     * vector2. Both vector1 and vector2 are of type Vector2D.
     * @returns either -1 or 1. Returns positive if v2 is clockwise of this vector, negative if counterclockwise
     */
    static sign(vector1, vector2) {
      if (vector1.y * vector2.x > vector1.x * vector2.y) {
        return -1;
      }
      return 1;
    }
    /**
     * The function calculates the angle between a given vector and the negative y-axis.
     * @param {Vector2D} vector - The "vector" parameter is an instance of the Vector2D class, which represents a
     * 2-dimensional vector. It has two properties: "x" and "y", which represent the x and y components of the vector,
     * respectively.
     * @returns the angle between the given vector and the vector (0, -1) in radians.Returns the angle between origin and the given vector in radians
     */
    static angle(vector) {
      const origin = new _Vector2D(0, -1);
      const radian = Math.acos(_Vector2D.dot(vector, origin) / (vector.length * origin.length));
      return _Vector2D.sign(vector, origin) === 1 ? Math.PI * 2 - radian : radian;
    }
    /**
     * The function "random" generates a random Vector2D object with x and y values within the specified range.
     * @param {number} maxX - The maxX parameter represents the maximum value for the x-coordinate of the random vector.
     * @param {number} maxY - The `maxY` parameter represents the maximum value for the y-coordinate of the generated
     * random vector.
     * @returns a new instance of the Vector2D class with random x and y values.
     */
    static random(maxX, maxY) {
      const randX = Math.floor(Math.random() * maxX - maxX / 2);
      const randY = Math.floor(Math.random() * maxY - maxY / 2);
      return new _Vector2D(randX, randY);
    }
    /**
     * The function sets the values of x and y to zero.
     */
    zero() {
      this.x = 0;
      this.y = 0;
    }
  };

  // src/data-structures/matrix/matrix2d.ts
  var Matrix2D = class _Matrix2D {
    /**
     * The constructor function initializes a Matrix2D object with either a default identity matrix, or a provided matrix
     * or Vector2D object.
     * @param {number[][] | Vector2D} [value] - The `value` parameter can be either a 2D array of numbers (`number[][]`) or
     * an instance of the `Vector2D` class.
     */
    constructor(value) {
      __publicField(this, "_matrix");
      if (typeof value === "undefined") {
        this._matrix = _Matrix2D.identity;
      } else if (value instanceof Vector2D) {
        this._matrix = _Matrix2D.identity;
        this._matrix[0][0] = value.x;
        this._matrix[1][0] = value.y;
        this._matrix[2][0] = value.w;
      } else {
        this._matrix = value;
      }
    }
    /**
     * The function returns a 2D array with three empty arrays.
     * @returns An empty 2-dimensional array with 3 empty arrays inside.
     */
    static get empty() {
      return [[], [], []];
    }
    /**
     * The above function returns a 3x3 identity matrix.
     * @returns The method is returning a 2-dimensional array of numbers representing the identity matrix.
     */
    static get identity() {
      return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ];
    }
    /**
     * The function returns a two-dimensional array of numbers.
     * @returns The getter method is returning the value of the private variable `_matrix`, which is a two-dimensional
     * array of numbers.
     */
    get m() {
      return this._matrix;
    }
    /**
     * The function takes two 2D matrices as input and returns their sum as a new 2D matrix.
     * @param {Matrix2D} matrix1 - Matrix2D - The first matrix to be added.
     * @param {Matrix2D} matrix2 - The parameter `matrix2` is a Matrix2D object.
     * @returns a new instance of the Matrix2D class, which is created using the result array.
     */
    static add(matrix1, matrix2) {
      const result = _Matrix2D.empty;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          result[i][j] = matrix1.m[i][j] + matrix2.m[i][j];
        }
      }
      return new _Matrix2D(result);
    }
    /**
     * The function subtracts two 2D matrices and returns the result as a new Matrix2D object.
     * @param {Matrix2D} matrix1 - Matrix2D - The first matrix to subtract from.
     * @param {Matrix2D} matrix2 - Matrix2D is a class representing a 2D matrix. It has a property `m` which is a 2D array
     * representing the matrix elements.
     * @returns a new instance of the Matrix2D class, which is created using the result array.
     */
    static subtract(matrix1, matrix2) {
      const result = _Matrix2D.empty;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          result[i][j] = matrix1.m[i][j] - matrix2.m[i][j];
        }
      }
      return new _Matrix2D(result);
    }
    /**
     * The function multiplies two 2D matrices and returns the result as a new Matrix2D object.
     * @param {Matrix2D} matrix1 - A 2D matrix represented by the Matrix2D class.
     * @param {Matrix2D} matrix2 - The parameter `matrix2` is a 2D matrix of size 3x3.
     * @returns a new instance of the Matrix2D class, created using the result array.
     */
    static multiply(matrix1, matrix2) {
      const result = _Matrix2D.empty;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          result[i][j] = 0;
          for (let k = 0; k < 3; k++) {
            result[i][j] += matrix1.m[i][k] * matrix2.m[k][j];
          }
        }
      }
      return new _Matrix2D(result);
    }
    /**
     * The function multiplies each element of a 2D matrix by a given value and returns the resulting matrix.
     * @param {Matrix2D} matrix - The `matrix` parameter is an instance of the `Matrix2D` class, which represents a 2D
     * matrix. It contains a property `m` that is a 2D array representing the matrix elements.
     * @param {number} value - The `value` parameter is a number that you want to multiply each element of the `matrix` by.
     * @returns a new instance of the Matrix2D class, which is created using the result array.
     */
    static multiplyByValue(matrix, value) {
      const result = _Matrix2D.empty;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          result[i][j] = matrix.m[i][j] * value;
        }
      }
      return new _Matrix2D(result);
    }
    /**
     * The function multiplies a 2D matrix by a 2D vector and returns the result as a 2D vector.
     * @param {Matrix2D} matrix - The parameter "matrix" is of type Matrix2D. It represents a 2-dimensional matrix.
     * @param {Vector2D} vector - The "vector" parameter is a 2D vector, represented by an object of type Vector2D.
     * @returns a Vector2D.
     */
    static multiplyByVector(matrix, vector) {
      const resultMatrix = _Matrix2D.multiply(matrix, new _Matrix2D(vector));
      return resultMatrix.toVector();
    }
    /**
     * The function returns a 2D matrix that scales and flips a vector around the center of a given width and height.
     * @param {number} width - The width parameter represents the width of the view or the canvas. It is a number that
     * specifies the width in pixels or any other unit of measurement.
     * @param {number} height - The height parameter represents the height of the view or the canvas. It is used to
     * calculate the centerY value, which is the vertical center of the view.
     * @returns a Matrix2D object.
     */
    static view(width, height) {
      const scaleStep = 1;
      const centerX = width / 2;
      const centerY = height / 2;
      const flipX = Math.cos(Math.PI);
      return new _Matrix2D([
        [scaleStep, 0, centerX],
        [0, flipX * scaleStep, centerY],
        [0, 0, 1]
      ]);
    }
    /**
     * The function scales a matrix by a given factor.
     * @param {number} factor - The factor parameter is a number that represents the scaling factor by which the matrix
     * should be scaled.
     * @returns the result of multiplying a new instance of Matrix2D by the given factor.
     */
    static scale(factor) {
      return _Matrix2D.multiplyByValue(new _Matrix2D(), factor);
    }
    /**
     * The function "rotate" takes an angle in radians and returns a 2D transformation matrix for rotating objects.
     * @param {number} radians - The "radians" parameter is the angle in radians by which you want to rotate an object.
     * @returns The code is returning a new instance of a Matrix2D object.
     */
    static rotate(radians) {
      const cos = Math.cos(radians);
      const sin = Math.sin(radians);
      return new _Matrix2D([
        [cos, -sin, 0],
        [sin, cos, 0],
        [0, 0, 1]
      ]);
    }
    /**
     * The translate function takes a 2D vector and returns a 2D matrix that represents a translation transformation.
     * @param {Vector2D} vector - The parameter "vector" is of type Vector2D. It represents a 2D vector with components x
     * and y, and an optional w component.
     * @returns The method is returning a new instance of the Matrix2D class.
     */
    static translate(vector) {
      return new _Matrix2D([
        [1, 0, vector.x],
        [0, 1, vector.y],
        [0, 0, vector.w]
      ]);
    }
    /**
     * The function "toVector" returns a new Vector2D object with the values from the first and second elements of the
     * _matrix array.
     * @returns A new instance of the Vector2D class is being returned. The values of the returned vector are taken from
     * the first column of the matrix.
     */
    toVector() {
      return new Vector2D(this._matrix[0][0], this._matrix[1][0]);
    }
  };

  // src/data-structures/matrix/navigator.ts
  var Character = class _Character {
    /**
     * The constructor function takes in a direction and turning object and sets the direction and turn properties of the
     * Character class.
     * @param {Direction} direction - The direction parameter is used to specify the current direction of the character. It
     * can be any value that represents a direction, such as "north", "south", "east", or "west".
     * @param {Turning} turning - The `turning` parameter is an object that maps each direction to the corresponding
     * turning direction. It is used to determine the new direction when the character turns.
     */
    constructor(direction, turning) {
      __publicField(this, "direction");
      __publicField(this, "turn");
      this.direction = direction;
      this.turn = () => new _Character(turning[direction], turning);
    }
  };
  var Navigator = class {
    /**
     * The constructor initializes the Navigator object with the given parameters and sets the current position as visited
     * in the matrix.
     * @param  - - `matrix`: a 2D array representing the grid or map
     */
    constructor({ matrix, turning, onMove, init: { cur, charDir, VISITED } }) {
      __publicField(this, "onMove");
      __publicField(this, "_matrix");
      __publicField(this, "_cur");
      __publicField(this, "_character");
      __publicField(this, "_VISITED");
      this._matrix = matrix;
      this._cur = cur;
      this._character = new Character(charDir, turning);
      this.onMove = onMove;
      this.onMove && this.onMove(this._cur);
      this._VISITED = VISITED;
      this._matrix[this._cur[0]][this._cur[1]] = this._VISITED;
    }
    /**
     * The "start" function moves the character in its current direction until it encounters an obstacle, then it turns the
     * character and repeats the process.
     */
    start() {
      while (this.check(this._character.direction) || this.check(this._character.turn().direction)) {
        const { direction } = this._character;
        if (this.check(direction)) {
          this.move(direction);
        } else if (this.check(this._character.turn().direction)) {
          this._character = this._character.turn();
        }
      }
    }
    /**
     * The function checks if there is a valid move in the specified direction in a matrix.
     * @param {Direction} direction - The direction parameter is a string that represents the direction in which to check.
     * It can be one of the following values: 'up', 'right', 'down', or 'left'.
     * @returns a boolean value.
     */
    check(direction) {
      let forward, row;
      const matrix = this._matrix;
      const [i, j] = this._cur;
      switch (direction) {
        case "up":
          row = matrix[i - 1];
          if (!row)
            return false;
          forward = row[j];
          break;
        case "right":
          forward = matrix[i][j + 1];
          break;
        case "down":
          row = matrix[i + 1];
          if (!row)
            return false;
          forward = row[j];
          break;
        case "left":
          forward = matrix[i][j - 1];
          break;
      }
      return forward !== void 0 && forward !== this._VISITED;
    }
    /**
     * The `move` function updates the current position based on the given direction and updates the matrix accordingly.
     * @param {Direction} direction - The `direction` parameter is a string that represents the direction in which to move.
     * It can have one of the following values: 'up', 'right', 'down', or 'left'.
     */
    move(direction) {
      switch (direction) {
        case "up":
          this._cur[0]--;
          break;
        case "right":
          this._cur[1]++;
          break;
        case "down":
          this._cur[0]++;
          break;
        case "left":
          this._cur[1]--;
          break;
      }
      const [i, j] = this._cur;
      this._matrix[i][j] = this._VISITED;
      this.onMove && this.onMove(this._cur);
    }
  };

  // src/data-structures/trie/trie.ts
  var TrieNode = class {
    constructor(key) {
      __publicField(this, "key");
      __publicField(this, "children");
      __publicField(this, "isEnd");
      this.key = key;
      this.isEnd = false;
      this.children = /* @__PURE__ */ new Map();
    }
  };
  var Trie = class _Trie extends IterableElementBase {
    constructor(words, caseSensitive = true) {
      super();
      __publicField(this, "_size");
      __publicField(this, "_caseSensitive");
      __publicField(this, "_root");
      this._root = new TrieNode("");
      this._caseSensitive = caseSensitive;
      this._size = 0;
      if (words) {
        for (const word of words) {
          this.add(word);
        }
      }
    }
    get size() {
      return this._size;
    }
    get caseSensitive() {
      return this._caseSensitive;
    }
    get root() {
      return this._root;
    }
    /**
     * Time Complexity: O(M), where M is the length of the word being added.
     * Space Complexity: O(M) - Each character in the word adds a TrieNode.
     */
    /**
     * Time Complexity: O(M), where M is the length of the word being added.
     * Space Complexity: O(M) - Each character in the word adds a TrieNode.
     *
     * Add a word to the Trie structure.
     * @param {string} word - The word to add.
     * @returns {boolean} True if the word was successfully added.
     */
    add(word) {
      word = this._caseProcess(word);
      let cur = this.root;
      let isNewWord = false;
      for (const c of word) {
        let nodeC = cur.children.get(c);
        if (!nodeC) {
          nodeC = new TrieNode(c);
          cur.children.set(c, nodeC);
        }
        cur = nodeC;
      }
      if (!cur.isEnd) {
        isNewWord = true;
        cur.isEnd = true;
        this._size++;
      }
      return isNewWord;
    }
    /**
     * Time Complexity: O(M), where M is the length of the input word.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(M), where M is the length of the input word.
     * Space Complexity: O(1) - Constant space.
     *
     * Check if the Trie contains a given word.
     * @param {string} word - The word to check for.
     * @returns {boolean} True if the word is present in the Trie.
     */
    has(word) {
      word = this._caseProcess(word);
      let cur = this.root;
      for (const c of word) {
        const nodeC = cur.children.get(c);
        if (!nodeC)
          return false;
        cur = nodeC;
      }
      return cur.isEnd;
    }
    /**
     * Time Complexity: O(M), where M is the length of the word being deleted.
     * Space Complexity: O(M) - Due to the recursive DFS approach.
     */
    /**
     * Time Complexity: O(M), where M is the length of the word being deleted.
     * Space Complexity: O(M) - Due to the recursive DFS approach.
     *
     * Remove a word from the Trie structure.
     * @param{string} word - The word to delete.
     * @returns {boolean} True if the word was successfully removed.
     */
    delete(word) {
      word = this._caseProcess(word);
      let isDeleted = false;
      const dfs = (cur, i) => {
        const char = word[i];
        const child = cur.children.get(char);
        if (child) {
          if (i === word.length - 1) {
            if (child.isEnd) {
              if (child.children.size > 0) {
                child.isEnd = false;
              } else {
                cur.children.delete(char);
              }
              isDeleted = true;
              return true;
            }
            return false;
          }
          const res = dfs(child, i + 1);
          if (res && !cur.isEnd && child.children.size === 0) {
            cur.children.delete(char);
            return true;
          }
          return false;
        }
        return false;
      };
      dfs(this.root, 0);
      if (isDeleted) {
        this._size--;
      }
      return isDeleted;
    }
    /**
     * Time Complexity: O(N), where N is the total number of nodes in the trie.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(N), where N is the total number of nodes in the trie.
     * Space Complexity: O(1) - Constant space.
     *
     */
    getHeight() {
      const beginRoot = this.root;
      let maxDepth = 0;
      if (beginRoot) {
        const bfs = (node, level) => {
          if (level > maxDepth) {
            maxDepth = level;
          }
          const { children } = node;
          if (children) {
            for (const child of children.entries()) {
              bfs(child[1], level + 1);
            }
          }
        };
        bfs(beginRoot, 0);
      }
      return maxDepth;
    }
    /**
     * Time Complexity: O(M), where M is the length of the input prefix.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(M), where M is the length of the input prefix.
     * Space Complexity: O(1) - Constant space.
     *
     * Check if a given input string has an absolute prefix in the Trie, meaning it's not a complete word.
     * @param {string} input - The input string to check.
     * @returns {boolean} True if it's an absolute prefix in the Trie.
     */
    hasPurePrefix(input) {
      input = this._caseProcess(input);
      let cur = this.root;
      for (const c of input) {
        const nodeC = cur.children.get(c);
        if (!nodeC)
          return false;
        cur = nodeC;
      }
      return !cur.isEnd;
    }
    /**
     * Time Complexity: O(M), where M is the length of the input prefix.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(M), where M is the length of the input prefix.
     * Space Complexity: O(1) - Constant space.
     *
     * Check if a given input string is a prefix of any existing word in the Trie, whether as an absolute prefix or a complete word.
     * @param {string} input - The input string representing the prefix to check.
     * @returns {boolean} True if it's a prefix in the Trie.
     */
    hasPrefix(input) {
      input = this._caseProcess(input);
      let cur = this.root;
      for (const c of input) {
        const nodeC = cur.children.get(c);
        if (!nodeC)
          return false;
        cur = nodeC;
      }
      return true;
    }
    /**
     * Time Complexity: O(N), where N is the total number of nodes in the trie.
     * Space Complexity: O(M), where M is the length of the input prefix.
     */
    /**
     * Time Complexity: O(N), where N is the total number of nodes in the trie.
     * Space Complexity: O(M), where M is the length of the input prefix.
     *
     * Check if the input string is a common prefix in the Trie, meaning it's a prefix shared by all words in the Trie.
     * @param {string} input - The input string representing the common prefix to check for.
     * @returns {boolean} True if it's a common prefix in the Trie.
     */
    hasCommonPrefix(input) {
      input = this._caseProcess(input);
      let commonPre = "";
      const dfs = (cur) => {
        commonPre += cur.key;
        if (commonPre === input)
          return;
        if (cur.isEnd)
          return;
        if (cur && cur.children && cur.children.size === 1)
          dfs(Array.from(cur.children.values())[0]);
        else
          return;
      };
      dfs(this.root);
      return commonPre === input;
    }
    /**
     * Time Complexity: O(N), where N is the total number of nodes in the trie.
     * Space Complexity: O(M), where M is the length of the longest common prefix.
     */
    /**
     * Time Complexity: O(N), where N is the total number of nodes in the trie.
     * Space Complexity: O(M), where M is the length of the longest common prefix.
     *
     * Get the longest common prefix among all the words stored in the Trie.
     * @returns {string} The longest common prefix found in the Trie.
     */
    getLongestCommonPrefix() {
      let commonPre = "";
      const dfs = (cur) => {
        commonPre += cur.key;
        if (cur.isEnd)
          return;
        if (cur && cur.children && cur.children.size === 1)
          dfs(Array.from(cur.children.values())[0]);
        else
          return;
      };
      dfs(this.root);
      return commonPre;
    }
    /**
     * Time Complexity: O(K * L), where K is the number of words retrieved, and L is the average length of the words.
     * Space Complexity: O(K * L) - The space required for the output array.
     */
    /**
     * Time Complexity: O(K * L), where K is the number of words retrieved, and L is the average length of the words.
     * Space Complexity: O(K * L) - The space required for the output array.
     *
     * The `getAll` function returns an array of all words in a Trie data structure that start with a given prefix.
     * @param {string} prefix - The `prefix` parameter is a string that represents the prefix that we want to search for in the
     * trie. It is an optional parameter, so if no prefix is provided, it will default to an empty string.
     * @param {number} max - The max count of words will be found
     * @param isAllWhenEmptyPrefix - If true, when the prefix provided as '', returns all the words in the trie.
     * @returns {string[]} an array of strings.
     */
    getWords(prefix = "", max = Number.MAX_SAFE_INTEGER, isAllWhenEmptyPrefix = false) {
      prefix = this._caseProcess(prefix);
      const words = [];
      let found = 0;
      function dfs(node, word) {
        for (const char of node.children.keys()) {
          const charNode = node.children.get(char);
          if (charNode !== void 0) {
            dfs(charNode, word.concat(char));
          }
        }
        if (node.isEnd) {
          if (found > max - 1)
            return;
          words.push(word);
          found++;
        }
      }
      let startNode = this.root;
      if (prefix) {
        for (const c of prefix) {
          const nodeC = startNode.children.get(c);
          if (nodeC)
            startNode = nodeC;
        }
      }
      if (isAllWhenEmptyPrefix || startNode !== this.root)
        dfs(startNode, prefix);
      return words;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `filter` function takes a predicate function and returns a new array containing all the
     * elements for which the predicate function returns true.
     * @param predicate - The `predicate` parameter is a callback function that takes three arguments:
     * `word`, `index`, and `this`. It should return a boolean value indicating whether the current
     * element should be included in the filtered results or not.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that allows you to
     * specify the value of `this` within the `predicate` function. It is used when you want to bind a
     * specific object as the context for the `predicate` function. If `thisArg` is provided, it will be
     * @returns The `filter` method is returning an array of strings (`string[]`).
     */
    filter(predicate, thisArg) {
      const results = new _Trie();
      let index = 0;
      for (const word of this) {
        if (predicate.call(thisArg, word, index, this)) {
          results.add(word);
        }
        index++;
      }
      return results;
    }
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     *
     * The `map` function creates a new Trie by applying a callback function to each element in the Trie.
     * @param callback - The callback parameter is a function that will be called for each element in the
     * Trie. It takes three arguments: the current element in the Trie, the index of the current element,
     * and the Trie itself. The callback function should return a new value for the element.
     * @param {any} [thisArg] - The `thisArg` parameter is an optional argument that specifies the value
     * to be used as `this` when executing the `callback` function. If `thisArg` is provided, it will be
     * passed as the `this` value to the `callback` function. If `thisArg` is
     * @returns The `map` function is returning a new Trie object.
     */
    map(callback, thisArg) {
      const newTrie = new _Trie();
      let index = 0;
      for (const word of this) {
        newTrie.add(callback.call(thisArg, word, index, this));
        index++;
      }
      return newTrie;
    }
    *_getIterator() {
      function* _dfs(node, path) {
        if (node.isEnd) {
          yield path;
        }
        for (const [char, childNode] of node.children) {
          yield* __yieldStar(_dfs(childNode, path + char));
        }
      }
      yield* __yieldStar(_dfs(this.root, ""));
    }
    /**
     * Time Complexity: O(M), where M is the length of the input string.
     * Space Complexity: O(1) - Constant space.
     */
    /**
     * Time Complexity: O(M), where M is the length of the input string.
     * Space Complexity: O(1) - Constant space.
     *
     * @param str
     * @protected
     */
    _caseProcess(str) {
      if (!this._caseSensitive) {
        str = str.toLowerCase();
      }
      return str;
    }
  };
  return __toCommonJS(src_exports);
})();
/**
 * data-structure-typed
 *
 * @author Tyler Zeng
 * @copyright Copyright (c) 2022 Tyler Zeng <zrwusa@gmail.com>
 * @license MIT License
 */
/**
 * @license MIT
 * @copyright Tyler Zeng <zrwusa@gmail.com>
 * @class
 */
/**
 * data-structure-typed
 * @author Kirk Qi
 * @copyright Copyright (c) 2022 Kirk Qi <qilinaus@gmail.com>
 * @license MIT License
 */
/**
 * data-structure-typed
 *
 * @author Kirk Qi
 * @copyright Copyright (c) 2022 Kirk Qi <qilinaus@gmail.com>
 * @license MIT License
 */
