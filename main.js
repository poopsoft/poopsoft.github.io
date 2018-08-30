document.addEventListener('DOMContentLoaded', function(){
	var masternode = getURL(window.location.search.substring(1)).ref;
    if(masternode){
      setCookie("ref", masternode);
    }else{
    	setCookie("ref", "0x1");
    }
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    var caLength = ca.length;
    for(var i = 0; i < caLength; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function getURL(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}

function copyToClipboard() {
    var text = "https//SmartEtherMiner.io/?ref=" + web3.eth.accounts[0];
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

document.getElementById("reflink").innerHTML = "https://SmartEtherMiner.io/?ref=" + web3.eth.accounts[0];

tick();

function tick(){
	getMyProfit(updateProfit);
	getInvested(updateInvested);
	getAffiliateCommision(updateAffiliateCommision)
	setTimeout("tick()", 1000);
}

function updateProfit(data){
    if(data < 1000000000000){
        document.getElementById("activeProfit").innerHTML = "0.00000000" + " ETH";
    }
	else{
        document.getElementById("activeProfit").innerHTML = formatETH(data/1000000000000000000) + " ETH";
    }
}

function updateInvested(data){
	document.getElementById("activeInvestment").innerHTML = formatETH(data/1000000000000000000) + " ETH";
}

function updateAffiliateCommision(data){
	document.getElementById("activeCommision").innerHTML = formatETH(data/1000000000000000000) + " ETH";
}

function formatETH(amount){
    amount = amount.toString();

    var hasPeriod = !(amount.indexOf(".") === -1);

    if(!hasPeriod){
        amount += ".";
        for(i = 0; 8 > i; i++){
            amount += "0";
        }
    }
    else{
        var afterPeriodCount = 0;
        var beforePeriodCount = 0;
        var passedPeriod = false;
        for(var i = 0; amount.length > i; i++){
            if(passedPeriod){
                afterPeriodCount++;
            }
            else{
                beforePeriodCount++;
            }
            if(amount.charAt(i) === "."){
                passedPeriod = true;
            }
        }
        for(i = 0; 8 - afterPeriodCount > i; i++){
            amount += "0";
        }
        var allowedLenghth = 8;
        while(amount.length > allowedLenghth + beforePeriodCount){
            amount = amount.slice(0, -1);
        }
    }

    return amount;
}
