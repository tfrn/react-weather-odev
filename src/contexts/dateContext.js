import { createContext, useContext, useState, useEffect } from "react";
import React from 'react';
let DateContext = createContext();
var tarih=new Date();
var yil=tarih.getFullYear();
var ay=tarih.getMonth();
var gun=tarih.getDate();
var haftagunu=tarih.getDay();
switch(haftagunu) {
    case 1:
      var hgun="pazartesi";
    break;
    case 2:
      var hgun="salı";
    break;
    case 3:
      var hgun="çarşamba";
    break;  
    case 4:
      var hgun="perşembe";
    break;  
    case 5:
      var hgun="cuma";
    break;  
    case 6:
      var hgun="cumartesi";
    break;  
    case 0:
      var hgun="pazar";
    break;  
  };
  switch(ay) {
    case 0:
      var yay="ocak";
    break;
    case 1:
      var yay="şubat";
    break;
    case 2:
      var yay="mart";
    break;  
    case 3:
      var yay="nisan";
    break;  
    case 4:
      var yay="mayıs";
    break;  
    case 5:
      var yay="haziran";
    break;  
    case 6:
      var yay="temmuz";
    break;
    case 7:
      var yay="ağustos";
    break;  
    case 8:
      var yay="eylül";
    break;  
    case 9:
      var yay="ekim";
    break;  
    case 10:
      var yay="kasım";
    break;  
    case 11:
      var yay="aralık";
    break;    
  }
  let dizigun =[
    {"ikincigun":"salı","ucuncugun":"çarşamba","dorduncugun":"perşembe","besincigun":"cuma","altincigun":"cumartesi","yedincigun":"pazar"},
    {"ikincigun":"çarşamba","ucuncugun":"perşembe","dorduncugun":"cuma","besincigun":"cumartesi","altincigun":"pazar","yedincigun":"pazartesi"},
    {"ikincigun":"perşembe","ucuncugun":"cuma","dorduncugun":"cumartesi","besincigun":"pazar","altincigun":"pazartesi","yedincigun":"salı"},
    {"ikincigun":"cuma","ucuncugun":"cumartesi","dorduncugun":"pazar","besincigun":"pazartesi","altincigun":"salı","yedincigun":"çarşamba"},
    {"ikincigun":"cumartesi","ucuncugun":"pazar","dorduncugun":"pazartesi","besincigun":"salı","altincigun":"çarşamba","yedincigun":"perşembe"},
    {"ikincigun":"pazar","ucuncugun":"pazartesi","dorduncugun":"salı","besincigun":"çarşamba","altincigun":"perşembe","yedincigun":"cuma"},
    {"ikincigun":"pazartesi","ucuncugun":"salı","dorduncugun":"çarşamba","besincigun":"perşembe","altincigun":"cuma","yedincigun":"cumartesi"}
  ];
export let DateProvider =({children})=>{
    let [Date, setDate] = useState([yil, ay, gun, hgun, yay, dizigun]);
    let [yarin, setYarin]=useState({"ikincigun":"","ucuncugun":"","dorduncugun":"","besincigun":"","altincigun":"","yedincigun":""});
      useEffect(()=>{
        switch(hgun){
          case "pazartesi":
            setYarin(dizigun[0])
          break;
          case "salı":
            setYarin(dizigun[1])
          break;
          case "çarşamba":
            setYarin(dizigun[2])
          break;
          case "perşembe":
            setYarin(dizigun[3])
          break;
          case "cuma":
            setYarin(dizigun[4])
          break;
          case "cumartesi":
            setYarin(dizigun[5])
          break;
          case "pazar":
            setYarin(dizigun[6])
          break;
        }
    }, [hgun])
    let values = { Date, setDate, yarin};
    return <DateContext.Provider value={values}>{children}</DateContext.Provider>
}
export let useDate =()=> useContext(DateContext);
