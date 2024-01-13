function infoData() {
    const resultElement = document.querySelector('.card-info');
    resultElement.textContent = '';
    const infoAboutCity =document.querySelector('#input').value;
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&titles=${infoAboutCity}&origin=*`;
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        if (data[0]) {
            resultElement.textContent = `Информация: ${JSON.stringify(data[0])}`;
        } else {
            resultElement.textContent = 'Нет информации о таком городе';
        }
    })
    .catch(error => {
      console.error('Ошибка запроса:', error);
      resultElement.textContent = 'Произошла ошибка при запросе к API';
    });
}
document.querySelector('.submitBtn').addEventListener('click', infoData);