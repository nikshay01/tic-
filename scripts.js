
let box1 = document.getElementById('b1')
let box2 = document.getElementById('b2')
let box3 = document.getElementById('b3')
let box4 = document.getElementById('b4')
let box5 = document.getElementById('b5')
let box6 = document.getElementById('b6')
let box7 = document.getElementById('b7')
let box8 = document.getElementById('b8')
let box9 = document.getElementById('b9')
let name1;
let name2;

document.getElementById('inp').addEventListener('click',function(){
    document.getElementById('after').setAttribute('id','none');
    document.querySelector(".cover").setAttribute('id','after')
    let nm = document.getElementById('input').value;
    console.log(nm)
    name1 = nm;
    let mm = document.getElementById('input1').value;
    console.log(mm);
    name2 = mm;
 });



let color1 = 'on';
let idn1 = 'on'
let idn2 = 'on'
let idn3 = 'on'
let idn4 = 'on'
let idn5 = 'on'
let idn6 = 'on'
let idn7 = 'on'
let idn8 = 'on'
let idn9 = 'on'


 function chk(){
   
   
   
    let c1 = box1.getAttribute('class')
    let c2 = box2.getAttribute('class')
    let c3 = box3.getAttribute('class')
    let c4 = box4.getAttribute('class')
    let c5 = box5.getAttribute('class')
    let c6 = box6.getAttribute('class')
    let c7 = box7.getAttribute('class')
    let c8 = box8.getAttribute('class')
    let c9 = box9.getAttribute('class')
        if (c1 =='red' && c2 == 'red' && c3=='red'|| c4=='red' && c5 == 'red' && c6=='red' || c7=='red' && c8 == 'red' && c9=='red'||c1=='red' && c4 == 'red' && c7=='red'||c2=='red' && c5 == 'red' && c8=='red'|| c3=='red' && c6 == 'red' && c9=='red'|| c1=='red' && c5== 'red' && c9=='red'|| c3=='red' && c5== 'red' && c7=='red') {
            // document.getElementById('res').innerText= 'red win';
            document.getElementById('res').innerText= name1 + ' wins'
            // document.body.style.background = 'radial-gradient(rgb(87, 0, 0),rgb(33, 0, 0),rgb(0, 0, 0))'
            document.body.setAttribute('class','bg')
            const audio = new Audio();
            audio.src = "./knife-stab-sound-effect-36354.mp3"
            audio.play();
            gameOver = true;
        } 
        else if(c1 =='green' && c2 == 'green' && c3=='green'|| c4=='green' && c5 == 'green' && c6=='green' || c7=='green' && c8 == 'green' && c9=='green'||c1=='green' && c4 == 'green' && c7=='green'||c2=='green' && c5 == 'green' && c8=='green'|| c3=='green' && c6 == 'green' && c9=='green'|| c1=='green' && c5== 'green' && c9=='green'|| c3=='green' && c5== 'green' && c7=='green'){
            document.getElementById('res').innerText= name2 +' win';
            document.body.setAttribute('class','bg-1')
            // document.body.style.background = 'radial-gradient(rgb(0, 67, 0),rgb(0, 23, 0),rgb(0, 0, 0))'
            gameOver = true;
            
            const audio = new Audio();
            audio.src = "./knife-stab-sound-effect-36354.mp3"
            audio.play();
        }
        else if (
            idn1 == 'off' && idn2 == 'off' && idn3 == 'off' &&
            idn4 == 'off' && idn5 == 'off' && idn6 == 'off' &&
            idn7 == 'off' && idn8 == 'off' && idn9 == 'off'
        ) {
            //  document.body.style.background = 'radial-gradient(rgb(87, 0, 0),rgb(33, 0, 0),rgb(0, 0, 0))'
            document.getElementById('res').innerText= 'its a draw';
            
            const audio = new Audio();
            audio.src = "./draw.mp3"
            audio.play();
        }




                if (c1 =='red' && c2 == 'red' && c3=='red') {
                    box1.style.textShadow = '0px 0px 10px red'
                    box2.style.textShadow = '0px 0px 10px red'
                    box3.style.textShadow = '0px 0px 10px red'
                } 
            else if (c4 =='red' && c5 == 'red' && c6=='red') {
                box4.style.textShadow = '0px 0px 10px red'
                box5.style.textShadow = '0px 0px 10px red'
                box6.style.textShadow = '0px 0px 10px red'
            }
            else if (c7 =='red' && c8 == 'red' && c9=='red') {
                box7.style.textShadow = '0px 0px 10px red'
                box8.style.textShadow = '0px 0px 10px red'
                box9.style.textShadow = '0px 0px 10px red'
            }
            else if (c1 =='red' && c4 == 'red' && c7=='red') {
                box1.style.textShadow = '0px 0px 10px red'
                box4.style.textShadow = '0px 0px 10px red'
                box7.style.textShadow = '0px 0px 10px red'
            }
            else if (c2 =='red' && c5 == 'red' && c8=='red') {
                box2.style.textShadow = '0px 0px 10px red'
                box5.style.textShadow = '0px 0px 10px red'
                box8.style.textShadow = '0px 0px 10px red'
            }
            else if (c3 =='red' && c6 == 'red' && c9=='red') {
                box3.style.textShadow = '0px 0px 10px red'
                box6.style.textShadow = '0px 0px 10px red'
                box9.style.textShadow = '0px 0px 10px red'
            }
           
            else if (c1 =='red' && c5 == 'red' && c9=='red') {
                box1.style.textShadow = '0px 0px 10px red'
                box5.style.textShadow = '0px 0px 10px red'
                box9.style.textShadow = '0px 0px 10px red'
            }
            else if (c3 =='red' && c5 == 'red' && c7=='red') {
                box3.style.textShadow = '0px 0px 10px red'
                box5.style.textShadow = '0px 0px 10px red'
                box7.style.textShadow = '0px 0px 10px red'
            }
            
            if (c1 =='green' && c2 == 'green' && c3=='green') {
                box1.style.textShadow = '0px 0px 10px green'
                box2.style.textShadow = '0px 0px 10px green'
                box3.style.textShadow = '0px 0px 10px green'
            } 
        else if (c4 =='green' && c5 == 'green' && c6=='green') {
            box4.style.textShadow = '0px 0px 10px green'
            box5.style.textShadow = '0px 0px 10px green'
            box6.style.textShadow = '0px 0px 10px green'
        }
        else if (c7 =='green' && c8 == 'green' && c9=='green') {
            box7.style.textShadow = '0px 0px 10px green'
            box8.style.textShadow = '0px 0px 10px green'
            box9.style.textShadow = '0px 0px 10px green'
        }
        else if (c1 =='green' && c4 == 'green' && c7=='green') {
            box1.style.textShadow = '0px 0px 10px green'
            box4.style.textShadow = '0px 0px 10px green'
            box7.style.textShadow = '0px 0px 10px green'
        }
        else if (c2 =='green' && c5 == 'green' && c8=='green') {
            box2.style.textShadow = '0px 0px 10px green'
            box5.style.textShadow = '0px 0px 10px green'
            box8.style.textShadow = '0px 0px 10px green'
        }
        else if (c3 =='green' && c6 == 'green' && c9=='green') {
            box3.style.textShadow = '0px 0px 10px green'
            box6.style.textShadow = '0px 0px 10px green'
            box9.style.textShadow = '0px 0px 10px green'
        }
       
        else if (c1 =='green' && c5 == 'green' && c9=='green') {
            box1.style.textShadow = '0px 0px 10px green'
            box5.style.textShadow = '0px 0px 10px green'
            box9.style.textShadow = '0px 0px 10px green'
        }
        else if (c3 =='green' && c5 == 'green' && c7=='green') {
            box3.style.textShadow = '0px 0px 10px green'
            box5.style.textShadow = '0px 0px 10px green'
            box7.style.textShadow = '0px 0px 10px green'
        }

              

    }

