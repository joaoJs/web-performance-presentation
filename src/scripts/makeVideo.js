const makeVideo = url => `<video autoplay loop muted playsinline>
                            <source src=${url} type="video/webm">
                         </video>`

export default makeVideo