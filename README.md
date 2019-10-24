# 版本說明

- [v1.0.0](#v1) - [載點](https://github.com/HedgehogKUCC/RWD/releases/tag/v1.0.0)
- [v2.0.0](#v2) - [載點](https://github.com/HedgehogKUCC/RWD/releases/tag/v2.0.0) - [網頁預覽](https://hedgehogkucc.github.io/RWD/index.html)

<hr>

<h2 id="v1"> v1.0.0 </h2>

結合了以下所學到觀念與實作技術

- [Pr-business-card](#Pr-business-card)
- [HTML-CSS](#HTML-CSS)
- [Pr.jQuery](#Pr.jQuery)
- [RWD](#RWD)

<hr>

<h3 id="Pr-business-card"> Pr-business-card </h3>

瞭解 基本 **HTML** 和 **CSS** 的 `float` `position`

藉由實作來瞭解自己對於課程的吸收

***Code Review***

- 不要使用 `.box` `.left` `.right` 這種 class名稱，應取名為具有語意的 !

- 清除浮動`.clearfix`的正確擺放位置

- 可用`writing-mode: vertical-rl;`或`writing-mode: vertical-lr;`也能讓文字呈現垂直排列

- 避免寫重複樣式, 將`border-color`獨立拉出來寫 !

[GitHub](https://github.com/HedgehogKUCC/Pr-business-card) &nbsp; &nbsp; &nbsp; [作品預覽](https://hedgehogkucc.github.io/Pr-business-card/index.html)

<br>

<h3 id="HTML-CSS"> HTML-CSS </h3>

進階瞭解 `head` 資訊設定

這靜態網頁有給予 `.psd` 來使用 `Photoshop` 切版工具

還有輔助使用 `MarkMan` 量測出各個數值

***Code Review***

- `a` 加上 `display:block` 增加點擊範圍

- 設計 `hover` 樣式與加上 `cursor:pointer` 提升使用者回饋 !

- 一個網頁上只會有一個 `h1` !!!

- Form表單不需要使用 `br` 來斷行, 可以在 `input` 加上 `display:block` 讓內容向下排列 .

[GitHub](https://github.com/HedgehogKUCC/HTML-CSS) &nbsp; &nbsp; &nbsp; [作品預覽](https://hedgehogkucc.github.io/HTML-CSS/index.html)

<br>

<h3 id="Pr.jQuery"> Pr.jQuery </h3>

從 `jQuery` 快速瞭解網頁互動效果是怎麼操作 **CSS**

用瀏覽器 `Chrome` `檢查` 和 `Safari` `開發 -> 網頁檢閱器` 來查看網頁

在 `Console` 使用 `jQuery` 抓取 `HTML標籤` 進行網頁的動畫效果

載入第三方 Plugin 注意細節

- 確認熱門瀏覽器有無支援，至少 IE9 以上 .
- 確保該載入的 `CSS` `JS` `IMG` 皆有載入
- 有發現問題時，打開 `Console` 確認 .
- 查詢插件的 `JS` 設定
- 修改 `CSS` 成為自己要的樣式

*Pr.jQuery* 整合 `lightbox` `swiper` `animate` `Awesome`

***Code Review***

- 下拉選單下拉時不要牽動到下面內容, 用 相對/絕對 定位來處理 .

[GitHub](https://github.com/HedgehogKUCC/Pr-jQuery) &nbsp; &nbsp; &nbsp; [作品預覽](https://hedgehogkucc.github.io/Pr-jQuery/index.html)

<br>

<h3 id="RWD"> RWD </h3>

`max-width` 從網頁介面開始設計

`min-width` 從手機介面開始設計

從 `pure.css` 學習每個瀏覽器的相容寫法及套用樣式

初學 `Sass` 管理 **css** -- [30天掌握SASS語法](https://ithelp.ithome.com.tw/articles/10126703)

***Code Review***

- 指定階層不超過**四層**, 階層愈多會導致網頁渲染速度變慢 !

- 上下推擠不要用 `%` 改用 `em`, 例如: `margin-top` `margin-bottom` , 原因是跟行距有關係 !

- 請勿使用 `id` 綁定網頁樣式

<hr>

<br>

<h2 id="v2"> v2.0.0 </h2>


