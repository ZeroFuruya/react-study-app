import pfp from './assets/mrinc.jpg'; // To import an image, use this method

const Card = () => {
  return (
    <div className="card">
        <img className='card-pfp' src={pfp} alt="Uncanny Mr. Incredible" />
        <h2 className='card-title'>Zero Furuya</h2>
        <p className='card-text'>A student. Loves video games, music, drawings, and more.</p>
    </div>
  )
}

export default Card