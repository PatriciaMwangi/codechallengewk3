
// Your code here    
    /*let ul=document.getElementById('films')
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
     
    }*/
    let btn=document.getElementById('buy-ticket')
btn.addEventListener('click',
    buyTickets
)

  /*  function buyTicket(){
 fetch('http://localhost:3000/films',{
method:'PATCH',
headers:{
    'Content-Type':'application/json'
},
body:JSON.stringify({tickets_sold:tickets_sold-1})
 }).then(res=>res.json())
        .then(da=>console.log(da))}*/

function buyTickets(){
    fetch('http://localhost:3000/films')
    .then(res=>res.json())
    .then(data=>{
        let ticketsSold=data.tickets_sold;
        ticketsSold--;
       
    fetch('http://localhost:3000/films',{
        
        method:'PATCH',
        headers: {
'Content-Type':'application/json'
        },
        body: JSON.stringify({tickets_sold:ticketsSold})
    }).then(ress=>console.log(ress))
   .then(data=>{
      if(data.tickets_sold>0){
        console.log(ticketsSold)
        
      }
    });
})
return buyTickets()
}
console.log(buyTickets)