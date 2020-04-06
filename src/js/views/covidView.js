export const renderCountry = (info) => {
  var markup= `
    <tr>
    <td>${info.country}</td>
    <td>${info.cases.total===null?'':info.cases.total}</td>
    <td class="new">${info.cases.new===null?'':info.cases.new}</td>
    <td>${info.cases.active===null?'':info.cases.active}</td>
    <td class="recovered">${info.cases.recovered===0?'':info.cases.recovered}</td>
    <td>${info.cases.critical===0?'':info.cases.critical}</td>
    <td class="death">${info.deaths.total===0?'':info.deaths.total}</td>
    <td>${info.deaths.new===null?'':info.deaths.new}</td>
    </tr>
  `;
  if(document.getElementById('loaded')) {
    if(info.country=="World")
      document.getElementById('tableBody').insertAdjacentHTML("afterbegin",markup);
    else
      document.getElementById('loaded').insertAdjacentHTML("beforebegin",markup);
  }
  else
    document.getElementById('tableBody').insertAdjacentHTML("beforeend",markup);
}
