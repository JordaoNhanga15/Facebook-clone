import {IoSettingsOutline} from 'react-icons/io5'
import {AiOutlineHome} from 'react-icons/ai'
import {RiYoutubeLine} from 'react-icons/ri'
import {BsGrid,BsLightning} from 'react-icons/bs'
import {FiUsers,FiSmile} from 'react-icons/fi'
import pict from '../assets/jordao.jpg'
import facebook_logo from '../assets/facebook_logo.jpg'
import '../style/components/headers.css'
import { useEffect } from 'react'
function Headers() {
            useEffect(()=>{
              const u=HandleAncora();
              u.Init()
            },[])

            function HandleAncora(){
              const html={
                ancora:document.querySelectorAll('.a')
              }
              function addClass(e){
                e.target.classList.add('active')
                //console.log(e)
              }
              function click(){
                html.ancora.forEach(ele=>{
                  
                  ele.addEventListener('click',(e)=>{
                    deleteAllClasses()
                    addClass(e)
                  })
                })
              }
              function deleteAllClasses(){
                html.ancora.forEach(ele=>{
                  //ele.classList.remove('active')
                  ele.classList.replace('active','l')
                  // console.log(ele)
                })
              }
              function Init(){
                click()
              } 
              return{Init};
            }
    return (
      <>
        <header>
            <div className="left">
                    <img src={facebook_logo} alt="" width="100px" height="100px"/>
            </div>
            <nav className="center">
                <ul>
                    <li className=""> <div className="active a"  aria-disabled="true"> <AiOutlineHome size={30} color="#adb5bd" aria-disabled="true"/> </div></li>
                    <li> <div className="a"  aria-disabled="true"> <RiYoutubeLine size={30} color="#adb5bd" aria-disabled="true"/> </div>  </li>
                    <li> <div className="a"  aria-disabled="true"> <BsGrid size={30} color="#adb5bd" aria-disabled="true"/> </div> </li>
                    <li className="mi_pic"  aria-disabled="true"> <img src={pict} alt="" width="150px" height="150px"/> </li>
                    <li> <div className="a"  aria-disabled="true"> <FiUsers size={30} color="#adb5bd" aria-disabled="true"/> </div></li>
                    <li> <div className="a"  aria-disabled="true"><BsLightning size={30} color="#adb5bd" aria-disabled="true"/> </div></li>
                    <li><div className="a"  aria-disabled="true"> <FiSmile size={30} color="#adb5bd" aria-disabled="true"/>  </div></li>
                </ul>
            </nav>
            <div className="right">
                <IoSettingsOutline size={30} color="#555"/>
            </div>
        </header>
      </>
    );
  }
  
  export default Headers;
  