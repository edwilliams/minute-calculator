# Minute Calculator

> Pass in time as a string (e.g. `'10:00'`) and minutes are returned as an integer (e.g. `600`)

## Install

```
$ npm install minute-calculator --save
```

## Usage

```
import mc from 'minute-calculator'
mc.strToInt('10:00')
// => 600
mc.calc('10:00', 90)
// => { hours: '11', minutes: '30' }
```

## License

MIT © [Ed Williams](http://edwilliams.github.io)
