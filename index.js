const subscriptions = {};

let unsubscribe = {
    index: null,
    key: null,
    unsubscribe: function () {
        unsubscribe_method(this.key, this.index)
    }
};

module.exports.subscribe = (key, callable) => {

    if (!key) {
        throw Error("Missing key for subscribing")
    }
    if (!callable) {
        throw Error("Missing callable for subscribing")
    }
    if (typeof callable !== 'function') {
        throw Error("Second parameter must be callable")
    }

    let index = 0;
    if (subscriptions[key]) {
        index = subscriptions[key].push(callable) - 1 ;
    } else {
        subscriptions[key] = [callable] ;
    }

    return {...unsubscribe, key: key, index: index};

};

module.exports.emit = (key, payload) => {

    if (!subscriptions[key]) return;

    subscriptions[key].forEach((callable) => {
        if (callable) {
            callable(payload);
        }
    })

};


const unsubscribe_method = (key, index) => {
    if (subscriptions[key] && subscriptions[key].length) {
        subscriptions[key][index] = null;
    }
};