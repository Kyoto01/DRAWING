// การแสดงข้อมูล
document.write("ข้อความที่ต้องการแสดง"); // แสดงเป็นข้อความ ตัวเลข ตัวแปร หรือแท็ก HTML ก็ได้ในหน้าเว็บ 

alert("ข้อความแจ้งเตือน"); // สำหรับแจ้งเตือนผู้ใช้ในหน้าเว็บ

console.log("ข้อความ หรือ ตัวแปร"); // สำหรับ debug ค่าต่างๆ แต่จะไม่แสดงผลในหน้าเว็บ // console.log จะเเสดงข้อมูลใน Inspect แถบ Console

// การนิยามตัวแปร let
/**
 * let (เปลี่ยนแปลงค่าในตัวแปรได้)
 * let ชื่อตัวแปร;
 * let ชื่อตัวแปร = ค่าเริ่มต้น;
 * let ชื่อตัวแปร = ค่าเริ่มต้น, ชื่อตัวแปร = ค่าเริ่มต้น; // สามารถเก็บตัวแปรหลายตัวไว้ในตัวแปรเดียว
 */

// ตัวอย่างการใช้ตัวแปร let
let name; // ตัวแปรที่ประกาศไว้แต่ยังไม่ได้กำหนดค่า จะมีค่าเป็น Undefind โดยอัตโนมัติ

let money = 100; // ตัวแปรที่ประกาศ และกำหนดค่าแล้ว

let nm = 'Tharakorn', age = 20; // เก็บ 2 ตัวแปร ไว้ในตัวแปรเดียว ชนิดข้อมูลค่าของตัวแปร คือ String(ข้อความ), Number(ตัวเลข)

console.log(name); // แสดงผลลัพธ์ของตัวแปร Undefind

console.log(money); // แสดงผลลัพธ์ของตัวแปร 100

console.log(nm); // แสดงผลลัพธ์ของตัวแปร Tharakorn

console.log(age); // แสดงผลลพธ์ของตัวแปร 20

// ตัวแปรแบบคงที่ 
/**
 * const ( ค่าคงที่ ) 
 * cont ชื่อตัวแปร = ค่าของตัวแปร;
 */ 

// ตัวอย่างการใช้ตัวแปร const
const number = 1000;
// number = 2000; // เปลี่ยนแปลงค่าเดิมไม่ได้

console.log(number); // แสดงผลลพธ์ของตัวแปร 1000


// หัวข้อที่เกี่ยวข้องกับตัวแปร 
/** 
 * typeof คือ เช็คชนิดข้อมูล
 * null คือ ไม่มีการกำหนดค่าถูกกำหนดค่าโดยผู้เขียน
 * undefined คือ ไม่มีการกำหนดค่า ( เป็นค่าเริ่มต้นของโปรแกรม )
 */

// จัดการตัวเลข Number
let x,y;
x = 20; // intager
y = 20.15; // float

console.log(x);
console.log(y);

// จัดการอักขระ และ ข้อความ
let message = 'Thai land no1';

console.log(message);

// การแปลงชนิดข้อมูล ( Type Conversion )
/**
 * แปลงจาก String เป็น Number
 * x = parseInt ('1,5');
 * y = parseFloat ('1,5');
 * ใช้เครื่องหมาย ( +... ) เพิ่มไปข้างหน้า
 */
// ตัวอย่าง
let i = parseInt('1.5');
let o = (typeof('1.5'));

console.log(i);
console.log(o);

/**
 * แปลงจาก Number เป็น String 
 * ใช้เครื่องหมาย ""+ ตัวแปร หรือค่าที่เป็นตัวเลข
 * ใช้ toString(); เช่น toString();
 */
// ตัวอย่างการใช้
let p = '20';
let s = 30;

console.log(typeof(p));
console.log(typeof(s));

// Array
/**
 * ตัวแปรแบบปกติ 1 ตัวแปรสามารถเก็บค่าได้ค่าเดียว
 * แต่ถ้าเป็นตัวแปรแบบ Array 1 ตัวแปรสามารถเก็บค่าได้มากกว่า 1 ค่า
 */
// ตัวอย่างการใช้ Array เก็บกลุ่มข้อมูล
let number1 = 1,
    number2 = 2,
    number3 = 3;

    console.log(number2);

// ตัวอย่างการสร้าง Array 
// วิธีที่ 1 
/**
 * let ชื่ออาร์เรย์ = new Array();
 * let ชื่ออาร์เรย์ = Array(สมาชิกตัวที่ 1, สมาชิกตัวที่ 2, ...);
 * เช่น
 */

