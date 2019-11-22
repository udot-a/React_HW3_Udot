import Button from './Button.js'
const e = React.createElement;
class AppClass extends React.Component {
    state={value:1}
    onClickHandler = (e)=>this.setState({value: this.state.value+1})
    render =()=> (
        e('div', { onClick: this.onClickHandler  },
        e('section', null, null, 
            e(Button, {text:this.state.value}, e('p', {style:{color: 'red'}}, 'Text'))),
                 e('h1', { 
                     title: 'Click me',
                     style: {color: `rgb(${this.state.value * 10}, ${this.state.value * 10}, ${this.state.value * 10})`} }, this.state.value)
    )
        )
    }

// const App = () => {
//     const [name, setName] = React.useState(1)

//     return e('div', { onClick: (e) => setName(name + 1) },
//         e('section', null, null, 
//             e(Button, {text:name}, e('p', {style:{color: 'red'}}, 'Text'))),
//                  e('h1', { 
//                      title: 'Click me',
//                      style: {color: `rgb(${name * 10}, ${name * 10}, ${name * 10})`} }, name)
//     )
// }
ReactDOM.render(e(AppClass, null, null), document.querySelector('#root'))