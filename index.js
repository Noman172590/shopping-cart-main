function my_function(){

    var phone_casing=document.getElementById('phone-casing-increasing')
    var increasingphonecasing=phone_casing.value
    
    var increasing=parseInt(increasingphonecasing)+1;
    phone_casing.value= increasing;
    
    
    var phonecasingPrice=document.getElementById('phonecasingPrice')
    var phoneCoverPrice=parseInt(phonecasingPrice.innerText) ;

    var totalcost=increasing*59;
    phonecasingPrice.innerText=totalcost;

    var phonePrice=document.getElementById('phonePrice')
    var phonePriceInnertext=parseInt(phonePrice.innerText) ;

    var Subtotal=document.getElementById('Subtotal')
    var SubtotalInnertext=Subtotal.innerText;




    var result=parseInt(phonecasingPrice.innerText)+phonePriceInnertext
   
    Subtotal.innerText=result;

    var tax=document.getElementById('tex')
    var taxinnertext=parseInt(Subtotal.innerText)*0.1
    tax.innerText=taxinnertext.toFixed(1)


    var finalResult=parseFloat( tax.innerText)+parseFloat( Subtotal.innerText)
    
    var finaltaka=document.getElementById('totaltaka')

    finaltaka.innerText=finalResult


}

    
    
document.getElementById('btn-minus').addEventListener('click',function(){

    var phone_casing=document.getElementById('phone-casing-increasing')
    var increasingphonecasing=phone_casing.value
    console.log(increasingphonecasing)
    if(increasingphonecasing<=1)
    {
        return;
    }
    var increasing=parseInt(increasingphonecasing)-1;
    phone_casing.value= increasing;
    
      var phonecasingPrice=document.getElementById('phonecasingPrice')
    var phoneCoverPrice=phonecasingPrice.innerText;

    var totalcost=increasing*59;
    phonecasingPrice.innerText=totalcost;

    var phonePrice=document.getElementById('phonePrice')
    var phonePriceInnertext=parseInt(phonePrice.innerText) ;

    var Subtotal=document.getElementById('Subtotal')
    var SubtotalInnertext=Subtotal.innerText;




    var result=parseInt(phonecasingPrice.innerText)+phonePriceInnertext
    console.log(result)
    Subtotal.innerText=result;


    var tax=document.getElementById('tex')
    var taxinnertext=parseInt(Subtotal.innerText)*0.1
    tax.innerText=taxinnertext.toFixed(1)

     
    var finalResult=parseFloat( tax.innerText)+parseFloat( Subtotal.innerText)
    
    var finaltaka=document.getElementById('totaltaka')

    finaltaka.innerText=finalResult

  
})
