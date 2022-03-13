import styled from "styled-components";

import charts  from "../../assets/categories/charts.jpg"
import pop  from "../../assets/categories/pop.jpg"
import hiphop  from "../../assets/categories/hiphop.jpg"
import rock  from "../../assets/categories/rock.jpg"


const Category = () => {

    return (
        <StyledCategory>        
            <label>
                <input type="radio" name="nature" value="nature1" checked />
                <img src={charts} alt="charts" />
            </label>

            <label>
                <input type="radio" name="nature" value="nature2"/>
                <img src={pop} alt="pop" />

            </label>

            <label>
                <input type="radio" name="nature" value="nature3"/>
                <img src={rock} alt="rock" />
            </label>

            <label>
                <input type="radio" name="nature" value="nature3"/>
                <img src={hiphop} alt="hip hop" />
            </label>
        </StyledCategory>
    );
};

const StyledCategory = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    [type=radio] {
        position: absolute;
        opacity: 0;
    }
    [type=radio]+img {
        cursor: pointer;
        margin-right: 0.5rem;
    }
    img {
        width: 200px;
        height: 200px;
        margin-right: 20px;
    }
`

export default Category;