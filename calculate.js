function calculate(){
  let purchasePriceInput=document.getElementById("purchasePrice");
  let sellingPriceInput=document.getElementById("sellingPrice");
  let deliverySelect=document.getElementById("delivery");

  let purchasePrice=purchasePriceInput.value;
  let sellingPrice=sellingPriceInput.value;
  let delivery=deliverySelect.value;

  let deliveryPrice;
  if(delivery=="small"){
    deliveryPrice=175;
  }else if(delivery=="big"){
    deliveryPrice=440;
  };

  let commission=sellingPrice*0.1;

  let profit=sellingPrice-purchasePrice-deliveryPrice-commission;
  let profitRate=profit/sellingPrice*100;

  let profitResult=document.getElementById("profit");
  let profitRateResult=document.getElementById("profitRate");

  profitResult.textContent=profit+"円";
  profitRateResult.textContent=profitRate+"%";
}
