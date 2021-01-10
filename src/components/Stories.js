import '../style/components/Stories.css'
import img_stories1 from "../assets/img-stories1.jpg";
import img_stories2 from "../assets/img-stories2.jpg";
import img_stories3 from "../assets/img-stories3.jpg";
import img_stories4 from "../assets/img-stories4.jpg";
import img_stories5 from "../assets/img-stories5.jpg";
import img_stories6 from "../assets/img-stories6.jpg";
import img_stories7 from "../assets/img-stories7.jpg";
import img_stories8 from "../assets/img-stories8.jpg";
// img people
import img_people1 from "../assets/pg.jpg";
import img_people2 from "../assets/fz.jpg";
import img_people3 from "../assets/rogerio.jpg";
import img_people4 from "../assets/naty.jpg";
import img_people5 from "../assets/kennedy.jpg";
import img_people6 from "../assets/docinho.jpg";
import img_people7 from "../assets/licinio.jpg";

function Stories() {
    return(
        <>
        <div className="sto">
        <h1>Stories</h1>
        <main className="Stories-container">
            <article className="stories">
                <img src={img_stories1} alt="" className="img-stories"/>
                <div className="stories-info">
                    {/* <img className="img-stories-info" src="" alt=""/> */}
                    <span></span>
                </div>
            </article>
            <article className="stories">
                <img src={img_stories2} alt="" className="img-stories"/>
                <div className="stories-info">
                    <img className="img-stories-info" src={img_people1} alt=""/>
                    <span>Alberto De Oliveira</span>
                </div>
            </article>
            <article className="stories">
                <img src={img_stories3} alt="" className="img-stories"/>
                <div className="stories-info">
                    <img className="img-stories-info" src={img_people2} alt=""/>
                    <span>Francisco De Oliveira</span>
                </div>
            </article>
            <article className="stories">
                <img src={img_stories4} alt="" className="img-stories"/>
                <div className="stories-info">
                    <img className="img-stories-info" src={img_people3} alt=""/>
                    <span>Rogerio Machado</span>
                </div>
            </article>
            <article className="stories">
                <img src={img_stories5} alt="" className="img-stories"/>
                <div className="stories-info">
                    <img className="img-stories-info" src={img_people4} alt=""/>
                    <span>Natalia Ferreira</span>
                </div>
            </article>
            <article className="stories">
                <img src={img_stories6} alt="" className="img-stories"/>
                <div className="stories-info">
                    <img className="img-stories-info" src={img_people5} alt=""/>
                    <span>Anderson Kennedy </span>
                </div>
            </article>
            <article className="stories">
                <img src={img_stories7} alt="" className="img-stories"/>
                <div className="stories-info">
                    <img className="img-stories-info" src={img_people6} alt=""/>
                    <span>Quissalo Samuel</span>
                </div>
            </article>
            <article className="stories">
                <img src={img_stories8} alt="" className="img-stories"/>
                <div className="stories-info">
                    <img className="img-stories-info" src={img_people7} alt=""/>
                    <span>Licinio Catento</span>
                </div>
            </article>
        </main>
        </div>
        </>
    )
}

export default Stories;