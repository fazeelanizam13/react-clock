# [react-clock](https://www.npmjs.com/package/@fazeelanizam13/react-clock)

a fully customizable, responsive analog clock in React.

<p style="text-align: center">
  <img src="https://drive.google.com/uc?export=view&id=1Yt-Cen1SjhqDiMHhBK4NIS1EVD0IN-0A" style="width: 70%;">
</p>

## basic usage

- install as a dependency - `npm i @fazeelanizam13/react-clock`

- follow the example for a minimal version of the clock:

```
import ReactClock from '@fazeelanizam13/react-clock'

const App = () => {
  return (
    ...

    <ReactClock size={{ property: 'width', value: 50 }} />

    ...
  )
}
```

## props

| name              | type                                                | default                                              | example                             | description                                                                                                    |
| ----------------- | --------------------------------------------------- | ---------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| size              | `{ property: 'width' \| 'height'; value: number; }` | -                                                    | `{ property:  'width', value: 50 }` | height or width of the clock as a percentage relative to parent. clock is set to have an as aspect ratio of 1/1 |
| clockHandLength   | `{ hour: number; minute: number; second: number; }` | `{ hour: 25, minute: 34, second: 40 }`               | -                                   | length of each hand as a percentage of the clock diameter                                                      |
| clockHandWidth    | `{ hour: number; minute: number; second: number; }` | `{ hour: 15, minute: 10, second: 5 }`                | -                                   | width of each hand in pixels                                                                                   |
| clockFacePadding  | `number`                                            | `3`                                                  | -                                   | distance from clock face border to the numbers as a percentage of the clock diameter                               |
| clockFaceStyle    | `React.CSSProperties`                               | `{ backgroundColor: 'black', borderRadius: '100%' }` | -                                   |                                                                                                                |
| clockHandStyle    | `React.CSSProperties`                               | `{ backgroundColor: 'white', borderRadius: 10 }`     | -                                   |                                                                                                                |
| clockCenterStyle  | `React.CSSProperties`                               | `{ backgroundColor: 'teal', borderRadius: '100%' }`  | -                                   |                                                                                                                |
| clockNumbersStyle | `React.CSSProperties`                               | `{ color: 'white', fontSize: '1.5rem' }`             | -                                   | font styling for clock numbers                                                                                 |

## for developers

to setup locally:

- install dependencies - `npm install`
- start dev server - `npm run start`

to test the package:

- package the source code - `npm pack`
- reference the generated `.tgz` file from the `package.json` of the project you want to test from

```
"dependencies": {
  "@fazeelanizam13/react-clock": "<path/to/file.tgz>"
}
```

- import and use as shown in the example:

```
import ReactClock from '@fazeelanizam13/react-clock'

const App = () => {
  return (
    ...

    <ReactClock size={{ property: 'width', value: 50 }} />

    ...
  )
}
```
