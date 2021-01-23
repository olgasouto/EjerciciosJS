const topics=["JavaScript","Variables","funciones","condicionales","bucles"]
console.log('Lista de Tópicos',topics)

const capitalLetters=topics.map(function(topic){
    return topic.toUpperCase()
});
console.log('Tópicos en mayúsculas',capitalLetters);

const orderTopics=capitalLetters.map(function(capitalLetterTopic){
    return capitalLetters.reverse()
});
console.log('Reordenando Tópicos',orderTopics);


