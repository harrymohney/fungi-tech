Project Title: FungiTech

Project Summary:


Grow tracking app that allows users to record isolated grow methods. The user may choose between strains, grow methods and components of the grow. The user will have the ability to customize their grow and track the yields to discover the optimal method for each strain. Secondary use will be user referencing past grows to gauge progress.
Trello Board- https://trello.com/b/KUNfi4NN/fungi-tech
App Link- 

Jobs: 
- frontend - 

- backend - 

- design - 

- research / documentation - 

Link to Github Repo : https://github.com/harrymohney/fungi-tech
Link To Trello: https://trello.com/b/KUNfi4NN/fungi-tech
Link to wireframe(s):


Component Tree: 
- App
  - Navbar
  - HomePage
    - StrainList
      - CultureType
    - ThirdPartyInfo
  - AddStrainForm
  - NewCultureForm





Wireframe:

HEADER - link to new strain, link to progress, link to home
INDEX - Welcome Fungi Tech (icons that link to new strain, link to continue culture management)
NEW CULTURE - input fields for culture management

Primary Model / Schema  ***  GROW TRACKER

Property
Datatype
_id
Objectid
exercise
String (pre-populated list of exercises)
weight
Number ( weight > 0)
reps
Number


Secondary Model / Schema  ***  Stats

Property
Datatype
_id
Objectid
weight
String
reps
String
notes
[objectID]
Entry Id
[objectID]
workout
String


MVP CRUD / Restful routes

Route name
CRUD operation
URL endpoint
Module name
Controller Action
POST
Create
/workouts/new
Create
workoutsCtrl.new
GET
Read
/workouts
Show
workoutsCtrl.show
PUT
Update
/workouts/:id
Update, EditWorkout
workoutsCtrl.update
DELETE
Delete
/workouts/:id
DeleteCardio & DeleteWorkout
workoutsCtrl.delete



ERD link or embed for ERD 
LucidChart Link


User Story:

MVP:
As a user, I want an organized way to keep track of my mushroom genetics so I can manage their progress and avoid expiration.
As a user, I would like a database of genetics I have stored and the ability to fetch information about the strain.


User Flow:
When user creates a new cycle they will have the ability to:
Choose between strains that will be part of their batch.
Customize each section with culture type, date, expiration, and source, and benefits 
delete and edit options are available so users will be able to access this data for future genetic management



Optional Ice Box 
Ice Box Features:
As a user, I’d like to store information about grow cycles on specific strains of mushrooms - humidity, temp, times, yield, light cycle, input (substrate, inoculation, fruiting times).
As a user, I would like to have a comparison between my previous grows, to track progress and find the most efficient grow methods for each strain. 
Increase the scope again - Track grows as a larger environment (grow room) vs. a grow bag or tub.
