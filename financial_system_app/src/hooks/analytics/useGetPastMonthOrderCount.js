

const useGetPastMonthOrderCount = function (orderCountsPartitionByMonth) {
  const currentMonth = new Date().getMonth() + 1;

  const analyticOrderByMonth = orderCountsPartitionByMonth.find(order => Number(order.month) === currentMonth);

  return analyticOrderByMonth?.count.toLocaleString('ru-RU') || orderCountsPartitionByMonth[orderCountsPartitionByMonth.length - 1].count.toLocaleString('ru-RU');
}

export default useGetPastMonthOrderCount;