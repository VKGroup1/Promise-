document.addEventListener("DOMContentLoaded", function () {
    const promises = [
        "I will always be by your side 💜",
        "I promise to make you smile every day ✨",
        "You will never feel alone, my love 💖",
        "I will cherish every moment with you ❤️",
        "Forever and always, you are my happiness 💕"
    ];

    let index = 0;
    const promiseText = document.getElementById("promise-text");

    function typePromise() {
        if (index < promises.length) {
            promiseText.innerHTML = "";
            let i = 0;
            let interval = setInterval(() => {
                if (i < promises[index].length) {
                    promiseText.innerHTML += promises[index].charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        index++;
                        typePromise();
                    }, 2000);
                }
            }, 100);
        }
    }

    window.startMagic = function () {
        document.getElementById("bg-music").play();
        typePromise();
    };
});
