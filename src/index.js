
// Your code here  
let ul=document.getElementById('films')
    let title=document.getElementById('title')
   let ticketNum=document.getElementById('ticket-num')
    let runtime=document.getElementById('runtime')
let description=document.getElementById('film-info')
let showtime=document.getElementById('showtime')
let poster=document.querySelector('img')

    document.addEventListener('DOMContentLoaded',function(){
        fetch  ('http://localhost:3000/films')
        .then(response=>response.json())
        
        .then(data=>{
        data.forEach(episode=>{
let li=document.createElement('li');
//let buttons=document.createElement('button')
/*let noOfButtons=15;
for(let i=0;i<noOfButtons;i++){
    let buttons=document.createElement('button')
    buttons.innerText='x'
buttons.style.float="right"
console.log(buttons)
buttons.addEventListener("click",function(){
    function deleted(e){
        console.log(e.target)
    }
});
ul.appendChild(buttons)
}


console.log(buttons)*/


li.innerText= episode.title;
//li.addEventListener('click',firstMovie(episode)) cannot do this as it will invoke the function immediately.
//and we need our function invoked afer click(line 69)
ul.appendChild(li)
li.addEventListener('click',function(){
   firstMovie(episode)
});       
        })
          })
    })

   function firstMovie(episode){
    title.innerText =episode.title
    runtime.innerText=episode.runtime
description.innerText=episode.description
ticketNum.innerText=(episode.capacity-episode.tickets_sold)
showtime.innerText=episode.showtime
poster.src=episode.poster//to change an image we schange its source



    console.log(firstMovie)
     
    }
    let btn=document.getElementById('buy-ticket')
btn.addEventListener('click',
    buyTickets
)


function buyTickets(){
    fetch('http://localhost:3000/films')
    .then(res=>res.json())
    .then(data=>{
      let ticketsSold= parseInt(ticketNum.innerText-1)
      if(ticketsSold>=0)
      {
       ticketNum.innerText=ticketsSold
        console.log(ticketsSold)

}else 
{

    btn.innerText='soldout'
}
})}
    