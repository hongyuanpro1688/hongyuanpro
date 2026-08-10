// 個案實績資料
// 目前照片為排版示意用暫代照片(非真實案場)，待實際案場照片到位後，
// 請直接替換 photos 陣列裡的圖片路徑即可，其餘欄位邏輯不需更動。
// 待後台管理系統(Phase 3)完成後，這份資料將改由後台讀取，不需再手動編輯此檔案。

const PROJECTS = [
  {
    id: "luzhou",
    idx: "01",
    name: "新北蘆洲案",
    region: "新北蘆洲區",
    size: "87-88坪",
    status: "已完銷",
    photos: [
      "images/case-luzhou.jpg",
      "https://images.unsplash.com/photo-1755735340764-3b077cab0c5c?fm=jpg&q=70&w=700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1755103114153-eb0a66e3725a?fm=jpg&q=70&w=700&auto=format&fit=crop"
    ],
    intro: "位於蘆洲長樂街，鄰近捷運與重劃區生活機能，陽台綠意植栽設計，鎖定首購與換屋族群。"
  },
  {
    id: "datong",
    idx: "02",
    name: "台北市大同案",
    region: "台北市大同區寧夏路",
    size: "27-47坪",
    status: "已完銷",
    photos: [
      "images/case-datong.jpg",
      "https://images.unsplash.com/photo-1757372429876-ebeda13edfab?fm=jpg&q=70&w=700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1757372429884-92e02350c5d9?fm=jpg&q=70&w=700&auto=format&fit=crop"
    ],
    intro: "大同區舊城再造代表個案之一，鄰近捷運與市中心機能，主打都心稀有釋出戶。"
  },
  {
    id: "sanchong",
    idx: "03",
    name: "新北三重案",
    region: "新北市三重區光陽街",
    size: "32-43坪",
    status: "已完銷",
    photos: [
      "images/case-sanchong.jpg",
      "https://images.unsplash.com/photo-1768638687896-35bde623d532?fm=jpg&q=70&w=700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1757970326337-95d7cca56fa1?fm=jpg&q=70&w=700&auto=format&fit=crop"
    ],
    intro: "三重精華地段，交通機能完善，鎖定小家庭與投資置產族群。"
  },
  {
    id: "linkou",
    idx: "04",
    name: "新北林口案",
    region: "新北市林口區仁愛路",
    size: "68-96坪",
    status: "已完銷",
    photos: [
      "images/case-linkou.jpg",
      "https://images.unsplash.com/photo-1755735340764-3b077cab0c5c?fm=jpg&q=70&w=700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1755103114153-eb0a66e3725a?fm=jpg&q=70&w=700&auto=format&fit=crop"
    ],
    intro: "座落林口8公里黃金科技廊道核心，鄰近科技產業聚落，鎖定科技新貴客群。"
  },
  {
    id: "qingpu",
    idx: "05",
    name: "桃園青埔案",
    region: "桃園市中壢區高鐵南路二段",
    size: "18-36坪",
    status: "已完銷",
    photos: [
      "images/case-qingpu.jpg",
      "https://images.unsplash.com/photo-1757970326337-95d7cca56fa1?fm=jpg&q=70&w=700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1768638687896-35bde623d532?fm=jpg&q=70&w=700&auto=format&fit=crop"
    ],
    intro: "青埔高鐵特區明星重劃區，鄰近高鐵、機捷雙軌交通，生活機能完善。"
  },
  {
    id: "shulin",
    idx: "06",
    name: "新北樹林案",
    region: "新北市三峽區大同路",
    size: "24.2~41.02坪",
    status: "已完銷",
    photos: [
      "images/case-shulin.jpg",
      "https://images.unsplash.com/photo-1757372429876-ebeda13edfab?fm=jpg&q=70&w=700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1755735340764-3b077cab0c5c?fm=jpg&q=70&w=700&auto=format&fit=crop"
    ],
    intro: "樹林生活機能成熟區域代表個案，鄰近傳統市場與學區，主打在地換屋需求。"
  },
  {
    id: "sanchong2",
    idx: "07",
    name: "新北三重案",
    region: "新北市三重區中正北路",
    size: "42-45坪",
    status: "已完銷",
    photos: [
      "images/case-sanchong2.jpg",
      "https://images.unsplash.com/photo-1768638687896-35bde623d532?fm=jpg&q=70&w=700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1755103114153-eb0a66e3725a?fm=jpg&q=70&w=700&auto=format&fit=crop"
    ],
    intro: "三重中正北路精華地段，交通機能完善，鎖定小家庭與投資置產族群。"
  },
  {
    id: "shulin2",
    idx: "08",
    name: "新北樹林案",
    region: "新北市樹林區大同路",
    size: "21-29坪",
    status: "即將公開",
    photos: [
      "images/case-shulin2.jpg",
      "https://images.unsplash.com/photo-1757372429876-ebeda13edfab?fm=jpg&q=70&w=700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1755735340764-3b077cab0c5c?fm=jpg&q=70&w=700&auto=format&fit=crop"
    ],
    intro: "樹林大同路全新代銷個案，即將公開，敬請期待。"
  },
  {
    id: "qingpu2",
    idx: "09",
    name: "桃園青埔案",
    region: "桃園市中壢區青芸路",
    size: "坪數洽詢中",
    status: "即將公開",
    photos: [
      "images/case-qingpu2.jpg",
      "https://images.unsplash.com/photo-1757970326337-95d7cca56fa1?fm=jpg&q=70&w=700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1768638687896-35bde623d532?fm=jpg&q=70&w=700&auto=format&fit=crop"
    ],
    intro: "青埔中壢青芸路全新代銷個案，即將公開，敬請期待。"
  }
];

// cover 圖直接沿用每個案場 photos 陣列的第一張，避免同一張圖重複兩份
PROJECTS.forEach(p => { if (!p.cover) p.cover = p.photos[0]; });
