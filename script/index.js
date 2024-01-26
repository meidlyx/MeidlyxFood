const adres = prompt('С какого вы города?');
        if (adres) {
            const cityTab = document.getElementById('cityTab');
            const cityLink = cityTab.querySelector('a');

            
            cityLink.textContent = `Ваш город: ${adres}`;
            
            if (adres.length > 10) {
                cityLink.style.fontSize = '12px';
            }
        }