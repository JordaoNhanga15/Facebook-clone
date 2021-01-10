import '../style/components/footer.css'
import { BsSearch } from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io';
function Footer(){
    return(
        <>
        <footer>
            <div className="foo">
                <div className="ico">
                <AiOutlineMail size={30} color="#adb5bd"/>
                </div>
                <div className="las">
                    <div className="las-s">20</div>
                </div>
            </div>
            <div className="foo">
                <div className="ico">
                <BsSearch size={30} color="#adb5bd"/>
                </div>
            </div>
            <div className="foo">
                <div className="ico">
                <IoMdNotificationsOutline size={30} color="#adb5bd"/>
                </div>
                <div className="las">
                    <div className="las-s">20</div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;