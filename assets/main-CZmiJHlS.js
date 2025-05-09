(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const I=[{key:"world",label:"Todo el mundo",icon:"/globo-quiz/world.svg"},{key:"africa",label:"África",icon:"/globo-quiz/Africa.svg"},{key:"america",label:"América",icon:"/globo-quiz/South_america.svg"},{key:"asia",label:"Asia",icon:"/globo-quiz/Asia.svg"},{key:"europe",label:"Europa",icon:"/globo-quiz/Europe.svg"},{key:"oceania",label:"Oceanía",icon:"/globo-quiz/Oceania.svg"}];function N(){let a=[];function n(e){return a.includes(e)}function t(){const e=document.getElementById("continue-btn");a.length===0?(e.classList.add("bg-gray-200","text-gray-400","cursor-not-allowed"),e.classList.remove("bg-[#18b6fa]","text-white","shadow-md"),e.disabled=!0):(e.classList.remove("bg-gray-200","text-gray-400","cursor-not-allowed"),e.classList.add("bg-[#18b6fa]","text-white","shadow-md"),e.disabled=!1)}function s(){document.querySelector("#app").innerHTML=`
      <div class="h-screen bg-white flex flex-col items-center px-4 py-2">
        <div class="w-full max-w-[400px] flex flex-col h-full">
          <div class="flex items-center">
            <button id="back-btn" class="p-2 -ml-2">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#A3A3A3" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
          </div>
          <h2 class="text-center text-[clamp(1.25rem,5vw,1.75rem)] font-bold text-gray-700 mb-3 leading-tight">Selecciona con qué continentes quieres jugar</h2>
          <div class="flex-1 flex flex-col justify-center">
            <div class="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              ${I.map((e,o)=>`
                <div class="flex items-center px-4 py-3 ${o!==0?"border-t border-gray-200":""} ${n(e.key)?"bg-blue-100 border-l-4 border-[#18b6fa]":""} cursor-pointer continent-row" data-key="${e.key}">
                  <img src="${e.icon}" alt="${e.label}" class="w-7 h-7 mr-3" />
                  <span class="text-base font-semibold text-gray-700">${e.label}</span>
                </div>
              `).join("")}
            </div>
          </div>
          <button id="continue-btn" class="w-full py-3 rounded-2xl text-lg font-bold tracking-wide transition-colors duration-200 mt-2">CONTINUAR</button>
        </div>
      </div>
    `,t(),document.getElementById("back-btn").onclick=()=>{window.renderHomePage()},document.querySelectorAll(".continent-row").forEach(e=>{e.onclick=()=>{const o=e.getAttribute("data-key");o==="world"?n("world")?a=[]:a=["world"]:(n("world")&&(a=[]),n(o)?a=a.filter(c=>c!==o):a.push(o)),s()}}),document.getElementById("continue-btn").onclick=()=>{window.selectedMode==="capitals"?typeof window.renderCapitalsMode=="function"?window.renderCapitalsMode([...a]):alert("Capitals mode not implemented yet."):window.selectedMode==="flags"&&(typeof window.renderFlagsMode=="function"?window.renderFlagsMode([...a]):alert("Flags mode not implemented yet."))}}s()}async function R(){return(await(await fetch("https://restcountries.com/v3.1/all")).json()).filter(t=>t.capital&&t.capital.length>0&&t.region&&t.name&&t.name.common).map(t=>{var s,e;return{country:((e=(s=t.translations)==null?void 0:s.spa)==null?void 0:e.common)||t.name.common,capital:t.capital[0],continent:t.region.toLowerCase()}})}function S(a){for(let n=a.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[a[n],a[t]]=[a[t],a[n]]}return a}const j={Kabul:"Kabul",Tirana:"Tirana",Algiers:"Argel","Andorra la Vella":"Andorra la Vieja",Luanda:"Luanda","Buenos Aires":"Buenos Aires",Yerevan:"Ereván",Canberra:"Canberra",Vienna:"Viena",Baku:"Bakú",Nassau:"Nasáu",Manama:"Manama",Dhaka:"Daca",Bridgetown:"Bridgetown",Minsk:"Minsk",Brussels:"Bruselas",Belmopan:"Belmopán","Porto-Novo":"Porto Novo",Thimphu:"Timbu","La Paz":"La Paz",Sarajevo:"Sarajevo",Gaborone:"Gaborone",Brasília:"Brasilia",Sofia:"Sofía",Ouagadougou:"Uagadugú",Gitega:"Gitega","Phnom Penh":"Nom Pen",Yaoundé:"Yaundé",Ottawa:"Ottawa",Praia:"Praia",Bangui:"Bangui","NDjamena":"Yamena",Santiago:"Santiago",Beijing:"Pekín",Bogotá:"Bogotá",Moroni:"Moroni",Kinshasa:"Kinshasa",Brazzaville:"Brazzaville","San José":"San José",Yamoussoukro:"Yamusukro",Zagreb:"Zagreb",Havana:"La Habana",Nicosia:"Nicosia",Prague:"Praga",Copenhagen:"Copenhague",Djibouti:"Yibuti",Roseau:"Roseau","Santo Domingo":"Santo Domingo",Quito:"Quito",Cairo:"El Cairo","San Salvador":"San Salvador",Malabo:"Malabo",Asmara:"Asmara",Tallinn:"Tallin",Mbabane:"Mbabane","Addis Ababa":"Adís Abeba",Suva:"Suva",Helsinki:"Helsinki",Paris:"París",Libreville:"Libreville",Banjul:"Banjul",Tbilisi:"Tiflis",Berlin:"Berlín",Accra:"Acra",Athens:"Atenas","Saint George's":"Saint George","Guatemala City":"Ciudad de Guatemala",Conakry:"Conakri",Bissau:"Bisáu",Georgetown:"Georgetown","Port-au-Prince":"Puerto Príncipe",Tegucigalpa:"Tegucigalpa",Budapest:"Budapest",Reykjavik:"Reikiavik","New Delhi":"Nueva Delhi",Jakarta:"Yakarta",Tehran:"Teherán",Baghdad:"Bagdad",Dublin:"Dublín",Jerusalem:"Jerusalén",Rome:"Roma",Kingston:"Kingston",Tokyo:"Tokio",Amman:"Amán",Astana:"Nursultán",Nairobi:"Nairobi",Tarawa:"Tarawa",Pyongyang:"Pionyang",Seoul:"Seúl",Pristina:"Pristina","Kuwait City":"Kuwait",Bishkek:"Biskek",Vientiane:"Vientián",Riga:"Riga",Beirut:"Beirut",Maseru:"Maseru",Monrovia:"Monrovia",Tripoli:"Trípoli",Vaduz:"Vaduz",Vilnius:"Vilna",Luxembourg:"Luxemburgo",Antananarivo:"Antananarivo",Lilongwe:"Lilongüe","Kuala Lumpur":"Kuala Lumpur",Male:"Malé",Bamako:"Bamako",Valletta:"La Valeta",Majuro:"Majuro",Nouakchott:"Nuakchot","Port Louis":"Port Louis","Mexico City":"Ciudad de México",Chisinau:"Chisináu",Monaco:"Mónaco",Ulaanbaatar:"Ulán Bator",Podgorica:"Podgorica",Rabat:"Rabat",Maputo:"Maputo",Naypyidaw:"Naypyidó",Windhoek:"Windhoek",Yaren:"Yaren",Kathmandu:"Katmandú",Amsterdam:"Ámsterdam",Wellington:"Wellington",Managua:"Managua",Niamey:"Niamey",Abuja:"Abuya",Skopje:"Skopie",Oslo:"Oslo",Muscat:"Mascate",Islamabad:"Islamabad",Ngerulmud:"Ngerulmud",Jerusalem:"Jerusalén","Panama City":"Ciudad de Panamá","Port Moresby":"Puerto Moresby",Asunción:"Asunción",Lima:"Lima",Manila:"Manila",Warsaw:"Varsovia",Lisbon:"Lisboa",Doha:"Doha",Bucharest:"Bucarest",Moscow:"Moscú",Kigali:"Kigali",Basseterre:"Basseterre",Castries:"Castries",Kingstown:"Kingstown",Apia:"Apia","San Marino":"San Marino",Riyadh:"Riad",Dakar:"Dakar",Belgrade:"Belgrado",Victoria:"Victoria",Freetown:"Freetown",Singapore:"Singapur",Bratislava:"Bratislava",Ljubljana:"Liubliana",Honiara:"Honiara",Mogadishu:"Mogadiscio",Pretoria:"Pretoria",Juba:"Yuba",Madrid:"Madrid",Colombo:"Colombo",Khartoum:"Jartum",Paramaribo:"Paramaribo",Stockholm:"Estocolmo",Bern:"Berna",Damascus:"Damasco",Taipei:"Taipéi",Dushanbe:"Dusambé",Dodoma:"Dodoma",Bangkok:"Bangkok",Lomé:"Lomé",Nukuʻalofa:"Nukualofa","Port of Spain":"Puerto España",Tunis:"Túnez",Ankara:"Ankara",Ashgabat:"Asjabad",Funafuti:"Funafuti",Kampala:"Kampala",Kyiv:"Kiev","Abu Dhabi":"Abu Dabi",London:"Londres","Washington, D.C.":"Washington D. C.",Montevideo:"Montevideo",Tashkent:"Taskent","Port Vila":"Port Vila","Vatican City":"Ciudad del Vaticano",Caracas:"Caracas",Hanoi:"Hanói","Sana'a":"Saná",Lusaka:"Lusaka",Harare:"Harare"};async function E(a){document.querySelector("#app").innerHTML="<div class='min-h-screen flex flex-col items-center justify-center bg-white'><span class='text-lg'>Cargando preguntas...</span></div>";let n=await R();const t={world:null,africa:"africa",america:"americas",asia:"asia",europe:"europe",oceania:"oceania"};let s=n;if(a.includes("world")||(s=n.filter(l=>a.some(i=>t[i]===l.continent))),s.length<10){document.querySelector("#app").innerHTML=`
      <div class='min-h-screen flex flex-col items-center justify-center bg-white'>
        <h2 class='text-2xl font-bold mb-4 text-center'>No hay suficientes países en los continentes seleccionados para un juego de 10 preguntas.</h2>
        <button class='btn btn-primary' onclick='window.renderHomePage()'>Volver al inicio</button>
      </div>
    `;return}let e=[],o=10,c=0,u=null,d=!1,g=!1,p=null,M=0;function $(){const l=s.filter(f=>!e.includes(f.country));if(l.length===0)return null;const i=S([...l])[0];e.push(i.country);const h=S(s.filter(f=>f.country!==i.country)).slice(0,3).map(f=>j[f.capital]||f.capital),r=S([j[i.capital]||i.capital,...h]);return{country:i.country,options:r,answer:j[i.capital]||i.capital}}function B(){window.renderHomePage()}function C(){var h;if(c>=o){k(M,o);return}p||(p=$());const l=p,i=(c+1)/o*100;document.querySelector("#app").innerHTML=`
      <div class="h-screen bg-white flex flex-col items-center px-2 py-2 justify-between">
        <div class="w-full max-w-[400px] flex flex-col h-full justify-between">
          <div>
            <div class="flex items-center mb-1">
              <button id="back-btn" class="p-2 -ml-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#A3A3A3" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
              </button>
              <div class="flex-1 mx-2">
                <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-2 bg-yellow-400 rounded-full transition-all duration-300" style="width: ${i}%;"></div>
                </div>
              </div>
              <span class="text-gray-700 font-semibold text-base ml-2" style="min-width: 36px;">${c+1}/${o}</span>
            </div>
            <div class="mt-3 mb-1 text-center text-base font-semibold text-gray-800">¿Cuál es la capital de este país?</div>
            <div class="text-center text-2xl font-extrabold text-gray-900 mb-4 mt-2 pb-4 pt-4" style="letter-spacing: -1px;">${l.country}</div>
            <div class="flex flex-col mb-2" style="gap:8px;">
              ${l.options.map((r,f)=>{let b="#e5e5e5",x="2px",w="6px",v=`border:${x} solid ${b};border-bottom-width:${w};transition:border-color 0.2s;`,A="10px",L="10px 14px",H="font-family:Inter, sans-serif;font-weight:600;font-size:18px;line-height:32px;",m="#4b4b4b",V="center",y="background:#fff;",P="cursor:pointer;";return d?r===l.answer?(b="#22c55e",m="#22c55e",y=u===r?"background:#d1fadf;":"background:#fff;",v=`border:${x} solid #22c55e;border-bottom-width:${w};`):u===r&&(b="#ef4444",m="#ef4444",y="background:#fee2e2;",v=`border:${x} solid #ef4444;border-bottom-width:${w};`):u===r&&(b="#38bdf8",m="#38bdf8",y="background:#e0f2fe;",v=`border:${x} solid #38bdf8;border-bottom-width:${w};`),`<div class="option-btn" data-opt="${r}" style="${v}border-radius:${A};padding:${L};${H}color:${m};${y}text-align:${V};${P}" onmouseover="this.style.borderColor='#84D8FF';this.style.color='#1899D6'" onmouseout="this.style.borderColor='${b}';this.style.color='${m}'">${r}</div>`}).join("")}
            </div>
            <div class="min-h-[24px] mb-1 text-center">
              ${d?g?'<span class="text-green-600 text-base font-bold">¡Correcto!</span>':`<span class="text-red-600 text-base font-bold">Error: es ${l.answer}</span>`:""}
            </div>
          </div>
          <button id="check-btn" class="w-full py-3 rounded-2xl text-base font-bold tracking-wide transition-colors duration-200 mb-1 ${u||d?"bg-[#18b6fa] text-white shadow-md":"bg-gray-200 text-gray-400 cursor-not-allowed"}" ${u||d?"":"disabled"}>
            ${d?c===o-1?"Ver resultados":"Nueva pregunta":"COMPROBAR"}
          </button>
        </div>
      </div>
    `,document.getElementById("back-btn").onclick=B,document.querySelectorAll(".option-btn").forEach(r=>{r.onclick=()=>{d||(u=r.getAttribute("data-opt"),C())}}),(h=document.getElementById("check-btn"))==null||h.addEventListener("click",()=>{d?(c++,u=null,d=!1,g=!1,p=$(),C()):(d=!0,g=u===l.answer,g&&M++,C())})}function k(l,i){document.querySelector("#app").innerHTML=`
      <div class="min-h-screen bg-white flex flex-col items-center px-4 pt-4 pb-2">
        <div class="w-full max-w-[400px]">
          <div class="flex items-center mb-2">
            <button id="back-btn" class="p-2 -ml-2">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#A3A3A3" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
            <div class="flex-1 mx-2">
              <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-3 bg-yellow-400 rounded-full transition-all duration-300" style="width: 100%;"></div>
              </div>
            </div>
            <span class="text-gray-700 font-semibold text-lg ml-2" style="min-width: 40px;">${i}/${i}</span>
          </div>
          <div class="flex flex-col items-center mt-8 mb-2">
            <img src="/earth-score.gif" alt="Globo girando" style="height: 30vh; width: auto; max-width: 100%; object-fit: contain;" />
          </div>
          <div class="text-center text-2xl font-extrabold text-gray-800 mb-6">¡Fin de la partida!</div>
          <div class="w-full flex justify-center mb-10">
            <div style="border:3px solid #d1aaff; border-radius:16px; background:#f8f5ff; padding:24px 0; width:100%; max-width:370px; text-align:center;">
              <span style="color:#c084fc; font-size:28px; font-weight:700;">${l} Respuestas correctas</span>
            </div>
          </div>
          <button id="score-home-btn" class="w-full mt-2 py-4 rounded-2xl text-lg font-bold tracking-wide transition-colors duration-200 mb-2" style="background:#18b6fa;color:#fff;box-shadow:0 2px 0 #1899d6;">VOLVER AL INICIO</button>
        </div>
      </div>
    `,document.getElementById("back-btn").onclick=window.renderHomePage,document.getElementById("score-home-btn").onclick=window.renderHomePage}C()}window.renderCapitalsMode=E;async function F(){return(await(await fetch("https://restcountries.com/v3.1/all")).json()).filter(t=>t.flags&&t.flags.svg&&t.region&&t.name&&t.name.common).map(t=>{var s,e;return{country:((e=(s=t.translations)==null?void 0:s.spa)==null?void 0:e.common)||t.name.common,flag:t.flags.svg,continent:t.region.toLowerCase()}})}function T(a){for(let n=a.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[a[n],a[t]]=[a[t],a[n]]}return a}async function q(a){document.querySelector("#app").innerHTML="<div class='min-h-screen flex flex-col items-center justify-center bg-white'><span class='text-lg'>Cargando preguntas...</span></div>";let n=await F();const t={world:null,africa:"africa",america:"americas",asia:"asia",europe:"europe",oceania:"oceania"};let s=n;if(a.includes("world")||(s=n.filter(l=>a.some(i=>t[i]===l.continent))),s.length<10){document.querySelector("#app").innerHTML=`
      <div class='min-h-screen flex flex-col items-center justify-center bg-white'>
        <h2 class='text-2xl font-bold mb-4 text-center'>No hay suficientes países en los continentes seleccionados para un juego de 10 preguntas.</h2>
        <button class='btn btn-primary' onclick='window.renderHomePage()'>Volver al inicio</button>
      </div>
    `;return}let e=[],o=10,c=0,u=null,d=!1,g=!1,p=null,M=0;function $(){const l=s.filter(f=>!e.includes(f.country));if(l.length===0)return null;const i=T([...l])[0];e.push(i.country);const h=T(s.filter(f=>f.country!==i.country)).slice(0,3).map(f=>f.country),r=T([i.country,...h]);return{country:i.country,flag:i.flag,options:r,answer:i.country}}function B(){window.renderHomePage()}function C(l,i){document.querySelector("#app").innerHTML=`
      <div class="min-h-screen bg-white flex flex-col items-center px-4 pt-4 pb-2">
        <div class="w-full max-w-[400px]">
          <div class="flex items-center mb-2">
            <button id="back-btn" class="p-2 -ml-2">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#A3A3A3" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
            <div class="flex-1 mx-2">
              <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-3 bg-yellow-400 rounded-full transition-all duration-300" style="width: 100%;"></div>
              </div>
            </div>
            <span class="text-gray-700 font-semibold text-lg ml-2" style="min-width: 40px;">${i}/${i}</span>
          </div>
          <div class="flex flex-col items-center mt-8 mb-2">
            <img src="/globo-quiz/earth-score.gif" alt="Globo girando" style="height: 30vh; width: auto; max-width: 100%; object-fit: contain;" />
          </div>
          <div class="text-center text-2xl font-extrabold text-gray-800 mb-6">¡Fin de la partida!</div>
          <div class="w-full flex justify-center mb-10">
            <div style="border:3px solid #d1aaff; border-radius:16px; background:#f8f5ff; padding:24px 0; width:100%; max-width:370px; text-align:center;">
              <span style="color:#c084fc; font-size:28px; font-weight:700;">${l} Respuestas correctas</span>
            </div>
          </div>
          <button id="score-home-btn" class="w-full mt-2 py-4 rounded-2xl text-lg font-bold tracking-wide transition-colors duration-200 mb-2" style="background:#18b6fa;color:#fff;box-shadow:0 2px 0 #1899d6;">VOLVER AL INICIO</button>
        </div>
      </div>
    `,document.getElementById("back-btn").onclick=window.renderHomePage,document.getElementById("score-home-btn").onclick=window.renderHomePage}function k(){var h;if(c>=o){C(M,o);return}p||(p=$());const l=p,i=(c+1)/o*100;document.querySelector("#app").innerHTML=`
      <div class="h-screen bg-white flex flex-col items-center px-2 py-2 justify-between">
        <div class="w-full max-w-[400px] flex flex-col h-full justify-between">
          <div>
            <div class="flex items-center mb-1">
              <button id="back-btn" class="p-2 -ml-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#A3A3A3" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
              </button>
              <div class="flex-1 mx-2">
                <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-2 bg-yellow-400 rounded-full transition-all duration-300" style="width: ${i}%;"></div>
                </div>
              </div>
              <span class="text-gray-700 font-semibold text-base ml-2" style="min-width: 36px;">${c+1}/${o}</span>
            </div>
            <div class="mt-3 mb-1 text-center text-base font-semibold text-gray-800">¿De qué país es esta bandera?</div>
            <div class="flex justify-center items-center mb-4 mt-2 pb-2 pt-2">
              <img src="${l.flag}" alt="Bandera de ${l.country}" style="width: 100%; max-width: 160px; height: auto; aspect-ratio: 4/3; object-fit: contain; border-radius: 8px; background: #fff; display: block;" />
            </div>
            <div class="flex flex-col mb-2" style="gap:8px;">
              ${l.options.map((r,f)=>{let b="#e5e5e5",x="2px",w="6px",v=`border:${x} solid ${b};border-bottom-width:${w};transition:border-color 0.2s;`,A="10px",L="10px 14px",H="font-family:Inter, sans-serif;font-weight:600;font-size:18px;line-height:32px;",m="#4b4b4b",V="center",y="background:#fff;",P="cursor:pointer;";return d?r===l.answer?(b="#22c55e",m="#22c55e",y=u===r?"background:#d1fadf;":"background:#fff;",v=`border:${x} solid #22c55e;border-bottom-width:${w};`):u===r&&(b="#ef4444",m="#ef4444",y="background:#fee2e2;",v=`border:${x} solid #ef4444;border-bottom-width:${w};`):u===r&&(b="#38bdf8",m="#38bdf8",y="background:#e0f2fe;",v=`border:${x} solid #38bdf8;border-bottom-width:${w};`),`<div class="option-btn" data-opt="${r}" style="${v}border-radius:${A};padding:${L};${H}color:${m};${y}text-align:${V};${P}" onmouseover="this.style.borderColor='#84D8FF';this.style.color='#1899D6'" onmouseout="this.style.borderColor='${b}';this.style.color='${m}'">${r}</div>`}).join("")}
            </div>
            <div class="min-h-[24px] mb-1 text-center">
              ${d?g?'<span class="text-green-600 text-base font-bold">¡Correcto!</span>':`<span class="text-red-600 text-base font-bold">Error: es ${l.answer}</span>`:""}
            </div>
          </div>
          <button id="check-btn" class="w-full py-3 rounded-2xl text-base font-bold tracking-wide transition-colors duration-200 mb-1 ${u||d?"bg-[#18b6fa] text-white shadow-md":"bg-gray-200 text-gray-400 cursor-not-allowed"}" ${u||d?"":"disabled"}>
            ${d?c===o-1?"Ver resultados":"Nueva pregunta":"COMPROBAR"}
          </button>
        </div>
      </div>
    `,document.getElementById("back-btn").onclick=B,document.querySelectorAll(".option-btn").forEach(r=>{r.onclick=()=>{d||(u=r.getAttribute("data-opt"),k())}}),(h=document.getElementById("check-btn"))==null||h.addEventListener("click",()=>{d?(c++,u=null,d=!1,g=!1,p=$(),k()):(d=!0,g=u===l.answer,g&&M++,k())})}k()}window.renderFlagsMode=q;function D(){document.querySelector("#app").innerHTML=`
    <div class="h-screen flex flex-col items-center justify-between bg-[#25305a] px-3 py-3">
      <header class="w-full flex flex-col items-center">
        <h1 class="text-3xl font-extrabold text-[#6ee900] font-[Quicksand,sans-serif] mb-1" style="letter-spacing: -1px;">Globo Quiz</h1>
        <p class="text-white text-base font-medium">Aventura mundial de Geografía</p>
      </header>
      <img src="/globo-quiz/globo-quiz-globe.gif" alt="Globo animado" class="w-auto h-[40vh] max-h-[300px] object-contain" />
      <div class="flex flex-col gap-3 w-full max-w-md">
        <div class="flex items-center bg-white rounded-2xl shadow-md px-4 py-3 mode-card" id="mode-capitales">
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-3 overflow-hidden">
            <svg width="40" height="40" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="112" height="112" rx="56" fill="#F3E7FC"/>
              <g clip-path="url(#clip0_2_3352)">
                <path d="M77.5837 51.3334H67.667V39.0834C67.667 38.1165 66.8839 37.3334 65.917 37.3334H55.417C54.4501 37.3334 53.667 38.1165 53.667 39.0834V44.3334H49.0003V38.5C49.0003 37.8555 48.4782 37.3334 47.8337 37.3334H46.667C46.0224 37.3334 45.5003 37.8555 45.5003 38.5V44.3334H40.8337V38.5C40.8337 37.8555 40.3116 37.3334 39.667 37.3334H38.5003C37.8557 37.3334 37.3337 37.8555 37.3337 38.5V44.3334H34.417C33.4501 44.3334 32.667 45.1165 32.667 46.0834V72.3334C32.667 73.6218 33.7119 74.6667 35.0003 74.6667H77.0003C78.2888 74.6667 79.3337 73.6218 79.3337 72.3334V53.0834C79.3337 52.1165 78.5498 51.3334 77.5837 51.3334ZM42.0003 66.7917C42.0003 67.2751 41.6088 67.6667 41.1253 67.6667H38.2087C37.7252 67.6667 37.3337 67.2751 37.3337 66.7917V63.875C37.3337 63.3916 37.7252 63 38.2087 63H41.1253C41.6088 63 42.0003 63.3916 42.0003 63.875V66.7917ZM42.0003 59.7917C42.0003 60.2751 41.6088 60.6667 41.1253 60.6667H38.2087C37.7252 60.6667 37.3337 60.2751 37.3337 59.7917V56.875C37.3337 56.3916 37.7252 56 38.2087 56H41.1253C41.6088 56 42.0003 56.3916 42.0003 56.875V59.7917ZM42.0003 52.7917C42.0003 53.2751 41.6088 53.6667 41.1253 53.6667H38.2087C37.7252 53.6667 37.3337 53.2751 37.3337 52.7917V49.875C37.3337 49.3916 37.7252 49 38.2087 49H41.1253C41.6088 49 42.0003 49.3916 42.0003 49.875V52.7917ZM51.3337 66.7917C51.3337 67.2751 50.9421 67.6667 50.4587 67.6667H47.542C47.0586 67.6667 46.667 67.2751 46.667 66.7917V63.875C46.667 63.3916 47.0586 63 47.542 63H50.4587C50.9421 63 51.3337 63.3916 51.3337 63.875V66.7917ZM51.3337 59.7917C51.3337 60.2751 50.9421 60.6667 50.4587 60.6667H47.542C47.0586 60.6667 46.667 60.2751 46.667 59.7917V56.875C46.667 56.3916 47.0586 56 47.542 56H50.4587C50.9421 56 51.3337 56.3916 51.3337 56.875V59.7917ZM51.3337 52.7917C51.3337 53.2751 50.9421 53.6667 50.4587 53.6667H47.542C47.0586 53.6667 46.667 53.2751 46.667 52.7917V49.875C46.667 49.3916 47.0586 49 47.542 49H50.4587C50.9421 49 51.3337 49.3916 51.3337 49.875V52.7917ZM63.0003 59.7917C63.0003 60.2751 62.6088 60.6667 62.1253 60.6667H59.2087C58.7252 60.6667 58.3337 60.2751 58.3337 59.7917V56.875C58.3337 56.3916 58.7252 56 59.2087 56H62.1253C62.6088 56 63.0003 56.3916 63.0003 56.875V59.7917ZM63.0003 52.7917C63.0003 53.2751 62.6088 53.6667 62.1253 53.6667H59.2087C58.7252 53.6667 58.3337 53.2751 58.3337 52.7917V49.875C58.3337 49.3916 58.7252 49 59.2087 49H62.1253C62.6088 49 63.0003 49.3916 63.0003 49.875V52.7917ZM63.0003 45.7917C63.0003 46.2751 62.6088 46.6667 62.1253 46.6667H59.2087C58.7252 46.6667 58.3337 46.2751 58.3337 45.7917V42.875C58.3337 42.3916 58.7252 42 59.2087 42H62.1253C62.6088 42 63.0003 42.3916 63.0003 42.875V45.7917ZM74.667 66.7917C74.667 67.2751 74.2754 67.6667 73.792 67.6667H70.8753C70.3919 67.6667 70.0003 67.2751 70.0003 66.7917V63.875C70.0003 63.3916 70.3919 63 70.8753 63H73.792C74.2754 63 74.667 63.3916 74.667 63.875V66.7917ZM74.667 59.7917C74.667 60.2751 74.2754 60.6667 73.792 60.6667H70.8753C70.3919 60.6667 70.0003 60.2751 70.0003 59.7917V56.875C70.0003 56.3916 70.3919 56 70.8753 56H73.792C74.2754 56 74.667 56.3916 74.667 56.875V59.7917Z" fill="#CE82FF"/>
              </g>
              <defs>
                <clipPath id="clip0_2_3352">
                  <rect width="56" height="56" fill="white" transform="translate(28 28)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <div class="text-lg font-bold text-gray-800">Capitales</div>
            <div class="text-gray-500 text-sm leading-tight">Adivina las capitales de países de todo el mundo</div>
          </div>
        </div>
        <div class="flex items-center bg-white rounded-2xl shadow-md px-4 py-3 mode-card" id="mode-banderas">
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-3 overflow-hidden">
            <svg width="40" height="40" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="112" height="112" rx="56" fill="#FDF4D2"/>
              <path d="M37.3335 39.6665C37.3335 39.3562 37.3955 39.0491 37.5157 38.763C37.6359 38.4769 37.8119 38.2177 38.0335 38.0005C40.5765 35.5077 43.9738 34.0776 47.534 34.0013C51.0942 33.925 54.5497 35.2082 57.1972 37.5898L58.0162 38.3552C59.7182 39.8464 61.904 40.6685 64.1668 40.6685C66.4297 40.6685 68.6155 39.8464 70.3175 38.3552L70.8985 37.8255C72.3218 36.6985 74.4615 37.5992 74.6552 39.4028L74.6668 39.6665V60.6665C74.6668 60.9768 74.6049 61.284 74.4847 61.57C74.3645 61.8561 74.1884 62.1153 73.9668 62.3325C71.4239 64.8254 68.0265 66.2555 64.4663 66.3318C60.9061 66.4081 57.4506 65.1248 54.8032 62.7432L53.9842 61.9778C52.3357 60.5335 50.2316 59.7154 48.0405 59.6667C45.8494 59.6181 43.711 60.3421 42.0002 61.7118V76.9998C41.9995 77.5946 41.7718 78.1666 41.3635 78.599C40.9553 79.0315 40.3973 79.2917 39.8036 79.3266C39.2099 79.3614 38.6253 79.1683 38.1692 78.7866C37.7132 78.4049 37.4201 77.8634 37.3498 77.2729L37.3335 76.9998V39.6665Z" fill="#FFC800"/>
            </svg>
          </div>
          <div>
            <div class="text-lg font-bold text-gray-800">Banderas</div>
            <div class="text-gray-500 text-sm leading-tight">Identifica a qué país pertenece cada bandera</div>
          </div>
        </div>
      </div>
      <div class="text-center text-white text-xs py-1">
        Made with <span class="text-sm align-middle">&#9829;</span> by Rebeca Martínez - 2025
      </div>
    </div>
  `,document.getElementById("mode-capitales").onclick=()=>{window.selectedMode="capitals",N()},document.getElementById("mode-banderas").onclick=()=>{window.selectedMode="flags",N()}}window.renderHomePage=D;window.renderCapitalsMode=E;window.renderFlagsMode=q;D();
