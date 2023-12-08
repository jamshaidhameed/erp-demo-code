export const printContainer = (ContainerId) => {
  // remove scroll
  const scrolls = document.querySelectorAll('.no-scroll-on-print');
  scrolls.forEach((box) => {
    box.style.overflow = 'unset';
  });

  const newWin = window.open(' ', 'Print Page', `width=${800}, height=${2000}`);
  newWin.document.write(document.getElementById(ContainerId).innerHTML);
  newWin.document.close();

  // add scroll
  scrolls.forEach((box) => {
    box.style.overflow = 'auto';
  });

  setTimeout(() => {
    newWin.print();
    newWin.close();
  }, 250);
};

export const exportToExcel = (ContainerId) => {
  const location = 'data:application/vnd.ms-excel;base64,';
  const excelTemplate =
    '<html> ' +
    '<head> ' +
    '<meta http-equiv="content-type" content="text/plain; charset=UTF-8"/> ' +
    '</head> ' +
    '<body> ' +
    document.getElementById(ContainerId).innerHTML +
    '</body> ' +
    '</html>';
  window.location.href = location + window.btoa(excelTemplate);
};
