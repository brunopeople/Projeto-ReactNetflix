import {InfoOutlined, PlayArrow} from "@material-ui/icons";
import "./featured.scss";

export default function Featuread({ type }){
    return(
        <div className="featuread">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Gênero</option>
                        <option value="adventure">Aventura</option>
                        <option value="comedy">Comédia</option>
                        <option value="crime">Crime</option>
                        <option value="historical">Historico</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animacao</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentário</option>
                    </select>
                </div>
            )}

            <img 
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />

            <div className="info">
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt=""
                />

                <span className="desc">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                     adipisci repellendus eum quasi illo, velit numquam, maxime tempora
                     sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
                     temporibus eum earum?
                </span>

                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Iniciar</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Informações</span>
                    </button>
                </div>
            </div>
        </div>
    );
}