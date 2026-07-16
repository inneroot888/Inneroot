const cards=[{"file": "00-fool.webp", "zh": "愚者", "en": "The Fool", "q": ["今天有什麼地方值得重新開始？", "你是否因為害怕犯錯而停下來？", "如果放低一次控制，你會想試什麼？"]}, {"file": "01-magician.webp", "zh": "魔術師", "en": "The Magician", "q": ["你手上已經擁有什麼資源？", "你最近忽略了哪一種能力？", "今天可以主動完成哪一件小事？"]}, {"file": "02-high-priestess.webp", "zh": "女祭司", "en": "The High Priestess", "q": ["你心裡其實早已知道什麼？", "最近有什麼感受未被說出口？", "今天可以如何安靜地聽自己？"]}, {"file": "03-empress.webp", "zh": "皇后", "en": "The Empress", "q": ["你現在最需要怎樣的照顧？", "你有沒有過度付出而忽略自己？", "今天可以為自己創造什麼舒服空間？"]}, {"file": "04-emperor.webp", "zh": "皇帝", "en": "The Emperor", "q": ["你現在最需要建立哪一條界線？", "哪件事需要更清晰的結構？", "今天可以做哪個穩定自己的決定？"]}, {"file": "05-hierophant.webp", "zh": "教皇", "en": "The Hierophant", "q": ["哪些信念是你真正認同的？", "哪些規則只是因為習慣而跟從？", "你今天想向誰或什麼學習？"]}, {"file": "06-lovers.webp", "zh": "戀人", "en": "The Lovers", "q": ["你正在面對哪一個重要選擇？", "你真正重視的是什麼？", "你的選擇有沒有忠於自己？"]}, {"file": "07-chariot.webp", "zh": "戰車", "en": "The Chariot", "q": ["你現在想把力量帶往哪裡？", "你內在有哪兩股力量正在拉扯？", "今天最值得專注的是什麼？"]}, {"file": "08-strength.webp", "zh": "力量", "en": "Strength", "q": ["你可以如何溫柔地面對困難？", "哪種情緒需要被安撫而非壓制？", "你其實比自己想像中堅持了多久？"]}, {"file": "09-hermit.webp", "zh": "隱者", "en": "The Hermit", "q": ["你需要暫時離開哪些雜音？", "最近有什麼問題需要獨自想清楚？", "今天可以留多少時間給自己？"]}, {"file": "10-wheel-of-fortune.webp", "zh": "命運之輪", "en": "Wheel of Fortune", "q": ["你正在經歷哪一種轉變？", "有哪些事情並不完全受你控制？", "你可以如何配合而非抗拒變化？"]}, {"file": "11-justice.webp", "zh": "正義", "en": "Justice", "q": ["你是否誠實面對自己的選擇？", "哪件事需要更平衡地看待？", "今天可以承擔哪一部分責任？"]}, {"file": "12-hanged-man.webp", "zh": "倒吊人", "en": "The Hanged Man", "q": ["你是否需要換一個角度？", "有哪些事情暫時不必急著推進？", "放下哪個執著會令你更自由？"]}, {"file": "13-death.webp", "zh": "死神", "en": "Death", "q": ["有什麼已經完成，但你仍未放手？", "哪個舊模式正在離開？", "你想為新階段騰出什麼空間？"]}, {"file": "14-temperance.webp", "zh": "節制", "en": "Temperance", "q": ["你的生活哪一部分需要調和？", "你最近是否走得太快或太慢？", "今天可以做什麼令自己回到平衡？"]}, {"file": "15-devil.webp", "zh": "惡魔", "en": "The Devil", "q": ["你最近被什麼慾望或恐懼牽制？", "哪個模式明知不舒服卻重複出現？", "你可以先鬆開哪一小部分？"]}, {"file": "16-tower.webp", "zh": "高塔", "en": "The Tower", "q": ["哪個真相正在打破舊有想法？", "你最害怕失去的是什麼？", "在混亂之中，有什麼變得更清楚？"]}, {"file": "17-star.webp", "zh": "星星", "en": "The Star", "q": ["今天什麼事情令你重新燃起希望？", "你有沒有忽略自己真正的需要？", "如果相信自己一次，你會做什麼？"]}, {"file": "18-moon.webp", "zh": "月亮", "en": "The Moon", "q": ["最近有什麼讓你感到不確定？", "你的恐懼之中有多少來自想像？", "你需要更多什麼資訊或安全感？"]}, {"file": "19-sun.webp", "zh": "太陽", "en": "The Sun", "q": ["今天有什麼值得你真心享受？", "你在哪裡可以更坦率地做自己？", "有什麼好事其實已經在發生？"]}, {"file": "20-judgement.webp", "zh": "審判", "en": "Judgement", "q": ["你正在回應哪一個內在呼喚？", "有哪些過去需要重新理解？", "你準備為自己作出什麼新決定？"]}, {"file": "21-world.webp", "zh": "世界", "en": "The World", "q": ["你最近完成了哪一個重要階段？", "你可以如何肯定自己的成長？", "下一段旅程想帶著什麼出發？"]}];
let mood=localStorage.getItem("innerootMood")||"",journal=localStorage.getItem("innerootJournal")||"";
const backdrop=document.getElementById("modalBackdrop"),content=document.getElementById("modalContent"),toast=document.getElementById("toast");
function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;}
function getDraw(){try{const x=JSON.parse(localStorage.getItem("innerootDailyDraw")||"null");return x&&x.date===today()?x:null}catch{return null}}
function openModal(h){content.innerHTML=h;backdrop.hidden=false}function closeModal(){backdrop.hidden=true}
function showToast(t){toast.textContent=t;toast.hidden=false;clearTimeout(showToast.x);showToast.x=setTimeout(()=>toast.hidden=true,1700)}
function beginDraw(){const old=getDraw();if(old)return showResult(old.card);openModal(`<p class="eyebrow">每日一張</p><h2>先停一停</h2><p>深呼吸一次。想一想，今天你最想了解的是什麼？</p><div class="card-stage"><div class="card-back">☾<span>INNEROOT</span></div></div><button class="primary" id="go">開始抽牌</button>`);document.getElementById("go").onclick=()=>{const card=cards[Math.floor(Math.random()*cards.length)];localStorage.setItem("innerootDailyDraw",JSON.stringify({date:today(),card}));showResult(card)}}
function showResult(card){openModal(`<span class="badge">${today()} · 今日牌卡</span><div class="card-stage"><img class="tarot-card" src="${card.file}" alt="${card.zh}"></div><h2>${card.zh}</h2><p><strong>${card.en}</strong></p><p class="result-copy">這張牌不是答案，而是一個邀請。</p><ol class="questions">${card.q.map(x=>`<li>${x}</li>`).join("")}</ol><div class="result-closing"><span class="sprout">🌱</span>今天的潛意識訊息已送達。<br>願你今天，多理解自己一點。</div><div class="actions"><button class="primary" id="copy">🌿 開始內在探索</button><button class="secondary" id="done">完成今天覺察</button></div>`);document.getElementById("copy").onclick=copyPrompt;document.getElementById("done").onclick=openJournal}
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
  const text=promptText();

  try{
    await navigator.clipboard.writeText(text);

    openModal(`<div class="explore-ready">
      <div class="explore-orb">✦</div>
      <p class="eyebrow">INNER EXPLORATION</p>
      <h2>探索內容已準備好</h2>
      <p>今日牌卡、心情、反思問題同日記已經整理完成。</p>
      <div class="explore-actions">
        <button class="primary" id="copyAgain">複製探索內容</button>
        <button class="secondary" id="closeExplore">稍後再去</button>
      </div>
      <p class="explore-note">你可以將內容貼到任何支援文字對話的 AI 平台，開始今天的內在探索。</p>
    </div>`);

    document.getElementById("closeExplore").onclick=closeModal;const copyAgain=document.getElementById("copyAgain");if(copyAgain)copyAgain.onclick=async()=>{try{await navigator.clipboard.writeText(text);showToast("探索內容已複製")}catch{showToast("請長按文字手動複製")}};
  }catch{
    openModal(`<div class="explore-ready">
      <p class="eyebrow">INNER EXPLORATION</p>
      <h2>長按以下內容複製</h2>
      <textarea class="explore-prompt" readonly>${escapeHTML(text)}</textarea>
      <div class="explore-actions">
        <button class="primary" id="copyAgain">複製探索內容</button>
        <button class="secondary" id="closeExplore">關閉</button>
      </div>
    </div>`);

    document.getElementById("closeExplore").onclick=closeModal;const copyAgain=document.getElementById("copyAgain");if(copyAgain)copyAgain.onclick=async()=>{try{await navigator.clipboard.writeText(text);showToast("探索內容已複製")}catch{showToast("請長按文字手動複製")}};
  }
}

