const adres = prompt('С какого вы города?');
        if (adres) {
            const cityTab = document.getElementById('cityTab');
            const cityLink = cityTab.querySelector('a');

             // Установим текст во вкладке "Ваш город"
            cityLink.textContent = `Ваш город: ${adres}`;
            
            // Уменьшим размер шрифта, если текст слишком длинный
            if (adres.length > 10) {
                cityLink.style.fontSize = '12px';
            }
        }