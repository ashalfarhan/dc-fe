import { shuffle, uniqueId } from 'lodash';
import { GetRandomCountriesQuery } from '../graphql';

export function generateQuestion(
  countries: GetRandomCountriesQuery['getRandomCountries']
) {
  return countries.map(country => {
    const rand = Math.round(Math.random());
    const cleared = countries.filter(c => c.name !== country.name);
    return {
      id: uniqueId('Question_' + country.name),
      question: rand
        ? country.capital + ' is the capital of'
        : 'Which country does this flag is belong to',
      flag: rand ? undefined : country.flag,
      options: shuffle([
        {
          label: country.name,
          correct: true,
          id: uniqueId('Answer_' + country.name),
        },
        ...cleared.map(c => ({
          label: c.name,
          correct: false,
          id: uniqueId('Answer_' + country.name),
        })),
      ]),
    };
  });
}
