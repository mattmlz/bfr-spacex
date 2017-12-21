// Variables
const $timeline = document.querySelector('.timeline')
const $sections = $timeline.querySelectorAll('.section')
const $start = $sections[0].querySelector('.start')
const $shanghai = $sections[0].querySelector('.shanghai')
const $s0line = $sections[0].querySelector('.line')
const $s2topline = $sections[2].querySelector('.topLine')
const $s2botline = $sections[2].querySelector('.botLine')

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
  document.querySelector('.actualTime').innerHTML = result;
  setTimeout('actualTime();', '1000');
  return true;
}
actualTime()

const s2LineGrowth = (mousePos) =>
{
  if(mousePos < $sections[2].offsetTop)
  {
    $s2topline.classList.add('grow')
    $s2botline.classList.add('grow')
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
  setTimeout(scrollItHorizontal, 3500, $sections[1])
//  scrollItHorizontal($sections[1])
})

document.addEventListener('mousewheel', (event) =>
{
  setTimeout(s2LineGrowth, 500, event.clientY) 
})

/******************

  Canvas
  
******************/

const $camembert = document.querySelector('.camembertCanvas')
const camembertContext = $camembert.getContext('2d')

camembertContext.fillStyle = 'white'
camembertContext.strokeStyle = 'white'
camembertContext.beginPath()
camembertContext.arc(50, 50, 25, 0, 2 * Math.PI, false)
camembertContext.stroke()
