//INSTRUCTIONS
/** 
 * The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. Furthermore, it is supposed to say them in the same order they were set.

But it's not working properly.

Notes
There are 3 attributes

name
age
sex ('M' or 'F')
When the same attribute is assigned multiple times the hello method shows it only once. If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.
 */

//BUG
class Dinglemouse {

    constructor() {
        this.name = this.age = this.sex = 0
    }

    setAge(age) {
        this.age = age
        return this
    }

    setSex(sex) {
        this.sex = sex
        return this
    }

    setName(name) {
        this.name = name
        return this
    }

    hello() {
        return `Hello. My name is ${this.name}. I am ${this.age}. I am ${this.sex == 'M' ? "male" : "female"}.`
    }

}

//SOLUTION
class Dinglemouse {
    constructor() {
        this.attributes = [];
        this.values = {};
    }

    setAge(age) {
        if (!this.values.hasOwnProperty('age')) {
            this.attributes.push('age');
        }
        this.values.age = age;
        return this;
    }

    setSex(sex) {
        if (!this.values.hasOwnProperty('sex')) {
            this.attributes.push('sex');
        }
        this.values.sex = sex;
        return this;
    }

    setName(name) {
        if (!this.values.hasOwnProperty('name')) {
            this.attributes.push('name');
        }
        this.values.name = name;
        return this;
    }

    hello() {
        let message = 'Hello.';

        for (let i = 0; i < this.attributes.length; i++) {
            let attribute = this.attributes[i];
            if (this.values.hasOwnProperty(attribute)) {
                let value = this.values[attribute];
                let label;
                switch (attribute) {
                    case 'name':
                        label = 'My name is';
                        break;
                    case 'age':
                        label = 'I am';
                        break;
                    case 'sex':
                        label = 'I am';
                        value = value === 'M' ? 'male' : 'female';
                        break;
                }
                message += ' ' + label + ' ' + value + '.';
            }
        }

        return message;
    }
}