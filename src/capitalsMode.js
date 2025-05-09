import './style.css';

async function fetchCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  // Map to { country, capital, continent } in Spanish
  return data
    .filter(c => c.capital && c.capital.length > 0 && c.region && c.name && c.name.common)
    .map(c => ({
      country: c.translations?.spa?.common || c.name.common,
      capital: c.capital[0],
      continent: c.region.toLowerCase(), // e.g. 'Europe', 'Asia', etc.
    }));
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Spanish capital translations (partial, add more as needed)
const capitalTranslations = {
  'Kabul': 'Kabul',
  'Tirana': 'Tirana',
  'Algiers': 'Argel',
  'Andorra la Vella': 'Andorra la Vieja',
  'Luanda': 'Luanda',
  'Buenos Aires': 'Buenos Aires',
  'Yerevan': 'Ereván',
  'Canberra': 'Canberra',
  'Vienna': 'Viena',
  'Baku': 'Bakú',
  'Nassau': 'Nasáu',
  'Manama': 'Manama',
  'Dhaka': 'Daca',
  'Bridgetown': 'Bridgetown',
  'Minsk': 'Minsk',
  'Brussels': 'Bruselas',
  'Belmopan': 'Belmopán',
  'Porto-Novo': 'Porto Novo',
  'Thimphu': 'Timbu',
  'La Paz': 'La Paz',
  'Sarajevo': 'Sarajevo',
  'Gaborone': 'Gaborone',
  'Brasília': 'Brasilia',
  'Sofia': 'Sofía',
  'Ouagadougou': 'Uagadugú',
  'Gitega': 'Gitega',
  'Phnom Penh': 'Nom Pen',
  'Yaoundé': 'Yaundé',
  'Ottawa': 'Ottawa',
  'Praia': 'Praia',
  'Bangui': 'Bangui',
  'NDjamena': 'Yamena',
  'Santiago': 'Santiago',
  'Beijing': 'Pekín',
  'Bogotá': 'Bogotá',
  'Moroni': 'Moroni',
  'Kinshasa': 'Kinshasa',
  'Brazzaville': 'Brazzaville',
  'San José': 'San José',
  'Yamoussoukro': 'Yamusukro',
  'Zagreb': 'Zagreb',
  'Havana': 'La Habana',
  'Nicosia': 'Nicosia',
  'Prague': 'Praga',
  'Copenhagen': 'Copenhague',
  'Djibouti': 'Yibuti',
  'Roseau': 'Roseau',
  'Santo Domingo': 'Santo Domingo',
  'Quito': 'Quito',
  'Cairo': 'El Cairo',
  'San Salvador': 'San Salvador',
  'Malabo': 'Malabo',
  'Asmara': 'Asmara',
  'Tallinn': 'Tallin',
  'Mbabane': 'Mbabane',
  'Addis Ababa': 'Adís Abeba',
  'Suva': 'Suva',
  'Helsinki': 'Helsinki',
  'Paris': 'París',
  'Libreville': 'Libreville',
  'Banjul': 'Banjul',
  'Tbilisi': 'Tiflis',
  'Berlin': 'Berlín',
  'Accra': 'Acra',
  'Athens': 'Atenas',
  'Saint George\'s': 'Saint George',
  'Guatemala City': 'Ciudad de Guatemala',
  'Conakry': 'Conakri',
  'Bissau': 'Bisáu',
  'Georgetown': 'Georgetown',
  'Port-au-Prince': 'Puerto Príncipe',
  'Tegucigalpa': 'Tegucigalpa',
  'Budapest': 'Budapest',
  'Reykjavik': 'Reikiavik',
  'New Delhi': 'Nueva Delhi',
  'Jakarta': 'Yakarta',
  'Tehran': 'Teherán',
  'Baghdad': 'Bagdad',
  'Dublin': 'Dublín',
  'Jerusalem': 'Jerusalén',
  'Rome': 'Roma',
  'Kingston': 'Kingston',
  'Tokyo': 'Tokio',
  'Amman': 'Amán',
  'Astana': 'Nursultán',
  'Nairobi': 'Nairobi',
  'Tarawa': 'Tarawa',
  'Pyongyang': 'Pionyang',
  'Seoul': 'Seúl',
  'Pristina': 'Pristina',
  'Kuwait City': 'Kuwait',
  'Bishkek': 'Biskek',
  'Vientiane': 'Vientián',
  'Riga': 'Riga',
  'Beirut': 'Beirut',
  'Maseru': 'Maseru',
  'Monrovia': 'Monrovia',
  'Tripoli': 'Trípoli',
  'Vaduz': 'Vaduz',
  'Vilnius': 'Vilna',
  'Luxembourg': 'Luxemburgo',
  'Antananarivo': 'Antananarivo',
  'Lilongwe': 'Lilongüe',
  'Kuala Lumpur': 'Kuala Lumpur',
  'Male': 'Malé',
  'Bamako': 'Bamako',
  'Valletta': 'La Valeta',
  'Majuro': 'Majuro',
  'Nouakchott': 'Nuakchot',
  'Port Louis': 'Port Louis',
  'Mexico City': 'Ciudad de México',
  'Chisinau': 'Chisináu',
  'Monaco': 'Mónaco',
  'Ulaanbaatar': 'Ulán Bator',
  'Podgorica': 'Podgorica',
  'Rabat': 'Rabat',
  'Maputo': 'Maputo',
  'Naypyidaw': 'Naypyidó',
  'Windhoek': 'Windhoek',
  'Yaren': 'Yaren',
  'Kathmandu': 'Katmandú',
  'Amsterdam': 'Ámsterdam',
  'Wellington': 'Wellington',
  'Managua': 'Managua',
  'Niamey': 'Niamey',
  'Abuja': 'Abuya',
  'Skopje': 'Skopie',
  'Oslo': 'Oslo',
  'Muscat': 'Mascate',
  'Islamabad': 'Islamabad',
  'Ngerulmud': 'Ngerulmud',
  'Jerusalem': 'Jerusalén',
  'Panama City': 'Ciudad de Panamá',
  'Port Moresby': 'Puerto Moresby',
  'Asunción': 'Asunción',
  'Lima': 'Lima',
  'Manila': 'Manila',
  'Warsaw': 'Varsovia',
  'Lisbon': 'Lisboa',
  'Doha': 'Doha',
  'Bucharest': 'Bucarest',
  'Moscow': 'Moscú',
  'Kigali': 'Kigali',
  'Basseterre': 'Basseterre',
  'Castries': 'Castries',
  'Kingstown': 'Kingstown',
  'Apia': 'Apia',
  'San Marino': 'San Marino',
  'Riyadh': 'Riad',
  'Dakar': 'Dakar',
  'Belgrade': 'Belgrado',
  'Victoria': 'Victoria',
  'Freetown': 'Freetown',
  'Singapore': 'Singapur',
  'Bratislava': 'Bratislava',
  'Ljubljana': 'Liubliana',
  'Honiara': 'Honiara',
  'Mogadishu': 'Mogadiscio',
  'Pretoria': 'Pretoria',
  'Juba': 'Yuba',
  'Madrid': 'Madrid',
  'Colombo': 'Colombo',
  'Khartoum': 'Jartum',
  'Paramaribo': 'Paramaribo',
  'Stockholm': 'Estocolmo',
  'Bern': 'Berna',
  'Damascus': 'Damasco',
  'Taipei': 'Taipéi',
  'Dushanbe': 'Dusambé',
  'Dodoma': 'Dodoma',
  'Bangkok': 'Bangkok',
  'Lomé': 'Lomé',
  'Nukuʻalofa': 'Nukualofa',
  'Port of Spain': 'Puerto España',
  'Tunis': 'Túnez',
  'Ankara': 'Ankara',
  'Ashgabat': 'Asjabad',
  'Funafuti': 'Funafuti',
  'Kampala': 'Kampala',
  'Kyiv': 'Kiev',
  'Abu Dhabi': 'Abu Dabi',
  'London': 'Londres',
  'Washington, D.C.': 'Washington D. C.',
  'Montevideo': 'Montevideo',
  'Tashkent': 'Taskent',
  'Port Vila': 'Port Vila',
  'Vatican City': 'Ciudad del Vaticano',
  'Caracas': 'Caracas',
  'Hanoi': 'Hanói',
  'Sana\'a': 'Saná',
  'Lusaka': 'Lusaka',
  'Harare': 'Harare',
};

