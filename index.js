var count=0;
function dataToHtmlRepresentation(dataObjects,l) {
  //const l = 50;
  var table = document.getElementById("ya");
  // Adding a table row for each object:

  document.getElementById("ya").innerHTML=" ";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "No";
      cell2.innerHTML = "Date";
      cell3.innerHTML = "Time";
      cell4.innerHTML = "Measurement";
      cell5.innerHTML = "Value";
  
      for (let i = 0; i < l; i++) {
    
      const dataObject = dataObjects[i];
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i+1;
      cell3.innerHTML = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
      cell2.innerHTML = dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3];
      cell4.innerHTML = Object.keys(dataObject.data)[0];
      cell5.innerHTML = Object.values(dataObject.data)[0];
  }
     
}

//500 latest measue
const DATA_SOURCE= 'http://webapi19sa-1.course.tamk.cloud/v1/weather';

function chart3()
{
  //document.getElementById("ya").style.marginTop="-11vh";
  document.getElementById("ya").style.marginTop="-1vh";
  var myChart = echarts.init(document.getElementById('chart1'),null);
  option = {
    title: 
            {
                text: 'Welcome to Toan Tran world'
            },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    dataZoom: [{
      type: 'inside',
      start: 100,
      end: 0
  }, {
      start: 100,
      end: 0
  }],
    series: [
        {
            name: 'Welcome',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 250, name: 'Welcome'},
                {value: 250, name: 'to'},
                {value: 250, name: 'Toan'},
                {value: 250, name: 'Tran'},
                {value: 250, name: 'Website'}
            ]
        }
    ]
};
          myChart.setOption(option);
          window.addEventListener('resize',function(){
            myChart.resize();
          })
} 

function Tier1() {
  // $ is a shorthand for the jQuery object\
  //document.getElementById("chart1").innerHTML=" ";
 // document.getElementById("chart1").innerHTML=" ";
  document.getElementById("contents").style.height = "100%";
  //327 
  document.getElementById("deco").style.height = "100%"; ;
  document.getElementById("option").style.height = "0vh";
  document.getElementById("chart").style.height = "50vh";
  document.getElementById("chart1").style.height = "50vh";
  document.getElementById("option").style.outline = "0";
  //document.getElementById("option").style.marginTop = "-3vh";
  //document.getElementById('deco').style.backgroundColor = 'yellow' ;
  document.getElementById('chart1').style.backgroundColor = '#6F6E6E' ; 
  document.getElementById("option").innerHTML=" ";
  //
  //document.getElementById("ya").style.marginTop="11vh";
  //document.getElementById("ya").style.marginTop="0";
  //
  chart3();
  $.ajax({
      type: 'GET',
      url: DATA_SOURCE,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation(data,50));
          //$('#chart1').html(chart3());
          
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
  
}
  
Tier1();
// view 2 ---------------------------------------- -----------------------------------------------------------------------------------------------------------------

//bar chart Now
const DATA_SOURCE1= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature';

function chart(dataObjects,l)
{
  let text= new Array(l);
  let number= new Array(l); 
  text[0]='';
  number[0]=0;
  for (i = 1; i < l+1; i++) {
    const dataObject = dataObjects[i-1];
    //text[i] = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
    //character.date_time.slice(0,-5).split('T').join(' at ')
    text[i] = dataObject.date_time.slice(0,-5).split('T').join(' at ');

    number[i] = dataObject.temperature;
}
   var myChart = echarts.init(document.getElementById('chart1'),null);
  
        
        // specify chart configuration item and data
        var option = {
          
            title: 
            {
                text: 'Temperature'
            },
            tooltip: {},
            legend: {
                data:['Temperature'],
             
            },
            toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
            xAxis: {
                data: text,
               
            },
            yAxis: {
              
            },
            series: [{
                name: 'Temperature',
                type: 'bar',
                data: number,
                axisLabel: {
                  show:true,
                  textStyle: {
                    color: 'white'
                  }
                },
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          {offset: 0, color: '#83bff6'},
                          {offset: 0.5, color: '#188df0'},
                          {offset: 1, color: '#188df0'}
                      ]
                  )
              },
             
      
            }]
          }
          option && myChart.setOption(option);
          window.addEventListener('resize',function(){
            myChart.resize();
          })
}   

function dataToHtmlRepresentation1(dataObjects,l) {
  //const l = 50;
  var table = document.getElementById("ya");
  // Adding a table row for each object:
  document.getElementById("ya").innerHTML=" ";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "No";
      cell2.innerHTML = "Date";
      cell3.innerHTML = "Time";
      cell4.innerHTML = "Measurement";
      cell5.innerHTML = "Value";
  
      for (let i = 0; i < l; i++) {
    
      const dataObject = dataObjects[i];
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i+1;
      cell3.innerHTML = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
      cell2.innerHTML = dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3];
      cell4.innerHTML = "Temperature";
      cell5.innerHTML = dataObject.temperature+" °C";
  }
     
}

function Tier2() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype
  document.getElementById("option").style.height = "10vh";
  document.getElementById("option").style.marginTop = "0";
  document.getElementById("option").innerHTML=`

  <div class="dropdown">
  <div class="select">
    <span>Now</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul class="dropdown-menu">
    <li id="now" onclick="Tier2()">Now</li>
    <li id="24h" onclick="Tier2_24()">24 hours</li>
    <li id="48h" onclick="Tier2_48()">48 hours</li>
    <li id="72h" onclick="Tier2_72()">72 hours</li>
    <li id="1w"  onclick="Tier2_1w()">1 week</li>
    <li id="1m"  onclick="Tier2_1m()">1 month</li>
  </ul>
</div>
  
  
  `;

  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE1,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation1(data,20));
          $('#chart1').html(chart(data,20));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 


//bar chart 24 hours

const DATA_SOURCE3= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/24';

function Tier2_24() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype

