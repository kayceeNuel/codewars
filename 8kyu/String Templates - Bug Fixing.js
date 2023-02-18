
// DESCRIPTION:
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//P.E.R.P
//P: using the rest parameter (...param name) to accept any number of an arrays.
//E:`I like ${rest param name (', ') concat all the element in the rest param }`
//R: Combine the tempelates 
//P: FUNCTION buildString with argument template

//     // Join the elements of the template array with a comma and a space
//     SET joinedTemplate = join elements of template with ", "

//     // Combine the joined template with the "I like" and "!" strings
//     SET finalString = "I like " + joinedTemplate + "!"

//     // Return the final string
//     RETURN finalString

// END FUNCTION


function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }