import React from 'react'
import { Button, Form, Dropdown, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { primaryRoleChange, offRoleChange } from '../actions/userActions'

const UserProfileForm = props => {

  const options = [
    { key: 'top', text: 'Top', value: 'top' },
    { key: 'jungle', text: 'Jungle', value: 'jungle' },
    { key: 'mid', text: 'Mid', value: 'mid' },
    { key: 'adc', text: 'ADC', value: 'adc' },
    { key: 'support', text: 'Support', value: 'support' }
  ]

  const getRole = (event, value) => {
    let role = event.target.textContent
    if (value.placeholder === "Preffered Role") {
      props.primaryRoleChange(role)
    } else if (value.placeholder === "Off Role") {
      props.offRoleChange(role)
    }
  }

  return (
    <div>
    { !props.summonerInfoForm ?
      <Button style={{ marginRight: "350px" }} onClick={props.handleSummonerInfoButton}>Update info</Button>
      :
      <Form onSubmit={props.handleLeagueInfoSubmit}>
        <Button color="blue" type="Submit">Update</Button>
        <Button color="red" onClick={props.handleSummonerInfoButton}>Close</Button>
        <Input
          onChange={props.leagueAccountInputs}
          type="text"
          name="summonerName"
          placeholder="Change Summoner Name"
        />
        <Dropdown placeholder='Preffered Role' selection options={options} onChange={getRole} />
        <Dropdown placeholder='Off Role' selection options={options} onChange={getRole} />
      </Form>
    }
    </div>
  )

}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps, { primaryRoleChange, offRoleChange })(UserProfileForm);
