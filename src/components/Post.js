import '../style/components/Post.css'
// img people
import img_people1 from '../assets/jc.jpg'
import img_people2 from '../assets/wanda.jpg'
import img_people3 from '../assets/genilson.jpg'
import img_people4 from '../assets/neide.jpg'
import img_people5 from '../assets/quizunda.jpg'
import img_people6 from '../assets/fernado.jpg'
import img_people7 from '../assets/jose.jpg'
import img_people8 from '../assets/fredy.jpg'

//icones 
import {HiOutlinePhotograph} from 'react-icons/hi'
import {FiVideo,FiMusic} from 'react-icons/fi'
import { FaCommentAlt } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import {GoLocation} from 'react-icons/go'
import {AiOutlineFile,AiFillLike,AiOutlineMail} from 'react-icons/ai'
import { IoEllipsisVerticalSharp,IoShareSocialSharp } from 'react-icons/io5';
import { useState } from 'react'

function Post() {
    const [activeImage,setAtiveImage]=useState(0)
    return(
        <>
        <main className="post">
            <aside>
                <h1>New Post</h1>
                <article>
                <div className="post-container">
                    <div className="icones">
                        <HiOutlinePhotograph size={25} color="#adb5bd"/>
                        <FiVideo size={25} color="#adb5bd"/>
                        <FiMusic size={25} color="#adb5bd"/>
                        <GoLocation size={25} color="#adb5bd"/>
                        <AiOutlineFile size={25} color="#adb5bd"/>
                    </div>
                    <div className="textarea">
                        <input type="text" name="name" autoComplete="off" required />
                        <label for="name" className="label-name">
                            <span className="content-name">What are you thinking</span>
                        </label>
                    </div>
                    <div className="button">
                        <input type="button" value="publish"/>
                    </div>
                </div>
                <div className="post-1-container">
                    <div className="post-1">
                            <div className="header-post-1">
                                <div className="mar">
                                <img src={img_people1} alt="" className="img-post-"/>
                                <div className="text">
                                    <span>José Gomes Jc</span>
                                    <small>12 min ago</small>
                                </div>
                                </div>
                                <IoEllipsisVerticalSharp size={25} color="#adb5bd"/>
                            </div>
                            <div className="body-post">
                            <p>As estrelas nunca morrem, posicionam-se no seu lugar! {`<3`}</p>
                            <a href="#modale">
                            <img src={img_people1} alt="" className="img-post"/>
                            </a>
                            </div>
                            <div className="footer-post">
                                <div className="reactions" onMouseOver={()=>{
                                    let r=document.querySelector('.reacti')
                                    r.style.display='flex'
                                }}  onMouseOut={()=>{
                                    let r=document.querySelector('.reacti')
                                    r.style.display='none'
                                }}>
                                < AiFillLike size={25} color="#333"/>
                                <div className="reacti">
                                <AiFillLike size={35} color="#287fc5" aria-disabled="true" />
                                <BsHeartFill size={35} color="#d90429" aria-disabled="true"/>
                                <img src={img_people8} alt="" width="40px" height="40px" aria-disabled="true"/>
                                </div>
                                </div>
                                <FaCommentAlt size={25} color="#333"/>
                                <IoShareSocialSharp size={25} color="#333"/>
                            </div>
                    </div>
                    {/* <div className="post-1">
                            <div className="header-post-1">
                                <img src={img_people1} alt="" className="img-post-"/>
                                <div className="text">
                                    <span>Fernado Dos Snatos</span>
                                    <small>1 min ago</small>
                                </div>
                                <IoEllipsisVerticalSharp size={25} color="#adb5bd"/>
                            </div>
                            <div className="body-post">
                            <p>As eam-se no seu lugarstrelas nunca morrem, posicion</p>
                            <img src={img_people1} alt="" className="img-post"/>
                            </div>
                            <div className="footer-post">
                                <div className="reactions">
                                <AiFillLike size={25} color="#333"/>
                                </div>
                                <FaCommentAlt size={25} color="#333"/>
                                <IoShareSocialSharp size={25} color="#333"/>
                            </div>
                    </div> */}
                </div>
                </article>
            </aside>
            <aside>
                <div className="u-friends">
                    <h1>Your friends</h1>
                    <div className="box-container">
                        <div className="box">
                            <div className="mar">
                            <img src={img_people2} alt="" className="img-box"/>
                            <div className="txt-box">
                                <span>Fernando Wanda</span>
                                <div className="statu">
                                    <div className="dd"></div>
                                    <small>Online</small>
                                </div>
                            </div>
                                </div>
                                <AiOutlineMail size={20} color="#adb5bd"/>
                        </div>
                        <div className="box">
                        <div className="mar">
                            <img src={img_people3} alt="" className="img-box"/>
                            <div className="txt-box">
                                <span>Genilson Bartolomeu</span>
                                <div className="statu">
                                    <div className="dd"></div>
                                    <small>Offline</small>
                                </div>
                                </div>
                                </div>
                                <AiOutlineMail size={20} color="#adb5bd"/>
                            
                        </div>
                        <div className="box">
                        <div className="mar">
                            <img src={img_people5} alt="" className="img-box"/>
                            <div className="txt-box">
                                <span>Debora Quizunda</span>
                                <div className="statu">
                                    <div className="dd"></div>
                                    <small>Online</small>
                                </div>
                                </div>
                                </div>
                                <AiOutlineMail size={20} color="#adb5bd"/>
                            
                        </div>
                        <div className="box">
                        <div className="mar">
                            <img src={img_people4} alt="" className="img-box"/>
                            <div className="txt-box">
                                <span>Neidde Catarina</span>
                                <div className="statu">
                                    <div className="dd"></div>
                                    <small>Online</small>
                                </div>
                                </div>
                                </div>
                                <AiOutlineMail size={20} color="#adb5bd"/>
                            
                        </div>
                    </div>
                </div>
                <div className="u-friends">
                    <h1>SUgesttions friends</h1>
                    <div className="box-container">  
                        <div className="box">
                        <div className="mar">
                            <img src={img_people6} alt="" className="img-box"/>
                            <div className="txt-box">
                                <span>Fernando dos Santos</span>
                                <div className="statu">
                                    <div className="dd"></div>
                                    <small>Online</small>
                                </div>
                                </div>
                                </div>
                                <AiOutlineMail size={20} color="#adb5bd"/>
                            
                        </div>
                        
                        <div className="box">
                        <div className="mar">
                            <img src={img_people7} alt="" className="img-box"/>
                            <div className="txt-box">
                                <span>Jose Tandavala</span>
                                <div className="statu">
                                    <div className="dd"></div>
                                    <small>offline</small>
                                </div>
                                </div>
                                </div>
                                <AiOutlineMail size={20} color="#adb5bd"/>
                           
                        </div>

                    </div>
                </div>
            </aside>
        </main>

        {/* modal */}
            
        <div className="modal" id="modale"  >
    <div className="modal_">
        <div className="jj">

        </div>
        
        <a href="/" className="modal__close">&times;</a>
     <div className="sss">
         
        
         <div className="img">
             
             <div className="pict">
            <img src={img_people1} alt="" className="pic"/>
            </div>  
         </div>
         
        
     </div>
    </div>
</div>
        </>
    )
}
export default Post;