let gameOver = false;
// function color(){
//     if(color1=='on' && idn1=='on'){
//         box1.innerText = 'X'
//         color1 = 'off'
//         idn1 = 'off'
//         box1.setAttribute('class','red')
//               console.log(color1)
//     }
//     else if(color1=='on' && idn1=='on'){
//         box1.innerText = 'O'
//         color1 = 'on'     
//         idn1 = 'off'
//         box1.setAttribute('class','green')
//             console.log(color1)
//             }
// }


box1.addEventListener('click',function(){
    if (!gameOver){
        if(color1=='on' && idn1=='on'){
            box1.innerText = 'X'
            color1 = 'off'
            idn1 = 'off'
            box1.setAttribute('class','red')
                  console.log(color1)
        }
        else if(color1=='off' && idn1=='on'){
            box1.innerText = 'O'
            color1 = 'on'     
            idn1 = 'off'
            box1.setAttribute('class','green')
                console.log(color1)
                }
                chk(); }
});
box2.addEventListener('click',function(){
    if(!gameOver){
        if(color1=='on' && idn2=='on'){
            box2.innerText = 'X'
            color1 = 'off'
            idn2 = 'off'
            box2.setAttribute('class','red')
                  console.log(color1)
        }
        else if(color1=='off' && idn2=='on'){
            box2.innerText = 'O'
            color1 = 'on'     
            idn2 = 'off'
            box2.setAttribute('class','green')
                console.log(color1)
                }
                chk();}
    });
    
