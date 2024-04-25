import { Injectable } from '@nestjs/common';
import {results} from '../model/movies.json';

@Injectable()
export class MoviesService {
  findAll() {
    return results;
  }

  findOne(id: string) {
    const movie = results.find(movie => movie.id ===id)
    return movie;
  }

}
