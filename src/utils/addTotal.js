export function addTotal(value) {
  let totalStructure = {
    total: 0,
    expense: 0,
    income: 0,
  };

  let totalList = JSON.parse(window.localStorage.getItem('totalList'));
  if (!totalList) {
    totalStructure.total = value.amount;
    totalStructure[value.type] = Math.abs(value.amount);
    window.localStorage.setItem('totalList', JSON.stringify(totalStructure));
  } else {
    totalList.total = parseFloat(totalList.total) + parseFloat(value.amount);
    totalList[value.type] =
      parseFloat(totalList[value.type]) + Math.abs(parseFloat(value.amount));
    window.localStorage.setItem('totalList', JSON.stringify(totalList));
  }
}