//   $('.dropdown').click(function () {
//     $(this).attr('tabindex', 1).focus();
//     $(this).toggleClass('active');
//     $(this).find('.dropdown-menu').slideToggle(300);
// });
// $('.dropdown').focusout(function () {
//     $(this).removeClass('active');
//     $(this).find('.dropdown-menu').slideUp(300);
// });
// $('.dropdown .dropdown-menu li').click(function () {
//     $(this).parents('.dropdown').find('span').text($(this).text());
//     $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
// });

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE3,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation1(data,24));
          $('#chart1').html(chart(data,24));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//bar chart 48 hours

const DATA_SOURCE4= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/48';

function Tier2_48() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE4,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation1(data,48));
          $('#chart1').html(chart(data,48));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 


//bar chart 72 hours

const DATA_SOURCE5= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/72';

function Tier2_72() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE5,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation1(data,72));
          $('#chart1').html(chart(data,72));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//bar chart 168 hours/1 week

const DATA_SOURCE6= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/168';

function Tier2_1w() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE6,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation1(data,168));
          $('#chart1').html(chart(data,168));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
}

//bar chart 720 hours/1 m

const DATA_SOURCE7= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/721';

function Tier2_1m() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE7,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation1(data,720));
          $('#chart1').html(chart(data,720));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
}




//view 3 ------------------------------------------------------------------------------------------------------------------------------------------------------------
const DATA_SOURCE2= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed';

function dataToHtmlRepresentation2(dataObjects,l) {
  //const l = 50;
  var table = document.getElementById("ya");
  // Adding a table row for each object:
  document.getElementById("ya").innerHTML=" ";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "No";
      cell2.innerHTML = "Date";
      cell3.innerHTML = "Time";
      cell4.innerHTML = "Measurement";
      cell5.innerHTML = "Value";
  
      for (let i = 0; i < l; i++) {
    
      const dataObject = dataObjects[i];
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i+1;
      //time
      cell3.innerHTML = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
      //date
      cell2.innerHTML = dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3];
      cell4.innerHTML = "Wind Speed";
      cell5.innerHTML = dataObject.wind_speed+" m/s";
  }
     
}

function chart1(dataObjects,l)
{
  let text= new Array(l);
  let number= new Array(l); 
  text[0]='';
  number[0]=0;
  for (i = 1; i < l; i++) {
    const dataObject = dataObjects[i-1];
    //text[i] = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
    text[i] =dataObject.date_time.slice(0,-5).split('T').join(' at ');
    number[i] = dataObject.wind_speed;
}
   var myChart = echarts.init(document.getElementById('chart1'),null);
  
        
        // specify chart configuration item and data
        var option = {
          
            title: 
            {
                text: 'Wind Speed'
            },
            tooltip: {},
            legend: {
                data:['Wind Speed'],
             
            },
            toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
            xAxis: {
                data: text,
               
            },
            yAxis: {
  
            },
            dataZoom: [{
              type: 'inside',
              start: 100,
              end: 0
          }, {
              start: 100,
              end: 0
          }],
            series: [{
                name: 'Wind Speed',
                type: 'bar',
                data: number,
                axisLabel: {
                  show:true,
                  textStyle: {
                    color: 'white'
                  }
                },
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          {offset: 0, color: '#83bff6'},
                          {offset: 0.5, color: '#188df0'},
                          {offset: 1, color: '#188df0'}
                      ]
                  )
              },
             
      
            }]
          }
          option&&myChart.setOption(option);
          window.addEventListener('resize',function(){
            myChart.resize();
          })
}  

function Tier3() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';

 document.getElementById("ya").innerHTML=" ";
 //document.getElementById('deco').style.backgroundColor = 'orange' ; 
 document.getElementById('chart1').style.backgroundColor = 'white' ; 
 document.getElementById("contents").style.height = "168vh"; 
 document.getElementById("deco").style.height = "168vh"; 
 document.getElementById("page").style.height = "168vh";
 document.getElementById("chart").style.height = "60vh";
 document.getElementById("chart1").style.height = "50vh";
 //
 document.getElementById("ya").style.marginTop="0";
 //option stype
 document.getElementById("option").style.height = "10vh";
 document.getElementById("option").style.marginTop = "0";
 document.getElementById("option").innerHTML=`
 
 <div class="dropdown">
  <div class="select">
    <span>Now</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul class="dropdown-menu">
    <li id="now" onclick="Tier3()">Now</li>
    <li id="24h" onclick="Tier3_24()">24 hours</li>
    <li id="48h" onclick="Tier3_48()">48 hours</li>
    <li id="72h" onclick="Tier3_72()">72 hours</li>
    <li id="1w"  onclick="Tier3_1w()">1 week</li>
    <li id="1m"  onclick="Tier3_1m()">1 month</li>
  </ul>
</div>
 
 
 `;

 $('.dropdown').click(function () {
   $(this).attr('tabindex', 1).focus();
   $(this).toggleClass('active');
   $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
   $(this).removeClass('active');
   $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
   $(this).parents('.dropdown').find('span').text($(this).text());
   $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
  $.ajax({
      type: 'GET',
      url: DATA_SOURCE2,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation2(data,20));
          $('#chart1').html(chart1(data,20));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//bar chart 24 hours

const DATA_SOURCE8= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/24';

function Tier3_24() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE8,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation2(data,24));
          $('#chart1').html(chart1(data,24));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//bar chart 48 hours

const DATA_SOURCE9= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/48';

function Tier3_48() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE9,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation2(data,48));
          $('#chart1').html(chart1(data,48));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 


//bar chart 72 hours

const DATA_SOURCE10= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/72';

function Tier3_72() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE10,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation2(data,72));
          $('#chart1').html(chart1(data,72));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//bar chart 168 hours/1 week

const DATA_SOURCE11= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/168';

function Tier3_1w() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE11,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation2(data,168));
          $('#chart1').html(chart1(data,168));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
}

//bar chart 720 hours/1 m

const DATA_SOURCE12= 'http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/721';

function Tier3_1m() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE12,
      dataType: 'JSON',
      success: function(data) {
        $('#contents').html(dataToHtmlRepresentation2(data,698));
        $('#chart1').html(chart1(data,698));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
}


