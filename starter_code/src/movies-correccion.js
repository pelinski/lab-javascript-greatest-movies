/* eslint no-restricted-globals: 'off' */
function isEmpty(array){
  return array.length === 0;
}
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if(isEmpty(movies)) return []
  return movies.sort(function(movie1, movie2){
    let difference =  movie1.year - movie2.year;
    if(difference === 0) {
      return movie1.title.localeCompare(movie2.title)
    }
    return difference;
  } )
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  return movies.filter(function(movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  }).length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // let titlesArray=  movies.map(function(movie) {
  //   return movie.title
  // })
  // let orderedArray = titlesArray.sort()
  // return orderedArray.splice(0, 20)
  return movies.map(function(movie) {
    return movie.title
  })
  .sort()
  .splice(0, 20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  return movies.reduce(function(acc, movie) {
    if(!movie.rate) return acc 
    return acc += +(movie.rate / movies.length).toFixed(2)
  }, 0)
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes('Drama')
  })
  return ratesAverage(dramaMovies)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
    let newDuration = 0;
    if(movie.duration.includes('h') && movie.duration.includes('min')) {
      let hoursArray = movie.duration.split('h')
      newDuration = hoursArray[0] * 60 + parseInt(hoursArray[1])
    } else if(movie.duration.includes('h')) {
      newDuration = parseInt(movie.duration) * 60
    } else {
      newDuration = parseInt(movie.duration)
    }

    return Object.assign({}, movie, {duration:newDuration})
  })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  if(isEmpty(movies)) return null
  let bestYear = 0;
  let bestRate = 0;
  let checkedMovies = []
  let count = 0;
  movies.forEach(function(movie){   
    if(!checkedMovies.includes(movie.year)) {
      count ++;
      let sameYearArray = movies.filter(function(e) {
        return movie.year === e.year
      })
      let rate = ratesAverage(sameYearArray);
      if(rate > bestRate) {
        bestRate = rate;
        bestYear = movie.year;
      } else if(rate === bestRate && movie.year < bestYear) {
        bestRate = rate;
        bestYear = movie.year;
      }
      checkedMovies.push(movie.year)
    }
    
  })
  console.log(count)
  return `The best year was ${bestYear} with an average rate of ${bestRate}`
}