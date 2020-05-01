import Link from 'next/link'
import styled from '@emotion/styled'
import theme from '../css/theme'
import { boxShadow } from '../css/mixins'

const scaleAmount = 1.1
const recipeCardHeight = 400
const bezier = 'cubic-bezier(0.75, 0.25, 0.25, 0.75)'
const transitionDuration = '0.5s'
const transitionDelay = '0.3s'
const imageHeight = 250

const StyledRecipeCard = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
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

    & > a {
        color: ${theme.colors.primary};
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 100;
    }

    div.info {
        left: 30px;
        position: absolute;
        right: 30px;
        top: ${imageHeight + 20}px;

        .category {
            color: ${theme.colors.secondary};
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
                color: ${theme.colors.accent}
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
        top: 0;
        transition: opacity ${transitionDuration} ${bezier} ${transitionDelay};
        width: 100%;
        z-index: 50;
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
            <Link href="/recipe/spaghetti-alla-carbonara">
                <a>
                    <div className="info">
                        <span className="category">Recipe</span>
                        <span className="title">Spaghetti all carbonara with guanciale</span>
                        <span className="author">
                            Author
                            <span> Daniel Blythe</span>
                        </span>
                    </div>
                </a>
            </Link>
        </StyledRecipeCard>
    )
}

export default RecipeCard
