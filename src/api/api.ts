import { ApiRoute } from '../consts';
import Loader from './loader';

export default class StudentsApi {
  async GetStudents() {
    const loader = new Loader(`${ApiRoute.Persons}`);
    const response = await loader.get();
    
    return response;
  }
}