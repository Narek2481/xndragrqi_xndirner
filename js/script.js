//xndir1________---------------------------------------------------------------------------------
// let inp = document.getElementById('inp1');
// let btn = document.getElementById('btn1');
// function click1() {
//     document.getElementById('abzac').innerHTML += 'Hello ' + inp.value;
//     this.removeEventListener("click", click1);
// }
// btn.addEventListener('click', click1);

//xndir2________---------------------------------------------------------------------------------
// let inp = document.getElementById('inp1');
// let btn = document.getElementById('btn1');
// function click1(){
//     document.getElementById('export').innerHTML += inp.value/60+' ժամ';
//     this.removeEventListener("click", click1);
// }
// btn.addEventListener('click', click1)


//xndir3________---------------------------------------------------------------------------------
// let inp = document.getElementById('inp1');
// let btn = document.getElementById('btn1');
// function click1(){
//     document.getElementById('export').innerHTML += inp.value/480,88+' դրամ';
//     this.removeEventListener("click", click1);
// }
// btn.addEventListener('click', click1)



//xndir4________---------------------------------------------------------------------------------
// let inp1 = document.getElementById('inp1');
// let inp2 = document.getElementById('inp2')
// let btn = document.getElementById('btn1');
// function click1(){
//     alert(Math.pow(inp1.value, inp2.value));
// }
// btn.addEventListener('click', click1)

//xndir5________---------------------------------------------------------------------------------
// let inp1 = document.getElementById('inp1');
// let inp2 = document.getElementById('inp2')
// let btn = document.getElementById('btn1');
// function click1(){
//     alert((+(inp1.value)*inp2.value)/100);
// }
// btn.addEventListener('click',click1);


//xndir6________---------------------------------------------------------------------------------
// let inp1 = document.getElementById('inp1');
// let btn1 = document.getElementById('btn1');
// let zg = document.getElementById('zagalovok')
// let a = 60 * 60 * 24;
// function click1(){
// let day = parseInt(inp1.value / 86400);
// let ds  =  inp1.value -  day * 86400;

// let hours = parseInt(ds / 3600);
// let hs = ds - hours * 3600;

// let minute = parseInt(hs / 60);
// let remainingSecond = hs - minute * 60;
// zg.innerHTML += (day + ' օր ' + hours +' ժամ '+ minute +' րոպե '+ remainingSecond +' վարկյան ');
// }
// btn1.addEventListener('click', click1);


//xndir7________---------------------------------------------------------------------------------
// let inp1 = document.getElementById('inp1');
// let btn1 = document.getElementById('btn1');
// function f() {
//     if (inp1.value.length == 4) {
//         let a = inp1.value
//         let b = (Number(a[0]))+(Number(a[1]))+(Number(a[2]))+(Number(a[3]))
//         alert((Number(a[0]))+'+'+(Number(a[1]))+'+'+(Number(a[2]))+'+'+(Number(a[3]))+ '='+b);
//     } else {
//         alert('թիվը քառանիշ չէ')
//     }
// }
// btn1.addEventListener('click', f);



//xndir8________---------------------------------------------------------------------------------
// let inp1 = document.getElementById('inp1');
// let btn1 = document.getElementById('btn1');

// function click1(){
//     alert(Math.sqrt(inp1.value));
// }

// btn1.addEventListener('click', click1);



// Դաս 2: Ոչ գծային ալգորիթմներ--------------------------------------------------------------
//xndir1________---------------------------------------------------------------------------------
// let inp1 = document.getElementById('inp1');
// let inp2 = document.getElementById('inp2');
// let inp3 = document.getElementById('inp3');
// let btn1 = document.getElementById('btn1');

// function a1(){
//     if(inp1.value==4 && inp2.value==4 && inp3.value==4){
//         alert('այո')
//     }else {
//         alert('ոչ')
//     }
// }

// btn1.addEventListener('click', a1);

