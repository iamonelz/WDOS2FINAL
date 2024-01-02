
// DOM ELEMENTS
const roomTpInput = document.getElementsByName("roomTp");
const numofRoomsInput = document.getElementById("numofRooms");
const numberAdultsInput = document.getElementById("numberAdults");
const numberChildInput = document.getElementById("numberChild");
const additionBedInput = document.getElementById("additionBed");
const durationsInput = document.getElementsByName("durations");
const checkinInput = document.getElementById("checkin");
const checkoutInput = document.getElementById("checkout");
const extraRequirementInput = document.getElementsByName("extraRequirement");
const wifiInput = document.getElementById("wifi");
const extraReqInput = document.getElementsByName("extraReq");
const promCodeInput = document.getElementById("promCode");
const AdventureInput = document.getElementsByName("Adventure");
const guideAdultInput = document.getElementsByName("guideAdult");
const currentCost1Output = document.getElementById("currentCost1");
const favButton = document.getElementById("favBtn");
const loyaltyCheckButton = document.getElementById("loyaltyCheckBtn");
const formRestbutton = document.getElementById("formRest");
const AdfavBtn2Input = document.getElementById("AdfavBtn2");
const singleInput = document.getElementById("single");
const doubleInput = document.getElementById("double");
const tripleInput = document.getElementById("triple");
const poolViewInput = document.getElementById("poolView");
const gardenViewInput = document.getElementById("gardenView");






// Buttons
const bookBtnInput = document.getElementById("bookBtn");

// Event listners
roomTpInput.forEach(item => item.addEventListener("change", roomTypeFunction));
durationsInput.forEach(item => item.addEventListener("change", durationFunction));
extraRequirementInput.forEach(item => item.addEventListener("change", extraReqFunction))
bookBtnInput.addEventListener("click", bookNowFunction);
favButton.addEventListener("click",favbuttonfn);
loyaltyCheckButton.addEventListener("click",loyaltyfn);
formRestbutton.addEventListener("click",resetfn);
AdfavBtn2Input.addEventListener("click", favbuttonfn2);

// Declare Variables
let roomType;
let roomCost;
let total;
let numofRooms;
let numofAdults;
let numofKids;
let totalRoomCost;
let dateDifference;
let extraReq;
let wifi;
let view;
let promoCode;
let promoCost;
let loyaltyPoints;
let extraRoom;
let extraRoomCost;
let checkOut;
let checkIn;
let totalCost;

// Functions
function initialize(){
    roomType = "";
    roomCost = 0;
    total = 0;
    numofRooms = 0;
    totalRoomCost = 0;
    dateDifference = 0;
    extraReq = "";
    wifi = "";
    view = "";
    promoCode = "";
    promoCost = 0;
    numofAdults = 0;
    numofKids = 0;
    loyaltyPoints = 0;
    extraRoom = "";
    extraRoomCost = 0;
    checkOut = "";
    checkIn = "";
    totalCost = 0;
}

function roomTypeFunction(){
    numofRooms = numofRoomsInput.value;
    if (this.value == "single")
    {
        roomType = "Single Room";
        roomCost = 25000;
        totalRoomCost = roomCost * numofRooms;
    }
    else if (this.value == "double"){
        roomType = "Double Room";
        roomCost = 35000;
        totalRoomCost = roomCost * numofRooms;
    }
    else{
        roomType = "Triple Room";
        roomCost = 40000;
        totalRoomCost = roomCost * numofRooms;
    }
    if (additionBedInput.checked){
        extraRoomCost = 5000;
        extraRoom = "Extra Room included";
    }else{
        extraRoom = "";
        extraRoomCost = 0;
    }
    if (numofRooms > 3){
        loyaltyPoints = numofRooms * 20;
    }
    console.log(`${roomCost}, ${roomType}, ${totalRoomCost}`);
    currentCost1Output.innerText = `${roomCost}, ${roomType}, ${totalRoomCost}`;
}
function durationFunction(){
    checkOut = new Date(checkoutInput.value);
    checkIn = new Date(checkinInput.value);

    let date = checkOut.getTime() - checkIn.getTime();

    dateDifference = date / (1000 * 3600 * 24);
    console.log(`${dateDifference}`)

}
function extraReqFunction(){
    if (wifiInput.checked){
        wifi = "WIFI Included";
    }else{
        wifi = "";
    }
    if (this.value == "poolView"){
        view = "Pool View Included";
    } else if (this.value == "gardenView"){
        view = "Garden View Included";
    }else{
        view = "View Excluded";
    }
    extraReq = `${wifi} ${view}`;
    console.log(`${extraReq}`);
}

