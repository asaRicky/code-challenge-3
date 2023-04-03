const filmsList = document.querySelector('#films');
const movieDetails = document.querySelector('#movie-details');

fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    // Retrieve the necessary information for the first movie
    const movie = data[0];
    const poster = movie.poster;
    const title = movie.title;
    const runtime = movie.runtime;
    const showtime = movie.showtime;
    const capacity = movie.capacity;
    const ticketsSold = movie.tickets_sold;

    // Populate the movie details section with the retrieved information
    movieDetails.querySelector('h2').textContent = title;
    movieDetails.querySelector('p:nth-of-type(1)').textContent = `Runtime: ${runtime}`;
    movieDetails.querySelector('p:nth-of-type(2)').textContent = `Showtime: ${showtime}`;
    movieDetails.querySelector('p:nth-of-type(3)').textContent = `Capacity: ${capacity}`;
    movieDetails.querySelector('p:nth-of-type(4)').textContent = `Tickets Sold: ${ticketsSold}`;

    // Populate the movie menu with the retrieved information
    const movieItem = document.createElement('li');
    const movieLink = document.createElement('a');
    const moviePoster = document.createElement('img');

    movieLink.href = '#';
    moviePoster.src = poster;
    moviePoster.alt = title;

    movieLink.appendChild(moviePoster);
    movieItem.appendChild(movieLink);
    filmsList.appendChild(movieItem);
  })
  .catch(error => console.log(error));

  fetch('http://localhost:3000/films/' + filmId)
  .then(response => response.json())
  .then(movie => {
    const main = document.getElementById('main');
    main.innerHTML = `
      <h2>${movie.title}</h2>
      <img src="${movie.poster}" alt="${movie.title} poster" style="max-width: 300px;">
      <p><strong>Description:</strong> ${movie.description}</p>
      <p><strong>Showtime:</strong> ${movie.showtime}</p>
      <p><strong>Tickets Sold:</strong> ${movie.tickets_sold}</p>
      <p><strong>Capacity:</strong> ${movie.capacity}</p>
      <p><strong>Runtime:</strong> ${movie.runtime} min</p>
      <p><strong>Available Tickets:</strong> ${movie.capacity - movie.tickets_sold}</p>
       `;
  })
  .catch(error => console.error(error))

   //calculate the of tickets available by subtracting the tickets sold from the capacity
   const capacity = 100; // assume a capacity of 100 seats
const ticketsSold = 75; // assume 75 tickets have already been sold

const availableTickets = capacity - ticketsSold;

console.log(`There are ${availableTickets} tickets available.`);

// update the number of available tickets
const movieTickets = document.createElement('p');
movieTickets.textContent = `Available Tickets: ${availableTickets}`;
document.querySelector('#movie-details').appendChild(movieTickets);

//Populate the #movie-details element with the first movie's details, including the poster, title, runtime, showtime, and available tickets.
// Update the movie poster
const moviePoster = document.createElement('img');
moviePoster.src = poster;
moviePoster.alt = title;
document.querySelector('#movie-details').appendChild(moviePoster);
// Update the movie title
const movieTitle = document.createElement('h2');
movieTitle.textContent = title;
document.querySelector('#movie-details').appendChild(movieTitle);
// Update the movie runtime
const movieRuntime = document.createElement('p');
movieRuntime.textContent = `Runtime: ${runtime}`;
document.querySelector('#movie-details').appendChild(movieRuntime);
// Update the movie showtime
const movieShowtime = document.createElement('p');
movieShowtime.textContent = `Showtime: ${showtime}`;
document.querySelector('#movie-details').appendChild(movieShowtime);
// Calculate and update the number of available tickets
const movieTickets = document.createElement('p');
movieTickets.textContent = `Available Tickets: ${availableTickets}`;
document.querySelector('#movie-details').appendChild(movieTickets);

// Remove the placeholder element, if it exists
const placeholder = document.querySelector('#films li.placeholder');
if (placeholder) {
  placeholder.remove();
}
// Loop through the film data and create a list item for each movie
for (const film of films) {
  const listItem = document.createElement('li');
  listItem.classList.add('film', 'item');

  const title = document.createElement('h3');
  title.textContent = film.title;
  listItem.appendChild(title);

  const showtime = document.createElement('p');
  showtime.textContent = `Showtime: ${film.showtime}`;
  listItem.appendChild(showtime);

  filmsList.appendChild(listItem);
}
//add a but ticket button to the movie details section and attach a click event litsener to it 
// Create a "Buy Ticket" button
const buyTicketButton = document.createElement('button');
buyTicketButton.textContent = 'Buy Ticket';
movieDetails.appendChild(buyTicketButton);

// Attach a click event listener to the button
buyTicketButton.addEventListener('click', () => {
    const movieId = 1;
    const numTickets = 3; 
    
    // Sends a POST request to the backend
    fetch('/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg'
      },
      body: JSON.stringify({ movieId, numTickets })
    })
    .then(response => {
      if (response.ok) {
       return response.json()
      } else {
       return response(Tickets-Unavailable)
      }
    })
    .catch(error => {
      retry
    });
  })
  .then(data => {
    const { tickets_sold, capacity } = data;
    const availableTickets = capacity - tickets_sold;
    
    if (availableTickets > 0) {
      // Update the number of available tickets on the frontend
      numAvailableTickets.textContent = availableTickets;
      
      // Display a success message
      successMessage.textContent = `You have successfully purchased ${numTickets} ticket(s)`;
      successMessage.style.display = 'block';
    } else {
      // Display a message indicating that the showing is sold out
      successMessage.textContent = 'Sorry, this showing is sold out';
      successMessage.style.display = 'block';
      
      // Disable the "Buy Ticket" button
      buyTicketButton.disabled = true;
    }
  })
  .catch(error => {
    console.error(error);
  });


  
  
 
