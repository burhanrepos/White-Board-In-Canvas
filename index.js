const canvas=document.getElementById("canvas");
        const ctx=canvas.getContext("2d");
        var color;
         function checkColor(clicked)
        {
            color=clicked;
        }
        function clearBoard(){
            // ctx.fillStyle = "white";
            ctx.clearRect(0, 0, 1355, 550);
            ctx.stroke();
        }
        window.addEventListener("load",()=>{
            
        // canvas.width=window.innerWidth;
        // canvas.height=window.innerHeight;
        let painting =false;
        
        //let button=document.getElementById('button');
        //Function for position
        function startPosition(e){
            painting=true;
            draw(e);
            // alert("Start");
        }
       
        function endPosition(){
            painting=false;
            ctx.beginPath();
            // alert("EnD");
        }
        //EventListner
      

        
        function draw(e){
            if(!painting)return;
            ctx.lineWidth=5;
            ctx.lineCap="round";
            ctx.strokeStyle=color;

            ctx.lineTo(e.clientX,e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX,e.clientY);
        }
        canvas.addEventListener("mousedown",startPosition);
        canvas.addEventListener("mouseup",endPosition);
        canvas.addEventListener("mousemove",draw);
        });