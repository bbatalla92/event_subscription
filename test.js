const index =  require("./index");


let count = 5;
let key = "HELLO";

let count_method = ()=>{
    index.emit(key, count+1);
};

let console_count = (c) => {
    if(c !== 6){
        throw Error("Test Failed")
    }
};


let unsub = index.subscribe(key, console_count);

count_method();

unsub.unsubscribe();

count_method();