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

async function renderCapitalsMode(selectedContinents) {
  document.querySelector('#app').innerHTML = `<div class='min-h-screen flex flex-col items-center justify-center bg-white'><span class='text-lg'>Cargando preguntas...</span></div>`;
  let COUNTRIES = await fetchCountries();
  // Map continent keys to API region names
  const continentMap = {
    world: null,
    africa: 'africa',
    north_america: 'americas',
    south_america: 'americas',
    asia: 'asia',
    europe: 'europe',
    oceania: 'oceania',
  };
  let pool = COUNTRIES;
  if (!selectedContinents.includes('world')) {
    // Special handling for Americas split
    if (selectedContinents.includes('north_america') || selectedContinents.includes('south_america')) {
      let americas = COUNTRIES.filter(c => c.continent === 'americas');
      let na = [];
      let sa = [];
      // Use subregion if available
      for (const c of americas) {
        if (c.country === 'United States' || c.country === 'Canada' || c.country === 'Mexico' || c.country === 'Greenland') na.push(c);
        else sa.push(c);
      }
      pool = [];
      if (selectedContinents.includes('north_america')) pool = pool.concat(na);
      if (selectedContinents.includes('south_america')) pool = pool.concat(sa);
      // Add other selected continents
      for (const key of selectedContinents) {
        if (key !== 'north_america' && key !== 'south_america') {
          pool = pool.concat(COUNTRIES.filter(c => c.continent === continentMap[key]));
        }
      }
      // Remove duplicates
      pool = pool.filter((c, i, arr) => arr.findIndex(x => x.country === c.country) === i);
    } else {
      pool = COUNTRIES.filter(c => selectedContinents.includes(Object.keys(continentMap).find(key => continentMap[key] === c.continent)));
    }
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

  function generateQuestion() {
    // Filter out used countries
    const available = pool.filter(c => !usedCountries.includes(c.country));
    if (available.length === 0) return null;
    const qCountry = shuffle([...available])[0];
    usedCountries.push(qCountry.country);
    // Get 3 incorrect capitals from other countries in pool
    const incorrect = shuffle(pool.filter(c => c.country !== qCountry.country)).slice(0, 3).map(c => c.capital);
    // Shuffle options
    const options = shuffle([qCountry.capital, ...incorrect]);
    return {
      country: qCountry.country,
      options,
      answer: qCountry.capital,
    };
  }

  function goHome() {
    window.renderHomePage();
  }

  function render() {
    if (current >= totalQuestions) {
      document.querySelector('#app').innerHTML = `<div class='min-h-screen flex flex-col items-center justify-center bg-white'><h2 class='text-2xl font-bold mb-4'>¡Juego terminado!</h2><button class='btn btn-primary' onclick='window.renderHomePage()'>Volver al inicio</button></div>`;
      return;
    }
    if (!lastQuestion) lastQuestion = generateQuestion();
    const q = lastQuestion;
    const progress = ((current + 1) / totalQuestions) * 100;
    document.querySelector('#app').innerHTML = `
      <div class="min-h-screen bg-white flex flex-col items-center px-4 pt-4 pb-2">
        <div class="w-full max-w-[400px]">
          <div class="flex items-center mb-2">
            <button id="back-btn" class="p-2 -ml-2">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#A3A3A3" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
            <div class="flex-1 mx-2">
              <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-3 bg-yellow-400 rounded-full transition-all duration-300" style="width: ${progress}%;"></div>
              </div>
            </div>
            <span class="text-gray-700 font-semibold text-lg ml-2" style="min-width: 40px;">${current + 1}/${totalQuestions}</span>
          </div>
          <div class="mt-6 mb-2 text-center text-xl font-semibold text-gray-800">¿Cuál es la capital de este país?</div>
          <div class="text-center text-4xl font-extrabold text-gray-900 mb-8 mt-2" style="letter-spacing: -1px;">${q.country}</div>
          <div class="flex flex-col mb-8" style="gap:10px;">
            ${q.options.map((opt, i) => {
              let borderColor = '#e5e5e5';
              let borderWidth = '2.67px';
              let borderBottomWidth = '8px';
              let borderStyle = `border:${borderWidth} solid ${borderColor};border-bottom-width:${borderBottomWidth};`;
              let borderRadius = '12px';
              let padding = '12px 20px';
              let font = 'font-family:Inter, sans-serif;font-weight:600;font-size:24px;line-height:52.2px;';
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
              return `<div class="option-btn" data-opt="${opt}" style="${borderStyle}border-radius:${borderRadius};padding:${padding};${font}color:${color};${bg}text-align:${textAlign};${cursor}">${opt}</div>`;
            }).join('')}
          </div>
          <div class="min-h-[32px] mb-2 text-center">
            ${checked ? (correct ? '<span class="text-green-600 text-lg font-bold">¡Correcto!</span>' : `<span class="text-red-600 text-lg font-bold">Error: es ${q.answer}</span>`) : ''}
          </div>
          <button id="check-btn" class="w-full mt-2 py-4 rounded-2xl text-lg font-bold tracking-wide transition-colors duration-200 mb-2 ${selected || checked ? 'bg-[#18b6fa] text-white shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}" ${(selected || checked) ? '' : 'disabled'}>
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

  render();
}

window.renderCapitalsMode = renderCapitalsMode;
export default renderCapitalsMode; 