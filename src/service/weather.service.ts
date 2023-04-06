import { Provide, makeHttpRequest } from '@midwayjs/core';
import { WeatherInfo } from '../interface';
import { WeatherEmptyDataError } from '../error/weather.error';

@Provide()
export class WeatherService {
    async getWeather(cityId: string): Promise<WeatherInfo> {
 
        if (!cityId) {
            throw new WeatherEmptyDataError();
        }

        try {
            const result:any = await makeHttpRequest(`http://www.weather.com.cn/data/sk/${cityId}.html`, {
                dataType: 'json',
            });
       
            if (result.status === 200) {
                return result.data;
            }
        } catch (error) {
            console.log('error',9899999999999)
            throw new WeatherEmptyDataError(error);
        }

    }
}
