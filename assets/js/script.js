    let darkMode = localStorage.getItem('darkMode');
    const dark = document.getElementById('dark')
    const paginaDark = document.getElementById('container');


    const habilitarDarkMode = () => {

        paginaDark.classList.add('dark');
        localStorage.setItem('darkMode', 'habilitado');
    }
    const desabilitarDarkMode = () => {
        paginaDark.classList.remove('dark');
        localStorage.setItem('darkMode', null);
    }
    if (darkMode === 'habilitado') {
        habilitarDarkMode();
    }
    dark.addEventListener('click', () => {
        let darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'habilitado') {
            habilitarDarkMode();
        } else {
            desabilitarDarkMode();
        }
    })