//view 4 ----------------------------------------------------------------------------------------------------------------------------------------------------------



const DATA_SOURCE13= 'http://webapi19sa-1.course.tamk.cloud/v1/weather';

//############################# view 4 temperature



function chartLine_tem(dataObjects,l)
{
  let text= new Array(l);
  let number= new Array(l); 
  for (i = 0; i < l; i++) {
    const dataObject = dataObjects[i];
    //text[i] = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
    text[i] =dataObject.date_time.slice(0,-5).split('T').join(' at ');
    number[i] = dataObject.temperature;
}
var chartDom = document.getElementById('chart1',null);
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
      }
    },
    title: {
        left: 'center',
        text: 'Toan Tran Weather Station',
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: text
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 100,
        end: 0
    }, {
        start: 100,
        end: 0
    }],
    series: [
        {
            name:' ',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: number
        }
    ]
};

option && myChart.setOption(option);
window.addEventListener('resize',function(){
  myChart.resize();
})
}  

function TemPresent(dataObjects) {
  //const l = 50;
  var l=25;
  var counter=0;
  let tem=[];
  let time=[];
  let date=[];
  let all=[];
    
    for(var i=0;i<500;i++)
    {
      const dataObject = dataObjects[i];
      if(Object.keys(dataObject.data)[0]=='temperature' && counter<25)
      {
        
        tem.push(Object.values(dataObject.data)[0]);
        time.push(dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18]);
        date.push(dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3]);
        all.push(dataObject.date_time.slice(0,-5).split('T').join(' at '));
        counter=counter+1;
      }
    }

  var table = document.getElementById("ya");
  // Adding a table row for each object:
  document.getElementById("ya").innerHTML=" ";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "No";
      cell2.innerHTML = "Date";
      cell3.innerHTML = "Time";
      cell4.innerHTML = "Measurement";
      cell5.innerHTML = "Value";
  
      for (let i = 0; i < l; i++) {
    
      //const dataObject = dataObjects[i];
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i+1;
      cell3.innerHTML = time[i];
      cell2.innerHTML = date[i];
      cell4.innerHTML = "Temperature";
      cell5.innerHTML = tem[i]+" °C";
  }

  var chartDom = document.getElementById('chart1',null);
  var myChart = echarts.init(chartDom);
  var option;

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
      }
    },
    title: {
        left: 'center',
        text: 'Toan Tran Weather Station',
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: all
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 100,
        end: 0
    }, {
        start: 100,
        end: 0
    }],
    series: [
        {
            name:' ',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: tem
        }
    ]
};

option && myChart.setOption(option);
window.addEventListener('resize',function(){
  myChart.resize();
})
}

// function chart_tem_menu(dataObjects,l)
// {
//   var l=25;
//   var counter=0;
//   let tem=[];
//   let time=[];
//   let date=[];
//   let all=[];
    
//     for(var i=0;i<500;i++)
//     {
//       const dataObject = dataObjects[i];
//       if(Object.keys(dataObject.data)[0]=='temperature' && counter<25)
//       {
        
//         tem.push(Object.values(dataObject.data)[0]);
//         time.push(dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18]);
//         date.push(dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3]);
//         all.push(dataObject.date_time.slice(0,-5).split('T').join(' at '));
//         counter=counter+1;
//       }
//     }

//   var chartDom = document.getElementById('chart1',null);
//   var myChart = echarts.init(chartDom);
//   var option;

// option = {
//     tooltip: {
//         trigger: 'axis',
//         position: function (pt) {
//           return [pt[0], '10%'];
//       }
//     },
//     title: {
//         left: 'center',
//         text: 'Toan Tran Weather Station',
//     },
//     toolbox: {
//         feature: {
//             saveAsImage: {}
//         }
//     },
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: all
//     },
//     yAxis: {
//         type: 'value',
//         boundaryGap: [0, '100%']
//     },
//     dataZoom: [{
//         type: 'inside',
//         start: 100,
//         end: 0
//     }, {
//         start: 100,
//         end: 0
//     }],
//     series: [
//         {
//             name:' ',
//             type: 'line',
//             symbol: 'none',
//             sampling: 'lttb',
//             itemStyle: {
//                 color: 'rgb(255, 70, 131)'
//             },
//             areaStyle: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                     offset: 0,
//                     color: 'rgb(255, 158, 68)'
//                 }, {
//                     offset: 1,
//                     color: 'rgb(255, 70, 131)'
//                 }])
//             },
//             data: tem
//         }
//     ]
// };

// option && myChart.setOption(option);
// window.addEventListener('resize',function(){
//   myChart.resize();
// })
// }

 
 //function for measure menu
function ajax(DATA_SOURCE)
{
  $.ajax({
    type: 'GET',
    url: DATA_SOURCE,
    dataType: 'JSON',
    success: function(data) {
        $('#contents').html(TemPresent(data));
        //$('#chart1').html(chart_tem_menu(data,l));
        //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
    },
    error: function(error) {
      console.log('Error! ' + error);
    }
}); 
}


