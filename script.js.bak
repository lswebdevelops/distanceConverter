let convertType = 'miles';
let heading = document.querySelector('h1');
let intro = document.querySelector('p');
let answerDiv = document.getElementById("answer");
let form = document.getElementById('convert');
let keyPressed = document.getElementById('keyPressed');

// console.log(convertType);
document.addEventListener('keydown', function(event)
{
    let key = event.code;
   
   if ( key === 'KeyK'){
    convertType = 'kilometers';
    heading.innerHTML = "Kilometers to Miles Converter";
    intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
    keyPressed.innerHTML = `<p> </p>`;
   

   }
   else  if( key === 'KeyM'){
        convertType = 'miles';
        heading.innerHTML = "Miles to Kilometers Converter";
        intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
        keyPressed.innerHTML = `<p> </p>`;
       
    }
});


form.addEventListener('submit', function(event){

event.preventDefault();

// // handle submission of form & distance conversion
let distance= parseFloat(document.getElementById('distance').value);

if (distance){
    //convert M to K 1.609344
    //convert K to M 0.621371192
    if(convertType =='miles'){

        let conversion = (distance * 1.609344).toFixed(3);
        if(distance === 1){
            answer.innerHTML = `<h2>${distance} mile is iguals to ${conversion} kilometers.</h2>`;
        }
        else{
        answer.innerHTML = `<h2>${distance} miles is iguals to ${conversion} kilometers.</h2>`;
        }
    }
    if(convertType =='kilometers'){

    

        let conversion = (distance * 0.621371192).toFixed(3);

        if(distance ===1){
            answer.innerHTML = `<h2>${distance} kilometer is iguals to ${conversion} miles.</h2>`;
        }
        
        // 
        else{
        answer.innerHTML = `<h2>${distance} kilometers is iguals to ${conversion} miles.</h2>`;
        }
    }

}
else{
    answer.innerHTML = "<h2>Please provide a number!</h2>";
   
}



});
