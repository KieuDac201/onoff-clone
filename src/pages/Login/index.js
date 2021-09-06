import React from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

let female = [
  {
    gender: "Trẻ em",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H12TS18003-SJ01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H12TS18003.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H12TS18003-01.jpg",
    ],
    name: "Áo bé gái Dri-Balance",
    price: 174000,
    sold: 101,
    type: "Quần áo",
  },
  {
    gender: "Trẻ em",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H12BS18002-SJ01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H12BS18002.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H12BS18002-01.jpg",
    ],
    name: "Quần Short bé gái Dri-Balance",
    price: 139000,
    sold: 579,
    type: "Quần áo",
  },
  {
    gender: "Trẻ em",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H13TS17014-SJ02.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H13TS17014.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H13TS17014-01.jpg",
    ],
    name: "Áo mặc nhà bé trai Cotton USA",
    price: 104000,
    sold: 971,
    type: "Quần áo",
  },
  {
    gender: "Trẻ em",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H11SQ19063-MX03.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H11SQ19063.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H11SQ19063-01.jpg",
    ],
    name: "Pack 2 đôi tất TE bé trai 2-4 tuổi",
    price: 42000,
    sold: 232,
    type: "Bít tất",
  },
  {
    gender: "Trẻ em",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H12SQ17140-PW01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H12SQ17140.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H12SQ17140-PK05.jpg",
    ],
    name: "Tất bé gái cổ trung 5-7 tuổi",
    price: 25000,
    sold: 456,
    type: "Bít tất",
  },
  {
    gender: "Trẻ em",
    images: [
      "https://onoff.vn/media/catalog/product/cache/fa60f0aa6830c5036338d99fc7e06ab0/H13SC19061.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H13SC19061-PW01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H13SC19061-PA02.jpg",
    ],
    name: "Tất TE bé trai 5-7 tuổi",
    price: 25000,
    sold: 456,
    type: "Bít tất",
  },
  {
    gender: "Trẻ em",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H11SQ19064-MX05.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H11SQ19064-MX04.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H11SQ19064-MX03.jpg",
    ],
    name: "Pack 2 đôi tất TE bé gái 6-24 tháng",
    price: 42000,
    sold: 186,
    type: "Bít tất",
  },
  {
    gender: "Trẻ em",
    images: ["", "", ""],
    name: "Pack 2 đôi tất TE bé gái 6-24 tháng",
    price: 42000,
    sold: 186,
    type: "Đồ lót",
  },
  {
    gender: "Trẻ em",
    images: [
      "https://onoff.vn/media/catalog/product/cache/fa60f0aa6830c5036338d99fc7e06ab0/H12BB17002.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H12BB17002-SG06.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H12BB17002-SV01.jpg",
    ],
    name: "Quần lót bé gái Cotton USA",
    price: 48000,
    sold: 165,
    type: "Đồ lót",
  },
  {
    gender: "Trẻ em",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H13BU19148-MX02.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H13BU19148-MX04.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H13BU19148-MX01.jpg",
    ],
    name: "Pack 2 quần lót bé trai Cotton USA",
    price: 90000,
    sold: 351,
    type: "Đồ lót",
  },
  {
    gender: "Trẻ em",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H13BU18002-SB01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H13BU18002-SV01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H13BU18002-SO02.jpg",
    ],
    name: "Quần lót bé trai dáng Brief Cotton USA",
    price: 48000,
    sold: 186,
    type: "Đồ lót",
  },
  {
    gender: "Nam",
    images: [
      "https://onoff.vn/media/catalog/product/cache/fa60f0aa6830c5036338d99fc7e06ab0/H17TP20152-SY01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17TP20152.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17TP20152-SV01.jpg",
    ],
    name: "Áo polo nam cộc tay",
    price: 359000,
    sold: 586,
    type: "Quần áo",
  },
  {
    gender: "Nam",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17BS19031-SA02.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17BS19031.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17BS19031-01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17BS19031-02.jpg",
    ],
    name: "Quần lửng nam mặc nhà",
    price: 224000,
    sold: 586,
    type: "Quần áo",
  },
  {
    gender: "Nam",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17TJ20079-SA02.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17TJ20079.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17TJ20079-SG01.jpg",
    ],
    name: "Áo khoác nam 5 trong 1",
    price: 629000,
    sold: 509,
    type: "Quần áo",
  },
  {
    gender: "Nam",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17TT17001-SJ01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17TT17001-SB01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H17TT17001-SB01.jpg",
    ],
    name: "Áo thun nam ba lỗ Dri-Balance",
    price: 314000,
    sold: 509,
    type: "Quần áo",
  },
  {
    gender: "Nữ",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TR19046-SA03.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TR19046.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TR19046-01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TR19046-02.jpg",
    ],
    name: "Áo crop top thể thao nữ",
    price: 359000,
    sold: 663,
    type: "Quần áo",
  },
  {
    gender: "Nữ",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TT19050-SG04.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TT19050.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TT19050-01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TT19050-02.jpg",
    ],
    name: "Áo Tank Top nữ",
    price: 269000,
    sold: 1440,
    type: "Quần áo",
  },
  {
    gender: "Nữ",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/W56TS20391.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/W56TS20391-WA01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/W56TS20391-WK01.jpg",
    ],
    name: "Áo thun nữ kẻ ngang",
    price: 134000,
    sold: 104,
    type: "Quần áo",
  },
  {
    gender: "Nữ",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TS19023-PA07.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TS19023.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TS19023-01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16TS19023-02.jpg",
    ],
    name: "Áo Active Dri-balance nữ cổ tròn",
    price: 269000,
    sold: 672,
    type: "Quần áo",
  },
  {
    gender: "Nữ",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BS19025-SG03.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BS19025.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BS19025-01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BS19025-02.jpg",
    ],
    name: "Quần short active nữ",
    price: 134000,
    sold: 104,
    type: "Quần áo",
  },
  {
    gender: "Nữ",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BB17010-SM02.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BB17010.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BB17010-01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BB17010-02.jpg",
    ],
    name: "Quần lót boyshort Seamless",
    price: 134000,
    sold: 2627,
    type: "Đồ lót",
  },
  {
    gender: "Nữ",
    images: [
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BU20081-SA04.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BU20081.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BU20081-01.jpg",
      "https://onoff.vn/media/catalog/product/cache/697fd70fe59708f2ecddac7085cd721b/H16BU20081-02.jpg",
    ],
    name: "Quần lót nữ Microfiber",
    price: 89000,
    sold: 2064,
    type: "Đồ lót",
  },
];

const Login = () => {
  const citiesRef = collection(db, "products");

  const func = async (item) => {
    await setDoc(doc(citiesRef), item);
  };
  const fetchData = () => {
    female.forEach(func);
  };
  return <button onClick={fetchData}>Login</button>;
};

export default Login;
