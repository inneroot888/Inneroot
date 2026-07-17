Inneroot V7.1.19 — 收藏提示框尾對齊修正

已確認上一版無效的真正原因：
舊 CSS 內有 left:auto !important，
上一版 JavaScript 寫入的普通 left 值無法覆蓋，所以畫面完全沒有改變。

今次修正：
- 使用 JavaScript 的 important 水平座標
- 直接讀取「今天的心情」卡片實際右邊位置
- 只水平移動「今日的日記已收藏」
- 高低、大小、字體及上下位置全部不改
- 右邊框尾會與「今天的心情」框尾對齊
- Windows 及 iPad 會按各自實際尺寸重新計算
- 網頁版底部兩個按鈕保持同高同闊
- 手機版完全沒有修改

請上傳 GitHub 根目錄：
1. index.html
2. script.js
3. fix-v77.css

style.css 及 fix-v76.css 無需重新上傳；壓縮包內保留作完整備份。
