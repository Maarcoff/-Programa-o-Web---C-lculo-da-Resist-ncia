function FazerCalculo(){
    let valuef01 = parseFloat (document.getElementById("faixa01").value);
    let valuef02 = parseFloat (document.getElementById("faixa02").value);
    let multp = parseFloat(document.getElementById("mult").value)
    let tole = parseFloat(document.getElementById("tol").value)
let jun = valuef01+""+valuef02;
//alert(jun);
let resultm = jun * multp;
//alert(resultm);
resultT = resultm * tole;
//alert(resultT);
let tol01 = resultT + resultm;
let tol02 = resultm - resultT;
//alert("O valor positivo da tolerancia é "+tol01+" e o valor negativo é "+tol02);
document.getElementById('result').value = resultm;
document.getElementById('restoler').value = tol01 +"/"+tol02;

}