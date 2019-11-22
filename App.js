import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'


const e = React.createElement;
const App = () => {
    const [name, setName] = React.useState(1)

    return e('div', { className: "wrapper" },
        e(Header, null, null),
        e(Main, null, null),
        e(Footer, null, null)
  

        // e(Button, {text:name}, e('p', {style:{color: 'red'}}, 'Text'))),
        //      e('h1', { 
        //          title: 'Click me',
        //          style: {color: `rgb(${name * 10}, ${name * 10}, ${name * 10})`} }, name)
    )
}
ReactDOM.render(e(App, null, null), document.querySelector('#root'))