let Right = function(target, fn) {
    const duration = 600;
    window.anime({
        targets: target,
        easing: 'easeInOutExpo',
        translateX: [{
            value: window.innerWidth,
            duration: duration / 2
        }, {
            value: -window.innerWidth,
            duration: 0
        }, {
            value: 0,
            duration: duration / 2
        }],
        duration: duration,
        direction: 'normal'
    });
    setTimeout(fn, duration / 2);
}

let Left = function(target, fn) {
    const duration = 600;
    window.anime({
        targets: target,
        easing: 'easeInOutExpo',
        translateX: [{
            value: window.innerWidth,
            duration: duration / 2
        }, {
            value: -window.innerWidth,
            duration: 0
        }, {
            value: 0,
            duration: duration / 2
        }],
        duration: duration,
        direction: 'reverse'
    });
    setTimeout(fn, duration / 2);
}

let Zoom = function(target) {
    document.querySelector(target).addEventListener('mouseover', () => {
        let t = target;
        window.anime({
            targets: t,
            duration: 1000,
            translateX: '-50%',
            scale: 1.5,
            direction: 'normal'
        });
    });
    document.querySelector(target).addEventListener('mouseout', () => {
        let t = target;
        window.anime({
            targets: t,
            duration: 1000,
            translateX: '-50%',
            scale: [1.5, 1],
            direction: 'normal'
        });
    });
}

let Random = function(target, fn) {
    let duration = getRandomInt(500, 1500);
    let x = getRandomInt(-300, 300);
    let y = getRandomInt(-300, 300);
    window.anime({
        targets: target,
        easing: 'easeInOutExpo',
        translateX: [x * 10, 0],
        translateY: [y * 10, 0],
        opacity: [0, 1],
        duration: duration,
        direction: 'normal'
    });
    setTimeout(fn, duration);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {
    Right,
    Left,
    Random,
    Zoom
};
