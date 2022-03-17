    var stabutton=document.querySelector('#start')
    var stobutton=document.querySelector('#stop')
    var caixa=document.querySelector('.caixa')
    
    stabutton.addEventListener('click',star)
    stobutton.addEventListener('click',sto)
    caixa.addEventListener('click',sett)


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
    var bola=document.querySelector('#bola')

        tim.style.fontSize='15vw'
        tim.style.transform='translate(-50%,-54.3%)'
        
        document.body.style.backgound='rgba(0, 0, 0, 0.425)'

        instru.classList.toggle('fade')
        degra.classList.toggle('fade')
        stabutton.classList.toggle('fade')
        stobutton.classList.toggle('fade')
        bola.classList.toggle('fade')
}

function sto(){

    var tim=document.querySelector('#timer')
    var instru=document.querySelector('#instru')
    var degra=document.querySelector('#degradê')
    var bola=document.querySelector('#bola')
        
        tim.style.fontSize='8vw'
        tim.style.transform='translate(-50%,-50%)'
        
        instru.classList.toggle('fade')
        degra.classList.toggle('fade')
        stabutton.classList.toggle('fade')
        stobutton.classList.toggle('fade')
        bola.classList.toggle('fade')

        clearInterval(interval)
        seg=25
        min=10
        tim.innerHTML='10:25'
}

function sett(){
    
    var bar1=document.querySelector('.bar.bar1')
    var bar2=document.querySelector('.bar.bar2')
    var bar3=document.querySelector('.bar.bar3')
    var sett=document.querySelector('#settbar')

    caixa.classList.toggle('move')
    bar1.classList.toggle('move')
    bar2.classList.toggle('move')
    bar3.classList.toggle('move')
    sett.classList.toggle('move')

}



