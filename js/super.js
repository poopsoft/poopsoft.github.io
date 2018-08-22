$(superInit);



function superInit(){
	$('label.switch').parent().hide();
	jQuery('.tutorial').hide();
	window.tutorial_mode = false;
	window.testInjectLanguage = setInterval(function(){
		var test = $('ul.w-100');
		if(!test.length){
			return;
		}
		$('label.switch').parent().hide();
		clearInterval(testInjectLanguage);
		$('a.navbar-brand').html('<!--img src="/img/dark-logo.png" style="height:1.5rem;" /--><img src="/img/' + window.lang + '.png" style="height:2.5rem" />')
		test.append(languageSwitcher);
		generateQrcode();
	}, 2000);

	window.testPlayerTab = setInterval(function(){
		var test = $('#playerTab');
		if(!test.length){
			return;
		}
		$('#playerTab').parent().hide();
		clearInterval(testPlayerTab);
	}, 2000);

	
	window.testStatTab = setInterval(function(){
		var test = $('#statTabs');
		if(!test.length){
			return;
		}
		clearInterval(testStatTab);
		$('#statTabs').parent().append(`
			<div class="tab-pane fade active show" id="statsArea" role="tabpanel" aria-labelledby="statsArea">
			<div class="jumbotron jumbotron-adjust text-light bg-dark jumboshade tab-rounded">
			<div class="row">
			<div class="col">
			<p class="lead nomarginb">公告</p>
			</div>
			</div>
			<hr>
			<div class="jumbotron jumbotron-adjust teamscore">
			<div class="row nomarginb">
			<div class="col-auto" id="announcement" style="overflow-wrap: break-word; word-wrap:break-word; word-break: break-all; width: 250px;">
			In order to be fair and equitable, SuperCard games introduce a suppression mechanism that prevents others from purchasing a large number of cards. In the game sprouting period (the total purchase key amount is less than 100 ETH), this mechanism will be triggered when a player purchases a key amount exceeding 1 ETH. After the suppression mechanism is triggered, the total amount of keys purchased by each player must not exceed 1 ETH. This is also to protect the players who enter the game later. It prevents the players from buying a lot of keys in the early stage, and the dividends flow into the players after the game ends. After the game's total purchase key amount exceeds 100 ETH, the game will enter a boom period, and each player's ability to purchase a Card will increase as the game's total key sells. According to this mechanism, every player can be guaranteed to get a fair return. For example, during the game's bud, Tom bought a 2ETH Card. At this time, the suppression mechanism will be triggered. Each player can purchase a Card amount of no more than 1 ETH. When the game's total key sales amount exceeds 100 ETH, the game enters a boom period. At the time, the number of cards purchased by each person will gradually increase.。
			</div>
			</div>
			</div>
			</div>
			</div>`);
		console.log('test', test);
		var tmp = $('#announcement');
		tmp.width(tmp.parent().width());
	}, 2000);

	// $.getScript('/js/qrcode.min.js', afterLoadQrcode);
	$.getScript('/js/qrious.min.js', afterLoadQrcode);

	// var imtokenIntro = {
	// 	zh: '<div style="overflow-wrap: break-word; word-wrap:break-word; word-break: break-all; width: 250px;">I want to get on the bus first and collect the bonus as soon as possible？Use directly<b>imToken</b>Transfer, participate in the game。imTokenpayment method：</p><p>1. Scan QR code。<br />2. 打开<span style="color: red;">Advanced mode</span>，Fill in the amount of eth (for example：1），Gas price20，gas limit 1000000 。<br />3. Fill in the data data：0x8f38f30900000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000002。<br />4. 完成。</p>',
	// 	en: '<div style="overflow-wrap: break-word; word-wrap:break-word; word-break: break-all; width: 250px;">How to use imToken</b><p>1. Scan QR code<br />2. Enter the amount of eth, gas 20 and gas limit 1000000<br />3. Fill data field with 0x8f38f30900000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000002<br />4. Done</div>'
	// };
    //
	// var imtokenIntroWithdraw = {
	// 	zh: '<div style="overflow-wrap: break-word; word-wrap:break-word; word-break: break-all; width: 250px;">imTokenwithdrawal method：</p><p>1. Scan QR code。<br />2. 打开<span style="color: red;">Advanced mode</span>，Fill in eth amount is 0, gas price 20，gas limit 1000000 。<br />3. Fill in the data data：0x3ccfd60b。<br />4. carry out。</p>',
	// 	en: '<div style="overflow-wrap: break-word; word-wrap:break-word; word-break: break-all; width: 250px;">Withdraw using imToken</b><p>1. Scan QR code<br />2. Set the amount of eth=0, gas 20 and gas limit 1000000<br />3. Fill data field with 0x3ccfd60b<br />4. Done</div>'
	// };
    //
	// window.qrcodeUiWithdraw = '<table width="100%"><tr><td><div id="qrcode" style="width:180px;height:180px;"><canvas id="qrwithdraw" style="width:180px;height:180px;"></canvas></div><!--<input type="text" id="eth_textbox" onclick="selectandcopy();" value="0x4D2c5308F1d9b42BDC398D215713BBC9E0738A0a" readonly style="width:180px;" />--></td><td style="text-shadow: none;text-align:left">' + imtokenIntroWithdraw[window.lang] + '</td></tr></table>';


	// if(!window.web3){
	// 	window.qrcodeUi = window.lang == 'zh'? '<div>二维码需要安装Metamask浏览器插件</div>' : '<div>Browser extension "Metamask" is required.</div>';
	// } else {
	// }
	// window.qrcodeUi = '<table width="100%"><tr><td><div id="qrcode" style="width:180px;height:180px;"><canvas id="qr" style="width:180px;height:180px;"></canvas></div><div><input type="text" id="eth_textbox" onclick="selectandcopy();" value="0x4D2c5308F1d9b42BDC398D215713BBC9E0738A0a" readonly style="width:180px;" /></div></td><td style="text-shadow: none;text-align:left">' + imtokenIntro[window.lang] + '</td></tr></table>';
	// if(window.lang == 'zh'){
	// 	window.languageSwitcher = '<div class="col-auto"><span class="lead small"><a href="//en.superc.io/play">En</a></span></div><div class="col-auto"><span class="lead small"><a href="https://t.me/SuperCard" target="_blank">电报群</a></span></div><div class="col-auto"><span class="lead small"><a href="http://weibo.com/u/6585834305" target="_blank">微博</a></span></div><div class="col-auto"><span class="lead small"><a href="manual.pdf" target="_blank">教程</a></span></div><div class="col-auto"><span class="lead small"><a href="https://etherscan.io/address/0x4D2c5308F1d9b42BDC398D215713BBC9E0738A0a#code" target="_blank">合约</a></span></div>';
	// } else {
	// 	window.languageSwitcher = '<div class="col-auto"><span class="lead small"><a href="//www.superc.io/play">中文</a></div><div class="col-auto"><span class="lead small"><a href="https://t.me/SuperCard" target="_blank">Telegram</a></span></div><div class="col-auto"><span class="lead small"><a href="http://weibo.com/u/6585834305" target="_blank">Weibo</a></span></div><div class="col-auto"><span class="lead small"><a href="https://etherscan.io/address/0x4D2c5308F1d9b42BDC398D215713BBC9E0738A0a#code" target="_blank">Contract</a></span></div>';
	// }
}

