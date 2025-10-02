let str = "hello";

let reverse = str.split("").reverse().join("");

if(str === reverse){
    console.log(str + " -> palindrome")
}else{
    console.log(str + " -> not palindrome")

}