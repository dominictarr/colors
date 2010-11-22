//test
style = require('./style')


exports ['style wraps a string '] = function (assert){
  var h = "hello"
  var s = style(h)
  assert.equal(h.length, s.length) // length should appear the same.

  assert.strictEqual(s.toString(),h)
}

exports ['style can pad a string '] = function (assert){
  var h = "hello"
  var s = style(h)
  assert.equal(h.length, s.length) // length should appear the same.

  s.lpad (10)

  assert.strictEqual(s.length,10)
  s.rpad (10)
  assert.strictEqual(s.length,10)

  //the order of padding is significant
  s.rpad (20)
  assert.strictEqual(s.length,20)
}

exports ['style lpad and rpad are chainable '] = function (assert){
  var h = "hello"
  var s = style(h)
  assert.equal(h.length, s.length) // length should appear the same.

  s.lpad (10).rpad(15)

  assert.strictEqual(s.length,15)

  //calling lpad or rpad more than once has undefined behaviour.
}

exports ['can set colours of styled strings '] = function (assert){
  var h = "hello"
  var s = style(h).red
  assert.ok(s,"styled string has color properties")
  
  assert.deepEqual(s.styles,['red'])
 
  s = style(h)
 
  ;[  'bold', 'underline', 'italic'
   , 'inverse', 'grey', 'yellow'
   , 'red', 'green', 'blue', 'white'
   , 'cyan', 'magenta',"rainbow"].forEach(function(e){
    assert.deepEqual(s[e],s,"style:'" + e + "' is chainable")
  })
  
  assert.equal(h.length, s.length) // length should appear the same.

  //calling lpad or rpad more than once has undefined behaviour.
}

exports ['style is applied on toString'] = function (assert){
  var h = "hello"
  var s = style(h).blue

  assert.notEqual("" + s, h)
  console.log("" + s)
}

exports ['ruby style .to_s'] = function (assert){
  var h = "hello"
  var s = style(h).red

  assert.equal(s.to_s,"" + s) //ha! i didn't implement it, but i didn't know it was in js. a win from writing tests first.
  console.log("" + s)
}

exports ['style exposes styles'] = function (assert){
  var styleKeys = style.styles
  
  styleKeys.forEach(function showStyle (h){
    var s = style(h)[h]
    console.log("style:" + s)
    assert.ok(s, "has style:" + h)
  })
}

exports ['style colours can be disabled'] = function (assert){
  var styleKeys = style.styles
  unstyle = style.enable(false)
  
  styleKeys.forEach(function showStyle (h){
    var s = unstyle(h)[h]
    assert.equal(s, h, "'" + s + "' should not have style:" + h)
  })
}
