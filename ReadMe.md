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
       
       
<h2>colors and styles!</h2>
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

## ALSO! pad your strings:

    style("hello").lpad(20)
    "               hello"
    style("goodbye").rpad(20,".")
    "goodbye             "


### Authors 

#### Alexis Sellier (cloudhead) , Marak Squires , Justin Campbell, Dominic Tarr
