import { styled } from "styled-components";
import { Icon, Input } from "../../../../components";
import PropTypes from 'prop-types';

const SearchContainer = ({className, searchPhrase, onChange}) => {
    
    return (
        <div className={className}>
            <Input value={searchPhrase} placeholder="Поиск по заголовкам..." onChange={onChange}/>
            <Icon 
                    inactive={true}
                    id="fa-search" 
                    size="21px"
                    />
        </div>

    )
    
};

export const Search = styled(SearchContainer)`
    display: flex;
    position: relative;
    width: 340px;
    height: 40px;
    margin: 40px auto 0;
    & > input {
        padding: 10px 35px 10px 15px;
    }
    & > div {
        position: absolute;
        top: 3px;
        right: 10px;
    }
`;

Search.propTypes = {
    searchPhrase: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}