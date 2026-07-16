const cards=[{"file": "00-fool.webp", "zh": "愚者", "en": "The Fool", "q": ["今天有什麼地方值得重新開始？", "你是否因為害怕犯錯而停下來？", "如果放低一次控制，你會想試什麼？"]}, {"file": "01-magician.webp", "zh": "魔術師", "en": "The Magician", "q": ["你手上已經擁有什麼資源？", "你最近忽略了哪一種能力？", "今天可以主動完成哪一件小事？"]}, {"file": "02-high-priestess.webp", "zh": "女祭司", "en": "The High Priestess", "q": ["你心裡其實早已知道什麼？", "最近有什麼感受未被說出口？", "今天可以如何安靜地聽自己？"]}, {"file": "03-empress.webp", "zh": "皇后", "en": "The Empress", "q": ["你現在最需要怎樣的照顧？", "你有沒有過度付出而忽略自己？", "今天可以為自己創造什麼舒服空間？"]}, {"file": "04-emperor.webp", "zh": "皇帝", "en": "The Emperor", "q": ["你現在最需要建立哪一條界線？", "哪件事需要更清晰的結構？", "今天可以做哪個穩定自己的決定？"]}, {"file": "05-hierophant.webp", "zh": "教皇", "en": "The Hierophant", "q": ["哪些信念是你真正認同的？", "哪些規則只是因為習慣而跟從？", "你今天想向誰或什麼學習？"]}, {"file": "06-lovers.webp", "zh": "戀人", "en": "The Lovers", "q": ["你正在面對哪一個重要選擇？", "你真正重視的是什麼？", "你的選擇有沒有忠於自己？"]}, {"file": "07-chariot.webp", "zh": "戰車", "en": "The Chariot", "q": ["你現在想把力量帶往哪裡？", "你內在有哪兩股力量正在拉扯？", "今天最值得專注的是什麼？"]}, {"file": "08-strength.webp", "zh": "力量", "en": "Strength", "q": ["你可以如何溫柔地面對困難？", "哪種情緒需要被安撫而非壓制？", "你其實比自己想像中堅持了多久？"]}, {"file": "09-hermit.webp", "zh": "隱者", "en": "The Hermit", "q": ["你需要暫時離開哪些雜音？", "最近有什麼問題需要獨自想清楚？", "今天可以留多少時間給自己？"]}, {"file": "10-wheel-of-fortune.webp", "zh": "命運之輪", "en": "Wheel of Fortune", "q": ["你正在經歷哪一種轉變？", "有哪些事情並不完全受你控制？", "你可以如何配合而非抗拒變化？"]}, {"file": "11-justice.webp", "zh": "正義", "en": "Justice", "q": ["你是否誠實面對自己的選擇？", "哪件事需要更平衡地看待？", "今天可以承擔哪一部分責任？"]}, {"file": "12-hanged-man.webp", "zh": "倒吊人", "en": "The Hanged Man", "q": ["你是否需要換一個角度？", "有哪些事情暫時不必急著推進？", "放下哪個執著會令你更自由？"]}, {"file": "13-death.webp", "zh": "死神", "en": "Death", "q": ["有什麼已經完成，但你仍未放手？", "哪個舊模式正在離開？", "你想為新階段騰出什麼空間？"]}, {"file": "14-temperance.webp", "zh": "節制", "en": "Temperance", "q": ["你的生活哪一部分需要調和？", "你最近是否走得太快或太慢？", "今天可以做什麼令自己回到平衡？"]}, {"file": "15-devil.webp", "zh": "惡魔", "en": "The Devil", "q": ["你最近被什麼慾望或恐懼牽制？", "哪個模式明知不舒服卻重複出現？", "你可以先鬆開哪一小部分？"]}, {"file": "16-tower.webp", "zh": "高塔", "en": "The Tower", "q": ["哪個真相正在打破舊有想法？", "你最害怕失去的是什麼？", "在混亂之中，有什麼變得更清楚？"]}, {"file": "17-star.webp", "zh": "星星", "en": "The Star", "q": ["今天什麼事情令你重新燃起希望？", "你有沒有忽略自己真正的需要？", "如果相信自己一次，你會做什麼？"]}, {"file": "18-moon.webp", "zh": "月亮", "en": "The Moon", "q": ["最近有什麼讓你感到不確定？", "你的恐懼之中有多少來自想像？", "你需要更多什麼資訊或安全感？"]}, {"file": "19-sun.webp", "zh": "太陽", "en": "The Sun", "q": ["今天有什麼值得你真心享受？", "你在哪裡可以更坦率地做自己？", "有什麼好事其實已經在發生？"]}, {"file": "20-judgement.webp", "zh": "審判", "en": "Judgement", "q": ["你正在回應哪一個內在呼喚？", "有哪些過去需要重新理解？", "你準備為自己作出什麼新決定？"]}, {"file": "21-world.webp", "zh": "世界", "en": "The World", "q": ["你最近完成了哪一個重要階段？", "你可以如何肯定自己的成長？", "下一段旅程想帶著什麼出發？"]}];
const backdrop=document.getElementById("modalBackdrop"),content=document.getElementById("modalContent"),toast=document.getElementById("toast");
function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;}
const DAILY_ENTRY_KEYS=["innerootMood","innerootJournal","innerootJournalFocus","innerootGentleNote"];
let pendingDailyRollover=null;

