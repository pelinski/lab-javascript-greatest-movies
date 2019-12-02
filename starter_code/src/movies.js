/* eslint no-restricted-globals: 'off' */
/* extra
function isEmpty(array) {
  return array.length === 0;
}*/

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  // if(isEmpty(movies)) return [];
  var sortedMovies = Object.assign([], movies);
  var sortedMovies = sortedMovies.sort(function(a, b) {
    if (a.year - b.year != 0) {
      return a.year - b.year;
    } else {
      /* aquí puede usarse
      return movie1.title.localeCompare(movie2.title);*/
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    }
  });
  return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  return movies.filter(function(e) {
    return e.director === "Steven Spielberg" && e.genre.includes("Drama");
  }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var orderedMovies = Object.assign([], movies); //la copia se puede hacer directamente con un map
  orderedMovies = orderedMovies.map(function(e) {
    return e.title;
  });
  orderedMovies.sort(function(a, b) { // sort por defecto ya ordena alfabéticamente
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });

  if (orderedMovies.length > 20) {
    return orderedMovies.slice(0, 20);
  } else {
    return orderedMovies;
  }
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var rates = Object.assign([], movies);
  rates = rates.map(function(e) {
    if (e.rate == "" || e.rate == undefined) {
      return 0;
    } else {
      return e.rate;
    }
  });
  var ratesAvg = rates.reduce(function(a, c) {
    return a + c / rates.length;
  }, 0);
  ratesAvg = parseFloat(ratesAvg.toFixed(2));  // se puede parsear con +(ratesAvg.toFixed(2))
  console.log(ratesAvg);
  return ratesAvg;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var dramas = Object.assign([], movies);
  dramas = dramas.filter(function(e) {
    return e.genre.includes("Drama");
  });
  return ratesAverage(dramas);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  var moviesSec = Object.assign([], JSON.parse(JSON.stringify(movies)));
  moviesSec.forEach(function(e) {
    /*
    aquí era más fácil usar un  if  (moviesSec.duration.includes("h") && moviesSec.duration.includes("min"))
    else if (moviesSec.duration.includes("h"))
    else
    y para sacar el valor de las horas y los minutos usar un split con el separador h o min! VER CORRECCIÓN
    */

    // get hours and minutes from duration value string
    let hours = e.duration.match(/\d+h/);
    if (hours != null){
    hours = parseInt(hours[0].match(/\d+/)[0]);
    } else {hours =0;}
    let minutes = e.duration.match(/\d+min/);
    if (minutes != null){
    minutes = parseInt(minutes[0].match(/\d+/)[0]);
    } else {minutes =0;}
    // convert to minutes
    let result = 0;
    if (hours.length != 0) {
      result = hours * 60;
    }
    if (minutes.length != 0) {
      result = result + minutes;
    }
    //save in duration
    e.duration = result;
  });
  return moviesSec;  // se puede hacer una copia del objeto movies reasignando con Object.assign({},movies,{duration:newDuration})
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
/*TODO!!*/
function bestYearAv(movies) {


  return ;
}

