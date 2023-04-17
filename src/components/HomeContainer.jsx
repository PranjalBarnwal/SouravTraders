import "./HomeContainer.css"
import BathRoom from "./../assets/BathRoom.png"

const HomeContainer = () => {
  return (
    <>
    <div className="homecontainer">
      <div className="homecontainer-text font1">ciatis esse atque mole quae, amet necessitatibus nisi maxime voluptate voluptatem aperiam vero?
      </div>
      <div className="homecontainer-img"><img src={BathRoom} alt="" srcset="" /></div>
    </div>
    <div className="scroll_down"></div>

    </>
  )
}

export default HomeContainer
