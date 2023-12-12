import './SectionThree.css'

const SectionThree = () => {
  return (
    <div className='MegaContainer'>

        <div className='yellow'>
            <div>
                <div className="armor_class">
                    <p><b>CLASSE DE ARMADURA</b></p>
                    <input 
                    type="text" 
                    name="armor_class"
                    maxlength="2"/>
                </div>
                <div className="initiative_and_displacement">
                    <div>
                        <p><b>INICIATIVA</b></p>
                        <input 
                        type="text" 
                        name="initiative"
                        maxlength="2"/>
                    </div>
                    <div>
                    <p><b>DESLOCAMENTO</b></p>
                        <input 
                        type="text" 
                        name="initiative"
                        maxlength="2"/>
                    </div>
                </div>
            </div>
            <div className="health_points">
                <div className="max_health">
                    <p><b>PONTOS DE VIDA MÁXIMOS</b></p>
                    <input type="text"
                    maxlength="4" />
                </div>
                <div className="health_points2">
                    <input type="text"
                    maxlength="4"/>
                    <p><b>PONTOS DE VIDA ATUAIS</b></p>
                </div>
            </div>
            <div className="temporary_hit_points">
                <input type="text"
                maxlength="4" />
                <p><b>PONTOS DE VIDA TEMPORÁRIOS</b></p>
            </div>
            <div className="life_points">
                <div className="health_data">
                    <div className="total">
                        <p><b>TOTAL</b></p>
                        <input type="text"
                        maxlength="5"/>
                    </div>
                    <input type="text"
                    maxlength="5"/>
                    <p><b>DADO DE VIDA</b></p>
                </div>
                <div className="successes_and_failures">
                    <div className="successes">
                        <p><b>SUCESSOS</b></p>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </div>
                    <div className="failures">
                        <p><b>FALHAS</b></p>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </div>
                    <p><b>SALVAGUARDA CONTRA MORTE</b></p>
                </div>
            </div>
        </div>

        <div className='blue'>
            <div className="big_purple_container">
                <textarea 
                id="" 
                cols="30" 
                rows="10">
                </textarea>
                <p><b>TRAÇOS DE PERSONALIDADE</b></p>
            </div>
            <div>
                <div className="purple_container">
                    <textarea 
                    id="" 
                    cols="30" 
                    rows="10">
                    </textarea>
                    <p><b>IDEAIS</b></p>
                </div>
                <div className="purple_container">
                    <textarea 
                    id="" 
                    cols="30" 
                    rows="10">
                    </textarea>
                    <p><b>VÍNCULOS</b></p>
                </div>
                <div className="purple_container">
                    <textarea 
                    id="" 
                    cols="30" 
                    rows="10">
                    </textarea>
                    <p><b>FRAQUEZAS</b></p>
                </div>
            </div>
        </div>

        <div className='red'>
            <div className="title_container">
                <p><b>NOME</b></p>
                <p><b>BÔNUS ATAQUE</b></p>
                <p><b>DANO/TIPO</b></p>
            </div>
            <div className="input_container">
                <input type="text" className="bigger" maxlength="10"/>
                <input type="text" className="smaller" maxlength="10"/>
                <input type="text" className="bigger" maxlength="10"/>
            </div>
            <div className="input_container">
                <input type="text" className="bigger" maxlength="10"/>
                <input type="text" className="smaller" maxlength="10"/>
                <input type="text" className="bigger" maxlength="10"/>
            </div>
            <div className="input_container">
                <input type="text" className="bigger" maxlength="10"/>
                <input type="text" className="smaller" maxlength="10"/>
                <input type="text" className="bigger" maxlength="10"/>
            </div>
            <textarea cols="30" rows="10"></textarea>
            <p><b>ATAQUES & CONJURAÇÃO</b></p>
        </div>

        <div className='green'>
            <textarea cols="30" rows="10"></textarea>
            <p><b>CARACTERÍSTICAS & TALENTOS</b></p>
        </div>

    </div>
  )
}

export default SectionThree