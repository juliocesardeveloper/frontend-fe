import React from 'react'
import ContentDetail from "./ContentDetail";

function ResultContent(){
    return(
        <div className='main__result'>
            <div className='main__result-left'>
                <ContentDetail/>
                <ContentDetail/>
                <ContentDetail/>
            </div>
            <div className='main__result-right'>
                <h2>Titulo III</h2>
                <h2>Capitulo 1</h2>
                <h3>DE LOS PRINCIPIOS FUNDAMENTALES</h3>
                <p>
                Artículo 96. Colombia es un Estado social de derecho, organizado en forma de República unitaria, descentralizada, con autonomía de sus entidades territoriales, democrática, participativa y pluralista, fundada en el respeto de la dignidad humana, en el trabajo y la solidaridad de las personas que la integran y en la prevalencia del interés general.
                </p>
            </div>
        </div>
    )
}

export default ResultContent