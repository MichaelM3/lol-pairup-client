import React, { Component } from 'react';
import { connect } from 'react-redux'
import { viewedUser, changeLeagueAccount, addChampionToUser, addFriend, addFriendshipJoin, removeFriend ,removeFriendshipJoin } from '../actions/userActions'
import UserProfile from '../components/UserProfile'
import UserProfileForm from '../components/UserProfileForm'
import ChampionList from '../components/ChampionList'
import { Grid, Button, Modal, Header } from 'semantic-ui-react'
import { ENDPOINT_URL } from '../adapter'

class UserProfileContainer extends Component {

  state = {
    summonerName: "",
    summonerInfoForm: false,
  }

  fetchViewedProfile = () => {
    if (this.props.match.params.id) {
      fetch(`${ENDPOINT_URL}/api/v1/users/${this.props.match.params.id}`)
      .then(r => r.json())
      .then(response => {
        this.props.viewedUser(response)
      })
    }
  }

  componentDidMount() {
    this.fetchViewedProfile()
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params) {
      if (this.props.match.params.id !== prevProps.match.params.id) {
        this.fetchViewedProfile()
      }
    }
  }

  leagueAccountInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLeagueInfoSubmit = (event) => {
    event.preventDefault()
    fetch(`${ENDPOINT_URL}/api/v1/users/${this.props.currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: {
          league_account: this.state.summonerName,
          preffered_role: this.props.currentUser.preffered_role,
          off_role: this.props.currentUser.off_role
        }
      })
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert("Account does not exist or is taken")
      } else {
        this.props.changeLeagueAccount(response.league_account)
        this.fetchViewedProfile()
      }
    })
  }

  renderChampionsFromList = () => {
    return this.props.champions.map(champion => {
      return <ChampionList handleAddChampion={this.handleAddChampion} key={champion.id} champion={champion} />
    })
  }

  handleAddChampion = (championObj) => {
    let foundChamp = this.props.currentUser.champions.find(champion => {
      return champion.id === championObj.id
    })
    if (!foundChamp){
      fetch(`${ENDPOINT_URL}/champion_users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          champion_user: {
            user_id: this.props.currentUser.id,
            champion_id: championObj.id
          }
        })
      })
      .then(r => r.json())
      .then(response => {
        this.props.addChampionToUser(championObj)
        this.fetchViewedProfile()
      })
    }
  }

  handleForAddingOrRemovingFriend = () => {
    if (this.props.currentUser.friends.find(friend => friend.id === this.props.currentlyViewedUser.id)) {
      let foundFriendship = this.props.currentUser.friendships.find(friendship => {
        return (friendship.user_id === this.props.currentUser.id) && (friendship.friend_id === this.props.currentlyViewedUser.id)
      })
      fetch(`${ENDPOINT_URL}/api/v1/friendships/${foundFriendship.id}`, { method: "DELETE" })
      .then(
        this.props.removeFriend(this.props.currentlyViewedUser),
        this.props.removeFriendshipJoin(foundFriendship)
      )
    } else {
      fetch(`${ENDPOINT_URL}/api/v1/friendships`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          user_id: this.props.currentUser.id,
          friend_id: this.props.currentlyViewedUser.id
        })
      })
      .then(r => r.json())
      .then(response => {
        this.props.addFriend(this.props.currentlyViewedUser)
        this.props.addFriendshipJoin(response)
      })
    }
  }

  handleSummonerInfoButton = () => {
    this.setState({ summonerInfoForm: !this.state.summonerInfoForm })
  }

  render() {
    // console.log("Current user is:",this.props.currentUser, "Viewed user is:",this.props.currentlyViewedUser)
    return (
      <div className="profile" style={{height: "100%"}}>
        { (this.props.currentlyViewedUser && this.props.currentUser) &&
          <div>
            { (this.props.currentlyViewedUser.id === this.props.currentUser.id) ?
              <div>
                <UserProfileForm
                handleSummonerInfoButton={this.handleSummonerInfoButton}
                summonerInfoForm={this.state.summonerInfoForm}
                currentUser={this.props.currentUser}
                handleLeagueInfoSubmit={this.handleLeagueInfoSubmit}
                leagueAccountInputs={this.leagueAccountInputs}
                />
                <UserProfile
                  currentUser={this.props.currentUser}
                  currentlyViewedUser={this.props.currentlyViewedUser}
                />
                <Modal trigger={<Button style={{ verticalAlign: "bottom", marginBottom: "3%", marginLeft: "-56%" }}>Select a champion to display</Button>}>
                  <Modal.Content image>
                      <Header>Champion List</Header>
                      <Grid>
                        <Grid.Row columns={5}>
                          {this.renderChampionsFromList()}
                        </Grid.Row>
                      </Grid>
                  </Modal.Content>
                </Modal>
              </div>
              :
              <div>
                { (!this.props.currentUser.friends.find(friend => friend.id === this.props.currentlyViewedUser.id)) ?
                  <Button onClick={this.handleForAddingOrRemovingFriend} color="orange">Add Friend</Button>
                  :
                  <Button onClick={this.handleForAddingOrRemovingFriend} color="orange">Remove Friend</Button>
                }
                <UserProfile
                  currentUser={this.props.currentUser}
                  currentlyViewedUser={this.props.currentlyViewedUser}
                />
              </div>
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

export default connect(mapStateToProps, { viewedUser, changeLeagueAccount, addChampionToUser, addFriend, addFriendshipJoin, removeFriend ,removeFriendshipJoin })(UserProfileContainer);
