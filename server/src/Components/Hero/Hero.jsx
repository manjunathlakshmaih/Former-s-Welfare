import './Hero.css';

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, PlayStatus}) => {
  return (
    <div className='Hero'>
      <div className='hero-text'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className='hero-explore'>

      </div>

    </div>
  )
}

export default Hero;