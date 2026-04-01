// const { resumeToPipeableStream } = require("react-dom/server");

// document.getElementById('vocabSearch').addEventListener('keyup', function () {
//     let filter = this.value.toLowerCase();
//     let rows = document.querySelector('#myTable tbody').rows;

//     for (let i = 0; i < rows.length; i++) {
//         let firstCol = rows[i].cells[0].textContent.toLowerCase();
//         let secondCol = rows[i].cells[1].textContent.toLowerCase();

//         if (firstCol.includes(filter) || secondCol.includes(filter)) {
//             rows[i].style.display = "";
//         } else {
//             rows[i].style.display = "none";
//         }
//     }
// });

//BMI ni aniqlash va taqqoslash
// let AthamWeight = prompt("Atham og'irligingizni kiriting")
// let AthamHeight = prompt("Atham bo'yingizni metrda kiriting")
// let AthamBMI = AthamWeight / (AthamHeight * AthamHeight);
// console.log(AthamBMI);
// let SardorWeight = prompt("Sardorning og'riligini kiriting")
// let SardorHeight = prompt("Sardor bo'yingizni metrda kirting")
// let SardorBMI = SardorWeight / (SardorHeight * SardorHeight);
// console.log(SardorBMI);
// let markHigherBMI = null;
// console.log(AthamBMI > SardorBMI);


//Ism familiya surash
// let name = prompt(`Ismingini kiriting`)
// let surname = prompt(`Familiyangizni kiriting`)
// console.log(`Salom, ${name} ${surname}! Saytimizga hush kelibsiz`);


//Ism va yosh+1
// let name = prompt(`Ismingini kiriting`)
// let age = prompt(`Yoshingizni kiriting`)
// console.log(`Sizning ismingiz ${name} va yoshingiz ${age}da. Bir yil o'tib ${age + 1} yosh bo'lasiz.`)


//Mahsulot nomi, soni va jami narx
// let product_name = `kitob`
// let product_price = 32000
// let product_pcs = 5
// console.log(`Siz ${product_pcs} dona ${product_name} sotib oldingiz. Jami to'lov: ${32000 * 5} so'm`)


// Email
// let name = prompt(`Ismingizni kiriting`)
// let surname = prompt(`Familiyangizni kiriting`)
// console.log(`${name}${surname}@gmail.com`)


//Manfiy va musbat
// let num = prompt(`Son kiriting, men sizga uni manfiy yoki musbat ekanligini aniqlab beraman`)
// if(num > 0){
//     console.log(`${num} musbat son`)
// }else{
//     console.log(`${num} manfiy son`)
// }


//Yoshga qarab film tafsiyalari
// let age = prompt(`Yoshingini kiriting`)
// if(age < 12){
//     console.log(`Bolalar filmlari`)
// }else if(age < 17){
//     console.log(`Ommabop filmlar`)
// }else{
//     console.log(`Kattalar filmlari`)
// }


//Parolni tekshirish
// let password = `asdf1234`
// let password_check = prompt(`Parolni kiriting`)
// if(password_check === password){
//     console.log(`Parol to'g'ri`)
// }else{
//     console.log(`Parol noto'g'ri qayta urinib ko'ring`)
// }


//3ta sonni taqqoslash
// let num1 = prompt(`1chi sonni kiriting`)
// let num2 = prompt(`2chi sonni kiriting`)
// let num3 = prompt(`3chi sonni kiriting`)
// if(num1 > num2 > num3){
//     console.log(`1chi son 2chi sondan katta, 2chi son 3chi sondan katta`)
// }else if(num1 < num2 > num3){
//     console.log(`1chi son 2chi sondan kichik, 2chi son 3chi sondan katta`)
// }else if(num1 < num2 < num3){
//     console.log(`1chi son 2chi sondan kichik, 2chi son 3chi sondan kichik`)
// }else if(num1 > num2 < num3){
//     console.log(`1chi son 2chi sondan katta, 2chi son 3chi sondan kichik`)
// }else{
//     console.log(`???`)
// }


