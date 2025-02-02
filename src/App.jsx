import "./App.css";

import News from "./components/header/News/News";
import newsCategories from "./data/newsСategories";
import newsNames from "./data/newsNames";
import ExchangeRates from "./components/header/ExchangeRates/ExchangeRates";
import currencyRates from "./data/currencyRates";
import Ads from "./components/header/Ads/Ads";

import Search from "./components/body/Search";
import searchСategories from "./data/searchСategories";
import Image from "./components/header/common/Image/Image";

import Widgets from "./components/footer/Widgets";

import WeatherWidget from "./components/footer/Widgets/WeatherWidget/WeatherWidget";
import FavoritesWidget from "./components/footer/Widgets/FavoritesWidget/FavoritesWidget";
import favoritePages from "./data/favoritePages";
import GermanMapWidget from "./components/footer/Widgets/GermanMapWidget/GermanMapWidget";
import germanMapItems from "./data/germanMapItems";
import TVProgramWidget from "./components/footer/Widgets/TVProgramWidget/TVProgramWidget";
import TVPrograms from "./data/TVPrograms";
import EtherWidget from "./components/footer/Widgets/EtherWidget/EtherWidget";
import ether from "./data/ether";

function App() {
  return (
    <>
      <header className="App-header">
        <div className="App-wrapper">
          <div className="App-header__main">
            <News newsCategories={newsCategories} newsNames={newsNames} />

            <ExchangeRates currencyRates={currencyRates} />
          </div>

          <Ads
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
          >
            <Image
              containerClass="Ads__image-container"
              imgClass="Ads-image"
              src="https://avatars.mds.yandex.net/i?id=8731d03f24c29d79d8c55f5ebf3d023269e7fe99-6235060-images-thumbs&n=1"
              alt="Plug"
            />
          </Ads>
        </div>
      </header>

      <div className="App-body">
        <div className="App-wrapper">
          <Search
            searchСategories={searchСategories}
            searchBarLabel="Яндекс"
            searchBtnName="Найти"
            searchAdvice="Найдётся всё. Например,"
            searchExample="фаза луны сегодня"
          />

          <Image
            containerClass="Banner"
            imgClass="Banner-image"
            src="https://avatars.mds.yandex.net/i?id=8731d03f24c29d79d8c55f5ebf3d023269e7fe99-6235060-images-thumbs&n=13"
            alt="Plug"
          />
        </div>
      </div>

      <footer className="App-footer">
        <div className="App-wrapper">
          <Widgets>
            <WeatherWidget
              title="Погода"
              averageTemperature="+17"
              morningTemperature="+17"
              daytimeTemperature="+20"
            />
            <GermanMapWidget title="Карта Германии" items={germanMapItems} />
            <EtherWidget title="Эфир" items={ether} />
            <FavoritesWidget title="Посещаемое" items={favoritePages} />
            <TVProgramWidget title="Телепрограмма" items={TVPrograms} />
          </Widgets>
        </div>
      </footer>
    </>
  );
}

export default App;
