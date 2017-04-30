var test = require('ava')
var mc = require('./index')

test('string to integer', t => {
  t.is( mc.strToInt('10:00'), 600 )
})

test('minute calculator', t => {
  t.is( mc.calc('10:00', 90).hours, '11' )
  t.is( mc.calc('10:00', 90).minutes, '30' )
})
