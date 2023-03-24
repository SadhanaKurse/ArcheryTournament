# ArcheryTournament
The Archeville super-archy tournament is a team archery tournament that happens once every four years. Every nation sends two of its best archers to the tournament, and the first team to reach 60 points wins.  The archery board has 5 concentric circles - A, B, C, D, and E, A being the innermost. A carries 5 points and E carries 1 point.  Points for every circle increase by 1 at every round. For example, In the 4th round, A will carry 8 points while E will carry 4 points. Hitting outside the board (F) will always be 0.  If both archers in a team hit the same circle in a round, a bonus of 2 points is given to the team for synchronicity.  The game finishes when one team reaches 60 points.  If more than one team crosses 60 points in a round, the team with the highest score wins. 

Sample input
Team name followed by two players
Gyrhuna, János Diák, Süsü
Achni, Meilong, Tianlong
Bathar, Pakhangba, Poubi Lai Paphal


Circle name per round by the player
János Diák,Süsü,Meilong,Tianlong,Pakhangba,Poubi Lai Paphal
A,B,C,D,E,F
A,B,C,D,E,F
A,B,A,A,A,A
A,A,A,B,A,A 
B,C,A,B,E,F

Sample output
Round 1
Team scores
-----------------
Gyrhuna: 9
Achni: 5
Bathar: 1

Individual Scores
----------------------
János Diák: 5
Süsü: 4
Meilong: 3
Tianlong: 2
Pakhangba: 1
Poubi Lai Paphal: 0

Bonus points
-----------------
Gyrhuna: 0
Achni: 0
Bathar: 0



Round 2
Team Scores
-----------------
Gyrhuna: 20
Achni: 12
Bathar: 3

Individual Scores
-----------------
János Diák: 11
Süsü: 9
Meilong: 7
Tianlong: 5
Pakhangba: 3
Poubi Lai Paphal: 0

Bonus points
------------
Gyrhuna: 0
Achni: 0
Bathar: 0



Round 3
Team Scores
-----------------
Gyrhuna: 33
Achni: 28
Bathar: 19

Individual Scores
-----------------------
János Diák: 18
Süsü: 15
Meilong: 14
Tianlong: 12
Pakhangba: 10
Poubi Lai Paphal: 7

Bonus points
-----------------
Gyrhuna: 0
Achni: 2
Bathar: 2



Round 4
Team Scores
-----------------
Gyrhuna: 51
Achni: 43
Bathar: 37

Individual scores
----------------------
János Diák: 26
Süsü: 23
Meilong: 22
Tianlong: 19
Pakhangba: 18
Poubi Lai Paphal: 15


Bonus points
-----------------
Gyrhuna: 2
Achni: 2
Bathar: 4



Round 5
Team Scores
-----------------
Gyrhuna: 66
Achni: 60
Bathar: 42

Individual scores
----------------------
János Diák: 34
Süsü: 30
Meilong: 31
Tianlong: 27
Pakhangba: 23
Poubi Lai Paphal: 15


Bonus points
-----------------
Gyrhuna: 2
Achni: 2
Bathar: 4

Game over. Gyrhuna won!!!


Steps to run
1. Extract the zip folder
2. Rename main.txt to main.js
3. Open index.html in any browsers (chrome recommended)
4. Refresh to see different values 
5. To change the values - main.js has JSON initialized 

It is a simple Javascript, HTML and css application

CDN used https://code.jquery.com/jquery-1.9.1.min.js