//Tug'ilgan kunni tekshirish
// let birthday = prompt(`Tug'ilgan kuningizni kiriting`)
// if(birthday <= 31){
//     console.log(`Yurtingizni kunduzgi sanasini tekshirib ko'ring`)
// }else{
//     console.log(`Noto'g'ri sanani kiritdingiz`)
// }


// Tovar narxini chegirma bilan hisoblash
// let price = prompt(`Tovar narxini kiriting`)
//     if(price > 100){
//         let discount_price = price * 0.9
//         console.log(`Siz uchun 10% foizlik chegirma mavjud! Jami: ${discount_price}`)
// }else{
//     console.log(`Chegirma mavjud emas`)
// }


// Sonni 5 ga bo'linishini tekshirish
// let num = prompt(`Son kiriting`)
// if(num % 5 === 0){
//     let answer = num / 5
//     console.log(`Berilgan son 5ga bo'linadi va javob: ${answer} bo'ladi`)
// }else{
//     console.log(`Berilgan son 5ga bo'linmaydi`)
// }


// Ish vaqtiga qarab ish haqini hisoblash
// let working_hours = prompt(`Ish soatingizni kiriting`)
// let hour_salary = prompt(`Soatlik ish haqqingizni kiriting`)
// if(working_hours > 40){
//     let current_salary = hour_salary * 1.5
//     console.log(`Sizga qo'shimcha ish haqqi to'lanadi. Sizning ish haqqingiz hozirda: ${current_salary}`)
// }


// Yilga qarab fasl aniqlash
// let month = prompt(`Bir yilning oy raqamini kiriting`)
// if(month == 3 || month == 4 || month == 5){
//     console.log(`Bahor`)
// }else if(month == 6 || month == 7 || month == 8){
//     console.log(`Yoz`)
// }else if(month == 9 || month == 10 || month == 11){
//     console.log(`Kuz`)
// }else if(month == 12 || month == 1 || month == 2){
//     console.log(`Qish`)
// }else{
//     console.log(`Bunday sana mavjud emas`)
// }


//  Parol kucli yoki kuchsiz ekanligini anqilash
// let password = prompt("Parol kiriting:");
// if (password.length < 8) {
//   console.log("Parol juda zaif");
// }
// else if (password.length >= 8 && password.length <= 12) {
//   console.log("Parol o'rtacha kuchli");
// } 
// else {
//   console.log("Parol kuchli");
// }


// Yoshini surab voyaga yetganini aniqlash
// let age = prompt(`Yoshingizni kiriting`)
// if(age > 18){
//     console.log(`Siz voyaga yetgansiz!`)
// }else{
//     console.log(`Voyaga yetmagansiz!`)
// }


// To'gri login parol tekshirish
// let user_login = `admin@gmail.com`
// let user_password = `1234`
// let login = prompt(`Loginni kiriting`)
// let password = prompt(`Parolni kiriting`)
// if (user_login == login && user_password == password){
//     console.log(`Parol to'gri`)
// }else{
//     console.log(`Parol yoki login noto'g'ri`)
// }


// Tizimga kirish
// let age = prompt(`Yoshingizni kiriting`)
// let confirm = prompt(`Ruhsatnomangiz bormi?`)
// if(age > 18 || confirm == `Ha`){
//     console.log(`Tizimga muvafaqiyatli kirdingiz!`)
// }else{
//     console.log(`Siz tizimga kira olamysiz`)
// }


// Musbat son
// let num1 = prompt(`1-sonni kiriting`)
// let num2 = prompt(`2-sonni kiriting`)
// if(num1 > 0 && num2 > 0){
//     console.log(`Ikkala son musbat`)
// }else if(num1 > 0 && num2 < 0 || num1 < 0 && num2 > 0){
//     console.log(`Kamida bitta son musbat`)
// }else{
//     console.log(`Musbat son yo'q`)
// }