async function renderCapitalsMode(selectedContinents) {
  document.querySelector('#app').innerHTML = `<div class='min-h-screen flex flex-col items-center justify-center bg-white'><span class='text-lg'>Cargando preguntas...</span></div>`;
  let COUNTRIES = await fetchCountries();
  // Map continent keys to API region names
  const continentMap = {
    world: null,
    africa: 'africa',
    america: 'americas',
    asia: 'asia',
    europe: 'europe',
    oceania: 'oceania',
  };
  let pool = COUNTRIES;
  if (!selectedContinents.includes('world')) {
    pool = COUNTRIES.filter(c => selectedContinents.some(key => continentMap[key] === c.continent));
  }
  if (pool.length < 10) {
    document.querySelector('#app').innerHTML = `
      <div class='min-h-screen flex flex-col items-center justify-center bg-white'>
        <h2 class='text-2xl font-bold mb-4 text-center'>No hay suficientes países en los continentes seleccionados para un juego de 10 preguntas.</h2>
        <button class='btn btn-primary' onclick='window.renderHomePage()'>Volver al inicio</button>
      </div>
    `;
    return;
  }
  let usedCountries = [];
  let totalQuestions = 10;
  let current = 0;
  let selected = null;
  let checked = false;
  let correct = false;
  let lastQuestion = null;
  let score = 0;

  function generateQuestion() {
    // Filter out used countries
    const available = pool.filter(c => !usedCountries.includes(c.country));
    if (available.length === 0) return null;
    const qCountry = shuffle([...available])[0];
    usedCountries.push(qCountry.country);
    // Get 3 incorrect capitals from other countries in pool
    const incorrect = shuffle(pool.filter(c => c.country !== qCountry.country)).slice(0, 3).map(c => capitalTranslations[c.capital] || c.capital);
    // Shuffle options
    const options = shuffle([capitalTranslations[qCountry.capital] || qCountry.capital, ...incorrect]);
    return {
      country: qCountry.country,
      options,
      answer: capitalTranslations[qCountry.capital] || qCountry.capital,
    };
  }

  function goHome() {
    window.renderHomePage();
  }

  function render() {
    if (current >= totalQuestions) {
      renderScorePage(
        score,
        totalQuestions
      );
      return;
    }
    if (!lastQuestion) lastQuestion = generateQuestion();
    const q = lastQuestion;
    const progress = ((current + 1) / totalQuestions) * 100;
    document.querySelector('#app').innerHTML = `
      <div class="h-screen bg-white flex flex-col items-center px-2 py-2 justify-between">
        <div class="w-full max-w-[400px] flex flex-col h-full justify-between">
          <div>
            <div class="flex items-center mb-1">
              <button id="back-btn" class="p-2 -ml-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#A3A3A3" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
              </button>
              <div class="flex-1 mx-2">
                <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-2 bg-yellow-400 rounded-full transition-all duration-300" style="width: ${progress}%;"></div>
                </div>
              </div>
              <span class="text-gray-700 font-semibold text-base ml-2" style="min-width: 36px;">${current + 1}/${totalQuestions}</span>
            </div>
            <div class="mt-3 mb-1 text-center text-base font-semibold text-gray-800">¿Cuál es la capital de este país?</div>
            <div class="text-center text-2xl font-extrabold text-gray-900 mb-4 mt-2 pb-4 pt-4" style="letter-spacing: -1px;">${q.country}</div>
            <div class="flex flex-col mb-2" style="gap:8px;">
              ${q.options.map((opt, i) => {
                let borderColor = '#e5e5e5';
                let borderWidth = '2px';
                let borderBottomWidth = '6px';
                let borderStyle = `border:${borderWidth} solid ${borderColor};border-bottom-width:${borderBottomWidth};transition:border-color 0.2s;`;
                let borderRadius = '10px';
                let padding = '10px 14px';
                let font = 'font-family:Inter, sans-serif;font-weight:600;font-size:18px;line-height:32px;';
                let color = '#4b4b4b';
                let textAlign = 'center';
                let bg = 'background:#fff;';
                let cursor = 'cursor:pointer;';
                if (checked) {
                  if (opt === q.answer) {
                    borderColor = '#22c55e';
                    color = '#22c55e';
                    bg = selected === opt ? 'background:#d1fadf;' : 'background:#fff;';
                    borderStyle = `border:${borderWidth} solid #22c55e;border-bottom-width:${borderBottomWidth};`;
                  } else if (selected === opt) {
                    borderColor = '#ef4444';
                    color = '#ef4444';
                    bg = 'background:#fee2e2;';
                    borderStyle = `border:${borderWidth} solid #ef4444;border-bottom-width:${borderBottomWidth};`;
                  }
                } else if (selected === opt) {
                  borderColor = '#38bdf8';
                  color = '#38bdf8';
                  bg = 'background:#e0f2fe;';
                  borderStyle = `border:${borderWidth} solid #38bdf8;border-bottom-width:${borderBottomWidth};`;
                }
                return `<div class="option-btn" data-opt="${opt}" style="${borderStyle}border-radius:${borderRadius};padding:${padding};${font}color:${color};${bg}text-align:${textAlign};${cursor}" onmouseover="this.style.borderColor='#84D8FF';this.style.color='#1899D6'" onmouseout="this.style.borderColor='${borderColor}';this.style.color='${color}'">${opt}</div>`;
              }).join('')}
            </div>
            <div class="min-h-[24px] mb-1 text-center">
              ${checked ? (correct ? '<span class="text-green-600 text-base font-bold">¡Correcto!</span>' : `<span class="text-red-600 text-base font-bold">Error: es ${q.answer}</span>`) : ''}
            </div>
          </div>
          <button id="check-btn" class="w-full py-3 rounded-2xl text-base font-bold tracking-wide transition-colors duration-200 mb-1 ${selected || checked ? 'bg-[#18b6fa] text-white shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}" ${(selected || checked) ? '' : 'disabled'}>
            ${checked ? (current === totalQuestions - 1 ? 'Ver resultados' : 'Nueva pregunta') : 'COMPROBAR'}
          </button>
        </div>
      </div>
    `;
    document.getElementById('back-btn').onclick = goHome;
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.onclick = () => {
        if (!checked) {
          selected = btn.getAttribute('data-opt');
          render();
        }
      };
    });
    document.getElementById('check-btn')?.addEventListener('click', () => {
      if (!checked) {
        checked = true;
        correct = selected === q.answer;
        if (correct) score++;
        render();
      } else {
        // Nueva pregunta
        current++;
        selected = null;
        checked = false;
        correct = false;
        lastQuestion = generateQuestion();
        render();
      }
    });
  }

  function renderScorePage(correct, total) {
    document.querySelector('#app').innerHTML = `
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
            <span class="text-gray-700 font-semibold text-lg ml-2" style="min-width: 40px;">${total}/${total}</span>
          </div>
          <div class="flex flex-col items-center mt-8 mb-2">
            <img src="/earth-score.gif" alt="Globo girando" style="height: 30vh; width: auto; max-width: 100%; object-fit: contain;" />
          </div>
          <div class="text-center text-2xl font-extrabold text-gray-800 mb-6">¡Fin de la partida!</div>
          <div class="w-full flex justify-center mb-10">
            <div style="border:3px solid #d1aaff; border-radius:16px; background:#f8f5ff; padding:24px 0; width:100%; max-width:370px; text-align:center;">
              <span style="color:#c084fc; font-size:28px; font-weight:700;">${correct} Respuestas correctas</span>
            </div>
          </div>
          <button id="score-home-btn" class="w-full mt-2 py-4 rounded-2xl text-lg font-bold tracking-wide transition-colors duration-200 mb-2" style="background:#18b6fa;color:#fff;box-shadow:0 2px 0 #1899d6;">VOLVER AL INICIO</button>
        </div>
      </div>
    `;
    document.getElementById('back-btn').onclick = window.renderHomePage;
    document.getElementById('score-home-btn').onclick = window.renderHomePage;
  }

  render();
}

window.renderCapitalsMode = renderCapitalsMode;
export default renderCapitalsMode; 