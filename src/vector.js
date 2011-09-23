// Provides a simple 3D vector class.
Vector = function(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
};

// ### Instance Methods
// The methods `add()`, `subtract()`, `multiply()`, and `divide()` can all
// take either a vector or a number as an argument.
Vector.prototype.negative = function() { return new Vector(-this.x, -this.y, -this.z); };
Vector.prototype.add = function(v) { var b = v instanceof Vector; return new Vector(this.x + (b ? v.x : v), this.y + (b ? v.y : v), this.z + (b ? v.z : v)); };
Vector.prototype.subtract = function(v) { var b = v instanceof Vector; return new Vector(this.x - (b ? v.x : v), this.y - (b ? v.y : v), this.z - (b ? v.z : v)); };
Vector.prototype.multiply = function(v) { var b = v instanceof Vector; return new Vector(this.x * (b ? v.x : v), this.y * (b ? v.y : v), this.z * (b ? v.z : v)); };
Vector.prototype.divide = function(v) { var b = v instanceof Vector; return new Vector(this.x / (b ? v.x : v), this.y / (b ? v.y : v), this.z / (b ? v.z : v)); };
Vector.prototype.equals = function(v) { return this.x == v.x && this.y == v.y && this.z == v.z; };
Vector.prototype.dot = function(v) { return this.x * v.x + this.y * v.y + this.z * v.z; };
Vector.prototype.cross = function(v) { return new Vector(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x); };
Vector.prototype.length = function() { return Math.sqrt(this.dot(this)); };
Vector.prototype.unit = function() { return this.divide(this.length()); };
Vector.prototype.min = function() { return Math.min(Math.min(this.x, this.y), this.z); };
Vector.prototype.max = function() { return Math.max(Math.max(this.x, this.y), this.z); };
Vector.prototype.toAngles = function() { return { theta: Math.atan2(this.z, this.x), phi: Math.asin(this.y / this.length()) }; };
Vector.prototype.toArray = function(n) { return [this.x, this.y, this.z].slice(0, n || 3); };

// ### Static Methods
// `Vector.random()` returns a vector with a length of 1 and a statistically
// uniform direction. `Vector.lerp()` performs linear interpolation between
// two vectors.
Vector.fromAngles = function(theta, phi) { return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi)); };
Vector.random = function() { return Vector.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1)); };
Vector.min = function(a, b) { return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z)); };
Vector.max = function(a, b) { return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z)); };
Vector.lerp = function(a, b, fraction) { return a.add(b.subtract(a).multiply(fraction)); };
Vector.fromArray = function(a) { return new Vector(a[0], a[1], a[2]); };