// function a2(){
//     if(inp1.value==1 || inp2.value==1 || inp3.value==1){
//         alert('այո')
//     }else {
//         alert('ոչ')
//     }
// }

// btn1.addEventListener('click', a2);

// function a3(){
//     if(inp1.value==inp2.value || inp1.value==inp3.value || inp3.value==inp2.value){
//         alert('այո')
//     }else {
//         alert('ոչ')
//     }
// }

// btn1.addEventListener('click', a3);


//xndir2________---------------------------------------------------------------------------------
// let inp1 = document.getElementById('inp1');
// let inp2 = document.getElementById('inp2');
// let inp3 = document.getElementById('inp3');
// let btn1 = document.getElementById('btn1');

// function rightTriangle(){
//     let a = Math.pow(inp1.value,2);
//     let b = Math.pow(inp2.value,2);
//     let c = Math.pow(inp3.value,2);

//     if(a===b+c|| b===c+a|| c===b+a){
//         alert('այո');
//     }else{
//         alert('error');
//     }
// }
// btn1.addEventListener('click',  rightTriangle);



//xndir3________---------------------------------------------------------------------------------
// let inp1 = document.getElementById('inp1');
// let btn1 = document.getElementById('btn1');

// function click1() {
//     if (inp1.value > 0 && inp1.value == parseInt(inp1.value)) {
//         alert('true');
//     } else {
//         alert('false')
//     }

// }

// btn1.addEventListener('click', click1);

//xndir4________---------------------------------------------------------------------------------


// let select = document.getElementById('num');
// let btn = document.getElementById('btn');
// btn.addEventListener("click", getSelectedOptionName);

// function getSelectedOptionName() {
//     let value = select.options[select.selectedIndex].value;
//     let res;
//     if (value == 1)
//         res = "1200 դրամ";
//     if (value == 2)
//         res = "1400 դրամ";
//     if (value == 3)
//         res = "500 դրամ";
//     alert(res)
// }

//xndir5________---------------------------------------------------------------------------------

// let designer = document.getElementById('designer');
// let programming = document.getElementById('programming');
// let theory = document.getElementById('theory');
// let sum = document.getElementById('sum');
// let btn = document.getElementById('btn');
// let info = document.getElementById('info');

// let designerInfo = {
//     hc: 1000,
//     ps: 2000,
//     ui: 1500
// }
// let programmingInfo = {
//     js: 3000,
//     php: 2700,
//     java: 3200,
//     c: 3500
// }
// let theoryInfo = {
//     at: 2000,
//     tb: 2600
// }

// btn.addEventListener("click", getInfo);
// function getInfo() {
//     let designerValue = designer.options[designer.selectedIndex].value;
//     let programmingValue = programming.options[programming.selectedIndex].value;
//     let theoryValue = theory.options[theory.selectedIndex].value;
//     let result = designerInfo[designerValue] * sum.value + programmingInfo[programmingValue] * sum.value + theoryInfo[theoryValue] * sum.value;

//     info.innerHTML = 'Դուք պետք է վճարեք ' + result;
//     if (result > 300000) {
//         result -= result * 0.4;
//         info.innerHTML += ' գումարը գերազանցում է 300, 000 դրամը Դուք պետք է վճարեք X դրամ, սակայն ստանում եք 40% զեղչ եւ այժմ կարող եք վճարել (x-40%) դրամ '
//         info.innerHTML += result;
//     }
// }




