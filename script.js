    var stabutton=document.querySelector('#start')
    var stobutton=document.querySelector('#stop')
    
    stabutton.addEventListener('click',star)
    stobutton.addEventListener('click',sto)

    var min=10
    var seg=25
    var interval

function star(){


   interval=setInterval(() => {
        seg--
        if(min==0&&seg==0){clearInterval(interval)}
        else if(seg<0){
            min--
            seg=59
        }
        
        tim.innerHTML=`${min<10?'0'+min:min}:${seg<10?'0'+seg:seg}`
    }, 1000);        

    var tim=document.querySelector('#timer')
    var instru=document.querySelector('#instru')
    var degra=document.querySelector('#degradê')

        tim.style.fontSize='190px'
        
        document.body.style.backgound='rgba(0, 0, 0, 0.425)'

        instru.classList.toggle('fade')
        degra.classList.toggle('fade')
        stabutton.classList.toggle('fade')
        stobutton.classList.toggle('fade')
        
        
}

function sto(){

    var tim=document.querySelector('#timer')
    var instru=document.querySelector('#instru')
    var degra=document.querySelector('#degradê')
        
        tim.style.fontSize='120px'
        
        instru.classList.toggle('fade')
        degra.classList.toggle('fade')
        stabutton.classList.toggle('fade')
        stobutton.classList.toggle('fade')

        clearInterval(interval)
        seg=25
        min=10
        tim.innerHTML='10:25'
}