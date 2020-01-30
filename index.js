const subscriptions = {};


module.exports.subscribe = (key, callable) => {

    if(!key){
        throw Error("Missing key for subscribing")
    }
    if(!callable){
        throw Error("Missing callable for subscribing")
    }
    if(typeof callable !== 'function'){
        throw Error("Second parameter must be callable")
    }

    if (subscriptions[key]) {
        subscriptions[key].push(callable);
    } else {
        subscriptions[key] = [callable];
    }

};

module.exports.emit = (key, payload) => {

    if (!subscriptions[key]) return;

    subscriptions[key].forEach((callable) => {
        callable(payload);
    })

};