// Mahsulot narxini hisoblash
// let product = prompt(`Mahsulot turini kiriting (1. meva, 2. sut mahsuloti, 3. go'sht, 4. non`)
// switch(product){
//     case `1`:
//         let fruit_dicount = 20000 - (20000 * 0.1)
//         console.log(`Sizda tanlangan mahsulot turi uchun 10% chegirma bor!\nAvvalgi narxi: 20000 ming so'm\nHozirgi narxi: ${fruit_dicount} ming so'm`)
//         break
//     case `2`:
//         let = milk_dicount = 12000 - (12000 * 0.05)
//         console.log(`Sizda tanlangan mahsulot turi uchun 5% chegirma bor!\nAvvalgi narxi: 12000 ming so'm\nHzorigi narxi: ${milk_dicount} ming so'm`)  
//         break
//     case `3`:
//         let = meat_discount = 140000 - (140000 * 0.15)
//         console.log(`Sizda tanlangan mahsulot turi uchun 15% chegirma bor!\nAvvalgi narxi: 140000 ming so'm\nHozigi narxi: ${meat_discount} ming so'm`)  
//         break
//     case `4`: 
//         let bread_price = 6000
//         console.log(`Sizda tanlangan mahsulot turi uchun chegirma mavjud emas!\nHozirgi narx: ${bread_price} ming so'm`)  
//         break
//     default:
//         console.log(`Bunaqa mahsulot turi mavjud emas!`)
// }


// Sahifaga utkazish
// let status = prompt(`Maqomingizni kiriting: a. admin, b. user, c. guest`)
// switch(status){
//     case `a`:
//         console.log(`Admin panelga hush kelibsiz!`)
//         break
//     case `b`:
//         console.log(`Shahsiy sahifangizga hush kelibsiz!`)
//         break
//     case `c`:
//         console.log(`Mehmon sahifasiga hush kelibsiz!`)           
//         break
//     default:
//         console.log(`Kirish rad etildi!`)    
// }


// Hafta kuni
// let day = 5
// switch(day){
//     case 1:
//         console.log(`Dushanba`)
//         break
//     case 2:
//         console.log(`Seshanba`)
//         break
//     case 3:
//         console.log(`Chorshanba`)
//         break
//     case 4:
//         console.log(`Payshanba`)
//         break
//     case 5:
//         console.log(`Juma`)
//         break
//     case 6:
//         console.log(Shanba)
//         break
//     case 7:
//         console.log(`Yakshanba`)
//         break
//     default:
//         console.log(`Bunaqa hafta kuni mavjud emas`)                       
// }


// Harid uchun yetkazib berish narxi
// let delivery_price = prompt(`Mahsulot narxini kiriting\na. $50 dan kam\nb. $50-$100 oralig'ida\nc. $100 dan yuqori`)
// switch(delivery_price){
//     case `a`:
//         console.log(`Yetkazib berish $10`)
//         break
//     case `b`:
//         console.log(`Yetkazib berish $5`)
//         break
//     case `c`:
//         console.log(`Yetkazib berish bepul`)
//         break
//     default:
//         console.log(`Bunaqa mahsulot narxi mavjud emas`)        
// }


// Vaqt bo'yicha salomlashish
// let time = prompt(`Yurtingizdagi vaqtni kiriting:\n1. 6:00 - 12:00\n2. 12:00 - 18:00\n3. 18:00 - 22:00\n4. 22:00 - 6:00`)
// switch(time){
//     case `1`:
//         console.log(`Xayrli tong!`)
//         break
//     case `2`:
//         console.log(`Xayrli kun!`)
//         break
//     case `3`:
//         console.log(`Xayrli kech!`)
//         break
//     case `4`:
//         console.log(`Xayrli tun!`)
//         break
//     default:
//         console.log(`Bunday vaqt mavjud emas`)              
// }


