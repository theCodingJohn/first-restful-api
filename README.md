## Introduction

This very simple API was made to practice Node, ExpressJS and writing documentation.

## Authentication

No authentication is required to access this API

## Routes

There's only one route in this API which is:

```
/movies
```

## Get the list of all the movies in fake database

```
GET /movies
```

Returns an array of objects like this:

```
{
    id: 8,
    movie_title: "Death of a President",
    year: 2009,
}
```

| Key         | Type   | description                    |
| ----------- | ------ | ------------------------------ |
| id          | number | Unique identifier of the movie |
| movie_title | string | Title of the movie             |
| year        | number | Release year of the movie      |

## Get a movie by id

```
GET /movies/:id
```

| Key         | Type   | description                    |
| ----------- | ------ | ------------------------------ |
| id          | number | Unique identifier of the movie |
| movie_title | string | Title of the movie             |
| year        | number | Release year of the movie      |

## Add a movie

```
POST /movies
```

The body should contain these key value pair

| Key         | Type   | description               |
| ----------- | ------ | ------------------------- |
| movie_title | string | Title of the movie        |
| year        | number | Release year of the movie |

## Delete a movie

```
DELETE /movies/:id
```

| Key         | Type   | description                    |
| ----------- | ------ | ------------------------------ |
| id          | number | Unique identifier of the movie |
| movie_title | string | Title of the movie             |
| year        | number | Release year of the movie      |

## Edit a movie

```
PATCH /movies/:id
```

The body should contain any of these key value pair

| Key         | Type   | description               |
| ----------- | ------ | ------------------------- |
| movie_title | string | Title of the movie        |
| year        | number | Release year of the movie |
