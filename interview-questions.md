# April Rieger ------ ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key would be called animal_id. The foreign key will reside in Sightings.

  Researched answer: https://stackoverflow.com/questions/8510596/connecting-two-rails-models

2. Which routes must always be passed params and why?
 
  Your answer: Ummm... great question.... let me research and get back to you.

  Researched answer: Okay after research I was able to figure out that the routes that should always be passed are: Show, Update, and Delete. The reason is due to the face that we need to pass id through params.

3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer: /game/:guess => game#main

4. Name three rails generator commands. What is created by each?

  Your answer: 
  rails g migration
  rails g model name:string age:integer
  rails g resource name:string age:string

  Researched answer: Here are some more rails generator commands: https://guides.rubyonrails.org/command_line.html#rails-generate

5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET" I believe this will return an error becuase it is plural we need to define the id or remove the s at the end and get all the users.

/users/1      method="GET" -- users#index - displays a list of all users

/users/new    method="GET"  -- users#new - returns an HTML form creating a new user

/users/       method="POST"  -- users#create - creates a new user

/users/1      method="PUT"  -- users#update - updates a specific user with the id of 1 in this instance.

/users/1      method="DELETE"  -- users#destroy - deletes a specific user with the id of 1 in this instance.