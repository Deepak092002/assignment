var myarray=["Jason","Deepak","John","Maddy"];
var myfunc=function(letter){
    for(var i=0;i<letter.length;i++){
        if(letter[i].charAt(0)=="J"){
            console.log("Goodbye "+myarray[i]);
        }
        else{
            console.log("Hello "+myarray[i]);
        }
    }
}
myfunc(myarray);