import '../style/components/Chat.css'
import img_people2 from '../assets/amelion.jpg'
import img_people3 from '../assets/eleandro.jpg'
import img_people5 from '../assets/quizunda.jpg'
import img_people15 from "../assets/kennedy.jpg";
import img_people6 from '../assets/Amiraldes.jpg'


import {AiOutlineMail} from 'react-icons/ai'

function Chat() {
    return(
        <>
        <main className="chat-container">
            <h2>Last chats</h2>
            <div className="chat-cont">
                <article className="chat">
                    <div className="box">
                        <div className="mar">
                            <img src={img_people5} alt="" className="img-box"/>
                            <div className="txt-box">
                                <span>Debora Quizunda</span>
                                <div className="statu">
                                    <div className="dd"></div>
                                    <small>12 min ago</small>
                                </div>
                            </div>
                        </div>
                        <AiOutlineMail size={30} color="#111"/>
                    </div>
                    <p>Ola, tudo bem?</p>
                </article>
                <article className="chat">
                    <div className="box">
                        <div className="mar">
                            <img src={img_people15} alt="" className="img-box"/>
                            <div className="txt-box">
                                <span>Anderson Kennedy</span>
                                <div className="statu">
                                    <div className="dd"></div>
                                    <small>20 min ago</small>
                                </div>
                            </div>
                        </div>
                        <AiOutlineMail size={30} color="#111"/>
                    </div>
                    <p>Bro mekie?</p>
                </article>
                <article className="chat">
                    <div className="box">
                        <div className="mar">
                            <img src={img_people3} alt="" className="img-box"/>
                            <div className="txt-box">
                                <span>Eleandro Duzentos</span>
                                <div className="statu">
                                    <div className="dd"></div>
                                    <small>1 hora</small>
                                </div>
                            </div>
                        </div>
                        <AiOutlineMail size={30} color="#111"/>
                    </div>
                    <p>Saudacoes, sou um grande admirador do seu trabalho!</p>
                </article>
                <article className="chat">
                    <div className="box">
                        <div className="mar">
                            <img src={img_people6} alt="" className="img-box"/>
                            <div className="txt-box">
                                <span>Amiraldes Xavier</span>
                                <div className="statu">
                                    <div className="dd"></div>
                                    <small>1 dia </small>
                                </div>
                            </div>
                        </div>
                        <AiOutlineMail size={30} color="#111"/>
                    </div>
                    <p>Professor boa Noite</p>
                </article>
                <article className="chat">
                    <div className="box">
                        <div className="mar">
                            <img src={img_people2} alt="" className="img-box"/>
                            <div className="txt-box">
                                <span>Amelion Jorge</span>
                                <div className="statu">
                                    <div className="dd"></div>
                                    <small>30 min </small>
                                </div>
                            </div>
                        </div>
                        <AiOutlineMail size={30} color="#111"/>
                    </div>
                    <p>Cota boa tarde, como vai?</p>
                </article>
            </div>
        </main>
        </>
    )
}
export default Chat;