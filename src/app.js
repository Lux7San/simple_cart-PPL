import { 
  incrementQty, 
  decrementQty,
  recalculateSubTotal, // import recalculate
  defaultQty, // import defaultQty
  totalAmount // import totalAmout
} from './helpers.js';

const incrButton = document.querySelector('#incr'); //querySelector mencari elemen berdasarkan id incr
const decrButton = document.querySelector('#decr'); //querySelector mencari elemen berdasarkan id decr
const qtyInput = document.querySelector('#qty'); //querySelector mencari elemen berdasarkan id qty
const price = document.querySelector('#price'); //querySelector mencari elemen berdasarkan id price
const subTotal = document.querySelector('#subtotal'); //querySelector mencari elemen berdasarkan id subtotal
const kodePromo = document.querySelector('#code'); //querySelector mencari elemen berdasarkan id code
const btnOk = document.querySelector('#confirmButton') //querySelector mencari elemen berdasarkan id confirmButton

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ` + recalculateSubTotal(price.value, qtyInput.value); // textcontent merubah isi Rpnya
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  qtyInput.value = defaultQty(qtyInput.value);
  subTotal.textContent = `Rp. ` + recalculateSubTotal(price.value, qtyInput.value); // textcontent merubah isi Rpnya
});

qtyInput.addEventListener('keyup', () => { //keyup untuk mendeteksi sebuah aksi dimana apabila user menekan tombol pada keyboard lalu jika di tekan akan langsung menjalankan perintah atau sintak selanjutnya
  subTotal.textContent = `Rp. ` + recalculateSubTotal(price.value, qtyInput.value); // textcontent merubah isi Rpnya. value disini untuk menghasilkan
});

price.addEventListener('keyup', () => { //keyup untuk mendeteksi sebuah aksi dimana apabila user menekan tombol pada keyboard lalu jika di tekan akan langsung menjalankan perintah atau sintak selanjutnya
  subTotal.textContent = `Rp. ` + totalAmount(price.value, qtyInput.value, kodePromo.value); // textcontent merubah isi Rpnya. value disini untuk menghasilkan
});

kodePromo.addEventListener('keyup', () => { //keyup untuk mendeteksi sebuah aksi dimana apabila user menekan tombol pada keyboard lalu jika di tekan akan langsung menjalankan perintah atau sintak selanjutnya
  subTotal.textContent = `Rp. ` + totalAmount(price.value, qtyInput.value, kodePromo.value); // textcontent merubah isi Rpnya. value disini untuk menghasilkan
});

btnOk.addEventListener('keyup', () => { //keyup untuk mendeteksi sebuah aksi dimana apabila user menekan tombol pada keyboard lalu jika di tekan akan langsung menjalankan perintah atau sintak selanjutnya
  subTotal.textContent = `Rp. ` + totalAmount(price.value, qtyInput.value, kodePromo.value); // textcontent merubah isi Rpnya
});