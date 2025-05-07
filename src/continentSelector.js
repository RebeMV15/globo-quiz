import './style.css';

const continents = [
  { key: 'world', label: 'Todo el mundo', icon: '/World.svg' },
  { key: 'africa', label: 'África', icon: '/Africa.svg' },
  { key: 'north_america', label: 'América del Norte', icon: '/North_America.svg' },
  { key: 'south_america', label: 'América del Sur', icon: '/South_America.svg' },
  { key: 'asia', label: 'Asia', icon: '/Asia.svg' },
  { key: 'europe', label: 'Europa', icon: '/Europe.svg' },
  { key: 'oceania', label: 'Oceanía', icon: '/Oceania.svg' },
];

function renderContinentSelector() {
  let selected = [];

  function isSelected(key) {
    return selected.includes(key);
  }

  function updateContinueButton() {
    const btn = document.getElementById('continue-btn');
    if (selected.length === 0) {
      btn.classList.add('bg-gray-200', 'text-gray-400', 'cursor-not-allowed');
      btn.classList.remove('bg-[#18b6fa]', 'text-white', 'shadow-md');
      btn.disabled = true;
    } else {
      btn.classList.remove('bg-gray-200', 'text-gray-400', 'cursor-not-allowed');
      btn.classList.add('bg-[#18b6fa]', 'text-white', 'shadow-md');
      btn.disabled = false;
    }
  }

  function render() {
    document.querySelector('#app').innerHTML = `
      <div class="min-h-screen bg-white flex flex-col items-center px-4 pt-4 pb-2">
        <div class="w-full max-w-[400px]">
          <div class="flex items-center mb-2">
            <button id="back-btn" class="p-2 -ml-2">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#A3A3A3" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
            </button>
          </div>
          <h2 class="text-center text-[clamp(1.25rem,5vw,2rem)] font-bold text-gray-700 mb-6 mt-2 leading-tight">Selecciona con qué continentes quieres jugar</h2>
          <div class="flex-1 flex flex-col justify-center">
            <div class="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              ${continents.map((c, i) => `
                <div class="flex items-center px-4 py-4 ${i !== 0 ? 'border-t border-gray-200' : ''} ${isSelected(c.key) ? 'bg-blue-100 border-l-4 border-[#18b6fa]' : ''} cursor-pointer continent-row" data-key="${c.key}">
                  <img src="${c.icon}" alt="${c.label}" class="w-8 h-8 mr-4" />
                  <span class="text-lg font-semibold text-gray-700">${c.label}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <button id="continue-btn" class="w-full mt-8 py-4 rounded-2xl text-lg font-bold tracking-wide transition-colors duration-200 mb-2">CONTINUAR</button>
        </div>
      </div>
    `;
    updateContinueButton();

    // Add event listeners
    document.getElementById('back-btn').onclick = () => {
      window.renderHomePage();
    };
    document.querySelectorAll('.continent-row').forEach(row => {
      row.onclick = () => {
        const key = row.getAttribute('data-key');
        if (key === 'world') {
          if (isSelected('world')) {
            selected = [];
          } else {
            selected = ['world'];
          }
        } else {
          if (isSelected('world')) {
            selected = [];
          }
          if (isSelected(key)) {
            selected = selected.filter(k => k !== key);
          } else {
            selected.push(key);
          }
        }
        render();
      };
    });
    document.getElementById('continue-btn').onclick = () => {
      if (window.selectedMode === 'capitals') {
        if (typeof window.renderCapitalsMode === 'function') {
          window.renderCapitalsMode([...selected]);
        } else {
          alert('Capitals mode not implemented yet.');
        }
      } else if (window.selectedMode === 'flags') {
        if (typeof window.renderFlagsMode === 'function') {
          window.renderFlagsMode([...selected]);
        } else {
          alert('Flags mode not implemented yet.');
        }
      }
      // TODO: Add flags mode navigation here in the future
    };
  }

  render();
}

export default renderContinentSelector; 