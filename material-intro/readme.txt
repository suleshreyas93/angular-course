Angular has deprecated md prefix. Use mat instead.
use @angular/material@5 instead of doing default npm install @angular/material it may install v6.
to use material you will @angular/mateiral@5, @angular/cdk@5, @angular/animations@5. 
do npm install for all above
add the default theme @import "~@angular/material/prebuilt-themes/indigo-pink.css";
add material icon link <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
this is basic set up to use angular material components
