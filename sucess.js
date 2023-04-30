
//var name1 =document.querySelector('#k1').value;
document.querySelector('#on').addEventListener('click', function(){ 
    
    var documentID = document.getElementById("collapse");
    documentID.classList.remove("hide");
    
    
   //  var url = 'output.html';
   //  window.open(url, '_blank');




 });
 document.querySelector('#hhide').addEventListener('click', function(){ 
    
   var documentID1 = document.getElementById("collapse");
   documentID1.classList.add("hide");

});

 function offi(){ 
    
    var documentID1 = document.getElementById("collapse");
    documentID1.classList.add("hide");

 }
 //
 function hui(){ 
   console.log("hi");
   alert("Remember : please remember to add employment history ");
   var documentID11 = document.getElementById("product");
   documentID11.innerHTML = "click on download button given below";
   
   
   


    




}
var khanki =0;
function bar(){
   
   alert("Info Updated");
   khanki +=25;
   document.getElementById("chumu1").style.value = "width:" + khanki.toString()+"%";

}




