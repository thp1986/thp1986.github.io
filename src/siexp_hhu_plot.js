//
// below is needed to initializating the picture

// Set the dimensions of the canvas / graph
// right determins the space for writting things
var margin = {top: 40, right: 100, bottom: 100, left: 110},  
    width = 1300 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// ---------------------below is data definition for the temperature----------------------
temp1={};
temp1.key=["tp101", "tp102", "tp103", "tp104", "tp105", "tp106"]
temp1.ylim=[5,26];
temp1.xlabel="TIME";
temp1.ylabel="TEMPERATURE (CELSIUS)";
temp1.color = d3.scaleOrdinal(d3.schemeCategory10);
//
temp2={};
temp2.key=["tp201", "tp202", "tp203", "tp204", "tp205", "tp206", "tp207", "tp208", "tp209"]
temp2.ylim=[0,40];
temp2.xlabel="TIME";
temp2.ylabel="TEMPERATURE (CELSIUS)";
temp2.color = d3.scaleOrdinal(d3.schemeCategory10);
//
temp3={};
temp3.key=["tp301", "tp302", "tp303", "tp304", "tp305", "tp306", "tp307", "tp308", "tp309"]
temp3.ylim=[0,40];
temp3.xlabel="TIME";
temp3.ylabel="TEMPERATURE (CELSIUS)";
temp3.color = d3.scaleOrdinal(d3.schemeCategory10);
//
temp4={};
temp4.key=["tp401", "tp402", "tp403", "tp404", "tp405"]
temp4.ylim=[0,40];
temp4.xlabel="TIME";
temp4.ylabel="TEMPERATURE (CELSIUS)";
temp4.color = d3.scaleOrdinal(d3.schemeCategory10);
//
temp5={};
temp5.key=["tp501", "tp502", "tp503", "tp504", "tp505"]
temp5.ylim=[0,40];
temp5.xlabel="TIME";
temp5.ylabel="TEMPERATURE (CELSIUS)";
temp5.color = d3.scaleOrdinal(d3.schemeCategory10);
//
//
temp6={};
temp6.key=["tp601", "tp602", "tp603", "tp604"]
temp6.ylim=[0,40];
temp6.xlabel="TIME";
temp6.ylabel="TEMPERATURE (CELSIUS)";
temp6.color = d3.scaleOrdinal(d3.schemeCategory10);
//
temp7={};
temp7.key=["tp701", "tp702", "tp703"]
temp7.ylim=[0,40];
temp7.xlabel="TIME";
temp7.ylabel="TEMPERATURE (CELSIUS)";
temp7.color = d3.scaleOrdinal(d3.schemeCategory10);
//
temp8={};
temp8.key=["tp801", "tp802", "tp803"]
temp8.ylim=[0,40];
temp8.xlabel="TIME";
temp8.ylabel="TEMPERATURE (CELSIUS)";
temp8.color = d3.scaleOrdinal(d3.schemeCategory10);
//
temp9={};
temp9.key=["tp901", "tp902"]
temp9.ylim=[0,40];
temp9.xlabel="TIME";
temp9.ylabel="TEMPERATURE (CELSIUS)";
temp9.color = d3.scaleOrdinal(d3.schemeCategory10);
//
var data_siexp_hhu;
public_key1='AkaxkpVrezuv2Epe46r3T062dEk';
grf_siexp_hhu={temp1,temp2,temp3,temp4,temp5,temp6,temp7,temp8,temp9}

// ----------------------below is to obtain the data from the sensors------------------------------

function data_treatment_siexp_hhu(d) {

   };
   
//get_data_and_plot(data_siexp_hhu,public_key1,grf_siexp_hhu,{})




