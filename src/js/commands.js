const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
const t = document.querySelector("#cmdTitle");

// Config*
const version = `0.3.30`;
const config = {
  "yusufweebs": {
    "website": {
      "title": `Yusuffff`,
      "repo": `#`,
      "author": `Yusuf Pemula`,
    },
    "welcome": {
      "image": `<pre>
      
██╗░░░██╗██╗░░░██╗░██████╗██╗░░░██╗███████╗  ██╗░░██╗░█████╗░███╗░░░███╗███████╗██████╗░░█████╗░░██████╗░███████╗
╚██╗░██╔╝██║░░░██║██╔════╝██║░░░██║██╔════╝  ██║░░██║██╔══██╗████╗░████║██╔════╝██╔══██╗██╔══██╗██╔════╝░██╔════╝
░╚████╔╝░██║░░░██║╚█████╗░██║░░░██║█████╗░░  ███████║██║░░██║██╔████╔██║█████╗░░██████╔╝███████║██║░░██╗░█████╗░░
░░╚██╔╝░░██║░░░██║░╚═══██╗██║░░░██║██╔══╝░░  ██╔══██║██║░░██║██║╚██╔╝██║██╔══╝░░██╔═══╝░██╔══██║██║░░╚██╗██╔══╝░░
░░░██║░░░╚██████╔╝██████╔╝╚██████╔╝██║░░░░░  ██║░░██║╚█████╔╝██║░╚═╝░██║███████╗██║░░░░░██║░░██║╚██████╔╝███████╗
░░░╚═╝░░░░╚═════╝░╚═════╝░░╚═════╝░╚═╝░░░░░  ╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚═╝╚══════╝╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░╚══════╝
      </pre>`,
      "first": `<i class="fa-duotone fa-mace"></i> Update dari yusufweebs [versi ${version}] <br> <i class="fa-duotone fa-copyright"></i> Semua milik tuhan.`,
      "second": `<i class="fa-solid fa-hand-wave"></i> Adiooss,, selamat datang pria / wanita?`,
      "commands": `<i class="fa-sharp fa-solid fa-user-robot"></i> Gak nampil apa<sup>2</sup> ya?. Ketik "<span class="sucess">help</span>" untuk melihat list perintah.`
    },
    "commands": {
      "help": {
        "usage": `help`,
        "description": `Untuk melihat list perintah yang kompatibel`,
        "contents": {
          "helpText": `<span class="yellowText"><i class="fa-duotone fa-handshake-angle"></i> The commands you can use are listed below. yusufweebs wishes you a good time.</span> <br><br>`
        }
      },
      "clear": {
        "usage": `clear`,
        "description": `Bersih sampai akar h3h3h3`,
      },
      "about": {
        "usage": `about`,
        "description": `Mau lihat bio saya? Siapa tau jodoh :*`,
        "contents": {
          "aboutText": `<span class="yellowText"><i class="fa-duotone fa-hand-wave"></i></span> Halo, Konichiwa, Sampurasun, Punten.. Saya adalah seorang Yusuf yang memiliki sedikit pengetahuan dalam bidang IT seperti (Web Development). Kemudian saya juga ramah dan ramah senyum seperti joker. Diam menjadi beban, bergerak Task selesai semua :|`,
        },
      },
      "social": {
        "usage": `social`,
        "description": `My social accounts.`,
        "contents": {
          "socialInfo": `<span class="yellowText"><br><i class="fa-duotone fa-triangle-exclamation"></i> You can use: "<span class="sucess">social --instagram or you can use: linkedin, github, gitlab)</span>". </span>`,
          "windowOpenReply": `<i class="fa-solid fa-square-check icone"></i>Window is opened.`,
          "socialText": `<i class="fa-duotone fa-thumbs-up"></i> Oke mari dipilih sosmed saya :)`,
          "instagram": `<a href='https://instagram.com/yusufstarfall66' target='_blank'>Instagram</a> &nbsp;`,
          "instagramURL": `https://instagram.com/yusufstarfall66`,
          "linkedin": `<a href='https://linkedin.com/m.' target='_blank'>Linkedin</a> &nbsp;`,
          "linkedinURL": `https://linkedin.com/m.`,
          "github": `<a href='https://github.com/yusufweebs' target='_blank'>GitHub</a> &nbsp;`,
          "githubURL": `https://github.com/yusufweebs`,
          "gitlab": `<a href='https://gitlab.com/yusufweebs' target='_blank'>Gitlab</a> &nbsp;`,
          "gitlabURL": `https://gitlab.com/yusufweebs`,
        },
      },
      "info": {
        "usage": `info`,
        "description": `Tenang ini bukan doxxing, cuma kamu & tuhan yang tau`,
        "contents": {
          "infoText": `<i class="fa-duotone fa-circle-info"></i> Information received about guest and website`,
          "infoWarn": `<br><span class="yellowText"><i class="fa-duotone fa-triangle-exclamation"></i> This information is strictly not recorded</span>`,
        },
      },
      "exit": {
        "usage": `exit`,
        "description": `Tutup website`,
        "reply": `<i class="fa-solid fa-square-check icone"></i>Terminal is closed. Gak ngaruh lah :v`,
      },
      "joke": {
        "usage": `joke`,
        "description": `Jangan dibuka, cuma joke bapak bapak :v`,
      },
      "reload": {
        "usage": `reload`,
        "description": `Refresh biar gak ngantuk.`,
      },
      "history": {
        "usage": `history`,
        "description": `Mau liat perintah apa yang kamu ketik sebelumnya?`,
        "reply": `<i class="fa-duotone fa-clock-rotate-left"></i> Previously used commands are`,
        "noFoundReply": `<i class="fa-solid fa-square-xmark error"></i> No history found!`,
        "infoReply": `<br><span class="yellowText"><i class="fa-duotone fa-triangle-exclamation"></i> You can see up to 10 command history and if a particular command has an <i class="fa-solid fa-square-xmark error"></i> ​​next to it, there is no such command.</span>`,
        "clearHistory": {
          "usage": `clear --history`,
          "description": `Hapus semua riwayat.`,
          "reply": `<i class="fa-solid fa-square-check sucess"></i> Clearing your history.`,
        },
      },
      "ls": {
        "usage": `ls`,
        "description": `Mau liat struktur code?`,
        "lsText": `<i class="fa-duotone fa-files"></i> Nih, bon apetitoo...`,
        "files": ` <br><br>
          src/assets/websiteIcon.png <br>
          src/assets/screenshot.png <br>
          <span class="greenText">src/css/style.css</span> <br>
          <span class="yellowText">src/js/commands.js</span> <br>
          <span class="yellowText">src/js/404.js</span> <br>
          <span class="redText">404.html</span> <br>
          <span class="redText">index.html</span> <br>
          <span class="blueText">README.md</span> <br>
          <span class="yellowText">server.js</span> <br>
          vercel.json <br>`,
      },
      "blank": `<i class="fa-solid fa-square-xmark error"></i> Tulis sesuatu untuk melihat jumpscare`,
      "commandNotFound": `Yahh,,, perintah nya gak valid. Ketik "<span class="sucess">help</span>".`,
    },
    "path": {
      "who": `#user`,
      "preposition": ` in`,
      "file": ` ~/users/@yusufweebs`,
    },
    "delays": {
      "system": {
        "getInput": 150,
        "removeInput": 150,
      },
      "welcome": {
        "first": 700,
        "second": 1500,
      },
    },
    "system": {
      "mods": {
        "maintenance": false,
        "maintenanceReply": `<span class="yellowText"><i class="fa-duotone fa-triangle-exclamation"></i> The website is under maintenance due to some bugs or update.</span>`,
      },
    },
  },
}

