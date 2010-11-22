<h1>colors.js - get color and style in your node.js console like what</h1>

<img src="http://i.imgur.com/goJdO.png" border = "0"/>

       var sys = require('sys');
       var style = require('style');

       sys.puts(style('hello').green); // outputs green text
       sys.puts(style('i like cake and pies').underline.red) // outputs red underlined text
       sys.puts(style('inverse the color').inverse); // inverses the color
       sys.puts(style('OMG Rainbows!').rainbow); // rainbow (ignores spaces)
       
       slightly more verbose, but better, when it come it this:
       
       style = require('style').enable(false) //... which you may want to do at some point!
       
       sys.puts(style('hello').green); // plain text
       sys.puts(style('i like cake and pies').underline.red) // plain text
       sys.puts(style('inverse the color').inverse); // plain text
       sys.puts(style('OMG Rainbows!').rainbow); // plain text
       
       //ALSO: does not monkeypatch string with 13 new properties!
       
          
       
## ALSO! pad your strings:

    style("hello").lpad(20)
    "               hello"
    style("goodbye").rpad(20,".")
    "goodbye.............."

    you can even style you padding

    style("goodbye").rpad(20,style(".").grey)
    
    style is aware of it self, and will style the pading as one chunk.
    however...
## todo:

if you join styled strings and then pad them, because of the escape characters
it will not come out the same size when you turn style off.

    style = require('style')
    style((style(1).red + style(2).blue).lpad(10)
    ________12
    style = require('style').enable(false)
    ____________________________12


don't do that and you should be fine....
      
##colors and styles!##
- bold
- italic
- underline
- inverse
- yellow
- cyan
- white
- magenta
- green
- red
- grey
- blue
- black



## run tests

    >npm install expresso
    >expresso style.expresso.js

### Authors 

#### Alexis Sellier (cloudhead) , Marak Squires , Justin Campbell, Dominic Tarr
