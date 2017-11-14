
// below is needed to initializating the picture

// Set the dimensions of the canvas / graph
// right determins the space for writting things
var margin = {top: 40, right: 100, bottom: 100, left: 110},  
    width = 1300 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

//evap1,evap2,mo23,mo25,mo27,mo29,mo31,mo33,mo35,mo37,mo39,mo41,t26_begin,t26_end,t26_peak,t45_begin,t45_end,t45_peak,t57_begin,t57_end,t57_peak,t7b_begin,t7b_end,t7b_peak,te2_begin,te2_end,te2_peak,tfb_begin,tfb_end,tfb_peak,timestamp
var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
scale={};
scale.key=["mo39","mo41"]
scale.ylim=[100,600];
scale.xlabel="TIME";
scale.ylabel="SCALE READING";
scale.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data definition for the temperature----------------------
temp={};
temp.key=["t4e", "t10", "t82", "t89"]
temp.ylim=[0,50];
temp.xlabel="TIME";
temp.ylabel="TEMPERATURE (CELSIUS)";
temp.color = d3.scaleOrdinal(d3.schemeCategory10);

var data_siexp_hhu;
public_key='NWdJWOa0pJs1P63Ml01xtwj63aW';
grf_siexp_hhu={scale,temp}

// ----------------------below is to obtain the data from the sensors------------------------------

function data_treatment_siexp_hhu(d) {

   };
   
//get_data_and_plot(data_sensor,public_key,grf_2,{treatment_func:data_treatment})




