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
			SuperCard游戏为了做到公平公正，引入了一个防止他人大量购买Card数量的抑制机制，在游戏萌芽期（总购买钥匙金额小于100ETH），当有玩家购买钥匙金额超过1ETH时，将触发这个机制。抑制机制触发后，每个玩家购买钥匙总金额不得超过1ETH，这也是为了保护后期进入游戏的玩家，防止早期有玩家大量买入钥匙导致游戏结束后分红大量流入这些玩家。在游戏总购买钥匙金额超过100ETH后，游戏将进入繁荣期，每个玩家能够购买Card数量将随着游戏总钥匙卖出金额增加。根据这个机制，可以尽可能保证每个玩家都能公平的获得收益。例如，在游戏萌芽期，Tom买入了2ETH的Card，这个时候，将触发抑制机制，每个玩家购买Card金额不得超过1ETH，当游戏总钥匙卖出金额超过100ETH时，游戏进入繁荣期，这个时候，每个人购买Card数量将逐渐增加。
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
	// 	zh: '<div style="overflow-wrap: break-word; word-wrap:break-word; word-break: break-all; width: 250px;">想最早上车并尽快收取红利？直接使用<b>imToken</b>转账，参与游戏。imToken支付方法：</p><p>1. 扫描二维码。<br />2. 打开<span style="color: red;">高级模式</span>，填入eth量（例如：1），gas价格20，gas limit 1000000 。<br />3. 填入data数据：0x8f38f30900000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000002。<br />4. 完成。</p>',
	// 	en: '<div style="overflow-wrap: break-word; word-wrap:break-word; word-break: break-all; width: 250px;">How to use imToken</b><p>1. Scan QR code<br />2. Enter the amount of eth, gas 20 and gas limit 1000000<br />3. Fill data field with 0x8f38f30900000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000002<br />4. Done</div>'
	// };
    //
	// var imtokenIntroWithdraw = {
	// 	zh: '<div style="overflow-wrap: break-word; word-wrap:break-word; word-break: break-all; width: 250px;">imToken提现方式：</p><p>1. 扫描二维码。<br />2. 打开<span style="color: red;">高级模式</span>，填入eth量为0，gas价格20，gas limit 1000000 。<br />3. 填入data数据：0x3ccfd60b。<br />4. 完成。</p>',
	// 	en: '<div style="overflow-wrap: break-word; word-wrap:break-word; word-break: break-all; width: 250px;">Withdraw using imToken</b><p>1. Scan QR code<br />2. Set the amount of eth=0, gas 20 and gas limit 1000000<br />3. Fill data field with 0x3ccfd60b<br />4. Done</div>'
	// };
    //
	// window.qrcodeUiWithdraw = '<table width="100%"><tr><td><div id="qrcode" style="width:180px;height:180px;"><canvas id="qrwithdraw" style="width:180px;height:180px;"></canvas></div><!--<input type="text" id="eth_textbox" onclick="selectandcopy();" value="0x29488e24cFdAA52a0b837217926C0c0853Db7962" readonly style="width:180px;" />--></td><td style="text-shadow: none;text-align:left">' + imtokenIntroWithdraw[window.lang] + '</td></tr></table>';


	// if(!window.web3){
	// 	window.qrcodeUi = window.lang == 'zh'? '<div>二维码需要安装Metamask浏览器插件</div>' : '<div>Browser extension "Metamask" is required.</div>';
	// } else {
	// }
	// window.qrcodeUi = '<table width="100%"><tr><td><div id="qrcode" style="width:180px;height:180px;"><canvas id="qr" style="width:180px;height:180px;"></canvas></div><div><input type="text" id="eth_textbox" onclick="selectandcopy();" value="0x29488e24cFdAA52a0b837217926C0c0853Db7962" readonly style="width:180px;" /></div></td><td style="text-shadow: none;text-align:left">' + imtokenIntro[window.lang] + '</td></tr></table>';
	// if(window.lang == 'zh'){
	// 	window.languageSwitcher = '<div class="col-auto"><span class="lead small"><a href="//en.superc.io/play">En</a></span></div><div class="col-auto"><span class="lead small"><a href="https://t.me/SuperCard" target="_blank">电报群</a></span></div><div class="col-auto"><span class="lead small"><a href="http://weibo.com/u/6585834305" target="_blank">微博</a></span></div><div class="col-auto"><span class="lead small"><a href="manual.pdf" target="_blank">教程</a></span></div><div class="col-auto"><span class="lead small"><a href="https://etherscan.io/address/0x29488e24cFdAA52a0b837217926C0c0853Db7962#code" target="_blank">合约</a></span></div>';
	// } else {
	// 	window.languageSwitcher = '<div class="col-auto"><span class="lead small"><a href="//www.superc.io/play">中文</a></div><div class="col-auto"><span class="lead small"><a href="https://t.me/SuperCard" target="_blank">Telegram</a></span></div><div class="col-auto"><span class="lead small"><a href="http://weibo.com/u/6585834305" target="_blank">Weibo</a></span></div><div class="col-auto"><span class="lead small"><a href="https://etherscan.io/address/0x29488e24cFdAA52a0b837217926C0c0853Db7962#code" target="_blank">Contract</a></span></div>';
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
	var address = '0x29488e24cFdAA52a0b837217926C0c0853Db7962';
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