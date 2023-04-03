      #CODE CHALLENGE 3


# You are required to build a flatdango application

This will be a Flatiron movie theatre open for business  that allows a customer to purchase tickets for the theatre

# Requirements
-For this project, you must:

 *Have a well-written README file.
 *Fetch data from a local server running JSON DB server

 # Pre-requisite Data
   You can use this JSON file for your server DB.
   db.json Download db.json "https://moringa.instructure.com/courses/265/files/206140/download?download_frd=1"

# You are therefore required to foloow the following instructions;

 # create an application where a user can:
  1.  See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`. You will need to make a GET
   request to the following endpoint to retrieve the film data:

  2. See a menu of all movies on the left side of the page in the `ul#films`
   element when the page loads. (_optional_: you can style each film in the list
   by adding the classes `film item` to each `li` element.) There is a
   placeholder `li` in the `ul#films` element that is hardcoded in the HTML —
   feel free to remove that element by editing the HTML file directly, or use
   JavaScript to remove the placeholder element before populating the list. You
   will need to make a GET request to the following endpoint to retrieve the
   film data:

   3.  Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available). **No persistence is needed for this feature**.

# BONUS DELIVERABLES

 These bonus deliverables are here if you want an extra challenge and won't
 affect your score. **Make sure to commit your work to save your progress before
 attempting the bonus deliverables!**