"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const movieName = prompt("Один из последних просмотренных фильмов?", ""),
	movieRating = +prompt("На сколько оцените его?", ""),
	movieNameRepeat = prompt("Один из последних просмотренных фильмов?", ""),
	movieRatingRepeat = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[movieName] = movieRating;
personalMovieDB.movies[movieNameRepeat ] = movieRatingRepeat;

console.log(personalMovieDB);
