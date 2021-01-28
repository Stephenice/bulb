'use strict';

const onOffSwitch = document.querySelector('.onoffswitch-inner');

const bulb= document.querySelector('#myImage');



onOffSwitch.addEventListener('click', function(){
    if(bulb.src.match('pic_bulbon')){
        bulb.src='pic_bulboff.gif';
       // console.log(offSwitch.content);
    }else{
        bulb.src='pic_bulbon.gif';
       // console.log(onSwitch.content);
    }
})
