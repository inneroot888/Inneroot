Inneroot V7.1.10 — Desktop Journal Final Fix

真正原因：
index.html 會在 style.css 之後再載入 fix-v48 至 fix-v68。
之前的新規則放在 style.css 最尾，仍然會被後載入的 fix-v68 覆蓋，
所以網站看起來完全沒有改變。

這次新增 fix-v69.css，並放在所有舊 fix 檔案之後載入。

修正：
- 網頁版「哪一句最觸動你？」選中後清楚變淡綠色及亮起圓點
- 網頁版收藏完成頁重新排列，不再有大幅空白及資料散開
- 手機版完全不變

只需上傳 GitHub：
1. index.html
2. fix-v69.css

其他檔案不需要重新上傳。
