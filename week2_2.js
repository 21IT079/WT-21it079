function fun(){
    let a=parseFloat(document.getElementById("n1").value);
    let b=parseFloat(document.getElementById("n2").value);
    //console.log(typeof a1)
    let op=document.getElementById("oper").value;
    //console.log(typeof op);
    if(op==='+')
    {
    console.log(a+b);
    document.getElementById("output").innerText=(a+b);
    }
    else if(op==='-')
    {
    document.getElementById("output").innerText=(a-b);
    }
    else if(op==='/')
    {
    document.getElementById("output").innerText=(a/b);
    }
    else if(op==='*')
    {
    document.getElementById("output").innerText=(a*b);
    }
    else if(op==='%')
    

    
    {
    document.getElementById("output").innerText=(a%b);
    }
    else
    {
    alert("Operation not allowed");
    }
    }