account_info:		// 查看本账户XRP余额和序列号
  "Balance": "51066996",	// 账户余额
  "Sequence": 57027897,	    // 账户序列号，每次交易后加1

account_lines:		// 查看本账户各币种余额
		"account": "r9rFyy3qcEwYCoT4gKff669rosT7ZV9eRV",	// 本账户
	{
        "account": "rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h",		// issuer
        "balance": "0.0006962",		// 币种余额
        "currency": "ETH",			// 币种名
    },
    {
        "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
        "balance": "1.274875119999985",
        "currency": "USD",
    },
    {
        "account": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
        "balance": "0.0000199",
        "currency": "BTC",
    },

book_offers:	// 查询各币种的买卖单，例如 XRP/USD
 	"Sequence": 1088136,		// 挂单人的交易的序列号
    "TakerGets": "100000000",	// 交易方获得100个XRP
    "TakerPays": {
         "currency": "USD",	
         "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
         "value": "22.577152"	// 交易方需支付22.577152USD
    },

account_offers:		// 查看该账户所挂的单
	"account": "r9rFyy3qcEwYCoT4gKff669rosT7ZV9eRV",
    "offers": [
      	{
        "seq": 57027883,	// 挂单人可凭此序列号取消挂单
        "taker_gets": "203000",
        "taker_pays": {
          "currency": "USD",
          "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
          "value": "0.203"
        }
      }
    ],

TransactionType:
	Payment: 从一个account转XRP币到另一个account。
	OfferCreate: 下订单，XRP交换为USD, 或者USD交换为XRP。
	OfferCancel: 取消之前下的订单。

Known issuer：
	USD: rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B	Bitstamp
	ETH: rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h	Gatehub Fifth
	BTC: rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B  Bitstamp


交易时，价格需选择合适:
1XRP交换0.0006962个ETH,即使有高价0.000697，也不会以高价成交。
如果挂单时，刚好0.0006962个ETH已成交完，则此次挂单将会等