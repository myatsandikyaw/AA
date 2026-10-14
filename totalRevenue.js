export function totalRevenue(orders) {
  return orders.reduce(
    (sum, order) => sum + order.total,
    0
  );
}