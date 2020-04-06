export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = () => {
    const loader = `
    <tr id="loaded">
      <td colspan="8">
          <div class="${elementStrings.loader}">
              <svg>
                  <use href="img/icons.svg#icon-cw"></use>
              </svg>
          </div>
        </td>
      <tr>
    `;
    document.getElementById('tableBody').insertAdjacentHTML('beforeend', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector("#loaded");
    if (loader) loader.parentElement.removeChild(loader);
};

export const clearTable= () => {
  document.getElementById('tableBody').innerHTML="";
}
