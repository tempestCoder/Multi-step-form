let formOne = document.getElementById("formOne");
let formTwo = document.getElementById("formTwo");
let formThree = document.getElementById("formThree");
let formFour = document.getElementById("formFour");

let infoBtn = document.getElementById("infoBtn");
let backBtn1 = document.getElementById("return");
const planBtn = document.getElementById("planBtn");
let backBtn2 = document.getElementById("return2");
const addBtn = document.getElementById("addBtn");
let backBtn3 = document.getElementById("return3");
let finishBtn = document.getElementById("finishBtn");

const message = document.getElementById("thanksMessage");

let numOne = document.getElementById("num1");
let numTwo = document.getElementById("num2");
let numThree = document.getElementById("num3");
let numFour = document.getElementById("num4");

numOne.classList.add("stepStyle");
numOne.style.color = "#021833";

infoBtn.onclick = () => {
  formOne.style.transform = "translateY(-410px)";
  formTwo.style.transform = "translateY(-400px)";
  numOne.classList.remove("stepStyle");
  numOne.style.color = "#fff";
  numTwo.classList.add("stepStyle");
  numTwo.style.color = "#021833";
};

backBtn1.onclick = () => {
  formOne.style.transform = "translateY(0px)";
  formTwo.style.transform = "translateY(2px)";
  numOne.classList.add("stepStyle");
  numOne.style.color = "#021833";
  numTwo.classList.remove("stepStyle");
  numTwo.style.color = "#fff";
};

planBtn.onclick = () => {
  formTwo.style.top = "0px";
  formThree.style.transform = "translateY(-400px)";
  numThree.classList.add("stepStyle");
  numThree.style.color = "#021833";
  numTwo.classList.remove("stepStyle");
  numTwo.style.color = "#fff";
};

backBtn2.onclick = () => {
  formTwo.style.top = "400px";
  formThree.style.transform = "translateY(25px)";
  numThree.classList.remove("stepStyle");
  numThree.style.color = "#fff";
  numTwo.classList.add("stepStyle");
  numTwo.style.color = "#021833";
};

addBtn.onclick = () => {
  formThree.style.top = "-20px";
  formFour.style.transform = "translateY(-430px)";
  numFour.classList.add("stepStyle");
  numFour.style.color = "#021833";
  numThree.classList.remove("stepStyle");
  numThree.style.color = "#fff";

  calculatePrice();
};

backBtn3.onclick = () => {
  formThree.style.top = "420px";
  formFour.style.transform = "translateY(0px)";
  numFour.classList.remove("stepStyle");
  numFour.style.color = "#fff";
  numThree.classList.add("stepStyle");
  numThree.style.color = "#021833";
};

finishBtn.onclick = () => {
  formOne.style.visibility = "hidden";
  formTwo.style.visibility = "hidden";
  formThree.style.visibility = "hidden";
  formFour.style.visibility = "hidden";
  setTimeout(() => {
    message.style.opacity = 1;
    message.style.display = "block";
  }, 1000);
};

let priceOne = document.getElementById("price1");
let priceTwo = document.getElementById("price2");
let priceThree = document.getElementById("price3");

const onlinePrice = document.getElementById("onlineprice");
const storagePrice = document.getElementById("storageprice");
const customPrice = document.getElementById("customprice");
let frequency1 = document.getElementById("frequency1");
let frequency2 = document.getElementById("frequency2");
let frequency3 = document.getElementById("frequency3");

let frequency4 = document.getElementById("frequency4");
let frequency5 = document.getElementById("frequency5");
let frequency6 = document.getElementById("frequency6");
let frequency7 = document.getElementById("frequency7");
let frequency8 = document.getElementById("frequency8");
let frequency9 = document.getElementById("frequency9");

const frequencyChange1 = document.getElementById("frequencyChange1");
const frequencyChange2 = document.getElementById("frequencyChange2");
const frequencyChange3 = document.getElementById("frequencyChange3");

const duration1 = document.getElementById("freeDuration1");
const duration2 = document.getElementById("freeDuration2");
const duration3 = document.getElementById("freeDuration3");
const month = document.getElementById("month");
const year = document.getElementById("year");
const toggleBtn = document.getElementById("toggler");

const monthly = document.getElementById("monthly");
const planBased = document.getElementById("planBased");

