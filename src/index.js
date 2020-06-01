//libs
import _ from 'lodash'
//const getLodash = () => import('lodash')
import '../node_modules/bootstrap-4-grid/css/grid.css'

//styles
import './styles/main.css'

//nav
import './styles/nav.css'
import './nav'

//hero
import './styles/hero.css'
import hero from './hero'
// import cellGif from './img/comece-agora.gif'
import cellWebm from './img/comece-agora.webm'

//generic section
import './styles/section.css'
import './section'

//carousel
import './styles/carousel.css'
import carousel from './carousel'
// import raquelPicPng from './img/bg-video-fundo-imobiliario.png'
import raquelPicWebp from './img/webp/bg-video-fundo-imobiliario.webp'

//simulator
import './styles/simulator.css'
import simulator from './simulator'

//video section
import './styles/video.css'
import videoSection from './video'
// import andyPng from './img/foto-anderson.png'
import andyWebp from './img/webp/foto-anderson.webp'

//random section
import './styles/timeInvest.css'
import './timeInvest'

//random section
import './styles/popProds.css'
import './popProds'

//footer
import './styles/footer.css'
import footer from './footer'
// import seloPng from './img/selo-footer-anbima.png'
import seloWebp from './img/webp/selo-footer-anbima.webp'

//scripts
// import makeImage from './scripts/makeImage'
import makeVideo from './scripts/makeVideo'
import makeWebp from './scripts/makeWebp'
import makeRows from './scripts/makeRows'
import makeButton from './scripts/makeButton'

//hero gif
// const heroGif = makeImage(cellGif, 'cellphone')
// hero.innerHTML = heroGif
//hero webm
const heroWebm = makeVideo(cellWebm)
hero.innerHTML = heroWebm

// carousel png
// const raquelPng = makeImage(raquelPicPng,'raquel')
// carousel.innerHTML = raquelPng
//hero webp
const raquelWebp = makeWebp(raquelPicWebp)
carousel.innerHTML = raquelWebp

//video png
// const andyPngImg = makeImage(andyPng, 'anderson')
// videoSection.innerHTML = andyPngImg
//hero webp
const andyWebpImg = makeWebp(andyWebp)
videoSection.innerHTML = andyWebpImg

//footer png
// const anbimaPng = makeImage(seloPng, 'anbima')
// footer.innerHTML = anbimaPng
//hero webp
const anbimaWebp = makeWebp(seloWebp)
footer.innerHTML = anbimaWebp

const button = makeButton('click me')
simulator.appendChild(button)

const numbers = [1,2,3,4,5]

button.addEventListener('click', e => {
    const rows = makeRows()
    const newDiv = document.createElement('div')
    simulator.appendChild(newDiv)
    newDiv.innerHTML = rows
    const shuffled = _.shuffle(numbers)
    shuffled.forEach(n => {
        newDiv.appendChild(makeButton(n))
    })
})

// button.addEventListener('click', e => {
//     const rows = makeRows()
//     const newDiv = document.createElement('div')
//     simulator.appendChild(newDiv)
//     newDiv.innerHTML = rows
//     getLodash().then(_ => {
//         // console.log(_)
//         const shuffled = _.shuffle(numbers)
//         shuffled.forEach(n => {
//             newDiv.appendChild(makeButton(n))
//         })
//     })
// })
