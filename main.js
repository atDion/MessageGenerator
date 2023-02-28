/* Message Generator 
Moet kunnen:
1. console.log(randomMessage()) output message bestaande uit 3 stukken. bijv; I feel a lot of passion in your work.
*/

const randomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

const collectiveKnowledge = {
    emotion: ["anger", "rage", "interest", "serenity", "acceptance", "trust", "admiration", "passion", "surprise", "grief", "sadness", "disgust"],
    level: ["a lot of", "some", "enormous amounts of", "a hint of"],
    subject: ["work", "hobby", "secret life", "relationship", "marriage", "dog"]
}

const generateMessage = () => {
    const emotion = collectiveKnowledge.emotion[randomNumber(collectiveKnowledge.emotion.length)]
    const level = collectiveKnowledge.level[randomNumber(collectiveKnowledge.level.length)]
    const subject = collectiveKnowledge.subject[randomNumber(collectiveKnowledge.subject.length)]

    return `I sense ${emotion} in your ${subject}, ${level}.`;
}

console.log(generateMessage());