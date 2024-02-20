function triangle(){
  // Get triangle base value:
  const triangleBaseInput = document.getElementById('base-input');
  const triangleBase = triangleBaseInput.value ;
  const base = parseFloat(triangleBase);
 
  //Get triangle height value:
  const triangleHeightInput = document.getElementById('height-input');
  const triangleHeight = triangleHeightInput.value;
  const height = parseFloat(triangleHeight);


  //Calculation triangle area:
    const area = 0.5 * base * height;

  //Display the value:

  const result = document.getElementById('tirangle-area');
 
 result.innerText = area;

}

//Rectangle function:

function rectangle(){
    //Get rectangle width:
    const rectangleWidthInput = document.getElementById("rectangle-width");
    const rectangleValue = rectangleWidthInput.value;
    const width = parseFloat(rectangleValue);

    //Get rectangle length:
    const rectangleLengthInput = document.getElementById("rectangle-length");
    const rectangleLength = rectangleLengthInput.value;
    const length = parseFloat(rectangleLength);
    


    //Calculation rectangle area:
    const rectangleArea = width * length;

    //Display the result:
    const result = document.getElementById('rectangle-area');
    result.innerText = rectangleArea;
    
    
}


//Parallelogram Function:

function parallelogram(){
    //Get input base value:
    const baseInput = document.getElementById("base");
    const baseValue = baseInput.value;
    const base = baseValue;
  
    //Get input height value:
    const heightInput = document.getElementById('height');
    const heightValue = heightInput.value;
    const height = heightValue;


    //Calculate parallelogram:
    const areaOfParallelogram = base * height;

    //Display the result:

    const parallelogram = document.getElementById("parallelogram");
    parallelogram.innerText = areaOfParallelogram;


}


//Function Rhombus:
function rhombus(){
    //Get input value:
    const dimension1Input = document.getElementById("dimension-1");
    const dimensionValue1 = dimension1Input.value;
    const dimension1 = parseFloat(dimensionValue1);
   
    //Get input value 
    const dimension2Input = document.getElementById("dimension-2");
    const dimensionValue2 = dimension2Input.value;
    const dimension2 = parseFloat(dimensionValue2);

   //Calculation Rhombus:

   const result = 0.5 * dimension1 * dimension2;
   

   //Display the result:

   const dimensionDisplay = document.getElementById("dimension");
   dimensionDisplay.innerText = result;



}


//Pantagon function

function pantagon(){
    //Get input value for p
    const p = document.getElementById("p");
    const valueP = p.value;
    const convertToNumberP = parseFloat(valueP);

    //Get input value for b
    const b = document.getElementById("b");
    const valueB = b.value;
    const convertToNumberB = parseFloat(valueB);

    //Calculation

    const result = 0.5 * convertToNumberP * convertToNumberB;
    
    //Display the result

    const display = document.getElementById("pantagon");
    display.innerText = result;
}

//Function for ellipse

function ellipse(){
   //Get the value of A:
   const a = document.getElementById("a");
   const valueA = a.value;
   const convertToNumberA = parseFloat(valueA);
  

   const b = document.getElementById("second");
   const valueB = b.value;
   const convertToNumberB = parseFloat(valueB);

   

   

   //Calculation
    const result = 3.1416 * convertToNumberA * convertToNumberB;


    //Display the result
    const ellipse = document.getElementById("ellipse");
    ellipse.innerText = result;

}