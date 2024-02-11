const outputElement=document.querySelector('#output');
const btnCopy=document.querySelector('#btncopy');
const passwordLengthElement=document.querySelector('#length');
const numberElement=document.querySelector('#number');
const capitalElement=document.querySelector('#capital');
const smallElement=document.querySelector('#small');
const symbolElement=document.querySelector('#symbol');
const frmElement=document.querySelector('#frm');

/*
ASCII - American Standard Code for Information Interchange

0-128
0-255

65-90  -  A-Z
97-122 -  a-z
48-57  -  0-9
32     -  space

*/



//button click to copy password
btnCopy.addEventListener('click',async()=>{
    const pass=outputElement.value;
    if(pass){
       await navigator.clipboard.writeText(pass);
       alert("copied to clipboard"); 
    }
    else{
        alert("There is no password to copy");
    }

});


//generateRandomChar(65,90)//A only cap letter 
//90-65=25 so add 1=26


function generateRandomChar(min,max){
    const limit=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}


function captitalValue(){
    return generateRandomChar(65,90);
  }
  function smallValue(){
    return generateRandomChar(97,122);
  }
  function numberValue(){
    return generateRandomChar(48,57);
  }
  function symbolValue(){
    const symbols="~!@#$%^&*()_+|}{<>*./";
    return symbols[Math.floor(Math.random()*symbols.length)];
  }


  const functionArray=[
    {
        element:numberElement,
        fun:numberValue
      },
      {
        element:capitalElement,
        fun:captitalValue
      },
      {
        element:smallElement,
        fun:smallValue
      },
      {
        element:symbolElement,
        fun:symbolValue
      }
    
    ];
  
frmElement.addEventListener('submit',(e)=>{
  e.preventDefault();


  const limit=passwordLengthElement.value;

  let  generatedPassword='';

  const funArray=functionArray.filter(({element})=>element.checked);
  //console.log(funArray);



  for(i=0;i<limit;i++){
    const index=Math.floor(Math.random()*funArray.length);
    const letter=funArray[index].fun();
    generatedPassword +=letter;
   
  }

  outputElement.value=generatedPassword;

}

);


    

    
    