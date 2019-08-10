var turn =document.querySelector("#turn");

function getWinner()
{
	// var box1= document.querySelector("#box1")
	var box1=document.querySelector("#box1");
	var box2=document.querySelector("#box2");
	var box3=document.querySelector("#box3");
	var box4=document.querySelector("#box4");
	var box5=document.querySelector("#box5");
	var box6=document.querySelector("#box6");
	var box7=document.querySelector("#box7");
	var box8=document.querySelector("#box8");
	var box9=document.querySelector("#box9");

	if(box1.innerHTML !=="" && box1.innerHTML===box2.innerHTML && box1.innerHTML===box3.innerHTML)
		selectWinnerBox(box1,box2,box3)
	else if(box4.innerHTML !=="" && box4.innerHTML===box5.innerHTML && box4.innerHTML===box6.innerHTML)
		selectWinnerBox(box4,box5,box6)
	else if(box7.innerHTML !=="" && box7.innerHTML===box8.innerHTML && box7.innerHTML===box9.innerHTML)
		selectWinnerBox(box7,box8,box9)
	else if(box1.innerHTML !=="" && box4.innerHTML===box1.innerHTML && box7.innerHTML===box1.innerHTML)
		selectWinnerBox(box1,box4,box7)
	else if(box2.innerHTML !=="" && box5.innerHTML===box2.innerHTML && box2.innerHTML===box8.innerHTML)
		selectWinnerBox(box2,box5,box8)
	else if(box3.innerHTML !=="" && box3.innerHTML===box6.innerHTML && box3.innerHTML===box9.innerHTML)
		selectWinnerBox(box3,box6,box9)
	else if(box1.innerHTML !=="" && box1.innerHTML===box5.innerHTML && box1.innerHTML===box9.innerHTML)
		selectWinnerBox(box1,box5,box9)
	else if(box3.innerHTML !=="" && box3.innerHTML===box5.innerHTML && box5.innerHTML===box7.innerHTML)
		selectWinnerBox(box5,box7,box3)
	else
	{
		turn.innerHTML="DRAW";	
	}
}

//set event
	var box=document.querySelectorAll(".box");
	var X_0=0;
	for(var i=0;i<box.length;i++)
	{
		box[i].addEventListener("click",function()
		{
			//not allow to change the value of the box
			if(this.innerHTML!=="X" && this.innerHTML!=="0")
			{
				if(X_0%2===0)
				{
					this.innerHTML="X"
					turn.innerHTML="0 Turn Now!!"
					getWinner();
					X_0 +=1
				}
				else
				{
					this.innerHTML="0";
					turn.innerHTML="X Turn Now!!"
					getWinner();
					X_0 +=1;
				}
			}
		});
	}

function replay()
{
	for(var i=0;i<box.length;i++)
	{
		box[i].classList.remove("win");
		box[i].innerHTML="";
		turn.innerHTML="PLAY";
	}
}
var button=document.querySelector("#replay")
button.addEventListener("click",replay)
function selectWinnerBox(b1,b2,b3){
	b1.classList.add("win");
	b2.classList.add("win");
	b3.classList.add("win");
	turn.innerHTML=b1.innerHTML+ " Won !!!!"
}