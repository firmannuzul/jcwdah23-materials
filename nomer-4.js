let number = 1000;

let rupiah = number.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR"
});

console.log(rupiah);
