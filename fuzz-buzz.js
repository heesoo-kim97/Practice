function fuzzBuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('LearningFuze');
    } else if (i % 5 === 0) {
      console.log('Fuze');
    } else if (i % 3 === 0) {
      console.log('Learning');
    }
  }
}
