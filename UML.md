```mermaid
classDiagram
%%classes in my dissertation about the game I am programming

class Enemy AI{
    String enemyType
    int amountOfEnemies
    followPlayer()
    shootAtPlayer()
    determinePlayerLocation()
}

class Difficulty Scaler{
int timePassed
int moneyCollected
int level
increaseLevel()
decreaseLevel()
keepLevel()
bossRush()
}