```mermaid
classDiagram
clothes <|-- Pants
clothes <|-- Top
clothes <|-- Shoes
class Mood{
    String type
    int durationMin
    changeMood(String prevMood String newMood)

}
class Clothes{
    String color
    float ageYears
    remove()
    putOn()
}
class Pants{
    String type

}