function selectandcopy(){
	$('#eth_textbox').focus().select();
	document.execCommand('copy');
}

function afterLoadQrcode(){
	window.testInject = setInterval(function(){
		var test = $('#purchase');
		if(!test.length){
			return;
		}
		bindEvents();
		clearInterval(testInject);
		test.after(qrcodeUi);
		$('#withdrawEarnings').after(qrcodeUiWithdraw);
		var url = makeUrl(val, 0);
		var qr = new QRious({
			element: document.getElementById('qrwithdraw'),
			value: url
		});
		generateQrcode();
	}, 2000);
}

function bindEvents(){
	$('#tixToBuy, #ethToSpend')
	.change(generateQrcode)
	.keyup(generateQrcode);
}

function makeUrl(value, gas){
	var address = '0x4D2c5308F1d9b42BDC398D215713BBC9E0738A0a';
	value = value.match(/(\d+\.\d+)/);
	if(value && value.length){
		value = value[0];
	} else {
		value = 0;
	}
	var unitPrice = $('#tixQuotation').text().match(/(\d+\.\d+)/);
	if(unitPrice && unitPrice.length){
		unitPrice = unitPrice[0];
	} else {
		unitPrice = 1;
	}
	var tmpval = ((unitPrice - '0.0') * value).toFixed(8);
	return 'ethereum:' + address;
	// var tmp = web3.eth.iban.fromAddress(address).toString();
	// return 'iban:' + tmp + '?amount=' + tmpval + '&token=ETH';
}

function generateQrcode(){
	val = $('#tixToBuy').val() || $('#ethToSpend').val(); 
	var url = makeUrl(val, 20);
	console.log(url);

	var qr = new QRious({
		element: document.getElementById('qr'),
		value: url
	});
}