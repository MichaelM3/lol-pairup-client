import React, { Component } from 'react';
import { connect } from 'react-redux'
import { viewedUser, changeLeagueAccount } from '../actions/userActions'
import UserProfile from '../components/UserProfile'
import UserProfileForm from '../components/UserProfileForm'
import ChampionList from '../components/ChampionList'
import { Grid, Button, Modal, Header, Icon } from 'semantic-ui-react'
import { allChampions } from '../actions/championActions'

class UserProfileContainer extends Component {

  state = {
    summonerName: "",
  }

  fetchViewedProfile = () => {
    if (this.props.match.params.id) {
      fetch(`http://localhost:3000/api/v1/users/${this.props.match.params.id}`)
      .then(r => r.json())
      .then(response => {
        this.props.viewedUser(response)
      })
    }
  }

  componentDidMount() {
    this.fetchViewedProfile()
    this.displayChampionList()
  }

  // componentDidUpdate() {
  //   console.log(this.props.currentlyViewedUser)
  //   let myBoolean=(parseInt(this.props.match.params.id) !== this.props.currentlyViewedUser.id)
    // console.log(myBoolean)
    // if (myBoolean) {
    //   console.log("Hello!")
    //   // this.fetchViewedProfile()
    //   // this.displayChampionList()
    // }
    // console.log(this.props.match.params.id !== this.props.currentlyViewedUser.id)
  // }

  leagueAccountInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLeagueInfoSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: {
          league_account: this.state.summonerName
        }
      })
    })
    .then(r => r.json())
    .then(response => {
      if (response.errors) {
        alert("Account does not exist or is taken")
      } else {
        this.props.changeLeagueAccount(response.league_account)
      }
    })
  }

  displayChampionList = () => {
    fetch("http://localhost:3000/champions")
    .then(r => r.json())
    .then(response => {
      this.props.allChampions(response)
    })
  }

  renderChampionsFromList = () => {
    return this.props.champions.map(champion => {
      return <ChampionList handleAddChampion={this.handleAddChampion} key={champion.id} champion={champion} />
    })
  }

  handleAddChampion = (championObj) => {
    console.log(championObj)
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <div>
        { (this.props.currentlyViewedUser && this.props.currentUser) &&
          <div>
            { (this.props.currentlyViewedUser.id === this.props.currentUser.id) ?
              <div>
                <UserProfile
                  currentUser={this.props.currentUser}
                  currentlyViewedUser={this.props.currentlyViewedUser}
                />
                <UserProfileForm
                  currentUser={this.props.currentUser}
                  handleLeagueInfoSubmit={this.handleLeagueInfoSubmit}
                  leagueAccountInputs={this.leagueAccountInputs}
                />
                <Modal trigger={<Button>Select Top 3 Champions</Button>}>
                  <Modal.Content image>
                      <Header>Champion List</Header>
                      <Grid>
                        <Grid.Row columns={5}>
                          {this.renderChampionsFromList()}
                        </Grid.Row>
                      </Grid>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button primary>
                      Proceed <Icon name='right chevron' />
                    </Button>
                  </Modal.Actions>
                </Modal>
              </div>
              :
              <UserProfile
                currentUser={this.props.currentUser}
                currentlyViewedUser={this.props.currentlyViewedUser}
              />
            }
          </div>
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    currentlyViewedUser: state.user.currentlyViewedUser,
    champions: state.champion.champions
  }
}

export default connect(mapStateToProps, { viewedUser, changeLeagueAccount, allChampions })(UserProfileContainer);
