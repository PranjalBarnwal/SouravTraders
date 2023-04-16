import "./HomeContainer.css"
import BathRoom from "./../assets/BathRoom.png"

const HomeContainer = () => {
  return (
    <div className="homecontainer">
      <div className="homecontainer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt dignissimos a officia quo perspiciatis esse atque molestias provident repellendus reprehenderit, quae, amet necessitatibus nisi maxime voluptate voluptatem aperiam vero?
      </div>
      <div className="homecontainer-img"><img src={BathRoom} alt="" srcset="" /></div>
    </div>
  )
}

export default HomeContainer
