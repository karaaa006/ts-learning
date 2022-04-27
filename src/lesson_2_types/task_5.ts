// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Load { LOADING, READY };

const download = {
    load: Load.READY
}

if (download.load === Load.LOADING) {
  console.log('Страница загружается');
}
if (download.load === Load.READY) {
  console.log('Страница загружена');
}