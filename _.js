console.log("_ Javascript Initialized!");

var orgTotal = 0;
document.getElementById("addRow").addEventListener("click", () => {
    document.getElementById("columns").innerHTML = document.getElementById("columns").innerHTML+rowCode;
});

document.getElementById("estimateBB").addEventListener("click", () => {
    var allMoneyVals = document.querySelectorAll(".moneyInput");
    console.log(allMoneyVals);
    allMoneyVals.forEach((row)=>{
        console.log(row.value);
        if(Number(row.value) != NaN){
            orgTotal += Number(row.value);
        }
    });
    document.getElementById("wrapper1").style.display = "none";
    
    document.getElementById("wrapper1").style.display = "none";
    document.getElementById("loadingGIF").style.display = "block";
    
    setTimeout(()=>{
        document.getElementById("loadingGIF").style.display = "none";
        document.getElementById("wrapper2").style.display = "block";
    },500);
        
    /*.toArray().forEach((moneyInput)=>{
        console.log(moneyInput.innerHTML);
    });*/
});


var rowCode = "<tr>\r\n                        <td><input type=\"text\"><\/td>\r\n\r\n                <td>$<input type=\"text\" class=\"moneyInput\"><\/td>\r\n\r\n        <\/tr>";

//document.getElementById("estimateBB").click();