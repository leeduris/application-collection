var lineNumber = 55;
window.onload = function() 
{ 
	// 배경화면 그리기
	strokeBoardBallTeris(); 

	// TODO 1. 캔버스클릭이벤트를등록한다. 
	fillStoneJewel();
	
	
};

function strokeBoardBallTeris() 
{   
	// 게임변수 지정
	var myGamePiece;
	var myObstacles = [];
	var myScore;
	
	// 게임시작함수
	function startGame() 
	{
		myGamePiece = new component(30, 30, "red", 10, 120);
		myGamePiece.gravity = 0.05;
		myScore = new component("30px", "Consolas", "black", 280, 40, "text");
		myGameArea.start();
	}
	
	
}
 
	// TODO 1. 캔버스요소를꺼낸다.               
	var canvasballtetris = document.getElementById("canvasBallTetrisGame"); 
	// TODO 3. 그리기작업을위한드로잉컨텍스트객체를생성한다. 
	var context = canvasballtetris.getContext("2d"); 
	// TODO 4. 바둑판의칠하기색깔을지정한다. 
	context.fillStyle = "#d9c049"; 
	// TODO 5. 바둑판의배경을칠한다.(바둑판의크기는가로 580px, 세로 580px) 
	context.fillRect(0, 0, 480, 580);
	// 작은네모로이루어진바둑판을그린다.(바둑판의여백은상하좌우 20px, 바둑판을이루는작은사각형크기는가로 30px, 세로 30px) 
	context.strokeStyle = "#333333"; 
	for(var x=20; x<=440; x+=lineNumber)
		context.strokeRect(x, 70, lineNumber, lineNumber*8); 
      
}




function fillStoneJewel() 
{ 
	// 공 색깔 		
	var ballColor = ["blue", "red", "yellow", "white","black"];
	// TODO 2. 캔버스요소를꺼낸다.               
	var canvasballtetris = document.getElementById("canvasBallTetrisGame"); 
	// TODO 3. 그리기작업을위한드로잉컨텍스트객체를생성한다. 
	var context = canvasballtetris.getContext("2d"); 
	// TODO 6. 패스그리기시작 
	context.beginPath(); 
	// 바둑돌이위치할좌표(원의중심좌표) 
	var x = 20 + parseInt( Math.random()*8 ) * lineNumber; 
	var y = 70; 
	// TODO 10. x, y 좌표에바둑돌에해당하는원을그린다.(바둑돌의크기는반지름 12px) 
	context.arc(x+lineNumber/2, y+lineNumber/2, lineNumber/2, 0, 2*3.14);
	// TODO 8. 패스닫기 
	context.closePath(); 
	// 검은돌과하얀돌을번갈아지정한다. 
	context.fillStyle = ballColor[ parseInt( Math.random()*5 ) ]; 

	// 낙하 운동
	for(var i = 0; i < lineNumber*7; i += 1)
	{
		// TODO 10. x, y 좌표에바둑돌에해당하는원을그린다.(바둑돌의크기는반지름 12px)
		context.clear();
		context.arc(x+lineNumber/2, y+lineNumber/2+ i, lineNumber/2, 0, 2*3.14);
		context.stroke();
		context.fillStyle;
	}
	
	// TODO 8. 패스닫기 		
    context.closePath(); 
	
   
}