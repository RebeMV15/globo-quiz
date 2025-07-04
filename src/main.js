import renderContinentSelector from './continentSelector.js';
import renderCapitalsMode from './capitalsMode.js';
import renderFlagsMode from './flagsMode.js';

function renderHomePage() {
  document.querySelector('#app').innerHTML = `
    <div class="h-screen flex flex-col items-center justify-between bg-[#25305a] px-3 py-3">
      <header class="w-full flex flex-col items-center">
        <h1 class="text-3xl font-extrabold text-[#6ee900] font-[Quicksand,sans-serif] mb-1" style="letter-spacing: -1px;">Globo Quiz</h1>
        <p class="text-white text-base font-medium">Aventura mundial de Geografía</p>
      </header>
      <img src="/globo-quiz-globe.gif" alt="Globo animado" class="w-auto h-[40vh] max-h-[300px] object-contain" />
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
  `;

  document.getElementById('mode-capitales').onclick = () => {
    window.selectedMode = 'capitals';
    renderContinentSelector();
  };
  document.getElementById('mode-banderas').onclick = () => {
    window.selectedMode = 'flags';
    renderContinentSelector();
  };
}

window.renderHomePage = renderHomePage;
window.renderCapitalsMode = renderCapitalsMode;
window.renderFlagsMode = renderFlagsMode;
renderHomePage(); 