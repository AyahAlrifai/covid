import axios from "axios";

export default class Covid {
    constructor() {
      this.items=[];
      this.countries=[];
      this.world={};
      this.compareBy={
        "country":this.compare_country,
        "total-cases":this.compate_total_cases,
        "new-cases":this.compare_new_cases,
        "active-cases":this.compare_active_cases,
        "recovered-cases":this.compare_recoverd_cases,
        "critical-cases":this.compare_critical_cases,
        "total-death":this.compare_total_death,
        "new-death":this.compare_new_death
      };
    }

    async setCountries() {
      const countries=await axios({
          "method":"GET",
          "url":"https://covid-193.p.rapidapi.com/countries",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"covid-193.p.rapidapi.com",
          "x-rapidapi-key":"a48854d39bmsh8373cac37acb79ap17cfdcjsn6f40931dc7e9"
          }
          })
          .then((response)=>{
            this.countries=response.data.response;
          })
          .catch((error)=>{
            console.log(error)
          });
    }

    async setCountriesInfo(country) {
      var current;
      const countriesInfo= await axios({
          "method":"GET",
          "url":"https://covid-193.p.rapidapi.com/statistics",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"covid-193.p.rapidapi.com",
          "x-rapidapi-key":"a48854d39bmsh8373cac37acb79ap17cfdcjsn6f40931dc7e9"
          },"params":{
          "country":`${country}`
          }
          })
          .then((response)=>{
            if(response.data.response["0"].country==="World")
              this.world=response.data.response["0"];
            else {
              this.items.push(response.data.response["0"]);
            }
            current=response.data.response["0"];

          })
          .catch((error)=>{
            console.log(error)
          })
          return current;
    }

    compare_country(a, b) {
        if (a.country > b.country) return -1;
        if (b.country > a.country) return 1;
        return 0;
      }

    compate_total_cases(a,b) {
      a=parseInt(a.cases.total);
      a=isNaN(a)?0:a;
      b=parseInt(b.cases.total);
      b=isNaN(b)?0:b;
      if (a > b) return 1;
      if (b > a) return -1;;
      return 0;
    }

    compare_new_cases(a,b) {
      a=parseInt(a.cases.new);
      a=isNaN(a)?0:a;
      b=parseInt(b.cases.new);
      b=isNaN(b)?0:b;
      if (a > b) return 1;
      if (b > a) return -1;;
      return 0;
    }

    compare_active_cases(a,b) {
      a=parseInt(a.cases.active);
      a=isNaN(a)?0:a;
      b=parseInt(b.cases.active);
      b=isNaN(b)?0:b;
      if (a > b) return 1;
      if (b > a) return -1;;
      return 0;
    }

    compare_recoverd_cases(a,b) {
      a=parseInt(a.cases.recovered);
      a=isNaN(a)?0:a;
      b=parseInt(b.cases.recovered);
      b=isNaN(b)?0:b;
      if (a > b) return 1;
      if (b > a) return -1;;
      return 0;
    }

    compare_critical_cases(a,b) {
      a=parseInt(a.cases.critical);
      a=isNaN(a)?0:a;
      b=parseInt(b.cases.critical);
      b=isNaN(b)?0:b;
      if (a > b) return 1;
      if (b > a) return -1;;
      return 0;
    }

    compare_total_death(a,b) {
      a=parseInt(a.deaths.total);
      a=isNaN(a)?0:a;
      b=parseInt(b.deaths.total);
      b=isNaN(b)?0:b;
      if (a > b) return 1;
      if (b > a) return -1;;
      return 0;
    }

    compare_new_death(a,b) {
      a=parseInt(a.deaths.new);
      a=isNaN(a)?0:a;
      b=parseInt(b.deaths.new);
      b=isNaN(b)?0:b;
      if (a > b) return 1;
      if (b > a) return -1;
      return 0;
    }

    getInfo() {
      return this.items;
    }
}
/*
>${info.country}</th>
<th>${info.confirmed}</th>
<th>${info.deaths}</th>
<th>${info.recovered}<*/
