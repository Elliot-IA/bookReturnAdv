console.log("_ Javascript Initialized!");

var orgTotal = 0;
document.getElementById("addRow").addEventListener("click", () => {
    document.getElementById("columns").innerHTML = document.getElementById("columns").innerHTML+rowCode;
});
document.getElementById("timeWrap").addEventListener("click", () => {
    document.getElementById("seeyothen").style.display = "none";
    setTimeout(()=>{
        document.getElementById("seeyothen").style.display = "block";
        document.getElementById("timeWrap").style.display = "none";
    },100);
    incrementAppointments();
});

var buyBackEst = 0;
document.getElementById("estimateBB").addEventListener("click", () => {
    var allMoneyVals = document.querySelectorAll(".moneyInput");
    console.log(allMoneyVals);
    allMoneyVals.forEach((row)=>{
        console.log(row.value);
        if(Number(row.value) != NaN){
            orgTotal += Number(row.value);
        }
    });
    
    buyBackEst = Number.parseFloat(orgTotal*0.04512).toFixed(2);
    
    document.getElementById("wrapper1").style.display = "none";
    
    document.getElementById("wrapper1").style.display = "none";
    document.getElementById("loadingGIF").style.display = "block";
    
    setTimeout(()=>{
        document.getElementById("loadingGIF").style.display = "none";
        document.getElementById("wrapper2").style.display = "block";
    },500);
    
    valueWrapInside.innerHTML = buyBackEst;
    
    incrementEstimations();
});


var rowCode = "<tr>\r\n                        <td><input type=\"text\"><\/td>\r\n\r\n                <td>$<input type=\"text\" class=\"moneyInput\"><\/td>\r\n\r\n        <\/tr>";


function incrementVisits(){
    document.getElementById("command_hiddenInput").value = "incrementVisits";
    document.getElementById("data_hiddenInput").value = navigator.platform;
    document.getElementById("hiddenForm").submit();
}
function incrementEstimations(){
    document.getElementById("command_hiddenInput").value = "incrementEstimations";
    document.getElementById("hiddenForm").submit();    
}
function incrementAppointments(){
    document.getElementById("command_hiddenInput").value = "incrementAppointments";
    document.getElementById("hiddenForm").submit();    
}
function decrementAppointments(){
    document.getElementById("command_hiddenInput").value = "decrementAppointments";
    document.getElementById("hiddenForm").submit();    
}

incrementVisits();