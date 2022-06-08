# _Practice For Loops: count-up-by_

#### Contributors: _**Zachary Waggoner & Ashe Urban**_

#### _A page demonstrating new skills in for loops!_


## Technologies Used

* HTML
* CSS
* Markdown
* JavaScript
* jQuery

## Description

text

## Tests
# _Describe: countUpBy_

Test: "It should return an array of multiples of countBy to countTo."
Code:
multiples(countBy, countTo);
Expected output: "index1 * countBy"

Test: "It should return a value of 0 if variables are empty."
Code:
if (noInput(countBy, countTo)) {
   return 0;
Expected output: 0

Test: "It should return NaN is not a number."
Code: 
if (countBy.parseInt() === NaN || countTo.parseInt() === NaN) {
    return NaN;
Expected ouput: NaN

Test: "It should return "Please don't" if countBy is <= 1 or countTo <= 0."
Code:
 if (parseInt(countBy) <= 1 || parseInt(countTo) <= 0) {
    return "Please don't";
Expected output: "Please don't"



## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser

## Known Bugs

* text

## License

_MIT_

Copyright (c) _2022_ _Zachary Waggoner & Ashe Urban_