let kyoto = new Array(100, 200, 300);
kyoto[0] = 100;

console.log(kyoto);

let days = Array("จันทร์", "อังคาร", "พุธท");

console.log(days);

// ตัวอย่างการเข้าถึงสมาชิก Array 
/**
 * ชื่ออาร์เรย์ [เลขลำดับ]
 * let numm = Array(20, 30, 40, 50);
 * numm[0] // สมาชิกตัวที่ 1
 * numm[1] // สมาชิกตัวที่ 2
 */
let numm = Array(20, 30, 40, 50);

console.log(numm[1]); // เป็นการเข้าถึงสมาชิกตัวที่ 2 ของ Array คือ 30 ซึ่งเลขด้านหน้าสมาชิกตัวแรกของ Array จะต้องเป็น 0 เสมอ

// วิธีที่ 2 สร้างโดยใช้เครื่องหมาย [] 
/**
 * let ชื่ออาร์เรย์ = [สมาชิกตัวที่ 1, สมาชิกตัวที่ 2, ...];
 * เช่น
 */
let color = ["red", "back", "wrile"];

console.log(color);

// ตัวดำเนินการทางคณิตศาสตร์
let a = 20, b = 10; // กำหนดให้ตัวแปร a เก็บค่า 20 ตัวแปร b เก็บค่า 10

console.log(a+b); // เอาตัวแปร a+b ผลลัพธ์ 30
console.log(a-b); // เอาตัวแปร a-b ผลลัพธ์ 10
console.log(a*b); // เอาตัวแปร a*b ผลลัพธ์ 200
console.log(a/b); // เอาตัวแปร a/b ผลลัพธ์ 2
console.log(a%b); // เอาตัวแปร a%b ผลลัพธ์ 0

// ตัวดำเนินการเลขยกกำลัง
let c = 5, d = 10;

console.log(c**d);

// ตัวดำเนินการเปรียบเทียบ
let e = 20, f = 50;

console.log('เท่ากันหรือไม่', e==f); // false
console.log('ไม่เท่ากันหรือไม่',e!=f); // true
console.log('มากกว่าหรือไม่',e>f); // false
console.log('น้อยกว่าหรือไม่',e<f); // true
console.log('มากกว่าเท่ากับหรือไม่',e>=f); // false
console.log('น้อยกว่าเท่ากับหรือไม่',e<=f); // true



// กรณีใส่เครื่องหมาย ! หน้าตัวแปร
let check = true;

console.log(!check); // เมื่อเติมเครื่องหมาย ! จะทำให้ได้ความหมายตรงกันข้าม จาก true เป็น false จาก false เป็น true แค่ใส่ เครื่องหมาย !

// ตัวดำเนินการทางตรรกศาสตร์
// ตัดเกรด
/**
 * คะแนน 70-80 => A
 * คะแนน 50-60 => B
 * คะแนน <49 => F
 */

let score = 35;
console.log(score >= 70 && score <= 80,"A");
console.log(score >= 50 || score <= 60,"B");
console.log(score <= 49,"F");

// and (true) => ซ้าย && ขวา เป็นจริงทั้งคู่
// or (true) => ซ้าย || ขวา เป็นจริง

// ตัวอย่างการใช้ตัวดำเนินการเพิ่มค่า-ลดค่า
// เพิ่มค่าแบบ Prefix ++ตัวแปร
let aa = 5, bb = 10;
console.log("ค่าเริ่มต้น ", aa);
console.log("แบบ Prefix ", ++aa);
console.log("ค่าปัจจุบัน ", aa);

// เพิ่มค่าแบบ Postfix ตัวแปร++
aa = 5;
console.log("ค่าเริ่มต้น ", aa);
console.log("แบบ Postfix ", aa++);
console.log("ค่าปัจจุบัน ", aa);

// ลดค่าแบบ Prefix --ตัวแปร
console.log("ค่าเริ่มต้น ", bb);
console.log("แบบ Prefix ", --bb);
console.log("ค่าปัจจุบัน ", bb);

// ลดค่าแบบ Postfix ตัวแปร--
bb = 10;
console.log("ค่าเริ่มต้น ", bb);
console.log("แบบ Postfix ", bb--);
console.log("ค่าปัจจุบัน ", bb);

// Compound Assignment 
let xx = 10, yy = 20;
console.log("ก่อน = ", xx);
// xx += yy; // xx = xx + yy;
// xx -= yy; // xx = xx - yy;
// xx *= yy; // xx = xx * yy;
// xx /= yy; // xx = xx / yy;
// xx %= yy; // xx = xx % yy;
console.log("หลัง = ", xx)

console.log(10-(2+1));