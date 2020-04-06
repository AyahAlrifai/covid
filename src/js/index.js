import Covid from "./models/Covid.js";
import * as covidView from './views/covidView';
import * as base from './views/base';

var state= {
  "covid":new Covid()
};

const controlCovid = async () => {
  base.renderLoader();
  await state.covid.setCountries();
  for(var i=0;i<state.covid.countries.length;i++)
  {
    covidView.renderCountry(await state.covid.setCountriesInfo(state.covid.countries[i]));
  }
  base.clearLoader();
  state.info=state.covid.getInfo();
}

window.addEventListener("load",() => {
  controlCovid();
});

window.addEventListener("click",(e) => {
  if(state.info && e.target.getAttribute("class").match(/fab/g).length>0) {
    var element=e.target;
    var upDown=element.getAttribute("class").split(" ")[2].split("-")[2];
    var compareBy=element.parentNode.getAttribute("id");
    state.info.sort(state.covid.compareBy[compareBy]);
    if(upDown==="up")
      state.info.reverse();
    base.clearTable();

    covidView.renderCountry(state.covid.world);
    for(var i=0;i<state.info.length;i++)
      covidView.renderCountry(state.info[i]);
  }
})
