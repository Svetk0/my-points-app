export default function initSavedCards () { 
    let domMain = document.querySelector('.main');
    let card1 =
        `  <h3 class="savedCards-title">Saved Cards</h3>
        <div class="card_container">
          <div class="card">
            <h2 class="card-name">London</h2>
            <div class="card-description">
              <div class="card-timezone">12:10  (UTC+0)</div>
              <div class="card-weather">Temperature: 6℃</div>
              <div class="card-currency">Currency: British pound (£)</div>
              <div class="card-map"><img class="londonMap" src="src/images/londonMap.png" alt="..."></div>
              <div class="card-hotels">Recomended hotels</div>
              <div class="card-cafes">Recomended cafes</div>
              <div class="card-services">Local services</div>
              <div class="card-info">Additional useful info</div>
              <form action="https://en.wikipedia.org/wiki/London">
              <button class="learnMoreBtn">Learn More</button>
            </form>
            </div>
          </div>
          <div class="card">
            <h2 class="card-name">Berlin</h2>
            <div class="card-description">
              <div class="card-timezone">13:10 (UTC+2)</div>
              <div class="card-weather">Temperature: 3℃</div>
              <div class="card-currency">Currency: Euro (€)</div>
              <div class="card-map"><img class="berlinMap" src="src/images/berlinMap.png" alt="..."></div>
              <div class="card-hotels">Recomended hotels</div>
              <div class="card-cafes">Recomended cafes</div>
              <div class="card-services">Local services</div>
              <div class="card-info">Additional useful info</div>
              <form action="https://ru.wikipedia.org/wiki/Берлин">
                <button class="learnMoreBtn">Learn More</button>
              </form>
            </div>
          </div>
          <div class="card">
            <h2 class="card-name">Sydney</h2>
            <div class="card-description">
              <div class="card-timezone">23:10 (UTC+11)</div>
              <div class="card-weather">Temperature: 23℃</div>
              <div class="card-currency">Currency: Australian dollar ($)</div>
              <div class="card-map"><img class="sydneyMap" src="src/images/sydneyMap.png" alt="..."></div>
              <div class="card-hotels">Recomended hotels</div>
              <div class="card-cafes">Recomended cafes</div>
              <div class="card-services">Local services</div>
              <div class="card-info">Additional useful info</div>
              <form action="https://ru.wikipedia.org/wiki/Сидней">
                <button class="learnMoreBtn">Learn More</button>
              </form>
            </div>
          </div>
          <div class="card">
            <h2 class="card-name">Tokyo</h2>
            <div class="card-description">
              <div class="card-timezone">21:10 (UTC+9)</div>
              <div class="card-weather">Temperature: 5℃</div>
              <div class="card-currency">Currency: Japanese yen (¥)</div>
              <div class="card-map"><img class="tokyoMap" src="src/images/tokyoMap.png" alt="..."></div>
              <div class="card-hotels">Recomended hotels</div>
              <div class="card-cafes">Recomended cafes</div>
              <div class="card-services">Local services</div>
              <div class="card-info">Additional useful info</div>
              <form action="https://ru.wikipedia.org/wiki/Токио">
                <button class="learnMoreBtn">Learn More</button>
              </form>
            </div>
          </div> 
        </div>`;
    
    domMain.innerHTML += card1;
 
}


console.log('initSavedCards');
initSavedCards();