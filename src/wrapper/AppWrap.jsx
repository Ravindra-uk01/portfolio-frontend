import { SocialMedia, NavigationDots } from "../components"


const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className="app__wrapper app__flex">
            <Component/>
            <div className="copyright">
                <p className="p-text">@2023 Ravindra</p>
                <p className="p-text">All Rights Reserved</p>
            </div>
        </div>
        <NavigationDots/>
    </div> 
  )
}

export default AppWrap