// For1. k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.

// let k = 10;
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   console.log(k);
// }

// For2. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let narx = 89_999;

// for (let i = 0; i <= 10; i++) {
//   if (i == 10) {
//     console.log(`${i / 10}kg =${(i / 10) * narx}som`);
//   } else {
//     console.log(`${i / 10}gr =${(i / 10) * narx}som`);
//   }
// }

// For3. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2

// let n = 10;
// let sam = 0;
// for (let i = 0; i <= n; i++) {
//   sam += (n + i) ** 2;
// }
// console.log(sam);

// For4. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// 1^N+2^(N-1) + ...+ N^1
// Input: N = 5;
// 1 ^ 5 + 2 ^ 4 + 3 ^ 3 + 4 ^ 2 + 5 ^ 1
// Output: 65

// let n = 5;
// let k = n;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i ** k;
//   k--;
// }

// console.log(sum);

// For5. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.

// let a = 1;
// let b = 8;

// for (let i = a; i <= b; i++) {
//   for (let k = 0; k < i; k++) {
//     console.log(i);
//   }
// }

// For6. Sonning bo’luvchilarini topish;
// let son = 5;

// for (i = 1; i <= son; i++) {
//   if (son % i == 0){console.log(i)} ;
//

// UYGA VAZIFA

// For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).

// let a = 2;
// let b = 5;
// let count = 0;

// for (let i = a; i <= b; i++) {
//   for (let k = 0; k < i; k++) {
//     count++;
//     console.log(i);
//   }
// }

// console.log(`sonlar soni ${count} `);

// For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.\

// let a = 2;
// let b = 5;

// let count = 0;

// for (let i = b - 1; i > a; i--) {
//   count++;
//   console.log(i);
// }
// console.log(`sonlar soni ${count} `);

// For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let narx = 59_888;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}kg =${i * narx}som`);
// }

// For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let narx = 59_888;

// for (let i = 12; i <= 20; i += 2) {
//   console.log(`${i / 10} kg = ${(i / 10) * narx} so'm`);
// }

// For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.

// let a = 3;
// let b = 8;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   sum += i;
// }
// console.log(`yig'ind soni ${sum}`);

// For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.

// let a = 3;
// let b = 8;

// let kopaytma = 1;
// for (let i = a; i <= b; i++) {
//   kopaytma *= i;
// }
// console.log(`ko'paytma ${kopaytma}`);

// For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin
// let a = 3;
// let b = 8;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//   sum += i * i;
// }
// console.log(` kvadratlar yig'indisini: ${sum}`);

// For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n
// let n = 5;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += 1 / i;
// }
// console.log(`yig'indi: ${sum}`);

// For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n

// let n = 5;
// let kopaytma = 1;
// for (let i = 1; i <= n; i++) {
//   kopaytma *= 1 + i / 10;
// }
// console.log(`ko'paytmasi:${kopaytma}`);

// For10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
// n^2=1+3+5+... + (2*n-1)
// Har bir qo'shiluvchidan keyin natijani ekranga chiqarib boring. Natijda ekranda 1 dan n gacha bo'lgan sonlar kvadrati chiqariladi.

// let n = 5;
// let kvadrati = 1;
// for (let i = 1; i <= n; i++) {
//   kvadrati += i ** 5;
// }
// console.log(`kvadrati:${kvadrati}`);

// For11. n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.
// a^n=a*a*a...a;

// let n = 5;
// let a = 2;
// let darajasi = 1;
// for (let i = 1; i <= n; i++) {
//   darajasi *= a;
// }
// console.log(a, "ning", n, "darajasi:", darajasi);

// For12. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.

// let n = 5;
// let a = 2;
// let darajasi = 1;
// for (let i = 1; i <= n; i++) {
//   darajasi *= a;
//   console.log(a, "ning", i, "darajasi:", darajasi);
// }

// For13. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin.
// S = 1+a^1+a^2 + a^3 + ... a^n

// let n = 5;
// let a = 2;
// let darajasi = 1;
// let yegindi = 0;
// for (let i = 1; i <= n; i++) {
//   darajasi *= a;
//   yegindi += darajasi;
//   console.log(`${a} ning ${i} darajasi: ${darajasi} yegindi:${yegindi}`);
// }

// For14. n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = 1! + 2! + 3! + ... + n!

// let n = 5;
// let yigindi = 0;
// let sum = 1;
// for (let i = 1; i <= n; i++) {
//   sum *= i;
//   yigindi += sum;
// }
// console.log(`yigindi:${yigindi}`);

// For15. N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^K + 2^K + ... + N^K

// let n = 5;
// let k = 3;
// let yegindi = 0;

// for (let i = 1; i <= n; i++) {
//   yegindi += i ** k;
//   console.log(`yeg'indini:${yegindi}`);
// }

// For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^1 + 2^2 + … + N^N

// let n = 5;
// let yegindi = 0;
// for (let i = 1; i <= n; i++) {
//   yegindi += i ** i;
//   console.log(`yegindi:${yegindi}`);
// }

// For17. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo.
// let a = 2;
// let b = 5;
// let count = 0;

// for (let i = a; i <= b; i++) {
//   for (let k = 0; k < i; k++) {
//     count++;
//     console.log(i, i - a + 1);
//   }
// }

// console.log(`sonlar soni ${count} `);

// For18. Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.
// let a = 12;
// let boluvchilari = 0;
// let yegindisi = 0;

// for (let i = 1; i <= a; i++) {
//   if (a % i == 0) {
//     console.log(i);
//     yegindisi += i;
//     boluvchilari++;
//   }
// }
// console.log(`boluvchilar:${boluvchilari}, yegindisi:${yegindisi}`);

// For19. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.

// let n = 3;
// let boluvchilarSon = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     boluvchilarSon++;
//   }
// }
// if (boluvchilarSon == 2) {
//   console.log("tub son");
// } else {
//   console.log("tub emas");
// }

// For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let n = 5;

// for(let i = 1; i<=n; i++){

// }

// let n = 5;
//   let qator = " ";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     qator += j + " ";
//   }
//   console.log(qator);
// }
