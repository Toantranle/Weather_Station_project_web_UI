
let week={
  Sunday:0, 
  Monday:1,
  Tuesday:2,
  Wednesday:3,
  Thursday:4,
  Friday:5,
  Saturday:6,
  }

window.onload = function() {
  var d = new Date();
  // Set your output to a variable
  var hours=d.getHours();
  var minutes=d.getMinutes();
  var second=d.getSeconds();
  var days=d.getDay();
  if(minutes<10){
    minutes='0'+minutes;
  }   
  if(second<10){
    second='0'+second;
  } 
  var output = hours+":"+minutes+":"+second+" ";
  let time=Object.keys(week)[days];
  if(days==0)
  {
    var yesterday = Object.keys(week)[6];
  }
  else
  {
    var yesterday = Object.keys(week)[days-1];
  }

  //var yesterday = new Date(Date.now() - 86400000); // that is: 24 * 60 * 60 * 1000
  //let yesterday = moment().subtract(1, 'day').toDate();
  //let time_yesterday=Object.keys(week)[days-2];
  
  if(hours>12)
  {
      output +="P.M";
  }
  else{
    output +="A.M"
  }


  // Target the ID of the span and update the HTML
  //document.getElementById('Date').innerHTML = output;
  document.getElementById('Date1').innerHTML = output;
  document.getElementById('Date2').innerHTML = output;

  //document.getElementById('Day').innerHTML = time;
  document.getElementById('Day1').innerHTML = time;
  document.getElementById('Day2').innerHTML = time;

  //document.getElementById('yesterday').innerHTML = time_yesterday;
  document.getElementById('yesterday1').innerHTML = yesterday;
  document.getElementById('yesterday2').innerHTML = yesterday;
  setTimeout(window.onload,1000);
};

//const DATA_SOURCE2= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature';