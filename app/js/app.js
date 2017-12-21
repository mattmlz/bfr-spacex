// Variables
const $timeline = document.querySelector('.timeline')
const $sections = $timeline.querySelectorAll('.section')
const $start = $sections[0].querySelector('.start')
const $shanghai = $sections[0].querySelector('.shanghai')
const $s0line = $sections[0].querySelector('.line')
const $s2topline = $sections[2].querySelector('.topLine')
const $s2botline = $sections[2].querySelector('.botLine')
const $s2indications = $sections[2].querySelector('.scrollStep')
const $s4topline = $sections[4].querySelector('.topLine')
const $s4botline = $sections[4].querySelector('.botLine')
const $s4indications = $sections[4].querySelector('.scrollStep')

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
const actualTime = () => 
{
  date = new Date
  hours = date.getHours()
  if (hours < 10) {
    hours = "0" + hours
  }

  mins = date.getMinutes()
  if (mins < 10) {
    mins = "0" + mins
  }

  secs = date.getSeconds()
  if (secs < 10) {
    secs = "0" + secs
  }

  result = +hours + ':' + mins + ':' + secs
  document.querySelector('.actualTime1').innerHTML = result;
  setTimeout('actualTime();', '1000');
  return true;
}
actualTime()

//calcul of time +3 mins
const actualTime3 = () => {
  date = new Date
  hours = date.getHours()
  if (hours < 10) {
    hours = "0" + hours
  }

  mins = date.getMinutes() + 3
  if (mins < 10) {
    mins = "0" + mins
  }

  secs = date.getSeconds()
  if (secs < 10) {
    secs = "0" + secs
  }

  result = +hours + ':' + mins + ':' + secs
  document.querySelector('.actualTime3').innerHTML = result;
  setTimeout('actualTime3();', '1000');
  return true;
}
actualTime3()

//calcul of time +30 mins
const actualTime5 = () => {
  date = new Date
  hours = date.getHours()
  if (hours < 10) {
    hours = "0" + hours
  }

  mins = date.getMinutes() + 30
  if (mins < 10) {
    mins = "0" + mins
  }

  secs = date.getSeconds()
  if (secs < 10) {
    secs = "0" + secs
  }

  result = +hours + ':' + mins + ':' + secs
  document.querySelector('.actualTime5').innerHTML = result;
  document.querySelector('.arrivalTimeBfr').innerHTML = result;
  setTimeout('actualTime5();', '1000');
  return true;
}
actualTime5()

//calcul of flight time with plane
const actualTimePlane = () => {
  date = new Date
  hours = date.getHours() + 15
  if (hours < 10) {
    hours = "0" + hours
  }

  mins = date.getMinutes()
  if (mins < 10) {
    mins = "0" + mins
  }

  secs = date.getSeconds()
  if (secs < 10) {
    secs = "0" + secs
  }

  result = +hours + ':' + mins + ':' + secs
  document.querySelector('.arrivalTimePlane').innerHTML = result;
  setTimeout('actualTimePlane();', '1000');
  return true;
}
actualTimePlane()

/******************
       Line
******************/
const lineGrowth = (pos) =>
{
  if(pos == 'translate3d(0px, 0%, 0px)' || pos == '')
  {
    $s2topline.classList.add('grow')
    $s2indications.classList.add('appear')
    $s2botline.classList.add('grow')
  }
  else if(pos == 'translate3d(0px, -100%, 0px)')
  {
    //animations section3
  }
  else if(pos == 'translate3d(0px, -200%, 0px)')
  {
    $s4topline.classList.add('grow')
    $s4indications.classList.add('appear')
    $s4botline.classList.add('grow')
  }
  else if(pos == 'translate3d(0px, -300%, 0px)')
  {
    //animations section5
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
  setTimeout(scrollItHorizontal, 3500, $sections[1]) //good version
//  scrollItHorizontal($sections[1]) //dev version
})

document.addEventListener('mousewheel', (event) =>
{
  setTimeout(lineGrowth, 500, $timeline.style.transform) 
})

/******************

  Canvas
  
******************/

//Section 1
const $camembert = document.querySelector('.camembertCanvas')
const camembertContext = $camembert.getContext('2d')

camembertContext.fillStyle = 'white'
camembertContext.strokeStyle = 'white'
camembertContext.beginPath()
camembertContext.arc(50, 50, 25, 0, 2 * Math.PI, false)
camembertContext.stroke()

//Section 3
//Set variables
const $temperature = document.querySelector('.temperature')
const $acceleration = document.querySelector('.acceleration')
const $speed = document.querySelector('.speed')
const $altitude = document.querySelector('.altitude')
const $temperatureCanvas = $temperature.querySelector('.fillRound')
const $accelerationCanvas = $acceleration.querySelector('.fillRound')
const $speedCanvas = $speed.querySelector('.fillRound')
const $altitudeCanvas = $altitude.querySelector('.fillRound')
//Get context of canvas
const temperatureContext = $temperatureCanvas.getContext('2d')
const accelerationContext = $accelerationCanvas.getContext('2d')
const speedContext = $speedCanvas.getContext('2d')
const altitudeContext = $altitudeCanvas.getContext('2d')
//Round of temperature
temperatureContext.beginPath()
temperatureContext.strokeStyle = 'white'
temperatureContext.lineWidth = 4
temperatureContext.arc(50, 50, 40, 2 * Math.PI, false)
temperatureContext.stroke()
//Round of acceleration
accelerationContext.beginPath()
accelerationContext.strokeStyle = 'white'
accelerationContext.lineWidth = 4
accelerationContext.arc(50, 50, 40, 2 * Math.PI, false)
accelerationContext.stroke()
//Round of speed
speedContext.beginPath()
speedContext.strokeStyle = 'white'
speedContext.lineWidth = 4
speedContext.arc(50, 50, 40, 2 * Math.PI, false)
speedContext.stroke()
//Round of altitude
altitudeContext.beginPath()
altitudeContext.strokeStyle = 'white'
altitudeContext.lineWidth = 4
altitudeContext.arc(50, 50, 40, 2 * Math.PI, false)
altitudeContext.stroke()