// Some Document Settings
document.title = config.yusufweebs.website.title;

// Terminal Functions
function newLine() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = config.yusufweebs.path.who;
  span1.textContent = config.yusufweebs.path.preposition;
  span2.textContent = config.yusufweebs.path.file;
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code}: <span class='text'> ${text} </span>`;
  app.appendChild(p);
}

async function openTerminal() {
  console.log(`%c Welcome to the console. You can review information about the commands you are using below.`, `color: #F5544D`);
  createText(config.yusufweebs.welcome.image)
  createText(config.yusufweebs.welcome.first);
  await delay(config.yusufweebs.delays.welcome.first);
  createText(config.yusufweebs.welcome.second);
  await delay(config.yusufweebs.delays.welcome.second);
  createText(config.yusufweebs.welcome.commands);
  newLine();
}

// Guest Events
app.addEventListener("keypress", async function (event) {
  document.title = `typing...`;
  if (event.key === "Enter") {
    await delay(config.yusufweebs.delays.system.getInput);
    getInputValue();
    removeInput();
    await delay(config.yusufweebs.delays.system.removeInput);
    newLine();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

// Data For The Info Command
// Browser
const browser = (function () {
  const test = function (regexp) {
    return regexp.test(window.navigator.userAgent);
  }
  switch (true) {
    case test(/edg/i): return `<i class="fa-brands fa-edge"></i> Edge`;
    case test(/opr/i) || test(/opera/i): return `<i class="fa-brands fa-opera"></i> Opera`;
    case test(/chrome/i) && !!window.chrome: return `<i class="fa-brands fa-chrome"></i> Chrome`;
    case test(/MSIE/i): return `<i class="fa-brands fa-internet-explorer"></i> Internet Explorer 10-`;
    case test(/trident/i): return `<i class="fa-brands fa-internet-explorer"></i> Internet Explorer 11`;
    case test(/firefox/i): return `<i class="fa-brands fa-firefox-browser"></i> Firefox`;
    case test(/safari/i): return `<i class="fa-brands fa-safari"></i> Safari`;
    default: return `<i class="fa-regular fa-globe"></i> Other`;
  }
})();

// Language
var userLang = navigator.language || navigator.userLanguage;

// OS
function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = '<i class="fa-brands fa-apple"></i> Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = '<i class="fa-brands fa-apple"></i> iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = '<i class="fa-brands fa-windows"></i> Windows';
  } else if (/Android/.test(userAgent)) {
    os = '<i class="fa-brands fa-android"></i> Android';
  } else if (/Linux/.test(platform)) {
    os = '<i class="fa-brands fa-linux"></i> Linux';
  }

  return os;
}

// Date
const date = Date();

// Website Path
let path = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;

// Window Resolution 
var width = screen.width;
var height = screen.height;
const resolution = `Width: ${width}px, Height: ${height}px`

// Infos
// Guest
const browserText = `<br><br> <span class="redText">Guest Browser:</span> ${browser}`;
const langText = `<br> <span class="redText">Guest Language:</span> ${userLang}`;
const osText = `<br> <span class="redText">Guest OS:</span> ${getOS()}`;
const dateText = `<br> <span class="redText">Date & Time:</span> ${date}`;

// Website
const pathText = `<br><br> <span class="yellowText">Website Path:</span> <a href="${path}">${path}</a>`;
const resolutionText = `<br> <span class="yellowText">Website Resolution:</span> ${resolution}`;
const versionText = `<br> <span class="yellowText">Website Version:</span> ${version}`;
const documentTitleText = `<br> <span class="yellowText">Website Title:</span> ${config.yusufweebs.website.title}`;
const authorText = `<br> <span class="yellowText">Website Author:</span> ${config.yusufweebs.website.author}`;
const websiteRepoText = `<br> <span class="yellowText">Website Repo:</span> <a href="${config.yusufweebs.website.repo}">${config.yusufweebs.website.repo}</a>`;

// Joke Command
var jokes = [
  'Tebakan berapa orang programmer yang dibutuhkan untuk mengganti bola lampu? Nol, itu masalah perangkat keras.',
  'Hanya ada 10 jenis orang di dunia ini: yang tahu biner dan yang tidak.',
  'Programmer sejati mulai menghitung dari 0.',
  'Mengapa programmer berhenti dari pekerjaannya? Karena dia tidak mendapatkan array.',
  'Seorang "foo" masuk ke sebuah bar, melihat sekeliling, dan berkata, "Halo Dunia."',
  '0 adalah salah, 1 adalah benar, bukan? 1.',
  'Tidak selalu segalanya hitam-putih (#000000 dan #FFFFFF).',
  'Bahasa yang paling sering digunakan dalam pemrograman? Bahasa kasar.',
  '!Salah, lucu karena benar.',
  'Kamu punya saya saat mengatakan "Halo Dunia."',
  '2b||!2b.',
  'Kemarin saya mengubah nama wifi saya menjadi "Hack kalau bisa." Hari ini saya menemukannya berganti nama menjadi "Tantangan Diterima."',
  'Seorang programmer adalah seseorang yang memperbaiki masalah yang tidak Anda ketahui dengan cara yang tidak Anda mengerti.',
  'Bagaimana cara tahu jika seorang pecinta komputer adalah seorang ekstrovert? Mereka menatap sepatu Anda saat berbicara bukan sepatu mereka sendiri.',
  'Saya ingin mengubah dunia, tetapi mereka tidak memberi saya kode sumber.',
  'Jika pada awalnya Anda gagal, sebutlah itu versi 1.0.',
  'Komputer membuat kesalahan dengan sangat cepat dan sangat akurat.',
  'Saya kentut di toko Apple dan semua orang marah padaku. Bukan salahku mereka tidak memiliki Windows.',
  'Tok Tok... Siapa? Seni... Seni Siapa? R2D2.',
  'Hal yang lucu dan benar-benar nyata: jika pizza memiliki radius (z) dan kedalaman (a), volume pizza tersebut bisa didefinisikan sebagai Pi*z*z*a.'
];

function generateJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  return randomJoke;
}

