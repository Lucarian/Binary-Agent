// -------------------------------------------------------------------------
// ( My Personal Symbols Legend: D&I === Declaration & Initialization )
// -------------------------------------------------------------------------


/**
 *  --------------------- FUNCTIONALITY SUMMARY ----------------------------
 * 
 *  --- A program that takes binary inputs and outputs the corresponding
 *      characters.
 */



function binaryAgent(str) {

  // D&I of variables

  let binaries = str.split(" "); // stores all binary values into an array.

  let decimArr = []; // It will store the binaries in decimal form
  let decim = 0; // the variable where temporarily every ready decimal element will be stored
  let base = 0;  // here will be stored the corresponding power for every iteration
  let res = "";  // here will be stored the final result, the sequence of resulting characters

  
  // Binary to Decimal Conversion Procedure -------------------------

  for (let i=0; i < binaries.length; i++) {
    
    for (let j = binaries[i].length-1; j >= 0; j--) {
      
      decim += binaries[i][j] * Math.pow(2, base);
      base++;
      
      
    }

    decimArr.push(decim);
    decim = 0;
    base = 0;

  }

  // ----------------------------------------------------------------

  let hex = decimArr.map( x => x.toString(16) ); // Decimal to Hexadecimal Conversion Procedure
  

  // Hexadecimal Code to Character Conversion -----------------------

  for (let v of hex) {
    let x = parseInt(v, 16);  // Hexadecimal Code to Decimal Code Conversion
    let final = String.fromCharCode(x);  // Decimal Code to Character Conversion
    res = res.concat(final);  //  Pushing each character to the final string 'res' using a concatenation method
    // or " res += final; " does the same job, too.
  }

  return res;
}



// --- Testing of the function ---

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

























