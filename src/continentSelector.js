import './style.css';

// Import images
import worldSvg from '../public/World.svg';
import africaSvg from '../public/Africa.svg';
import southAmericaSvg from '../public/South_America.svg';
import asiaSvg from '../public/Asia.svg';
import europeSvg from '../public/Europe.svg';
import oceaniaSvg from '../public/Oceania.svg';

const continents = [
  { key: 'world', label: 'Todo el mundo', icon: worldSvg },
  { key: 'africa', label: 'África', icon: africaSvg },
  { key: 'america', label: 'América', icon: southAmericaSvg },
  { key: 'asia', label: 'Asia', icon: asiaSvg },
  { key: 'europe', label: 'Europa', icon: europeSvg },
  { key: 'oceania', label: 'Oceanía', icon: oceaniaSvg },
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
              ${continents.map((c, i) => `
                <div class="flex items-center px-4 py-3 ${i !== 0 ? 'border-t border-gray-200' : ''} ${isSelected(c.key) ? 'bg-blue-100 border-l-4 border-[#18b6fa]' : ''} cursor-pointer continent-row" data-key="${c.key}">
                  <img src="${c.icon}" alt="${c.label}" class="w-7 h-7 mr-3" />
                  <span class="text-base font-semibold text-gray-700">${c.label}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <button id="continue-btn" class="w-full py-3 rounded-2xl text-lg font-bold tracking-wide transition-colors duration-200 mt-2">CONTINUAR</button>
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