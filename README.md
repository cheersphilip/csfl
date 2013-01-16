csfl
====

Customer Services Call Frequency Log, using CANVAS.

we needed a way for customer services to record the number of calls coming into the call center, for each service team and interaction (which is what we are calling the questions that people come to us with).




First commit is for a single canvas screen that displays the service teams graphically and can tell which service team has been clicked on.

Second commit fleshes this out with a second level and better graphics, as well as incorporating the 'canvas text wrap' function.

Third commit writes to a database to log username, time and, most importantly, the nature of the call. You will need to set up your own database!

Fourth Commit changes the html file to an asp file and completes the functionality for this application.




The application uses the url to pass parameters to an asp file, which is triggered by events in the canvas, using javaScript.

The application outputs a couple of things to two tables of a three-table database. 

The outputs are a log file, with timestamp and user name, and an incrementation of a field in a table.
The third table stores the first level of headings.
