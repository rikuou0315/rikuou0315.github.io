function calculate(){
  let purchasePriceInput=document.getElementById("purchasePrice");
  let sellingPriceInput=document.getElementById("sellingPrice");
  let deliverySelect=document.getElementById("delivery");

  let purchasePrice=purchasePriceInput.value;
  let sellingPrice=sellingPriceInput.value;
  let delivery=deliverySelect.value;


  let deliveryPrice;
  switch(delivery){
    case "n25g":
      deliveryPrice=84;
      break;
    case "n50g":
      deliveryPrice=94;
      break;
    case "n100g":
      deliveryPrice=140;
      break;
    case "small":
      deliveryPrice=175;
      break;
    case "k50g":
      deliveryPrice=200;
      break;
    case "k100g":
      deliveryPrice=220;
      break;
    case "k150g":
      deliveryPrice=300;
      break;
    case "k250g":
      deliveryPrice=350;
      break;
    case "big":
      deliveryPrice=440;
  }

  let commission=sellingPrice*0.1;

  let profit=sellingPrice-purchasePrice-deliveryPrice-commission;
  let profitRate=profit/sellingPrice*100;

  let profitResult=document.getElementById("profit");
  let profitRateResult=document.getElementById("profitRate");

  profitResult.textContent=profit+"円";
  profitRateResult.textContent=profitRate+"%";
}
