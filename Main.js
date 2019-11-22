import Button from './Button.js'
import SearchInput from './SearchInput.js'

const e = React.createElement;
export default (props) =>{
return e('main', null, 
            e('div', {className :'googleimg'}, 
                e('img', {className:'image', src:'./images/argentina-elections-2019-5167565079838720-2x.png'},null)
            ),
            e(SearchInput, null, null),
            e('div', {className:'buttons'},
                e(Button,{name:'Поиск в Google'}),
                e(Button, {name:'Мне повезет!'})    
            )
)
}