//xndir6________---------------------------------------------------------------------------------
// let btn = document.getElementById('btn');
// let quetion1 = document.getElementById('quetion_1');
// let quetion2 = document.getElementById('quetion_2');
// let quetion3 = document.getElementById('quetion_3');
// let quetion4 = document.getElementById('quetion_4');
// let quetion5 = document.getElementById('quetion_5');
// let quetion6 = document.getElementById('quetion_6');
// let quetion7 = document.getElementById('quetion_7');
// let quetion8 = document.getElementById('quetion_8');
// let quetion9 = document.getElementById('quetion_9');
// let quetion10 = document.getElementById('quetion_10');
// let quetion1Info = {
//     true_1: 1,
//     false_1:0
// }
// let quetion2Info = {
//     true_2: 1,
//     false_2:0
// }
// let quetion3Info = {
//     true_3: 1,
//     false_3:0
// }
// quetion4Info = {
//     true_4: 1,
//     false_4:0
// }
// let quetion5Info = {
//     true_5: 1,
//     false_5:0
// }
// let quetion6Info = {
//     true_6: 1,
//     false_6:0
// }
// quetion7Info = {
//     true_7: 1,
//     false_7:0
// }
// let quetion8Info = {
//     true_8: 1,
//     false_8:0
// }
// let quetion9Info = {
//     true_9: 1,
//     false_9:0
// }
// let quetion10Info = {
//     true_10: 1,
//     false_10:0
// }
// let experiment = document.getElementById('experiment');

// function checker(){
//     let quetion1value = quetion1.value;
//     let quetion2value = quetion2.value;
//     let quetion3value = quetion3.value;
//     let quetion4value = quetion4.value;
//     let quetion5value = quetion5.value;
//     let quetion6value = quetion6.value;
//     let quetion7value = quetion7.value;
//     let quetion8value = quetion8.value;
//     let quetion9value = quetion9.value;
//     let quetion10value = quetion10.value;
//     let result = quetion1Info[quetion1value]+quetion2Info[quetion2value]+quetion3Info[quetion3value]+quetion4Info[quetion4value]+quetion5Info[quetion5value]+quetion6Info[quetion6value]+quetion7Info[quetion7value]+quetion8Info[quetion8value]+quetion9Info[quetion9value]+quetion10Info[quetion10value];
//     experiment.removeAttribute('class');
//     experiment.innerHTML = result
//     arr = [
//         'red','red','red','red','orange','orange','orange','#e07797','#e07797','green','green'
//     ];
//     experiment.style.backgroundColor = (arr[result]);

// }
// btn.addEventListener('click', checker);




//xndir7________---------------------------------------------------------------------------------
// let inp1 = document.getElementById('inp1');
// let inp2 = document.getElementById('inp2');
// let inp3 = document.getElementById('inp3');
// let btn = document.getElementById('btn');
// let info = document.getElementById('info');
// function sort() {
//     let a = parseFloat(inp1.value);
//     let b = parseFloat(inp2.value);
//     let c = parseFloat(inp3.value);
//     if (a > b && b > c) {
//         info.innerHTML = a + ',' + b + ',' + c + ';';
//     } else if (a > c &&  c > b) {
//         info.innerHTML = a + ',' + c + ',' + b + ';';
//     } else if (b > a && a > c) {
//         info.innerHTML = b + ',' + a + ',' + c + ';';
//     } else if (b > c && c > a) {
//         info.innerHTML = b + ',' + c + ',' + a + ';';
//     } else if (c > a && a > b) {
//         info.innerHTML = c + ',' + a + ',' + b + ';';
//     } else if (c > b && b > a) {
//         info.innerHTML = c + ',' + b + ',' + a + ';';
//     }

// }
// btn.addEventListener('click', sort);



//xndir8________---------------------------------------------------------------------------------
// let first_title = document.getElementById('first_title');
// let style_paragraph = document.getElementById('style_paragraph');
// let btn_1 = document.getElementById('btn_1');
// let action = document.getElementById('action');
// let f_famely = document.getElementById('f_famely');
// let color_1=  document.getElementById('color_1');
// let btn2 = document.getElementById('btn2');
// btn_1.addEventListener('click', style_paragraphClick);
// btn2.addEventListener('click', styleClick);
// function style_paragraphClick (){
//     let a = style_paragraph.value;
//     first_title.innerHTML += '<br>'+a;
// }
// let f_famelyInfo = {
//     gs: 'Georgia, serif',
//     ss: 'sans-serif',
//     cu: 'cursive'
// };
// function styleClick(){
//     let a = action.value;
//     first_title.style.fontSize = (a+'px');
//     let c = f_famely.value;
//     first_title.style.fontFamily = (f_famelyInfo[f_famely.value]);
//     let b = color_1.value;
//     first_title.style.color = (b);
// }




