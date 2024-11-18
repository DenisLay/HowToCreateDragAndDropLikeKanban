window.onload = () => {
    let items = document.getElementsByClassName('box-item');
    let leftBox = document.querySelector('.left-box');
    let rightBox = document.querySelector('.right-box');
    container = document.querySelector('.container');
    blurScreen = document.querySelector('.blur-screen');
    modalWindow = document.querySelector('.modal-window');
    holdTime = 200;
    blockModal = false;

    for (item of items) {
        item.addEventListener('dragstart', (e) => {
            let selected = e.target;
            blockModal = true;

            rightBox.addEventListener('dragover', (e) => {
                e.preventDefault();
                blockModal = true;
            });

            leftBox.addEventListener('dragover', (e) => {
                e.preventDefault();
                blockModal = true;
            });

            rightBox.addEventListener('drop', (e) => {
                rightBox.appendChild(selected);
                selected = null;
                blockModal = false;
            });

            leftBox.addEventListener('drop', (e) => {
                leftBox.appendChild(selected);
                selected = null;
                blockModal = false;
            });
        });

        let clickTimer;

        item.addEventListener('mousedown', (e) => {
            if (!blockModal) {
                const clearTimer = () => {
                    clearTimeout(clickTimer);
                }
    
                clickTimer = setTimeout(() => {
                    openModal();
                    showBlur();
                }, holdTime);
    
                document.addEventListener('mouseup', clearTimer, {once: true});
                document.addEventListener('mouseleave', clearTimer, {once: true});
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalWindow.classList.contains('active')) {
                closeModal();
                hideBlur();
            }
        }
    });
}

function showBlur() {
    blurScreen.classList.add('active');
}

function hideBlur() {
    blurScreen.classList.remove('active');
}

function openModal() {
    modalWindow.classList.add('active');
}

function closeModal() {
    modalWindow.classList.add('hide');

    setTimeout(() => {
        modalWindow.classList.remove('hide');
        modalWindow.classList.remove('active');
    }, holdTime);
}