import Divider from '../Components/Divider';
import { PlayState, Reveal, ScrollTrigger, SplitChars, SplitWords, Timeline, Tween } from 'react-gsap';

const GsapSample = () => {

  return (
    <div className='flex flex-col items-center justify-center gap-8 w-full py-16'>

      <a className='title' href='https://bitworking.github.io/react-gsap/'> React Gsap Docs </a>



      <Divider />



      <Tween
        to={{ x: '200px', rotation: 180 }}
        duration={2}
        ease="back.out(1.7)"
        playState={PlayState.play}
      >
        <div style={{ width: '100px', height: '100px', background: '#f0f' }} />
      </Tween>




      <Divider />




      <Tween
        to={{ x: '200px' }}
        duration={1}
        axis='y'
        ease="back.out(2)"
        playState={PlayState.play}
        repeat={100}
        yoyo={true}
      >
        <div style={{ width: '100px', height: '100px', background: '#0f0' }} />
      </Tween>




      <Divider />





      <Tween from={{ x: '200px', rotation: 180 }} duration={2}>
        <div style={{ width: '100px', height: '100px', background: '#ff0' }} />
      </Tween>





      <Divider />





      <Tween
        from={{ x: '100px', rotation: 45 }}
        to={{ x: '200px', rotation: 135 }}
        duration={2}
      >
        <div style={{ width: '100px', height: '100px', background: '#f00' }} />
      </Tween>






      <Divider />






      <Tween to={{ x: '200px' }} stagger={0.2} ease="elastic.out(0.2, 0.1)">
        <div style={{ width: '20px', height: '20px', background: '#ccc' }} />
        <div style={{ width: '20px', height: '20px', background: '#ccc' }} />
        <div style={{ width: '20px', height: '20px', background: '#ccc' }} />
        <div style={{ width: '20px', height: '20px', background: '#ccc' }} />
        <div style={{ width: '20px', height: '20px', background: '#ccc' }} />
      </Tween>





      <Divider />





      <Timeline
        target={
          <div style={{ width: '100px', height: '100px', background: '#a12163' }} />
        }
      >
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} />
        <Tween to={{ x: '200px' }} />
        <Tween to={{ rotation: 180 }} position="+=1" />
      </Timeline>





      <Divider />





      <Timeline
        target={
          <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
        }
      >
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} />
        <Tween to={{ x: '200px' }} />
        <Tween to={{ x: '200px' }} duration={1}>
          <div style={{ width: '100px', height: '100px', background: 'red' }} />
        </Tween>
      </Timeline>






      <Divider />






      <Timeline
        totalProgress={1}
        duration={10}
        progress={1}
        playState={PlayState.reverse}
        target={
          <>
            <div
              style={{ width: '100px', height: '100px', background: '#ccc' }}
            />
            <div style={{ width: '100px', height: '100px', background: 'red' }} />
          </>
        }
      >
        <Tween to={{ x: '100px' }} target={0} />
        <Tween to={{ x: '100px' }} target={1} />
        <Tween to={{ x: '200px' }} target={0} />
        <Tween to={{ x: '200px' }} target={1} />
        <Tween to={{ opacity: 0 }} />
      </Timeline>





      <Divider />






      <ScrollTrigger start="-200px center" end="200px center" scrub={0.5} markers>
        <Tween
          to={{
            x: '300px',
          }}
        >
          <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
        </Tween>
        <Tween
          to={{
            x: '300px',
          }}
        >
          <div style={{ width: '100px', height: '100px', background: '#999' }} />
        </Tween>
        <Tween
          to={{
            x: '300px',
          }}
        >
          <div style={{ width: '100px', height: '100px', background: '#999' }} />
        </Tween>
      </ScrollTrigger>






      <Divider />






      <Reveal repeat>
        <Tween from={{ opacity: 0 }} duration={2}>
          <h3>This headline is fading in</h3>
        </Tween>
      </Reveal>




      <Divider />




      <Reveal repeat trigger={<div />}>
        <Tween
          from={{ opacity: 0, transform: 'translate3d(-100vw, 0, 0)' }}
          ease="back.out(1.4)"
        >
          <h3>This headline is coming from left</h3>

        </Tween>
      </Reveal>




      <Divider />




      <div>
        <Tween from={{ x: '200px' }} stagger={0.1}>
          <SplitChars
            wrapper={<div style={{ display: 'inline-block', fontSize: '40px' }} />}
          >
            This text gets splitted by chars.
          </SplitChars>
        </Tween>
      </div>





      <Divider />




      <div>
        <Tween from={{ x: '200px' }} stagger={0.5} ease="elastic.out(0.1, 0.1)">
          <SplitWords
            wrapper={<div style={{ display: 'inline-block', fontSize: '40px' }} />}
          >
            This text gets splitted by words.
          </SplitWords>
        </Tween>
      </div>





      <Divider />


    </div>
  )
}

export default GsapSample