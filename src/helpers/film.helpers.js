
/** This is called js docx to remember parameter types or use
 * 
 * @param {Array} list An array of "movie" objects. They must have a director property
 * @param {string} director The name of the director (case-sensitive)
 * @returns A filtered array of movies that match the given
 */
export function filterFilmsByDirector(list, director) {
  if (director) {
    return list.filter((movieObject) => {
      if (movieObject.director == director || director == "") {
        return true;
      }
    });
  }
  return list;
}

/**
 * 
 * @param {Array} list An array of "movie" objects
 * @param {string} prop A single property (key) on an object
 * @returns A cumulative list of items including every unique value that exists in the list at the specified property.
 */

export function getListOf(list, prop) {
  const tempObj = {};
  for (let i = 0; i < list.length; i++) {
    // if (!arr.includes(list[i][prop])) {
    //   //if the value is not yet in the new array, then add it in
    //   arr.push(list[i][prop]);
    // }
    if (!tempObj[list[i][prop]]) {
      tempObj[list[i][prop]] = "any truthy value";
    }
  }

  console.log(tempObj);
  return Object.keys(tempObj);

}

/**
 * 
 * @param {Array} list An array of "movie" objects
 * @returns An object with the accumulated score, average score, total count, and latest release fate for the given list of movies
 */

export function getFilmStats(list) {
  //The total movie count is simply the length of the array
  const total = list.length;

  // let acc_score = 0;
  // for (let i = 0; i < list.length; i++) {
  //   acc_score += Number(list[i].rt_score);
  // }

  const acc_score = list.reduce((acc, curr) => {
    return acc + Number(curr.rt_score);
  }, 0);

  const avg_score = acc_score / total;

  const latest = Math.max(...list.map((movie) => Number(movie.release_date)));

  // let mostRecent = Number(list[0].release_date);
  // for (let i = 1; i < list.length; i++) {
  //   if (list[i].release_date > mostRecent) {
  //     mostRecent = Number(list[i].release_date);
  //   }
  // }

  return {
    acc_score,
    avg_score,
    total,
    latest
  }
}