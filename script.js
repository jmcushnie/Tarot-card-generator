class card {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
        

    }
}

let deck = [
    new card('Ace of Cups', 'The Ace of Cups Tarot card signifies new beginnings, usually in terms of love, empathy, compassion and happiness. You will be feeling happy, positive and good about yourself. Now is a great time to begin new friendships and get out there and socialise.', '__ace-cups'),
    new card('Two of Cups', 'The Two of Cups Tarot card appears things should be going well for you and life should be very harmonious.  It is very positive card. While it normally relates to unity and love in romantic relationships it can signify harmony and mutual respect and appreciation in friendships and partnerships.', '__2cups'),
    new card('Three of Cups', 'The Three of cups represents celebrations with friends and family, it can also indeicate weddings and christenings. It tends to indicate reasons to celebrate with others', '__3cups'),
    new card('Four of Cups', 'The four of cups can represent a feeling of bordem or discontent, be watchful you dont miss out on new oppurtunites or events you will regret!', '__4cups'),
    new card('Five of Cups', ' When the Five of Cups is drawn you may be experiencing feelings of dissapointment, people have let you down or you feel betrayed - your mind is currently clouded', '__5cups'),
    new card('Six of Cups', 'THe Six of Cups indicates something or someone coming back from the past, an old friend or a revival of an old love relationship. Whatever it is will bring you great happiness and satisfaction', '__6cups'),
    new card('Seven of Cups', ' This card represents a situation where you feel there are many choices possible, you may feel overwhelmed and find it difficult making a decision. Your imagination runs away with you - choose realistically', '__7cups'),
    new card('Eight of Cups', 'The word abandonment is accociated with this card, it can symbolise you abandoning something through dissapointment. This has held you back for a long time and has been hard for you to walk away. Finally you are on a new path', '__8cups'),
    new card('Nine of Cups', 'Referred to as the wish card the Nine of Wands signifies achievement, emotional and material fulfilment, abundance and sensual pleasures! You will feel pleased', '__9cups'),
    new card('Ten of Cups', 'When the Ten of Cups shows up it represents happiness in ones home life, the promise of lasting success in a relationship - frequently appears when marriage is on the cards!', '__10cups'),
    new card ('Ace of Pentacles', 'This card represents prosperity and material gains, the beginning of successful endeavors - an excellent time to start a new business venture.', '__ace-pentacles'),
    new card ('Two of Pentacles', 'The Two of Pentacles indicates effort needed to maintain balance in life, care is needed to ensure everything flows harmoniously.', '__2pentacles'),
    new card ('Three of Pentacles', 'Through your efforts success is beginning to show. You should feel a sense of achievement. Whatever it may be this card shows initial stages of completion', '__3pentacles'),
    new card ('Four of Pentacles', 'This indicates being focused upon goals and financial matters at this time and be prepared to work hard to attain them.', '__4pentacles'),
    new card ('Five of Pentacles', 'Pay careful attention to your financial affairs - this isnt a time to head to the shops. Temporary hardships are indicated', '__5pentacles'),
    new card ('Six of Pentacles', 'The Six of Pentacles shows succesful material gains and being in a position to share with others. Once the work is done be sure to enjoy the rewards.', '__6pentacles'),
    new card ('Seven of Pentacles', 'Hard work and patience will be rewarded and working methodically toward your accomplishment will bring success', '__7pentacles'),
    new card ('Eight of Pentacles', 'The Eight of Pentacles can signify learning a new skill or profession. Possibly a an offer of new employment or a new position.', '__8pentacles'),
    new card ('Nine of Pentacles', 'Finances should improve to allow comforts in your life, if youve been working hard at your goals this card brings rewards for your effors.', '__9pentacles'),
    new card ('Ten of Pentacles', 'Home and family stability are often indicated with this card, it shows the satisfaction of feeling settled and materially secure.', '__10pentacles'),
    new card ('Ace of Swords', 'The Ace of Swords signifies victory and triumph. With great strength comes great power yuo have the ability to overcome anything.', '__ace-swords'),
    new card ('Two of Swords', 'This card signifies a stalemate situation, you may need to make a decision yet you are unable to move one way or another due to feelings of confusion. Try a new approach. ', '__2swords'),
    new card ('Three of Swords', 'Stormy emotions can lead to arguments, if this escaltes it could lead to a separation - but there is hope for the future.', '__3swords'),
    new card ('Four of Swords', 'Rest and recovery is needed after a period of strain stress or struggles. Rejuvenation is needed. Take some time to replenish.', '__4swords'),
    new card ('Five of Swords', 'The Five of Swords indicates someone may not being honest with you, they may have a hidden agenda. Something may be lost in an unfair manner. ', '__5swords'),
    new card ('Six of Swords', 'You will be moving out of stormy waters. If you have been going through tough times this card assures you matters will improve.', '__6swords'),
    new card ('Seven of Swords', 'Situations may not go as you have planned, theft is indicated so be mindful and take procautions. Something may be taken from you in greed.', '__7swords'),
    new card ('Eight of Swords', 'This card shows you may be feeling restricted, there may be fear preventing you from moving forward', '__8swords'),
    new card ('Nine of Swords', 'Feelings of suffering, disappointment and despair may be experienced - your fear may be blinding you making what happens appear worse than it is. ', '__9swords'),
    new card ('Ten of Swords', 'There may be a feeling of loss due to a difficult situation ending. However with this you are released and ready for a new beginning.', '__10swords'),
    new card ('Ace of Wands', 'This card symbolizes  the seeds of a idea that you are very excited about! A new job or business venture or even a entirley new way of life.', '__ace-wands'),
    new card ('Two of Wands', 'This card shows you moving in the direction of your goals and ambitions. As with all new ventures you need to focus and put in the effort.', '__2wands'),
    new card ('Three of Wands', 'Your initial goals have been realised and while these have been succesful there is still more work ahead. Everything is heading in the right direction.', '__3wands'),
    new card ('Four of Wands', 'After all your hard work you feel satified and accomplished in what you have done. Holidays are indicated, a time of rest and relaxation with family and friends.', '__4wands'),
    new card ('Five of Wands', 'There may be differences of opinions and petty squabbling. If this emerges around you try not to get involved - it will all blow over', '__5wands'),
    new card ('Six of Wands', 'The Six of Wands signifies your efforts and achievments will be recognized by others. There may be a promotion coming in your direction. This card is the bearer of great news.', '__6wands'),
    new card ('Seven of Wands', 'Your ideas or beliefs might be challenged you may feel the need to defend yourself - Remain calm, have confidence and the courage to stand up for yourself.', '__7wands'),
    new card ('Eight of Wands', 'This card is a welcome sight if you have experienced set backs or delays. There will be a sudden burst of excitment - this can also represent travel.', '__8wands'),
    new card ('Nine of Wands', 'You may feel all your energy has been spent, you may feel on the verge of giving up but this card reminds you success is closer than you think and you have the strength to make it.', '__9wands'),
    new card ('Ten of Wands', 'You may feel overwhelmed with responsibilities or burdened and under pressure. This can indicate overworking and therfore a reminder that balance in life is required.', '__10wands'),
    new card ('The Chariot', '', '__chariot'),
    new card ('Death', '', '__death'),
    new card ('The Devil', '', '__devil'),
    new card ('The Emperor', '', '__emperor'),
    new card ('The Empress', '', '__empress'),
    new card ('The Fool', '', '__fool'),
    new card ('The Hanged Man', '', '__hanged-man'),
    new card ('The Hermit', '', '__hermit'),
    new card ('The Hierophant', '', '__hierophant'),
    new card ('The High Priestess', '', '__high-priestess'),
    new card ('The Judgement', '', '__judgement'),
    new card ('Justice', '', '__justice'),
    new card ('The Star', '', '__star'),
    new card ('Strength', '', '__strength'),
    new card ('The Sun', '', '__sun'),
    new card ('Temperance', '', '__temperance'),
    new card ('The Tower', '', '__tower'),
    new card ('The Wheel of Fortune', '', '_wheel'),
    new card ('The World', '', '__world'),
    new card ('The Lovers', '', '__lovers'),
    new card ('The Magician', '', '__magician'),
    new card ('The Moon', '', '__moon'),
    new card ('', '', ''),
]

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 51)
    return randomNumber;
}

document.getElementById('draw').onclick =
function Draw(){
    let index = getRandomNumber(51)
    let currentCard = deck[index]

    document.getElementById("card-display").innerHTML = ' <img src="/img/' + currentCard.image
    + '.jpg" width="200" height= "300"><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>'
    
}












