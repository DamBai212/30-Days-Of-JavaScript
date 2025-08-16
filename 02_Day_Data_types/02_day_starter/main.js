// Completed by Damany Bailey <damanybailey@icloud.com> on 2025-08-16T13:41:51Z

// Exercise: Level 1
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 2))
console.log(challenge.substring(3))
console.log(challenge.includes('Script'))
console.log(challenge.split(''))
console.log(challenge.split(' '))
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.indexOf('J')))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence.indexOf('because'))
console.log(becauseSentence.lastIndexOf('because'))
console.log(becauseSentence.search('because'))
let spaced = ' 30 Days Of JavaScript '
console.log(spaced.trim())
console.log(challenge.startsWith('30 Days Of JavaScript'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match(/a/gi))
console.log('30 Days Of'.concat(' ', 'JavaScript'))
console.log(challenge.repeat(2))

// Exercise: Level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")
console.log(parseInt('10') === 10)
console.log(Math.round(parseFloat('9.8')) === 10)
console.log('python'.includes('on') && 'jargon'.includes('on'))
console.log('I hope this course is not full of jargon'.includes('jargon'))
console.log(Math.floor(Math.random() * 101))
console.log(Math.floor(Math.random() * 51) + 50)
console.log(Math.floor(Math.random() * 256))
let jsWord = 'JavaScript'
let randIndex = Math.floor(Math.random() * jsWord.length)
console.log(jsWord[randIndex])
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
let becauseStart = becauseSentence.indexOf('because')
let becausePhrase = 'because because because'
console.log(becauseSentence.substr(becauseStart, becausePhrase.length))

// Exercises: Level 3
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let loveMatches = loveSentence.match(/love/gi) || []
console.log(loveMatches.length)
let becauseMatches = becauseSentence.match(/because/gi) || []
console.log(becauseMatches.length)
const messy = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"
const cleaned = messy
  .replace(/[^A-Za-z\s]/g, ' ')
  .toLowerCase()
  .replace(/\s+/g, ' ')
  .trim()
const words = cleaned.split(' ')
const freq = {}
for (const w of words) {
  freq[w] = (freq[w] || 0) + 1
}
let mostFrequentWord = null
let mostFrequentCount = 0
for (const [w, c] of Object.entries(freq)) {
  if (c > mostFrequentCount) {
    mostFrequentWord = w
    mostFrequentCount = c
  }
}
console.log({ word: mostFrequentWord, count: mostFrequentCount })
const incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const numbers = incomeText.match(/\d+/g).map(Number)
const totalAnnualIncome = numbers[0] * 12 + numbers[1] + numbers[2] * 12
console.log(totalAnnualIncome)