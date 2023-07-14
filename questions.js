// Helper function to shuffle the options array
function shuffleArray(array) {
 for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
 }
 return array;
}

const questions = [
 {
  numb: 1,
  question: "A car moves from rest with an acceleration of 0.2 m/s^2. Find its velocity when it has moved a distance of 50 m.",
  answer: "4.47 m/s",
  options: shuffleArray([
      "10.0 m/s",
      "250.0 m/s",
      "5.45 m/s",
      "4.47 m/s"
    ])
  },
 {
  numb: 2,
  question: "A car has a uniform velocity of 108 km/h. How far does it travel in ½ minute?",
  answer: "0.9 km",
  options: shuffleArray([
      "15 km",
      "3240 km",
      "900 km",
      "0.9 km"
    ])
  },
 {
  numb: 3,
  question: "A train slows from 108 km/h with a uniform retardation of 5 m/s^2. How long will it take to reach 18 km/h?",
  answer: "5 s",
  options: shuffleArray([
      "18 s",
      "25.2 s",
      "7 s",
      "5 s"
    ])
  },
 {
  numb: 4,
  question: "A train slows from 108 km/h with a uniform retardation of 5 m/s^2. What is the distance covered when the velocity is 18 km/h?",
  answer: "87.5 m",
  options: shuffleArray([
      "450.0 m",
      "630.0 m",
      "95.6 m",
      "87.5 m"
    ])
  },
 {
  numb: 5,
  question: "A car starts from rest and accelerates uniformly until it reaches a velocity of 30 m/s after 5 s. It travels with uniform velocity of 30 m/s for 15 s and is then brought to rest in 10 s with a uniform retardation. Determine the acceleration of the car.",
  answer: "6 m/s^2",
  options: shuffleArray([
      "8 m/s^2",
      "7.5 m/s^2",
      "5.5 m/s^2",
      "6 m/s^2"
    ])
  },
 {
  numb: 6,
  question: "A car starts from rest and accelerates uniformly until it reaches a velocity of 30 m/s after 5 s. It travels with uniform velocity of 30 m/s for 15 s and is then brought to rest in 10 s with a uniform retardation. Determine the retardation of the car.",
  answer: "3 m/s^2",
  options: shuffleArray([
      "5 m/s^2",
      "4 m/s^2",
      "2 m/s^2",
      "3 m/s^2"
    ])
  },
 {
  numb: 7,
  question: "A car starts from rest and accelerates uniformly until it reaches a velocity of 30 m/s after 5 s. It travels with uniform velocity of 30 m/s for 15 s and is then brought to rest in 10 s with a uniform retardation. Determine the distance covered after 5 s.",
  answer: "75 m",
  options: shuffleArray([
      "77.4 m",
      "66.8 m",
      "82.3 m",
      "75 m"
    ])
  },
 {
  numb: 8,
  question: "A car starts from rest and accelerates uniformly until it reaches a velocity of 30 m/s after 5 s. It travels with uniform velocity of 30 m/s for 15 s and is then brought to rest in 10 s with a uniform retardation. Determine the total distance covered.",
  answer: "675 m",
  options: shuffleArray([
      "566 m",
      "560 m",
      "660 m",
      "675 m"
    ])
  },
 {
  numb: 9,
  question: "A ball is released from a height of 20 m. Calculate the time it takes to hit the ground.",
  answer: "2.0 s",
  options: shuffleArray([
      "1.5 s",
      "2.5 s",
      "2.8 s",
      "2.0 s"
    ])
  },
 {
  numb: 10,
  question: "A ball is released from a height of 20 m. Calculate the velocity with which it hits the ground.",
  answer: "20.0 m/s",
  options: shuffleArray([
      "12 m/s",
      "22.6 m/s",
      "35.6 m/s",
      "20.0 m/s"
    ])
  },
 {
  numb: 11,
  question: "A ball is thrown up vertically with a velocity of 40 m/s. Calculate the maximum height reached.",
  answer: "80 m",
  options: shuffleArray([
      "45.2 m",
      "78.0 m",
      "76.5 m",
      "80 m"
    ])
  },
 {
  numb: 12,
  question: "A ball is thrown up vertically with a velocity of 40 m/s. Calculate the time to reach the maximum height.",
  answer: "4.0 s",
  options: shuffleArray([
      "3.5 s",
      "3.3 s",
      "2.0 s",
      "4.0 s"
    ])
  },
 {
  numb: 13,
  question: "A ball is thrown up vertically with a velocity of 40 m/s. Calculate the time to return to the ground.",
  answer: "8.0 s",
  options: shuffleArray([
      "15.0 s",
      "12.2 s",
      "7.8 s",
      "8.0 s"
    ])
  },
 {
  numb: 14,
  question: "A body is projected horizontally from the top of a vertical cliff 40 m high, with a velocity of 20 m/s. Calculate the time taken for the body to fall to the ground.",
  answer: "2.83 s",
  options: shuffleArray([
      "1.22 s",
      "5.52 s",
      "2.21 s",
      "2.83 s"
    ])
  },
 {
  numb: 15,
  question: "A body is projected horizontally from the top of a vertical cliff 40 m high, with a velocity of 20 m/s. Calculate the vertical component of the velocity when the body hits the ground.",
  answer: "28.28 m/s",
  options: shuffleArray([
      "18.55 m/s",
      "35.52 m/s",
      "45.0 m/s",
      "28.28 m/s"
    ])
  },
 {
  numb: 16,
  question: "A body is projected horizontally from the top of a vertical cliff 40 m high, with a velocity of 20 m/s. Calculate the distance from the cliff when it strikes the ground.",
  answer: "56.57 m",
  options: shuffleArray([
      "57.56 m",
      "65.75 m",
      "75.65 m",
      "56.57 m"
    ])
  },
 {
  numb: 17,
  question: "A body moving with a constant velocity along a straight line PQR takes 30 s to go from P to Q and 10 s to go from Q to R. If PR = 4 m, Find PQ.",
  answer: "3 m",
  options: shuffleArray([
      "1 m",
      "2 m",
      "4 m",
      "3 m"
    ])
  },
 {
  numb: 18,
  question: "An object moves in a straight line, starting from rest. There are two stages in the journey: (a) it gains speed uniformly for 2.0 s and attains a speed of 8.0 m/s. (b) it continues at the speed for a further 1.5 s. Find the acceleration in stage (a).",
  answer: "4 m/s^2",
  options: shuffleArray([
      "1 m/s^2",
      "2 m/s^2",
      "3 m/s^2",
      "4 m/s^2"
    ])
  },
 {
  numb: 19,
  question: "An object moves in a straight line, starting from rest. There are two stages in the journey: (a) it gains speed uniformly for 2.0 s and attains a speed of 8.0 m/s. (b) it continues at the speed for a further 1.5 s. Find the acceleration in stage (b).",
  answer: "0 m/s^2",
  options: shuffleArray([
      "1 m/s^2",
      "2 m/s^2",
      "3 m/s^2",
      "0 m/s^2"
    ])
  },
 {
  numb: 20,
  question: "An object moves in a straight line, starting from rest. There are two stages in the journey: (a) it gains speed uniformly for 2.0 s and attains a speed of 8.0 m/s. (b) it continues at the speed for a further 1.5 s. Find the total distance moved during stages (a) and (b).",
  answer: "20 m",
  options: shuffleArray([
      "25 m",
      "27 m",
      "31 m",
      "20 m"
    ])
  },
 {
  numb: 21,
  question: "A train starts from rest from a station and travels with uniform acceleration 0.5 m/s^2 for 20 s. It travels with uniform velocity for another 30 s, the brakes are then applied so that a uniform retardation is obtained and the train comes to rest in a further 10 s. Calculate the total distance travelled by the train.",
  answer: "450 m",
  options: shuffleArray([
      "400 m",
      "420 m",
      "485 m",
      "450 m"
    ])
  },
 {
  numb: 22,
  question: "A ball thrown vertically upwards from ground level hits the ground after 4 s. Calculate the maximum height it reached during its journey (g = 10 m/s^2).",
  answer: "20.0 m",
  options: shuffleArray([
      "18.0 m",
      "17.5 m",
      "16.9 m",
      "20.0 m"
    ])
  },
 {
  numb: 23,
  question: "A body is dropped from rest at a height of 80 m. How long does it take to reach the ground? (g = 10 m/s^2).",
  answer: "4 s",
  options: shuffleArray([
      "5 s",
      "6 s",
      "7 s",
      "4 s"
    ])
  },
 {
  numb: 24,
  question: "A stone is thrown vertically upwards with an initial speed U. If g is the acceleration due to gravity, at what time will the stone return to the starting point.",
  answer: "2U/g",
  options: shuffleArray([
      "g/2U",
      "U/2g",
      "2g/U",
      "2U/g"
    ])
  },
 {
  numb: 25,
  question: "A motor car is uniformly retarded and brought to rest from a velocity 36 km/h in 5 s. Find its retardation.",
  answer: "2 m/s^2",
  options: shuffleArray([
      "4 m/s^2",
      "3 m/s^2",
      "1 m/s^2",
      "2 m/s^2"
    ])
  },
 {
  numb: 26,
  question: "A motor car is uniformly retarded and brought to rest from a velocity 36 km/h in 5 s. Find the distance covered during this period.",
  answer: "25 m",
  options: shuffleArray([
      "20 m",
      "18 m",
      "18.5 m",
      "25 m"
    ])
  },
 {
  numb: 27,
  question: "A body travels from rest with acceleration 8 m/s^2. Find its velocity when it has covered a distance of 100 m.",
  answer: "40.0 m/s",
  options: shuffleArray([
      "42.3 m/s",
      "45.5 m/s",
      "45.0 m/s",
      "40.0 m/s"
    ])
  },
 {
  numb: 28,
  question: "An object falls from a height of 20 m. What is its velocity just before hitting the ground? (Take g = 10 m/s^2).",
  answer: "20.0 m/s",
  options: shuffleArray([
      "20.5 m/s",
      "24.5 m/s",
      "18.0 m/s",
      "20.0 m/s"
    ])
  },
 {
  numb: 29,
  question: "A particle moving in straight line with uniform deceleration has a velocity of 40 m/s at a point P, 20 m/s at a point Q and comes to rest at a point R, where QR = 50 m. Calculate the distance PQ.",
  answer: "150 m",
  options: shuffleArray([
      "144 m",
      "158 m",
      "160 m",
      "150 m"
    ])
  },
 {
  numb: 30,
  question: "A particle moving in straight line with uniform deceleration has a velocity of 40 m/s at a point P, 20 m/s at a point Q and comes to rest at a point R, where QR = 50 m. Calculate the time taken to cover PQ.",
  answer: "5 s",
  options: shuffleArray([
      "4 s",
      "6 s",
      "2 s",
      "5 s"
    ])
  },
 {
  numb: 31,
  question: "A particle moving in straight line with uniform deceleration has a velocity of 40 m/s at a point P, 20 m/s at a point Q and comes to rest at a point R, where QR = 50 m. Calculate the time taken to cover PR.",
  answer: "10 s",
  options: shuffleArray([
      "15 s",
      "13 s",
      "12 s",
      "10 s"
    ])
  },
 {
  numb: 32,
  question: "A ball is thrown horizontally from the top of a cliff 20 m high. If the initial horizontal velocity is 8.0 m/s, find how long it takes to reach the horizontal plane at the foot of the cliff. (Take g = 10 m/s^2).",
  answer: "2.02 s",
  options: shuffleArray([
      "2.20 s",
      "2.41 s",
      "2.14 s",
      "2.02 s"
    ])
  },
 {
  numb: 33,
  question: "A ball is thrown horizontally from the top of a cliff 20 m high. If the initial horizontal velocity is 8.0 m/s, find how far from the foot of the cliff it strikes the ground. (Take g = 10 m/s^2).",
  answer: "16.2 m",
  options: shuffleArray([
      "14.45 m",
      "10.2 m",
      "12.0 m",
      "16.2 m"
    ])
  },
 {
  numb: 34,
  question: "A ball is thrown horizontally from the top of a cliff 20 m high. If the initial horizontal velocity is 8.0 m/s find the speed with which it strikes the ground (Take g = 10 m/s^2).",
  answer: "19.8 m/s",
  options: shuffleArray([
      "18.9 m/s",
      "17.5 m/s",
      "15.7 m/s",
      "19.8 m/s"
    ])
  },
 {
  numb: 35,
  question: "Newborn hatchling turtles can swim approximately 40 km in 30 hours. How long would it take them to swim 15 m?",
  answer: "40.5 s",
  options: shuffleArray([
      "20.0 s",
      "11.3 s",
      "5.5 s",
      "40.5 s"
    ])
  }
];

console.log(questions);