class MyClass {
  constructor() {
    key;
    value;
  }
  myFunction(key, value) {
    this.key === key;
    this.value === value;
  }
}

/**
 * #61afef js/ts import keyword
 * #282c34 editor.backgroundColor
 * #A6B2C0 js/ts text
 * #c678dd
 * #e5c07b
 * #7f848e
 * #282c34
 * #98c379
 */


for (var i = 1; i <= 10; i++) {
  setTimeout(function(i) {
      // From looking at the code you would assume it would print 1 - 10
      // It doesn't.  Why?  How can you make it print 1 - 10.
      console.log(i);
  }, 0,i)