function getRawDraw(){
  try{
    const x=JSON.parse(localStorage.getItem("innerootDailyDraw")||"null");
    return x&&x.date&&x.card?x:null;
  }catch{return null}
}
function storedDrawDate(){
  const x=getRawDraw();
  return x?String(x.date):"";
}
function hasDailyWriting(){
  return DAILY_ENTRY_KEYS.some(key=>(localStorage.getItem(key)||"").trim());
}
function archiveDailyEntry(entryDate){
  const draw=getRawDraw();
  const entry={
    date:entryDate||storedDrawDate()||today(),
    card:draw&&(!entryDate||draw.date===entryDate)?{zh:draw.card.zh,en:draw.card.en}:null,
    mood:localStorage.getItem("innerootMood")||"",
    focus:localStorage.getItem("innerootJournalFocus")||"",
    journal:localStorage.getItem("innerootJournal")||"",
    gentle:localStorage.getItem("innerootGentleNote")||""
  };
  if(!entry.card&&!entry.mood&&!entry.focus&&!entry.journal.trim()&&!entry.gentle.trim())return false;
  const rows=getInsightHistory().filter(x=>x&&x.date!==entry.date);
  rows.push(entry);
  rows.sort((a,b)=>String(a.date).localeCompare(String(b.date)));
  localStorage.setItem("innerootInsightHistory",JSON.stringify(rows.slice(-90)));
  return true;
}
function clearDailyWriting(){
  DAILY_ENTRY_KEYS.forEach(key=>localStorage.removeItem(key));
  mood="";
  journal="";
}
function completeDailyRollover(previousDate){
  archiveDailyEntry(previousDate);
  clearDailyWriting();
  localStorage.setItem("innerootDailyEntryDate",today());
  localStorage.setItem("innerootDailyResetVersion","6.9.1");
}
function initialiseDailyEntry(){
  const current=today();
  const explicitDate=localStorage.getItem("innerootDailyEntryDate")||"";
  const legacyDate=storedDrawDate();
  const installed=localStorage.getItem("innerootDailyResetVersion")==="6.9.1";

  if(explicitDate&&explicitDate!==current){
    pendingDailyRollover={type:"dated",previousDate:explicitDate};
    return;
  }

  if(!installed&&!explicitDate&&hasDailyWriting()){
    pendingDailyRollover={
      type:"migration",
      previousDate:legacyDate&&legacyDate!==current?legacyDate:""
    };
    return;
  }

  localStorage.setItem("innerootDailyEntryDate",current);
  localStorage.setItem("innerootDailyResetVersion","6.9.1");
}
function touchDailyEntry(){
  localStorage.setItem("innerootDailyEntryDate",today());
  localStorage.setItem("innerootDailyResetVersion","6.9.1");
}
initialiseDailyEntry();
let mood=localStorage.getItem("innerootMood")||"",journal=localStorage.getItem("innerootJournal")||"";
function getDraw(){try{const x=JSON.parse(localStorage.getItem("innerootDailyDraw")||"null");return x&&x.date===today()?x:null}catch{return null}}
function getInsightHistory(){
  try{
    const rows=JSON.parse(localStorage.getItem("innerootInsightHistory")||"[]");
    return Array.isArray(rows)?rows:[];
  }catch{return []}
}
function saveInsightEntry(){
  const draw=getDraw();
  const entry={
    date:today(),
    card:draw?{zh:draw.card.zh,en:draw.card.en}:null,
    mood:localStorage.getItem("innerootMood")||"",
    focus:localStorage.getItem("innerootJournalFocus")||"",
    journal:localStorage.getItem("innerootJournal")||"",
    gentle:localStorage.getItem("innerootGentleNote")||""
  };
  if(!entry.journal.trim())return;
  const rows=getInsightHistory().filter(x=>x&&x.date!==entry.date);
  rows.push(entry);
  rows.sort((a,b)=>String(a.date).localeCompare(String(b.date)));
  localStorage.setItem("innerootInsightHistory",JSON.stringify(rows.slice(-90)));
}
function recentInsightEntries(days=7){
  const start=new Date();
  start.setHours(0,0,0,0);
  start.setDate(start.getDate()-(days-1));
  return getInsightHistory().filter(x=>{
    const d=new Date(`${x.date}T00:00:00`);
    return !Number.isNaN(d.getTime())&&d>=start;
  });
}
function insightPrompt(entries){
  const records=entries.map((x,i)=>`【記錄 ${i+1}｜${x.date}】\n牌卡：${x.card?x.card.zh+"（"+x.card.en+"）":"未抽牌"}\n心情：${x.mood||"未選擇"}\n最觸動的問題：${x.focus||"未選擇"}\n日記：${x.journal||"未填寫"}\n給自己的話：${x.gentle||"未填寫"}`).join("\n\n");
  return `你是 Inneroot 的「內在洞察」陪伴者。請根據以下最近七天的真實記錄，幫我回顧重複出現的情緒、牌卡、想法與內在模式。\n\n請遵守：\n- 不預測未來，不判斷吉凶。\n- 不下心理或醫療診斷。\n- 只引用記錄中實際出現的內容，不要捏造。\n- 推論要使用「可能」「也許」「值得留意」等語氣。\n- 如資料不足或未見明顯模式，要直接說明。\n- 使用繁體中文，語氣溫柔、清晰、不說教。\n\n【最近七天記錄】\n${records}\n\n【請依照以下五個部分回覆】\n1. 🌿 近期情緒：整理主要情緒變化與可能出現的情境。\n2. 🃏 反覆出現的牌：列出重複牌卡；若沒有，說明牌卡共同帶出的象徵方向。\n3. ✨ 重複出現的主題：只根據日記字詞與內容，整理二至四個主題。\n4. 🌱 成長提醒：指出一至兩個已經出現的改變或值得培養的方向。\n5. 💭 下一次可以留意：提供一條具體、溫柔而不武斷的日記問題。\n\n最後固定加上：\n「這份洞察不是對你的定義，只是根據最近記錄整理出的一個角度。你可以留下有共鳴的部分，也可以放下不適合你的內容。」`;
}
async function prepareInsight(){
  const entries=recentInsightEntries(7);
  if(entries.length<3){
    openInsight();
    return;
  }
  const text=insightPrompt(entries);
  try{
    await navigator.clipboard.writeText(text);
    openModal(`<div class="explore-ready"><div class="explore-orb">✦</div><p class="eyebrow">INNER INSIGHT</p><h2>最近 7 天的內在洞察已準備好</h2><p>內容已整理成一段提示，你可以貼到文字對話 AI，回顧近期情緒、牌卡與日記中反覆出現的線索。</p><div class="explore-actions"><button class="primary" id="copyInsightAgain">再次複製</button><button class="secondary" id="closeInsight">稍後再看</button></div><p class="explore-note">這不是對你的定義，只是一個回望自己的角度。</p></div>`);
    document.getElementById("closeInsight").onclick=closeModal;
    document.getElementById("copyInsightAgain").onclick=async()=>{try{await navigator.clipboard.writeText(text);showToast("內在洞察內容已複製")}catch{showToast("請長按文字手動複製")}};
  }catch{
    openModal(`<div class="explore-ready"><p class="eyebrow">INNER INSIGHT</p><h2>長按以下內容複製</h2><textarea class="explore-prompt" readonly>${escapeHTML(text)}</textarea><div class="explore-actions"><button class="primary" id="copyInsightAgain">複製內在洞察內容</button><button class="secondary" id="closeInsight">關閉</button></div></div>`);
    document.getElementById("closeInsight").onclick=closeModal;
    document.getElementById("copyInsightAgain").onclick=async()=>{try{await navigator.clipboard.writeText(text);showToast("內在洞察內容已複製")}catch{showToast("請長按文字手動複製")}};
  }
}
function openInsight(){
  // Migrate the current saved journal into history once, so existing users do not start from zero.
  if((localStorage.getItem("innerootJournal")||"").trim())saveInsightEntry();
  const entries=recentInsightEntries(7);
  const remaining=Math.max(0,3-entries.length);
  const progress=Math.min(100,Math.round(entries.length/3*100));
  openModal(`<div class="explore-ready"><div class="explore-orb">◌</div><p class="eyebrow">INNER INSIGHT</p><h2>內在洞察</h2><p>每一次抽牌、心情和日記，都會慢慢累積成你的內在軌跡。當記錄足夠後，這裡會幫你整理最近七天反覆出現的情緒、牌卡、想法與成長方向。</p><div style="margin:20px 0;padding:16px 18px;border-radius:18px;background:rgba(236,243,232,.72);text-align:left"><strong>最近 7 天已累積 ${entries.length} 次記錄</strong><div style="height:8px;margin-top:12px;border-radius:999px;background:rgba(112,143,117,.14);overflow:hidden"><span style="display:block;width:${progress}%;height:100%;border-radius:inherit;background:linear-gradient(90deg,#a9bea5,#718f76)"></span></div><small style="display:block;margin-top:10px;color:#748278">${remaining?`再完成 ${remaining} 次潛意識日記，就可以開始第一份內在洞察。`:"資料已足夠，可以開始回顧最近七天。"}</small></div><div class="explore-actions">${remaining?'<button class="primary" id="continueJournal">前往潛意識日記</button>':'<button class="primary" id="startInsight">開始分析最近 7 天</button>'}<button class="secondary" id="closeInsight">稍後再看</button></div><p class="explore-note">所有記錄只儲存在你目前使用的瀏覽器。</p></div>`);
  document.getElementById("closeInsight").onclick=closeModal;
  const journalButton=document.getElementById("continueJournal");if(journalButton)journalButton.onclick=openJournal;
  const insightButton=document.getElementById("startInsight");if(insightButton)insightButton.onclick=prepareInsight;
}
function openModal(h){
  content.innerHTML=h;
  backdrop.hidden=false;
  document.body.classList.add("modal-open");
  backdrop.scrollTop=0;
  content.scrollTop=0;
}
function closeModal(){
  backdrop.hidden=true;
  document.body.classList.remove("modal-open");
}
function showToast(t){toast.textContent=t;toast.hidden=false;clearTimeout(showToast.x);showToast.x=setTimeout(()=>toast.hidden=true,1700)}
function beginDraw(){const old=getDraw();if(old)return showResult(old.card);openModal(`<div class="draw-v70"><p class="eyebrow">DAILY DRAW</p><h2>每日一抽</h2><p class="draw-v70-intro">靜下心，深呼吸，想一想今天最想理解的是什麼。</p><div class="draw-v70-scene"><span class="draw-v70-glow" aria-hidden="true"></span><span class="draw-v70-ripple" aria-hidden="true"></span><img class="draw-v70-cardback" src="daily-draw-card-back.png?v=7.1.0" alt="Inneroot 塔羅牌背"></div><p class="draw-v70-note">這張牌不是答案，而是一個陪你聆聽內在的提醒。</p><button class="primary draw-v70-button" id="go">專注當下，開始抽牌 ✦</button></div>`);const button=document.getElementById("go");button.onclick=()=>{if(button.disabled)return;button.disabled=true;button.textContent="正在聆聽內在…";const panel=document.querySelector(".draw-v70"),cardback=document.querySelector(".draw-v70-cardback");panel&&panel.classList.add("is-revealing");cardback&&cardback.classList.add("is-revealing");const card=cards[Math.floor(Math.random()*cards.length)];localStorage.setItem("innerootDailyDraw",JSON.stringify({date:today(),card}));touchDailyEntry();setTimeout(()=>showResult(card),900)}}
function showResult(card){openModal(`<span class="badge">${today()} · 今日牌卡</span><div class="card-stage"><img class="tarot-card" src="${card.file}" alt="${card.zh}"></div><h2>${card.zh}</h2><p><strong>${card.en}</strong></p><p class="result-copy">這張牌不是答案，而是一個邀請。</p><ol class="questions">${card.q.map(x=>`<li>${x}</li>`).join("")}</ol><div class="result-closing"><span class="sprout">🌱</span>下一步，把看到這張牌後最先出現的感受寫下來。<br>不需要寫得完整，只需要對自己誠實。</div><div class="actions"><button class="primary" id="toJournal">前往潛意識日記</button><button class="secondary" id="finishDraw">稍後再寫</button></div>`);document.getElementById("toJournal").onclick=openJournal;document.getElementById("finishDraw").onclick=closeModal}
function promptText(){
  const d=getDraw();
  const card=d?d.card:null;
  const focus=localStorage.getItem("innerootJournalFocus")||"未選擇";
  const gentle=localStorage.getItem("innerootGentleNote")||"未填寫";

  return `你是 Inneroot 的 AI 內在探索陪伴者。

你的角色不是塔羅老師、命理師、心理治療師或人生導師。
你是一位溫柔、冷靜、尊重使用者自主性的同行者。
你的工作不是替我下結論，而是陪我看見自己可能忽略的感受、信念與重複模式。

請遵守以下原則：
- 不預測未來，不判斷吉凶。
- 不宣稱知道我真正的潛意識。
- 不下心理或醫療診斷。
- 只引用我實際寫過的內容，不要捏造細節。
- 推論時使用「可能」「也許」「其中一個值得探索的方向」等語氣。
- 不說教，不用空泛安慰。
- 以繁體中文回覆，語氣溫柔、自然、清晰。

【今天的資料】
今日牌：${card?card.zh+"（"+card.en+"）":"未抽牌"}
今日心情：${mood||"未選擇"}
最觸動我的問題：${focus}
今日日記：
${journal||"未填寫"}

我想送給自己的一句話：
${gentle}

【請依照以下結構回覆】

1. 🌿 謝謝你願意停下來
用一至兩句溫柔開場，但不要過度安慰。

2. 🌿 我留意到……
只反映我實際寫過的字詞、語氣、矛盾或重複內容。
如日記太短，請坦白說資料有限，不要硬作分析。

3. 🌳 一個值得探索的方向
提出一個「可能的內在信念或保護模式」，但不要把它說成事實。
再提出一至兩條具體問題，幫我自己探索。

4. 🃏 今日牌與我的連結
不要只講固定牌義。
把今日牌的象徵，連結到我今日的心情、問題和日記。

5. 🌱 今天的種子
根據我的情況，生成一句短而真實的新內在信念。
不要用誇張正能量，也不要否定我現有的感受。

6. 🍃 今天的小練習
提供一個三十秒至五分鐘內能完成的小行動。

7. 🌼 如果今天只帶走一句話
給我一句值得收藏、但不武斷的句子。

最後固定加上：
「這不是標準答案，只是陪伴你探索自己的一個角度。如果有共鳴，可以把它帶進今天；如果沒有，也可以放下，慢慢尋找屬於自己的答案。」`;
}

