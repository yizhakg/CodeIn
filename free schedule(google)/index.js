function freeTimeArray(scheduleArray, maxTime) {
  let newArray = [];
  for (let i = 0; i < scheduleArray.length - 1; i++) {
    if (scheduleArray[i][1] != scheduleArray[i + 1][0]) {
      newArray.push([scheduleArray[i][1], scheduleArray[i + 1][0]])
    }
  }
  newArray.push([scheduleArray[scheduleArray.length - 1][1], maxTime[1]]);
  return newArray;
}
function timeMinus(t2, t1, boolOrMax) {
  let d1 = new Date();
  let d2 = new Date();
  d1.setHours(t1.substr(0, 2), t1.substr(3, 2))
  d2.setHours(t2.substr(0, 2), t2.substr(3, 2))
  if (boolOrMax == true) {
    return (d2 - d1 >= 0)
  } else {
    return ((d2 - d1) / 60000 >= boolOrMax)

  }
}

function availableMeetingTime(preson1FreeTime, preson2FreeTime) {

  let meetingArray = []
  for (let i = 0; i < preson1FreeTime.length; i++) {
    for (let j = 0; j < preson2FreeTime.length; j++) {
      let start;
      let end;
      if (timeMinus(preson2FreeTime[j][1], preson1FreeTime[i][0], true) && timeMinus(preson1FreeTime[i][1], preson2FreeTime[j][0], true)) {


        if (timeMinus(preson1FreeTime[i][0], preson2FreeTime[j][0], true)) {
          start = preson1FreeTime[i][0];
        } else {
          start = preson2FreeTime[j][0];
        }
        if (timeMinus(preson1FreeTime[i][1], preson2FreeTime[j][1], true)) {
          end = preson2FreeTime[j][1];
        } else {
          end = preson1FreeTime[i][1];
        }
        meetingArray.push([start, end]);
      }
    }
  }
  return meetingArray;
}

function tryToMeet(minMeetingTime) {
  if (person1Scedule.length == 0 || person2Scedule.length == 0) {
    alert("No Free Time")
    return "No Free Time"
  }
  let preson1FreeTime = freeTimeArray(person1Scedule, person1MinMax);
  let preson2FreeTime = freeTimeArray(person2Scedule, person2MinMax);
  let availableMeetings = availableMeetingTime(preson1FreeTime, preson2FreeTime);
  for (let i = 0; i < availableMeetings.length; i++) {
    if (!timeMinus(availableMeetings[i][1], availableMeetings[i][0], minMeetingTime))
      availableMeetings.splice(i, 1);
  }
  return availableMeetings;
}

//Sample Input
//person1 scedule
let person1Scedule = [
  ['09:00', '10:30'],//10:30-12:00
  ['12:00', '13:00'],//13:00-16:00
  ['16:00', '18:00']//18:00-20:00
];
let person1MinMax = ['09:00', '20:00'];//

//person2 scedule
let person2Scedule = [
  ['10:00', '11:30'],//11:30-12:30
  ['12:30', '14:30'],
  ['14:30', '15:00'],//15:00-16:00
  ['16:00', '17:00']//17:00-18:30
];

let person2MinMax = ['10:00', '18:30'];

let atLeastTime = 30;//minimum meeting time(minutes)
let whenWeCanMeet = tryToMeet(30);
console.log(whenWeCanMeet);
