// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let picture = 0;
    let img = document.querySelector('figure img');

    document.getElementById('next').addEventListener('click', () => {

        img.src = gallery[picture + 1];
        picture++;
        if(picture === gallery.length - 1) {
            picture = -1;
        }
    });

})();