// Console Log sucess
function consoleSucess(value) {
  console.log(`%c Sucess: ${value} - Date & Time: ${Date()}`, `color: #5AD786`);
}

function consoleError(value) {
  console.log(`%c Error: ${value} - Date & Time: ${Date()}`, `color: #F78F85`);
}

function consoleWarn(value) {
  console.log(`%c Warn: ${value} - Date & Time: ${Date()}`, `color: #FABD2F`);
}

// History
function saveHistory(value) {
  let record = JSON.parse(localStorage.getItem("history")) || [];
  if (record.length > 9) {
    record.shift();
    record.push(value);
  } else {
    record.push(value);
  }
  localStorage.setItem("history", JSON.stringify(record));
}

async function commandHistory() {
  let record = JSON.parse(localStorage.getItem("history")) || [];
  if (record.length === 0) {
    await createText(config.yusufweebs.commands.history.noFoundReply);
  } else {
    await createCode(config.yusufweebs.commands.history.reply, "");
    for (let i = 0; i < record.length; ++i) {
      await createText(`<span class="redText">${(i + 1).toString()}</span>` + `<span class="redText">.</span> ` + record[i]);
    }
    await createText(config.yusufweebs.commands.history.infoReply)
  }
}
// Clear History
async function clearHistory() {
  let record = JSON.parse(localStorage.getItem("history")) || [];
  await createText(config.yusufweebs.commands.history.clearHistory.reply);
  record = [];
  localStorage.setItem("history", JSON.stringify(record));
}

