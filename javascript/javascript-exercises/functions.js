// const push = function () {
//     console.log("pushing it!");
//   };
  
//   const pull = function () {
//     console.log("pulling it!");
//   };
  
//   const pushPull = function (action) {
//     action();
//   };
  
//   pushPull(push); // should print "pushing it!"
//   pushPull(pull); // should print "pulling it!"
// //------------------------------------------------------------------
// const returnTime = function (time) {
//     alert('The current time is: ' + time);
//   };
  
//   const getTime = function (callback) {
//     const currentTime = new Date();
//     callback(currentTime);
//   };
  
//   getTime(returnTime);
//------------------------------------------------------
const logData = function(data) {
    console.log(data);
  };
  
  const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
  displayData(alert, logData, "I like to party");
//--------------------------------------------------------
const sum3=(num1,num2,num3) => num1+num2+num3
//-------------------------------------------------------   
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//----------------------------------------------------------------------------------
const commentOnWeather = temp => `It's ${determineWeather(temp)}`;
//-----------------------------------------------------------------------------