async function copyPrompt(){
  journal=localStorage.getItem("innerootJournal")||"";
  if(!journal.trim()){
    openModal(`<div class="explore-ready">
      <div class="explore-orb">✦</div>
      <p class="eyebrow">INNER EXPLORATION</p>
      <h2>先寫下你的感受</h2>
      <p>「深入探索」會結合你今天的牌卡、心情和潛意識日記，幫你整理值得留意的感受與內在模式。先留下幾句真實感受，探索內容會更貼近你。</p>
      <div class="explore-actions">
        <button class="primary" id="writeFirst">前往潛意識日記</button>
        <button class="secondary" id="closeExplore">稍後再做</button>
      </div>
    </div>`);
    document.getElementById("writeFirst").onclick=openJournal;
    document.getElementById("closeExplore").onclick=closeModal;
    return;
  }

  const text=promptText();

  try{
    await navigator.clipboard.writeText(text);

    openModal(`<div class="explore-ready">
      <div class="explore-orb">✦</div>
      <p class="eyebrow">INNER EXPLORATION</p>
      <h2>深入探索內容已準備好</h2>
      <p>「深入探索」會結合你今天抽到的牌卡、記錄的心情和潛意識日記，整理成一段清晰提示，方便貼到文字對話 AI，幫助你從不同角度理解自己的感受、想法和重複模式。這不是標準答案，而是一個陪你探索自己的角度。</p>
      <div class="explore-actions">
        <button class="primary" id="copyAgain">複製深入探索內容</button>
        <button class="secondary" id="closeExplore">稍後再去</button>
      </div>
      <p class="explore-note">你可以將內容貼到任何支援文字對話的 AI 平台，開始今天的深入探索。</p>
    </div>`);

    document.getElementById("closeExplore").onclick=closeModal;const copyAgain=document.getElementById("copyAgain");if(copyAgain)copyAgain.onclick=async()=>{try{await navigator.clipboard.writeText(text);showToast("深入探索內容已複製")}catch{showToast("請長按文字手動複製")}};
  }catch{
    openModal(`<div class="explore-ready">
      <p class="eyebrow">INNER EXPLORATION</p>
      <h2>長按以下內容複製</h2>
      <textarea class="explore-prompt" readonly>${escapeHTML(text)}</textarea>
      <div class="explore-actions">
        <button class="primary" id="copyAgain">複製深入探索內容</button>
        <button class="secondary" id="closeExplore">關閉</button>
      </div>
    </div>`);

    document.getElementById("closeExplore").onclick=closeModal;const copyAgain=document.getElementById("copyAgain");if(copyAgain)copyAgain.onclick=async()=>{try{await navigator.clipboard.writeText(text);showToast("深入探索內容已複製")}catch{showToast("請長按文字手動複製")}};
  }
}

