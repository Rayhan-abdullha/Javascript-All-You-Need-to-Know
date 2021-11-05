// privet data 

var Rect = function(width, height) {
    this.width = width 
    this.height = height
    // privet data
    var obj = {
        name: 'codder RayhaN',
        age: 23
    }
    // privet data
    var rectAngle = function() {
       console.log(this.width);
       console.log(this.height);
    }.bind(this)

    this.draw = function() {
        rectAngle()
        console.log(obj.name);
        console.log(obj.age);
    }
    Object.defineProperty(this, 'obj', {
        get: function() {
            return obj;
        },
        set: function(value) {
            return obj = value
        }
    })
  }
  
  var rect1 = new Rect(10, 20)
  rect1.obj = {
      name: 'hello',
      age: 100
  }
  rect1.draw()
