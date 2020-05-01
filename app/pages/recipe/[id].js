import fetch from 'isomorphic-unfetch';
import styled from '@emotion/styled'
import theme from '../../css/theme'
import { boxShadow } from '../../css/mixins'

const StyledRecipePage = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;

    .content {
        align-items: center;
        /* background-color: white; */
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        box-shadow: ${boxShadow};
        display: flex;
        justify-content: center;
        margin: ${theme.padding.base};
        width: max(70vw, 1200px);

        img {
            /* width: 50%; */
            /* transform: rotate(-30deg); */
        }

        .details {
            /* background-color: white; */
            margin-left: ${theme.padding.base};
            width: 500px;
            z-index:50;

            .description {
                margin-bottom: ${theme.padding.base}
            }
        }
    }
`

const StyledList = styled.ul`
    columns: ${(props) => (props.columns) ? props.columns : 1};
    padding-left: 1rem;

    li {
        line-height: 1.5rem;
        list-style: circle;
    }
`



const Recipe = props => (
    <StyledRecipePage>
        <div className="content">
            <img src="/static/carbonara-large.jpg" />
            <div className="details">
                <h1>{props.recipe}</h1>
                {/* <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p> */}
                <p className="description">{props.description}</p>
                <h3>Ingredients</h3>
                <StyledList columns={2}>
                    {props.ingredients
                        .map((ingredient) =>
                            (typeof ingredient === 'string')
                                ? <li>{ingredient}</li>
                                : <li>{ingredient.name}</li>
                        )
                    }
                </StyledList>
                <h3>Method</h3>
                <StyledList>
                    {props.method
                        .map((method) => <li>{method}</li>)
                    }
                </StyledList>
            </div>
        </div>
    </StyledRecipePage>
);

Recipe.getInitialProps = async function(context) {
    // console.log('context: ', context);
    // const { id } = context.query;
    // const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    // const show = await res.json();

    // console.log(`Fetched show: ${show.name}`);

    // return { show };
    return {
        recipe: 'Spaghetti alla Carbonara',
        ingredients: [
            'Freshly ground black pepper',
                {
                    name: 'Spaghetti',
                    url: 'spaghetti',
                },
            'Guanciale',
            'Pecorino Romano',
            'Parmigiano Reggiano',
            '1 whole egg, plus 3 egg yolks'
        ],
        image: {
            alt: 'Spaghetti alla Carbonara',
            url: '/static/carbonara-recipe.jpg',
        },
        method: [
            'Method step 1 lorem ipsum dolor sect amet',
            'Method step 2 lorem ipsum dolor sect amet',
            'Method step 3 lorem ipsum dolor sect amet',
            'Method step 4 lorem ipsum dolor sect amet',
        ],
        serves: 2,
        description: 'Description lorem ipsum dolor sect amet'
    }
};

export default Recipe;
