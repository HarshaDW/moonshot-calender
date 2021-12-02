import axios, { AxiosResponse } from 'axios';
import { Upcoming } from '../types/Upcoming';

export class ApiInstance {
  private instance = axios.create({
    method: 'GET',
    baseURL: 'https://lldev.thespacedevs.com/2.2.0/',
  });

  getUpcomingLaunches(url: string): Promise<AxiosResponse<Upcoming>> {
    return this.instance.get<Upcoming>(`/${url}`);
  }
  searchByDateRange(url: string): Promise<AxiosResponse<Upcoming>> {
    return this.instance.get<Upcoming>(`/${url}`);
  }
}
