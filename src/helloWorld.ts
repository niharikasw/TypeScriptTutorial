function hello(str : string | number) {
    if(typeof(str) == "string")
        console.log("Hello" , str);
    else{
        console.log("Number found : Expected String");
        throw new Error("Function not implemented.");
    }
}

// Call named function
console.log(hello("niharika"));
console.log(hello(5));

