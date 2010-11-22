var should = require ('should')
  , assert = require('assert')
  , errorStyle = require('../error')
  , style = require('../style')
  , eq = null
try{assert.equal(3,7)} catch (err){eq = err}

exports ['can print errors'] = function (test){
  console.log("THIS IS JUST A DRILL. TESTING ERROR MESSAGE PRINTING")
  errorStyle.printError(new Error("TESTING ERROR MESSAGES"))
  errorStyle.printError(eq)
  errorStyle.printError("sdjflasjdfl TESTING ERROR MESSAGES")
  errorStyle.printError({name: "Literial Object", message : "Hello. TESTING ERROR MESSAGES" })
  console.log("DRILL OVER. ERROR MESSAGES ARE REAL AGAIN.")
  
    

}

exports ['can print errors in colour'] = function (test){
  console.log("THIS IS JUST A DRILL. TESTING ERROR MESSAGE PRINTING")

  errorStyle.styleError(new Error("TESTING ERROR MESSAGES"))
  errorStyle.styleError(eq)
  errorStyle.styleError("sdjflasjdfl TESTING ERROR MESSAGES")
  errorStyle.styleError({name: "Literial Object", message : "Hello. TESTING ERROR MESSAGES" })

  console.log("DRILL OVER. ERROR MESSAGES ARE REAL AGAIN.")
}

exports ['can parse an error and get everything out of it'] = function (test){
var stack = 
  "AssertionError: 7 == 3\n"
    + "at Object.equal (/home/dominic/code/node/meta_test/test_reports.js:21:13)\n"
    + "at Array.0 (/home/dominic/code/node/meta_test/test/test_reports.asynct.js:201:49)\n"
    + "at runTestFunc (/home/dominic/code/node/async_testing/lib/testing.js:99:22)\n"
    + "at startNextTest (/home/dominic/code/node/async_testing/lib/testing.js:83:5)\n"
    + "at Array.0 (/home/dominic/code/node/async_testing/lib/testing.js:232:6)\n" 
    + "at EventEmitter._tickCallback (node.js:42:22)\n"
    + "at node.js:634:9\n"

var error = {name: "AssertionError" , message: "7 == 3", stack: stack}

var obj = errorStyle.parseError(error)

 obj.should.have.property('name', "AssertionError")
 obj.should.have.property('stack').instanceof(Array)
 

   obj.stack[1].should.have.property('function','Object.equal')
   obj.stack[1].should.have.property('file','/home/dominic/code/node/meta_test/test_reports.js')
   obj.stack[1].should.have.property('line',21)
   obj.stack[1].should.have.property('column',13)
}

exports ['can parse information from a stack trace'] = function (test){
  var l1 = "at Object.equal (/home/dominic/code/node/meta_test/test_reports.js:21:13)"
    , l2 = "at Array.0 (/home/dominic/code/node/meta_test/test/test_reports.asynct.js:201:49)"
    , l3 = "at runTestFunc (/home/dominic/code/node/async_testing/lib/testing.js:99:22)"
    , l4 = "at Array.forEach (native)"
    , l5 = "at Object.<anonymous> (/home/dominic/code/node/style/test/error.expresso.js:6:12)"

  var o1 = errorStyle.parseStackLine(l1)
    , o2 = errorStyle.parseStackLine(l2)
    , o3 = errorStyle.parseStackLine(l3)
    , o4 = errorStyle.parseStackLine(l4)
    , o5 = errorStyle.parseStackLine(l5)
    
   o1.should.have.property('function','Object.equal')
   o1.should.have.property('file','/home/dominic/code/node/meta_test/test_reports.js')
   o1.should.have.property('line',21)
   o1.should.have.property('column',13)

   o2.should.have.property('function','Array.0')
   o2.should.have.property('file','/home/dominic/code/node/meta_test/test/test_reports.asynct.js')
   o2.should.have.property('line',201)
   o2.should.have.property('column',49)

   o3.should.have.property('function','runTestFunc')
   o3.should.have.property('file','/home/dominic/code/node/async_testing/lib/testing.js')
   o3.should.have.property('line',99)
   o3.should.have.property('column',22)
   
   o4.should.have.property('function','Array.forEach')
   o4.should.have.property('file','native')

   o5.should.have.property('function','Object.<anonymous>')
   o5.should.have.property('file','/home/dominic/code/node/style/test/error.expresso.js')
   o5.should.have.property('line',6)
   o5.should.have.property('column',12)
}


exports ['can parseError for non errorStyle types'] = function (test){
  
  var nostack = '[no stack trace]'
  
  var st = errorStyle.parseError("STRING THROW")
  var nt = errorStyle.parseError(123)
  var ot = errorStyle.parseError({name: "whatever", message: "non Error error TESTING ERROR MESSAGES"})
  
  st.should.have.property('name','string')
  st.should.have.property('message','STRING THROW')
  st.should.have.property('stack').eql([{unmatched:nostack}])  
  
  nt.should.have.property('name','number')
  nt.should.have.property('message',123)
  nt.should.have.property('stack').eql([{unmatched:nostack}])  
  
  ot.should.have.property('name','whatever')
  ot.should.have.property('message','non Error error TESTING ERROR MESSAGES')
  ot.should.have.property('stack').eql([{unmatched:nostack}])  
  
    

}