function promoFunction(){
    promoCode = promCodeInput.value;
    if (promoCode === "Promo123"){
        promoCost = totalRoomCost * (3/100);
    }else{
        total = totalRoomCost;
    }
    total = totalRoomCost - promoCost;
    localStorage.setItem("LoyaltyPoints", `${loyaltyPoints}`)
}
function bookNowFunction(){
    promoFunction();
    numofAdults = numberAdultsInput.value;
    numofKids = numberChildInput.value;
    window.alert(`Your Order Placed!!
    Room Type is ${roomType} ${extraRoom}
    Room Cost is ${roomCost}
    Number of Adults ${numofAdults}
    Number of Kids ${numofKids}
    Extra Requirments ${extraReq}
    Total Payable is ${total}
    `);
}
function favbuttonfn(){
    window.alert("Added to Favorites");
    localStorage.setItem("roomType", `${roomType}`);
    localStorage.setItem("roomCost", `${roomCost}`);
    localStorage.setItem("numofAdults", `${numofAdults}`);
    localStorage.setItem("numofKids", `${numofKids}`);
    localStorage.setItem("extraReq", `${extraReq}`);
    localStorage.setItem("total", `${total}`);
    localStorage.setItem("checkOut", `${checkOut}`);
    localStorage.setItem("checkIn", `${checkIn}`);
}
function loyaltyfn(){
    let loyaltySet = localStorage.getItem(loyaltyPoints);
    window.alert(`Loyalty Point ${loyaltyPoints}`);
}
function resetfn(){
    numofRoomsInput.value = 1;
    additionBedInput.value = 0;
    singleInput.checked = false;
    doubleInput.checked = false;
    tripleInput.checked = false;
    currentCost1Output.innerText = "";
    initialize();
    checkinInput.value = "dd-mm-yyyy"
    checkoutInput.value = "dd-mm-yyyy"
    wifiInput.checked = false;
    poolViewInput.checked = false;
    gardenViewInput.checked = false;
    promCodeInput.value = "";
}

initialize();
function validateAdventureForm() {
    const adventureCategories = document.querySelectorAll('input[name="adventure"]:checked');
    const localAdultDiving = document.getElementById('localAdultDiving');
    const localKidDiving = document.getElementById('localKidDiving');
    const foreignAdultDiving = document.getElementById('foreignAdultDiving');
    const foreignKidDiving = document.getElementById('foreignKidDiving');
    const customerName = document.getElementById('AdventureCustomer').value.trim();
    const customerPhone = document.getElementById('AdventurePhone').value.trim();
    const emailAddr=document.getElementById('EmailAddress').value.trim();
    if (!customerName || !customerPhone || !emailAddr) {
        alert('Please enter your name, phone number and email address.');
        return;
    }

    if (adventureCategories.length === 0) {
        alert('Please select at least one adventure category.');
        return false;
    }

    if (!localAdultDiving.checked && !localKidDiving.checked && !foreignAdultDiving.checked && !foreignKidDiving.checked) {
        alert('Please select the category.');
        return false;
    }
    calculateAdventureCost();
}

function calculateAdventureCost() {
    const localAdultDivingCost = 5000;
    const localKidDivingCost = 2000;
    const foreignAdultDivingCost = 10000;
    const foreignKidDivingCost = 5000;
    const guideAdultCost = 1000;
    const guideKidCost = 500;

    let totalCost = 0;

    const localAdultDiving = document.getElementById('localAdultDiving');
    const localKidDiving = document.getElementById('localKidDiving');
    const foreignAdultDiving = document.getElementById('foreignAdultDiving');
    const foreignKidDiving = document.getElementById('foreignKidDiving');

    const localKidDivingParticipants = parseInt(document.getElementById('localKidDivingParticipants').value) || 0;
    const localAdultDivingParticipants = parseInt(document.getElementById('localAdultDivingParticipants').value) || 0;
    const foreignKidDivingParticipants = parseInt(document.getElementById('foreignKidDivingParticipants').value) || 0;
    const foreignAdultDivingParticipants = parseInt(document.getElementById('foreignAdultDivingParticipants').value) || 0;

    if (localAdultDiving && localAdultDiving.checked) {
        totalCost += localAdultDivingCost * localAdultDivingParticipants;
    }
    if (localKidDiving && localKidDiving.checked) {
        totalCost += localKidDivingCost * localKidDivingParticipants;
    }
    if (foreignAdultDiving && foreignAdultDiving.checked) {
        totalCost += foreignAdultDivingCost * foreignAdultDivingParticipants;
    }
    if (foreignKidDiving && foreignKidDiving.checked) {
        totalCost += foreignKidDivingCost * foreignKidDivingParticipants;
    }
    const guideAdultCheckbox = document.getElementById('guideAdultCheckbox');
    const guideChildrenCheckbox = document.getElementById('guideChildrenCheckbox');

    if (guideAdultCheckbox && guideAdultCheckbox.checked) {
        totalCost += guideAdultCost;
    }

    if (guideChildrenCheckbox && guideChildrenCheckbox.checked) {
        totalCost += guideKidCost;
    }
    document.getElementById('DisplayAdventureBookings').innerHTML = `Total Cost: ${totalCost.toFixed(2)} LKR`;
    document.getElementById('DisplayAdventureBookings').classList.add('show');
}
document.getElementById('AdventureBook').addEventListener('click', validateAdventureForm);

function favbuttonfn2(){
    localStorage.setItem("totalAdvCost", `${totalCost}`);
}