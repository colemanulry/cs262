--
-- This SQL script implements sample queries on the Monopoly database.
--
-- @author kvlinden
-- @version Summer, 2015
--

-- Get the number of Game records.
SELECT *
  FROM Game
  ;

-- Get the player records.
SELECT *
  FROM Player
  ;

-- Get all the users with Calvin email addresses.
SELECT *
  FROM Player
 WHERE emailAddress LIKE '%calvin%'
 ;

-- Get the highest score ever recorded.
  SELECT score
    FROM PlayerGame
ORDER BY score DESC
   LIMIT 1
   ;

-- Get the cross-product of all the tables.
SELECT *
  FROM Player, PlayerGame, Game
  ;



-- Exercise 8.1 --
/* list of games ordered by date, most recent first */
SELECT *
  FROM game
  ORDER BY time DESC
  ;

/* all the games that occurred in last week */
SELECT *
  FROM Game
  WHERE time >= CURRENT_DATE - 7
  ;

/* list of players who have non-NULL games */
SELECT *
  FROM Player
  WHERE name IS NOT NULL
  ;

/* list of IDs who have game larger than 2000 */
SELECT PlayerID
  FROM PlayerGame P
  WHERE P.score > 2000
  ;

/* list of players who have gmail accounts */
SELECT *
  FROM Player
  WHERE emailAddress LIKE '%gmail%'
  ;



-- Exercise 8.2 --
/* list of "King's" game scores in decreasing order */
SELECT PG.score
  FROM Player P, PlayerGame PG
  WHERE P.name = 'The King' AND P.ID = PG.PlayerID
  ORDER BY score DESC
  ;

/* name of winner of game played 2006-06-28 13:20:00 */
SELECT P.name
  FROM Player P, PlayerGame PG, Game G
  WHERE G.time = '2006-06-28 13:20:00' AND PG.gameID = G.ID AND P.ID = PG.playerID
  ;

/* C - If the query did not have p1.ID < p2.ID, it would return the
same name potentially several times. But, by checking to ensure that the ID's
are different, you are ensuring that the same name will not be returned
*/

/* D - one situation that would make sense to join a table to itself is
if you wanted to compare values within a table. Say for example, you wanted to
compare IDs, you could join a table to itself in order to do this
*/


