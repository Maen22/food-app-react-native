import axios from "axios";

const API_KEY =
  "gIHAh8ilMX_eTvbwSRW4uncBoIfw9KmLMszTdmpn3qU28Am0u6ZjMingYTdMC8WwJp6d2ePjs9LWDlH1n9JtJWC2cJf1LUo9mlpcmdmDDs3k4VapaPljaX9BbLttYXYx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