toggleBtn.onclick = () => {
  if (toggleBtn.checked == true) {
    month.style.color = "#000";
    year.style.color = "#02295a";
    priceOne.innerText = 90;
    priceTwo.innerText = 120;
    priceThree.innerText = 150;
    frequencyChange1.innerText = "/yr";
    frequencyChange2.innerText = "/yr";
    frequencyChange3.innerText = "/yr";

    duration1.style.display = "block";
    duration2.style.display = "block";
    duration3.style.display = "block";
    duration1.innerText = "2 months free";
    duration2.innerText = "2 months free";
    duration3.innerText = "2 months free";
    frequency1.innerText = "/yr";
    frequency2.innerText = "/yr";
    frequency3.innerText = "/yr";
    frequency4.innerText = "/yr";
    frequency5.innerText = "/yr";
    frequency6.innerText = "/yr";
    frequency7.innerText = "/yr";
    frequency8.innerText = "/yr";
    frequency9.innerText = "/yr";
    onlinePrice.innerText = 10;
    storagePrice.innerText = 20;
    customPrice.innerText = 20;

    monthly.innerText = "(Yearly)";
    planBased.innerText = "(per year)";
  } else {
    month.style.color = "#02295a";
    year.style.color = "#000";
    priceOne.innerText = 9;
    priceTwo.innerText = 12;
    priceThree.innerText = 15;

    frequencyChange1.innerText = "/mo";
    frequencyChange2.innerText = "/mo";
    frequencyChange3.innerText = "/mo";

    frequency1.innerText = "/mo";
    frequency2.innerText = "/mo";
    frequency3.innerText = "/mo";
    frequency4.innerText = "/mo";
    frequency5.innerText = "/mo";
    frequency6.innerText = "/mo";
    frequency7.innerText = "/mo";
    frequency8.innerText = "/mo";
    frequency9.innerText = "/mo";
    duration1.style.display = "none";
    duration2.style.display = "none";
    duration3.style.display = "none";
    onlinePrice.innerText = 1;
    storagePrice.innerText = 2;
    customPrice.innerText = 2;

    monthly.innerText = "(Monthly)";
    planBased.innerText = "(per month)";
  }
};

let arcade = document.getElementById("arcade");
let advanced = document.getElementById("advanced");
let pro = document.getElementById("pro");

let pricePerPlan = document.getElementById("pricePerPlan");
const plan = document.getElementById("plan");
let add = document.getElementById("pricePerAdd");

arcade.onclick = (e) => {
  plan.innerText = "Arcade(Monthly)";
  pricePerPlan.innerText = priceOne.innerText;
  arcade.classList.toggle("chosen");
  advanced.classList.remove("chosen");
  pro.classList.remove("chosen");
};

advanced.onclick = () => {
  plan.innerText = "Advanced(Monthly)";
  pricePerPlan.innerText = priceTwo.innerText;
  arcade.classList.remove("chosen");
  pro.classList.remove("chosen");
  advanced.classList.toggle("chosen");
};

pro.onclick = () => {
  plan.innerText = "Pro(Monthly)";
  pricePerPlan.innerText = priceThree.innerText;
  arcade.classList.remove("chosen");
  advanced.classList.remove("chosen");
  pro.classList.toggle("chosen");
};

let onlineCheckBox = document.getElementById("online");
let storageCheckBox = document.getElementById("storage");
let profileCheckBox = document.getElementById("profile");

let onlineService = document.getElementById("online-service");
let largeStorage = document.getElementById("large-storage");
let customStorage = document.getElementById("customProfile");

const chosenAdd1 = document.getElementById("chosenAdd1");
const chosenAdd2 = document.getElementById("chosenAdd2");
const pricePerAdd = document.getElementById("pricePerAdd");
const pricePerAdd2 = document.getElementById("pricePerAdd2");

function change() {
  if (
    onlineCheckBox.checked == true &&
    storageCheckBox.checked == true &&
    profileCheckBox.checked == false
  ) {
    onlineService.classList.add("chosen");
    largeStorage.classList.add("chosen");
    chosenAdd1.innerText = "Online service";
    chosenAdd2.innerText = "Larger storage";
    pricePerAdd.innerText = onlinePrice.innerText;
    pricePerAdd2.innerText = storagePrice.innerText;
  } else if (
    onlineCheckBox.checked == true &&
    profileCheckBox.checked == true &&
    storageCheckBox.checked == false
  ) {
    onlineService.classList.add("chosen");
    largeStorage.classList.remove("chosen");
    customStorage.classList.add("chosen");
    chosenAdd1.innerText = "Online service";
    chosenAdd2.innerText = "Custom profile";
    pricePerAdd.innerText = onlinePrice.innerText;
    pricePerAdd2.innerText = customPrice.innerText;
  } else if (
    storageCheckBox.checked == true &&
    profileCheckBox.checked == true &&
    onlineCheckBox.checked == false
  ) {
    onlineService.classList.remove("chosen");
    largeStorage.classList.add("chosen");
    customStorage.classList.add("chosen");
    chosenAdd1.innerText = "Larger storage";
    chosenAdd2.innerText = "Custom profile";
    pricePerAdd.innerText = storagePrice.innerText;
    pricePerAdd2.innerText = customPrice.innerText;
  } else {
    onlineService.classList.remove("chosen");
    largeStorage.classList.remove("chosen");
    customStorage.classList.remove("chosen");
    chosenAdd1.innerText = "Online service";
    chosenAdd2.innerText = "Larger storage";
    pricePerAdd.innerText = 0;
    pricePerAdd2.innerText = 0;
  }
}

onlineService.onclick = () => {
  change();
};

largeStorage.onclick = () => {
  change();
};

customStorage.onclick = () => {
  change();
};

let totalPrice = document.getElementById("totalDisplay");
function calculatePrice() {
  let result =
    Number(pricePerPlan.innerText) +
    Number(pricePerAdd.innerText) +
    Number(pricePerAdd2.innerText);

  totalPrice.innerText = result;
}
