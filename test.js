// core
const assert = require('assert')

// local
const keyish = require('.')

// tests
assert.equal(keyish('path', 'to'), 'path~to')
assert.equal(keyish('path'), 'path')
assert.equal(keyish('path', 'to', 'a', 'longer', 'name'), 'path~to~a~longer~name')
assert.equal(keyish('path', 1, 2, 3), 'path~1~2~3')
assert.equal(keyish(''), '')
assert.equal(keyish(), '')
assert.equal(keyish(undefined), '')
assert.equal(keyish(null), '')
