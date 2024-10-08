

document.getElementById("searchDes").addEventListener("click",searchDestination);
document.getElementById("reset").addEventListener("click",resetList)

async function searchDestination(){
    let inputValue=document.getElementById("destination").value.toLowerCase();
    let listDiv=document.querySelector(".searchedDestination")
    
    const response= await fetch("./travelRecommendation.json")
    const list =await response.json()
    if(list[inputValue]){
        listDiv.innerHTML+=` <div class="headerLine"></div>`
        listDiv.innerHTML+=`<div class="list" id="searchedDestination"></div>`
        list[inputValue].map(item=>{
            const listItemDiv=`<div class="list-item">
            <img alt="img" src="${item.imageUrl}">
            <div class="caption">
              <h3>${item.name}</h3>
              <p>${item.caption}</p>
              <button class="btn">Visit</button>
            </div>
          </div>`
            return document.getElementById("searchedDestination").innerHTML+=listItemDiv
        })
        
    }else {
        console.log(inputValue)
    }
}

function resetList(){
    console.log("reset")
    document.getElementById("destination").value="";
    document.querySelector(".searchedDestination").innerHTML=""
}