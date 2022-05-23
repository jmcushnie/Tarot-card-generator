class card {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
        

    }
}

let deck = [
    new card('Ace of Cups', 
    'The Ace of Cups Tarot card signifies new beginnings, usually in terms of love, empathy, compassion and happiness. You will be feeling happy, positive and good about yourself. Now is a great time to begin new friendships and get out there and socialise.', 'MW_Ace_of_Cups'),
    new card('Two of Cups', 
    'The Two of Cups Tarot card appears things should be going well for you and life should be very harmonious.  It is very positive card. While it normally relates to unity and love in romantic relationships it can signify harmony and mutual respect and appreciation in friendships and partnerships.', 'MW_Two_of_Cups'),
    new card('Three of Cups', 
    'The Three of cups represents celebrations with friends and family, it can also indeicate weddings and christenings. It tends to indicate reasons to celebrate with others', 'MW_Three_of_Cups'),
    new card('Four of Cups', 
    'The four of cups can represent a feeling of bordem or discontent, be watchful you dont miss out on new oppurtunites or events you will regret!', 'MW_Four_of_Cups'),
    new card('Five of Cups', 
    ' When the Five of Cups is drawn you may be experiencing feelings of dissapointment, people have let you down or you feel betrayed - your mind is currently clouded', 'MW_Five_of_Cups'),
    new card('Six of Cups', 
    'THe Six of Cups indicates something or someone coming back from the past, an old friend or a revival of an old love relationship. Whatever it is will bring you great happiness and satisfaction', 'MW_Six_of_Cups'),
    new card('Seven of Cups', 
    ' This card represents a situation where you feel there are many choices possible, you may feel overwhelmed and find it difficult making a decision. Your imagination runs away with you - choose realistically', 'MW_Seven_of_Cups'),
    new card('Eight of Cups', 
    'The word abandonment is accociated with this card, it can symbolise you abandoning something through dissapointment. This has held you back for a long time and has been hard for you to walk away. Finally you are on a new path', 'MW_Eight_of_Cups'),
    new card('Nine of Cups', 
    'Referred to as the wish card the Nine of Wands signifies achievement, emotional and material fulfilment, abundance and sensual pleasures! You will feel pleased', 'MW_Nine_of_Cups'),
    new card('Ten of Cups', 
    'When the Ten of Cups shows up it represents happiness in ones home life, the promise of lasting success in a relationship - frequently appears when marriage is on the cards!', 'MW_Ten_of_Cups'),
    new card ('Ace of Pentacles', 'This card represents prosperity and material gains, the beginning of successful endeavors - an excellent time to start a new business venture.', 'MW_Ace_of_Pentacles'),
    new card ('Two of Pentacles', 'The Two of Pentacles indicates effort needed to maintain balance in life, care is needed to ensure everything flows harmoniously.', 'MW_Two_of_Pentacles'),
    new card ('Three of Pentacles', 'Through your efforts success is beginning to show. You should feel a sense of achievement. Whatever it may be this card shows initial stages of completion', 'MW_Three_of_Pentacles'),
    new card ('Four of Pentacles', 'This indicates being focused upon goals and financial matters at this time and be prepared to work hard to attain them.', 'MW_Four_of_Pentacles'),
    new card ('Five of Pentacles', 'Pay careful attention to your financial affairs - this isnt a time to head to the shops. Temporary hardships are indicated', 'MW_Five_of_Pentacles'),
    new card ('Six of Pentacles', 'The Six of Pentacles shows succesful material gains and being in a position to share with others. Once the work is done be sure to enjoy the rewards.', 'MW_Six_of_Pentacles'),
    new card ('Seven of Pentacles', 'Hard work and patience will be rewarded and working methodically toward your accomplishment will bring success', 'MW_Seven_of_Pentacles'),
    new card ('Eight of Pentacles', 'The Eight of Pentacles can signify learning a new skill or profession. Possibly a an offer of new employment or a new position.', 'MW_Eight_of_Pentacles'),
    new card ('Nine of Pentacles', 'Finances should improve to allow comforts in your life, if youve been working hard at your goals this card brings rewards for your effors.', 'MW_Nine_of_Pentacles'),
    new card ('Ten of Pentacles', 'Home and family stability are often indicated with this card, it shows the satisfaction of feeling settled and materially secure.', 'MW_Ten_of_Pentacles'),
    new card ('Ace of Swords', 'The Ace of Swords signifies victory and triumph. With great strength comes great power yuo have the ability to overcome anything.', 'MW_Ace_of_Swords'),
    new card ('Two of Swords', 'This card signifies a stalemate situation, you may need to make a decision yet you are unable to move one way or another due to feelings of confusion. Try a new approach. ', 'MW_Two_of_Swords'),
    new card ('Three of Swords', 'Stormy emotions can lead to arguments, if this escaltes it could lead to a separation - but there is hope for the future.', 'MW_Three_of_Swords'),
    new card ('Four of Swords', 'Rest and recovery is needed after a period of strain stress or struggles. Rejuvenation is needed. Take some time to replenish.', 'MW_Four_of_Swords'),
    new card ('Five of Swords', '', 'MW_Five_of_Swords'),
    new card ('Six of Swords', '', 'MW_Six_of_Swords'),
    new card ('Seven of Swords', '', 'MW_Seven_of_Swords'),
    new card ('Eight of Swords', '', 'MW_Eight_of_Swords'),
    new card ('Nine of Swords', '', 'MW_Nine_of_Swords'),
    new card ('Ten of Swords', '', 'MW_Ten_of_Swords'),
    new card ('Ace of Wands', '', 'MW_Ace_of_Wands'),
    new card ('Two of Wands', '', 'MW_Two_of_Wands'),
    new card ('Three of Wands', '', 'MW_Three_of_Wands'),
    new card ('Four of Wands', '', 'MW_Four_of_Wands'),
    new card ('Five of Wands', '', 'MW_Five_of_Wands'),
    new card ('Six of Wands', '', 'MW_Six_of_Wands'),
    new card ('Seven of Wands', '', 'MW_Seven_of_Wands'),
    new card ('Eight of Wands', '', 'MW_Eight_of_Wands'),
    new card ('Nine of Wands', '', 'MW_Nine_of_Wands'),
    new card ('Ten of Wands', '', 'MW_Ten_of_Wands'),
    new card ('', '', ''),
    new card ('', '', ''),
    new card ('', '', ''),
    new card ('', '', ''),
    new card ('', '', ''),
    new card ('', '', ''),
    new card ('', '', ''),
]

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 40)
    return randomNumber;
}

document.getElementById('draw').onclick =
function Draw(){
    let index = getRandomNumber(40)
    let currentCard = deck[index]

    document.getElementById("card-display").innerHTML = ' <img src="/images/' + currentCard.image
    + '.jpg" width="200" height= "300"><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>'
    
}












