// Given 2 string parameters, show a concatenation of:

// the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
// a separator in between both strings: @@@
// the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 

//SOLUTION
function reverseAndMirror(s1,s2) {
    const a = revertCase(s2).split('').reverse().join('');
    const b = revertCase(s1).split('').reverse().join('') + revertCase(s1)
    return `${a}@@@${b}`

    function revertCase(s) {
        return s.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
    }
}