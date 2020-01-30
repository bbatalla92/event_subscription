#Event Subscription Module

This is a light weight module for subscribing to events and can be used in any framework or node project.  It is as easy as passing in a key value and a callable method 
to subscribe and to emit an event, you just pass the key and the payload.  Every callable used to subscribe to the event,
 will be passed with the emitted payload. 
 
 This module was created to solve the problem of firing a callback when a particular action or event is triggered.
 For example, an event related to a Navigation drawer opening and closing.
 
  
###Usage - Simple Example


```$javascript
import {emit, subscribe} from "event-subscription";

const KEY = "KEY";

const counter;


let callback = (payload) => {
    console.log("Added one to the counter", payload)
}

function add() {
    counter = counter + 1;
    emit(KEY. counter)
}

subscribe(key, callback)

```
