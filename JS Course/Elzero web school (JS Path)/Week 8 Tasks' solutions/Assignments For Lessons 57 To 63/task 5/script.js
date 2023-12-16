function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  while(startYear++ <= endYear) {
    document.write(`<option value="${startYear}">${startYear}</option>`);
  }
  document.write(`</select>`);
}

createSelectBox(2000, 2021);