// Դաս 3: Լոկալ և գլոբալ փոփոխականներ(var, let)
//xndir1________---------------------------------------------------------------------------------

// let first_title = document.getElementById('first_title');
// let btn_1 = document.getElementById('btn_1');
// let a = 0;
// function first_titleBtn_1() {
//     a += 1;
//     first_title.innerHTML += a+',';
//     if (a % 2){
//         first_title.style.color = 'red';
//     }else{
//         first_title.style.color = 'green';
//     }
// }
// btn_1.addEventListener('click',first_titleBtn_1);



//xndir2________---------------------------------------------------------------------------------
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let img1 = document.getElementById('img1');
// let arr = [
//     'img/download.jpg', 'img/icon.png', 'img/images.jpg', 'img/images (2).jpg'
// ];
// let a = 0;
// function next() {

//     if (a <= 3 && a >= 0) {
//         img1.setAttribute('src', arr[a]);
//         a += 1;
//     } else {
//         a = 0;
//     }

// }
// btn1.addEventListener('click', next);
// function Prev() {
//     if (a <= 3 && a > 0) {
//         a--;
//         img1.setAttribute('src', arr[a]);
//     }else {
//         a = 3
//         img1.setAttribute('src', arr[a]);
//     }

// }
// btn2.addEventListener('click', Prev);


//xndir3________---------------------------------------------------------------------------------
// let smal_big = document.getElementById('smal_big');
// let btn1 = document.getElementById('btn1');
// btn1.addEventListener('click', func);
// let res = 200;
// let checker = true;

// function func() {
//     if (checker) {
//         if (res >= 200 && (res + 50) <= 500) {
//             res += 50;
//             smal_big.style.width = res + 'px';
//             smal_big.style.height = res + 'px';
//         } else {
//             checker = false;
//             res -= 50
//             smal_big.style.width = res + 'px';
//             smal_big.style.height = res + 'px';
//         }

//     } else {
//         if ((res - 50) >= 200) {
//             res -= 50;
//             smal_big.style.width = res + 'px';
//             smal_big.style.height = res + 'px';
//         } else {
//             checker = true;
//             res += 50;
//             smal_big.style.width = res + 'px';
//             smal_big.style.height = res + 'px';
//         }
//     }
// }


// Դաս 4: Ցիկլ(for, while, do while), ցիկլի ընդհատում(break, continue)
//xndir________1---------------------------------------------------------------------------------
// let paragrap = document.getElementById('paragrap');
// let inp1 = document.getElementById('inp1');
// let inp2 = document.getElementById('inp2');
// let btn1 = document.getElementById('btn1');
// btn1.addEventListener('click', oddNumbered);



// function oddNumbered() {

//     let a = Number(inp1.value);
//     let b = Number(inp2.value);

//     for (let i = a; i < b; i++) {

//         if (i % 2 == 0) {
//             paragrap.innerHTML += i + ','
//         }
//     }

//     console.log(a);
//     console.log(b);

// }


//xndir________2---------------------------------------------------------------------------------


// let two = document.getElementById('two');
// let btn1 = document.getElementById('btn1');



// function twoDigits() {
//     for (let i = 10; i <= 99; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             two.innerHTML += 'FIZBAZ  ' + i + '<br>';
//         } else if (i % 5 == 0) {
//             two.innerHTML += 'BAZ  ' + i + '<br>';
//         } else if (i % 3 == 0) {
//             two.innerHTML += 'FIZ  ' + i + '<br>';
//         } else {
//             two.innerHTML += i + '<br>';

