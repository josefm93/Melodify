import styled from "styled-components";
import { useState } from 'react';

import charts  from "../../assets/categories/charts.jpg"
import pop  from "../../assets/categories/pop.jpg"
import hiphop  from "../../assets/categories/hiphop.jpg"
import rock  from "../../assets/categories/rock.jpg"


const Category = () => {
    const [category, setCategory] = useState("");

    return (
        <StyledCategory>        
            <label className={category === "nature" && "checked"} onClick={() => setCategory("nature")}>
                <input type="radio" name="nature" value="nature1" checked />
                <img src={charts} alt="charts" />
            </label>

            <label className={category === "pop" && "checked"} onClick={() => setCategory("pop")}>
                <input type="radio" name="nature" value="nature2"/>
                <img src={pop} alt="pop" />

            </label>

            <label className={category === "rock" && "checked"} onClick={() => setCategory("rock")}>
                <input type="radio" name="nature" value="nature3"/>
                <img src={rock} alt="rock" />
            </label>

            <label className={category === "hip hop" && "checked"} onClick={() => setCategory("hip hop")}>
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

    label {
        margin-right: 2rem;
        filter: opacity(0.5);
        border-radius: 1.5rem;

        img {
            border-radius: 1.5rem;
        }

        &:hover {
            filter: opacity(1);
        }

        &.checked {
            filter: opacity(1);

            img {
                /* border: #3E625B solid 1rem; */
                filter: drop-shadow(10px 10px 4px #533B53);
            }
            
        }
    }

    img {
        width: 200px;
        height: 200px;
        margin-right: 20px;
    }
`

export default Category;