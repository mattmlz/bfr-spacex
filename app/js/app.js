const $timeline = document.querySelector('.timeline')
const $sections = document.querySelectorAll('.section')
const $start = document.querySelector('.start')
const $bts = document.querySelector('.bts')

const scrollItHorizontal = (element) => {
  document.body.scrollTo({
    'behavior': 'smooth',
    'left': element.offsetLeft,
    'top': 0,
  })
}

const scrollItVertical = (element) => {
  document.body.scrollTo({
    'behavior': 'smooth',
    'left': element.offsetLeft,
    'top': element.offsetTop
  })
}

const scrollablePage = () => {
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

$start.addEventListener('click', () => {
  $timeline.classList.add('scrollable')
  scrollablePage()
  scrollItHorizontal($sections[1])
})

//$bts.addEventListener('click', () => {
//  scrollItHorizontal($sections[0])
//})

//calcul of actual time
const actualTime = () => {
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

/*********
 * CANVAS *
 *********/
const $camembert = document.querySelector('.camembertCanvas')
const camembertContext = $camembert.getContext('2d')

camembertContext.fillStyle = 'white'
camembertContext.strokeStyle = 'white'
camembertContext.beginPath()
camembertContext.arc(50, 50, 25, 0, 2 * Math.PI, false)
camembertContext.stroke()
