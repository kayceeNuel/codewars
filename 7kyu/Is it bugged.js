/**Chingel was creating a function which would return true if the input followed this time format 14-10-2016 01:12 and false otherwise. 
 * But looks like he has messed it up. 
 * Could you help him out? Please! */


// BUG
/**function isItBugged(code){
//hmm, Looks like its bugged man!
 return this./^(\d{2}\d-){
}\d{2} \d\d;:;\d\d/".test[date];
}
 * 
 */

//SOLUTION
function isItBugged(date){
    return /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/.test(date);
   }

