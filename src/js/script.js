'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
	}
}

start();

const personalMovieDM = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

/* const a = prompt('Один из последний просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из последний просмотренных фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDM.movies[a] = b;
personalMovieDM.movies[c] = d; */


function rememberMyFilms() {
	for (let i=0; i<2; i++) {
		const a = prompt('Один из последний просмотренных фильмов?', ''),
			  b = prompt('На сколько оцените его?', '');
	
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDM.movies[a] = b;
			console.log('done');
		} else {
			console.log('Error');
			i--;
		}
	}
}

rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDM.count < 10) {
		alert('Просмотрено мало фильмов');
	} else if (personalMovieDM.count >= 10 && personalMovieDM.count < 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDM.count >= 30) {
		alert('Вы киноман');
	} else {
		console.log('Error');
	}
}
detectPersonalLevel();

console.log(personalMovieDM);

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDM);
	} 
}

showMyDB(personalMovieDM.privat);


function writeYourGenres() {
	for (let i=1; i < 4; i++) {
		personalMovieDM.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();