function escapeHTML(value){return String(value||"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch]))}
function openJournal(){
  const draw=getDraw(),card=draw?draw.card:null;
  const questions=card?card.q:["今天最想留下的是哪一個感受？","有什麼事情值得你慢慢理解？","今天想對自己說什麼？"];
  const savedFocus=localStorage.getItem("innerootJournalFocus")||questions[0];
  const now=new Date();
  const dateText=`${now.getFullYear()} / ${String(now.getMonth()+1).padStart(2,"0")} / ${String(now.getDate()).padStart(2,"0")}`;
  const weekday=new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(now);

  openModal(`<div class="journal-v3">
    <div class="journal-v3-sparkles" aria-hidden="true"></div>

    <header class="journal-v3-header">
      <div class="journal-v3-brand">✦ inneroot ✦</div>
      <h2>潛意識日記</h2>
      <p>記錄今日的感受，讓覺察成為成長的養分</p>
    </header>

    <aside class="journal-v3-date">
      <strong>${dateText}</strong>
      <span>${weekday}</span>
      <small>✿ ${card?card.zh:"今日覺察"}</small>
    </aside>

    <div class="journal-v3-grid">
      <section class="journal-v3-left">
        <div class="journal-v3-cardbox">
          <div class="journal-v3-cardlabel">✦ 今日牌卡 ✦</div>
          ${card?`<img src="${card.file}" alt="${card.zh}" class="journal-v3-card">`:`<div class="journal-v3-card-empty">✿</div>`}
          <div class="journal-v3-cardname">
            <strong>${card?card.zh:"潛意識日記"}</strong>
            <span>${card?card.en:"Inneroot Journal"}</span>
          </div>
          <p>${card?"這張牌帶來今天的提醒，陪你看見正在發生的自己。":"慢慢寫下今天的感受，讓內在聲音有地方安放。"}</p>
        </div>

        <div class="journal-v3-mood">
          <div class="journal-v3-section-title">✦ 今天的心情 ✦</div>
          <div class="journal-v3-moodrow">
            ${["平靜","開心","一般","焦慮","難過"].map(x=>`<button type="button" class="${mood===x?"selected":""}" data-jm="${x}">${x}</button>`).join("")}
          </div>
          <label for="gentleNote">給今天的自己一句溫柔的話</label>
          <input id="gentleNote" type="text" value="${escapeHTML(localStorage.getItem("innerootGentleNote")||"")}" placeholder="妳已經很棒了…">
        </div>
      </section>

      <section class="journal-v3-main">
        <h3>今天，哪一句最觸動你？</h3>
        <div class="journal-v3-prompts">
          ${questions.map(q=>`<button type="button" class="journal-v3-prompt${savedFocus===q?" selected":""}" data-focus="${escapeHTML(q)}"><span class="journal-v3-radio"></span><span class="journal-v3-flower">✿</span><span>${q}</span><span class="journal-v3-leaf">❧</span></button>`).join("")}
        </div>

        <div class="journal-v3-writing-title">今天，想把什麼記錄下來？</div>
        <div class="journal-v3-paper">
          <div class="journal-v3-daisy daisy-a" aria-hidden="true"></div>
          <div class="journal-v3-daisy daisy-b" aria-hidden="true"></div>
          <textarea id="j" placeholder="寫下你的想法與感受…">${escapeHTML(journal)}</textarea>
        </div>

        <div class="journal-v3-savewrap">
          <button class="journal-v3-save" id="save"><span>✿</span>收藏今天的覺察</button>
          <p>🔒 你的記錄只屬於你，安心地寫下，慢慢地成長。</p>
        </div>
      </section>
    </div>
  </div>`);

  document.querySelectorAll(".journal-v3-prompt").forEach(b=>b.onclick=()=>{
    document.querySelectorAll(".journal-v3-prompt").forEach(x=>x.classList.remove("selected"));
    b.classList.add("selected");
    localStorage.setItem("innerootJournalFocus",b.dataset.focus);
  });

  document.querySelectorAll("[data-jm]").forEach(b=>b.onclick=()=>{
    mood=b.dataset.jm;
    localStorage.setItem("innerootMood",mood);
    document.querySelectorAll("[data-jm]").forEach(x=>x.classList.toggle("selected",x===b));
  });

  document.getElementById("save").onclick=()=>{
    journal=document.getElementById("j").value;
    localStorage.setItem("innerootJournal",journal);
    localStorage.setItem("innerootGentleNote",document.getElementById("gentleNote").value);
    openModal(`<div class="journal-v3-finish"><div class="journal-v3-bloom">✿</div><h2>今天，又開了一朵花。</h2><p>你的覺察已經好好收藏。<br>願它慢慢長成，屬於你的力量。</p><button class="primary" id="finish">完成</button></div>`);
    document.getElementById("finish").onclick=closeModal;
  };
}
function openMood(){openModal(`<h2>今天的心情如何？</h2><div class="actions">${["平靜","開心","一般","焦慮","難過"].map(x=>`<button class="secondary" data-m="${x}">${x}</button>`).join("")}</div>`);document.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{mood=b.dataset.m;localStorage.setItem("innerootMood",mood);closeModal();showToast("已記錄："+mood)})}
function info(title,text){openModal(`<h2>${title}</h2><p>${text}</p>`)}
document.querySelectorAll("[data-action]").forEach(b=>b.onclick=()=>{const a=b.dataset.action;if(a==="home")scrollTo({top:0,behavior:"smooth"});if(a==="draw")beginDraw();if(a==="journal")openJournal();if(a==="mood")openMood();if(a==="prompt")copyPrompt();if(a==="insight")info("洞察分析","完成更多心情、抽牌和日記後，這裡會整理你的重複模式。");if(a==="growth")info("成長圖譜","每一次記錄，都是一個新的根。");if(a==="garden")info("心靈花園","這裡將收藏你的內在種子與成長片段。");if(a==="settings")info("設定","設定功能將於下一階段開放。")})
document.getElementById("closeModal").onclick=closeModal;backdrop.onclick=e=>{if(e.target===backdrop)closeModal()};