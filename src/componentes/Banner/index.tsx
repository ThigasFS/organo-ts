import './Banner.css'
import React from 'react'

interface BannerProps {
    enderecoImagem: string
    textoAlt?: string
}

export const Banner = ({ enderecoImagem, textoAlt }: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={enderecoImagem} alt={textoAlt}/>
        </header>
    )
}

export default Banner