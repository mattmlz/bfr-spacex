// Variables
const $timeline = document.querySelector('.timeline')
const $sections = $timeline.querySelectorAll('.section')
const $videos = $timeline.querySelectorAll('video')
const $start = $sections[0].querySelector('.start')
const $shanghai = $sections[0].querySelector('.shanghai')
const $s0line = $sections[0].querySelector('.line')
const $s1stepLine = $sections[1].querySelector('.stepLine')
const $s1scrollSteps = $sections[1].querySelectorAll('.scrollStep')
const $s1leftline = $sections[1].querySelector('.leftLine')
const $s1botline = $sections[1].querySelector('.botLine')
const $s2topline = $sections[2].querySelector('.topLine')
const $s2botline = $sections[2].querySelector('.botLine')
const $s2scrollStep = $sections[2].querySelector('.scrollStep')
const $s4topline = $sections[4].querySelector('.topLine')
const $s4botline = $sections[4].querySelector('.botLine')
const $s4stepLine = $sections[4].querySelector('.stepLine')
const $s4legendLine1_vertical = $sections[4].querySelector('.legendLine1_vertical')
const $s4legendLine1_horizontal = $sections[4].querySelector('.legendLine1_horizontal')
const $s4legendLine2_vertical = $sections[4].querySelector('.legendLine2_vertical')
const $s4legendLine2_horizontal = $sections[4].querySelector('.legendLine2_horizontal')
const $s4scrollStep = $sections[4].querySelector('.scrollStep')
const $s5topline = $sections[5].querySelector('.topLine')
const $s5stepLine = $sections[5].querySelector('.stepLine')

/******************

  Functions
  
******************/

const scrollItHorizontal = (element) => 
{
  document.body.scrollTo({
    'behavior': 'smooth',
    'left': element.offsetLeft,
    'top': 0,
  })
}

const scrollItVertical = (element) => 
{
  document.body.scrollTo({
    'behavior': 'smooth',
    'left': element.offsetLeft,
    'top': element.offsetTop
  })
}

const scrollablePage = () => 
{
  if ($timeline.classList.contains('scrollable')) {
    onepagescroll('.timeline', {
      //child elements selector. use if you don't want to use section for page.
      pageContainer: 'section',

      //determine css3 animation that will run when page changes
      //ex) 'ease', 'ease-out-in', 'cubic-bezier(0.2, 0.75, 0.5, 1.15)'
      animationType: 'ease-in-out',
      //define how long each page takes to animate, 0 for off
      animationTime: 500,
      //back to the last/first page when you scroll at first/last page
      infinite: false,
      //set show or hide pagination element.
      pagination: false,
      //allow up/page-up and down/page-down key for page scroll
      keyboard: true,
      //determine direction of page scroll. options available are 'vertical' and 'horizontal'
      direction: 'vertical'
    })
  }
}

/******************
Actual time functions
******************/
//calcul of actual time
moment().format('fr');
 
const actualTime = () => 
{
  date = new Date
  document.querySelector('.actualTime1').innerHTML = moment(date).tz('America/New_York').format('LTS'); 
  setTimeout('actualTime();', '1000')
}
actualTime()
 
//calcul of time +3 mins
const actualTime3 = () => {
  date = new Date
  document.querySelector('.actualTime3').innerHTML = moment(date).tz('America/New_York').add(3, 'minutes').format('LTS')
  setTimeout('actualTime3();', '1000');
}
actualTime3()
 
//calcul of time +30 mins
const actualTime5 = () => {
  date = new Date
  document.querySelector('.actualTime5').innerHTML = moment(date).tz('America/New_York').add(30, 'minutes').format('LTS')
  document.querySelector('.arrivalTimeBfr').innerHTML = moment(date).tz('Asia/Shanghai').add(30, 'minutes').format('LTS')
  setTimeout('actualTime5();', '1000');
}
actualTime5()
 
//calcul of flight time with plane
const actualTimePlane = () => {
  date = new Date
  document.querySelector('.arrivalTimePlane').innerHTML = moment(date).tz('Asia/Shanghai').add(15, 'hours').format('LTS')
  setTimeout('actualTimePlane();', '1000');
}
actualTimePlane()


const firstPageEvents = () =>
{
  $videos[0].play()
  $s1stepLine.classList.add('grow')
  $s1leftline.classList.add('grow')
  
  for(let i=0; i < $s1scrollSteps.length; i++)
  {
    $s1scrollSteps[i].classList.add('appear')
  }
  
  $s1botline.classList.add('grow')
}

//Launch animations on section3
//Set variables
const $temperature = document.querySelector('.temperature')
const $acceleration = document.querySelector('.acceleration')
const $speed = document.querySelector('.speed')
const $altitude = document.querySelector('.altitude')
const $temperatureCanvas = $temperature.querySelector('.fillRound')
const $accelerationCanvas = $acceleration.querySelector('.fillRound')
const $speedCanvas = $speed.querySelector('.fillRound')
const $altitudeCanvas = $altitude.querySelector('.fillRound')
let tempDisplay = 22
let temperature = 0
let accelerationDisplay = 0
let acceleration = 0
let speedDisplay = 0
let speed = 0
let altitudeDisplay = 0
let altitude = 0