function Tier4() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';

 document.getElementById("ya").innerHTML=" ";
 //document.getElementById('deco').style.backgroundColor = 'orange' ; 
 document.getElementById('chart1').style.backgroundColor = 'white' ; 
 document.getElementById("contents").style.height = "168vh"; 
  document.getElementById("deco").style.height = "168vh"; 
  document.getElementById("page").style.height = "168vh";
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype
  document.getElementById("option").style.height = "10vh";
  document.getElementById("option").style.marginTop = "0";
 document.getElementById("option").innerHTML=`
 
 <div class="dropdown">
  <div class="select">
    <span>Temperature</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul id="measure_menu" class="dropdown-menu">
    <li id="Temperature"   onclick="Tier4()">Temperature</li>
    <li id="wind_speed"    onclick="Tier4_ws()">wind speed</li>
    <li id="rain"          onclick="Tier4_r()">Rain</li>
    <li id="wind_direction" onclick="Tier4_wd()">Wind Direction</li>
    <li id="light"          onclick="Tier4_l()">Light</li>
  </ul>
</div>

 <div class="dropdown">
  <div class="select">
    <span>Now</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul id="time_menu" class="dropdown-menu">
    <li id="now"  onclick="Tier4()">Now</li>
    <li id="24h"  onclick="Tier4_tem_24()">24 hours</li>
    <li id="48h"  onclick="Tier4_tem_48()">48 hours</li>
    <li id="72h"  onclick="Tier4_tem_72()">72 hours</li>
    <li id="1w"   onclick="Tier4_tem_1w()">1 week</li>
    <li id="1m"   onclick="Tier4_tem_1m()">1 month</li>
  </ul>
</div>
 
 
 `;
 $('.dropdown').click(function () {
   $(this).attr('tabindex', 1).focus();
   $(this).toggleClass('active');
   $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
   $(this).removeClass('active');
   $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
   $(this).parents('.dropdown').find('span').text($(this).text());
   $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
ajax(DATA_SOURCE13)
} 


function Tier4_tem_24() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 

  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype
  document.getElementById("option").style.height = "10vh";
  document.getElementById("option").style.marginTop = "0";

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE3,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation1(data,24));
          $('#chart1').html(chartLine_tem(data,24));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//line_ws temp chart 48 hours

function Tier4_tem_48() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE4,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation1(data,48));
          $('#chart1').html(chartLine_tem(data,48));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 


//line_ws temp chart 72 hours

function Tier4_tem_72() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE5,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation1(data,72));
          $('#chart1').html(chartLine_tem(data,72));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//line_ws temp chart 168 hours/1 week

function Tier4_tem_1w() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE6,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation1(data,168));
          $('#chart1').html(chartLine_tem(data,168));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
}

//line_ws temp chart 720 hours/1 m

function Tier4_tem_1m() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE7,
      dataType: 'JSON',
      success: function(data) {
        $('#contents').html(dataToHtmlRepresentation1(data,720));
        $('#chart1').html(chartLine_tem(data,720));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 





//#################################### view 4 wind speed
function chartLine_ws(dataObjects,l)
{
  let text= new Array(l);
  let number= new Array(l); 
  for (i = 0; i < l; i++) {
    const dataObject = dataObjects[i];
    //text[i] = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
    text[i] =dataObject.date_time.slice(0,-5).split('T').join(' at ');
    number[i] = dataObject.wind_speed;
}
var chartDom = document.getElementById('chart1',null);
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
      }
    },
    title: {
        left: 'center',
        text: 'Toan Tran Weather Station',
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: text
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 100,
        end: 0
    }, {
        start: 100,
        end: 0
    }],
    series: [
        {
            name:' ',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: number
        }
    ]
};

option && myChart.setOption(option);
window.addEventListener('resize',function(){
  myChart.resize();
})
}  

function WindSpeedPresent(dataObjects) {
  //const l = 50;
  var l=25;
  var counter=0;
  let tem=[];
  let time=[];
  let date=[];
  let all=[];
    
    for(var i=0;i<500;i++)
    {
      const dataObject = dataObjects[i];
      if(Object.keys(dataObject.data)[0]=='wind_speed' && counter<25)
      {
        
        tem.push(Object.values(dataObject.data)[0]);
        time.push(dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18]);
        date.push(dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3]);
        all.push(dataObject.date_time.slice(0,-5).split('T').join(' at '));
        counter=counter+1;
      }
    }

  var table = document.getElementById("ya");
  // Adding a table row for each object:
  document.getElementById("ya").innerHTML=" ";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "No";
      cell2.innerHTML = "Date";
      cell3.innerHTML = "Time";
      cell4.innerHTML = "Measurement";
      cell5.innerHTML = "Value";
  
      for (let i = 0; i < l; i++) {
    
      //const dataObject = dataObjects[i];
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i+1;
      cell3.innerHTML = time[i];
      cell2.innerHTML = date[i];
      cell4.innerHTML = "Wind Speed";
      cell5.innerHTML = tem[i]+" m/s";
  }

  var chartDom = document.getElementById('chart1',null);
  var myChart = echarts.init(chartDom);
  var option;

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
      }
    },
    title: {
        left: 'center',
        text: 'Toan Tran Weather Station',
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: all
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 100,
        end: 0
    }, {
        start: 100,
        end: 0
    }],
    series: [
        {
            name:' ',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: tem
        }
    ]
};

option && myChart.setOption(option);
window.addEventListener('resize',function(){
  myChart.resize();
})
}
 
 //function for measure menu
function ajax_ws(DATA_SOURCE)
{
  $.ajax({
    type: 'GET',
    url: DATA_SOURCE,
    dataType: 'JSON',
    success: function(data) {
        $('#contents').html(WindSpeedPresent(data));
        //$('#chart1').html(chart_tem_menu(data,l));
        //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
    },
    error: function(error) {
      console.log('Error! ' + error);
    }
}); 
}


function Tier4_ws() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';

 document.getElementById("ya").innerHTML=" ";
 //document.getElementById('deco').style.backgroundColor = 'orange' ; 
 document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype
  document.getElementById("option").style.height = "10vh";
  document.getElementById("option").style.marginTop = "0";
 document.getElementById("option").innerHTML=`
 
 <div class="dropdown">
  <div class="select">
    <span>Wind Speed</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul id="measure_menu" class="dropdown-menu">
    <li id="Temperature"   onclick="Tier4()">Temperature</li>
    <li id="wind_speed"    onclick="Tier4_ws()">wind speed</li>
    <li id="rain"          onclick="Tier4_r()">Rain</li>
    <li id="wind_direction" onclick="Tier4_wd()">Wind Direction</li>
    <li id="light"          onclick="Tier4_l()">Light</li>
  </ul>
</div>

 <div class="dropdown">
  <div class="select">
    <span>Now</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul id="time_menu" class="dropdown-menu">
    <li id="now"  onclick="Tier4()">Now</li>
    <li id="24h"  onclick="Tier4_ws_24()">24 hours</li>
    <li id="48h"  onclick="Tier4_ws_48()">48 hours</li>
    <li id="72h"  onclick="Tier4_ws_72()">72 hours</li>
    <li id="1w"   onclick="Tier4_ws_1w()">1 week</li>
    <li id="1m"   onclick="Tier4_ws_1m()">1 month</li>
  </ul>
</div>
 
 
 `;
 $('.dropdown').click(function () {
   $(this).attr('tabindex', 1).focus();
   $(this).toggleClass('active');
   $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
   $(this).removeClass('active');
   $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
   $(this).parents('.dropdown').find('span').text($(this).text());
   $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
ajax_ws(DATA_SOURCE13)
} 


function Tier4_ws_24() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 

  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype
  document.getElementById("option").style.height = "10vh";
  document.getElementById("option").style.marginTop = "0";

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE8,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation2(data,24));
          $('#chart1').html(chartLine_ws(data,24));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//line_ws chart 48 hours

