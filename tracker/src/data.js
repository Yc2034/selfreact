let invoices = [
  {
    name: "夭夭桃Spring",
    platform: "小红书",
    fans: "30000",
    category: "绘画",
    number: 1,
  },
  {
    name: "核桃_",
    platform: "小红书",
    fans: "55000",
    category: "绘画",
    number: 2,
  },
  {
    name: "肚肚九九",
    platform: "小红书",
    fans: "22000",
    category: "绘画",
    number: 3,
  },

];

export function getInvoices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find(
    (invoice) => invoice.number === number
  );
}