// To'lov usuli tanlash
// console.log(`To'lov usullari:\n1. naqd\n2. kartadan\n3. online`)
// let pay = 2
// switch(pay){
//     case 1:
//         console.log(`Naqd pul orqali to'lov to'landi`)
//         break
//     case 2:
//         console.log(`Bank kartasi orqali to'landi`)
//         break
//     case 3:
//         console.log(`Onlayn to'lov amalga oshirildi`)
//         break
//     default:
//         console.log(`Noto'gri to'lov usuli`)    
// }


// Kod orqali valyuta aniqlash
// let money = prompt(`Valyuta kodini kiriting:\n1. USD\n2. EUR\n3. UZS`)
// switch(money){
//     case `1`:
//         console.log(`AQSh dollari`)
//         break
//     case `2`:
//         console.log(`Yevro`)
//         break
//     case `3`:
//         console.log(`O'zbekiston so'mi`)
//         break
//     default:
//         console.log(`Noma'lum valyuta`)            
// }


// Ism kursatish
// function showName(name){
//     console.log(`My name is ${name}`)
// }
// showName(`Hulkar`)


// Sonni tekshirish
// let num = prompt(`Son kiriting`)
// function number(){
//     if(num > 0){
//         console.log(`${num} Musbat son`)
//     }else if(num < 0){
//         console.log(`${num} Manfiy son`)
//     }else if(num == 0){
//         console.log(`Siz kiritgan son Nol`)
//     }else{
//         console.log(`Iltimos raqam kiriting!`)
//     }
// }
// number()


// Katta son
// let num1 = prompt(`1-sonni kiriting`)
// let num2 = prompt(`2-sonni kiriting`)
// function compare(){
//     if(num1 > num2){
//         console.log(`${num1} soni ${num2} sonidan kattaroq`)
//     }else if(num1 < num2){
//         console.log(`${num2} soni ${num1} sonidan kattaroq`)
//     }
// }
// compare()


// O'zini tanishtirish
// const myself = function (name, age, learn) {
//     console.log(`Salom mening ismim ${name}!\nHozir yoshim ${age}da. Aprelda ${age + 1} yoshga to'laman.\nHozirda ${learn} ni urganayapman`)
// }
// myself(`Hulkar`, 16, `JavaScript`)


// 3ta sonni taqqoslash
// const num = function (num1, num2, num3) {
//     if (num1 > num2 && num2 > num3) {
//         console.log(`${num1}soni ${num2}sonidan katta, ${num2}soni ${num3}sonidan katta`)
//     }
//     else if (num1 < num2 && num2 > num3) {
//         console.log(`${num1}soni ${num2}sonidan kichik, ${num2}soni ${num3}sonidan katta`)
//     }
//     else if (num1 < num2 && num2 < num3) {
//         console.log(`${num1}soni ${num2}sonidan kichik, ${num2}soni ${num3}sonidan kichik`)
//     }
//     else if (num1 > num2 && num2 < num3) {
//         console.log(`${num1}soni ${num2}sonidan katta, ${num2}soni ${num3}sonidan kichik`)
//     }
//     else {
//         console.log("???")
//     }
// }
// num(23, -4, 4)


// Yig'indi va ko'paytish
// function num(num1, num2, num3, num4, num5){
//     alert(`${num1}, ${num2}, ${num3}, ${num4}, ${num5} sonlarining yig'indisi: ${num1 + num2 + num3 + num4 + num5}`)
//     alert(`${num1}, ${num2}, ${num3}, ${num4}, ${num5} sonlarining ko'paytirilishi: ${num1 * num2 * num3 * num4 * num5}`)    
// }
// num(1, 2, 3, 4, 5);


// Asking question
// function showMessage(question){
//     alert(`Charos will we do ${question} today?`)
// }
// showMessage(`listening`)
// showMessage(`reading`)
// showMessage(`speaking`)
// showMessage(`writing`)


// Toq son yoki juft son?
// const num = (number) => {
//     if (number % 2 == 0) {
//         console.log(`${number} juft son`)
//     } else {
//         console.log(`${number} toq son`)
//     }
// }
// num(31)


