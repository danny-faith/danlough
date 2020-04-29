import styled from '@emotion/styled'
import theme from '../theme'
import LazyImage from './LazyImage'

const StyledProductPage = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: space-between;
    width: 100vw;
`

const StyledProductDetails = styled.div`
    padding-left: ${(props) => props.align === undefined ? theme.padding.base : '0'} ;
    padding-right: ${(props) => props.align === 'right' ? theme.padding.base : '0'} ;
    text-align: ${props => props.align === 'right' ? 'right': 'initial'};
    width: 20vw;

    h1 {
        font-size: 4rem;
        line-height: rem;
    }

    p {
        line-height: 1.1rem;

        span {
            display: block;
        }
    }
`

export default ({
    name,
    image,
    number,
    weight,
    production_location,
    cooking_time,
    price
}) => {
    return (
        <StyledProductPage>
            <StyledProductDetails>
                <h3>No.{number}</h3>
                <h1>{name}</h1>
            </StyledProductDetails>
            <LazyImage width="1000" height="1000" src={(image) ? `${image}` : '/static/default.png'} />
            <StyledProductDetails align="right">
                <p>
                    <span>{weight}g.</span>
                    <span>Made in {production_location}</span>
                    <span>Cooks in {cooking_time} minutes</span>
                    <span>£{(price / 100).toFixed(2)}</span>
                </p>
            </StyledProductDetails>
        </StyledProductPage>
    )
}
