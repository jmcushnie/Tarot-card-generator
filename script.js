class card {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;

    }
}

let deck = [
    new card('Ace of Cups', 
    'The Ace of Cups Tarot card signifies new beginnings, usually in terms of love, empathy, compassion and happiness. You will be feeling happy, positive and good about yourself. Now is a great time to begin new friendships and get out there and socialise.', '<img src="/images/MW_Ace_of_Cups.jpg>'),
    new card('Two of Cups', 
    'The Two of Cups Tarot card appears things should be going well for you and life should be very harmonious.  It is very positive card. While it normally relates to unity and love in romantic relationships it can signify harmony and mutual respect and appreciation in friendships and partnerships.', '<img src="/images/MW_Two_of_Cups.jpg>'),
    new card('Three of Cups', 
    'The Three of cups represents celebrations with friends and family, it can also indeicate weddings and christenings. It tends to indicate reasons to celebrate with others', '<img src="/images/MW_Three_of_Cups.jpg>'),
    new card('Four of Cups', 
    'The four of cups can represent a feeling of bordem or discontent, be watchful you dont miss out on new oppurtunites or events you will regret!', 'MW_Four_of_Cups'),
    new card('Five of Cups', 
    ' When the Five of Cups is drawn you may be experiencing feelings of dissapointment, people have let you down or you feel betrayed - your mind is currently clouded', 'MW_Five_of_Cups'),
    new card('Six of Cups', 
    'THe Six of Cups indicates something or someone coming back from the past, an old friend or a revival of an old love relationship. Whatever it is will bring you great happiness and satisfaction', 'MW_Six_of_Cups'),
    new card('Seven of Cups', 
    ' This card represents a situation where you feel there are many choices possible, you may feel overwhelmed and find it difficult making a decision. Your imagination runs away with you - choose realistically', 'MW_Seven_of_Cups.'),
    new card('Eight of Cups', 
    'The word abandonment is accociated with this card, it can symbolise you abandoning something through dissapointment. This has held you back for a long time and has been hard for you to walk away. Finally you are on a new path', 'MW_Eight_of_Cups'),
    new card('Nine of Cups', 
    'Referred to as the wish card the Nine of Wands signifies achievement, emotional and material fulfilment, abundance and sensual pleasures! You will feel pleased', 'MW_Nine_of_Cups'),
    new card('Ten of Cups', 
    'When the Ten of Cups shows up it represents happiness in ones home life, the promise of lasting success in a relationship - frequently appears when marriage is on the cards!', 'MW_Ten_of_Cups')

]

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10)
    return randomNumber;
}

document.getElementById('draw').onclick =
function (){
    let index = getRandomNumber(10)
    let currentCard = deck[index]

    document.getElementById("card-display").innerHTML = currentCard.image
+ '.jpg <h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>'

}









