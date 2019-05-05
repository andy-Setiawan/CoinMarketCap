import { GETCOIN, GETINFO, SETLOADING } from "../types/ActionType";

const initialState = {
  isLoading:true,
  info: "",
  coin: [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      slug: "bitcoin",
      circulating_supply: 17682087,
      total_supply: 17682087,
      max_supply: 21000000,
      date_added: "2013-04-28T00:00:00.000Z",
      num_market_pairs: 7394,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 1,
      last_updated: "2019-05-04T10:15:25.000Z",
      quote: {
        USD: {
          price: 5789.75188897,
          volume_24h: 16746723560.7309,
          percent_change_1h: -0.586694,
          percent_change_24h: -0.0411105,
          percent_change_7d: 10.1319,
          market_cap: 102374896609.18188,
          last_updated: "2019-05-04T10:15:25.000Z"
        }
      }
    },
    {
      id: 1027,
      name: "Ethereum",
      symbol: "ETH",
      slug: "ethereum",
      circulating_supply: 105926512.6241,
      total_supply: 105926512.6241,
      max_supply: null,
      date_added: "2015-08-07T00:00:00.000Z",
      num_market_pairs: 5265,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 2,
      last_updated: "2019-05-04T10:15:20.000Z",
      quote: {
        USD: {
          price: 165.605756962,
          volume_24h: 6361010709.32269,
          percent_change_1h: -0.23713,
          percent_change_24h: -1.4499,
          percent_change_7d: 5.80132,
          market_cap: 17542040305.458927,
          last_updated: "2019-05-04T10:15:20.000Z"
        }
      }
    },
    {
      id: 52,
      name: "XRP",
      symbol: "XRP",
      slug: "ripple",
      circulating_supply: 42087046846,
      total_supply: 99991639209,
      max_supply: 100000000000,
      date_added: "2013-08-04T00:00:00.000Z",
      num_market_pairs: 386,
      tags: [],
      platform: null,
      cmc_rank: 3,
      last_updated: "2019-05-04T10:16:02.000Z",
      quote: {
        USD: {
          price: 0.305489965666,
          volume_24h: 1116199663.59728,
          percent_change_1h: -0.577364,
          percent_change_24h: -1.20077,
          percent_change_7d: 2.88461,
          market_cap: 12857170495.967875,
          last_updated: "2019-05-04T10:16:02.000Z"
        }
      }
    },
    {
      id: 1831,
      name: "Bitcoin Cash",
      symbol: "BCH",
      slug: "bitcoin-cash",
      circulating_supply: 17763400,
      total_supply: 17763400,
      max_supply: 21000000,
      date_added: "2017-07-23T00:00:00.000Z",
      num_market_pairs: 316,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 4,
      last_updated: "2019-05-04T10:16:04.000Z",
      quote: {
        USD: {
          price: 287.984369035,
          volume_24h: 2234359565.35554,
          percent_change_1h: -1.24341,
          percent_change_24h: -0.710232,
          percent_change_7d: 9.35841,
          market_cap: 5115581540.916319,
          last_updated: "2019-05-04T10:16:04.000Z"
        }
      }
    },
    {
      id: 2,
      name: "Litecoin",
      symbol: "LTC",
      slug: "litecoin",
      circulating_supply: 61620632.6205068,
      total_supply: 61620632.6205068,
      max_supply: 84000000,
      date_added: "2013-04-28T00:00:00.000Z",
      num_market_pairs: 544,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 5,
      last_updated: "2019-05-04T10:16:03.000Z",
      quote: {
        USD: {
          price: 77.7210945345,
          volume_24h: 3345442673.52435,
          percent_change_1h: -1.01094,
          percent_change_24h: -1.22842,
          percent_change_7d: 7.11814,
          market_cap: 4789223013.174104,
          last_updated: "2019-05-04T10:16:03.000Z"
        }
      }
    },
    {
      id: 1765,
      name: "EOS",
      symbol: "EOS",
      slug: "eos",
      circulating_supply: 944347815.7692,
      total_supply: 1044347819.4343,
      max_supply: null,
      date_added: "2017-07-01T00:00:00.000Z",
      num_market_pairs: 307,
      tags: [],
      platform: null,
      cmc_rank: 6,
      last_updated: "2019-05-04T10:16:04.000Z",
      quote: {
        USD: {
          price: 4.93783102965,
          volume_24h: 2089178061.92375,
          percent_change_1h: -0.703751,
          percent_change_24h: -2.36498,
          percent_change_7d: 4.71214,
          market_cap: 4663029947.487357,
          last_updated: "2019-05-04T10:16:04.000Z"
        }
      }
    },
    {
      id: 1839,
      name: "Binance Coin",
      symbol: "BNB",
      slug: "binance-coin",
      circulating_supply: 141175490.242,
      total_supply: 189175490.242,
      max_supply: null,
      date_added: "2017-07-25T00:00:00.000Z",
      num_market_pairs: 145,
      tags: [],
      platform: null,
      cmc_rank: 7,
      last_updated: "2019-05-04T10:16:03.000Z",
      quote: {
        USD: {
          price: 23.0588962815,
          volume_24h: 195846471.388,
          percent_change_1h: -0.706568,
          percent_change_24h: -2.01771,
          percent_change_7d: 2.84527,
          market_cap: 3255350986.9801936,
          last_updated: "2019-05-04T10:16:03.000Z"
        }
      }
    },
    {
      id: 825,
      name: "Tether",
      symbol: "USDT",
      slug: "tether",
      circulating_supply: 2780329381.93021,
      total_supply: 3220057493.36343,
      max_supply: null,
      date_added: "2015-02-25T00:00:00.000Z",
      num_market_pairs: 2240,
      tags: [],
      platform: {
        id: 83,
        name: "Omni",
        symbol: "OMNI",
        slug: "omni",
        token_address: "31"
      },
      cmc_rank: 8,
      last_updated: "2019-05-04T10:15:10.000Z",
      quote: {
        USD: {
          price: 1.00445487384,
          volume_24h: 14829470096.6631,
          percent_change_1h: 0.174253,
          percent_change_24h: -0.274895,
          percent_change_7d: 1.17049,
          market_cap: 2792715398.5603547,
          last_updated: "2019-05-04T10:15:10.000Z"
        }
      }
    },
    {
      id: 512,
      name: "Stellar",
      symbol: "XLM",
      slug: "stellar",
      circulating_supply: 19135206780.936,
      total_supply: 104942387316.79,
      max_supply: null,
      date_added: "2014-08-05T00:00:00.000Z",
      num_market_pairs: 253,
      tags: [],
      platform: null,
      cmc_rank: 9,
      last_updated: "2019-05-04T10:16:02.000Z",
      quote: {
        USD: {
          price: 0.101143323012,
          volume_24h: 219210445.917697,
          percent_change_1h: -0.524926,
          percent_change_24h: -1.44209,
          percent_change_7d: 2.07406,
          market_cap: 1935398400.3456228,
          last_updated: "2019-05-04T10:16:02.000Z"
        }
      }
    },
    {
      id: 2010,
      name: "Cardano",
      symbol: "ADA",
      slug: "cardano",
      circulating_supply: 25927070538,
      total_supply: 31112483745,
      max_supply: 45000000000,
      date_added: "2017-10-01T00:00:00.000Z",
      num_market_pairs: 80,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 10,
      last_updated: "2019-05-04T10:16:03.000Z",
      quote: {
        USD: {
          price: 0.0690476443902,
          volume_24h: 55431111.9336316,
          percent_change_1h: -0.600531,
          percent_change_24h: -2.24317,
          percent_change_7d: -0.388459,
          market_cap: 1790203146.5874555,
          last_updated: "2019-05-04T10:16:03.000Z"
        }
      }
    },
    {
      id: 1958,
      name: "TRON",
      symbol: "TRX",
      slug: "tron",
      circulating_supply: 66682072191.4,
      total_supply: 99281283754.3,
      max_supply: null,
      date_added: "2017-09-13T00:00:00.000Z",
      num_market_pairs: 221,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 11,
      last_updated: "2019-05-04T10:16:04.000Z",
      quote: {
        USD: {
          price: 0.0236319474141,
          volume_24h: 718232629.904105,
          percent_change_1h: -1.03423,
          percent_change_24h: -2.11071,
          percent_change_7d: 0.136146,
          market_cap: 1575827223.4903848,
          last_updated: "2019-05-04T10:16:04.000Z"
        }
      }
    },
    {
      id: 328,
      name: "Monero",
      symbol: "XMR",
      slug: "monero",
      circulating_supply: 16959572.9385942,
      total_supply: 16959572.9385942,
      max_supply: null,
      date_added: "2014-05-21T00:00:00.000Z",
      num_market_pairs: 127,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 12,
      last_updated: "2019-05-04T10:16:01.000Z",
      quote: {
        USD: {
          price: 66.7861588622,
          volume_24h: 36495687.5445478,
          percent_change_1h: 0.546752,
          percent_change_24h: 1.12439,
          percent_change_7d: 7.33429,
          market_cap: 1132664732.5120203,
          last_updated: "2019-05-04T10:16:01.000Z"
        }
      }
    },
    {
      id: 131,
      name: "Dash",
      symbol: "DASH",
      slug: "dash",
      circulating_supply: 8789225.01160363,
      total_supply: 8789225.01160363,
      max_supply: 18900000,
      date_added: "2014-02-14T00:00:00.000Z",
      num_market_pairs: 224,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 13,
      last_updated: "2019-05-04T10:16:01.000Z",
      quote: {
        USD: {
          price: 120.788202153,
          volume_24h: 272943555.472387,
          percent_change_1h: -0.566212,
          percent_change_24h: -0.165878,
          percent_change_7d: 10.5545,
          market_cap: 1061634687.469783,
          last_updated: "2019-05-04T10:16:01.000Z"
        }
      }
    },
    {
      id: 3794,
      name: "Cosmos",
      symbol: "ATOM",
      slug: "cosmos",
      circulating_supply: 190688439.2,
      total_supply: 237928230.821588,
      max_supply: null,
      date_added: "2019-03-14T00:00:00.000Z",
      num_market_pairs: 48,
      tags: [],
      platform: null,
      cmc_rank: 14,
      last_updated: "2019-05-04T10:16:09.000Z",
      quote: {
        USD: {
          price: 5.19846757991,
          volume_24h: 155875804.569957,
          percent_change_1h: -1.26162,
          percent_change_24h: 5.6923,
          percent_change_7d: 47.0755,
          market_cap: 991287669.0448391,
          last_updated: "2019-05-04T10:16:09.000Z"
        }
      }
    },
    {
      id: 3602,
      name: "Bitcoin SV",
      symbol: "BSV",
      slug: "bitcoin-sv",
      circulating_supply: 17758623.4121145,
      total_supply: 17758623.4121145,
      max_supply: 21000000,
      date_added: "2018-11-09T00:00:00.000Z",
      num_market_pairs: 128,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 15,
      last_updated: "2019-05-04T10:16:09.000Z",
      quote: {
        USD: {
          price: 53.654090736,
          volume_24h: 113125172.369013,
          percent_change_1h: 0.353846,
          percent_change_24h: -1.59779,
          percent_change_7d: 0.0975242,
          market_cap: 952822791.9000454,
          last_updated: "2019-05-04T10:16:09.000Z"
        }
      }
    },
    {
      id: 2011,
      name: "Tezos",
      symbol: "XTZ",
      slug: "tezos",
      circulating_supply: 661016222.410336,
      total_supply: 793041838.023046,
      max_supply: null,
      date_added: "2017-10-02T00:00:00.000Z",
      num_market_pairs: 27,
      tags: [],
      platform: null,
      cmc_rank: 16,
      last_updated: "2019-05-04T10:16:03.000Z",
      quote: {
        USD: {
          price: 1.2552265211,
          volume_24h: 4938069.89633327,
          percent_change_1h: -0.00488139,
          percent_change_24h: -3.80189,
          percent_change_7d: 3.66996,
          market_cap: 829725093.2467899,
          last_updated: "2019-05-04T10:16:03.000Z"
        }
      }
    },
    {
      id: 1720,
      name: "IOTA",
      symbol: "MIOTA",
      slug: "iota",
      circulating_supply: 2779530283,
      total_supply: 2779530283,
      max_supply: 2779530283,
      date_added: "2017-06-13T00:00:00.000Z",
      num_market_pairs: 37,
      tags: [],
      platform: null,
      cmc_rank: 17,
      last_updated: "2019-05-04T10:16:03.000Z",
      quote: {
        USD: {
          price: 0.297683023409,
          volume_24h: 21156143.1694251,
          percent_change_1h: 0.183177,
          percent_change_24h: -0.240812,
          percent_change_7d: 12.9715,
          market_cap: 827418978.3003134,
          last_updated: "2019-05-04T10:16:03.000Z"
        }
      }
    },
    {
      id: 1321,
      name: "Ethereum Classic",
      symbol: "ETC",
      slug: "ethereum-classic",
      circulating_supply: 110200229,
      total_supply: 110200229,
      max_supply: 210000000,
      date_added: "2016-07-24T00:00:00.000Z",
      num_market_pairs: 191,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 18,
      last_updated: "2019-05-04T10:16:03.000Z",
      quote: {
        USD: {
          price: 5.92036931623,
          volume_24h: 485845782.213938,
          percent_change_1h: -0.614443,
          percent_change_24h: -0.94665,
          percent_change_7d: 7.69042,
          market_cap: 652426054.4131194,
          last_updated: "2019-05-04T10:16:03.000Z"
        }
      }
    },
    {
      id: 1376,
      name: "NEO",
      symbol: "NEO",
      slug: "neo",
      circulating_supply: 65000000,
      total_supply: 100000000,
      max_supply: 100000000,
      date_added: "2016-09-08T00:00:00.000Z",
      num_market_pairs: 173,
      tags: [],
      platform: null,
      cmc_rank: 19,
      last_updated: "2019-05-04T10:16:03.000Z",
      quote: {
        USD: {
          price: 9.75989931392,
          volume_24h: 324817344.884536,
          percent_change_1h: -1.13625,
          percent_change_24h: -2.67247,
          percent_change_7d: 3.12832,
          market_cap: 634393455.4048,
          last_updated: "2019-05-04T10:16:03.000Z"
        }
      }
    },
    {
      id: 2566,
      name: "Ontology",
      symbol: "ONT",
      slug: "ontology",
      circulating_supply: 494804358,
      total_supply: 1000000000,
      max_supply: null,
      date_added: "2018-03-08T00:00:00.000Z",
      num_market_pairs: 70,
      tags: [],
      platform: null,
      cmc_rank: 20,
      last_updated: "2019-05-04T10:16:06.000Z",
      quote: {
        USD: {
          price: 1.13005582119,
          volume_24h: 71552329.9268375,
          percent_change_1h: -1.34796,
          percent_change_24h: -2.15923,
          percent_change_7d: 2.5623,
          market_cap: 559156545.1080807,
          last_updated: "2019-05-04T10:16:06.000Z"
        }
      }
    },
    {
      id: 1518,
      name: "Maker",
      symbol: "MKR",
      slug: "maker",
      circulating_supply: 1000000,
      total_supply: 1000000,
      max_supply: null,
      date_added: "2017-01-29T00:00:00.000Z",
      num_market_pairs: 62,
      tags: [],
      platform: {
        id: 1027,
        name: "Ethereum",
        symbol: "ETH",
        slug: "ethereum",
        token_address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
      },
      cmc_rank: 21,
      last_updated: "2019-05-04T10:16:02.000Z",
      quote: {
        USD: {
          price: 543.28899898,
          volume_24h: 3219051.16137846,
          percent_change_1h: -0.538995,
          percent_change_24h: -4.64404,
          percent_change_7d: 7.46607,
          market_cap: 543288998.98,
          last_updated: "2019-05-04T10:16:02.000Z"
        }
      }
    },
    {
      id: 873,
      name: "NEM",
      symbol: "XEM",
      slug: "nem",
      circulating_supply: 8999999999,
      total_supply: 8999999999,
      max_supply: null,
      date_added: "2015-04-01T00:00:00.000Z",
      num_market_pairs: 90,
      tags: [],
      platform: null,
      cmc_rank: 22,
      last_updated: "2019-05-04T10:16:01.000Z",
      quote: {
        USD: {
          price: 0.055900496441,
          volume_24h: 24716249.2141849,
          percent_change_1h: -0.395552,
          percent_change_24h: -1.81097,
          percent_change_7d: -6.01922,
          market_cap: 503104467.9130995,
          last_updated: "2019-05-04T10:16:01.000Z"
        }
      }
    },
    {
      id: 1697,
      name: "Basic Attention Token",
      symbol: "BAT",
      slug: "basic-attention-token",
      circulating_supply: 1259998400.9363,
      total_supply: 1500000000,
      max_supply: null,
      date_added: "2017-06-01T00:00:00.000Z",
      num_market_pairs: 103,
      tags: [],
      platform: {
        id: 1027,
        name: "Ethereum",
        symbol: "ETH",
        slug: "ethereum",
        token_address: "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
      },
      cmc_rank: 23,
      last_updated: "2019-05-04T10:16:03.000Z",
      quote: {
        USD: {
          price: 0.367461244126,
          volume_24h: 48211372.3755919,
          percent_change_1h: 0.261022,
          percent_change_24h: -3.88241,
          percent_change_7d: -0.872221,
          market_cap: 463000580.0048234,
          last_updated: "2019-05-04T10:16:03.000Z"
        }
      }
    },
    {
      id: 3635,
      name: "Crypto.com Chain",
      symbol: "CRO",
      slug: "crypto-com-chain",
      circulating_supply: 5518264840.18265,
      total_supply: 100000000000,
      max_supply: null,
      date_added: "2018-12-14T00:00:00.000Z",
      num_market_pairs: 13,
      tags: [],
      platform: {
        id: 1027,
        name: "Ethereum",
        symbol: "ETH",
        slug: "ethereum",
        token_address: "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
      },
      cmc_rank: 24,
      last_updated: "2019-05-04T10:16:08.000Z",
      quote: {
        USD: {
          price: 0.0761861061725,
          volume_24h: 682382.916399158,
          percent_change_1h: 0.438292,
          percent_change_24h: -0.677049,
          percent_change_7d: 4.65153,
          market_cap: 420415111.00212914,
          last_updated: "2019-05-04T10:16:08.000Z"
        }
      }
    },
    {
      id: 1437,
      name: "Zcash",
      symbol: "ZEC",
      slug: "zcash",
      circulating_supply: 6457731.25,
      total_supply: 6457731.25,
      max_supply: null,
      date_added: "2016-10-29T00:00:00.000Z",
      num_market_pairs: 182,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 25,
      last_updated: "2019-05-04T10:16:03.000Z",
      quote: {
        USD: {
          price: 61.7966738815,
          volume_24h: 236791266.890193,
          percent_change_1h: -0.338327,
          percent_change_24h: 0.317879,
          percent_change_7d: 1.23587,
          market_cap: 399066312.0706213,
          last_updated: "2019-05-04T10:16:03.000Z"
        }
      }
    },
    {
      id: 3077,
      name: "VeChain",
      symbol: "VET",
      slug: "vechain",
      circulating_supply: 55454734800,
      total_supply: 86712634466,
      max_supply: null,
      date_added: "2017-08-22T00:00:00.000Z",
      num_market_pairs: 56,
      tags: [],
      platform: null,
      cmc_rank: 26,
      last_updated: "2019-05-04T10:16:07.000Z",
      quote: {
        USD: {
          price: 0.00661688913189,
          volume_24h: 13502573.8801835,
          percent_change_1h: -0.598593,
          percent_change_24h: -0.438013,
          percent_change_7d: 8.74999,
          market_cap: 366937832.00996214,
          last_updated: "2019-05-04T10:16:07.000Z"
        }
      }
    },
    {
      id: 74,
      name: "Dogecoin",
      symbol: "DOGE",
      slug: "dogecoin",
      circulating_supply: 119350404515.131,
      total_supply: 119350404515.131,
      max_supply: null,
      date_added: "2013-12-15T00:00:00.000Z",
      num_market_pairs: 327,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 27,
      last_updated: "2019-05-04T10:16:02.000Z",
      quote: {
        USD: {
          price: 0.00269372497712,
          volume_24h: 36147601.3538085,
          percent_change_1h: -0.232769,
          percent_change_24h: -0.988299,
          percent_change_7d: 7.34288,
          market_cap: 321497165.671784,
          last_updated: "2019-05-04T10:16:02.000Z"
        }
      }
    },
    {
      id: 2083,
      name: "Bitcoin Gold",
      symbol: "BTG",
      slug: "bitcoin-gold",
      circulating_supply: 17513923.589,
      total_supply: 17513923.589,
      max_supply: 21000000,
      date_added: "2017-10-23T00:00:00.000Z",
      num_market_pairs: 75,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 28,
      last_updated: "2019-05-04T10:16:04.000Z",
      quote: {
        USD: {
          price: 18.3440385183,
          volume_24h: 18386824.6949741,
          percent_change_1h: -0.775382,
          percent_change_24h: 4.1609,
          percent_change_7d: 15.0278,
          market_cap: 321276088.923179,
          last_updated: "2019-05-04T10:16:04.000Z"
        }
      }
    },
    {
      id: 3408,
      name: "USD Coin",
      symbol: "USDC",
      slug: "usd-coin",
      circulating_supply: 296054124.698033,
      total_supply: 296701668.6,
      max_supply: null,
      date_added: "2018-10-08T00:00:00.000Z",
      num_market_pairs: 141,
      tags: [],
      platform: {
        id: 1027,
        name: "Ethereum",
        symbol: "ETH",
        slug: "ethereum",
        token_address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      cmc_rank: 29,
      last_updated: "2019-05-04T10:16:08.000Z",
      quote: {
        USD: {
          price: 1.01239882549,
          volume_24h: 104033969.557109,
          percent_change_1h: 0.0645187,
          percent_change_24h: -0.512365,
          percent_change_7d: -0.257914,
          market_cap: 299724848.1257586,
          last_updated: "2019-05-04T10:16:08.000Z"
        }
      }
    },
    {
      id: 1168,
      name: "Decred",
      symbol: "DCR",
      slug: "decred",
      circulating_supply: 9726329.18800832,
      total_supply: 9726329.18800832,
      max_supply: 21000000,
      date_added: "2016-02-10T00:00:00.000Z",
      num_market_pairs: 35,
      tags: ["mineable"],
      platform: null,
      cmc_rank: 30,
      last_updated: "2019-05-04T10:16:01.000Z",
      quote: {
        USD: {
          price: 26.3482385877,
          volume_24h: 1751401.24190567,
          percent_change_1h: -0.98412,
          percent_change_24h: 1.45723,
          percent_change_7d: 14.9725,
          market_cap: 256271642.0281536,
          last_updated: "2019-05-04T10:16:01.000Z"
        }
      }
    },
    {
      id: 1808,
      name: "OmiseGO",
      symbol: "OMG",
      slug: "omisego",
      circulating_supply: 140245398.245133,
      total_supply: 140245398.245133,
      max_supply: null,
      date_added: "2017-07-14T00:00:00.000Z",
      num_market_pairs: 164,
      tags: [],
      platform: {
        id: 1027,
        name: "Ethereum",
        symbol: "ETH",
        slug: "ethereum",
        token_address: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
      },
      cmc_rank: 31,
      last_updated: "2019-05-04T10:16:04.000Z",
      quote: {
        USD: {
          price: 1.68459572094,
          volume_24h: 53966183.8904654,
          percent_change_1h: -0.885266,
          percent_change_24h: -0.348381,
          percent_change_7d: 12.3216,
          market_cap: 236256797.76527727,
          last_updated: "2019-05-04T10:16:04.000Z"
        }
      }
    },
    {
      id: 1684,
      name: "Qtum",
      symbol: "QTUM",
      slug: "qtum",
      circulating_supply: 89442736,
      total_supply: 101442736,
      max_supply: 107822406,
      date_added: "2017-05-24T00:00:00.000Z",
      num_market_pairs: 144,
      tags: [],
      platform: null,
      cmc_rank: 32,
      last_updated: "2019-05-04T10:16:03.000Z",
      quote: {
        USD: {
          price: 2.54695630932,
          volume_24h: 214239643.856575,
          percent_change_1h: -0.519414,
          percent_change_24h: -2.73404,
          percent_change_7d: 7.3079,
          market_cap: 227806740.7780431,
          last_updated: "2019-05-04T10:16:03.000Z"
        }
      }
    },
    {
      id: 2563,
      name: "TrueUSD",
      symbol: "TUSD",
      slug: "trueusd",
      circulating_supply: 221995271.62,
      total_supply: 221995271.62,
      max_supply: null,
      date_added: "2018-03-06T00:00:00.000Z",
      num_market_pairs: 162,
      tags: [],
      platform: {
        id: 1027,
        name: "Ethereum",
        symbol: "ETH",
        slug: "ethereum",
        token_address: "0x0000000000085d4780B73119b644AE5ecd22b376"
      },
      cmc_rank: 33,
      last_updated: "2019-05-04T10:16:06.000Z",
      quote: {
        USD: {
          price: 1.02373064619,
          volume_24h: 105800454.784106,
          percent_change_1h: 0.273431,
          percent_change_24h: -0.0517079,
          percent_change_7d: -0.437261,
          market_cap: 227263362.86666718,
          last_updated: "2019-05-04T10:16:06.000Z"
        }
      }
    },
    {
      id: 1104,
      name: "Augur",
      symbol: "REP",
      slug: "augur",
      circulating_supply: 11000000,
      total_supply: 11000000,
      max_supply: null,
      date_added: "2015-10-27T00:00:00.000Z",
      num_market_pairs: 67,
      tags: [],
      platform: {
        id: 1027,
        name: "Ethereum",
        symbol: "ETH",
        slug: "ethereum",
        token_address: "0x1985365e9f78359a9b6ad760e32412f4a445e862"
      },
      cmc_rank: 34,
      last_updated: "2019-05-04T10:16:01.000Z",
      quote: {
        USD: {
          price: 20.505561324,
          volume_24h: 11654192.0386312,
          percent_change_1h: -0.161732,
          percent_change_24h: -0.752901,
          percent_change_7d: -5.20758,
          market_cap: 225561174.56399998,
          last_updated: "2019-05-04T10:16:01.000Z"
        }
      }
    },
    {
      id: 1274,
      name: "Waves",
      symbol: "WAVES",
      slug: "waves",
      circulating_supply: 100000000,
      total_supply: 100000000,
      max_supply: null,
      date_added: "2016-06-02T00:00:00.000Z",
      num_market_pairs: 130,
      tags: [],
      platform: null,
      cmc_rank: 35,
      last_updated: "2019-05-04T10:16:03.000Z",
      quote: {
        USD: {
          price: 2.18006149163,
          volume_24h: 11425675.1112339,
          percent_change_1h: 0.201294,
          percent_change_24h: -0.167272,
          percent_change_7d: 0.436912,
          market_cap: 218006149.16300002,
          last_updated: "2019-05-04T10:16:03.000Z"
        }
      }
    },
    {
      id: 1214,
      name: "Lisk",
      symbol: "LSK",
      slug: "lisk",
      circulating_supply: 116652829.821928,
      total_supply: 131767960,
      max_supply: null,
      date_added: "2016-04-06T00:00:00.000Z",
      num_market_pairs: 58,
      tags: [],
      platform: null,
      cmc_rank: 36,
      last_updated: "2019-05-04T10:16:02.000Z",
      quote: {
        USD: {
          price: 1.77948693156,
          volume_24h: 3196072.00096229,
          percent_change_1h: -2.4101,
          percent_change_24h: -3.24419,
          percent_change_7d: -0.507835,
          market_cap: 207582186.1976135,
          last_updated: "2019-05-04T10:16:02.000Z"
        }
      }
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETCOIN:
      return { ...state, coin: action.payload };
    case GETINFO:
      return { ...state, info: action.payload, isLoading:false };
      case SETLOADING:
      return {...state, isLoading:true}
    default:
      return { ...state };
  }
};
