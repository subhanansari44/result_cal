function calculate(){
   let total_m = parseInt(document.getElementById("t_marks").value);
   let Eng_m = parseInt(document.getElementById("eng").value);
   let urdu_m = parseInt(document.getElementById("urd").value);
   let math_m = parseInt(document.getElementById("math").value);
   let CS_marks = parseInt(document.getElementById("c_sci").value);
   
    document.getElementById("T_mark").innerHTML = total_m;
   

    let obtain_m = Eng_m + urdu_m + math_m + CS_marks;
   document.getElementById("O_mark").innerHTML=obtain_m;

   let percent =obtain_m/total_m*100
   document.getElementById("percent").innerHTML=Math.round(percent)+ "%";


   if(percent>=80 && percent<=100){
      document.getElementById("grade").innerHTML="A1 grade"
   }else if(percent>=70 && percent<80){
    document.getElementById("grade").innerHTML="A grade"
   }else if(percent>=60 && percent<70){
    document.getElementById("grade").innerHTML="B grade"
   }else if(percent>=50 && percent<60){
    document.getElementById("grade").innerHTML="C grade"
   }else if(percent>=40 && percent<50){
    document.getElementById("grade").innerHTML="D grade"
   }else {
    document.getElementById("grade").innerHTML="F grade"
   }

   if(percent>=80 && percent<=100){
    document.getElementById("Remarks").innerHTML="Excellent*"
   }else if(percent>=40 && percent<80){
    document.getElementById("Remarks").innerHTML="Good"
   }else{
    document.getElementById("Remarks").innerHTML="Fail"
   }
}