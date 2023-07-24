const data = [
  {
    state: "Lagos",
    locals: [
      {
        name: "Abule Egba  - Agbado ljaye Road",
        locationCode: "ETWD",
        isAvailable: true,
      },
      {
        name: "Abule Egba  - Ajasa Command Rd",
        locationCode: "ABOT",
        isAvailable: true,
      },
      {
        name: "Abule Egba  - Ajegunle",
        locationCode: "578E",
        isAvailable: true,
      },
      {
        name: "Abule Egba  - Alagbado",
        locationCode: "26TD",
        isAvailable: true,
      },
      {
        name: "Abule Egba  - Alakuko",
        locationCode: "IZ19",
        isAvailable: true,
      },
      {
        name: "Abule Egba  - Ekoro road",
        locationCode: "YQKW",
        isAvailable: true,
      },
      {
        name: "Abule Egba  - Meiran Road",
        locationCode: "55YE",
        isAvailable: true,
      },
      {
        name: "Abule Egba  - New Oko Oba",
        locationCode: "YXAH",
        isAvailable: true,
      },
      {
        name: "Abule Egba  - Old Otta Road",
        locationCode: "O2XF",
        isAvailable: true,
      },
      {
        name: "Agbara",
        locationCode: "Z5FU",
        isAvailable: false,
      },
      {
        name: "Agege  - Ajuwon Akute Road",
        locationCode: "6JBL",
        isAvailable: false,
      },
      {
        name: "Agege  - Dopemu",
        locationCode: "FD82",
        isAvailable: true,
      },
      {
        name: "Agege  - Iju Road",
        locationCode: "1BXM",
        isAvailable: true,
      },
      {
        name: "Agege  - Old Abeokuta Road",
        locationCode: "U402",
        isAvailable: true,
      },
      {
        name: "Agege  - Old Otta Road",
        locationCode: "UVKC",
        isAvailable: true,
      },
      {
        name: "Agege  - Orile Agege",
        locationCode: "PJQC",
        isAvailable: true,
      },
      {
        name: "Agege - Ifako Ijaiye",
        locationCode: "LIJ9",
        isAvailable: true,
      },
      {
        name: "AGILITI",
        locationCode: "OVTH",
        isAvailable: true,
      },
      {
        name: "Ago Palace Way",
        locationCode: "ELHI",
        isAvailable: true,
      },
      {
        name: "AGUNGI  - LEKKI",
        locationCode: "3PC4",
        isAvailable: true,
      },
      {
        name: "AJAO ESTATE",
        locationCode: "PXZL",
        isAvailable: true,
      },
      {
        name: "Ajegunle",
        locationCode: "HMY1",
        isAvailable: true,
      },
      {
        name: "Akowonjo",
        locationCode: "66DT",
        isAvailable: true,
      },
      {
        name: "Alimosho - Idimu",
        locationCode: "0WYY",
        isAvailable: true,
      },
      {
        name: "ALPHA BEACH",
        locationCode: "V1HX",
        isAvailable: true,
      },
      {
        name: "AMUWO",
        locationCode: "TERZ",
        isAvailable: true,
      },
      {
        name: "ANTHONY VILLAGE",
        locationCode: "X6L1",
        isAvailable: true,
      },
      {
        name: "Apapa  - Amukoko",
        locationCode: "WRYG",
        isAvailable: false,
      },
      {
        name: "Apapa  - GRA",
        locationCode: "S2O5",
        isAvailable: false,
      },
      {
        name: "Apapa  - Kiri kiri",
        locationCode: "AH4H",
        isAvailable: false,
      },
      {
        name: "Apapa  - Olodi",
        locationCode: "CIXS",
        isAvailable: false,
      },
      {
        name: "Apapa  - Suru Alaba",
        locationCode: "XGNZ",
        isAvailable: false,
      },
      {
        name: "Apapa  - Tincan",
        locationCode: "OWFP",
        isAvailable: false,
      },
      {
        name: "Apapa  - Warf Rd",
        locationCode: "DWXK",
        isAvailable: false,
      },
      {
        name: "Apapa - Ajequnle",
        locationCode: "J7UF",
        isAvailable: false,
      },
      {
        name: "AWOYAYA",
        locationCode: "UJXX",
        isAvailable: true,
      },
      {
        name: "Awoyaya - Container bustop",
        locationCode: "XD4E",
        isAvailable: true,
      },
      {
        name: "Awoyaya - Eko Akete Estate",
        locationCode: "QK5L",
        isAvailable: true,
      },
      {
        name: "Awoyaya - Eputu",
        locationCode: "PEJ7",
        isAvailable: true,
      },
      {
        name: "Awoyaya - Gbetu werekun Road",
        locationCode: "PGH5",
        isAvailable: true,
      },
      {
        name: "Awoyaya - Idowu Eletu",
        locationCode: "6Y8L",
        isAvailable: true,
      },
      {
        name: "Awoyaya - Mayfair Gardens",
        locationCode: "CN42",
        isAvailable: true,
      },
      {
        name: "Awoyaya - Ogunlana Busstop",
        locationCode: "GXI5",
        isAvailable: true,
      },
      {
        name: "Awoyaya - Ologunfe",
        locationCode: "BW67",
        isAvailable: true,
      },
      {
        name: "Awoyaya - Oribanwa",
        locationCode: "AT33",
        isAvailable: true,
      },
      {
        name: "Badagry",
        locationCode: "C3H0",
        isAvailable: false,
      },
      {
        name: "Bariga",
        locationCode: "UZMP",
        isAvailable: true,
      },
      {
        name: "BERGER",
        locationCode: "GMKG",
        isAvailable: true,
      },
      {
        name: "Bogije",
        locationCode: "RKFI",
        isAvailable: true,
      },
      {
        name: "Coker -  Surulere",
        locationCode: "MESN",
        isAvailable: true,
      },
      {
        name: "Costain",
        locationCode: "6BX7",
        isAvailable: true,
      },
      {
        name: "Doyin -  Badagry",
        locationCode: "74YY",
        isAvailable: false,
      },
      {
        name: "Egbeda ",
        locationCode: "17JQ",
        isAvailable: true,
      },
      {
        name: "Ejigbo - Ailegun Road",
        locationCode: "HP2M",
        isAvailable: true,
      },
      {
        name: "Ejigbo - Bucknor",
        locationCode: "XV4C",
        isAvailable: true,
      },
      {
        name: "Ejigbo - Isheri Osun",
        locationCode: "JJ2M",
        isAvailable: true,
      },
      {
        name: "Ejigbo - Jakande Wood Market",
        locationCode: "Q6XK",
        isAvailable: true,
      },
      {
        name: "Ejigbo - lle Epo",
        locationCode: "COHG",
        isAvailable: true,
      },
      {
        name: "Ejigbo - NNPC Road",
        locationCode: "3342",
        isAvailable: true,
      },
      {
        name: "Ejigbo - Oke - Afa",
        locationCode: "BK8N",
        isAvailable: true,
      },
      {
        name: "Ejigbo - Orinle Owo",
        locationCode: "9VH1",
        isAvailable: true,
      },
      {
        name: "Ejigbo - Pipeline",
        locationCode: "A36G",
        isAvailable: true,
      },
      {
        name: "Ejigbo - Powerline",
        locationCode: "LTK5",
        isAvailable: true,
      },
      {
        name: "Elemoro",
        locationCode: "WSLR",
        isAvailable: true,
      },
      {
        name: "EPE",
        locationCode: "CJNG",
        isAvailable: true,
      },
      {
        name: "Fagba  - Iju Road",
        locationCode: "1X0E",
        isAvailable: true,
      },
      {
        name: "FESTAC  - 1st Avenue",
        locationCode: "K2LA",
        isAvailable: true,
      },
      {
        name: "FESTAC  - 2nd Avenue",
        locationCode: "63MX",
        isAvailable: true,
      },
      {
        name: "FESTAC  - 3rd Avenue",
        locationCode: "6BGL",
        isAvailable: true,
      },
      {
        name: "FESTAC  - 4th Avenue",
        locationCode: "QNL7",
        isAvailable: true,
      },
      {
        name: "FESTAC  - 5th Avenue",
        locationCode: "P54Z",
        isAvailable: true,
      },
      {
        name: "FESTAC  - 6th Avenue",
        locationCode: "5B6Z",
        isAvailable: true,
      },
      {
        name: "FESTAC  - 7th Avenue",
        locationCode: "FV6B",
        isAvailable: true,
      },
      {
        name: "Gbagada -  Ifako",
        locationCode: "8GMR",
        isAvailable: true,
      },
      {
        name: "Gbagada - Abule Okuta",
        locationCode: "D1V2",
        isAvailable: true,
      },
      {
        name: "Gbagada - Araromi",
        locationCode: "4W0L",
        isAvailable: true,
      },
      {
        name: "Gbagada - Deeper Life",
        locationCode: "HQV3",
        isAvailable: true,
      },
      {
        name: "Gbagada - Diya",
        locationCode: "CF4M",
        isAvailable: true,
      },
      {
        name: "Gbagada - Expressway",
        locationCode: "ZV9D",
        isAvailable: true,
      },
      {
        name: "Gbagada - Hospital",
        locationCode: "BA8T",
        isAvailable: true,
      },
      {
        name: "Gbagada - L&K",
        locationCode: "G9IT",
        isAvailable: true,
      },
      {
        name: "Gbagada - New Garage",
        locationCode: "N4HD",
        isAvailable: true,
      },
      {
        name: "Gbagada - Olopomeji",
        locationCode: "RO25",
        isAvailable: true,
      },
      {
        name: "Gbagada - Pedro",
        locationCode: "O3QE",
        isAvailable: true,
      },
      {
        name: "Gbagada - Sawmill",
        locationCode: "KGC0",
        isAvailable: true,
      },
      {
        name: "Gbagada - Sholuyi",
        locationCode: "JM9F",
        isAvailable: true,
      },
      {
        name: "Gbagada- Phase 2",
        locationCode: "FCRL",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Aiyeteju",
        locationCode: "1DWH",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Akodo",
        locationCode: "EDM9",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Amen Estate",
        locationCode: "U1RE",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Dangote fertilizer",
        locationCode: "YF2N",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Dangote Refinery",
        locationCode: "FHA4",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Dano Milk",
        locationCode: "IQO8",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Eleko Junction",
        locationCode: "5ZEI",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Igando",
        locationCode: "WUH0",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Magbon",
        locationCode: "40XJ",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Onosa",
        locationCode: "0LKW",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Orimedu",
        locationCode: "6A5G",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Pan African University",
        locationCode: "JWHW",
        isAvailable: true,
      },
      {
        name: "Ibeju - Lekki Shapati",
        locationCode: "YF13",
        isAvailable: true,
      },
      {
        name: "IDIMU",
        locationCode: "QNNK",
        isAvailable: true,
      },
      {
        name: "IGANDO",
        locationCode: "MTW2",
        isAvailable: true,
      },
      {
        name: "IJANIKIN",
        locationCode: "2HZV",
        isAvailable: true,
      },
      {
        name: "Ijegun - Obadore Road",
        locationCode: "KSQM",
        isAvailable: true,
      },
      {
        name: "IJEGUN IKOTUN",
        locationCode: "M8HM",
        isAvailable: true,
      },
      {
        name: "Ijesha",
        locationCode: "S915",
        isAvailable: true,
      },
      {
        name: "IJORA",
        locationCode: "6U1G",
        isAvailable: true,
      },
      {
        name: "Ikeja  - ADENIYI JONES",
        locationCode: "5T65",
        isAvailable: true,
      },
      {
        name: "Ikeja  - ALAUSA",
        locationCode: "HAZC",
        isAvailable: true,
      },
      {
        name: "Ikeja  - ALLEN AVENUE",
        locationCode: "5WDM",
        isAvailable: true,
      },
      {
        name: "Ikeja  - computer villaqe",
        locationCode: "MD0K",
        isAvailable: true,
      },
      {
        name: "Ikeja  - GRA",
        locationCode: "0NUP",
        isAvailable: true,
      },
      {
        name: "IKEJA  - M M Airport",
        locationCode: "VF5G",
        isAvailable: true,
      },
      {
        name: "Ikeja  - MANGORO",
        locationCode: "0RQN",
        isAvailable: true,
      },
      {
        name: "Ikeja  - OBA - AKRAN",
        locationCode: "M1I0",
        isAvailable: true,
      },
      {
        name: "Ikeja  - OPEBI",
        locationCode: "MOC5",
        isAvailable: true,
      },
      {
        name: "IKORODU  - Adamo",
        locationCode: "97M1",
        isAvailable: true,
      },
      {
        name: "IKORODU  - Agbede",
        locationCode: "ZJXP",
        isAvailable: true,
      },
      {
        name: "Ikorodu  - Agbowa",
        locationCode: "AN1C",
        isAvailable: true,
      },
      {
        name: "IKORODU  - Agric",
        locationCode: "P1P7",
        isAvailable: true,
      },
      {
        name: "IKORODU  - Eyita",
        locationCode: "98IA",
        isAvailable: true,
      },
      {
        name: "IKORODU  - Imota",
        locationCode: "D5YT",
        isAvailable: true,
      },
      {
        name: "IKORODU  - Ita oluwo",
        locationCode: "1089",
        isAvailable: true,
      },
      {
        name: "IKORODU  - Itamaga",
        locationCode: "1O3I",
        isAvailable: true,
      },
      {
        name: "IKORODU  - jede",
        locationCode: "63VC",
        isAvailable: true,
      },
      {
        name: "IKORODU  - Offin",
        locationCode: "QPFK",
        isAvailable: true,
      },
      {
        name: "IKORODU  - Owode - Ibese",
        locationCode: "OSET",
        isAvailable: true,
      },
      {
        name: "Ikorodu -  Imota Caleb University",
        locationCode: "7752",
        isAvailable: true,
      },
      {
        name: "Ikorodu - Agufoye",
        locationCode: "9CJU",
        isAvailable: true,
      },
      {
        name: "IKORODU - Bayeku",
        locationCode: "VU0B",
        isAvailable: true,
      },
      {
        name: "Ikorodu - Benson",
        locationCode: "5Y4M",
        isAvailable: true,
      },
      {
        name: "IKORODU - Elepe",
        locationCode: "073R",
        isAvailable: true,
      },
      {
        name: "Ikorodu - Garage",
        locationCode: "MFEZ",
        isAvailable: true,
      },
      {
        name: "IKORODU - Gberigbe",
        locationCode: "ZOAF",
        isAvailable: true,
      },
      {
        name: "Ikorodu - Igbogbo",
        locationCode: "UBGE",
        isAvailable: true,
      },
      {
        name: "IKORODU - Laspotech",
        locationCode: "3VXV",
        isAvailable: true,
      },
      {
        name: "Ikorodu - Odokekere",
        locationCode: "MEK4",
        isAvailable: true,
      },
      {
        name: "Ikorodu - Odonla",
        locationCode: "V36Y",
        isAvailable: true,
      },
      {
        name: "Ikorodu - Ogijo",
        locationCode: "IJWL",
        isAvailable: true,
      },
      {
        name: "Ikorodu - Ogolonto",
        locationCode: "VLFP",
        isAvailable: true,
      },
      {
        name: "IKORODU - Sabo",
        locationCode: "QCC8",
        isAvailable: true,
      },
      {
        name: "Ikorodu Road - Ajegunle",
        locationCode: "QPAH",
        isAvailable: true,
      },
      {
        name: "Ikorodu Road - Irawo",
        locationCode: "6PYT",
        isAvailable: true,
      },
      {
        name: "Ikorodu Road - Jibowu ",
        locationCode: "JILW",
        isAvailable: true,
      },
      {
        name: "Ikorodu Road - Obanikoro",
        locationCode: "ROQP",
        isAvailable: true,
      },
      {
        name: "Ikorodu Road - Onipanu",
        locationCode: "T6TA",
        isAvailable: true,
      },
      {
        name: "Ikorodu Road - Owode Onirin",
        locationCode: "QOSO",
        isAvailable: true,
      },
      {
        name: "Ikorodu Road - Palmgrove ",
        locationCode: "YSNM",
        isAvailable: true,
      },
      {
        name: "IKOTA",
        locationCode: "H8FG",
        isAvailable: true,
      },
      {
        name: "IKOTUN",
        locationCode: "5KWO",
        isAvailable: true,
      },
      {
        name: "Ikoyi  - Awolowo Road",
        locationCode: "86AA",
        isAvailable: true,
      },
      {
        name: "Ikoyi  - Bourdillon",
        locationCode: "B07G",
        isAvailable: true,
      },
      {
        name: "Ikoyi  - Dolphin",
        locationCode: "G0SK",
        isAvailable: true,
      },
      {
        name: "Ikoyi  - Glover road",
        locationCode: "ID40",
        isAvailable: true,
      },
      {
        name: "Ikoyi  - Keffi",
        locationCode: "ZLA2",
        isAvailable: true,
      },
      {
        name: "Ikoyi  - Kings way road",
        locationCode: "YA05",
        isAvailable: true,
      },
      {
        name: "Ikoyi  - Obalende",
        locationCode: "8WL5",
        isAvailable: true,
      },
      {
        name: "Ikoyi  - Queens Drive",
        locationCode: "A8NY",
        isAvailable: true,
      },
      {
        name: "Ikoyi - Banana Island",
        locationCode: "263",
        isAvailable: true,
      },
      {
        name: "ILAJE - BARIGA",
        locationCode: "Y2DO",
        isAvailable: true,
      },
      {
        name: "ILUPEJU  - Lagos",
        locationCode: "ZNEZ",
        isAvailable: true,
      },
      {
        name: "ISHERI IKOTUN",
        locationCode: "K05A",
        isAvailable: true,
      },
      {
        name: "ISHERI MAGODO",
        locationCode: "49LQ",
        isAvailable: true,
      },
      {
        name: "Isheri-Oshun",
        locationCode: "Z4G5",
        isAvailable: true,
      },
      {
        name: "ISOLO",
        locationCode: "ABIM",
        isAvailable: true,
      },
      {
        name: "Iyana - Ipaja - Baruwa",
        locationCode: "VOHK",
        isAvailable: true,
      },
      {
        name: "Iyana Ejigbo",
        locationCode: "QW26",
        isAvailable: true,
      },
      {
        name: "IYANA IBA",
        locationCode: "RX81",
        isAvailable: true,
      },
      {
        name: "Iyana Ipaja  - Abesan",
        locationCode: "STXS",
        isAvailable: true,
      },
      {
        name: "Iyana Ipaja  - Command Road",
        locationCode: "K1MG",
        isAvailable: true,
      },
      {
        name: "Iyana Ipaja  - Egbeda",
        locationCode: "EOKA",
        isAvailable: true,
      },
      {
        name: "Iyana Ipaja  - Ikola Road",
        locationCode: "BL21",
        isAvailable: true,
      },
      {
        name: "Iyana Ipaja  - lyana Ipaja Road",
        locationCode: "QYPO",
        isAvailable: true,
      },
      {
        name: "JANKANDE  - ISOLO",
        locationCode: "2K9M",
        isAvailable: true,
      },
      {
        name: "Ketu - Agboyi",
        locationCode: "LPMO",
        isAvailable: true,
      },
      {
        name: "Ketu - Alapere",
        locationCode: "908J",
        isAvailable: true,
      },
      {
        name: "Ketu - CMD road",
        locationCode: "7KNC",
        isAvailable: true,
      },
      {
        name: "Ketu - Demurin",
        locationCode: "K0PB",
        isAvailable: true,
      },
      {
        name: "Ketu - Ikosi Road",
        locationCode: "B093",
        isAvailable: true,
      },
      {
        name: "Ketu - Iyana School",
        locationCode: "1SE2",
        isAvailable: true,
      },
      {
        name: "Ketu - lle lle",
        locationCode: "XDU6",
        isAvailable: true,
      },
      {
        name: "Ketu - Tipper Garage",
        locationCode: "BZGI",
        isAvailable: true,
      },
      {
        name: "Kosofe",
        locationCode: "838X",
        isAvailable: true,
      },
      {
        name: "Lagos - Ikorodu",
        locationCode: "zone_c",
        isAvailable: true,
      },
      {
        name: "Lagos Island",
        locationCode: "zone_d",
        isAvailable: true,
      },
      {
        name: "Lagos Island  - Adeniji",
        locationCode: "O7XE",
        isAvailable: false,
        isLockerAvailable: false,
      },
      {
        name: "Lagos Island  - Marina",
        locationCode: "RFCC",
        isAvailable: false,
        isLockerAvailable: false,
      },
      {
        name: "Lagos Island  - Sura",
        locationCode: "X3QU",
        isAvailable: false,
        isLockerAvailable: false,
      },
      {
        name: "Lagos Mainland - Central",
        locationCode: "zone_a",
        isAvailable: true,
      },
      {
        name: "Lagos Mainland - Outskirts",
        locationCode: "zone_b",
        isAvailable: true,
      },
      {
        name: "Lagos Mainland- Ebutte Metta",
        locationCode: "FMXJ",
        isAvailable: true,
      },
      {
        name: "LAKOWE",
        locationCode: "EQ36",
        isAvailable: true,
      },
      {
        name: "Lakowe - Adeba Road",
        locationCode: "YE5X",
        isAvailable: true,
      },
      {
        name: "Lakowe - Golf",
        locationCode: "EFUK",
        isAvailable: true,
      },
      {
        name: "Lakowe - Kajola",
        locationCode: "GMBO",
        isAvailable: true,
      },
      {
        name: "Lakowe - School Gate",
        locationCode: "55ND",
        isAvailable: true,
      },
      {
        name: "LASU-Ojo",
        locationCode: "NSLZ",
        isAvailable: true,
      },
      {
        name: "LEKKI - AGUNGI",
        locationCode: "WQ29",
        isAvailable: true,
      },
      {
        name: "LEKKI - AJAH  - ABIJO",
        locationCode: "CRFN",
        isAvailable: true,
      },
      {
        name: "LEKKI - AJAH  - ADDO ROAD",
        locationCode: "J778",
        isAvailable: true,
      },
      {
        name: "LEKKI - AJAH  - ILAJE",
        locationCode: "6OLO",
        isAvailable: true,
      },
      {
        name: "LEKKI - AJAH  - ILASAN",
        locationCode: "PM7W",
        isAvailable: true,
      },
      {
        name: "LEKKI - AJAH  - SANGOTEDO",
        locationCode: "W951",
        isAvailable: true,
      },
      {
        name: "LEKKI - AJAH - BADORE",
        locationCode: "KGTG",
        isAvailable: true,
      },
      {
        name: "LEKKI - AJAH JAKANDE",
        locationCode: "AIE9",
        isAvailable: true,
      },
      {
        name: "Lekki - Awoyaya",
        locationCode: "8PFZ",
        isAvailable: true,
      },
      {
        name: "Lekki - Chevron",
        locationCode: "X6I6",
        isAvailable: true,
        isLockerAvailable: false,
      },
      {
        name: "Lekki - Chisco",
        locationCode: "0Z6E",
        isAvailable: true,
      },
      {
        name: "LEKKI - ELF",
        locationCode: "J7EX",
        isAvailable: true,
      },
      {
        name: "LEKKI - IGBOEFON",
        locationCode: "50FW",
        isAvailable: true,
      },
      {
        name: "LEKKI - IKATE ELEGUSHI",
        locationCode: "SAR8",
        isAvailable: true,
        isLockerAvailable: false,
      },
      {
        name: "LEKKI - Jakande",
        locationCode: "75SH",
        isAvailable: true,
      },
      {
        name: "LEKKI - JAKANDE  - KAZEEM ELETU",
        locationCode: "81K1",
        isAvailable: true,
      },
      {
        name: "LEKKI - MARUWA",
        locationCode: "0UA7",
        isAvailable: true,
      },
      {
        name: "LEKKI - ONIRU ESTATE",
        locationCode: "SLYZ",
        isAvailable: true,
      },
      {
        name: "LEKKI - OSAPA LONDON",
        locationCode: "UIU0",
        isAvailable: true,
      },
      {
        name: "LEKKI - VGC",
        locationCode: "IQU8",
        isAvailable: true,
      },
      {
        name: "Lekki Phase 1",
        locationCode: "SQD7",
        isAvailable: true,
      },
      {
        name: "Lekki Phase 2",
        locationCode: "7WD9",
        isAvailable: true,
      },
      {
        name: "LEKKI- Osapa",
        locationCode: "1TYP",
        isAvailable: true,
      },
      {
        name: "lyana Ipaja  - Aboru",
        locationCode: "97AC",
        isAvailable: true,
      },
      {
        name: "lyana Ipaja  - Ayobo Road",
        locationCode: "TY6B",
        isAvailable: true,
      },
      {
        name: "lyana Ipaja  - Shasha",
        locationCode: "SW1H",
        isAvailable: true,
      },
      {
        name: "Magboro",
        locationCode: "LY87",
        isAvailable: false,
      },
      {
        name: "MAGODO",
        locationCode: "37P6",
        isAvailable: true,
      },
      {
        name: "MARYLAND  - MENDE",
        locationCode: "VM6F",
        isAvailable: true,
      },
      {
        name: "MARYLAND - ONIGBONGBO",
        locationCode: "4G1Z",
        isAvailable: true,
      },
      {
        name: "MILE 12",
        locationCode: "TAKC",
        isAvailable: true,
      },
      {
        name: "Mile 12  - Ajelogo",
        locationCode: "4CZ7",
        isAvailable: true,
      },
      {
        name: "Mile 12 - Agboyi Ketu",
        locationCode: "75BR",
        isAvailable: true,
      },
      {
        name: "Mile 12 - Doyin Omololu",
        locationCode: "HA29",
        isAvailable: true,
      },
      {
        name: "Mile 12 - Orishigun",
        locationCode: "TD01",
        isAvailable: true,
      },
      {
        name: "MILE 2",
        locationCode: "7L0O",
        isAvailable: true,
      },
      {
        name: "Mushin  - Palm Avenue",
        locationCode: "FJ6T",
        isAvailable: true,
      },
      {
        name: "Mushin - Agege Motor Road",
        locationCode: "21H0",
        isAvailable: true,
      },
      {
        name: "Mushin - Daleko Market",
        locationCode: "YR79",
        isAvailable: true,
      },
      {
        name: "Mushin - Fatai Atere",
        locationCode: "XZM0",
        isAvailable: true,
      },
      {
        name: "Mushin - Idi - Araba",
        locationCode: "H6NA",
        isAvailable: true,
      },
      {
        name: "Mushin - Idi Oro",
        locationCode: "ZNWI",
        isAvailable: true,
      },
      {
        name: "Mushin - Isolo Road",
        locationCode: "FHEC",
        isAvailable: true,
      },
      {
        name: "Mushin - Ladipo Road",
        locationCode: "VIYW",
        isAvailable: true,
      },
      {
        name: "Mushin - llasamaja Road",
        locationCode: "HBND",
        isAvailable: true,
      },
      {
        name: "Mushin - Mushin Market",
        locationCode: "TSF3",
        isAvailable: true,
      },
      {
        name: "Mushin - Olateju",
        locationCode: "DH83",
        isAvailable: true,
      },
      {
        name: "Mushin - Papa Ajao",
        locationCode: "YMOV",
        isAvailable: true,
      },
      {
        name: "Odongunyan",
        locationCode: "G2O8",
        isAvailable: true,
      },
      {
        name: "Ogba -  Akilo Road",
        locationCode: "JO6C",
        isAvailable: true,
      },
      {
        name: "Ogba -  College Road",
        locationCode: "KQIQ",
        isAvailable: true,
      },
      {
        name: "Ogba -  Lateef Jakande Road",
        locationCode: "8RHK",
        isAvailable: true,
      },
      {
        name: "Ogba - Acme Road",
        locationCode: "KOJL",
        isAvailable: true,
      },
      {
        name: "Ogba - Aguda",
        locationCode: "6PAV",
        isAvailable: true,
      },
      {
        name: "Ogba - County",
        locationCode: "5BYR",
        isAvailable: true,
      },
      {
        name: "Ogba - Ifako - Idiagbon",
        locationCode: "E3SC",
        isAvailable: true,
      },
      {
        name: "Ogba - Ifako - Orimolade",
        locationCode: "FY6R",
        isAvailable: true,
      },
      {
        name: "Ogba - Isheri Road",
        locationCode: "D6UA",
        isAvailable: true,
      },
      {
        name: "Ogba - Obawole",
        locationCode: "CTLF",
        isAvailable: true,
      },
      {
        name: "Ogba - Ojodu",
        locationCode: "IFKA",
        isAvailable: true,
      },
      {
        name: "Ogba - Oke Ira",
        locationCode: "6EFS",
        isAvailable: true,
      },
      {
        name: "Ogba - Oke Ira 2nd Juction",
        locationCode: "MR3S",
        isAvailable: true,
      },
      {
        name: "OGBA - Surulere Ind Rd",
        locationCode: "RE65",
        isAvailable: true,
      },
      {
        name: "Ogba - Wemco Road",
        locationCode: "34UR",
        isAvailable: true,
      },
      {
        name: "Ogombo- Ajah",
        locationCode: "P5ZN",
        isAvailable: true,
      },
      {
        name: "OGUDU",
        locationCode: "J07Z",
        isAvailable: true,
      },
      {
        name: "Ojo - Abule Oshun",
        locationCode: "FFPV",
        isAvailable: true,
      },
      {
        name: "Ojo - Adaloko",
        locationCode: "17OT",
        isAvailable: true,
      },
      {
        name: "Ojo - Agric",
        locationCode: "WWLC",
        isAvailable: true,
      },
      {
        name: "Ojo - Ajangbadi",
        locationCode: "BNB4",
        isAvailable: true,
      },
      {
        name: "Ojo - Alaba International",
        locationCode: "MA1N",
        isAvailable: true,
      },
      {
        name: "Ojo - Alaba Rago",
        locationCode: "651A",
        isAvailable: true,
      },
      {
        name: "Ojo - Alaba Suru",
        locationCode: "6KEX",
        isAvailable: true,
      },
      {
        name: "Ojo - Alakija",
        locationCode: "8HN6",
        isAvailable: true,
      },
      {
        name: "Ojo - Cassidy",
        locationCode: "6J91",
        isAvailable: true,
      },
      {
        name: "Ojo - Iyana Ishashi",
        locationCode: "CDZ5",
        isAvailable: true,
      },
      {
        name: "Ojo - ljegun",
        locationCode: "Q066",
        isAvailable: true,
      },
      {
        name: "Ojo - llogbo",
        locationCode: "JP15",
        isAvailable: true,
      },
      {
        name: "Ojo - Ojo Barracks",
        locationCode: "4DDL",
        isAvailable: true,
      },
      {
        name: "Ojo - Okokomaiko",
        locationCode: "RS71",
        isAvailable: true,
      },
      {
        name: "Ojo - Old Ojo road",
        locationCode: "GQBN",
        isAvailable: true,
      },
      {
        name: "Ojo - Onireke",
        locationCode: "LIGA",
        isAvailable: true,
      },
      {
        name: "Ojo - PPL",
        locationCode: "LH61",
        isAvailable: true,
      },
      {
        name: "Ojo - Shibiri",
        locationCode: "46AY",
        isAvailable: true,
      },
      {
        name: "Ojo - Shibiri",
        locationCode: "ZUMM",
        isAvailable: true,
      },
      {
        name: "Ojo - Tedi Town",
        locationCode: "SZVM",
        isAvailable: true,
      },
      {
        name: "Ojo - Trade Fair",
        locationCode: "UYXP",
        isAvailable: true,
      },
      {
        name: "Ojo - Volks",
        locationCode: "7W8B",
        isAvailable: true,
      },
      {
        name: "OJODU",
        locationCode: "Q3QF",
        isAvailable: true,
      },
      {
        name: "OJOKORO",
        locationCode: "EIR0",
        isAvailable: true,
      },
      {
        name: "OJOTA",
        locationCode: "8Q0L",
        isAvailable: true,
      },
      {
        name: "Oke-Aro",
        locationCode: "DMR6",
        isAvailable: true,
      },
      {
        name: "OKOKOMAIKO",
        locationCode: "EIUR",
        isAvailable: true,
      },
      {
        name: "OKOTA",
        locationCode: "EC1E",
        isAvailable: true,
      },
      {
        name: "Omole Phase 1",
        locationCode: "ESQ8",
        isAvailable: true,
      },
      {
        name: "Omole Phase 2",
        locationCode: "N8O8",
        isAvailable: true,
      },
      {
        name: "Onikan",
        locationCode: "YEZB",
        isAvailable: true,
        isLockerAvailable: false,
      },
      {
        name: "OREGUN",
        locationCode: "0JRA",
        isAvailable: true,
      },
      {
        name: "Oreyo - Igbe",
        locationCode: "J3LC",
        isAvailable: true,
      },
      {
        name: "ORILE",
        locationCode: "X0OQ",
        isAvailable: true,
      },
      {
        name: "OSHODI - BOLADE",
        locationCode: "MGYU",
        isAvailable: true,
      },
      {
        name: "OSHODI - ISOLO",
        locationCode: "OJV9",
        isAvailable: true,
      },
      {
        name: "OSHODI - MAFOLUKU",
        locationCode: "G45D",
        isAvailable: true,
      },
      {
        name: "OSHODI - ORILE",
        locationCode: "B9KU",
        isAvailable: true,
      },
      {
        name: "OSHODI - SHOGUNLE",
        locationCode: "BUEI",
        isAvailable: true,
      },
      {
        name: "Oworonshoki",
        locationCode: "43IK",
        isAvailable: true,
      },
      {
        name: "Palmgrove - Onipanu",
        locationCode: "W0GD",
        isAvailable: true,
      },
      {
        name: "Sari - Iganmu",
        locationCode: "3V5C",
        isAvailable: true,
      },
      {
        name: "Satelite - Town",
        locationCode: "D5GJ",
        isAvailable: true,
      },
      {
        name: "SOMOLU",
        locationCode: "FN59",
        isAvailable: true,
      },
      {
        name: "Surulere  - Adeniran Oqunsanya",
        locationCode: "59GS",
        isAvailable: true,
      },
      {
        name: "Surulere  - Aguda",
        locationCode: "JI6A",
        isAvailable: true,
      },
      {
        name: "Surulere  - Bode Thomas",
        locationCode: "FXQP",
        isAvailable: true,
      },
      {
        name: "Surulere  - Fatia Shitta",
        locationCode: "W43L",
        isAvailable: true,
      },
      {
        name: "Surulere  - Idi Araba",
        locationCode: "2O4O",
        isAvailable: true,
      },
      {
        name: "Surulere  - Iponri",
        locationCode: "TSDO",
        isAvailable: true,
      },
      {
        name: "Surulere  - Itire",
        locationCode: "DNB0",
        isAvailable: true,
      },
      {
        name: "Surulere  - Lawanson",
        locationCode: "OSWD",
        isAvailable: true,
      },
      {
        name: "Surulere  - ljesha",
        locationCode: "KIOP",
        isAvailable: true,
      },
      {
        name: "Surulere  - Masha",
        locationCode: "NHGH",
        isAvailable: true,
      },
      {
        name: "Surulere  - Ogunlana drive",
        locationCode: "GHMU",
        isAvailable: true,
      },
      {
        name: "Surulere  - Ojuelegba",
        locationCode: "RJ31",
        isAvailable: true,
      },
      {
        name: "Tafawa Balewa Square- TBS",
        locationCode: "NV3U",
        isAvailable: false,
        isLockerAvailable: false,
      },
      {
        name: "VI  - Adetokunbo Ademola",
        locationCode: "0A81",
        isAvailable: true,
      },
      {
        name: "VI  - Ahmed Bello way",
        locationCode: "PLON",
        isAvailable: true,
      },
      {
        name: "VI  - Bishop Aboyade Cole",
        locationCode: "9A03",
        isAvailable: true,
      },
      {
        name: "VI - Ajose Adeogun",
        locationCode: "88ZF",
        isAvailable: true,
      },
      {
        name: "VI - Akin Adeshola",
        locationCode: "F189",
        isAvailable: true,
      },
      {
        name: "VI - Bishop Oluwale",
        locationCode: "LRX7",
        isAvailable: true,
      },
      {
        name: "VI - Yusuf Abiodun",
        locationCode: "TKUJ",
        isAvailable: true,
      },
      {
        name: "Victoria Island  - Adeola Odeku",
        locationCode: "3JRC",
        isAvailable: true,
      },
      {
        name: "Victoria Island  - Kofo Abayomi",
        locationCode: "J2VG",
        isAvailable: true,
      },
      {
        name: "Yaba -  Abule ljesha",
        locationCode: "CZPX",
        isAvailable: true,
      },
      {
        name: "Yaba -  Fadeyi",
        locationCode: "LSUW",
        isAvailable: true,
      },
      {
        name: "Yaba - Abule Oja",
        locationCode: "AC5K",
        isAvailable: true,
      },
      {
        name: "Yaba - Adekunle",
        locationCode: "OHZJ",
        isAvailable: true,
      },
      {
        name: "Yaba - Akoka",
        locationCode: "OHZ2",
        isAvailable: true,
      },
      {
        name: "Yaba - Alagomeji",
        locationCode: "PJNA",
        isAvailable: true,
      },
      {
        name: "Yaba - College of Education",
        locationCode: "P1V1",
        isAvailable: true,
      },
      {
        name: "Yaba - Commercial Avenue",
        locationCode: "Q44V",
        isAvailable: true,
      },
      {
        name: "Yaba - Folagoro",
        locationCode: "GH4E",
        isAvailable: true,
      },
      {
        name: "Yaba - Herbert Macaulay Way",
        locationCode: "5W8I",
        isAvailable: true,
      },
      {
        name: "Yaba - Jibowu",
        locationCode: "HWDZ",
        isAvailable: true,
      },
      {
        name: "Yaba - Makoko",
        locationCode: "NDNA",
        isAvailable: true,
      },
      {
        name: "Yaba - Murtala Muhammed Way",
        locationCode: "EZPP",
        isAvailable: true,
      },
      {
        name: "Yaba - Onike Iwaya",
        locationCode: "1MND",
        isAvailable: true,
      },
      {
        name: "Yaba - Oyingbo",
        locationCode: "DMGC",
        isAvailable: true,
      },
      {
        name: "Yaba - Sabo",
        locationCode: "UQOP",
        isAvailable: true,
      },
      {
        name: "Yaba - Tejuosho",
        locationCode: "UDWU",
        isAvailable: true,
      },
      {
        name: "Yaba - Unilag",
        locationCode: "YVRD",
        isAvailable: true,
      },
      {
        name: "Yaba - University Road",
        locationCode: "FA2A",
        isAvailable: true,
      },
      {
        name: "Yaba - Yabatech",
        locationCode: "3EQA",
        isAvailable: true,
      },
    ],
  },
];

export default data;
