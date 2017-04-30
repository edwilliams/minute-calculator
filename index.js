// utils
var round = (value, decimals) => Number( Math.round( value + 'e' + decimals ) + 'e-' + decimals )
var pad = (value, length) => ( value.toString().length < length ) ? pad( '0' + value, length ) : value.toString()

// pass in time ( e.g. '10:00' )
// returns integer ( e.g. 600 )
function strToInt( time ) {

  if (
    typeof time !== 'string' ||               // must be string
    time.length !== 5 ||                      // 5 characters
    time.indexOf(':') !== 2 ||                // this format: 'xx:xx'
    (parseInt(time.split(':')[1]) % 5) !== 0  // minutes must be in 5 increments
  ) throw new Error('calc: invalid param')

  var hours = parseInt(time.split(':')[0])
  var minutes = parseInt(time.split(':')[1])
  var time = (hours * 60) + minutes

  return time

}

// pass in time e.g. '10:00' and duration in minutes (e.g. 90)
// returns object ( e.g. { hours: '11', minutes: '30' } )
function calc( time, duration ) {

  var total = strToInt(time) + duration

  var newTime = round( (total / 60), 3 )

  if ( newTime < 0  ) return { hours: '00', minutes: '00' }
  if ( newTime > 24 ) return { hours: '24', minutes: '00' }

  var newHours = newTime.toString().split('.')[0]
  var newMinutes = newTime.toString().split('.')[1] || '0'

  var obj = {
    '0'   : '0',
    '083' : '5',
    '167' : '10',
    '25'  : '15',
    '333' : '20',
    '417' : '25',
    '5'   : '30',
    '583' : '35',
    '667' : '40',
    '75'  : '45',
    '833' : '50',
    '917' : '55',
  }

  return {
    hours: pad(newHours, 2),
    minutes: pad(obj[newMinutes], 2) || '00'
  }

}

module.exports = {
  strToInt: strToInt,
  calc: calc
}
