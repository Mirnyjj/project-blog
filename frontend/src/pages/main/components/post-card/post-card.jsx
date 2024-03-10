import { styled } from "styled-components";
import { Icon } from "../../../../components";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const PostCardContainer = ({className, id, title, imageUrl, publishedAt, commentsCount}) => {
    return (
        <div className={className}>
            <NavLink to={`/post/${id}`}>
            <img src={imageUrl} alt={title} />
            <div className="post-card-footer">
                <h4>{title}</h4>
                <div className="post-card-info">
                <div className="published-at">
                    <Icon 
                    inactive={true}
                    id="fa-calendar-o" 
                    margin="0 8px 0 0"
                    size="18px"
                    />
                    {publishedAt}
                </div>
                <div className="comments-count">
                <Icon 
                    inactive={true}
                    id="fa-comment-o" 
                    margin="0 8px 0 0"
                    size="18px"
                    />
                    {commentsCount}
                </div>
                </div>
            </div>
            </NavLink>
        </div>
    )
};


export const PostCard = styled(PostCardContainer)`
    display: flex;
    flex-direction: column;
    width: 280px;
    margin: 20px;
    border: 1px solid #000;
    & img {
        width: 100%;
        display: block;
    }
    & h4 {
        margin: 0;
    }
    & .post-card-footer {
        padding: 5px;
        border-top: 1px solid #000;

    }
    & .post-card-info {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
    }
    & .published-at {
        display: flex;
    }
    & .comments-count {
        display: flex;
    }

`;

PostCard.propTypes = {
    id: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    imageUrl: PropTypes.string.isRequired, 
    publishedAt: PropTypes.string.isRequired, 
    commentsCount: PropTypes.number.isRequired
}