function escapeHTML(value){return String(value||"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch]))}
function openJournal(){
  const draw=getDraw(),card=draw?draw.card:null;
  const questions=card?card.q:["今天最想留下的是哪一個感受？","有什麼事情值得你慢慢理解？","今天想對自己說什麼？"];
  const savedFocus=localStorage.getItem("innerootJournalFocus")||questions[0];
  const now=new Date();
  const dateText=`${now.getFullYear()} / ${String(now.getMonth()+1).padStart(2,"0")} / ${String(now.getDate()).padStart(2,"0")}`;
  const weekday=new Intl.DateTimeFormat("zh-HK",{weekday:"long"}).format(now);

  openModal(`<div class="journal-v4">
    <div class="journal-v4-glow glow-a" aria-hidden="true"></div>
    <div class="journal-v4-glow glow-b" aria-hidden="true"></div>
    <div class="journal-v4-daisies" aria-hidden="true"><span></span><span></span><span></span></div>

    <header class="journal-v4-head">
      <div class="journal-v4-tag">inneroot ✦ subconscious journal</div>
      <h2>潛意識日記</h2>
      <p>把今天的感受安放下來，讓內在聲音有地方停留。</p>
      <div class="journal-v4-date">
        <strong>${dateText}</strong>
        <span>${weekday}</span>
      </div>
    </header>

    <section class="journal-v4-cardpanel">
      <div class="journal-v4-cardintro">
        <small>今日牌卡</small>
        <strong>${card?card.zh:"今日覺察"}</strong>
        <span>${card?card.en:"Inneroot Journal"}</span>
      </div>
      ${card?`<img src="${card.file}" alt="${card.zh}" class="journal-v4-card">`:`<div class="journal-v4-card empty">✿</div>`}
      <p class="journal-v4-cardcopy">${card?"這張牌像一面柔和的鏡，陪你看看今天真正觸動你的，是什麼。":"今天可以不急著找答案，只需要誠實地記下感受。"}</p>
    </section>

    <section class="journal-v4-moodbox">
      <div class="journal-v4-sectiontitle">今天的心情</div>
      <div class="journal-v4-moods">
        ${["平靜","開心","一般","焦慮","難過"].map(x=>`<button type="button" class="${mood===x?"selected":""}" data-jm="${x}">${x}</button>`).join("")}
      </div>
      <label for="gentleNoteV4">給今天的自己一句溫柔的話</label>
      <input id="gentleNoteV4" type="text" value="${escapeHTML(localStorage.getItem("innerootGentleNote")||"")}" placeholder="例如：我可以慢慢來，唔需要急。">
    </section>

    <section class="journal-v4-prompts">
      <div class="journal-v4-sectiontitle">今天，哪一句最觸動你？</div>
      ${questions.map(q=>`<button type="button" class="journal-v4-prompt${savedFocus===q?" selected":""}" data-focus="${escapeHTML(q)}"><span class="dot"></span><span class="flower">✿</span><span class="text">${q}</span></button>`).join("")}
    </section>

    <section class="journal-v4-writing">
      <div class="journal-v4-writingtitle">今天，想把什麼記錄下來？</div>
      <div class="journal-v4-paper">
        <textarea id="j" placeholder="寫下今天的想法、情緒，或者那一句你很想誠實面對的心聲…">${escapeHTML(journal)}</textarea>
      </div>
    </section>

    <div class="journal-v4-savebar">
      <button class="journal-v4-save" id="save">收藏今天的覺察</button>
      <p>你的記錄只屬於你，慢慢寫，慢慢長成自己的力量。</p>
    </div>
  </div>`);

  document.querySelectorAll(".journal-v4-prompt").forEach(b=>b.onclick=()=>{
    document.querySelectorAll(".journal-v4-prompt").forEach(x=>x.classList.remove("selected"));
    b.classList.add("selected");
    touchDailyEntry();
    localStorage.setItem("innerootJournalFocus",b.dataset.focus);
  });

  document.querySelectorAll("[data-jm]").forEach(b=>b.onclick=()=>{
    mood=b.dataset.jm;
    touchDailyEntry();
    localStorage.setItem("innerootMood",mood);
    document.querySelectorAll("[data-jm]").forEach(x=>x.classList.toggle("selected",x===b));
  });

  document.getElementById("save").onclick=()=>{
    journal=document.getElementById("j").value;
    touchDailyEntry();
    localStorage.setItem("innerootJournal",journal);
    localStorage.setItem("innerootGentleNote",document.getElementById("gentleNoteV4").value);
    saveInsightEntry();
    openModal(`<div class="journal-v4-finish"><div class="journal-v4-bloom">✿</div><h2>今天的覺察已經收藏好了。</h2><p>下一步，可以讓「深入探索」結合今天的牌卡、心情和日記，陪你整理其中的連結與值得留意的方向。</p><div class="actions"><button class="primary" id="startExplore">開始深入探索</button><button class="secondary" id="finishLater">稍後再做</button></div></div>`);
    document.getElementById("startExplore").onclick=copyPrompt;
    document.getElementById("finishLater").onclick=closeModal;
  };
}
function openMood(){openModal(`<h2>今天的心情如何？</h2><div class="actions">${["平靜","開心","一般","焦慮","難過"].map(x=>`<button class="secondary" data-m="${x}">${x}</button>`).join("")}</div>`);document.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{mood=b.dataset.m;touchDailyEntry();
    localStorage.setItem("innerootMood",mood);closeModal();showToast("已記錄："+mood)})}
function info(title,text){openModal(`<h2>${title}</h2><p>${text}</p>`)}
function runAction(a){
  if(a==="home")scrollTo({top:0,behavior:"smooth"});
  if(a==="draw")beginDraw();
  if(a==="journal")openJournal();
  if(a==="mood")openMood();
  if(a==="prompt")copyPrompt();
  if(a==="insight")openInsight();
  if(a==="growth")info("成長圖譜","每一次記錄，都是一個新的根。");
  if(a==="garden")info("心靈花園","這裡將收藏你的內在種子與成長片段。");
  if(a==="settings")info("設定","設定功能將於下一階段開放。");
}

function showTapFeedback(e,label){
  const marker=document.createElement("span");
  marker.className="tap-marker";
  marker.style.left=e.clientX+"px";
  marker.style.top=e.clientY+"px";

  const text=document.createElement("span");
  text.className="tap-label";
  text.textContent=label||"已選擇";
  text.style.left=e.clientX+"px";
  text.style.top=Math.max(12,e.clientY-48)+"px";

  document.body.appendChild(marker);
  document.body.appendChild(text);

  setTimeout(()=>marker.remove(),700);
  setTimeout(()=>text.remove(),900);
}



function showDailyRolloverPrompt(){
  if(!pendingDailyRollover)return;
  const state=pendingDailyRollover;
  const isMigration=state.type==="migration";
  openModal(`<div class="explore-ready">
    <div class="explore-orb">🌿</div>
    <p class="eyebrow">A NEW DAY</p>
    <h2>新的一天開始了</h2>
    <p>${isMigration
      ?"我們偵測到目前仍有未分類的心情或日記內容。你可以先保存舊內容並開始今天，或者保留目前內容繼續書寫。"
      :"昨天的內容會先安全保存到「內在洞察」記錄，今天的心情與日記會重新開始。"}</p>
    <div class="explore-actions">
      <button class="primary" id="startNewDay">開始今天</button>
      ${isMigration?'<button class="secondary" id="keepCurrentDay">保留目前內容</button>':''}
    </div>
    <p class="explore-note">已保存的舊記錄不會被刪除。</p>
  </div>`);

  document.getElementById("startNewDay").onclick=()=>{
    let archiveDate=state.previousDate;
    if(!archiveDate){
      const d=new Date();
      d.setDate(d.getDate()-1);
      archiveDate=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
    }
    completeDailyRollover(archiveDate);
    pendingDailyRollover=null;
    closeModal();
    showToast("已開始今天的新記錄");
  };

  const keep=document.getElementById("keepCurrentDay");
  if(keep)keep.onclick=()=>{
    localStorage.setItem("innerootDailyEntryDate",today());
    localStorage.setItem("innerootDailyResetVersion","6.9.1");
    pendingDailyRollover=null;
    closeModal();
    showToast("已保留目前內容");
  };
}

function updateTimeGreeting(){
  const el=document.getElementById("timeGreeting");
  if(!el)return;
  const hour=new Date().getHours();
  const greeting=hour<12?"早上好":hour<18?"下午好":"晚上好";
  el.textContent=`${greeting}，歡迎回來`;
}
updateTimeGreeting();

document.querySelectorAll("[data-action]").forEach(b=>b.onclick=(e)=>{
  const a=b.dataset.action;

  if(b.classList.contains("hotspot")){
    showTapFeedback(e,b.getAttribute("aria-label"));
    setTimeout(()=>runAction(a),180);
  }else{
    runAction(a);
  }
});

document.getElementById("closeModal").onclick=closeModal;backdrop.onclick=e=>{if(e.target===backdrop)closeModal()};
if(pendingDailyRollover)setTimeout(showDailyRolloverPrompt,80);