// 2 ta sonni bo'lish
// const num = (num1, num2) => {
//     console.log(num1)
//     console.log(num2)
//     return num1 / num2
// }
// let total = num(45, 5)
// alert(`Ikki sonning bo'linmasi ${total} ga teng`)


// Jamoa
// const calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// console.log(`Dolphins o'rtacha ${scoreDolphins}`);
// console.log(`Koalas o'rtacha: ${scoreKoalas}`);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins guruhi g'alab qozondi`)
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas guruhi g'alaba qozondi`)
//   } else {
//     console.log(`No team wins`)
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// function name(user) {
//     if (user > 10) {
//         let total = user - 5
//         console.log(`Kiritilgan son: ${user}, 5 ni ayiramiz: ${total}`)
//     }else if(user < 10){
//         total = user + 5
//         console.log(`Kiritilgan son: ${user}, 5 ni qo'shamiz: ${total}`)
//     }
// }

// name(12)


// function greeting(name) {
//     console.log(`Assalomu alaykum, ${name} hush kelibsiz!`)
// }

// greeting(`Sardor`)

// const num = (num1, num2) => {
//     let total = num1 + num2
//     console.log(`1-son: ${num1}, 2-son: ${num2}\n2 sonning yigindisi: ${total}`)
// }

// num(5, 10)


// const toq = (num) => {
//     if(num % 2 === 0){
//         console.log(`Bu juft son`)
//     }else{
//         console.log(`Bu toq son`)
//     }
// }

// toq(2)

// function greater(num1, num2, num3) {
//     if(num1 > num2 && num1 > num3){
//         console.log(`${num1} katta`)
//     }else if(num3 > num1 && num3 > num2){
//         console.log(`${num3} katta`)
//     }else if(num2 > num1 && num2 > num3){
//         console.log(`${num2} katta`)
//     }else{
//         console.log(`what the fuck`)
//     }
// }

// greater(94, 54, 0)


// const kvadrat = (num1, num2) => {
//     let totalKvadrat = num1 ** num2
//     console.log(`${num1} ning ${num2} darajasi: ${totalKvadrat}`)
// }

// kvadrat(2, 5)

// 1
// const userText = (text) => {
//     let result = ``
//     for(let i = text.length-1; i >= 0; i--){
//         result += text[i]
//     }
//     return result
// }

// const output = userText(`hello`)
// console.log(output)

// 2
// const sliceA = text => {
//     let result = ``
//     for(let i = 0; i <= text.length; i++){
//         if(text.charAt(i) !== `a`){
//         result += text.charAt(i)
//         }
//     }
//     return result
// } 

// let output = sliceA(`banana`)
// console.log(output)

// 3
// const onlyNumbers = text => {
//     let result = ``
//     for (let i = 0; i < text.length; i++) {
//         if (Number(text.charAt(i))) {
//             result += text.charAt(i)
//         }
//     }

//     return result
// }

// const output = onlyNumbers(`abs345qw543e`)
// console.log(output)

// 4
// const onlyNumbers = text => {
//     let total = 0
//     for (let i = 0; i < text.length; i++) {
//         let n = Number(text.charAt(i))
//         if (!isNaN(n)) {
//             total += n
//         }
//     }

//     return total
// }

// const output = onlyNumbers(`abs345qw543e`)
// console.log(output)

// 5
// const firstLetter = text => {
//     let result = ``
//     for(let i = 0; i <= text.length; i++){
//         if(text.upperCase(charAt(0))){
//             return text
//         }
//     }
// }

// const output = firstLetter(`hello`)
// console.log(output)

// 6
// const numberOfSpace = text => {
//     let result = 0
//     for (let i = 0; i <= text.length; i++) {
//         if (text[i] === ` `) {
//             result++
//         }
//     }
//     return result;
// }

// const output = numberOfSpace(`good morning to everyone`)
// console.log(output)

// 7
// const isPalidron = text => {
//     let a = text.split(``).reverse().join(``);
//     if(text === a){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }

// const output = isPalidron(`madam`)

