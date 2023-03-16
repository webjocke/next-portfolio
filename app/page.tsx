"use client"

import { useCallback } from "react"
import Link from 'next/link'
import Particles from "react-particles"
import type { Container, Engine } from "tsparticles-engine"
import { loadFull } from "tsparticles"
import { Bubbles } from "../components/bubbles"

var json = {
  'children': [
      {name: 'Javascript', value: 6, color: "#F7E01D", image: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"},
      {name: 'Node.js', value: 6, color: "#3D833E", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png"},
      {name: 'REST API', value: 6, color: "#009B60", image: "https://icon-library.com/images/rest-api-icon/rest-api-icon-8.jpg"},
      {name: 'Python', value: 6, color: "#376D9B", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/640px-Python_logo_01.svg.png"},
      {name: 'Next.js', value: 2, color: "#FFFFFF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Next.js_Logotype_Light_Background.svg/1280px-Next.js_Logotype_Light_Background.svg.png"},
      {name: 'React.js', value: 2, color: "#4f4f4f", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"},
      {name: 'HTML/CSS', value: 6, color: "#F7F7F7", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1200px-CSS3_and_HTML5_logos_and_wordmarks.svg.png"},
      {name: 'Tailwind', value: 2, color: "#258e9e", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"},
      {name: 'MySQL', value: 2, color: "#255172", image: "https://aety.io/wp-content/uploads/2016/11/mysql-logo.png"},
      {name: 'C#', value: 5, color: "#280164", image: "https://camo.githubusercontent.com/8d56e87edf99e89bfc457cd62462e0b7aae19e6b197b1df5c542d474d8d76f81/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67"},
      {name: 'C++', value: 4, color: "#004283", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"},
      {name: 'NoSQL', value: 6, color: "#0066b5", image: "https://user-images.githubusercontent.com/45159366/169607509-ba5e092f-c566-4014-86a1-258bf75266d0.png"},
      {name: 'GCP', value: 2, color: "#F7F7F7", image: "https://www.gend.co/hs-fs/hubfs/gcp-logo-cloud.png?width=730&name=gcp-logo-cloud.png"},
      {name: 'PHP', value: 3, color: "#5b609b", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"},
      {name: 'Git', value: 4, color: "#F7F7F7", image: "https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"},
      {name: 'Express.js', value: 3, color: "#cece1c", image: "https://cdn.buttercms.com/4XpulFfySpWyYTXuaVL2"},
      {name: 'Typescript', value: 2, color: "#5a92bc", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"},
      {name: 'FFMPEG', value: 2, color: "#2a6b2c", image: "https://img.icons8.com/color/512/ffmpeg.png"},
      {name: 'SEO', value: 3, color: "#F7F7F7", image: "https://www.joykal.com/wp-content/uploads/2019/09/SEO-strategy.png"},
  ]
}

export default function Home() {

  const particlesInit = useCallback(async (engine: Engine) => {
      console.log(engine)
      await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container)
  }, [])

  return (
    <div className="bg-black min-h-screen w-screen overflow-x-hidden">
        <Particles id="tsparticles" className="absolute" init={particlesInit} loaded={particlesLoaded} options={{
            background: {
                color: {
                    value: "blue",
                },
            },
            fpsLimit: 120,
            particles:{
                number:{
                    value:80,
                    density:{
                        enable:true,
                        value_area:800
                    }
                },
                color:{
                    value:"#ffffff"
                },
                shape:{
                    type:"edge",
                    stroke:{
                        width:0,
                        color:"#000000"
                    },
                    polygon:{
                        nb_sides:5
                    },
                    image:{
                        src:"img/github.svg",
                        width:100,
                        height:100,
                    }
                },
                opacity:{
                    value:0.5,
                    random:false,
                    anim:{
                        enable:false,
                        speed:1,
                        opacity_min:0.1,
                        sync:false
                    }
                },
                size:{
                    value:1,
                    random:false,
                    anim:{
                        enable:false,
                        speed:20,
                        size_min:0.1,
                        sync:false
                    }
                },
                line_linked:{
                    enable:false,
                    distance:150,
                    color:"#ffffff",
                    opacity:0.4,
                    width:0
                },
                move:{
                    enable:true,
                    speed:0.5,
                    direction:"top-right",
                    random:false,
                    straight:false,
                    out_mode:"out",
                    bounce:false,
                    attract:{
                        enable:false,
                        rotateX:552.4033491425909,
                        rotateY:710.2328774690454
                    }
                }
            },
            interactivity:{
                detect_on:"canvas",
                events:{
                    onhover:{
                        enable:false,
                        mode:"repulse"
                    },
                    onclick:{
                        enable:false,
                        mode:"push"
                    },
                    resize:true
                },
                modes:{
                    grab:{
                        distance:400,
                        line_linked:{
                            opacity:1
                        }
                    },
                    bubble:{
                        distance:400,
                        size:40,
                        duration:2,
                        opacity:8,
                        speed:3
                    },
                    repulse:{
                        distance:200,
                        duration:0.4
                    },
                    push:{particles_nb:4},
                    remove:{particles_nb:2}
                }
            },
            retina_detect:true,
        }} />
        <div className="text-white font-sans relative">
            <div className="grid grid-cols-[60px_1fr] gap-4 max-w-xl lg:max-w-5xl box-border py-4 lg:mt-8 mb-8 mx-auto outline-blue-500 outline-5 outline-solid px-4 xl:px-0">
                {/* Header */}
                <img src="/headshot.png" alt="logo" className="rounded-full" />
                <div className="grid grid-flow-row justify-self-start gap-0">
                    <h3 className="self-end text-lg">Joakim Johansson</h3>
                    <div className="grid grid-flow-col gap-2 self-start">
                        <span className="relative flex h-3 w-3 self-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <p className="text-sm">Available for hire</p>
                        <a href="mailto:me@joakimjohansson.se?subject=Contact through joakimjohansson.se" className="text-sm text-blue-500 underline">Contact me</a>
                    </div>
                </div>
            </div>
            <div className="max-w-xl lg:max-w-5xl box-border py-24 lg:py-48 mx-auto px-4 xl:px-0">
                {/* First view */}
                <h3 className="text-5xl lg:max-w-3xl lg:text-7xl font-mark">Full-Stack Developer and Founder of <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">sizable.se</span></h3>
            </div>
            <div className="max-w-xl lg:max-w-5xl box-border py-24 mx-auto px-4 xl:px-0 grid grid-cols-[1fr] lg:grid-cols-[1fr_2fr] gap-8">
                {/* Skill levels */}
                <div>
                    <h3 className="text-4xl font-mark text-center lg:text-left mb-12">Experience</h3>
                    <p className="font-mark mb-6 text-lg">Striving to be very broad in the tech world by touching everything from frontend, backend, serverless, DNS, APIs, architecture system design, smart contracts, video/image processing, embedded electronics and IOT.</p>
                    <p className="my-4">If the technoligy you need help with doesn't exist in this chart, don't worry, I'm always eager to learn new technoligies to enhance my skillset.</p>
                    <p className="my-4">I haven't included all the technoligies I have used in this chart of couse. Reach out with your required skillset and we will see which skills are overlapping.</p>
                </div>
                <Bubbles data={json} />
            </div>
            <div className="max-w-xl lg:max-w-4xl box-border py-24 mx-auto px-4 xl:px-0">
                {/* Projects */}
                <h2 className="text-4xl font-mark text-center">Projects</h2>
                <div>
                    <div id="project-e-commerce-system" className="mt-16 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8">
                        <div>
                            <img src="/e-commerce-system.png" alt="logo" className="max-w-128 mx-auto mb-2" />
                            <p className="italic mb-4 text-sm">Currently running smoothly in production with <a href="/#project-sizable" className="underline">the Sizable electronics store</a>.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-mark mb-2">E-Commerce System</h3>
                            <ul className="px-4 py-2">
                                <li className="mb-1">🌍 Runs serverless on the edge with automatic scaling to any workload</li>
                                <li className="mb-1">🚀 Uses all modern technoligies and is built mostly from scratch</li>
                                <li className="mb-1">📄 WYSIWYG editor right on the customer facing pages for easy and fast content management for admin</li>
                            </ul>
                            <p className="mt-4 text-xl font-mark">Technologies used:</p>
                            <ul className="py-2">
                                <li className="mx-0 my-3">
                                    <span className="text-teal-500 font-black">Frontend</span>: HTML/CSS/Javascript, <Link href="https://getmdl.io/" className="hover:underline">Material Design</Link>, <Link href="https://github.com/snabbdom/snabbdom" className="hover:underline">snabbdom</Link>, <Link href="https://www.chartjs.org/docs/latest/" className="hover:underline">Chart.js</Link>, <Link href="https://www.npmjs.com/package/exceljs" className="hover:underline">Excel.js</Link>, <Link href="https://easepick.com/" className="hover:underline">Easepick</Link>, <Link href="https://printjs.crabbly.com/" className="hover:underline">Print.js</Link>, <Link href="https://fonts.google.com/" className="hover:underline">Google Fonts</Link>
                                </li>
                                <li className="mx-0 my-3">
                                    <span className="text-blue-500 font-black">Backend Compute</span>: <Link href="https://workers.cloudflare.com/" className="hover:underline">Cloudflare Workers</Link>
                                </li>
                                <li className="mx-0 my-3">
                                    <span className="text-red-500 font-black">Data storage</span>: <Link href="https://www.cloudflare.com/products/durable-objects/" className="hover:underline">Cloudflare Durable Objects</Link>, <Link href="https://www.cloudflare.com/products/workers-kv/" className="hover:underline">Cloudflare KV</Link>
                                </li>
                                <li className="mx-0 my-3">
                                    <span className="text-green-500 font-black">Hosting</span>: <Link href="https://pages.cloudflare.com/" className="hover:underline">Cloudflare Pages</Link>, <Link href="https://www.cloudflare.com/cdn/" className="hover:underline">Cloudflare CDN</Link>
                                </li>
                                <li className="mx-0 my-3">
                                    <span className="text-pink-500 font-black">Other</span>: <Link href="https://algolia.com" className="hover:underline">Algolia</Link> (search), <Link href="https://klarna.com" className="hover:underline">Klarna</Link> (payment), <Link href="https://algolia.com" className="hover:underline">Shipmondo</Link> (shipping), <Link href="https://sendinblue.com" className="hover:underline">Sendinblue</Link> (email), <Link href="https://www.cloudflare.com/products/cloudflare-images/" className="hover:underline">Cloudflare Images</Link>, <Link href="https://www.linkpreview.net/" className="hover:underline">LinkPreview</Link>, <Link href="https://github.com" className="hover:underline">Github</Link>, <Link href="https://figma.com" className="hover:underline">Figma</Link>, <Link href="https://postman.com" className="hover:underline">Postman</Link>, <Link href="https://monday.com" className="hover:underline">Monday.com</Link>, <Link href="https://workspace.google.com/" className="hover:underline">G Suite</Link>
                                </li>
                            </ul>
                            <p className="pt-4">To see the system in action, check out <Link href="https://sizable.se" className="hover:underline">sizable.se</Link>. Feel free to reach out if you want to see the source code for anything, I'd be happy to show you.</p>
                            {/* <Link href="/e-commerce-system" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">Show more about the project</Link> */}
                        </div>
                    </div>
                    <div id="project-sizable" className="mt-32 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8">
                        <div>
                            <Link href="https://sizable.se"><img src="/sizable.png" alt="logo" className="max-w-128 mx-auto mb-2" /></Link>
                            <p className="italic mb-4 text-sm">Uses the custom <a href="/#project-e-commerce-system" className="underline">sizable e-commerce system</a>.</p>
                        </div>
                        <div>
                            <Link href="https://sizable.se"><h3 className="text-2xl font-mark mb-2">Sizable Electronics Webstore</h3></Link>
                            <p>Enables fast and convenient access to electronics for hobbyist and professionals in Sweden. 1-2 days shipping with same day dispatch.</p>
                            <div className="my-4 border border-gray-700 border-solid px-4 py-2 grid grid-cols-3">
                                <div>
                                    <p className="text-green-500 text-xs text-center"><span className="font-mark text-2xl">4.6</span>/5</p>
                                    <p className="text-xs text-center">average rating</p>
                                </div>
                                <div>
                                    <p className="text-xs text-center"><span className="font-mark text-2xl">2,000+</span></p>
                                    <p className="text-xs text-center">orders shipped out</p>
                                </div>
                                <div>
                                    <p className="text-xs text-center"><span className="font-mark text-2xl">500+</span></p>
                                    <p className="text-xs text-center">unique products</p>
                                </div>
                            </div>
                            <div className="">
                                <div className="max-w-sm my-8">
                                    <a href="https://se.trustpilot.com/reviews/63e4d294745e4800219f80fb" className="font-bold">“Väldigt bra! - Andra gången jag handlar. Trevlig hemsida. Bra sortiment. Suveräna priser!”</a>
                                    <div className="grid grid-flow-col gap-2 place-content-start mt-2">
                                        <img src="/stars-5.svg" alt="logo" className="w-32" />
                                        <p>5/5 by Filip</p>
                                    </div>
                                </div>
                                <div className="max-w-sm my-8">
                                    <a href="https://se.trustpilot.com/reviews/63fdfd3f9b64b1bdaf64e47b" className="font-bold">“Suverän service! - Suverän service innan köpet. Snabb leverans av mina varor.”</a>
                                    <div className="grid grid-flow-col gap-2 place-content-start mt-2">
                                        <img src="/stars-5.svg" alt="logo" className="w-32" />
                                        <p>5/5 by Peter</p>
                                    </div>
                                </div>
                                <div className="max-w-sm my-8">
                                    <a href="https://se.trustpilot.com/reviews/62be26da853b02c06c93cae8" className="font-bold">“Snabb leverans och bra kundsupport! - När något krånglat har det löst sig snabbt och smidigt. Rekommenderar!”</a>
                                    <div className="grid grid-flow-col gap-2 place-content-start mt-2">
                                        <img src="/stars-5.svg" alt="logo" className="w-32" />
                                        <p>5/5 by Viktor</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="https://sizable.se" type="button" className="text-white mt-0 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                Link to the store
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="-z-1 absolute top-0 h-full left-0 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)_inset] w-[200vw] -rotate-1 -translate-x-1/4">
                </div>
                <div className="z-10 relative max-w-xl box-border py-20 mx-auto px-3 xl:px-0">
                    <h2 className="text-4xl font-mark mb-6 text-black">My story and business adventure</h2>
                    <p className="my-3 text-gray-600 subpixel-antialiased">After a tech heavy school program and 2 years in university I decided to purshue my  busniess idea and start building my own e-commerce system. At this point I had already been selling products on the site <a href="https://tradera.com">tradera.com</a> for multiple years and already knew my customer base good enough to take the next step.</p>
                    <p className="my-3 text-gray-600">With the needed software developing skills under my belt I started building an e-commerce system from scratch. It took some time and went though a few itirations. At the start the whole thing was build with node.js and native javascript for the frontend, everything hosted on GCP appengine and datastore.</p>
                    <p className="my-3 text-gray-600">After a lot of considurations and some big improvments from another cloud provider I decided to switch the whole operation over to Cloudflare. Their cutting edge (almost) infinitable scalable edge compute platform called Workers with their Durable Objects and KV services made it possible for me to switch over my whole stack to them and I have never looked back afterwards.</p>
                    <p className="my-3 text-gray-600">During the whole development I have been running the store alongside developing and using it almost like a test case to constantly see whats needed and what should be priorited. Being your own customer is the best way to know what's needed or missing your know.</p>
                    <p className="my-3 text-gray-600">Today the store system is fairly mature and have most of the features a store owner requires to run a store. It's currently running very smoothly and I ship out order every day with little to no time needed to spend on it, 80-90% passivily.</p>
                    <p className="my-3 text-gray-600">I think the future has potential for the e-commerce system and the store but it's important to take a step back and look at the whole picture once a while.</p>
                </div>
            </div>
            <div className="max-w-xl lg:max-w-4xl box-border pt-20 mx-auto px-4 xl:px-0">
                <h3 className="text-4xl font-mark mb-6">Mini Projects</h3>
                <p className="mb-6">When I am not working on the e-commerce projects I will occasionally create small projects like these.</p>
                <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-4">
                    
                    <div className="max-w-xl box-border bg-white p-4 rounded-md">
                        <a href="https://github.com/webjocke/multiClick" className="text-xl text-blue-500 font-bold">multiClick</a>
                        <p className="my-3 text-gray-800">A simple Arduino library that can detect single, double and long button clicks</p>
                        <div className="grid grid-flow-col gap-2 justify-start">
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500 self-center"></span>
                            <p className="text-gray-800">C++</p>
                        </div>
                    </div>
                    <div className="max-w-xl box-border bg-white p-4 rounded-md">
                        <a href="https://github.com/webjocke/OverlayImageJoiner" className="text-xl text-blue-500 font-bold">Overlay Image Joiner</a>
                        <p className="my-3 text-gray-800">A simple Arduino library that can detect single, double and long buttonclicks</p>
                        <div className="grid grid-flow-col gap-2 justify-start">
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3572A5] self-center"></span>
                            <p className="text-gray-800">Python</p>
                        </div>
                    </div>
                    <div className="max-w-xl box-border bg-white p-4 rounded-md">
                        <a href="https://github.com/webjocke/google-photos-home-assistant-lovelace" className="text-xl text-blue-500 font-bold">Google Photos Home Assistant Lovelace carousel</a>
                        <p className="my-3 text-gray-800">A lovelace slideshow card showing images from a google photos album</p>
                        <div className="grid grid-flow-col gap-2 justify-start">
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 self-center"></span>
                            <p className="text-gray-800">Home Assistant</p>
                        </div>
                    </div>
                    <div className="max-w-xl box-border bg-white p-4 rounded-md">
                        <a href="https://github.com/webjocke/Python-CAN-bus-to-Keypresses" className="text-xl text-blue-500 font-bold">Python CAN bus to Keypresses</a>
                        <p className="my-3 text-gray-800">A python script that listens for Can bus data on a serial port and then triggers keypresses on the computer</p>
                        <div className="grid grid-flow-col gap-2 justify-start">
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500 self-center"></span>
                            <p className="text-gray-800">C++</p>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/webjocke" type="button" className="text-white mt-4 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                    <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    See more on my Github
                </a>
            </div>
            <div className="max-w-xl box-border py-4 pt-24 mx-auto grid grid-flow-row gap-2 px-2 xl:px-0">
                <span className="relative flex h-3 w-3 justify-self-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="justify-self-center text-2xl font-mark">Available for hire</p>
                <a href="mailto:me@joakimjohansson.se?subject=Contact through joakimjohansson.se" className="text-blue-500 underline justify-self-center text-lg font-mark">Contact me</a>
            </div>
            <div className="max-w-xl box-border pt-16 pb-8 mx-auto px-4 xl:px-0">
                <p className="text-center mb-8">Thank you for checking out my portfolio, don’t hesitate reaching out if you have any questions or are interested in hiring me.</p>
                <div className="grid grid-flow-col place-content-center gap-6 mb-8">
                    <a href="https://github.com/webjocke"><img src="/github.png" alt="logo" className="w-10 mx-auto" /></a>
                    <a href="https://www.linkedin.com/in/joakim-johansson-49754075"><img src="/linkedin.png" alt="logo" className="w-10 mx-auto" /></a>
                </div>
                <p className="text-center">©2023 joakimjohansson.se</p>
            </div>
        </div>
    </div>
  )
}