function Tier4_ws_48() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE9,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation2(data,48));
          $('#chart1').html(chartLine_ws(data,48));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 


//line_ws chart 72 hours

function Tier4_ws_72() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE10,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation2(data,72));
          $('#chart1').html(chartLine_ws(data,72));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//line_ws chart 168 hours/1 week

function Tier4_ws_1w() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE11,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation2(data,168));
          $('#chart1').html(chartLine_ws(data,168));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
}

//line_ws chart 720 hours/1 m

function Tier4_ws_1m() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      url: DATA_SOURCE12,
      dataType: 'JSON',
      success: function(data) {
        $('#contents').html(dataToHtmlRepresentation2(data,698));
        $('#chart1').html(chartLine_ws(data,698));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//################################ view4 rain

function dataToHtmlRepresentation_rain(dataObjects,l) {
  //const l = 50;
  var table = document.getElementById("ya");
  // Adding a table row for each object:
  document.getElementById("ya").innerHTML=" ";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "No";
      cell2.innerHTML = "Date";
      cell3.innerHTML = "Time";
      cell4.innerHTML = "Measurement";
      cell5.innerHTML = "Value";
  
      for (let i = 0; i < l; i++) {
    
      const dataObject = dataObjects[i];
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i+1;
      cell3.innerHTML = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
      cell2.innerHTML = dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3];
      cell4.innerHTML = "Rain";
      cell5.innerHTML = dataObject.rain+" mm";
  }
     
}

function chartLine_r(dataObjects,l)
{
  let text= new Array(l);
  let number= new Array(l); 
  for (i = 0; i < l; i++) {
    const dataObject = dataObjects[i];
    //text[i] = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
    text[i] =dataObject.date_time.slice(0,-5).split('T').join(' at ');
    //different between function
    number[i] = dataObject.rain;
}
var chartDom = document.getElementById('chart1',null);
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
      }
    },
    title: {
        left: 'center',
        text: 'Toan Tran Weather Station',
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: text
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 100,
        end: 0
    }, {
        start: 100,
        end: 0
    }],
    series: [
        {
            name:' ',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: number
        }
    ]
};

option && myChart.setOption(option);
window.addEventListener('resize',function(){
  myChart.resize();
})
}  

function RainPresent(dataObjects) {
  //const l = 50;
  var l=25;
  var counter=0;
  let tem=[];
  let time=[];
  let date=[];
  let all=[];
    
    for(var i=0;i<500;i++)
    {
      const dataObject = dataObjects[i];

      //different between measurment type function
      if(Object.keys(dataObject.data)[0]=='rain' && counter<25)
      {
        
        tem.push(Object.values(dataObject.data)[0]);
        time.push(dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18]);
        date.push(dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3]);
        all.push(dataObject.date_time.slice(0,-5).split('T').join(' at '));
        counter=counter+1;
      }
    }

  var table = document.getElementById("ya");
  // Adding a table row for each object:
  document.getElementById("ya").innerHTML=" ";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "No";
      cell2.innerHTML = "Date";
      cell3.innerHTML = "Time";
      cell4.innerHTML = "Measurement";
      cell5.innerHTML = "Value";
  
      for (let i = 0; i < l; i++) {
    
      //const dataObject = dataObjects[i];
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i+1;
      cell3.innerHTML = time[i];
      cell2.innerHTML = date[i];
      //different between measurment type function
      cell4.innerHTML = "Rain";
      cell5.innerHTML = tem[i]+" mm";
  }

  var chartDom = document.getElementById('chart1',null);
  var myChart = echarts.init(chartDom);
  var option;

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
      }
    },
    title: {
        left: 'center',
        text: 'Toan Tran Weather Station',
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: all
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 100,
        end: 0
    }, {
        start: 100,
        end: 0
    }],
    series: [
        {
            name:' ',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: tem
        }
    ]
};

option && myChart.setOption(option);
window.addEventListener('resize',function(){
  myChart.resize();
})
}
 
 //function for measure menu
function ajax_r(DATA_SOURCE)
{
  $.ajax({
    type: 'GET',
    url: DATA_SOURCE,
    dataType: 'JSON',
    success: function(data) {
        $('#contents').html(RainPresent(data));
        //$('#chart1').html(chart_tem_menu(data,l));
        //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
    },
    error: function(error) {
      console.log('Error! ' + error);
    }
}); 
}


