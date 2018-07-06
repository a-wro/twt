import React from 'react'
import { connect } from 'react-redux'
import { tweet, fetchTweets, search } from '../actions';
import TweetForm from '../forms/tweetForm';
import SearchBar from '../forms/searchBar';


class Tweets extends React.Component {
    componentDidMount = () => {
        this.props.fetchTweets()
    }

    submit = ({ text }) => {
        this.props.tweet(text)
    }

    submitSearch = ({ keyword }) => {
        if (!keyword) {                 //reset
            keyword = ''
        }
        this.props.search(keyword)
    }
    
    render() {
        const { tweets } = this.props
        if (!tweets) {
            return <div> Loading... </div>
        }
    
        return (
            <div>

                <SearchBar onSubmit={this.submitSearch}/>

                <div>
                    <TweetForm onSubmit={this.submit} />
                </div>

                <div>
                    {tweets.map(elem => {
                        return (
                            <div key={elem.id}>
                                {elem.text}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

const filterTweets = (tweets, keyword) => {
    const { data } = tweets
    if (data) {
        return data.filter(tweet => {
             return tweet.text.includes(keyword)
        })
    }
}

const mapStateToProps = (state) => {
    return {
        searchKeyword: state.search,
        tweets: filterTweets(state.tweets, state.search),
        
    }
}


export default connect(mapStateToProps, { tweet, fetchTweets, search })(Tweets)