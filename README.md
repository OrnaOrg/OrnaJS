# OrnaJS
![orna](http://ornaorg.github.io/img/ornaname.png)



Orna is good tool that atomize your css. It's parser and web framework.
-----------------------------------------------------------------------

**Atomic CSS** - is a model or style of coding where each of CSS properties have their own style classes. 
 Good for fast creating the readable and easy changeable User Interface.

**How Orna work?**

1.Just plug jquery and orna files into your document

    <script src="jquery.js"></script>
    <script src="orna.js"></script>
    
**CDN**

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ornajs/3.3.0/orna.min.js"></script>
    
2.Then you can write CSS properties like classes in the class attribute

    <div class="height_100px bgc_black color_white">
    Hello! If this block black and string is white it means that Orna is ready!
    </div>
    
    

3.Write Orna classes without whitespace. Whitespace used, like
separator between classes. 

    <div class="ff_Times New Roman">Hello</div> //Wrong, can use only fonts without whitespace in name.
    <div class="ff_Arial">Hello</div> //Right 

 - Always take the latest version!
 - The priority in OrnaJS added to class that was written last(final).
   Like class="height_100px height_200px" the height of element will be
   200px!
 - You can use abbreviated name, molecules with events and inheritance,
   but not all!
 - You can use prefix "this", like (height_200px_thisdiv_click), for current element, like hover in CSS!
 - If you want decorate outside element not a child, use prefix "side",
   like (height_200px_side#id_click)!
 - If you want to create ***breakpoint***, use prefix "reset" as 3 part or
   "set", like (height_200px_reset600px). Prefix "reset" works if size low than width, "set" works when
   more than width!
 


[http://ornaorg.github.io](http://ornaorg.github.io)

**Bower:** bower install OrnaJS

**NPM:** npm install ornajs
