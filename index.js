const title = document.querySelector('#title-box');
const data = '红楼梦'.split('');
let index = 0
each_time = 500
loop_time = 5000


function writing() {
    if (index < data.length) {
        title.innerHTML += data[index++]
        console.log(title.innerHTML)
        setTimeout(writing, each_time);
    }
}

writing()
