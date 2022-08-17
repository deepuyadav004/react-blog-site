import './header.css'

export default function Header() {
  return (
    <>
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img 
            className='headerImg'
            src='https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg'
            alt='headerI'
        />
    </div>
    </>
  )
}
