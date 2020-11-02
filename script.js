/*Fill your code */
var total=0;
var layer=5;
var bill=1;

document.getElementById("Chocolatebtn").onclick = function(){
    document.getElementById('bill'+bill).innerHTML = 'Chocolate ----------- 300';
    document.getElementById('layer'+layer).style.visibility="visible";
    layer--;
    bill++;
    total=total+300;
    
       
       
        
       
  
}
//var layer4  = document.getElementById('layer4');
document.getElementById("Strawberrybtn").onclick = function(){
    document.getElementById('bill'+bill).innerHTML = 'Strawberry ----------- 100';
    total=total+100;
    bill++;
    document.getElementById('layer'+layer).style.visibility="visible";
    layer--;
        
       
  
}
//var layer3  = document.getElementById('layer3');
document.getElementById("Butterscotchbtn").onclick = function(){
    document.getElementById('bill'+bill).innerHTML = 'Butterscotch ---- 200';
    bill++;
   
    total=total+200;
    document.getElementById('layer'+layer).style.visibility="visible";
    layer--;
       
  
}
//var layer2  = document.getElementById('layer2');
document.getElementById("Vannilabtn").onclick = function(){
    document.getElementById('bill'+bill).innerHTML = 'Vannila ----------- 250';
    bill++;
    total=total+250;
    document.getElementById('layer'+layer).style.visibility="visible";
    layer--;
        
       
  
}
//var layer1  = document.getElementById('layer1');
document.getElementById("Redvelvetbtn").onclick = function(){
    document.getElementById('bill'+bill).innerHTML = 'Redvelvet ----------- 350';
    total=total+350;
    bill++;
    document.getElementById('layer'+layer).style.visibility="visible";
    layer--;
       
      
       
  
}
document.getElementById("buy").onclick = function(){
   
    document.getElementById('bill'+bill).innerHTML="total----- " +total;
    if(layer==0){
    document.getElementById('candle').style.visibility="visible"; 
    }
    

}