// 8
// const splitWords = text => {
//     result = ` `
//     for (let i = 0; i < text.length; i++) {
//         result = text.split(` `)
//     }
//     return result
// }

// const output = splitWords(`hello world`)
// console.log(output)

// 9
// const biggerWord = text => {
//     const word = text.split(` `)
//     let longest = ``
//     for(let i = 0; i < word.length; i++){
//         if(word[i].length > longest.length){
//             longest = word[i]
//         }
//     }
//     return longest;
// }

// const output = biggerWord(`hello, bye, JavaScript`)
// console.log(output)

// 10
// const countWords = text => {
//     const word = text.split(` `)
//     let result = 0
//     for(let i = 0; i < word.length; i ++){
//         if(text[i] !== ` `){
//             result++
//         }
//     }
//     return result;
// }

// const output = countWords(`hello world`)
// console.log(output)

// 11
// const countCharacter = text => {
//     let result = {}
//     for(let i = 0; i < text.length; i++){
//         let char = text[i]
//         if(result[char]){
//             result[char]++
//         }else{
//             result[char] = 1
//         }
//     }
//     return result;
// }
// const output = countCharacter(`aaafbbgbcc`)
// console.log(output)

// 12
// const replaceLetter = text => {
//     let result =  ``
//     for(let i = 0; i < text.length; i++){
//         let letter = text[i]
//         if(letter === `a`)
//         result += text.replaceAll(`a`, `b`)
//     }
//     return result;
// }

// const output = replaceLetter(`abc`)
// console.log(output)

// 13
// const wordsWithNumbers = text => {
//     const word = text.split(` `)
//     let result = ``
//     for(let i = 0; i < word.length; i++){
//         if(word[i] !== ``){
//             result += `${i + 1}. ${word[i]}`
//         }
//     }
//     return result;
// }

// const output = wordsWithNumbers(`hello, world`)
// console.log(output)

// 14
// const repeatWords = text => {
//     let result = ``
//     for(let i = 0; i < text.length; i++){
//         return text + text + text
//     }
// }

// const output = repeatWords(`abc`)
// console.log(output)


// Array

// Array.prototype.custolength = function () {
//     let count = 0
//     for (let i = 0; i < this.length; i++) {
//         count++
//     }
//     return count
// }

// let firstArray = [`hello`, 3, false, `key`, 0]
// console.log(firstArray)


// let secondArray = Array(`book`, true, 7, `something`)
// secondArray[6] = `Article`
// console.log(secondArray.custolength())


// let arr = [`banana`, true, null, `bye`]
// arr.push(8)
// console.log(arr)

// let arr = [`hello`, 5, `okay`]
// arr.pop()
// console.log(arr)

// let arr = [`thank you`, `js`, undefined]
// arr.unshift(true)
// console.log(arr)
// arr.shift()
// console.log(arr)


// console.log(Array.isArray([`yaoi`]))
// console.log(Array.isArray(`hello`))

// let arr = [`writing`, `listening`, `speaking`, `writing`]
// console.log(arr.at(1))

// console.log(Array.of(`writing`))

// let numbers = [1,2,3,4]
// let words = [`hell`, `heaven`, `demon`, `angel`]
// let mixed = numbers.concat(words)
// console.log(mixed)

// const singleElementArray = Array.of(5)
// console.log(singleElementArray)

// const single_element_array = Array(5)
// console.log(single_element_array)

// let fruits = [`apple`, `banana`, `cherry`]
// let vegetables = [`cucumber`, `carrot`, `garlic`]
// let mixed = [fruits, vegetables]
// console.log(mixed[1][2])

// let numbers = [1, 2, 3]
// let result = numbers.concat(4, 5, 6)
// console.log(result)

// let fruits = [`banana`, `orange`, `kiwi`, `apple`, `pineapple`]
// let sliceFruits = fruits.slice(0,2)
// console.log(sliceFruits)

// let fruits = [`banana`, `orange`, `kiwi`, `apple`, `pineapple`]
// console.log(fruits.includes(`orange`))
// console.log(fruits.includes(`cucumber`))

