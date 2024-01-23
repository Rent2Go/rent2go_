export interface CityModel {
    id: number;
    districtName: string;
    city: {
        id: number;
        cityName: string;
      }
  }