//         }
//     }
// }
// btn1.addEventListener('click', twoDigits);







//xndir________4---------------------------------------------------------------------------------
// let abzac = document.getElementById('abzac');
// let inp1 = document.getElementById('inp1');
// let btn1 = document.getElementById('btn1');


// function twoDigits() {
//     let a = Number(inp1.value);
//     let arr = [];
//     let arr2 = [''];

//     for (let i = 10; i <= 99; i++) {
//         arr.push(i);
//     }
//     for (let j = 0; j < arr.length; j++) {
//         if ((arr[j] * 17) > 300) {
//             arr2.push(arr[j]);


//         }

//     }
//     abzac.innerHTML = arr2[a];
// }
// btn1.addEventListener('click', twoDigits)

// xndir 5 ------------------------------------------------------------------------------------
// let btn1 = document.getElementById('btn1');
// let inp1 = document.getElementById('inp1');

// function faktorial() {
//     let b = Number(inp1.value);
//     let a = 1;
//     for (let i = 1; i <= b; i++) {
//         a *= i;
//     }
//     alert(a);
// }
// btn1.addEventListener('click', faktorial);



// xndir 6 ------------------------------------------------------------------------------------

// let paragrap = document.getElementById('paragrap');
// function pyutagor() {
//     let arr = [];
//     for (let i = 0; i <= 99; i++) {
//         arr.push(i)

//     }
//     console.log(arr)
//     for (let elem of arr) {
//         if (elem**2 == elem**2+elem**2) {
//             paragrap.innerHTML +=  elem**2 +"="+ elem**2+elem**2
//         }
//     }




// }
// pyutagor()


// xndir 7 ------------------------------------------------------------------------------------
// let inp1 = document.getElementById('inp1');
// let inp2 = document.getElementById('inp2');
// let btn1 = document.getElementById('btn1');
// let paragrap = document.getElementById('paragrap')


// function hasvox() {
//     x = Number(inp1.value);
//     y = Number(inp2.value);
//     let a;
//     a = x / (2 * y);
//     a = Math.round(a)
//     paragrap.innerHTML += a + ',';

// }
// btn1.addEventListener('click', hasvox);

// xndir 10 ------------------------------------------------------------------------------------


// let a = Number(inp1.value);
// let n = 0;
// let arr = [0, 1];
// while (n < 20) {
//     n++
//     console.log
//     if (n <= 1) {
//         arr = [0, 1];
//     } else if (n > 1) {
//         arr.push(arr[n - 2] + arr[n-1]);

//     }
// }
// console.log(arr)

// Դաս 5: Միաչափ զանգվածներ
// xndir 1 ------------------------------------------------------------------------------------

// let arr = [
//     1, 2, 3, 4, 5, 6, 9, 4, 95, 4, 3, 6
// ]
// let a = 0;
// for (let i = 0; i < arr.length; i++) {
//     a += arr[i]**2;
// }
// console.log(a/arr.length);



// oop ----------------------------------------------------------------------------------------------------------------------


// 1------------------------------------------------------------------------------------------
// class Uxankyun {
//     constructor(a, b) {
//         this.a = a
//         this.b = b

//     }
//     paragic() {
//         console.log(this.a + this.b);
//     }
//     makeres() {
//         console.log((this.a * this.b));
//     }
//     drow(bool) {
//         if (bool === true) {


//             let str = '*'.repeat(this.a);
//             console.log(str);
//             for (let i = 0; i < this.b - 2; i++) {
//                 console.log('*' + (' '.repeat(this.a - 2)) + '*');
//             }
//             console.log(str);
//         }
//     }
// }

// let uxankyun1 = new Uxankyun(10, 5);
// uxankyun1.drow(true);
// uxankyun1.paragic();
// uxankyun1.makeres();

// class Erankyun {