function Tier4_r() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';

 document.getElementById("ya").innerHTML=" ";
 //document.getElementById('deco').style.backgroundColor = 'orange' ; 
 document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype
  document.getElementById("option").style.height = "10vh";
  document.getElementById("option").style.marginTop = "0";
 document.getElementById("option").innerHTML=`
 
 <div class="dropdown">
  <div class="select">
    <span>Rain</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul id="measure_menu" class="dropdown-menu">
    <li id="Temperature"   onclick="Tier4()">Temperature</li>
    <li id="wind_speed"    onclick="Tier4_ws()">wind speed</li>
    <li id="rain"          onclick="Tier4_r()">Rain</li>
    <li id="wind_direction" onclick="Tier4_wd()">Wind Direction</li>
    <li id="light"          onclick="Tier4_l()">Light</li>
  </ul>
</div>

 <div class="dropdown">
  <div class="select">
    <span>Now</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul id="time_menu" class="dropdown-menu">
    <li id="now"  onclick="Tier4()">Now</li>
    <li id="24h"  onclick="Tier4_r_24()">24 hours</li>
    <li id="48h"  onclick="Tier4_r_48()">48 hours</li>
    <li id="72h"  onclick="Tier4_r_72()">72 hours</li>
    <li id="1w"   onclick="Tier4_r_1w()">1 week</li>
    <li id="1m"   onclick="Tier4_r_1m()">1 month</li>
  </ul>
</div>
 
 
 `;
 $('.dropdown').click(function () {
   $(this).attr('tabindex', 1).focus();
   $(this).toggleClass('active');
   $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
   $(this).removeClass('active');
   $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
   $(this).parents('.dropdown').find('span').text($(this).text());
   $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
ajax_r(DATA_SOURCE13)
} 

const DATA_SOURCE14="http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/24"

function Tier4_r_24() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 

  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype
  document.getElementById("option").style.height = "10vh";
  document.getElementById("option").style.marginTop = "0";

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE14,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_rain(data,24));
          $('#chart1').html(chartLine_r(data,24));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//line_ws chart 48 hours
const DATA_SOURCE15="http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/48"
function Tier4_r_48() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE15,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_rain(data,48));
          $('#chart1').html(chartLine_r(data,48));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 


//line_ws chart 72 hours
const DATA_SOURCE16="http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/72"
function Tier4_r_72() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE16,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_rain(data,72));
          $('#chart1').html(chartLine_r(data,72));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//line_ws chart 168 hours/1 week
const DATA_SOURCE17="http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/168"
function Tier4_r_1w() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE17,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_rain(data,168));
          $('#chart1').html(chartLine_r(data,168));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
}

//line_ws chart 720 hours/1 m
const DATA_SOURCE18="http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/721"
function Tier4_r_1m() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE18,
      dataType: 'JSON',
      success: function(data) {
        $('#contents').html(dataToHtmlRepresentation_rain(data,720));
        $('#chart1').html(chartLine_r(data,720));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 



//################################ view4 wind direction

function dataToHtmlRepresentation_wd(dataObjects,l) {
  //const l = 50;
  var table = document.getElementById("ya");
  // Adding a table row for each object:
  document.getElementById("ya").innerHTML=" ";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "No";
      cell2.innerHTML = "Date";
      cell3.innerHTML = "Time";
      cell4.innerHTML = "Measurement";
      cell5.innerHTML = "Value";
  
      for (let i = 0; i < l; i++) {
    
      const dataObject = dataObjects[i];
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i+1;
      cell3.innerHTML = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
      cell2.innerHTML = dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3];
      cell4.innerHTML = "Wind Direction";
      cell5.innerHTML = dataObject.wind_direction+ " °";
  }
     
}

function chartLine_wd(dataObjects,l)
{
  let text= new Array(l);
  let number= new Array(l); 
  for (i = 0; i < l; i++) {
    const dataObject = dataObjects[i];
    //text[i] = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
    text[i] =dataObject.date_time.slice(0,-5).split('T').join(' at ');
    //different between function
    number[i] = dataObject.wind_direction;
}
var chartDom = document.getElementById('chart1',null);
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
      }
    },
    title: {
        left: 'center',
        text: 'Toan Tran Weather Station',
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: text
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 100,
        end: 0
    }, {
        start: 100,
        end: 0
    }],
    series: [
        {
            name:' ',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: number
        }
    ]
};

option && myChart.setOption(option);
window.addEventListener('resize',function(){
  myChart.resize();
})
}  

function WindDirectionPresent(dataObjects) {
  //const l = 50;
  var l=25;
  var counter=0;
  let tem=[];
  let time=[];
  let date=[];
  let all=[];
    
    for(var i=0;i<500;i++)
    {
      const dataObject = dataObjects[i];

      //different between measurment type function
      if(Object.keys(dataObject.data)[0]=='wind_direction' && counter<25)
      {
        
        tem.push(Object.values(dataObject.data)[0]);
        time.push(dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18]);
        date.push(dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3]);
        all.push(dataObject.date_time.slice(0,-5).split('T').join(' at '));
        counter=counter+1;
      }
    }

  var table = document.getElementById("ya");
  // Adding a table row for each object:
  document.getElementById("ya").innerHTML=" ";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "No";
      cell2.innerHTML = "Date";
      cell3.innerHTML = "Time";
      cell4.innerHTML = "Measurement";
      cell5.innerHTML = "Value";
  
      for (let i = 0; i < l; i++) {
    
      //const dataObject = dataObjects[i];
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i+1;
      cell3.innerHTML = time[i];
      cell2.innerHTML = date[i];
      //different between measurment type function
      cell4.innerHTML = "Wind Direction";
      cell5.innerHTML = tem[i]+" °";
  }

  var chartDom = document.getElementById('chart1',null);
  var myChart = echarts.init(chartDom);
  var option;

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
      }
    },
    title: {
        left: 'center',
        text: 'Toan Tran Weather Station',
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: all
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 100,
        end: 0
    }, {
        start: 100,
        end: 0
    }],
    series: [
        {
            name:' ',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: tem
        }
    ]
};

option && myChart.setOption(option);
window.addEventListener('resize',function(){
  myChart.resize();
})
}
 
 //function for measure menu
function ajax_wd(DATA_SOURCE)
{
  $.ajax({
    type: 'GET',
    url: DATA_SOURCE,
    dataType: 'JSON',
    success: function(data) {
       //diferent between measurement type function
        $('#contents').html(WindDirectionPresent(data));
        //$('#chart1').html(chart_tem_menu(data,l));
        //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
    },
    error: function(error) {
      console.log('Error! ' + error);
    }
}); 
}


