(function(){
    'use strict';
    document.getElementById('convert').addEventListener('submit', function(event){

        // avoit it to go to the php file.
            event.preventDefault();
    
    
            let distance = parseFloat(document.getElementById('distance').value);
        
        let answer = document.getElementById('answer');
    
        if(distance) 
        {        
        let conversion = (distance * 1.609344).toFixed(2);
            answer.innerHTML =   `<h2>${distance} miles is iguals to ${conversion} kilometers</h2>`
        }else{
            answer.innerHTML = '<h2>Please type a number</h2>';
        }
    });
    

    
})();
