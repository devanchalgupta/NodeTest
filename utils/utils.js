var add = (a, b) => {
    return a + b;
}

var addAsync = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

var square = (x) => {
    return x * x;
}

var squareAsync = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
}

var setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}

module.exports = {
    add, square, setName, addAsync, squareAsync
}