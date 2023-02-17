// Task
// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"

//SOLUTION
function colorOf(r, g, b) {
    // Convert the RGB values to a hexadecimal string
    let rHex = r.toString(16).padStart(2, "0");
    let gHex = g.toString(16).padStart(2, "0");
    let bHex = b.toString(16).padStart(2, "0");
  
    // Combine the hexadecimal values into a web color code
    let colorCode = `#${rHex}${gHex}${bHex}`;
  
    // Return the web color code
    return colorCode;
  }
  
  // Example usage
  console.log(colorOf(255, 0, 0)); // Output: "#ff0000"
  console.log(colorOf(0, 111, 0)); // Output: "#006f00"
  console.log(colorOf(1, 2, 3)); // Output: "#010203"


  //SECOND SOLUTION
  function colorOf(r, g, b) {
    let R = r.toString(16)
    let G = g.toString(16)
    let B = b.toString(16)
    
    if (r < 16) R = '0' + R
    if (g < 16) G = '0' + G
    if (b < 16) B = '0' + B
    
    return '#' + R + G + B
  }