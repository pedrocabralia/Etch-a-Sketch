const container = document.getElementById("container");

const button = document.getElementById("button");

  
 button.addEventListener("click",function(){

    let size =  prompt("Digite o tamanho do grid: max 100");


    

    do{

        size =  prompt("lembre o tamanho máximo é 100");


    }
     while(size>100)

     

  modificarTamanho(size)

      

     

     
  })


  reset.addEventListener("click",function(){

    location.reload();
   })


  
function modificarTamanho(tamanho){

     container.innerHTML = "";
    const tamanhoContainer = container.clientWidth / tamanho;

    
    for(i=1;i<= tamanho * tamanho;i++){

    const grid = document.createElement("div");
    grid.style.backgroundColor = "white";
    grid.style.border = "solid 1px grey";
    grid.classList = "grid";
    grid.style.width = `${tamanhoContainer}px`;
    grid.style.height = `${tamanhoContainer}px`;

    container.appendChild(grid);
  
    grid.addEventListener("mouseover",function(){

      grid.style.backgroundColor = "rgb(166, 169, 209)";
    
     })
  
}

 

}





function criarGrid(tamanho){

    const tamanhoContainer = container.clientWidth / tamanho;

    
    for(i=1;i<= tamanho * tamanho;i++){

    const grid = document.createElement("div");
    grid.style.backgroundColor = "white";
    grid.style.border = "solid 1px grey";
    grid.classList = "grid";
    grid.style.width = `${tamanhoContainer}px`;
    grid.style.height = `${tamanhoContainer}px`;

    container.appendChild(grid);

    grid.addEventListener("mouseover",function(){

      grid.style.backgroundColor = "rgb(166, 169, 209)";
    
     })


  }


  




}





criarGrid(16);