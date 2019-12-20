import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

export const __mock_data__ = {
  shows: [{
    id: 250,
    url: "http://www.tvmaze.com/shows/250/kirby-buckets",
    name: "Kirby Buckets",
    type: "Scripted",
    language: "English",
    genres: ["Comedy"],
    status: "Ended",
    runtime: 30,
    premiered: "2014-10-20",
    officialSite: "http://disneyxd.disney.com/kirby-buckets",
    schedule: {time: "07:00", days: Array(5)},
    rating: {average: null},
    weight: 0,
    image: {
      medium: "http://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg",
      original: "http://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg"
    },
    summary: "<p>The single-camera series that mixes live-action and animation stars Jacob Bertrand as the title character.</p>",
    updated: 1574820377,
    episodes: [
      {
        id: "20849",
        url: "http://www.tvmaze.com/episodes/20849/kirby-buckets-1x01-cars-buses-and-lawnmowers",
        name: "Cars, Buses and Lawnmowers",
        season: 1,
        number: 1,
        airdate: "2014-10-20",
        airtime: "20:00",
        airstamp: "2014-10-21T00:00:00+00:00",
        runtime: 30,
        image: null,
        summary: "<p>Kirby learns about a character design contest featuring the </p>",
      },
      {
        id: "20850",
        url: "http://www.tvmaze.com/episodes/20849/kirby-buckets-1x01-cars-buses-and-lawnmowers",
        name: "Cars, Buses and Lawnmowers",
        season: 1,
        number: 1,
        airdate: "2014-10-20",
        airtime: "20:00",
        airstamp: "2014-10-21T00:00:00+00:00",
        runtime: 30,
        image: null,
        summary: "<p>Kirby learns about a character design contest featuring the </p>",
      }
    ]
  },
    {
      id: 251,
      url: "http://www.tvmaze.com/shows/251/downton-abbey",
      name: "Downton Abbey",
      type: "Scripted",
      language: "English",
      genres: (3) ["Drama", "Family", "Romance"],
      status: "Ended",
      runtime: 60,
      premiered: "2010-09-26",
      officialSite: "http://www.itv.com/downtonabbey",
      schedule: {time: "21:00", days: Array(1)},
      rating: {average: 9.1},
      weight: 93,
      webChannel: null,
      externals: {tvrage: 26615, thetvdb: 193131, imdb: "tt1606375"},
      image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_portrait/1/4601.jpg",
        original: "http://static.tvmaze.com/uploads/images/original_untouched/1/4601.jpg"
      },
      summary: "<p>The Downton Abbey estate stands a splendid example of confidence and mettle.</p>",
      updated: 1573501184,
      episodes: [
        {
          id: "20851",
          url: "http://www.tvmaze.com/episodes/20851/downton-abbey-1x01-episode-1",
          name: "Episode 1",
          season: 1,
          number: 1,
          airdate: "2010-09-26",
          airtime: "21:00",
          airstamp: "2010-09-26T20:00:00+00:00",
          runtime: 60,
          image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_landscape/14/36969.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/14/36969.jpg"
          },
          summary: "<p>Costume drama set in an Edwardian country house in 1912, written by Oscar-winning writer Julian Fellowes.</p>"
        },
        {
          id: "20853",
          url: "http://www.tvmaze.com/episodes/20853/downton-abbey-1x03-episode-3",
          name: "Episode 3",
          season: 1,
          number: 3,
          airdate: "2010-10-10",
          airtime: "21:00",
          airstamp: "2010-10-10T20:00:00+00:00",
          runtime: 60,
          image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_landscape/14/36971.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/14/36971.jpg"
          },
          summary: "<p>Cora's attempts at matchmaking are dashed when Mary is smitten not by intended target Evelyn Napier, but by his handsome friend, Turkish attache Kemal Pamuk.</p>",
        }
      ]
    }
   ]
};
