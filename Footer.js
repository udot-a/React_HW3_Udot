import Label from './Label.js'
const e = React.createElement;
export default (props) =>{
return e('footer', null, 
            e('div', {className :'reklama'}, 
                e(Label, {name: 'Реклама'}, null),
                e(Label, {name: 'Для бизнеса'}, null),
                e(Label, {name: 'Все о Google'}, null),
            ),
            e('div', {className :'condition'}, 
                e(Label, {name: 'Конфиденциальность'}, null),
                e(Label, {name: 'Условия'}, null),
                e(Label, {name: 'Настройки'}, null),
            )

        )
}
