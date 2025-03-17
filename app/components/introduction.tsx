"use client"

import { TypeAnimation } from 'react-type-animation';


const Introduction = () => {
    return (
        <div className="z-20 grid justify-items-center w-full bg-darkBg/60  sm:min-h-lvh">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <div className="z-3 grid items-center justify-items-center md:pr-10 w-full">
                    <img src="/assets/img/facha.png" className="z-3 h-4/5 w-fit drop-shadow-[0_-15px_45px_rgba(110,17,176,0.25)] rounded-4xl" alt="foto" />
                </div>
                
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10"> Bruno Condenanza <br/>
                        <TypeAnimation
                            sequence={[
                                'Software Developer',
                                1500,
                                'Frontend & Backend',
                                1500,
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                            className="font-bold text-purple-800"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8 text-center md:text-left">
                        Como desarrollador frontend y creador de contenido, me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-white/5 hover:shadow-2xl hover:text-[#CA7DF9]">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary text-purple-800 hover:text-[#CA7DF9]" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;