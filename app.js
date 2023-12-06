// var viz = new tableau.Viz(placeholderDiv, url, options);

let viz;

// 1. Create a variable to store the placeholderDiv

const placeholderDiv = document.getElementById("vizContainer");

// 2. Create a variable to store the url

const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia?:language=en-US&:display_count=n&:origin=viz_share_link";

// 3. Create a variable to store the dashboard options

const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

function initViz() {
  console.log("Viz is ready to load");
  viz = new tableau.Viz(placeholderDiv, url, options);
}

// listen for the content to be loaded, when finished, load the viz

document.addEventListener("DOMContentLoaded", initViz);

// Buttons
// Where are they????????????????

const exportpdfbutton = document.getElementById("exportPDF");

// listen for button clicked

exportpdfbutton.addEventListener("click", exportPDFfunction);

// What happens when buttons are clicked

function exportPDFfunction() {
  viz.showExportPDFDialog();
}

// my powerpoint button

const exportpowerpointbutton = document.getElementById("exportPowerPoint");

// listen for button clicked

exportpowerpointbutton.addEventListener("click", exportPowerPointfunction);

// What happens when buttons are clicked

function exportPowerPointfunction() {
  viz.showExportPowerPointDialog();
}

// -----------------------------------------------------------------

// Filter range buttons

const filterButton = document.getElementById("FilterButton");

filterButton.addEventListener("click", getRangeValues);

function getRangeValues() {
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;

  console.log(minValue, maxValue);

  // need to get the active sheet and then list of worksheets

  filterButton;

  const workbook = viz.getWorkbook();

  console.log(workbook);

  const activesheet = workbook.getActiveSheet();

  console.log(activesheet);

  const sheets = activesheet.getWorksheets();

  console.log(sheets);

  const sheetToFilter = sheets[0];

  console.log(sheetToFilter);

  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("Viz Filtered"));
}
