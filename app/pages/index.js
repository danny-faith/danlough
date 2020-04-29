import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Product from '../components/Product'

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)

const Index = (props) => {
    return (
        <div>
            {
                (props.ingredients) ? (
                    props.ingredients
                        .map((product) => (
                            <Product
                                key={product.id}
                                {...product}
                            />
                        )
                    )
                ) : 'soz'
            }
        </div>
    )
}

Index.getInitialProps = async function() {

    const res = await fetch('http://localhost:9000/hello');
    const data = await res.json();
    console.log('hello');

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
      ingredients: data.ingredients,
    };
};

export default Index;
