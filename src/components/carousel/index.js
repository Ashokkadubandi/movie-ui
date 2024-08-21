import './index.css'

const imgObj = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudTsDqMa_OimGOwDvB5veN7NQ3lyWuhGSVw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvk2v9KKSMy93OkaOX5WTkKjDH2kAyTfOoQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEl05F5JrOQMJb6iDsPYkaYiSx_7EZmc_d4g&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxYUb82L3RX5dgbZ_sPnFJGziaA3O3nqMQw&s',
  'https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400',
]

const Carousel = () => {
  console.log('carousel')
  const x = document.getElementsByClassName('car-img')
  console.log(x.style)
  return (
    <div className="carousel">
      {imgObj.map(each => (
        <img src={each} className="car-img" alt="uni" />
      ))}
    </div>
  )
}
export default Carousel
