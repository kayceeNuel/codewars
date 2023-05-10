/** The problem:
Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, we discovered that "accessible" also means "mutable".

If, for example, we've got a "NamedOne" like this :

var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName // -> "Naomi"
namedOne.lastName  // -> "Wang"
namedOne.fullName  // -> "Naomi Wang"
...properties may be changed :

namedOne.firstName = "John"
namedOne.firstName // -> "John"
namedOne.lastName = "Doe"
namedOne.lastName  // -> "Doe"
...but all properties are not updated !

namedOne.fullName  // -> "Naomi Wang" 
//-- Oh no ! we want fullName == "John Doe" now ! */

//SOLUTION
function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
  
    Object.defineProperty(this, "fullName", {
      set: function(value) {
        var parts = value.split(" ");
        if (parts.length === 2) {
          this.firstName = parts[0];
          this.lastName = parts[1];
        }
      },
      get: function() {
        return this.firstName + ' ' + this.lastName;
      }
    });
  }