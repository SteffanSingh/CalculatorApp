
function submit()
{
    let date1=document.querySelector("#date").value;
    console.log(date1);
    let month1=document.querySelector("#month").value;
    console.log(month1);
     let year1=document.querySelector("#year").value;
     console.log(year1);
     let currentDate = new Date();
                let cDay = currentDate.getDate();
                let cMonth = currentDate.getMonth() + 1;
                
                let cYear = currentDate.getFullYear();
                let d=cDay-date1;
                let  m=Math.abs(cMonth-month1);
                let y=cYear-year1;

                console.log(d+" "+m+" "+y);

                let months=[31,28,31,30,31,30,31,31,30,31,30,31];

 if(date1=="")
 {
    document.getElementById("div1").innerText="Please Provide a  date";
 } 
  else if(month1=="")
 {
    document.getElementById("div1").innerText="Please provide a month ";
 }
 else if(year1=="")
 {
    document.getElementById("div1").innerText="Please provide an  year ";
 }

 else if(year1.length>4)
 {
    document.getElementById("div1").innerText="Please provide  year in YYYY Format "
 }

 else if(isNaN(parseInt(date1)))
 {
    document.getElementById("div1").innerText="Please provide a valid date";
 }
else if(isNaN(parseInt(month1))  )
 {
    document.getElementById("div1").innerText="Please provide a valid month";
 }
else if(isNaN(parseInt(year1)) )
 {
    document.getElementById("div1").innerText="Please provide a valid year";
 }

 else if(parseInt(date1)<=0)
 {
    document.getElementById("div1").innerText="Date can not be 0 or less than 0";
 }
else if(parseInt(month1) <=0)
{
    document.getElementById("div1").innerText="Month can not be 0 or less than 0";

}
else if(parseInt(year1)<=0)
{
    document.getElementById("div1").innerText="Year can not be 0 or less than 0";

}
else if(parseInt(month1) >12){
    document.getElementById("div1").innerText="Please provide a valid month ranges from 1 to 12"
}
  else if(parseInt(date1)>months[(month1)-1])
{
   document.getElementById("div1").innerText="Please provide a valid date with respeact to month"
}
  else {
   document.getElementById("div1").innerText="you are "+y+" years, "+m+"months "+d+" days";
}
       


 


               // document.getElementById("div1").innerText="Please provide a valid date ranges from 1 to 31";

    
               
          //  else{

               // let text2=document.createTextNode("Please Provide year in XXXX Format");
                //console.log(text2);
          //  }
       // }
       // else{
            //let text4=document.createTextNode("Please provide a valid month between 1 to 12")
            //console.log(text4);
        //}
        
    // }
     //else
     //{
     //  let text3="Please Provide valid date ranges from 1 to 31";
        
     //}
 
     
        
     //}
        }
    
 

 