function Tier4_wd() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';

 document.getElementById("ya").innerHTML=" ";
 //document.getElementById('deco').style.backgroundColor = 'orange' ; 
 document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype
  document.getElementById("option").style.height = "10vh";
  document.getElementById("option").style.marginTop = "0";
 document.getElementById("option").innerHTML=`
 
 <div class="dropdown">
  <div class="select">
    <span>Wind Direction</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul id="measure_menu" class="dropdown-menu">
    <li id="Temperature"   onclick="Tier4()">Temperature</li>
    <li id="wind_speed"    onclick="Tier4_ws()">wind speed</li>
    <li id="rain"          onclick="Tier4_r()">Rain</li>
    <li id="wind_direction" onclick="Tier4_wd()">Wind Direction</li>
    <li id="light"          onclick="Tier4_l()">Light</li>
  </ul>
</div>

 <div class="dropdown">
  <div class="select">
    <span>Now</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul id="time_menu" class="dropdown-menu">
    <li id="now"  onclick="Tier4()">Now</li>
    <li id="24h"  onclick="Tier4_wd_24()">24 hours</li>
    <li id="48h"  onclick="Tier4_wd_48()">48 hours</li>
    <li id="72h"  onclick="Tier4_wd_72()">72 hours</li>
    <li id="1w"   onclick="Tier4_wd_1w()">1 week</li>
    <li id="1m"   onclick="Tier4_wd_1m()">1 month</li>
  </ul>
</div>
 
 
 `;
 $('.dropdown').click(function () {
   $(this).attr('tabindex', 1).focus();
   $(this).toggleClass('active');
   $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
   $(this).removeClass('active');
   $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
   $(this).parents('.dropdown').find('span').text($(this).text());
   $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
ajax_wd(DATA_SOURCE13)
} 

const DATA_SOURCE19="http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/24"

function Tier4_wd_24() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 

  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype
  document.getElementById("option").style.height = "10vh";
  document.getElementById("option").style.marginTop = "0";

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE19,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_wd(data,24));
          $('#chart1').html(chartLine_wd(data,24));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//line_wd chart 48 hours
const DATA_SOURCE20="http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/48"
function Tier4_wd_48() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE20,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_wd(data,48));
          $('#chart1').html(chartLine_wd(data,48));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 


//line_wd chart 72 hours
const DATA_SOURCE21="http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/72"
function Tier4_wd_72() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE21,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_wd(data,72));
          $('#chart1').html(chartLine_wd(data,72));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//line_wd chart 168 hours/1 week
const DATA_SOURCE22="http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/167"
function Tier4_wd_1w() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE22,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_wd(data,168));
          $('#chart1').html(chartLine_wd(data,168));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
}

//line_wd chart 720 hours/1 m
const DATA_SOURCE23="http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/721"
function Tier4_wd_1m() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE23,
      dataType: 'JSON',
      success: function(data) {
        $('#contents').html(dataToHtmlRepresentation_wd(data,720));
        $('#chart1').html(chartLine_wd(data,720));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 



//################################ view4 Light level

function dataToHtmlRepresentation_l(dataObjects,l) {
  //const l = 50;
  var table = document.getElementById("ya");
  // Adding a table row for each object:
  document.getElementById("ya").innerHTML=" ";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "No";
      cell2.innerHTML = "Date";
      cell3.innerHTML = "Time";
      cell4.innerHTML = "Measurement";
      cell5.innerHTML = "Value";
  
      for (let i = 0; i < l; i++) {
    
      const dataObject = dataObjects[i];
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i+1;
      cell3.innerHTML = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
      cell2.innerHTML = dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3];
      cell4.innerHTML = "Light Level";
      cell5.innerHTML = dataObject.light+ " Cd";
  }
     
}

function chartLine_l(dataObjects,l)
{
  let text= new Array(l);
  let number= new Array(l); 
  for (i = 0; i < l; i++) {
    const dataObject = dataObjects[i];
    //text[i] = dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18];
    text[i] =dataObject.date_time.slice(0,-5).split('T').join(' at ');
    //different between function
    number[i] = dataObject.light;
}
var chartDom = document.getElementById('chart1',null);
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
      }
    },
    title: {
        left: 'center',
        text: 'Toan Tran Weather Station',
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: text
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 100,
        end: 0
    }, {
        start: 100,
        end: 0
    }],
    series: [
        {
            name:' ',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: number
        }
    ]
};

option && myChart.setOption(option);
window.addEventListener('resize',function(){
  myChart.resize();
})
}  

function LightLevelPresent(dataObjects) {
  //const l = 50;
  var l=25;
  var counter=0;
  let tem=[];
  let time=[];
  let date=[];
  let all=[];
    
    for(var i=0;i<500;i++)
    {
      const dataObject = dataObjects[i];

      //different between measurment type function
      if(Object.keys(dataObject.data)[0]=='light' && counter<25)
      {
        
        tem.push(Object.values(dataObject.data)[0]);
        time.push(dataObject.date_time[11]+dataObject.date_time[12]+dataObject.date_time[13]+dataObject.date_time[14]+dataObject.date_time[15]+dataObject.date_time[16]+dataObject.date_time[17]+dataObject.date_time[18]);
        date.push(dataObject.date_time[8]+dataObject.date_time[9]+dataObject.date_time[7]+dataObject.date_time[5]+dataObject.date_time[6]+dataObject.date_time[4]+dataObject.date_time[0]+dataObject.date_time[1]+dataObject.date_time[2]+dataObject.date_time[3]);
        all.push(dataObject.date_time.slice(0,-5).split('T').join(' at '));
        counter=counter+1;
      }
    }

  var table = document.getElementById("ya");
  // Adding a table row for each object:
  document.getElementById("ya").innerHTML=" ";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "No";
      cell2.innerHTML = "Date";
      cell3.innerHTML = "Time";
      cell4.innerHTML = "Measurement";
      cell5.innerHTML = "Value";
  
      for (let i = 0; i < l; i++) {
    
      //const dataObject = dataObjects[i];
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = i+1;
      cell3.innerHTML = time[i];
      cell2.innerHTML = date[i];
      //different between measurment type function
      cell4.innerHTML = "Light Level";
      cell5.innerHTML = tem[i]+" cd";
  }

  var chartDom = document.getElementById('chart1',null);
  var myChart = echarts.init(chartDom);
  var option;

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
      }
    },
    title: {
        left: 'center',
        text: 'Toan Tran Weather Station',
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: all
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 100,
        end: 0
    }, {
        start: 100,
        end: 0
    }],
    series: [
        {
            name:' ',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: tem
        }
    ]
};

