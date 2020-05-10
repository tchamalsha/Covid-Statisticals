fetch('https://www.hpb.health.gov.lk/api/get-current-statistical').then(function(responce){
    return responce.json();


}).then(function(obj){
    
    var textData=JSON.stringify(obj);
    var data=JSON.parse(textData);
    console.log(data);
    var date=data.data.update_date_time;
    console.log(date);
    document.getElementById("p1").innerHTML="Updated: "+ date;
    var LNC=data.data.local_new_cases;
    var LAC=data.data.local_active_cases;
    var LTC=data.data.local_total_cases;
    var LD=data.data.local_deaths;
    var LR=data.data.local_recovered;
    var GNC=data.data.global_new_cases;
    var GAC=data.data.global_active_cases;
    var GTC=data.data.global_total_cases;
    var GD=data.data.global_deaths;
    var GR=data.data.global_recovered;
    document.getElementById("td1").innerHTML=LNC;
    document.getElementById("td2").innerHTML=LAC;
    document.getElementById("td3").innerHTML=LTC;
    document.getElementById("td4").innerHTML=LD;
    document.getElementById("td5").innerHTML=LR;
    document.getElementById("td6").innerHTML=GNC;
    //document.getElementById("td7").innerHTML=GAC;
    document.getElementById("td8").innerHTML=GTC;
    document.getElementById("td9").innerHTML=GD;
    document.getElementById("td10").innerHTML=GR;
   
    for (i in data.data.hospital_data){
        x=data.data.hospital_data[i].hospital.name;
        y=data.data.hospital_data[i].treatment_local;
        z=data.data.hospital_data[i].treatment_foreign;
        var table="<tr><td>"+x+"</td>"+"<td>"+y+"</td>"+"<td>"+z+"</td></tr>";
        document.getElementById("tb").innerHTML +=table;
        
    }
   
}).catch(function (error){
    console.error('Something went wrong!!');
    console.error(error);
});