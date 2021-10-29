import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const Cardreci = ({el,handleClick}) => {
    return (
        <div style={{margin:10}}>
           <Card>
    <Image src={el.recipe.image} alt={el.recipe.label} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{el.recipe.label}</Card.Header>
      <Card.Meta>
        <span className='date'>calories: {Math.ceil(el.recipe.calories)}</span>
      </Card.Meta>
      <Card.Description>
        <ul>{el.recipe.ingredientLines.map((el,i)=><li key={i}>{el}</li>)}</ul>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Button inverted color='pink' onClick={()=>handleClick(el.recipe.label)}>
        Title
      </Button>
    </Card.Content>
  </Card>
           </div>
    )
}

export default Cardreci