option && myChart.setOption(option);
window.addEventListener('resize',function(){
  myChart.resize();
})
}
 
 //function for measure menu
function ajax_l(DATA_SOURCE)
{
  $.ajax({
    type: 'GET',
    url: DATA_SOURCE,
    dataType: 'JSON',
    success: function(data) {
       //diferent between measurement type function
        $('#contents').html(LightLevelPresent(data));
        //$('#chart1').html(chart_tem_menu(data,l));
        //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
    },
    error: function(error) {
      console.log('Error! ' + error);
    }
}); 
}


function Tier4_l() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';

 document.getElementById("ya").innerHTML=" ";
 //document.getElementById('deco').style.backgroundColor = 'orange' ; 
 document.getElementById('chart1').style.backgroundColor = 'white' ; 
  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype
  document.getElementById("option").style.height = "10vh";
  document.getElementById("option").style.marginTop = "0";
 document.getElementById("option").innerHTML=`
 
 <div class="dropdown">
  <div class="select">
    <span>Light Level</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul id="measure_menu" class="dropdown-menu">
    <li id="Temperature"   onclick="Tier4()">Temperature</li>
    <li id="wind_speed"    onclick="Tier4_ws()">wind speed</li>
    <li id="rain"          onclick="Tier4_r()">Rain</li>
    <li id="wind_direction" onclick="Tier4_wd()">Wind Direction</li>
    <li id="light"          onclick="Tier4_l()">Light</li>
  </ul>
</div>

 <div class="dropdown">
  <div class="select">
    <span>Now</span>
    <i class="fa fa-chevron-left"></i>
  </div>
  <input type="hidden" name="gender">
  <ul id="time_menu" class="dropdown-menu">
    <li id="now"  onclick="Tier4()">Now</li>
    <li id="24h"  onclick="Tier4_l_24()">24 hours</li>
    <li id="48h"  onclick="Tier4_l_48()">48 hours</li>
    <li id="72h"  onclick="Tier4_l_72()">72 hours</li>
    <li id="1w"   onclick="Tier4_l_1w()">1 week</li>
    <li id="1m"   onclick="Tier4_l_1m()">1 month</li>
  </ul>
</div>
 
 
 `;
 $('.dropdown').click(function () {
   $(this).attr('tabindex', 1).focus();
   $(this).toggleClass('active');
   $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
   $(this).removeClass('active');
   $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
   $(this).parents('.dropdown').find('span').text($(this).text());
   $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
//different between measurement type
ajax_l(DATA_SOURCE13)
} 

const DATA_SOURCE24="http://webapi19sa-1.course.tamk.cloud/v1/weather/light/24"

function Tier4_l_24() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 

  document.getElementById("chart").style.height = "60vh";
  document.getElementById("chart1").style.height = "50vh";
  //
  document.getElementById("ya").style.marginTop="0";
  //option stype
  document.getElementById("option").style.height = "10vh";
  document.getElementById("option").style.marginTop = "0";

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE24,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_l(data,24));
          $('#chart1').html(chartLine_l(data,24));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//line_wd chart 48 hours
const DATA_SOURCE25="http://webapi19sa-1.course.tamk.cloud/v1/weather/light/48"
function Tier4_l_48() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE25,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_l(data,48));
          $('#chart1').html(chartLine_l(data,48));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 


//line_wd chart 72 hours
const DATA_SOURCE26="http://webapi19sa-1.course.tamk.cloud/v1/weather/light/72"
function Tier4_l_72() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE26,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_l(data,72));
          $('#chart1').html(chartLine_l(data,72));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 

//line_wd chart 168 hours/1 week
const DATA_SOURCE27="http://webapi19sa-1.course.tamk.cloud/v1/weather/light/168"
function Tier4_l_1w() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE27,
      dataType: 'JSON',
      success: function(data) {
          $('#contents').html(dataToHtmlRepresentation_l(data,168));
          $('#chart1').html(chartLine_l(data,168));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
}

//line_wd chart 720 hours/1 m
const DATA_SOURCE28="http://webapi19sa-1.course.tamk.cloud/v1/weather/light/721"
function Tier4_l_1m() {
  // $ is a shorthand for the jQuery object
 // document.body.style.backgroundColor='green';
  //document.getElementById("chart1").innerHTML=" ";
  document.getElementById("ya").innerHTML=" ";
  //document.getElementById('deco').style.backgroundColor = 'green' ; 
  document.getElementById('chart1').style.backgroundColor = 'white' ; 
  //
  document.getElementById("ya").style.marginTop="0";
  

  $.ajax({
      type: 'GET',
      //different between measurement type
      url: DATA_SOURCE28,
      dataType: 'JSON',
      success: function(data) {
        $('#contents').html(dataToHtmlRepresentation_l(data,720));
        $('#chart1').html(chartLine_l(data,720));
          //With vanilla JS: document.getElementById("data1").innerHTML = dataToHtmlRepresentation(data);
      },
      error: function(error) {
        console.log('Error! ' + error);
      }
  }); 
} 


//send email

function validateName() {
        var name = document.getElementById('name').value;
        if(name.length == 0) {
          alert("Name can't be blank") ;
          return false;

        }
        if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
          alert("Please enter your correct name") ;//Validation Message
          return false;
        }
        return true;
      }


     function validateEmail () {

      var email = document.getElementById('email').value;
      if(email.length == 0) {
        alert("Email can't be blank") ;//Validation Message
        return false;

      }

      if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Please enter a correct email address") ;//Validation Message
        return false;

      }

      return true;

    }


    function validateForm() {
      if (!validateName() || !validateEmail()) {

        alert("Form not submitted");//Validation Message
        return false;
      }
      else {
        submitted=true;
        return true;
      }
    }
    