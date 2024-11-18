window.onload = () => {
    let items = document.getElementsByClassName('box-item');
    let leftBox = document.querySelector('.left-box');
    let rightBox = document.querySelector('.right-box');

    console.log(items);

    for (item of items) {
        item.addEventListener('dragstart', (e) => {
            let selected = e.target;

            rightBox.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            rightBox.addEventListener('drop', (e) => {
                rightBox.appendChild(selected);
                selected = null;
            });
        });
    }
}