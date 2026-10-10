document.addEventListener('DOMContentLoaded', () => {
    const island = document.getElementById('top-island');
    const currentPage = window.location.pathname.split('/').pop() || 'dash.html';
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'dash.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }

        item.addEventListener('click', (event) => {
            if (href && href !== '#' && href !== currentPage) {
                event.preventDefault();//hijacking click for delayed execun
                island.classList.add('loading');
                setTimeout(() => {
                    window.location.href = href;
                }, 130);
            }
        });
    });
    //handle server pop-up
    const openSrvBtn = document.getElementById('open-srv-modal');
    const srvModal = document.getElementById('srv-modal');
    const srvCancel = document.getElementById('srv-cancel');
    const srvClose = document.getElementById('srv-close');

    function closeSrvModal() {
        if (srvModal){srvModal.classList.remove('open')};
    }

    if (openSrvBtn && srvModal) {
        openSrvBtn.addEventListener('click', () => {
            srvModal.classList.add('open');
        });
    }
    if (srvCancel) srvCancel.addEventListener('click', closeSrvModal);
    if (srvClose) srvClose.addEventListener('click', closeSrvModal);
 //handle guild pop-up
    const openGldBtn = document.getElementById('open-gld-modal');
    const openGldEmpty = document.getElementById('open-gld-modal-empty');
    const gldModal = document.getElementById('gld-modal');
    const gldCancel = document.getElementById('gld-cancel');
    const gldClose = document.getElementById('gld-close');

    function closeGldModal() {
        if (gldModal) gldModal.classList.remove('open');
    }

    if (openGldBtn && gldModal) {
        openGldBtn.addEventListener('click', () => {
            gldModal.classList.add('open');
        });
    }
    if (openGldEmpty && gldModal) {
        openGldEmpty.addEventListener('click', () => {
            gldModal.classList.add('open');
        });
    }
    if (gldCancel) gldCancel.addEventListener('click', closeGldModal);
    if (gldClose) gldClose.addEventListener('click', closeGldModal);
    //add friend mode handler
    const modeUname = document.getElementById('mode-uname');
    const modeCode = document.getElementById('mode-code');
    const frndInput = document.getElementById('frnd-input');

    if (modeUname && modeCode && frndInput) {
        modeUname.addEventListener('click', () => {
            modeUname.classList.add('active');
            modeCode.classList.remove('active');
            frndInput.placeholder = 'Enter username';
        });
        modeCode.addEventListener('click', () => {
            modeCode.classList.add('active');
            modeUname.classList.remove('active');
            frndInput.placeholder = 'Enter 8-digit friend code';
        });
    }
//copy btn gandler
    const copyCodeBtn = document.getElementById('btn-copy-code');
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('ORKC829IE').then(() => {
                copyCodeBtn.textContent = 'Copied';

                setTimeout(() => {
                    copyCodeBtn.textContent = 'Copy Code';
                }, 1800); //2nd chance
            });
        });
    }
//practice tabs hanlder
    const tabPracSub = document.getElementById('tab-prac-sub');
    const tabPracComm = document.getElementById('tab-prac-comm');
    const secPracSub = document.getElementById('sec-prac-sub');
    const secPracComm = document.getElementById('sec-prac-comm');

    if (tabPracSub && tabPracComm && secPracSub && secPracComm) {
        tabPracSub.addEventListener('click', () => {
            tabPracSub.classList.add('active');
            tabPracComm.classList.remove('active');
            secPracSub.style.display = 'block';
            secPracComm.style.display = 'none';
        });
        tabPracComm.addEventListener('click', () => {
            tabPracComm.classList.add('active');
            tabPracSub.classList.remove('active');
            secPracSub.style.display = 'none';
            secPracComm.style.display = 'block';
        });
    }
});
