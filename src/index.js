import reactDOM from 'react-dom';
import React from 'react';
import Content from './content';

var url = "https://api.adviceslip.com/advice";
var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.send();



reactDOM.render(<Content></Content>, document.getElementById('root'));

document.querySelector('.btn').onclick = function () {
    document.querySelector('.container').innerHTML = `
    <div class='headerMain'>
            <a href='./' class='MainWise'>Wise</a><br>
            <a href='./' class='MainGoat'>Goat</a>
    </div>
    <div class='tudoMain'>
    <div class='mainContent'>
    <div class='alinha'>
    <span class='TextMain'>  </span><br/>
    <div class='finaly'>~Goat</div></div>
    <div class='imgB'><img src="http://placegoat.com/250/250" /> </div>
    </div> 
    </div>
    `;


    document.querySelector('.TextMain').innerHTML = xhttp.responseText.slice(31, -2);
}




