
export function topCustomers(orders, n = 3) {
  const customerTotals = orders
    .reduce((result, order) => {
      result[order.customer] =
        (result[order.customer] || 0) + order.total;

      return result;
    }, {});

  return Object.entries(customerTotals)
    .map(([customer, total]) => ({ customer, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 3);
}


