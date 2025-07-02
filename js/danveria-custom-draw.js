function drawTest(){
    //load canvas from dom
    var canvas = document.getElementById('tutorial');

    //get context
    if (canvas.getContext){
        
        //set context to 2d 
        var ctx = canvas.getContext('2d');
    }
}

function drawTest2(){
    //load canvas from dom
    var canvas = document.getElementById('tutorial');

    //get context
    if (canvas.getContext){
        
        //set context to 2d 
        var ctx = canvas.getContext('2d');

        //draw first square
        ctx.fillStyle = "rgba(200, 0, 0, 0.5)";
        ctx.fillRect (10, 10, 50, 50);

        //draw the second square
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 50, 50);
    }

}