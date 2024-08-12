import React from 'react';
import './styles.css'
import Perfil from '../../assets/fotos/fotoPerfil.png';

function Home() {

    return (
        <div className='home-panel'>
           <div className='title'>
                <div>
                  <p>Olá, sou Felipe Oliveira</p>
                  <h1 className='gradient'>Desenvolvedor Full Stack</h1>
                  <a class="button" href="https://wa.me/+5511956090107">Contate me</a>
                </div>
                <div className='links'>
                    <a href="https://github.com/LippeOli">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADq0lEQVRoge2ZWUgVYRTHzXLNMjOyElrsoV1B08LqpQiMyjKiPX3ptQ16KqqHjF5C9KWShKyIknqKLI2ISoSisoIIW8g2WqQFs307/Q/fd2G4znTnzDf3DoQHfni545zz/8+d+e75zo2L643/MIgoCQwGOSALpAWtyTEgLh7MBDtBM3gK/lDPeAtaQTUoDdwUBGSDPeCFjVg30Q0Og6JYCx8C9oNvHoXbxXmQFwvxFeCdj8Kt8RNUgeRoCE8FR6IkPDzawFg/xWeAlhiJDwU/8NP9EJ8ObsVYfCi6QIGJ+ERwKSDxoXgDcrwaqA5YfCjugBSp+BKy/zIKKvZKxKeARy4Ts8nT4KVQ0GfQCB64/H9eYnPdGtgiENKqz+kLFoOH+v1uLe6Ghi/ID/AJ7AaD9HnLBLWa3IhPJtnVrA07n5u4PDZkkzsBpIe9N01Qi6MwkoFVwoSHIn+m/6w3W1ivPlLCJmHCZkMD+eCXoN5H0N8pWRqp+9Rt8IOVb2JA160U1ORY4JSoRJjoqKl4XZc3Pl8FdaucEm0XGij3w4Cu3Sqo2+KU5JjQQImPBiS1O52SXBEaKPPRgLRV79lakLzrXO+jAenql2WX5J4wSYOPBl4Ja4+0S3JdmOQL2V0JufhiYV2OTLtEFzwk4jFKvIF43nO0CWv+Bgl2yWo9GOBg49kexA/XF0AaHU4JNwmS3AWbSQ2xOL6Dk2A1yAWJNvl5MMCtwxpwglRn6iXOOhkoFCThfcAOUsOtjrBjvBj0uEdJjRjvexRtjW1OBrin/yA0wd3kFPBMv8dXtdSSsx9ZWmu8XueDAedpBQ7WCZPdBkn63IGW15PAGDCD1G0zEYzm4obin9C/Fg0cnOUh6UV9XiYYSmrjwvuKcaQ2LAWgCMwDkw0NVDqKt5i4ZliEha/Vf/m5ChlYRGYG+HtnmBsDCw0NjAflYBSpsXuhNrCE1ArlNWoiireYOGdQiH/UqCA1xeY9RrE2sAJM8JizE2RIDLCILg+FeLrMK88pUgMCnnDwyjMC1Otj0oWCY6Vr8RYTyz0U4q7yOWggdSvysvwaLAXHwWNSD70k6sTiLSZ2eTDhZ1wmk98LcHIfsC8g8TdJD8CMQpuI9SfBDeIAY/FhRspI1mp4CW5PasimGfTLBLcHjVES3w7mREW4jZH54KpPwnnV2kDRuuoRjHAPdBC8F4rm/cMZUkt1UsyF2xjhVnwq2AgOkPo+4LF6u/7LP1Xx6GQrmAtSg9bcG37FX9FNuyC/VXM0AAAAAElFTkSuQmCC" 
                         alt="Github logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/felipe-oliveira-carvalho-9b6b52285/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADB0lEQVRoge2ZT4hNURzHx8j8lxnUFFHGzoIaTBaspJkyo5RMY2NpxyyUIlmMomiascAYCUUJu6EhC2Yi8n9hkhARYZA/hRE/359zr273/c6757x3z73vab71aWrOub/z/b533znnnltSMq7/UERUDqaCBlAPatL2pBXMlYKlYAe4AJ6D35SpUXAV9IBVqYeCgZlgF3gpmDXRF3AMNCVtfDo4AL7naFzSRbAgCfPrwfsYjQf1E3SDChfGq8BxR8bDugPmxmm+DgwnZN4X/+CXxGF+CribsHlfn8DCfMyXgcspmff1BjTkGqAnZfO+7oNKW/MtJC9GQfGs8ZDU/epae23MV4LHEQVvgFle/wlgA0UHzkf8Yc03DbDZoGCjcN05hwFYgybmK8Arg2J1wrX73Pr/q8VRAdYZFuoIXccz1og73/90NCrAoGEhnqM7QSOpH/wlV45D+gyqdeZrwFhCRvJRqy5Ai0WR1+BJiB9e25jQ5v+ueKYaIrWb3QPOkvo2bdStC7DdokibcP0Dr+2R0NZMamqWZq9acMhi7GFdgBMOAywib93QCe1HDMd+qysw5CqAiUjter8ajp+5tSC7Xad1APy/GmwBfWCNps9Jw/HrpYtt5nHbW4i3G+Gptl3ot9Fw/NlSgJsOA8wTagwI/doNx58mBbBZjGwDrBBq3BP6tRqM/QtMkgL0OQzQLNQYyTHA0wzz3sWdRRLgvC5AU5EE2KYLMBF8LIIA+tMKNB4u8ADPQGm2AMsKPMBOrflAkWsFGuAbmGESoM0gwBmwO8Q7r+2D0HZKqDEq9DudZczeSPOBEAMGIZIUh81cfbME4Dcrtg8aLtUR7TozxNq0XXvqtzYfCNGVsvkrlM/7AlLb4P0pmb8NanM2HwqR9DfBO+PJeZsPBVlN5luNXMWnFr2gLFbzgRBzyN0ZKJ90L3diXAiyElyPyfgLUo+Sbj71iCC8d+ontfraiA/BeLHkR8jyxI0LQXgrzmc/m8BBUmest0jdFvyXX1XxW86tpB4vq9L2PK649Ackz1Pov8EuZQAAAABJRU5ErkJggg==" 
                    alt="Linkedin logo"/>
                    </a>
                </div>
           </div>
           <div className='perfildiv'>
                 <img className='perfil' src={Perfil} alt="/" />
           </div>
        </div>            
    );

}
export default Home;