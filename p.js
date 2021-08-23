var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
       name: 'Ahmed Zonayed',
       value: function() {
          console.log(this);
       }
    }
 }
 myCustomObj.anotherObj.value.call(myCustomObj)