//Get context of canvas
const temperatureContext = $temperatureCanvas.getContext('2d')
const accelerationContext = $accelerationCanvas.getContext('2d')
const speedContext = $speedCanvas.getContext('2d')
const altitudeContext = $altitudeCanvas.getContext('2d')

const launchTemperature = () => {
  if(tempDisplay >= -3 && temperature <= 26){
    temperatureContext.clearRect(0, 0, 100, 100)
    temperatureContext.beginPath()
    temperatureContext.strokeStyle = 'white'
    temperatureContext.lineWidth = 4
    temperatureContext.arc(50, 50, 40, (((-2 * Math.PI) / 24) * temperature), false)
    temperatureContext.stroke()
    $temperature.querySelector('.count').innerHTML = Math.ceil(tempDisplay)
    temperature += 0.7
    tempDisplay -= 0.7
  }
}

const launchAcceleration = () => {
  if(accelerationDisplay <= 3.3 && acceleration <= 32) {
    accelerationContext.clearRect(0, 0, 100, 100)
    accelerationContext.beginPath()
    accelerationContext.strokeStyle = 'white'
    accelerationContext.lineWidth = 4
    accelerationContext.arc(50, 50, 40, ((-2 * Math.PI) / 32) * acceleration, false)
    accelerationContext.stroke()
    $acceleration.querySelector('.count').innerHTML = accelerationDisplay.toFixed(2)
    acceleration += 1
    accelerationDisplay += 0.1
  }
}

const launchSpeed = () => {
  if(speedDisplay <= 22000 && speed <= 22000) {
    speedContext.clearRect(0, 0, 100, 100)
    speedContext.beginPath()
    speedContext.strokeStyle = 'white'
    speedContext.lineWidth = 4
    speedContext.arc(50, 50, 40, ((-2 * Math.PI) / 22000) * speed, false)
    speedContext.stroke()
    $speed.querySelector('.count').innerHTML = speedDisplay
    speed += 500
    speedDisplay += 500
  }
}

const launchAltitude = () => {
  if(altitudeDisplay <= 8000 && altitude <= 8000) {
    altitudeContext.clearRect(0, 0, 100, 100)
    altitudeContext.beginPath()
    altitudeContext.strokeStyle = 'white'
    altitudeContext.lineWidth = 4
    altitudeContext.arc(50, 50, 40, ((-2 * Math.PI) / 8000) * altitude, false)
    altitudeContext.stroke()
    $altitude.querySelector('.count').innerHTML = altitudeDisplay
    altitude += 200
    altitudeDisplay += 200
  }
}

const launchIntervals = () => {
  intervalTemperature = window.setInterval(launchTemperature, 1500)
  intervalAcceleration = window.setInterval(launchAcceleration, 1500)
  intervalSpeed = window.setInterval(launchSpeed, 1500)
  intervalAltitude = window.setInterval(launchAltitude, 1500)
}
// Events happening on scroll depending on the position on the page
const scrollEvents = (pos) =>
{
  if(pos == 'translate3d(0px, 0%, 0px)' || pos == '')
  {
    $s2topline.classList.add('grow')
    $s2scrollStep.classList.add('appear')
    $s2botline.classList.add('grow')
  }
  else if(pos == 'translate3d(0px, -100%, 0px)')
  {
    $videos[1].play()
  }
  else if(pos == 'translate3d(0px, -200%, 0px)')
  {
    $s4topline.classList.add('grow')
    $s4stepLine.classList.add('grow')
    $s4legendLine1_vertical.classList.add('grow')
    $s4legendLine1_horizontal.classList.add('grow')
    $s4legendLine2_vertical.classList.add('grow')
    $s4legendLine2_horizontal.classList.add('grow')
    $s4scrollStep.classList.add('appear')
    $s4botline.classList.add('grow')
    launchIntervals()
  }
  else if(pos == 'translate3d(0px, -300%, 0px)')
  {
    $videos[2].play()
    $s5topline.classList.add('grow')
    $s5stepLine.classList.add('grow')
  }
}

/******************

     Events
  
******************/

$start.addEventListener('click', () => 
{
  $timeline.classList.add('scrollable')
  scrollablePage()
  $start.classList.add('close')
  $shanghai.classList.add('disappear')
  $s0line.classList.add('grow')
//  setTimeout(scrollItHorizontal, 2500, $sections[1]) //good version
  scrollItHorizontal($sections[1]) //dev version
  setTimeout(firstPageEvents, 2500)
})

document.addEventListener('mousewheel', (event) =>
{
  setTimeout(scrollEvents, 500, $timeline.style.transform) 
})
