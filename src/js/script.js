'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personalMovieDM = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последний просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из последний просмотренных фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDM.movies[a] = b;
personalMovieDM.movies[c] = d;

console.log(personalMovieDM);