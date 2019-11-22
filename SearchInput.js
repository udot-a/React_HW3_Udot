import SearchInput from './SearchInput.js'
const e = React.createElement;
export default (props) =>{
    let [currentValue, setCurrentValue] = React.useState('')
    const typeButton = e => {
        e.preventDefault()
        setCurrentValue(e.target.value.replace(/[^\w ]/g, ''))

    }
return e('div', {className:'searchinput'}, 
            e('i', {className :'fas fa-search'}, null),
            e('input', {className :'search', type:'search', value:currentValue, onChange:typeButton}, null),
            e('a', {href :'#'}, 
                e('i', {className:"fas fa-keyboard"},null) 
            ),
            e('a', {href :'#'}, 
                e('i', {className:"fas fa-microphone-alt"},null) 
            )

)
}
