

let button=document.getElementById('but');
button.addEventListener('click',Reload);
let note = document.getElementById('Note');

function Reload(){
    let fetchdata = new XMLHttpRequest();

    fetchdata.open('GET','https://api.adviceslip.com/advice',true);
    
    
    fetchdata.onload=()=>{
        if (fetchdata.status===200) {
            let data = JSON.parse(fetchdata.responseText);
          
            document.getElementById('Advice').innerHTML = data.slip.id;
           document.getElementById('Note').innerHTML=`"${data.slip.advice}"`;
           note.classList.add('note2');

        }

    }
    fetchdata.send();
}
Reload();