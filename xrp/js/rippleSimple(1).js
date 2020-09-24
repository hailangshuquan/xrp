// 以助记词生成私钥(Secret key)和地址(Ripple address)
function createAddressWithMnemonic(words){
	
	// 1 初始化助记词
	var mnemonics = { "english": new Mnemonic("english") };
	var mnemonic = mnemonics["english"];
	// 2 生成种子 512bit
	var seed = mnemonic.toSeed(words, '');
	// 3 取seed前面的256bit
	var seed256 = seed ? seed.slice(0, 32) : brorand(32);
	// 4 生成私钥
	var secret = Base58Utils.encode_base_check(33, sjcl.codec.bytes.fromBits(sjcl.codec.hex.toBits(seed256)))
	// 5 生成地址
	var pub = (new RippleAddress(secret)).getAddress();

	return '{"privateKey":"'+secret+'", "address":"'+pub+'"}'
	
}

// 以私钥(Secret key)生成地址(Ripple address)
function createAddressWithPrivateKey(privateKey){
	var pub = (new RippleAddress(privateKey)).getAddress();
	return '{"privateKey":"'+privateKey+'", "address":"'+pub+'"}'
}

// 以私钥签名交易
function signTransaction(secret, tx_in) {
	var tx_JSON = JSON.parse(tx_in);
	var tx = new ripple.Transaction();
	tx.tx_json = tx_JSON;
	tx._secret = secret;
	tx.complete();
	var unsigned = tx.serialize().to_hex();
	tx.sign();
	return (tx.serialize().to_hex());
}