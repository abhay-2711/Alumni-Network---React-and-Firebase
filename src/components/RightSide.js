import styled from "styled-components";
import React from "react";
import feedIcon from "../images/feed-icon.svg";
import HashTag from "../images/hashtag.svg";
import rightIcon from "../images/right-icon.svg";
import moreJobs from "../images/more-jobs.png";

const RightSide=(props) => {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your feed</h2>
                    <img src={feedIcon} alt="" />
                </Title>
                <FeedList>
                    <li>
                        <a>
                            <Avatar style={{backgroundImage:`url(${HashTag})`}} />
                        </a>
                        <div>
                            <span>#Alumni Network</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                        <Avatar style={{backgroundImage:`url(${HashTag})`}} />
                        </a>
                        <div>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </FeedList>
                <Recommendation>View all recommendation
                <img src={rightIcon} alt="" />
                </Recommendation>
            </FollowCard>
            <BannerCard>
                <img src={moreJobs} alt="" />
            </BannerCard>
        </Container>
    );
}

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default RightSide;