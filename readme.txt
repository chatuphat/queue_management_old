nest new queue_management
cd queue_management
yarn run start
yarn add @nestjs/mongoose
yarn add mongoose
yarn add class-validator
yarn add class-transformer
yarn add @nestjs/mapped-types
nest generate service doctorprofile
nest generate controller doctorprofile
-------------------------------------------------------

git status
git add .
git commit -m "first commit"
git branch developer 
git checkout developer
git branch 

git push -u origin main
git push -u origin developer

git reset HEAD --hard

---------------------------

docker-compose up -d


----------------------------------------
create

--------------------------------------------
https://medium.com/globant/crud-application-using-nestjs-and-mongodb-99a0756adb76

----------------------------------------------------------


To query for the date "2023-03-20" regardless of the time, 
you can use a MongoDB query operator called $gte which stands for "greater than or equal to", 
and $lt which stands for "less than".

Here's an example of how you can use it in your query:

http://localhost:3000/api/v1/doctorprofile?createdAt[$gte]=2023-03-20T00:00:00.000Z&createdAt[$lt]=2023-03-21T00:00:00.000Z

This query will return all doctor profiles created on March 20, 2023, regardless of the time. 
The $gte operator matches all documents with a createdAt value greater than or equal to 2023-03-20T00:00:00.000Z, 
and the $lt operator matches all documents with a createdAt value less than 2023-03-21T00:00:00.000Z.
-----------------------------------------------------------------------------------------------------------------------------------

