import Label from './Label.js'
import BoxApp from './BoxApp.js'
const e = React.createElement;
export default (props) => {
    let [isToggle, setToggle] = React.useState(false)
    const onClickHandler = e => {
        setToggle(!isToggle)
    }

    return e('header', null,
                e(BoxApp, isToggle ? { currentClass: "app-box move-box" } : { currentClass: "app-box" }, null),
                e(Label, { name: 'Почта' }, null),
                e(Label, { name: 'Картинки' }, null),
                e('a', { href: '#', onClick:onClickHandler },
                    e('i', { className: "fas fa-th" }, null)
                ),
                e('a', { href: '#' },
                    e('img', { className: "avatar", src: './images/simpson.jpg' }, null)
                )

            )
}
