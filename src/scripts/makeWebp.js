const makeWebp = (url,fallback,alt) => `<picture>
                                            <source srcset=${url} type="image/webp">
                                            <source srcset=${fallback} type="image/png"> 
                                            <img src=${fallback} alt=${alt} loading="lazy" style="max-width:500px">
                                        </picture>`
                                
export default makeWebp