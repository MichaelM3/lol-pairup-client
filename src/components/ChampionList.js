import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const ChampionList = props => {



  return (
    <Grid.Column>
      <Image onClick={() => props.handleAddChampion(props.champion)} src={props.champion.img} />
    </Grid.Column>
  )
}

export default ChampionList;
