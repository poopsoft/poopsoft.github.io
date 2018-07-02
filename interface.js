<<<<<<< HEAD

abi=[
	{
		"constant": false,
		"inputs": [],
		"name": "divestETH",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "referral",
				"type": "address"
			}
		],
		"name": "investETH",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "reinvestProfit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdrawAffiliateCommision",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "affiliateCommision",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAffiliateCommision",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInvested",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "customer",
				"type": "address"
			}
		],
		"name": "getProfit",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getProfitFromSender",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "investedETH",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "lastInvest",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

contractAddress="0xd089e34694eb023d25aadd3dc8c18337534a10c0";

function investETH(callback){
	eth = document.getElementById("investAmount").value * 1000000000000000000;
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.investETH.getData(getCookie("ref"));
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            console.log('investETH ',eth);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function divestETH(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.divestETH.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('divestETH ',eth);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function reinvestProfit(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.reinvestProfit.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function getInvested(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getInvested.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}

function getAffiliateCommision(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getAffiliateCommision.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}

function withdrawAffiliateCommision(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.withdrawAffiliateCommision.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function getMyProfit(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getProfitFromSender.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}

function withdrawProfit(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.withdraw.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('withdraw ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function getFreeShrimp(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getFreeShrimp.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getFreeShrimp ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function hatchEggs(ref,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.hatchEggs.getData(ref);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('hatchEggs ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function seedMarket(eggs,eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.seedMarket.getData(eggs);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            console.log('seedMarket ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function sellEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.sellEggs.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('sellEggs ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggBuy(eth,contractBalance,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggBuy.getData(eth,contractBalance);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggBuy ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggBuySimple(eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggBuySimple.getData(eth);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggBuySimple ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggSell(eggs,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggSell.getData(eggs);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggSell ',result);
            if(result=='0x'){
                result=0
            }
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateTrade(rt,rs,bs,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateTrade.getData(rt,rs,bs);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateTrade ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function ceoAddress(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.ceoAddress.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('ceoAddress ',result);
            callback(result)
        }
        else{
            console.log('error :(')
        }
    });
}


function claimedEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.claimedEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('claimedEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function devFee(amount,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.devFee.getData(amount);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('devFee ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function EGGS_TO_HATCH_1SHRIMP(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.EGGS_TO_HATCH_1SHRIMP.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('EGGS_TO_HATCH_1SHRIMP ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getBalance(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getBalance.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getBalance ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getEggsSinceLastHatch(adr,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getEggsSinceLastHatch.getData(adr);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getEggsSinceLastHatch ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getMyEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getMyEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getMyEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getMyShrimp(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getMyShrimp.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getMyShrimp ',web3.toDecimal(result));
            if(result=='0x'){
                result=0
            }
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function hatcheryShrimp(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.hatcheryShrimp.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('hatcheryShrimp ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function lastHatch(address,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.lastHatch.getData(address);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('lastHatch ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function marketEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.marketEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('marketEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}



=======

abi=[
	{
		"constant": false,
		"inputs": [],
		"name": "divestETH",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "referral",
				"type": "address"
			}
		],
		"name": "investETH",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "reinvestProfit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdrawAffiliateCommision",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "affiliateCommision",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAffiliateCommision",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInvested",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "customer",
				"type": "address"
			}
		],
		"name": "getProfit",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getProfitFromSender",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "investedETH",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "lastInvest",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

contractAddress="0xd089e34694eb023d25aadd3dc8c18337534a10c0";

function investETH(callback){
	eth = document.getElementById("investAmount").value * 1000000000000000000;
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.investETH.getData(getCookie("ref"));
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            console.log('investETH ',eth);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function divestETH(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.divestETH.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('divestETH ',eth);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function reinvestProfit(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.reinvestProfit.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function getInvested(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getInvested.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}

function getAffiliateCommision(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getAffiliateCommision.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}

function withdrawAffiliateCommision(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.withdrawAffiliateCommision.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function getMyProfit(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getProfitFromSender.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}

function withdrawProfit(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.withdraw.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('withdraw ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}

function getFreeShrimp(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getFreeShrimp.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getFreeShrimp ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function hatchEggs(ref,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.hatchEggs.getData(ref);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('hatchEggs ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function seedMarket(eggs,eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.seedMarket.getData(eggs);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            console.log('seedMarket ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function sellEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.sellEggs.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('sellEggs ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggBuy(eth,contractBalance,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggBuy.getData(eth,contractBalance);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggBuy ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggBuySimple(eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggBuySimple.getData(eth);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggBuySimple ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggSell(eggs,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggSell.getData(eggs);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggSell ',result);
            if(result=='0x'){
                result=0
            }
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateTrade(rt,rs,bs,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateTrade.getData(rt,rs,bs);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateTrade ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function ceoAddress(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.ceoAddress.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('ceoAddress ',result);
            callback(result)
        }
        else{
            console.log('error :(')
        }
    });
}


function claimedEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.claimedEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('claimedEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function devFee(amount,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.devFee.getData(amount);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('devFee ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function EGGS_TO_HATCH_1SHRIMP(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.EGGS_TO_HATCH_1SHRIMP.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('EGGS_TO_HATCH_1SHRIMP ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getBalance(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getBalance.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getBalance ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getEggsSinceLastHatch(adr,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getEggsSinceLastHatch.getData(adr);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getEggsSinceLastHatch ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getMyEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getMyEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getMyEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getMyShrimp(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getMyShrimp.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getMyShrimp ',web3.toDecimal(result));
            if(result=='0x'){
                result=0
            }
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function hatcheryShrimp(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.hatcheryShrimp.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('hatcheryShrimp ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function lastHatch(address,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.lastHatch.getData(address);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('lastHatch ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function marketEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.marketEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('marketEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}



>>>>>>> 49dd3ba483dfe9ae8218541cc41a439fe3ce1043
