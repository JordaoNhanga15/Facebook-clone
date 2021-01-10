import '../style/components/Modal.css'
import img_people1 from '../assets/jc.jpg'
function Modal() {
    return(
        <>
        <div className="modal" id="modale"  >
    <div className="modal_">
        <div className="jj">

        </div>
        
        <a href="/" className="modal__close">&times; oolalla</a>
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

export default Modal;