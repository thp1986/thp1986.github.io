
// below is needed to initializating the picture

// Set the dimensions of the canvas / graph
// right determins the space for writting things
var margin = {top: 40, right: 100, bottom: 100, left: 110},  
    width = 1300 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// ---------------------below is data definition for the temperature----------------------
temp1={};
temp1.key=["tp101", "tp102", "tp103", "tp104", "tp105", "tp106"]
temp1.ylim=[0,50];
temp1.xlabel="TIME";
temp1.ylabel="TEMPERATURE (CELSIUS)";
temp1.color = d3.scaleOrdinal(d3.schemeCategory10);

var data_siexp_hhu;
public_key1='AkaxkpVrezuv2Epe46r3T062dEk';
grf_siexp_hhu={temp1}

// ----------------------below is to obtain the data from the sensors------------------------------

function data_treatment_siexp_hhu(d) {

   };
   
//get_data_and_plot(data_sensor,public_key,grf_2,{treatment_func:data_treatment})