//     constructor(a, b, c) {
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     paragic() {
//         console.log(this.a + this.b + this.c);
//     }

//     drow(bool) {
//         if (bool === true) {
//             let str = '*';
//             console.log(str )
//             for (let i = 0; i < this.c; i++) {
//                 str += '*';
//                 console.log(str);
//             }

//         }
//     }

// }

// let erankyun1 = new Erankyun(10, 5, 9);
// erankyun1.drow(true);
// erankyun1.paragic();
// 2-----------------------------------------------------------------------------------------------------------------------
// class Timer {
//     constructor(x) {
//         this.x = x;
//     }

//     start1() {
//         let a = this.x;
//         if (a !== 0) {
//             a--;
//             console.log(a);


//         }



//     }
// }
// let t = new Timer(10);

// let c = setInterval(t.start1(), 1000);

// console.log(c)


// 3-----------------------------------------------------------------------------------------------------------------------

// class Calendar {
//     constructor(amis, tari) {
//         this.tari = tari;
//         this.amis = amis;
//     }
//     create_date_obj() {
//         let date1 = new Date(this.tari, this.amis, 1);
//         let date2 = new Date(this.tari, this.amis + 1, 1);
//         let milisekund = 86400000;
//         let date3 = date2 - date1
//         console.log(date3);
//         let number_of_days = date3 / milisekund;
//         console.log(number_of_days);
//         let date_ = new Date(this.tari, this.amis, 1);
//         let first_day = date_.getDay();
//         console.log([first_day, number_of_days]);
//         return [first_day, number_of_days];
//     }
//     get_days() {
//         let days = [];
//         let name_of_days = [
//             'կիրակի', 'երկուշաբթի', 'երեքշաբթի', 'չորեքշաբթի', 'հինգշաբթի', 'ուրբաթ', 'շաբաթ'
//         ];
//         let fisrt_day = this.create_date_obj()[0];

//         let number_of_days = this.create_date_obj()[1];
//         for (let i = 1; i <= number_of_days; i++) {
//             days.push({ day: i, week_day: name_of_days[fisrt_day], number: fisrt_day });
//             fisrt_day++;

//             if (days[i - 1].number == 0) {
//                 days[i - 1].number = 7;
//             }

//             if (fisrt_day > 6) {
//                 fisrt_day = 0;
//             }
//         }
//         console.log(days);
//         return days;
//     }
//     next() {
//         const obj_td = document.querySelectorAll('td');
//         if (this.amis == 11) {
//             this.tari++;
//             console.log(this.tari);
//             for (let i = 0; i < obj_td.length; i++) {
//                 obj_td[i].innerHTML = '';
//             }
//             this.amis++;
//             this.amis = 0;
//             this.creat_days_(this.get_days(this.amis));
//         } else {
//             for (let i = 0; i < obj_td.length; i++) {
//                 obj_td[i].innerHTML = '';
//             }
//             this.amis++;
//             this.creat_days_(this.get_days(this.amis));
//         }
//     }
//     create_table(days) {
//         const calendar_table = document.getElementById("calndar_table");
//         for (let i = 0; i < 6; i++) {
//             let tr = document.createElement("tr");
//             let tr_table = calendar_table.appendChild(tr);
//             for (let j = 0; j < 7; j++) {
//                 let td = document.createElement('td');
//                 tr_table.appendChild(td)[1];
//                 if (j + 1 == days.number) {
//                     creat_days_(days);
//                 }
//             }
//         }
//     }
//     creat_days_(days) {
//         let a = days[0].number - 1;
//         console.log(a);
//         for (let k = 0; k < days.length; k++) {
//             const tds = document.querySelectorAll('td');
//             tds[a].innerHTML = days[k].day;
//             console.log(tds[a]);
//             a++;
//         }
//     }
// }
// const calendar = new Calendar(3, 2022);
// calendar.create_table(calendar.get_days())
// calendar.creat_days_(calendar.get_days());
// const next = document.getElementById('next');
// function next_() {
//     calendar.next()
// }
// next.addEventListener('click', next_);



