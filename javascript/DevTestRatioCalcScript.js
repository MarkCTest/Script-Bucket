/* #####################################################
This script is called by the HTML file "devTestRatioCalcTool_verNN.htm" 
and should be read in conjunction with the paper "Assessing the Project Developer:Tester Ratio". 
#################################################### */

var b1,b3,c1,c3 = 0;

// Section A - Development TEAM size required and SCOPE of development possible
// Firstly we need to work out what the total amount of development time needed will be:
function dtr_CalcDevEffort()
 { 
  var a = parseFloat(document.DevTestRatioForm.dtr_FuncScope.value);
  var b = parseFloat(document.DevTestRatioForm.dtr_FuncComp.value);
  var c = a + b;
  var d = parseFloat(document.DevTestRatioForm.dtr_DevComp.value);
  var e = Math.round(c/d);
  
  document.DevTestRatioForm.dtr_DevTime.value = e + " min";
  document.DevTestRatioForm.dtr_DevTime2.value = e;
 };

// Then get the figure for the duration given a certain number of developers:
function dtr_CalcDevDuration()
  {
    var a1 = parseFloat(document.DevTestRatioForm.dtr_DevTime2.value);
    b1 = parseFloat(document.DevTestRatioForm.dtr_DevNumbers.value);
    c1 = Math.round(a1/b1);
    var d1 = Math.round((c1/60)*100)/100;
    
  document.DevTestRatioForm.dtr_DevDur.value = c1 + " min || " + d1 + " hrs";
  };

// Section B - B) Test TEAM size required and SCOPE of testing possible
function dtr_CalcTestEffort()
  {
   var a2 = parseFloat(document.DevTestRatioForm.dtr_TestScope.value);
   var b2 = parseFloat(document.DevTestRatioForm.dtr_TestCompl.value);
   var c2 = a2 + b2;
   var d2 = parseFloat(document.DevTestRatioForm.dtr_TestComp.value);
   var e2 = Math.round(c2/d2);
   
   document.DevTestRatioForm.dtr_TestTime.value = e2 + "min ";
   document.DevTestRatioForm.dtr_TestTime2.value = e2;
  };
  
function dtr_CalcTestDuration()
  {
   var a3 = parseFloat(document.DevTestRatioForm.dtr_TestTime2.value);
   b3 = parseFloat(document.DevTestRatioForm.dtr_TesterNumbers.value);
   c3 = Math.round(a3/b3);
   var d3 = Math.round((c3/60)*100)/100;
   
   document.DevTestRatioForm.dtr_TestDur.value = c3 + " min || " + d3 + " hrs";
  };
  
function dtr_SummaryCalcs()
 {
  var sumDur = c1+c3;
  document.DevTestRatioForm.dtr_FinalRatio.value = b1 + " Developers : " + b3 + " Testers";
  document.DevTestRatioForm.dtr_SumDur.value = Math.round((sumDur/60)*100)/100 + " hrs";
 }