box3.addEventListener('click',function(){
   if (!gameOver){
    if(color1=='on' && idn3=='on'){
        box3.innerText = 'X'
        color1 = 'off'
        idn3 = 'off'
        box3.setAttribute('class','red')
              console.log(color1)
    }
    else if(color1=='off' && idn3=='on'){
        box3.innerText = 'O'
        color1 = 'on'     
        idn3 = 'off'
        box3.setAttribute('class','green')
            console.log(color1)
            }
            chk();}
});
box4.addEventListener('click',function(){
   if (!gameOver){
    if(color1=='on' && idn4=='on'){
        box4.innerText = 'X'
        color1 = 'off'
        idn4 = 'off'
        box4.setAttribute('class','red')
              console.log(color1)
    }
    else if(color1=='off' && idn4=='on'){
        box4.innerText = 'O'
        color1 = 'on'     
        idn4 = 'off'
        box4.setAttribute('class','green')
            console.log(color1)
            }
            chk();}
});
box5.addEventListener('click',function(){
    if(!gameOver){
        
    if(color1=='on' && idn5=='on'){
        box5.innerText = 'X'
        color1 = 'off'
        idn5 = 'off'
        box5.setAttribute('class','red')
              console.log(color1)
    }
    else if(color1=='off' && idn5=='on'){
        box5.innerText = 'O'
        color1 = 'on'     
        idn5 = 'off'
        box5.setAttribute('class','green')
            console.log(color1)
            }
            chk();  }
});
box6.addEventListener('click',function(){
    if(!gameOver){    if(color1=='on' && idn6=='on'){
        box6.innerText = 'X'
        color1 = 'off'
        idn6 = 'off'
        box6.setAttribute('class','red')
              console.log(color1)
    }
    else if(color1=='off' && idn6=='on'){
        box6.innerText = 'O'
        color1 = 'on'     
        idn6 = 'off'
        box6.setAttribute('class','green')
            console.log(color1)
            }
            chk();    }
});
box7.addEventListener('click',function(){
   if(!gameOver){
    if(color1=='on' && idn7=='on'){
        box7.innerText = 'X'
        color1 = 'off'
        idn7 = 'off'
        box7.setAttribute('class','red')
              console.log(color1)
    }
    else if(color1=='off' && idn7=='on'){
        box7.innerText = 'O'
        color1 = 'on'     
        idn7 = 'off'
        box7.setAttribute('class','green')
            console.log(color1)
            }
            chk();  }
});
box8.addEventListener('click',function(){
   if(!gameOver){
    if(color1=='on' && idn8=='on'){
        box8.innerText = 'X'
        color1 = 'off'
        idn8 = 'off'
        box8.setAttribute('class','red')
              console.log(color1)
    }
    else if(color1=='off' && idn8=='on'){
        box8.innerText = 'O'
        color1 = 'on'     
        idn8 = 'off'
        box8.setAttribute('class','green')
            console.log(color1)
            }
            chk(); }
});
box9.addEventListener('click',function(){
   if (!gameOver){
    if(color1=='on' && idn9=='on'){
        box9.innerText = 'X'
        color1 = 'off'
        idn9 = 'off'
        box9.setAttribute('class','red')
              console.log(color1)
    }
    else if(color1=='off' && idn9=='on'){
        box9.innerText = 'O'
        color1 = 'on'     
        idn9 = 'off'
        box9.setAttribute('class','green')
            console.log(color1)
            }
            chk();  }
});

// document.getElementById('button').addEventListener('click',function(){
//     });




