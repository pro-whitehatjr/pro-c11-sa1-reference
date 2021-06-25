var marks = [40,35,45,38,40];

function score_average()
{
  var sum = 0;
  for(var i=0; i<marks.length; i=i+1)
  {
    
  var sum = sum + marks[i];
  
  }
  var avg = sum/marks.length;
  console.log(avg);

}

function setup() {
  createCanvas(400,400);
  score_average();

}

function draw() 
{
 
background(51);

}

