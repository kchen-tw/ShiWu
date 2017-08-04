'use strict';

// 當網頁載入完開始javascript
$(function() {


    var painters = [{
            "name": "陳澄波",
            "tag": "chen_chengpo",
            "profileimg": "chen_chengpo.jpg",
            "homepage": "chen_chengpo.html",
            "dates": "台灣 （1895 - 1947）",
            "introduction": "「我是油彩的化身。」1895，是個時代的改變，他來到了這世界；1945，他離開了，也是因為時代的改變。在他年輕的歲月裡，父母相繼過世，依靠叔父的他，每天除了上學，還要撿柴、撿蕃薯，但這沒改變他的求學熱情，長大後他反而成為了一個熱心助人的藝術家，以純真浪漫的性情，表現出了台灣迷人的特質。二二八事件後，他因參與和平使節，被他所認同的政府無情的槍決...",
            "paintings": [{
                    "name": "淡水夕照",
                    "imgfile": "OCT1_35.jpg",
                    "model": "OCT1_35"
                },
                {
                    "name": "清流",
                    "imgfile": "OCS1_03.jpg",
                    "model": "OCS1_03"
                },
                {
                    "name": "嘉義街景",
                    "imgfile": "OCT1_06.jpg",
                    "model": "OCS1_06"
                },
                {
                    "name": "玉山積雪",
                    "imgfile": "OW1_05.jpg",
                    "model": "OW1_05"
                }
            ]
        },
        {
            "name": "陳植棋",
            "tag": "chen_chihchi",
            "profileimg": "chen_chihchi.jpg",
            "homepage": "chen_chihchi.html",
            "dates": "台灣 （1906 - 1931）",
            "introduction": "「人生是短促的，藝術才是永遠。」這是陳植棋再赴日留學歡送會上說的，沒想到，他卻親自實現了這句話。他具有梵谷的熱情、高更的睿智、羅特列克的放縱，卻與席勒一樣，英年早逝。",
            "paintings": [{
                    "name": "自畫像",
                    "imgfile": "chenchichi_self.jpg",
                    "model": "chenchichi_self"
                },
                {
                    "name": "台灣風景",
                    "imgfile": "chenchichi_Taiwan.png",
                    "model": "chenchichi_Taiwan"
                },
                {
                    "name": "淡水教堂",
                    "imgfile": "chenchichi_Dashuchurch.jpg",
                    "model": "chenchichi_Dashuchurch"
                },
                {
                    "name": "柿子與八角盤",
                    "imgfile": "chenchichi_food.jpg",
                    "model": "chenchichi_food"
                },
            ]
        },
        {
            "name": "石川欽一郎",
            "tag": "ishikawa_chinichiro",
            "profileimg": "ishikawa_chinichiro.jpg",
            "homepage": "ishikawa_chinchiro.html",
            "dates": "日本 （1871 - 1945）",
            "introduction": "石川欽一郎，一位留歐的紳士，是台灣藝壇的開山祖師，桃李滿門，今日我們所談的台灣前輩藝術家們，幾乎就是石川同學會！",
            "paintings": [{
                    "name": "台中豐原道",
                    "imgfile": "Ishikawa_Taichung.jpg",
                    "model": "Ishikawa_Taichung"
                },
                {
                    "name": "總督府",
                    "imgfile": "Ishikawa_taiwan.jpg",
                    "model": "Ishikawa_taiwan"
                }
            ]
        },
        {
            "name": "倪蔣懷",
            "tag": "ni_chianghuai",
            "profileimg": "ni_chianghuai.jpg",
            "homepage": "ni_chianghuai.html",
            "dates": "台灣 （1894 - 1943）",
            "introduction": "1945，每一次的空襲，都是他的妻子，背著他與石川老師的畫作，逃跑；這些用生命保存下來的作品，給我們了一絲的機會，認識老畫家，還有他的年代。為什麼除了他的作品外，還有石川欽一郎的呢？原來倪蔣懷先生除了是台灣第一位水彩畫家外，更是第一代的收藏家。",
            "paintings": [{
                "name": "田寮港畔看基隆郵局",
                "imgfile": "Ni_Keelung.jpg",
                "model": "NI_Keelung02"
            }]
        },
        {
            "name": "黃榮燦",
            "tag": "huang_jungtsan",
            "profileimg": "huang_jungtsan.jpg",
            "homepage": "huang_jungtsan.html",
            "dates": "台灣 （1920 - 1952）",
            "introduction": "馬場町現在是台北河濱的親水公園，但在五十年前，他卻不是這樣悠閒的好去處。冤！冤！冤！他的學生說，這是他們最後聽到老師講的幾個字，然後就再也看不到他了，為了自保，他們有很長一段時間，不會說自己是“他”的學生。",
            "paintings": [{
                    "name": "台灣農民作家楊逵之家",
                    "imgfile": "Huang_Home_of_the_Farmer_Writer_Yang_Kui_in_Taiwan.jpg",
                    "model": "Huang_Home_of_the_Farmer_Writer_Yang_Kui_in_Taiwan"
                },
                {
                    "name": "恐怖的檢查",
                    "imgfile": "Huang_Pullover.jpg",
                    "model": "Huang_Pullover"
                }
            ]
        },
        {
            "name": "黃土水",
            "tag": "huang_tushui",
            "profileimg": "huang_tushui.gif",
            "homepage": "huang_tushui.html",
            "dates": "台灣 （1895 - 1930）",
            "introduction": "一封校長的推薦信，改變了他的人生，他帶著南國鄉親的期望，遠赴東京。生在這個國家，就愛這個國家。他努力以作品告訴日本友人，國境之南，不是蠻荒之地，而是寶島。第一位入選帝展的藝術家，是他，黃土水。",
            "paintings": [{
                "name": "婦女頭像",
                "imgfile": "huangtushui_womwn.jpg",
                "model": "huangtushui_womwn"
            }]
        },
        {
            "name": "鹽月桃甫",
            "tag": "shiotsuki_toho",
            "profileimg": "shiotsuki_toho.jpg",
            "homepage": "shiotsuki_toho.html",
            "dates": "日本 （1886 - 1954）",
            "introduction": "鹽月桃甫是末代武士的後代，因為民治維新而一貧如洗，身為么子的他，因為與祖父同天生日，被認為是祖父轉世，性命才得以保住。因為經濟需要而來台任教，從此開啟了他與台灣藝壇的情緣，特別是在藝術教育和原住民繪畫上。",
            "paintings": [{
                "name": "泰雅之女",
                "imgfile": "Shiotsuki_Taiyiwoman.jpg",
                "model": "Shiotsuki_Taiyiwoman"
            }]
        },
        {
            "name": "鄉原古統",
            "tag": "gobara_koto",
            "profileimg": "gobara_koto.jpg",
            "homepage": "gobara_koto.html",
            "dates": "日本 （1887 - 1965）",
            "introduction": "鄉原古統，是第一批來台任教的老師，與石川等人成立臺展，在他的作品中，我們有機會窺見當時台北成的繁華，與台灣之景。",
            "paintings": [{
                "name": "新店溪",
                "imgfile": "Gobara_HsinTein.jpg",
                "model": "Gobara_HsinTein"
            },
            {
                "name": "台灣總督府夜景",
                "imgfile": "Gobara_Taiwan_palace.jpg",
                "model": "Gobara_Taiwan_palace"
            }]
        }
    ];

    var loader = new Loader($('.loader-wrapper'));
    var painter_select = new Vue({
        el: "#painter-select",
        data: {
            painters
        }
    });
    var painter_list = new Vue({
        el: "#painter-list",
        data: {
            painters
        }
    });
})
