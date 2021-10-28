export function addExpenseIncomeList(value, type) {
  let typeList = JSON.parse(window.localStorage.getItem(type));
  if (!typeList) {
    window.localStorage.setItem(type, JSON.stringify([value]));
  } else {
    typeList.push(value);
    window.localStorage.setItem(type, JSON.stringify(typeList));
  }
}
