
import './SectionOne.css'

const SectionOne = () => {
  return (
    <div>
       <section>
            <div className="title_name">
                <input 
                type="text" 
                name="nome_do_personagem"
                minlength="3"
                maxlength="15"/>
               <p>NOME DO PERSONAGEM</p>
            </div>
            <div className="container_player">

              <div className="player_information">
                <input 
                type="text" 
                name="class_and_level"
                minlength="3"
                maxlength="15"
                id="class_and_level"/>
                <p><b>CLASSE & NÍVEL</b></p>
              </div>

              <div className="player_information">
                <input 
                type="text" 
                name="class_and_level"
                minlength="3"
                maxlength="15"/>
                <p><b>ANTECEDENTE</b></p>
              </div>

              <div className="player_information">
                <input 
                type="text" 
                name="class_and_level"
                minlength="3"
                maxlength="15"/>
                <p><b>NOME DO JOGADOR</b></p>
              </div>
              
              <div className="player_information">
                <input 
                type="text" 
                name="class_and_level"
                minlength="3"
                maxlength="15"/>
                <p><b>RAÇA</b></p>
              </div>
              
              <div className="player_information">
                <input 
                type="text" 
                name="class_and_level"
                minlength="3"
                maxlength="15"/>
                <p><b>ALINHAMENTO</b></p>
              </div>
              
              <div className="player_information">
                <input 
                type="text" 
                name="class_and_level"
                minlength="3"
                maxlength="15"/>
                <p><b>PONTOS DE EXPERIÊNCIA</b></p>
              </div>

            </div>
       </section>
    </div>
  )
}

export default SectionOne