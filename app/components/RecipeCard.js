import styled from '@emotion/styled'
import theme from '../theme'
import { boxShadow } from '../mixins'

const scaleAmount = 1.1
const recipeCardHeight = 400
const bezier = 'cubic-bezier(0.75, 0.25, 0.25, 0.75)'
const transitionDuration = '0.5s'
const transitionDelay = '0.3s'
const imageHeight = 250

const StyledRecipeCard = styled.div`
    background-color: white;
    background-image: url(/static/carbonara.jpg);
    background-position-x: center;
    background-position-y: 0px;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 5px;
    height: ${recipeCardHeight}px;
    margin: 0 7px;
    overflow: hidden;
    position: relative;
    transition:
        background-size ${transitionDuration} ${bezier} ${transitionDelay},
        box-shadow ${transitionDuration} ${bezier} ${transitionDelay},
        transform ${transitionDuration} ${bezier} ${transitionDelay},
        margin ${transitionDuration} ${bezier} ${transitionDelay};
    width: 290px;

    div.info {
        left: 30px;
        position: absolute;
        right: 30px;
        top: ${imageHeight + 20}px;
        z-index: 50;

        .category {
            display: block;
            font-size: 0.8rem;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
        }

        .title {
            display: block;
            font-size: 1.3rem;
            font-weight: bold;
            line-height: 1.5rem;
            margin: 8px 0;
        }

        .author {
            span {
                color: ${theme.colors.secondary}
            }
        }
    }

    &::after {
        background-color: ${theme.colors.siteBackground};
        content: '';
        display: block;
        height: 100%;
        opacity: 0;
        position: absolute;
        transition: opacity ${transitionDuration} ${bezier} ${transitionDelay};
        width: 100%;
        z-index: 20;
    }

    &:hover {
        background-position: center top;
        background-size: ${recipeCardHeight / 2}%;
        box-shadow: ${boxShadow};
        cursor: pointer;
        margin: 0 40px;
        transform: scaleY(${scaleAmount});

        p {
            transform: scaleY(${(1 / scaleAmount).toFixed(5)});
        }

        &::after {
            opacity: 0.9;
        }
    }
`

const RecipeCard = () => {
    return (
        <StyledRecipeCard>
            <div className="info">
                <span className="category">Recipe</span>
                <span className="title">Spaghetti all carbonara with guanciale</span>
                <span className="author">
                    Author
                    <span> Daniel Blythe</span>
                </span>
            </div>
        </StyledRecipeCard>
    )
}

export default RecipeCard
