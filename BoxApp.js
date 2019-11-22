const images = [
    {account:'./images/account.png'},
    {busines:'./images/busines.png'},
    {calendar:'./images/calendar.png'},
    {card:'./images/card.png'},
    {chrome:'./images/chrome.png'},
    {mail:'./images/mail.png'},
    {group:'./images/group.png'},
    {news:'./images/news.png'},
    {pay:'./images/pay.png'},
    {photo:'./images/photo.png'},
    {play:'./images/play.png'},
    {youtube:'./images/youtube.png'}
  ]
const e = React.createElement;

export default (props) =>{
    const setElement = () =>
        images.map(item => 
            e('a',{href:"#", key:Object.keys(item)[0]}, 
                e('img', {href:"#", className:"icons", src:Object.values(item)[0], title:Object.keys(item)[0]}, null)
            )
    )
return e('div', {className:props.currentClass}, setElement() )
            
}
