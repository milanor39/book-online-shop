export default {
    namespaced: true,
    state() {
        return {
            books: [
                {
                    id: 'b1',
                    type: '藝術設計',
                    engType: 'art',
                    name: 'ミニキャラの描き方　「ちまっとかわいい」を描く基本＆表現テクニック',
                    author: '夢ノ内千春',
                    cover: 'https://m.media-amazon.com/images/P/B0BK8TD6FH.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'エムディエヌコーポレーション',
                    publicationDate: '2022/10/28',
                    upLoadDate: 20221028,
                    bookType: '単行本',
                    size: '25.7 x 18.8 x 1.15 cm',
                    pages: '184頁',
                    isbn: '978-4295204442',
                    price: 620,
                    stock: 2,
                    introduce: [
                        '【かわいさ濃縮！“ちっちゃくてかわいい”魅力を最大限に表現するプロの手法！】',
                        'ミニキャラ制作の第一線で活躍するイラストレーター 夢ノ内千春がミニキャラをかわいく描く方法を解説！',
                        '基本の描き方からはじまり、表情・ポーズ・ファッションのバリエーション、色の塗り方まで、さまざまなテクニックを学ぶことができます。解説は描き下ろしイラスト中心で、描き方のコツが目で見てわかります。文章をじっくり読んで理解するのは苦手…という方も安心です。',
                        'ほかにも、アクリルグッズ・缶バッジのつくり方や、学制服・王子様・魔法使いといった人気テーマのキャラクターデザインガイドなども掲載！創作にも役立つ、ミニキャラ制作のヒントが満載です。',
                        'さらに、トレース可能な素体ポーズのダウンロードデータつき！'
                    ],
                    sales: 0,
                    recommend: 100
                },
                {
                    id: 'b2',
                    type: '藝術設計',
                    engType: 'art',
                    name: '12色でスタート! はじめてのコピックイラスト',
                    author: 'ばびりぃ',
                    cover: 'https://m.media-amazon.com/images/I/81joMPS49vL.jpg',
                    publishingHouse: 'エムディエヌコーポレーション',
                    publicationDate: '2022/10/28',
                    upLoadDate: 20221028,
                    bookType: '単行本',
                    size: '25.7 x 19 x 0.6 cm',
                    pages: '68頁',
                    isbn: '978-4837308072',
                    price: 300,
                    stock: 30,
                    introduce: [
                        '「色がたくさんあって選べない！」「キャラクターは、どこから塗ればいいの？」そんな悩みをこの本が解決！',
                        '長年コピックを愛用しているイラストレーター ばびりぃとコピックのメーカー・トゥーマーカープロダクツがおくる、コピック初心者の方のための公式ガイドブックです。',
                        '数ある色の中からおすすめのコピックチャオ 12色を厳選。（セット製品「コピックチャオ スタート12色セット」の色がこの12色にあたります。）初心者の方が迷いがちな紙やドローイングペンといった画材の選び方から、ぼかしやグラデーション、混色といった基本テクニック、さらにキャラクターの塗り方までをこの１冊にコンパクトにまとめました。',
                        'その他、塗り方やカラー、柄のバリエーションアイデアも豊富に収録。たった12色でコピックの魅力を存分に楽しめます。',
                        '巻末には、コピック専用紙「特選上質紙」を使った下絵つき！コピーして何度も楽しむのはもちろん、そのまますぐに塗り始めることができます。'
                    ],
                    sales: 0,
                    recommend: 10
                },
                {
                    id: 'b3',
                    type: '文學小說',
                    engType: 'literature',
                    name: '東京百景（角川文庫）',
                    author: '又吉 直樹',
                    cover: 'https://m.media-amazon.com/images/P/B0892CMTTW.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'KADOKAWA',
                    publicationDate: '2020/6/12',
                    upLoadDate: 2020612,
                    bookType: '文庫',
                    size: '10.7 x 1.3 x 14.8 cm',
                    pages: '304頁',
                    isbn: '978-4048967709',
                    price: 150,
                    stock: 20,
                    introduce: [
                        '芥川賞受賞作『火花』、話題の映画の原作小説『劇場』の元となるエピソードを含む100篇のエッセイからなる又吉文学の原点的作品『東京百景』が７年の時を超えて、待望の文庫化。',
                        '18歳で芸人になることを夢見て東京に上京し、自分の拙さを思い知らされ、傷つき、苦しみ、後悔し、ささやかな幸福に微笑んだ青春の軌跡。',
                        '東京で夢を抱える人たちに、そして東京で夢破れ去っていく全ての人たちに装丁を一新し、百一景と言うべき加筆を行い、新しい生命を吹き込んで届けます。'
                    ],
                    sales: 0,
                    recommend: 10
                },
                {
                    id: 'b4',
                    type: '文學小說',
                    engType: 'literature',
                    name: '傲慢と善良（朝日文庫）',
                    author: '辻村 深月',
                    cover: 'https://m.media-amazon.com/images/P/B0BCNTVTNR.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '朝日新聞出版',
                    publicationDate: '2022/9/7',
                    upLoadDate: 20220907,
                    bookType: '文庫',
                    size: '1.9 x 10.5 x 14.8 cm',
                    pages: '504頁',
                    isbn: '978-4022650597',
                    price: 200,
                    stock: 20,
                    introduce: [
                        '婚約者・坂庭真実が姿を消した。その居場所を探すため、西澤架は、彼女の「過去」と向き合うことになる。「恋愛だけでなく生きていくうえでのあらゆる悩みに答えてくれる物語」と読者から圧倒的な支持を得た作品が遂に文庫化。《解説・朝井リョウ》'
                    ],
                    sales: 100,
                    recommend: 1
                },
                {
                    id: 'b5',
                    type: '漫畫',
                    engType: 'comic',
                    name: 'ぼっち・ざ・ろっく！　１巻 (まんがタイムKRコミックス)',
                    author: 'はまじあき',
                    cover: 'https://m.media-amazon.com/images/P/B07N3NRSKF.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '芳文社',
                    publicationDate: '2019/2/27',
                    upLoadDate: 20190227,
                    bookType: 'コミック',
                    size: '14.8 x 1.1 x 21 cm',
                    pages: '120頁',
                    isbn: '978-4832270725',
                    price: 120,
                    stock: 20,
                    introduce: [
                        '「ぼっちちゃん」こと後藤ひとりは、ギターを愛する孤独な少女。 家で一人寂しく弾くだけの毎日でしたが、ひょんなことから伊地知虹夏が率いる「結束バンド」に加入することに。 人前での演奏に不慣れな後藤は、立派なバンドマンになれるのか！？ 全国のぼっちな少年少女に届ける、いま最高にアツい音楽漫画！！'
                    ],
                    sales: 100,
                    recommend: 100
                },
                {
                    id: 'b6',
                    type: '漫畫',
                    engType: 'comic',
                    name: 'しあわせ鳥見んぐ　１巻 (まんがタイムＫＲコミックス)',
                    author: 'わらびもちきなこ',
                    cover: 'https://m.media-amazon.com/images/P/B09H2SDT6B.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '芳文社',
                    publicationDate: '2021/10/27',
                    upLoadDate: 20211027,
                    bookType: 'コミック',
                    size: '14.8 x 1.1 x 21 cm',
                    pages: '120頁',
                    isbn: '978-4832273184',
                    price: 120,
                    stock: 30,
                    introduce: [
                        '「絵に個性がない」と言われ悩む芸大生・すずは、ある日熱心に鳥を観察する少女・翼と出会う。',
                        '鳥見(バードウォッチング)について熱く語る翼に影響を受け、鳥の絵を描き始めたすずは、初心者ながら鳥見を始めてみることに…!',
                        '芸大生×鳥見ガチ勢のバードウォッチング4コマ!'
                    ],
                    recommend: 1
                },
                {
                    id: 'b7',
                    type: '漫畫',
                    engType: 'comic',
                    name: 'ワニ男爵（１） (モーニングコミックス) ',
                    author: '岡田卓也',
                    cover: 'https://m.media-amazon.com/images/P/B073TTK2FF.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '講談社',
                    publicationDate: '2017/7/21',
                    upLoadDate: 20170727,
                    bookType: 'コミック',
                    size: '14.8 x 1.1 x 21 cm',
                    pages: '160頁',
                    isbn: '978-4065100585',
                    price: 150,
                    stock: 30,
                    introduce: [
                        'その名はアルファルド・Ｊ・ドンソン。',
                        'ワニ。職業：小説家。楽しみは仲よしのウサギ、ラビットボーイとの食べ歩き（生ガキや讃岐うどんなど）。超ジェントルマンだけど、お店で時々「野生」が騒いでしまい…。',
                        'モーニングで、作者も予想外の大反響！　動物好きも、食べ歩き好きも、貴族好きも、『あらしのよるに』好きもきっと満腹。ノーブルにしてワイルドな、なさそうでなかった漫画の誕生！'
                    ],
                    recommend: 4
                },
                {
                    id: 'b8',
                    type: '漫畫',
                    engType: 'comic',
                    name: 'Vivy -Fluorite Eye’s Song- 1巻 (BLADE)',
                    author: 'Vivy Score, 山高守人',
                    cover: 'https://m.media-amazon.com/images/P/B09BDYND7N.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'マッグガーデン',
                    publicationDate: '2021/8/10',
                    upLoadDate: 20210810,
                    bookType: 'コミック',
                    size: '12.8 x 1.3 x 18.2 cm',
                    pages: '164頁',
                    isbn: '978-4800011220',
                    price: 100,
                    stock: 20,
                    introduce: [
                        'これは<私(ヴィヴィ)>が<私(AI)>を滅ぼす物語――。',
                        `オリジナルアニメ「Vivy -Fluorite Eye's Song-」公式コミカライズ!`,
                        '気鋭・山高守人が美麗に描く、SFヒューマンドラマ超傑作!',
                        '国内最大級のテーマパーク『ニーアランド』で活動する歌姫AI・ヴィヴィのもとに、突如現れた未知のAI・マツモト。100年後の未来からやってきたと語るマツモトは、人類とAIとが繰り広げる最終戦争を阻止するため、ヴィヴィに『シンギュラリティ計画』への協力を要請する――。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b9',
                    type: '漫畫',
                    engType: 'comic',
                    name: 'ミミの怪談　完全版 (ソノラマ＋コミックス)',
                    author: '伊藤潤二',
                    cover: 'https://m.media-amazon.com/images/P/B09QKL1B1T.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '朝日新聞出版',
                    publicationDate: '2022/1/20',
                    upLoadDate: 20220128,
                    bookType: 'コミック',
                    size: '21 x 14.8 x 1.6 cm',
                    pages: '226頁',
                    isbn: '978-4022143358',
                    price: 220,
                    stock: 5,
                    introduce: [
                        '現代怪異を蒐集した「新耳袋」とホラー漫画の鬼才、3人の巨頭による奇跡の競演作が単行本未収録作品を加えて完全版として登場!!',
                        '女子大生ミミとボーイフレンドを襲うさまざまな不可思議かつ戦慄の瞬間! ふたりはこの危機をどう切り抜けるのか!?'
                    ]
                },
                {
                    id: 'b10',
                    type: '漫畫',
                    engType: 'comic',
                    name: 'お兄ちゃんはおしまい！ (REXコミックス)',
                    author: 'ねことうふ',
                    cover: 'https://m.media-amazon.com/images/P/B07DXHPJFV.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '一迅社',
                    publicationDate: '2018/6/27',
                    upLoadDate: 20180627,
                    bookType: 'コミック',
                    size: '12.8 x 1.3 x 18.2 cm',
                    pages: '176頁',
                    isbn: '978-4758067508',
                    price: 180,
                    stock: 0,
                    introduce: [
                        '引きこもりの青年・緒山真尋は妹・みはりに怪しげな薬を飲まされて女の子になってしまう。トイレにブラジャー…女の子の生活は知らないことばかり。お兄ちゃんの運命は…!? WEBで大好評のTS漫画がついに単行本化!! ここでしか読めない描き下ろし漫画も特別収録!!'
                    ],
                    recommend: 1
                },
                {
                    id: 'b11',
                    type: '漫畫',
                    engType: 'comic',
                    name: 'キングダム 67 (ヤングジャンプコミックス)',
                    author: '原 泰久',
                    cover: 'https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088925684/1200/9784088925684.jpg',
                    publishingHouse: '集英社',
                    publicationDate: '2023/1/19',
                    upLoadDate: 20230119,
                    bookType: 'コミック',
                    size: '12.8 x 1.8 x 18.2 cm',
                    pages: '226頁',
                    isbn: '978-4088925684',
                    price: 180,
                    stock: 10,
                    introduce: [
                        '六将・桓騎 対 三大天・李牧',
                        '紀元前233年 秦趙宜安決戦',
                        '飛信隊と楽華軍が離脱し、追い詰められた桓騎中央軍。',
                        `“弱点”を突き、盤石な攻勢を仕掛けた李牧だが、突如桓騎は布陣を開始する。`,
                        '見たことのない陣形に戸惑う李牧軍。不敵な笑みを浮かべる桓騎は、包囲を突破し、秦軍に僅かな望みを繋げるか…!?'
                    ],
                    recommend: 1
                },
                {
                    id: 'b12',
                    type: '漫畫',
                    engType: 'comic',
                    name: 'SLAM DUNK 新装再編版 3 (愛蔵版コミックス)',
                    author: '井上 雄彦',
                    cover: 'https://m.media-amazon.com/images/I/91gTybjI-RL.jpg',
                    publishingHouse: '集英社',
                    publicationDate: '2018/6/1',
                    upLoadDate: 20180602,
                    bookType: 'コミック',
                    size: '11.2 x 1.9 x 17.6 cm',
                    pages: '272頁',
                    isbn: '978-4087925333',
                    price: 170,
                    stock: 10,
                    introduce: [
                        '代替わりした湘北バスケット部初の対外試合! 相手は、前年度県ベスト4の陵南。湘北は、主将の赤木とスーパールーキーの流川楓が活躍し対抗する!! 一方、控えに甘んじる「秘密兵器」花道の心境は…。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b13',
                    type: '漫畫',
                    engType: 'comic',
                    name: '魔法中年 1 (ヤングアニマルコミックス) ',
                    author: '灰刃 ねむみ (著), 魔木 (企画・原案)',
                    cover: 'https://m.media-amazon.com/images/P/B0B6P7K8SF.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '白泉社',
                    publicationDate: '2022/8/29',
                    upLoadDate: 20220830,
                    bookType: 'コミック',
                    size: '13 x 1.6 x 18.3 cm',
                    pages: '160頁',
                    isbn: '978-4592165132',
                    price: 200,
                    stock: 0,
                    introduce: [
                        'Twitterで大バズリした話題作が遂に登場!!',
                        '魔法ステッキを持って、華麗に変身し戦う「おっさん」!?',
                        '魔法少女が戦う姿が娯楽興行として成立する世界で、少女じゃ手に負えない強敵を処理する「中年」達がいた―社会の陰で奮闘する全てのおじさんと中間管理職に捧げる、マジカル社畜無双ストーリー!'
                    ],
                    recommend: 1
                },
                {
                    id: 'b14',
                    type: '漫畫',
                    engType: 'comic',
                    name: '呪術廻戦 21 (ジャンプコミックス)',
                    author: '芥見 下々',
                    cover: 'https://m.media-amazon.com/images/P/B0BKSK32N3.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '集英社',
                    publicationDate: '2022/12/22',
                    upLoadDate: 20221228,
                    bookType: 'コミック',
                    size: '11.2 x 1.5 x 17.6 cm',
                    pages: '216頁',
                    isbn: '978-4088833118',
                    price: 120,
                    stock: 0,
                    introduce: [
                        '高得点所持の鹿紫雲を狙い東京第2結界に赴いた秤とパンダだが、突入の際に分断され秤は漫画家志望の泳者・シャルルと相対する!!',
                        '一方、予期せず鹿紫雲と遭遇したパンダは圧倒的な力量差で追い詰められ…!?'
                    ],
                    recommend: 1
                },
                {
                    id: 'b15',
                    type: '漫畫',
                    engType: 'comic',
                    name: 'ジョジョリオン 24 (ジャンプコミックス) ',
                    author: '荒木 飛呂彦',
                    cover: 'https://m.media-amazon.com/images/P/B08KCYNWQT.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '集英社',
                    publicationDate: '2020/10/06',
                    upLoadDate: 20201006,
                    bookType: 'コミック',
                    size: '11.2 x 1.4 x 17.6 cm',
                    pages: '200頁',
                    isbn: '978-4088823942',
                    price: 180,
                    stock: 0,
                    introduce: [
                        '新ロカカカの鉢の存在が明らかとなった東方邸。窮地に立たされる康穂に手を差し伸べようとする憲助だが…。東方家を勝利へ導くため常敏が選んだ「正しい道」とは!? そして「追わせる」作戦に出た定助の運命は──!'
                    ],
                    recommend: 999
                },
                {
                    id: 'b16',
                    type: '漫畫',
                    engType: 'comic',
                    name: 'パリピ孔明(3) (ヤンマガKCスペシャル)',
                    author: '四葉 夕卜 (原著), 小川 亮',
                    cover: 'https://m.media-amazon.com/images/P/B08KPW9KP1.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '講談社',
                    publicationDate: '2020/10/14',
                    upLoadDate: 20201014,
                    bookType: 'コミック',
                    size: '13 x 1.1 x 18.3 cm',
                    pages: '160頁',
                    isbn: '978-4065209981',
                    price: 180,
                    stock: 0,
                    introduce: [
                        '現代渋谷へ転生した諸葛孔明は、歌手を夢見る月見英子の軍師として日々クラブ界隈で生きている! 超巨大野外フェス・サマーソニアへの出場権をかけて、「10万イイネ企画」に挑む孔明と英子。勝利の鍵がラッパー獲得にあると睨む孔明は、才能がありながらスランプに陥るKABE太人を仲間にすべく、MCバトルをしかける!'
                    ],
                    recommend: 1
                },
                {
                    id: 'b17',
                    type: '商業理財',
                    engType: 'business',
                    name: '経営×人材の超プロが教える 人を選ぶ技術',
                    author: '小野 壮彦',
                    cover: 'https://shop.r10s.jp/book/cabinet/2060/9784866802060_1_2.jpg',
                    publishingHouse: 'フォレスト出版',
                    publicationDate: '2022/11/21',
                    upLoadDate: 20221121,
                    bookType: '単行本',
                    size: '1.8 x 12.9 x 18.8 cm',
                    pages: '296頁',
                    isbn: '978-4866802060',
                    price: 550,
                    stock: 30,
                    introduce: [
                        '「人を見る目」は鍛えられます！人を見抜く力が人生を変える。',
                        '100社以上、約5000人のグローバルカンパニーのエグゼクティブの目利きをしてきた超一級ヘッドハンターが、人物プロファイリングの奥義を初公開！',
                        '「誰を選ぶか」で、すべてが決まる。'
                    ],
                    sales: 100
                },
                {
                    id: 'b18',
                    type: '商業理財',
                    engType: 'business',
                    name: 'キーエンス解剖　最強企業のメカニズム',
                    author: '西岡 杏',
                    cover: 'https://m.media-amazon.com/images/P/B0BQL5WZ6Y.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '日経BP',
                    publicationDate: '2021/12/7',
                    bookType: '単行本',
                    size: '18.8 x 12.8 x 1.7 cm',
                    pages: '248頁',
                    isbn: '978-4478114131',
                    price: 600,
                    stock: 130,
                    introduce: [
                        '営業利益率は脅威の55％超、社員の平均年間給与は2000万円超──。売上高は1兆円に満たないながらも日本の時価総額ランキングで第3位に入るのがキーエンスだ。日本を支えてきた製造業の弱体化が指摘される中、なぜキーエンスはこれだけの結果を残せるのか。その神髄は顧客の心をつかむ営業や商品開発、人材育成の仕組みにある。外部にほとんど明かされないキーエンスの正体に日経ビジネス記者が迫る。'
                    ],
                    recommend: 10
                },
                {
                    id: 'b19',
                    type: '文學小說',
                    engType: 'literature',
                    name: 'テミスの剣',
                    author: '中山 七里',
                    cover: 'https://m.media-amazon.com/images/P/B06XKG78LR.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '文藝春秋',
                    publicationDate: '2014/10/24',
                    upLoadDate: 20141024,
                    bookType: '単行本',
                    size: '10.7 x 1.3 x 14.8 cm',
                    pages: '364頁',
                    isbn: '978-4163901497',
                    price: 150,
                    stock: 20,
                    introduce: [
                        '昭和五十九年、台風の夜。埼玉県浦和市で不動産会社経営の夫婦が殺された。浦和署の若手刑事・渡瀬は、ベテラン刑事の鳴海とコンビを組み、楠木青年への苛烈な聴取の結果、犯行の自白を得るが、楠木は、裁判で供述を一転。しかし、死刑が確定し、楠木は獄中で自殺してしまう。',
                        '事件から五年後の平成元年の冬。同一管内で発生した窃盗事件をきっかけに、渡瀬は、昭和五十九年の強盗殺人の真犯人が他にいる可能性に気づく。渡瀬は、警察内部の激しい妨害と戦いながら、過去の事件を洗い直していくが……。',
                        '正義とは? 真実とは? 人の真理を暴くのは、はたして法をつかさどる女神テミスが持つ「天秤」なのか?それとも「剣」なのか? 最後に鉄槌を下されるのは?',
                        '司法制度に、大きな疑問を投げかける王道社会派ミステリーと、ラストまで二転三転し、読者を翻弄するエンターテイメント性に溢れた本格ミステリーの奇跡の融合がついに実現!!',
                        '『連続殺人鬼カエル男』や『贖罪の奏鳴曲』などで中山ファンにはおなじみの渡瀬警部が「刑事の鬼」になるまでの前日譚。そして『静おばあちゃんにおまかせ』で、冴えわたる推理を見せた現役裁判官時代の高遠寺静も登場。',
                        '『どんでん返しの帝王』の異名をとる中山七里が、満を持して「司法制度」と「冤罪」という、大きなテーマに挑む。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b20',
                    type: '文學小說',
                    engType: 'literature',
                    name: 'テスカトリポカ',
                    author: '佐藤 究',
                    cover: 'https://m.media-amazon.com/images/P/B08VWBX3G7.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'KADOKAWA',
                    publicationDate: '2021/2/19',
                    upLoadDate: 20210219,
                    bookType: 'ハードカバー',
                    size: '14.1 x 3.4 x 19.5 cm',
                    pages: '560頁',
                    isbn: '978-4041096987',
                    price: 650,
                    stock: 120,
                    introduce: [
                        '第165回直木賞受賞!',
                        '鬼才・佐藤究が放つ、クライムノベルの新究極、世界文学の新次元!',
                        'メキシコのカルテルに君臨した麻薬密売人のバルミロ・カサソラは、対立組織との抗争の果てにメキシコから逃走し、潜伏先のジャカルタで日本人の臓器ブローカーと出会った。二人は新たな臓器ビジネスを実現させるため日本へと向かう。川崎に生まれ育った天涯孤独の少年・土方コシモはバルミロと出会い、その才能を見出され、知らぬ間に彼らの犯罪に巻きこまれていく――。海を越えて交錯する運命の背後に、滅亡した王国〈アステカ〉の恐るべき神の影がちらつく。人間は暴力から逃れられるのか。心臓密売人の恐怖がやってくる。誰も見たことのない、圧倒的な悪夢と祝祭が、幕を開ける。第34回山本周五郎賞受賞。'
                    ],
                    recommend: 10
                },
                {
                    id: 'b21',
                    type: '文學小說',
                    engType: 'literature',
                    name: 'いつも旅のなか (角川文庫)',
                    author: '角田 光代',
                    cover: 'https://m.media-amazon.com/images/P/B00DI8TTSK.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'KADOKAWA',
                    publicationDate: '2013/6/25',
                    upLoadDate: 20130625,
                    bookType: '文庫',
                    size: '10.7 x 1.3 x 14.8 cm',
                    pages: '252頁',
                    isbn: '978-4048967709',
                    price: 150,
                    stock: 120,
                    introduce: [
                        '仕事も名前も年齢も、なんにも持っていない自分に会いにゆく。モロッコ、ロシア、ギリシャ、スリランカ、ラオス、イタリア、ベトナム、ネパール、モンゴル、タイ、アイルランド、韓国、スペイン、キューバ…直木賞受賞作家がこよなく愛する旅を綴った最新作。 --このテキストは、絶版本またはこのタイトルには設定されていない版型に関連付けられています。'
                    ]
                },
                {
                    id: 'b22',
                    type: '文學小說',
                    engType: 'literature',
                    name: '現在住所は冷蔵庫。自己肯定感急上昇',
                    author: '花上 惇',
                    cover: 'https://m.media-amazon.com/images/I/719nEcQG32L.jpg',
                    publishingHouse: '双葉社',
                    publicationDate: '2023/1/19',
                    upLoadDate: 20230119,
                    bookType: '単行本',
                    size: '18.8 x 12.8 x 2 cm',
                    pages: '200頁',
                    isbn: '978-4575317565',
                    price: 400,
                    stock: 20,
                    introduce: [
                        '冷蔵庫を開けて、ポジティブなメッセージを発信する動画がSNSで大反響。',
                        'InstagramやTikTokで話題の“メンケアオネエ”花上惇の初エッセイ＆名言集。',
                        'いまどき女子が直面しがちな35のお悩み＆アンサーを1冊にまとめました。',
                        '知られざる生い立ちや一問一答も収録。'
                    ]
                },
                {
                    id: 'b23',
                    type: '文學小說',
                    engType: 'literature',
                    name: '小説　人間失格',
                    author: '太宰治',
                    cover: 'https://m.media-amazon.com/images/P/B095P4C6PZ.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '青空文庫',
                    publicationDate: '2005/12/31',
                    upLoadDate: 20051231,
                    bookType: 'ペーパーバック ',
                    size: '18.21 x 1.55 x 25.7 cm',
                    pages: '270頁',
                    isbn: '978-4893252227',
                    price: 150,
                    stock: 20,
                    introduce: [
                        'なぜ人生はこんなにも生きづらいのか',
                        '夏目漱石の「こころ」と累計発行部数1位を争う自伝的小説。太宰治は連載完了と同時に自殺。伝説的な小説がイラストと共にライトノベル感覚で読める。',
                        'ネグレクト、幼児虐待、アルコール依存、薬物依存、自殺未遂、現代に通じる社会問題が描かれ、現代の生きづらさに通じる。'
                    ]
                },
                {
                    id: 'b24',
                    type: '文學小說',
                    engType: 'literature',
                    name: '三流シェフ (幻冬舎単行本)',
                    author: '三國清三',
                    cover: 'https://m.media-amazon.com/images/P/B0BN78K8SW.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'KADOKAWA',
                    publicationDate: '2020/6/12',
                    upLoadDate: 20200612,
                    bookType: '単行本',
                    size: '10.7 x 1.3 x 14.8 cm',
                    pages: '304頁',
                    isbn: '978-4048967709',
                    price: 300,
                    stock: 20,
                    introduce: [
                        `雑用こそ人生の突破口だ。誰より苦労しても、その苦労を見ている人は１％にも満たない。それでも“世界のミクニ”は必死に鍋を磨き続けた。`,
                        `何者かになろうとして、懸命にもがく人たちへ――。料理界のカリスマ・三國シェフ、感涙の自伝。`,
                        `37年続いた「オテル・ドゥ・ミクニ」を閉じ、ぼくは70歳で新たな夢を実現する北海道・増毛（ましけ）での極貧の幼少期、漁師の父と出掛けた海、“料理の神様”に近づきたくて生やした口髭、地獄の厨房とヨーロッパ修行、30歳での開業とバッシング、ミシュランとの決別――。時代の寵児と言われながら、がむしゃらに突っ走ってきたぼくが、一大決心をして「オテル・ドゥ・ミクニ」を閉店する理由と、ぼくが戦ってきた人生のすべて。`,
                        `どんな一皿よりもエモーショナル！世界に冠たる“ミクニ”の料理は、彼の苦悶の日々とパワフルで情熱的な生き様から作られる。生きるための営みと企み、そして熱狂とは――。人生の本質が凝縮された１冊。`
                    ]
                },
                {
                    id: 'b25',
                    type: '文學小說',
                    engType: 'literature',
                    name: 'すべての瞬間が君だった きらきら輝いていた僕たちの時間',
                    author: 'ハ・テワン (著), 呉 永雅 (翻訳)',
                    cover: 'https://m.media-amazon.com/images/P/B0894MNB52.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'マガジンハウス',
                    publicationDate: '2005/9/1',
                    upLoadDate: 20050901,
                    bookType: '単行本',
                    size: '18.2 x 1.5 x 25.7 cm',
                    pages: '263頁',
                    isbn: '978-4048967709',
                    price: 400,
                    stock: 20,
                    introduce: [
                        '僕はもう君なしでは今までの人生を説明できないかもしれないー。君は僕の世界であり、すべての瞬間だったのだから。韓国のＳＮＳ、エンタメ業界が熱狂した胸がしめつけられるほど甘く、もどかしい運命のお話。'
                    ]
                },
                {
                    id: 'b26',
                    type: '文學小說',
                    engType: 'literature',
                    name: '蒼い炎Ⅲ　－究竟編',
                    author: '羽生 結弦',
                    cover: 'https://m.media-amazon.com/images/I/71zi98VmgPL.jpg',
                    publishingHouse: 'KADOKAWA',
                    publicationDate: '2020/6/12',
                    upLoadDate: 20200612,
                    bookType: '文庫',
                    size: '10.7 x 1.3 x 14.8 cm',
                    pages: '304頁',
                    isbn: '978-4048967709',
                    price: 150,
                    stock: 0,
                    introduce: [
                        `待望の自叙伝・第３章が７年ぶりに刊行！
                        夢だった五輪２連覇をついに達成した羽生結弦。
                        さらに理想のスケートを求めて、境地を目指す王者の道のり―
                        `,
                        `「究竟（くきょう）」とは、「究極に達すること」、仏教用語で「無上」を意味します。
                        度重なる怪我に苦しみながら、66年ぶりの五輪連覇を果たした羽生選手。
                        その後もストイックに技術と芸術の融合を追い求める姿を、第３弾では描きます。`
                    ],
                    recommend: 100
                },
                {
                    id: 'b27',
                    type: '文學小說',
                    engType: 'literature',
                    name: '名探偵のままでいて (『このミス』大賞シリーズ)',
                    author: '小西 マサテル',
                    cover: 'https://m.media-amazon.com/images/P/B0BKSX1V96.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '宝島社',
                    publicationDate: '2020/6/12',
                    upLoadDate: 2020613,
                    bookType: '単行本',
                    size: '10.7 x 1.3 x 14.8 cm',
                    pages: '352頁',
                    isbn: '978-4048967709',
                    price: 150,
                    stock: 120,
                    introduce: [
                        '第21回『このミステリーがすごい！』大賞受賞作',
                        '「認知症の老人」が「名探偵」たりうるのか？',
                        '孫娘の持ち込む様々な「謎」に挑む老人。',
                        '日々の出来事の果てにある真相とは――？',
                        '認知症の祖父が安楽椅子探偵となり、不可能犯罪に対する名推理を披露する連作ミステリー！'
                    ]
                },
                {
                    id: 'b28',
                    type: '文學小說',
                    engType: 'literature',
                    name: '罪の境界',
                    author: '薬丸 岳',
                    cover: 'https://m.media-amazon.com/images/P/B0BN79SJV8.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '幻冬舎',
                    publicationDate: '2020/6/12',
                    upLoadDate: 20200615,
                    bookType: '単行本',
                    size: '10.7 x 1.3 x 14.8 cm',
                    pages: '476頁',
                    isbn: '978-4048967709',
                    price: 150,
                    stock: 20,
                    introduce: [
                        '無差別通り魔事件の加害者と被害者。決して交わるはずのなかった人生が交錯した時、慟哭の真実が明らかになる感動長編ミステリー。',
                        '「約束は守った……伝えてほしい……」',
                        'それが、無差別通り魔事件の被害者となった飯山晃弘の最期の言葉だった。自らも重症を負った明香里だったが、身代わりとなって死んでしまった飯山の言葉を伝えるために、彼の人生を辿り始める。この言葉は誰に向けたものだったのか、約束とは何なのか。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b29',
                    type: '商業理財',
                    engType: 'business',
                    name: 'ジェイソン流お金の増やし方',
                    author: '厚切りジェイソン',
                    cover: 'https://m.media-amazon.com/images/P/B09LHH1DV3.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'ぴあ',
                    publicationDate: '2021/12/7',
                    upLoadDate: 20211208,
                    bookType: '単行本',
                    size: '12.8 x 1.7 x 18.8 cm',
                    pages: '192頁',
                    isbn: '978-4478114131',
                    price: 400,
                    stock: 130,
                    introduce: [
                        '芸人でもある厚切りジェイソンによる、初のお金に関する書籍。これだけやれば貯まるのに…Why Japanese people!? どうしてお金が貯まらないの! ?',
                        'どうやったらお金を増やすことができるのかに悩む人々へ送る、簡単にできる、節約、資産を増やす方法、投資まで…',
                        'お金を増やすため、延いては人生を豊かにするためのヒントが満載。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b30',
                    type: '商業理財',
                    engType: 'business',
                    name: 'これだけやれば大丈夫! お金の不安がなくなる資産形成1年生',
                    author: '小林 亮平',
                    cover: 'https://m.media-amazon.com/images/P/B09D31K2Z6.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'KADOKAWA',
                    publicationDate: '2021/9/2',
                    upLoadDate: 20210902,
                    bookType: '単行本',
                    size: '13.3 x 2.4 x 18.8 cm',
                    pages: '256頁',
                    isbn: '978-4478114131',
                    price: 600,
                    stock: 130,
                    introduce: [
                        '結婚、出産、子どもの成長、老後…未来に備えて、最初の一歩を踏み出そう!',
                        '今すぐに始められる「資産形成の入門書」!',
                        'お金の不安や悩みを抱えている人に向けて、最低限やるべきことを、YouTube登録者数50万人超えの元銀行員が、イラストと図解でやさしく解説。',
                        'さらに、やるべきことが一目でわかる「資産形成チェックリスト」も収録。こちらをクリアしていくだけで、つみたてNISA、楽天経済圏、ふるさと納税、固定費削減、先取り貯蓄のすべてが順を追って達成できる!',
                        '結婚、出産、子どもの成長、老後……さあ、未来に備えて、最初の一歩を踏み出そう!'
                    ],
                    recommend: 9999
                },
                {
                    id: 'b31',
                    type: '商業理財',
                    engType: 'business',
                    name: 'AI分析でわかった トップ5％社員の習慣',
                    author: '越川 慎司',
                    cover: 'https://m.media-amazon.com/images/P/4799326082.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'ディスカヴァー・トゥエンティワン',
                    publicationDate: '2020/9/25',
                    upLoadDate: 20200925,
                    bookType: '単行本',
                    size: '18.8 x 12.8 x 2.5 cm',
                    pages: '254頁',
                    isbn: '978-4799326084',
                    price: 600,
                    stock: 200,
                    introduce: [
                        'ビジネスパーソン1万8000人を定点カメラ・ICレコーダー・GPSで調査、AI分析した働き方の結論。',
                        '効率よく成果を出す人には、シンプルな「共通点」があった!'
                    ],
                    recommend: 1
                },
                {
                    id: 'b32',
                    type: '商業理財',
                    engType: 'business',
                    name: 'Global EC Impact 全世界で売れ。',
                    author: '重本憲吾',
                    cover: 'https://m.media-amazon.com/images/P/B0BGHFK9H7.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'ダイヤモンド社',
                    publicationDate: '2022/11/30',
                    upLoadDate: 20221130,
                    bookType: '単行本',
                    size: '13.3 x 2.4 x 18.8 cm',
                    pages: '256頁',
                    isbn: '978-4478114131',
                    price: 480,
                    stock: 130,
                    introduce: [
                        '新型コロナウイルス感染症（COVID-19）の流行が消費者をECへと向かわせ、世界中でECの市場規模が飛躍的に伸びている。この「消費活動のデジタル化」により、EC活用の巧拙がグローバルでの競争力に直結する時代が訪れようとしている。 実はこの潮流は、グローバル化に後れをとっている日本企業にとって“チャンス”そのものである。ECを梃子にすることで、世界各国の消費者にスピーディーに商品を送り届けることができるだけではなく、認知向上やブランディングといったマーケティング活動も効率的に行えるようになる。ポストコロナ時代の成長のカギは、いかにグローバルに勢力を伸ばす有力EC企業との関係を強化し、彼らのビジネスソリューションを活用し尽くすかにかかっているのだ。 ',
                        '本書では、一足早くEC化が進んでいる中国のみならず、近年成長著しいASEAN、北米・欧州といった成熟国、日本企業にとってホワイトスペースであるインド・南米・アフリカなど。世界各国・地域の最新のEC動向や、「ECを梃子にした海外事業成長」を実現するためのアプローチを徹底解説する。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b33',
                    type: '商業理財',
                    engType: 'business',
                    name: 'USJを劇的に変えた、たった1つの考え方 成功を引き寄せるマーケティング入門',
                    author: '森岡 毅',
                    cover: 'https://m.media-amazon.com/images/P/B01EH12AJ6.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'KADOKAWA',
                    publicationDate: '2021/12/7',
                    upLoadDate: 20211208,
                    bookType: '単行本',
                    size: '13.3 x 2.4 x 18.8 cm',
                    pages: '264頁',
                    isbn: '978-4041041413',
                    price: 400,
                    stock: 130,
                    introduce: [
                        'USJはなぜ勝ち続けるのか? ビジネスを劇的に変える勝率97%の思考法',
                        '015年10月には過去最高の月間175万人を集客し、USJの3倍の商圏人口に陣取る東京ディズニーランドをも超えて、単月ではありますがついに集客数日本一のテーマパークになることもできました。<中略>USJはなぜ復活し、大成功をおさめることができたのか? なぜ次から次へと新しいアイデアが出てきて、なぜやることなすこと上手くいくようになったのか? その秘密は、たった1つのことに集約されます。USJは、「マーケティング」を重視する企業になって、劇的に変わったのです。(「プロローグ」より)',
                        '★読者が選ぶビジネス書グランプリ2017 マネジメント部門1位',
                        '★第44回ビジネスブックマラソン大賞受賞',
                        '★MONOQLO 最強ビジネス書ランキング3位'
                    ],
                    recommend: 1
                },
                {
                    id: 'b34',
                    type: '商業理財',
                    engType: 'business',
                    name: '心を鍛える',
                    author: '藤田 晋, 堀江 貴文',
                    cover: 'https://m.media-amazon.com/images/P/B09RPF5TXF.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'KADOKAWA',
                    publicationDate: '2021/12/7',
                    upLoadDate: 20211209,
                    bookType: '単行本',
                    size: '13.3 x 2.4 x 18.8 cm',
                    pages: '277頁',
                    isbn: '978-4478114131',
                    price: 600,
                    stock: 130,
                    introduce: [
                        '大事なのは「頭の良さ」より「ハートの強さ」',
                        'IT業界を牽引してきた盟友が初めて語り合う「生い立ち」「起業」「キャリア」「未来のこと」。',
                        '―10代・20代・30代・40代で僕たちが貫いてきた「メンタルの流儀」―'
                    ],
                    recommend: 1
                },
                {
                    id: 'b35',
                    type: '商業理財',
                    engType: 'business',
                    name: '最強知名度のつくり方 売上98%減からのV字逆転を実現した必勝術',
                    author: '西村 誠司',
                    cover: 'https://m.media-amazon.com/images/P/B0B5FVXK6M.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'KADOKAWA',
                    publicationDate: '2021/12/7',
                    upLoadDate: 20211208,
                    bookType: '単行本',
                    size: '13.3 x 2.4 x 18.8 cm',
                    pages: '240頁',
                    isbn: '978-4478114131',
                    price: 450,
                    stock: 130,
                    introduce: [
                        'インパクトこそ最大の武器だ!',
                        '知名度を上げるのに資金もコネも必要はない。大切なのは、どうインパクトを与えることができるのかということ。',
                        '極貧だった少年時代から自力で大学を卒業し、25歳で起業。挫折を味わいながらも、つかみ取った成功の礎となったもの、それはいかに知名度を上げるかということ。',
                        '攻めやすいところからではなく、あえて難攻不落の大企業からアタックする。ビックネームを味方に付けることで、絶対有利なポジションを勝ち取る。',
                        '常識を覆すその大体な手法こそが、最短で結果へと導いていく。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b36',
                    type: '商業理財',
                    engType: 'business',
                    name: '主人公思考',
                    author: '坂上 陽三',
                    cover: 'https://m.media-amazon.com/images/P/B09JFS7JJY.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'KADOKAWA',
                    publicationDate: '2021/12/7',
                    upLoadDate: 20211210,
                    bookType: '単行本',
                    size: '13.3 x 2.4 x 18.8 cm',
                    pages: '256頁',
                    isbn: '978-4046054005',
                    price: 450,
                    stock: 1,
                    introduce: [
                        '「アイドルマスター」総合プロデューサー・ガミPが語る“人を動かす”極意',
                        '2020年に生誕15周年を迎えた、大ヒット育成シミュレーションゲーム「アイドルマスター」(通称:アイマス)。アーケードゲームから始まり、家庭用ゲームやスマホゲーム、アニメ、ライブなど多角的に展開、今や市場規模600億円(※)に上るモンスターコンテンツです。その最大の立役者である、総合プロデューサー・坂上陽三氏(通称:ガミP)の仕事術を大公開!',
                        '「アイマス」がなぜ多くのファンに愛されているか、それはゲームの主役をアイドルではなく、プロデューサー(プレイヤー)に置いているから。',
                        '「何事も“自分事化”できれば、人は最高のパフォーマンスを発揮できる」と坂上氏は語ります。',
                        '・部下が指示待ちタイプから脱却しない',
                        '・仕事を依頼したスタッフのモチベーションが低い',
                        '・自社のサービスにファンがつかない',
                        '・質はいいのに商品が売れない etc.',
                        'このような悩みを持つビジネスマンやクリエイター必見です。本書では、人がまるで物語の主人公のごとく、能動的に行動する仕組みと方法を紹介します。',
                        'また、カバーには「アイマス」の象徴的キャラクター・天海春香の、貴重な初期衣装&ポーズの特別描き下ろしイラストを掲載。'

                    ],
                    recommend: 1
                },
                {
                    id: 'b37',
                    type: '商業理財',
                    engType: 'business',
                    name: 'なぜか仕事が早く終わらない人のための 図解 超タスク管理術',
                    author: '佐々木正悟',
                    cover: 'https://m.media-amazon.com/images/P/B0BG54N2FZ.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'あさ出版',
                    publicationDate: '2021/12/7',
                    upLoadDate: 20211208,
                    bookType: '単行本',
                    size: '13 x 1.4 x 18.9 cm',
                    pages: '216頁',
                    isbn: '978-4478114131',
                    price: 400,
                    stock: 130,
                    introduce: [
                        '仕事をやってもやっても終わらない――。',
                        '積もり積もった仕事を的確にこなしていくために必要なのは、タスク管理術。',
                        '本書では、一見、当たり前に思えるような些細なことも取り上げ、細かく具体的なタスク管理の方法をご紹介します。これ1冊で、あなたの仕事がみるみるはかどる!'
                    ],
                    recommend: 1
                },
                {
                    id: 'b38',
                    type: '商業理財',
                    engType: 'business',
                    name: 'マーケティングを学んだけれど、どう使えばいいかわからない人へ',
                    author: '西口 一希',
                    cover: 'https://m.media-amazon.com/images/I/71NRfc9iXLL.jpg',
                    publishingHouse: '日本実業出版社',
                    publicationDate: '2021/12/7',
                    upLoadDate: 20211208,
                    bookType: '単行本',
                    size: '13.3 x 2.4 x 18.8 cm',
                    pages: '224頁',
                    isbn: '978-4478114131',
                    price: 420,
                    stock: 130,
                    introduce: [
                        'マーケティングをビジネスでどう使えばいいかわからない人へ、これ以上シンプルにできない本質'
                    ],
                    recommend: 1
                },
                {
                    id: 'b39',
                    type: '藝術設計',
                    engType: 'art',
                    name: 'GoodNotes 手書きノートブック',
                    author: 'amity_sensei',
                    cover: 'https://m.media-amazon.com/images/P/B0BPGG592L.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '玄光社',
                    publicationDate: '2022/12/23',
                    upLoadDate: 20221223,
                    bookType: '単行本',
                    size: '25.7 x 19 x 0.6 cm',
                    pages: '224頁',
                    isbn: '978-4837308072',
                    price: 620,
                    stock: 30,
                    introduce: [
                        '人気iPad Youtuber・amity_senseiがイチオシする ノートアプリGoodNotes 5の使い方を徹底解説! GoodNotesは有償ノートアプリとしてはダントツの人気を誇り、著者のYouTubeチャンネル視聴者からも書籍化のリクエストが多数寄せられていました。手書きの自由さと気軽さ、デジタルの便利さを併せ持つGoodNotesのさまざまな使い方を、ライフスタイル、ビジネス、スタディのカテゴリーにわけてチュートリアルで解説。実用アプリの解説書というと地味なイメージを思い浮かべますが、本書ではamity_senseiならではのおしゃれで素敵な見せ方や使いこなし術を紹介します。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b40',
                    type: '藝術設計',
                    engType: 'art',
                    name: '色と光マスターガイド　イラスト上達のための理論と実践',
                    author: 'HJ技法書編集部',
                    cover: 'https://m.media-amazon.com/images/I/81WGOEcL8XL.jpg',
                    publishingHouse: 'ホビージャパン',
                    publicationDate: '2022/10/28',
                    upLoadDate: 20221030,
                    bookType: '大型本',
                    size: '25.7 x 19 x 0.6 cm',
                    pages: '68頁',
                    isbn: '978-4837308072',
                    price: 300,
                    stock: 30,
                    introduce: [
                        '色彩と光の仕組みを深く掘り下げる理論と実践の究極の教科書！',
                        '色と光はイラストの描き方においての非常に重要なテーマです。チャーリー・ピッカード著者のこの書は一歩進んでそれぞれを深く掘り下げ、詳細に解説します。',
                        '前半の理論の章では、色彩に関する専門用語、色彩の理論、光の種類、また、さまざまな光と物質の相互作用などについて解説します。色相、明度、彩度の理解を深め、光とカゲをよりうまく取り入れて、望み通りの形や質感を表現できるようになります。',
                        '後半の実践の章には、海外の人気イラストレーターによるハウツーが掲載されています。それぞれのアーテイストが前半の理論で学んだ知識をどうイラストに活用できるかを詳しく解説します。',
                        '本書から、デジタル・アナログを問わず、あらゆるアートで表現を広げる知識が得られます。技術をさらに高めたいプロイラストレーターやプロを目指しているアーテイストにとって欠かせない知識が手に入る、約400ページの大ボリュームの一冊！'
                    ],
                    recommend: 1
                },
                {
                    id: 'b41',
                    type: '藝術設計',
                    engType: 'art',
                    name: '色数は少ないほうがかっこいい! (ENJOY DESIGN)',
                    author: 'Power Design Inc.',
                    cover: 'https://m.media-amazon.com/images/P/B0BMVXTDHG.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'ソシム',
                    publicationDate: '2022/10/28',
                    upLoadDate: 20221029,
                    bookType: '単行本',
                    size: '25.7 x 19 x 0.6 cm',
                    pages: '240頁',
                    isbn: '978-4837308072',
                    price: 550,
                    stock: 30,
                    introduce: [
                        '世の中にある「いいデザイン」をよく見てみると使われている色の数が思ったより少ないということに気づきます。そう、実はデザインは「メインカラー」「サブカラー」「テキストカラー」の3色があれば、だいたい成立してしまうのです。',
                        'そこで、本書では「有彩色2色＋無彩色1色」の配色を提案。',
                        '※有彩色＝色相・彩度がある色、無彩色＝色相・彩度がなく明度のみある色（白・黒・グレー）',
                        '素敵に見える色の組み合わせのほか、その配色がどんなデザインシーンに合うかを紹介します。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b42',
                    type: '藝術設計',
                    engType: 'art',
                    name: '1冊ですべて身につくHTML & CSSとWebデザイン入門講座',
                    author: 'Mana',
                    cover: 'https://m.media-amazon.com/images/P/B07PS1ZJN6.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'SBクリエイティブ',
                    publicationDate: '2022/10/28',
                    upLoadDate: 20221108,
                    bookType: '単行本',
                    size: '25.7 x 19 x 0.6 cm',
                    pages: '280頁',
                    isbn: '978-4837308072',
                    price: 650,
                    stock: 30,
                    introduce: [
                        '今のWebサイトの作り方が一気に学べる！',
                        '・知識ゼロから体系的に学べる！HTMLとCSSの基本',
                        '・最新の技術に対応！レスポンシブ、Flexbox、CSSグリッド',
                        '・手を動かしながら学べる！プロの現場で役立つテクニック',
                        '・コードの知識からデザインのことまで1冊ですべて学べる！',
                        'WebクリエイターボックスのManaが教えるWebサイト制作の定番＆旬のスキル。この1冊で必要なことがすべて学べる！',
                        'コードもデザインも全部学べる！'
                    ],
                    sales: 100,
                    recommend: 999
                },
                {
                    id: 'b43',
                    type: '藝術設計',
                    engType: 'art',
                    name: '作りながら覚える 3日で作曲入門',
                    author: 'monaca:factory, 10日P',
                    cover: 'https://m.media-amazon.com/images/P/4636916921.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'エムディエヌコーポレーション',
                    publicationDate: '2022/10/28',
                    upLoadDate: 20221028,
                    bookType: '単行本',
                    size: '25.7 x 19 x 0.6 cm',
                    pages: '68頁',
                    isbn: '978-4837308072',
                    price: 300,
                    stock: 30,
                    introduce: [
                        '理論から始めない新しい作曲本!',
                        '作曲がはじめての人も、挫折した人も! 人気作曲家が教えるやさしい曲作りのしくみ',
                        '必ず1曲作れる作曲本!',
                        '「いつかは自分も作曲してみたい」と考えている方は多くいると思います。しかし、「何から始めれば良いのかわからない」と悩むのではないでしょうか。従来、作曲といえば楽器を練習して即興でメロディーを作ったり、音楽理論やコード理論を覚えてから、実際に取りかかってみる、という流れでした。',
                        'ただ、初心者にとっては、まず理論を理解するのが大変ですし、理解できてもその知識を使ってどうやって曲を作って良いのか悩みがちです。'
                    ]
                },
                {
                    id: 'b44',
                    type: '藝術設計',
                    engType: 'art',
                    name: '絵を描くためのキツネ・タヌキ・オオカミの写真集',
                    author: 'CONTA, Cheng-Ren',
                    cover: 'https://m.media-amazon.com/images/P/B0BQJ8H6V4.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'マール社',
                    publicationDate: '2022/12/26',
                    upLoadDate: 20221226,
                    bookType: '単行本',
                    size: '25.7 x 19 x 0.6 cm',
                    pages: '192頁',
                    isbn: '978-4837308072',
                    price: 700,
                    stock: 30,
                    introduce: [
                        '本書は、キツネ・タヌキ・オオカミの “絵になる”姿を集めた写真資料集です。',
                        'トレース・模写が自由で、商用利用も幅広くOK。',
                        '絵画・イラスト・漫画・手芸・工芸など、創作のための参考資料としてお使いください。',
                        '巻頭には、キツネの描き方のワンポイント解説付き。',
                        '眺めるだけでも癒される、動物好きにうれしい一冊です。'
                    ]
                },
                {
                    id: 'b45',
                    type: '藝術設計',
                    engType: 'art',
                    name: '100年後まで残したい! 日本の美しい花風景',
                    author: 'はなまっぷ ',
                    cover: 'https://m.media-amazon.com/images/P/B07L2XF8W1.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '三才ブックス',
                    publicationDate: '2022/10/28',
                    upLoadDate: 20221201,
                    bookType: '単行本',
                    size: '25.7 x 19 x 0.6 cm',
                    pages: '176頁',
                    isbn: '978-4837308072',
                    price: 430,
                    stock: 30,
                    introduce: [
                        '花を愛するすべての人に花まるを。',
                        'インスタで人気の「#はなまっぷ」が1冊に!'
                    ],
                    recommend: 10
                },
                {
                    id: 'b46',
                    type: '藝術設計',
                    engType: 'art',
                    name: '異世界に一番近い場所-ファンタジー系ゲーム・アニメ・ラノベのような現実の景色',
                    author: '幽玄一人旅団, 清水大輔',
                    cover: 'https://m.media-amazon.com/images/P/B083XTYHGX.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'パイインターナショナル',
                    publicationDate: '2022/10/28',
                    upLoadDate: 20221208,
                    bookType: '単行本',
                    size: '25.7 x 19 x 0.6 cm',
                    pages: '144頁',
                    isbn: '978-4837308072',
                    price: 800,
                    stock: 30,
                    introduce: [
                        '元ネトゲの住人が現実の世界(リアル)を旅して撮りました',
                        '本書はネトゲの世界にどっぷりと浸かっていた著者ならではの視点で撮った遺跡・古都・教会などの写真集です。「世界樹!?」「セーブポイント!?」「魔道具店」 「 ラスボス出そう」etc.ゲームやアニメ、何かの物語で見たような現実の景色の数々。ページをめくって思い思いの空想をお楽しみください。',
                        '収録撮影地:インド/エジプト/カンボジア/チェコ/台湾/中国/イギリス'
                    ],
                    recommend: 1
                },
                {
                    id: 'b47',
                    type: '人文社會',
                    engType: 'humanities',
                    name: '戦国武将への鎮魂録 夢の如し',
                    author: '折原美樹, 望月希彩',
                    cover: 'https://m.media-amazon.com/images/P/4802079362.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'NextPublishing Authors Press',
                    publicationDate: '2023/1/20',
                    upLoadDate: 20230120,
                    bookType: 'オンデマンド (ペーパーバック)',
                    size: '14.8 x 0.53 x 21 cm',
                    pages: '88頁',
                    isbn: '978-4802079365',
                    price: 580,
                    stock: 30,
                    introduce: [
                        'お城や歴史が好きで、御城印や武将印を製作、販売しています。お城めぐりがブームになっている昨今、御城印もお城めぐりの楽しみのひとつとなっています。自分の手がけた御城印、武将印などが雑誌に掲載されたり、出版社様に提供させていただいてきました。',
                        '織田信長、真田昌幸、藤堂高虎など数々の武将印を作ってきました。この度、戦国武将への鎮魂の想いをこめてカタチに残すことになりました。楽しんでながめていただければ、こんなに嬉しいこと はありません。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b48',
                    type: '旅遊',
                    engType: 'travel',
                    name: '温泉百名山',
                    author: '飯出 敏夫',
                    cover: 'https://m.media-amazon.com/images/I/71AqS7IwGhL.jpg',
                    publishingHouse: '集英社インターナショナル',
                    publicationDate: '2022/10/26',
                    upLoadDate: 20221026,
                    bookType: '単行本',
                    size: '13.1 x 1.7 x 18.8 cm',
                    pages: '224頁',
                    isbn: '978-4797674194',
                    price: 680,
                    stock: 30,
                    introduce: [
                        '温泉達人、名湯のある名山を100座選定。',
                        '著者は温泉取材歴40 年のベテランだが、2016 年、白山に登ったのをきっかけに、元来の山好きに火がつき、「日本百名山」を意識する。翌年、完登したものの、意外にも温泉がないことに気づき、温泉のある名山を自らが100座選定することを決意。深田久弥の『日本百名山』に倣い、「品格」「歴史」「個性」をもった名湯のある名山を100座選定。18年より実際に選定登山に取り組み、21年に完登。温泉達人による「温泉百名山」が誕生した。なお、名山と名湯をセットで紹介するガイドの体裁だが、すべてを一人で取材した著者の体験レポートとしても楽しめる。また選定登山に取り組む間、悪性リンパ腫や膝関節症などと闘い、病を克服しての実現となった。「前進すれば、きっと山頂立てる」という奮起を促す一冊。',
                        '温泉評論家・石川理夫氏推薦!',
                        '山と温泉を愛する人に、「日本百名山」に続く目標ができた。「温泉百名山」を選ぶ山湯行で、著者は病を三度克服。達成への道のりに心ゆさぶられた。本書は山&温泉情報も詳しい。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b49',
                    type: '人文社會',
                    engType: 'humanities',
                    name: '騙されないための中東入門',
                    author: '高山 正之, 飯山 陽',
                    cover: 'https://m.media-amazon.com/images/I/71ft4FmqV7L.jpg',
                    publishingHouse: 'ビジネス社',
                    publicationDate: '2023/1/20',
                    upLoadDate: 20230120,
                    bookType: '単行本',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '240頁',
                    isbn: '978-4828424828',
                    price: 450,
                    stock: 30,
                    introduce: [
                        '親日国という幻想！',
                        '巧妙な反米戦略。',
                        'トルコ、イランの本音とは？',
                        '各国の思惑が交差する、「新たな冷戦」の未来地図を描き出す！'
                    ],
                    sales: 5,
                    recommend: 999
                },
                {
                    id: 'b50',
                    type: '人文社會',
                    engType: 'humanities',
                    name: '地域主権という希望：欧州から杉並へ、恐れぬ自治体の挑戦',
                    author: '岸本　聡子',
                    cover: 'https://m.media-amazon.com/images/P/B0BR3J83G1.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '大月書店',
                    publicationDate: '2023/1/19',
                    upLoadDate: 20230119,
                    bookType: '単行本',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '272頁',
                    isbn: '978-4272211289',
                    price: 480,
                    stock: 10,
                    introduce: [
                        '民主主義を再生する、足元からの挑戦政治経験ゼロから杉並区長となった著者が、世界各地で起きている自治体からの変革＝ミュニシパリズムの実例を紹介。新自由主義による地域経済と政治の劣化に歯止めをかけ、足元から公共と民主主義を再生する希望の指針を描く。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b51',
                    type: '人文社會',
                    engType: 'humanities',
                    name: '君たち、中国に勝てるのか',
                    author: '岩田清文, 武居智久, 尾上定正, 兼原信克',
                    cover: 'https://m.media-amazon.com/images/P/B0BRZHBKSD.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '産経新聞出版',
                    publicationDate: '2023/1/19',
                    upLoadDate: 20230119,
                    bookType: '単行本',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '280頁',
                    isbn: '978-4272211289',
                    price: 250,
                    stock: 10,
                    introduce: [
                        '中国の台湾侵攻は予想より早い。',
                        'そのとき日米は中国に勝てるのか。陸海空の自衛隊最高幹部OBと元国家安全保障局次長が鳴らす最高レベルのアラート。',
                        '今、日本に必要なのは「総力戦」だ',
                        '２０２５年から27年、アメリカは通常戦力でも核戦力でも中国を抑止できなくなる。中国の台湾侵略で日米はどう戦うのか。中国はどう攻めてくるのか。アメリカと中国はどちらが強いのか。日米同盟のリスクは何か。安保３文書の背景「危機の実態」を明らかにする。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b52',
                    type: '人文社會',
                    engType: 'humanities',
                    name: '一気読み世界史',
                    author: '出口 治明',
                    cover: 'https://m.media-amazon.com/images/P/B0BMFFLJ1P.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '日経BP',
                    publicationDate: '2022/11/17',
                    upLoadDate: 20221117,
                    bookType: '単行本',
                    size: '21 x 14.8 x 1.8 cm',
                    pages: '288頁',
                    isbn: '978-4272211289',
                    price: 250,
                    stock: 10,
                    introduce: [
                        '人類5000年の歴史を７時間で一気読み！',
                        '一気に読むから、流れがわかり、教養になる。暗記不要。日本史、西洋史、文化史、経済史…全部つなげてまるごと学ぶ、新しい教科書。入門に、学び直しに、論述テスト対策にも。',
                        '人類5000年の歴史の大きな流れが一気につかめる画期的な入門書。『哲学と宗教全史』『人類5000年史』シリーズなどの著作で知られる出口治明氏の待望の最新刊。日本史、西洋史、東洋史から、政治史、文化史、経済史まで、歴史を「ひとつなぎ」で学べる新コンセプトの世界史です。1万冊の本を読破した「現代の知の巨人」ならではの大局的な歴史観が、この一冊にぎゅっと凝縮されています。7時間で読める分量でも、歴史の要諦と本質があますところなく学べます。中高生から社会人まで、歴史の大局的な流れをつかみたい人に最適の新しい歴史の教科書です。'
                    ],
                    sales: 100
                },
                {
                    id: 'b53',
                    type: '人文社會',
                    engType: 'humanities',
                    name: '[復刻版] 大衆明治史 上巻',
                    author: '菊池寛',
                    cover: 'https://m.media-amazon.com/images/I/51n-ZUPw2mL.jpg',
                    publishingHouse: 'ダイレクト出版株式会社',
                    publicationDate: '2023/1/31',
                    upLoadDate: 19230120,
                    bookType: '単行本',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '218頁',
                    isbn: '978-4866221281',
                    price: 500,
                    stock: 19,
                    introduce: [
                        '「GHQが“普通の大衆小説"を禁書にしたワケ」',
                        '『文藝春秋』を創刊、さらに『芥川賞』『直木賞』を創設。自身も数々の名作を生み出した大作家、菊池寛(きくち・かん)。芥川龍之介らとともに、現代に続く文学界の基礎を築き上げた人物として、界隈で彼の名前を知らない者はいない、まさに“文壇の大御所"です。',
                        'しかし、そんな大作家の著作のなかで、戦後になって“禁じられたタブー本"とされたものがありました。GHQの命令で“禁書指定"を受け、流通を一切止められ、戦後日本からパタリと姿を消したのです。',
                        'わざわざGHQが禁書にしたということは、日本を戦争に煽り立てた、過激な本なのかと思いきや...『大衆明治史』というタイトルどおり、大衆向けに平易な言葉で書かれた、とても健全な本。書かれている内容は、明治時代の始まりから終わりまでの歴史で、戦争や軍国主義とは一切関係がないのです。',
                        'それなのに、一体なぜGHQは、この本を禁書にし、日本人に見せないようにしたのでしょうか? 文豪・菊池寛の描いた明治日本の歴史が、GHQにとって何か不都合なことでもあったのでしょうか?',
                        '「GHQが隠したかった明治日本の姿とは...」',
                        'どうしてGHQは、明治時代について書かれたこの歴史書を、日本人から隠したのでしょうか? その理由は定かではありませんが、、もしかすると「とにかくオモシロイから」かもしれません。',
                        '描かれるのは、激動の時代を生き抜いた、男たちの“人間ドラマ"。西郷隆盛、大久保利通、伊藤博文... あの時代を動かした人々は、なぜあれほど強かったのか。明治時代の英雄たちの、苦悩、葛藤、挑戦... そのドラマが文豪の筆によって生き生きと描かれていて、まるで映画を観ているかのように当時の情景が浮かび上がります。',
                        '誰だってこの本を読めば、明治の偉人の凄さに感動し、先人たちの偉大さを心から誇りに思ったに違いありません。日本人を骨抜きにしたかったGHQは、この菊池寛の天才的な描写力を恐れたのではないでしょうか。',
                        'なぜ明治日本は、たった数十年で近代化を成し遂げられたのか。なぜ一度も植民地化されず、欧米列強に肩を並べる唯一のアジア国になれたのか。文豪の筆で鮮やかに蘇る、明治日本の強さの正体とは−−'
                    ],
                    recommend: 1
                },
                {
                    id: 'b54',
                    type: '人文社會',
                    engType: 'humanities',
                    name: '世にも危険な医療の世界史',
                    author: 'リディア・ケイン (著), ネイト・ピーダーセン (著), 福井 久美子 (翻訳) ',
                    cover: 'https://m.media-amazon.com/images/P/B07QNNQXRD.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '文藝春秋',
                    publicationDate: '2019/4/18',
                    upLoadDate: 20190418,
                    bookType: '単行本',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '545頁',
                    isbn: '978-4272211289',
                    price: 500,
                    stock: 1,
                    introduce: [
                        '生まれる時代が違ったら、あなたも受けていたかもしれない――。科学を知らない人類が試みた、ぞっとする医療の数々！',
                        '・リンカーン……水銀入りの頭痛薬を服用、重金属中毒になって症状はさらに悪化',
                        '・ダーウィン……強壮剤としてヒ素を飲み続け、肌が浅黒くなるもやめられない',
                        '・ヒトラー……猛毒ストリキニーネでできた整腸剤を9年間服用し、危うく致死量に',
                        '・エジソン……コカイン入りワインを愛し、ハイになりながら徹夜で実験を重ねる',
                        '・モーツァルト……体調不良の最中2リットルもの血を抜かれ意識喪失、翌日死亡',
                        '・ルイ14世……生涯に2000回も浣腸を行ない、フランスに浣腸ブームをもたらす',
                        '現代医療を生み出した試行錯誤、その“危険な”全歴史！'
                    ],
                    recommend: 10
                },
                {
                    id: 'b55',
                    type: '人文社會',
                    engType: 'humanities',
                    name: '日本国史(上)',
                    author: '田中 英道',
                    cover: 'https://m.media-amazon.com/images/P/B09VC2PXZV.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '扶桑社',
                    publicationDate: '2022/3/12',
                    upLoadDate: 20220322,
                    bookType: '単行本',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '189頁',
                    isbn: '978-4272211289',
                    price: 250,
                    stock: 10,
                    introduce: [
                        '最新の歴史研究を踏まえた「田中日本史」の決定版。日本史を各時代のエピソードを中心に通史で概観! *上巻は縄文から平安時代まで。',
                        '第一章・日高見国――縄文・弥生時代、関東にあった祭祀国家',
                        '第二章・天孫降臨――関東から九州へ、船で渡った瓊瓊杵尊',
                        '第三章・大和時代――神武天皇と日本の統治',
                        '第四章・飛鳥時代――日本人の神髄「和」の思想の確立',
                        '第五章・白鷗時代――律令国家の誕生と国家意識の確立',
                        '第六章・奈良時代――日本の古典を成熟させた天平文化',
                        '第七章・平安時代――貴族が極めた宮廷文化の頂点',
                        '※本書は平成24年刊行の田中英道著『日本の歴史 本当は何がすごいのか』(育鵬社刊)をもとに、最新の歴史研究の成果を踏まえ、大幅な加筆を行い刊行するものです。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b56',
                    type: '人文社會',
                    engType: 'humanities',
                    name: 'ドラえもんの社会科おもしろ攻略 都道府県がわかる',
                    author: '藤子 F不二雄 (著), 浜学園 (監修)',
                    cover: 'https://m.media-amazon.com/images/P/B08F9WBXJV.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '小学館',
                    publicationDate: '2014/11/28',
                    upLoadDate: 20141128,
                    bookType: '単行本',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '223頁',
                    isbn: '978-4272211289',
                    price: 250,
                    stock: 10,
                    introduce: [
                        '47都道府県の特色が丸わかり!',
                        '47都道府県の特色を、「伝統・文化」、「自然」、「名産品」、「産業」、「人物」に分けて、その代表的項目をわかりやすいイラストと解説で紹介していきます。',
                        'ドラえもんの学習シリーズの既刊『社会科おもしろ攻略 改訂新版日本各地の自然とくらし』、『社会科おもしろ攻略 改訂新版日本の産業がわかる』とあわせて読めば、日本列島の概略から気候などなど、日本のすべてがよくわかります!'
                    ],
                    recommend: 1
                },
                {
                    id: 'b57',
                    type: '人文社會',
                    engType: 'humanities',
                    name: '名画で学ぶ経済の世界史 国境を越えた勇気と再生の物語',
                    author: '田中靖浩',
                    cover: 'https://m.media-amazon.com/images/P/B08DNFPTY1.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '産経新聞出版',
                    publicationDate: '2020/7/30',
                    upLoadDate: 20200730,
                    bookType: '単行本',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '280頁',
                    isbn: '978-4272211289',
                    price: 480,
                    stock: 110,
                    introduce: [
                        'ルネサンスはペストと経済危機からの再生だった!?',
                        'あのルノワールはフリーランス処世術の達人だった!?',
                        '人々の知恵と工夫が経済を動かし、さまざまな困難を乗り越えてきた!名画を通して学ぶ画期的な世界史入門。',
                        '登場するのは神父、軍人、商売人、国王、高級娼婦、画家に画商・・・レオナルド・ダ・ヴィンチもナポレオンも!有名無名の彼らが悩みながら奮闘し、切り拓いてきた世界史の舞台裏へご案内します。',
                        'ナビゲーターは、講演などでひっぱりだこの人気公認会計士。愛と情熱をもって縦横無尽に絵画と経済の関係を解説していきます。名画に隠された経済再生のヒントもお見逃しなく!'
                    ],
                    recommend: 1
                },
                {
                    id: 'b58',
                    type: '人文社會',
                    engType: 'humanities',
                    name: '「40歳の壁」をスルッと越える人生戦略 ',
                    author: '尾石晴（ワーママはる） ',
                    cover: 'https://m.media-amazon.com/images/P/4799329219.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'ディスカヴァー・トゥエンティワン',
                    publicationDate: '2022/12/23',
                    upLoadDate: 20221223,
                    bookType: '単行本',
                    size: '2.5 x 12.7 x 18.8 cm',
                    pages: '248頁',
                    isbn: '978-4272211289',
                    price: 420,
                    stock: 10,
                    introduce: [
                        '本書は、40歳前後で多くの人が感じるこの「モヤモヤ感」、つまり「40歳の壁」の正体を分解しながら、自分らしく生きるために「人生の後半戦をどうデザインしていくか？」を考えるためのものです。',
                        '「幸せな人生には、どんな要素が必要か？」を分解してみたら、次の３つの要素が見えてきました。',
                        '①お金（収入・資産）',
                        '②つながり（家族・友人・知人）',
                        '③健康（体力・認知力）',
                        'この３つの要素を満たすためには、定年を迎えないキャリアを自分なりにデザインする必要があります。このような、「お金」「つながり」「健康」の３つの要素を満たすことができ、かつやりがいを持って取り組める「仕事」のことを、この本では「自分業」と呼びます。',
                        'それでは、あなたらしい「自分業」はどうやって見つかるのか？そしてどうやって始めるのか？この本では、今すぐ始められる具体的なステップを筆者の実体験も交えながらひとつひとつ丁寧にお伝えします。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b59',
                    type: '人文社會',
                    engType: 'humanities',
                    name: '親不孝介護　距離を取るからうまくいく',
                    author: '山中 浩之, 川内 潤',
                    cover: 'https://m.media-amazon.com/images/P/B0BH7Q3T21.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: '日経BP',
                    publicationDate: '2022/10/7',
                    upLoadDate: 20221007,
                    bookType: '単行本',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '344頁',
                    isbn: '978-4296108848',
                    price: 480,
                    stock: 0,
                    introduce: [
                        '「親と距離を取るから、介護はうまくいく」。一見、親不孝と思われそうなスタンスが、介護する側の会社員や家族をそしてなにより介護される親をラクにしていく。',
                        '電通、ブリヂストン、コマツなど大手企業の介護相談で活躍中の川内潤さん（NPO法人となりのかいご代表）のアドバイスの元、遠距離の「親不孝介護」に挑んだ編集者の5年間の実録。',
                        '親の介護が始まる前に、これを知っておくのと知らないのとでは、働き方にも介護のクオリティにも大きな差が付きます。公的支援を受けるべきかどうかのチェックシート、部下の介護離職を止めるための想定問答集も掲載！さらに詳しい内容は、以下からどうぞ。'
                    ],
                    recommend: 5
                },
                {
                    id: 'b60',
                    type: '旅遊',
                    engType: 'travel',
                    name: `るるぶ 沖縄 '24`,
                    author: 'JTBパブリッシング 旅行ガイドブック 編集部',
                    cover: 'https://m.media-amazon.com/images/P/B0BPGC9NFS.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'JTBパブリッシング',
                    publicationDate: '2022/12/7',
                    upLoadDate: 20221207,
                    bookType: 'ムック',
                    size: '25.7 x 21 x 1.2 cm',
                    pages: '272頁',
                    isbn: '978-4533152016',
                    price: 270,
                    stock: 110,
                    introduce: [
                        '【〝一度訪れたら虜になっちゃう沖縄の魅力〟を完全紹介する究極の一冊】',
                        '沖縄旅行を一生モノの思い出にしたいなら迷わずこのガイドブック！パスポートを持たずしても、まるで海外旅行のような非日常気分まで味わえちゃう沖縄の魅力をたっぷりご紹介！今行くべき注目スポット、グルメや絶景ビーチなど、沖縄を全力で楽しめる最旬情報を掲載。エリア×テーマ別モデルコースや雨の日におすすめの施設、沖縄美ら海水族館などの定番名所から、穴場スポットまで、初心者の方でもリピーターでもしっかり満足な一冊に。'
                    ],
                    sales: 100,
                    recommend: 1
                },
                {
                    id: 'b61',
                    type: '旅遊',
                    engType: 'travel',
                    name: '台湾探見 Discover Taiwan―ちょっぴりディープに台湾体験',
                    author: '片倉真理 (著), 片倉佳史 (写真)',
                    cover: 'https://m.media-amazon.com/images/P/B07CJBYHLZ.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'ウェッジ',
                    publicationDate: '2018/4/20',
                    upLoadDate: 20180420,
                    bookType: 'ムック',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '229頁',
                    isbn: '978-4863102002',
                    price: 280,
                    stock: 10,
                    introduce: [
                        '刺激と発見の連続! ちょっぴりディープな台湾の素顔',
                        '台湾在住歴20年の作家夫婦が取材体験をもとに、台湾各地の風土や祭典、歴史、日本とのかかわりなどを紹介した紀行エッセイ。秘境探索、田舎散策、歴史建築探訪、ご当地グルメ、島旅などのほか、愛文マンゴーの開発秘話や凍頂烏龍茶の茶畑訪問記など、厳選したネタが満載。',
                        '嘉義の火鶏肉飯ガイドや台湾マンゴーカタログ、絶景路線・南廻線の旅、花東海岸公路バスの沿線ガイドなど、旅行のネタも満載。新しい潮流を起こす若い世代や日本語世代と呼ばれる老年世代も取り上げ、「台湾社会の今」を理解するのにも役立ちます。台湾初心者からリピーターまで幅広く親しめる作りで、「二冊目のガイドブック」としてもおすすめです。',
                        'さあ、今すぐ「台湾旅」に出かけよう!'
                    ],
                    sales: 10,
                    recommend: 999
                },
                {
                    id: 'b62',
                    type: '旅遊',
                    engType: 'travel',
                    name: 'へんろ道うどん道',
                    author: '鈴木弘毅',
                    cover: 'https://m.media-amazon.com/images/P/B0BJ22VRZ4.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'イカロス出版',
                    publicationDate: '2022/10/4',
                    upLoadDate: 20221004,
                    bookType: '単行本',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '248頁',
                    isbn: '978-4272211289',
                    price: 280,
                    stock: 10,
                    introduce: [
                        '誰しもが憧れる、四国八十八ヶ所霊場を巡る「歩き遍路」。',
                        'そして四国といえば、弘法大師こと空海が広めたといわれるうどんが全国的に有名だ。弘法大師が開いた霊場ととともに、88か所のうどん店とともに巡れば、そこから何か見えてくるものがあるのではないか――。駅そば研究の第一人者である著者が、霊場と“うどん札所”への巡礼を完遂するべく旅に出た。道中には何が待っているのか？ 完遂した先にあるものとは？',
                        'チャレンジ系旅行記とグルメガイドを融合させた、前代未聞の歩き遍路本！'
                    ],
                    recommend: 1
                },
                {
                    id: 'b63',
                    type: '旅遊',
                    engType: 'travel',
                    name: 'ワンダーJAPON (6) (日本で唯一の「異空間」旅行マガジン！)',
                    author: 'standards (編集)',
                    cover: 'https://m.media-amazon.com/images/I/91+yBIP8qkL.jpg',
                    publishingHouse: 'standards',
                    publicationDate: '2023/1/24',
                    upLoadDate: 20230124,
                    bookType: 'ムック',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '112頁',
                    isbn: '978-4272211289',
                    price: 280,
                    stock: 10,
                    introduce: [
                        '廃墟・産業遺産・工場・ダム・珍スポット・珍寺・珍建築・公園遊具・赤線跡・性神・地下空間・巨大建造物などマニアなブームを支えた伝説のサブカル誌「ワンダーJAPAN」が名前をわずかに変え、装いを新たに登場しました。本書は第6号となります。今号の特集は「岡山・広島 異界紀行」です！',
                        '動物の首がニョッキリと生えた駅舎、ひと目見たら忘れられない、衝撃的な印象をもたらすお饅頭屋さん、圧巻の宗教施設、異世界への入り口にしか見えない漆黒のトンネル、内観すべてが怖すぎる真っ暗なカフェ、また某有名映画のロケにも使われたカッコよすぎるゴミ焼却工場、廃墟ファン垂涎の蔦に覆われたカッコいいビル……などなど岡山、広島の衝撃スポットを余すところなくたっぷり紹介しています。',
                        'そして、特集「不思議な神社仏閣・拡大版」では、捨身行の激しい思いがヒシヒシと伝わる羅漢像、隠れキリシタン関連の謎の石像、あらゆる仏像が隙間なく配置されたカオスなお寺など、多様性にあふれすぎた世界を堪能できます。',
                        'さらに、織物のガチャ万景気で出現した大歓楽街の残り香に包まれた「富士の裾野のレトロな町」、ロボット大行進のごときテクノスケープ、読者の方に投稿いただいた珍情報満載の投稿コーナーなど、毎号が完全保存版のワンダーJAPON、第6号も超充実の内容です！'
                    ],
                    recommend: 1
                },
                {
                    id: 'b64',
                    type: '旅遊',
                    engType: 'travel',
                    name: 'ライダー、オートキャンパーのための　北海道ツーリングWalker',
                    author: '北海道Ｗａｌｋｅｒ編集部 (編集) ',
                    cover: 'https://m.media-amazon.com/images/P/B07F75TZR3.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'KADOKAWA',
                    publicationDate: '2018/7/7',
                    upLoadDate: 20230113,
                    bookType: 'ムック',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '148頁',
                    isbn: '978-4048963299',
                    price: 230,
                    stock: 10,
                    introduce: [
                        'ツーリングライダー、オートキャンパー必見! 北海道を旅するためのガイド',
                        '北海道をツーリングするための全道スポットガイド。絶対走りたい道の紹介から、道の駅、直売所、日帰り湯など、キャンプツーリングで必要なスポットを集めました。ライダーならずとも、キャンプの方にも便利な1冊です。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b65',
                    type: '旅遊',
                    engType: 'travel',
                    name: 'まっぷる 大河ドラマ どうする家康',
                    author: '昭文社 旅行ガイドブック 編集部 (編集), 小和田哲男 (監修)',
                    cover: 'https://m.media-amazon.com/images/I/716bzP8Qi9L.jpg',
                    publishingHouse: '昭文社',
                    publicationDate: '2023/1/13',
                    upLoadDate: 20230113,
                    bookType: 'ムック',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '96頁',
                    isbn: '978-4272211289',
                    price: 280,
                    stock: 10,
                    introduce: [
                        '2023年放送のNHK大河ドラマ『どうする家康』は、時代の激流に翻弄されながらも、ピンチとガマンの連続で切り抜け、天下統一の偉業を成し遂げる徳川家康の人生を、脚本家・古沢良太さんが新たな視点で描く歴史ドラマです。本書は、ドラマ紹介と徳川家康ゆかりの地を巡る旅ガイドの決定版です。主人公の徳川家康を演じる松本潤さんをはじめ、豪華出演者陣によるドラマ劇中写真や人物相関図などのコンテンツも充実しています。また、大河ドラマ館、旅で訪れたいゆかりの地でのグルメやお土産などの情報も満載です。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b66',
                    type: '旅遊',
                    engType: 'travel',
                    name: 'ブラタモリ 13 京都(清水寺・祇園) 黒部ダム 立山',
                    author: 'NHK「ブラタモリ」制作班 (監修)',
                    cover: 'https://m.media-amazon.com/images/I/81j6elTXICL.jpg',
                    publishingHouse: '昭文社',
                    publicationDate: '2023/1/13',
                    upLoadDate: 20230113,
                    bookType: 'ムック',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '136頁',
                    isbn: '978-4272211289',
                    price: 400,
                    stock: 10,
                    introduce: [
                        'あの人気街歩き番組の公式本。これであなたも「ブラタモリ」体験',
                        '収録される放送回',
                        '#69 京都・清水寺~人はなぜ清水を目指す?~',
                        '#70 京都・祇園~日本一の花街・祇園はどうできた?~',
                        '#86 黒部ダム~黒部ダムは なぜ秘境につくられた?~',
                        '#87 黒部の奇跡~黒部ダムは なぜ秘境につくられた?~',
                        '#88 立山~北アルプス・立山は なぜ神秘的?~'
                    ],
                    recommend: 1
                },
                {
                    id: 'b67',
                    type: '旅遊',
                    engType: 'travel',
                    name: '日本100名城と続日本100名城に行こう 公式スタンプ帳つき',
                    author: '公益財団法人日本城郭協会',
                    cover: 'https://m.media-amazon.com/images/I/91T6vxlPx-L.jpg',
                    publishingHouse: 'ワン・パブリッシング',
                    publicationDate: '2020/12/17',
                    upLoadDate: 20201217,
                    bookType: 'ムック',
                    size: '14.8 x 1.6 x 21 cm',
                    pages: '287頁',
                    isbn: '978-4651200576',
                    price: 280,
                    stock: 10,
                    introduce: [
                        '「日本100名城」と「続日本100名城」の200城が一冊になったハンディサイズのスタンプ帳つき公式ガイドブックが遂に登場!',
                        'いま大人気のお城めぐりの必需品、82万部突破の日本100名城公式ガイドブックシリーズから、大人気のハンディ版『日本100名城に行こう』と『続日本100名城に行こう』を合わせたものが遂に登場!200城の詳細ガイドとスタンプ帳が一冊になって、持ち運びにも便利。',
                        '同じ地域にある100名城と続100名城は関係の深いものが多く、合わせてめぐれば面白さは2倍以上!巻末のスタンプ帳にスタンプを押して登城日を記せば、あなただけの旅の記録にもなります。',
                        'スタンプ・ラリーには期限がありません。',
                        '5年10年と、ゆっくり時間をかけて100名城のコンプリートを目指されている方がたくさんいらっしゃいます。長く楽しめる趣味として、この機会にお城めぐりを始めてみてはいかがでしょうか<? br> 日本の歴史や文化も一緒に学べるお城めぐりは、親子で楽しむレジャーとしてもおススメです。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b68',
                    type: '旅遊',
                    engType: 'travel',
                    name: '行きたい！ 残したい！ すごい温泉100',
                    author: '渡辺裕美 (監修)',
                    cover: 'https://m.media-amazon.com/images/I/81VqjeCbikL.jpg',
                    publishingHouse: 'イカロス出版  ',
                    publicationDate: '2023/1/30',
                    upLoadDate: 20230130,
                    bookType: 'ムック',
                    size: '25.7 x 18.2 x 1.2 cm',
                    pages: '132頁',
                    isbn: '978-4272211289',
                    price: 280,
                    stock: 10,
                    introduce: [
                        '温泉地の数3000、源泉総数は2万8000と、世界一の温泉大国といえる日本。誰もが知る大観光地となっているところも多いが、その一方で、知る人ぞ知る変わり種温泉もいたるところに存在している。石油が混じっていたり、末期がんの患者が祈祷しながら入る湯治場だったり、とんでもない山奥にポツンとあったり…。そしてそういう温泉はだいたい一軒宿のため、そこがなくなるのはその温泉ごと消滅するということでもある。本書は日本全国に存在するそんな“絶滅危惧温泉”を、ジャンル別に紹介してゆく。'
                    ],
                    recommend: 1
                },
                {
                    id: 'b69',
                    type: '旅遊',
                    engType: 'travel',
                    name: '真夏の温泉',
                    author: '岩本薫 (著)',
                    cover: 'https://m.media-amazon.com/images/I/81tmalQ+zEL.jpg',
                    publishingHouse: 'みらいパブリッシング',
                    publicationDate: '2022/7/15',
                    upLoadDate: 20220715,
                    bookType: '単行本',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '160頁',
                    isbn: '978-4272211289',
                    price: 280,
                    stock: 10,
                    introduce: [
                        'ひなびた温泉研究所ショチョーのもとに、研究員はもとより、いずれも温泉好きのイラストレーター、デザイナー、ヘンシューシャ、コーセイシャが集結し、再び温泉本を作り上げました!もはや皆の頭のなかは温泉マークでいっぱい♨。',
                        'あなたもいっしょに真夏の温泉にハマりましょう♨'
                    ],
                    recommend: 1
                },
                {
                    id: 'b70',
                    type: '旅遊',
                    engType: 'travel',
                    name: 'BRUTUS特別編集 増補版 台湾',
                    author: 'マガジンハウス (編集)',
                    cover: 'https://m.media-amazon.com/images/P/B07BF8YRQ1.01._SCLZZZZZZZ_SX500_.jpg',
                    publishingHouse: 'マガジンハウス',
                    publicationDate: '2018/3/15',
                    upLoadDate: 20230113,
                    bookType: 'ムック',
                    size: '18.8 x 13 x 1.7 cm',
                    pages: '120頁',
                    isbn: '978-4272211289',
                    price: 360,
                    stock: 1,
                    introduce: [
                        '台湾観光局 貢献賞受賞!',
                        '2017年7月15日発売の台湾特集は完売書店が続出するほど大きな反響をいただきました。本ムックは本誌の特集をベースに新規取材20ページを加え、増補改訂版としてボリュームアップ!',
                        '観光、ご当地グルメ、ショッピング…。男女ともに楽しめる情報が満載です。他誌が取り上げていない話題のエリア、ローカル情報もたくさん集めました。',
                        'お店の情報や地図をスマホに取り込める、便利なQRコードは、大好評につきアップデート。Google Maps連動なので、現地でも迷わず移動できます。',
                        '東京から約3時間半、時差1時間というお手軽さも手伝って大人気の台湾。',
                        '思い立ったら、いざ出発!'
                    ],
                    recommend: 1
                },
            ]
        }
    },
    getters: {
        //新書
        getNewLit(state) {
            return state.books.filter(book => book.type === '文學小說').sort((a, b) => b.upLoadDate - a.upLoadDate)
        },
        getNewBusiness(state) {
            return state.books.filter(book => book.type === '商業理財').sort((a, b) => b.upLoadDate - a.upLoadDate)
        },
        getNewArt(state) {
            return state.books.filter(book => book.type === '藝術設計').sort((a, b) => b.upLoadDate - a.upLoadDate)
        },
        getNewComic(state) {
            return state.books.filter(book => book.type === '漫畫').sort((a, b) => b.upLoadDate - a.upLoadDate)
        },
        getNewHumanities(state) {
            return state.books.filter(book => book.type === '人文社會').sort((a, b) => b.upLoadDate - a.upLoadDate)
        },
        getNewTravel(state) {
            return state.books.filter(book => book.type === '旅遊').sort((a, b) => b.upLoadDate - a.upLoadDate)
        },
        //分類
        getArt(state) {
            return state.books.filter(book => book.type === '藝術設計')
        },
        getLit(state) {
            return state.books.filter(book => book.type === '文學小說')
        },
        getComic(state) {
            return state.books.filter(book => book.type === '漫畫')
        },
        getBusiness(state) {
            return state.books.filter(book => book.type === '商業理財')
        },
        getHumanities(state) {
            return state.books.filter(book => book.type === '人文社會')
        },
        getTravel(state) {
            return state.books.filter(book => book.type === '旅遊')
        },
        //detail
        getDetail(state) {
            return (id) => {
                return state.books.find(book => book.id === id)
            }
        },
        //熱銷
        getHotLit(state) {
            return state.books.filter(book => book.type === '文學小說').sort((a, b) => b.sales - a.sales)
        },
        getHotBusiness(state) {
            return state.books.filter(book => book.type === '商業理財').sort((a, b) => b.sales - a.sales)
        },
        getHotArt(state) {
            return state.books.filter(book => book.type === '藝術設計').sort((a, b) => b.sales - a.sales)
        },
        getHotHumanities(state) {
            return state.books.filter(book => book.type === '人文社會').sort((a, b) => b.sales - a.sales)
        },
        getHotTravel(state) {
            return state.books.filter(book => book.type === '旅遊').sort((a, b) => b.sales - a.sales)
        },
        getHotComic(state) {
            return state.books.filter(book => book.type === '漫畫').sort((a, b) => b.sales - a.sales)
        },
        //推薦
        getRecommendLit(state) {
            return state.books.filter(book => book.type === '文學小說').sort((a, b) => b.recommend - a.recommend)
        },
        getRecommendBusiness(state) {
            return state.books.filter(book => book.type === '商業理財').sort((a, b) => b.recommend - a.recommend)
        },
        getRecommendArt(state) {
            return state.books.filter(book => book.type === '藝術設計').sort((a, b) => b.recommend - a.recommend)
        },
        getRecommendHumanities(state) {
            return state.books.filter(book => book.type === '人文社會').sort((a, b) => b.recommend - a.recommend)
        },
        getRecommendTravel(state) {
            return state.books.filter(book => book.type === '旅遊').sort((a, b) => b.recommend - a.recommend)
        },
        getRecommendComic(state) {
            return state.books.filter(book => book.type === '漫畫').sort((a, b) => b.recommend - a.recommend)
        },

    },
    actions: {
        stockControl(context, book) {
            context.commit('stockControl', book)
        }
    },
    mutations: {
        stockControl(state, book) {
            const bookInIndex = state.books.findIndex(i => i.id === book.id);
            state.books[bookInIndex].stock--;
        }
    }
}