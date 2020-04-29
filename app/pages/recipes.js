import { useRouter } from 'next/router';
import styled from '@emotion/styled'
import RecipeCard from '../components/RecipeCard';

const StyledRecipeCards = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`

const Recipes = () => {
  const router = useRouter();

  return (
    <StyledRecipeCards>
        {/* <h1>{router.query.title}</h1> */}
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
    </StyledRecipeCards>
  );
};

export default Recipes;
