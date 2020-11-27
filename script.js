const blocks = document.querySelectorAll("p");
const h3 = document.querySelector("h3");
const board = document.querySelector(".board");
let blockarr = Array.from(blocks);
const players = [
{ playernum: 1, sym : "X", spots : [] },
{ playernum: 2, sym : "O", spots : [] }
];

let j=0;
let available = 9;
let currplayer = players[j];
function contains(a,b,c,arr){
  if(arr.indexOf(a) > -1 && arr.indexOf(b) > -1  && arr.indexOf(c) > -1){
  	return ([a,b,c]);
  }
  return false;
}
const checkIfWon = (player) => {
	let arr = player['spots'];
	let arr2;
	if(arr2=(contains(0,1,2,arr) || contains(3,4,5,arr) || contains(6 ,7 ,8,arr))){
		arr2.forEach(i=> blocks[i].style.color="red");
		return true;
	}
	else if(arr2=(contains(0, 3, 6,arr) || contains(1, 4, 7,arr) || contains(2, 5, 8, arr))){
		arr2.forEach(i=> blocks[i].style.color="red");
		return true;
	}
	else if(arr2=(contains(0 , 4 , 8,arr) || contains(2 , 4 , 6,arr))){
		arr2.forEach(i=> blocks[i].style.color="red");
		return true;
	}
	else{
		return false;
	}
}

const clicked = (event) => {
	available--;
	currplayer['spots'].push(parseInt(event.target.dataset.num));
	event.target.innerHTML=currplayer.sym;
	if(available===0){
		h3.innerHTML=`Its a Draw. Play Again!`;
		button.style.display = 'block';
		blockarr.forEach(square => square.removeEventListener("click",clicked,{once: true}));
	}
	if(checkIfWon(currplayer)){
		// setTimeout(()=>board.style.display = 'none',1000);
		blockarr.forEach(square => square.removeEventListener("click",clicked,{once: true}));
		h3.innerHTML=`\'${currplayer.sym}\' Won!! Play Again!`;
	}
	else{
		j=(j+1)%2;
		currplayer = players[j];
	}
}
blockarr.forEach(square => square.addEventListener("click",clicked,{once: true}));
h3.addEventListener("click",()=>{location.reload()});
