const mona = document.getElementById("mona");
const tuea = document.getElementById("tuea");
const weda = document.getElementById("weda");
const thua = document.getElementById("thua");
const fria = document.getElementById("fria");

const monb = document.getElementById("monb");
const tueb = document.getElementById("tueb");
const wedb = document.getElementById("wedb");
const thub = document.getElementById("thub");
const frib = document.getElementById("frib");

const text1 = document.getElementById("text1");

const days = document.getElementById("days");
const listdays = days.querySelectorAll("mona, tuea, weda, thua, fria");
const textArea = document.getElementById("textarea");

mona.addEventListener('click', () => {
    box1.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[1].t1}`;
            textafter2.textContent = `${classes[1].p1}`;
            textafter3.textContent = `${classes[1].RN1}`;
            textafter1.style.animation = 'Textapp 4000ms';
            textafter2.style.animation = 'Textapp 4000ms';
            textafter3.style.animation = 'Textapp 4000ms';

        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box2.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[1].t2}`;
            textafter2.textContent = `${classes[1].p2}`;
            textafter3.textContent = `${classes[1].RN2}`;
            textafter1.style.animation = 'Textapp 4000ms';
            textafter2.style.animation = 'Textapp 4000ms';
            textafter3.style.animation = 'Textapp 4000ms';

        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box3.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[1].t3}`;
            textafter2.textContent = `${classes[1].p3}`;
            textafter3.textContent = `${classes[1].RN3}`;
            textafter1.style.animation = 'Textapp 4000ms';
            textafter2.style.animation = 'Textapp 4000ms';
            textafter3.style.animation = 'Textapp 4000ms';

        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box4.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[1].t4}`;
            textafter2.textContent = `${classes[1].p4}`;
            textafter3.textContent = `${classes[1].RN4}`;
            textafter1.style.animation = 'Textapp 4000ms';
            textafter2.style.animation = 'Textapp 4000ms';
            textafter3.style.animation = 'Textapp 4000ms';

        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box5.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[1].t5}`;
            textafter2.textContent = `${classes[1].p5}`;
            textafter3.textContent = `${classes[1].RN5}`;
            textafter1.style.animation = 'Textapp 4000ms';
            textafter2.style.animation = 'Textapp 4000ms';
            textafter3.style.animation = 'Textapp 4000ms';

        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    text1.textContent = `${classes[1].p1}`;
    text2.textContent = `${classes[1].p2}`;
    text3.textContent = `${classes[1].p3}`;
    text4.textContent = `${classes[1].p4}`;
    text5.textContent = `${classes[1].p5}`;
    result.textContent = `${classes[1].day}`;
})
tuea.addEventListener('click', () => {
    box1.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[2].t1}`;
            textafter2.textContent = `${classes[2].p1}`;
            textafter3.textContent = `${classes[2].RN1}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box2.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[2].t2}`;
            textafter2.textContent = `${classes[2].p2}`;
            textafter3.textContent = `${classes[2].RN2}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box3.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[2].t3}`;
            textafter2.textContent = `${classes[2].p3}`;
            textafter3.textContent = `${classes[2].RN3}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box4.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[2].t4}`;
            textafter2.textContent = `${classes[2].p4}`;
            textafter3.textContent = `${classes[2].RN4}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box5.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[2].t5}`;
            textafter2.textContent = `${classes[2].p5}`;
            textafter3.textContent = `${classes[2].RN5}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    text1.textContent = `${classes[2].p1}`;
    text2.textContent = `${classes[2].p2}`;
    text3.textContent = `${classes[2].p3}`;
    text4.textContent = `${classes[2].p4}`;
    text5.textContent = `${classes[2].p5}`;
    result.textContent = `${classes[2].day}`;
})
weda.addEventListener('click', () => {
    box1.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[3].t1}`;
            textafter2.textContent = `${classes[3].p1}`;
            textafter3.textContent = `${classes[3].RN1}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box2.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[3].t2}`;
            textafter2.textContent = `${classes[3].p2}`;
            textafter3.textContent = `${classes[3].RN2}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box3.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[3].t3}`;
            textafter2.textContent = `${classes[3].p3}`;
            textafter3.textContent = `${classes[3].RN3}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box4.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[3].t4}`;
            textafter2.textContent = `${classes[3].p4}`;
            textafter3.textContent = `${classes[3].RN4}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box5.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[3].t5}`;
            textafter2.textContent = `${classes[3].p5}`;
            textafter3.textContent = `${classes[3].RN5}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    text1.textContent = `${classes[3].p1}`;
    text2.textContent = `${classes[3].p2}`;
    text3.textContent = `${classes[3].p3}`;
    text4.textContent = `${classes[3].p4}`;
    text5.textContent = `${classes[3].p5}`;
    result.textContent = `${classes[3].day}`;
})
thua.addEventListener('click', () => {
    box1.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[4].t1}`;
            textafter2.textContent = `${classes[4].p1}`;
            textafter3.textContent = `${classes[4].RN1}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box2.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[4].t2}`;
            textafter2.textContent = `${classes[4].p2}`;
            textafter3.textContent = `${classes[4].RN2}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box3.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[4].t3}`;
            textafter2.textContent = `${classes[4].p3}`;
            textafter3.textContent = `${classes[4].RN3}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box4.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[4].t4}`;
            textafter2.textContent = `${classes[4].p4}`;
            textafter3.textContent = `${classes[4].RN4}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box5.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[4].t5}`;
            textafter2.textContent = `${classes[4].p5}`;
            textafter3.textContent = `${classes[4].RN5}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    text1.textContent = `${classes[4].p1}`;
    text2.textContent = `${classes[4].p2}`;
    text3.textContent = `${classes[4].p3}`;
    text4.textContent = `${classes[4].p4}`;
    text5.textContent = `${classes[4].p5}`;
    result.textContent = `${classes[4].day}`;
})
fria.addEventListener('click', () => {
    box1.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[5].t1}`;
            textafter2.textContent = `${classes[5].p1}`;
            textafter3.textContent = `${classes[5].RN1}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box2.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[5].t2}`;
            textafter2.textContent = `${classes[5].p2}`;
            textafter3.textContent = `${classes[5].RN2}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box3.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[5].t3}`;
            textafter2.textContent = `${classes[5].p3}`;
            textafter3.textContent = `${classes[5].RN3}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box4.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[5].t4}`;
            textafter2.textContent = `${classes[5].p4}`;
            textafter3.textContent = `${classes[5].RN4}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box5.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[5].t5}`;
            textafter2.textContent = `${classes[5].p5}`;
            textafter3.textContent = `${classes[5].RN5}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    text1.textContent = `${classes[5].p1}`;
    text2.textContent = `${classes[5].p2}`;
    text3.textContent = `${classes[5].p3}`;
    text4.textContent = `${classes[5].p4}`;
    text5.textContent = `${classes[5].p5}`;
    result.textContent = `${classes[5].day}`;
})

monb.addEventListener('click', () => {
    box1.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[6].t1}`;
            textafter2.textContent = `${classes[6].p1}`;
            textafter3.textContent = `${classes[6].RN1}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box2.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[6].t2}`;
            textafter2.textContent = `${classes[6].p2}`;
            textafter3.textContent = `${classes[6].RN2}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box3.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[6].t3}`;
            textafter2.textContent = `${classes[6].p3}`;
            textafter3.textContent = `${classes[6].RN3}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box4.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[6].t4}`;
            textafter2.textContent = `${classes[6].p4}`;
            textafter3.textContent = `${classes[6].RN4}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box5.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[6].t5}`;
            textafter2.textContent = `${classes[6].p5}`;
            textafter3.textContent = `${classes[6].RN5}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    text1.textContent = `${classes[6].p1}`;
    text2.textContent = `${classes[6].p2}`;
    text3.textContent = `${classes[6].p3}`;
    text4.textContent = `${classes[6].p4}`;
    text5.textContent = `${classes[6].p5}`;
    result.textContent = `${classes[6].day}`;
})
tueb.addEventListener('click', () => {
    box1.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[7].t1}`;
            textafter2.textContent = `${classes[7].p1}`;
            textafter3.textContent = `${classes[7].RN1}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box2.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[7].t2}`;
            textafter2.textContent = `${classes[7].p2}`;
            textafter3.textContent = `${classes[7].RN2}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box3.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[7].t3}`;
            textafter2.textContent = `${classes[7].p3}`;
            textafter3.textContent = `${classes[7].RN3}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box4.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[7].t4}`;
            textafter2.textContent = `${classes[7].p4}`;
            textafter3.textContent = `${classes[7].RN4}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box5.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[7].t5}`;
            textafter2.textContent = `${classes[7].p5}`;
            textafter3.textContent = `${classes[7].RN5}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    text1.textContent = `${classes[7].p1}`;
    text2.textContent = `${classes[7].p2}`;
    text3.textContent = `${classes[7].p3}`;
    text4.textContent = `${classes[7].p4}`;
    text5.textContent = `${classes[7].p5}`;
    result.textContent = `${classes[7].day}`;
})
wedb.addEventListener('click', () => {
    box1.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[8].t1}`;
            textafter2.textContent = `${classes[8].p1}`;
            textafter3.textContent = `${classes[8].RN1}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box2.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[8].t2}`;
            textafter2.textContent = `${classes[8].p2}`;
            textafter3.textContent = `${classes[8].RN2}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box3.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[8].t3}`;
            textafter2.textContent = `${classes[8].p3}`;
            textafter3.textContent = `${classes[8].RN3}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box4.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[8].t4}`;
            textafter2.textContent = `${classes[8].p4}`;
            textafter3.textContent = `${classes[8].RN4}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box5.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[8].t5}`;
            textafter2.textContent = `${classes[8].p5}`;
            textafter3.textContent = `${classes[8].RN5}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    text1.textContent = `${classes[8].p1}`;
    text2.textContent = `${classes[8].p2}`;
    text3.textContent = `${classes[8].p3}`;
    text4.textContent = `${classes[8].p4}`;
    text5.textContent = `${classes[8].p5}`;
    result.textContent = `${classes[8].day}`;
})
thub.addEventListener('click', () => {
    box1.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[9].t1}`;
            textafter2.textContent = `${classes[9].p1}`;
            textafter3.textContent = `${classes[9].RN1}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box2.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[9].t2}`;
            textafter2.textContent = `${classes[9].p2}`;
            textafter3.textContent = `${classes[9].RN2}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box3.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[9].t3}`;
            textafter2.textContent = `${classes[9].p3}`;
            textafter3.textContent = `${classes[9].RN3}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box4.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[9].t4}`;
            textafter2.textContent = `${classes[9].p4}`;
            textafter3.textContent = `${classes[9].RN4}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box5.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[9].t5}`;
            textafter2.textContent = `${classes[9].p5}`;
            textafter3.textContent = `${classes[9].RN5}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    text1.textContent = `${classes[9].p1}`;
    text2.textContent = `${classes[9].p2}`;
    text3.textContent = `${classes[9].p3}`;
    text4.textContent = `${classes[9].p4}`;
    text5.textContent = `${classes[9].p5}`;
    result.textContent = `${classes[9].day}`;
})
frib.addEventListener('click', () => {
    box1.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[10].t1}`;
            textafter2.textContent = `${classes[10].p1}`;
            textafter3.textContent = `${classes[10].RN1}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box2.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[10].t2}`;
            textafter2.textContent = `${classes[10].p2}`;
            textafter3.textContent = `${classes[10].RN2}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box3.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[10].t3}`;
            textafter2.textContent = `${classes[10].p3}`;
            textafter3.textContent = `${classes[10].RN3}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box4.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[10].t4}`;
            textafter2.textContent = `${classes[10].p4}`;
            textafter3.textContent = `${classes[10].RN4}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    box5.addEventListener('change', e => {
        if (e.target.checked === true){
            textafter1.textContent = `${classes[10].t5}`;
            textafter2.textContent = `${classes[10].p5}`;
            textafter3.textContent = `${classes[10].RN5}`;
        }
        if (e.target.checked === false){
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
        }
    })
    text1.textContent = `${classes[10].p1}`;
    text2.textContent = `${classes[10].p2}`;
    text3.textContent = `${classes[10].p3}`;
    text4.textContent = `${classes[10].p4}`;
    text5.textContent = `${classes[10].p5}`
    result.textContent = `${classes[10].day}`;;
})

function checkInput() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var result = document.getElementById("result");
    var texts1 = document.getElementById("texts11");
    var texts2 = document.getElementById("texts12");
    var texts3 = document.getElementById("texts13");
    var texts4 = document.getElementById("texts14");
    var texts5 = document.getElementById("texts15");
    var boxs1 = document.getElementById("boxs11");
    var boxs2 = document.getElementById("boxs12");
    var boxs3 = document.getElementById("boxs13");
    var boxs4 = document.getElementById("boxs14");
    var boxs5 = document.getElementById("boxs15");

    var weeka = document.getElementById("weekA");
    var weekb = document.getElementById("weekB");

    var box3s = document.getElementById("box3s");

    if (searchInput === "history") {
        texts1.style.backgroundColor = 'red';
        texts4.style.backgroundColor = 'red';
        texts1.style.left = '544px';
        texts4.style.left = '484px';

        texts1.style.animation = 'Textrtt 1000ms';
        texts4.style.animation = 'Textrtt 1000ms';
    }
        else if (searchInput === "maths") {
            texts2.style.backgroundColor = 'red';
            texts2.style.left = '574px';
            texts3.style.backgroundColor = 'red';
            texts3.style.left = '604px';
            texts4.style.backgroundColor = 'red';
            texts4.style.left = '514px';

            texts2.style.animation = 'Textrtt 1000ms';
            texts3.style.animation = 'Textrtt 1000ms';
            texts4.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "english") {
            texts1.style.backgroundColor = 'red';
            texts1.style.left = '574px';
            texts2.style.backgroundColor = 'red';
            texts2.style.left = '514px';
            texts3.style.backgroundColor = 'red';
            texts3.style.left = '514px';
            texts5.style.backgroundColor = 'red';
            texts5.style.left = '514px';

            texts1.style.animation = 'Textrtt 1000ms';
            texts2.style.animation = 'Textrtt 1000ms';
            texts3.style.animation = 'Textrtt 1000ms';
            texts5.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "physics") {
            texts2.style.backgroundColor = 'red';
            texts2.style.left = '484px';
            texts4.style.backgroundColor = 'red';
            texts4.style.left = '544px';

            texts2.style.animation = 'Textrtt 1000ms';
            texts4.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "biology") {
            texts2.style.backgroundColor = 'red';
            texts2.style.left = '604px';
            texts4.style.backgroundColor = 'red';
            texts4.style.left = '604px';

            texts2.style.animation = 'Textrtt 1000ms';
            texts4.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "chemistry") {
            texts1.style.backgroundColor = 'red';
            texts1.style.left = '484px';
            texts3.style.backgroundColor = 'red';
            texts3.style.left = '574px';

            texts1.style.animation = 'Textrtt 1000ms';
            texts3.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "business") {
            texts1.style.backgroundColor = 'red';
            texts1.style.left = '514px';
            texts3.style.backgroundColor = 'red';
            texts3.style.left = '544px';
            texts4.style.backgroundColor = 'red';
            texts4.style.left = '574px';

            texts1.style.animation = 'Textrtt 1000ms';
            texts3.style.animation = 'Textrtt 1000ms';
            texts4.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "cs") {
            texts1.style.backgroundColor = 'red';
            texts1.style.left = '604px';
            texts3.style.backgroundColor = 'red';
            texts3.style.left = '484px';
            texts5.style.backgroundColor = 'red';
            texts5.style.left = '544px';

            texts1.style.animation = 'Textrtt 1000ms';
            texts3.style.animation = 'Textrtt 1000ms';
            texts5.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "art") {
            texts2.style.backgroundColor = 'red';
            texts2.style.left = '544px';
            texts5.style.backgroundColor = 'red';
            texts5.style.left = '484px';

            texts2.style.animation = 'Textrtt 1000ms';
            texts5.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "") {
                boxs1.style.outline = "0px";
                boxs2.style.outline = "0px";
                boxs3.style.outline = "0px";
                boxs4.style.outline = "0px";
                boxs5.style.outline = "0px";  

                box3s.style.left = '381px';
                box3s.style.width = '75px';
                box3s.style.height = '150px';
                box3s.style.borderRadius = '15px';
                box3s.style.top = '453px';
                box3s.style.zIndex = '1';
                box3s.style.outline = '3px solid lightgray'
                box3s.style.animation = 'Morphzaa 1000ms'

                box1.style.left = '';
                box1.style.top = '';
                box1.style.width = '';
                box1.style.height = '';
                box1.style.borderRadius = '';
                box1.style.opacity = '';
                box1.style.animation = '';

                box2.style.left = '';
                box2.style.top = '';
                box2.style.width = '';
                box2.style.height = '';
                box2.style.borderRadius = '';
                box2.style.opacity = '';
                box2.style.animation = '';

                box3.style.left = '';
                box3.style.top = '';
                box3.style.width = '';
                box3.style.height = '';
                box3.style.borderRadius = '';
                box3.style.opacity = '';
                box3.style.animation = '';

                box4.style.left = '';
                box4.style.top = '';
                box4.style.width = '';
                box4.style.height = '';
                box4.style.borderRadius = '';
                box4.style.opacity = '';
                box4.style.animation = '';

                box5.style.left = '';
                box5.style.top = '';
                box5.style.width = '';
                box5.style.height = '';
                box5.style.borderRadius = '';
                box5.style.opacity = '';
                box5.style.animation = '';

                texts1.style.animation = 'Textrff 1000ms';
                texts2.style.animation = 'Textrff 1000ms';
                texts3.style.animation = 'Textrff 1000ms';
                texts4.style.animation = 'Textrff 1000ms';
                texts5.style.animation = 'Textrff 1000ms';

                boxs1.style.animation = 'boxf 100ms';
                boxs2.style.animation = 'boxf 100ms';
                boxs3.style.animation = 'boxf 100ms';
                boxs4.style.animation = 'boxf 100ms';
                boxs5.style.animation = 'boxf 100ms';
             }
     else {
        texts1.style.backgroundColor = 'white';
        texts2.style.backgroundColor = 'white';
        texts3.style.backgroundColor = 'white';
        texts4.style.backgroundColor = 'white';
        texts5.style.backgroundColor = 'white';

        boxs1.style.outline = "2px solid gray";
        boxs2.style.outline = "2px solid gray";
        boxs3.style.outline = "2px solid gray";
        boxs4.style.outline = "2px solid gray";
        boxs5.style.outline = "2px solid gray";  

        textafter1.textContent = ``;
        textafter2.textContent = ``;
        textafter3.textContent = ``;
        textafter1.style.animation = 'Textbpp 2000ms';
        textafter2.style.animation = 'Textbpp 2000ms';
        textafter3.style.animation = 'Textbpp 2000ms';

        box3s.style.left = '460px';
        box3s.style.width = '190px';
        box3s.style.height = '250px';
        box3s.style.borderRadius = '25px';
        box3s.style.top = '55px';
        box3s.style.outline = '3px solid black'
        box3s.style.zIndex = '2';
        box3s.style.animation = 'Morphza 1000ms'

        box1.style.left = '180px';
        box1.style.top = '450px';
        box1.style.width = '75px';
        box1.style.height = '150px';
        box1.style.borderRadius = '15px';
        box1.style.opacity = '0.1';
        box1.style.animation = 'Morphaa 1000ms';

        box2.style.left = '280px';
        box2.style.top = '450px';
        box2.style.width = '75px';
        box2.style.height = '150px';
        box2.style.borderRadius = '15px';
        box2.style.opacity = '0.1';
        box2.style.animation = 'Morphaa 1000ms';

        box3.style.left = '380px';
        box3.style.top = '450px';
        box3.style.width = '75px';
        box3.style.height = '150px';
        box3.style.borderRadius = '15px';
        box3.style.opacity = '0.1';
        box3.style.animation = 'Morphaa 1000ms';

        box4.style.left = '480px';
        box4.style.top = '450px';
        box4.style.width = '75px';
        box4.style.height = '150px';
        box4.style.borderRadius = '15px';
        box4.style.opacity = '0.1';
        box4.style.animation = 'Morphaa 1000ms';

        box5.style.left = '580px';
        box5.style.top = '450px';
        box5.style.width = '75px';
        box5.style.height = '150px';
        box5.style.borderRadius = '15px';
        box5.style.opacity = '0.1';
        box5.style.animation = 'Morphaa 1000ms';


        texts1.style.animation = 'Textrff 1000ms';
        texts2.style.animation = 'Textrff 1000ms';
        texts3.style.animation = 'Textrff 1000ms';
        texts4.style.animation = 'Textrff 1000ms';
        texts5.style.animation = 'Textrff 1000ms';

        boxs1.style.animation = 'boxt 1000ms';
        boxs2.style.animation = 'boxt 1000ms';
        boxs3.style.animation = 'boxt 1000ms';
        boxs4.style.animation = 'boxt 1000ms';
        boxs5.style.animation = 'boxt 1000ms';

    }
    weekb.addEventListener("click", () => {
        if (searchInput === "history") {
            texts2.style.backgroundColor = 'red';
            texts3.style.backgroundColor = 'red';
            texts5.style.backgroundColor = 'red';
            texts2.style.left = '544px';
            texts3.style.left = '604px';
            texts5.style.left = '484px';
        }
            else if (searchInput === "maths") {
                texts2.style.backgroundColor = 'red';
                texts2.style.left = '604px';
                texts3.style.backgroundColor = 'red';
                texts3.style.left = '574px';
                texts4.style.backgroundColor = 'red';
                texts4.style.left = '484px';
                texts5.style.backgroundColor = 'red';
                texts5.style.left = '544px';
                }
            else if (searchInput === "english") {
                texts1.style.backgroundColor = 'red';
                texts1.style.left = '604px';
                texts2.style.backgroundColor = 'red';
                texts2.style.left = '574px';
                texts4.style.backgroundColor = 'red';
                texts4.style.left = '514px';
                texts5.style.backgroundColor = 'red';
                texts5.style.left = '604px';
                }
            else if (searchInput === "physics") {
                texts2.style.backgroundColor = 'red';
                texts2.style.left = '484px';
                texts3.style.backgroundColor = 'red';
                texts3.style.left = '4844px';
                }
            else if (searchInput === "biology") {
                texts1.style.backgroundColor = 'red';
                texts1.style.left = '514px';
                texts4.style.backgroundColor = 'red';
                texts4.style.left = '574px';
                }
            else if (searchInput === "chemistry") {
                texts1.style.backgroundColor = 'red';
                texts1.style.left = '574px';
                texts3.style.backgroundColor = 'red';
                texts3.style.left = '544px';
                }
            else if (searchInput === "business") {
                texts1.style.backgroundColor = 'red';
                texts1.style.left = '484px';
                texts4.style.backgroundColor = 'red';
                texts4.style.left = '604px';
                }
            else if (searchInput === "cs") {
                texts1.style.backgroundColor = 'red';
                texts1.style.left = '544px';
                texts3.style.backgroundColor = 'red';
                texts3.style.left = '514px';
                }
            else if (searchInput === "art") {
                texts2.style.backgroundColor = 'red';
                texts2.style.left = '514px';
                texts4.style.backgroundColor = 'red';
                texts4.style.left = '544px';
                texts5.style.backgroundColor = 'red';
                texts5.style.left = '574px';
                }
            else if (searchInput === "") {
                    boxs1.style.outline = "0px";
                    boxs2.style.outline = "0px";
                    boxs3.style.outline = "0px";
                    boxs4.style.outline = "0px";
                    boxs5.style.outline = "0px";  
    
                    box3s.style.left = '381px';
                    box3s.style.width = '75px';
                    box3s.style.height = '150px';
                    box3s.style.borderRadius = '15px';
                    box3s.style.top = '453px';
                    box3s.style.zIndex = '1';
                    box3s.style.outline = '3px solid lightgray'
                    box3s.style.animation = 'Morphzaa 1000ms'
    
                    box1.style.left = '';
                    box1.style.top = '';
                    box1.style.width = '';
                    box1.style.height = '';
                    box1.style.borderRadius = '';
                    box1.style.opacity = '';
                    box1.style.animation = '';
    
                    texts1.style.animation = '';
                    texts2.style.animation = '';
                    texts3.style.animation = '';
                    texts4.style.animation = '';
                    texts5.style.animation = '';
    
                    boxs1.style.animation = 'boxf 100ms';
                    boxs2.style.animation = 'boxf 100ms';
                    boxs3.style.animation = 'boxf 100ms';
                    boxs4.style.animation = 'boxf 100ms';
                    boxs5.style.animation = 'boxf 100ms';
                 }
         else {
            texts1.style.backgroundColor = 'white';
            texts2.style.backgroundColor = 'white';
            texts3.style.backgroundColor = 'white';
            texts4.style.backgroundColor = 'white';
            texts5.style.backgroundColor = 'white';
    
            boxs1.style.outline = "2px solid gray";
            boxs2.style.outline = "2px solid gray";
            boxs3.style.outline = "2px solid gray";
            boxs4.style.outline = "2px solid gray";
            boxs5.style.outline = "2px solid gray";  
    
            textafter1.textContent = ``;
            textafter2.textContent = ``;
            textafter3.textContent = ``;
            textafter1.style.animation = 'Textbpp 2000ms';
            textafter2.style.animation = 'Textbpp 2000ms';
            textafter3.style.animation = 'Textbpp 2000ms';
    
            box3s.style.left = '460px';
            box3s.style.width = '190px';
            box3s.style.height = '250px';
            box3s.style.borderRadius = '25px';
            box3s.style.top = '55px';
            box3s.style.outline = '3px solid black'
            box3s.style.zIndex = '2';
            box3s.style.animation = 'Morphza 1000ms'
    
            box1.style.left = '180px';
            box1.style.top = '450px';
            box1.style.width = '75px';
            box1.style.height = '150px';
            box1.style.borderRadius = '15px';
            box1.style.opacity = '0.1';
            box1.style.animation = 'Morphaa 1000ms';
    
            texts1.style.animation = '';
            texts2.style.animation = '';
            texts3.style.animation = '';
            texts4.style.animation = '';
            texts5.style.animation = '';
    
            boxs1.style.animation = 'boxt 1000ms';
            boxs2.style.animation = 'boxt 1000ms';
            boxs3.style.animation = 'boxt 1000ms';
            boxs4.style.animation = 'boxt 1000ms';
            boxs5.style.animation = 'boxt 1000ms';
    
        }
    })
weeka.addEventListener('click', () => {
    if (searchInput === "history") {
        texts1.style.backgroundColor = 'red';
        texts4.style.backgroundColor = 'red';
        texts1.style.left = '544px';
        texts4.style.left = '484px';

        texts1.style.animation = 'Textrtt 1000ms';
        texts4.style.animation = 'Textrtt 1000ms';
    }
        else if (searchInput === "maths") {
            texts2.style.backgroundColor = 'red';
            texts2.style.left = '574px';
            texts3.style.backgroundColor = 'red';
            texts3.style.left = '604px';
            texts4.style.backgroundColor = 'red';
            texts4.style.left = '514px';

            texts2.style.animation = 'Textrtt 1000ms';
            texts3.style.animation = 'Textrtt 1000ms';
            texts4.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "english") {
            texts1.style.backgroundColor = 'red';
            texts1.style.left = '574px';
            texts2.style.backgroundColor = 'red';
            texts2.style.left = '514px';
            texts3.style.backgroundColor = 'red';
            texts3.style.left = '514px';
            texts5.style.backgroundColor = 'red';
            texts5.style.left = '514px';

            texts1.style.animation = 'Textrtt 1000ms';
            texts2.style.animation = 'Textrtt 1000ms';
            texts3.style.animation = 'Textrtt 1000ms';
            texts5.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "physics") {
            texts2.style.backgroundColor = 'red';
            texts2.style.left = '484px';
            texts4.style.backgroundColor = 'red';
            texts4.style.left = '544px';

            texts2.style.animation = 'Textrtt 1000ms';
            texts4.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "biology") {
            texts2.style.backgroundColor = 'red';
            texts2.style.left = '604px';
            texts4.style.backgroundColor = 'red';
            texts4.style.left = '604px';

            texts2.style.animation = 'Textrtt 1000ms';
            texts4.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "chemistry") {
            texts1.style.backgroundColor = 'red';
            texts1.style.left = '484px';
            texts3.style.backgroundColor = 'red';
            texts3.style.left = '574px';

            texts1.style.animation = 'Textrtt 1000ms';
            texts3.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "business") {
            texts1.style.backgroundColor = 'red';
            texts1.style.left = '514px';
            texts3.style.backgroundColor = 'red';
            texts3.style.left = '544px';
            texts4.style.backgroundColor = 'red';
            texts4.style.left = '574px';

            texts1.style.animation = 'Textrtt 1000ms';
            texts3.style.animation = 'Textrtt 1000ms';
            texts4.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "cs") {
            texts1.style.backgroundColor = 'red';
            texts1.style.left = '604px';
            texts3.style.backgroundColor = 'red';
            texts3.style.left = '484px';
            texts5.style.backgroundColor = 'red';
            texts5.style.left = '544px';

            texts1.style.animation = 'Textrtt 1000ms';
            texts3.style.animation = 'Textrtt 1000ms';
            texts5.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "art") {
            texts2.style.backgroundColor = 'red';
            texts2.style.left = '544px';
            texts5.style.backgroundColor = 'red';
            texts5.style.left = '484px';

            texts2.style.animation = 'Textrtt 1000ms';
            texts5.style.animation = 'Textrtt 1000ms';
            }
        else if (searchInput === "") {
                boxs1.style.outline = "0px";
                boxs2.style.outline = "0px";
                boxs3.style.outline = "0px";
                boxs4.style.outline = "0px";
                boxs5.style.outline = "0px";  

                box3s.style.left = '381px';
                box3s.style.width = '75px';
                box3s.style.height = '150px';
                box3s.style.borderRadius = '15px';
                box3s.style.top = '453px';
                box3s.style.zIndex = '1';
                box3s.style.outline = '3px solid lightgray'
                box3s.style.animation = 'Morphzaa 1000ms'

                box1.style.left = '';
                box1.style.top = '';
                box1.style.width = '';
                box1.style.height = '';
                box1.style.borderRadius = '';
                box1.style.opacity = '';
                box1.style.animation = '';

                box2.style.left = '';
                box2.style.top = '';
                box2.style.width = '';
                box2.style.height = '';
                box2.style.borderRadius = '';
                box2.style.opacity = '';
                box2.style.animation = '';

                box3.style.left = '';
                box3.style.top = '';
                box3.style.width = '';
                box3.style.height = '';
                box3.style.borderRadius = '';
                box3.style.opacity = '';
                box3.style.animation = '';

                box4.style.left = '';
                box4.style.top = '';
                box4.style.width = '';
                box4.style.height = '';
                box4.style.borderRadius = '';
                box4.style.opacity = '';
                box4.style.animation = '';

                box5.style.left = '';
                box5.style.top = '';
                box5.style.width = '';
                box5.style.height = '';
                box5.style.borderRadius = '';
                box5.style.opacity = '';
                box5.style.animation = '';

                texts1.style.animation = '';
                texts2.style.animation = '';
                texts3.style.animation = '';
                texts4.style.animation = '';
                texts5.style.animation = '';
                
                boxs1.style.animation = 'boxf 100ms';
                boxs2.style.animation = 'boxf 100ms';
                boxs3.style.animation = 'boxf 100ms';
                boxs4.style.animation = 'boxf 100ms';
                boxs5.style.animation = 'boxf 100ms';
             }
     else {
        texts1.style.backgroundColor = 'white';
        texts2.style.backgroundColor = 'white';
        texts3.style.backgroundColor = 'white';
        texts4.style.backgroundColor = 'white';
        texts5.style.backgroundColor = 'white';

        boxs1.style.outline = "2px solid gray";
        boxs2.style.outline = "2px solid gray";
        boxs3.style.outline = "2px solid gray";
        boxs4.style.outline = "2px solid gray";
        boxs5.style.outline = "2px solid gray";  

        textafter1.textContent = ``;
        textafter2.textContent = ``;
        textafter3.textContent = ``;
        textafter1.style.animation = 'Textbpp 2000ms';
        textafter2.style.animation = 'Textbpp 2000ms';
        textafter3.style.animation = 'Textbpp 2000ms';

        box3s.style.left = '460px';
        box3s.style.width = '190px';
        box3s.style.height = '250px';
        box3s.style.borderRadius = '25px';
        box3s.style.top = '55px';
        box3s.style.outline = '3px solid black'
        box3s.style.zIndex = '2';
        box3s.style.animation = 'Morphza 1000ms'

        box1.style.left = '180px';
        box1.style.top = '450px';
        box1.style.width = '75px';
        box1.style.height = '150px';
        box1.style.borderRadius = '15px';
        box1.style.opacity = '0.1';
        box1.style.animation = 'Morphaa 1000ms';

        box2.style.left = '280px';
        box2.style.top = '450px';
        box2.style.width = '75px';
        box2.style.height = '150px';
        box2.style.borderRadius = '15px';
        box2.style.opacity = '0.1';
        box2.style.animation = 'Morphaa 1000ms';

        box3.style.left = '380px';
        box3.style.top = '450px';
        box3.style.width = '75px';
        box3.style.height = '150px';
        box3.style.borderRadius = '15px';
        box3.style.opacity = '0.1';
        box3.style.animation = 'Morphaa 1000ms';

        box4.style.left = '480px';
        box4.style.top = '450px';
        box4.style.width = '75px';
        box4.style.height = '150px';
        box4.style.borderRadius = '15px';
        box4.style.opacity = '0.1';
        box4.style.animation = 'Morphaa 1000ms';

        box5.style.left = '580px';
        box5.style.top = '450px';
        box5.style.width = '75px';
        box5.style.height = '150px';
        box5.style.borderRadius = '15px';
        box5.style.opacity = '0.1';
        box5.style.animation = 'Morphaa 1000ms';


        texts1.style.animation = '';
        texts2.style.animation = '';
        texts3.style.animation = '';
        texts4.style.animation = '';
        texts5.style.animation = '';

        boxs1.style.animation = 'boxt 1000ms';
        boxs2.style.animation = 'boxt 1000ms';
        boxs3.style.animation = 'boxt 1000ms';
        boxs4.style.animation = 'boxt 1000ms';
        boxs5.style.animation = 'boxt 1000ms';
     }}
)}

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");

box1.addEventListener('change', e => {
    if (e.target.checked === true){
        wstyle.style.width = "240px";
    }
    if (e.target.checked === false){
        wstyle.style.width = "0px";
    }
})
box2.addEventListener('change', e => {
    if (e.target.checked === true){
        wstyle.style.width = "240px";
    }
    if (e.target.checked === false){
        wstyle.style.width = "0px";
    }
})
box3.addEventListener('change', e => {
    if (e.target.checked === true){
        wstyle.style.width = "240px";
    }
    if (e.target.checked === false){
        wstyle.style.width = "0px";
    }
})
box4.addEventListener('change', e => {
    if (e.target.checked === true){
        wstyle.style.width = "240px";
    }
    if (e.target.checked === false){
        wstyle.style.width = "0px";
    }
})
box5.addEventListener('change', e => {
    if (e.target.checked === true){
        wstyle.style.width = "240px";
    }
    if (e.target.checked === false){
        wstyle.style.width = "0px";
    }
})

const textafter1 = document.getElementById("textafter1");
const textafter2 = document.getElementById("textafter2");
const textafter3 = document.getElementById("textafter3");

const wstyle = document.getElementById("white");

let numCells = 40;

const classes = {
    1: {day: "Monday, Week A", p1: "Chemistry", p2: "Business", p3: "History", p4: "English", p5: "CS", RN1: "B201", RN2: "S202", RN3: "C202", RN4: "T202", RN5: "N203", t1: "Mr Downing", t2: "", t3: "Mrs Law", t4: "Mr Deller", t5: "Mr Payne"},
    2: {day: "Tuesday, Week A", p1: "Physics", p2: "English", p3: "Art", p4: "Maths", p5: "Biology", RN1: "B302", RN2: "T202", RN3: "N303", RN4: "T102", RN5: "B104", t1: "Mr Hill", t2: "Mr Deller", t3: "", t4: "Miss Taylor", t5: "Mrs Haywood"},
    3: {day: "Wednesday, Week A", p1: "CS", p2: "English", p3: "Business", p4: "Chemistry", p5: "Maths", RN1: "N203", RN2: "T202", RN3: "S201", RN4: "B201", RN5: "T201", t1: "Mr Payne", t2: "Mr Deller", t3: "", t4: "Mr Downing", t5: "Miss Taylor"},
    4: {day: "Thursday, Week A", p1: "History", p2: "Maths", p3: "Physics", p4: "Business", p5: "Biology", RN1: "C202", RN2: "T102", RN3: "B302", RN4: "S201", RN5: "C202", t1: "Mrs Law", t2: "Miss Taylor", t3: "Mr Hill", t4: "", t5: "Mrs Haywood"},
    5: {day: "Friday, Week A", p1: "Art", p2: "English", p3: "CS", p4: "Games", p5: "Games", RN1: "N303", RN2: "T202", RN3: "N301", RN4: "", RN5: "", t1: "", t2: "Mr Deller", t3: "", t4: "", t5: ""},

    6: {day: "Monday, Week B", p1: "Business", p2: "Biology", p3: "CS", p4: "Chemistry", p5: "English", RN1: "S202", RN2: "B104", RN3: "N203", RN4: "B201", RN5: "T202", t1: "", t2: "Mrs Haywood", t3: "Mr Payne", t4: "Mr Downing", t5: "Mr Deller"},
    7: {day: "Tuesday, Week B", p1: "Physics", p2: "Art", p3: "History", p4: "English", p5: "Maths", RN1: "B302", RN2: "N303", RN3: "C202", RN4: "T202", RN5: "T102", t1: "Mr Hill", t2: "", t3: "Mrs Law", t4: "Mr Delller", t5: "Miss Taylor"},
    8: {day: "Wednesday, Week B", p1: "Physics", p2: "CS", p3: "Chemistry", p4: "Maths", p5: "History", RN1: "B302", RN2: "N203", RN3: "B201", RN4: "T102", RN5: "C202", t1: "Mr Hill", t2: "Mr Payne", t3: "Mr Downing", t4: "Miss Taylor", t5: "Mrs Law"},
    9: {day: "Thursday, Week B", p1: "Maths", p2: "English", p3: "Art", p4: "Biology", p5: "Business", RN1: "T102", RN2: "T202", RN3: "N303", RN4: "B104", RN5: "S201", t1: "Miss Taylor", t2: "Mr Deller", t3: "", t4: "Mrs Haywood", t5: ""},
    10: {day: "Friday, Week B", p1: "History", p2: "RE", p3: "Maths", p4: "Art", p5: "English", RN1: "C202", RN2: "C202", RN3: "T102", RN4: "N303", RN5: "T202", t1: "Mrs Law", t2: "Mrs Law", t3: "Miss Taylor", t4: "", t5: "Mr Deller"}
}

