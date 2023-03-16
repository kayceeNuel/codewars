// ##Your mission

// On the contrary, the purpose of this kata is to create an OnceNamedOne object with immutable properties.

// That means .firstName, .lastName and .fullName are defined into the Constructor and can't be no more changed.

// The properties are still readable using the dot or bracket notation but there're not writable.


//BUG

function OnceNamedOne(first, last) {
        this.firstName = first;
        this.lastName = last;
        this.fullName = this.firstName + ' ' + this.lastName;

    }
    
    //solution
    function OnceNamedOne(first, last) {
        // -- SHOULD be changed --
            this.firstName = first;
            this.lastName = last;
            this.fullName = this.firstName + ' ' + this.lastName;
            Object.freeze(this)
        }