// Commands
async function getInputValue() {
  const value = document.querySelector("input").value;
  // Maintenance Mod
  if (config.yusufweebs.system.mods.maintenance === true) {
    falseValue(value);
    document.title = `${config.yusufweebs.path.file}/$?`;
    createText(config.yusufweebs.system.mods.maintenanceReply);
  }
  // Help Command
  if (value === config.yusufweebs.commands.help.usage) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.help.usage}`;
    createText(config.yusufweebs.commands.help.contents.helpText);
    createCode(`<span class="redText">-</span> ` + config.yusufweebs.commands.help.usage, config.yusufweebs.commands.help.description);
    createCode(`<span class="redText">-</span> ` + config.yusufweebs.commands.clear.usage, config.yusufweebs.commands.clear.description);
    createCode(`<span class="redText">-</span> ` + config.yusufweebs.commands.about.usage, config.yusufweebs.commands.about.description);
    createCode(`<span class="redText">-</span> ` + config.yusufweebs.commands.social.usage, config.yusufweebs.commands.social.description);
    createCode(`<span class="redText">-</span> ` + config.yusufweebs.commands.info.usage, config.yusufweebs.commands.info.description);
    createCode(`<span class="redText">-</span> ` + config.yusufweebs.commands.exit.usage, config.yusufweebs.commands.exit.description);
    createCode(`<span class="redText">-</span> ` + config.yusufweebs.commands.joke.usage, config.yusufweebs.commands.joke.description);
    createCode(`<span class="redText">-</span> ` + config.yusufweebs.commands.reload.usage, config.yusufweebs.commands.reload.description);
    createCode(`<span class="redText">-</span> ` + config.yusufweebs.commands.history.usage, config.yusufweebs.commands.history.description);
    createCode(`<span class="redText">-</span> ` + config.yusufweebs.commands.history.clearHistory.usage, config.yusufweebs.commands.history.clearHistory.description);
    createCode(`<span class="redText">-</span> ` + config.yusufweebs.commands.ls.usage, config.yusufweebs.commands.ls.description);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  // About Command
  else if (value === config.yusufweebs.commands.about.usage) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.about.usage}`;
    createText(config.yusufweebs.commands.about.contents.aboutText);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  // Social Command
  else if (value === config.yusufweebs.commands.social.usage) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.social.usage}`;
    createCode(config.yusufweebs.commands.social.contents.socialText, `<br><br>` + config.yusufweebs.commands.social.contents.linkedin + config.yusufweebs.commands.social.contents.instagram + config.yusufweebs.commands.social.contents.gitlab + config.yusufweebs.commands.social.contents.github);
    createText(config.yusufweebs.commands.social.contents.socialInfo);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  // Open Socials
  else if (value === `${config.yusufweebs.commands.social.usage} --instagram`) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.social.usage}`;
    createText(config.yusufweebs.commands.social.contents.windowOpenReply);
    window.open(`${config.yusufweebs.commands.social.contents.instagramURL}`, '_blank');
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  else if (value === `${config.yusufweebs.commands.social.usage} --github`) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.social.usage}`;
    createText(config.yusufweebs.commands.social.contents.windowOpenReply);
    window.open(`${config.yusufweebs.commands.social.contents.githubURL}`, '_blank');
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  else if (value === `${config.yusufweebs.commands.social.usage} --gitlab`) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.social.usage}`;
    createText(config.yusufweebs.commands.social.contents.windowOpenReply);
    window.open(`${config.yusufweebs.commands.social.contents.gitlabURL}`, '_blank');
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  else if (value === `${config.yusufweebs.commands.social.usage} --linkedin`) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.social.usage}`;
    createText(config.yusufweebs.commands.social.contents.windowOpenReply);
    window.open(`${config.yusufweebs.commands.social.contents.linkedinURL}`, '_blank');
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  // Clear Command
  else if (value === config.yusufweebs.commands.clear.usage) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.clear.usage}`;
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  // Info Command
  else if (value === config.yusufweebs.commands.info.usage) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.info.usage}`;
    createCode(config.yusufweebs.commands.info.contents.infoText, `${config.yusufweebs.commands.info.contents.infoWarn}${browserText}${langText}${osText}${dateText} ${pathText}${resolutionText}${versionText}${documentTitleText}${authorText}${websiteRepoText}`);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  // Exit Command
  else if (value === config.yusufweebs.commands.exit.usage) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.exit.usage}`;
    window.close();
    createText(config.yusufweebs.commands.exit.reply);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  // Make a Joke
  else if (value === config.yusufweebs.commands.joke.usage) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.joke.usage}`;
    createText(generateJoke());
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  // Reload 
  else if (value === config.yusufweebs.commands.reload.usage) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.reload.usage}`;
    location.reload();
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  // History
  else if (value === config.yusufweebs.commands.history.usage) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.history.usage}`;
    commandHistory();
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  // Clear History
  else if (value === config.yusufweebs.commands.history.clearHistory.usage) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.history.clearHistory.usage}`;
    clearHistory();
  }
  // LS
  else if (value === config.yusufweebs.commands.ls.usage) {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.yusufweebs.path.file}/${config.yusufweebs.commands.ls.usage}`;
    createCode(config.yusufweebs.commands.ls.lsText, config.yusufweebs.commands.ls.files);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  // Blank
  else if (value === "") {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    falseValue(value);
    consoleError(value);
    document.title = `${config.yusufweebs.path.file}/$?`;
    createText(config.yusufweebs.commands.blank);
  }
  // Command Not Found
  else {
    if (config.yusufweebs.system.mods.maintenance === true) {
      return;
    }
    falseValue(value);
    consoleError(value);
    document.title = `${config.yusufweebs.path.file}/$?`;
    createText(`<i class="fa-solid fa-square-xmark error"></i> "<span class="error">${value}</span>" ${config.yusufweebs.commands.commandNotFound}`);
    saveHistory(document.querySelector("input").value + `&nbsp; <i class="fa-solid fa-square-xmark error"></i>`.trim().toLowerCase());
  }
}

openTerminal();
